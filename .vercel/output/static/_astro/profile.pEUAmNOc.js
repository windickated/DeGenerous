/* empty css                         */function ee(){}function Be(t){return t()}function Ue(){return Object.create(null)}function te(t){t.forEach(Be)}function Oe(t){return typeof t=="function"}function He(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Se(t){return Object.keys(t).length===0}let me=!1;function Ve(){me=!0}function je(){me=!1}function qe(t,e,l,u){for(;t<e;){const r=t+(e-t>>1);l(r)<=u?t=r+1:e=r}return t}function Fe(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let p=0;p<e.length;p++){const a=e[p];a.claim_order!==void 0&&c.push(a)}e=c}const l=new Int32Array(e.length+1),u=new Int32Array(e.length);l[0]=-1;let r=0;for(let c=0;c<e.length;c++){const p=e[c].claim_order,a=(r>0&&e[l[r]].claim_order<=p?r+1:qe(1,r,b=>e[l[b]].claim_order,p))-1;u[c]=l[a]+1;const E=a+1;l[E]=c,r=Math.max(E,r)}const n=[],o=[];let f=e.length-1;for(let c=l[r]+1;c!=0;c=u[c-1]){for(n.push(e[c-1]);f>=c;f--)o.push(e[f]);f--}for(;f>=0;f--)o.push(e[f]);n.reverse(),o.sort((c,p)=>c.claim_order-p.claim_order);for(let c=0,p=0;c<o.length;c++){for(;p<n.length&&o[c].claim_order>=n[p].claim_order;)p++;const a=p<n.length?n[p]:null;t.insertBefore(o[c],a)}}function i(t,e){if(me){for(Fe(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function S(t,e,l){me&&!l?i(t,e):(e.parentNode!==t||e.nextSibling!=l)&&t.insertBefore(e,l||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Re(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function y(t){return document.createElement(t)}function Z(t){return document.createTextNode(t)}function T(){return Z(" ")}function z(t,e,l,u){return t.addEventListener(e,l,u),()=>t.removeEventListener(e,l,u)}function s(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function R(t){return t.dataset.svelteH}function F(t){return Array.from(t.childNodes)}function We(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Me(t,e,l,u,r=!1){We(t);const n=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const f=t[o];if(e(f)){const c=l(f);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),f}}for(let o=t.claim_info.last_index-1;o>=0;o--){const f=t[o];if(e(f)){const c=l(f);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,f}}return u()})();return n.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,n}function Ye(t,e,l,u){return Me(t,r=>r.nodeName===e,r=>{const n=[];for(let o=0;o<r.attributes.length;o++){const f=r.attributes[o];l[f.name]||n.push(f.name)}n.forEach(o=>r.removeAttribute(o))},()=>u(e))}function v(t,e,l){return Ye(t,e,l,y)}function $(t,e){return Me(t,l=>l.nodeType===3,l=>{const u=""+e;if(l.data.startsWith(u)){if(l.data.length!==u.length)return l.splitText(u.length)}else l.data=u},()=>Z(e),!0)}function N(t){return $(t," ")}function ie(t,e){e=""+e,t.data!==e&&(t.data=e)}function K(t,e){t.value=e??""}function he(t,e,l){t.classList.toggle(e,!!l)}let we;function ce(t){we=t}const re=[],de=[];let oe=[];const Le=[],ze=Promise.resolve();let ge=!1;function Ge(){ge||(ge=!0,ze.then(De))}function be(t){oe.push(t)}const ve=new Set;let ue=0;function De(){if(ue!==0)return;const t=we;do{try{for(;ue<re.length;){const e=re[ue];ue++,ce(e),Je(e.$$)}}catch(e){throw re.length=0,ue=0,e}for(ce(null),re.length=0,ue=0;de.length;)de.pop()();for(let e=0;e<oe.length;e+=1){const l=oe[e];ve.has(l)||(ve.add(l),l())}oe.length=0}while(re.length);for(;Le.length;)Le.pop()();ge=!1,ve.clear(),ce(t)}function Je(t){if(t.fragment!==null){t.update(),te(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(be)}}function Ke(t){const e=[],l=[];oe.forEach(u=>t.indexOf(u)===-1?e.push(u):l.push(u)),l.forEach(u=>u()),oe=e}const Qe=new Set;function Xe(t,e){t&&t.i&&(Qe.delete(t),t.i(e))}function xe(t){return t?.length!==void 0?t:Array.from(t)}function Ze(t,e,l){const{fragment:u,after_update:r}=t.$$;u&&u.m(e,l),be(()=>{const n=t.$$.on_mount.map(Be).filter(Oe);t.$$.on_destroy?t.$$.on_destroy.push(...n):te(n),t.$$.on_mount=[]}),r.forEach(be)}function $e(t,e){const l=t.$$;l.fragment!==null&&(Ke(l.after_update),te(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function et(t,e){t.$$.dirty[0]===-1&&(re.push(t),Ge(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(t,e,l,u,r,n,o=null,f=[-1]){const c=we;ce(t);const p=t.$$={fragment:null,ctx:[],props:n,update:ee,not_equal:r,bound:Ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ue(),dirty:f,skip_bound:!1,root:e.target||c.$$.root};o&&o(p.root);let a=!1;if(p.ctx=l?l(t,e.props||{},(E,b,...P)=>{const U=P.length?P[0]:b;return p.ctx&&r(p.ctx[E],p.ctx[E]=U)&&(!p.skip_bound&&p.bound[E]&&p.bound[E](U),a&&et(t,E)),b}):[],p.update(),a=!0,te(p.before_update),p.fragment=u?u(p.ctx):!1,e.target){if(e.hydrate){Ve();const E=F(e.target);p.fragment&&p.fragment.l(E),E.forEach(w)}else p.fragment&&p.fragment.c();e.intro&&Xe(t.$$.fragment),Ze(t,e.target,e.anchor),je(),De()}ce(c)}class lt{$$=void 0;$$set=void 0;$destroy(){$e(this,1),this.$destroy=ee}$on(e,l){if(!Oe(l))return ee;const u=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return u.push(l),()=>{const r=u.indexOf(l);r!==-1&&u.splice(r,1)}}$set(e){this.$$set&&!Se(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const nt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(nt);function Ie(t,e,l){const u=t.slice();return u[33]=e[l],u}function st(t){let e,l="How to sign up?",u,r;return{c(){e=y("button"),e.textContent=l,this.h()},l(n){e=v(n,"BUTTON",{class:!0,"data-svelte-h":!0}),R(e)!=="svelte-1bxe1s"&&(e.textContent=l),this.h()},h(){s(e,"class","how-button svelte-13y6ugy")},m(n,o){S(n,e,o),u||(r=z(e,"click",t[19]),u=!0)},p:ee,d(n){n&&w(e),u=!1,r()}}}function ut(t){let e,l="Log out",u,r;return{c(){e=y("button"),e.textContent=l,this.h()},l(n){e=v(n,"BUTTON",{class:!0,"data-svelte-h":!0}),R(e)!=="svelte-lzanuu"&&(e.textContent=l),this.h()},h(){s(e,"class","login-button svelte-13y6ugy")},m(n,o){S(n,e,o),u||(r=z(e,"click",t[16]),u=!0)},p:ee,d(n){n&&w(e),u=!1,r()}}}function rt(t){let e,l,u="Mail",r,n,o,f,c="Password",p,a,E,b,P,U,x="First name",O,d,V,I,C="Last name",_,k,M,A,G="Fill in all required fields!",j,q,W="Create account",Q,L;return{c(){e=y("form"),l=y("label"),l.textContent=u,r=T(),n=y("input"),o=T(),f=y("label"),f.textContent=c,p=T(),a=y("input"),E=T(),b=y("input"),P=T(),U=y("label"),U.textContent=x,O=T(),d=y("input"),V=T(),I=y("label"),I.textContent=C,_=T(),k=y("input"),M=T(),A=y("p"),A.textContent=G,j=T(),q=y("button"),q.textContent=W,this.h()},l(g){e=v(g,"FORM",{class:!0});var h=F(e);l=v(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),R(l)!=="svelte-1xt8cbx"&&(l.textContent=u),r=N(h),n=v(h,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),o=N(h),f=v(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),R(f)!=="svelte-1gmp7s1"&&(f.textContent=c),p=N(h),a=v(h,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0,minlength:!0}),E=N(h),b=v(h,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),P=N(h),U=v(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),R(U)!=="svelte-o99tnd"&&(U.textContent=x),O=N(h),d=v(h,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),V=N(h),I=v(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),R(I)!=="svelte-1sv21j1"&&(I.textContent=C),_=N(h),k=v(h,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),M=N(h),A=v(h,"P",{class:!0,"data-svelte-h":!0}),R(A)!=="svelte-1lanidz"&&(A.textContent=G),j=N(h),q=v(h,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),R(q)!=="svelte-b5t025"&&(q.textContent=W),h.forEach(w),this.h()},h(){s(l,"class","input-label svelte-13y6ugy"),s(l,"for","new-user-mail"),s(n,"class","user-input svelte-13y6ugy"),s(n,"type","email"),s(n,"id","new-user-mail"),s(n,"placeholder","Your email"),n.required=!0,s(f,"class","input-label svelte-13y6ugy"),s(f,"for","new-user-password"),s(a,"class","user-input svelte-13y6ugy"),s(a,"type","password"),s(a,"id","new-user-password"),s(a,"placeholder","Your password"),s(a,"minlength","8"),a.required=!0,s(b,"class","user-input svelte-13y6ugy"),s(b,"type","password"),s(b,"id","confirm-new-user-password"),s(b,"placeholder","Confirm password"),b.required=!0,s(U,"class","input-label svelte-13y6ugy"),s(U,"for","user-first-name"),s(d,"class","user-input svelte-13y6ugy"),s(d,"type","text"),s(d,"id","user-first-name"),s(d,"placeholder","Your First name"),s(I,"class","input-label svelte-13y6ugy"),s(I,"for","user-last-name"),s(k,"class","user-input svelte-13y6ugy"),s(k,"type","text"),s(k,"id","user-last-name"),s(k,"placeholder","Your Last name"),s(A,"class","validation-check svelte-13y6ugy"),s(q,"class","submit-button svelte-13y6ugy"),s(q,"type","submit"),s(e,"class","signup-form svelte-13y6ugy")},m(g,h){S(g,e,h),i(e,l),i(e,r),i(e,n),K(n,t[0].mail),i(e,o),i(e,f),i(e,p),i(e,a),K(a,t[0].password),i(e,E),i(e,b),K(b,t[11]),i(e,P),i(e,U),i(e,O),i(e,d),K(d,t[0].first_name),i(e,V),i(e,I),i(e,_),i(e,k),K(k,t[0].last_name),i(e,M),i(e,A),t[30](A),i(e,j),i(e,q),Q||(L=[z(n,"input",t[25]),z(a,"input",t[26]),z(b,"input",t[27]),z(d,"input",t[28]),z(k,"input",t[29]),z(q,"click",t[17])],Q=!0)},p(g,h){h[0]&1&&n.value!==g[0].mail&&K(n,g[0].mail),h[0]&1&&a.value!==g[0].password&&K(a,g[0].password),h[0]&2048&&b.value!==g[11]&&K(b,g[11]),h[0]&1&&d.value!==g[0].first_name&&K(d,g[0].first_name),h[0]&1&&k.value!==g[0].last_name&&K(k,g[0].last_name)},d(g){g&&w(e),t[30](null),Q=!1,te(L)}}}function it(t){let e,l,u="Mail",r,n,o,f,c="Password",p,a,E,b,P="Invalid credentials!",U,x,O="Log-in",d,V,I,C,_,k,M,A="This code is not valid!",G,j,q="Sign-up",W,Q;return{c(){e=y("form"),l=y("label"),l.textContent=u,r=T(),n=y("input"),o=T(),f=y("label"),f.textContent=c,p=T(),a=y("input"),E=T(),b=y("p"),b.textContent=P,U=T(),x=y("button"),x.textContent=O,d=T(),V=y("hr"),I=T(),C=y("form"),_=y("input"),k=T(),M=y("p"),M.textContent=A,G=T(),j=y("button"),j.textContent=q,this.h()},l(L){e=v(L,"FORM",{class:!0});var g=F(e);l=v(g,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),R(l)!=="svelte-jrx378"&&(l.textContent=u),r=N(g),n=v(g,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),o=N(g),f=v(g,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),R(f)!=="svelte-dqr8fs"&&(f.textContent=c),p=N(g),a=v(g,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0,minlength:!0}),E=N(g),b=v(g,"P",{class:!0,"data-svelte-h":!0}),R(b)!=="svelte-zphhjb"&&(b.textContent=P),U=N(g),x=v(g,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),R(x)!=="svelte-2ew2tu"&&(x.textContent=O),g.forEach(w),d=N(L),V=v(L,"HR",{class:!0}),I=N(L),C=v(L,"FORM",{class:!0});var h=F(C);_=v(h,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0,minlength:!0,maxlength:!0}),k=N(h),M=v(h,"P",{class:!0,"data-svelte-h":!0}),R(M)!=="svelte-16txyjd"&&(M.textContent=A),G=N(h),j=v(h,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),R(j)!=="svelte-m4hc1x"&&(j.textContent=q),h.forEach(w),this.h()},h(){s(l,"class","input-label svelte-13y6ugy"),s(l,"for","user-mail"),s(n,"class","user-input svelte-13y6ugy"),s(n,"type","email"),s(n,"id","user-mail"),s(n,"placeholder","Enter your email"),n.required=!0,s(f,"class","input-label svelte-13y6ugy"),s(f,"for","user-password"),s(a,"class","user-input svelte-13y6ugy"),s(a,"type","password"),s(a,"id","user-password"),s(a,"placeholder","Enter your password"),s(a,"minlength","8"),a.required=!0,s(b,"class","validation-check svelte-13y6ugy"),s(x,"class","submit-button svelte-13y6ugy"),s(x,"type","submit"),s(e,"class","login-form svelte-13y6ugy"),s(V,"class","svelte-13y6ugy"),s(_,"class","user-input svelte-13y6ugy"),s(_,"type","text"),s(_,"id","refferal-code"),s(_,"placeholder","Enter your refferal code"),s(_,"minlength","16"),s(_,"maxlength","16"),_.required=!0,s(M,"class","validation-check svelte-13y6ugy"),s(j,"class","submit-button svelte-13y6ugy"),s(j,"type","submit"),s(C,"class","ref-code-form svelte-13y6ugy")},m(L,g){S(L,e,g),i(e,l),i(e,r),i(e,n),K(n,t[8]),i(e,o),i(e,f),i(e,p),i(e,a),K(a,t[9]),i(e,E),i(e,b),t[22](b),i(e,U),i(e,x),S(L,d,g),S(L,V,g),S(L,I,g),S(L,C,g),i(C,_),K(_,t[10]),i(C,k),i(C,M),t[24](M),i(C,G),i(C,j),W||(Q=[z(n,"input",t[20]),z(a,"input",t[21]),z(x,"click",t[16]),z(_,"input",t[23]),z(j,"click",t[17])],W=!0)},p(L,g){g[0]&256&&n.value!==L[8]&&K(n,L[8]),g[0]&512&&a.value!==L[9]&&K(a,L[9]),g[0]&1024&&_.value!==L[10]&&K(_,L[10])},d(L){L&&(w(e),w(d),w(V),w(I),w(C)),t[22](null),t[24](null),W=!1,te(Q)}}}function ot(t){let e,l,u='<p class="user-prop svelte-13y6ugy">Mail:</p> <p class="user-prop svelte-13y6ugy">Password:</p> <p class="user-prop svelte-13y6ugy">First name:</p> <p class="user-prop svelte-13y6ugy">Last name:</p>',r,n,o,f=t[1].mail+"",c,p,a,E=t[1].password+"",b,P,U,x=t[1].first_name+"",O,d,V,I=t[1].last_name+"",C,_,k,M,A,G,j="Your wallet:",q,W,Q,L,g,h,pe="Your refferal codes",le,X,B,ae;function Ce(m,H){if(!m[6])return ft;if(m[6])return at}let ne=Ce(t),J=ne&&ne(t),se=xe(t[2]),Y=[];for(let m=0;m<se.length;m+=1)Y[m]=Ae(Ie(t,se,m));return{c(){e=y("div"),l=y("div"),l.innerHTML=u,r=T(),n=y("div"),o=y("p"),c=Z(f),p=T(),a=y("p"),b=Z(E),P=T(),U=y("p"),O=Z(x),d=T(),V=y("p"),C=Z(I),_=T(),k=y("hr"),M=T(),A=y("div"),G=y("p"),G.textContent=j,q=T(),W=y("button"),J&&J.c(),Q=T(),L=y("hr"),g=T(),h=y("p"),h.textContent=pe,le=T(),X=y("div");for(let m=0;m<Y.length;m+=1)Y[m].c();this.h()},l(m){e=v(m,"DIV",{class:!0});var H=F(e);l=v(H,"DIV",{class:!0,"data-svelte-h":!0}),R(l)!=="svelte-1ggxkgu"&&(l.innerHTML=u),r=N(H),n=v(H,"DIV",{class:!0});var D=F(n);o=v(D,"P",{class:!0});var fe=F(o);c=$(fe,f),fe.forEach(w),p=N(D),a=v(D,"P",{class:!0});var ke=F(a);b=$(ke,E),ke.forEach(w),P=N(D),U=v(D,"P",{class:!0});var Ee=F(U);O=$(Ee,x),Ee.forEach(w),d=N(D),V=v(D,"P",{class:!0});var Te=F(V);C=$(Te,I),Te.forEach(w),D.forEach(w),H.forEach(w),_=N(m),k=v(m,"HR",{class:!0}),M=N(m),A=v(m,"DIV",{class:!0});var _e=F(A);G=v(_e,"P",{class:!0,"data-svelte-h":!0}),R(G)!=="svelte-6plfvy"&&(G.textContent=j),q=N(_e),W=v(_e,"BUTTON",{class:!0});var Ne=F(W);J&&J.l(Ne),Ne.forEach(w),_e.forEach(w),Q=N(m),L=v(m,"HR",{class:!0}),g=N(m),h=v(m,"P",{class:!0,"data-svelte-h":!0}),R(h)!=="svelte-1p2wh6r"&&(h.textContent=pe),le=N(m),X=v(m,"DIV",{class:!0});var Pe=F(X);for(let ye=0;ye<Y.length;ye+=1)Y[ye].l(Pe);Pe.forEach(w),this.h()},h(){s(l,"class","user-property svelte-13y6ugy"),s(o,"class","user-prop-value mail svelte-13y6ugy"),s(a,"class","user-prop-value password svelte-13y6ugy"),s(U,"class","user-prop-value first-name svelte-13y6ugy"),s(V,"class","user-prop-value last-name svelte-13y6ugy"),s(n,"class","property-value svelte-13y6ugy"),s(e,"class","user-profile-info svelte-13y6ugy"),s(k,"class","svelte-13y6ugy"),s(G,"class","user-prop svelte-13y6ugy"),s(W,"class","wallet-button svelte-13y6ugy"),s(A,"class","wallet-connect svelte-13y6ugy"),s(L,"class","svelte-13y6ugy"),s(h,"class","refferal-codes-legend svelte-13y6ugy"),s(X,"class","refferal-codes svelte-13y6ugy")},m(m,H){S(m,e,H),i(e,l),i(e,r),i(e,n),i(n,o),i(o,c),i(n,p),i(n,a),i(a,b),i(n,P),i(n,U),i(U,O),i(n,d),i(n,V),i(V,C),S(m,_,H),S(m,k,H),S(m,M,H),S(m,A,H),i(A,G),i(A,q),i(A,W),J&&J.m(W,null),S(m,Q,H),S(m,L,H),S(m,g,H),S(m,h,H),S(m,le,H),S(m,X,H);for(let D=0;D<Y.length;D+=1)Y[D]&&Y[D].m(X,null);B||(ae=z(W,"click",t[18]),B=!0)},p(m,H){if(H[0]&2&&f!==(f=m[1].mail+"")&&ie(c,f),H[0]&2&&E!==(E=m[1].password+"")&&ie(b,E),H[0]&2&&x!==(x=m[1].first_name+"")&&ie(O,x),H[0]&2&&I!==(I=m[1].last_name+"")&&ie(C,I),ne===(ne=Ce(m))&&J?J.p(m,H):(J&&J.d(1),J=ne&&ne(m),J&&(J.c(),J.m(W,null))),H[0]&4){se=xe(m[2]);let D;for(D=0;D<se.length;D+=1){const fe=Ie(m,se,D);Y[D]?Y[D].p(fe,H):(Y[D]=Ae(fe),Y[D].c(),Y[D].m(X,null))}for(;D<Y.length;D+=1)Y[D].d(1);Y.length=se.length}},d(m){m&&(w(e),w(_),w(k),w(M),w(A),w(Q),w(L),w(g),w(h),w(le),w(X)),J&&J.d(),Re(Y,m),B=!1,ae()}}}function at(t){let e;return{c(){e=Z(t[7])},l(l){e=$(l,t[7])},m(l,u){S(l,e,u)},p(l,u){u[0]&128&&ie(e,l[7])},d(l){l&&w(e)}}}function ft(t){let e;return{c(){e=Z("Connect wallet")},l(l){e=$(l,"Connect wallet")},m(l,u){S(l,e,u)},p:ee,d(l){l&&w(e)}}}function Ae(t){let e,l=t[33].code+"",u;return{c(){e=y("p"),u=Z(l),this.h()},l(r){e=v(r,"P",{class:!0});var n=F(e);u=$(n,l),n.forEach(w),this.h()},h(){s(e,"class","ref-code svelte-13y6ugy"),he(e,"used",t[33].is_used),he(e,"not-used",!t[33].is_used)},m(r,n){S(r,e,n),i(e,u)},p(r,n){n[0]&4&&l!==(l=r[33].code+"")&&ie(u,l),n[0]&4&&he(e,"used",r[33].is_used),n[0]&4&&he(e,"not-used",!r[33].is_used)},d(r){r&&w(e)}}}function ct(t){let e,l,u,r,n,o,f="Close",c,p,a,E,b,P,U;function x(_,k){if(_[4])return ut;if(!_[4])return st}let O=x(t),d=O&&O(t);function V(_,k){if(_[4])return ot;if(!_[4]&&!_[5])return it;if(!_[4]&&_[5])return rt}let I=V(t),C=I&&I(t);return{c(){e=y("div"),l=y("span"),u=T(),r=y("section"),n=y("div"),o=y("button"),o.textContent=f,c=T(),d&&d.c(),p=T(),a=y("hr"),E=T(),C&&C.c(),this.h()},l(_){e=v(_,"DIV",{class:!0});var k=F(e);l=v(k,"SPAN",{class:!0,role:!0,tabindex:!0}),F(l).forEach(w),u=N(k),r=v(k,"SECTION",{class:!0});var M=F(r);n=v(M,"DIV",{class:!0});var A=F(n);o=v(A,"BUTTON",{class:!0,"data-svelte-h":!0}),R(o)!=="svelte-1y1fg9c"&&(o.textContent=f),c=N(A),d&&d.l(A),A.forEach(w),p=N(M),a=v(M,"HR",{class:!0}),E=N(M),C&&C.l(M),M.forEach(w),k.forEach(w),this.h()},h(){s(l,"class","profile-icon svelte-13y6ugy"),s(l,"role","button"),s(l,"tabindex","-1"),s(o,"class","close-button svelte-13y6ugy"),s(n,"class","log-in svelte-13y6ugy"),s(a,"class","svelte-13y6ugy"),s(r,"class",b="user-profile closed-"+t[3]+" svelte-13y6ugy"),s(e,"class","profile-container")},m(_,k){S(_,e,k),i(e,l),i(e,u),i(e,r),i(r,n),i(n,o),i(n,c),d&&d.m(n,null),i(r,p),i(r,a),i(r,E),C&&C.m(r,null),P||(U=[z(l,"click",t[15]),z(l,"keydown",t[15]),z(o,"click",t[15])],P=!0)},p(_,k){O===(O=x(_))&&d?d.p(_,k):(d&&d.d(1),d=O&&O(_),d&&(d.c(),d.m(n,null))),I===(I=V(_))&&C?C.p(_,k):(C&&C.d(1),C=I&&I(_),C&&(C.c(),C.m(r,null))),k[0]&8&&b!==(b="user-profile closed-"+_[3]+" svelte-13y6ugy")&&s(r,"class",b)},i:ee,o:ee,d(_){_&&w(e),d&&d.d(),C&&C.d(),P=!1,te(U)}}}function dt(t,e,l){let{user:u}=e,{codes:r}=e,n=!0,o=!1,f=!1,c=!1,p,a,E,b;const P={id:1,mail:void 0,password:void 0,first_name:void 0,last_name:void 0,role:"user"};let U,x,O,d;function V(){n?l(3,n=!1):(k(),l(3,n=!0),f&&l(5,f=!1))}function I(B){o?(console.log(`User "${u.mail}" is logged out`),l(4,o=!1)):a===u.mail&&E===u.password?(console.log(`User "${a}" is logged in`),l(4,o=!0),k()):(l(12,x.style.display="block",x),B.preventDefault())}function C(B){f?P.mail===void 0||P.password===void 0?(l(14,d.style.display="block",d),l(14,d.innerHTML="Fill in all required fields!",d),B.preventDefault()):P.password===U?(console.log("User created.",P),l(5,f=!1),M(P)):(l(14,d.style.display="block",d),l(14,d.innerHTML="Passwords do not match!",d),B.preventDefault()):r.map(ae=>{b===ae.code&&!ae.is_used?(console.log("Used referral code: ",b),l(5,f=!0),k()):(l(13,O.style.display="block",O),B.preventDefault())})}function _(){c?(console.log("Wallet disconnected."),l(6,c=!1)):(l(6,c=!0),console.log("Wallet connected."),l(7,p="0xeb0a...60c1"))}function k(){l(8,a=""),l(9,E=""),l(10,b=""),l(11,U=""),!f&&!o&&(l(12,x.style.display="none",x),l(13,O.style.display="none",O))}function M(B){B.mail=void 0,B.password=void 0,B.first_name=void 0,B.last_name=void 0,l(14,d.style.display="none",d)}const A=()=>window.open("https://degenerousdao.gitbook.io/wiki","_blank");function G(){a=this.value,l(8,a)}function j(){E=this.value,l(9,E)}function q(B){de[B?"unshift":"push"](()=>{x=B,l(12,x)})}function W(){b=this.value,l(10,b)}function Q(B){de[B?"unshift":"push"](()=>{O=B,l(13,O)})}function L(){P.mail=this.value,l(0,P)}function g(){P.password=this.value,l(0,P)}function h(){U=this.value,l(11,U)}function pe(){P.first_name=this.value,l(0,P)}function le(){P.last_name=this.value,l(0,P)}function X(B){de[B?"unshift":"push"](()=>{d=B,l(14,d)})}return t.$$set=B=>{"user"in B&&l(1,u=B.user),"codes"in B&&l(2,r=B.codes)},[P,u,r,n,o,f,c,p,a,E,b,U,x,O,d,V,I,C,_,A,G,j,q,W,Q,L,g,h,pe,le,X]}class _t extends lt{constructor(e){super(),tt(this,e,dt,ct,He,{user:1,codes:2,newUser:0},null,[-1,-1])}get newUser(){return this.$$.ctx[0]}}export{_t as default};
