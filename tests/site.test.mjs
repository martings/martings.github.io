import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const data=JSON.parse(await fs.readFile(path.join(root,'content/site.json'),'utf8'));
async function files(dir){let result=[];for(const entry of await fs.readdir(dir,{withFileTypes:true})){if(['.git','node_modules','.preview','review'].includes(entry.name))continue;const file=path.join(dir,entry.name);if(entry.isDirectory())result.push(...await files(file));else result.push(file);}return result;}
test('Both locales have matching translation keys and complete content',()=>{assert.deepEqual(Object.keys(data.en).sort(),Object.keys(data.es).sort());for(const locale of ['en','es']){for(const [key,value] of Object.entries(data[locale]))assert.ok(value.length>0,key);for(const project of data.projects)assert.ok(project[locale]);}assert.equal(data.publications.length,5);assert.ok(data.projects.length>0);});
test('All generated local links, assets and fragment targets resolve',async()=>{for(const file of (await files(root)).filter(f=>f.endsWith('.html'))){const html=await fs.readFile(file,'utf8');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,file+' duplicate ids');for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){const value=match[1];if(/^(https?:|mailto:|data:)/.test(value))continue;const url=new URL(value,'https://local/'+path.relative(root,file).split(path.sep).join('/'));let target=path.join(root,decodeURIComponent(url.pathname));if(url.pathname.endsWith('/'))target=path.join(target,'index.html');await fs.access(target).catch(()=>assert.fail(file+' missing '+value));if(url.hash&&target.endsWith('.html'))assert.ok((await fs.readFile(target,'utf8')).includes('id="'+url.hash.slice(1)+'"'),file+' missing fragment '+value);}}});
test('Static pages carry language, canonical and accessible landmarks without client rendering',async()=>{for(const [locale,file] of [['en','index.html'],['es','es/index.html']]){const html=await fs.readFile(path.join(root,file),'utf8');assert.ok(html.includes('<html lang="'+locale+'">'));assert.equal((html.match(/<h1>/g)||[]).length,1);for(const id of ['home','research','projects','publications','teaching','about'])assert.ok(html.includes('id="'+id+'"'));for(const marker of ['rel="canonical"','hreflang="en"','hreflang="es"','application/ld+json','class="skip-link"','aria-expanded="false"','loading="lazy"'])assert.ok(html.includes(marker));for(const p of data.projects)assert.ok(html.includes('https://github.com/'+p.repo));for(const p of data.publications)assert.ok(html.includes('https://doi.org/'+p.doi));}});
test('Migration stubs preserve old URLs and known broken aliases',async()=>{for(const file of ['bio.html','experiencia.html','publicaciones.html','consultoria.html','en/index_en.html','en/bio_en.html','en/experience_en.html','en/experiencia_en.html','en/publicaciones_en.html','en/publications_en.html']){const html=await fs.readFile(path.join(root,file),'utf8');assert.ok(html.includes('http-equiv="refresh"'));assert.ok(html.includes('<a href='));assert.ok(html.includes('noindex'));}});
test('Public source has no unresolved conflict markers or placeholder links',async()=>{for(const file of (await files(root)).filter(f=>/\.(html|css|js|mjs|json)$/.test(f))){const text=await fs.readFile(file,'utf8');assert.ok(!/^(<{7}|={7}|>{7})/m.test(text),file);assert.ok(!/href="(?:#|https:\/\/10\.)"/.test(text),file);}});

test('Project groups cover each project once and provide bilingual evidence links',async()=>{
 const ids=data.projects.map(project=>project.id);
 assert.equal(new Set(ids).size,ids.length,'project IDs must be unique');
 const grouped=[data.featuredProject,...data.projectGroups.flatMap(group=>group.projects)];
 assert.equal(new Set(grouped).size,grouped.length,'a project must not be repeated');
 assert.deepEqual([...grouped].sort(),[...ids].sort(),'no orphan or unknown projects');
 for(const group of data.projectGroups)for(const locale of ['en','es'])for(const key of ['title','intro'])assert.ok(group[locale][key].trim());
 for(const project of data.projects)for(const resource of project.resources||[]){assert.equal(new URL(resource.url).protocol,'https:');assert.ok(resource.en.trim());assert.ok(resource.es.trim());}
 for(const [locale,file] of [['en','index.html'],['es','es/index.html']]){
  const html=await fs.readFile(path.join(root,file),'utf8');
  for(const group of data.projectGroups)assert.ok(html.includes('id="'+group.id+'"'));
  for(const project of data.projects){if(project.id!==data.featuredProject)assert.ok(html.includes('id="project-'+project.id+'"'));for(const resource of project.resources||[])assert.ok(html.includes(resource.url));}
  assert.ok(html.includes('https://github.com/martings/UTRNNet'));
  for(const resource of data[locale].learningResources)assert.ok(html.includes(resource.url));
 }
});
