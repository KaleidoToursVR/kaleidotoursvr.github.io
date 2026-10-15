var e=e=>!!e&&e.nodeType===Node.ELEMENT_NODE,t=(t,n)=>{let r=t;for(;e(r);){if(r.hasAttribute(n))return r;r=r.parentNode}return null},n=e=>{let n=t(e,`data-blok-c`);if(!n)return null;let r=n.getAttribute(`data-blok-c`);return r===null?null:JSON.parse(r)},r=(e,t)=>e.contains(t),i=e=>document.querySelector(`[data-blok-uid="${e}"]`),a=e=>{let t=e.getBoundingClientRect();return t.top<0&&t.top+t.height>=0||t.top>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)},o=e=>{let t={};try{let n=e.replace(/\\/g,``);t=JSON.parse(n)}catch{console.error(`Error parsing json`,e)}return t},s=e=>{let t=[],n=document.createNodeIterator(e,NodeFilter.SHOW_COMMENT,()=>NodeFilter.FILTER_ACCEPT),r=null;for(;r=n.nextNode();)if(r.nodeValue&&r.nodeValue.indexOf(`#storyblok#`)>-1){let e=r.nodeValue.replace(`#storyblok#`,``),n=r,i=n.nextElementSibling||n.nextSibling,a=o(e);a&&t.push({options:a,el:i})}return t},c=e=>{let t=``;return location.search.substr(1).split(`&`).forEach(n=>{let r=n.split(`=`);r[0]===e&&(t=decodeURIComponent(r[1]))}),t},l=(e,t,n)=>typeof e==`string`?e.toString().replace(/([A-Z])/g,` $1`).trim().toLowerCase().replace(/[_-]/g,` `).replace(/(?:^|\s)\S/g,function(e,t){return e.toUpperCase()}):``,u=e=>e&&e.display_name?e.display_name:l(e.name),d=e=>{let t=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t.setAttribute(`viewBox`,e.viewBox),t.setAttribute(`class`,e.svgClass);let n=document.createElementNS(t.namespaceURI,`path`);return n.setAttribute(`d`,e.path),n.setAttribute(`fill`,e.pathFill),n.setAttribute(`transform`,e.pathTransform?e.pathTransform:`translate(0 0)`),t.appendChild(n),t},f=(e=>e)`
  @keyframes smoke {
    from {
      background-color: rgba(89, 197, 198, 0);
    }
    to {
      background-color: rgba(89, 197, 198, 0.5);
    }
  }

  .storyblok--outlined .storyblok__outline,
  .storyblok--outlined [data-blok-c] {
    outline: 1px dashed rgba(182, 186, 191, 0.5);
  }

  .storyblok--outlined .storyblok__outline[data-blok-focused='true'],
  .storyblok--outlined [data-blok-c][data-blok-focused='true'] {
    outline: 0;
  }

  .storyblok__hint {
    box-sizing: border-box;
    outline: 1px solid #05807f;
    pointer-events: none;
    position: absolute;
    transition: opacity 0.2s ease;
    z-index: 16777272;
  }

  .storyblok__highlight {
    background: rgba(89, 197, 198, 0.2);
    outline: 1px solid #05807f;
    pointer-events: none;
    position: absolute;
    transition: opacity 0.2s ease;
    z-index: 16777270;
  }

  .storyblok__overlay {
    box-shadow: 0 0 8px 2px rgba(34, 42, 69, 0.07);
    box-sizing: border-box;
    outline: 1px solid #05807f;
    pointer-events: none;
    position: absolute;
    z-index: 16777273;
  }

  .storyblok__overlay-menu {
    background-color: #05807f;
    border-radius: 5px;
    display: inline-flex;
    font-family:
      -apple-system, blinkmacsystemfont, 'Segoe UI', roboto, helvetica, arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    height: 30px;
    left: -1px;
    pointer-events: auto;
    position: absolute;
    top: -40px;
  }

  .storyblok__overlay-menu--simple .storyblok__overlay-menu-btn {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }

  .storyblok__overlay-menu-label {
    color: #fff;
    font-size: 14px;
    line-height: 30px;
    margin-right: 20px;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .storyblok__overlay-menu-label:first-child {
    margin-left: 20px;
  }

  .storyblok__overlay-menu-btn {
    align-items: center;
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    outline: none;
    padding: 0;
  }

  .storyblok__overlay-menu-btn:hover {
    background-color: #0d5454;
  }

  .storyblok__overlay-menu-btn-action {
    border-bottom-right-radius: 5px;
    border-left: 1px solid #fff;
    border-top-right-radius: 5px;
    height: inherit;
    margin: auto;
    margin-right: 0;
  }

  .storyblok__overlay-menu-btn-parent {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    cursor: pointer;
    margin: 0;
    width: auto;
  }

  .storyblok__overlay-menu-svg {
    box-sizing: border-box;
    cursor: pointer;
    height: 24px;
    margin: 0 3px;
    width: 24px;
  }

  .storyblok__overlay--bottom .storyblok__overlay-menu {
    bottom: -40px;
    top: auto;
  }

  .storyblok__overlay--clicked {
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    animation-name: smoke;
  }

  .storyblok__actions-menu,
  .storyblok__breadcrumbs-menu {
    background-color: #fff;
    border: 1px solid #dfe3e8;
    border-radius: 5px;
    box-shadow: 0 2px 17px 3px rgba(34, 42, 69, 0.07);
    box-sizing: content-box;
    display: none;
    height: fit-content;
    min-width: 156px;
    overflow: hidden;
    padding: 11px 0;
    position: absolute;
    top: 25px;
    z-index: 2;
  }

  .storyblok__actions-menu hr,
  .storyblok__breadcrumbs-menu hr {
    background-color: #dfe3e8;
    border: 0;
    height: 1px;
    margin: 11px 0 11px 20px;
  }

  .storyblok__actions-menu__menu-item,
  .storyblok__breadcrumbs-menu__menu-item {
    align-items: center;
    appearance: none;
    background: #fff;
    border: 0;
    color: #1b243f;
    cursor: pointer;
    display: flex;
    font-family:
      -apple-system, blinkmacsystemfont, 'Segoe UI', roboto, helvetica, arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 14px;
    padding: 8px 20px;
    text-align: left;
    width: 100%;
  }

  .storyblok__actions-menu__menu-item--delete,
  .storyblok__breadcrumbs-menu__menu-item--delete {
    color: #c11c14;
    margin-bottom: 0;
  }

  .storyblok__actions-menu__menu-item--selected,
  .storyblok__breadcrumbs-menu__menu-item--selected {
    color: #05807f;
    cursor: default;
    margin-bottom: 0;
  }

  .storyblok__actions-menu__menu-item--selected:hover,
  .storyblok__breadcrumbs-menu__menu-item--selected:hover {
    background: transparent;
  }

  .storyblok__actions-menu__menu-item:hover,
  .storyblok__breadcrumbs-menu__menu-item:hover {
    background: #eff1f3;
  }

  .storyblok__actions-menu__menu-item:focus,
  .storyblok__breadcrumbs-menu__menu-item:focus {
    outline: none;
  }

  .storyblok__actions-menu {
    left: calc(100% - 20px);
  }

  .storyblok__breadcrumbs-menu {
    left: -10px;
  }
`,p={OUTLINE:`storyblok--outlined`,STYLESHEET:`storyblok-bridge-stylesheet`,HINT:`storyblok__hint`,HIGHLIGHTER:`storyblok__highlight`,OVERLAY:`storyblok__overlay`,COMPONENT_BASE:`storyblok__overlay-menu`,ACTIONS_MENU:`storyblok__actions-menu`,BREADCRUMBS_MENU:`storyblok__breadcrumbs-menu`},m=0,h=class{constructor(e){this.appVersion=`v1`,this.inEditor=!0,this.initialized=!1,this.currentUid=null,this.storyId=``,this.componentNames={},this.outlineOnMoveInterval=null,this.calcInterval=null,this.canAddBlocks=!1,this.canMoveForward=!1,this.canMoveBackward=!1,this.canDeleteBlocks=!1,this.navigationBreadcrumbs=[],this.focusState=!1,this.actionsEnabled=!1,this.hinter=null,this.highlighter=null,this.overlay=null,this.componentBase=null,this.componentLabel=null,this.breadcrumbsButtonMenu=null,this.breadcrumbsMenu=null,this.actionsMenu=null,this.actionsMenuButton=null,this.actionsMenuItems=null,this._decoratedElements=[],this._onMessage=null,this._onMouseMove=null,this._onWindowClick=null,this.events={input:[],change:[],published:[],unpublished:[],viewLiveVersion:[],enterEditmode:[],enterComponent:[],hoverComponent:[],highlightComponent:[],customEvent:[],pingBack:[],sessionReceived:[],editedBlok:[],deselectBlok:[],addedBlock:[],deletedBlock:[],movedBlock:[],duplicatedBlock:[]};let t={customParent:null,resolveRelations:null,resolveLinks:null,preventClicks:!1,initOnlyOnce:!0,fallbackLang:null};this.config={...t,...e},this.init()}get isInIframe(){return window.top!==window.self}get csProtocol(){let e=location.protocol.replace(`:`,``);return e!==`http`&&e!==`https`&&(e=`https`),e}get targetOrigin(){return this.config.customParent?this.config.customParent:c(`_storyblok_env`)===`stage`?`${this.csProtocol}://app-beta.storyblok.com`:`${this.csProtocol}://app.storyblok.com`}get lastBreadcrumbItem(){return this.navigationBreadcrumbs[this.navigationBreadcrumbs.length-1]||{}}isInEditor(){return this.inEditor}init(){if(document.body===null){console.error(`Body tag not found. Please install the Storyblok bridge script inside the body tag`);return}this.config.initOnlyOnce&&document.querySelectorAll(`.${p.HINT}`).length>0||this.isInIframe&&(this.resetAllEvents(),this.addMessageListener(),this.outlineOnMove(),this.buildBridgeStyles(),this.on(`enterEditmode`,this.enterEditmode),this.isInIframe&&this.sendDataToEditor({action:`initialized`,config:this.config}),this.initialized=!0,m+=1)}sendDataToEditor(e){window.parent.postMessage(e,this.targetOrigin)}buildBridgeStyles(){document.getElementById(p.STYLESHEET)?(this.hinter=document.querySelector(`.${p.HINT}`),this.highlighter=document.querySelector(`.${p.HIGHLIGHTER}`),this.overlay=document.querySelector(`.${p.OVERLAY}`),this.componentBase=document.querySelector(`.${p.COMPONENT_BASE}`),this.breadcrumbsButtonMenu=document.querySelector(`.${p.COMPONENT_BASE}-btn-parent`),this.breadcrumbsMenu=document.querySelector(`.${p.BREADCRUMBS_MENU}`),this.actionsMenuButton=document.querySelector(`.${p.COMPONENT_BASE}-btn-action`),this.actionsMenu=document.querySelector(`.${p.ACTIONS_MENU}`),this.componentLabel=document.querySelector(`.${p.COMPONENT_BASE} > .${p.COMPONENT_BASE}-label`),this.createActionsMenuItems()):(this.createBridgeStylesheet(),this.createHinter(),this.createHighlighter(),this.createOverlay(),this.createComponentContext())}createBridgeStylesheet(){let e=document.createElement(`style`);e.setAttribute(`type`,`text/css`),e.id=p.STYLESHEET,`textContent`in e?e.textContent=f:e.styleSheet.cssText=f,document.getElementsByTagName(`head`)[0].appendChild(e)}createHinter(){this.hinter=document.createElement(`div`),this.hinter.className=p.HINT,this.hideElement(this.hinter),document.body.appendChild(this.hinter)}createHighlighter(){this.highlighter=document.createElement(`div`),this.highlighter.style.opacity=0,this.hideElement(this.highlighter),document.body.appendChild(this.highlighter)}createOverlay(){this.overlay=document.createElement(`div`),this.overlay.setAttribute(`class`,p.OVERLAY),this.overlay.setAttribute(`id`,p.OVERLAY),this.hideElement(this.overlay),document.body.appendChild(this.overlay)}calculateElementPosition(e,t){if(!t)return this.hideElement(e),!1;let n=i(t);if(n){let{left:t,top:r,width:i,height:a}=this.getElementOffset(n);if(e===this.overlay){let t=n.getBoundingClientRect().top;e.classList.toggle(`${p.OVERLAY}--bottom`,t<=30)}return e.style.top=`${r}px`,e.style.left=`${t}px`,e.style.width=`${i}px`,e.style.height=`${a}px`,e.style.minHeight=`5px`,!0}return this.hideElement(e),!1}getElementOffset(e){let t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+r,left:t.left+n,width:t.width,height:t.height}}resetAllEvents(){for(let e in this.events)this.events[e]=[]}addMessageListener(){window.addEventListener&&(this._onMessage&&window.removeEventListener(`message`,this._onMessage),this._onMessage=this.receiveMessageFromApp.bind(this),window.addEventListener(`message`,this._onMessage))}receiveMessageFromApp(e){e&&e.data&&e.data.action&&this.emit(e.data.action,e.data)}emit(e,...t){let n=this.events[e];if(!(!e||!n||!n.length))for(let e=0;e<n.length;e++)n[e].apply(this,t)}outlineOnMoveHandler(){document.body.classList.add(p.OUTLINE);let e=()=>{document.body.classList.remove(p.OUTLINE),this.hinter&&(this.hinter.style.opacity=0)};this.outlineOnMoveInterval&&clearTimeout(this.outlineOnMoveInterval),this.outlineOnMoveInterval=setTimeout(e,800)}outlineOnMove(){this._onMouseMove&&document.removeEventListener(`mousemove`,this._onMouseMove),this._onMouseMove=this.outlineOnMoveHandler.bind(this),document.addEventListener(`mousemove`,this._onMouseMove)}on(e,t){if(e.constructor===Array){for(let n of e)this.subscribeEvent(n,t);return}this.subscribeEvent(e,t)}subscribeEvent(e,t){e===`input`&&(this.actionsEnabled=!0),this.events[e].indexOf(t)===-1&&this.events[e].push(t)}pingEditor(e){this.isInIframe?this.sendDataToEditor({action:`ping`}):(this.inEditor=!1,e(this)),this.on(`pingBack`,this.handlePingBack(e))}handlePingBack(e){return()=>{this.inEditor=!0,e(this)}}handleEditedBlok(e){this.navigationBreadcrumbs=e.breadcrumbs,this.canAddBlocks=e.canAddBlocks||!1,this.canMoveForward=e.canMoveForward||!1,this.canMoveBackward=e.canMoveBackward||!1,this.canDeleteBlocks=e.canDeleteBlocks||!1,this.updateComponentBase(e.blok)}handleAddMoveBlok(e){let t=i(`${this.storyId}-${e.blockId}`);t&&this.handleOpenBlok(t)}handleDeselectBlock(){document.querySelectorAll(`[data-blok-focused]`).forEach(e=>e.removeAttribute(`data-blok-focused`)),this.hideElement(this.overlay)}handleDuplicatedBlok(e){this.handleDeselectBlock(),setTimeout(()=>{if(!this.initialized)return;let t=i(`${this.storyId}-${e.blockId}`);t&&this.handleOpenBlok(t)},500)}handleWindowClick(e){this.config.preventClicks&&(e.preventDefault(),e.stopPropagation()),this.handleOpenBlok(e.target,e)}handleOpenBlok(e,t){let r=n(e);if(r){t&&r.uid!==this.currentUid&&(t.preventDefault(),t.stopPropagation()),this.currentUid=r.uid,this.storyId=r.id,this.openBlok(r);return}t&&this.toggleFocusElement(e,!0)}enterEditmode(e){let t=s(document.body);e&&e.appVersion&&(this.appVersion=e.appVersion),e&&e.componentNames&&(this.componentNames=e.componentNames),this._decoratedElements=[];for(let e=0;e<t.length;e++){let n=t[e].el,r=t[e].options;if(!n||n.nodeType!==Node.ELEMENT_NODE)continue;r.name=this.componentNames[r.name]||r.name,n.setAttribute(`data-blok-c`,JSON.stringify(r)),n.setAttribute(`data-blok-uid`,`${r.id}-${r.uid}`);let i=null;n.offsetHeight<5&&(i=n.style.getPropertyValue(`min-height`),n.style[`min-height`]=`5px`),n.classList.add(`storyblok__outline`),this._decoratedElements.push({el:n,previousMinHeight:i})}if(this.on(`addedBlock`,this.handleAddMoveBlok),this.on(`duplicatedBlock`,this.handleDuplicatedBlok),this.on(`movedBlock`,this.handleAddMoveBlok),this.on(`enterComponent`,this.enterComponent),this.on(`highlightComponent`,this.highlightComponent),this.on(`hoverComponent`,this.hoverComponent),this.on(`editedBlok`,this.handleEditedBlok),this.on(`deselectBlok`,this.handleDeselectBlock),e&&e.blockId&&this.config.setActiveBlock){let t=i(`${e.storyId}-${e.blockId}`);this.handleOpenBlok(t)}this._onWindowClick||=this.handleWindowClick.bind(this),window.addEventListener(`click`,this._onWindowClick),this.calcInterval!==null&&window.clearInterval(this.calcInterval),this.calcInterval=window.setInterval(()=>{this.calculateElementPosition(this.overlay,`${this.storyId}-${this.currentUid}`)},300)}highlightComponent(e){this.highlighter.innerHTML=``;let t=!1;for(let n=0;n<e.componentIds.length;n++){let r=`${e.storyId}-${e.componentIds[n]}`,o=i(r);if(o){let i=document.createElement(`div`);i.setAttribute(`class`,p.HIGHLIGHTER),this.highlighter.appendChild(i),this.calculateElementPosition(i,r),t=!0,e.componentId===e.componentIds[n]&&!a(o)&&typeof o.scrollIntoView<`u`&&o.scrollIntoView()}}this.highlighter.style.display=t?`block`:`none`,this.highlighter.style.opacity=+!!t}hoverComponent(e){this.calculateElementPosition(this.hinter,`${e.storyId}-${e.componentId}`)&&(this.hinter.style.opacity=1,this.hinter.style.display=`block`)}toggleFocusElement(e,t=!1){if(!r(this.overlay,e)){if(this.handleDeselectBlock(),!t){e.setAttribute(`data-blok-focused`,!0),this.showFocusedElement(this.overlay),this.focusState=!1;return}this.focusState||this.sendDataToEditor({action:`noFocus`})}}showFocusedElement(e){if(!this.currentUid){this.hideElement(e);return}this.showElement(e),this.calculateElementPosition(e,`${this.storyId}-${this.currentUid}`)}handleBlokActions(e){this.sendDataToEditor({action:e,blok:this.lastBreadcrumbItem}),e===`addBlockBefore`||e===`addBlockAfter`||e===`copy`?this.hideElement(this.actionsMenu):this.hideElement(this.overlay),(e===`moveForward`||e===`moveBackward`)&&(this.focusState=!0)}hideElement(e){e.style.display=`none`}showElement(e){e.style.display=`block`}toggleElement(e){if(e.style.display===`block`){this.hideElement(e);return}this.showElement(e)}enterComponent(e){let t=i(`${e.storyId}-${e.componentId}`),r=n(t);r&&(this.hinter.style.opacity=0,this.hinter.style.display=`none`,this.currentUid=r.uid,this.storyId=r.id,this.scrollIntoView(t),this.handleEditedBlok(e))}scrollIntoView(e){e&&!a(e)&&typeof e.scrollIntoView<`u`&&setTimeout(()=>{this.initialized&&e.scrollIntoView({behavior:`smooth`,block:`start`})},100)}openBlok(e){this.sendDataToEditor({action:`edit`,dataC:e,config:this.config})}createComponentContext(){this.createComponentBase(),this.createActionsMenu(),this.createActionsMenuItems(),this.createBreadcrumbsMenu(),this.createActionsMenuButton(),this.createBreadcrumbsMenuButton(),this.createComponentLabel(),this.createComponentButtonLabel()}createComponentBase(){this.componentBase=document.createElement(`div`),this.componentBase.setAttribute(`class`,p.COMPONENT_BASE),this.componentBase.setAttribute(`id`,p.COMPONENT_BASE),this.overlay.append(this.componentBase)}createComponentLabel(){this.componentLabel=document.createElement(`span`),this.componentLabel.setAttribute(`class`,`${p.COMPONENT_BASE}-label`),this.componentBase.prepend(this.componentLabel)}createComponentButtonLabel(){let e=document.createElement(`span`);e.setAttribute(`class`,`${p.COMPONENT_BASE}-label`),this.breadcrumbsButtonMenu.appendChild(e)}updateComponentLabel(e){document.querySelectorAll(`.${p.COMPONENT_BASE}-label`).forEach(t=>t.innerText=this.componentNames[e.name]||u(e))}updateComponentBase(e){this.hideElement(this.actionsMenu),this.hideElement(this.breadcrumbsMenu),this.overlay.classList.add(`${p.OVERLAY}--clicked`),setTimeout(()=>{this.initialized&&this.overlay.classList.remove(`${p.OVERLAY}--clicked`)},400),this.navigationBreadcrumbs.length>1?(this.updateBreadcrumbsMenu(this.navigationBreadcrumbs),this.actionsEnabled?this.updateActionsMenu():(this.componentBase.setAttribute(`class`,`${p.COMPONENT_BASE} ${p.COMPONENT_BASE}--simple`),this.hideElement(this.actionsMenuButton)),this.hideElement(this.componentLabel)):(this.hideElement(this.breadcrumbsButtonMenu),this.hideElement(this.actionsMenuButton),this.showElement(this.componentLabel)),this.updateComponentLabel(e);let t=i(`${this.storyId}-${e.uid}`);t&&this.toggleFocusElement(t)}createBreadcrumbsMenuButton(){this.breadcrumbsButtonMenu=document.createElement(`button`),this.breadcrumbsButtonMenu.setAttribute(`class`,`${p.COMPONENT_BASE}-btn ${p.COMPONENT_BASE}-btn-parent`),this.breadcrumbsButtonMenu.prepend(d({viewBox:`0 0 24 24`,svgClass:`${p.COMPONENT_BASE}-svg`,path:`M13.73 14.284l-2.197-2.216 2.197-2.217a1.051 1.051 0 000-1.477 1.03 1.03 0 00-1.465 0l-2.93 2.955a1.043 1.043 0 00-.287.554l-.014.123v.123c.014.247.115.489.301.677l2.93 2.956a1.03 1.03 0 001.465 0 1.051 1.051 0 000-1.478z`,pathFill:`#ffffff`})),this.breadcrumbsButtonMenu.addEventListener(`click`,()=>{this.toggleElement(this.breadcrumbsMenu),this.hideElement(this.actionsMenu)}),this.componentBase.prepend(this.breadcrumbsButtonMenu)}createBreadcrumbsMenu(){this.breadcrumbsMenu=document.createElement(`div`),this.breadcrumbsMenu.setAttribute(`class`,p.BREADCRUMBS_MENU),this.breadcrumbsMenu.setAttribute(`id`,p.BREADCRUMBS_MENU),this.componentBase.append(this.breadcrumbsMenu)}updateBreadcrumbsMenu(e){this.breadcrumbsMenu.innerHTML=``;let t=[];for(let n=0;n<e.length;n++){t[n]=document.createElement(`button`),t[n].innerHTML=u({display_name:this.componentNames[e[n].component],name:e[n].component});let r=e[n];t[n].addEventListener(`click`,e=>{e.stopPropagation(),this.currentUid=r._uid,this.openBlok({id:this.storyId,uid:r._uid,name:r.component})}),t[n].classList.add(`${p.BREADCRUMBS_MENU}__menu-item`),e[n]._uid===this.currentUid&&(t[n].classList.add(`${p.BREADCRUMBS_MENU}__menu-item--selected`),t[n].setAttribute(`disabled`,!0)),this.breadcrumbsMenu.appendChild(t[n]),this.breadcrumbsButtonMenu.style.display=`flex`}}createActionsMenuButton(){this.actionsMenuButton=document.createElement(`button`),this.actionsMenuButton.setAttribute(`class`,`${p.COMPONENT_BASE}-btn ${p.COMPONENT_BASE}-btn-action`),this.actionsMenuButton.prepend(d({viewBox:`0 0 24 24`,svgClass:`${p.COMPONENT_BASE}-svg`,path:`M7.5 11a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm10 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z`,pathFill:`#ffffff`})),this.actionsMenuButton.addEventListener(`click`,()=>{this.toggleElement(this.actionsMenu),this.breadcrumbsMenu&&this.hideElement(this.breadcrumbsMenu)}),this.componentBase.append(this.actionsMenuButton)}createActionsMenuItems(){this.actionsMenuItems=[{eventFunction:()=>this.handleBlokActions.bind(this,`addBlockBefore`),innerHTML:`Add Block Before`,order:0,show:()=>this.canAddBlocks},{eventFunction:()=>this.handleBlokActions.bind(this,`addBlockAfter`),innerHTML:`Add Block After`,order:1,show:()=>this.canAddBlocks},{eventFunction:()=>this.handleBlokActions.bind(this,`duplicateBlock`),innerHTML:`Duplicate`,order:2,show:()=>this.canAddBlocks},{eventFunction:()=>this.handleBlokActions.bind(this,`copy`),innerHTML:`Copy`,order:3,show:()=>this.appVersion===`v2`},{separator:!0,order:4,show:()=>this.canAddBlocks&&this.canMoveForward||!!(this.canMoveBackward&&this.lastBreadcrumbItem._parentindex)},{eventFunction:()=>this.handleBlokActions.bind(this,`moveForward`),innerHTML:`Move Forward`,order:5,show:()=>this.canMoveForward},{eventFunction:()=>this.handleBlokActions.bind(this,`moveBackward`),innerHTML:`Move Backward`,order:6,show:()=>this.canMoveBackward&&this.lastBreadcrumbItem._parentindex},{separator:!0,order:7,show:()=>this.canAddBlocks&&this.canDeleteBlocks},{eventFunction:()=>this.handleBlokActions.bind(this,`deleteBlock`),className:`${p.ACTIONS_MENU}__menu-item--delete`,innerHTML:`Delete`,order:8,show:()=>this.canDeleteBlocks}]}createActionsMenu(){this.actionsMenu=document.createElement(`div`),this.actionsMenu.setAttribute(`class`,p.ACTIONS_MENU),this.actionsMenu.setAttribute(`id`,p.ACTIONS_MENU),this.componentBase.append(this.actionsMenu)}updateActionsMenu(){this.actionsMenu.innerHTML=``;let e=`${p.ACTIONS_MENU}__menu-item`;this.actionsMenuItems.sort((e,t)=>e.order>t.order?1:t.order>e.order?-1:0).forEach(t=>{if(t.separator&&t.show()){this.actionsMenu.appendChild(document.createElement(`hr`));return}let n=document.createElement(t.element?t.element:`button`);n.classList.add(e),t.className&&n.classList.add(t.className),n.innerHTML=t.innerHTML,t.eventFunction&&n.addEventListener(t.event?t.event:`click`,t.eventFunction()),t.show()&&this.actionsMenu.appendChild(n)}),this.actionsMenuButton.style.display=`flex`}destroy(){if(this._onMessage&&=(window.removeEventListener(`message`,this._onMessage),null),this._onMouseMove&&=(document.removeEventListener(`mousemove`,this._onMouseMove),null),this._onWindowClick&&=(window.removeEventListener(`click`,this._onWindowClick),null),this.outlineOnMoveInterval&&=(clearTimeout(this.outlineOnMoveInterval),null),this.calcInterval!==null&&(clearInterval(this.calcInterval),this.calcInterval=null),this.initialized&&(m=Math.max(0,m-1)),this.initialized&&m===0){document&&document.body&&document.body.classList.remove(p.OUTLINE);try{document.querySelectorAll(`[data-blok-focused]`).forEach(e=>e.removeAttribute(`data-blok-focused`))}catch(e){console.error(e)}this._decoratedElements.forEach(({el:e,previousMinHeight:t})=>{e.removeAttribute(`data-blok-c`),e.removeAttribute(`data-blok-uid`),e.classList.remove(`storyblok__outline`),t!==null&&(t===``?e.style.removeProperty(`min-height`):e.style.setProperty(`min-height`,t),e.getAttribute(`style`)===``&&e.removeAttribute(`style`))});let e=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)};e(this.overlay),e(this.hinter),e(this.highlighter),e(document.getElementById(p.STYLESHEET))}this._decoratedElements=[],this.resetAllEvents(),this.hinter=null,this.highlighter=null,this.overlay=null,this.componentBase=null,this.componentLabel=null,this.breadcrumbsButtonMenu=null,this.breadcrumbsMenu=null,this.actionsMenu=null,this.actionsMenuButton=null,this.actionsMenuItems=null,this.currentUid=null,this.storyId=``,this.navigationBreadcrumbs=[],this.canAddBlocks=!1,this.canMoveForward=!1,this.canMoveBackward=!1,this.canDeleteBlocks=!1,this.focusState=!1,this.actionsEnabled=!1,this.initialized=!1}},g=Object.defineProperty,_=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t,n)=>_(e,typeof t==`symbol`?t:t+``,n),y=class{constructor(e){v(this,`isInEditor`),v(this,`enterEditmode`),v(this,`pingEditor`),v(this,`on`),v(this,`destroy`);let t=new h(e);this.isInEditor=()=>t.isInEditor(),this.enterEditmode=e=>{t.enterEditmode(e)},this.pingEditor=e=>{t.pingEditor(e)},this.on=(e,n)=>{t.on(e,n)},this.destroy=()=>{t.destroy()}}},b=e=>({tag:`success`,value:e}),x=e=>({tag:`failure`,error:e,path:[]}),S=(e,t)=>({tag:`failure`,error:e.error,path:[t,...e.path]}),C=e=>typeof e>`u`,w=e=>typeof e==`string`,T=e=>typeof e==`object`&&!!e,E=Symbol(`propertyAbsent`),D=Symbol(`omitProperty`),O=`Not an object`,k=e=>S(x(`Property is missing`),{tag:`object`,key:e}),A=e=>{let t=Object.entries(e);return e=>{if(!T(e))return x(O);let n={};for(let r=0;r<t.length;r++){let[i,a]=t[r],o=e[i];if(o===void 0&&!e.hasOwnProperty(i)){let e=a(E);if(e.tag===`failure`||e.value===E)return k(i);e.value!==D&&(n[i]=e.value)}else{let e=a(o);if(e.tag===`failure`)return S(e,{tag:`object`,key:i});n[i]=e.value}}return b(n)}},j=e=>C(e)?b(e):x(`Not undefined`),M=e=>w(e)?b(e):x(`Not a string`),N=(...e)=>t=>{for(let n of e){let e=n(t);if(e.tag===`success`)return b(e.value)}return x(`No parser in the union matched`)},P=e=>N(F,j,e),F=e=>e===E?b(D):x(`not optional`);A({name:M,space:P(M),uid:M,id:M});export{y as default};