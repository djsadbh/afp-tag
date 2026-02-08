<!-- GAM Ads Controller Script - Multi-Domain / Multi-AdUnit Ready -->
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script>
window.googletag = window.googletag || {cmd: []};
(function(){

  /*** ==== CONFIGURATION ==== ***/
  const domain = "afp.org.pk"; // change per domain

  const adUnits = [
    {slot:"afp_org_leaderboard", path:"/23329254664/afp.org_leaderboard", sizes:[[300,250],[336,280],[728,90],[970,90]], device:"all", injectAfter:2},
    {slot:"afp_org_banner1", path:"/23329254664/afp.org_banner1", sizes:[[200,200],[250,250],[300,250],[320,320],[336,280]], device:"all", injectAfter:5},
    {slot:"afp_org_banner2", path:"/23329254664/afp.org_banner2", sizes:[[200,200],[250,250],[300,250],[320,320],[336,280]], device:"all"},
    {slot:"afp_org_banner3", path:"/23329254664/afp.org_banner3", sizes:[[200,200],[250,250],[300,250],[320,320],[336,280]], device:"all"},
    {slot:"afp_org_anchor_desktop", path:"/23329254664/afp.org_Anchor_Desktop", sizes:[[728,90],[970,90]], device:"desktop", anchor:true},
    {slot:"afp_org_anchor_mobile", path:"/23329254664/afp.org_Anchor_Mobile", sizes:[[300,50],[300,100],[320,50],[320,100]], device:"mobile", anchor:true},
    {slot:"afp_org_incontent1", path:"/23329254664/afp.org.pk_in-content1", sizes:[[300,50],[300,100],[300,250],[320,50],[320,100],[320,480],[336,280],[480,320],[728,90],[728,250]], device:"all", injectAfter:3},
    {slot:"afp_org_incontent2", path:"/23329254664/afp.org.pk_in-content2", sizes:[[300,50],[300,100],[300,250],[320,50],[320,100],[320,480],[336,280],[480,320],[728,90],[728,250]], device:"all", injectAfter:6},
    {slot:"afp_org_incontent3", path:"/23329254664/afp.org.pk_in-content3", sizes:[[300,50],[300,100],[300,250],[320,50],[320,100],[320,480],[336,280],[480,320],[728,90],[728,250]], device:"all", injectAfter:9},
    {slot:"afp_org_sidebar_left", path:"/23329254664/afp.org_Sidebar_left", sizes:[[120,600],[160,600],[200,200],[250,250],[300,250],[300,600],[336,280]], device:"all"},
    {slot:"afp_org_sidebar_right", path:"/23329254664/afp.org_Sidebar_right", sizes:[[120,600],[160,600],[200,200],[250,250],[300,250],[300,600],[336,280]], device:"all"},
    {slot:"afp_org_vignette", path:"/23329254664/Offerwall-Ad-Unit-1526e761a2bb3831", sizes:[[1,1]], device:"all", vignette:true}
  ];

  const refreshTime = 30*1000; // 30 seconds refresh for visible ads

  /*** ==== HELPER FUNCTIONS ==== ***/
  function isMobile(){ return /Mobi|Android/i.test(navigator.userAgent); }

  function createAdDiv(slot){
    const div = document.createElement("div");
    div.id = "ad-"+slot;
    div.style.margin = "10px 0";
    return div;
  }

  function insertAfter(referenceNode, newNode){
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function injectContentAds(){
    const paragraphs = document.querySelectorAll("p");
    adUnits.forEach(unit=>{
      if(unit.injectAfter && ((unit.device==="all") || (unit.device==="mobile" && isMobile()) || (unit.device==="desktop" && !isMobile()))){
        const targetIndex = Math.min(unit.injectAfter, paragraphs.length-1);
        const div = createAdDiv(unit.slot);
        insertAfter(paragraphs[targetIndex], div);
        defineGAMSlot(unit);
      }
    });
  }

  function createAnchor(unit){
    const div = createAdDiv(unit.slot);
    div.style.position = "fixed";
    div.style.bottom = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.zIndex = "9999";
    div.style.background = "transparent";
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "×";
    closeBtn.style.position = "absolute";
    closeBtn.style.right = "5px";
    closeBtn.style.top = "0";
    closeBtn.style.background = "#000";
    closeBtn.style.color = "#fff";
    closeBtn.style.border = "none";
    closeBtn.style.fontSize = "16px";
    closeBtn.style.cursor = "pointer";
    closeBtn.addEventListener("click", ()=>div.remove());
    div.appendChild(closeBtn);
    document.body.appendChild(div);
    defineGAMSlot(unit);
  }

  function triggerVignette(unit){
    const div = createAdDiv(unit.slot);
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.background = "rgba(0,0,0,0.8)";
    div.style.zIndex = "99999";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";

    const adContainer = document.createElement("div");
    adContainer.id = div.id+"-inner";
    adContainer.style.background = "#fff";
    adContainer.style.padding = "10px";
    adContainer.style.minWidth = "300px";
    adContainer.style.minHeight = "250px";
    div.appendChild(adContainer);

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "×";
    closeBtn.style.position = "absolute";
    closeBtn.style.right = "10px";
    closeBtn.style.top = "10px";
    closeBtn.style.background = "#000";
    closeBtn.style.color = "#fff";
    closeBtn.style.border = "none";
    closeBtn.style.fontSize = "20px";
    closeBtn.style.cursor = "pointer";
    closeBtn.addEventListener("click", ()=>div.remove());
    div.appendChild(closeBtn);

    document.body.appendChild(div);
    defineGAMSlot({...unit, slot: div.querySelector("div").id});
  }

  function defineGAMSlot(unit){
    googletag.cmd.push(function(){
      const slot = googletag.defineSlot(unit.path, unit.sizes, "ad-"+unit.slot).addService(googletag.pubads());
      googletag.enableServices();
      googletag.display("ad-"+unit.slot);

      if(!unit.vignette && !unit.anchor){
        const observer = new IntersectionObserver((entries)=>{
          entries.forEach(entry=>{
            if(entry.isIntersecting){
              setTimeout(()=>{googletag.pubads().refresh([slot])}, refreshTime);
            }
          });
        }, {threshold:0.5});
        observer.observe(document.getElementById("ad-"+unit.slot));
      }
    });
  }

  /*** ==== INIT ==== ***/
  googletag.cmd.push(function(){
    adUnits.forEach(unit=>{
      if(unit.anchor) createAnchor(unit);
      else if(unit.vignette) triggerVignette(unit);
      else injectContentAds();
    });
  });

})();
</script>
