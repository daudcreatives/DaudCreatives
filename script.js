/* ===== EDIT THIS SECTION ===== */
const CONFIG={whatsapp:"923235651420",email:"daudcreatives@gmail.com",social:{Instagram:"https://www.instagram.com/daud_creatives/",Facebook:"https://www.facebook.com/DaudCreatives",YouTube:"https://youtube.com/@daud_creatives"}};
// Real photos: add a file to assets/ and map it by card title, e.g. "Visiting Cards":"assets/visiting-cards.webp". Cards without a photo show a concept mockup.
const IMG={};
const PRINT=[["Visiting Cards","Premium business cards","card"],["Bill Books","Custom printed bill books","bill"],["Flyers","Promotional flyers","flyer"],["Boards","Front light, back light, 3D and illuminated shop signs","backlit"],["Flex Printing","China flex and star flex banners","flex"],["Packing Boxes","Custom packaging boxes","box"],["Cash Memos","Business cash memo books","memo"],["Brochures","Folded promotional brochures","print"],["Fee Cards","Clear, practical fee cards","fee"],["Wedding Cards","Shadi and wedding invitation cards","wedding"],["Stickers","Stickers and labels","sticker"],["Pamphlets","Pamphlets for promotion","pamphlet"]];
const DIGI=[["Social Media Handling","Content planning, posting and page care","social"],["WordPress Websites","Fast, responsive business websites","web"],["Shopify Stores","Online stores ready to sell","shop"],["WooCommerce Stores","Flexible stores on WordPress","woo"],["POS Software","Point-of-sale system for billing and sales","pos"],["UI/UX Website Design","Clean layouts people enjoy using","app"],["Professional Logo Design","All types of professional logos available","brand"],["Video Editing","Promos, reels and short videos","video"],["Voice-over","Clear voice for your videos and ads","mic"],["Content Creation","Creative content for your brand","content"],["SEO","On-page and technical foundations","seo"],["Social Ads & Marketing Creatives","Campaign visuals and ad creatives","ads"]];
const ACC=[["Gaming Chairs","Comfortable chairs for your setup","chair"],["Gaming Tables","Desks for gaming and work","table"],["LCDs & Monitors","Screens for work and play","lcd"],["Mouse, Keyboards & Webcams","Everyday computer accessories","periph"]];
const PROJECTS=[
  // Websites & E-Commerce
  {title:"Business Website",cat:"Websites & E-Commerce",kind:"web",desc:"A clean, conversion-focused business site layout."},
  {title:"Online Store",cat:"Websites & E-Commerce",kind:"shop",desc:"A store layout built for easy browsing and checkout."},
  {title:"POS Dashboard",cat:"Websites & E-Commerce",kind:"pos",desc:"A billing and sales screen concept for shops."},

  // UI/UX Design
  {title:"App Interface",cat:"UI/UX Design",kind:"app",desc:"A responsive interface study from mobile to desktop."},

  // Graphic Design
  {title:"Brand Identity",cat:"Graphic Design",kind:"brand",desc:"Color system, type and building blocks of a brand."},

  // Social Media
  {title:"Social Campaign",cat:"Social Media",kind:"social",desc:"A visual content grid built for consistent publishing."},
  {title:"Voice-over",cat:"Social Media",kind:"mic",desc:"Professional voice-over for videos, reels and advertisements."},
  {title:"Content Creation",cat:"Social Media",kind:"content",desc:"Creative content developed for social media platforms."},
  {title:"Social Ads & Marketing Creatives",cat:"Social Media",kind:"ads",desc:"Creative advertising visuals and marketing campaigns."},

  // Video Editing
  {title:"Short-Form Video",cat:"Video Editing",kind:"video",desc:"Promo edit concept built around pacing and captions."},

  // Printing
  {title:"Packaging Box",cat:"Printing",kind:"box",desc:"A custom packaging box concept."},
  {title:"Flex Printing",cat:"Printing",kind:"flex",desc:"Custom flex banners and promotional printing."},
  {title:"Visiting Cards",cat:"Printing",kind:"card",desc:"Premium professional business card designs."},
  {title:"Flyers",cat:"Printing",kind:"flyer",desc:"Creative promotional flyers and advertising materials."},
  {title:"Stickers",cat:"Printing",kind:"sticker",desc:"Custom printed stickers and product labels."},
  {title:"Boards",cat:"Printing",kind:"backlit",desc:"Front-lit, back-lit and 3D advertising boards."}
];
const POLICY=[["FULL ADVANCE","Full Attention","Full payment in advance. Your project gets priority scheduling and dedicated attention."],["50% ADVANCE","Half Attention","Work begins after a 50% advance. The remaining 50% is paid before final delivery or production release."],["NO ADVANCE","No Attention","Work is not scheduled or started without an agreed advance payment."],["APPROVAL FIRST","Artwork & Specs","Final printing starts only after artwork, specifications and payment are approved. Special arrangements are mutually agreed."]];
const STEPS=[["Share requirements","Tell us what you need, your goals and timeline."],["Concept and scope","We agree on direction, deliverables and pricing."],["Design and review","You review concepts and request refinements."],["Approve and deliver","Final files are delivered. Production starts after approval."]];
/* ===== END EDIT SECTION ===== */
const $=s=>document.querySelector(s),E=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!==undefined)e.innerHTML=h;return e};
const wa=`https://wa.me/${CONFIG.whatsapp}`,ml=`mailto:${CONFIG.email}`;
const q=s=>wa+"?text="+encodeURIComponent(`Hi Daud Creatives, I'd like a quotation for: ${s}. Please share the details.`);
const B="#1f4fe0",N="#0d1b3d",L="#cdd8f6",P="#e8eefe",W="#fff",G="#54607f";
const R=(x,y,w,h,f,r=6,x2="")=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${f}" ${x2}/>`;
const T=(x,y,s,f,t,w=800)=>`<text x="${x}" y="${y}" font-family="system-ui,sans-serif" font-size="${s}" font-weight="${w}" text-anchor="middle" fill="${f}">${t}</text>`;
const O=(x,y,r,f,x2="")=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${x2}/>`;
const grid=f=>{let s="";for(let i=0;i<3;i++)for(let j=0;j<2;j++)s+=f(i,j);return s};
const S=`stroke="${L}"`,doc=(t,c)=>R(110,28,180,194,W,8,S)+R(110,28,180,46,c,8)+T(200,58,20,W,t)+R(126,92,120,8,L,4)+R(126,110,148,8,L,4)+R(126,128,100,8,L,4)+R(126,176,60,22,c,6);
/* ===== ONLY REAL IMAGE LOADER FOR CARDS (NO STYLE CHANGE) ===== */
const ART = {
  // Digital & Development Section Keys
  "Social Media Handling": "social",
  "WordPress Websites": "web",
  "Shopify Stores": "shop",
  "WooCommerce Stores": "woo",
  "POS Software": "pos",
  "UI/UX Website Design": "app",
  "Graphic Design": "brand",
  "Video Editing": "video",
  "Voice-over": "mic",
  "Content Creation": "content",
  "SEO": "seo",
  "Social Ads & Marketing Creatives": "ads",

  // Printing & Signage Section Keys
  "Visiting Cards": "card",
  "Bill Books": "bill",
  "Flyers": "flyer",
  "Boards": "backlit",
  "Flex Printing": "flex",
  "Packing Boxes": "box",
  "Cash Memos": "memo",
  "Brochures": "print",
  "Fee Cards": "fee",
  "Wedding Cards": "wedding",
  "Stickers": "sticker",
  "Pamphlets": "pamphlet",

  // Computer Accessories Section Keys
  "Gaming Chairs": "chair",
  "Gaming Tables": "table",
  "LCDs & Monitors": "lcd",
  "Mouse, Keyboards & Webcams": "periph",

  // Direct Mockup Mapping Keys
  web: "web", shop: "shop", woo: "woo", pos: "pos", app: "app", brand: "brand", 
  video: "video", social: "social", mic: "mic", content: "content", seo: "seo", ads: "ads",
  flex: "flex", backlit: "backlit", print: "print", card: "card", bill: "bill", 
  memo: "memo", fee: "fee", pamphlet: "pamphlet", flyer: "flyer", box: "box", 
  wedding: "wedding", sticker: "sticker", chair: "chair", table: "table", lcd: "lcd", periph: "periph"
};

// Pure layout design ko secure rakh ke direct images target karne ka code
const art = (k, l) => {
  const file = ART[k] || ART[l] || k;
  return `<img src="assets/services/${file}.png" alt="${l}" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; border-radius:12px;">`;
};

const gc=(t,d,k,n)=>{const c=E("article","gc glass",`<div class="art">${IMG[t]?`<img src="${IMG[t]}" alt="${t}" loading="lazy" width="800" height="500">`:art(k,t+" concept mockup")}</div><div class="gb"><h3>${t}</h3><p>${d}</p><a class="qb" href="${q(t)}" target="_blank" rel="noopener">Get a Quote</a></div>`);c.dataset.reveal="";c.style.setProperty("--i",n%4);return c};
PRINT.forEach((x,n)=>$("#pg").append(gc(...x,n)));DIGI.forEach((x,n)=>$("#dg").append(gc(...x,n)));ACC.forEach((x,n)=>$("#ac").append(gc(...x,n)));
PROJECTS.forEach((p,n)=>{const c=E("article","gc glass",`<div class="art">${p.image?`<img src="${p.image}" alt="${p.title}" loading="lazy" width="800" height="500">`:art(p.kind,p.title+" concept mockup")}</div><div class="gb"><h3>${p.title}</h3><p>${p.desc}</p><span class="tag">${p.client?"Client project":"Concept Project"}</span>${p.live?` <a class="tag" href="${p.live}" target="_blank" rel="noopener">View live</a>`:""}</div>`);c.dataset.cat=p.cat;c.dataset.kind=p.kind;c.dataset.reveal="";c.style.setProperty("--i",n%4);$("#proj").append(c)});
const PI=["M5 13l4 4L19 7","M12 3a9 9 0 1 0 0 18V3z","M6 6l12 12M18 6L6 18","M5 4h14v16H5zM9 9h6M9 13h6"];
POLICY.forEach(([k,t,d],n)=>{const c=E("article","glass",`<span class="pi"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${PI[n]}"/></svg></span><span class="pk">${k}</span><h3>${t}</h3><p>${d}</p>`);c.dataset.reveal="";c.style.setProperty("--i",n);$("#pl").append(c)});
STEPS.forEach(([t,d],n)=>{const c=E("article","glass",`<span class="pk">0${n+1}</span><h3>${t}</h3><p style="margin:0;color:var(--mute);font-size:.95rem">${d}</p>`);c.style.padding="1.5rem";c.dataset.reveal="";c.style.setProperty("--i",n);$("#steps").append(c)});
document.querySelectorAll("[data-art]").forEach(e=>e.innerHTML=art(e.dataset.art,""));
const cats=["All",...new Set(PROJECTS.map(p=>p.cat))];
cats.forEach((c,i)=>{const b=E("button","",c);b.type="button";b.setAttribute("aria-pressed",i==0);b.onclick=()=>{const pj=$("#proj");pj.classList.remove("flt");void pj.offsetWidth;pj.classList.add("flt");b.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"});document.querySelectorAll("#chips button").forEach(x=>x.setAttribute("aria-pressed",x===b));document.querySelectorAll("#proj .gc").forEach(x=>x.hidden=c!=="All"&&x.dataset.cat!==c)};$("#chips").append(b)});
const PN=new Set(PRINT.map(x=>x[0])),sel=$("#sel");sel.append(new Option("Select a service",""));[...PRINT,...DIGI,...ACC].forEach(x=>sel.append(new Option(x[0],x[0])));sel.append(new Option("Not sure yet","Not sure yet"));
sel.onchange=()=>$("#pf").hidden=!PN.has(sel.value);
Object.entries(CONFIG.social).forEach(([n,u])=>{if(u)$("#social").append(E("li","",`<a href="${u}" target="_blank" rel="noopener noreferrer">${n}</a>`))});
$("#yr").textContent=new Date().getFullYear();
$("#wa-link").href=wa;$("#wa-link").target="_blank";$("#wa-link").rel="noopener";$("#mail-link").href=ml;[["ig-link","Instagram"],["fb-link","Facebook"],["yt-link","YouTube"]].forEach(([i,n])=>{const a=$("#"+i);a.href=CONFIG.social[n];a.target="_blank";a.rel="noopener noreferrer"});
const nav=$("#nav"),mb=$(".menu"),setNav=o=>{nav.classList.toggle("open",o);mb.setAttribute("aria-expanded",o)};
mb.onclick=()=>setNav(!nav.classList.contains("open"));nav.onclick=e=>{if(e.target.tagName==="A")setNav(false)};addEventListener("keydown",e=>{if(e.key==="Escape")setNav(false)});
function msg(){const f=$("#form"),n=f.name.value.trim(),c=f.contact.value.trim(),d=f.details.value.trim(),s=f.service.value,st=$("#st");st.className="st";
 if(!n||!c||!s||!d){st.textContent="Please fill in your name, contact, service and project details.";return null}
 st.textContent="Opening your message... if nothing opens, use the direct contact links.";st.className="st ok";
 let x=`Hi Daud Creatives, I'm ${n}.\nContact: ${c}\nService: ${s}`;
 if(!$("#pf").hidden)[["qty","Quantity"],["size","Size"],["mat","Material/type"],["sides","Sides"],["dlv","Delivery/Collection"]].forEach(([k,l])=>{const v=f[k].value.trim();if(v)x+=`\n${l}: ${v}`});
 return x+`\nProject details: ${d}`}
$("#send-wa").onclick=()=>{const m=msg();if(m)window.open(wa+"?text="+encodeURIComponent(m),"_blank","noopener")};
$("#send-mail").onclick=()=>{const m=msg();if(m)location.href=ml+"?subject="+encodeURIComponent("Quotation inquiry: "+$("#form").service.value)+"&body="+encodeURIComponent(m)};
const hdr=$("#hdr"),tb=$("#top-btn");addEventListener("scroll",()=>{hdr.classList.toggle("s",scrollY>10);tb.classList.toggle("on",scrollY>600)},{passive:true});
tb.onclick=()=>scrollTo({top:0});
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
if(!rm)document.addEventListener("pointermove",e=>{const g=e.target.closest&&e.target.closest(".glass");if(g){const b=g.getBoundingClientRect();g.style.setProperty("--gx",(e.clientX-b.left)+"px");g.style.setProperty("--gy",(e.clientY-b.top)+"px")}},{passive:true});
if(!rm&&"IntersectionObserver"in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll("[data-reveal]").forEach(e=>io.observe(e))}else document.querySelectorAll("[data-reveal]").forEach(e=>e.classList.add("in"));

/* ===== Image lightbox (click any card or hero image) ===== */
(()=>{
const GAL={"Bill Books":"Bill Books & Cash Memos","Cash Memos":"Bill Books & Cash Memos","Flyers":"Flyers & Brochures","Brochures":"Flyers & Brochures","Pamphlets":"Flyers & Brochures","Boards":"Front Light & Back Light Boards","Packing Boxes":"Packaging Boxes","WordPress Websites":"Website Development","Shopify Stores":"Website Development","WooCommerce Stores":"Website Development","POS Software":"Website Development","UI/UX Website Design":"UI/UX Design","Professional Logo Design":"Graphic Design","Social Media Handling":"Social Media Designs","Social Ads & Marketing Creatives":"Social Media Designs"};
const KG={web:"Website Development",shop:"Website Development",pos:"Website Development",app:"UI/UX Design",brand:"Graphic Design",social:"Social Media Designs",video:"Video Editing",box:"Packaging Boxes"};
const tag=(m,t,g,s)=>{m.dataset.lb="";m.dataset.title=t;m.dataset.gal=g;m.dataset.sec=s;m.tabIndex=0;m.setAttribute("role","button");m.setAttribute("aria-label","Enlarge image: "+t)};
document.querySelectorAll(".gc").forEach(c=>{const m=c.querySelector(".art img");if(!m)return;const t=c.querySelector("h3").textContent,s=c.closest("section").id;tag(m,t,s==="work"?(KG[c.dataset.kind]||"Portfolio"):(GAL[t]||t),s)});
document.querySelectorAll(".stage img").forEach(m=>tag(m,m.alt,"Featured Work","top"));
addEventListener("error",e=>{const m=e.target;if(m.tagName==="IMG"&&m.dataset&&"lb"in m.dataset){const d=E("div","noimg","Image coming soon");d.setAttribute("role","img");d.setAttribute("aria-label",m.alt);m.replaceWith(d)}},true);
const ic=p=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${p}"/></svg>`;
const lb=E("div","lb",`<button type="button" class="lb-b lb-x" aria-label="Close preview">${ic("M6 6l12 12M18 6L6 18")}</button><span class="lb-c" aria-live="polite"></span><button type="button" class="lb-b lb-p" aria-label="Previous image">${ic("M15 5l-7 7 7 7")}</button><figure class="lb-f"><img alt=""><div class="lb-err" hidden>This image could not be loaded.</div><figcaption><b></b><span></span></figcaption></figure><button type="button" class="lb-b lb-n" aria-label="Next image">${ic("M9 5l7 7-7 7")}</button>`);
lb.setAttribute("role","dialog");lb.setAttribute("aria-modal","true");lb.setAttribute("aria-label","Image preview");lb.hidden=true;document.body.append(lb);
const Q=s=>lb.querySelector(s),li=Q("img"),cnt=Q(".lb-c"),er=Q(".lb-err"),ct=Q("figcaption b"),cg=Q("figcaption span"),bp=Q(".lb-p"),bn=Q(".lb-n"),bx=Q(".lb-x");
let list=[],i=0,last=null,tx=0,ty=0,on=false,y0=0;
const sr=m=>m.dataset.full||m.getAttribute("src");
function build(m){const all=[...document.querySelectorAll("img[data-lb]")].filter(x=>!x.closest("[hidden]")&&!x.closest(".lb"));let l=all.filter(x=>x.dataset.gal===m.dataset.gal);if(l.length<2)l=all.filter(x=>x.dataset.sec===m.dataset.sec);const seen=new Set();return l.filter(x=>{const k=sr(x);if(seen.has(k))return false;seen.add(k);return true})}
function show(n){const N=list.length;i=(n+N)%N;const m=list[i];lb.classList.remove("ready");er.hidden=true;li.hidden=false;li.alt=m.alt||m.dataset.title;li.src=sr(m);ct.textContent=m.dataset.title;cg.textContent=m.dataset.gal;cnt.textContent=`${i+1} / ${N}`;cnt.hidden=bp.hidden=bn.hidden=N<2;if(li.complete&&li.naturalWidth)lb.classList.add("ready");if(N>1)[1,-1].forEach(d=>{new Image().src=sr(list[(i+d+N)%N])})}
li.onload=()=>lb.classList.add("ready");
li.onerror=()=>{li.hidden=true;er.hidden=false;lb.classList.add("ready")};
function key(e){if(e.key==="Escape")close();else if(e.key==="ArrowLeft"&&list.length>1)show(i-1);else if(e.key==="ArrowRight"&&list.length>1)show(i+1);else if(e.key==="Tab"){e.preventDefault();const f=[bx,bp,bn].filter(b=>!b.hidden),j=f.indexOf(document.activeElement);f[(j+(e.shiftKey?-1:1)+f.length)%f.length].focus()}}
function open(m){if(on)return;on=true;list=build(m);const k=list.findIndex(x=>sr(x)===sr(m));last=document.activeElement;y0=scrollY;const sw=innerWidth-document.documentElement.clientWidth;document.documentElement.style.overflow="hidden";document.body.style.paddingRight=sw+"px";lb.hidden=false;void lb.offsetWidth;lb.classList.add("open");show(k<0?0:k);addEventListener("keydown",key);bx.focus({preventScroll:true})}
function close(){if(!on)return;on=false;lb.classList.remove("open");removeEventListener("keydown",key);setTimeout(()=>{if(on)return;lb.hidden=true;li.removeAttribute("src");document.documentElement.style.overflow="";document.body.style.paddingRight="";if(Math.abs(scrollY-y0)>1)scrollTo({top:y0,behavior:"instant"});if(last&&last.isConnected)last.focus({preventScroll:true})},230)}
bx.onclick=close;bp.onclick=()=>show(i-1);bn.onclick=()=>show(i+1);
lb.addEventListener("click",e=>{if(e.target===lb||e.target.classList.contains("lb-f"))close()});
lb.addEventListener("touchstart",e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY},{passive:true});
lb.addEventListener("touchend",e=>{const t=e.changedTouches[0],dx=t.clientX-tx,dy=t.clientY-ty;if(list.length>1&&Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5)show(i+(dx<0?1:-1))},{passive:true});
document.addEventListener("click",e=>{const m=e.target.closest&&e.target.closest("img[data-lb]");if(m&&!m.closest(".lb")){e.preventDefault();open(m)}});
document.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches&&e.target.matches("img[data-lb]")){e.preventDefault();open(e.target)}});
})();

/* ===== Carousels (printing, digital, workflow): native scroll-snap + prev/next buttons ===== */
function makeCar(id,label){const t=$("#"+id);if(!t)return;t.tabIndex=0;t.setAttribute("role","region");t.setAttribute("aria-label",label);
 const w=E("div","car");t.before(w);w.append(t);
 const ic=d=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
 const ctl=E("div","car-ctl",`<button type="button" class="car-b" data-d="-1" aria-label="Previous: ${label}">${ic("M15 5l-7 7 7 7")}</button><button type="button" class="car-b" data-d="1" aria-label="Next: ${label}">${ic("M9 5l7 7-7 7")}</button>`);w.append(ctl);
 const [p,n]=ctl.children,rq=matchMedia("(prefers-reduced-motion:reduce)").matches;
 const upd=()=>{const m=t.scrollWidth-t.clientWidth;p.disabled=t.scrollLeft<=2;n.disabled=t.scrollLeft>=m-2};
 ctl.addEventListener("click",e=>{const b=e.target.closest(".car-b");if(!b||b.disabled)return;const c=t.firstElementChild,g=parseFloat(getComputedStyle(t).columnGap)||16;t.scrollBy({left:(c.offsetWidth+g)*Math.max(1,Math.floor(t.clientWidth/(c.offsetWidth+g)))*b.dataset.d,behavior:rq?"auto":"smooth"})});
 t.addEventListener("scroll",upd,{passive:true});addEventListener("resize",upd);upd();
 [...t.children].forEach(c=>c.classList.add("in"))}
makeCar("pg","Printing and designing services");makeCar("dg","Digital services");makeCar("steps","Workflow steps");
