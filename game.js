(()=>{var f0=Object.defineProperty;var p0=(i,e)=>{for(var t in e)f0(i,t,{get:e[t],enumerable:!0})};var $f=0,Ou=1,Yf=2;var Dr=1,Mc=2,xo=3,ta=0,hn=1,tn=2,Si=0,Qa=1,fn=2,Hu=3,zu=4,jf=5;var bs=100,Qf=101,Jf=102,Zf=103,Kf=104,ep=200,tp=201,np=202,ip=203,ku=204,Gu=205,ap=206,sp=207,op=208,rp=209,lp=210,cp=211,dp=212,up=213,hp=214,kl=0,Gl=1,Vl=2,so=3,ql=4,Wl=5,Xl=6,$l=7,Sc=0,fp=1,pp=2,Hi=0,Nr=1,Ur=2,Br=3,_s=4,Fr=5,Or=6,Hr=7;var Vu=300,Ja=301,ys=302,Ec=303,Tc=304,zr=306,za=1e3,ji=1001,Yl=1002,An=1003,mp=1004;var kr=1005;var _n=1006,wc=1007;var na=1008;var Zn=1009,qu=1010,Wu=1011,vo=1012,Ac=1013,zi=1014,Ei=1015,pn=1016,Cc=1017,Rc=1018,bo=1020,Xu=35902,$u=35899,Yu=1021,ju=1022,Ti=1023,Qi=1026,Za=1027,Pc=1028,Lc=1029,Ka=1030,Ic=1031;var Dc=1033,Gr=33776,Vr=33777,qr=33778,Wr=33779,Nc=35840,Uc=35841,Bc=35842,Fc=35843,Oc=36196,Hc=37492,zc=37496,kc=37488,Gc=37489,Xr=37490,Vc=37491,qc=37808,Wc=37809,Xc=37810,$c=37811,Yc=37812,jc=37813,Qc=37814,Jc=37815,Zc=37816,Kc=37817,ed=37818,td=37819,nd=37820,id=37821,ad=36492,sd=36494,od=36495,rd=36283,ld=36284,$r=36285,cd=36286;var ir=2300,jl=2301,Hl=2302,Tu=2303,wu=2400,Au=2401,Cu=2402;var gp=3200;var Yr=0,xp=1,Ma="",Gt="srgb",ar="srgb-linear",sr="linear",Pt="srgb";var zl=7680;var vp=519,bp=512,_p=513,yp=514,dd=515,Mp=516,Sp=517,ud=518,Ep=519,Ms=35044,Qu=35048;var Ju="300 es",Bi=2e3,oo=2001;function m0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function g0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tp(){let i=or("canvas");return i.style.display="block",i}var ff={},ro=null;function rr(...i){let e="THREE."+i.shift();ro?ro("log",e,...i):console.log(e,...i)}function wp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ot(...i){i=wp(i);let e="THREE."+i.shift();if(ro)ro("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function rt(...i){i=wp(i);let e="THREE."+i.shift();if(ro)ro("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ps(...i){let e=i.join(" ");e in ff||(ff[e]=!0,ot(...i))}function Ap(i,e,t){return new Promise(function(n,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Cp={[kl]:Gl,[Vl]:Xl,[ql]:$l,[so]:Wl,[Gl]:kl,[Xl]:Vl,[$l]:ql,[Wl]:so},Ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let a=n[e];if(a!==void 0){let s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let a=n.slice(0);for(let s=0,o=a.length;s<o;s++)a[s].call(this,e);e.target=null}}},Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zd=Math.PI/180,lr=180/Math.PI;function ba(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function x0(i,e){return(i%e+e)%e}function Kd(i,e,t){return(1-t)*i+t*e}function Yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ih=class ih{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*a+e.x,this.y=s*a+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ih.prototype.isVector2=!0;var ve=ih,dn=class{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,o,r){let l=n[a+0],c=n[a+1],u=n[a+2],p=n[a+3],d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(p!==_||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+p*_;m<0&&(d=-d,h=-h,g=-g,_=-_,m=-m);let f=1-r;if(m<.9995){let M=Math.acos(m),R=Math.sin(M);f=Math.sin(f*M)/R,r=Math.sin(r*M)/R,l=l*f+d*r,c=c*f+h*r,u=u*f+g*r,p=p*f+_*r}else{l=l*f+d*r,c=c*f+h*r,u=u*f+g*r,p=p*f+_*r;let M=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=M,c*=M,u*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,a,s,o){let r=n[a],l=n[a+1],c=n[a+2],u=n[a+3],p=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=r*g+u*p+l*h-c*d,e[t+1]=l*g+u*d+c*p-r*h,e[t+2]=c*g+u*h+r*d-l*p,e[t+3]=u*g-r*p-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,a=e._y,s=e._z,o=e._order,r=Math.cos,l=Math.sin,c=r(n/2),u=r(a/2),p=r(s/2),d=l(n/2),h=l(a/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*p+c*h*g,this._y=c*h*p-d*u*g,this._z=c*u*g+d*h*p,this._w=c*u*p-d*h*g;break;case"YXZ":this._x=d*u*p+c*h*g,this._y=c*h*p-d*u*g,this._z=c*u*g-d*h*p,this._w=c*u*p+d*h*g;break;case"ZXY":this._x=d*u*p-c*h*g,this._y=c*h*p+d*u*g,this._z=c*u*g+d*h*p,this._w=c*u*p-d*h*g;break;case"ZYX":this._x=d*u*p-c*h*g,this._y=c*h*p+d*u*g,this._z=c*u*g-d*h*p,this._w=c*u*p+d*h*g;break;case"YZX":this._x=d*u*p+c*h*g,this._y=c*h*p+d*u*g,this._z=c*u*g-d*h*p,this._w=c*u*p-d*h*g;break;case"XZY":this._x=d*u*p-c*h*g,this._y=c*h*p-d*u*g,this._z=c*u*g+d*h*p,this._w=c*u*p+d*h*g;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],a=t[4],s=t[8],o=t[1],r=t[5],l=t[9],c=t[2],u=t[6],p=t[10],d=n+r+p;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-a)*h}else if(n>r&&n>p){let h=2*Math.sqrt(1+n-r-p);this._w=(u-l)/h,this._x=.25*h,this._y=(a+o)/h,this._z=(s+c)/h}else if(r>p){let h=2*Math.sqrt(1+r-n-p);this._w=(s-c)/h,this._x=(a+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+p-n-r);this._w=(o-a)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,a=e._y,s=e._z,o=e._w,r=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*r+a*c-s*l,this._y=a*u+o*l+s*r-n*c,this._z=s*u+o*c+n*l-a*r,this._w=o*u-n*r-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,s=e._z,o=e._w,r=this.dot(e);r<0&&(n=-n,a=-a,s=-s,o=-o,r=-r);let l=1-t;if(r<.9995){let c=Math.acos(r),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ah=class ah{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,a=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,a=this.z,s=e.x,o=e.y,r=e.z,l=e.w,c=2*(o*a-r*n),u=2*(r*t-s*a),p=2*(s*n-o*t);return this.x=t+l*c+o*p-r*u,this.y=n+l*u+r*c-s*p,this.z=a+l*p+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,a=e.y,s=e.z,o=t.x,r=t.y,l=t.z;return this.x=a*l-s*r,this.y=s*o-n*l,this.z=n*r-a*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eu.copy(this).projectOnVector(e),this.sub(eu)}reflect(e){return this.sub(eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ah.prototype.isVector3=!0;var D=ah,eu=new D,pf=new dn,sh=class sh{constructor(e,t,n,a,s,o,r,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,o,r,l,c)}set(e,t,n,a,s,o,r,l,c){let u=this.elements;return u[0]=e,u[1]=a,u[2]=r,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,a=t.elements,s=this.elements,o=n[0],r=n[3],l=n[6],c=n[1],u=n[4],p=n[7],d=n[2],h=n[5],g=n[8],_=a[0],m=a[3],f=a[6],M=a[1],R=a[4],b=a[7],w=a[2],T=a[5],L=a[8];return s[0]=o*_+r*M+l*w,s[3]=o*m+r*R+l*T,s[6]=o*f+r*b+l*L,s[1]=c*_+u*M+p*w,s[4]=c*m+u*R+p*T,s[7]=c*f+u*b+p*L,s[2]=d*_+h*M+g*w,s[5]=d*m+h*R+g*T,s[8]=d*f+h*b+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*r*c-n*s*u+n*r*l+a*s*c-a*o*l}invert(){let e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8],p=u*o-r*c,d=r*l-u*s,h=c*s-o*l,g=t*p+n*d+a*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=p*_,e[1]=(a*c-u*n)*_,e[2]=(r*n-a*o)*_,e[3]=d*_,e[4]=(u*t-a*l)*_,e[5]=(a*s-r*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,o,r){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*r)+o+e,-a*c,a*l,-a*(-c*o+l*r)+r+t,0,0,1),this}scale(e,t){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tu.makeScale(e,t)),this}rotate(e){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tu.makeRotation(-e)),this}translate(e,t){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sh.prototype.isMatrix3=!0;var ft=sh,tu=new ft,mf=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gf=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function v0(){let i={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(a,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Pt&&(a.r=_a(a.r),a.g=_a(a.g),a.b=_a(a.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pt&&(a.r=ao(a.r),a.g=ao(a.g),a.b=ao(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ma?sr:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,o){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ar]:{primaries:e,whitePoint:n,transfer:sr,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}var yt=v0();function _a(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zs,Ql=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zs===void 0&&(zs=or("canvas")),zs.width=e.width,zs.height=e.height;let a=zs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=or("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let o=0;o<s.length;o++)s[o]=_a(s[o]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_a(t[n]/255)*255):t[n]=_a(t[n]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},b0=0,lo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=ba(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let o=0,r=a.length;o<r;o++)a[o].isDataTexture?s.push(nu(a[o].image)):s.push(nu(a[o]))}else s=nu(a);n.url=s}return t||(e.images[this.uuid]=n),n}};function nu(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}var _0=0,iu=new D,Pn=class i extends Ji{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ji,a=ji,s=_n,o=na,r=Ti,l=Zn,c=i.DEFAULT_ANISOTROPY,u=Ma){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=ba(),this.name="",this.source=new lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(iu).x}get height(){return this.source.getSize(iu).y}get depth(){return this.source.getSize(iu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case za:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case Yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case za:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case Yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Vu;Pn.DEFAULT_ANISOTROPY=1;var oh=class oh{constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,a=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*a+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*a+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*a+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s,l=e.elements,c=l[0],u=l[4],p=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,b=(h+1)/2,w=(f+1)/2,T=(u+d)/4,L=(p+_)/4,v=(g+m)/4;return R>b&&R>w?R<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(R),a=T/n,s=L/n):b>w?b<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(b),n=T/a,s=v/a):w<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(w),n=L/s,a=v/s),this.set(n,a,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(p-_)*(p-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(p-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};oh.prototype.isVector4=!0;var Vt=oh,Jl=class extends Ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let a={width:e,height:t,depth:n.depth},s=new Pn(a),o=n.count;for(let r=0;r<o;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let a=Object.assign({},e.textures[t].image);this.textures[t].source=new lo(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Jl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},cr=class extends Pn{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zl=class extends Pn{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var yc=class yc{constructor(e,t,n,a,s,o,r,l,c,u,p,d,h,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,o,r,l,c,u,p,d,h,g,_,m)}set(e,t,n,a,s,o,r,l,c,u,p,d,h,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=a,f[1]=s,f[5]=o,f[9]=r,f[13]=l,f[2]=c,f[6]=u,f[10]=p,f[14]=d,f[3]=h,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,a=1/ks.setFromMatrixColumn(e,0).length(),s=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,a=e.y,s=e.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(a),c=Math.sin(a),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let d=o*u,h=o*p,g=r*u,_=r*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-r*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,h=l*p,g=c*u,_=c*p;t[0]=d+_*r,t[4]=g*r-h,t[8]=o*c,t[1]=o*p,t[5]=o*u,t[9]=-r,t[2]=h*r-g,t[6]=_+d*r,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,h=l*p,g=c*u,_=c*p;t[0]=d-_*r,t[4]=-o*p,t[8]=g+h*r,t[1]=h+g*r,t[5]=o*u,t[9]=_-d*r,t[2]=-o*c,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,h=o*p,g=r*u,_=r*p;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*p,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,h=o*c,g=r*l,_=r*c;t[0]=l*u,t[4]=_-d*p,t[8]=g*p+h,t[1]=p,t[5]=o*u,t[9]=-r*u,t[2]=-c*u,t[6]=h*p+g,t[10]=d-_*p}else if(e.order==="XZY"){let d=o*l,h=o*c,g=r*l,_=r*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=d*p+_,t[5]=o*u,t[9]=h*p-g,t[2]=g*p-h,t[6]=r*u,t[10]=_*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y0,e,M0)}lookAt(e,t,n){let a=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Ua.crossVectors(n,ci),Ua.lengthSq()===0&&(Math.abs(n.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Ua.crossVectors(n,ci)),Ua.normalize(),pl.crossVectors(ci,Ua),a[0]=Ua.x,a[4]=pl.x,a[8]=ci.x,a[1]=Ua.y,a[5]=pl.y,a[9]=ci.y,a[2]=Ua.z,a[6]=pl.z,a[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,a=t.elements,s=this.elements,o=n[0],r=n[4],l=n[8],c=n[12],u=n[1],p=n[5],d=n[9],h=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],R=n[7],b=n[11],w=n[15],T=a[0],L=a[4],v=a[8],y=a[12],S=a[1],C=a[5],P=a[9],B=a[13],I=a[2],U=a[6],Y=a[10],J=a[14],se=a[3],F=a[7],k=a[11],j=a[15];return s[0]=o*T+r*S+l*I+c*se,s[4]=o*L+r*C+l*U+c*F,s[8]=o*v+r*P+l*Y+c*k,s[12]=o*y+r*B+l*J+c*j,s[1]=u*T+p*S+d*I+h*se,s[5]=u*L+p*C+d*U+h*F,s[9]=u*v+p*P+d*Y+h*k,s[13]=u*y+p*B+d*J+h*j,s[2]=g*T+_*S+m*I+f*se,s[6]=g*L+_*C+m*U+f*F,s[10]=g*v+_*P+m*Y+f*k,s[14]=g*y+_*B+m*J+f*j,s[3]=M*T+R*S+b*I+w*se,s[7]=M*L+R*C+b*U+w*F,s[11]=M*v+R*P+b*Y+w*k,s[15]=M*y+R*B+b*J+w*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],o=e[1],r=e[5],l=e[9],c=e[13],u=e[2],p=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],f=e[15],M=l*h-c*d,R=r*h-c*p,b=r*d-l*p,w=o*h-c*u,T=o*d-l*u,L=o*p-r*u;return t*(_*M-m*R+f*b)-n*(g*M-m*w+f*T)+a*(g*R-_*w+f*L)-s*(g*b-_*T+m*L)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],a=e[8],s=e[1],o=e[5],r=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-r*c)-n*(s*u-r*l)+a*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8],p=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],f=e[15],M=t*r-n*o,R=t*l-a*o,b=t*c-s*o,w=n*l-a*r,T=n*c-s*r,L=a*c-s*l,v=u*_-p*g,y=u*m-d*g,S=u*f-h*g,C=p*m-d*_,P=p*f-h*_,B=d*f-h*m,I=M*B-R*P+b*C+w*S-T*y+L*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return e[0]=(r*B-l*P+c*C)*U,e[1]=(a*P-n*B-s*C)*U,e[2]=(_*L-m*T+f*w)*U,e[3]=(d*T-p*L-h*w)*U,e[4]=(l*S-o*B-c*y)*U,e[5]=(t*B-a*S+s*y)*U,e[6]=(m*b-g*L-f*R)*U,e[7]=(u*L-d*b+h*R)*U,e[8]=(o*P-r*S+c*v)*U,e[9]=(n*S-t*P-s*v)*U,e[10]=(g*T-_*b+f*M)*U,e[11]=(p*b-u*T-h*M)*U,e[12]=(r*y-o*C-l*v)*U,e[13]=(t*C-n*y+a*v)*U,e[14]=(_*R-g*w-m*M)*U,e[15]=(u*w-p*R+d*M)*U,this}scale(e){let t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),a=Math.sin(t),s=1-n,o=e.x,r=e.y,l=e.z,c=s*o,u=s*r;return this.set(c*o+n,c*r-a*l,c*l+a*r,0,c*r+a*l,u*r+n,u*l-a*o,0,c*l-a*r,u*l+a*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,o){return this.set(1,n,s,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){let a=this.elements,s=t._x,o=t._y,r=t._z,l=t._w,c=s+s,u=o+o,p=r+r,d=s*c,h=s*u,g=s*p,_=o*u,m=o*p,f=r*p,M=l*c,R=l*u,b=l*p,w=n.x,T=n.y,L=n.z;return a[0]=(1-(_+f))*w,a[1]=(h+b)*w,a[2]=(g-R)*w,a[3]=0,a[4]=(h-b)*T,a[5]=(1-(d+f))*T,a[6]=(m+M)*T,a[7]=0,a[8]=(g+R)*L,a[9]=(m-M)*L,a[10]=(1-(d+_))*L,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){let a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=ks.set(a[0],a[1],a[2]).length(),r=ks.set(a[4],a[5],a[6]).length(),l=ks.set(a[8],a[9],a[10]).length();s<0&&(o=-o),Di.copy(this);let c=1/o,u=1/r,p=1/l;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=u,Di.elements[5]*=u,Di.elements[6]*=u,Di.elements[8]*=p,Di.elements[9]*=p,Di.elements[10]*=p,t.setFromRotationMatrix(Di),n.x=o,n.y=r,n.z=l,this}makePerspective(e,t,n,a,s,o,r=Bi,l=!1){let c=this.elements,u=2*s/(t-e),p=2*s/(n-a),d=(t+e)/(t-e),h=(n+a)/(n-a),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(r===Bi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(r===oo)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,a,s,o,r=Bi,l=!1){let c=this.elements,u=2/(t-e),p=2/(n-a),d=-(t+e)/(t-e),h=-(n+a)/(n-a),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(r===Bi)g=-2/(o-s),_=-(o+s)/(o-s);else if(r===oo)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};yc.prototype.isMatrix4=!0;var dt=yc,ks=new D,Di=new dt,y0=new D(0,0,0),M0=new D(1,1,1),Ua=new D,pl=new D,ci=new D,xf=new dt,vf=new dn,On=class i{constructor(e=0,t=0,n=0,a=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let a=e.elements,s=a[0],o=a[4],r=a[8],l=a[1],c=a[5],u=a[9],p=a[2],d=a[6],h=a[10];switch(t){case"XYZ":this._y=Math.asin(Mt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(r,h));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vf.setFromEuler(this),this.setFromQuaternion(vf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var co=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},S0=0,bf=new D,Gs=new dn,fa=new dt,ml=new D,Wo=new D,E0=new D,T0=new dn,_f=new D(1,0,0),yf=new D(0,1,0),Mf=new D(0,0,1),Sf={type:"added"},w0={type:"removed"},Vs={type:"childadded",child:null},au={type:"childremoved",child:null},un=class i extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new On,n=new dn,a=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new dt},normalMatrix:{value:new ft}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(_f,e)}rotateY(e){return this.rotateOnAxis(yf,e)}rotateZ(e){return this.rotateOnAxis(Mf,e)}translateOnAxis(e,t){return bf.copy(e).applyQuaternion(this.quaternion),this.position.add(bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_f,e)}translateY(e){return this.translateOnAxis(yf,e)}translateZ(e){return this.translateOnAxis(Mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ml.copy(e):ml.set(e,t,n);let a=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Wo,ml,this.up):fa.lookAt(ml,Wo,this.up),this.quaternion.setFromRotationMatrix(fa),a&&(fa.extractRotation(a.matrixWorld),Gs.setFromRotationMatrix(fa),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sf),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(w0),au.child=e,this.dispatchEvent(au),au.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sf),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,T0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,a=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*a,s[13]+=n-s[1]*t-s[5]*n-s[9]*a,s[14]+=a-s[2]*t-s[6]*n-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(r=>({...r})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);let r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){let l=r.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(e.materials,this.material[l]));a.material=r}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let r=0;r<this.children.length;r++)a.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let r=0;r<this.animations.length;r++){let l=this.animations[r];a.animations.push(s(e.animations,l))}}if(t){let r=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),p=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=a,n;function o(r){let l=[];for(let c in r){let u=r[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let a=e.children[n];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};un.DEFAULT_UP=new D(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},A0={type:"move"},uo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,o=null,r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));r!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return r!==null&&(r.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},gl={h:0,s:0,l:0};function su(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=yt.workingColorSpace){if(e=x0(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=su(o,s,e+1/3),this.g=su(o,s,e),this.b=su(o,s,e-1/3)}return yt.colorSpaceToWorking(this,a),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=a[1],r=a[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=a[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=Rp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return yt.workingToColorSpace(Fn.copy(this),e),Math.round(Mt(Fn.r*255,0,255))*65536+Math.round(Mt(Fn.g*255,0,255))*256+Math.round(Mt(Fn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Fn.copy(this),t);let n=Fn.r,a=Fn.g,s=Fn.b,o=Math.max(n,a,s),r=Math.min(n,a,s),l,c,u=(r+o)/2;if(r===o)l=0,c=0;else{let p=o-r;switch(c=u<=.5?p/(o+r):p/(2-o-r),o){case n:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-n)/p+2;break;case s:l=(n-a)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Gt){yt.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,n=Fn.g,a=Fn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(Ba),this.setHSL(Ba.h+e,Ba.s+t,Ba.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ba),e.getHSL(gl);let n=Kd(Ba.h,gl.h,t),a=Kd(Ba.s,gl.s,t),s=Kd(Ba.l,gl.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new Ne;Ne.NAMES=Rp;var ms=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ya=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ni=new D,pa=new D,ou=new D,ma=new D,qs=new D,Ws=new D,Ef=new D,ru=new D,lu=new D,cu=new D,du=new Vt,uu=new Vt,hu=new Vt,va=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Ni.subVectors(e,t),a.cross(Ni);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){Ni.subVectors(a,t),pa.subVectors(n,t),ou.subVectors(e,t);let o=Ni.dot(Ni),r=Ni.dot(pa),l=Ni.dot(ou),c=pa.dot(pa),u=pa.dot(ou),p=o*c-r*r;if(p===0)return s.set(0,0,0),null;let d=1/p,h=(c*l-r*u)*d,g=(o*u-r*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,t,n,a,s,o,r,l){return this.getBarycoord(e,t,n,a,ma)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ma.x),l.addScaledVector(o,ma.y),l.addScaledVector(r,ma.z),l)}static getInterpolatedAttribute(e,t,n,a,s,o){return du.setScalar(0),uu.setScalar(0),hu.setScalar(0),du.fromBufferAttribute(e,t),uu.fromBufferAttribute(e,n),hu.fromBufferAttribute(e,a),o.setScalar(0),o.addScaledVector(du,s.x),o.addScaledVector(uu,s.y),o.addScaledVector(hu,s.z),o}static isFrontFacing(e,t,n,a){return Ni.subVectors(n,t),pa.subVectors(e,t),Ni.cross(pa).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ni.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,a=this.b,s=this.c,o,r;qs.subVectors(a,n),Ws.subVectors(s,n),ru.subVectors(e,n);let l=qs.dot(ru),c=Ws.dot(ru);if(l<=0&&c<=0)return t.copy(n);lu.subVectors(e,a);let u=qs.dot(lu),p=Ws.dot(lu);if(u>=0&&p<=u)return t.copy(a);let d=l*p-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(qs,o);cu.subVectors(e,s);let h=qs.dot(cu),g=Ws.dot(cu);if(g>=0&&h<=g)return t.copy(s);let _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(n).addScaledVector(Ws,r);let m=u*g-h*p;if(m<=0&&p-u>=0&&h-g>=0)return Ef.subVectors(s,a),r=(p-u)/(p-u+(h-g)),t.copy(a).addScaledVector(Ef,r);let f=1/(m+_+d);return o=_*f,r=d*f,t.copy(n).addScaledVector(qs,o).addScaledVector(Ws,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,r=s.count;o<r;o++)e.isMesh===!0?e.getVertexPosition(o,Ui):Ui.fromBufferAttribute(s,o),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xl.copy(n.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}let a=e.children;for(let s=0,o=a.length;s<o;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),vl.subVectors(this.max,Xo),Xs.subVectors(e.a,Xo),$s.subVectors(e.b,Xo),Ys.subVectors(e.c,Xo),Fa.subVectors($s,Xs),Oa.subVectors(Ys,$s),ds.subVectors(Xs,Ys);let t=[0,-Fa.z,Fa.y,0,-Oa.z,Oa.y,0,-ds.z,ds.y,Fa.z,0,-Fa.x,Oa.z,0,-Oa.x,ds.z,0,-ds.x,-Fa.y,Fa.x,0,-Oa.y,Oa.x,0,-ds.y,ds.x,0];return!fu(t,Xs,$s,Ys,vl)||(t=[1,0,0,0,1,0,0,0,1],!fu(t,Xs,$s,Ys,vl))?!1:(bl.crossVectors(Fa,Oa),t=[bl.x,bl.y,bl.z],fu(t,Xs,$s,Ys,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ga),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ga=[new D,new D,new D,new D,new D,new D,new D,new D],Ui=new D,xl=new Zi,Xs=new D,$s=new D,Ys=new D,Fa=new D,Oa=new D,ds=new D,Xo=new D,vl=new D,bl=new D,us=new D;function fu(i,e,t,n,a){for(let s=0,o=i.length-3;s<=o;s+=3){us.fromArray(i,s);let r=a.x*Math.abs(us.x)+a.y*Math.abs(us.y)+a.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),u=n.dot(us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>r)return!1}return!0}var xn=new D,_l=new ve,C0=0,$n=class extends Ji{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ms,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_l.fromBufferAttribute(this,t),_l.applyMatrix3(e),this.setXY(t,_l.x,_l.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),a=zt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),a=zt(a,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var dr=class extends $n{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ur=class extends $n{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends $n{constructor(e,t,n){super(new Float32Array(e),t,n)}},R0=new Zi,$o=new D,pu=new D,ka=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):R0.setFromPoints(e).getCenter(n);let a=0;for(let s=0,o=e.length;s<o;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);let t=$o.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector($o,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(pu)),this.expandByPoint($o.copy(e.center).sub(pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},P0=0,bi=new dt,mu=new un,js=new D,di=new Zi,Yo=new Zi,wn=new D,Jt=class i extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m0(e)?ur:dr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ft().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,n){return bi.makeTranslation(e,t,n),this.applyMatrix4(bi),this}scale(e,t,n){return bi.makeScale(e,t,n),this.applyMatrix4(bi),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let a=0,s=e.length;a<s;a++){let o=e[a];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let a=0;a<n;a++){let s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){let s=t[n];di.setFromBufferAttribute(s),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let r=t[s];Yo.setFromBufferAttribute(r),this.morphTargetsRelative?(wn.addVectors(di.min,Yo.min),di.expandByPoint(wn),wn.addVectors(di.max,Yo.max),di.expandByPoint(wn)):(di.expandByPoint(Yo.min),di.expandByPoint(Yo.max))}di.getCenter(n);let a=0;for(let s=0,o=e.count;s<o;s++)wn.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(wn));if(t)for(let s=0,o=t.length;s<o;s++){let r=t[s],l=this.morphTargetsRelative;for(let c=0,u=r.count;c<u;c++)wn.fromBufferAttribute(r,c),l&&(js.fromBufferAttribute(e,c),wn.add(js)),a=Math.max(a,n.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,a=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new $n(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let r=[],l=[];for(let v=0;v<n.count;v++)r[v]=new D,l[v]=new D;let c=new D,u=new D,p=new D,d=new ve,h=new ve,g=new ve,_=new D,m=new D;function f(v,y,S){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),p.fromBufferAttribute(n,S),d.fromBufferAttribute(s,v),h.fromBufferAttribute(s,y),g.fromBufferAttribute(s,S),u.sub(c),p.sub(c),h.sub(d),g.sub(d);let C=1/(h.x*g.y-g.x*h.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(p,-h.y).multiplyScalar(C),m.copy(p).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(C),r[v].add(_),r[y].add(_),r[S].add(_),l[v].add(m),l[y].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,y=M.length;v<y;++v){let S=M[v],C=S.start,P=S.count;for(let B=C,I=C+P;B<I;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let R=new D,b=new D,w=new D,T=new D;function L(v){w.fromBufferAttribute(a,v),T.copy(w);let y=r[v];R.copy(y),R.sub(w.multiplyScalar(w.dot(y))).normalize(),b.crossVectors(T,y);let C=b.dot(l[v])<0?-1:1;o.setXYZW(v,R.x,R.y,R.z,C)}for(let v=0,y=M.length;v<y;++v){let S=M[v],C=S.start,P=S.count;for(let B=C,I=C+P;B<I;B+=3)L(e.getX(B+0)),L(e.getX(B+1)),L(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let a=new D,s=new D,o=new D,r=new D,l=new D,c=new D,u=new D,p=new D;if(e)for(let d=0,h=e.count;d<h;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),p.subVectors(a,s),u.cross(p),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),r.add(u),l.add(u),c.add(u),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)a.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),p.subVectors(a,s),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(r,l){let c=r.array,u=r.itemSize,p=r.normalized,d=new c.constructor(l.length*u),h=0,g=0;for(let _=0,m=l.length;_<m;_++){r.isInterleavedBufferAttribute?h=l[_]*r.data.stride+r.offset:h=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[h++]}return new $n(d,u,p)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,a=this.attributes;for(let r in a){let l=a[r],c=e(l,n);t.setAttribute(r,c)}let s=this.morphAttributes;for(let r in s){let l=[],c=s[r];for(let u=0,p=c.length;u<p;u++){let d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let r=0,l=o.length;r<l;r++){let c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let a={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){let h=c[p];u.push(h.toJSON(e.data))}u.length>0&&(a[l]=u,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let a=e.attributes;for(let c in a){let u=a[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],p=s[c];for(let d=0,h=p.length;d<h;d++)u.push(p[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ms,this.updateRanges=[],this.version=0,this.uuid=ba()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[n+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ba()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ba()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},qn=new D,hr=class i{constructor(e,t,n,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyMatrix4(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyNormalMatrix(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.transformDirection(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),a=zt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),a=zt(a,this.array),s=zt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){rr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let a=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new $n(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){rr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let a=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gu=new D,L0=new D,I0=new ft,ui=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let a=gu.subVectors(n,t).cross(L0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let a=e.delta(gu),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(a,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||I0.getNormalMatrix(e),a=this.coplanarPoint(gu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},D0=0,Ki=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=ba(),this.name="",this.type="Material",this.blending=Qa,this.side=ta,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ku,this.blendDst=Gu,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zl,this.stencilZFail=zl,this.stencilZPass=zl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){let o=[];for(let r in s){let l=s[r];delete l.metadata,o.push(l)}return o}if(t){let s=a(e.textures),o=a(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ui().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ln=class extends Ki{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qs,jo=new D,Js=new D,Zs=new D,Ks=new ve,Qo=new ve,Pp=new dt,yl=new D,Jo=new D,Ml=new D,Tf=new ve,xu=new ve,wf=new ve,Hn=class extends un{constructor(e=new Ln){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new Jt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Kl(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new hr(n,3,0,!1)),Qs.setAttribute("uv",new hr(n,2,3,!1))}this.geometry=Qs,this.material=e,this.center=new ve(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),Pp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-Zs.z);let n=this.material.rotation,a,s;n!==0&&(s=Math.cos(n),a=Math.sin(n));let o=this.center;Sl(yl.set(-.5,-.5,0),Zs,o,Js,a,s),Sl(Jo.set(.5,-.5,0),Zs,o,Js,a,s),Sl(Ml.set(.5,.5,0),Zs,o,Js,a,s),Tf.set(0,0),xu.set(1,0),wf.set(1,1);let r=e.ray.intersectTriangle(yl,Jo,Ml,!1,jo);if(r===null&&(Sl(Jo.set(-.5,.5,0),Zs,o,Js,a,s),xu.set(0,1),r=e.ray.intersectTriangle(yl,Ml,Jo,!1,jo),r===null))return;let l=e.ray.origin.distanceTo(jo);l<e.near||l>e.far||t.push({distance:l,point:jo.clone(),uv:va.getInterpolation(jo,yl,Jo,Ml,Tf,xu,wf,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Sl(i,e,t,n,a,s){Ks.subVectors(i,t).addScalar(.5).multiply(n),a!==void 0?(Qo.x=s*Ks.x-a*Ks.y,Qo.y=a*Ks.x+s*Ks.y):Qo.copy(Ks),i.copy(e),i.x+=Qo.x,i.y+=Qo.y,i.applyMatrix4(Pp)}var xa=new D,vu=new D,El=new D,Tl=new D,fr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xa.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,t),xa.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){vu.copy(e).add(t).multiplyScalar(.5),El.copy(t).sub(e).normalize(),Tl.copy(this.origin).sub(vu);let s=e.distanceTo(t)*.5,o=-this.direction.dot(El),r=Tl.dot(this.direction),l=-Tl.dot(El),c=Tl.lengthSq(),u=Math.abs(1-o*o),p,d,h,g;if(u>0)if(p=o*l-r,d=o*r-l,g=s*u,p>=0)if(d>=-g)if(d<=g){let _=1/u;p*=_,d*=_,h=p*(p+o*d+2*r)+d*(o*p+d+2*l)+c}else d=s,p=Math.max(0,-(o*d+r)),h=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(o*d+r)),h=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-o*s+r)),d=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(p=Math.max(0,-(o*s+r)),d=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+d*(d+2*l)+c);else d=o>0?-s:s,p=Math.max(0,-(o*d+r)),h=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(vu).addScaledVector(El,d),h}intersectSphere(e,t){if(e.radius<0)return null;xa.subVectors(e.center,this.origin);let n=xa.dot(this.direction),a=xa.dot(xa)-n*n,s=e.radius*e.radius;if(a>s)return null;let o=Math.sqrt(s-a),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,o,r,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,a=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,a=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>a||((s>n||isNaN(n))&&(n=s),(o<a||isNaN(a))&&(a=o),p>=0?(r=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(r=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),n>l||r>a)||((r>n||n!==n)&&(n=r),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,t,n,a,s){let o=this.origin,r=this.direction,l=r.x,c=r.y,u=r.z,p=e.x-o.x,d=e.y-o.y,h=e.z-o.z,g=t.x-o.x,_=t.y-o.y,m=t.z-o.z,f=n.x-o.x,M=n.y-o.y,R=n.z-o.z,b=Math.abs(l),w=Math.abs(c),T=Math.abs(u),L,v,y,S,C,P,B,I,U,Y,J,se;if(b>=w&&b>=T?(y=l,P=p,U=g,se=f,l>=0?(L=c,v=u,S=d,C=h,B=_,I=m,Y=M,J=R):(L=u,v=c,S=h,C=d,B=m,I=_,Y=R,J=M)):w>=T?(y=c,P=d,U=_,se=M,c>=0?(L=u,v=l,S=h,C=p,B=m,I=g,Y=R,J=f):(L=l,v=u,S=p,C=h,B=g,I=m,Y=f,J=R)):(y=u,P=h,U=m,se=R,u>=0?(L=l,v=c,S=p,C=d,B=g,I=_,Y=f,J=M):(L=c,v=l,S=d,C=p,B=_,I=g,Y=M,J=f)),y===0)return null;let F=L/y,k=v/y,j=1/y,ge=S-F*P,O=C-k*P,G=B-F*U,X=I-k*U,de=Y-F*se,N=J-k*se,q=de*X-N*G,le=ge*N-O*de,Z=G*O-X*ge;if(a){if(q<0||le<0||Z<0)return null}else if((q<0||le<0||Z<0)&&(q>0||le>0||Z>0))return null;let ne=q+le+Z;if(ne===0)return null;let he=j*(q*P+le*U+Z*se);return(ne>0?he<0:he>0)?null:this.at(he/ne,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Af=new dt,hs=new fr,wl=new ka,Cf=new D,Al=new D,Cl=new D,Rl=new D,bu=new D,Pl=new D,Rf=new D,Ll=new D,te=class extends un{constructor(e=new Jt,t=new gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=a.length;s<o;s++){let r=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){let n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(a,e);let r=this.morphTargetInfluences;if(s&&r){Pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=r[l],p=s[l];u!==0&&(bu.fromBufferAttribute(p,e),o?Pl.addScaledVector(bu,u):Pl.addScaledVector(bu.sub(t),u))}t.add(Pl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(s),hs.copy(e.ray).recast(e.near),!(wl.containsPoint(hs.origin)===!1&&(hs.intersectSphere(wl,Cf)===null||hs.origin.distanceToSquared(Cf)>(e.far-e.near)**2))&&(Af.copy(s).invert(),hs.copy(e.ray).applyMatrix4(Af),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let a,s=this.geometry,o=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,d=s.groups,h=s.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,h.start),R=Math.min(r.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,w=R;b<w;b+=3){let T=r.getX(b),L=r.getX(b+1),v=r.getX(b+2);a=Il(this,f,e,n,c,u,p,T,L,v),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let g=Math.max(0,h.start),_=Math.min(r.count,h.start+h.count);for(let m=g,f=_;m<f;m+=3){let M=r.getX(m),R=r.getX(m+1),b=r.getX(m+2);a=Il(this,o,e,n,c,u,p,M,R,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,h.start),R=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,w=R;b<w;b+=3){let T=b,L=b+1,v=b+2;a=Il(this,f,e,n,c,u,p,T,L,v),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,f=_;m<f;m+=3){let M=m,R=m+1,b=m+2;a=Il(this,o,e,n,c,u,p,M,R,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}};function N0(i,e,t,n,a,s,o,r){let l;if(e.side===hn?l=n.intersectTriangle(o,s,a,!0,r):l=n.intersectTriangle(a,s,o,e.side===ta,r),l===null)return null;Ll.copy(r),Ll.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ll);return c<t.near||c>t.far?null:{distance:c,point:Ll.clone(),object:i}}function Il(i,e,t,n,a,s,o,r,l,c){i.getVertexPosition(r,Al),i.getVertexPosition(l,Cl),i.getVertexPosition(c,Rl);let u=N0(i,e,t,n,Al,Cl,Rl,Rf);if(u){let p=new D;va.getBarycoord(Rf,Al,Cl,Rl,p),a&&(u.uv=va.getInterpolatedAttribute(a,r,l,c,p,new ve)),s&&(u.uv1=va.getInterpolatedAttribute(s,r,l,c,p,new ve)),o&&(u.normal=va.getInterpolatedAttribute(o,r,l,c,p,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:r,b:l,c,normal:new D,materialIndex:0};va.getNormal(Al,Cl,Rl,d.normal),u.face=d,u.barycoord=p}return u}var pr=class extends Pn{constructor(e=null,t=1,n=1,a,s,o,r,l,c=An,u=An,p,d){super(null,o,r,l,c,u,a,s,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mr=class extends $n{constructor(e,t,n,a=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},eo=new dt,Pf=new dt,Dl=[],Lf=new Zi,U0=new dt,Zo=new te,Ko=new ka,Yn=class extends te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<n;a++)this.setMatrixAt(a,U0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,eo),Lf.copy(e.boundingBox).applyMatrix4(eo),this.boundingBox.union(Lf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ka),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,eo),Ko.copy(e.boundingSphere).applyMatrix4(eo),this.boundingSphere.union(Ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,a=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let r=0;r<n.length;r++)n[r]=a[o+r]}raycast(e,t){let n=this.matrixWorld,a=this.count;if(Zo.geometry=this.geometry,Zo.material=this.material,Zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(n),e.ray.intersectsSphere(Ko)!==!1))for(let s=0;s<a;s++){this.getMatrixAt(s,eo),Pf.multiplyMatrices(n,eo),Zo.matrixWorld=Pf,Zo.raycast(e,Dl);for(let o=0,r=Dl.length;o<r;o++){let l=Dl[o];l.instanceId=s,l.object=this,t.push(l)}Dl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,a=n.length+1;this.morphTexture===null&&(this.morphTexture=new pr(new Float32Array(a*this.count),a,this.count,Pc,Ei));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let r=this.geometry.morphTargetsRelative?1:1-o,l=a*e;return s[l]=r,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fs=new ka,B0=new ve(.5,.5),Nl=new D,ho=class{constructor(e=new ui,t=new ui,n=new ui,a=new ui,s=new ui,o=new ui){this.planes=[e,t,n,a,s,o]}set(e,t,n,a,s,o){let r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(a),r[4].copy(s),r[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi,n=!1){let a=this.planes,s=e.elements,o=s[0],r=s[1],l=s[2],c=s[3],u=s[4],p=s[5],d=s[6],h=s[7],g=s[8],_=s[9],m=s[10],f=s[11],M=s[12],R=s[13],b=s[14],w=s[15];if(a[0].setComponents(c-o,h-u,f-g,w-M).normalize(),a[1].setComponents(c+o,h+u,f+g,w+M).normalize(),a[2].setComponents(c+r,h+p,f+_,w+R).normalize(),a[3].setComponents(c-r,h-p,f-_,w-R).normalize(),n)a[4].setComponents(l,d,m,b).normalize(),a[5].setComponents(c-l,h-d,f-m,w-b).normalize();else if(a[4].setComponents(c-l,h-d,f-m,w-b).normalize(),t===Bi)a[5].setComponents(c+l,h+d,f+m,w+b).normalize();else if(t===oo)a[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);let t=B0.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let a=t[n];if(Nl.x=a.normal.x>0?e.max.x:e.min.x,Nl.y=a.normal.y>0?e.max.y:e.min.y,Nl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gr=class extends Pn{constructor(e=[],t=Ja,n,a,s,o,r,l,c,u){super(e,t,n,a,s,o,r,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},In=class extends Pn{constructor(e,t,n,a,s,o,r,l,c){super(e,t,n,a,s,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ga=class extends Pn{constructor(e,t,n=zi,a,s,o,r=An,l=An,c,u=Qi,p=1){if(u!==Qi&&u!==Za)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:p};super(d,a,s,o,r,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ec=class extends Ga{constructor(e,t=zi,n=Ja,a,s,o=An,r=An,l,c=Qi){let u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,a,s,o,r,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xr=class extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Tt=class i extends Jt{constructor(e=1,t=1,n=1,a=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:o};let r=this;a=Math.floor(a),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],p=[],d=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,a,o,2),g("x","z","y",1,-1,e,n,-t,a,o,3),g("x","y","z",1,-1,e,t,n,a,s,4),g("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(p,2));function g(_,m,f,M,R,b,w,T,L,v,y){let S=b/L,C=w/v,P=b/2,B=w/2,I=T/2,U=L+1,Y=v+1,J=0,se=0,F=new D;for(let k=0;k<Y;k++){let j=k*C-B;for(let ge=0;ge<U;ge++){let O=ge*S-P;F[_]=O*M,F[m]=j*R,F[f]=I,c.push(F.x,F.y,F.z),F[_]=0,F[m]=0,F[f]=T>0?1:-1,u.push(F.x,F.y,F.z),p.push(ge/L),p.push(1-k/v),J+=1}}for(let k=0;k<v;k++)for(let j=0;j<L;j++){let ge=d+j+U*k,O=d+j+U*(k+1),G=d+(j+1)+U*(k+1),X=d+(j+1)+U*k;l.push(ge,O,X),l.push(O,G,X),se+=6}r.addGroup(h,se,y),h+=se,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Dn=class i extends Jt{constructor(e=1,t=1,n=4,a=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:a,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),a=Math.max(3,Math.floor(a)),s=Math.max(1,Math.floor(s));let o=[],r=[],l=[],c=[],u=t/2,p=Math.PI/2*e,d=t,h=2*p+d,g=n*2+s,_=a+1,m=new D,f=new D;for(let M=0;M<=g;M++){let R=0,b=0,w=0,T=0;if(M<=n){let y=M/n,S=y*Math.PI/2;b=-u-e*Math.cos(S),w=e*Math.sin(S),T=-e*Math.cos(S),R=y*p}else if(M<=n+s){let y=(M-n)/s;b=-u+y*t,w=e,T=0,R=p+y*d}else{let y=(M-n-s)/n,S=y*Math.PI/2;b=u+e*Math.sin(S),w=e*Math.cos(S),T=e*Math.sin(S),R=p+d+y*p}let L=Math.max(0,Math.min(1,R/h)),v=0;M===0?v=.5/a:M===g&&(v=-.5/a);for(let y=0;y<=a;y++){let S=y/a,C=S*Math.PI*2,P=Math.sin(C),B=Math.cos(C);f.x=-w*B,f.y=b,f.z=w*P,r.push(f.x,f.y,f.z),m.set(-w*B,T,w*P),m.normalize(),l.push(m.x,m.y,m.z),c.push(S+v,L)}if(M>0){let y=(M-1)*_;for(let S=0;S<a;S++){let C=y+S,P=y+S+1,B=M*_+S,I=M*_+S+1;o.push(C,P,B),o.push(P,I,B)}}}this.setIndex(o),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},_i=class i extends Jt{constructor(e=1,t=32,n=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:a},t=Math.max(3,t);let s=[],o=[],r=[],l=[],c=new D,u=new ve;o.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=t;p++,d+=3){let h=n+p/t*a;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),r.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(r,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wt=class i extends Jt{constructor(e=1,t=1,n=1,a=32,s=1,o=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:l};let c=this;a=Math.floor(a),s=Math.floor(s);let u=[],p=[],d=[],h=[],g=0,_=[],m=n/2,f=0;M(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(h,2));function M(){let b=new D,w=new D,T=0,L=(t-e)/n;for(let v=0;v<=s;v++){let y=[],S=v/s,C=S*(t-e)+e;for(let P=0;P<=a;P++){let B=P/a,I=B*l+r,U=Math.sin(I),Y=Math.cos(I);w.x=C*U,w.y=-S*n+m,w.z=C*Y,p.push(w.x,w.y,w.z),b.set(U,L,Y).normalize(),d.push(b.x,b.y,b.z),h.push(B,1-S),y.push(g++)}_.push(y)}for(let v=0;v<a;v++)for(let y=0;y<s;y++){let S=_[y][v],C=_[y+1][v],P=_[y+1][v+1],B=_[y][v+1];(e>0||y!==0)&&(u.push(S,C,B),T+=3),(t>0||y!==s-1)&&(u.push(C,P,B),T+=3)}c.addGroup(f,T,0),f+=T}function R(b){let w=g,T=new ve,L=new D,v=0,y=b===!0?e:t,S=b===!0?1:-1;for(let P=1;P<=a;P++)p.push(0,m*S,0),d.push(0,S,0),h.push(.5,.5),g++;let C=g;for(let P=0;P<=a;P++){let I=P/a*l+r,U=Math.cos(I),Y=Math.sin(I);L.x=y*Y,L.y=m*S,L.z=y*U,p.push(L.x,L.y,L.z),d.push(0,S,0),T.x=U*.5+.5,T.y=Y*.5*S+.5,h.push(T.x,T.y),g++}for(let P=0;P<a;P++){let B=w+P,I=C+P;b===!0?u.push(I,I+1,B):u.push(I+1,I,B),v+=3}c.addGroup(f,v,b===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yi=class i extends wt{constructor(e=1,t=1,n=32,a=1,s=!1,o=0,r=Math.PI*2){super(0,e,t,n,a,s,o,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:r}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ot("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,a=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(a),t.push(s),a=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),a=0,s=n.length,o;t?o=t:o=e*n[s-1];let r=0,l=s-1,c;for(;r<=l;)if(a=Math.floor(r+(l-r)/2),c=n[a]-o,c<0)r=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,n[a]===o)return a/(s-1);let u=n[a],d=n[a+1]-u,h=(o-u)/d;return(a+h)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);let o=this.getPoint(a),r=this.getPoint(s),l=t||(o.isVector2?new ve:new D);return l.copy(r).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,a=[],s=[],o=[],r=new D,l=new dt;for(let h=0;h<=e;h++){let g=h/e;a[h]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(a[0].x),p=Math.abs(a[0].y),d=Math.abs(a[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),r.crossVectors(a[0],n).normalize(),s[0].crossVectors(a[0],r),o[0].crossVectors(a[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),r.crossVectors(a[h-1],a[h]),r.length()>Number.EPSILON){r.normalize();let g=Math.acos(Mt(a[h-1].dot(a[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(r,g))}o[h].crossVectors(a[h],s[h])}if(t===!0){let h=Math.acos(Mt(s[0].dot(s[e]),-1,1));h/=e,a[0].dot(r.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(a[g],h*g)),o[g].crossVectors(a[g],s[g])}return{tangents:a,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fo=class extends hi{constructor(e=0,t=0,n=1,a=1,s=0,o=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=r,this.aRotation=l}getPoint(e,t=new ve){let n=t,a=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(o?s=0:s=a),this.aClockwise===!0&&!o&&(s===a?s=-a:s=s-a);let r=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*p+this.aX,c=d*p+h*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tc=class extends fo{constructor(e,t,n,a,s,o){super(e,t,n,n,a,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zu(){let i=0,e=0,t=0,n=0;function a(s,o,r,l){i=s,e=r,t=-3*s+3*o-2*r-l,n=2*s-2*o+r+l}return{initCatmullRom:function(s,o,r,l,c){a(o,r,c*(r-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,r,l,c,u,p){let d=(o-s)/c-(r-s)/(c+u)+(r-o)/u,h=(r-o)/u-(l-o)/(u+p)+(l-r)/p;d*=u,h*=u,a(o,r,d,h)},calc:function(s){let o=s*s,r=o*s;return i+e*s+t*o+n*r}}}var If=new D,Df=new D,_u=new Zu,yu=new Zu,Mu=new Zu,jn=class extends hi{constructor(e=[],t=!1,n="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=a}getPoint(e,t=new D){let n=t,a=this.points,s=a.length,o=(s-(this.closed?0:1))*e,r=Math.floor(o),l=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/s)+1)*s:l===0&&r===s-1&&(r=s-2,l=1);let c,u;this.closed||r>0?c=a[(r-1)%s]:(Df.subVectors(a[0],a[1]).add(a[0]),c=Df);let p=a[r%s],d=a[(r+1)%s];if(this.closed||r+2<s?u=a[(r+2)%s]:(If.subVectors(a[s-1],a[s-2]).add(a[s-1]),u=If),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),h),_=Math.pow(p.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),_u.initNonuniformCatmullRom(c.x,p.x,d.x,u.x,g,_,m),yu.initNonuniformCatmullRom(c.y,p.y,d.y,u.y,g,_,m),Mu.initNonuniformCatmullRom(c.z,p.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(_u.initCatmullRom(c.x,p.x,d.x,u.x,this.tension),yu.initCatmullRom(c.y,p.y,d.y,u.y,this.tension),Mu.initCatmullRom(c.z,p.z,d.z,u.z,this.tension));return n.set(_u.calc(l),yu.calc(l),Mu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let a=e.points[t];this.points.push(new D().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Nf(i,e,t,n,a){let s=(n-e)*.5,o=(a-t)*.5,r=i*i,l=i*r;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*r+s*i+t}function F0(i,e){let t=1-i;return t*t*e}function O0(i,e){return 2*(1-i)*i*e}function H0(i,e){return i*i*e}function tr(i,e,t,n){return F0(i,e)+O0(i,t)+H0(i,n)}function z0(i,e){let t=1-i;return t*t*t*e}function k0(i,e){let t=1-i;return 3*t*t*i*e}function G0(i,e){return 3*(1-i)*i*i*e}function V0(i,e){return i*i*i*e}function nr(i,e,t,n,a){return z0(i,e)+k0(i,t)+G0(i,n)+V0(i,a)}var vr=class extends hi{constructor(e=new ve,t=new ve,n=new ve,a=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=a}getPoint(e,t=new ve){let n=t,a=this.v0,s=this.v1,o=this.v2,r=this.v3;return n.set(nr(e,a.x,s.x,o.x,r.x),nr(e,a.y,s.y,o.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nc=class extends hi{constructor(e=new D,t=new D,n=new D,a=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=a}getPoint(e,t=new D){let n=t,a=this.v0,s=this.v1,o=this.v2,r=this.v3;return n.set(nr(e,a.x,s.x,o.x,r.x),nr(e,a.y,s.y,o.y,r.y),nr(e,a.z,s.z,o.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},br=class extends hi{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends hi{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_r=class extends hi{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,a=this.v0,s=this.v1,o=this.v2;return n.set(tr(e,a.x,s.x,o.x),tr(e,a.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yr=class extends hi{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,a=this.v0,s=this.v1,o=this.v2;return n.set(tr(e,a.x,s.x,o.x),tr(e,a.y,s.y,o.y),tr(e,a.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mr=class extends hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,a=this.points,s=(a.length-1)*e,o=Math.floor(s),r=s-o,l=a[o===0?o:o-1],c=a[o],u=a[o>a.length-2?a.length-1:o+1],p=a[o>a.length-3?a.length-1:o+2];return n.set(Nf(r,l.x,c.x,u.x,p.x),Nf(r,l.y,c.y,u.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let a=e.points[t];this.points.push(a.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let a=e.points[t];this.points.push(new ve().fromArray(a))}return this}},ac=Object.freeze({__proto__:null,ArcCurve:tc,CatmullRomCurve3:jn,CubicBezierCurve:vr,CubicBezierCurve3:nc,EllipseCurve:fo,LineCurve:br,LineCurve3:ic,QuadraticBezierCurve:_r,QuadraticBezierCurve3:yr,SplineCurve:Mr}),sc=class extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),a=this.getCurveLengths(),s=0;for(;s<a.length;){if(a[s]>=n){let o=a[s]-n,r=this.curves[s],l=r.getLength(),c=l===0?0:1-o/l;return r.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,a=this.curves.length;n<a;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let a=0,s=this.curves;a<s.length;a++){let o=s[a],r=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(r);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let a=e.curves[t];this.curves.push(new ac[a.type]().fromJSON(a))}return this}},ea=class extends sc{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new br(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,a){let s=new _r(this.currentPoint.clone(),new ve(e,t),new ve(n,a));return this.curves.push(s),this.currentPoint.set(n,a),this}bezierCurveTo(e,t,n,a,s,o){let r=new vr(this.currentPoint.clone(),new ve(e,t),new ve(n,a),new ve(s,o));return this.curves.push(r),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Mr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,a,s,o){let r=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+r,t+l,n,a,s,o),this}absarc(e,t,n,a,s,o){return this.absellipse(e,t,n,n,a,s,o),this}ellipse(e,t,n,a,s,o,r,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,a,s,o,r,l),this}absellipse(e,t,n,a,s,o,r,l){let c=new fo(e,t,n,a,s,o,r,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Qn=class extends ea{constructor(e){super(e),this.uuid=ba(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,a=this.holes.length;n<a;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let a=e.holes[t];this.holes.push(new ea().fromJSON(a))}return this}};function q0(i,e,t=2){let n=e&&e.length,a=n?e[0]*t:i.length,s=Lp(i,0,a,t,!0),o=[];if(!s||s.next===s.prev)return o;let r,l,c;if(n&&(s=j0(i,e,s,t)),i.length>80*t){r=i[0],l=i[1];let u=r,p=l;for(let d=t;d<a;d+=t){let h=i[d],g=i[d+1];h<r&&(r=h),g<l&&(l=g),h>u&&(u=h),g>p&&(p=g)}c=Math.max(u-r,p-l),c=c!==0?32767/c:0}return Sr(s,o,t,r,l,c,0),o}function Lp(i,e,t,n,a){let s;if(a===og(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=Uf(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Uf(o/n|0,i[o],i[o+1],s);return s&&po(s,s.next)&&(Tr(s),s=s.next),s}function gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(po(t,t.next)||an(t.prev,t,t.next)===0)){if(Tr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Sr(i,e,t,n,a,s,o){if(!i)return;!o&&s&&eg(i,n,a,s);let r=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?X0(i,n,a,s):W0(i)){e.push(l.i,i.i,c.i),Tr(i),i=c.next,r=c.next;continue}if(i=c,i===r){o?o===1?(i=$0(gs(i),e),Sr(i,e,t,n,a,s,2)):o===2&&Y0(i,e,t,n,a,s):Sr(gs(i),e,t,n,a,s,1);break}}}function W0(i){let e=i.prev,t=i,n=i.next;if(an(e,t,n)>=0)return!1;let a=e.x,s=t.x,o=n.x,r=e.y,l=t.y,c=n.y,u=Math.min(a,s,o),p=Math.min(r,l,c),d=Math.max(a,s,o),h=Math.max(r,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=p&&g.y<=h&&er(a,r,s,l,o,c,g.x,g.y)&&an(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function X0(i,e,t,n){let a=i.prev,s=i,o=i.next;if(an(a,s,o)>=0)return!1;let r=a.x,l=s.x,c=o.x,u=a.y,p=s.y,d=o.y,h=Math.min(r,l,c),g=Math.min(u,p,d),_=Math.max(r,l,c),m=Math.max(u,p,d),f=Ru(h,g,e,t,n),M=Ru(_,m,e,t,n),R=i.prevZ,b=i.nextZ;for(;R&&R.z>=f&&b&&b.z<=M;){if(R.x>=h&&R.x<=_&&R.y>=g&&R.y<=m&&R!==a&&R!==o&&er(r,u,l,p,c,d,R.x,R.y)&&an(R.prev,R,R.next)>=0||(R=R.prevZ,b.x>=h&&b.x<=_&&b.y>=g&&b.y<=m&&b!==a&&b!==o&&er(r,u,l,p,c,d,b.x,b.y)&&an(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;R&&R.z>=f;){if(R.x>=h&&R.x<=_&&R.y>=g&&R.y<=m&&R!==a&&R!==o&&er(r,u,l,p,c,d,R.x,R.y)&&an(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;b&&b.z<=M;){if(b.x>=h&&b.x<=_&&b.y>=g&&b.y<=m&&b!==a&&b!==o&&er(r,u,l,p,c,d,b.x,b.y)&&an(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function $0(i,e){let t=i;do{let n=t.prev,a=t.next.next;!po(n,a)&&Dp(n,t,t.next,a)&&Er(n,a)&&Er(a,n)&&(e.push(n.i,t.i,a.i),Tr(t),Tr(t.next),t=i=a),t=t.next}while(t!==i);return gs(t)}function Y0(i,e,t,n,a,s){let o=i;do{let r=o.next.next;for(;r!==o.prev;){if(o.i!==r.i&&ig(o,r)){let l=Np(o,r);o=gs(o,o.next),l=gs(l,l.next),Sr(o,e,t,n,a,s,0),Sr(l,e,t,n,a,s,0);return}r=r.next}o=o.next}while(o!==i)}function j0(i,e,t,n){let a=[];for(let s=0,o=e.length;s<o;s++){let r=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Lp(i,r,l,n,!1);c===c.next&&(c.steiner=!0),a.push(ng(c))}a.sort(Q0);for(let s=0;s<a.length;s++)t=J0(a[s],t);return t}function Q0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=n-a}return t}function J0(i,e){let t=Z0(i,e);if(!t)return e;let n=Np(t,i);return gs(n,n.next),gs(t,t.next)}function Z0(i,e){let t=e,n=i.x,a=i.y,s=-1/0,o;if(po(i,t))return t;do{if(po(i,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>s&&(s=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let r=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ip(a<c?n:s,a,l,c,a<c?s:n,a,t.x,t.y)){let p=Math.abs(a-t.y)/(n-t.x);Er(t,i)&&(p<u||p===u&&(t.x>o.x||t.x===o.x&&K0(o,t)))&&(o=t,u=p)}t=t.next}while(t!==r);return o}function K0(i,e){return an(i.prev,i,e.prev)<0&&an(e.next,i,i.next)<0}function eg(i,e,t,n){let a=i;do a.z===0&&(a.z=Ru(a.x,a.y,e,t,n)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==i);a.prevZ.nextZ=null,a.prevZ=null,tg(a)}function tg(i){let e,t=1;do{let n=i,a;i=null;let s=null;for(e=0;n;){e++;let o=n,r=0;for(let c=0;c<t&&(r++,o=o.nextZ,!!o);c++);let l=t;for(;r>0||l>0&&o;)r!==0&&(l===0||!o||n.z<=o.z)?(a=n,n=n.nextZ,r--):(a=o,o=o.nextZ,l--),s?s.nextZ=a:i=a,a.prevZ=s,s=a;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Ru(i,e,t,n,a){return i=(i-t)*a|0,e=(e-n)*a|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ng(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ip(i,e,t,n,a,s,o,r){return(a-o)*(e-r)>=(i-o)*(s-r)&&(i-o)*(n-r)>=(t-o)*(e-r)&&(t-o)*(s-r)>=(a-o)*(n-r)}function er(i,e,t,n,a,s,o,r){return!(i===o&&e===r)&&Ip(i,e,t,n,a,s,o,r)}function ig(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ag(i,e)&&(Er(i,e)&&Er(e,i)&&sg(i,e)&&(an(i.prev,i,e.prev)||an(i,e.prev,e))||po(i,e)&&an(i.prev,i,i.next)>0&&an(e.prev,e,e.next)>0)}function an(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function po(i,e){return i.x===e.x&&i.y===e.y}function Dp(i,e,t,n){let a=Bl(an(i,e,t)),s=Bl(an(i,e,n)),o=Bl(an(t,n,i)),r=Bl(an(t,n,e));return!!(a!==s&&o!==r||a===0&&Ul(i,t,e)||s===0&&Ul(i,n,e)||o===0&&Ul(t,i,n)||r===0&&Ul(t,e,n))}function Ul(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Bl(i){return i>0?1:i<0?-1:0}function ag(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Dp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Er(i,e){return an(i.prev,i,i.next)<0?an(i,e,i.next)>=0&&an(i,i.prev,e)>=0:an(i,e,i.prev)<0||an(i,i.next,e)<0}function sg(i,e){let t=i,n=!1,a=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&a<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Np(i,e){let t=Pu(i.i,i.x,i.y),n=Pu(e.i,e.x,e.y),a=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=a,a.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Uf(i,e,t,n){let a=Pu(i,e,t);return n?(a.next=n.next,a.prev=n,n.next.prev=a,n.next=a):(a.prev=a,a.next=a),a}function Tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function og(i,e,t,n){let a=0;for(let s=e,o=t-n;s<t;s+=n)a+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return a}var Lu=class{static triangulate(e,t,n=2){return q0(e,t,n)}},Fi=class i{static area(e){let t=e.length,n=0;for(let a=t-1,s=0;s<t;a=s++)n+=e[a].x*e[s].y-e[s].x*e[a].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],a=[],s=[];Bf(e),Ff(n,e);let o=e.length;t.forEach(Bf);for(let l=0;l<t.length;l++)a.push(o),o+=t[l].length,Ff(n,t[l]);let r=Lu.triangulate(n,a);for(let l=0;l<r.length;l+=3)s.push(r.slice(l,l+3));return s}};function Bf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ff(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Oi=class i extends Jt{constructor(e=new Qn([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,a=[],s=[];for(let r=0,l=e.length;r<l;r++){let c=e[r];o(c)}this.setAttribute("position",new ut(a,3)),this.setAttribute("uv",new ut(s,2)),this.computeVertexNormals();function o(r){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:h-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:rg,R,b=!1,w,T,L,v;if(f){R=f.getSpacedPoints(u),b=!0,d=!1;let ce=f.isCatmullRomCurve3?f.closed:!1;w=f.computeFrenetFrames(u,ce),T=new D,L=new D,v=new D}d||(m=0,h=0,g=0,_=0);let y=r.extractPoints(c),S=y.shape,C=y.holes;if(!Fi.isClockWise(S)){S=S.reverse();for(let ce=0,Q=C.length;ce<Q;ce++){let ie=C[ce];Fi.isClockWise(ie)&&(C[ce]=ie.reverse())}}function B(ce){let ie=10000000000000001e-36,pe=ce[0];for(let ye=1;ye<=ce.length;ye++){let Ge=ye%ce.length,De=ce[Ge],Ze=De.x-pe.x,He=De.y-pe.y,z=Ze*Ze+He*He,lt=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(pe.x),Math.abs(pe.y)),Re=ie*lt*lt;if(z<=Re){ce.splice(Ge,1),ye--;continue}pe=De}}B(S),C.forEach(B);let I=C.length,U=S;for(let ce=0;ce<I;ce++){let Q=C[ce];S=S.concat(Q)}function Y(ce,Q,ie){return Q||rt("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(Q,ie)}let J=S.length;function se(ce,Q,ie){let pe,ye,Ge,De=ce.x-Q.x,Ze=ce.y-Q.y,He=ie.x-ce.x,z=ie.y-ce.y,lt=De*De+Ze*Ze,Re=De*z-Ze*He;if(Math.abs(Re)>Number.EPSILON){let E=Math.sqrt(lt),x=Math.sqrt(He*He+z*z),H=Q.x-Ze/E,$=Q.y+De/E,oe=ie.x-z/x,_e=ie.y+He/x,Se=((oe-H)*z-(_e-$)*He)/(De*z-Ze*He);pe=H+De*Se-ce.x,ye=$+Ze*Se-ce.y;let ae=pe*pe+ye*ye;if(ae<=2)return new ve(pe,ye);Ge=Math.sqrt(ae/2)}else{let E=!1;De>Number.EPSILON?He>Number.EPSILON&&(E=!0):De<-Number.EPSILON?He<-Number.EPSILON&&(E=!0):Math.sign(Ze)===Math.sign(z)&&(E=!0),E?(pe=-Ze,ye=De,Ge=Math.sqrt(lt)):(pe=De,ye=Ze,Ge=Math.sqrt(lt/2))}return new ve(pe/Ge,ye/Ge)}let F=[];for(let ce=0,Q=U.length,ie=Q-1,pe=ce+1;ce<Q;ce++,ie++,pe++)ie===Q&&(ie=0),pe===Q&&(pe=0),F[ce]=se(U[ce],U[ie],U[pe]);let k=[],j,ge=F.concat();for(let ce=0,Q=I;ce<Q;ce++){let ie=C[ce];j=[];for(let pe=0,ye=ie.length,Ge=ye-1,De=pe+1;pe<ye;pe++,Ge++,De++)Ge===ye&&(Ge=0),De===ye&&(De=0),j[pe]=se(ie[pe],ie[Ge],ie[De]);k.push(j),ge=ge.concat(j)}let O;if(m===0)O=Fi.triangulateShape(U,C);else{let ce=[],Q=[];for(let ie=0;ie<m;ie++){let pe=ie/m,ye=h*Math.cos(pe*Math.PI/2),Ge=g*Math.sin(pe*Math.PI/2)+_;for(let De=0,Ze=U.length;De<Ze;De++){let He=Y(U[De],F[De],Ge);le(He.x,He.y,-ye),pe===0&&ce.push(He)}for(let De=0,Ze=I;De<Ze;De++){let He=C[De];j=k[De];let z=[];for(let lt=0,Re=He.length;lt<Re;lt++){let E=Y(He[lt],j[lt],Ge);le(E.x,E.y,-ye),pe===0&&z.push(E)}pe===0&&Q.push(z)}}O=Fi.triangulateShape(ce,Q)}let G=O.length,X=g+_;for(let ce=0;ce<J;ce++){let Q=d?Y(S[ce],ge[ce],X):S[ce];b?(L.copy(w.normals[0]).multiplyScalar(Q.x),T.copy(w.binormals[0]).multiplyScalar(Q.y),v.copy(R[0]).add(L).add(T),le(v.x,v.y,v.z)):le(Q.x,Q.y,0)}for(let ce=1;ce<=u;ce++)for(let Q=0;Q<J;Q++){let ie=d?Y(S[Q],ge[Q],X):S[Q];b?(L.copy(w.normals[ce]).multiplyScalar(ie.x),T.copy(w.binormals[ce]).multiplyScalar(ie.y),v.copy(R[ce]).add(L).add(T),le(v.x,v.y,v.z)):le(ie.x,ie.y,p/u*ce)}for(let ce=m-1;ce>=0;ce--){let Q=ce/m,ie=h*Math.cos(Q*Math.PI/2),pe=g*Math.sin(Q*Math.PI/2)+_;for(let ye=0,Ge=U.length;ye<Ge;ye++){let De=Y(U[ye],F[ye],pe);le(De.x,De.y,p+ie)}for(let ye=0,Ge=C.length;ye<Ge;ye++){let De=C[ye];j=k[ye];for(let Ze=0,He=De.length;Ze<He;Ze++){let z=Y(De[Ze],j[Ze],pe);b?le(z.x,z.y+R[u-1].y,R[u-1].x+ie):le(z.x,z.y,p+ie)}}}de(),N();function de(){let ce=a.length/3;if(d){let Q=0,ie=J*Q;for(let pe=0;pe<G;pe++){let ye=O[pe];Z(ye[2]+ie,ye[1]+ie,ye[0]+ie)}Q=u+m*2,ie=J*Q;for(let pe=0;pe<G;pe++){let ye=O[pe];Z(ye[0]+ie,ye[1]+ie,ye[2]+ie)}}else{for(let Q=0;Q<G;Q++){let ie=O[Q];Z(ie[2],ie[1],ie[0])}for(let Q=0;Q<G;Q++){let ie=O[Q];Z(ie[0]+J*u,ie[1]+J*u,ie[2]+J*u)}}n.addGroup(ce,a.length/3-ce,0)}function N(){let ce=a.length/3,Q=0;q(U,Q),Q+=U.length;for(let ie=0,pe=C.length;ie<pe;ie++){let ye=C[ie];q(ye,Q),Q+=ye.length}n.addGroup(ce,a.length/3-ce,1)}function q(ce,Q){let ie=ce.length;for(;--ie>=0;){let pe=ie,ye=ie-1;ye<0&&(ye=ce.length-1);for(let Ge=0,De=u+m*2;Ge<De;Ge++){let Ze=J*Ge,He=J*(Ge+1),z=Q+pe+Ze,lt=Q+ye+Ze,Re=Q+ye+He,E=Q+pe+He;ne(z,lt,Re,E)}}}function le(ce,Q,ie){l.push(ce),l.push(Q),l.push(ie)}function Z(ce,Q,ie){he(ce),he(Q),he(ie);let pe=a.length/3,ye=M.generateTopUV(n,a,pe-3,pe-2,pe-1);Je(ye[0]),Je(ye[1]),Je(ye[2])}function ne(ce,Q,ie,pe){he(ce),he(Q),he(pe),he(Q),he(ie),he(pe);let ye=a.length/3,Ge=M.generateSideWallUV(n,a,ye-6,ye-3,ye-2,ye-1);Je(Ge[0]),Je(Ge[1]),Je(Ge[3]),Je(Ge[1]),Je(Ge[2]),Je(Ge[3])}function he(ce){a.push(l[ce*3+0]),a.push(l[ce*3+1]),a.push(l[ce*3+2])}function Je(ce){s.push(ce.x),s.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lg(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let r=t[e.shapes[s]];n.push(r)}let a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new ac[a.type]().fromJSON(a)),new i(n,e.options)}},rg={generateTopUV:function(i,e,t,n,a){let s=e[t*3],o=e[t*3+1],r=e[n*3],l=e[n*3+1],c=e[a*3],u=e[a*3+1];return[new ve(s,o),new ve(r,l),new ve(c,u)]},generateSideWallUV:function(i,e,t,n,a,s){let o=e[t*3],r=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],p=e[n*3+2],d=e[a*3],h=e[a*3+1],g=e[a*3+2],_=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(r-u)<Math.abs(o-c)?[new ve(o,1-l),new ve(c,1-p),new ve(d,1-g),new ve(_,1-f)]:[new ve(r,1-l),new ve(u,1-p),new ve(h,1-g),new ve(m,1-f)]}};function lg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,a=i.length;n<a;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var yn=class i extends Jt{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};let s=e/2,o=t/2,r=Math.floor(n),l=Math.floor(a),c=r+1,u=l+1,p=e/r,d=t/l,h=[],g=[],_=[],m=[];for(let f=0;f<u;f++){let M=f*d-o;for(let R=0;R<c;R++){let b=R*p-s;g.push(b,-M,0),_.push(0,0,1),m.push(R/r),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<r;M++){let R=M+c*f,b=M+c*(f+1),w=M+1+c*(f+1),T=M+1+c*f;h.push(R,b,T),h.push(b,w,T)}this.setIndex(h),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Va=class i extends Jt{constructor(e=.5,t=1,n=32,a=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:a,thetaStart:s,thetaLength:o},n=Math.max(3,n),a=Math.max(1,a);let r=[],l=[],c=[],u=[],p=e,d=(t-e)/a,h=new D,g=new ve;for(let _=0;_<=a;_++){for(let m=0;m<=n;m++){let f=s+m/n*o;h.x=p*Math.cos(f),h.y=p*Math.sin(f),l.push(h.x,h.y,h.z),c.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}p+=d}for(let _=0;_<a;_++){let m=_*(n+1);for(let f=0;f<n;f++){let M=f+m,R=M,b=M+n+1,w=M+n+2,T=M+1;r.push(R,b,T),r.push(b,w,T)}}this.setIndex(r),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Jn=class i extends Jt{constructor(e=new Qn([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],a=[],s=[],o=[],r=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(r,l,u),r+=l,l=0;this.setIndex(n),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(s,3)),this.setAttribute("uv",new ut(o,2));function c(u){let p=a.length/3,d=u.extractPoints(t),h=d.shape,g=d.holes;Fi.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,f=g.length;m<f;m++){let M=g[m];Fi.isClockWise(M)===!0&&(g[m]=M.reverse())}let _=Fi.triangulateShape(h,g);for(let m=0,f=g.length;m<f;m++){let M=g[m];h=h.concat(M)}for(let m=0,f=h.length;m<f;m++){let M=h[m];a.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let m=0,f=_.length;m<f;m++){let M=_[m],R=M[0]+p,b=M[1]+p,w=M[2]+p;n.push(R,b,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return cg(t,e)}static fromJSON(e,t){let n=[];for(let a=0,s=e.shapes.length;a<s;a++){let o=t[e.shapes[a]];n.push(o)}return new i(n,e.curveSegments)}};function cg(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let a=i[t];e.shapes.push(a.uuid)}else e.shapes.push(i.uuid);return e}var qt=class i extends Jt{constructor(e=1,t=32,n=16,a=0,s=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:s,thetaStart:o,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+r,Math.PI),c=0,u=[],p=new D,d=new D,h=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let M=[],R=f/n,b=o+R*r,w=e*Math.cos(b),T=Math.sqrt(e*e-w*w),L=0;f===0&&o===0?L=.5/t:f===n&&l===Math.PI&&(L=-.5/t);for(let v=0;v<=t;v++){let y=v/t,S=a+y*s;p.x=-T*Math.cos(S),p.y=w,p.z=T*Math.sin(S),g.push(p.x,p.y,p.z),d.copy(p).normalize(),_.push(d.x,d.y,d.z),m.push(y+L,1-R),M.push(c++)}u.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){let R=u[f][M+1],b=u[f][M],w=u[f+1][M],T=u[f+1][M+1];(f!==0||o>0)&&h.push(R,b,T),(f!==n-1||l<Math.PI)&&h.push(b,w,T)}this.setIndex(h),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zt=class i extends Jt{constructor(e=1,t=.4,n=12,a=48,s=Math.PI*2,o=0,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:a,arc:s,thetaStart:o,thetaLength:r},n=Math.floor(n),a=Math.floor(a);let l=[],c=[],u=[],p=[],d=new D,h=new D,g=new D;for(let _=0;_<=n;_++){let m=o+_/n*r;for(let f=0;f<=a;f++){let M=f/a*s;h.x=(e+t*Math.cos(m))*Math.cos(M),h.y=(e+t*Math.cos(m))*Math.sin(M),h.z=t*Math.sin(m),c.push(h.x,h.y,h.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),g.subVectors(h,d).normalize(),u.push(g.x,g.y,g.z),p.push(f/a),p.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=a;m++){let f=(a+1)*_+m-1,M=(a+1)*(_-1)+m-1,R=(a+1)*(_-1)+m,b=(a+1)*_+m;l.push(f,M,b),l.push(M,R,b)}this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Mi=class i extends Jt{constructor(e=new yr(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,a=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:a,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let r=new D,l=new D,c=new ve,u=new D,p=[],d=[],h=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(h,2));function _(){for(let R=0;R<t;R++)m(R);m(s===!1?t:0),M(),f()}function m(R){u=e.getPointAt(R/t,u);let b=o.normals[R],w=o.binormals[R];for(let T=0;T<=a;T++){let L=T/a*Math.PI*2,v=Math.sin(L),y=-Math.cos(L);l.x=y*b.x+v*w.x,l.y=y*b.y+v*w.y,l.z=y*b.z+v*w.z,l.normalize(),d.push(l.x,l.y,l.z),r.x=u.x+n*l.x,r.y=u.y+n*l.y,r.z=u.z+n*l.z,p.push(r.x,r.y,r.z)}}function f(){for(let R=1;R<=t;R++)for(let b=1;b<=a;b++){let w=(a+1)*(R-1)+(b-1),T=(a+1)*R+(b-1),L=(a+1)*R+b,v=(a+1)*(R-1)+b;g.push(w,T,v),g.push(T,L,v)}}function M(){for(let R=0;R<=t;R++)for(let b=0;b<=a;b++)c.x=R/t,c.y=b/a,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ac[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ss(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let a=i[t][n];if(Of(a))a.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(Of(a[0])){let s=[];for(let o=0,r=a.length;o<r;o++)s[o]=a[o].clone();e[t][n]=s}else e[t][n]=a.slice();else e[t][n]=a}}return e}function zn(i){let e={};for(let t=0;t<i.length;t++){let n=Ss(i[t]);for(let a in n)e[a]=n[a]}return e}function Of(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function dg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ku(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var ki={clone:Ss,merge:zn},ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ug,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let a in this.uniforms){let o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(a.value);break;case"v2":this.uniforms[n].value=new ve().fromArray(a.value);break;case"v3":this.uniforms[n].value=new D().fromArray(a.value);break;case"v4":this.uniforms[n].value=new Vt().fromArray(a.value);break;case"m3":this.uniforms[n].value=new ft().fromArray(a.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},mo=class extends Kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wt=class extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yr,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mn=class extends Wt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var wr=class extends Ki{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yr,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Sc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oc=class extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rc=class extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function to(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Su(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qa=class{constructor(e,t,n,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,a=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<a)){for(let r=n+2;;){if(a===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===r)break;if(s=a,a=t[++n],e<a)break e}o=t.length;break t}if(!(e>=s)){let r=t[1];e<r&&(n=2,s=r);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(a=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let r=n+o>>>1;e<t[r]?o=r:n=r+1}if(a=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,a)}return this.interpolate_(n,s,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,a=this.valueSize,s=e*a;for(let o=0;o!==a;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lc=class extends qa{constructor(e,t,n,a){super(e,t,n,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(e,t,n){let a=this.parameterPositions,s=e-2,o=e+1,r=a[s],l=a[o];if(r===void 0)switch(this.getSettings_().endingStart){case Au:s=e,r=2*t-n;break;case Cu:s=a.length-2,r=t+a[s]-a[s+1];break;default:s=e,r=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Au:o=e,l=2*n-t;break;case Cu:o=1,l=n+a[1]-a[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-r),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,a){let s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-t)/(a-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,R=(-1-h)*m+(1.5+h)*_+.5*g,b=h*m-h*_;for(let w=0;w!==r;++w)s[w]=f*o[u+w]+M*o[c+w]+R*o[l+w]+b*o[p+w];return s}},cc=class extends qa{constructor(e,t,n,a){super(e,t,n,a)}interpolate_(e,t,n,a){let s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,u=(n-t)/(a-t),p=1-u;for(let d=0;d!==r;++d)s[d]=o[c+d]*p+o[l+d]*u;return s}},dc=class extends qa{constructor(e,t,n,a){super(e,t,n,a)}interpolate_(e){return this.copySampleValue_(e-1)}},uc=class extends qa{interpolate_(e,t,n,a){let s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,u=this.inTangents,p=this.outTangents;if(!u||!p){let g=(n-t)/(a-t),_=1-g;for(let m=0;m!==r;++m)s[m]=o[c+m]*_+o[l+m]*g;return s}let d=r*2,h=e-1;for(let g=0;g!==r;++g){let _=o[c+g],m=o[l+g],f=h*d+g*2,M=p[f],R=p[f+1],b=e*d+g*2,w=u[b],T=u[b+1],L=pg(n,t,M,w,a);s[g]=Up(L,_,R,T,m)}return s}};function Up(i,e,t,n,a){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*a}function fg(i,e,t,n,a){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(a-n)}function pg(i,e,t,n,a){let s=(i-e)/(a-e);for(let o=0;o<8;o++){let r=Up(s,e,t,n,a)-i;if(Math.abs(r)<1e-10)break;let l=fg(s,e,t,n,a);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-r/l))}return s}var fi=class{constructor(e,t,n,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=to(t,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:to(e.times,Array),values:to(e.values,Array)};let a=e.getInterpolation();a!==e.DefaultInterpolation&&(n.interpolation=a),Su(e.settings)&&(n.settings={inTangents:to(e.settings.inTangents,Array),outTangents:to(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new uc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case jl:t=this.InterpolantFactoryMethodLinear;break;case Hl:t=this.InterpolantFactoryMethodSmooth;break;case Tu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ot("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return jl;case this.InterpolantFactoryMethodSmooth:return Hl;case this.InterpolantFactoryMethodBezier:return Tu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,a=t.length;n!==a;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,a=t.length;n!==a;++n)t[n]*=e;Su(this.settings)&&(Hf(this.settings.inTangents,e),Hf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,a=n.length,s=0,o=a-1;for(;s!==a&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==a){s>=o&&(o=Math.max(o,1),s=o-1);let r=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*r,o*r)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,a=this.values,s=n.length;s===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let r=0;r!==s;r++){let l=n[r];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,r,l),e=!1;break}if(o!==null&&o>l){rt("KeyframeTrack: Out of order keys.",this,r,l,o),e=!1;break}o=l}if(a!==void 0&&g0(a))for(let r=0,l=a.length;r!==l;++r){let c=a[r];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,r,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),a=this.getInterpolation()===Hl,s=e.length-1,o=1;for(let r=1;r<s;++r){let l=!1,c=e[r],u=e[r+1];if(c!==u&&(r!==1||c!==e[0]))if(a)l=!0;else{let p=r*n,d=p-n,h=p+n;for(let g=0;g!==n;++g){let _=t[p+g];if(_!==t[d+g]||_!==t[h+g]){l=!0;break}}}if(l){if(r!==o){e[o]=e[r];let p=r*n,d=o*n;for(let h=0;h!==n;++h)t[d+h]=t[p+h]}++o}}if(s>0){e[o]=e[s];for(let r=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[r+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,a=new n(this.name,e,t);return a.createInterpolant=this.createInterpolant,Su(this.settings)&&(a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),a}};function Hf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=jl;var Wa=class extends fi{constructor(e,t,n){super(e,t,n)}};Wa.prototype.ValueTypeName="bool";Wa.prototype.ValueBufferType=Array;Wa.prototype.DefaultInterpolation=ir;Wa.prototype.InterpolantFactoryMethodLinear=void 0;Wa.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends fi{constructor(e,t,n,a){super(e,t,n,a)}};hc.prototype.ValueTypeName="color";var fc=class extends fi{constructor(e,t,n,a){super(e,t,n,a)}};fc.prototype.ValueTypeName="number";var pc=class extends qa{constructor(e,t,n,a){super(e,t,n,a)}interpolate_(e,t,n,a){let s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,l=(n-t)/(a-t),c=e*r;for(let u=c+r;c!==u;c+=4)dn.slerpFlat(s,0,o,c-r,o,c,l);return s}},Ar=class extends fi{constructor(e,t,n,a){super(e,t,n,a)}InterpolantFactoryMethodLinear(e){return new pc(this.times,this.values,this.getValueSize(),e)}};Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends fi{constructor(e,t,n){super(e,t,n)}};Xa.prototype.ValueTypeName="string";Xa.prototype.ValueBufferType=Array;Xa.prototype.DefaultInterpolation=ir;Xa.prototype.InterpolantFactoryMethodLinear=void 0;Xa.prototype.InterpolantFactoryMethodSmooth=void 0;var mc=class extends fi{constructor(e,t,n,a){super(e,t,n,a)}};mc.prototype.ValueTypeName="vector";var gc=class{constructor(e,t,n){let a=this,s=!1,o=0,r=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){r++,s===!1&&a.onStart!==void 0&&a.onStart(u,o,r),s=!0},this.itemEnd=function(u){o++,a.onProgress!==void 0&&a.onProgress(u,o,r),o===r&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){let h=c[p],g=c[p+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bp=new gc,xc=class{constructor(e){this.manager=e!==void 0?e:Bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(a,s){n.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var xs=class extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},vs=class extends xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Eu=new dt,zf=new D,kf=new D,go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zf.setFromMatrixPosition(e.matrixWorld),t.position.copy(zf),kf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,a){Eu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Eu,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=a?a.z/s.x:1,r=a?a.w/s.y:1,l=a?a.x/s.x:0,c=a?a.y/s.y:0;e.coordinateSystem===oo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*r,0,.5*r+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*r,0,.5*r+c,0,0,.5,.5,0,0,0,1),t.multiply(Eu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fl=new D,Ol=new dn,$i=new D,Cr=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fl,Ol,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Ol,$i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Fl,Ol,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Ol,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ha=new D,Gf=new ve,Vf=new ve,vn=class extends Cr{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Zd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ha.x,Ha.y).multiplyScalar(-e/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ha.x,Ha.y).multiplyScalar(-e/Ha.z)}getViewSize(e,t){return this.getViewBounds(e,Gf,Vf),t.subVectors(Vf,Gf)}setViewOffset(e,t,n,a,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zd*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*a/l,t-=o.offsetY*n/c,a*=o.width/l,n*=o.height/c}let r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Iu=class extends go{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=lr*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||a!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=a,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},$a=class extends xs{constructor(e,t,n=0,a=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.distance=n,this.angle=a,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Iu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Du=class extends go{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}},pi=class extends xs{constructor(e,t,n=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=a,this.shadow=new Du}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ya=class extends Cr{constructor(e=-1,t=1,n=1,a=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=n-e,o=n+e,r=a+t,l=a-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=u*this.view.offsetY,l=r-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nu=class extends go{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ja=class extends xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Nu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var no=-90,io=1,vc=class extends un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new vn(no,io,e,t);a.layers=this.layers,this.add(a);let s=new vn(no,io,e,t);s.layers=this.layers,this.add(s);let o=new vn(no,io,e,t);o.layers=this.layers,this.add(o);let r=new vn(no,io,e,t);r.layers=this.layers,this.add(r);let l=new vn(no,io,e,t);l.layers=this.layers,this.add(l);let c=new vn(no,io,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,a,s,o,r,l]=t;for(let c of t)this.remove(c);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,r,l,c,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},bc=class extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Rr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=mg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function mg(){this._document.hidden===!1&&this.reset()}var eh="\\[\\]\\.:\\/",gg=new RegExp("["+eh+"]","g"),th="[^"+eh+"]",xg="[^"+eh.replace("\\.","")+"]",vg=/((?:WC+[\/:])*)/.source.replace("WC",th),bg=/(WCOD+)?/.source.replace("WCOD",xg),_g=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),yg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),Mg=new RegExp("^"+vg+bg+_g+yg+"$"),Sg=["material","materials","bones","map"],Uu=class{constructor(e,t,n){let a=n||Qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,a=this._bindings[n];a!==void 0&&a.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=n.length;a!==s;++a)n[a].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gg,"")}static parseTrackName(e){let t=Mg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=n.nodeName&&n.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=n.nodeName.substring(a+1);Sg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,a),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let r=s[o];if(r.name===t||r.uuid===t)return r;let l=n(r.children);if(l)return l}return null},a=n(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let a=0,s=n.length;a!==s;++a)e[t++]=n[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let a=0,s=n.length;a!==s;++a)n[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let a=0,s=n.length;a!==s;++a)n[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let a=0,s=n.length;a!==s;++a)n[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,a=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[a];if(o===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",e);return}let r=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?r=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qt.Composite=Uu;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var f1=new Float32Array(1);var qf=new dt,Pr=class{constructor(e,t,n=0,a=1/0){this.ray=new fr(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qf),this}intersectObject(e,t=!0,n=[]){return Bu(e,this,n,t),n.sort(Wf),n}intersectObjects(e,t=!0,n=[]){for(let a=0,s=e.length;a<s;a++)Bu(e[a],this,n,t);return n.sort(Wf),n}};function Wf(i,e){return i.distance-e.distance}function Bu(i,e,t,n){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){let s=i.children;for(let o=0,r=s.length;o<r;o++)Bu(s[o],e,t,!0)}}var Lr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var rh=class rh{constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=a,this}};rh.prototype.isMatrix2=!0;var Fu=rh,Xf=new ve,_c=class{constructor(e=new ve(1/0,1/0),t=new ve(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var Ir=class{constructor(){this.type="ShapePath",this.color=new Ne,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new ea,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,a){return this.currentPath.quadraticCurveTo(e,t,n,a),this}bezierCurveTo(e,t,n,a,s,o){return this.currentPath.bezierCurveTo(e,t,n,a,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1,p=c.length;for(let d=0,h=p-1;d<p;h=d++){let g=c[d],_=c[h];g.y>l.y!=_.y>l.y&&l.x<(_.x-g.x)*(l.y-g.y)/(_.y-g.y)+g.x&&(u=!u)}return u}function t(l,c){let u=c.getCenter(new ve);if(e(u,l))return u;let p=u.y,d=[],h=l.length;for(let g=0;g<h;g++){let _=l[g],m=l[(g+1)%h];if(_.y>p!=m.y>p){let f=_.x+(p-_.y)*(m.x-_.x)/(m.y-_.y);d.push(f)}}return d.length>1&&(d.sort((g,_)=>g-_),u.x=(d[0]+d[1])/2),u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(ot('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let a=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let u=Fi.area(c);if(u===0)continue;let p=new _c;for(let d=0;d<c.length;d++)p.expandByPoint(c[d]);s.push({subPath:l,points:c,boundingBox:p,interiorPoint:t(c,p),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){let c=s[l],u=0;for(let p=l-1;p>=0;p--){let d=s[p];if(d.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,u=d.winding,c.winding+=u;break}}a(c.winding)===a(u)&&(c.exclude=!0)}for(let l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],r=new Map;for(let l of s){if(l.exclude||l.role!=="outer")continue;let c=new Qn;c.curves=l.subPath.curves,o.push(c),r.set(l,c)}for(let l of s){if(l.exclude||l.role!=="hole")continue;let c=r.get(l.container);if(!c)continue;let u=new ea;u.curves=l.subPath.curves,c.holes.push(u)}return o}};function nh(i,e,t,n){let a=Eg(n);switch(t){case Yu:return i*e;case Pc:return i*e/a.components*a.byteLength;case Lc:return i*e/a.components*a.byteLength;case Ka:return i*e*2/a.components*a.byteLength;case Ic:return i*e*2/a.components*a.byteLength;case ju:return i*e*3/a.components*a.byteLength;case Ti:return i*e*4/a.components*a.byteLength;case Dc:return i*e*4/a.components*a.byteLength;case Gr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qr:case Wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uc:case Fc:return Math.max(i,16)*Math.max(e,8)/4;case Nc:case Bc:return Math.max(i,8)*Math.max(e,8)/2;case Oc:case Hc:case kc:case Gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zc:case Xr:case Vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $c:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ed:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case td:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case id:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ad:case sd:case od:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rd:case ld:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $r:case cd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Eg(i){switch(i){case Zn:case qu:return{byteLength:1,components:1};case vo:case Wu:case pn:return{byteLength:2,components:1};case Cc:case Rc:return{byteLength:2,components:4};case zi:case Ac:case Ei:return{byteLength:4,components:1};case Xu:case $u:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function am(){let i=null,e=!1,t=null,n=null;function a(s,o){n=i.requestAnimationFrame(a),t(s,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function wg(i){let e=new WeakMap;function t(r,l){let c=r.array,u=r.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),r.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:p}}function n(r,l,c){let u=l.array,p=l.updateRanges;if(i.bindBuffer(c,r),p.length===0)i.bufferSubData(c,0,u);else{p.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<p.length;h++){let g=p[d],_=p[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,p[d]=_)}p.length=d+1;for(let h=0,g=p.length;h<g;h++){let _=p[h];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);let l=e.get(r);l&&(i.deleteBuffer(l.buffer),e.delete(r))}function o(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){let u=e.get(r);(!u||u.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}let c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:a,remove:s,update:o}}var Ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ug=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,px=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,_x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_v=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Uv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ib=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ab=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:Ag,alphahash_pars_fragment:Cg,alphamap_fragment:Rg,alphamap_pars_fragment:Pg,alphatest_fragment:Lg,alphatest_pars_fragment:Ig,aomap_fragment:Dg,aomap_pars_fragment:Ng,batching_pars_vertex:Ug,batching_vertex:Bg,begin_vertex:Fg,beginnormal_vertex:Og,bsdfs:Hg,iridescence_fragment:zg,bumpmap_pars_fragment:kg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Vg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:Wg,color_fragment:Xg,color_pars_fragment:$g,color_pars_vertex:Yg,color_vertex:jg,common:Qg,cube_uv_reflection_fragment:Jg,defaultnormal_vertex:Zg,displacementmap_pars_vertex:Kg,displacementmap_vertex:ex,emissivemap_fragment:tx,emissivemap_pars_fragment:nx,colorspace_fragment:ix,colorspace_pars_fragment:ax,envmap_fragment:sx,envmap_common_pars_fragment:ox,envmap_pars_fragment:rx,envmap_pars_vertex:lx,envmap_physical_pars_fragment:bx,envmap_vertex:cx,fog_vertex:dx,fog_pars_vertex:ux,fog_fragment:hx,fog_pars_fragment:fx,gradientmap_pars_fragment:px,lightmap_pars_fragment:mx,lights_lambert_fragment:gx,lights_lambert_pars_fragment:xx,lights_pars_begin:vx,lights_toon_fragment:_x,lights_toon_pars_fragment:yx,lights_phong_fragment:Mx,lights_phong_pars_fragment:Sx,lights_physical_fragment:Ex,lights_physical_pars_fragment:Tx,lights_fragment_begin:wx,lights_fragment_maps:Ax,lights_fragment_end:Cx,lightprobes_pars_fragment:Rx,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:Lx,logdepthbuf_pars_vertex:Ix,logdepthbuf_vertex:Dx,map_fragment:Nx,map_pars_fragment:Ux,map_particle_fragment:Bx,map_particle_pars_fragment:Fx,metalnessmap_fragment:Ox,metalnessmap_pars_fragment:Hx,morphinstance_vertex:zx,morphcolor_vertex:kx,morphnormal_vertex:Gx,morphtarget_pars_vertex:Vx,morphtarget_vertex:qx,normal_fragment_begin:Wx,normal_fragment_maps:Xx,normal_pars_fragment:$x,normal_pars_vertex:Yx,normal_vertex:jx,normalmap_pars_fragment:Qx,clearcoat_normal_fragment_begin:Jx,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Kx,iridescence_pars_fragment:ev,opaque_fragment:tv,packing:nv,premultiplied_alpha_fragment:iv,project_vertex:av,dithering_fragment:sv,dithering_pars_fragment:ov,roughnessmap_fragment:rv,roughnessmap_pars_fragment:lv,shadowmap_pars_fragment:cv,shadowmap_pars_vertex:dv,shadowmap_vertex:uv,shadowmask_pars_fragment:hv,skinbase_vertex:fv,skinning_pars_vertex:pv,skinning_vertex:mv,skinnormal_vertex:gv,specularmap_fragment:xv,specularmap_pars_fragment:vv,tonemapping_fragment:bv,tonemapping_pars_fragment:_v,transmission_fragment:yv,transmission_pars_fragment:Mv,uv_pars_fragment:Sv,uv_pars_vertex:Ev,uv_vertex:Tv,worldpos_vertex:wv,background_vert:Av,background_frag:Cv,backgroundCube_vert:Rv,backgroundCube_frag:Pv,cube_vert:Lv,cube_frag:Iv,depth_vert:Dv,depth_frag:Nv,distance_vert:Uv,distance_frag:Bv,equirect_vert:Fv,equirect_frag:Ov,linedashed_vert:Hv,linedashed_frag:zv,meshbasic_vert:kv,meshbasic_frag:Gv,meshlambert_vert:Vv,meshlambert_frag:qv,meshmatcap_vert:Wv,meshmatcap_frag:Xv,meshnormal_vert:$v,meshnormal_frag:Yv,meshphong_vert:jv,meshphong_frag:Qv,meshphysical_vert:Jv,meshphysical_frag:Zv,meshtoon_vert:Kv,meshtoon_frag:eb,points_vert:tb,points_frag:nb,shadow_vert:ib,shadow_frag:ab,sprite_vert:sb,sprite_frag:ob},Ue={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},aa={basic:{uniforms:zn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:zn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:zn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:zn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:zn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ne(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:zn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:zn([Ue.points,Ue.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:zn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:zn([Ue.common,Ue.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:zn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:zn([Ue.sprite,Ue.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:zn([Ue.common,Ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:zn([Ue.lights,Ue.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};aa.physical={uniforms:zn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};var hd={r:0,b:0,g:0},rb=new dt,sm=new ft;sm.set(-1,0,0,0,1,0,0,0,1);function lb(i,e,t,n,a,s){let o=new Ne(0),r=a===!0?0:1,l,c,u=null,p=0,d=null;function h(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let b=M.backgroundBlurriness>0;R=e.get(R,b)}return R}function g(M){let R=!1,b=h(M);b===null?m(o,r):b&&b.isColor&&(m(b,1),R=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,R){let b=h(R);b&&(b.isCubeTexture||b.mapping===zr)?(c===void 0&&(c=new te(new Tt(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Ss(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rb.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sm),c.material.toneMapped=yt.getTransfer(b.colorSpace)!==Pt,(u!==b||p!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,p=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new te(new yn(2,2),new Kt({name:"BackgroundMaterial",uniforms:Ss(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:ta,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=yt.getTransfer(b.colorSpace)!==Pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||p!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,p=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,R){M.getRGB(hd,Ku(i)),t.buffers.color.setClear(hd.r,hd.g,hd.b,R,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,R=1){o.set(M),r=R,m(o,r)},getClearAlpha:function(){return r},setClearAlpha:function(M){r=M,m(o,r)},render:g,addToRenderList:_,dispose:f}}function cb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=d(null),s=a,o=!1;function r(C,P,B,I,U){let Y=!1,J=p(C,I,B,P);s!==J&&(s=J,c(s.object)),Y=h(C,I,B,U),Y&&g(C,I,B,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,b(C,P,B,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function p(C,P,B,I){let U=I.wireframe===!0,Y=n[P.id];Y===void 0&&(Y={},n[P.id]=Y);let J=C.isInstancedMesh===!0?C.id:0,se=Y[J];se===void 0&&(se={},Y[J]=se);let F=se[B.id];F===void 0&&(F={},se[B.id]=F);let k=F[U];return k===void 0&&(k=d(l()),F[U]=k),k}function d(C){let P=[],B=[],I=[];for(let U=0;U<t;U++)P[U]=0,B[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:I,object:C,attributes:{},index:null}}function h(C,P,B,I){let U=s.attributes,Y=P.attributes,J=0,se=B.getAttributes();for(let F in se)if(se[F].location>=0){let j=U[F],ge=Y[F];if(ge===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(ge=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(ge=C.instanceColor)),j===void 0||j.attribute!==ge||ge&&j.data!==ge.data)return!0;J++}return s.attributesNum!==J||s.index!==I}function g(C,P,B,I){let U={},Y=P.attributes,J=0,se=B.getAttributes();for(let F in se)if(se[F].location>=0){let j=Y[F];j===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(j=C.instanceColor));let ge={};ge.attribute=j,j&&j.data&&(ge.data=j.data),U[F]=ge,J++}s.attributes=U,s.attributesNum=J,s.index=I}function _(){let C=s.newAttributes;for(let P=0,B=C.length;P<B;P++)C[P]=0}function m(C){f(C,0)}function f(C,P){let B=s.newAttributes,I=s.enabledAttributes,U=s.attributeDivisors;B[C]=1,I[C]===0&&(i.enableVertexAttribArray(C),I[C]=1),U[C]!==P&&(i.vertexAttribDivisor(C,P),U[C]=P)}function M(){let C=s.newAttributes,P=s.enabledAttributes;for(let B=0,I=P.length;B<I;B++)P[B]!==C[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function R(C,P,B,I,U,Y,J){J===!0?i.vertexAttribIPointer(C,P,B,U,Y):i.vertexAttribPointer(C,P,B,I,U,Y)}function b(C,P,B,I){_();let U=I.attributes,Y=B.getAttributes(),J=P.defaultAttributeValues;for(let se in Y){let F=Y[se];if(F.location>=0){let k=U[se];if(k===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),k!==void 0){let j=k.normalized,ge=k.itemSize,O=e.get(k);if(O===void 0)continue;let G=O.buffer,X=O.type,de=O.bytesPerElement,N=X===i.INT||X===i.UNSIGNED_INT||k.gpuType===Ac;if(k.isInterleavedBufferAttribute){let q=k.data,le=q.stride,Z=k.offset;if(q.isInstancedInterleavedBuffer){for(let ne=0;ne<F.locationSize;ne++)f(F.location+ne,q.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ne=0;ne<F.locationSize;ne++)m(F.location+ne);i.bindBuffer(i.ARRAY_BUFFER,G);for(let ne=0;ne<F.locationSize;ne++)R(F.location+ne,ge/F.locationSize,X,j,le*de,(Z+ge/F.locationSize*ne)*de,N)}else{if(k.isInstancedBufferAttribute){for(let q=0;q<F.locationSize;q++)f(F.location+q,k.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let q=0;q<F.locationSize;q++)m(F.location+q);i.bindBuffer(i.ARRAY_BUFFER,G);for(let q=0;q<F.locationSize;q++)R(F.location+q,ge/F.locationSize,X,j,ge*de,ge/F.locationSize*q*de,N)}}else if(J!==void 0){let j=J[se];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(F.location,j);break;case 3:i.vertexAttrib3fv(F.location,j);break;case 4:i.vertexAttrib4fv(F.location,j);break;default:i.vertexAttrib1fv(F.location,j)}}}}M()}function w(){y();for(let C in n){let P=n[C];for(let B in P){let I=P[B];for(let U in I){let Y=I[U];for(let J in Y)u(Y[J].object),delete Y[J];delete I[U]}}delete n[C]}}function T(C){if(n[C.id]===void 0)return;let P=n[C.id];for(let B in P){let I=P[B];for(let U in I){let Y=I[U];for(let J in Y)u(Y[J].object),delete Y[J];delete I[U]}}delete n[C.id]}function L(C){for(let P in n){let B=n[P];for(let I in B){let U=B[I];if(U[C.id]===void 0)continue;let Y=U[C.id];for(let J in Y)u(Y[J].object),delete Y[J];delete U[C.id]}}}function v(C){for(let P in n){let B=n[P],I=C.isInstancedMesh===!0?C.id:0,U=B[I];if(U!==void 0){for(let Y in U){let J=U[Y];for(let se in J)u(J[se].object),delete J[se];delete U[Y]}delete B[I],Object.keys(B).length===0&&delete n[P]}}}function y(){S(),o=!0,s!==a&&(s=a,c(s.object))}function S(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:r,reset:y,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function db(i,e,t){let n;function a(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function r(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,n,1)}this.setMode=a,this.render=s,this.renderInstances=o,this.renderMultiDraw=r}function ub(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(L){return!(L!==Ti&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(L){let v=L===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Zn&&L!==Ei&&!v&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(ot("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:b,maxSamples:w,samples:T}}function hb(i){let e=this,t=null,n=0,a=!1,s=!1,o=new ui,r=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let h=p.length!==0||d||n!==0||a;return a=d,n=p.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,h){let g=p.clippingPlanes,_=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!a||g===null||g.length===0||s&&!m)s?u(null):c();else{let M=s?0:n,R=M*4,b=f.clippingState||null;l.value=b,b=u(g,d,R,h);for(let w=0;w!==R;++w)b[w]=t[w];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,d,h,g){let _=p!==null?p.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=h+_*4,M=d.matrixWorldInverse;r.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,b=h;R!==_;++R,b+=4)o.copy(p[R]).applyMatrix4(M,r),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var yo=4,fb=6,pb=20,mb=256,jr=new Ya,Fp=new Ne,lh=null,ch=0,dh=0,uh=!1,gb=new D,Es=new D,es=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,s={}){let{size:o=256,position:r=gb}=s;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,a,l,r),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lh,ch,dh),this._renderer.xr.enabled=uh,e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ja||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:pn,format:Ti,colorSpace:ar,depthBuffer:!1},a=Op(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xb(s)),this._blurMaterial=bb(s,e,t),this._ggxMaterial=vb(s,e,t)}return a}_compileMaterial(e){let t=new te(new Jt,e);this._renderer.compile(t,jr)}_sceneToCubeUV(e,t,n,a,s){let l=new vn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,h=p.toneMapping;p.getClearColor(Fp),p.toneMapping=Hi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new te(new Tt,new gt({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,f=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,f=!0):(m.color.copy(Fp),f=!0);for(let R=0;R<6;R++){let b=R%3;b===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[R],s.y,s.z)):b===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[R]));let w=this._cubeSize;_o(a,b*w,R>2?w:0,w,w),p.setRenderTarget(a),f&&p.render(_,l),p.render(e,l)}p.toneMapping=h,p.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,a=e.mapping===Ja||e.mapping===ys;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());let s=a?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let r=s.uniforms;r.envMap.value=e;let l=this._cubeSize;_o(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,jr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let a=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,r=this._lodMeshes[n];r.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-u*u),d=c*1.25,h=p*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-yo?n-g+yo:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-t,_o(s,m,f,3*_,2*_),a.setRenderTarget(s),a.render(r,jr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,_o(e,m,f,3*_,2*_),a.setRenderTarget(e),a.render(r,jr)}_blur(e,t,n,a){let s=this._pingPongRenderTarget,o=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,o),this._blurPass(s,e,n,n,o)}_blurPass(e,t,n,a,s){let o=this._renderer,r=this._blurMaterial,l=this._lodMeshes[a];l.material=r;let c=r.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[a],p=3*u*(a>this._lodMax-yo?a-this._lodMax+yo:0),d=4*(this._cubeSize-u);_o(t,p,d,3*u,2*u),o.setRenderTarget(t),o.render(l,jr)}};function xb(i){let e=[],t=[],n=i,a=i-yo+1+fb;for(let s=0;s<a;s++){let o=Math.pow(2,n);e.push(o);let r=1/(o-2),l=-r,c=1+r,u=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,d=6,h=3,g=new Float32Array(h*d*p),_=new Float32Array(h*d*p);for(let f=0;f<p;f++){let M=f%3*2/3-1,R=f>2?0:-1,b=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];g.set(b,h*d*f);for(let w=0;w<d;w++){let T=u[w*2]*2-1,L=u[w*2+1]*2-1;f===0?Es.set(1,L,T):f===1?Es.set(-T,1,-L):f===2?Es.set(-T,L,1):f===3?Es.set(-1,L,-T):f===4?Es.set(-T,-1,L):Es.set(T,L,-1),Es.toArray(_,(f*d+w)*h)}}let m=new Jt;m.setAttribute("position",new $n(g,h)),m.setAttribute("outputDirection",new $n(_,h)),t.push(new te(m,null)),n>yo&&n--}return{lodMeshes:t,sizeLods:e}}function Op(i,e,t){let n=new en(i,e,t);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _o(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function vb(i,e,t){return new Kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function bb(i,e,t){return new Kt({name:"SphericalGaussianBlur",defines:{SAMPLES:pb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Hp(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function zp(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function gd(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pd=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new gr(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Tt(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Si});s.uniforms.tEquirect.value=t;let o=new te(a,s),r=t.minFilter;return t.minFilter===na&&(t.minFilter=_n),new vc(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,a);e.setRenderTarget(s)}};function _b(i){let e=new WeakMap,t=new WeakMap,n=null;function a(d,h=!1){return d==null?null:h?o(d):s(d)}function s(d){if(d&&d.isTexture){let h=d.mapping;if(h===Ec||h===Tc)if(e.has(d)){let g=e.get(d).texture;return r(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new pd(g.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),r(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let h=d.mapping,g=h===Ec||h===Tc,_=h===Ja||h===ys;if(g||_){let m=t.get(d),f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new es(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new es(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function r(d,h){return h===Ec?d.mapping=Ja:h===Tc&&(d.mapping=ys),d}function l(d){let h=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&h++;return h===g}function c(d){let h=d.target;h.removeEventListener("dispose",c);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){let h=d.target;h.removeEventListener("dispose",u);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:p}}function yb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let a=t(n);return a===null&&ps("WebGLRenderer: "+n+" extension not supported."),a}}}function Mb(i,e,t,n){let a={},s=new WeakMap;function o(p){let d=p.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete a[d.id];let h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function r(p,d){return a[d.id]===!0||(d.addEventListener("dispose",o),a[d.id]=!0,t.memory.geometries++),d}function l(p){let d=p.attributes;for(let h in d)e.update(d[h],i.ARRAY_BUFFER)}function c(p){let d=[],h=p.index,g=p.attributes.position,_=0;if(g===void 0)return;if(h!==null){let M=h.array;_=h.version;for(let R=0,b=M.length;R<b;R+=3){let w=M[R+0],T=M[R+1],L=M[R+2];d.push(w,T,T,L,L,w)}}else{let M=g.array;_=g.version;for(let R=0,b=M.length/3-1;R<b;R+=3){let w=R+0,T=R+1,L=R+2;d.push(w,T,T,L,L,w)}}let m=new(g.count>=65535?ur:dr)(d,1);m.version=_;let f=s.get(p);f&&e.remove(f),s.set(p,m)}function u(p){let d=s.get(p);if(d){let h=p.index;h!==null&&d.version<h.version&&c(p)}else c(p);return s.get(p)}return{get:r,update:l,getWireframeAttribute:u}}function Sb(i,e,t){let n;function a(p){n=p}let s,o;function r(p){s=p.type,o=p.bytesPerElement}function l(p,d){i.drawElements(n,d,s,p*o),t.update(d,n,1)}function c(p,d,h){h!==0&&(i.drawElementsInstanced(n,d,s,p*o,h),t.update(d,n,h))}function u(p,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,p,0,h);let _=0;for(let m=0;m<h;m++)_+=d[m];t.update(_,n,1)}this.setMode=a,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Eb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=r*(s/3);break;case i.LINES:t.lines+=r*(s/2);break;case i.LINE_STRIP:t.lines+=r*(s-1);break;case i.LINE_LOOP:t.lines+=r*s;break;case i.POINTS:t.points+=r*s;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Tb(i,e,t){let n=new WeakMap,a=new Vt;function s(o,r,l){let c=o.morphTargetInfluences,u=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,p=u!==void 0?u.length:0,d=n.get(r);if(d===void 0||d.count!==p){let y=function(){L.dispose(),n.delete(r),r.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let h=r.morphAttributes.position!==void 0,g=r.morphAttributes.normal!==void 0,_=r.morphAttributes.color!==void 0,m=r.morphAttributes.position||[],f=r.morphAttributes.normal||[],M=r.morphAttributes.color||[],R=0;h===!0&&(R=1),g===!0&&(R=2),_===!0&&(R=3);let b=r.attributes.position.count*R,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let T=new Float32Array(b*w*4*p),L=new cr(T,b,w,p);L.type=Ei,L.needsUpdate=!0;let v=R*4;for(let S=0;S<p;S++){let C=m[S],P=f[S],B=M[S],I=b*w*4*S;for(let U=0;U<C.count;U++){let Y=U*v;h===!0&&(a.fromBufferAttribute(C,U),T[I+Y+0]=a.x,T[I+Y+1]=a.y,T[I+Y+2]=a.z,T[I+Y+3]=0),g===!0&&(a.fromBufferAttribute(P,U),T[I+Y+4]=a.x,T[I+Y+5]=a.y,T[I+Y+6]=a.z,T[I+Y+7]=0),_===!0&&(a.fromBufferAttribute(B,U),T[I+Y+8]=a.x,T[I+Y+9]=a.y,T[I+Y+10]=a.z,T[I+Y+11]=B.itemSize===4?a.w:1)}}d={count:p,texture:L,size:new ve(b,w)},n.set(r,d),r.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];let g=r.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function wb(i,e,t,n,a){let s=new WeakMap;function o(c){let u=a.render.frame,p=c.geometry,d=e.get(c,p);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return d}function r(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:r}}var Ab={[Nr]:"LINEAR_TONE_MAPPING",[Ur]:"REINHARD_TONE_MAPPING",[Br]:"CINEON_TONE_MAPPING",[_s]:"ACES_FILMIC_TONE_MAPPING",[Or]:"AGX_TONE_MAPPING",[Hr]:"NEUTRAL_TONE_MAPPING",[Fr]:"CUSTOM_TONE_MAPPING"};function Cb(i,e,t,n,a,s){let o=new en(e,t,{type:i,depthBuffer:a,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),r=null,l=null,c=new Jt;c.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ut([0,2,0,0,2,0],2));let u=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new te(c,u),d=new Ya(-1,1,1,-1,0,1),h=null,g=null,_=!1,m,f=null,M=[],R=!1;this.setSize=function(b,w){o.setSize(b,w),r!==null&&r.setSize(b,w),l!==null&&l.setSize(b,w);for(let T=0;T<M.length;T++){let L=M[T];L.setSize&&L.setSize(b,w)}},this.setEffects=function(b){M=b,R=M.length>0&&M[0].isRenderPass===!0;let w=o.width,T=o.height;M.length>0&&r===null&&(r=new en(w,T,{type:pn,depthBuffer:!1,stencilBuffer:!1}),l=new en(w,T,{type:pn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<M.length;L++){let v=M[L];v.setSize&&v.setSize(w,T)}},this.begin=function(b,w){if(_||b.toneMapping===Hi&&M.length===0)return!1;if(f=w,w!==null){let T=w.width,L=w.height;(o.width!==T||o.height!==L)&&this.setSize(T,L)}return R===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=Hi,!0},this.hasRenderPass=function(){return R},this.end=function(b,w){b.toneMapping=m,_=!0;let T=o,L=r;for(let v=0;v<M.length;v++){let y=M[v];y.enabled!==!1&&(y.render(b,L,T,w),y.needsSwap!==!1&&(T=L,L=L===r?l:r))}if(h!==b.outputColorSpace||g!==b.toneMapping){h=b.outputColorSpace,g=b.toneMapping,u.defines={},yt.getTransfer(h)===Pt&&(u.defines.SRGB_TRANSFER="");let v=Ab[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(f),b.render(p,d),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),r!==null&&r.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var om=new Pn,ph=new Ga(1,1),rm=new cr,lm=new Zl,cm=new gr,kp=[],Gp=[],Vp=new Float32Array(16),qp=new Float32Array(9),Wp=new Float32Array(4);function So(i,e,t){let n=i[0];if(n<=0||n>0)return i;let a=e*t,s=kp[a];if(s===void 0&&(s=new Float32Array(a),kp[a]=s),e!==0){n.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,i[o].toArray(s,r)}return s}function Sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function En(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xd(i,e){let t=Gp[e];t===void 0&&(t=new Int32Array(e),Gp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2fv(this.addr,e),En(t,e)}}function Lb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;i.uniform3fv(this.addr,e),En(t,e)}}function Ib(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4fv(this.addr,e),En(t,e)}}function Db(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),En(t,e)}else{if(Sn(t,n))return;Wp.set(n),i.uniformMatrix2fv(this.addr,!1,Wp),En(t,n)}}function Nb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),En(t,e)}else{if(Sn(t,n))return;qp.set(n),i.uniformMatrix3fv(this.addr,!1,qp),En(t,n)}}function Ub(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),En(t,e)}else{if(Sn(t,n))return;Vp.set(n),i.uniformMatrix4fv(this.addr,!1,Vp),En(t,n)}}function Bb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2iv(this.addr,e),En(t,e)}}function Ob(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3iv(this.addr,e),En(t,e)}}function Hb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4iv(this.addr,e),En(t,e)}}function zb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2uiv(this.addr,e),En(t,e)}}function Gb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3uiv(this.addr,e),En(t,e)}}function Vb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4uiv(this.addr,e),En(t,e)}}function qb(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(ph.compareFunction=t.isReversedDepthBuffer()?ud:dd,s=ph):s=om,t.setTexture2D(e||s,a)}function Wb(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||lm,a)}function Xb(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||cm,a)}function $b(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||rm,a)}function Yb(i){switch(i){case 5126:return Rb;case 35664:return Pb;case 35665:return Lb;case 35666:return Ib;case 35674:return Db;case 35675:return Nb;case 35676:return Ub;case 5124:case 35670:return Bb;case 35667:case 35671:return Fb;case 35668:case 35672:return Ob;case 35669:case 35673:return Hb;case 5125:return zb;case 36294:return kb;case 36295:return Gb;case 36296:return Vb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return $b}}function jb(i,e){i.uniform1fv(this.addr,e)}function Qb(i,e){let t=So(e,this.size,2);i.uniform2fv(this.addr,t)}function Jb(i,e){let t=So(e,this.size,3);i.uniform3fv(this.addr,t)}function Zb(i,e){let t=So(e,this.size,4);i.uniform4fv(this.addr,t)}function Kb(i,e){let t=So(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function e_(i,e){let t=So(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function t_(i,e){let t=So(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function n_(i,e){i.uniform1iv(this.addr,e)}function i_(i,e){i.uniform2iv(this.addr,e)}function a_(i,e){i.uniform3iv(this.addr,e)}function s_(i,e){i.uniform4iv(this.addr,e)}function o_(i,e){i.uniform1uiv(this.addr,e)}function r_(i,e){i.uniform2uiv(this.addr,e)}function l_(i,e){i.uniform3uiv(this.addr,e)}function c_(i,e){i.uniform4uiv(this.addr,e)}function d_(i,e,t){let n=this.cache,a=e.length,s=xd(t,a);Sn(n,s)||(i.uniform1iv(this.addr,s),En(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=ph:o=om;for(let r=0;r!==a;++r)t.setTexture2D(e[r]||o,s[r])}function u_(i,e,t){let n=this.cache,a=e.length,s=xd(t,a);Sn(n,s)||(i.uniform1iv(this.addr,s),En(n,s));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||lm,s[o])}function h_(i,e,t){let n=this.cache,a=e.length,s=xd(t,a);Sn(n,s)||(i.uniform1iv(this.addr,s),En(n,s));for(let o=0;o!==a;++o)t.setTextureCube(e[o]||cm,s[o])}function f_(i,e,t){let n=this.cache,a=e.length,s=xd(t,a);Sn(n,s)||(i.uniform1iv(this.addr,s),En(n,s));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||rm,s[o])}function p_(i){switch(i){case 5126:return jb;case 35664:return Qb;case 35665:return Jb;case 35666:return Zb;case 35674:return Kb;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return a_;case 35669:case 35673:return s_;case 5125:return o_;case 36294:return r_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return f_}}var mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yb(t.type)}},gh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p_(t.type)}},xh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let a=this.seq;for(let s=0,o=a.length;s!==o;++s){let r=a[s];r.setValue(e,t[r.id],n)}}},hh=/(\w+)(\])?(\[|\.)?/g;function Xp(i,e){i.seq.push(e),i.map[e.id]=e}function m_(i,e,t){let n=i.name,a=n.length;for(hh.lastIndex=0;;){let s=hh.exec(n),o=hh.lastIndex,r=s[1],l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===a){Xp(t,c===void 0?new mh(r,i,e):new gh(r,i,e));break}else{let p=t.map[r];p===void 0&&(p=new xh(r),Xp(t,p)),t=p}}}var Mo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let r=e.getActiveUniform(t,o),l=e.getUniformLocation(t,r.name);m_(r,l,this)}let a=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(o):s.push(o);a.length>0&&(this.seq=a.concat(s))}setValue(e,t,n,a){let s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){let a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,o=t.length;s!==o;++s){let r=t[s],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,a)}}static seqWithValue(e,t){let n=[];for(let a=0,s=e.length;a!==s;++a){let o=e[a];o.id in t&&n.push(o)}return n}};function $p(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var g_=37297,x_=0;function v_(i,e){let t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=a;o<s;o++){let r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}var Yp=new ft;function b_(i){yt._getMatrix(Yp,yt.workingColorSpace,i);let e=`mat3( ${Yp.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case sr:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+v_(i.getShaderSource(e),r)}else return s}function __(i,e){let t=b_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var y_={[Nr]:"Linear",[Ur]:"Reinhard",[Br]:"Cineon",[_s]:"ACESFilmic",[Or]:"AgX",[Hr]:"Neutral",[Fr]:"Custom"};function M_(i,e){let t=y_[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fd=new D;function S_(){yt.getLuminanceCoefficients(fd);let i=fd.x.toFixed(4),e=fd.y.toFixed(4),t=fd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function T_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function w_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){let s=i.getActiveAttrib(e,a),o=s.name,r=1;s.type===i.FLOAT_MAT2&&(r=2),s.type===i.FLOAT_MAT3&&(r=3),s.type===i.FLOAT_MAT4&&(r=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:r}}return t}function Jr(i){return i!==""}function Qp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var A_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(A_,R_)}var C_=new Map;function R_(i,e){let t=vt[e];if(t===void 0){let n=C_.get(e);if(n!==void 0)t=vt[n],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vh(t)}var P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zp(i){return i.replace(P_,L_)}function L_(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Kp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var I_={[Dr]:"SHADOWMAP_TYPE_PCF",[xo]:"SHADOWMAP_TYPE_VSM"};function D_(i){return I_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var N_={[Ja]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE_UV"};function U_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":N_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var B_={[ys]:"ENVMAP_MODE_REFRACTION"};function F_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":B_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var O_={[Sc]:"ENVMAP_BLENDING_MULTIPLY",[fp]:"ENVMAP_BLENDING_MIX",[pp]:"ENVMAP_BLENDING_ADD"};function H_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":O_[i.combine]||"ENVMAP_BLENDING_NONE"}function z_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function k_(i,e,t,n){let a=i.getContext(),s=t.defines,o=t.vertexShader,r=t.fragmentShader,l=D_(t),c=U_(t),u=F_(t),p=H_(t),d=z_(t),h=E_(t),g=T_(s),_=a.createProgram(),m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jr).join(`
`),f.length>0&&(f+=`
`)):(m=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),f=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?vt.tonemapping_pars_fragment:"",t.toneMapping!==Hi?M_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,__("linearToOutputTexel",t.outputColorSpace),S_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),o=vh(o),o=Qp(o,t),o=Jp(o,t),r=vh(r),r=Qp(r,t),r=Jp(r,t),o=Zp(o),r=Zp(r),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let R=M+m+o,b=M+f+r,w=$p(a,a.VERTEX_SHADER,R),T=$p(a,a.FRAGMENT_SHADER,b);a.attachShader(_,w),a.attachShader(_,T),t.index0AttributeName!==void 0?a.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function L(C){if(i.debug.checkShaderErrors){let P=a.getProgramInfoLog(_)||"",B=a.getShaderInfoLog(w)||"",I=a.getShaderInfoLog(T)||"",U=P.trim(),Y=B.trim(),J=I.trim(),se=!0,F=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,_,w,T);else{let k=jp(a,w,"vertex"),j=jp(a,T,"fragment");rt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+k+`
`+j)}else U!==""?ot("WebGLProgram: Program Info Log:",U):(Y===""||J==="")&&(F=!1);F&&(C.diagnostics={runnable:se,programLog:U,vertexShader:{log:Y,prefix:m},fragmentShader:{log:J,prefix:f}})}a.deleteShader(w),a.deleteShader(T),v=new Mo(a,_),y=w_(a,_)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(_,g_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}var G_=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _h(e),t.set(e,n)),n}},_h=class{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}};function V_(i){return i===Ka||i===Xr||i===$r}function q_(i,e,t,n,a,s){let o=new co,r=new bh,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,d=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,y,S,C,P,B){let I=C.fog,U=P.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,se=e.get(v.envMap||Y,J),F=se&&se.mapping===zr?se.image.height:null,k=h[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&ot("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ge=j!==void 0?j.length:0,O=0;U.morphAttributes.position!==void 0&&(O=1),U.morphAttributes.normal!==void 0&&(O=2),U.morphAttributes.color!==void 0&&(O=3);let G,X,de,N;if(k){let Xt=aa[k];G=Xt.vertexShader,X=Xt.fragmentShader}else{G=v.vertexShader,X=v.fragmentShader;let Xt=r.getVertexShaderStage(v),Ut=r.getFragmentShaderStage(v);r.update(v,Xt,Ut),de=Xt.id,N=Ut.id}let q=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),Z=P.isInstancedMesh===!0,ne=P.isBatchedMesh===!0,he=!!v.map,Je=!!v.matcap,ce=!!se,Q=!!v.aoMap,ie=!!v.lightMap,pe=!!v.bumpMap&&v.wireframe===!1,ye=!!v.normalMap,Ge=!!v.displacementMap,De=!!v.emissiveMap,Ze=!!v.metalnessMap,He=!!v.roughnessMap,z=v.anisotropy>0,lt=v.clearcoat>0,Re=v.dispersion>0,E=v.retroreflectivity>0,x=v.iridescence>0,H=v.sheen>0,$=v.transmission>0,oe=z&&!!v.anisotropyMap,_e=lt&&!!v.clearcoatMap,Se=lt&&!!v.clearcoatNormalMap,ae=lt&&!!v.clearcoatRoughnessMap,ue=x&&!!v.iridescenceMap,Ee=x&&!!v.iridescenceThicknessMap,ke=H&&!!v.sheenColorMap,Pe=H&&!!v.sheenRoughnessMap,we=!!v.specularMap,$e=!!v.specularColorMap,Ye=!!v.specularIntensityMap,ct=$&&!!v.transmissionMap,W=$&&!!v.thicknessMap,Ie=!!v.gradientMap,me=!!v.alphaMap,Le=v.alphaTest>0,Be=!!v.alphaHash,be=!!v.extensions,Ke=Hi;v.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ke=i.toneMapping);let et={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:G,fragmentShader:X,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:N,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ne,batchingColor:ne&&P._colorsTexture!==null,instancing:Z,instancingColor:Z&&P.instanceColor!==null,instancingMorph:Z&&P.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:he,matcap:Je,envMap:ce,envMapMode:ce&&se.mapping,envMapCubeUVHeight:F,aoMap:Q,lightMap:ie,bumpMap:pe,normalMap:ye,displacementMap:Ge,emissiveMap:De,normalMapObjectSpace:ye&&v.normalMapType===xp,normalMapTangentSpace:ye&&v.normalMapType===Yr,packedNormalMap:ye&&v.normalMapType===Yr&&V_(v.normalMap.format),metalnessMap:Ze,roughnessMap:He,anisotropy:z,anisotropyMap:oe,clearcoat:lt,clearcoatMap:_e,clearcoatNormalMap:Se,clearcoatRoughnessMap:ae,dispersion:Re,retroreflection:E,iridescence:x,iridescenceMap:ue,iridescenceThicknessMap:Ee,sheen:H,sheenColorMap:ke,sheenRoughnessMap:Pe,specularMap:we,specularColorMap:$e,specularIntensityMap:Ye,transmission:$,transmissionMap:ct,thicknessMap:W,gradientMap:Ie,opaque:v.transparent===!1&&v.blending===Qa&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:Le,alphaHash:Be,combine:v.combine,mapUv:he&&g(v.map.channel),aoMapUv:Q&&g(v.aoMap.channel),lightMapUv:ie&&g(v.lightMap.channel),bumpMapUv:pe&&g(v.bumpMap.channel),normalMapUv:ye&&g(v.normalMap.channel),displacementMapUv:Ge&&g(v.displacementMap.channel),emissiveMapUv:De&&g(v.emissiveMap.channel),metalnessMapUv:Ze&&g(v.metalnessMap.channel),roughnessMapUv:He&&g(v.roughnessMap.channel),anisotropyMapUv:oe&&g(v.anisotropyMap.channel),clearcoatMapUv:_e&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(v.sheenRoughnessMap.channel),specularMapUv:we&&g(v.specularMap.channel),specularColorMapUv:$e&&g(v.specularColorMap.channel),specularIntensityMapUv:Ye&&g(v.specularIntensityMap.channel),transmissionMapUv:ct&&g(v.transmissionMap.channel),thicknessMapUv:W&&g(v.thicknessMap.channel),alphaMapUv:me&&g(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ye||z),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(he||me),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&ye===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:le,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:O,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:he&&v.map.isVideoTexture===!0&&yt.getTransfer(v.map.colorSpace)===Pt,decodeVideoTextureEmissive:De&&v.emissiveMap.isVideoTexture===!0&&yt.getTransfer(v.emissiveMap.colorSpace)===Pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===hn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:be&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&v.extensions.multiDraw===!0||ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function m(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let S in v.defines)y.push(S),y.push(v.defines[S]);return v.isRawShaderMaterial===!1&&(f(y,v),M(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function f(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numSunLights),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numSunLightShadows),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function M(v,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function R(v){let y=h[v.type],S;if(y){let C=aa[y];S=ki.clone(C.uniforms)}else S=v.uniforms;return S}function b(v,y){let S=u.get(y);return S!==void 0?++S.usedTimes:(S=new k_(i,y,v,a),c.push(S),u.set(y,S)),S}function w(v){if(--v.usedTimes===0){let y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){r.remove(v)}function L(){r.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:R,acquireProgram:b,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:L}}function W_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function n(o){i.delete(o)}function a(o,r,l){i.get(o)[r]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function X_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function em(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tm(){let i=[],e=0,t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function r(d,h,g,_,m,f){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:h,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:f},i[e]=M):(M.id=d.id,M.object=d,M.geometry=h,M.material=g,M.materialVariant=o(d),M.groupOrder=_,M.renderOrder=d.renderOrder,M.z=m,M.group=f),e++,M}function l(d,h,g,_,m,f,M){M.reversedDepth===!0&&(m=-m);let R=r(d,h,g,_,m,f);g.transmission>0?n.push(R):g.transparent===!0?a.push(R):t.push(R)}function c(d,h,g,_,m,f){let M=r(d,h,g,_,m,f);g.transmission>0?n.unshift(M):g.transparent===!0?a.unshift(M):t.unshift(M)}function u(d,h){t.length>1&&t.sort(d||X_),n.length>1&&n.sort(h||em),a.length>1&&a.sort(h||em)}function p(){for(let d=e,h=i.length;d<h;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:l,unshift:c,finish:p,sort:u}}function $_(){let i=new WeakMap;function e(n,a){let s=i.get(n),o;return s===void 0?(o=new tm,i.set(n,[o])):a>=s.length?(o=new tm,s.push(o)):o=s[a],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Y_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function j_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Q_=0;function J_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Z_(i){let e=new Y_,t=j_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let a=new D,s=new dt,o=new dt;function r(c){let u=0,p=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let h=0,g=0,_=0,m=0,f=0,M=0,R=0,b=0,w=0,T=0,L=0,v=0,y=0,S=0;c.sort(J_);for(let P=0,B=c.length;P<B;P++){let I=c[P],U=I.color,Y=I.intensity,J=I.distance,se=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ka?se=I.shadow.map.texture:se=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=U.r*Y,p+=U.g*Y,d+=U.b*Y;else if(I.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(I.sh.coefficients[F],Y);S++}else if(I.isSunLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,j=t.get(I);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=se;let ge=k.getViewportCount();for(let O=0;O<ge;O++)n.sunShadowMatrix[_+O]=k.getMatrix(O),n.sunShadowCascade[_+O]=k._cascadeData[O];_+=ge,g++}n.sun[h]=F,h++}else if(I.isDirectionalLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,j=t.get(I);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=I.shadow.matrix,w++}n.directional[m]=F,m++}else if(I.isSpotLight){let F=e.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(U).multiplyScalar(Y),F.distance=J,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,n.spot[M]=F;let k=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,k.updateMatrices(I),I.castShadow&&y++),n.spotLightMatrix[M]=k.matrix,I.castShadow){let j=t.get(I);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=se,L++}M++}else if(I.isRectAreaLight){let F=e.get(I);F.color.copy(U).multiplyScalar(Y),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),n.rectArea[R]=F,R++}else if(I.isPointLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){let k=I.shadow,j=t.get(I);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,j.shadowCameraNear=k.camera.near,j.shadowCameraFar=k.camera.far,n.pointShadow[f]=j,n.pointShadowMap[f]=se,n.pointShadowMatrix[f]=I.shadow.matrix,T++}n.point[f]=F,f++}else if(I.isHemisphereLight){let F=e.get(I);F.skyColor.copy(I.color).multiplyScalar(Y),F.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[b]=F,b++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;let C=n.hash;(C.sunLength!==h||C.directionalLength!==m||C.pointLength!==f||C.spotLength!==M||C.rectAreaLength!==R||C.hemiLength!==b||C.numSunShadows!==g||C.numDirectionalShadows!==w||C.numPointShadows!==T||C.numSpotShadows!==L||C.numSpotMaps!==v||C.numLightProbes!==S)&&(n.sun.length=h,n.directional.length=m,n.spot.length=M,n.rectArea.length=R,n.point.length=f,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+v-y,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=S,C.sunLength=h,C.directionalLength=m,C.pointLength=f,C.spotLength=M,C.rectAreaLength=R,C.hemiLength=b,C.numSunShadows=g,C.numDirectionalShadows=w,C.numPointShadows=T,C.numSpotShadows=L,C.numSpotMaps=v,C.numLightProbes=S,n.version=Q_++)}function l(c,u){let p=0,d=0,h=0,g=0,_=0,m=0,f=u.matrixWorldInverse;for(let M=0,R=c.length;M<R;M++){let b=c[M];if(b.isSunLight){let w=n.sun[p];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(f),p++}else if(b.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(f),d++}else if(b.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(f),o.identity(),s.copy(b.matrixWorld),s.premultiply(f),o.extractRotation(s),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let w=n.point[h];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(f),h++}else if(b.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:r,setupView:l,state:n}}function nm(i){let e=new Z_(i),t=[],n=[],a=[];function s(d){p.camera=d,t.length=0,n.length=0,a.length=0}function o(d){t.push(d)}function r(d){n.push(d)}function l(d){a.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:r,pushLightProbeGrid:l}}function K_(i){let e=new WeakMap;function t(a,s=0){let o=e.get(a),r;return o===void 0?(r=new nm(i),e.set(a,[r])):s>=o.length?(r=new nm(i),o.push(r)):r=o[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}var ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ty=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ny=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],iy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],im=new dt,Qr=new D,fh=new D;function ay(i,e,t){let n=new ho,a=new ve,s=new ve,o=new Vt,r=new oc,l=new rc,c={},u=t.maxTextureSize,p={[ta]:hn,[hn]:ta,[tn]:tn},d=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:ey,fragmentShader:ty}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let g=new Jt;g.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let f=this.type;this.render=function(T,L,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Mc&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Dr);let y=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Si),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let B=f!==this.type;B&&L.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(U=>U.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,U=T.length;I<U;I++){let Y=T[I],J=Y.shadow;if(J===void 0){ot("WebGLShadowMap:",Y,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;a.copy(J.mapSize);let se=J.getFrameExtents();a.multiply(se),s.copy(J.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/se.x),a.x=s.x*se.x,J.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/se.y),a.y=s.y*se.y,J.mapSize.y=s.y));let F=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=F,J.map===null||B===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===xo){if(Y.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new en(a.x,a.y,{format:Ka,type:pn,minFilter:_n,magFilter:_n,generateMipmaps:!1}),J.map.texture.name=Y.name+".shadowMap",J.map.depthTexture=new Ga(a.x,a.y,Ei),J.map.depthTexture.name=Y.name+".shadowMapDepth",J.map.depthTexture.format=Qi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=An,J.map.depthTexture.magFilter=An}else Y.isPointLight?(J.map=new pd(a.x),J.map.depthTexture=new ec(a.x,zi)):(J.map=new en(a.x,a.y),J.map.depthTexture=new Ga(a.x,a.y,zi)),J.map.depthTexture.name=Y.name+".shadowMap",J.map.depthTexture.format=Qi,this.type===Dr?(J.map.depthTexture.compareFunction=F?ud:dd,J.map.depthTexture.minFilter=_n,J.map.depthTexture.magFilter=_n):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=An,J.map.depthTexture.magFilter=An);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==a.x||J.map.height!==a.y)&&J.map.setSize(a.x,a.y);let k=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Y.isPointLight!==!0&&J.updateMatrices(Y,v);for(let j=0;j<k;j++){let ge=J.getCamera(j);if(Y.isPointLight){let O=J.camera,G=J.matrix,X=Y.distance||O.far;X!==O.far&&(O.far=X,O.updateProjectionMatrix()),Qr.setFromMatrixPosition(Y.matrixWorld),O.position.copy(Qr),fh.copy(O.position),fh.add(ny[j]),O.up.copy(iy[j]),O.lookAt(fh),O.updateMatrixWorld(),G.makeTranslation(-Qr.x,-Qr.y,-Qr.z),im.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J._frustum.setFromProjectionMatrix(im,O.coordinateSystem,O.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,j),i.clear();else{j===0&&(i.setRenderTarget(J.map),i.clear());let O=J.getViewport(j);o.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),P.viewport(o)}n=J.getFrustum(j),b(L,v,ge,Y,this.type)}J.isPointLightShadow!==!0&&this.type===xo&&M(J,v),J.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,C)};function M(T,L){let v=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new en(a.x,a.y,{format:Ka,type:pn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(L,null,v,d,_,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(L,null,v,h,_,null)}function R(T,L,v,y){let S=null,C=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)S=C;else if(S=v.isPointLight===!0?l:r,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let P=S.uuid,B=L.uuid,I=c[P];I===void 0&&(I={},c[P]=I);let U=I[B];U===void 0&&(U=S.clone(),I[B]=U,L.addEventListener("dispose",w)),S=U}if(S.visible=L.visible,S.wireframe=L.wireframe,y===xo?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:p[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,v.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let P=i.properties.get(S);P.light=v}return S}function b(T,L,v,y,S){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===xo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let B=e.update(T),I=T.material;if(Array.isArray(I)){let U=B.groups;for(let Y=0,J=U.length;Y<J;Y++){let se=U[Y],F=I[se.materialIndex];if(F&&F.visible){let k=R(T,F,y,S);T.onBeforeShadow(i,T,L,v,B,k,se),i.renderBufferDirect(v,null,B,k,T,se),T.onAfterShadow(i,T,L,v,B,k,se)}}}else if(I.visible){let U=R(T,I,y,S);T.onBeforeShadow(i,T,L,v,B,U,null),i.renderBufferDirect(v,null,B,U,T,null),T.onAfterShadow(i,T,L,v,B,U,null)}}let P=T.children;for(let B=0,I=P.length;B<I;B++)b(P[B],L,v,y,S)}function w(T){T.target.removeEventListener("dispose",w);for(let v in c){let y=c[v],S=T.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function sy(i,e){function t(){let W=!1,Ie=new Vt,me=null,Le=new Vt(0,0,0,0);return{setMask:function(Be){me!==Be&&!W&&(i.colorMask(Be,Be,Be,Be),me=Be)},setLocked:function(Be){W=Be},setClear:function(Be,be,Ke,et,Xt){Xt===!0&&(Be*=et,be*=et,Ke*=et),Ie.set(Be,be,Ke,et),Le.equals(Ie)===!1&&(i.clearColor(Be,be,Ke,et),Le.copy(Ie))},reset:function(){W=!1,me=null,Le.set(-1,0,0,0)}}}function n(){let W=!1,Ie=!1,me=null,Le=null,Be=null;return{setReversed:function(be){if(Ie!==be){let Ke=e.get("EXT_clip_control");be?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Ie=be;let et=Be;Be=null,this.setClear(et)}},getReversed:function(){return Ie},setTest:function(be){be?q(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(be){me!==be&&!W&&(i.depthMask(be),me=be)},setFunc:function(be){if(Ie&&(be=Cp[be]),Le!==be){switch(be){case kl:i.depthFunc(i.NEVER);break;case Gl:i.depthFunc(i.ALWAYS);break;case Vl:i.depthFunc(i.LESS);break;case so:i.depthFunc(i.LEQUAL);break;case ql:i.depthFunc(i.EQUAL);break;case Wl:i.depthFunc(i.GEQUAL);break;case Xl:i.depthFunc(i.GREATER);break;case $l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=be}},setLocked:function(be){W=be},setClear:function(be){Be!==be&&(Be=be,Ie&&(be=1-be),i.clearDepth(be))},reset:function(){W=!1,me=null,Le=null,Be=null,Ie=!1}}}function a(){let W=!1,Ie=null,me=null,Le=null,Be=null,be=null,Ke=null,et=null,Xt=null;return{setTest:function(Ut){W||(Ut?q(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(Ut){Ie!==Ut&&!W&&(i.stencilMask(Ut),Ie=Ut)},setFunc:function(Ut,Ii,Wi){(me!==Ut||Le!==Ii||Be!==Wi)&&(i.stencilFunc(Ut,Ii,Wi),me=Ut,Le=Ii,Be=Wi)},setOp:function(Ut,Ii,Wi){(be!==Ut||Ke!==Ii||et!==Wi)&&(i.stencilOp(Ut,Ii,Wi),be=Ut,Ke=Ii,et=Wi)},setLocked:function(Ut){W=Ut},setClear:function(Ut){Xt!==Ut&&(i.clearStencil(Ut),Xt=Ut)},reset:function(){W=!1,Ie=null,me=null,Le=null,Be=null,be=null,Ke=null,et=null,Xt=null}}}let s=new t,o=new n,r=new a,l=new WeakMap,c=new WeakMap,u={},p={},d={},h=new WeakMap,g=[],_=null,m=!1,f=null,M=null,R=null,b=null,w=null,T=null,L=null,v=new Ne(0,0,0),y=0,S=!1,C=null,P=null,B=null,I=null,U=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,se=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(F)[1]),J=se>=1):F.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),J=se>=2);let k=null,j={},ge=i.getParameter(i.SCISSOR_BOX),O=i.getParameter(i.VIEWPORT),G=new Vt().fromArray(ge),X=new Vt().fromArray(O);function de(W,Ie,me,Le){let Be=new Uint8Array(4),be=i.createTexture();i.bindTexture(W,be),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<me;Ke++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,Be):i.texImage2D(Ie+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Be);return be}let N={};N[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),N[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),N[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),q(i.DEPTH_TEST),o.setFunc(so),pe(!1),ye(Ou),q(i.CULL_FACE),Q(Si);function q(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function le(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function Z(W,Ie){return d[W]!==Ie?(i.bindFramebuffer(W,Ie),d[W]=Ie,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ie),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function ne(W,Ie){let me=g,Le=!1;if(W){me=h.get(Ie),me===void 0&&(me=[],h.set(Ie,me));let Be=W.textures;if(me.length!==Be.length||me[0]!==i.COLOR_ATTACHMENT0){for(let be=0,Ke=Be.length;be<Ke;be++)me[be]=i.COLOR_ATTACHMENT0+be;me.length=Be.length,Le=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,Le=!0);Le&&i.drawBuffers(me)}function he(W){return _!==W?(i.useProgram(W),_=W,!0):!1}let Je={[bs]:i.FUNC_ADD,[Qf]:i.FUNC_SUBTRACT,[Jf]:i.FUNC_REVERSE_SUBTRACT};Je[Zf]=i.MIN,Je[Kf]=i.MAX;let ce={[ep]:i.ZERO,[tp]:i.ONE,[np]:i.SRC_COLOR,[ku]:i.SRC_ALPHA,[lp]:i.SRC_ALPHA_SATURATE,[op]:i.DST_COLOR,[ap]:i.DST_ALPHA,[ip]:i.ONE_MINUS_SRC_COLOR,[Gu]:i.ONE_MINUS_SRC_ALPHA,[rp]:i.ONE_MINUS_DST_COLOR,[sp]:i.ONE_MINUS_DST_ALPHA,[cp]:i.CONSTANT_COLOR,[dp]:i.ONE_MINUS_CONSTANT_COLOR,[up]:i.CONSTANT_ALPHA,[hp]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(W,Ie,me,Le,Be,be,Ke,et,Xt,Ut){if(W===Si){m===!0&&(le(i.BLEND),m=!1);return}if(m===!1&&(q(i.BLEND),m=!0),W!==jf){if(W!==f||Ut!==S){if((M!==bs||w!==bs)&&(i.blendEquation(i.FUNC_ADD),M=bs,w=bs),Ut)switch(W){case Qa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFunc(i.ONE,i.ONE);break;case Hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",W);break}else switch(W){case Qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hu:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zu:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",W);break}R=null,b=null,T=null,L=null,v.set(0,0,0),y=0,f=W,S=Ut}return}Be=Be||Ie,be=be||me,Ke=Ke||Le,(Ie!==M||Be!==w)&&(i.blendEquationSeparate(Je[Ie],Je[Be]),M=Ie,w=Be),(me!==R||Le!==b||be!==T||Ke!==L)&&(i.blendFuncSeparate(ce[me],ce[Le],ce[be],ce[Ke]),R=me,b=Le,T=be,L=Ke),(et.equals(v)===!1||Xt!==y)&&(i.blendColor(et.r,et.g,et.b,Xt),v.copy(et),y=Xt),f=W,S=!1}function ie(W,Ie){W.side===tn?le(i.CULL_FACE):q(i.CULL_FACE);let me=W.side===hn;Ie&&(me=!me),pe(me),W.blending===Qa&&W.transparent===!1?Q(Si):Q(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);let Le=W.stencilWrite;r.setTest(Le),Le&&(r.setMask(W.stencilWriteMask),r.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),r.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),De(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(W){C!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),C=W)}function ye(W){W!==$f?(q(i.CULL_FACE),W!==P&&(W===Ou?i.cullFace(i.BACK):W===Yf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),P=W}function Ge(W){W!==B&&(J&&i.lineWidth(W),B=W)}function De(W,Ie,me){W?(q(i.POLYGON_OFFSET_FILL),(I!==Ie||U!==me)&&(I=Ie,U=me,o.getReversed()&&(Ie=-Ie),i.polygonOffset(Ie,me))):le(i.POLYGON_OFFSET_FILL)}function Ze(W){W?q(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function He(W){W===void 0&&(W=i.TEXTURE0+Y-1),k!==W&&(i.activeTexture(W),k=W)}function z(W,Ie,me){me===void 0&&(k===null?me=i.TEXTURE0+Y-1:me=k);let Le=j[me];Le===void 0&&(Le={type:void 0,texture:void 0},j[me]=Le),(Le.type!==W||Le.texture!==Ie)&&(k!==me&&(i.activeTexture(me),k=me),i.bindTexture(W,Ie||N[W]),Le.type=W,Le.texture=Ie)}function lt(){let W=j[k];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Re(){try{i.compressedTexImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function x(){try{i.texSubImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function H(){try{i.texSubImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function _e(){try{i.texStorage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function Se(){try{i.texStorage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function ae(){try{i.texImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function ue(){try{i.texImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function Ee(W){return p[W]!==void 0?p[W]:i.getParameter(W)}function ke(W,Ie){p[W]!==Ie&&(i.pixelStorei(W,Ie),p[W]=Ie)}function Pe(W){G.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),G.copy(W))}function we(W){X.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),X.copy(W))}function $e(W,Ie){let me=c.get(Ie);me===void 0&&(me=new WeakMap,c.set(Ie,me));let Le=me.get(W);Le===void 0&&(Le=i.getUniformBlockIndex(Ie,W.name),me.set(W,Le))}function Ye(W,Ie){let Le=c.get(Ie).get(W);l.get(Ie)!==Le&&(i.uniformBlockBinding(Ie,Le,W.__bindingPointIndex),l.set(Ie,Le))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},k=null,j={},d={},h=new WeakMap,g=[],_=null,m=!1,f=null,M=null,R=null,b=null,w=null,T=null,L=null,v=new Ne(0,0,0),y=0,S=!1,C=null,P=null,B=null,I=null,U=null,G.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:q,disable:le,bindFramebuffer:Z,drawBuffers:ne,useProgram:he,setBlending:Q,setMaterial:ie,setFlipSided:pe,setCullFace:ye,setLineWidth:Ge,setPolygonOffset:De,setScissorTest:Ze,activeTexture:He,bindTexture:z,unbindTexture:lt,compressedTexImage2D:Re,compressedTexImage3D:E,texImage2D:ae,texImage3D:ue,pixelStorei:ke,getParameter:Ee,updateUBOMapping:$e,uniformBlockBinding:Ye,texStorage2D:_e,texStorage3D:Se,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:oe,scissor:Pe,viewport:we,reset:ct}}function oy(i,e,t,n,a,s,o){let r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap,p=new Set,d,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,x){return g?new OffscreenCanvas(E,x):or("canvas")}function m(E,x,H){let $=1,oe=Re(E);if((oe.width>H||oe.height>H)&&($=H/Math.max(oe.width,oe.height)),$<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let _e=Math.floor($*oe.width),Se=Math.floor($*oe.height);d===void 0&&(d=_(_e,Se));let ae=x?_(_e,Se):d;return ae.width=_e,ae.height=Se,ae.getContext("2d").drawImage(E,0,0,_e,Se),ot("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+_e+"x"+Se+")."),ae}else return"data"in E&&ot("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),E;return E}function f(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,x,H,$,oe,_e=!1){if(E!==null){if(i[E]!==void 0)return i[E];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Se;$&&(Se=e.get("EXT_texture_norm16"),Se||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=x;if(x===i.RED&&(H===i.FLOAT&&(ae=i.R32F),H===i.HALF_FLOAT&&(ae=i.R16F),H===i.UNSIGNED_BYTE&&(ae=i.R8),H===i.UNSIGNED_SHORT&&Se&&(ae=Se.R16_EXT),H===i.SHORT&&Se&&(ae=Se.R16_SNORM_EXT)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ae=i.R8UI),H===i.UNSIGNED_SHORT&&(ae=i.R16UI),H===i.UNSIGNED_INT&&(ae=i.R32UI),H===i.BYTE&&(ae=i.R8I),H===i.SHORT&&(ae=i.R16I),H===i.INT&&(ae=i.R32I)),x===i.RG&&(H===i.FLOAT&&(ae=i.RG32F),H===i.HALF_FLOAT&&(ae=i.RG16F),H===i.UNSIGNED_BYTE&&(ae=i.RG8),H===i.UNSIGNED_SHORT&&Se&&(ae=Se.RG16_EXT),H===i.SHORT&&Se&&(ae=Se.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ae=i.RG8UI),H===i.UNSIGNED_SHORT&&(ae=i.RG16UI),H===i.UNSIGNED_INT&&(ae=i.RG32UI),H===i.BYTE&&(ae=i.RG8I),H===i.SHORT&&(ae=i.RG16I),H===i.INT&&(ae=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),H===i.UNSIGNED_INT&&(ae=i.RGB32UI),H===i.BYTE&&(ae=i.RGB8I),H===i.SHORT&&(ae=i.RGB16I),H===i.INT&&(ae=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),H===i.UNSIGNED_INT&&(ae=i.RGBA32UI),H===i.BYTE&&(ae=i.RGBA8I),H===i.SHORT&&(ae=i.RGBA16I),H===i.INT&&(ae=i.RGBA32I)),x===i.RGB&&(H===i.UNSIGNED_SHORT&&Se&&(ae=Se.RGB16_EXT),H===i.SHORT&&Se&&(ae=Se.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),x===i.RGBA){let ue=_e?sr:yt.getTransfer(oe);H===i.FLOAT&&(ae=i.RGBA32F),H===i.HALF_FLOAT&&(ae=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ae=ue===Pt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&Se&&(ae=Se.RGBA16_EXT),H===i.SHORT&&Se&&(ae=Se.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function w(E,x){let H;return E?x===null||x===zi||x===bo?H=i.DEPTH24_STENCIL8:x===Ei?H=i.DEPTH32F_STENCIL8:x===vo&&(H=i.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zi||x===bo?H=i.DEPTH_COMPONENT24:x===Ei?H=i.DEPTH_COMPONENT32F:x===vo&&(H=i.DEPTH_COMPONENT16),H}function T(E,x){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==An&&E.minFilter!==_n?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function L(E){let x=E.target;x.removeEventListener("dispose",L),y(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&p.delete(x)}function v(E){let x=E.target;x.removeEventListener("dispose",v),C(x)}function y(E){let x=n.get(E);if(x.__webglInit===void 0)return;let H=E.source,$=h.get(H);if($){let oe=$[x.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(E),Object.keys($).length===0&&h.delete(H)}n.remove(E)}function S(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let H=E.source,$=h.get(H);delete $[x.__cacheKey],o.memory.textures--}function C(E){let x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let oe=0;oe<x.__webglFramebuffer[$].length;oe++)i.deleteFramebuffer(x.__webglFramebuffer[$][oe]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=E.textures;for(let $=0,oe=H.length;$<oe;$++){let _e=n.get(H[$]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(E)}let P=0;function B(){P=0}function I(){return P}function U(E){P=E}function Y(){let E=P;return E>=a.maxTextures&&ot("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+a.maxTextures),P+=1,E}function J(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function se(E,x){let H=n.get(E);if(E.isVideoTexture&&z(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&H.__version!==E.version){let $=E.image;if($===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{le(H,E,x);return}}else E.isExternalTexture&&(H.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function F(E,x){let H=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){le(H,E,x);return}else E.isExternalTexture&&(H.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function k(E,x){let H=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){le(H,E,x);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function j(E,x){let H=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&H.__version!==E.version){Z(H,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}let ge={[za]:i.REPEAT,[ji]:i.CLAMP_TO_EDGE,[Yl]:i.MIRRORED_REPEAT},O={[An]:i.NEAREST,[mp]:i.NEAREST_MIPMAP_NEAREST,[kr]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[wc]:i.LINEAR_MIPMAP_NEAREST,[na]:i.LINEAR_MIPMAP_LINEAR},G={[bp]:i.NEVER,[Ep]:i.ALWAYS,[_p]:i.LESS,[dd]:i.LEQUAL,[yp]:i.EQUAL,[ud]:i.GEQUAL,[Mp]:i.GREATER,[Sp]:i.NOTEQUAL};function X(E,x){if(x.type===Ei&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===_n||x.magFilter===wc||x.magFilter===kr||x.magFilter===na||x.minFilter===_n||x.minFilter===wc||x.minFilter===kr||x.minFilter===na)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ge[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ge[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ge[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,O[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,O[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,G[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===An||x.minFilter!==kr&&x.minFilter!==na||x.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function de(E,x){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",L));let $=x.source,oe=h.get($);oe===void 0&&(oe={},h.set($,oe));let _e=J(x);if(_e!==E.__cacheKey){oe[_e]===void 0&&(oe[_e]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[_e].usedTimes++;let Se=oe[E.__cacheKey];Se!==void 0&&(oe[E.__cacheKey].usedTimes--,Se.usedTimes===0&&S(x)),E.__cacheKey=_e,E.__webglTexture=oe[_e].texture}return H}function N(E,x,H){return Math.floor(Math.floor(E/H)/x)}function q(E,x,H,$){let _e=E.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,H,$,x.data);else{_e.sort((ke,Pe)=>ke.start-Pe.start);let Se=0;for(let ke=1;ke<_e.length;ke++){let Pe=_e[Se],we=_e[ke],$e=Pe.start+Pe.count,Ye=N(we.start,x.width,4),ct=N(Pe.start,x.width,4);we.start<=$e+1&&Ye===ct&&N(we.start+we.count-1,x.width,4)===Ye?Pe.count=Math.max(Pe.count,we.start+we.count-Pe.start):(++Se,_e[Se]=we)}_e.length=Se+1;let ae=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ke=0,Pe=_e.length;ke<Pe;ke++){let we=_e[ke],$e=Math.floor(we.start/4),Ye=Math.ceil(we.count/4),ct=$e%x.width,W=Math.floor($e/x.width),Ie=Ye,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,ct,W,Ie,me,H,$,x.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ae),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function le(E,x,H){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);let oe=de(E,x),_e=x.source;t.bindTexture($,E.__webglTexture,i.TEXTURE0+H);let Se=n.get(_e);if(_e.version!==Se.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let me=yt.getPrimaries(yt.workingColorSpace),Le=x.colorSpace===Ma?null:yt.getPrimaries(x.colorSpace),Be=x.colorSpace===Ma||me===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ue=m(x.image,!1,a.maxTextureSize);ue=lt(x,ue);let Ee=s.convert(x.format,x.colorSpace),ke=s.convert(x.type),Pe=b(x.internalFormat,Ee,ke,x.normalized,x.colorSpace,x.isVideoTexture);X($,x);let we,$e=x.mipmaps,Ye=x.isVideoTexture!==!0,ct=Se.__version===void 0||oe===!0,W=_e.dataReady,Ie=T(x,ue);if(x.isDepthTexture)Pe=w(x.format===Za,x.type),ct&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Pe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ue.width,ue.height,0,Ee,ke,null));else if(x.isDataTexture)if($e.length>0){Ye&&ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Pe,$e[0].width,$e[0].height);for(let me=0,Le=$e.length;me<Le;me++)we=$e[me],Ye?W&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,we.width,we.height,Ee,ke,we.data):t.texImage2D(i.TEXTURE_2D,me,Pe,we.width,we.height,0,Ee,ke,we.data);x.generateMipmaps=!1}else Ye?(ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Pe,ue.width,ue.height),W&&q(x,ue,Ee,ke)):t.texImage2D(i.TEXTURE_2D,0,Pe,ue.width,ue.height,0,Ee,ke,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ye&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Pe,$e[0].width,$e[0].height,ue.depth);for(let me=0,Le=$e.length;me<Le;me++)if(we=$e[me],x.format!==Ti)if(Ee!==null)if(Ye){if(W)if(x.layerUpdates.size>0){let Be=nh(we.width,we.height,x.format,x.type);for(let be of x.layerUpdates){let Ke=we.data.subarray(be*Be/we.data.BYTES_PER_ELEMENT,(be+1)*Be/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,be,we.width,we.height,1,Ee,Ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,we.width,we.height,ue.depth,Ee,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,Pe,we.width,we.height,ue.depth,0,we.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,we.width,we.height,ue.depth,Ee,ke,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,Pe,we.width,we.height,ue.depth,0,Ee,ke,we.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ye&&ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Pe,$e[0].width,$e[0].height);for(let me=0,Le=$e.length;me<Le;me++)we=$e[me],x.format!==Ti?Ee!==null?Ye?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,we.width,we.height,Ee,we.data):t.compressedTexImage2D(i.TEXTURE_2D,me,Pe,we.width,we.height,0,we.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?W&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,we.width,we.height,Ee,ke,we.data):t.texImage2D(i.TEXTURE_2D,me,Pe,we.width,we.height,0,Ee,ke,we.data)}else if(x.isDataArrayTexture)if(Ye){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Pe,ue.width,ue.height,ue.depth),W)if(x.layerUpdates.size>0){let me=nh(ue.width,ue.height,x.format,x.type);for(let Le of x.layerUpdates){let Be=ue.data.subarray(Le*me/ue.data.BYTES_PER_ELEMENT,(Le+1)*me/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Le,ue.width,ue.height,1,Ee,ke,Be)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,ke,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ue.width,ue.height,ue.depth,0,Ee,ke,ue.data);else if(x.isData3DTexture)Ye?(ct&&t.texStorage3D(i.TEXTURE_3D,Ie,Pe,ue.width,ue.height,ue.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,ke,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ue.width,ue.height,ue.depth,0,Ee,ke,ue.data);else if(x.isFramebufferTexture){if(ct)if(Ye)t.texStorage2D(i.TEXTURE_2D,Ie,Pe,ue.width,ue.height);else{let me=ue.width,Le=ue.height;for(let Be=0;Be<Ie;Be++)t.texImage2D(i.TEXTURE_2D,Be,Pe,me,Le,0,Ee,ke,null),me>>=1,Le>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ue.parentNode!==me){me.appendChild(ue),p.add(x),me.onpaint=Le=>{let Be=Le.changedElements;for(let be of p)Be.includes(be.image)&&(be.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let Be=i.RGBA,be=i.RGBA,Ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Be,be,Ke,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($e.length>0){if(Ye&&ct){let me=Re($e[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Pe,me.width,me.height)}for(let me=0,Le=$e.length;me<Le;me++)we=$e[me],Ye?W&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ee,ke,we):t.texImage2D(i.TEXTURE_2D,me,Pe,Ee,ke,we);x.generateMipmaps=!1}else if(Ye){if(ct){let me=Re(ue);t.texStorage2D(i.TEXTURE_2D,Ie,Pe,me.width,me.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,ke,ue)}else t.texImage2D(i.TEXTURE_2D,0,Pe,Ee,ke,ue);f(x)&&M($),Se.__version=_e.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Z(E,x,H){if(x.image.length!==6)return;let $=de(E,x),oe=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+H);let _e=n.get(oe);if(oe.version!==_e.__version||$===!0){t.activeTexture(i.TEXTURE0+H);let Se=yt.getPrimaries(yt.workingColorSpace),ae=x.colorSpace===Ma?null:yt.getPrimaries(x.colorSpace),ue=x.colorSpace===Ma||Se===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,ke=x.image[0]&&x.image[0].isDataTexture,Pe=[];for(let be=0;be<6;be++)!Ee&&!ke?Pe[be]=m(x.image[be],!0,a.maxCubemapSize):Pe[be]=ke?x.image[be].image:x.image[be],Pe[be]=lt(x,Pe[be]);let we=Pe[0],$e=s.convert(x.format,x.colorSpace),Ye=s.convert(x.type),ct=b(x.internalFormat,$e,Ye,x.normalized,x.colorSpace),W=x.isVideoTexture!==!0,Ie=_e.__version===void 0||$===!0,me=oe.dataReady,Le=T(x,we);X(i.TEXTURE_CUBE_MAP,x);let Be;if(Ee){W&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,ct,we.width,we.height);for(let be=0;be<6;be++){Be=Pe[be].mipmaps;for(let Ke=0;Ke<Be.length;Ke++){let et=Be[Ke];x.format!==Ti?$e!==null?W?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke,0,0,et.width,et.height,$e,et.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke,ct,et.width,et.height,0,et.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke,0,0,et.width,et.height,$e,Ye,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke,ct,et.width,et.height,0,$e,Ye,et.data)}}}else{if(Be=x.mipmaps,W&&Ie){Be.length>0&&Le++;let be=Re(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,ct,be.width,be.height)}for(let be=0;be<6;be++)if(ke){W?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Pe[be].width,Pe[be].height,$e,Ye,Pe[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ct,Pe[be].width,Pe[be].height,0,$e,Ye,Pe[be].data);for(let Ke=0;Ke<Be.length;Ke++){let Xt=Be[Ke].image[be].image;W?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke+1,0,0,Xt.width,Xt.height,$e,Ye,Xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke+1,ct,Xt.width,Xt.height,0,$e,Ye,Xt.data)}}else{W?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,$e,Ye,Pe[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ct,$e,Ye,Pe[be]);for(let Ke=0;Ke<Be.length;Ke++){let et=Be[Ke];W?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke+1,0,0,$e,Ye,et.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke+1,ct,$e,Ye,et.image[be])}}}f(x)&&M(i.TEXTURE_CUBE_MAP),_e.__version=oe.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ne(E,x,H,$,oe,_e){let Se=s.convert(H.format,H.colorSpace),ae=s.convert(H.type),ue=b(H.internalFormat,Se,ae,H.normalized,H.colorSpace),Ee=n.get(x),ke=n.get(H);if(ke.__renderTarget=x,!Ee.__hasExternalTextures){let Pe=Math.max(1,x.width>>_e),we=Math.max(1,x.height>>_e);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,_e,ue,Pe,we,x.depth,0,Se,ae,null):t.texImage2D(oe,_e,ue,Pe,we,0,Se,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),He(x)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,oe,ke.__webglTexture,0,Ze(x)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,oe,ke.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(E,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let $=x.depthTexture,oe=$&&$.isDepthTexture?$.type:null,_e=w(x.stencilBuffer,oe),Se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(x)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze(x),_e,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze(x),_e,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,_e,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,E)}else{let $=x.textures;for(let oe=0;oe<$.length;oe++){let _e=$[oe],Se=s.convert(_e.format,_e.colorSpace),ae=s.convert(_e.type),ue=b(_e.internalFormat,Se,ae,_e.normalized,_e.colorSpace);He(x)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze(x),ue,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze(x),ue,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ue,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Je(E,x,H){let $=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(x.depthTexture);if(oe.__renderTarget=x,(!oe.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,x.depthTexture.addEventListener("dispose",L)),oe.__webglTexture===void 0){oe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),X(i.TEXTURE_CUBE_MAP,x.depthTexture);let Ee=s.convert(x.depthTexture.format),ke=s.convert(x.depthTexture.type),Pe;x.depthTexture.format===Qi?Pe=i.DEPTH_COMPONENT24:x.depthTexture.format===Za&&(Pe=i.DEPTH24_STENCIL8);for(let we=0;we<6;we++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Pe,x.width,x.height,0,Ee,ke,null)}}else se(x.depthTexture,0);let _e=oe.__webglTexture,Se=Ze(x),ae=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ue=x.depthTexture.format===Za?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Qi)He(x)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ae,_e,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,ue,ae,_e,0);else if(x.depthTexture.format===Za)He(x)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ae,_e,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,ue,ae,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(E){let x=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let $=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){let oe=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",oe)};$.addEventListener("dispose",oe),x.__depthDisposeCallback=oe}x.__boundDepthTexture=$}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)Je(x.__webglFramebuffer[$],E,$);else{let $=E.texture.mipmaps;$&&$.length>0?Je(x.__webglFramebuffer[0],E,0):Je(x.__webglFramebuffer,E,0)}else if(H){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),he(x.__webglDepthbuffer[$],E,!1);else{let oe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,_e)}}else{let $=E.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),he(x.__webglDepthbuffer,E,!1);else{let oe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,_e)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(E,x,H){let $=n.get(E);x!==void 0&&ne($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ce(E)}function ie(E){let x=E.texture,H=n.get(E),$=n.get(x);E.addEventListener("dispose",v);let oe=E.textures,_e=E.isWebGLCubeRenderTarget===!0,Se=oe.length>1;if(Se||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,o.memory.textures++),_e){H.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[ae]=[];for(let ue=0;ue<x.mipmaps.length;ue++)H.__webglFramebuffer[ae][ue]=i.createFramebuffer()}else H.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)H.__webglFramebuffer[ae]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ae=0,ue=oe.length;ae<ue;ae++){let Ee=n.get(oe[ae]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&He(E)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ae=0;ae<oe.length;ae++){let ue=oe[ae];H.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ae]);let Ee=s.convert(ue.format,ue.colorSpace),ke=s.convert(ue.type),Pe=b(ue.internalFormat,Ee,ke,ue.normalized,ue.colorSpace,E.isXRRenderTarget===!0),we=Ze(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Pe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,H.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),he(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),X(i.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)ne(H.__webglFramebuffer[ae][ue],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else ne(H.__webglFramebuffer[ae],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);f(x)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ae=0,ue=oe.length;ae<ue;ae++){let Ee=oe[ae],ke=n.get(Ee),Pe=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Pe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,ke.__webglTexture),X(Pe,Ee),ne(H.__webglFramebuffer,E,Ee,i.COLOR_ATTACHMENT0+ae,Pe,0),f(Ee)&&M(Pe)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),X(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)ne(H.__webglFramebuffer[ue],E,x,i.COLOR_ATTACHMENT0,ae,ue);else ne(H.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,ae,0);f(x)&&M(ae),t.unbindTexture()}E.depthBuffer&&ce(E)}function pe(E){let x=E.textures;for(let H=0,$=x.length;H<$;H++){let oe=x[H];if(f(oe)){let _e=R(E),Se=n.get(oe).__webglTexture;t.bindTexture(_e,Se),M(_e),t.unbindTexture()}}}let ye=[],Ge=[];function De(E){if(E.samples>0){if(He(E)===!1){let x=E.textures,H=E.width,$=E.height,oe=i.COLOR_BUFFER_BIT,_e=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(E),ae=x.length>1;if(ae)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let ue=E.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Ee]);let ke=n.get(x[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,oe,i.NEAREST),l===!0&&(ye.length=0,Ge.length=0,ye.push(i.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(ye.push(_e),Ge.push(_e),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Ee]);let ke=n.get(x[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ze(E){return Math.min(a.maxSamples,E.samples)}function He(E){let x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function z(E){let x=o.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function lt(E,x){let H=E.colorSpace,$=E.format,oe=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||H!==ar&&H!==Ma&&(yt.getTransfer(H)===Pt?($!==Ti||oe!==Zn)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",H)),x}function Re(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=U,this.setTexture2D=se,this.setTexture2DArray=F,this.setTexture3D=k,this.setTextureCube=j,this.rebindTextures=Q,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ry(i,e){function t(n,a=Ma){let s,o=yt.getTransfer(a);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$u)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qu)return i.BYTE;if(n===Wu)return i.SHORT;if(n===vo)return i.UNSIGNED_SHORT;if(n===Ac)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Ei)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Yu)return i.ALPHA;if(n===ju)return i.RGB;if(n===Ti)return i.RGBA;if(n===Qi)return i.DEPTH_COMPONENT;if(n===Za)return i.DEPTH_STENCIL;if(n===Pc)return i.RED;if(n===Lc)return i.RED_INTEGER;if(n===Ka)return i.RG;if(n===Ic)return i.RG_INTEGER;if(n===Dc)return i.RGBA_INTEGER;if(n===Gr||n===Vr||n===qr||n===Wr)if(o===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nc||n===Uc||n===Bc||n===Fc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Nc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===Hc||n===zc||n===kc||n===Gc||n===Xr||n===Vc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oc||n===Hc)return o===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===kc)return s.COMPRESSED_R11_EAC;if(n===Gc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Xr)return s.COMPRESSED_RG11_EAC;if(n===Vc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qc||n===Wc||n===Xc||n===$c||n===Yc||n===jc||n===Qc||n===Jc||n===Zc||n===Kc||n===ed||n===td||n===nd||n===id)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$c)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ed)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===td)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===id)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ad||n===sd||n===od)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ad)return o===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===od)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rd||n===ld||n===$r||n===cd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===rd)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ld)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$r)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new xr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Kt({vertexShader:ly,fragmentShader:cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends Ji{constructor(e,t){super();let n=this,a=null,s=1,o=null,r="local-floor",l=1,c=null,u=null,p=null,d=null,h=null,g=null,_=typeof XRWebGLBinding!="undefined",m=new yh,f={},M=t.getContextAttributes(),R=null,b=null,w=[],T=[],L=new ve,v=null,y=null,S=new vn;S.viewport=new Vt;let C=new vn;C.viewport=new Vt;let P=[S,C],B=new bc,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let q=w[N];return q===void 0&&(q=new uo,w[N]=q),q.getTargetRaySpace()},this.getControllerGrip=function(N){let q=w[N];return q===void 0&&(q=new uo,w[N]=q),q.getGripSpace()},this.getHand=function(N){let q=w[N];return q===void 0&&(q=new uo,w[N]=q),q.getHandSpace()};function Y(N){let q=T.indexOf(N.inputSource);if(q===-1)return;let le=w[q];le!==void 0&&(le.update(N.inputSource,N.frame,c||o),le.dispatchEvent({type:N.type,data:N.inputSource}))}function J(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",J),a.removeEventListener("inputsourceschange",se);for(let N=0;N<w.length;N++){let q=T[N];q!==null&&(T[N]=null,w[N].disconnect(q))}I=null,U=null,m.reset();for(let N in f)delete f[N];if(e.setRenderTarget(R),h=null,d=null,p=null,a=null,b=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(L.width,L.height,!1),y!==null){let N=y.camera;N.fov=y.fov,N.zoom=y.zoom,N.updateProjectionMatrix(),y=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){r=N,n.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(a,t)),p},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(N){if(a=N,a!==null){if(R=e.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",J),a.addEventListener("inputsourceschange",se),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Z=null,ne=null;M.depth&&(ne=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=M.stencil?Za:Qi,Z=M.stencil?bo:zi);let he={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(he),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new en(d.textureWidth,d.textureHeight,{format:Ti,type:Zn,depthTexture:new Ga(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,t,le),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new en(h.framebufferWidth,h.framebufferHeight,{format:Ti,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await a.requestReferenceSpace(r),de.setContext(a),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(N){for(let q=0;q<N.removed.length;q++){let le=N.removed[q],Z=T.indexOf(le);Z>=0&&(T[Z]=null,w[Z].disconnect(le))}for(let q=0;q<N.added.length;q++){let le=N.added[q],Z=T.indexOf(le);if(Z===-1){for(let he=0;he<w.length;he++)if(he>=T.length){T.push(le),Z=he;break}else if(T[he]===null){T[he]=le,Z=he;break}if(Z===-1)break}let ne=w[Z];ne&&ne.connect(le)}}let F=new D,k=new D;function j(N,q,le){F.setFromMatrixPosition(q.matrixWorld),k.setFromMatrixPosition(le.matrixWorld);let Z=F.distanceTo(k),ne=q.projectionMatrix.elements,he=le.projectionMatrix.elements,Je=ne[14]/(ne[10]-1),ce=ne[14]/(ne[10]+1),Q=(ne[9]+1)/ne[5],ie=(ne[9]-1)/ne[5],pe=(ne[8]-1)/ne[0],ye=(he[8]+1)/he[0],Ge=Je*pe,De=Je*ye,Ze=Z/(-pe+ye),He=Ze*-pe;if(q.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(He),N.translateZ(Ze),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ne[10]===-1)N.projectionMatrix.copy(q.projectionMatrix),N.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let z=Je+Ze,lt=ce+Ze,Re=Ge-He,E=De+(Z-He),x=Q*ce/lt*z,H=ie*ce/lt*z;N.projectionMatrix.makePerspective(Re,E,x,H,z,lt),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function ge(N,q){q===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(q.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(a===null)return;let q=N.near,le=N.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(le=m.depthFar)),B.near=C.near=S.near=q,B.far=C.far=S.far=le,(I!==B.near||U!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,U=B.far),B.layers.mask=N.layers.mask|6,S.layers.mask=B.layers.mask&-5,C.layers.mask=B.layers.mask&-3;let Z=N.parent,ne=B.cameras;ge(B,Z);for(let he=0;he<ne.length;he++)ge(ne[he],Z);ne.length===2?j(B,S,C):B.projectionMatrix.copy(S.projectionMatrix),y===null&&N.isPerspectiveCamera&&(y={camera:N,fov:N.fov,zoom:N.zoom}),O(N,B,Z)};function O(N,q,le){le===null?N.matrix.copy(q.matrixWorld):(N.matrix.copy(le.matrixWorld),N.matrix.invert(),N.matrix.multiply(q.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(q.projectionMatrix),N.projectionMatrixInverse.copy(q.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=lr*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=N)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(N){return f[N]};let G=null;function X(N,q){if(u=q.getViewerPose(c||o),g=q,u!==null){let le=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Z=!1;le.length!==B.cameras.length&&(B.cameras.length=0,Z=!0);for(let ce=0;ce<le.length;ce++){let Q=le[ce],ie=null;if(h!==null)ie=h.getViewport(Q);else{let ye=p.getViewSubImage(d,Q);ie=ye.viewport,ce===0&&(e.setRenderTargetTextures(b,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(b))}let pe=P[ce];pe===void 0&&(pe=new vn,pe.layers.enable(ce),pe.viewport=new Vt,P[ce]=pe),pe.matrix.fromArray(Q.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Q.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(ie.x,ie.y,ie.width,ie.height),ce===0&&(B.matrix.copy(pe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Z===!0&&B.cameras.push(pe)}let ne=a.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){p=n.getBinding();let ce=p.getDepthInformation(le[0]);ce&&ce.isValid&&ce.texture&&m.init(ce,a.renderState)}if(ne&&ne.includes("camera-access")&&_){e.state.unbindTexture(),p=n.getBinding();for(let ce=0;ce<le.length;ce++){let Q=le[ce].camera;if(Q){let ie=f[Q];ie||(ie=new xr,f[Q]=ie);let pe=p.getCameraImage(Q);ie.sourceTexture=pe}}}}for(let le=0;le<w.length;le++){let Z=T[le],ne=w[le];Z!==null&&ne!==void 0&&ne.update(Z,q,c||o)}G&&G(N,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let de=new am;de.setAnimationLoop(X),this.setAnimationLoop=function(N){G=N},this.dispose=function(){}}},dy=new dt,dm=new ft;dm.set(-1,0,0,0,1,0,0,0,1);function uy(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ku(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,M,R,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),p(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&h(m,f,b)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&r(m,f)):f.isPointsMaterial?l(m,f,M,R):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===hn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===hn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f),R=M.envMap,b=M.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(dy.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dm),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function r(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=R*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function hy(i,e,t,n){let a={},s={},o=[],r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let T=w.program;n.uniformBlockBinding(b,T)}function c(b,w){let T=a[b.id];T===void 0&&(m(b),T=u(b),a[b.id]=T,b.addEventListener("dispose",M));let L=w.program;n.updateUBOMapping(b,L);let v=e.render.frame;s[b.id]!==v&&(d(b),s[b.id]=v)}function u(b){let w=p();b.__bindingPointIndex=w;let T=i.createBuffer(),L=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,L,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function p(){for(let b=0;b<r;b++)if(o.indexOf(b)===-1)return o.push(b),b;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let w=a[b.id],T=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,y=T.length;v<y;v++){let S=T[v];if(Array.isArray(S))for(let C=0,P=S.length;C<P;C++)h(S[C],v,C,L);else h(S,v,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,w,T,L){if(_(b,w,T,L)===!0){let v=b.__offset,y=b.value;if(Array.isArray(y)){let S=0;for(let C=0;C<y.length;C++){let P=y[C],B=f(P);g(P,b.__data,S),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(S+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(y,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function g(b,w,T){typeof b=="number"||typeof b=="boolean"?w[0]=b:b.isMatrix3?(w[0]=b.elements[0],w[1]=b.elements[1],w[2]=b.elements[2],w[3]=0,w[4]=b.elements[3],w[5]=b.elements[4],w[6]=b.elements[5],w[7]=0,w[8]=b.elements[6],w[9]=b.elements[7],w[10]=b.elements[8],w[11]=0):ArrayBuffer.isView(b)?w.set(new b.constructor(b.buffer,b.byteOffset,w.length)):b.toArray(w,T)}function _(b,w,T,L){let v=b.value,y=w+"_"+T;if(L[y]===void 0)return typeof v=="number"||typeof v=="boolean"?L[y]=v:ArrayBuffer.isView(v)?L[y]=v.slice():L[y]=v.clone(),!0;{let S=L[y];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return L[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function m(b){let w=b.uniforms,T=0,L=16;for(let y=0,S=w.length;y<S;y++){let C=Array.isArray(w[y])?w[y]:[w[y]];for(let P=0,B=C.length;P<B;P++){let I=C[P],U=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,J=U.length;Y<J;Y++){let se=U[Y],F=f(se),k=T%L,j=k%F.boundary,ge=k+j;T+=j,ge!==0&&L-ge<F.storage&&(T+=L-ge),I.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=F.storage}}}let v=T%L;return v>0&&(T+=L-v),b.__size=T,b.__cache={},this}function f(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",b),w}function M(b){let w=b.target;w.removeEventListener("dispose",M);let T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(a[w.id]),delete a[w.id],delete s[w.id]}function R(){for(let b in a)i.deleteBuffer(a[b]);o=[],a={},s={}}return{bind:l,update:c,dispose:R}}var fy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ia=null;function py(){return ia===null&&(ia=new pr(fy,16,16,Ka,pn),ia.name="DFG_LUT",ia.minFilter=_n,ia.magFilter=_n,ia.wrapS=ji,ia.wrapT=ji,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}var md=class{constructor(e={}){let{canvas:t=Tp(),context:n=null,depth:a=!0,stencil:s=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Zn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=h,m=new Set([Dc,Ic,Lc]),f=new Set([Zn,zi,vo,bo,Cc,Rc]),M=new Uint32Array(4),R=new Int32Array(4),b=new D,w=null,T=null,L=[],v=[],y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,C=!1,P=null,B=null,I=null,U=null;this._outputColorSpace=Gt;let Y=0,J=0,se=null,F=-1,k=null,j=new Vt,ge=new Vt,O=null,G=new Ne(0),X=0,de=t.width,N=t.height,q=1,le=null,Z=null,ne=new Vt(0,0,de,N),he=new Vt(0,0,de,N),Je=!1,ce=new ho,Q=!1,ie=!1,pe=new dt,ye=new D,Ge=new Vt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function He(){return se===null?q:1}let z=n;function lt(A,V){return t.getContext(A,V)}let Re,E,x,H,$,oe,_e,Se,ae,ue,Ee,ke,Pe,we,$e,Ye,ct,W,Ie,me,Le,Be,be;try{let A={alpha:!0,depth:a,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Xt,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",Ii,!1),z===null){let V="webgl2";if(z=lt(V,A),z===null)throw lt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(A){throw t.removeEventListener("webglcontextlost",Xt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",Ii,!1),rt("WebGLRenderer: "+A.message),A}function Ke(){Re=new yb(z),Re.init(),Le=new ry(z,Re),E=new ub(z,Re,e,Le),x=new sy(z,Re),E.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),B=z.createFramebuffer(),I=z.createFramebuffer(),U=z.createFramebuffer(),H=new Eb(z),$=new W_,oe=new oy(z,Re,x,$,E,Le,H),_e=new _b(S),Se=new wg(z),Be=new cb(z,Se),ae=new Mb(z,Se,H,Be),ue=new wb(z,ae,Se,Be,H),W=new Tb(z,E,oe),$e=new hb($),Ee=new q_(S,_e,Re,E,Be,$e),ke=new uy(S,$),Pe=new $_,we=new K_(Re),ct=new lb(S,_e,x,ue,g,l),Ye=new ay(S,ue,E),be=new hy(z,H,E,x),Ie=new db(z,Re,H),me=new Sb(z,Re,H),H.programs=Ee.programs,S.capabilities=E,S.extensions=Re,S.properties=$,S.renderLists=Pe,S.shadowMap=Ye,S.state=x,S.info=H}_!==Zn&&(y=new Cb(_,t.width,t.height,r,a,s));let et=new Mh(S,z);this.xr=et,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let A=Re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(de,N,!1))},this.getSize=function(A){return A.set(de,N)},this.setSize=function(A,V,re=!0){if(et.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}de=A,N=V,t.width=Math.floor(A*q),t.height=Math.floor(V*q),re===!0&&(t.style.width=A+"px",t.style.height=V+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(de*q,N*q).floor()},this.setDrawingBufferSize=function(A,V,re){de=A,N=V,q=re,t.width=Math.floor(A*re),t.height=Math.floor(V*re),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(_===Zn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(ne)},this.setViewport=function(A,V,re,K){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,V,re,K),x.viewport(j.copy(ne).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,V,re,K){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,V,re,K),x.scissor(ge.copy(he).multiplyScalar(q).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(A){x.setScissorTest(Je=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,re=!0){let K=0;if(A){let ee=!1;if(se!==null){let Oe=se.texture.format;ee=m.has(Oe)}if(ee){let Oe=se.texture.type,qe=f.has(Oe),Fe=ct.getClearColor(),je=ct.getClearAlpha(),nt=Fe.r,xt=Fe.g,St=Fe.b;qe?(M[0]=nt,M[1]=xt,M[2]=St,M[3]=je,z.clearBufferuiv(z.COLOR,0,M)):(R[0]=nt,R[1]=xt,R[2]=St,R[3]=je,z.clearBufferiv(z.COLOR,0,R))}else K|=z.COLOR_BUFFER_BIT}V&&(K|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Xt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",Ii,!1),ct.dispose(),Pe.dispose(),we.dispose(),$.dispose(),_e.dispose(),ue.dispose(),Be.dispose(),be.dispose(),Ee.dispose(),et.dispose(),et.removeEventListener("sessionstart",af),et.removeEventListener("sessionend",sf),cs.stop()};function Xt(A){A.preventDefault(),rr("WebGLRenderer: Context Lost."),C=!0}function Ut(){rr("WebGLRenderer: Context Restored."),C=!1;let A=H.autoReset,V=Ye.enabled,re=Ye.autoUpdate,K=Ye.needsUpdate,ee=Ye.type;Ke(),H.autoReset=A,Ye.enabled=V,Ye.autoUpdate=re,Ye.needsUpdate=K,Ye.type=ee}function Ii(A){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Wi(A){let V=A.target;V.removeEventListener("dispose",Wi),o0(V)}function o0(A){r0(A),$.remove(A)}function r0(A){let V=$.get(A).programs;V!==void 0&&(V.forEach(function(re){Ee.releaseProgram(re)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,re,K,ee,Oe){V===null&&(V=De);let qe=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Fe=d0(A,V,re,K,ee);x.setMaterial(K,qe);let je=re.index,nt=1;if(K.wireframe===!0){if(je=ae.getWireframeAttribute(re),je===void 0)return;nt=2}let xt=re.drawRange,St=re.attributes.position,Qe=xt.start*nt,Bt=(xt.start+xt.count)*nt;Oe!==null&&(Qe=Math.max(Qe,Oe.start*nt),Bt=Math.min(Bt,(Oe.start+Oe.count)*nt)),je!==null?(Qe=Math.max(Qe,0),Bt=Math.min(Bt,je.count)):St!=null&&(Qe=Math.max(Qe,0),Bt=Math.min(Bt,St.count));let gn=Bt-Qe;if(gn<0||gn===1/0)return;Be.setup(ee,K,Fe,re,je);let jt,kt=Ie;if(je!==null&&(jt=Se.get(je),kt=me,kt.setIndex(jt)),ee.isMesh)K.wireframe===!0?(x.setLineWidth(K.wireframeLinewidth*He()),kt.setMode(z.LINES)):kt.setMode(z.TRIANGLES);else if(ee.isLine){let Un=K.linewidth;Un===void 0&&(Un=1),x.setLineWidth(Un*He()),ee.isLineSegments?kt.setMode(z.LINES):ee.isLineLoop?kt.setMode(z.LINE_LOOP):kt.setMode(z.LINE_STRIP)}else ee.isPoints?kt.setMode(z.POINTS):ee.isSprite&&kt.setMode(z.TRIANGLES);if(ee.isBatchedMesh)if(Re.get("WEBGL_multi_draw"))kt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let Un=ee._multiDrawStarts,Ve=ee._multiDrawCounts,Vn=ee._multiDrawCount,Ct=je?Se.get(je).bytesPerElement:1,vi=$.get(K).currentProgram.getUniforms();for(let Xi=0;Xi<Vn;Xi++)vi.setValue(z,"_gl_DrawID",Xi),kt.render(Un[Xi]/Ct,Ve[Xi])}else if(ee.isInstancedMesh)kt.renderInstances(Qe,gn,ee.count);else if(re.isInstancedBufferGeometry){let Un=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ve=Math.min(re.instanceCount,Un);kt.renderInstances(Qe,gn,Ve)}else kt.render(Qe,gn)};function nf(A,V,re,K){P!==null&&A.isNodeMaterial&&P.setObject(K,A),Q===!0&&$e.setState(A,re,!1),A.transparent===!0&&A.side===tn&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,fl(A,V,K),A.side=ta,A.needsUpdate=!0,fl(A,V,K),A.side=tn):fl(A,V,K)}this.compile=function(A,V,re=null){re===null&&(re=A),P!==null&&P.renderStart(A,V,re),T=we.get(re),T.init(V),v.push(T),re.traverseVisible(function(ee){ee.isLight&&ee.layers.test(V.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),A!==re&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(V.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),ie=this.localClippingEnabled,Q=$e.init(this.clippingPlanes,ie),Q===!0&&$e.setGlobalState(this.clippingPlanes,V),P!==null&&Ye.render(T.state.shadowsArray,re,V);let K=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Oe=ee.material;if(Oe)if(Array.isArray(Oe))for(let qe=0;qe<Oe.length;qe++){let Fe=Oe[qe];nf(Fe,re,V,ee),K.add(Fe)}else nf(Oe,re,V,ee),K.add(Oe)}),T=v.pop(),P!==null&&P.renderEnd(),K},this.compileAsync=function(A,V,re=null){let K=this.compile(A,V,re);return new Promise(ee=>{function Oe(){if(K.forEach(function(qe){let je=$.get(qe).currentProgram;(je===void 0||je.isReady())&&K.delete(qe)}),K.size===0){ee(A);return}setTimeout(Oe,10)}Re.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Qd=null;function l0(A){Qd&&Qd(A)}function af(){cs.stop()}function sf(){cs.start()}let cs=new am;cs.setAnimationLoop(l0),typeof self!="undefined"&&cs.setContext(self),this.setAnimationLoop=function(A){Qd=A,et.setAnimationLoop(A),A===null?cs.stop():cs.start()},et.addEventListener("sessionstart",af),et.addEventListener("sessionend",sf),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(A,V);let re=et.enabled===!0&&et.isPresenting===!0,K=y!==null&&(se===null||re)&&y.begin(S,se);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(et.cameraAutoUpdate===!0&&et.updateCamera(V),V=et.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,V,se),T=we.get(A,v.length),T.init(V),T.state.textureUnits=oe.getTextureUnits(),v.push(T),pe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ce.setFromProjectionMatrix(pe,Bi,V.reversedDepth),ie=this.localClippingEnabled,Q=$e.init(this.clippingPlanes,ie),w=Pe.get(A,L.length),w.init(),L.push(w),et.enabled===!0&&et.isPresenting===!0){let qe=S.xr.getDepthSensingMesh();qe!==null&&Jd(qe,V,-1/0,S.sortObjects)}Jd(A,V,0,S.sortObjects),w.finish(),P!==null&&P.updateLights(T.state.lightsArray),S.sortObjects===!0&&w.sort(le,Z),Ze=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Ze&&ct.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Q===!0&&$e.beginShadows();let ee=T.state.shadowsArray;if(Ye.render(ee,A,V),Q===!0&&$e.endShadows(),(K&&y.hasRenderPass())===!1){let qe=w.opaque,Fe=w.transmissive;if(T.setupLights(),V.isArrayCamera){let je=V.cameras;if(Fe.length>0)for(let nt=0,xt=je.length;nt<xt;nt++){let St=je[nt];rf(qe,Fe,A,St)}Ze&&ct.render(A);for(let nt=0,xt=je.length;nt<xt;nt++){let St=je[nt];of(w,A,St,St.viewport)}}else Fe.length>0&&rf(qe,Fe,A,V),Ze&&ct.render(A),of(w,A,V)}se!==null&&J===0&&(oe.updateMultisampleRenderTarget(se),oe.updateRenderTargetMipmap(se)),K&&y.end(S),A.isScene===!0&&A.onAfterRender(S,A,V),Be.resetDefaultState(),F=-1,k=null,v.pop(),v.length>0?(T=v[v.length-1],oe.setTextureUnits(T.state.textureUnits),Q===!0&&$e.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?w=L[L.length-1]:w=null,P!==null&&P.renderEnd()};function Jd(A,V,re,K){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ce)){K&&Ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);let qe=ue.update(A),Fe=A.material;Fe.visible&&w.push(A,qe,Fe,re,Ge.z,null,V)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ce))){let qe=ue.update(A),Fe=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ge.copy(A.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Ge.copy(qe.boundingSphere.center)),Ge.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(Fe)){let je=qe.groups;for(let nt=0,xt=je.length;nt<xt;nt++){let St=je[nt],Qe=Fe[St.materialIndex];Qe&&Qe.visible&&w.push(A,qe,Qe,re,Ge.z,St,V)}}else Fe.visible&&w.push(A,qe,Fe,re,Ge.z,null,V)}}let Oe=A.children;for(let qe=0,Fe=Oe.length;qe<Fe;qe++)Jd(Oe[qe],V,re,K)}function of(A,V,re,K){let{opaque:ee,transmissive:Oe,transparent:qe}=A;T.setupLightsView(re),Q===!0&&$e.setGlobalState(S.clippingPlanes,re),K&&x.viewport(j.copy(K)),ee.length>0&&hl(ee,V,re),Oe.length>0&&hl(Oe,V,re),qe.length>0&&hl(qe,V,re),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function rf(A,V,re,K){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){let Qe=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new en(1,1,{generateMipmaps:!0,type:Qe?pn:Zn,minFilter:na,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let Oe=T.state.transmissionRenderTarget[K.id],qe=K.viewport||j;Oe.setSize(qe.z*S.transmissionResolutionScale,qe.w*S.transmissionResolutionScale);let Fe=S.getRenderTarget(),je=S.getActiveCubeFace(),nt=S.getActiveMipmapLevel();S.setRenderTarget(Oe),S.getClearColor(G),X=S.getClearAlpha(),X<1&&S.setClearColor(16777215,.5),S.clear(),Ze&&ct.render(re);let xt=S.toneMapping;S.toneMapping=Hi;let St=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),Q===!0&&$e.setGlobalState(S.clippingPlanes,K),hl(A,re,K),oe.updateMultisampleRenderTarget(Oe),oe.updateRenderTargetMipmap(Oe),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Bt=0,gn=V.length;Bt<gn;Bt++){let jt=V[Bt],{object:kt,geometry:Un,material:Ve,group:Vn}=jt;if(Ve.side===tn&&kt.layers.test(K.layers)){let Ct=Ve.side;Ve.side=hn,Ve.needsUpdate=!0,lf(kt,re,K,Un,Ve,Vn),Ve.side=Ct,Ve.needsUpdate=!0,Qe=!0}}Qe===!0&&(oe.updateMultisampleRenderTarget(Oe),oe.updateRenderTargetMipmap(Oe))}S.setRenderTarget(Fe,je,nt),S.setClearColor(G,X),St!==void 0&&(K.viewport=St),S.toneMapping=xt}function hl(A,V,re){let K=V.isScene===!0?V.overrideMaterial:null;for(let ee=0,Oe=A.length;ee<Oe;ee++){let qe=A[ee],{object:Fe,geometry:je,group:nt}=qe,xt=qe.material;xt.allowOverride===!0&&K!==null&&(xt=K),Fe.layers.test(re.layers)&&lf(Fe,V,re,je,xt,nt)}}function lf(A,V,re,K,ee,Oe){P!==null&&ee.isNodeMaterial&&P.setObject(A,ee),A.onBeforeRender(S,V,re,K,ee,Oe),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(S,V,re,K,A,Oe),ee.transparent===!0&&ee.side===tn&&ee.forceSinglePass===!1?(ee.side=hn,ee.needsUpdate=!0,S.renderBufferDirect(re,V,K,ee,A,Oe),ee.side=ta,ee.needsUpdate=!0,S.renderBufferDirect(re,V,K,ee,A,Oe),ee.side=tn):S.renderBufferDirect(re,V,K,ee,A,Oe),A.onAfterRender(S,V,re,K,ee,Oe)}function fl(A,V,re){V.isScene!==!0&&(V=De);let K=$.get(A),ee=T.state.lights,Oe=T.state.shadowsArray,qe=ee.state.version,Fe=Ee.getParameters(A,ee.state,Oe,V,re,T.state.lightProbeGridArray),je=Ee.getProgramCacheKey(Fe),nt=K.programs;K.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,K.fog=V.fog;let xt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;K.envMap=_e.get(A.envMap||K.environment,xt),K.envMapRotation=K.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",Wi),nt=new Map,K.programs=nt);let St=nt.get(je);if(St!==void 0){if(K.currentProgram===St&&K.lightsStateVersion===qe)return df(A,Fe),St}else Fe.uniforms=Ee.getUniforms(A),P!==null&&A.isNodeMaterial&&P.build(A,re,Fe),A.onBeforeCompile(Fe,S),St=Ee.acquireProgram(Fe,je),nt.set(je,St),K.uniforms=Fe.uniforms;let Qe=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=$e.uniform),df(A,Fe),K.needsLights=h0(A),K.lightsStateVersion=qe,K.needsLights&&(Qe.ambientLightColor.value=ee.state.ambient,Qe.lightProbe.value=ee.state.probe,Qe.sunLights.value=ee.state.sun,Qe.sunLightShadows.value=ee.state.sunShadow,Qe.directionalLights.value=ee.state.directional,Qe.directionalLightShadows.value=ee.state.directionalShadow,Qe.spotLights.value=ee.state.spot,Qe.spotLightShadows.value=ee.state.spotShadow,Qe.rectAreaLights.value=ee.state.rectArea,Qe.ltc_1.value=ee.state.rectAreaLTC1,Qe.ltc_2.value=ee.state.rectAreaLTC2,Qe.pointLights.value=ee.state.point,Qe.pointLightShadows.value=ee.state.pointShadow,Qe.hemisphereLights.value=ee.state.hemi,Qe.sunShadowMatrix.value=ee.state.sunShadowMatrix,Qe.sunShadowCascade.value=ee.state.sunShadowCascade,Qe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ee.state.spotLightMatrix,Qe.spotLightMap.value=ee.state.spotLightMap,Qe.pointShadowMatrix.value=ee.state.pointShadowMatrix),K.lightProbeGrid=T.state.lightProbeGridArray.length>0,K.currentProgram=St,K.uniformsList=null,St}function cf(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Mo.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function df(A,V){let re=$.get(A);re.outputColorSpace=V.outputColorSpace,re.batching=V.batching,re.batchingColor=V.batchingColor,re.instancing=V.instancing,re.instancingColor=V.instancingColor,re.instancingMorph=V.instancingMorph,re.skinning=V.skinning,re.morphTargets=V.morphTargets,re.morphNormals=V.morphNormals,re.morphColors=V.morphColors,re.morphTargetsCount=V.morphTargetsCount,re.numClippingPlanes=V.numClippingPlanes,re.numIntersection=V.numClipIntersection,re.vertexAlphas=V.vertexAlphas,re.vertexTangents=V.vertexTangents,re.toneMapping=V.toneMapping}function c0(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(V.matrixWorld);for(let re=0,K=A.length;re<K;re++){let ee=A[re];if(ee.texture!==null&&ee.boundingBox.containsPoint(b))return ee}return null}function d0(A,V,re,K,ee){V.isScene!==!0&&(V=De),oe.resetTextureUnits();let Oe=V.fog,qe=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?V.environment:null,Fe=se===null?S.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:yt.workingColorSpace,je=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,nt=_e.get(K.envMap||qe,je),xt=K.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,St=!!re.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Qe=!!re.morphAttributes.position,Bt=!!re.morphAttributes.normal,gn=!!re.morphAttributes.color,jt=Hi;K.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(jt=S.toneMapping);let kt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Un=kt!==void 0?kt.length:0,Ve=$.get(K),Vn=T.state.lights;if(Q===!0&&(ie===!0||A!==k)){let $t=A===k&&K.id===F;$e.setState(K,A,$t)}let Ct=!1;K.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Vn.state.version||Ve.outputColorSpace!==Fe||ee.isBatchedMesh&&Ve.batching===!1||!ee.isBatchedMesh&&Ve.batching===!0||ee.isBatchedMesh&&Ve.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Ve.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Ve.instancing===!1||!ee.isInstancedMesh&&Ve.instancing===!0||ee.isSkinnedMesh&&Ve.skinning===!1||!ee.isSkinnedMesh&&Ve.skinning===!0||ee.isInstancedMesh&&Ve.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ve.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ve.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ve.instancingMorph===!1&&ee.morphTexture!==null||Ve.envMap!==nt||K.fog===!0&&Ve.fog!==Oe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==$e.numPlanes||Ve.numIntersection!==$e.numIntersection)||Ve.vertexAlphas!==xt||Ve.vertexTangents!==St||Ve.morphTargets!==Qe||Ve.morphNormals!==Bt||Ve.morphColors!==gn||Ve.toneMapping!==jt||Ve.morphTargetsCount!==Un||!!Ve.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,Ve.__version=K.version);let vi=Ve.currentProgram;Ct===!0&&(vi=fl(K,V,ee),P&&K.isNodeMaterial&&P.onUpdateProgram(K,vi,Ve));let Xi=!1,Ia=!1,Os=!1,Ht=vi.getUniforms(),cn=Ve.uniforms;if(x.useProgram(vi.program)&&(Xi=!0,Ia=!0,Os=!0),K.id!==F&&(F=K.id,Ia=!0),Ve.needsLights){let $t=c0(T.state.lightProbeGridArray,ee);Ve.lightProbeGrid!==$t&&(Ve.lightProbeGrid=$t,Ia=!0)}if(Xi||k!==A){x.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ht.setValue(z,"projectionMatrix",A.projectionMatrix),Ht.setValue(z,"viewMatrix",A.matrixWorldInverse);let Na=Ht.map.cameraPosition;Na!==void 0&&Na.setValue(z,ye.setFromMatrixPosition(A.matrixWorld)),E.logarithmicDepthBuffer&&Ht.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ht.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,Ia=!0,Os=!0)}if(Ve.needsLights&&(Vn.state.sunShadowMap.length>0&&Ht.setValue(z,"sunShadowMap",Vn.state.sunShadowMap,oe),Vn.state.directionalShadowMap.length>0&&Ht.setValue(z,"directionalShadowMap",Vn.state.directionalShadowMap,oe),Vn.state.spotShadowMap.length>0&&Ht.setValue(z,"spotShadowMap",Vn.state.spotShadowMap,oe),Vn.state.pointShadowMap.length>0&&Ht.setValue(z,"pointShadowMap",Vn.state.pointShadowMap,oe)),ee.isSkinnedMesh){Ht.setOptional(z,ee,"bindMatrix"),Ht.setOptional(z,ee,"bindMatrixInverse");let $t=ee.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Ht.setValue(z,"boneTexture",$t.boneTexture,oe))}ee.isBatchedMesh&&(Ht.setOptional(z,ee,"batchingTexture"),Ht.setValue(z,"batchingTexture",ee._matricesTexture,oe),Ht.setOptional(z,ee,"batchingIdTexture"),Ht.setValue(z,"batchingIdTexture",ee._indirectTexture,oe),Ht.setOptional(z,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ht.setValue(z,"batchingColorTexture",ee._colorsTexture,oe));let Da=re.morphAttributes;if((Da.position!==void 0||Da.normal!==void 0||Da.color!==void 0)&&W.update(ee,re,vi),(Ia||Ve.receiveShadow!==ee.receiveShadow)&&(Ve.receiveShadow=ee.receiveShadow,Ht.setValue(z,"receiveShadow",ee.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&V.environment!==null&&(cn.envMapIntensity.value=V.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=py()),Ia){if(Ht.setValue(z,"toneMappingExposure",S.toneMappingExposure),Ve.needsLights&&u0(cn,Os),Oe&&K.fog===!0&&ke.refreshFogUniforms(cn,Oe),ke.refreshMaterialUniforms(cn,K,q,N,T.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){let $t=Ve.lightProbeGrid;cn.probesSH.value=$t.texture,cn.probesMin.value.copy($t.boundingBox.min),cn.probesMax.value.copy($t.boundingBox.max),cn.probesResolution.value.copy($t.resolution)}Mo.upload(z,cf(Ve),cn,oe)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Mo.upload(z,cf(Ve),cn,oe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ht.setValue(z,"center",ee.center),Ht.setValue(z,"modelViewMatrix",ee.modelViewMatrix),Ht.setValue(z,"normalMatrix",ee.normalMatrix),Ht.setValue(z,"modelMatrix",ee.matrixWorld),K.uniformsGroups!==void 0){let $t=K.uniformsGroups;for(let Na=0,Hs=$t.length;Na<Hs;Na++){let hf=$t[Na];be.update(hf,vi),be.bind(hf,vi)}}return vi}function u0(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function h0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(A,V,re){let K=$.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),$.get(A.texture).__webglTexture=V,$.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:re,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let re=$.get(A);re.__webglFramebuffer=V,re.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,re=0){se=A,Y=V,J=re;let K=null,ee=!1,Oe=!1;if(A){let Fe=$.get(A);if(Fe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(z.FRAMEBUFFER,Fe.__webglFramebuffer),j.copy(A.viewport),ge.copy(A.scissor),O=A.scissorTest,x.viewport(j),x.scissor(ge),x.setScissorTest(O),F=-1;return}else if(Fe.__webglFramebuffer===void 0)oe.setupRenderTarget(A);else if(Fe.__hasExternalTextures)oe.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let xt=A.depthTexture;if(Fe.__boundDepthTexture!==xt){if(xt!==null&&$.has(xt)&&(A.width!==xt.image.width||A.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(A)}}let je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Oe=!0);let nt=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[V])?K=nt[V][re]:K=nt[V],ee=!0):A.samples>0&&oe.useMultisampledRTT(A)===!1?K=$.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?K=nt[re]:K=nt,j.copy(A.viewport),ge.copy(A.scissor),O=A.scissorTest}else j.copy(ne).multiplyScalar(q).floor(),ge.copy(he).multiplyScalar(q).floor(),O=Je;if(re!==0&&(K=B),x.bindFramebuffer(z.FRAMEBUFFER,K)&&x.drawBuffers(A,K),x.viewport(j),x.scissor(ge),x.setScissorTest(O),ee){let Fe=$.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,Fe.__webglTexture,re)}else if(Oe){let Fe=V;for(let je=0;je<A.textures.length;je++){let nt=$.get(A.textures[je]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+je,nt.__webglTexture,re,Fe)}}else if(A!==null&&re!==0){let Fe=$.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Fe.__webglTexture,re)}F=-1};function uf(A){let V=$.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=E.textureFormatReadable(A.format),V.__typeReadable=E.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,re,K,ee,Oe,qe,Fe=0){if(!(A&&A.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(je=je[qe]),je){x.bindFramebuffer(z.FRAMEBUFFER,je);try{let nt=A.textures[Fe],xt=nt.format,St=nt.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Fe);let Qe=uf(nt);if(Qe.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-K&&re>=0&&re<=A.height-ee&&z.readPixels(V,re,K,ee,Le.convert(xt),Le.convert(St),Oe)}finally{let nt=se!==null?$.get(se).__webglFramebuffer:null;x.bindFramebuffer(z.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(A,V,re,K,ee,Oe,qe,Fe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(je=je[qe]),je)if(V>=0&&V<=A.width-K&&re>=0&&re<=A.height-ee){x.bindFramebuffer(z.FRAMEBUFFER,je);let nt=A.textures[Fe],xt=nt.format,St=nt.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Fe);let Qe=uf(nt);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Bt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Bt),z.bufferData(z.PIXEL_PACK_BUFFER,Oe.byteLength,z.STREAM_READ),z.readPixels(V,re,K,ee,Le.convert(xt),Le.convert(St),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let gn=se!==null?$.get(se).__webglFramebuffer:null;x.bindFramebuffer(z.FRAMEBUFFER,gn);let jt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ap(z,jt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Bt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Oe),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Bt),z.deleteSync(jt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,re=0){let K=Math.pow(2,-re),ee=Math.floor(A.image.width*K),Oe=Math.floor(A.image.height*K),qe=V!==null?V.x:0,Fe=V!==null?V.y:0;oe.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,re,0,0,qe,Fe,ee,Oe),x.unbindTexture()},this.copyTextureToTexture=function(A,V,re=null,K=null,ee=0,Oe=0){let qe,Fe,je,nt,xt,St,Qe,Bt,gn,jt=A.isCompressedTexture?A.mipmaps[Oe]:A.image;if(re!==null)qe=re.max.x-re.min.x,Fe=re.max.y-re.min.y,je=re.isBox3?re.max.z-re.min.z:1,nt=re.min.x,xt=re.min.y,St=re.isBox3?re.min.z:0;else{let cn=Math.pow(2,-ee);qe=Math.floor(jt.width*cn),Fe=Math.floor(jt.height*cn),A.isDataArrayTexture?je=jt.depth:A.isData3DTexture?je=Math.floor(jt.depth*cn):je=1,nt=0,xt=0,St=0}K!==null?(Qe=K.x,Bt=K.y,gn=K.z):(Qe=0,Bt=0,gn=0);let kt=Le.convert(V.format),Un=Le.convert(V.type),Ve;V.isData3DTexture?(oe.setTexture3D(V,0),Ve=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(oe.setTexture2DArray(V,0),Ve=z.TEXTURE_2D_ARRAY):(oe.setTexture2D(V,0),Ve=z.TEXTURE_2D),x.activeTexture(z.TEXTURE0),x.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),x.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),x.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);let Vn=x.getParameter(z.UNPACK_ROW_LENGTH),Ct=x.getParameter(z.UNPACK_IMAGE_HEIGHT),vi=x.getParameter(z.UNPACK_SKIP_PIXELS),Xi=x.getParameter(z.UNPACK_SKIP_ROWS),Ia=x.getParameter(z.UNPACK_SKIP_IMAGES);x.pixelStorei(z.UNPACK_ROW_LENGTH,jt.width),x.pixelStorei(z.UNPACK_IMAGE_HEIGHT,jt.height),x.pixelStorei(z.UNPACK_SKIP_PIXELS,nt),x.pixelStorei(z.UNPACK_SKIP_ROWS,xt),x.pixelStorei(z.UNPACK_SKIP_IMAGES,St);let Os=A.isDataArrayTexture||A.isData3DTexture,Ht=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let cn=$.get(A),Da=$.get(V),$t=$.get(cn.__renderTarget),Na=$.get(Da.__renderTarget);x.bindFramebuffer(z.READ_FRAMEBUFFER,$t.__webglFramebuffer),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let Hs=0;Hs<je;Hs++)Os&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(A).__webglTexture,ee,St+Hs),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(V).__webglTexture,Oe,gn+Hs)),z.blitFramebuffer(nt,xt,qe,Fe,Qe,Bt,qe,Fe,z.DEPTH_BUFFER_BIT,z.NEAREST);x.bindFramebuffer(z.READ_FRAMEBUFFER,null),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||$.has(A)){let cn=$.get(A),Da=$.get(V);x.bindFramebuffer(z.READ_FRAMEBUFFER,I),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,U);for(let $t=0;$t<je;$t++)Os?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,cn.__webglTexture,ee,St+$t):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,cn.__webglTexture,ee),Ht?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Da.__webglTexture,Oe,gn+$t):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Da.__webglTexture,Oe),ee!==0?z.blitFramebuffer(nt,xt,qe,Fe,Qe,Bt,qe,Fe,z.COLOR_BUFFER_BIT,z.NEAREST):Ht?z.copyTexSubImage3D(Ve,Oe,Qe,Bt,gn+$t,nt,xt,qe,Fe):z.copyTexSubImage2D(Ve,Oe,Qe,Bt,nt,xt,qe,Fe);x.bindFramebuffer(z.READ_FRAMEBUFFER,null),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ht?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Ve,Oe,Qe,Bt,gn,qe,Fe,je,kt,Un,jt.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Ve,Oe,Qe,Bt,gn,qe,Fe,je,kt,jt.data):z.texSubImage3D(Ve,Oe,Qe,Bt,gn,qe,Fe,je,kt,Un,jt):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Oe,Qe,Bt,qe,Fe,kt,Un,jt.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Oe,Qe,Bt,jt.width,jt.height,kt,jt.data):z.texSubImage2D(z.TEXTURE_2D,Oe,Qe,Bt,qe,Fe,kt,Un,jt);x.pixelStorei(z.UNPACK_ROW_LENGTH,Vn),x.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ct),x.pixelStorei(z.UNPACK_SKIP_PIXELS,vi),x.pixelStorei(z.UNPACK_SKIP_ROWS,Xi),x.pixelStorei(z.UNPACK_SKIP_IMAGES,Ia),Oe===0&&V.generateMipmaps&&z.generateMipmap(Ve),x.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&oe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?oe.setTextureCube(A,0):A.isData3DTexture?oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?oe.setTexture2DArray(A,0):oe.setTexture2D(A,0),x.unbindTexture()},this.resetState=function(){Y=0,J=0,se=null,x.reset(),Be.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var Zr=location.search,Ts=["auto","media","alta","ultra"],Eh={auto:"Auto",media:"Media",alta:"Alta",ultra:"Ultra (4K)"},yd=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Md="gfx_quality",Th={get:i=>{try{return localStorage.getItem(i)}catch{return null}},set:(i,e)=>{try{localStorage.setItem(i,e)}catch{}}},at={level:"auto",texK:2,prMax:2,prMin:1,pr:1,aniso:4,adaptive:!0,shot:/[?&]shot=1/.test(Zr),touch:yd,fps:0,renderer:null},my=()=>window.devicePixelRatio||1;function gy(i){let e=my(),t=Math.max(screen.width||innerWidth,screen.height||innerHeight,innerWidth,innerHeight);switch(i){case"media":return{texK:1,prMax:Math.min(e,1),prMin:.75};case"alta":return{texK:2,prMax:Math.min(e,2),prMin:1};case"ultra":{let n=Math.max(e,3840/Math.max(1,Math.max(innerWidth,innerHeight)));return{texK:4,prMax:Math.min(3,n),prMin:1}}default:return{texK:t*e>=3e3&&!yd?3:2,prMax:Math.min(e,yd?2:3),prMin:yd?.75:1}}}function hm(i){i&&(Md=i);let e=(Zr.match(/[?&]q=(auto|media|alta|ultra)/)||[])[1]||Th.get(Md)||"auto";/[?&]low=1/.test(Zr)&&(e="media"),Ts.includes(e)||(e="auto"),at.level=e,Object.assign(at,gy(e)),at.pr=at.prMax,at.adaptive=!at.shot&&!/[?&]fixq=1/.test(Zr);let t=Zr.match(/[?&]pr=([\d.]+)/);return t&&(at.pr=at.prMax=+t[1]),at}function fm(i){Ts.includes(i)&&Th.set(Md,i)}var wh=()=>{let i=Th.get(Md);return Ts.includes(i)?i:"auto"};function pm(i={}){let e=new md(Object.assign({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:at.shot},i));return at.renderer=e,at.aniso=e.capabilities.getMaxAnisotropy()||4,Pn.DEFAULT_ANISOTROPY=at.aniso,e.setPixelRatio(at.pr),window.__quality=at,e}function xy(i,e,{dynamic:t=!1,k:n=null}={}){let a=t?3072:4096,s=n!=null?n:at.texK;s=Math.max(1,Math.min(s,a/Math.max(i,e)));let o=document.createElement("canvas");o.width=Math.round(i*s),o.height=Math.round(e*s);let r=o.getContext("2d");return r.scale(o.width/i,o.height/e),r.imageSmoothingQuality="high",o.logicalW=i,o.logicalH=e,o.scaleK=s,{c:o,g:r}}function vy(i){return i.colorSpace=Gt,i.anisotropy=at.aniso,i.generateMipmaps=!0,i.minFilter=na,i.magFilter=_n,i}function Kn(i,e,t,n){let{c:a,g:s}=xy(i,e,n);t&&t(s,i,e);let o=vy(new In(a));return o.userData.canvas=a,o.userData.c=a,o.userData.g=s,o}var vd=0,Sh=0,bd=0,_d=0,um=0;function mm(i,e){if(!at.renderer)return;let t=performance.now();vd||(vd=t),Sh++;let n=(t-vd)/1e3;if(n<1.5)return;let a=Sh/n;if(vd=t,Sh=0,at.fps=Math.round(a),!at.adaptive||document.hidden)return;let s=performance.now();a<40?(_d=0,++bd>=2&&at.pr>at.prMin+.01&&(at.pr=Math.max(at.prMin,+(at.pr*.8).toFixed(2)),at.renderer.setPixelRatio(at.pr),e&&e(at.pr),bd=0,um=s)):a>57?(bd=0,++_d>=4&&at.pr<at.prMax-.01&&s-um>2e4&&(at.pr=Math.min(at.prMax,+(at.pr*1.15).toFixed(2)),at.renderer.setPixelRatio(at.pr),e&&e(at.pr),_d=0)):(bd=0,_d=0)}function gm(){let i=at.renderer;if(!i)return"";let e=new ve;return i.getDrawingBufferSize(e),`${e.x}\xD7${e.y} \xB7 ${at.fps||"\u2013"} FPS`}var To=class extends ya{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Tt;e.deleteAttribute("uv");let t=new Wt({side:hn}),n=new Wt,a=new pi(16777215,900,28,2);a.position.set(.418,16.199,.3),this.add(a);let s=new te(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Yn(e,n,6),r=new un;r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),r.updateMatrix(),o.setMatrixAt(0,r.matrix),r.position.set(-5.607,-.754,-.758),r.rotation.set(0,.994,0),r.scale.set(1.97,1.534,3.955),r.updateMatrix(),o.setMatrixAt(1,r.matrix),r.position.set(6.167,.857,7.803),r.rotation.set(0,.561,0),r.scale.set(3.927,6.285,3.687),r.updateMatrix(),o.setMatrixAt(2,r.matrix),r.position.set(-2.017,.018,6.124),r.rotation.set(0,.333,0),r.scale.set(2.002,4.566,2.064),r.updateMatrix(),o.setMatrixAt(3,r.matrix),r.position.set(2.291,-.756,-2.621),r.rotation.set(0,-.286,0),r.scale.set(1.546,1.552,1.496),r.updateMatrix(),o.setMatrixAt(4,r.matrix),r.position.set(-2.193,-.369,-5.547),r.rotation.set(0,.516,0),r.scale.set(3.875,3.487,2.986),r.updateMatrix(),o.setMatrixAt(5,r.matrix),this.add(o);let l=new te(e,Eo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new te(e,Eo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new te(e,Eo(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let p=new te(e,Eo(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let d=new te(e,Eo(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let h=new te(e,Eo(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Eo(i){return new wr({color:0,emissive:16777215,emissiveIntensity:i})}var Ah={upm:2048,g:{"\xA1":{adv:464,cmd:[["moveTo",[[55,1353]]],["lineTo",[[55,1651]]],["lineTo",[[413,1651]]],["lineTo",[[413,1353]]],["closePath",[]],["moveTo",[[55,-108]]],["lineTo",[[125,1173]]],["lineTo",[[343,1173]]],["lineTo",[[413,-108]]],["closePath",[]]]},"!":{adv:469,cmd:[["moveTo",[[125,479]]],["lineTo",[[55,1760]]],["lineTo",[[413,1760]]],["lineTo",[[343,479]]],["closePath",[]],["moveTo",[[55,1]]],["lineTo",[[55,299]]],["lineTo",[[413,299]]],["lineTo",[[413,1]]],["closePath",[]]]},B:{adv:980,cmd:[["moveTo",[[78,0]]],["lineTo",[[78,1760]]],["lineTo",[[555,1760]]],["qCurveTo",[[747,1760],[922,1573],[922,1358]]],["lineTo",[[922,1281]]],["qCurveTo",[[922,1157],[833,1003],[742,979]]],["qCurveTo",[[861,949],[942,728],[942,569]]],["qCurveTo",[[942,398],[878,142],[710,0],[555,0]]],["closePath",[]],["moveTo",[[422,1097]]],["lineTo",[[494,1097]]],["qCurveTo",[[543,1097],[571,1173],[571,1226]]],["lineTo",[[571,1403]]],["qCurveTo",[[571,1488],[496,1488]]],["lineTo",[[422,1488]]],["closePath",[]],["moveTo",[[457,310]]],["qCurveTo",[[594,310],[594,440]]],["lineTo",[[594,660]]],["qCurveTo",[[594,735],[549,822],[487,822]]],["lineTo",[[422,822]]],["lineTo",[[422,312]]],["qCurveTo",[[444,310],[457,310]]],["closePath",[]]]},O:{adv:996,cmd:[["moveTo",[[498,-16]]],["qCurveTo",[[287,-16],[64,239],[64,480]]],["lineTo",[[64,1316]]],["qCurveTo",[[64,1542],[285,1776],[498,1776]]],["qCurveTo",[[711,1776],[932,1542],[932,1316]]],["lineTo",[[932,480]]],["qCurveTo",[[932,239],[709,-16],[498,-16]]],["closePath",[]],["moveTo",[[501,308]]],["qCurveTo",[[581,308],[581,463]]],["lineTo",[[581,1322]]],["qCurveTo",[[581,1452],[503,1452]]],["qCurveTo",[[415,1452],[415,1319]]],["lineTo",[[415,461]]],["qCurveTo",[[415,379],[455,308],[501,308]]],["closePath",[]]]},M:{adv:1528,cmd:[["moveTo",[[78,0]]],["lineTo",[[78,1760]]],["lineTo",[[614,1760]]],["lineTo",[[762,687]]],["lineTo",[[909,1760]]],["lineTo",[[1450,1760]]],["lineTo",[[1450,0]]],["lineTo",[[1128,0]]],["lineTo",[[1128,1268]]],["lineTo",[[926,0]]],["lineTo",[[610,0]]],["lineTo",[[396,1268]]],["lineTo",[[396,0]]],["closePath",[]]]},"0":{adv:1012,cmd:[["moveTo",[[506,-16]]],["qCurveTo",[[283,-16],[40,234],[40,469]]],["lineTo",[[40,1263]]],["qCurveTo",[[40,1511],[271,1776],[506,1776]]],["qCurveTo",[[742,1776],[972,1511],[972,1263]]],["lineTo",[[972,469]]],["qCurveTo",[[972,234],[730,-16],[506,-16]]],["closePath",[]],["moveTo",[[506,308]]],["qCurveTo",[[547,308],[593,382],[593,428]]],["lineTo",[[593,1297]]],["qCurveTo",[[593,1359],[566,1452],[506,1452]]],["qCurveTo",[[446,1452],[419,1359],[419,1297]]],["lineTo",[[419,428]]],["qCurveTo",[[419,382],[466,308],[506,308]]],["closePath",[]]]},"1":{adv:677,cmd:[["moveTo",[[243,0]]],["lineTo",[[243,1356]]],["qCurveTo",[[207,1313],[81,1260],[25,1260]]],["lineTo",[[25,1541]]],["qCurveTo",[[78,1549],[200,1602],[305,1695],[333,1761]]],["lineTo",[[616,1761]]],["lineTo",[[616,0]]],["closePath",[]]]},"2":{adv:1012,cmd:[["moveTo",[[62,0]]],["lineTo",[[62,84]]],["qCurveTo",[[62,215],[143,424],[271,603],[342,689]]],["qCurveTo",[[411,773],[536,950],[615,1157],[615,1286]]],["qCurveTo",[[615,1348],[578,1437],[520,1437]]],["qCurveTo",[[432,1437],[432,1280]]],["lineTo",[[432,1065]]],["lineTo",[[62,1065]]],["qCurveTo",[[61,1088],[58,1146],[58,1173]]],["qCurveTo",[[58,1363],[138,1628],[341,1767],[525,1767]]],["qCurveTo",[[744,1767],[987,1521],[987,1293]]],["qCurveTo",[[987,1138],[907,905],[775,714],[696,619]]],["qCurveTo",[[640,552],[535,412],[495,332]]],["lineTo",[[975,332]]],["lineTo",[[975,0]]],["closePath",[]]]},"3":{adv:1012,cmd:[["moveTo",[[484,-20]]],["qCurveTo",[[251,-20],[39,226],[39,474]]],["lineTo",[[39,658]]],["lineTo",[[400,658]]],["lineTo",[[400,473]]],["qCurveTo",[[400,403],[435,306],[496,306]]],["qCurveTo",[[558,306],[592,411],[592,530]]],["lineTo",[[592,574]]],["qCurveTo",[[592,665],[531,801],[442,801]]],["qCurveTo",[[431,801],[414,800],[408,799]]],["lineTo",[[408,1115]]],["qCurveTo",[[499,1115],[595,1196],[595,1291]]],["qCurveTo",[[595,1440],[509,1440]]],["qCurveTo",[[453,1440],[414,1353],[414,1286]]],["lineTo",[[414,1233]]],["lineTo",[[50,1233]]],["qCurveTo",[[49,1245],[48,1279],[48,1295]]],["qCurveTo",[[48,1537],[274,1763],[507,1763]]],["qCurveTo",[[957,1763],[957,1295]]],["qCurveTo",[[957,1165],[887,996],[792,962]]],["qCurveTo",[[867,926],[939,814],[961,648],[961,530]]],["qCurveTo",[[961,266],[740,-20],[484,-20]]],["closePath",[]]]},"4":{adv:1012,cmd:[["moveTo",[[540,-1]]],["lineTo",[[540,278]]],["lineTo",[[18,278]]],["lineTo",[[18,553]]],["lineTo",[[351,1761]]],["lineTo",[[899,1761]]],["lineTo",[[899,572]]],["lineTo",[[993,572]]],["lineTo",[[993,278]]],["lineTo",[[899,278]]],["lineTo",[[899,-1]]],["closePath",[]],["moveTo",[[332,572]]],["lineTo",[[540,572]]],["lineTo",[[540,1459]]],["closePath",[]]]},"5":{adv:1012,cmd:[["moveTo",[[506,-25]]],["qCurveTo",[[303,-25],[46,176],[46,384]]],["lineTo",[[46,646]]],["lineTo",[[412,646]]],["lineTo",[[412,495]]],["qCurveTo",[[412,448],[423,360],[463,304],[506,304]]],["qCurveTo",[[563,304],[599,381],[599,441]]],["lineTo",[[599,787]]],["qCurveTo",[[599,830],[588,914],[550,970],[508,970]]],["qCurveTo",[[408,970],[408,825]]],["lineTo",[[85,825]]],["lineTo",[[85,1761]]],["lineTo",[[924,1761]]],["lineTo",[[924,1431]]],["lineTo",[[419,1431]]],["lineTo",[[419,1183]]],["qCurveTo",[[445,1215],[534,1264],[594,1264]]],["qCurveTo",[[714,1264],[865,1172],[946,1008],[977,792],[977,668]]],["qCurveTo",[[977,509],[944,254],[847,72],[660,-25],[506,-25]]],["closePath",[]]]},"6":{adv:1012,cmd:[["moveTo",[[529,-16]]],["qCurveTo",[[346,-16],[139,109],[54,361],[54,549]]],["lineTo",[[54,1025]]],["qCurveTo",[[54,1208],[85,1488],[183,1678],[377,1776],[539,1776]]],["qCurveTo",[[650,1776],[842,1699],[960,1546],[960,1431]]],["lineTo",[[960,1241]]],["lineTo",[[621,1241]]],["lineTo",[[621,1277]]],["qCurveTo",[[621,1321],[612,1409],[576,1467],[533,1467]]],["qCurveTo",[[474,1467],[428,1402],[428,1341]]],["lineTo",[[428,988]]],["qCurveTo",[[453,1035],[553,1092],[625,1092]]],["qCurveTo",[[771,1092],[928,975],[988,743],[988,569]]],["qCurveTo",[[988,393],[902,130],[701,-16],[529,-16]]],["closePath",[]],["moveTo",[[516,308]]],["qCurveTo",[[578,308],[602,413],[602,495]]],["lineTo",[[602,637]]],["qCurveTo",[[602,781],[521,781]]],["qCurveTo",[[428,781],[428,656]]],["lineTo",[[428,438]]],["qCurveTo",[[428,308],[516,308]]],["closePath",[]]]},"7":{adv:1012,cmd:[["moveTo",[[145,1]]],["qCurveTo",[[161,247],[267,675],[405,1044],[469,1198]]],["lineTo",[[567,1435]]],["lineTo",[[70,1435]]],["lineTo",[[70,1761]]],["lineTo",[[958,1761]]],["lineTo",[[958,1569]]],["qCurveTo",[[958,1463],[888,1247],[831,1117]]],["qCurveTo",[[707,835],[560,276],[543,1]]],["closePath",[]]]},"8":{adv:1012,cmd:[["moveTo",[[506,-19]]],["qCurveTo",[[258,-19],[46,265],[46,525]]],["lineTo",[[46,642]]],["qCurveTo",[[46,776],[110,942],[196,986]]],["qCurveTo",[[115,1019],[47,1174],[47,1289]]],["lineTo",[[47,1335]]],["qCurveTo",[[47,1569],[282,1782],[506,1782]]],["qCurveTo",[[736,1782],[964,1563],[964,1321]]],["qCurveTo",[[964,1194],[904,1022],[815,984]]],["qCurveTo",[[910,935],[966,776],[966,642]]],["lineTo",[[966,525]]],["qCurveTo",[[966,265],[754,-19],[506,-19]]],["closePath",[]],["moveTo",[[506,1134]]],["qCurveTo",[[599,1134],[599,1302]]],["qCurveTo",[[599,1358],[560,1458],[506,1458]]],["qCurveTo",[[452,1458],[413,1358],[413,1302]]],["qCurveTo",[[413,1134],[506,1134]]],["closePath",[]],["moveTo",[[506,329]]],["qCurveTo",[[602,329],[602,484]]],["lineTo",[[602,645]]],["qCurveTo",[[602,725],[559,815],[506,815]]],["qCurveTo",[[451,815],[411,725],[411,645]]],["lineTo",[[411,484]]],["qCurveTo",[[411,329],[506,329]]],["closePath",[]]]},"9":{adv:1012,cmd:[["moveTo",[[503,-16]]],["qCurveTo",[[392,-16],[200,61],[82,215],[82,329]]],["lineTo",[[82,519]]],["lineTo",[[421,519]]],["lineTo",[[421,483]]],["qCurveTo",[[421,439],[430,351],[467,293],[509,293]]],["qCurveTo",[[568,293],[614,358],[614,419]]],["lineTo",[[614,772]]],["qCurveTo",[[589,726],[489,668],[417,668]]],["qCurveTo",[[272,668],[114,785],[54,1017],[54,1191]]],["qCurveTo",[[54,1367],[140,1630],[341,1776],[513,1776]]],["qCurveTo",[[697,1776],[903,1651],[988,1400],[988,1211]]],["lineTo",[[988,735]]],["qCurveTo",[[988,552],[957,272],[859,82],[665,-16],[503,-16]]],["closePath",[]],["moveTo",[[521,979]]],["qCurveTo",[[614,979],[614,1104]]],["lineTo",[[614,1322]]],["qCurveTo",[[614,1452],[526,1452]]],["qCurveTo",[[464,1452],[440,1347],[440,1265]]],["lineTo",[[440,1123]]],["qCurveTo",[[440,979],[521,979]]],["closePath",[]]]},"\u20AC":{adv:1075,cmd:[["moveTo",[[606,-16]]],["qCurveTo",[[383,-16],[140,257],[140,484]]],["lineTo",[[140,571]]],["lineTo",[[40,571]]],["lineTo",[[40,753]]],["lineTo",[[140,753]]],["lineTo",[[140,804]]],["lineTo",[[40,804]]],["lineTo",[[40,988]]],["lineTo",[[140,988]]],["lineTo",[[140,1078]]],["qCurveTo",[[140,1319],[371,1576],[606,1576]]],["qCurveTo",[[830,1576],[1042,1320],[1042,1092]]],["lineTo",[[693,1092]]],["lineTo",[[693,1120]]],["qCurveTo",[[693,1180],[666,1271],[606,1271]]],["qCurveTo",[[546,1271],[519,1180],[519,1120]]],["lineTo",[[519,988]]],["lineTo",[[834,988]]],["lineTo",[[834,804]]],["lineTo",[[519,804]]],["lineTo",[[519,753]]],["lineTo",[[834,753]]],["lineTo",[[834,571]]],["lineTo",[[519,571]]],["lineTo",[[519,449]]],["qCurveTo",[[519,403],[566,332],[606,332]]],["qCurveTo",[[647,332],[693,403],[693,449]]],["lineTo",[[693,474]]],["lineTo",[[1042,474]]],["qCurveTo",[[1042,331],[942,110],[748,-16],[606,-16]]],["closePath",[]]]},".":{adv:468,cmd:[["moveTo",[[55,1]]],["lineTo",[[55,299]]],["lineTo",[[413,299]]],["lineTo",[[413,1]]],["closePath",[]]]}}};var oa=Math.PI*2,Ft='Barlow, "Arial Narrow", Arial, sans-serif',ei='Anton, Impact, "Arial Black", sans-serif',ra=(i,e,t=0)=>new D(Math.cos(e)*i,t,-Math.sin(e)*i);var la={red:"#ff2a44",blue:"#2a8cff"},Wn=.3,ws=3,ns=.45,it={a0:-Math.PI/2-1.25,a1:-Math.PI/2+.5,r0:3,r1:5.6,ledge:-.5,floor:-1.25},on={a0:-.12,a1:.78,r0:4.3,r1:8.6},ht={bomb:new D(0,1.39,0),panelZ:.8,host:new D(2.75,Wn,-.55),pod:{red:{c:new D(-1,0,-5),yaw:.12},blue:{c:new D(6.07,ns,-2.01),yaw:-.88}},hex:new D(0,4.6,0)},xm=(i,e,t)=>{let n=i-e;for(;n<0;)n+=Math.PI*2;for(;n>=Math.PI*2;)n-=Math.PI*2;return n<=t-e};function Ed(i,e){let t=Math.hypot(i,e),n=Math.atan2(-e,i);return t<ws+.02?Wn:t>on.r0&&t<on.r1&&xm(n,on.a0,on.a1)?ns:0}function As(i,e,t,n,a,s){i.beginPath(),i.moveTo(e+s,t),i.arcTo(e+n,t,e+n,t+a,s),i.arcTo(e+n,t+a,e,t+a,s),i.arcTo(e,t+a,e,t,s),i.arcTo(e,t,e+n,t,s),i.closePath()}function _y(i,e,t,n,a,s,o=4){let r=String(e).split(" "),l=[],c="";for(let d of r){let h=c?c+" "+d:d;i.measureText(h).width>a&&c?(l.push(c),c=d):c=h}c&&l.push(c);let u=l.slice(0,o),p=n-(u.length-1)*s/2;return u.forEach((d,h)=>i.fillText(d,t,p+h*s,a)),u.length}function wi(i,e,t,n,a,s,o,r=800,l=Ft,c=3){let u=o;for(;u>10;u-=2){i.font=`${r} ${u}px ${l}`;let p=String(e).split(" "),d=1,h="";for(let g of p){let _=h?h+" "+g:g;i.measureText(_).width>a&&h?(d++,h=g):h=_}if(d<=c&&d*u*1.12<=s)break}return i.font=`${r} ${u}px ${l}`,_y(i,e,t,n,a,u*1.1,c)}var Sd=(()=>{let i=[],t=[1,.82,1.08,.86,.98,1.12,.84,1.02,.9,1.1,.8,1.04,.92];for(let n=0;n<26;n++){let a=n/26*Math.PI*2+.12,s=n%2===0?t[n/2]:.66+.04*Math.sin(n*2.3);i.push([Math.cos(a)*s*1.12,Math.sin(a)*s*.74])}return i})();function Ao(i,e,t,n,{glow:a=!0,t:s=0,star:o=!0}={}){i.save(),i.translate(e,t),i.textAlign="center",i.textBaseline="middle";let r=n*1.05;if(o){let d=_=>{i.beginPath(),Sd.forEach(([m,f],M)=>{let R=m*r*_,b=-f*r*_;M?i.lineTo(R,b):i.moveTo(R,b)}),i.closePath()};a&&(i.shadowColor="rgba(255,150,20,.8)",i.shadowBlur=n*.25);let h=i.createLinearGradient(-r,-r,r,r);h.addColorStop(0,"#fff2a0"),h.addColorStop(.3,"#ffb21e"),h.addColorStop(.55,"#c76a00"),h.addColorStop(.8,"#ffc84a"),h.addColorStop(1,"#9a4a00"),d(1),i.fillStyle=h,i.fill(),i.shadowBlur=0,d(.86);let g=i.createRadialGradient(0,0,0,0,0,r);g.addColorStop(0,"#4a2a7a"),g.addColorStop(1,"#1e1238"),i.fillStyle=g,i.fill(),i.lineWidth=n*.012,i.strokeStyle="rgba(0,0,0,.6)",i.stroke()}let l=n*.78;i.font=`${l}px ${ei}`;let c="\xA1BOOM!",u=i.measureText(c).width;i.save(),i.transform(1,-.08,-.16,1,0,0),i.rotate(-.04);for(let d=9;d>0;d--)i.fillStyle=`rgb(${40+d*9},${40+d*9},${55+d*9})`,i.fillText(c,d*l*.007,d*l*.009);i.lineJoin="round",i.lineWidth=l*.08,i.strokeStyle="#0c0a14",i.strokeText(c,0,0);let p=i.createLinearGradient(0,-l/2,0,l/2);if(p.addColorStop(0,"#ffffff"),p.addColorStop(.42,"#d9dde6"),p.addColorStop(.5,"#8a909e"),p.addColorStop(.62,"#e8ebf2"),p.addColorStop(1,"#a4aab8"),i.fillStyle=p,i.fillText(c,0,0),i.restore(),a){let d=r*.95,h=-r*.55,g=.85+.15*Math.sin(s*6),_=i.createRadialGradient(d,h,0,d,h,n*.18*g);_.addColorStop(0,"rgba(255,255,255,1)"),_.addColorStop(.25,"rgba(255,230,140,.8)"),_.addColorStop(1,"rgba(255,140,0,0)"),i.fillStyle=_,i.beginPath(),i.arc(d,h,n*.18*g,0,oa),i.fill(),i.strokeStyle="rgba(255,250,220,.9)",i.lineWidth=n*.012,i.beginPath(),i.moveTo(d-n*.3*g,h),i.lineTo(d+n*.3*g,h),i.moveTo(d,h-n*.22*g),i.lineTo(d,h+n*.22*g),i.stroke()}return i.restore(),r*2.4}function yy(i,e){let t=Ah.g[i];if(!t)return{shapes:[],adv:.5};let n=new Ir,a=null;for(let[s,o]of t.cmd)if(s==="moveTo")n.moveTo(o[0][0]*e,o[0][1]*e),a=o[0];else if(s==="lineTo")n.lineTo(o[0][0]*e,o[0][1]*e),a=o[0];else if(s==="qCurveTo")for(let r=0;r<o.length-1;r++){let l=o[r],c=r===o.length-2?o[r+1]:[(l[0]+o[r+1][0])/2,(l[1]+o[r+1][1])/2];n.quadraticCurveTo(l[0]*e,l[1]*e,c[0]*e,c[1]*e),a=c}else if(s==="curveTo"){let[r,l,c]=o;n.bezierCurveTo(r[0]*e,r[1]*e,l[0]*e,l[1]*e,c[0]*e,c[1]*e)}return{shapes:n.toShapes(!0),adv:t.adv*e}}function My(i,{size:e=1,depth:t=.2,bevel:n=.03,mats:a,curveSegments:s=10}={}){let o=e/Ah.upm,r=new Et,l=0;for(let c of i){if(c===" "){l+=e*.3;continue}let{shapes:u,adv:p}=yy(c,o);if(u.length){let d=new Oi(u,{depth:t,bevelEnabled:!0,bevelThickness:n,bevelSize:n*.8,bevelSegments:4,curveSegments:s}),h=new te(d,a);h.position.x=l,r.add(h)}l+=p+e*.02}return r.children.forEach(c=>c.position.x-=l/2),r.userData.width=l,r}function Sy(){return Kn(1024,1024,(i,e,t)=>{i.fillStyle="#d6d9e2",i.fillRect(0,0,e,t);let n=e/2,a=t/2;for(let s=40;s<e/2;s+=34)i.strokeStyle=s%136<34?"rgba(120,128,150,.35)":"rgba(150,156,175,.16)",i.lineWidth=s%136<34?3:1.5,i.beginPath(),i.arc(n,a,s,0,oa),i.stroke();for(let s=0;s<48;s++){let o=s/48*oa;i.strokeStyle="rgba(140,146,165,.12)",i.lineWidth=1.5,i.beginPath(),i.moveTo(n+Math.cos(o)*120,a+Math.sin(o)*120),i.lineTo(n+Math.cos(o)*e,a+Math.sin(o)*e),i.stroke()}},{k:Math.min(4,at.texK*2)})}function Ey(){let i=Kn(512,512,(e,t,n)=>{e.fillStyle="#0b0b10",e.fillRect(0,0,t,n),e.strokeStyle="#3a3a46",e.lineWidth=3;for(let a=0;a<=t;a+=16)e.beginPath(),e.moveTo(a,0),e.lineTo(a,n),e.stroke();for(let a=0;a<=n;a+=16)e.beginPath(),e.moveTo(0,a),e.lineTo(t,a),e.stroke()},{k:2});return i.wrapS=i.wrapT=za,i.repeat.set(5,5),i}function Kr(i,e,t,n,a,s,o=1,r=.45){let l=Math.max(2,Math.ceil(Math.abs(a-n)*t/r)),c=u=>{let p=[];for(let d=0;d<=48;d++){let h=n+(a-n)*d/48;p.push(ra(t,h,u))}return new jn(p)};for(let u of[s+o,s+o*.5])i.add(new te(new Mi(c(u),64,u===s+o?.025:.014,10),e));for(let u=0;u<=l;u++){let p=ra(t,n+(a-n)*u/l,s+o/2),d=new te(new wt(.018,.018,o,10),e);d.position.copy(p),i.add(d)}}function wo(i,e,t,n,a=64){let s=new Qn;for(let o=0;o<=a;o++){let r=t+(n-t)*o/a,l=Math.cos(r)*e,c=Math.sin(r)*e;o?s.lineTo(l,c):s.moveTo(l,c)}for(let o=a;o>=0;o--){let r=t+(n-t)*o/a;s.lineTo(Math.cos(r)*i,Math.sin(r)*i)}return s.closePath(),s}var ts=i=>(i.rotateX(-Math.PI/2),i);function Ch({scale:i=1,flare:e=!0}={}){let t=new Et,n=h=>{let g=new Qn;return Sd.forEach(([_,m],f)=>f?g.lineTo(_*h,m*h):g.moveTo(_*h,m*h)),g.closePath(),g},a=new Mn({color:16757800,metalness:1,roughness:.2,clearcoat:1,clearcoatRoughness:.08,emissive:4858880,emissiveIntensity:.35}),s=new Mn({color:2890322,metalness:.2,roughness:.35,clearcoat:.6}),o=new te(new Oi(n(1),{depth:.22,bevelEnabled:!0,bevelThickness:.05,bevelSize:.04,bevelSegments:4,curveSegments:4}),a);o.position.z=-.25,t.add(o);let r=new te(new Oi(n(.86),{depth:.06,bevelEnabled:!1}),s);r.position.z=0,t.add(r);let l=new Mn({color:15922426,metalness:1,roughness:.08,clearcoat:1,clearcoatRoughness:.05}),c=new Mn({color:10133680,metalness:1,roughness:.25}),u=My("\xA1BOOM!",{size:.9,depth:.32,bevel:.035,mats:[l,c]});u.position.set(.02,-.4,.08);let p=new dt().set(1,.18,0,0,.07,1,0,0,0,0,1,0,0,0,0,1);u.children.forEach(h=>h.geometry.applyMatrix4(p)),u.rotation.z=.05;let d=1.9/Math.max(1,u.userData.width);if(u.scale.setScalar(d),u.position.x=0,t.add(u),e){let h=new Hn(new Ln({map:Ty(),blending:fn,depthWrite:!1,color:16773312}));h.position.set(Sd[2][0]*1,Sd[2][1]*1,.3),h.scale.setScalar(.9),t.add(h),t.userData.flare=h}return t.scale.setScalar(i),t.userData.mats={goldM:a,purpM:s,chromeM:l},t}function Ty(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.08,"rgba(255,240,190,.9)"),t.addColorStop(.3,"rgba(255,170,60,.25)"),t.addColorStop(1,"rgba(255,120,0,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),e.globalCompositeOperation="lighter";for(let[a,s,o]of[[256,6,0],[6,200,0],[180,4,.785],[180,4,-.785]]){e.save(),e.translate(128,128),e.rotate(o);let r=e.createLinearGradient(-a/2,0,a/2,0);if(r.addColorStop(0,"rgba(255,220,150,0)"),r.addColorStop(.5,"rgba(255,255,240,.95)"),r.addColorStop(1,"rgba(255,220,150,0)"),e.fillStyle=r,s>a){let l=e.createLinearGradient(0,-s/2,0,s/2);l.addColorStop(0,"rgba(255,220,150,0)"),l.addColorStop(.5,"rgba(255,255,240,.95)"),l.addColorStop(1,"rgba(255,220,150,0)"),e.fillStyle=l}e.fillRect(-a/2,-s/2,a,s),e.restore()}let n=new In(i);return n.colorSpace=Gt,n}function wy(i,{r:e=11.6,a0:t=Math.PI/2-1.42,a1:n=Math.PI/2+1.42,y0:a=.9,y1:s=8.4,d:o=1.1,hole:r=null}={}){let l=[],c=[],u=[],p=[],d=Math.round((s-a)/(o/2)),h=.14,g=R=>e-(R-a)*h,_=(R,b,w)=>ra(w,R,b);for(let R=0;R<=d;R++){let b=a+R*o/2,w=g(b),T=o/w,L=R%2?T/2:0;for(let v=t+L;v<=n+1e-6;v+=T){if(r&&r(v,b))continue;let y=T*.47,S=o*.47/1,C=_(v,b,w),P=_(v-y,b,w),B=_(v+y,b,w),I=_(v,b+S/2*1,g(b+S/2)),U=_(v,b-S/2,g(b-S/2)),Y=(le,Z)=>[(n-le)/(n-t),(Z-a)/(s-a)],J=(le,Z,ne,he,Je,ce,Q,ie,pe)=>{l.push(...le.toArray(),...Z.toArray(),...ne.toArray()),c.push(he,he,he,Je,Je,Je,ce,ce,ce),u.push(...Q,...ie,...pe)},se=Y(v,b),F=Y(v-y,b),k=Y(v+y,b),j=Y(v,b+S/2),ge=Y(v,b-S/2);J(C,I,P,1,.86,.86,se,j,F),J(C,B,I,1,.86,.86,se,k,j),J(C,U,B,1,.7,.7,se,ge,k),J(C,P,U,1,.7,.7,se,F,ge);let O=.5,G=w-.03,X=_(v-y*O,b,G),de=_(v+y*O,b,G),N=_(v,b+S/2*O,G),q=_(v,b-S/2*O,G);p.push(...X.toArray(),...N.toArray(),...de.toArray(),...X.toArray(),...de.toArray(),...q.toArray())}}let m=new Jt;m.setAttribute("position",new ut(l,3)),m.setAttribute("color",new ut(c,3)),m.setAttribute("uv",new ut(u,2)),i.diaTex=Kn(1024,256,null,{dynamic:!0});let f=new te(m,new gt({map:i.diaTex,vertexColors:!0,side:tn,toneMapped:!1}));i.scene.add(f),i.diaWall=f;let M=new Jt;M.setAttribute("position",new ut(p,3)),i.diaInner=new gt({color:16751312,transparent:!0,opacity:.4,side:tn,toneMapped:!1,blending:fn,depthWrite:!1}),i.scene.add(new te(M,i.diaInner)),i.diaSpan={a0:t,a1:n,y0:a,y1:s}}function vm(i,{low:e=!1}={}){let t=new ya;t.background=new Ne(328714),t.fog=new ms(328714,28,60);let n=new es(i);t.environment=n.fromScene(new To,.04).texture,t.environmentIntensity=.35;let a={scene:t,seats:[],colliders:[],screens:{},pods:{},lowQ:e},s=E=>new Wt(E),o=E=>new Mn(E);t.add(new vs(11581695,3153944,.3));let r=new ja(16773856,.9);r.position.set(4,14,8),r.castShadow=!e,r.shadow.mapSize.set(2048,2048),r.shadow.radius=6,r.shadow.bias=-4e-4,r.shadow.normalBias=.02,Object.assign(r.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:2,far:40}),t.add(r),a.key=r;let l=new ja(16765088,.45);l.position.set(-8,7,6),t.add(l),a.spots=[];for(let E=0;E<6;E++){let x=new $a(16777215,0,30,.5,.7,1.2);t.add(x,x.target),a.spots.push(x)}let c=o({color:15133168,metalness:1,roughness:.1,clearcoat:1,clearcoatRoughness:.06}),u=o({color:12106952,metalness:0,roughness:.32,clearcoat:.5,clearcoatRoughness:.2});a.edgeMat=new gt({color:16747040,toneMapped:!1});let p=(E,x,H=Math.PI/2)=>{let $=new te(E,a.edgeMat);return $.rotation.x=H,$.position.copy(x),t.add($),$},d=new Qn;d.absarc(0,0,16,0,oa,!1);let h=new ea;for(let E=0;E<=64;E++){let x=it.a0+(it.a1-it.a0)*E/64,H=Math.cos(x)*it.r1,$=Math.sin(x)*it.r1;E?h.lineTo(H,$):h.moveTo(H,$)}for(let E=64;E>=0;E--){let x=it.a0+(it.a1-it.a0)*E/64;h.lineTo(Math.cos(x)*(it.r0-.01),Math.sin(x)*(it.r0-.01))}d.holes.push(h),a.floorShape=d;let g=ts(new Jn(d,96));{let E=g.attributes.position,x=g.attributes.uv;for(let H=0;H<E.count;H++)x.setXY(H,E.getX(H)/32+.5,-E.getZ(H)/32+.5)}a.floorMat=o({color:9080476,map:Sy(),metalness:.05,roughness:.14,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.1});let _=new te(g,a.floorMat);_.receiveShadow=!0,t.add(_),a.floor=_,a.floorLines=new te(ts(new Jn(wo(3.18,3.26,it.a1,it.a0+oa,128))),new gt({color:16751152,toneMapped:!1})),a.floorLines.position.y=.004,t.add(a.floorLines);let m=s({color:1381660,roughness:.5,metalness:.3}),f=new te(ts(new Jn(wo(it.r0,it.r1,it.a0,it.a1,64))),m);f.position.y=it.floor,f.receiveShadow=!0,t.add(f);let M=new te(ts(new Jn(wo(it.r0,4.35,it.a0,it.a1,64))),u);M.position.y=it.ledge,M.receiveShadow=!0,t.add(M);let R=(E,x,H,$,oe,_e,Se=ta)=>{let ae=new te(new wt(E,E,x,96,1,!0,Math.PI/2+$,oe-$),_e);return ae.material.side=Se,ae.position.y=H,t.add(ae),ae};a.lowWallMat=o({color:15001326,roughness:.35,clearcoat:.4,emissive:16740384,emissiveIntensity:0,side:tn}),R(4.35,it.ledge-it.floor,(it.ledge+it.floor)/2,it.a0,it.a1,a.lowWallMat),R(it.r1,-it.floor,it.floor/2,it.a0,it.a1,a.lowWallMat,hn);{let E=new Zt(4.36,.022,8,96,it.a1-it.a0),x=new te(E,a.edgeMat);x.rotation.set(-Math.PI/2,0,it.a0),x.position.y=it.ledge+.01,t.add(x)}{let E=new Zt(it.r1,.03,8,96,it.a1-it.a0),x=new te(E,a.edgeMat);x.rotation.set(-Math.PI/2,0,it.a0),x.position.y=.012,t.add(x)}Kr(t,c,it.r1+.12,it.a0+.02,it.a1-.02,0,1),a.shelf={bombs:[],glass:null};{let E=o({color:657934,metalness:.4,roughness:.18,clearcoat:1,clearcoatRoughness:.05}),x=new gt({color:16777215,toneMapped:!1}),H=10;for(let $=0;$<H;$++){let oe=it.a0+.12+(it.a1-it.a0-.24)*$/(H-1),_e=ra(3.7,oe,it.ledge),Se=new te(new Zt(.3,.05,16,48),x);if(Se.rotation.x=Math.PI/2,Se.position.copy(_e).add(new D(0,.05,0)),t.add(Se),$===H-1)continue;let ae=new Et;if(ae.position.copy(_e).add(new D(0,.3,0)),t.add(ae),$===H-2){let ke=new te(new qt(.27,48,32),o({color:14674164,metalness:0,roughness:.05,transmission:.9,thickness:.4,ior:1.5,clearcoat:1,transparent:!0,opacity:.9}));ae.add(ke),a.shelf.glass=ae}else{let ke=new te(new qt(.27,48,32),E);ke.castShadow=!0,ae.add(ke),a.shelf.bombs.push(ae)}let ue=new te(new Zt(.11,.02,10,32,Math.PI),c);ue.position.y=.27,ae.add(ue);let Ee=new te(new wt(.06,.07,.06,24),c);Ee.position.y=.26,ae.add(Ee)}a.shelf.reset=()=>{a.shelf.bombs.forEach($=>$.visible=!0),a.shelf.glass.visible=!0},a.shelf.take=($,oe)=>{let _e=a.shelf.bombs[($==="red"?0:4)+oe];_e&&(_e.visible=!1)}}for(let E=0;E<4;E++){let x=it.a1+.02,H=new te(new Tt(1.4,.31,.38),u),$=ra(it.r1-.25-E*.38,x+.06,it.floor+.155+E*.31);H.position.copy($),H.rotation.y=x+Math.PI/2,t.add(H)}let b=new te(new wt(ws,ws,Wn-it.floor,128,1,!0),u);b.position.y=(Wn+it.floor)/2,t.add(b);let w=new te(ts(new Va(2.42,ws,128)),o({color:14672360,roughness:.2,clearcoat:1,clearcoatRoughness:.05}));w.position.y=Wn,w.receiveShadow=!0,t.add(w);let T=new te(ts(new _i(2.42,128)),s({color:16777215,map:Ey(),metalness:.7,roughness:.35}));T.position.y=Wn+.002,T.receiveShadow=!0,t.add(T),a.stageEdge=p(new Zt(2.42,.03,10,160),new D(0,Wn+.012,0)),p(new Zt(ws+.005,.025,10,160),new D(0,Wn-.01,0)),p(new Zt(ws+.005,.02,10,160),new D(0,-.02,0)).material=a.edgeMat,a.platDots=new gt({color:16777215,toneMapped:!1});for(let E=0;E<14;E++){let x=E/14*oa+.11,H=new te(ts(new _i(.14,32)),a.platDots);H.position.copy(ra(2.72,x,Wn+.004)),t.add(H)}Kr(t,c,ws-.06,-.3,.55,Wn,1);let L=new Et;L.position.set(ht.bomb.x,Wn,ht.bomb.z);let v=new te(new wt(.2,.36,.62,64),c);v.position.y=.31,v.castShadow=!0,L.add(v);let y=new te(new wt(.62,.66,.06,64),c);y.position.y=.03,L.add(y);let S=new te(new Zt(.36,.035,16,64),c);S.rotation.x=Math.PI/2,S.position.y=.66,L.add(S);let C=new te(new Zt(.64,.02,10,64),new gt({color:16724e3,toneMapped:!1}));C.rotation.x=Math.PI/2,C.position.y=.065,L.add(C),a.pedRing=C,t.add(L);let P=new Et;P.position.set(0,Wn,ht.panelZ);let B=new te(new Tt(2.5,.78,.5),u);B.position.y=.39,B.castShadow=!0,P.add(B);let I=new te(new Tt(2.55,.05,.62),o({color:1381918,metalness:.6,roughness:.2,clearcoat:1}));I.position.set(0,.8,.02),I.rotation.x=.32,P.add(I);let U=new te(new Tt(2.56,.03,.03),a.edgeMat);U.position.set(0,.02,.26),P.add(U);let Y=new te(new yn(2.4,.5),new gt({color:16777215,toneMapped:!1}));Y.position.set(0,.42,.252),P.add(Y),a.panelFront=Kn(1200,250,null,{dynamic:!0}),Y.material.map=a.panelFront,Y.material.needsUpdate=!0,t.add(P),a.panel=P,a.panelTopY=Wn+.8,a.colliders.push({x:0,z:ht.panelZ,hw:1.35,hd:.4},{x:ht.bomb.x,z:ht.bomb.z,r:.7});let J=new te(new Oi(wo(on.r0,on.r1,on.a0,on.a1,64),{depth:ns,bevelEnabled:!1}),u);J.rotation.x=-Math.PI/2,J.receiveShadow=!0,t.add(J);{let E=new Zt(on.r0,.02,8,96,on.a1-on.a0),x=new te(E,a.edgeMat);x.rotation.set(-Math.PI/2,0,on.a0),x.position.y=ns+.005,t.add(x);let H=x.clone();H.position.y=.02,t.add(H)}Kr(t,c,on.r0+.08,on.a0+.22,on.a1-.02,ns,1);let se=o({color:16760896,metalness:1,roughness:.15,clearcoat:1});for(let E=0;E<3;E++){let x=new te(new Oi(wo(on.r0-.35*(E+1),on.r0-.35*E,on.a0,on.a0+.2,16),{depth:ns*(3-E)/4,bevelEnabled:!1}),u);x.rotation.x=-Math.PI/2,t.add(x)}Kr(t,se,on.r0-.5,on.a0+.2,on.a0+.02,.1,1,.3);let F=(E,{body:x,glow:H,num:$})=>{let oe=ht.pod[E],_e=new Et;_e.position.copy(oe.c),_e.rotation.y=oe.yaw,t.add(_e);let Se=new Wt({color:0,emissive:H,emissiveIntensity:1.6,roughness:.4}),ae=Kn(1600,300,null,{dynamic:!0});for(let we=0;we<4;we++){let $e=(we-1.5)*1,Ye=new Et;Ye.position.x=$e,_e.add(Ye);let ct=new te(new Tt(.72,1.05,.5),o({color:x,metalness:.4,roughness:.25,clearcoat:1}));ct.position.y=.525,ct.castShadow=!0,Ye.add(ct);let W=new te(new Tt(.8,.05,.6),c);W.position.y=1.075,Ye.add(W);let Ie=new te(new Tt(.74,.04,.52),Se);Ie.position.y=.02,Ye.add(Ie);let me=new yn(.64,.86),Le=me.attributes.uv;for(let Ke=0;Ke<Le.count;Ke++)Le.setX(Ke,(we+Le.getX(Ke))/4);let Be=new te(me,new gt({map:ae,toneMapped:!1}));Be.position.set(0,.53,.252),Ye.add(Be);let be=new te(new Tt(.42,.28,.03),s({color:657936,emissive:H,emissiveIntensity:.25}));be.position.set(0,1.25,-.12),be.rotation.x=-.5,Ye.add(be)}let ue=Kn(1024,512,null,{dynamic:!0}),Ee=new Et,ke=new te(new yn(1.5,.75),new gt({map:ue,toneMapped:!1}));ke.position.z=.031,Ee.add(ke),Ee.add(new te(new Tt(1.6,.85,.06),s({color:657936,metalness:.6,roughness:.3})));let Pe=new te(new Tt(2.2,.45,.5),s({color:2368558,roughness:.5,metalness:.3}));return Pe.position.set(0,.225,-2.4),_e.add(Pe),a.pods[E]={g:_e,front:ae,screen:ue,ledMat:Se,mon:Ee},a.colliders.push({team:E,obb:!0,c:oe.c.clone(),yaw:oe.yaw,hw:2,hd:.35}),Ee},k=F("red",{body:6953502,glow:16722490});k.position.set(-3.3,1.35,-4.4),k.rotation.y=.35,t.add(k);let j=F("blue",{body:924228,glow:2784255});j.position.copy(ra(8.3,.32,ns+2.2)),j.lookAt(0,ns+2.2,2),t.add(j);let ge=Math.PI/2+.78,O=11,G=5.6,X=G*760/1600,de=ra(O,ge,4.7);ht.hex.copy(de);let N=new Qn,q=G*.13;N.moveTo(-G/2,0),N.lineTo(-G/2+q,X/2),N.lineTo(G/2-q,X/2),N.lineTo(G/2,0),N.lineTo(G/2-q,-X/2),N.lineTo(-G/2+q,-X/2),N.closePath();let le=new Jn(N);{let E=le.attributes.position,x=le.attributes.uv;for(let H=0;H<E.count;H++)x.setXY(H,E.getX(H)/G+.5,E.getY(H)/X+.5)}a.wallTex=Kn(1600,760,null,{dynamic:!0});let Z=new Et;Z.position.copy(de),Z.lookAt(0,4.2,3),t.add(Z);let ne=new te(le,new gt({map:a.wallTex,toneMapped:!1}));Z.add(ne),a.wall=ne,a.screenGlow=new gt({color:16747056,toneMapped:!1});let he=new Qn,Je=1.06;he.moveTo(-G/2*Je-.08,0),he.lineTo((-G/2+q)*Je,X/2*Je+.06),he.lineTo((G/2-q)*Je,X/2*Je+.06),he.lineTo(G/2*Je+.08,0),he.lineTo((G/2-q)*Je,-X/2*Je-.06),he.lineTo((-G/2+q)*Je,-X/2*Je-.06),he.closePath(),he.holes.push(new ea(N.getPoints()));let ce=new te(new Jn(he),a.screenGlow);ce.position.z=-.01,Z.add(ce);let Q=new te(new Jn(he),s({color:1052696}));Q.scale.setScalar(1.08),Q.position.z=-.05,Z.add(Q);for(let E=0;E<7;E++){let x=-X/2+.25+E*(X-.5)/6;for(let H of[-1,1]){let $=2.6+E%3*.4,oe=new te(new Tt($,.04,.04),a.edgeMat);oe.position.set(H*(G/2+.35+$/2-Math.abs(x)*.5),x,-.08),Z.add(oe)}}a.logo=Ch({scale:1.55}),a.logo.position.set(0,0,.55),Z.add(a.logo),a.logoMats=a.logo.userData.mats,a.logoSpark=a.logo.userData.flare;let ie=new pi(16765072,40,9,1.4);ie.position.copy(de.clone().multiplyScalar(.75).setY(5.5)),t.add(ie),wy(a,{hole:(E,x)=>Math.abs(E-ge)<(G/2+3.6)/O&&x>4.7-X/2-.9&&x<4.7+X/2+.9});let pe=new te(new wt(10.5,10.5,.6,128,1,!0,Math.PI-1.55,3.1),s({color:1710628,metalness:.5,roughness:.3,side:tn}));pe.position.y=9,t.add(pe);for(let E of[8.68,9.32]){let x=new te(new wt(10.48,10.48,.05,128,1,!0,Math.PI-1.55,3.1),a.screenGlow);x.material.side=tn,x.position.y=E,t.add(x)}let ye=new te(new wt(11.4,11.4,.05,128,1,!0,Math.PI-1.45,2.9),a.edgeMat);ye.material.side=tn,ye.position.y=.85,t.add(ye);let Ge=o({color:3816518,metalness:.9,roughness:.25});a.tierMats=[];let De=(E,x,H,$,oe)=>{let _e=s({color:1710626,roughness:.7});for(let ae=0;ae<H;ae++){let ue=$+ae*.95,Ee=oe+ae*.5,ke=new te(ts(new Jn(wo(ue-.45,ue+.5,E,x,40))),_e);ke.position.y=Ee+.06,t.add(ke);let Pe=new te(new wt(ue-.45,ue-.45,Ee+.06,40,1,!0,Math.PI/2+E,x-E),u);Pe.position.y=(Ee+.06)/2,t.add(Pe);let we=Math.floor((x-E)*ue/.6);for(let Ye=0;Ye<we;Ye++)a.seats.push([ue,E+(x-E)*(Ye+.5)/we,Ee+.06]);let $e=new te(new Zt(ue-.45,.012,6,64,x-E),a.edgeMat);$e.rotation.set(-Math.PI/2,0,E),$e.position.y=Ee+.07,t.add($e)}let Se=new gt({color:16747056,toneMapped:!1});a.tierMats.push(Se),Kr(t,Ge,$-.5,E,x,oe+.06,.9,.6)},Ze=e?3:6;De(Math.PI-.55,Math.PI+.35,Ze,9.6,.5),De(Math.PI+.42,Math.PI+1.05,Ze,9.6,.5),De(-1,-.3,Ze,9.8,.5),De(-.24,0,Ze-2,9.8,.5);for(let[E,x]of[[12.2,10.6],[8.5,10.9],[5.2,11.1]]){let H=new te(new Zt(E,.11,8,120),Ge);H.rotation.x=Math.PI/2,H.position.y=x,t.add(H)}for(let E=0;E<12;E++){let x=E/12*oa,H=new te(new Tt(7.2,.18,.18),Ge);H.position.copy(ra(8.7,x,10.85)),H.rotation.y=x,t.add(H)}a.glowDisc=new te(new Va(5,5.4,128),new gt({color:16777215,side:tn,toneMapped:!1})),a.glowDisc.rotation.x=Math.PI/2,a.glowDisc.position.y=11,t.add(a.glowDisc),a.ceilBase=new Ne(16752704);let He=new Et;He.position.set(0,7.2,0),t.add(He),a.rig=He;let z=new te(new Zt(1.7,.07,14,128),new gt({color:16777215,toneMapped:!1}));z.rotation.x=Math.PI/2,He.add(z),a.halo=z;let lt=new te(new Zt(1.95,.09,14,128),Ge);lt.rotation.x=Math.PI/2,He.add(lt);for(let E=0;E<16;E++){let x=E/16*oa,H=new te(new wt(.07,.09,.16,16),a.platDots);H.position.set(Math.cos(x)*1.82,-.1,Math.sin(x)*1.82),He.add(H)}for(let E=0;E<3;E++){let x=E/3*oa,H=new te(new wt(.015,.015,3.8,6),Ge);H.position.set(Math.cos(x)*1.95,1.9,Math.sin(x)*1.95),He.add(H)}a.bombLight=new $a(16774368,30,14,.32,.5,1.2),a.bombLight.position.set(0,7,1.6),a.bombLight.target.position.copy(ht.bomb),a.bombLight.castShadow=!e,a.bombLight.shadow.mapSize.set(1024,1024),a.bombLight.shadow.radius=4,t.add(a.bombLight,a.bombLight.target),a.beams=[];let Re=new gt({color:12570879,transparent:!0,opacity:.02,blending:fn,depthWrite:!1,side:tn,toneMapped:!1});for(let E=0;E<10;E++){let x=E/10*oa+.3,H=new te(new yi(1.1,10,32,1,!0),Re.clone());H.geometry.translate(0,-5,0);let $=new Et;$.position.copy(ra(8.5,x,10.8)),$.add(H),t.add($),a.beams.push({g:$,cone:H,a:x,ph:E*1.7})}return t.traverse(E=>{E.isMesh&&!E.material.isMeshBasicMaterial&&E.geometry&&!E.castShadow&&(E.receiveShadow=!e)}),a}function Co(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,230,140,.9)"),t.addColorStop(.5,"rgba(255,120,20,.35)"),t.addColorStop(1,"rgba(255,60,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new In(i);return n.colorSpace=Gt,n}function Td(i,e,t){let n=Math.hypot(e,t);if(n>9)return!0;let a=Math.atan2(-t,e);if(n>it.r0-.1&&n<it.r1+.3&&xm(a,it.a0,it.a1))return!0;for(let s of i.colliders){if(s.r){if(Math.hypot(e-s.x,t-s.z)<s.r)return!0;continue}if(s.obb){let o=e-s.c.x,r=t-s.c.z,l=Math.cos(s.yaw),c=Math.sin(s.yaw),u=o*l-r*c,p=o*c+r*l;if(Math.abs(u)<s.hw&&Math.abs(p)<s.hd)return!0;continue}if(Math.abs(e-s.x)<s.hw&&Math.abs(t-s.z)<s.hd)return!0}return!1}var Ay={abrirWav:"wav",laser:"wav",saltar:"wav"},Xn=null,is=new Set,wd=!1,mi=null,Rh=localStorage.getItem("boom3d_voice")!=="0",Ro=+(localStorage.getItem("boom3d_mvol")||.8),Cy=/[?&]fast=1/.test(location.search);function Ry(i){let e=new Audio(`assets/snd/${i}.${Ay[i]||"mp3"}`);return e.preload="auto",e}var ze={play(i,{loop:e=!1,volume:t=1}={}){let n=Ry(i);return n.loop=e,n.volume=Math.min(1,t),n.muted=wd,is.add(n),n.addEventListener("ended",()=>is.delete(n)),n.play().catch(()=>{}),n},voice(i,e){return new Promise(t=>{if(Cy){setTimeout(t,60);return}if(!Rh||wd||!i){setTimeout(t,e||1500);return}mi&&mi.pause();let n=new Audio(`assets/voz/${i}.mp3`);mi=n;let a=!1,s=()=>{a||(a=!0,Xn&&(Xn.volume=Ro),mi===n&&(mi=null),t())};Xn&&(Xn.volume=Ro*.35),n.onended=s,n.onerror=()=>{setTimeout(s,e||1500)},n.play().catch(()=>setTimeout(s,e||1500)),setTimeout(s,3e4)})},stopVoice(){mi&&(mi.pause(),mi=null),Xn&&(Xn.volume=Ro)},get voiceOn(){return Rh},setVoice(i){Rh=i,localStorage.setItem("boom3d_voice",i?"1":"0"),i||this.stopVoice()},setMusicVol(i){Ro=i,localStorage.setItem("boom3d_mvol",i),Xn&&(Xn.volume=i)},get musicVol(){return Ro},music(i,e=!1){return this.stopMusic(),Xn=this.play(i,{loop:e,volume:Ro}),Xn},stopMusic(){Xn&&(Xn.pause(),is.delete(Xn),Xn=null)},stopAll(){is.forEach(i=>i.pause()),is.clear(),Xn=null,mi&&(mi.pause(),mi=null)},pauseAll(){is.forEach(i=>i.pause()),mi&&mi.pause()},resumeAll(){is.forEach(i=>i.play().catch(()=>{}))},setMuted(i){wd=i,is.forEach(e=>e.muted=i)},get muted(){return wd}};window.__audio=ze;var Py=`
#tvCred{position:fixed;inset:0;z-index:40;pointer-events:none;font-family:"Helvetica Neue",Arial,sans-serif;color:#fff}
#tvCred.skippable{pointer-events:auto;cursor:pointer}
#tvCred .card{position:absolute;left:0;right:0;bottom:14vh;text-align:center;opacity:0;transform:translateY(2vh);transition:opacity .7s ease,transform .9s ease;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}
#tvCred .card.on{opacity:1;transform:none}
#tvCred .card.center{bottom:auto;top:50%;transform:translateY(-46%)}
#tvCred .card.center.on{transform:translateY(-50%)}
#tvCred .card small{display:block;font-size:clamp(13px,2.6vh,30px);letter-spacing:.32em;text-transform:uppercase;color:#e8eefc;text-shadow:0 2px 10px #000,0 0 2px #000;font-weight:600}
#tvCred .card b{display:block;margin-top:.8vh;font-size:clamp(24px,6.4vh,74px);font-weight:900;letter-spacing:.04em;background:linear-gradient(#fff,#fff 45%,#d7e1f5);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 3px 6px #000c)}
#tvCred .card i{display:block;margin-top:.6vh;font-style:normal;font-size:clamp(13px,2.4vh,26px);color:#ffd34d;letter-spacing:.12em;text-shadow:0 2px 8px #000}
#tvCred .card img{display:block;margin:0 auto 1.2vh;max-width:min(70vw,900px);max-height:34vh;filter:drop-shadow(0 6px 22px #000)}
#tvCred .card .line{width:min(40vw,420px);height:2px;margin:1.4vh auto 0;background:linear-gradient(90deg,#0000,var(--acc,#ffb000),#0000)}
#tvCred .bars{position:absolute;inset:0;pointer-events:none;background:linear-gradient(#000 0,#000 7vh,#0000 7vh,#0000 calc(100% - 7vh),#000 calc(100% - 7vh));opacity:0;transition:opacity .8s}
#tvCred.cine .bars{opacity:1}
#tvCred .rollBox{position:absolute;top:0;bottom:0;right:0;width:min(46vw,620px);overflow:hidden;background:linear-gradient(90deg,#0000,#000c 22%,#000e);opacity:0;transition:opacity 1s}
#tvCred.full .rollBox{left:0;right:0;width:auto;background:radial-gradient(ellipse at center,#000a,#000e)}
#tvCred .rollBox.on{opacity:1}
#tvCred .roll{position:absolute;left:10%;right:6%;top:0;text-align:center;will-change:transform}
#tvCred .roll img{display:block;margin:0 auto 3vh;max-width:80%;max-height:22vh}
#tvCred .roll h2{font-size:clamp(20px,4.6vh,48px);font-weight:900;margin:0 0 4vh;color:#fff;letter-spacing:.06em}
#tvCred .roll h4{margin:4.2vh 0 .6vh;font-size:clamp(11px,2.1vh,22px);letter-spacing:.24em;text-transform:uppercase;color:var(--acc,#ffb000);font-weight:700}
#tvCred .roll p{margin:.2vh 0;font-size:clamp(15px,3vh,32px);font-weight:700;color:#fff}
#tvCred .roll p.sm{font-size:clamp(11px,2vh,20px);font-weight:400;color:#cfd6e6;line-height:1.45}
#tvCred .roll .end{margin-top:9vh}
#tvCred .roll .end b{display:block;font-size:clamp(18px,4vh,44px);font-weight:900;letter-spacing:.1em}
#tvCred .skip{position:absolute;right:14px;bottom:12px;background:#0009;border:1px solid #fff6;border-radius:16px;padding:5px 12px;font-size:clamp(11px,2.2vh,16px);opacity:.8}
`,as=null;function bm(){if(as)return as;let i=document.createElement("style");return i.textContent=Py,document.head.appendChild(i),as=document.createElement("div"),as.id="tvCred",as.innerHTML='<div class="bars"></div><div class="cards"></div><div class="rollBox"><div class="roll"></div></div><div class="skip"></div>',as.style.display="none",document.body.appendChild(as),as}var Sa=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Ph(i,e){return new Promise(t=>{let n=setTimeout(t,i);e.cancel.push(()=>{clearTimeout(n),t()})})}function _m(i,e,t){let n={skipped:!1,cancel:[],done:!1},a=()=>{n.skipped||(n.skipped=!0,n.cancel.forEach(r=>r()))},s=r=>{(r.key==="Escape"||r.key===" "||r.key==="Enter")&&a()};i.classList.add("skippable"),i.onclick=a,addEventListener("keydown",s),i.querySelector(".skip").textContent=e||"Saltar \u23ED";let o=setInterval(()=>{t&&t()&&a()},200);return n.end=()=>{removeEventListener("keydown",s),clearInterval(o),i.onclick=null,i.classList.remove("skippable")},n}async function ym(i,{accent:e="#ffb000",skipText:t,aborted:n,letterbox:a=!0}={}){let s=bm();s.style.display="",s.style.setProperty("--acc",e),s.classList.toggle("cine",a),s.classList.remove("full");let o=s.querySelector(".cards");o.innerHTML="";let r=_m(s,t,n);for(let l=0;l<i.length&&!r.skipped;l++){let c=i[l];c.cam&&c.cam(l);let u=document.createElement("div");u.className="card"+(c.center?" center":""),u.innerHTML=`${c.img?`<img src="${c.img}" alt="">`:""}${c.small?`<small>${Sa(c.small)}</small>`:""}${c.big?`<b>${Sa(c.big)}</b>`:""}${c.sub?`<i>${Sa(c.sub)}</i>`:""}<div class="line"></div>`,o.appendChild(u),await Ph(60,r),u.classList.add("on"),await Ph(c.ms||2600,r),u.classList.remove("on"),await Ph(700,r),u.remove()}return o.innerHTML="",s.classList.remove("cine"),r.end(),await new Promise(l=>setTimeout(l,300)),s.style.display="none",!r.skipped}async function Mm({head:i={},sections:e=[],end:t={},accent:n="#ffb000",speed:a=1,full:s=!1,skipText:o,aborted:r,onFrame:l}={}){let c=bm();c.style.display="",c.style.setProperty("--acc",n),c.classList.toggle("full",s),c.classList.add("cine");let u=c.querySelector(".rollBox"),p=c.querySelector(".roll");p.innerHTML=`${i.img?`<img src="${i.img}" alt="">`:""}${i.title?`<h2>${Sa(i.title)}</h2>`:""}`+e.map(R=>`<h4>${Sa(R.h)}</h4>${(R.p||[]).map(b=>`<p>${Sa(b)}</p>`).join("")}${(R.sm||[]).map(b=>`<p class="sm">${Sa(b)}</p>`).join("")}`).join("")+`<div class="end">${t.big?`<b>${Sa(t.big)}</b>`:""}${(t.small||[]).map(R=>`<p class="sm">${Sa(R)}</p>`).join("")}</div>`;let d=_m(c,o,r);u.classList.add("on");let h=u.clientHeight,g=p.scrollHeight,_=h*.085*a,m=h,f=Math.max(-g+h*.62,-g),M=m;return p.style.transform=`translateY(${M}px)`,await new Promise(R=>{let b=performance.now(),w=0,T=L=>{if(d.skipped)return R();let v=Math.min(.1,(L-b)/1e3);if(b=L,l&&l(v),M>f)M=Math.max(f,M-_*v*(window.__cineSpeed||1)),p.style.transform=`translateY(${M}px)`;else if((w+=v*(window.__cineSpeed||1))>3)return R();requestAnimationFrame(T)};requestAnimationFrame(T),d.cancel.push(R)}),u.classList.remove("on"),c.classList.remove("cine"),d.end(),await new Promise(R=>setTimeout(R,700)),c.style.display="none",p.innerHTML="",!d.skipped}var Sm={intro1:"\xA1Muy buenas tardes y bienvenidos a \xA1Boom!, el concurso m\xE1s explosivo de la televisi\xF3n!",intro2:"Hoy dos equipos de cuatro se juegan el dinero y el bote a base de cables, bombas y mucha cabeza.",introRed:"Por el lado rojo, el equipo aspirante, que llega con much\xEDsimas ganas. \xA1Un aplauso para ellos!",introBlue:"Y por el lado azul, el equipo veterano, que defiende su sitio en el plat\xF3. \xA1Fuerte ese aplauso!",bote:"Y atenci\xF3n, porque la bomba dorada guarda el bote, que crece cinco mil euros cada d\xEDa que no sale.",calIntro:"Empezamos con la bomba caliente. Tres segundos para responder y la bomba pasa de mano en mano. \xA1Que no os explote encima!",calGo:"\xA1La bomba est\xE1 caliente! \xA1Vamos all\xE1!",calBoom:"\xA1Boom! Le ha explotado en las manos. Ese equipo resta un punto.",calWin:"Tenemos ganador de la bomba caliente. Os toca elegir ventaja.",calTie:"\xA1Empate! Nos vamos a la muerte s\xFAbita. Un capit\xE1n por equipo.",advChoose:"Elegid: cable blanco, siguen todos, elige tema o uno menos.",advBlanco:"Cable blanco. En una bomba os quitamos una respuesta incorrecta.",advSiguen:"Siguen todos. En una bomba, si explota, nadie se va al banquillo.",advTema:"Elige tema. Podr\xE9is escoger la categor\xEDa de una de vuestras bombas.",advUno:"Uno menos. Un rival tendr\xE1 que quedarse callado en una de sus bombas.",cristal:"Antes de empezar, la bomba de cristal. Apostad por una de vuestras cuatro bombas. Si la desactiv\xE1is, ese dinero es vuestro pase lo que pase.",fpIntro:"Fase principal. Cuatro bombas por equipo. Cortad los cables de las respuestas incorrectas y dejad vivo solo el correcto.",b1:"Primera bomba: doscientos euros y cuarenta y cinco segundos.",b2:"Segunda bomba: cuatrocientos euros y cuarenta y cinco segundos.",b3:"Tercera bomba: seiscientos euros, un minuto y cinco cables.",b4:"Cuarta bomba: ochocientos euros, un minuto y cinco cables. La m\xE1s dif\xEDcil.",cutGo:"\xA1Tijeras en mano! El tiempo corre.",ok1:"Bien cortado.",ok2:"Ese cable fuera.",ok3:"\xA1Seguimos vivos!",ok4:"Con calma, que vamos bien.",defused:"\xA1Bomba desactivada!",defused2:"\xA1Desactivada! Eso es dinero para el marcador.",boom1:"\xA1Boooom! Ha explotado.",boom2:"\xA1Ay, no! Ese era el cable bueno.",timeBoom:"\xA1Se acab\xF3 el tiempo! La bomba explota.",elimChoose:"Ahora el equipo rival decide qui\xE9n deja de jugar.",elimOut:"Lo siento, te toca pasar al banquillo.",siguenSave:"\xA1Pero ten\xEDan siguen todos! Nadie se va al banquillo.",switchTeam:"Cambio de turno: juega el otro equipo.",blancoUse:"\xA1Cable blanco! Fuera una respuesta incorrecta.",t10:"\xA1Diez segundos!",t30:"\xA1Treinta segundos!",estIntro:"Llega la bomba estrat\xE9gica. Un representante por equipo, seis temas, y en cada panel siete respuestas buenas de diez.",estPick:"Elige tema.",estRebote:"\xA1Rebote!",estOk:"\xA1Correcta!",estBad:"\xA1No! Esa no est\xE1.",estComodin:"Comod\xEDn de consulta: tus compa\xF1eros te soplan una respuesta.",estWin:"Ganador de la bomba estrat\xE9gica. Toca elegir ventaja.",estTie:"Empate a aciertos. Panel de desempate.",advRescate:"Rescate. Recuper\xE1is a un compa\xF1ero eliminado.",advMas:"Diez segundos m\xE1s para vuestro turno de la clasificatoria.",advMenos:"Diez segundos menos para el equipo rival en la clasificatoria.",claIntro:"Bomba clasificatoria: la bomba plateada con mecha de luz. Dos minutos de preguntas de dos opciones. Cada acierto suma doscientos euros y cada fallo los resta.",claGo:"\xA1Mecha encendida!",claEnd:"\xA1Tiempo! Vamos a ver el marcador.",claWin:"Este equipo se juega el bote. El otro se despide hoy.",claTie:"\xA1Empate! Pregunta de desempate.",boteIntro:"Y llegamos a la bomba dorada. Quince minibombas, dos minutos. Si no sab\xE9is una, decid \xA1Boom! y la dejamos para la segunda vuelta.",boteGo:"\xA1Que empiece la cuenta atr\xE1s!",boteSecond:"Segunda vuelta. Elegid minibomba. Un solo fallo y la bomba dorada explota.",boteWin:"\xA1Incre\xEDble! \xA1Bomba dorada desactivada! \xA1Os llev\xE1is el bote!",boteLose:"\xA1Boom! Hoy no ha podido ser, pero ma\xF1ana volv\xE9is y el bote ser\xE1 todav\xEDa m\xE1s grande.",boteOk:"\xA1S\xED!",botePass:"Boom, pasamos.",outro:"Esto ha sido todo por hoy. Ma\xF1ana, m\xE1s bombas, m\xE1s cables y m\xE1s \xA1Boom! \xA1Hasta ma\xF1ana!",hist:"Repasamos la historia de \xA1Boom!, desde su estreno en Antena 3 en dos mil catorce.",train:"Modo entrenamiento. Aqu\xED las bombas no os eliminan, as\xED que a practicar.",spNinos:"Hoy tenemos un especial muy peque\xF1ito pero muy listo: \xA1el especial ni\xF1os!",spFin:"\xA1Es Nochevieja! Despedimos el a\xF1o con un especial de fin de a\xF1o cargado de bombas.",spNav:"Especial Navidad famosos. Turr\xF3n, villancicos y caras conocidas, aunque hoy todas son virtuales.",spCamp:"Semana de campeones: vuelven algunos de los equipos m\xE1s temidos del concurso.",spTit:"Duelo de titanes: los dos equipos m\xE1s fuertes, cara a cara.",spAniv:"\xA1Especial aniversario! Hoy todas las preguntas van de \xA1Boom! y de concursos de la tele.",spSuper:"Superliga. Los mejores equipos compiten por el t\xEDtulo de campeones de campeones.",spPrime:"\xA1Especial prime time! Hoy el bote es enorme. S\xED, s\xED, un bote hist\xF3rico.",j1:"\xBFSab\xE9is por qu\xE9 la bomba no va al gimnasio? Porque ya est\xE1 a punto de explotar.",j2:"Mi electricista me dijo que corte el cable rojo. Ahora ya no tengo electricista.",j3:"He pedido unas tijeras para Reyes. Me han regalado un cortac\xE9sped. Casi.",j4:"Aqu\xED los cables son de colores para que la tensi\xF3n sea m\xE1s alegre.",j5:"Tranquilos, que estas bombas solo explotan de confeti, de humo y de nervios.",j6:"\xBFQu\xE9 le dice un cable a otro? Somos los corrientes de siempre.",j7:"Si os tiembla el pulso, pensad que la bomba est\xE1 m\xE1s nerviosa que vosotros.",j8:"El otro d\xEDa cort\xE9 un cable en casa y se fue la luz del barrio. Me contrataron aqu\xED al d\xEDa siguiente."},Ad=["j1","j2","j3","j4","j5","j6","j7","j8"],Cs={red:[{name:"Los Petardos",p:[["Luc\xEDa","F"],["Andr\xE9s","M"],["Marta","F"],["Iv\xE1n","M"]]},{name:"Las Mechas",p:[["Nuria","F"],["Elena","F"],["Roc\xEDo","F"],["Carmen","F"]]},{name:"Los Cortacables",p:[["Javier","M"],["Pablo","M"],["Sergio","M"],["Ra\xFAl","M"]]},{name:"Los Chispas",p:[["Aitor","M"],["Irene","F"],["Hugo","M"],["Sara","F"]]}],blue:[{name:"Los Artificieros",p:[["Tom\xE1s","M"],["Ram\xF3n","M"],["F\xE9lix","M"],["Gonzalo","M"]]},{name:"Las Linternas",p:[["Pilar","F"],["In\xE9s","F"],["Teresa","F"],["Olga","F"]]},{name:"Los Fusibles",p:[["Diego","M"],["Alba","F"],["Mario","M"],["Clara","F"]]},{name:"Los Detonautas",p:[["Bruno","M"],["Lola","F"],["Enrique","M"],["Paula","F"]]}]},Em=["Yo cortar\xEDa {x}.","Ese {x} no me suena nada, fuera.","Estoy casi seguro: {x} es incorrecta.","\xA1{x} fuera!","Venga, {x}, que esa no es.","Ojo, no toqu\xE9is {x}... \xBFo s\xED? No s\xE9."],Tm=["\xA1Vamos, equipo!","\xA1Bien!","\xA1Toma!","\xA1Uf, por los pelos!","\xA1Esa la sab\xEDamos!"],Po=[["2014: el estreno","\xA1Boom! llega a Antena 3 el 9 de septiembre de 2014, adaptaci\xF3n del concurso israel\xED hom\xF3nimo, producida por Gestmusic. Dos equipos, rojo y azul, de cuatro concursantes."],["La mec\xE1nica","Cada pregunta es una bomba y cada respuesta, un cable. Se cortan los cables de las respuestas incorrectas: si se corta el correcto, la bomba explota y un concursante queda eliminado."],["Las fases","Con los a\xF1os llegaron la bomba clasificatoria (2014), la bomba estrat\xE9gica (2018), la bomba de cristal (2022) y la bomba caliente (2021). La bomba dorada guarda el bote con 15 minibombas."],["El bote","El bote crece 5.000 \u20AC cada d\xEDa. Si un equipo lo gana, el siguiente programa vuelve a empezar con 50.000 \u20AC."],["Grandes botes","Boomberos (140.000 \u20AC) y Furi\xF3 (155.000 \u20AC) en 2014; RockCampers (1.935.000 \u20AC) en 2016; y Los Lobos (4.130.000 \u20AC) el 8 de julio de 2019, el mayor premio de un concurso de televisi\xF3n."],["R\xE9cord Guinness","Los Lobos lograron el r\xE9cord Guinness de permanencia ininterrumpida en un concurso: 505 programas."],["Audiencias","La quinta temporada (2018-2019) fue la m\xE1s vista, con 2.106.000 espectadores y un 17,2 % de cuota. El bote de Los Lobos lleg\xF3 a 4.272.000 espectadores y un 28 %."],["Cambios de horario","En 2020 pas\xF3 de las 20:00 a las 19:00. Dej\xF3 la tira diaria en octubre de 2022 y volvi\xF3 en 2023 los fines de semana."],["Etapa en Cuatro","En 2024 el formato volvi\xF3 en Cuatro, producido por Mediacrest, del 9 de septiembre al 5 de diciembre: 61 programas."],["Especiales","Especiales de ni\xF1os, fin de a\xF1o, semana de campeones, Duelo de Titanes, Navidad con famosos, D\xE9cadas, aniversarios y la Superliga de 2022."],["En total","Diez temporadas y 2.038 programas entre Antena 3 y Cuatro."]];var qh={};p0(qh,{$:()=>Te,B:()=>xe,BOT:()=>Pi,CAMS:()=>Fd,CAREER:()=>bn,CFG:()=>mt,FAST:()=>Ri,FX:()=>ua,G:()=>fe,LET:()=>sl,Lg:()=>Nt,QS:()=>os,RO:()=>ca,S:()=>_t,SHOT:()=>Xy,SPD:()=>da,T:()=>ti,V:()=>Me,aud:()=>Ci,benchPos:()=>Bd,buildTeams:()=>Ho,cam:()=>We,camPath:()=>ko,camTo:()=>It,camera:()=>Gi,chat:()=>Vi,crowd:()=>Tn,diaState:()=>Hh,drawDiamonds:()=>Ym,drawPanel:()=>ai,drawPods:()=>ln,drawWall:()=>$m,enterWalk:()=>Is,eur:()=>bt,faceTo:()=>rn,getBote:()=>ni,holder:()=>al,homeAll:()=>zo,host:()=>Rt,isTouch:()=>Xm,keyHandlers:()=>Ls,onLoop:()=>Go,placeAtBomb:()=>xi,podPos:()=>rl,readMs:()=>Ps,renderWith:()=>Gh,renderer:()=>Dt,rnd:()=>Yt,saveCareer:()=>Ud,saveCfg:()=>kh,say:()=>st,sayQ:()=>Od,scene:()=>Aa,setHolder:()=>Ca,shuffle:()=>Gn,speaker:()=>wa,startLoop:()=>Vh,sub:()=>Ot,talk:()=>Qy,tapHandlers:()=>Oo,team:()=>tt,teamHome:()=>ha,views:()=>Xe,wait:()=>At,walkTo:()=>ii,walker:()=>nn,walkers:()=>Ea,wall:()=>Ae});var wm=Math.PI*2,Lh=new Map;function mn(i,e=.55,t=0){let n=i+":"+e+":"+t;return Lh.has(n)||Lh.set(n,new Wt({color:i,roughness:e,metalness:t})),Lh.get(n)}function Ih({shirt:i=14540253,pants:e=3355460,skin:t=1578e4,hair:n=2824720,tie:a=null,jacket:s=null,glasses:o=!1,long:r=!1,beard:l=!1,bald:c=!1,scale:u=1,shoe:p=1710618}={}){let d=new Et,h=new Et;d.add(h);let g=new Dn(.075,.68,6,14);g.translate(0,-.38,0);let _=.86,m=new Et;m.position.set(-.105,_,0),m.add(new te(g,mn(e,.8)));let f=new Et;f.position.set(.105,_,0),f.add(new te(g,mn(e,.8)));let M=new Dn(.07,.14,4,10);M.rotateX(Math.PI/2),M.scale(1,.75,1),[m,f].forEach(F=>{let k=new te(M,mn(p,.35,.2));k.position.set(0,-.8,.05),F.add(k)});let R=new Dn(.2,.42,8,20);R.scale(1.05,1,.72);let b=new te(R,mn(s||i,.6));b.position.y=1.18;let w=new te(new Dn(.17,.08,6,16).scale(1.1,1,.75),mn(e,.8));w.position.y=.9;let T=new Dn(.055,.5,6,12);T.translate(0,-.3,0);let L=new qt(.06,14,10),v=F=>{let k=new Et;k.position.set(F,1.43,0),k.add(new te(T,mn(s||i,.6)));let j=new te(L,mn(t,.6));return j.position.y=-.62,k.add(j),k.userData.hand=j,k},y=v(-.29),S=v(.29),C=new te(new wt(.06,.07,.12,14),mn(t));C.position.y=1.56;let P=new Et;P.position.y=1.72;let B=new te(new qt(.155,28,20).scale(.95,1.08,1),mn(t,.55));if(P.add(B),!c){let F=new te(new qt(.165,28,14,0,wm,0,Math.PI*(r?.62:.5)),mn(n,.85));if(F.position.set(0,.02,-.012),F.scale.set(.98,1.08,1.02),P.add(F),r){let k=new te(new Dn(.13,.22,6,14).scale(1.15,1,.55),mn(n,.85));k.position.set(0,-.12,-.08),P.add(k)}}if(l){let F=new te(new qt(.12,18,10,0,wm,Math.PI*.5,Math.PI*.4),mn(n,.9));F.position.set(0,-.03,.045),P.add(F)}let I=mn(16777215,.3),U=mn(1380364,.3),Y=[-.052,.052].map(F=>{let k=new te(new qt(.024,14,10),I);k.position.set(F,.02,.135);let j=new te(new qt(.013,12,8),U);return j.position.z=.016,k.add(j),P.add(k),k});[-.055,.055].forEach(F=>{let k=new te(new Dn(.008,.04,3,6),mn(n,.9));k.rotation.z=Math.PI/2+(F>0?-.15:.15),k.position.set(F,.065,.14),P.add(k)});let J=new te(new yi(.018,.05,10),mn(t,.55));J.rotation.x=Math.PI/2,J.position.set(0,-.01,.16),P.add(J);let se=new te(new Dn(.009,.045,3,8),mn(9054762,.5));if(se.rotation.z=Math.PI/2,se.position.set(0,-.07,.138),P.add(se),[-1,1].forEach(F=>{let k=new te(new qt(.03,10,8).scale(.5,1,.8),mn(t));k.position.set(F*.148,0,0),P.add(k)}),o){let F=mn(1118481,.3,.5);[-.055,.055].forEach(k=>{let j=new te(new Zt(.036,.006,8,20),F);j.position.set(k,.02,.15),P.add(j)})}if(h.add(m,f,w,b,y,S,C,P),s){let F=new te(new yn(.13,.36),mn(i,.6));F.position.set(0,1.28,.152),h.add(F)}if(a){let F=new te(new Tt(.05,.3,.012),mn(a,.4));F.position.set(0,1.25,.16),h.add(F)}return d.scale.setScalar(u),d.userData={body:h,legL:m,legR:f,armL:y,armR:S,head:P,mouth:se,torso:b,t:Math.random()*10,mood:null,sit:0},d}function Am(i,e,t,n=!1){let a=i.userData;a.t+=e*(t?9:2);let s=t?Math.sin(a.t)*.5:0;if(a.legL.rotation.x=s,a.legR.rotation.x=-s,a.armL.rotation.x=-s*.8,a.armR.rotation.x=s*.8,a.armL.rotation.z=-.1,a.armR.rotation.z=.1,a.head.rotation.x=0,a.mood,a.body.position.y=t?Math.abs(Math.cos(a.t))*.03:Math.sin(a.t*.7)*.004,!t){a.armL.rotation.x=Math.sin(a.t)*.03,a.armR.rotation.x=n?-.75+Math.sin(a.t*3)*.3:Math.sin(a.t+1)*.03,n&&(a.armL.rotation.x=-.25+Math.sin(a.t*2.3)*.15);let o=a.mood;if(o==="cheer")a.armL.rotation.z=-2.6-Math.sin(a.t*6)*.2,a.armR.rotation.z=2.6+Math.sin(a.t*6)*.2,a.body.position.y=Math.abs(Math.sin(a.t*5))*.08;else if(o==="sad")a.head.rotation.x=.4,a.armL.rotation.x=.1,a.armR.rotation.x=.1;else if(o==="think")a.armR.rotation.x=-2.3,a.armR.rotation.z=-.55,a.head.rotation.x=-.1;else if(o==="point")a.armR.rotation.x=-1.45;else if(o==="hold")a.armL.rotation.x=-1.1,a.armR.rotation.x=-1.1,a.armL.rotation.z=.35,a.armR.rotation.z=-.35;else if(o==="cut")a.armR.rotation.x=-1.2+Math.sin(a.t*6)*.15,a.armL.rotation.x=-.6;else if(o==="shock")a.armL.rotation.x=-2.6,a.armR.rotation.x=-2.6,a.armL.rotation.z=-.4,a.armR.rotation.z=.4,a.head.rotation.x=-.25;else if(o==="sit")a.legL.rotation.x=-1.5,a.legR.rotation.x=-1.5,a.body.position.y=-.4,a.armL.rotation.x=-.5,a.armR.rotation.x=-.5;else if(o==="clap"){let r=Math.sin(a.t*9);a.armL.rotation.x=-1.2,a.armR.rotation.x=-1.2,a.armL.rotation.z=.5+r*.2,a.armR.rotation.z=-.5-r*.2}}a.head.rotation.y=n?Math.sin(a.t*1.3)*.25:a.look||0,a.mouth.scale.x=n?1+Math.abs(Math.sin(a.t*9))*2.2:a.mood==="shock"?2.6:1}var el=Math.PI*2,Cm=[15212586,2060287,16765952,1622096,15921906,16742912,11550975],Lo=["#e8202a","#1f6fff","#ffd400","#18c050","#f2f2f2","#ff7a00","#b040ff"],Dh={black:()=>new Mn({color:855314,metalness:.35,roughness:.28,clearcoat:1,clearcoatRoughness:.12}),silver:()=>new Mn({color:14212326,metalness:1,roughness:.18,clearcoat:.6}),gold:()=>new Mn({color:16761402,metalness:1,roughness:.16,clearcoat:.8,emissive:3809280,emissiveIntensity:.25})};function Rm(i){let e=i.scene,t=.46,n=new Et;n.position.copy(ht.bomb),e.add(n);let a=new Et;n.add(a);let s={black:Dh.black(),silver:Dh.silver(),gold:Dh.gold()},o=new te(new qt(t,96,64),s.black);a.add(o);let r=new Wt({color:13159640,metalness:1,roughness:.15}),l=new Wt({color:2303020,metalness:.7,roughness:.35});for(let F=0;F<6;F++){let k=F/6*el+.5,j=new D(Math.sin(k)*.82,.45,Math.cos(k)*.82).normalize(),ge=new te(new wt(.1,.1,.03,32),l);ge.position.copy(j.clone().multiplyScalar(t+.005)),ge.quaternion.setFromUnitVectors(new D(0,1,0),j),a.add(ge);for(let O=0;O<4;O++){let G=new te(new qt(.012,10,8),r);G.position.set(Math.cos(O*el/4)*.075,.018,Math.sin(O*el/4)*.075),ge.add(G)}}let c=new te(new wt(.13,.16,.12,40),r);c.position.y=t+.03,a.add(c);let u=new te(new Zt(t+.01,.018,12,96),r);u.rotation.x=Math.PI/2,a.add(u);let p=Kn(512,220,null,{dynamic:!0,k:3}),d=new te(new yn(.44,.19),new gt({map:p,toneMapped:!1})),h=new te(new Tt(.5,.25,.08),l);h.position.set(0,.16,t-.02),h.rotation.x=-.32,a.add(h),d.position.set(0,0,.041),h.add(d);let g=60,_=new Tt(.03,.02,.045),m=new Yn(_,new gt({toneMapped:!1}),g);m.position.y=-.05;let f=new dt,M=new dn,R=new On;for(let F=0;F<g;F++){let k=F/g*el;R.set(0,k,0),M.setFromEuler(R),f.compose(new D(Math.sin(k)*(t+.03),0,Math.cos(k)*(t+.03)),M,new D(1,1,1)),m.setMatrixAt(F,f),m.setColorAt(F,new Ne(2293606))}m.visible=!1,a.add(m);let b=new jn([new D(0,t+.08,0),new D(.05,t+.2,0),new D(.14,t+.26,.02)]),w=new te(new Mi(b,16,.016,8),new Wt({color:14075034,roughness:.9}));a.add(w);let T=new Hn(new Ln({map:Co(),blending:fn,depthWrite:!1}));T.position.set(.14,t+.26,.02),T.scale.setScalar(.22),a.add(T);let L=new pi(16744480,0,3,1.5);L.position.set(.14,t+.3,.1),a.add(L);let v=new Et;e.add(v);let y=new Wt({color:16777215,emissive:16777215,emissiveIntensity:.25,roughness:.4}),S={root:n,shell:a,sphere:o,mats:s,dispTex:p,leds:m,NL:g,spark:T,glowL:L,cables:[],kind:"black",time:null,value:"",label:"",ledFrac:1,mini:null,minis:[],gold:null,shake:0},C=(F,k)=>{let j=i.panelTopY+.035-k*Math.sin(.32);return new D(F,j,ht.panelZ+.02+k*Math.cos(.32))};function P(F,k,j=.022){let ge=new jn(F,!1,"catmullrom",.3);return new te(new Mi(ge,64,j,12),new Mn({color:k,roughness:.32,clearcoat:.8,metalness:.05}))}S.setCables=(F,k=null)=>{S.clearCables();let j=Math.min(.46,2.2/F);for(let ge=0;ge<F;ge++){let O=(ge-(F-1)/2)*j,G=(k||Cm)[ge%7],X=ht.bomb.clone().add(new D(O*.32,-.32,.25)),de=[X,X.clone().add(new D(O*.15,-.12,.12)),C(O,-.42).setY(i.panelTopY+.03),C(O,-.27),C(O,0),C(O,.24),C(O,.31).add(new D(0,-.08,.02))],N=P(de,G);N.userData={idx:ge,cable:!0},v.add(N);let q=new te(new Tt(j*.7,.008,.16),y.clone());q.position.copy(C(O,0)).add(new D(0,-.03,0)),q.rotation.x=.32,q.userData={idx:ge,cable:!0},v.add(q),S.cables.push({i:ge,mesh:N,plate:q,pts:de,col:G,cut:!1,x:O,parts:[]})}},S.clearCables=()=>{for(;v.children.length;)v.children.pop().geometry.dispose();S.cables=[]},S.cut=F=>{let k=S.cables[F];if(!k||k.cut)return null;k.cut=!0,k.mesh.visible=!1;let j=C(k.x,0),ge=C(k.x-.03,-.12).add(new D(0,.12,0)),O=C(k.x+.04,.13).add(new D(0,.09,0)),G=k.pts.slice(0,3).concat([C(k.x,-.24).add(new D(0,.03,0)),ge]),X=[O,C(k.x,.22).add(new D(0,.02,0)),k.pts[6]],de=P(G,k.col),N=P(X,k.col);v.add(de,N),k.parts=[de,N];let q=new Wt({color:16752704,metalness:1,roughness:.25,emissive:6957568,emissiveIntensity:.6});for(let[le,Z]of[[ge,G[G.length-2]],[O,X[1]]]){let ne=new te(new wt(.012,.012,.045,10),q);ne.position.copy(le),ne.lookAt(le.clone().multiplyScalar(2).sub(Z)),ne.rotateX(Math.PI/2),v.add(ne)}return k.plate.material.emissive.set(16719904),k.plate.material.emissiveIntensity=.6,k.tAnim=0,j},S.markCable=(F,k)=>{let j=S.cables[F];j&&(j.plate.material.emissive.set(k==="ok"?2162528:k==="hint"?16764928:16777215),j.plate.material.emissiveIntensity=k?.9:.25)},S.pickables=()=>S.cables.filter(F=>!F.cut).flatMap(F=>[F.mesh,F.plate]),S.setKind=F=>{S.kind=F,o.material=s[F],m.visible=F==="silver",S.showMinis(F==="gold"),T.visible=F!=="gold"},S.setLedFrac=F=>{S.ledFrac=F;let k=Math.round(F*g),j=new Ne;for(let ge=0;ge<g;ge++)m.setColorAt(ge,ge<k?j.setHex(F<.2?16719904:F<.45?16760832:2293606):j.setHex(1052688));m.instanceColor.needsUpdate=!0},S.drawDisplay=()=>{let F=p.userData.g,k=512,j=220;F.fillStyle="#050304",F.fillRect(0,0,k,j),F.textAlign="center",F.textBaseline="middle";let ge=S.time,O=ge==null?"--:--":`${String(Math.floor(Math.max(0,ge)/60)).padStart(1,"0")}:${String(Math.floor(Math.max(0,ge)%60)).padStart(2,"0")}`;F.font=`128px ${ei}`,F.fillStyle="rgba(255,40,30,.12)",F.fillText("8:88",k/2,100);let G=ge!=null&&ge<=10?Math.floor(performance.now()/250)%2?"#ff3020":"#ffd0c0":"#ff3a24";F.shadowColor="#ff2000",F.shadowBlur=24,F.fillStyle=G,F.fillText(O,k/2,100),F.shadowBlur=0,F.font=`800 40px ${Ft}`,F.fillStyle="#ffd34d",F.fillText(S.value||"",k/2,188),p.needsUpdate=!0};let B=new Et,I=new te(new qt(.12,40,28),s.black);B.add(I);let U=new te(new wt(.035,.04,.05,20),r);U.position.y=.13,B.add(U);let Y=new Hn(new Ln({map:Co(),blending:fn,depthWrite:!1}));Y.position.y=.2,Y.scale.setScalar(.14),B.add(Y);let J=new te(new qt(.025,12,8),new gt({color:16719904}));J.position.set(0,.04,.115),B.add(J),B.visible=!1,e.add(B),S.mini=B,S.miniLed=J;let se=new Et;e.add(se),se.visible=!1;for(let F=0;F<15;F++){let k=Math.PI*(.06+.88*F/14),j=1.55,ge=new D(ht.bomb.x+Math.cos(k)*j*1.1,ht.bomb.y-.66+Math.sin(F*.9)*0,ht.bomb.z-Math.sin(k)*j*.75-.15),O=new Et;O.position.copy(ge),O.lookAt(ht.bomb.x,ge.y,ht.bomb.z+3.5);let G=new te(new wt(.035,.06,.45,16),r);G.position.y=-.22,O.add(G);let X=new te(new qt(.14,40,28),s.black);X.position.y=.1,O.add(X);let de=Kn(128,128,he=>{he.fillStyle="#ffd34d",he.beginPath(),he.arc(64,64,60,0,el),he.fill(),he.fillStyle="#1a0a00",he.font=`86px ${ei}`,he.textAlign="center",he.textBaseline="middle",he.fillText(String(F+1),64,70)},{k:4}),N=new te(new _i(.075,32),new gt({map:de,toneMapped:!1}));N.position.set(0,.1,.142),O.add(N);let q=new gt({color:2105376,toneMapped:!1}),le=new te(new qt(.05,20,14),q);le.position.y=.27,O.add(le);let Z=new Hn(new Ln({map:Co(),blending:fn,depthWrite:!1,color:16777215}));Z.position.y=.27,Z.scale.setScalar(0),O.add(Z);let ne=new jn([ge.clone().add(new D(0,-.02,0)),ge.clone().lerp(ht.bomb,.5).add(new D(0,-.45,0)),ht.bomb.clone().add(new D(0,-.3,0))]);se.add(new te(new Mi(ne,24,.01,6),new Wt({color:Cm[F%5],roughness:.4}))),se.add(O),S.minis.push({g:O,ledM:q,glow:Z,state:"off",ball:X})}return S.minisGroup=se,S.showMinis=F=>{se.visible=F},S.setMini=(F,k)=>{let j=S.minis[F];j&&(j.state=k)},S.update=(F,k)=>{T.scale.setScalar(.18+.08*Math.sin(k*40)+.04*Math.random()),L.intensity=S.kind==="gold"?0:1.5+Math.random(),Y.scale.setScalar(.12+.05*Math.random()),J.material.color.setHex(Math.floor(k*6)%2?16719904:3145728),S.shake>0?(S.shake=Math.max(0,S.shake-F),a.position.set((Math.random()-.5)*.02,0,(Math.random()-.5)*.02)):a.position.set(0,0,0),a.rotation.y=S.kind==="gold"?k*.2:0;for(let j of S.minis){let ge=j.state,O=2105376,G=0;if(ge==="ok")O=2162512,G=.35;else if(ge==="pend"){let X=Math.floor(k*4)%2;O=X?16764928:3813376,G=X?.4:.1}else ge==="bad"?(O=16715792,G=.45):ge==="cur"&&(O=16777215,G=.3+.1*Math.sin(k*10));j.ledM.color.setHex(O),j.glow.material.color.setHex(O),j.glow.scale.setScalar(G)}for(let j of S.cables)if(j.cut&&j.tAnim<1){j.tAnim=Math.min(1,j.tAnim+F*2);let[ge,O]=j.parts;O&&(O.rotation.x=j.tAnim*.05)}},S.setKind("black"),S.drawDisplay(),S}function Ly(i,e=256){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),a=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);i.forEach(([o,r])=>a.addColorStop(o,r)),n.fillStyle=a,n.fillRect(0,0,e,e);let s=new In(t);return s.colorSpace=Gt,s}function Iy(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");for(let a=0;a<40;a++){let s=128+(Math.random()-.5)*256*.45,o=256/2+(Math.random()-.5)*256*.45,r=256*(.12+Math.random()*.18),l=t.createRadialGradient(s,o,0,s,o,r);l.addColorStop(0,"rgba(255,255,255,.22)"),l.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=l,t.fillRect(0,0,256,256)}let n=new In(e);return n.colorSpace=Gt,n}function Pm(i){let e=Ly([[0,"rgba(255,255,230,1)"],[.25,"rgba(255,200,60,.95)"],[.55,"rgba(255,90,10,.6)"],[1,"rgba(120,20,0,0)"]]),t=Iy(),n=90,a=[];for(let v=0;v<n;v++){let y=v<40,S=new Ln({map:y?e:t,blending:y?fn:Qa,depthWrite:!1,transparent:!0,opacity:0,color:y?16777215:10132136}),C=new Hn(S);C.visible=!1,i.add(C),a.push({s:C,fire:y,v:new D,life:0,max:1,size:1,grow:1})}let s=220,o=new Yn(new Tt(.02,.02,.09),new gt({color:16760896,toneMapped:!1}),s);o.frustumCulled=!1,i.add(o);let r=Array.from({length:s},()=>({p:new D(0,-99,0),v:new D,life:0})),l=new te(new Va(.8,1,64),new gt({color:16765056,transparent:!0,opacity:0,side:tn,blending:fn,depthWrite:!1}));l.rotation.x=-Math.PI/2,i.add(l);let c=new pi(16752704,0,25,2);i.add(c);let u=9,p=9,d=new dt,h=new dn,g=new D(1,1,1),_=new D(0,0,0),m=new D(0,0,1),f={explode(v,y=1){a.forEach((C,P)=>{C.s.visible=!0,C.s.position.copy(v);let B=new D(Math.random()-.5,Math.random()*.8-.1,Math.random()-.5).normalize();C.v.copy(B).multiplyScalar((C.fire?3.5:1.6)*(.4+Math.random())*y),C.life=0,C.max=C.fire?.6+Math.random()*.6:1.4+Math.random()*1,C.size=(C.fire?.5:.7)*y*(.6+Math.random()*.8),C.grow=C.fire?2.4:2.2,C.delay=C.fire?Math.random()*.12:.05+Math.random()*.35,C.s.material.rotation=Math.random()*6}),r.forEach(C=>{C.p.copy(v),C.v.set(Math.random()-.5,Math.random()*.9,Math.random()-.5).normalize().multiplyScalar((3+Math.random()*6)*y),C.life=.6+Math.random()*1.2}),l.position.set(v.x,.32,v.z),u=0,c.position.copy(v).add(new D(0,.4,.6)),p=0,f.scale=y;let S=document.getElementById("flash");S&&(S.classList.remove("on"),S.offsetWidth,S.classList.add("on"))},sparkle(v,y=30,S=16765024){let C=0;for(let P of r)if(!(P.life>0)&&(P.p.copy(v),P.v.set(Math.random()-.5,Math.random()*.8+.2,Math.random()-.5).normalize().multiplyScalar(1+Math.random()*2),P.life=.3+Math.random()*.5,++C>=y))break},update(v){for(let y of a){if(!y.s.visible)continue;if(y.delay>0){y.delay-=v,y.s.material.opacity=0;continue}y.life+=v;let S=y.life/y.max;if(S>=1){y.s.visible=!1;continue}y.v.multiplyScalar(1-v*(y.fire?2.5:1.2)),y.fire||(y.v.y+=v*.6),y.s.position.addScaledVector(y.v,v);let C=y.size*(1+y.grow*Math.sqrt(S));y.s.scale.setScalar(C),y.s.material.opacity=y.fire?(1-S)*.95:Math.min(1,S*6)*(1-S)*(1-S)*.5,y.fire&&y.s.material.color.setRGB(1,1-S*.5,1-S)}if(r.forEach((y,S)=>{y.life>0?(y.life-=v,y.v.y-=9.8*v,y.p.addScaledVector(y.v,v),y.p.y<.2&&(y.p.y=.2,y.v.y*=-.3,y.v.x*=.6,y.v.z*=.6),h.setFromUnitVectors(m,y.v.clone().normalize()),d.compose(y.p,h,y.life>0?g:_)):d.compose(y.p,h,_),o.setMatrixAt(S,d)}),o.instanceMatrix.needsUpdate=!0,u<1){u+=v*1.4;let y=.5+u*6*(f.scale||1);l.scale.setScalar(y),l.material.opacity=(1-u)*.7}else l.material.opacity=0;p<1.5?(p+=v,c.intensity=Math.max(0,50*(1-p/.6))*(f.scale||1)):c.intensity=0}},M=400,R=new Yn(new yn(.08,.045),new gt({side:tn,toneMapped:!1}),M);R.frustumCulled=!1,i.add(R);let b=Array.from({length:M},(v,y)=>(R.setColorAt(y,new Ne().setHSL(Math.random()<.5?.12:Math.random(),.95,.6)),{p:new D(0,-50,0),v:new D,r:new D(Math.random()*6,Math.random()*6,Math.random()*6)})),w=0,T=new On;f.confetti=(v=!1)=>{b.forEach((y,S)=>{y.p.set((Math.random()-.5)*14,9+Math.random()*5,(Math.random()-.5)*12),y.v.set((Math.random()-.5)*.6,-.9-Math.random()*1.2,(Math.random()-.5)*.6),v&&R.setColorAt(S,new Ne().setHSL(.11+Math.random()*.04,.9,.45+Math.random()*.3))}),R.instanceColor.needsUpdate=!0};let L=f.update;return f.update=v=>{L(v),w+=v,b.forEach((y,S)=>{if(y.p.y<-1){d.compose(y.p,h.identity(),_),R.setMatrixAt(S,d);return}y.p.addScaledVector(y.v,v),y.p.x+=Math.sin(w*2+S)*v*.4,T.set(w*y.r.x,w*y.r.y,w*y.r.z),h.setFromEuler(T),d.compose(y.p,h,g),R.setMatrixAt(S,d)}),R.instanceMatrix.needsUpdate=!0},f}var Io=Math.PI*2,Dy=["#ff0000","#ff5a00","#ff9a00","#ffd000","#a8ff00","#22ff22","#00ff9a","#00e5ff","#0090ff","#0030ff","#6a00ff","#b000ff","#ff00d0","#ff4f8a","#ffd6a0","#ffffff","rainbow"],Lm={SSLOW:.06,SLOW:.15,MEDIUM:.35,FAST:.8};var Ny="varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",Uy=`uniform vec3 color; uniform float inten; uniform float gobo; uniform float rot; varying vec2 vUv;
void main(){ float a = pow(vUv.y, 1.6) * inten; if (gobo > 0.5) a *= 0.25 + 0.75 * step(0.5, fract(vUv.x * 7.0 + rot)); gl_FragColor = vec4(color * a, 1.0); }`;function Nh(){return new Kt({uniforms:{color:{value:new Ne},inten:{value:0},gobo:{value:0},rot:{value:0}},vertexShader:Ny,fragmentShader:Uy,transparent:!0,blending:fn,depthWrite:!1,side:tn})}function By(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.6,"rgba(255,255,255,.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new In(i)}var Im=i=>({auto:!0,sel:"ALL",colA:i==="leds"?"#ffffff":"#ff1040",colB:i==="leds"?"#ffffff":"#9a30ff",rbA:!1,rbB:!1,cmode:null,ccue:0,state:"O",stateT:0,prevState:"O",icue:0,bright:1,beam:"BEAM",thick:1,spread:1,tilt:i==="bars"?20:30,pan:0,tiltSign:1,panSign:1,form:i==="heads"?"WIDE":null,freeze:!1,speed:"MEDIUM",move:i==="heads"?"CIRCLE":null,goboRot:!1,cueSpeed:1,fadeSpeed:1,loop:!0,grand:!1,overshoot:!1});function Dm(i,{lowQuality:e=!1}={}){let t=i.scene,n=By(),a={heads:{name:"Heads",fx:[]},bars:{name:"LineBars",fx:[]},washes:{name:"Washes",fx:[]},leds:{name:"LEDs",fx:[]}};for(let O in a)a[O].st=Im(O);let s=new Wt({color:1710623,metalness:.7,roughness:.4}),o=e?12:16;for(let O=0;O<o;O++){let G=O/o*Io+.1,X=new D(Math.cos(G)*12.35,9.75,-Math.sin(G)*12.35),de=new te(new Tt(.35,.18,.35),s);de.position.copy(X).setY(9.92),t.add(de);let N=new te(new wt(.16,.2,.38,10),s);N.position.copy(X),t.add(N);let q=new gt({color:16777215}),le=new te(new _i(.13,12),q);t.add(le);let Z=new yi(1,1,20,1,!0);Z.translate(0,-.5,0);let ne=Nh(),he=new te(Z,ne);he.position.copy(X),he.frustumCulled=!1,t.add(he);let Je=new te(new _i(1,20),new gt({map:n,transparent:!0,blending:fn,depthWrite:!1}));Je.rotation.x=-Math.PI/2,Je.position.y=.02,t.add(Je),a.heads.fx.push({i:O,sub:O%2?"B":"A",pos:X,head:N,lens:le,lensM:q,beam:he,bm:ne,hit:Je,len:13,width:.55,down:!0,center:G,col:new Ne,int:0,rnd:Math.random(),rt:0,rTilt:0,rPan:0})}let r=e?10:14;for(let O=0;O<r;O++){let G=-Math.PI/2+.75+(Io-1.5)*(O/(r-1)),X=new D(Math.cos(G)*14.6,.4,-Math.sin(G)*14.6),de=new gt({color:16777215}),N=new te(new Tt(1.6,.1,.12),de);N.position.copy(X),N.lookAt(0,X.y,0),t.add(N);let q=new wt(.8,.05,1,4,1,!0);q.translate(0,.5,0),q.scale(1,1,.08);let le=Nh(),Z=new te(q,le);Z.position.copy(X),Z.frustumCulled=!1,t.add(Z);let ne=q.attributes.uv;for(let he=0;he<ne.count;he++)ne.setY(he,1-ne.getY(he));a.bars.fx.push({i:O,sub:O%2?"B":"A",pos:X,lensM:de,beam:Z,bm:le,len:7,width:1,down:!1,center:G,col:new Ne,int:0,rnd:Math.random(),rt:0,rTilt:0,rPan:0})}let l=6;for(let O=0;O<l;O++){let G=O/l*Io+.3,X=new D(Math.cos(G)*11.4,9.7,-Math.sin(G)*11.4),de=new te(new wt(.22,.25,.3,10),s);de.position.copy(X),t.add(de);let N=new gt({color:16777215}),q=new te(new _i(.2,12),N);t.add(q);let le=new yi(1,1,20,1,!0);le.translate(0,-.5,0);let Z=Nh(),ne=new te(le,Z);ne.position.copy(X),ne.frustumCulled=!1,t.add(ne);let he=i.spots[O];he.position.copy(X),he.angle=.5,he.penumbra=.7,a.washes.fx.push({i:O,sub:O%2?"B":"A",pos:X,lens:q,lensM:N,beam:ne,bm:Z,spot:he,len:12,width:1.6,down:!0,center:G,col:new Ne,int:0,rnd:Math.random(),rt:0,rTilt:0,rPan:0})}[{name:"Marco pantalla",sub:"A",apply:(O,G)=>{i.screenGlow.color.copy(O).multiplyScalar(.4+.6*G),i.edgeMat&&i.edgeMat.color.copy(O).multiplyScalar(.5+.5*G)}},{name:"Disco techo",sub:"B",apply(O,G){i.glowDisc.material.color.copy(i.ceilBase||O).multiply(O).multiplyScalar(G)}},{name:"Muro chevrones",sub:"A",apply:(O,G)=>{i.lowWallMat.emissive.copy(O),i.lowWallMat.emissiveIntensity=.35*G}},{name:"L\xEDneas suelo",sub:"B",apply:(O,G)=>{i.floorLines.material.color.copy(O).multiplyScalar(G)}}].forEach((O,G)=>a.leds.fx.push({i:G,sub:O.sub,apply:O.apply,col:new Ne(1,1,1),int:1,rnd:Math.random(),rt:0}));let u=new Ne,p=new Ne,d=new Ne,h=new Ne(1,1,1),g=0,_=0,m={kind:null,until:0};function f(O,G,X,de,N){let q=(de*.15*O.cueSpeed+G.i/X)%1;O.rbA?p.setHSL(q,1,.5):p.set(O.colA),O.rbB?d.setHSL((q+.5)%1,1,.5):d.set(O.colB);let le=1.2*O.cueSpeed,Z=G.sub==="A"?p:d;switch(O.cmode){case"SECOND":Z=G.i%2?d:p;break;case"SWITCH":Z=Math.floor(de*le)%2?d:p;break;case"SMOOTH":return N.copy(p).lerp(d,.5+.5*Math.sin(de*le*2));case"GRADIENT":return N.copy(p).lerp(d,X>1?G.i/(X-1):0);case"FLASH":if(de*le*2%1<.18)return N.copy(h);break}switch(O.ccue){case 1:Z=Math.floor(de*le*4+G.i)%2?d:p;break;case 2:return N.setHSL((de*.3*O.cueSpeed+G.i/X)%1,1,.5);case 3:{let ne=Math.floor(de*le*2);return N.setHSL((Math.sin(ne*12.9+G.i*78.2)*43758.5%1+1)%1,1,.5)}case 4:Z=(G.i/X+de*le*.25)%1<.5?p:d;break;case 5:Z=Math.floor(de*le*8)%2?d:p;break}return N.copy(Z)}function M(O,G,X,de){let N=O.cueSpeed,q=Math.max(.1,O.fadeSpeed),le=de-O.stateT,Z=Math.floor(de*3*N),ne=Je=>(Math.sin(Je*12.9898)*43758.5453%1+1)%1,he;switch(O.state){case"X":he=0;break;case"FO":he=Math.min(1,le/q);break;case"FX":he=Math.max(0,1-le/q);break;case"RAND":he=ne(Z*7+G.i*3.1)>.5?1:0;break;case"FRAND":{let Je=ne(Z*7+G.i),ce=ne((Z+1)*7+G.i),Q=de*3*N-Z;he=Je+(ce-Je)*Q;break}case"ORAND":he=Math.floor(ne(Z*3.3)*X)===G.i?1:0;break;case"BRAND":he=ne(Z*5.7+G.i*1.3)>.8?1:.08;break;case"STROBE":he=Math.floor(de*14)%2;break;case"FLASH":he=Math.max(0,1-le/.5),le>.5&&(O.state=O.prevState==="FLASH"?"O":O.prevState,O.stateT=de);break;default:he=1}if(O.icue){let Je=O.icue,ce=de*N*.8%1,Q=X>1?G.i/(X-1):0,ie=1;if(!O.loop&&de-O.stateT>1/(N*.8))ie=1;else switch(Je){case 1:ie=Math.max(0,1-Math.abs((Q-ce+1)%1-0)*4);break;case 2:ie=Math.floor(de*N*2)%2===G.i%2?1:0;break;case 3:{let pe=Math.abs(de*N*.8%2-1);ie=Math.max(0,1-Math.abs(Q-pe)*5);break}case 4:ie=Q<=ce?1:0;break;case 5:ie=Math.abs(Q-.5)*2<=ce?1:0;break;case 6:ie=ne(Math.floor(de*8*N)+G.i*9.1)>.7?1:.05;break;case 7:ie=(Math.floor(de*N*2)+Math.floor(G.i/2))%2?1:0;break;case 8:ie=.5+.5*Math.sin(de*N*6);break;case 9:ie=Math.max(0,1-Math.abs((1-Q-ce+1)%1)*4);break;case 10:ie=Math.floor(Q*2.999)===Math.floor(de*N*1.5)%3?1:.05;break;case 11:ie=Math.max(0,1-Math.min(Math.abs((Q-ce+1)%1),Math.abs((Q-ce+1.5)%1))*5);break;case 12:ie=.5+.5*Math.sin(de*N*2+Q*Io);break}he*=ie}return he*O.bright}function R(O,G,X,de){let N=O.overshoot?1.6:1,q=Lm[O.speed]*Io*O.cueSpeed,le=O.grand?G.rnd*Io:G.i*.6,Z=O.tilt*O.tiltSign,ne=O.pan*O.panSign;switch(O.form){case"WIDE":ne+=(G.i%2?1:-1)*18,Z+=8;break;case"IN":ne=0,Z=G.down?38:25;break;case"CROSS":ne+=(G.i%2?1:-1)*35;break;case"UD":Z+=(G.i%2?1:-1)*20;break}let he=_;switch(O.move){case"TILT":Z+=25*N*Math.sin(he*q+le);break;case"SMTILT":Z+=25*N*Math.sin(he*q);break;case"SLTILT":Z+=25*N*Math.sin(he*q*.35+le);break;case"PAN":ne+=40*N*Math.sin(he*q+le);break;case"SMPAN":ne+=40*N*Math.sin(he*q);break;case"SLPAN":ne+=40*N*Math.sin(he*q*.35+le);break;case"CIRCLE":Z+=18*N*Math.sin(he*q+le),ne+=30*N*Math.cos(he*q+le);break;case"RANDOM CIRCLE":Z+=18*N*Math.sin(he*q*(.7+G.rnd)+G.rnd*9),ne+=30*N*Math.cos(he*q*(.7+G.rnd)+G.rnd*9);break;case"RTILT":case"RPAN":{he-G.rt>1/(Lm[O.speed]*2*O.cueSpeed)&&(G.rt=he,G.rTilt=(Math.random()-.5)*50*N,G.rPan=(Math.random()-.5)*80*N),G.sTilt=(G.sTilt||0)+(G.rTilt-(G.sTilt||0))*.05,G.sPan=(G.sPan||0)+(G.rPan-(G.sPan||0))*.05,O.move==="RTILT"?Z+=G.sTilt:ne+=G.sPan;break}}return[Math.max(-120,Math.min(130,Z))*Math.PI/180,ne*Math.PI/180]}let b=new D,w=new D(0,1,0),T=new D(0,-1,0),L=new dn,v={heads:1,bars:1,washes:1,leds:1};function y(O){g+=O,Y(g);for(let X in a){let de=a[X],N=de.st,q=de.fx.length;N.freeze||(_+=0);let le=Math.min(1,O*6/Math.max(.1,N.fadeSpeed));de.fx.forEach(Z=>{f(N,Z,q,g,u),Z.col.lerp(u,le);let ne=v[X],he=ne>=1?1:q>1?Z.i/(q-1)<ne-.001?1:0:ne>0?1:0,Je=M(N,Z,q,g)*he;if(Z.int+=(Je-Z.int)*(N.state==="STROBE"||N.state==="FLASH"||N.state==="BRAND"||N.state==="RAND"?1:le),X==="leds"){Z.apply(u.copy(Z.col),(.25+.75*Z.int)*he);return}Z.lensM.color.copy(Z.col).multiplyScalar(.25+Z.int*1.5);let ce,Q;!N.freeze||Z.lastAim===void 0?([ce,Q]=R(N,Z,q,g),Z.lastAim=[ce,Q]):[ce,Q]=Z.lastAim;let ie=new D(-Z.pos.x,0,-Z.pos.z).normalize(),pe=Math.cos(Q),ye=Math.sin(Q),Ge=ie.x*pe-ie.z*ye,De=ie.x*ye+ie.z*pe;Z.down?b.set(Ge*Math.sin(ce),-Math.cos(ce),De*Math.sin(ce)):b.set(Ge*Math.sin(ce),Math.cos(ce),De*Math.sin(ce)),b.normalize(),L.setFromUnitVectors(Z.down?T:w,b),Z.beam.quaternion.copy(L),Z.head&&Z.head.quaternion.copy(L),Z.lens&&(Z.lens.position.copy(Z.pos).addScaledVector(b,.21),Z.lens.lookAt(Z.lens.position.clone().add(b)));let Ze=N.beam!=="NO BEAM"&&Z.int>.01;Z.beam.visible=Ze;let He=Z.len;Z.down&&b.y<-.05&&(He=Math.min(Z.len*1.6,Z.pos.y/-b.y));let z=Z.width*N.spread*(.5+.5*N.thick);if(Z.beam.scale.set(z*He/10,He,z*He/10),Z.bm.uniforms.color.value.copy(Z.col),Z.bm.uniforms.inten.value=Z.int*(X==="washes"?.12:.3)*N.thick,Z.bm.uniforms.gobo.value=N.beam==="GOBO"?1:0,(N.goboRot||N.beam==="GOBO")&&(Z.bm.uniforms.rot.value+=O*(N.goboRot?.6:.1)),Z.hit){let lt=Z.pos.y/Math.max(.05,-b.y);Z.hit.visible=Z.int>.02&&b.y<-.15&&lt<30,Z.hit.position.set(Z.pos.x+b.x*lt,.02,Z.pos.z+b.z*lt),Z.hit.scale.setScalar(Math.min(3,z*lt/10*1.1)),Z.hit.material.color.copy(Z.col).multiplyScalar(Z.int*.8)}Z.spot&&(Z.spot.color.copy(Z.col),Z.spot.intensity=Z.int*28,Z.spot.target.position.copy(Z.pos).addScaledVector(b,10))})}let G=!0;for(let X in a)a[X].st.freeze||(G=!1);G||(_+=O)}let S="menu",C=-99,P=0,B=[{heads:{move:"CIRCLE",form:"WIDE",cmode:null,ccue:0,icue:0,speed:"MEDIUM"},bars:{icue:1,cmode:null},washes:{cmode:"SMOOTH"}},{heads:{move:"PAN",form:"CROSS",cmode:"SWITCH",icue:0,speed:"SLOW"},bars:{icue:12,cmode:"GRADIENT"},washes:{cmode:null}},{heads:{move:"TILT",form:"UD",cmode:"GRADIENT",icue:1,speed:"MEDIUM"},bars:{icue:3,cmode:"SECOND"},washes:{cmode:"SWITCH"}},{heads:{move:"RANDOM CIRCLE",form:null,cmode:"SECOND",icue:0,speed:"SLOW"},bars:{icue:8,cmode:null},washes:{cmode:"SMOOTH"}}],I={colA:"#ff1040",colB:"#9a30ff",rbA:!1,rbB:!1,state:"O",bright:1,beam:"BEAM",tilt:30,pan:0};function U(O,G){let X=a[O].st;X.auto&&(G.state&&G.state!==X.state&&(X.prevState=X.state,X.stateT=g),Object.assign(X,G))}function Y(O){if(m.kind&&O>m.until&&(m.kind=null,C=-99),m.kind||O-C<(S==="question"?6:9))return;C=O,P=(P+1)%B.length;let G=B[P],X=S==="final"?{colA:"#ffd000",colB:"#ffffff"}:I;for(let de of["heads","bars","washes"])U(de,{...I,...X,...G[de],tilt:de==="bars"?20:30,bright:S==="question"?.75:1});S==="question"&&U("heads",{move:"SLTILT",speed:"SLOW",icue:0}),U("leds",{colA:"#ffffff",colB:"#ffffff",rbA:!1,rbB:!1,state:"O",icue:S==="menu"?12:0,cmode:null,bright:1,cueSpeed:.4})}function J(O){if(O==="menu"||O==="idle"||O==="question"||O==="final"){S=O,C=-99,m.kind=null;return}if(O==="fall"){m.kind="fall",m.until=g+2.6;for(let G of["heads","washes","bars"])U(G,{colA:"#ff0000",colB:"#ff0000",rbA:!1,rbB:!1,cmode:null,ccue:0,icue:0,state:"STROBE",stateT:g,move:G==="heads"?"RTILT":null,speed:"FAST"});U("leds",{colA:"#ff2020",colB:"#ff2020",state:"STROBE",icue:0})}if(O==="win"){m.kind="win",m.until=g+4;for(let G of["heads","washes","bars"])U(G,{rbA:!1,rbB:!1,colA:"#ffd000",colB:"#ff1040",cmode:"SWITCH",ccue:1,icue:0,state:"FLASH",prevState:"O",stateT:g,move:G==="heads"?"CIRCLE":null,speed:"FAST",form:"WIDE"});U("leds",{rbA:!1,rbB:!1,colA:"#ffd000",colB:"#ffffff",ccue:1,state:"O"})}if(O==="intro"){m.kind="intro",m.until=g+600;for(let G of["heads","washes","bars"])U(G,{colA:"#ff1040",colB:"#b040ff",rbA:!1,rbB:!1,cmode:"SECOND",ccue:1,icue:G==="bars"?1:0,state:"O",bright:1,move:G==="heads"?"CIRCLE":null,form:"WIDE",speed:"FAST",cueSpeed:1.5});U("leds",{colA:"#ffffff",colB:"#e0a8ff",state:"O",icue:12,cueSpeed:1.5})}if(O==="tension"){m.kind="tension",m.until=g+600;for(let G of["heads","washes","bars"])U(G,{colA:"#ff0030",colB:"#6a00ff",rbA:!1,rbB:!1,cmode:"SMOOTH",ccue:0,icue:G==="bars"?6:0,state:"O",bright:.55,move:G==="heads"?"SLTILT":null,form:G==="heads"?"IN":null,speed:"SSLOW"});U("leds",{colA:"#ff2050",colB:"#ff2050",state:"O",icue:8,cueSpeed:.6})}if(O==="release"&&(m.kind=null,C=-99),O==="correct"){m.kind="correct",m.until=g+1.2;for(let G of["heads","bars"])U(G,{colA:"#22ff22",colB:"#ffffff",state:"FLASH",prevState:"O",stateT:g,ccue:0})}}function se(O){let G=(de,N,q="")=>`<button class="gl-b ${q}" data-a="${N}">${de}</button>`,X=Object.entries(a).map(([de,N])=>{let q=de!=="leds",le=de!=="leds",Z=de==="bars";return`<div class="gl-panel" data-g="${de}">
      <div class="gl-head"><b>${N.name}</b><span class="gl-logo">GLIGHTS</span><span class="gl-ver">BOOM</span><button class="gl-b gl-auto" data-a="auto">AUTO</button></div>
      <div class="gl-sec">Colours and functions</div>
      <div class="gl-sw">${Dy.map(ne=>`<button class="gl-c ${ne==="rainbow"?"rb":""}" style="${ne!=="rainbow"?"background:"+ne:""}" data-a="col:${ne}"></button>`).join("")}</div>
      <div class="gl-row g8">${G("A","sel:A")}${G("B","sel:B")}${G("ALL","sel:ALL")}${["SECOND","SWITCH","SMOOTH","GRADIENT","FLASH"].map(ne=>G(ne,"cmode:"+ne)).join("")}</div>
      <div class="gl-row g6">${[1,2,3,4,5].map(ne=>G("CUE"+ne,"ccue:"+ne)).join("")}${G("NONE","ccue:0")}</div>
      <div class="gl-ab"><div class="gl-a">A</div><div class="gl-bb">B</div></div>
      <div class="gl-sec">Light state</div>
      <div class="gl-row g10">${["O","X","FO","FX","RAND","FRAND","ORAND","BRAND","STROBE","FLASH"].map(ne=>G(ne,"state:"+ne)).join("")}</div>
      <div class="gl-row g6">${Array.from({length:12},(ne,he)=>G("CUE"+(he+1),"icue:"+(he+1))).join("")}</div>
      <div class="gl-row g1">${G("CUE OFF","icue:0")}</div>
      <label class="gl-sl">BRIGHTNESS: <span data-v="bright">100%</span><input type="range" min="0" max="100" value="100" data-s="bright"></label>
      ${q?`<div class="gl-sec">Beam controls</div>
      <div class="gl-row g3">${de!=="bars"?G("GOBO","beam:GOBO"):""}${G("BEAM","beam:BEAM")}${G("NO BEAM","beam:NO BEAM")}</div>
      <label class="gl-sl">THICKNESS: <span data-v="thick">100%</span><input type="range" min="10" max="400" value="100" data-s="thick"></label>
      ${de!=="bars"?'<label class="gl-sl">SPREAD: <span data-v="spread">100%</span><input type="range" min="20" max="300" value="100" data-s="spread"></label>':""}`:""}
      ${le?`<div class="gl-sec">Positions</div>
      <div class="gl-row g14">${G("+/-","tsign")}<span class="gl-l">Tilt</span>${[0,10,20,30,40,50,60,70,80,90,100,110,120].map(ne=>G(ne,"tilt:"+ne)).join("")}</div>
      ${Z?"":`<div class="gl-row g14">${G("+/-","psign")}<span class="gl-l">Pan</span>${[0,10,20,30,40,50,60,70,80,90,100,110,120].map(ne=>G(ne,"pan:"+ne)).join("")}</div>`}
      <div class="gl-row g9">${(Z?["UD"]:["WIDE","IN","CROSS","UD"]).map(ne=>G(ne==="UD"?"U/D":ne,"form:"+ne)).join("")}${G("FREEZE","freeze")}${["SSLOW","SLOW","MEDIUM","FAST"].map(ne=>G(ne,"speed:"+ne)).join("")}</div>
      <div class="gl-row g8">${(Z?["TILT","RTILT","SMTILT","SLTILT"]:["TILT","RTILT","SMTILT","SLTILT","PAN","RPAN","SMPAN","SLPAN"]).map(ne=>G(ne,"move:"+ne)).join("")}</div>
      ${Z?"":`<div class="gl-row g3">${G("CIRCLE","move:CIRCLE")}${G("RANDOM CIRCLE","move:RANDOM CIRCLE")}${G("GOBO ROTATE","gobor")}</div>`}
      <div class="gl-row g1">${G("STOP MOVEMENT","move:")}</div>`:""}
      <div class="gl-sec">Modifiers</div>
      <div class="gl-row g12"><span class="gl-l">Cue speed</span>${[.1,.25,.5,.75,1,1.25,1.5,2,2.5,3,5,10].map(ne=>G(String(ne).replace(/^0/,""),"cs:"+ne)).join("")}</div>
      <div class="gl-row g12"><span class="gl-l">Fade speed</span>${[.1,.25,.33,.5,.66,.75,1,1.25,1.5,2,3,5].map(ne=>G(String(ne).replace(/^0/,""),"fs:"+ne)).join("")}</div>
      <div class="gl-row g4"><span class="gl-l">Other</span>${G("LOOP CUES","loop")}${G("GROUP RANDOM","grand")}${G("OVERSHOOT","over")}${G("RESET","reset")}</div>
      </div>`}).join("");O.innerHTML=`<div class="gl-tabs">${Object.entries(a).map(([de,N],q)=>`<button data-tab="${de}" class="${q?"":"on"}">${N.name}</button>`).join("")}<button class="gl-close" data-close>\u2715</button></div><div class="gl-wrap">${X}</div>`,O.querySelector(".gl-panel").classList.add("on"),O.querySelectorAll("[data-tab]").forEach(de=>de.onclick=()=>{O.querySelectorAll("[data-tab]").forEach(N=>N.classList.toggle("on",N===de)),O.querySelectorAll(".gl-panel").forEach(N=>N.classList.toggle("on",N.dataset.g===de.dataset.tab))}),O.querySelectorAll(".gl-panel").forEach(de=>{let N=de.dataset.g;de.addEventListener("click",q=>{let le=q.target.closest("[data-a]");le&&(F(N,le.dataset.a),k(de,N))}),de.querySelectorAll("[data-s]").forEach(q=>q.addEventListener("input",()=>{let le=a[N].st;le.auto=!1,le[q.dataset.s]=q.value/100,k(de,N)})),k(de,N)}),["pointerdown","pointermove","wheel","touchstart"].forEach(de=>O.addEventListener(de,N=>N.stopPropagation(),{passive:!0})),setInterval(()=>O.querySelectorAll(".gl-panel.on").forEach(de=>k(de,de.dataset.g)),1e3)}function F(O,G){let X=a[O].st,[de,N]=G.split(/:(.*)/s);if(de==="auto"){X.auto=!X.auto,C=-99;return}switch(X.auto=!1,de){case"col":{let q=N==="rainbow";X.sel!=="B"&&(X.rbA=q,q||(X.colA=N)),X.sel!=="A"&&(X.rbB=q,q||(X.colB=N)),X.ccue=0;break}case"sel":X.sel=N;break;case"cmode":X.cmode=X.cmode===N?null:N;break;case"ccue":X.ccue=+N;break;case"state":X.prevState=X.state,X.state=N,X.stateT=g;break;case"icue":X.icue=+N,X.stateT=g;break;case"beam":X.beam=N;break;case"tilt":X.tilt=+N;break;case"pan":X.pan=+N;break;case"tsign":X.tiltSign*=-1;break;case"psign":X.panSign*=-1;break;case"form":X.form=X.form===N?null:N;break;case"freeze":X.freeze=!X.freeze;break;case"speed":X.speed=N;break;case"move":X.move=N||null;break;case"gobor":X.goboRot=!X.goboRot;break;case"cs":X.cueSpeed=+N;break;case"fs":X.fadeSpeed=+N;break;case"loop":X.loop=!X.loop;break;case"grand":X.grand=!X.grand;break;case"over":X.overshoot=!X.overshoot;break;case"reset":Object.assign(X,Im(O),{auto:!1});break}}function k(O,G){let X=a[G].st,de=N=>{let[q,le]=N.split(/:(.*)/s);switch(q){case"auto":return X.auto;case"sel":return X.sel===le;case"cmode":return X.cmode===le;case"ccue":return X.ccue===+le;case"state":return X.state===le;case"icue":return X.icue===+le;case"beam":return X.beam===le;case"tilt":return X.tilt===+le;case"pan":return X.pan===+le;case"tsign":return X.tiltSign<0;case"psign":return X.panSign<0;case"form":return X.form===le;case"freeze":return X.freeze;case"speed":return X.speed===le;case"move":return(X.move||"")===le;case"gobor":return X.goboRot;case"cs":return X.cueSpeed===+le;case"fs":return X.fadeSpeed===+le;case"loop":return X.loop;case"grand":return X.grand;case"over":return X.overshoot;case"col":return!1}return!1};O.querySelectorAll("[data-a]").forEach(N=>N.classList.toggle("on",de(N.dataset.a))),O.querySelector(".gl-a").style.background=X.rbA?"linear-gradient(90deg,red,orange,yellow,lime,cyan,blue,magenta)":X.colA,O.querySelector(".gl-bb").style.background=X.rbB?"linear-gradient(90deg,red,orange,yellow,lime,cyan,blue,magenta)":X.colB;for(let N of["bright","thick","spread"]){let q=O.querySelector(`[data-s="${N}"]`);q&&(q.value=Math.round(X[N]*100),O.querySelector(`[data-v="${N}"]`).textContent=Math.round(X[N]*100)+"%")}}function j(O,G){I.colA=O||"#ff1040",I.colB=G||"#9a30ff",C=-99}function ge(O){for(let G of["heads","bars","washes","leds"])O[G]&&U(G,O[G]);O.hold&&(m.kind="cine",m.until=g+O.hold)}return{update:y,event:J,buildGUI:se,groups:a,setPalette:j,power:v,cine:ge}}var Fy=[15087942,2792847,16032353,4553629,16777215,8599788,16760331,448160,3835647,16471559,2236962,13178954,9485933,6185166,14540253],Oy=[2236987,1914199,4014171,2829634,4869737,1118481,6045747],Hy=[15843965,14724201,13010498,9262372,16767916,16108455],zy=[2824720,1118481,7029795,13934615,9118976,10066329,3877408],ky={esp10:[16727972,3400191,16766474,8599788,3920239],esp1000:[16764928,15133951,13938487,12632256]},Gy={esp10:[16727972,3400191,16766474,16777215,8599788,3920239],esp1000:[16764928,15133951,1118481,13938487,16777215],prime:[1118481,16777215,13938487,1908026,7016218]},Vy={clap:{p:.9,dl:.35},cheer:{p:.85,dl:.3},ooh:{p:.9,dl:.15},laugh:{p:.85,dl:.4},wave:{p:.6,dl:.6}};function Nm(i,{lowQuality:e=!1}={}){let t=(i.seats||[]).filter((S,C)=>!e||C%2===0),n=t.length,a=new Wt({roughness:.6,metalness:0}),s={seat:new Tt(.46,.4,.42).translate(0,.2,-.02),thigh:new Dn(.08,.3,4,10).rotateX(Math.PI/2).translate(0,.47,.17).scale(1.9,1,1),shin:new Dn(.065,.32,4,10).translate(0,.24,.36).scale(2,1,1),torso:new Dn(.18,.28,6,16).translate(0,.32,0).scale(1,1,.75),head:new qt(.14,20,14).scale(1,1.1,1),hair:new qt(.152,20,10,0,Math.PI*2,0,Math.PI*.55),arm:new Dn(.045,.42,4,10).translate(0,-.25,0),hat:new yi(.1,.3,16).translate(0,.15,0)},o=S=>{let C=new Yn(S,a,n);return C.instanceMatrix.setUsage(Qu),C.frustumCulled=!1,i.scene.add(C),C},r={seat:o(s.seat),thigh:o(s.thigh),shin:o(s.shin),torso:o(s.torso),head:o(s.head),hair:o(s.hair),armL:o(s.arm),armR:o(s.arm),hat:o(s.hat)};r.seat.instanceMatrix.setUsage(Ms),r.thigh.instanceMatrix.setUsage(Ms),r.shin.instanceMatrix.setUsage(Ms);let l=S=>S[Math.floor(Math.random()*S.length)],c=new Ne,u=t.map(([S,C,P],B)=>{let I=new dt,U=S-.25,Y=Math.cos(C)*U,J=-Math.sin(C)*U,se=Math.atan2(-Y,-J);return I.compose(new D(Y,P-.42,J),new dn().setFromAxisAngle(new D(0,1,0),se),new D(1,.92+Math.random()*.16,1)),{base:I,ph:Math.random()*6.28,sp:.7+Math.random()*.6,dl:Math.random(),pr:Math.random(),w:0,kind:null,hairOn:Math.random()<.85,hatOn:!1}}),p=S=>{let C=Gy[S],P=ky[S];u.forEach((B,I)=>{r.torso.setColorAt(I,c.setHex(C&&Math.random()<.6?l(C):l(Fy))),r.armL.setColorAt(I,c),r.armR.setColorAt(I,c),r.thigh.setColorAt(I,c.setHex(l(Oy))),r.shin.setColorAt(I,c),B.skin||(B.skin=l(Hy)),r.head.setColorAt(I,c.setHex(B.skin)),B.hc||(B.hc=l(zy)),r.hair.setColorAt(I,c.setHex(B.hc)),r.seat.setColorAt(I,c.setHex(731770)),B.hatOn=!!P&&Math.random()<.8,r.hat.setColorAt(I,c.setHex(P?l(P):16777215))}),Object.values(r).forEach(B=>{B.instanceColor&&(B.instanceColor.needsUpdate=!0)}),r.hat.visible=!!P},d=new dt;u.forEach((S,C)=>{r.seat.setMatrixAt(C,S.base),r.thigh.setMatrixAt(C,S.base),r.shin.setMatrixAt(C,S.base)}),p(null);let h=null,g=[],_=new dt,m=new dt,f=new dn,M=new On,R=new D,b=new D(1,1,1),w=new dt().makeScale(0,0,0),T=(S,C,P,B,I,U,Y)=>(M.set(B,I,U),f.setFromEuler(M),R.set(S,C,P),Y.compose(R,f,b)),L=0,v=0;function y(S){if(L+=S,v++,!(e&&v%2)){h&&L>h.t0+h.dur+1.2&&(h=null),!h&&g.length&&(h=g.shift());for(let C=0;C<n;C++){let P=u[C],B=0,I=null;if(h){let de=Vy[h.kind],N=L-h.t0-P.dl*de.dl;P.pr<de.p*h.amt&&N>0&&(B=Math.min(1,N/.25)*Math.min(1,Math.max(0,(h.dur-N)/.5+1)),I=h.kind)}P.w+=(B-P.w)*Math.min(1,S*8),I&&(P.kind=I),P.w<.01&&(P.kind=null);let U=P.w,Y=L*P.sp+P.ph,J=Math.sin(Y*1.3)*.01,se=0,F=Math.sin(Y*.6)*.04,k=Math.sin(Y*.9)*.05,j=Math.sin(Y*.37)*.3,ge=-.35,O=.12,G=-.35,X=-.12;if(U>0){let de=P.kind;if(de==="clap"){let N=Math.sin(L*17+P.ph)*.5+.5;ge+=-1*U,G+=-1*U,O+=(.35+.35*N)*U,X-=(.35+.35*N)*U,J+=.02*N*U,j*=1-U}else if(de==="cheer"||de==="wave"){let N=Math.sin(L*9+P.ph);ge+=-2.45*U,G+=-2.45*U,O+=(-.35+.25*N)*U,X-=(-.35-.25*N)*U,J+=Math.abs(Math.sin(L*7+P.ph))*.12*U,se-=.12*U,k-=.2*U,j*=1-U}else if(de==="ooh")ge+=-2.35*U,G+=-2.35*U,O+=.38*U,X-=.38*U,se-=.18*U,k-=.15*U,j*=1-U;else if(de==="laugh"){let N=Math.sin(L*14+P.ph);se+=(.15+.1*N)*U,k+=.25*N*U,ge+=-.2*U,G+=-.2*U,O+=.3*U,X-=.3*U,J+=.015*N*U}}T(0,.5+J,0,se,0,F,m),_.multiplyMatrices(P.base,m),r.torso.setMatrixAt(C,_),T(0,.74,0,k,j,0,m),d.multiplyMatrices(_,m),r.head.setMatrixAt(C,d),P.hairOn?(T(0,.77,-.01,k,j,0,m),d.multiplyMatrices(_,m),r.hair.setMatrixAt(C,d)):r.hair.setMatrixAt(C,w),P.hatOn&&(T(0,.86,0,k,j,-.15,m),d.multiplyMatrices(_,m),r.hat.setMatrixAt(C,d)),T(-.25,.52,0,ge,0,O,m),d.multiplyMatrices(_,m),r.armL.setMatrixAt(C,d),T(.25,.52,0,G,0,X,m),d.multiplyMatrices(_,m),r.armR.setMatrixAt(C,d)}r.torso.instanceMatrix.needsUpdate=r.head.instanceMatrix.needsUpdate=r.hair.instanceMatrix.needsUpdate=r.hat.instanceMatrix.needsUpdate=r.armL.instanceMatrix.needsUpdate=r.armR.instanceMatrix.needsUpdate=!0}}return{count:n,update:y,react(S,C=2.5,P=1,B=!1){let I={kind:S,dur:C,amt:P,t0:L};if(B&&h){g.push(I);return}g.length=0,h=I,u.forEach(U=>U.dl=Math.random())},theme(S){p(S)},meshes:r}}var Do={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var gi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},qy=new Ya(-1,1,1,-1,0,1),Uh=class extends Jt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}},Wy=new Uh,ss=class{constructor(e){this._mesh=new te(Wy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,qy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var No=class extends gi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ki.clone(e.uniforms),this.material=new Kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ss(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var tl=class extends gi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let a=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,r;this.inverse?(o=0,r=1):(o=1,r=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),s.buffers.stencil.setFunc(a.ALWAYS,o,4294967295),s.buffers.stencil.setClear(r),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(a.EQUAL,1,4294967295),s.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),s.buffers.stencil.setLocked(!0)}},Cd=class extends gi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Rd=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ve);this._width=n.width,this._height=n.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new No(Do),this.copyPass.material.blending=Si,this.timer=new Rr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let a=0,s=this.passes.length;a<s;a++){let o=this.passes[a];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}tl!==void 0&&(o instanceof tl?n=!0:o instanceof Cd&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(n,a),this.renderTarget2.setSize(n,a);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Pd=class extends gi{constructor(e,t,n=null,a=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=a,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,n){let a=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=a}};var Um={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Uo=class i extends gi{constructor(e,t=1,n,a){super(),this.strength=t,this.radius=n,this.threshold=a,this.resolution=e!==void 0?new ve(e.x,e.y):new ve(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new en(s,o,{type:pn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new en(s,o,{type:pn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let d=new en(s,o,{type:pn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}let r=Um;this.highPassUniforms=ki.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kt({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ve(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ki.clone(Do.uniforms),this.blendMaterial=new Kt({uniforms:this.copyUniforms,vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader,premultipliedAlpha:!0,blending:fn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new gt,this._fsQuad=new ss(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(n,a);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,a),this.renderTargetsVertical[s].setSize(n,a),this.separableBlurMaterials[s].uniforms.invSize.value=new ve(1/n,1/a),n=Math.round(n/2),a=Math.round(a/2)}render(e,t,n,a,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),r=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let a=[],s=[];for(let o=1;o<e;o+=2){let r=t[o],l=o+1<e?t[o+1]:0,c=r+l;a.push((o*r+(o+1)*l)/c),s.push(c)}return new Kt({defines:{KERNEL_PAIRS:a.length},uniforms:{colorTexture:{value:null},invSize:{value:new ve(.5,.5)},direction:{value:new ve(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:a},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Uo.BlurDirectionX=new ve(1,0);Uo.BlurDirectionY=new ve(0,1);var nl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ld=class extends gi{constructor(){super(),this.isOutputPass=!0,this.uniforms=ki.clone(nl.uniforms),this.material=new mo({name:nl.name,uniforms:this.uniforms,vertexShader:nl.vertexShader,fragmentShader:nl.fragmentShader}),this._fsQuad=new ss(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yt.getTransfer(this._outputColorSpace)===Pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ur?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Br?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_s?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Or?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Rs=class i extends te{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,a=t.color!==void 0?new Ne(t.color):new Ne(8355711),s=t.textureWidth||512,o=t.textureHeight||512,r=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new ui,p=new D,d=new D,h=new D,g=new dt,_=new D(0,0,-1),m=new Vt,f=new D,M=new D,R=new Vt,b=new dt,w=new en(s,o,{samples:c,type:pn}),T=new Kt({name:l.name!==void 0?l.name:"unspecified",uniforms:ki.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=w.texture,T.uniforms.color.value=a,T.uniforms.textureMatrix.value=b,this.material=T,this.onBeforeRender=function(L,v,y){let S=this.getReflectionCamera(y);if(d.setFromMatrixPosition(n.matrixWorld),h.setFromMatrixPosition(y.matrixWorld),g.extractRotation(n.matrixWorld),p.set(0,0,1),p.applyMatrix4(g),f.subVectors(d,h),f.dot(p)>0===!0&&this.forceUpdate===!1)return;f.reflect(p).negate(),f.add(d),g.extractRotation(y.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(h),M.subVectors(d,_),M.reflect(p).negate(),M.add(d),S.position.copy(f),S.up.set(0,1,0),S.up.applyMatrix4(g),S.up.reflect(p),S.lookAt(M),S.far=y.far,S.updateMatrixWorld(),S.projectionMatrix.copy(y.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(S.projectionMatrix),b.multiply(S.matrixWorldInverse),b.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(p,d),u.applyMatrix4(S.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let P=S.projectionMatrix;S.isOrthographicCamera?(R.x=(Math.sign(m.x)+P.elements[8])/P.elements[0],R.y=(Math.sign(m.y)+P.elements[9])/P.elements[5],R.z=-y.far,R.w=1):(R.x=(Math.sign(m.x)+P.elements[8])/P.elements[0],R.y=(Math.sign(m.y)+P.elements[9])/P.elements[5],R.z=-1,R.w=(1+P.elements[10])/P.elements[14]),m.multiplyScalar(2/m.dot(R)),P.elements[2]=m.x,P.elements[6]=m.y,S.isOrthographicCamera?(P.elements[10]=m.z-r,P.elements[14]=m.w-1):(P.elements[10]=m.z+1-r,P.elements[14]=m.w),n.visible=!1;let B=L.getRenderTarget(),I=L.xr.enabled,U=L.shadowMap.autoUpdate;L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(w),L.state.buffers.depth.setMask(!0),L.autoClear===!1&&L.clear(),L.render(v,S),L.xr.enabled=I,L.shadowMap.autoUpdate=U,L.setRenderTarget(B);let Y=y.viewport;Y!==void 0&&L.state.viewport(Y),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),n.material.dispose()},this.getReflectionCamera=function(L){let v=this._reflectionCameras.get(L);return v===void 0&&(v=L.clone(),this._reflectionCameras.set(L,v)),v}}};Rs.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Te=i=>document.querySelector(i),os=location.search,Ri=/[?&]fast=1/.test(os),Pi=/[?&]bot=1/.test(os),Xy=/[?&]shot=1/.test(os),da=Ri?.04:1,At=i=>new Promise(e=>setTimeout(e,i*da)),Yt=i=>i[Math.floor(Math.random()*i.length)],Gn=i=>{i=i.slice();for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i},Me=(i,e,t)=>new D(i,e,t),bt=i=>String(Math.round(i)).replace(/\B(?=(\d{3})+(?!\d))/g,".")+" \u20AC",sl=["A","B","C","D","E","F","G"],Nd={get:i=>{try{return localStorage.getItem(i)}catch{return null}},set:(i,e)=>{try{localStorage.setItem(i,e)}catch{}}},mt=Object.assign({human:"red",redTeam:0,blueTeam:0,redName:"",names:["","","",""],ai:"normal",timeMul:1,jokes:!0,hints:!0,mosca:!0,startBote:5e4},JSON.parse(Nd.get("boom3d_cfg")||"{}")),kh=()=>Nd.set("boom3d_cfg",JSON.stringify(mt)),bn=Object.assign({programs:0,won:0,money:0,botes:0,bote:null},JSON.parse(Nd.get("boom3d_career")||"{}")),Ud=()=>Nd.set("boom3d_career",JSON.stringify(bn)),ni=()=>bn.bote==null?mt.startBote:bn.bote;hm("boom3d_quality");var Dt=pm();Dt.toneMapping=_s;Dt.toneMappingExposure=.95;Dt.outputColorSpace=Gt;Te("#app").appendChild(Dt.domElement);var _t=vm(Dt,{low:at.level==="media"}),Aa=_t.scene,Gi=new vn(55,1,.05,140),km=at.level!=="media";Dt.shadowMap.enabled=km;Dt.shadowMap.type=Mc;var kn=null,Oh=null,il=null,Bo=null,ca={fn:null};if(km){let i=new en(innerWidth,innerHeight,{type:pn,samples:4});if(kn=new Rd(Dt,i),Bo=new Pd(Aa,Gi),kn.addPass(Bo),kn.addPass(new No({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); if (c.r != c.r || c.g != c.g || c.b != c.b) c = vec4(0.0, 0.0, 0.0, 1.0); c.rgb = clamp(c.rgb, 0.0, 24.0); gl_FragColor = c; }"})),Oh=new Uo(new ve(innerWidth/2,innerHeight/2),.5,.45,.92),kn.addPass(Oh),kn.addPass(new Ld),!/[?&]nomirror=1/.test(os)){let e=new Jn(_t.floorShape,96);il=new Rs(e,{clipBias:.003,textureWidth:Math.round(innerWidth*Math.min(at.pr,1.5)*.6),textureHeight:Math.round(innerHeight*Math.min(at.pr,1.5)*.6),color:6974584}),il.rotation.x=-Math.PI/2,il.position.y=-.003,Aa.add(il),_t.floorMat.transparent=!0,_t.floorMat.opacity=.8,_t.floorMat.depthWrite=!0}}window.__post={composer:kn,bloom:Oh,mirror:il};function Gh(i,e,t){let n=innerWidth,a=innerHeight;if(!t){e.aspect=n/a,e.updateProjectionMatrix(),kn?(Bo.scene=i,Bo.camera=e,kn.render(),Bo.scene=Aa,Bo.camera=Gi):Dt.render(i,e);return}Dt.setScissorTest(!0),Dt.setClearColor(0,1),Dt.setViewport(0,0,n,a),Dt.setScissor(0,0,n,a),Dt.clear();for(let s of t){if(!s.cam)continue;let o=Math.round(s.x*n),r=Math.round(s.w*n);s.cam.aspect=r/a,s.cam.updateProjectionMatrix(),Dt.setViewport(o,0,r,a),Dt.setScissor(o,0,r,a),Dt.render(i,s.cam)}Dt.setScissorTest(!1),Dt.setViewport(0,0,n,a)}function Gm(){let i=innerWidth,e=innerHeight;Dt.setSize(i,e),kn&&(kn.setPixelRatio(at.pr),kn.setSize(i,e)),Gi.aspect=i/e,Gi.fov=i/e<1.2?72:52,Gi.updateProjectionMatrix()}addEventListener("resize",Gm);Gm();var Nt=Dm(_t,{lowQuality:at.level==="media"});window.__lights=Nt;var Ci=Nm(_t,{lowQuality:at.level==="media"});Nt.buildGUI(Te("#glights"));Te("#glights").addEventListener("click",i=>{i.target.closest("[data-close]")&&Te("#glights").classList.add("hidden")});Nt.setPalette("#ff5a00","#2a6aff");var xe=Rm(_t),ua=Pm(Aa),Rt=Ih({shirt:16053492,jacket:1331290,pants:1710626,tie:16756736,hair:3810840,skin:15317908,scale:1.04});Rt.userData.name="Presentador";Aa.add(Rt);var $y=[15911328,14264188,13010498,16176568,14724201,9262372],Yy=[2824720,7029795,1118481,13934615,9118976,10066329],tt={red:[],blue:[]},fe={names:{red:"",blue:""},money:{red:0,blue:0},alive:{red:[1,1,1,1],blue:[1,1,1,1]},turn:null};function Ho(i=mt.redTeam,e=mt.blueTeam,t=null){for(let n of["red","blue"]){tt[n].forEach(s=>Aa.remove(s)),tt[n]=[];let a=t&&t[n]?t[n]:Cs[n][(n==="red"?i:e)%Cs[n].length];fe.names[n]=n==="red"&&mt.redName&&!t?mt.redName:a.name,a.p.forEach(([s,o],r)=>{let c=Ih({shirt:(n==="red"?[14162732,16726862,11735583,16734826]:[1794008,3901183,1195936,5939455])[r],pants:[1710628,2763322,2239300,1118481][r],skin:$y[(r*2+(n==="red"?0:3))%6],hair:Yy[(r+(n==="red"?1:3))%6],long:o==="F",beard:o==="M"&&r===2,glasses:r===3&&n==="blue"});c.userData.name=n==="red"&&mt.names[r]&&!t?mt.names[r]:s,c.userData.team=n,c.userData.k=r,c.userData.sex=o,Aa.add(c),tt[n].push(c)})}}var ol=i=>_t.pods[i].g;function rl(i,e){return ol(i).localToWorld(Me((e-1.5)*1,0,-.62))}function Bd(i,e){return ol(i).localToWorld(Me((e-1.5)*.52,0,-2.42))}function rn(i,e){i.rotation.y=Math.atan2(e.x-i.position.x,e.z-i.position.z)}var Ea=new Map;function ii(i,e,t=1.8){return new Promise(n=>Ea.set(i,{to:e.clone(),speed:Ri?40:t,res:n}))}function zo(i=!0){Ea.clear();for(let e of["red","blue"])tt[e].forEach((t,n)=>{let a=!fe.alive[e][n],s=a?Bd(e,n):rl(e,n);t.userData.mood=a?"sit":null,i?(t.position.copy(s),rn(t,a?ht.bomb.clone().setY(0):ol(e).localToWorld(Me((n-1.5)*1,0,3)))):ii(t,s).then(()=>rn(t,ht.bomb.clone().setY(0)))});Rt.position.copy(ht.host),rn(Rt,Me(-1.5,0,9)),Rt.userData.mood=null}function xi(i,e=!1){let t=tt[i].filter((n,a)=>fe.alive[i][a]);return Promise.all(t.map((n,a)=>{let s=Me((a-(t.length-1)/2)*.85,Wn,-1.15);return n.userData.mood=null,e||Ri?(n.position.copy(s),rn(n,Me(0,0,4)),Promise.resolve()):ii(n,s).then(()=>rn(n,Me(0,0,4)))}))}function ha(i){return Promise.all(tt[i].map((e,t)=>{if(!fe.alive[i][t])return Promise.resolve();let n=rl(i,t);return ii(e,n).then(()=>rn(e,ol(i).localToWorld(Me((t-1.5)*1,0,3))))}))}var We={mode:"orbit",pos:Me(0,6,14),look:Me(0,1,0),tPos:Me(0,6,14),tLook:Me(0,1,0),yaw:0,pitch:.3,lerp:2.2,shake:0};function It(i,e,t=!1,n=2.2){t=t||window.__snap||Ri,We.mode="show",We.tPos.copy(i),We.tLook.copy(e),We.lerp=n,t&&(We.pos.copy(i),We.look.copy(e))}function ko(i,e,t,n,a){return new Promise(s=>{We.mode="path",We.path={from:i,to:e,lfrom:t,lto:n,dur:Math.max(.05,a*da),t:0,res:s}})}var Bm=(i,e=3.6,t=2.3)=>{let n=ol(i);return[n.localToWorld(Me(0,t,e)),n.localToWorld(Me(0,1.4,-.6))]},Xe={wide:()=>It(Me(0,5.6,13.6),Me(0,1.9,-2)),high:()=>It(Me(-7.6,8.6,12.4),Me(1.2,.6,-1.6)),ref:()=>It(Me(-7.6,8.6,12.4),Me(1.2,.6,-1.6)),ref2:()=>It(Me(-3.5,5.2,13.5),Me(.5,1.6,-2.5)),ref3:()=>It(Me(-6.8,7.4,11),Me(1.8,1,-2.2)),bomb:()=>It(Me(0,2.35,3.45),Me(0,1.15,.3)),panel:()=>It(Me(0,2.65,2.2),Me(0,1.05,.6)),bombTeam:()=>It(Me(.9,2.2,4.25),Me(0,1.55,-.45)),bombSide:()=>It(Me(3.2,2.3,2.45),Me(0,1.3,0)),team:i=>{let[e,t]=Bm(i);It(e,t)},teamWide:i=>{let[e,t]=Bm(i,6,3);It(e,t)},host:()=>It(ht.host.clone().add(Me(.6,1.75,2.3)),ht.host.clone().add(Me(0,1.55,0))),hostWide:()=>It(ht.host.clone().add(Me(-3,2.4,4.8)),ht.host.clone().add(Me(-.8,1.4,-1.8))),wall:()=>{let i=ht.hex;It(i.clone().multiplyScalar(.42).setY(3.9),i.clone())},logo:()=>{let i=ht.hex;It(i.clone().multiplyScalar(.62).setY(4.4),i.clone())},diamonds:()=>It(Me(0,3.2,4.5),Me(1.5,4.8,-10)),bote:()=>It(Me(0,3,4.75),Me(0,1.05,-.55)),boteSide:()=>It(Me(-3.4,2.5,2.05),Me(0,1,-.45)),caliente:()=>It(Me(0,2.4,6.75),Me(0,1.45,2.05)),aud:()=>It(Me(0,2.4,2.8),Me(-8,2.6,1))},Fd=["ref","wide","bomb","panel","diamonds","hostWide","wall","aud"],Ta={x:0,y:0,keys:{}},Ai=null,nn=null,Id=null;Dt.domElement.addEventListener("pointerdown",i=>{Ai={id:i.pointerId,x:i.clientX,y:i.clientY,x0:i.clientX,y0:i.clientY}});addEventListener("pointermove",i=>{if(!Ai||Ai.id!==i.pointerId)return;let e=i.clientX-Ai.x,t=i.clientY-Ai.y;Ai.x=i.clientX,Ai.y=i.clientY,We.mode==="walk"&&(We.yaw-=e*.006,We.pitch=Math.max(-.3,Math.min(1.1,We.pitch+t*.004)))});addEventListener("pointerup",i=>{if(Ai&&Ai.id===i.pointerId){let e=Math.hypot(i.clientX-Ai.x0,i.clientY-Ai.y0);Ai=null,e<8&&jy(i)}});var Fo=Te("#joy"),Vm=Te("#knob"),Dd=null;Fo.addEventListener("pointerdown",i=>{Dd=i.pointerId,Fo.setPointerCapture(i.pointerId),Wm(i),i.stopPropagation()});Fo.addEventListener("pointermove",i=>{i.pointerId===Dd&&Wm(i)});var qm=i=>{i.pointerId===Dd&&(Dd=null,Ta.x=Ta.y=0,Vm.style.transform="")};Fo.addEventListener("pointerup",qm);Fo.addEventListener("pointercancel",qm);function Wm(i){let e=Fo.getBoundingClientRect(),t=i.clientX-(e.left+e.width/2),n=i.clientY-(e.top+e.height/2),a=Math.hypot(t,n),s=e.width/2-10;a>s&&(t*=s/a,n*=s/a),Vm.style.transform=`translate(${t}px,${n}px)`,Ta.x=t/s,Ta.y=n/s}var Ls=new Set;addEventListener("keydown",i=>{Ta.keys[i.code]=!0,Ls.forEach(e=>e(i))});addEventListener("keyup",i=>{Ta.keys[i.code]=!1});var Xm=matchMedia("(pointer:coarse)").matches;function Is(i){i?(nn=Rt,Id={pos:Rt.position.clone(),rot:Rt.rotation.y},Rt.position.set(0,0,5.5),We.mode="walk",We.yaw=0,We.pitch=.25,Te("#joy").classList.toggle("hidden",!Xm),Ot("Mu\xE9vete con WASD / flechas o el joystick. Arrastra para mirar.",4e3,"")):(nn&&Id&&(nn.position.copy(Id.pos),nn.rotation.y=Id.rot),nn=null,Te("#joy").classList.add("hidden"),Xe.wide())}var Fm=new Pr,Om=new ve,Oo={cable:null};function jy(i){if(!Oo.cable)return;Om.set(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),Fm.setFromCamera(Om,Gi);let e=Fm.intersectObjects(xe.pickables(),!1)[0];e&&Oo.cable(e.object.userData.idx)}var Bh=Te("#sub"),Hm=0;function Ot(i,e,t="Presentador"){Bh.innerHTML=t?`<b>${t}:</b> ${i}`:i,Bh.classList.remove("hidden"),clearTimeout(Hm),Hm=setTimeout(()=>Bh.classList.add("hidden"),e*da)}var Ps=i=>Math.max(1400,i.length*58),wa=null;async function st(i,{extra:e="",who:t="Presentador"}={}){let n=Sm[i];if(!n)return;let a=n+e;wa=Rt,Ot(a,Ps(a)+800,t),await ze.voice("h_"+i,Ps(a)),wa=null}async function Od(i,e,t="Presentador"){wa=Rt,Ot(e,Ps(e)+1500,t),await ze.voice("q_"+i,Ps(e)),wa=null}function Qy(i,e,t){wa=i,Ot(e,t||Ps(e),i.userData.name),setTimeout(()=>{wa===i&&(wa=null)},(t||Ps(e))*da)}function Vi(i,e){let t=document.createElement("div");for(i.userData.team==="blue"&&(t.className="blue"),t.innerHTML=`<b>${i.userData.name}:</b> ${e}`,Te("#chat").appendChild(t),setTimeout(()=>t.remove(),4200*(Ri?.2:1));Te("#chat").children.length>3;)Te("#chat").firstChild.remove();i.userData.talkT=1.6}var Tn=i=>{i==="cheer"?(Ci.react("cheer",4),ze.play("cheer",{volume:.7})):i==="clap"?(Ci.react("clap",3),ze.play("aplausos",{volume:.6})):i==="ooh"?(Ci.react("ooh",2.5),ze.play("ooh",{volume:.8})):i==="laugh"&&(Ci.react("laugh",2.5),ze.play("risas",{volume:.5}))},Ae={mode:"logo",sub:"",data:null};function $m(i){let e=_t.wallTex.userData.g,t=1600,n=640;e.save(),e.fillStyle="#040108",e.fillRect(0,0,t,760),e.save(),e.translate(0,60),e.fillStyle=Ae.bg||"#1a0604",e.fillRect(0,-60,t,60),e.textAlign="center",e.textBaseline="middle";let a=e.createLinearGradient(0,0,0,n);a.addColorStop(0,Ae.bg||"#1a0604"),a.addColorStop(1,"#040108"),e.fillStyle=a,e.fillRect(0,0,t,n),e.save(),e.translate(t/2,n*.55),e.rotate(i*.05);for(let o=0;o<24;o++)e.rotate(Math.PI/12),e.fillStyle=o%2?"rgba(255,120,0,.07)":"rgba(255,40,0,.04)",e.beginPath(),e.moveTo(0,0),e.lineTo(-90,-1200),e.lineTo(90,-1200),e.fill();e.restore();let s=Ae.data;if(Ae.mode==="logo")_t.logo.visible||Ao(e,t/2,n*.47,230,{t:i}),Ae.sub&&(e.font=`900 52px ${Ft}`,e.fillStyle="#ffd34d",e.fillText(Ae.sub,t/2,n*.86));else if(Ae.mode==="text")Ao(e,200,80,90,{t:i,glow:!1}),e.fillStyle="#ffd34d",e.font=`64px ${ei}`,e.fillText(s.title||"",t/2,150,t-420),e.fillStyle="#fff",wi(e,s.text||"",t/2,390,t-220,380,64,800,Ft,5);else if(Ae.mode==="cables"){e.fillStyle="#ffd34d",e.font=`800 34px ${Ft}`,e.fillText(s.title||"",t/2,52),e.fillStyle="#fff",wi(e,s.q,t/2,175,t-180,190,64,900,Ft,3);let o=s.opts.length,r=Math.min(290,(t-120)/o-18);s.opts.forEach((l,c)=>{let u=t/2+(c-(o-1)/2)*(r+18),p=s.state[c];e.fillStyle=p==="cut"?"#1a1a1a":p==="ok"?"#0d7a34":p==="bad"?"#8a0a0a":"#16161e",As(e,u-r/2,330,r,230,22),e.fill(),e.lineWidth=8,e.strokeStyle=Lo[c%7],e.stroke(),e.fillStyle=p==="cut"?"#666":"#fff",wi(e,l,u,445,r-30,190,46,800,Ft,3),p==="cut"&&(e.strokeStyle="#ff3030",e.lineWidth=8,e.beginPath(),e.moveTo(u-r/2+20,345),e.lineTo(u+r/2-20,545),e.stroke())})}else if(Ae.mode==="big")e.fillStyle=s.col||"#fff",e.font=`${s.size||170}px ${ei}`,e.shadowColor=s.glow||"#ff6a00",e.shadowBlur=40,e.fillText(s.big,t/2,n*.45,t-100),e.shadowBlur=0,s.small&&(e.fillStyle="#ffd34d",e.font=`900 56px ${Ft}`,e.fillText(s.small,t/2,n*.8,t-100));else if(Ae.mode==="est")e.fillStyle="#ffd34d",e.font=`800 36px ${Ft}`,e.fillText(s.title,t/2,46),e.fillStyle="#fff",wi(e,s.q,t/2,120,t-160,110,48,900,Ft,2),s.items.forEach((o,r)=>{let l=r%5,c=Math.floor(r/5),u=290,p=120+l*310+u/2-5,d=260+c*170,h=s.state[r];e.fillStyle=h==="ok"?"#0d8a3a":h==="bad"?"#9a0a0a":h==="rev"?"#2a3a2a":"#141a30",As(e,p-u/2,d-65,u,130,18),e.fill(),e.strokeStyle="#5a7aff",e.lineWidth=4,e.stroke(),e.fillStyle="#fff",wi(e,h?o:"?",p,d,u-24,110,h?38:70,800,h?Ft:ei,3)}),e.font=`900 40px ${Ft}`,e.fillStyle=la.red,e.fillText(s.left||"",300,600),e.fillStyle=la.blue,e.fillText(s.right||"",t-300,600);else if(Ae.mode==="cla")e.fillStyle="#d8dce6",e.font=`800 36px ${Ft}`,e.fillText(s.title,t/2,50),e.fillStyle="#fff",wi(e,s.q,t/2,200,t-160,220,70,900,Ft,3),s.opts.forEach((o,r)=>{let l=t/2+(r?380:-380),c=s.state&&s.state[r];e.fillStyle=c==="ok"?"#0d8a3a":c==="bad"?"#9a0a0a":"#2a2c36",As(e,l-340,360,680,150,24),e.fill(),e.strokeStyle="#d8dce6",e.lineWidth=5,e.stroke(),e.fillStyle="#fff",wi(e,o,l,435,640,130,60,900,Ft,2)}),e.font=`900 46px ${Ft}`,e.fillStyle="#ffd34d",e.fillText(s.money||"",t/2,590);else if(Ae.mode==="bote"){e.fillStyle="#ffd34d",e.font=`60px ${ei}`,e.fillText("BOMBA DORADA \xB7 "+(s.bote||""),t/2,60),e.fillStyle="#fff",wi(e,s.q||"",t/2,200,t-160,200,66,900,Ft,3);for(let o=0;o<15;o++){let r=115+o*98,l=440,c=s.minis[o],u=c==="ok"?"#20ff60":c==="pend"?Math.floor(i*4)%2?"#ffd000":"#5a4800":c==="bad"?"#ff2020":c==="cur"?"#ffffff":"#333";e.fillStyle="#111",e.beginPath(),e.arc(r,l,40,0,Math.PI*2),e.fill(),e.lineWidth=8,e.strokeStyle=u,e.stroke(),e.fillStyle="#ffd34d",e.font=`44px ${ei}`,e.fillText(String(o+1),r,l+3)}e.font=`900 44px ${Ft}`,e.fillStyle="#fff",e.fillText(s.round||"",t/2,560)}else if(Ae.mode==="cal")e.fillStyle="#ff9a3a",e.font=`60px ${ei}`,e.fillText("BOMBA CALIENTE",t/2,60),e.fillStyle="#ffd34d",wi(e,s.def||"",t/2,160,t-200,100,54,800,Ft,2),e.fillStyle="#fff",wi(e,s.f||"",t/2,285,t-160,120,84,900,Ft,1),e.font=`900 64px ${Ft}`,e.fillStyle=la.red,e.fillText(`${fe.names.red}: ${s.pts.red}`,t*.27,420,t*.45),e.fillStyle=la.blue,e.fillText(`${fe.names.blue}: ${s.pts.blue}`,t*.73,420,t*.45);else if(Ae.mode==="score"){e.font=`80px ${ei}`,e.fillStyle="#fff",e.fillText(s.title||"MARCADOR",t/2,110);for(let[o,r]of[["red",t*.27],["blue",t*.73]])e.fillStyle=la[o],As(e,r-330,210,660,330,30),e.fill(),e.fillStyle="#fff",e.font=`900 64px ${Ft}`,e.fillText(fe.names[o],r,290,600),e.font=`140px ${ei}`,e.fillText(bt(fe.money[o]),r,440,600)}e.restore(),e.restore(),_t.wallTex.needsUpdate=!0}var Jy={blue:["#2a50d8","#6a9cff","#ff9ad8"],warm:["#b04010","#ff9a5a","#ffe0c0"],gold:["#4a1e00","#c86a10","#ffd890"],violet:["#2a0a6a","#7a4aff","#ff9ad0"],silver:["#2a3040","#9aa8c8","#ffffff"],red:["#5a0008","#ff2030","#ffb0b0"]},Hh={theme:null,text:null};function Ym(i){let e=_t.diaTex.userData.g,t=1024,n=256,a=Ae.mode,s=Ae.data||{},o=Hh.theme||{logo:"blue",text:"blue",est:"violet",cables:"warm",cla:"silver",cal:"warm",bote:"gold",big:s.col==="#ff3a24"?"red":"gold",score:"blue"}[a]||"blue",[r,l,c]=Jy[o],u=e.createLinearGradient(0,0,0,n);u.addColorStop(0,l),u.addColorStop(1,r),e.fillStyle=u,e.fillRect(0,0,t,n);let p=(i*.12%1.4-.2)*t,d=e.createLinearGradient(p-160,0,p+160,0);d.addColorStop(0,"rgba(255,255,255,0)"),d.addColorStop(.5,"rgba(255,255,255,.28)"),d.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=d,e.fillRect(0,0,t,n);let h=Hh.text;if(h==null&&(a==="bote"?h=s.bote:a==="big"&&/€/.test(s.big||"")?h=s.big:(a==="logo"||a==="score")&&(h=bt(fe.bote||ni()))),h){e.save(),e.textAlign="center",e.textBaseline="middle",e.font=`900 200px ${Ft}`;let g=String(h).replace(/ ?€/,"");e.lineJoin="round",e.lineWidth=34,e.strokeStyle="rgba(0,0,0,0.85)",e.strokeText(g,t*.52,n*.55,t*.9),e.fillStyle="#d9d4c8",e.fillText(g,t*.52,n*.55,t*.9),e.restore()}_t.diaInner.opacity=h?.15:.4,_t.diaTex.needsUpdate=!0,_t.diaInner.color.set(c)}function ln(){for(let i of["red","blue"]){let e=_t.pods[i],t=e.front.userData.g,n=1600,a=300;t.clearRect(0,0,n,a);let s=t.createLinearGradient(0,0,0,a);s.addColorStop(0,i==="red"?"#5a0612":"#06205a"),s.addColorStop(1,"#050208"),t.fillStyle=s,t.fillRect(0,0,n,a),t.textAlign="center",t.textBaseline="middle",tt[i].forEach((u,p)=>{let d=n*(p+.5)/4,h=fe.alive[i][p];t.fillStyle=h?i==="red"?"#ff2a44":"#2a8cff":"#2a2a2a",As(t,d-180,70,360,160,20),t.fill(),t.fillStyle=h?"#fff":"#777",t.font=`900 84px ${Ft}`,t.fillText(u.userData.name.toUpperCase(),d,152,330),h||(t.strokeStyle="#ff3030",t.lineWidth=10,t.beginPath(),t.moveTo(d-160,90),t.lineTo(d+160,210),t.stroke())}),t.fillStyle="#ffd34d",t.font=`900 40px ${Ft}`,t.fillText(fe.names[i].toUpperCase(),n/2,270),e.front.needsUpdate=!0;let o=e.screen.userData.g,r=1024,l=512,c=o.createLinearGradient(0,0,0,l);c.addColorStop(0,i==="red"?"#a00a1e":"#0a3aa0"),c.addColorStop(1,"#08020a"),o.fillStyle=c,o.fillRect(0,0,r,l),o.textAlign="center",o.textBaseline="middle",o.fillStyle="#fff",o.font=`900 78px ${Ft}`,o.fillText(fe.names[i].toUpperCase(),r/2,110,r-80),o.font=`190px ${ei}`,o.fillStyle="#ffd34d",o.shadowColor="#ff8a00",o.shadowBlur=30,o.fillText(bt(fe.money[i]),r/2,300,r-80),o.shadowBlur=0,o.font=`900 44px ${Ft}`,o.fillStyle="#fff",o.fillText(fe.alive[i].map(u=>u?"\u25CF":"\u25CB").join("  "),r/2,450),e.screen.needsUpdate=!0}document.querySelectorAll("#score .sc").forEach(i=>{let e=i.classList.contains("red")?"red":"blue";i.querySelector(".n").textContent=fe.names[e],i.querySelector("b").textContent=bt(fe.money[e]),i.querySelector("i").textContent=fe.alive[e].map(t=>t?"\u25CF":"\u25CB").join(""),i.classList.toggle("turn",fe.turn===e)})}function ai(i,e){let t=_t.panelFront.userData.g,n=1200,a=250;if(t.fillStyle="#07070c",t.fillRect(0,0,n,a),t.textAlign="center",t.textBaseline="middle",!i){Ao(t,n/2,a/2,140,{glow:!1}),_t.panelFront.needsUpdate=!0;return}let s=i.length,o=n/s;i.forEach((r,l)=>{let c=o*(l+.5);t.fillStyle=e[l]==="cut"?"#1a1a1a":"#14141c",As(t,c-o/2+8,14,o-16,a-28,16),t.fill(),t.fillStyle=Lo[l%7],t.fillRect(c-o/2+8,14,o-16,14),t.fillStyle=e[l]==="cut"?"#666":"#fff",wi(t,r,c,140,o-36,180,44,800,Ft,3)}),_t.panelFront.needsUpdate=!0}var Zy=new Lr,ti=0,Fh=0,zh=new Set,Go=i=>(zh.add(i),()=>zh.delete(i)),al=null,Ca=i=>{al=i},zm=Me(0,0,0);function jm(){let i=Math.min(Ri?.5:.1,Zy.getDelta());ti+=i;let e=!1;if(We.mode==="walk"&&nn){let n=Ta.x,a=Ta.y,s=Ta.keys;(s.KeyW||s.ArrowUp)&&(a-=1),(s.KeyS||s.ArrowDown)&&(a+=1),(s.KeyA||s.ArrowLeft)&&(n-=1),(s.KeyD||s.ArrowRight)&&(n+=1);let o=Math.hypot(n,a);if(o>.1){let l=3.4*Math.min(1,o)*i/o,c=-Math.sin(We.yaw),u=-Math.cos(We.yaw),p=Math.cos(We.yaw),d=-Math.sin(We.yaw),h=(c*-a+p*n)*l,g=(u*-a+d*n)*l,_=nn.position.x+h,m=nn.position.z+g;Td(_t,_,m)?Td(_t,_,nn.position.z)?Td(_t,nn.position.x,m)||(nn.position.z=m):nn.position.x=_:(nn.position.x=_,nn.position.z=m),nn.rotation.y=Math.atan2(h,g),e=!0}nn.position.y=Ed(nn.position.x,nn.position.z);let r=4*Math.cos(We.pitch*.6);We.tPos.set(nn.position.x+Math.sin(We.yaw)*r,1.7+We.pitch*2.6,nn.position.z+Math.cos(We.yaw)*r),We.tLook.set(nn.position.x,1.4,nn.position.z),We.pos.lerp(We.tPos,Math.min(1,i*10)),We.look.lerp(We.tLook,Math.min(1,i*10))}else if(We.mode==="orbit"){let n=ti*.06;We.pos.set(Math.sin(n)*12.5,5.2+Math.sin(ti*.2),Math.cos(n)*12.5+1),We.look.set(0,2.2,-1.5)}else if(We.mode==="path"&&We.path){let n=We.path;n.t+=i/n.dur;let a=Math.min(1,n.t),s=a*a*(3-2*a);We.pos.copy(n.from).lerp(n.to,s),We.look.copy(n.lfrom).lerp(n.lto,s),a>=1&&(We.mode="show",We.tPos.copy(n.to),We.tLook.copy(n.lto),n.res())}else We.pos.lerp(We.tPos,Math.min(1,i*We.lerp)),We.look.lerp(We.tLook,Math.min(1,i*We.lerp));if(Gi.position.copy(We.pos),We.shake>0){We.shake=Math.max(0,We.shake-i);let n=We.shake*.12;Gi.position.add(Me((Math.random()-.5)*n,(Math.random()-.5)*n,(Math.random()-.5)*n))}Gi.lookAt(We.look);for(let[n,a]of Ea){let s=a.to.clone().sub(n.position);s.y=0;let o=s.length();if(o<.05){n.position.x=a.to.x,n.position.z=a.to.z,n.position.y=Ed(n.position.x,n.position.z),Ea.delete(n),a.res();continue}s.normalize(),n.position.addScaledVector(s,Math.min(o,a.speed*i)),n.rotation.y=Math.atan2(s.x,s.z),n.position.y=Ed(n.position.x,n.position.z)}let t=[Rt,...tt.red,...tt.blue];for(let n of t)n.userData.talkT>0&&(n.userData.talkT-=i),Am(n,i,Ea.has(n)||n===nn&&e,wa===n||n.userData.talkT>0);if(al&&xe.mini.visible){al.userData.armR.userData.hand.getWorldPosition(zm);let n=al.userData.armL.userData.hand.getWorldPosition(Me(0,0,0));xe.mini.position.copy(zm.lerp(n,.5)).add(Me(0,.08,0))}xe.update(i,ti),ua.update(i),Ci.update(i),Nt.update(i),zh.forEach(n=>n(i)),_t.logoSpark.scale.setScalar(.8+.2*Math.sin(ti*5)+.05*Math.random()),_t.logoSpark.material.rotation=ti*.5,_t.logo.rotation.y=Math.sin(ti*.4)*.12,_t.logo.visible=Ae.mode==="logo"&&!_t.logoHidden,_t.halo.material.color.setHSL(.04+.03*Math.sin(ti*2),1,.5),Fh+=i,Fh>.1&&(Fh=0,$m(ti),Ym(ti),(xe.time!=null||xe.dirty)&&(xe.drawDisplay(),xe.dirty=!1)),mm(i,()=>{kn&&(kn.setPixelRatio(at.pr),kn.setSize(innerWidth,innerHeight))}),(ti*2|0)%2===0&&(Te("#qinfo").textContent=gm());for(let n of _t.beams)n.g.rotation.x=Math.sin(ti*.35+n.ph)*.35,n.g.rotation.z=Math.cos(ti*.27+n.ph)*.35+(n.a>Math.PI?.15:-.15);ca.fn?ca.fn(i):kn?kn.render():Dt.render(Aa,Gi),requestAnimationFrame(jm)}function Vh(){requestAnimationFrame(jm)}var CT=Math.PI*2,pt={s1:0,s2:1,s3:2.4,cut:4.05,s4:4.1,boom:4.6,logo:5,flashSet:6.38,end:6.5},Ky={0:"abcdef",1:"bc",2:"abdeg",3:"abcdg",4:"bcfg",5:"acdfg",6:"acdefg",7:"abc",8:"abcdefg",9:"abcdfg"};function e1(i,e,t,n,a,s,o,r){let l=a*.18,c=a*.12,u=(h,g)=>[t+h+c*(1-g/s),n+g],p={a:[[l,0],[a-l,0],[a-l*1.5,l],[l*1.5,l]],d:[[l*1.5,s-l],[a-l*1.5,s-l],[a-l,s],[l,s]],g:[[l,s/2-l/2],[a-l,s/2-l/2],[a-l*.5,s/2],[a-l,s/2+l/2],[l,s/2+l/2],[l*.5,s/2]],f:[[0,l],[l,l*1.5],[l,s/2-l],[0,s/2-l/2]],b:[[a,l],[a,s/2-l/2],[a-l,s/2-l],[a-l,l*1.5]],e:[[0,s/2+l/2],[l,s/2+l],[l,s-l*1.5],[0,s-l]],c:[[a,s/2+l/2],[a,s-l],[a-l,s-l*1.5],[a-l,s/2+l]]},d=Ky[e]||"";for(let h of"abcdefg")i.fillStyle=d.includes(h)?o:r,i.beginPath(),p[h].forEach(([g,_],m)=>{let[f,M]=u(g,_);m?i.lineTo(f,M):i.moveTo(f,M)}),i.closePath(),i.fill()}function Wh(i,e,t,n){i.fillStyle="#060203",i.fillRect(0,0,e,t);let a=Math.max(0,n),s=`00${String(Math.floor(a)).padStart(2,"0")}${String(Math.floor(a%1*100)).padStart(2,"0")}`,o=e/9.6,r=t*.72,l=t*.14,c=e*.05;i.shadowColor="#ff2010",i.shadowBlur=t*.12;for(let u=0;u<6;u++)e1(i,s[u],c,l,o,r,"#ff3a22","rgba(70,8,6,.55)"),c+=o*1.32,(u===1||u===3)&&(i.fillStyle="#ff3a22",i.fillRect(c-o*.12,l+r*.28,o*.14,o*.14),i.fillRect(c-o*.12,l+r*.66,o*.14,o*.14),c+=o*.3);i.shadowBlur=0}var t1=i=>Math.max(0,9.19-i/pt.boom*9.19);function Qm(i,e,t,n=8){let a=Kn(512,512,(s,o,r)=>{s.fillStyle=i,s.fillRect(0,0,o,r);let l=o/n;for(let c=-1;c<=2*n+1;c++)for(let u=-1;u<=n;u++){let p=u*l+(Math.abs(c)%2?l/2:0),d=c*l/2*1+l/2;s.fillStyle=e,s.beginPath(),s.moveTo(p,d-l/2*.92),s.lineTo(p+l/2*.92,d),s.lineTo(p,d+l/2*.92),s.lineTo(p-l/2*.92,d),s.closePath(),s.fill(),s.fillStyle=t,s.beginPath(),s.moveTo(p,d-l*.22),s.lineTo(p+l*.22,d),s.lineTo(p,d+l*.22),s.lineTo(p-l*.22,d),s.closePath(),s.fill()}},{k:2});return a.wrapS=a.wrapT=za,a}function Xh(i){let e={},t=new ya;t.background=new Ne(1181700),t.fog=new ms(1181700,14,40);let n=new es(i);t.environment=n.fromScene(new To,.03).texture,t.environmentIntensity=.5;let a=new vn(40,16/9,.02,120),s=a.clone(),o=a.clone();t.add(new vs(16767136,2101256,.35));let r=new $a(16773336,32,30,.42,.6,1.3);r.position.set(1.5,8,4),r.target.position.set(0,1,0),r.castShadow=!!at&&at.level!=="media",r.shadow.mapSize.set(1024,1024),r.shadow.radius=5,t.add(r,r.target);let l=new ja(16754784,1.2);l.position.set(-6,4,-6),t.add(l);let c=Qm("#1a0c05","#6a3a1c","#a8683a");c.repeat.set(9,2);let u=new te(new wt(16,16,14,96,1,!0,Math.PI*.55,Math.PI*.9),new Wt({map:c,side:hn,roughness:.55,metalness:.4,emissive:2757640,emissiveMap:c,emissiveIntensity:.6}));e.wall=u,u.position.set(0,6,4),t.add(u);let p=Qm("#2a1408","#5e3418","#8a5428",10);p.repeat.set(10,10);let d=new te(new yn(60,60),new Mn({map:p,roughness:.12,metalness:.3,clearcoat:1,transparent:!0,opacity:.78}));d.rotation.x=-Math.PI/2,d.receiveShadow=!0,t.add(d);let h=null;at.level!=="media"&&(h=new Rs(new yn(60,60),{clipBias:.003,textureWidth:1024,textureHeight:1024,color:8016948}),h.rotation.x=-Math.PI/2,h.position.y=-.002,t.add(h));let g=new Et;g.position.set(0,1,0),t.add(g);let _=new Mn({color:15264754,metalness:1,roughness:.1,clearcoat:1,clearcoatRoughness:.05}),m=new te(new qt(1,128,96),_);m.castShadow=!0,g.add(m);let f=new te(new Zt(1.01,.03,16,128),new Wt({color:9076848,metalness:1,roughness:.3}));f.rotation.x=Math.PI/2,g.add(f);let M=Kn(640,180,null,{dynamic:!0,k:3}),R=new te(new Tt(1,.3,.12),new Wt({color:1381658,metalness:.7,roughness:.3}));R.position.set(0,.36,.9),R.rotation.x=-.38,g.add(R);let b=new te(new yn(.94,.26),new gt({map:M,toneMapped:!1}));b.position.z=.062,R.add(b);let w=new te(new wt(.28,.34,.2,48),_);w.position.y=1,g.add(w);let T=new te(new Zt(.55,.08,16,64),_);T.rotation.x=Math.PI/2,T.position.set(0,.06,0),t.add(T);let L=[14163996,2142272,8006344,16742928,16764944],v=L.map(Q=>new Mn({color:Q,roughness:.28,clearcoat:.9,clearcoatRoughness:.15})),y=4,S=[],C=[];L.forEach((Q,ie)=>{var E;let pe=(ie-2)*.13,ye=[P(pe*.8,2.1,0),P(pe*1.6,2.45,.35),P(pe*3,1.5,1.4),P(pe*2.6,.09,2.6),P(pe*1.2,.09,y),P(pe*2.2+Math.sin(ie)*.3,.09,7),P(pe*5+Math.cos(ie)*.6,.09,14)],Ge=new jn(ye,!1,"catmullrom",.4),De=200,Ze=[],He=[];for(let x=0;x<=De;x++){let H=Ge.getPoint(x/De);(E=H.z<y-.05?Ze:H.z>y+.05?He:null)==null||E.push(H)}let z=new te(new Mi(new jn(Ze),160,.055,16),v[ie]);z.castShadow=!0,t.add(z),C.push(z);let lt=new te(new Mi(new jn(He),100,.055,16),v[ie]);lt.castShadow=!0,t.add(lt),S.push(lt);let Re=new te(new wt(.07,.07,.16,20),_);Re.position.set(pe*.8,2.08,0),g.parent.add(Re)});function P(Q,ie,pe){return new D(Q,ie,pe)}let B=new Mn({color:12615744,metalness:1,roughness:.22,clearcoat:.6}),I=Q=>{let ie=new Qn;ie.moveTo(0,0),ie.quadraticCurveTo(1.4,.16*Q,2.6,.02*Q),ie.lineTo(2.6,-.02*Q),ie.quadraticCurveTo(1.2,-.08*Q,0,-.12*Q),ie.lineTo(-.9,-.18*Q),ie.quadraticCurveTo(-1.6,-.5*Q,-2,-.2*Q),ie.lineTo(-1.95,-.05*Q),ie.lineTo(-.9,0),ie.closePath();let pe=new te(new Oi(ie,{depth:.06,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelSegments:3}),B);pe.castShadow=!0;let ye=new Et;return ye.add(pe),pe.position.z=Q>0?0:.07,ye},U=new Et,Y=I(1),J=I(-1);U.add(Y,J);let se=new te(new wt(.08,.08,.2,24),_);se.rotation.x=Math.PI/2,se.position.z=.05,U.add(se),U.scale.setScalar(.55),t.add(U);let F=260,k=new Yn(new qt(.03,6,4),new gt({color:16769184,toneMapped:!1}),F);t.add(k);let j=[];for(let Q=0;Q<F;Q++){let ie=new D(Math.random()-.5,Math.random()*.8-.1,Math.random()*.9+.1).normalize();j.push([ie,4+Math.random()*9])}let ge=new Hn(new Ln({map:Co(),blending:fn,depthWrite:!1,color:16773312,toneMapped:!1}));t.add(ge);let O=(()=>{let Q=document.createElement("canvas");Q.width=Q.height=128;let ie=Q.getContext("2d"),pe=ie.createRadialGradient(64,64,0,64,64,64);pe.addColorStop(0,"rgba(230,220,210,.9)"),pe.addColorStop(1,"rgba(230,220,210,0)"),ie.fillStyle=pe,ie.fillRect(0,0,128,128);let ye=new In(Q);return ye.colorSpace=Gt,ye})(),G=[];for(let Q=0;Q<18;Q++){let ie=new Hn(new Ln({map:O,transparent:!0,depthWrite:!1,color:12101784}));ie.userData.d=new D(Math.random()-.5,Math.random()*.6,Math.random()*.8+.2).normalize(),t.add(ie),G.push(ie)}let X=Ch({scale:1.25});X.position.set(0,1.55,1),t.add(X);let de=X.userData.flare,N=new pi(16769200,3,10,1.4);N.position.set(1.5,3,4),t.add(N);let q=new dt,le=new dn,Z=new D(1,1,1),ne=new D(0,0,0),he=(Q,ie,pe)=>{let ye=Math.min(1,Math.max(0,(pe-Q)/(ie-Q)));return ye*ye*(3-2*ye)},Je=-1,ce={scene:t,cam:a,camB:s,camC:o,mirror:h};return ce.update=Q=>{let ie=t1(Q),pe=Math.round(ie*100);pe!==Je&&(Je=pe,Wh(M.userData.g,640,180,ie),M.needsUpdate=!0);let ye=Q>=pt.cut,Ge=Q>=pt.boom,De=Q>=pt.logo;g.visible=!De,T.visible=!De,C.forEach(Re=>Re.visible=!De),S.forEach((Re,E)=>{Re.visible=!De;let x=ye?he(pt.cut,pt.cut+.4,Q):0;Re.position.set((E-2)*.05*x,0,.25*x),Re.rotation.y=(E-2)*.02*x}),t.children.forEach(Re=>{Re.geometry&&Re.geometry.type==="CylinderGeometry"&&Re!==u&&Re.position.y>2&&(Re.visible=!De)});let Ze=Q>pt.s3-.05&&Q<pt.s4+.1;if(U.visible=Ze&&!De,Ze){let Re=he(pt.s3,pt.cut-.25,Q);U.position.set(.15+(1-Re)*1.5,.32,y),U.rotation.set(0,Math.PI*.5+.25,.08);let E=Q<pt.cut-.12?.42:.42*(1-he(pt.cut-.12,pt.cut,Q));Y.rotation.z=E,J.rotation.z=-E}let He=Q-pt.boom,z=Ge&&!De;if(ge.visible=z,k.visible=Ge&&He<1.2,G.forEach(Re=>Re.visible=z),Ge){ge.position.set(0,1.2,.8),ge.scale.setScalar(1+He*14),ge.material.opacity=Math.max(0,.8-He*2.2);for(let Re=0;Re<F;Re++){let[E,x]=j[Re],H=E.clone().multiplyScalar(x*He).add(P(0,1.1-2*He*He,.8));q.compose(H,le,He<1.2?Z:ne),k.setMatrixAt(Re,q)}k.instanceMatrix.needsUpdate=!0,G.forEach((Re,E)=>{Re.position.copy(Re.userData.d).multiplyScalar(.5+He*3).add(P(0,1.2,.8)),Re.scale.setScalar(1+He*5),Re.material.opacity=Math.max(0,.8-He*1.6)})}X.visible=De,de.material.opacity=.4+.2*Math.sin(Q*9),de.scale.setScalar(.7+.5*he(pt.logo,pt.logo+.6,Q)+.2*Math.sin(Q*7)),X.rotation.set(0,Math.sin(Q*1.2)*.12,0),u.material.emissive.setHex(De?12613688:2757640),u.material.emissiveIntensity=De?.75:.45,r.intensity=De?14:32,t.fog.far=De?70:40;let lt=new D;if(Q<pt.s2){let Re=Q/pt.s2;a.fov=26,a.position.set(.38-Re*.1,1.62,1.72-Re*.12),lt.set(-.05,1.36,.9)}else if(Q<pt.s3){let Re=he(pt.s2,pt.s3,Q);a.fov=48,a.position.set(.12,.32+Re*.2,2.6+Re*4.2),lt.set(0,1.5-Re*.2,0)}else if(Q<pt.s4){let Re=(Q-pt.s3)/(pt.s4-pt.s3);a.fov=38,a.position.set(1+Re*.2,.42,y+1.35),lt.set(.1,.14,y-.1)}else if(Q<pt.logo)a.fov=44,a.position.set(0,3.3,1.1),lt.set(0,1.9,0),Ge&&(a.position.set(0,1.4,4.2+He*2),lt.set(0,1.2,0));else{let Re=he(pt.logo,pt.flashSet-.5,Q),E=he(pt.flashSet-.45,pt.flashSet,Q);a.fov=40,a.position.set(-.5+Re*.4,1.4-Re*.15,6.8-Re*1.2-E*3.6),lt.set(.1,1.5,1)}return a.lookAt(lt),a.updateProjectionMatrix(),s.fov=22,s.position.set(.05,1.08,1.85),s.lookAt(0,1.06,.97),s.updateProjectionMatrix(),o.fov=40,o.position.set(.2,3.4,1.4),o.lookAt(0,2,0),o.updateProjectionMatrix(),Q>=pt.s3&&Q<pt.s4?[{timer:ie,x:0,w:.34},{cam:a,x:.345,w:.655}]:Q>=pt.s4&&Q<pt.boom?[{timer:ie,x:0,w:.33},{cam:o,x:.335,w:.33},{timer:ie,x:.67,w:.33}]:null},ce}var Hd={pools:{general:{cable:[{q:"\xBFCu\xE1l es el r\xEDo m\xE1s largo de la pen\xEDnsula ib\xE9rica?",o:["Tajo","Ebro","Duero","Guadalquivir","Mi\xF1o"],d:0,cat:"Geograf\xEDa",id:"geca0"},{q:"\xBFCu\xE1ntos lados tiene un hex\xE1gono?",o:["Seis","Cinco","Siete","Ocho","Nueve"],d:0,cat:"Cultura general",id:"geca1"},{q:"\xBFQu\xE9 planeta es conocido como el planeta rojo?",o:["Marte","Venus","J\xFApiter","Mercurio","Saturno"],d:0,cat:"Ciencia y naturaleza",id:"geca2"},{q:"\xBFEn qu\xE9 ciudad est\xE1 la Sagrada Familia?",o:["Barcelona","Madrid","Valencia","Sevilla","Bilbao"],d:0,cat:"Geograf\xEDa",id:"geca3"},{q:"\xBFQu\xE9 instrumento tiene teclas blancas y negras?",o:["Piano","Viol\xEDn","Flauta","Arpa","Trompeta"],d:0,cat:"Cultura general",id:"geca4"},{q:"\xBFCu\xE1l es el oc\xE9ano m\xE1s grande del mundo?",o:["Pac\xEDfico","Atl\xE1ntico","\xCDndico","\xC1rtico","Ant\xE1rtico"],d:0,cat:"Geograf\xEDa",id:"geca5"},{q:"\xBFDe qu\xE9 color es la clorofila?",o:["Verde","Azul","Amarilla","Roja","Morada"],d:0,cat:"Cultura general",id:"geca6"},{q:"\xBFQu\xE9 animal es el rey de la sabana seg\xFAn la tradici\xF3n?",o:["Le\xF3n","Elefante","Jirafa","Cebra","Hipop\xF3tamo"],d:0,cat:"Ciencia y naturaleza",id:"geca7"},{q:"\xBFCu\xE1ntos minutos tiene una hora?",o:["Sesenta","Cien","Treinta","Cuarenta","Noventa"],d:0,cat:"Cultura general",id:"geca8"},{q:"\xBFQu\xE9 idioma se habla oficialmente en Brasil?",o:["Portugu\xE9s","Espa\xF1ol","Ingl\xE9s","Franc\xE9s","Italiano"],d:0,cat:"Cultura general",id:"geca9"},{q:"\xBFEn qu\xE9 continente est\xE1 Egipto?",o:["\xC1frica","Asia","Europa","Ocean\xEDa","Am\xE9rica"],d:0,cat:"Geograf\xEDa",id:"geca10"},{q:"\xBFQui\xE9n escribi\xF3 \xABDon Quijote de la Mancha\xBB?",o:["Miguel de Cervantes","Lope de Vega","Calder\xF3n de la Barca","Quevedo","G\xF3ngora"],d:0,cat:"Arte y letras",id:"geca11"},{q:"\xBFQu\xE9 gas respiramos para vivir?",o:["Ox\xEDgeno","Helio","Nitr\xF3geno","Hidr\xF3geno","Ne\xF3n"],d:0,cat:"Ciencia y naturaleza",id:"geca12"},{q:"\xBFCu\xE1l es la capital de Italia?",o:["Roma","Mil\xE1n","N\xE1poles","Tur\xEDn","Florencia"],d:0,cat:"Geograf\xEDa",id:"geca13"},{q:"\xBFCu\xE1ntas patas tiene una ara\xF1a?",o:["Ocho","Seis","Diez","Cuatro","Doce"],d:0,cat:"Ciencia y naturaleza",id:"geca14"},{q:"\xBFQu\xE9 fruta es t\xEDpica de Canarias y se exporta mucho?",o:["Pl\xE1tano","Naranja","Fresa","Manzana","Cereza"],d:0,cat:"Cultura general",id:"geca15"},{q:"\xBFQu\xE9 deporte practica un tenista?",o:["Tenis","Golf","P\xE1del","B\xE1dminton","Squash"],d:0,cat:"Deportes y ocio",id:"geca16"},{q:"\xBFCu\xE1l es el metal de las medallas de primer puesto?",o:["Oro","Plata","Bronce","Cobre","Platino"],d:0,cat:"Ciencia y naturaleza",id:"geca17"},{q:"\xBFQu\xE9 se celebra el 25 de diciembre?",o:["Navidad","Reyes","A\xF1o Nuevo","San Juan","Todos los Santos"],d:0,cat:"Cultura general",id:"geca18"},{q:"\xBFQu\xE9 \xF3rgano bombea la sangre?",o:["Coraz\xF3n","H\xEDgado","Pulm\xF3n","Ri\xF1\xF3n","Est\xF3mago"],d:0,cat:"Ciencia y naturaleza",id:"geca19"},{q:"\xBFCu\xE1l es la moneda oficial de Espa\xF1a?",o:["Euro","Peseta","D\xF3lar","Libra","Franco"],d:0,cat:"Cultura general",id:"geca20"},{q:"\xBFQu\xE9 ave es s\xEDmbolo de la paz?",o:["Paloma","\xC1guila","Cuervo","Gorri\xF3n","Gaviota"],d:0,cat:"Ciencia y naturaleza",id:"geca21"},{q:"\xBFEn qu\xE9 pa\xEDs est\xE1n las pir\xE1mides de Guiza?",o:["Egipto","M\xE9xico","Per\xFA","Sud\xE1n","Grecia"],d:0,cat:"Geograf\xEDa",id:"geca22"},{q:"\xBFCu\xE1l es el resultado de 7 \xD7 8?",o:["56","54","64","48","58"],d:0,cat:"Cultura general",id:"geca23"},{q:"\xBFQu\xE9 estaci\xF3n del a\xF1o empieza en junio en Espa\xF1a?",o:["Verano","Primavera","Oto\xF1o","Invierno","Ninguna"],d:0,cat:"Historia",id:"geca24"},{q:"\xBFCu\xE1l es la capital de Francia?",o:["Par\xEDs","Lyon","Marsella","Niza","Burdeos"],d:0,cat:"Geograf\xEDa",id:"geca25"},{q:"\xBFQu\xE9 pintor cre\xF3 \xABLas Meninas\xBB?",o:["Vel\xE1zquez","Goya","El Greco","Murillo","Zurbar\xE1n"],d:0,cat:"Arte y letras",id:"geca26"},{q:"\xBFCu\xE1ntos jugadores tiene un equipo de f\xFAtbol en el campo?",o:["Once","Diez","Doce","Nueve","Siete"],d:0,cat:"Deportes y ocio",id:"geca27"},{q:"\xBFC\xF3mo se llama la cr\xEDa de la vaca?",o:["Ternero","Potro","Cordero","Cabrito","Lech\xF3n"],d:0,cat:"Ciencia y naturaleza",id:"geca28"},{q:"\xBFQu\xE9 mar ba\xF1a Valencia?",o:["Mediterr\xE1neo","Cant\xE1brico","Atl\xE1ntico","Negro","B\xE1ltico"],d:0,cat:"Geograf\xEDa",id:"geca29"},{q:"\xBFQu\xE9 famoso detective viv\xEDa en Baker Street?",o:["Sherlock Holmes","H\xE9rcules Poirot","Philip Marlowe","Sam Spade","Colombo"],d:0,cat:"Arte y letras",id:"geca30"},{q:"\xBFCu\xE1l es el animal terrestre m\xE1s r\xE1pido?",o:["Guepardo","Caballo","Avestruz","Gacela","Liebre"],d:0,cat:"Ciencia y naturaleza",id:"geca31"},{q:"\xBFQu\xE9 parte de la planta absorbe el agua del suelo?",o:["Ra\xEDz","Hoja","Flor","Tallo","Fruto"],d:0,cat:"Ciencia y naturaleza",id:"geca32"},{q:"\xBFCu\xE1l es la comunidad aut\xF3noma m\xE1s extensa de Espa\xF1a?",o:["Castilla y Le\xF3n","Andaluc\xEDa","Castilla-La Mancha","Arag\xF3n","Extremadura"],d:0,cat:"Geograf\xEDa",id:"geca33"},{q:"\xBFEn qu\xE9 deporte se usa un \xABtee\xBB?",o:["Golf","B\xE9isbol","Cr\xEDquet","Hockey","Polo"],d:0,cat:"Deportes y ocio",id:"geca34"},{q:"\xBFQu\xE9 cient\xEDfico formul\xF3 la teor\xEDa de la relatividad?",o:["Albert Einstein","Isaac Newton","Galileo Galilei","Niels Bohr","Stephen Hawking"],d:0,cat:"Cultura general",id:"geca35"},{q:"\xBFQu\xE9 tipo de animal es una ballena?",o:["Mam\xEDfero","Pez","Reptil","Anfibio","Molusco"],d:0,cat:"Ciencia y naturaleza",id:"geca36"},{q:"\xBFCu\xE1l es el pa\xEDs m\xE1s poblado de Am\xE9rica del Sur?",o:["Brasil","Argentina","Colombia","Per\xFA","Chile"],d:0,cat:"Geograf\xEDa",id:"geca37"},{q:"\xBFQu\xE9 color se obtiene mezclando azul y amarillo?",o:["Verde","Naranja","Morado","Marr\xF3n","Rosa"],d:0,cat:"Cultura general",id:"geca38"},{q:"\xBFCu\xE1l es la lengua cooficial de Galicia?",o:["Gallego","Asturiano","Catal\xE1n","Euskera","Aran\xE9s"],d:0,cat:"Cultura general",id:"geca39"},{q:"\xBFCu\xE1ntos d\xEDas tiene un a\xF1o bisiesto?",o:["366","365","364","360","367"],d:0,cat:"Historia",id:"geca40"},{q:"\xBFQu\xE9 edificio de Granada es Patrimonio de la Humanidad?",o:["La Alhambra","La Mezquita","La Giralda","El Escorial","El Pilar"],d:0,cat:"Cultura general",id:"geca41"},{q:"\xBFQu\xE9 vitamina aporta principalmente el sol?",o:["Vitamina D","Vitamina C","Vitamina A","Vitamina B12","Vitamina K"],d:0,cat:"Ciencia y naturaleza",id:"geca42"},{q:"\xBFCu\xE1l es la capital de Portugal?",o:["Lisboa","Oporto","Co\xEDmbra","Braga","Faro"],d:0,cat:"Geograf\xEDa",id:"geca43"},{q:"\xBFQu\xE9 hueso es el m\xE1s largo del cuerpo humano?",o:["F\xE9mur","Tibia","H\xFAmero","Peron\xE9","Radio"],d:0,cat:"Ciencia y naturaleza",id:"geca44"},{q:"\xBFQui\xE9n pint\xF3 \xABLa Gioconda\xBB?",o:["Leonardo da Vinci","Miguel \xC1ngel","Rafael","Botticelli","Tiziano"],d:0,cat:"Arte y letras",id:"geca45"},{q:"\xBFEn qu\xE9 a\xF1o lleg\xF3 el hombre a la Luna por primera vez?",o:["1969","1965","1971","1959","1975"],d:1,cat:"Ciencia y naturaleza",id:"geca46"},{q:"\xBFCu\xE1l es el elemento qu\xEDmico de s\xEDmbolo \xABFe\xBB?",o:["Hierro","Fl\xFAor","F\xF3sforo","Francio","Fermio"],d:1,cat:"Ciencia y naturaleza",id:"geca47"},{q:"\xBFQu\xE9 escritor cre\xF3 el personaje de Macondo y los Buend\xEDa?",o:["Gabriel Garc\xEDa M\xE1rquez","Mario Vargas Llosa","Julio Cort\xE1zar","Isabel Allende","Juan Rulfo"],d:1,cat:"Arte y letras",id:"geca48"},{q:"\xBFCu\xE1l es la capital de Australia?",o:["Canberra","S\xEDdney","Melbourne","Perth","Brisbane"],d:1,cat:"Geograf\xEDa",id:"geca49"},{q:"\xBFCu\xE1ntos huesos tiene aproximadamente un adulto humano?",o:["206","186","226","256","196"],d:1,cat:"Ciencia y naturaleza",id:"geca50"},{q:"\xBFQu\xE9 compositor escribi\xF3 \xABLas cuatro estaciones\xBB?",o:["Vivaldi","Bach","Mozart","Beethoven","Haydn"],d:1,cat:"Arte y letras",id:"geca51"},{q:"\xBFEn qu\xE9 a\xF1o cay\xF3 el muro de Berl\xEDn?",o:["1989","1991","1987","1985","1993"],d:1,cat:"Historia",id:"geca52"},{q:"\xBFCu\xE1l es el planeta con m\xE1s lunas conocidas a d\xEDa de hoy?",o:["Saturno","J\xFApiter","Urano","Neptuno","Marte"],d:1,cat:"Ciencia y naturaleza",id:"geca53"},{q:"\xBFQu\xE9 pintor espa\xF1ol firm\xF3 el \xABGuernica\xBB?",o:["Picasso","Dal\xED","Mir\xF3","Sorolla","T\xE0pies"],d:1,cat:"Arte y letras",id:"geca54"},{q:"\xBFCu\xE1l es el pa\xEDs m\xE1s peque\xF1o del mundo?",o:["Vaticano","M\xF3naco","San Marino","Liechtenstein","Malta"],d:1,cat:"Geograf\xEDa",id:"geca55"},{q:"\xBFQu\xE9 reyes financiaron el primer viaje de Col\xF3n?",o:["Reyes Cat\xF3licos","Felipe II y Mar\xEDa","Carlos V e Isabel","Alfonso X y Violante","Felipe V y B\xE1rbara"],d:1,cat:"Historia",id:"geca56"},{q:"\xBFQu\xE9 \xF3rgano produce la insulina?",o:["P\xE1ncreas","H\xEDgado","Bazo","Ri\xF1\xF3n","Ves\xEDcula"],d:1,cat:"Ciencia y naturaleza",id:"geca57"},{q:"\xBFEn qu\xE9 ciudad se firm\xF3 el tratado que cre\xF3 la Uni\xF3n Europea en 1992?",o:["Maastricht","Roma","Lisboa","Niza","\xC1msterdam"],d:1,cat:"Geograf\xEDa",id:"geca58"},{q:"\xBFCu\xE1l es la monta\xF1a m\xE1s alta de Espa\xF1a?",o:["Teide","Mulhac\xE9n","Aneto","Veleta","Almanzor"],d:1,cat:"Geograf\xEDa",id:"geca59"},{q:"\xBFQu\xE9 fil\xF3sofo griego fue maestro de Alejandro Magno?",o:["Arist\xF3teles","Plat\xF3n","S\xF3crates","Pit\xE1goras","Her\xE1clito"],d:1,cat:"Cultura general",id:"geca60"},{q:"\xBFCu\xE1l es el idioma con m\xE1s hablantes nativos del mundo?",o:["Chino mandar\xEDn","Ingl\xE9s","Espa\xF1ol","Hindi","\xC1rabe"],d:1,cat:"Cultura general",id:"geca61"},{q:"\xBFQu\xE9 poeta escribi\xF3 \xABRomancero gitano\xBB?",o:["Federico Garc\xEDa Lorca","Antonio Machado","Rafael Alberti","Miguel Hern\xE1ndez","Luis Cernuda"],d:1,cat:"Arte y letras",id:"geca62"},{q:"\xBFQu\xE9 unidad mide la resistencia el\xE9ctrica?",o:["Ohmio","Voltio","Amperio","Vatio","Julio"],d:1,cat:"Ciencia y naturaleza",id:"geca63"},{q:"\xBFCu\xE1l es el desierto c\xE1lido m\xE1s grande del mundo?",o:["S\xE1hara","Gobi","Kalahari","Atacama","Ar\xE1bigo"],d:1,cat:"Geograf\xEDa",id:"geca64"},{q:"\xBFEn qu\xE9 a\xF1o comenz\xF3 la Guerra Civil espa\xF1ola?",o:["1936","1931","1939","1934","1923"],d:1,cat:"Historia",id:"geca65"},{q:"\xBFQu\xE9 cient\xEDfica gan\xF3 dos premios Nobel en distintas ciencias?",o:["Marie Curie","Rosalind Franklin","Ada Lovelace","Lise Meitner","Dorothy Hodgkin"],d:1,cat:"Cultura general",id:"geca66"},{q:"\xBFCu\xE1l es la capital de Canad\xE1?",o:["Ottawa","Toronto","Montreal","Vancouver","Quebec"],d:1,cat:"Geograf\xEDa",id:"geca67"},{q:"\xBFQu\xE9 m\xFAsico compuso la \xABNovena Sinfon\xEDa\xBB con el \xABHimno de la alegr\xEDa\xBB?",o:["Beethoven","Brahms","Schubert","Wagner","Mahler"],d:1,cat:"Arte y letras",id:"geca68"},{q:"\xBFCu\xE1l es el lago m\xE1s grande de \xC1frica?",o:["Victoria","Tanganica","Chad","Malaui","Turkana"],d:1,cat:"Geograf\xEDa",id:"geca69"},{q:"\xBFCu\xE1ntos corazones tiene un pulpo?",o:["Tres","Uno","Dos","Cuatro","Ocho"],d:1,cat:"Ciencia y naturaleza",id:"geca70"},{q:"\xBFQu\xE9 arquitecto dise\xF1\xF3 el Museo Guggenheim de Bilbao?",o:["Frank Gehry","Santiago Calatrava","Norman Foster","Zaha Hadid","Rafael Moneo"],d:1,cat:"Cultura general",id:"geca71"},{q:"\xBFCu\xE1l es el metal m\xE1s abundante en la corteza terrestre?",o:["Aluminio","Hierro","Cobre","Oro","Magnesio"],d:1,cat:"Ciencia y naturaleza",id:"geca72"},{q:"\xBFEn qu\xE9 pa\xEDs naci\xF3 el pintor Frida Kahlo?",o:["M\xE9xico","Colombia","Argentina","Cuba","Espa\xF1a"],d:1,cat:"Geograf\xEDa",id:"geca73"},{q:"\xBFCu\xE1l es el segundo planeta m\xE1s cercano al Sol?",o:["Venus","Mercurio","Tierra","Marte","J\xFApiter"],d:1,cat:"Ciencia y naturaleza",id:"geca74"},{q:"\xBFQu\xE9 emperador romano naci\xF3 en It\xE1lica, cerca de Sevilla?",o:["Trajano","Ner\xF3n","Augusto","Cal\xEDgula","Tiberio"],d:1,cat:"Historia",id:"geca75"},{q:"\xBFQu\xE9 escritor ingl\xE9s escribi\xF3 \xAB1984\xBB?",o:["George Orwell","Aldous Huxley","H. G. Wells","Charles Dickens","Oscar Wilde"],d:1,cat:"Arte y letras",id:"geca76"},{q:"\xBFCu\xE1ntas cuerdas tiene un viol\xEDn?",o:["Cuatro","Cinco","Seis","Tres","Siete"],d:1,cat:"Cultura general",id:"geca77"},{q:"\xBFQu\xE9 part\xEDcula subat\xF3mica tiene carga negativa?",o:["Electr\xF3n","Prot\xF3n","Neutr\xF3n","Fot\xF3n","Neutrino"],d:1,cat:"Ciencia y naturaleza",id:"geca78"},{q:"\xBFQu\xE9 ciudad es la capital de Jap\xF3n y su mayor urbe?",o:["Tokio","Osaka","Kioto","Yokohama","Nagoya"],d:1,cat:"Geograf\xEDa",id:"geca79"},{q:"\xBFQu\xE9 pa\xEDs tiene forma de bota en el mapa?",o:["Italia","Grecia","Chile","Portugal","Croacia"],d:1,cat:"Geograf\xEDa",id:"geca80"},{q:"\xBFQu\xE9 rey espa\xF1ol abdic\xF3 en 2014?",o:["Juan Carlos I","Felipe VI","Alfonso XIII","Felipe V","Carlos IV"],d:1,cat:"Historia",id:"geca81"},{q:"\xBFCu\xE1l es la f\xF3rmula qu\xEDmica del agua?",o:["H2O","CO2","O2","H2O2","NaCl"],d:1,cat:"Ciencia y naturaleza",id:"geca82"},{q:"\xBFQu\xE9 navegante complet\xF3 la primera vuelta al mundo tras la muerte de Magallanes?",o:["Juan Sebasti\xE1n Elcano","Am\xE9rico Vespucio","Vasco da Gama","Francis Drake","Hern\xE1n Cort\xE9s"],d:1,cat:"Ciencia y naturaleza",id:"geca83"},{q:"\xBFQu\xE9 ciudad italiana est\xE1 construida sobre canales?",o:["Venecia","Florencia","G\xE9nova","Pisa","Verona"],d:1,cat:"Geograf\xEDa",id:"geca84"},{q:"\xBFCu\xE1ntos grados suman los \xE1ngulos de un tri\xE1ngulo?",o:["180","360","90","270","120"],d:1,cat:"Cultura general",id:"geca85"},{q:"\xBFDe qu\xE9 pa\xEDs es originaria la paella?",o:["Espa\xF1a","Italia","Portugal","M\xE9xico","Francia"],d:1,cat:"Geograf\xEDa",id:"geca86"},{q:"\xBFQu\xE9 escritor cre\xF3 a Harry Potter?",o:["J. K. Rowling","J. R. R. Tolkien","C. S. Lewis","Roald Dahl","Philip Pullman"],d:1,cat:"Arte y letras",id:"geca87"}],cal:[{def:"Dulce t\xEDpico de Navidad hecho con almendras",f:"El __ de __",a:["turr\xF3n","mazap\xE1n","polvor\xF3n"],b:["Jijona","Toledo","Estepa"],id:"geca0"},{def:"Lo que se dice al saludar por la ma\xF1ana",f:"Buenos __ de __",a:["d\xEDas","tardes","ratos"],b:["sol","luz","primavera"],id:"geca1"},{def:"Obra cumbre de Cervantes",f:"Don __ de la __",a:["Quijote","Juan","Pedro"],b:["Mancha","Rioja","Vera"],id:"geca2"},{def:"Monumento parisino de hierro",f:"La __ __",a:["torre","puerta","plaza"],b:["Eiffel","Lumi\xE8re","Monet"],id:"geca3"},{def:"Refr\xE1n sobre madrugar",f:"A quien __ , Dios le __",a:["madruga","trasnocha","corre"],b:["ayuda","castiga","olvida"],id:"geca4"},{def:"Capital de la isla de Mallorca",f:"__ de __",a:["Palma","Puerto","Villa"],b:["Mallorca","Menorca","Ibiza"],id:"geca5"},{def:"Famosa pinacoteca madrile\xF1a",f:"Museo del __ de __",a:["Prado","Parque","Palacio"],b:["Madrid","Castilla","Espa\xF1a"],id:"geca6"},{def:"Lugar donde se guardan los coches",f:"__ de __",a:["Plaza","Patio","Sala"],b:["aparcamiento","garaje","estaci\xF3n"],id:"geca7"},{def:"Expresi\xF3n para pedir silencio en clase",f:"Silencio, __ __",a:["por","con","sin"],b:["favor","calma","ruido"],id:"geca8"},{def:"Juego de cartas espa\xF1ol t\xEDpico de bares",f:"El __ __",a:["mus","tute","cinquillo"],b:["vasco","real","doble"],id:"geca9"},{def:"Equipo de f\xFAtbol con estadio en Chamart\xEDn",f:"Real __ de __",a:["Madrid","Sociedad","Betis"],b:["F\xFAtbol","Club","Deporte"],id:"geca10"},{def:"Plato fr\xEDo andaluz a base de tomate",f:"Gazpacho __ __",a:["andaluz","gallego","vasco"],b:["fresquito","caliente","templado"],id:"geca11"},{def:"Animal que lleva su casa a cuestas",f:"El __ de __",a:["caracol","cangrejo","erizo"],b:["jard\xEDn","r\xEDo","mar"],id:"geca12"},{def:"Ciencia que estudia los seres vivos",f:"La __ __",a:["biolog\xEDa","geolog\xEDa","qu\xEDmica"],b:["celular","terrestre","marina"],id:"geca13"},{def:"Fiesta de Pamplona con encierros",f:"Los __ de __",a:["Sanfermines","Carnavales","Pilares"],b:["Pamplona","Navarra","Sevilla"],id:"geca14"},{def:"Frase de bienvenida en un concurso",f:"Bienvenidos a __ __",a:["este","aquel","otro"],b:["programa","partido","concierto"],id:"geca15"},{def:"Lo que pide quien tiene sed",f:"Un __ de __",a:["vaso","plato","saco"],b:["agua","arena","sopa"],id:"geca16"},{def:"Libro sagrado de la Biblia que abre el Antiguo Testamento",f:"El __ del __",a:["libro","canto","poema"],b:["G\xE9nesis","\xC9xodo","Lev\xEDtico"],id:"geca17"},{def:"Viaje espacial hist\xF3rico",f:"La __ a la __",a:["llegada","vuelta","subida"],b:["Luna","Tierra","Marte"],id:"geca18"},{def:"Programa de radio deportivo nocturno",f:"El __ de los __",a:["larguero","portero","delantero"],b:["deportes","goles","campeones"],id:"geca19"},{def:"Postre de leche con canela",f:"Arroz con __ y __",a:["leche","agua","caldo"],b:["canela","pimienta","sal"],id:"geca20"},{def:"Edificio donde se ven pel\xEDculas",f:"Sala de __ __",a:["cine","teatro","baile"],b:["comercial","municipal","central"],id:"geca21"},{def:"Lo que hace un reloj",f:"Marca la __ __",a:["hora","fecha","ruta"],b:["exacta","pasada","tard\xEDa"],id:"geca22"},{def:"Gran festival de m\xFAsica de Eurovisi\xF3n",f:"Festival de la __ de __",a:["Canci\xF3n","Danza","M\xFAsica"],b:["Eurovisi\xF3n","Europa","Benidorm"],id:"geca23"},{def:"Expresi\xF3n de mucha suerte",f:"Que te __ la __",a:["toque","tome","tape"],b:["loter\xEDa","quiniela","primitiva"],id:"geca24"},{def:"Prenda que protege de la lluvia",f:"El __ de __",a:["paraguas","sombrero","abrigo"],b:["colores","cuadros","lunares"],id:"geca25"},{def:"Fen\xF3meno luminoso tras la lluvia",f:"El __ __",a:["arco","rayo","trueno"],b:["iris","solar","lunar"],id:"geca26"},{def:"Dicho sobre la paciencia",f:"Paso a __ se __ lejos",a:["paso","salto","pie"],b:["llega","cae","corre"],id:"geca27"},{def:"\xC1rbol de hoja perenne con pi\xF1as",f:"El __ __",a:["pino","roble","olmo"],b:["pi\xF1onero","frutal","llor\xF3n"],id:"geca28"},{def:"Famoso cuento de Perrault",f:"La __ __",a:["Cenicienta","Bella","Sirenita"],b:["encantada","dormida","olvidada"],id:"geca29"},{def:"Capital de Estados Unidos",f:"__ D. __",a:["Washington","Columbia","Boston"],b:["C.","A.","B."],id:"geca30"},{def:"Ciudad gallega del Ap\xF3stol",f:"Santiago de __ __",a:["Compostela","Chile","Cuba"],b:["gallega","norte\xF1a","atl\xE1ntica"],id:"geca31"},{def:"Juego del ajedrez: jugada final",f:"Jaque __ __",a:["mate","rey","torre"],b:["final","doble","directo"],id:"geca32"},{def:"Cuerpo celeste con cola brillante",f:"Un __ __",a:["cometa","meteorito","sat\xE9lite"],b:["brillante","oscuro","apagado"],id:"geca33"},{def:"Lo que dice el \xE1rbitro al acabar el partido",f:"Final del __ __",a:["partido","primer","segundo"],b:["se\xF1ores","tiempo","descanso"],id:"geca34"},{def:"Lugar de pago en un supermercado",f:"La __ __",a:["caja","cola","cesta"],b:["registradora","r\xE1pida","central"],id:"geca35"},{def:"M\xFAsico que dirige una orquesta",f:"El __ de __",a:["director","maestro","profesor"],b:["orquesta","escuela","banda"],id:"geca36"},{def:"Celebraci\xF3n del final del a\xF1o",f:"La __ de __",a:["noche","tarde","ma\xF1ana"],b:["Fin de A\xF1o","Reyes","San Juan"],id:"geca37"}],est:[{t:"R\xEDos de Espa\xF1a",q:"R\xEDos que desembocan en el mar Mediterr\xE1neo o el Atl\xE1ntico y pasan por Espa\xF1a",ok:["Ebro","Tajo","Duero","Guadalquivir","Guadiana","J\xFAcar","Segura"],bad:["Sena","Danubio","Po"],id:"gees0"},{t:"Planetas",q:"Planetas del sistema solar",ok:["Mercurio","Venus","Tierra","Marte","J\xFApiter","Saturno","Urano"],bad:["Plut\xF3n","Luna","Sol"],id:"gees1"},{t:"Capitales europeas",q:"Capitales de pa\xEDses de la Uni\xF3n Europea",ok:["Par\xEDs","Roma","Berl\xEDn","Lisboa","Viena","Atenas","Dubl\xEDn"],bad:["Londres","Oslo","Z\xFArich"],id:"gees2"},{t:"Instrumentos de cuerda",q:"Instrumentos que tienen cuerdas",ok:["Guitarra","Viol\xEDn","Arpa","Violonchelo","Contrabajo","La\xFAd","Bandurria"],bad:["Oboe","Tuba","Xil\xF3fono"],id:"gees3"},{t:"Mam\xEDferos",q:"Animales que son mam\xEDferos",ok:["Delf\xEDn","Murci\xE9lago","Ballena","Elefante","Canguro","Ornitorrinco","Foca"],bad:["Ping\xFCino","Tibur\xF3n","Cocodrilo"],id:"gees4"},{t:"Pintores espa\xF1oles",q:"Pintores nacidos en Espa\xF1a",ok:["Vel\xE1zquez","Goya","Picasso","Dal\xED","Mir\xF3","Sorolla","Murillo"],bad:["Van Gogh","Rembrandt","Monet"],id:"gees5"},{t:"Islas espa\xF1olas",q:"Islas que pertenecen a Espa\xF1a",ok:["Mallorca","Ibiza","Tenerife","Lanzarote","Menorca","La Gomera","Formentera"],bad:["Madeira","C\xF3rcega","Malta"],id:"gees6"},{t:"Deportes ol\xEDmpicos",q:"Deportes que forman parte de los Juegos Ol\xEDmpicos de verano",ok:["Nataci\xF3n","Atletismo","Judo","Remo","Esgrima","Gimnasia","Tiro con arco"],bad:["Pelota vasca","Petanca","Ajedrez"],id:"gees7"},{t:"Elementos qu\xEDmicos",q:"Elementos de la tabla peri\xF3dica",ok:["Oro","Plata","Cobre","Sodio","Helio","Ne\xF3n","Calcio"],bad:["Bronce","Acero","Lat\xF3n"],id:"gees8"},{t:"\xD3peras",q:"\xD3peras famosas",ok:["Carmen","La traviata","Aida","Tosca","Rigoletto","Nabucco","Turandot"],bad:["El lago de los cisnes","Cascanueces","Giselle"],id:"gees9"},{t:"Comunidades aut\xF3nomas",q:"Comunidades aut\xF3nomas espa\xF1olas con costa",ok:["Galicia","Asturias","Cantabria","Murcia","Andaluc\xEDa","Catalu\xF1a","Comunidad Valenciana"],bad:["Arag\xF3n","Madrid","Extremadura"],id:"gees10"},{t:"Inventos",q:"Inventos del siglo XIX",ok:["Tel\xE9fono","Bombilla incandescente","Fon\xF3grafo","Dinamita","Motor de explosi\xF3n","Cinemat\xF3grafo","M\xE1quina de escribir"],bad:["Internet","Transistor","Microondas"],id:"gees11"},{t:"Frutas",q:"Frutas tropicales",ok:["Mango","Pi\xF1a","Papaya","Maracuy\xE1","Coco","Guayaba","Lichi"],bad:["Cereza","Pera","Ciruela"],id:"gees12"},{t:"Monumentos",q:"Monumentos que est\xE1n en Italia",ok:["Coliseo","Torre de Pisa","Fontana de Trevi","Pante\xF3n","Duomo de Florencia","Puente de Rialto","Capilla Sixtina"],bad:["Parten\xF3n","Big Ben","Atomium"],id:"gees13"},{t:"Escritores",q:"Escritores ganadores del Premio Nobel de Literatura",ok:["Gabriel Garc\xEDa M\xE1rquez","Camilo Jos\xE9 Cela","Pablo Neruda","Juan Ram\xF3n Jim\xE9nez","Vicente Aleixandre","Mario Vargas Llosa","Octavio Paz"],bad:["Jorge Luis Borges","Miguel Delibes","P\xE9rez Gald\xF3s"],id:"gees14"},{t:"Huesos",q:"Huesos del cuerpo humano",ok:["F\xE9mur","Tibia","H\xFAmero","C\xFAbito","Estern\xF3n","Clav\xEDcula","R\xF3tula"],bad:["B\xEDceps","Tend\xF3n","Cart\xEDlago"],id:"gees15"},{t:"Pa\xEDses de Am\xE9rica",q:"Pa\xEDses de Sudam\xE9rica",ok:["Argentina","Chile","Per\xFA","Bolivia","Uruguay","Paraguay","Ecuador"],bad:["Panam\xE1","Cuba","Honduras"],id:"gees16"},{t:"Colores",q:"Colores del arco\xEDris",ok:["Rojo","Naranja","Amarillo","Verde","Azul","A\xF1il","Violeta"],bad:["Blanco","Negro","Marr\xF3n"],id:"gees17"},{t:"Aves",q:"Aves que no pueden volar",ok:["Avestruz","Ping\xFCino","Em\xFA","Kiwi","\xD1and\xFA","Casuario","Dodo"],bad:["Halc\xF3n","Gaviota","Golondrina"],id:"gees18"},{t:"Cumbres",q:"Monta\xF1as de m\xE1s de 8.000 metros",ok:["Everest","K2","Kangchenjunga","Lhotse","Makalu","Annapurna","Manaslu"],bad:["Aconcagua","Kilimanjaro","Mont Blanc"],id:"gees19"},{t:"Ciudades",q:"Ciudades atravesadas por el Ebro",ok:["Logro\xF1o","Zaragoza","Tudela","Miranda de Ebro","Tortosa","Amposta","Calahorra"],bad:["Burgos","Lleida","Huesca"],id:"gees20"},{t:"Moneda",q:"Pa\xEDses que usan el euro",ok:["Espa\xF1a","Francia","Italia","Portugal","Grecia","Irlanda","Croacia"],bad:["Suecia","Dinamarca","Polonia"],id:"gees21"},{t:"Cine",q:"Pel\xEDculas dirigidas por Steven Spielberg",ok:["Tibur\xF3n","E.T.","Parque Jur\xE1sico","La lista de Schindler","Indiana Jones","Salvar al soldado Ryan","Encuentros en la tercera fase"],bad:["Titanic","Avatar","El Padrino"],id:"gees22"},{t:"M\xFAsica",q:"Grupos o artistas espa\xF1oles",ok:["Mecano","H\xE9roes del Silencio","Rosal\xEDa","Alejandro Sanz","Estopa","La Oreja de Van Gogh","Raphael"],bad:["Coldplay","ABBA","Queen"],id:"gees23"}],cla:[{q:"\xBFCu\xE1ntas patas tiene un insecto?",o:["Seis","Ocho"],id:"gecl0"},{q:"\xBFEl Sol es una estrella o un planeta?",o:["Estrella","Planeta"],id:"gecl1"},{q:"\xBFEl tomate es bot\xE1nicamente fruta o tub\xE9rculo?",o:["Fruta","Tub\xE9rculo"],id:"gecl2"},{q:"\xBFQu\xE9 es m\xE1s grande, un \xE1tomo o una c\xE9lula?",o:["Una c\xE9lula","Un \xE1tomo"],id:"gecl3"},{q:"\xBFEl delf\xEDn es mam\xEDfero o pez?",o:["Mam\xEDfero","Pez"],id:"gecl4"},{q:"\xBFCu\xE1l es m\xE1s antigua, la Alhambra o el Guggenheim?",o:["La Alhambra","El Guggenheim"],id:"gecl5"},{q:"\xBFGalicia limita con Portugal o con Francia?",o:["Portugal","Francia"],id:"gecl6"},{q:"\xBFMozart era austriaco o alem\xE1n de nacimiento?",o:["Austriaco","Alem\xE1n"],id:"gecl7"},{q:"\xBFLa ballena azul es el animal m\xE1s grande o el m\xE1s r\xE1pido?",o:["El m\xE1s grande","El m\xE1s r\xE1pido"],id:"gecl8"},{q:"\xBFEl agua hierve a 100 o a 90 grados al nivel del mar?",o:["100 grados","90 grados"],id:"gecl9"},{q:"\xBFLa Luna tiene luz propia?",o:["No","S\xED"],id:"gecl10"},{q:"\xBFPicasso naci\xF3 en M\xE1laga o en Barcelona?",o:["M\xE1laga","Barcelona"],id:"gecl11"},{q:"\xBFUn kilo son mil o cien gramos?",o:["Mil gramos","Cien gramos"],id:"gecl12"},{q:"\xBFEl ping\xFCino vive en el polo sur o en el polo norte?",o:["Polo sur","Polo norte"],id:"gecl13"},{q:"\xBFLa Giralda est\xE1 en Sevilla o en C\xF3rdoba?",o:["Sevilla","C\xF3rdoba"],id:"gecl14"},{q:"\xBFEl euro entr\xF3 en circulaci\xF3n en 2002 o en 1998?",o:["2002","1998"],id:"gecl15"},{q:"\xBFCu\xE1ntos aros tiene la bandera ol\xEDmpica: cinco o seis?",o:["Cinco","Seis"],id:"gecl16"},{q:"\xBFLa Tierra gira alrededor del Sol o al rev\xE9s?",o:["La Tierra alrededor del Sol","El Sol alrededor de la Tierra"],id:"gecl17"},{q:"\xBFEl ajedrez tiene 64 o 100 casillas?",o:["64","100"],id:"gecl18"},{q:"\xBFUn decenio son diez o cien a\xF1os?",o:["Diez a\xF1os","Cien a\xF1os"],id:"gecl19"},{q:"\xBFShakespeare escribi\xF3 \xABHamlet\xBB o \xABFausto\xBB?",o:["Hamlet","Fausto"],id:"gecl20"},{q:"\xBFLa sangre arterial va desde o hacia el coraz\xF3n?",o:["Desde el coraz\xF3n","Hacia el coraz\xF3n"],id:"gecl21"},{q:"\xBFUna docena son doce o diez unidades?",o:["Doce","Diez"],id:"gecl22"},{q:"\xBFEl Cant\xE1brico ba\xF1a Asturias o Murcia?",o:["Asturias","Murcia"],id:"gecl23"},{q:"\xBFEl oso panda es originario de China o de Jap\xF3n?",o:["China","Jap\xF3n"],id:"gecl24"},{q:"\xBFEl tri\xE1ngulo equil\xE1tero tiene sus lados iguales o distintos?",o:["Iguales","Distintos"],id:"gecl25"},{q:"\xBFLa capital de Suiza es Berna o Ginebra?",o:["Berna","Ginebra"],id:"gecl26"},{q:"\xBFEl c\xF3ndor es un ave o un reptil?",o:["Un ave","Un reptil"],id:"gecl27"},{q:"\xBFNeil Armstrong fue astronauta o aviador de carreras?",o:["Astronauta","Aviador de carreras"],id:"gecl28"},{q:"\xBFLa paella valenciana lleva arroz o pasta?",o:["Arroz","Pasta"],id:"gecl29"},{q:"\xBFCu\xE1l es m\xE1s pesado, un kilo de hierro o un kilo de paja?",o:["Pesan lo mismo","El hierro"],id:"gecl30"},{q:"\xBFEl Everest est\xE1 en el Himalaya o en los Andes?",o:["Himalaya","Andes"],id:"gecl31"},{q:"\xBFEl Nilo desemboca en el Mediterr\xE1neo o en el mar Rojo?",o:["Mediterr\xE1neo","Mar Rojo"],id:"gecl32"},{q:"\xBFEl murci\xE9lago ve con ecolocalizaci\xF3n o con rayos X?",o:["Ecolocalizaci\xF3n","Rayos X"],id:"gecl33"},{q:"\xBF\xABCien a\xF1os de soledad\xBB es una novela o un poemario?",o:["Novela","Poemario"],id:"gecl34"},{q:"\xBFVel\xE1zquez fue pintor de Felipe IV o de Carlos III?",o:["Felipe IV","Carlos III"],id:"gecl35"},{q:"\xBFEl diamante est\xE1 formado por carbono o por silicio?",o:["Carbono","Silicio"],id:"gecl36"},{q:"\xBFBilbao est\xE1 en Vizcaya o en Guip\xFAzcoa?",o:["Vizcaya","Guip\xFAzcoa"],id:"gecl37"},{q:"\xBFUn oct\xF3gono tiene ocho o diez lados?",o:["Ocho","Diez"],id:"gecl38"},{q:"\xBFEl coraz\xF3n humano tiene cuatro o tres cavidades?",o:["Cuatro","Tres"],id:"gecl39"},{q:"\xBFEl tango es originario de Argentina o de Cuba?",o:["Argentina","Cuba"],id:"gecl40"},{q:"\xBFEl flamenco es Patrimonio de la Humanidad: s\xED o no?",o:["S\xED","No"],id:"gecl41"},{q:"\xBFLa Estatua de la Libertad fue un regalo de Francia o de Inglaterra?",o:["Francia","Inglaterra"],id:"gecl42"},{q:"\xBFLas abejas producen miel o cera solamente?",o:["Miel","Cera solamente"],id:"gecl43"},{q:"\xBFEl caballo de Don Quijote se llamaba Rocinante o Babieca?",o:["Rocinante","Babieca"],id:"gecl44"},{q:"\xBFEl Cid cabalgaba a Babieca o a Rocinante?",o:["Babieca","Rocinante"],id:"gecl45"},{q:"\xBFEl rayo suele verse antes o despu\xE9s de o\xEDr el trueno?",o:["Antes","Despu\xE9s"],id:"gecl46"},{q:"\xBFEl sonido viaja m\xE1s r\xE1pido en el agua o en el aire?",o:["En el agua","En el aire"],id:"gecl47"},{q:"\xBFLa capital de Marruecos es Rabat o Casablanca?",o:["Rabat","Casablanca"],id:"gecl48"},{q:"\xBFEl hielo flota o se hunde en el agua?",o:["Flota","Se hunde"],id:"gecl49"},{q:"\xBFJ\xFApiter es un planeta gaseoso o rocoso?",o:["Gaseoso","Rocoso"],id:"gecl50"},{q:"\xBFLa Mezquita-catedral est\xE1 en C\xF3rdoba o en Granada?",o:["C\xF3rdoba","Granada"],id:"gecl51"},{q:"\xBFEl kiwi es tambi\xE9n un ave de Nueva Zelanda?",o:["S\xED","No"],id:"gecl52"},{q:"\xBFCu\xE1ntos jugadores hay en pista en un equipo de baloncesto: cinco o seis?",o:["Cinco","Seis"],id:"gecl53"},{q:"\xBFEl Quijote se public\xF3 en el siglo XVII o en el XIX?",o:["Siglo XVII","Siglo XIX"],id:"gecl54"},{q:"\xBFLa fotos\xEDntesis la hacen las plantas o los hongos?",o:["Las plantas","Los hongos"],id:"gecl55"},{q:"\xBFEl lince ib\xE9rico es un felino o un c\xE1nido?",o:["Felino","C\xE1nido"],id:"gecl56"},{q:"\xBFMercurio es el planeta m\xE1s cercano al Sol o el m\xE1s lejano?",o:["El m\xE1s cercano","El m\xE1s lejano"],id:"gecl57"},{q:"\xBFLa primera vuelta al mundo termin\xF3 en Sanl\xFAcar o en C\xE1diz?",o:["Sanl\xFAcar de Barrameda","C\xE1diz"],id:"gecl58"},{q:"\xBFUn litro equivale a un dec\xEDmetro c\xFAbico o a un metro c\xFAbico?",o:["Un dec\xEDmetro c\xFAbico","Un metro c\xFAbico"],id:"gecl59"},{q:"\xBFEl Teide est\xE1 en Tenerife o en Gran Canaria?",o:["Tenerife","Gran Canaria"],id:"gecl60"},{q:"\xBFLa sardana es un baile catal\xE1n o gallego?",o:["Catal\xE1n","Gallego"],id:"gecl61"},{q:"\xBFLa mu\xF1eira es un baile gallego o vasco?",o:["Gallego","Vasco"],id:"gecl62"},{q:"\xBFEl aurresku es un baile vasco o andaluz?",o:["Vasco","Andaluz"],id:"gecl63"},{q:"\xBFLa jota es t\xEDpica de Arag\xF3n o de Canarias?",o:["Arag\xF3n","Canarias"],id:"gecl64"},{q:"\xBFLos koalas comen eucalipto o bamb\xFA?",o:["Eucalipto","Bamb\xFA"],id:"gecl65"},{q:"\xBFEl camello tiene dos jorobas o una?",o:["Dos","Una"],id:"gecl66"},{q:"\xBFEl dromedario tiene una joroba o dos?",o:["Una","Dos"],id:"gecl67"},{q:"\xBFLa ONU tiene su sede principal en Nueva York o en Ginebra?",o:["Nueva York","Ginebra"],id:"gecl68"},{q:"\xBFLa V\xEDa L\xE1ctea es una galaxia o una nebulosa?",o:["Una galaxia","Una nebulosa"],id:"gecl69"},{q:"\xBFEl n\xFAmero pi empieza por 3,14 o por 3,41?",o:["3,14","3,41"],id:"gecl70"},{q:"\xBFUn pent\xE1gono tiene cinco o seis lados?",o:["Cinco","Seis"],id:"gecl71"},{q:"\xBFEl Guadalquivir pasa por Sevilla o por M\xE1laga?",o:["Sevilla","M\xE1laga"],id:"gecl72"},{q:"\xBFEl Ebro desemboca en Tarragona o en Castell\xF3n?",o:["Tarragona","Castell\xF3n"],id:"gecl73"},{q:"\xBF\xABLa casa de Bernarda Alba\xBB es de Lorca o de Valle-Incl\xE1n?",o:["Lorca","Valle-Incl\xE1n"],id:"gecl74"},{q:"\xBFBeethoven se qued\xF3 sordo o ciego?",o:["Sordo","Ciego"],id:"gecl75"},{q:"\xBFEl sushi es t\xEDpico de Jap\xF3n o de Tailandia?",o:["Jap\xF3n","Tailandia"],id:"gecl76"},{q:"\xBFLos tiburones tienen huesos o cart\xEDlago?",o:["Cart\xEDlago","Huesos"],id:"gecl77"},{q:"\xBFEl \xE1cido del est\xF3mago es clorh\xEDdrico o sulf\xFArico?",o:["Clorh\xEDdrico","Sulf\xFArico"],id:"gecl78"},{q:"\xBFLa capital de Grecia es Atenas o Esparta?",o:["Atenas","Esparta"],id:"gecl79"},{q:"\xBFEl Danubio pasa por Viena o por Par\xEDs?",o:["Viena","Par\xEDs"],id:"gecl80"},{q:"\xBFEl T\xE1mesis pasa por Londres o por Edimburgo?",o:["Londres","Edimburgo"],id:"gecl81"},{q:"\xBFEl Sena pasa por Par\xEDs o por Lyon?",o:["Par\xEDs","Lyon"],id:"gecl82"},{q:"\xBFLa Torre de H\xE9rcules est\xE1 en A Coru\xF1a o en Gij\xF3n?",o:["A Coru\xF1a","Gij\xF3n"],id:"gecl83"},{q:"\xBFEl acueducto romano m\xE1s famoso de Espa\xF1a est\xE1 en Segovia o en \xC1vila?",o:["Segovia","\xC1vila"],id:"gecl84"},{q:"\xBFLas murallas medievales m\xE1s famosas de Castilla est\xE1n en \xC1vila o en Soria?",o:["\xC1vila","Soria"],id:"gecl85"},{q:"\xBFLas Fallas son en Valencia o en Alicante?",o:["Valencia","Alicante"],id:"gecl86"},{q:"\xBFLas Hogueras de San Juan son t\xEDpicas de Alicante o de Lugo?",o:["Alicante","Lugo"],id:"gecl87"},{q:"\xBFLa Feria de Abril se celebra en Sevilla o en Jerez?",o:["Sevilla","Jerez"],id:"gecl88"},{q:"\xBFLas ballenas respiran por branquias o por pulmones?",o:["Pulmones","Branquias"],id:"gecl89"},{q:"\xBFEl hipop\xF3tamo es herb\xEDvoro o carn\xEDvoro?",o:["Herb\xEDvoro","Carn\xEDvoro"],id:"gecl90"},{q:"\xBFUna tonelada son mil o cien kilos?",o:["Mil kilos","Cien kilos"],id:"gecl91"},{q:"\xBFUn siglo tiene cien o mil a\xF1os?",o:["Cien a\xF1os","Mil a\xF1os"],id:"gecl92"},{q:"\xBFEl ADN est\xE1 en el n\xFAcleo de la c\xE9lula o en la membrana?",o:["En el n\xFAcleo","En la membrana"],id:"gecl93"},{q:"\xBFLa gasolina es un derivado del petr\xF3leo o del carb\xF3n?",o:["Petr\xF3leo","Carb\xF3n"],id:"gecl94"},{q:"\xBFLa Puerta de Alcal\xE1 est\xE1 en Madrid o en Alcal\xE1 de Henares?",o:["Madrid","Alcal\xE1 de Henares"],id:"gecl95"},{q:"\xBFCervantes naci\xF3 en Alcal\xE1 de Henares o en Toledo?",o:["Alcal\xE1 de Henares","Toledo"],id:"gecl96"},{q:"\xBFGoya naci\xF3 en Arag\xF3n o en Andaluc\xEDa?",o:["Arag\xF3n","Andaluc\xEDa"],id:"gecl97"},{q:"\xBFAntoni Gaud\xED fue arquitecto o escultor principalmente?",o:["Arquitecto","Escultor"],id:"gecl98"},{q:"\xBFEl piano es de cuerda percutida o de viento?",o:["Cuerda percutida","Viento"],id:"gecl99"},{q:"\xBFLas tortugas son reptiles o anfibios?",o:["Reptiles","Anfibios"],id:"gecl100"},{q:"\xBFLas ranas son anfibios o reptiles?",o:["Anfibios","Reptiles"],id:"gecl101"},{q:"\xBFEl Atl\xE1ntico es m\xE1s grande que el \xCDndico?",o:["S\xED","No"],id:"gecl102"},{q:"\xBFLa Ant\xE1rtida es un continente o un oc\xE9ano?",o:["Un continente","Un oc\xE9ano"],id:"gecl103"},{q:"\xBFEl arco iris tiene siete o nueve colores tradicionales?",o:["Siete","Nueve"],id:"gecl104"},{q:"\xBFLa capital de Alemania es Berl\xEDn o M\xFAnich?",o:["Berl\xEDn","M\xFAnich"],gen:1,id:"gecl105"},{q:"\xBFLa capital de B\xE9lgica es Bruselas o Amberes?",o:["Bruselas","Amberes"],gen:1,id:"gecl106"},{q:"\xBFLa capital de Croacia es Zagreb o Split?",o:["Zagreb","Split"],gen:1,id:"gecl107"},{q:"\xBFLa capital de Escocia es Edimburgo o Glasgow?",o:["Edimburgo","Glasgow"],gen:1,id:"gecl108"},{q:"\xBFLa capital de Finlandia es Helsinki o Tampere?",o:["Helsinki","Tampere"],gen:1,id:"gecl109"},{q:"\xBFLa capital de Hungr\xEDa es Budapest o Debrecen?",o:["Budapest","Debrecen"],gen:1,id:"gecl110"},{q:"\xBFLa capital de Islandia es Reikiavik o Akureyri?",o:["Reikiavik","Akureyri"],gen:1,id:"gecl111"},{q:"\xBFLa capital de Pa\xEDses Bajos es \xC1msterdam o R\xF3terdam?",o:["\xC1msterdam","R\xF3terdam"],gen:1,id:"gecl112"},{q:"\xBFLa capital de Rep\xFAblica Checa es Praga o Brno?",o:["Praga","Brno"],gen:1,id:"gecl113"},{q:"\xBFLa capital de Suecia es Gotemburgo o Estocolmo?",o:["Estocolmo","Gotemburgo"],gen:1,id:"gecl114"},{q:"\xBFLa capital de Turqu\xEDa es Estambul o Ankara?",o:["Ankara","Estambul"],gen:1,id:"gecl115"},{q:"\xBFLa capital de Marruecos es Casablanca o Rabat?",o:["Rabat","Casablanca"],gen:1,id:"gecl116"},{q:"\xBFLa capital de Nigeria es Lagos o Abuya?",o:["Abuya","Lagos"],gen:1,id:"gecl117"},{q:"\xBFLa capital de Kenia es Mombasa o Nairobi?",o:["Nairobi","Mombasa"],gen:1,id:"gecl118"},{q:"\xBFLa capital de Argelia es Or\xE1n o Argel?",o:["Argel","Or\xE1n"],gen:1,id:"gecl119"},{q:"\xBFLa capital de China es Pek\xEDn o Shangh\xE1i?",o:["Pek\xEDn","Shangh\xE1i"],gen:1,id:"gecl120"},{q:"\xBFLa capital de Corea del Sur es Busan o Se\xFAl?",o:["Se\xFAl","Busan"],gen:1,id:"gecl121"},{q:"\xBFLa capital de Tailandia es Bangkok o Chiang Mai?",o:["Bangkok","Chiang Mai"],gen:1,id:"gecl122"},{q:"\xBFLa capital de Filipinas es Ceb\xFA o Manila?",o:["Manila","Ceb\xFA"],gen:1,id:"gecl123"},{q:"\xBFLa capital de Israel es Haifa o Jerusal\xE9n?",o:["Jerusal\xE9n","Haifa"],gen:1,id:"gecl124"},{q:"\xBFLa capital de Arabia Saud\xED es Riad o Yeda?",o:["Riad","Yeda"],gen:1,id:"gecl125"},{q:"\xBFLa capital de Uruguay es Punta del Este o Montevideo?",o:["Montevideo","Punta del Este"],gen:1,id:"gecl126"},{q:"\xBFLa capital de Bolivia es Cochabamba o Sucre?",o:["Sucre","Cochabamba"],gen:1,id:"gecl127"},{q:"\xBFLa capital de Venezuela es Caracas o Maracaibo?",o:["Caracas","Maracaibo"],gen:1,id:"gecl128"},{q:"\xBFLa capital de M\xE9xico es Guadalajara o Ciudad de M\xE9xico?",o:["Ciudad de M\xE9xico","Guadalajara"],gen:1,id:"gecl129"},{q:"\xBFLa capital de Nueva Zelanda es Wellington o Auckland?",o:["Wellington","Auckland"],gen:1,id:"gecl130"},{q:"\xBFLa capital de Nicaragua es Le\xF3n o Managua?",o:["Managua","Le\xF3n"],gen:1,id:"gecl131"},{q:"\xBFLa capital de Panam\xE1 es Panam\xE1 o Col\xF3n?",o:["Panam\xE1","Col\xF3n"],gen:1,id:"gecl132"},{q:"\xBFLa capital de Rep\xFAblica Dominicana es Santo Domingo o Santiago de los Caballeros?",o:["Santo Domingo","Santiago de los Caballeros"],gen:1,id:"gecl133"},{q:"\xBFLa capital de Luxemburgo es Luxemburgo o Esch-sur-Alzette?",o:["Luxemburgo","Esch-sur-Alzette"],gen:1,id:"gecl134"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del oro es Or o Au?",o:["Au","Or"],gen:1,id:"gecl135"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del plata es Ag o Pl?",o:["Ag","Pl"],gen:1,id:"gecl136"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del sodio es So o Na?",o:["Na","So"],gen:1,id:"gecl137"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del potasio es K o P?",o:["K","P"],gen:1,id:"gecl138"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del hierro es Hi o Fe?",o:["Fe","Hi"],gen:1,id:"gecl139"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del plomo es Pb o Pl?",o:["Pb","Pl"],gen:1,id:"gecl140"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del cobre es Co o Cu?",o:["Cu","Co"],gen:1,id:"gecl141"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del esta\xF1o es Sn o Es?",o:["Sn","Es"],gen:1,id:"gecl142"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del mercurio es Me o Hg?",o:["Hg","Me"],gen:1,id:"gecl143"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del helio es He o Hl?",o:["He","Hl"],gen:1,id:"gecl144"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del carbono es Ca o C?",o:["C","Ca"],gen:1,id:"gecl145"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del nitr\xF3geno es N o Ni?",o:["N","Ni"],gen:1,id:"gecl146"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del calcio es Cl o Ca?",o:["Ca","Cl"],gen:1,id:"gecl147"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del cloro es Cl o Co?",o:["Cl","Co"],gen:1,id:"gecl148"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del azufre es Az o S?",o:["S","Az"],gen:1,id:"gecl149"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del f\xF3sforo es P o F?",o:["P","F"],gen:1,id:"gecl150"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del hidr\xF3geno es Hi o H?",o:["H","Hi"],gen:1,id:"gecl151"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del ox\xEDgeno es O o Ox?",o:["O","Ox"],gen:1,id:"gecl152"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del uranio es Ur o U?",o:["U","Ur"],gen:1,id:"gecl153"},{q:"\xBFEl s\xEDmbolo qu\xEDmico del cinc es Zn o Ci?",o:["Zn","Ci"],gen:1,id:"gecl154"},{q:"\xBF\xABFortunata y Jacinta\xBB es obra de Benito P\xE9rez Gald\xF3s o de Emilia Pardo Baz\xE1n?",o:["Benito P\xE9rez Gald\xF3s","Emilia Pardo Baz\xE1n"],gen:1,id:"gecl155"},{q:"\xBF\xABLuces de bohemia\xBB es obra de Jacinto Benavente o de Valle-Incl\xE1n?",o:["Valle-Incl\xE1n","Jacinto Benavente"],gen:1,id:"gecl156"},{q:"\xBF\xABCampos de Castilla\xBB es obra de Antonio Machado o de Miguel Hern\xE1ndez?",o:["Antonio Machado","Miguel Hern\xE1ndez"],gen:1,id:"gecl157"},{q:"\xBF\xABEl camino\xBB es obra de Carmen Laforet o de Miguel Delibes?",o:["Miguel Delibes","Carmen Laforet"],gen:1,id:"gecl158"},{q:"\xBF\xABRayuela\xBB es obra de Julio Cort\xE1zar o de Jorge Luis Borges?",o:["Julio Cort\xE1zar","Jorge Luis Borges"],gen:1,id:"gecl159"},{q:"\xBF\xABLa ciudad y los perros\xBB es obra de Gabriel Garc\xEDa M\xE1rquez o de Mario Vargas Llosa?",o:["Mario Vargas Llosa","Gabriel Garc\xEDa M\xE1rquez"],gen:1,id:"gecl160"},{q:"\xBF\xABLa casa de los esp\xEDritus\xBB es obra de Isabel Allende o de Laura Esquivel?",o:["Isabel Allende","Laura Esquivel"],gen:1,id:"gecl161"},{q:"\xBF\xABRomeo y Julieta\xBB es obra de Christopher Marlowe o de William Shakespeare?",o:["William Shakespeare","Christopher Marlowe"],gen:1,id:"gecl162"},{q:"\xBF\xABLos tres mosqueteros\xBB es obra de Alejandro Dumas o de Victor Hugo?",o:["Alejandro Dumas","Victor Hugo"],gen:1,id:"gecl163"},{q:"\xBF\xABCrimen y castigo\xBB es obra de Le\xF3n Tolst\xF3i o de Fi\xF3dor Dostoyevski?",o:["Fi\xF3dor Dostoyevski","Le\xF3n Tolst\xF3i"],gen:1,id:"gecl164"},{q:"\xBF\xABLa Eneida\xBB es obra de Virgilio o de Homero?",o:["Virgilio","Homero"],gen:1,id:"gecl165"},{q:"\xBF\xABLa Celestina\xBB es obra de Garcilaso de la Vega o de Fernando de Rojas?",o:["Fernando de Rojas","Garcilaso de la Vega"],gen:1,id:"gecl166"},{q:"\xBF\xABFuenteovejuna\xBB es obra de Lope de Vega o de Tirso de Molina?",o:["Lope de Vega","Tirso de Molina"],gen:1,id:"gecl167"},{q:"\xBF\xABRimas y leyendas\xBB es obra de Rosal\xEDa de Castro o de Gustavo Adolfo B\xE9cquer?",o:["Gustavo Adolfo B\xE9cquer","Rosal\xEDa de Castro"],gen:1,id:"gecl168"},{q:"\xBF\xABEl principito\xBB es obra de Antoine de Saint-Exup\xE9ry o de Jules Verne?",o:["Antoine de Saint-Exup\xE9ry","Jules Verne"],gen:1,id:"gecl169"}],bot:[{q:"\xBFCu\xE1l es la capital de Jap\xF3n?",o:["Tokio","Kioto","Osaka"],id:"gebo0"},{q:"\xBFCu\xE1ntos a\xF1os tiene un siglo?",o:["Cien","Mil","Diez"],id:"gebo1"},{q:"\xBFQu\xE9 animal produce la seda?",o:["El gusano de seda","La ara\xF1a","La abeja"],id:"gebo2"},{q:"\xBFEn qu\xE9 pa\xEDs est\xE1 la Torre de Pisa?",o:["Italia","Francia","Grecia"],id:"gebo3"},{q:"\xBFC\xF3mo se llama el sat\xE9lite natural de la Tierra?",o:["La Luna","Fobos","Tit\xE1n"],id:"gebo4"},{q:"\xBFQu\xE9 color tiene la bandera de Jap\xF3n adem\xE1s del blanco?",o:["Rojo","Azul","Verde"],id:"gebo5"},{q:"\xBFCu\xE1l es el plural de \xABl\xE1piz\xBB?",o:["L\xE1pices","L\xE1pizes","L\xE1pizs"],id:"gebo6"},{q:"\xBFQu\xE9 metal es l\xEDquido a temperatura ambiente?",o:["Mercurio","Plomo","Esta\xF1o"],id:"gebo7"},{q:"\xBFQu\xE9 instrumento tocaba Paco de Luc\xEDa?",o:["Guitarra","Piano","Viol\xEDn"],id:"gebo8"},{q:"\xBFCu\xE1l es la capital de Argentina?",o:["Buenos Aires","C\xF3rdoba","Rosario"],id:"gebo9"},{q:"\xBFCu\xE1ntas caras tiene un cubo?",o:["Seis","Ocho","Cuatro"],id:"gebo10"},{q:"\xBFQu\xE9 pa\xEDs regal\xF3 la Estatua de la Libertad a EE. UU.?",o:["Francia","Reino Unido","Espa\xF1a"],id:"gebo11"},{q:"\xBFEn qu\xE9 ciudad se celebra la Tomatina?",o:["Bu\xF1ol","Requena","X\xE0tiva"],id:"gebo12"},{q:"\xBFQu\xE9 gas expulsamos al respirar?",o:["Di\xF3xido de carbono","Ox\xEDgeno","Helio"],id:"gebo13"},{q:"\xBFDe qu\xE9 animal es el caviar m\xE1s famoso?",o:["Esturi\xF3n","Salm\xF3n","At\xFAn"],id:"gebo14"},{q:"\xBFQu\xE9 planeta tiene los anillos m\xE1s visibles?",o:["Saturno","Marte","Venus"],id:"gebo15"},{q:"\xBFQui\xE9n pint\xF3 \xABLa noche estrellada\xBB?",o:["Van Gogh","Monet","C\xE9zanne"],id:"gebo16"},{q:"\xBFCu\xE1l es la capital de Rusia?",o:["Mosc\xFA","San Petersburgo","Kiev"],id:"gebo17"},{q:"\xBFQu\xE9 ciudad es conocida como la Ciudad Condal?",o:["Barcelona","Girona","Tarragona"],id:"gebo18"},{q:"\xBFCu\xE1ntos d\xEDas tiene febrero en un a\xF1o no bisiesto?",o:["28","29","30"],id:"gebo19"},{q:"\xBFQu\xE9 oc\xE9ano separa Europa de Am\xE9rica?",o:["Atl\xE1ntico","Pac\xEDfico","\xCDndico"],id:"gebo20"},{q:"\xBFCu\xE1l es el animal s\xEDmbolo de Australia m\xE1s conocido?",o:["Canguro","Koala","Em\xFA"],id:"gebo21"},{q:"\xBFQu\xE9 escritor cre\xF3 a Sancho Panza?",o:["Cervantes","Quevedo","Lope de Vega"],id:"gebo22"},{q:"\xBFQu\xE9 pa\xEDs tiene m\xE1s habitantes del mundo seg\xFAn la ONU desde 2023?",o:["India","China","Estados Unidos"],id:"gebo23"},{q:"\xBFEn qu\xE9 deporte destac\xF3 Rafa Nadal?",o:["Tenis","Golf","F\xFAtbol"],id:"gebo24"},{q:"\xBFQu\xE9 selecci\xF3n gan\xF3 el Mundial de f\xFAtbol de 2010?",o:["Espa\xF1a","Holanda","Alemania"],id:"gebo25"},{q:"\xBFCu\xE1l es el nombre del himno de Francia?",o:["La Marsellesa","La Parisina","La Internacional"],id:"gebo26"},{q:"\xBFQu\xE9 color resulta de mezclar rojo y blanco?",o:["Rosa","Naranja","Granate"],id:"gebo27"},{q:"\xBFQu\xE9 ciudad espa\xF1ola tiene la Catedral con el Botafumeiro?",o:["Santiago de Compostela","Le\xF3n","Burgos"],id:"gebo28"},{q:"\xBFQu\xE9 ave pone los huevos m\xE1s grandes?",o:["Avestruz","Gallina","\xC1guila"],id:"gebo29"},{q:"\xBFCu\xE1ntos lados tiene un tri\xE1ngulo?",o:["Tres","Cuatro","Dos"],id:"gebo30"},{q:"\xBFCu\xE1l es la lengua oficial de Austria?",o:["Alem\xE1n","Austriaco","H\xFAngaro"],id:"gebo31"},{q:"\xBFQu\xE9 estaci\xF3n sigue al invierno?",o:["Primavera","Verano","Oto\xF1o"],id:"gebo32"},{q:"\xBFQu\xE9 pa\xEDs tiene como capital Lima?",o:["Per\xFA","Chile","Bolivia"],id:"gebo33"},{q:"\xBFQu\xE9 pa\xEDs tiene como capital Bogot\xE1?",o:["Colombia","Venezuela","Ecuador"],id:"gebo34"},{q:"\xBFQu\xE9 pa\xEDs tiene como capital Santiago?",o:["Chile","Argentina","Uruguay"],id:"gebo35"},{q:"\xBFC\xF3mo se llama el tren de alta velocidad espa\xF1ol?",o:["AVE","TGV","ICE"],id:"gebo36"},{q:"\xBFQu\xE9 n\xFAmero romano es la \xABL\xBB?",o:["50","100","500"],id:"gebo37"},{q:"\xBFQu\xE9 n\xFAmero romano es la \xABM\xBB?",o:["1000","500","100"],id:"gebo38"},{q:"\xBFQu\xE9 n\xFAmero romano es la \xABC\xBB?",o:["100","50","1000"],id:"gebo39"},{q:"\xBFQu\xE9 cantante es conocida como \xABLa Faraona\xBB?",o:["Lola Flores","Roc\xEDo Jurado","Isabel Pantoja"],id:"gebo40"},{q:"\xBFQu\xE9 tipo de animal es la anaconda?",o:["Serpiente","Lagarto","Pez"],id:"gebo41"},{q:"\xBFEn qu\xE9 pa\xEDs est\xE1 Machu Picchu?",o:["Per\xFA","Bolivia","M\xE9xico"],id:"gebo42"},{q:"\xBFQu\xE9 fruta se usa para hacer la sidra?",o:["Manzana","Pera","Uva"],id:"gebo43"},{q:"\xBFQu\xE9 bebida se obtiene de la uva fermentada?",o:["Vino","Sidra","Cerveza"],id:"gebo44"},{q:"\xBFCu\xE1l es el hueso que protege el cerebro?",o:["Cr\xE1neo","Estern\xF3n","Pelvis"],id:"gebo45"},{q:"\xBFDe qu\xE9 color es el caballo blanco de Santiago?",o:["Blanco","Negro","Marr\xF3n"],id:"gebo46"},{q:"\xBFCu\xE1l es el oc\xE9ano que ba\xF1a la costa este de \xC1frica?",o:["\xCDndico","Pac\xEDfico","\xC1rtico"],id:"gebo47"},{q:"\xBFQu\xE9 famoso museo de Par\xEDs alberga la Gioconda?",o:["Louvre","Orsay","Pompidou"],id:"gebo48"},{q:"\xBFQu\xE9 pa\xEDs invent\xF3 la pizza margarita?",o:["Italia","Grecia","Francia"],id:"gebo49"},{q:"\xBFCu\xE1l es el planeta m\xE1s grande del sistema solar?",o:["J\xFApiter","Saturno","Neptuno"],id:"gebo50"},{q:"\xBFQu\xE9 instrumento mide la temperatura?",o:["Term\xF3metro","Bar\xF3metro","Higr\xF3metro"],id:"gebo51"},{q:"\xBFQu\xE9 instrumento mide la presi\xF3n atmosf\xE9rica?",o:["Bar\xF3metro","Term\xF3metro","Anem\xF3metro"],id:"gebo52"},{q:"\xBFCu\xE1ntos meses tienen 31 d\xEDas?",o:["Siete","Seis","Ocho"],id:"gebo53"},{q:"\xBFQu\xE9 continente se conoce como el Viejo Continente?",o:["Europa","Asia","\xC1frica"],id:"gebo54"},{q:"\xBFC\xF3mo se llama el miedo a las ara\xF1as?",o:["Aracnofobia","Claustrofobia","Acrofobia"],id:"gebo55"},{q:"\xBFC\xF3mo se llama el miedo a las alturas?",o:["Acrofobia","Agorafobia","Hidrofobia"],id:"gebo56"},{q:"\xBFQu\xE9 escritor escribi\xF3 \xABLa vida es sue\xF1o\xBB?",o:["Calder\xF3n de la Barca","Tirso de Molina","Lope de Vega"],id:"gebo57"},{q:"\xBFQu\xE9 rey mand\xF3 construir El Escorial?",o:["Felipe II","Carlos I","Felipe IV"],id:"gebo58"},{q:"\xBFEn qu\xE9 ciudad est\xE1 la Puerta del Sol?",o:["Madrid","Toledo","Salamanca"],id:"gebo59"},{q:"\xBFEn qu\xE9 ciudad est\xE1 la Plaza del Obradoiro?",o:["Santiago de Compostela","Oviedo","Lugo"],id:"gebo60"},{q:"\xBFEn qu\xE9 ciudad est\xE1 la Concha, la famosa playa?",o:["San Sebasti\xE1n","Santander","Gij\xF3n"],id:"gebo61"},{q:"\xBFCu\xE1l es la capital de La Rioja?",o:["Logro\xF1o","Haro","Calahorra"],id:"gebo62"},{q:"\xBFCu\xE1l es la capital de Extremadura?",o:["M\xE9rida","Badajoz","C\xE1ceres"],id:"gebo63"},{q:"\xBFCu\xE1l es la capital de Cantabria?",o:["Santander","Torrelavega","Laredo"],id:"gebo64"},{q:"\xBFQu\xE9 mineral es la sal com\xFAn?",o:["Cloruro de sodio","Carbonato c\xE1lcico","Cuarzo"],id:"gebo65"},{q:"\xBFC\xF3mo se llama la cr\xEDa del caballo?",o:["Potro","Ternero","Cordero"],id:"gebo66"},{q:"\xBFC\xF3mo se llama la cr\xEDa de la oveja?",o:["Cordero","Cabrito","Potro"],id:"gebo67"},{q:"\xBFC\xF3mo se llama la casa del perro?",o:["Caseta","Madriguera","Cuadra"],id:"gebo68"},{q:"\xBFC\xF3mo se llama la casa de las abejas?",o:["Colmena","Nido","Hormiguero"],id:"gebo69"},{q:"\xBFQu\xE9 deporte se juega en Wimbledon?",o:["Tenis","Golf","Cr\xEDquet"],id:"gebo70"},{q:"\xBFQu\xE9 ciudad acogi\xF3 los Juegos Ol\xEDmpicos de 1992?",o:["Barcelona","Sevilla","Madrid"],id:"gebo71"},{q:"\xBFQu\xE9 ciudad acogi\xF3 la Expo de 1992?",o:["Sevilla","Barcelona","Zaragoza"],id:"gebo72"},{q:"\xBFQu\xE9 ciudad acogi\xF3 la Expo de 2008?",o:["Zaragoza","Valencia","Bilbao"],id:"gebo73"},{q:"\xBFQu\xE9 animal es Bambi?",o:["Un ciervo","Un conejo","Un zorro"],id:"gebo74"},{q:"\xBFCu\xE1ntas notas musicales hay en la escala b\xE1sica?",o:["Siete","Cinco","Ocho"],id:"gebo75"},{q:"\xBFQu\xE9 nota sigue a \xABdo\xBB?",o:["Re","Mi","Si"],id:"gebo76"},{q:"\xBFQu\xE9 gas da a los globos la capacidad de flotar?",o:["Helio","Ox\xEDgeno","Nitr\xF3geno"],id:"gebo77"},{q:"\xBFC\xF3mo se llama el punto m\xE1s alto de una monta\xF1a?",o:["Cumbre","Ladera","Falda"],id:"gebo78"},{q:"\xBFQu\xE9 pa\xEDs tiene un maple, la hoja de arce, en la bandera?",o:["Canad\xE1","Suiza","Jap\xF3n"],id:"gebo79"},{q:"\xBFQu\xE9 pa\xEDs tiene una cruz blanca sobre fondo rojo en la bandera?",o:["Suiza","Suecia","Noruega"],id:"gebo80"},{q:"\xBFQu\xE9 estrecho separa Espa\xF1a de Marruecos?",o:["Estrecho de Gibraltar","Estrecho de Bering","B\xF3sforo"],id:"gebo81"},{q:"\xBFQui\xE9n fue el primer presidente de los Estados Unidos?",o:["George Washington","Abraham Lincoln","Thomas Jefferson"],id:"gebo82"},{q:"\xBFQu\xE9 invent\xF3 Isaac Peral?",o:["El submarino","El autogiro","El tel\xE9fono"],id:"gebo83"},{q:"\xBFQu\xE9 invent\xF3 Juan de la Cierva?",o:["El autogiro","El submarino","La fregona"],id:"gebo84"},{q:"\xBFQu\xE9 invento espa\xF1ol sirve para limpiar suelos con palo y cubo?",o:["La fregona","El chupa chups","La escoba"],id:"gebo85"},{q:"\xBFQu\xE9 pa\xEDs es el mayor productor de aceite de oliva?",o:["Espa\xF1a","Italia","Grecia"],id:"gebo86"},{q:"\xBFCu\xE1l es el gentilicio de Huelva?",o:["Onubense","Huelve\xF1o","Olvense"],id:"gebo87"},{q:"\xBFCu\xE1l es el gentilicio de Guadalajara?",o:["Alcarre\xF1o o guadalajare\xF1o","Guadalajarino","Alcala\xEDno"],id:"gebo88"},{q:"\xBFCu\xE1l es el gentilicio de Salamanca?",o:["Salmantino","Salamanqu\xE9s","Charro de \xC1vila"],id:"gebo89"},{q:"\xBFCu\xE1ntos jugadores tiene un equipo de balonmano en pista?",o:["Siete","Seis","Cinco"],id:"gebo90"},{q:"\xBFQu\xE9 es m\xE1s grande, un oc\xE9ano o un mar?",o:["Un oc\xE9ano","Un mar","Son iguales"],id:"gebo91"},{q:"\xBFCu\xE1l es la letra n\xFAmero uno del abecedario?",o:["A","B","Z"],id:"gebo92"},{q:"\xBFQu\xE9 animal se asocia con la lentitud?",o:["Tortuga","Liebre","Gacela"],id:"gebo93"},{q:"\xBFC\xF3mo se llama el hijo de tu t\xEDo?",o:["Primo","Sobrino","Cu\xF1ado"],id:"gebo94"},{q:"\xBFC\xF3mo se llama el padre de tu madre?",o:["Abuelo","T\xEDo","Suegro"],id:"gebo95"},{q:"\xBFQu\xE9 sentido se relaciona con la nariz?",o:["Olfato","Gusto","Tacto"],id:"gebo96"},{q:"\xBFCu\xE1ntas horas tiene un d\xEDa?",o:["24","12","48"],id:"gebo97"},{q:"\xBFCu\xE1l es el resultado de 9 al cuadrado?",o:["81","18","72"],id:"gebo98"},{q:"\xBFCu\xE1l es la ra\xEDz cuadrada de 144?",o:["12","14","11"],id:"gebo99"},{q:"\xBFQu\xE9 pa\xEDs tiene forma alargada entre los Andes y el Pac\xEDfico?",o:["Chile","Per\xFA","Ecuador"],id:"gebo100"},{q:"\xBFQu\xE9 se conmemora el 12 de octubre en Espa\xF1a?",o:["Fiesta Nacional","D\xEDa de la Constituci\xF3n","D\xEDa del Trabajo"],id:"gebo101"},{q:"\xBFQu\xE9 se conmemora el 6 de diciembre en Espa\xF1a?",o:["D\xEDa de la Constituci\xF3n","Fiesta Nacional","Inmaculada"],id:"gebo102"},{q:"\xBFCu\xE1l es la capital de Austria?",o:["Viena","Salzburgo","Budapest"],gen:1,id:"gebo103"},{q:"\xBFCu\xE1l es la capital de Bulgaria?",o:["Sof\xEDa","Varna","Zagreb"],gen:1,id:"gebo104"},{q:"\xBFCu\xE1l es la capital de Dinamarca?",o:["Copenhague","Aarhus","Yakarta"],gen:1,id:"gebo105"},{q:"\xBFCu\xE1l es la capital de Eslovaquia?",o:["Bratislava","Ko\u0161ice","Jerusal\xE9n"],gen:1,id:"gebo106"},{q:"\xBFCu\xE1l es la capital de Grecia?",o:["Atenas","Sal\xF3nica","Han\xF3i"],gen:1,id:"gebo107"},{q:"\xBFCu\xE1l es la capital de Irlanda?",o:["Dubl\xEDn","Cork","Copenhague"],gen:1,id:"gebo108"},{q:"\xBFCu\xE1l es la capital de Noruega?",o:["Oslo","Bergen","Zagreb"],gen:1,id:"gebo109"},{q:"\xBFCu\xE1l es la capital de Polonia?",o:["Varsovia","Cracovia","Manila"],gen:1,id:"gebo110"},{q:"\xBFCu\xE1l es la capital de Ruman\xEDa?",o:["Bucarest","Cluj-Napoca","San Jos\xE9"],gen:1,id:"gebo111"},{q:"\xBFCu\xE1l es la capital de Suiza?",o:["Berna","Z\xFArich","\xC1msterdam"],gen:1,id:"gebo112"},{q:"\xBFCu\xE1l es la capital de Ucrania?",o:["Kiev","Odesa","Jerusal\xE9n"],gen:1,id:"gebo113"},{q:"\xBFCu\xE1l es la capital de Egipto?",o:["El Cairo","Alejandr\xEDa","Islamabad"],gen:1,id:"gebo114"},{q:"\xBFCu\xE1l es la capital de Sud\xE1frica?",o:["Pretoria","Johannesburgo","Sof\xEDa"],gen:1,id:"gebo115"},{q:"\xBFCu\xE1l es la capital de Senegal?",o:["Dakar","Saint-Louis","Bruselas"],gen:1,id:"gebo116"},{q:"\xBFCu\xE1l es la capital de T\xFAnez?",o:["T\xFAnez","Sfax","Helsinki"],gen:1,id:"gebo117"},{q:"\xBFCu\xE1l es la capital de India?",o:["Nueva Delhi","Bombay","Atenas"],gen:1,id:"gebo118"},{q:"\xBFCu\xE1l es la capital de Vietnam?",o:["Han\xF3i","Ho Chi Minh","Islamabad"],gen:1,id:"gebo119"},{q:"\xBFCu\xE1l es la capital de Indonesia?",o:["Yakarta","Surabaya","San Jos\xE9"],gen:1,id:"gebo120"},{q:"\xBFCu\xE1l es la capital de Pakist\xE1n?",o:["Islamabad","Karachi","Edimburgo"],gen:1,id:"gebo121"},{q:"\xBFCu\xE1l es la capital de Ir\xE1n?",o:["Teher\xE1n","Isfah\xE1n","Brasilia"],gen:1,id:"gebo122"},{q:"\xBFCu\xE1l es la capital de Brasil?",o:["Brasilia","R\xEDo de Janeiro","Edimburgo"],gen:1,id:"gebo123"},{q:"\xBFCu\xE1l es la capital de Paraguay?",o:["Asunci\xF3n","Ciudad del Este","Zagreb"],gen:1,id:"gebo124"},{q:"\xBFCu\xE1l es la capital de Ecuador?",o:["Quito","Guayaquil","Teher\xE1n"],gen:1,id:"gebo125"},{q:"\xBFCu\xE1l es la capital de Cuba?",o:["La Habana","Santiago de Cuba","Asunci\xF3n"],gen:1,id:"gebo126"},{q:"\xBFCu\xE1l es la capital de Estados Unidos?",o:["Washington D. C.","Nueva York","Wellington"],gen:1,id:"gebo127"},{q:"\xBFCu\xE1l es la capital de Honduras?",o:["Tegucigalpa","San Pedro Sula","Islamabad"],gen:1,id:"gebo128"},{q:"\xBFCu\xE1l es la capital de Costa Rica?",o:["San Jos\xE9","Lim\xF3n","El Cairo"],gen:1,id:"gebo129"},{q:"\xBFCu\xE1l es la capital de Guatemala?",o:["Ciudad de Guatemala","Antigua","Wellington"],gen:1,id:"gebo130"},{q:"\xBFCu\xE1l es la capital de Malta?",o:["La Valeta","Mdina","Washington D. C."],gen:1,id:"gebo131"},{q:"\xBFCu\xE1l es la capital de Estonia?",o:["Tallin","Tartu","Manila"],gen:1,id:"gebo132"},{q:"\xBFQui\xE9n escribi\xF3 \xABLa Regenta\xBB?",o:["Leopoldo Alas \xABClar\xEDn\xBB","Benito P\xE9rez Gald\xF3s","Mario Vargas Llosa"],gen:1,id:"gebo133"},{q:"\xBFQui\xE9n escribi\xF3 \xABNiebla\xBB?",o:["Miguel de Unamuno","P\xEDo Baroja","Alejandro Dumas"],gen:1,id:"gebo134"},{q:"\xBFQui\xE9n escribi\xF3 \xABPlatero y yo\xBB?",o:["Juan Ram\xF3n Jim\xE9nez","Antonio Machado","Alejandro Dumas"],gen:1,id:"gebo135"},{q:"\xBFQui\xE9n escribi\xF3 \xABLa colmena\xBB?",o:["Camilo Jos\xE9 Cela","Miguel Delibes","Jules Verne"],gen:1,id:"gebo136"},{q:"\xBFQui\xE9n escribi\xF3 \xABNada\xBB?",o:["Carmen Laforet","Ana Mar\xEDa Matute","Mario Vargas Llosa"],gen:1,id:"gebo137"},{q:"\xBFQui\xE9n escribi\xF3 \xABFicciones\xBB?",o:["Jorge Luis Borges","Ernesto Sabato","Francisco de Quevedo"],gen:1,id:"gebo138"},{q:"\xBFQui\xE9n escribi\xF3 \xABPedro P\xE1ramo\xBB?",o:["Juan Rulfo","Carlos Fuentes","William Shakespeare"],gen:1,id:"gebo139"},{q:"\xBFQui\xE9n escribi\xF3 \xABVeinte poemas de amor\xBB?",o:["Pablo Neruda","Gabriela Mistral","Julio Cort\xE1zar"],gen:1,id:"gebo140"},{q:"\xBFQui\xE9n escribi\xF3 \xABLos miserables\xBB?",o:["Victor Hugo","Alejandro Dumas","Virgilio"],gen:1,id:"gebo141"},{q:"\xBFQui\xE9n escribi\xF3 \xABGuerra y paz\xBB?",o:["Le\xF3n Tolst\xF3i","Fi\xF3dor Dostoyevski","Miguel de Unamuno"],gen:1,id:"gebo142"},{q:"\xBFQui\xE9n escribi\xF3 \xABLa Odisea\xBB?",o:["Homero","Virgilio","Valle-Incl\xE1n"],gen:1,id:"gebo143"},{q:"\xBFQui\xE9n escribi\xF3 \xABEl Lazarillo de Tormes\xBB?",o:["An\xF3nimo","Francisco de Quevedo","Victor Hugo"],gen:1,id:"gebo144"},{q:"\xBFQui\xE9n escribi\xF3 \xABEl Busc\xF3n\xBB?",o:["Francisco de Quevedo","Mateo Alem\xE1n","Isabel Allende"],gen:1,id:"gebo145"},{q:"\xBFQui\xE9n escribi\xF3 \xABDon Juan Tenorio\xBB?",o:["Jos\xE9 Zorrilla","Gustavo Adolfo B\xE9cquer","Antonio Machado"],gen:1,id:"gebo146"},{q:"\xBFQui\xE9n escribi\xF3 \xABCantares gallegos\xBB?",o:["Rosal\xEDa de Castro","Emilia Pardo Baz\xE1n","Francisco de Quevedo"],gen:1,id:"gebo147"},{q:"\xBFQui\xE9n escribi\xF3 \xABVeinte mil leguas de viaje submarino\xBB?",o:["Jules Verne","H. G. Wells","Jorge Luis Borges"],gen:1,id:"gebo148"}]},ninos:{cable:[{q:"\xBFQu\xE9 animal dice \xABmiau\xBB?",o:["El gato","El perro","La vaca","El pato","La oveja"],d:0,cat:"Ciencia y naturaleza",id:"nica0"},{q:"\xBFDe qu\xE9 color es el cielo en un d\xEDa despejado?",o:["Azul","Verde","Rojo","Naranja","Gris"],d:0,cat:"Cultura general",id:"nica1"},{q:"\xBFCu\xE1ntas ruedas tiene una bicicleta?",o:["Dos","Tres","Cuatro","Una","Seis"],d:0,cat:"Cultura general",id:"nica2"},{q:"\xBFQu\xE9 comen las vacas principalmente?",o:["Hierba","Carne","Pescado","Chocolate","Arena"],d:0,cat:"Cultura general",id:"nica3"},{q:"\xBFCu\xE1ntos dedos tiene una mano?",o:["Cinco","Cuatro","Seis","Diez","Tres"],d:0,cat:"Cultura general",id:"nica4"},{q:"\xBFQu\xE9 personaje vive en una pi\xF1a debajo del mar?",o:["Bob Esponja","Nemo","Ariel","Patricio","Doraemon"],d:0,cat:"Arte y letras",id:"nica5"},{q:"\xBFQu\xE9 animal tiene trompa?",o:["Elefante","Jirafa","Rinoceronte","Hipop\xF3tamo","Camello"],d:0,cat:"Ciencia y naturaleza",id:"nica6"},{q:"\xBFEn qu\xE9 estaci\xF3n cae la nieve normalmente?",o:["Invierno","Verano","Primavera","Oto\xF1o","Ninguna"],d:0,cat:"Cultura general",id:"nica7"},{q:"\xBFQu\xE9 fruta es amarilla y alargada?",o:["Pl\xE1tano","Fresa","Uva","Kiwi","Cereza"],d:0,cat:"Cultura general",id:"nica8"},{q:"\xBFQui\xE9n trae regalos el 6 de enero en Espa\xF1a?",o:["Los Reyes Magos","El Ratoncito P\xE9rez","El Hada Madrina","Los duendes","Los piratas"],d:0,cat:"Cultura general",id:"nica9"},{q:"\xBFQu\xE9 se usa para borrar el l\xE1piz?",o:["La goma","La regla","El sacapuntas","El comp\xE1s","La tiza"],d:0,cat:"Cultura general",id:"nica10"},{q:"\xBFC\xF3mo se llama el mu\xF1eco de nieve de \xABFrozen\xBB?",o:["Olaf","Sven","Kristoff","Hans","Groot"],d:0,cat:"Cultura general",id:"nica11"},{q:"\xBFQu\xE9 animal es Nemo?",o:["Un pez payaso","Un tibur\xF3n","Una tortuga","Un pulpo","Un delf\xEDn"],d:0,cat:"Ciencia y naturaleza",id:"nica12"},{q:"\xBFCu\xE1ntos d\xEDas tiene una semana?",o:["Siete","Cinco","Diez","Seis","Ocho"],d:0,cat:"Cultura general",id:"nica13"},{q:"\xBFQu\xE9 sale del grifo?",o:["Agua","Leche","Zumo","Arena","Aire caliente"],d:0,cat:"Cultura general",id:"nica14"},{q:"\xBFQu\xE9 animal hace la tela de ara\xF1a?",o:["La ara\xF1a","La hormiga","La abeja","El gusano","La mosca"],d:0,cat:"Ciencia y naturaleza",id:"nica15"},{q:"\xBFDe qu\xE9 color es una fresa madura?",o:["Roja","Azul","Amarilla","Blanca","Morada"],d:0,cat:"Cultura general",id:"nica16"},{q:"\xBFQu\xE9 animal salta y lleva a su cr\xEDa en una bolsa?",o:["Canguro","Conejo","Rana","Ardilla","Mono"],d:0,cat:"Ciencia y naturaleza",id:"nica17"},{q:"\xBFCu\xE1l es el planeta en el que vivimos?",o:["La Tierra","Marte","Venus","Saturno","La Luna"],d:1,cat:"Ciencia y naturaleza",id:"nica18"},{q:"\xBFQu\xE9 dinosaurio ten\xEDa brazos muy cortos y era muy famoso?",o:["Tiranosaurio rex","Triceratops","Diplodocus","Estegosaurio","Velocirraptor"],d:1,cat:"Ciencia y naturaleza",id:"nica19"},{q:"\xBFCu\xE1nto es 5 + 7?",o:["12","11","13","10","14"],d:1,cat:"Cultura general",id:"nica20"},{q:"\xBFC\xF3mo se llama el ni\xF1o de madera al que le crece la nariz?",o:["Pinocho","Peter Pan","Aladd\xEDn","Tarz\xE1n","Hansel"],d:1,cat:"Cultura general",id:"nica21"},{q:"\xBFQu\xE9 animal se convierte en mariposa?",o:["La oruga","La lombriz","El caracol","La hormiga","El grillo"],d:1,cat:"Ciencia y naturaleza",id:"nica22"},{q:"\xBFCu\xE1ntas patas tiene un perro?",o:["Cuatro","Dos","Seis","Ocho","Tres"],d:1,cat:"Cultura general",id:"nica23"},{q:"\xBFQu\xE9 instrumento se toca soplando?",o:["La flauta","El tambor","La guitarra","El piano","El tri\xE1ngulo"],d:1,cat:"Cultura general",id:"nica24"},{q:"\xBFQu\xE9 animal es el m\xE1s alto del mundo?",o:["La jirafa","El elefante","El caballo","El avestruz","El oso"],d:1,cat:"Ciencia y naturaleza",id:"nica25"},{q:"\xBFQu\xE9 color sale al mezclar rojo y amarillo?",o:["Naranja","Verde","Morado","Azul","Gris"],d:1,cat:"Cultura general",id:"nica26"},{q:"\xBFDe d\xF3nde sale la miel?",o:["De las abejas","De las vacas","De los \xE1rboles","De las flores directamente","De las gallinas"],d:1,cat:"Cultura general",id:"nica27"},{q:"\xBFQu\xE9 figura tiene tres lados?",o:["Tri\xE1ngulo","Cuadrado","C\xEDrculo","Rect\xE1ngulo","Pent\xE1gono"],d:1,cat:"Cultura general",id:"nica28"},{q:"\xBFCu\xE1l es el animal m\xE1s grande del oc\xE9ano?",o:["La ballena azul","El tibur\xF3n blanco","El pulpo gigante","El delf\xEDn","La orca"],d:1,cat:"Geograf\xEDa",id:"nica29"}],cal:[{def:"Amigo de Mickey que es un pato",f:"El __ __",a:["pato","perro","gato"],b:["Donald","Pluto","Goofy"],id:"nica0"},{def:"Princesa que perdi\xF3 un zapato de cristal",f:"La __ __",a:["Cenicienta","Bella","Blancanieves"],b:["encantadora","durmiente","sirena"],id:"nica1"},{def:"Cuento de la ni\xF1a con capa roja",f:"Caperucita __ y el __",a:["Roja","Verde","Azul"],b:["lobo","oso","zorro"],id:"nica2"},{def:"Cuento de los cerditos",f:"Los tres __ __",a:["cerditos","ositos","gatitos"],b:["constructores","cantantes","dormilones"],id:"nica3"},{def:"Lo que se dice al soplar las velas",f:"Cumplea\xF1os __ __",a:["feliz","triste","largo"],b:["a ti","de ayer","sin tarta"],id:"nica4"},{def:"Superh\xE9roe con telara\xF1as",f:"El __ __",a:["Hombre","Ni\xF1o","Se\xF1or"],b:["Ara\xF1a","Hormiga","Murci\xE9lago"],id:"nica5"},{def:"Postre fr\xEDo de verano",f:"El __ de __",a:["helado","flan","pastel"],b:["chocolate","sopa","pescado"],id:"nica6"},{def:"Lugar donde viven los peces",f:"El __ __",a:["mar","cielo","bosque"],b:["azul","naranja","seco"],id:"nica7"}],est:[{t:"Animales de granja",q:"Animales que viven en una granja",ok:["Vaca","Cerdo","Gallina","Oveja","Caballo","Cabra","Pato"],bad:["Le\xF3n","Tibur\xF3n","Ping\xFCino"],id:"nies0"},{t:"Colores",q:"Colores del arco\xEDris",ok:["Rojo","Naranja","Amarillo","Verde","Azul","A\xF1il","Violeta"],bad:["Marr\xF3n","Negro","Blanco"],id:"nies1"},{t:"Frutas",q:"Cosas que son frutas",ok:["Manzana","Pera","Pl\xE1tano","Naranja","Fresa","Uva","Sand\xEDa"],bad:["Lechuga","Zanahoria","Patata"],id:"nies2"},{t:"Juguetes",q:"Juegos que se juegan en el patio",ok:["Escondite","Pilla pilla","Comba","Rayuela","Canicas","Peonza","Bal\xF3n prisionero"],bad:["Ajedrez online","Videoconsola","Puzzle de 5000"],id:"nies3"},{t:"Cuerpo",q:"Partes del cuerpo humano",ok:["Codo","Rodilla","Hombro","Tobillo","Mu\xF1eca","Ceja","Ombligo"],bad:["Antena","Aleta","Pico"],id:"nies4"}],cla:[{q:"\xBFEl sol sale por la ma\xF1ana o por la noche?",o:["Por la ma\xF1ana","Por la noche"],id:"nicl0"},{q:"\xBFLos peces viven en el agua o en los \xE1rboles?",o:["En el agua","En los \xE1rboles"],id:"nicl1"},{q:"\xBFEl hielo es fr\xEDo o caliente?",o:["Fr\xEDo","Caliente"],id:"nicl2"},{q:"\xBFLos p\xE1jaros tienen plumas o escamas?",o:["Plumas","Escamas"],id:"nicl3"},{q:"\xBFUna vaca da leche o zumo?",o:["Leche","Zumo"],id:"nicl4"},{q:"\xBFEl elefante es grande o peque\xF1o?",o:["Grande","Peque\xF1o"],id:"nicl5"},{q:"\xBFLa luna sale de d\xEDa o de noche normalmente?",o:["De noche","De d\xEDa"],id:"nicl6"},{q:"\xBFLas zanahorias son verduras o frutas?",o:["Verduras","Frutas"],id:"nicl7"},{q:"\xBFEl fuego quema o refresca?",o:["Quema","Refresca"],id:"nicl8"},{q:"\xBFDos m\xE1s dos son cuatro o cinco?",o:["Cuatro","Cinco"],id:"nicl9"},{q:"\xBFLos gatos ladran o ma\xFAllan?",o:["Ma\xFAllan","Ladran"],id:"nicl10"},{q:"\xBFEl sem\xE1foro en rojo indica parar o pasar?",o:["Parar","Pasar"],id:"nicl11"},{q:"\xBFLos dientes se lavan con cepillo o con peine?",o:["Con cepillo","Con peine"],id:"nicl12"},{q:"\xBFLas gallinas ponen huevos o leche?",o:["Huevos","Leche"],id:"nicl13"},{q:"\xBFLa nieve es blanca o negra?",o:["Blanca","Negra"],id:"nicl14"},{q:"\xBFLas ranas croan o rugen?",o:["Croan","Rugen"],id:"nicl15"},{q:"\xBFEl le\xF3n ruge o p\xEDa?",o:["Ruge","P\xEDa"],id:"nicl16"},{q:"\xBFEl verano es caluroso o fr\xEDo en Espa\xF1a?",o:["Caluroso","Fr\xEDo"],id:"nicl17"},{q:"\xBFLos camellos viven en el desierto o en el polo?",o:["En el desierto","En el polo"],id:"nicl18"},{q:"\xBFDiez menos tres son siete o seis?",o:["Siete","Seis"],id:"nicl19"},{q:"\xBFLas ara\xF1as tienen ocho patas o seis?",o:["Ocho","Seis"],id:"nicl20"},{q:"\xBFEl tibur\xF3n es un pez o un p\xE1jaro?",o:["Un pez","Un p\xE1jaro"],id:"nicl21"},{q:"\xBFLas plantas necesitan agua o chocolate?",o:["Agua","Chocolate"],id:"nicl22"},{q:"\xBFLa pelota es redonda o cuadrada?",o:["Redonda","Cuadrada"],id:"nicl23"},{q:"\xBFEl reloj marca la hora o el tiempo que hace?",o:["La hora","El tiempo que hace"],id:"nicl24"},{q:"\xBFLos osos polares son blancos o marrones?",o:["Blancos","Marrones"],id:"nicl25"},{q:"\xBFUn triciclo tiene tres ruedas o cuatro?",o:["Tres","Cuatro"],id:"nicl26"},{q:"\xBFSe duerme en la cama o en la nevera?",o:["En la cama","En la nevera"],id:"nicl27"},{q:"\xBFLos bomberos apagan fuegos o reparten cartas?",o:["Apagan fuegos","Reparten cartas"],id:"nicl28"},{q:"\xBFLos carteros reparten cartas o pizzas?",o:["Cartas","Pizzas"],id:"nicl29"}],bot:[{q:"\xBFQu\xE9 animal dice \xABguau\xBB?",o:["El perro","El gato","El pollito"],id:"nibo0"},{q:"\xBFCu\xE1ntas patas tiene una gallina?",o:["Dos","Cuatro","Seis"],id:"nibo1"},{q:"\xBFDe qu\xE9 color es la hierba?",o:["Verde","Roja","Azul"],id:"nibo2"},{q:"\xBFQu\xE9 se pone en los pies para andar?",o:["Zapatos","Guantes","Gorro"],id:"nibo3"},{q:"\xBFQu\xE9 fruta es roja y tiene semillas por fuera?",o:["La fresa","La pera","El mel\xF3n"],id:"nibo4"},{q:"\xBFCu\xE1l es el contrario de \xABalto\xBB?",o:["Bajo","Grande","R\xE1pido"],id:"nibo5"},{q:"\xBFCu\xE1l es el contrario de \xABfr\xEDo\xBB?",o:["Caliente","Mojado","Blando"],id:"nibo6"},{q:"\xBFQu\xE9 animal tiene caparaz\xF3n y va despacio?",o:["La tortuga","El conejo","El perro"],id:"nibo7"},{q:"\xBFEn qu\xE9 mes se celebra la Navidad?",o:["Diciembre","Enero","Agosto"],id:"nibo8"},{q:"\xBFCu\xE1ntas estaciones tiene el a\xF1o?",o:["Cuatro","Tres","Seis"],id:"nibo9"},{q:"\xBFQui\xE9n vive en el Polo Norte seg\xFAn los cuentos de Navidad?",o:["Pap\xE1 Noel","El Ratoncito P\xE9rez","Peter Pan"],id:"nibo10"},{q:"\xBFQu\xE9 usamos para ver de lejos las estrellas?",o:["Un telescopio","Un microscopio","Una lupa"],id:"nibo11"},{q:"\xBFQu\xE9 animal pone huevos y dice \xABp\xEDo\xBB?",o:["El pollito","El gato","El rat\xF3n"],id:"nibo12"},{q:"\xBFQu\xE9 n\xFAmero va despu\xE9s del nueve?",o:["Diez","Ocho","Once"],id:"nibo13"},{q:"\xBFCu\xE1nto es tres por tres?",o:["Nueve","Seis","Doce"],id:"nibo14"},{q:"\xBFQu\xE9 color tiene el pl\xE1tano maduro?",o:["Amarillo","Azul","Rojo"],id:"nibo15"},{q:"\xBFQu\xE9 instrumento tiene teclas y se toca con los dedos?",o:["El piano","La bater\xEDa","La trompeta"],id:"nibo16"},{q:"\xBFQu\xE9 parte del cuerpo usamos para o\xEDr?",o:["Las orejas","Los ojos","Las manos"],id:"nibo17"},{q:"\xBFQu\xE9 animal es amigo de Winnie the Pooh y es un cerdito?",o:["Piglet","Tigger","Igor"],id:"nibo18"},{q:"\xBFC\xF3mo se llama el hada de Peter Pan?",o:["Campanilla","Aurora","Ariel"],id:"nibo19"},{q:"\xBFQui\xE9n se come las zanahorias en los dibujos?",o:["El conejo","El le\xF3n","El tibur\xF3n"],id:"nibo20"},{q:"\xBFQu\xE9 planeta tiene anillos?",o:["Saturno","La Tierra","Marte"],id:"nibo21"},{q:"\xBFDe qu\xE9 se hace el zumo de naranja?",o:["De naranjas","De manzanas","De tomates"],id:"nibo22"},{q:"\xBFQu\xE9 medio de transporte va por las v\xEDas?",o:["El tren","El barco","El avi\xF3n"],id:"nibo23"},{q:"\xBFQu\xE9 veh\xEDculo vuela?",o:["El avi\xF3n","El autob\xFAs","La bici"],id:"nibo24"},{q:"\xBFCu\xE1ntos ojos tenemos?",o:["Dos","Tres","Uno"],id:"nibo25"},{q:"\xBFQu\xE9 animal vive en una colmena?",o:["La abeja","La hormiga","El rat\xF3n"],id:"nibo26"},{q:"\xBFQu\xE9 se usa para cortar papel?",o:["Las tijeras","La goma","El pegamento"],id:"nibo27"},{q:"\xBFQu\xE9 fruta da el manzano?",o:["Manzanas","Peras","Uvas"],id:"nibo28"},{q:"\xBFQu\xE9 animal tiene rayas blancas y negras?",o:["La cebra","El caballo","El burro"],id:"nibo29"}]},fiesta:{cable:[{q:"\xBFCu\xE1ntas uvas se comen en Nochevieja en Espa\xF1a?",o:["Doce","Diez","Once","Trece","Veinte"],d:0,cat:"Cultura general",id:"fica0"},{q:"\xBFDesde qu\xE9 reloj se retransmiten tradicionalmente las campanadas?",o:["Puerta del Sol","Plaza Mayor","Cibeles","Gran V\xEDa","El Retiro"],d:0,cat:"Cultura general",id:"fica1"},{q:"\xBFQu\xE9 d\xEDa se celebra Nochebuena?",o:["24 de diciembre","25 de diciembre","31 de diciembre","6 de enero","1 de enero"],d:0,cat:"Cultura general",id:"fica2"},{q:"\xBFCu\xE1ntos son los Reyes Magos?",o:["Tres","Dos","Cuatro","Cinco","Uno"],d:0,cat:"Historia",id:"fica3"},{q:"\xBFQu\xE9 dulce navide\xF1o se hace con almendra y miel y es duro?",o:["Turr\xF3n de Alicante","Polvor\xF3n","Rosc\xF3n","Mantecado","Panettone"],d:0,cat:"Cultura general",id:"fica4"},{q:"\xBFQu\xE9 se esconde dentro del rosc\xF3n de Reyes?",o:["Una figurita y un haba","Una moneda de oro","Un anillo","Una llave","Una carta"],d:0,cat:"Historia",id:"fica5"},{q:"\xBFQu\xE9 \xE1rbol se decora en Navidad?",o:["Abeto","Olivo","Roble","Palmera","Almendro"],d:0,cat:"Cultura general",id:"fica6"},{q:"\xBFCu\xE1l de los Reyes Magos suele representarse con barba blanca?",o:["Melchor","Gaspar","Baltasar","Herodes","Nicol\xE1s"],d:0,cat:"Historia",id:"fica7"},{q:"\xBFQu\xE9 sorteo de loter\xEDa se celebra el 22 de diciembre?",o:["Sorteo Extraordinario de Navidad","El Ni\xF1o","La Primitiva","El Gordo de verano","Euromillones"],d:0,cat:"Cultura general",id:"fica8"},{q:"\xBFC\xF3mo se llama el premio mayor de la loter\xEDa de Navidad?",o:["El Gordo","El Flaco","El Grande","El Mayor","El Pedrea"],d:0,cat:"Cultura general",id:"fica9"},{q:"\xBFQu\xE9 animal tira del trineo de Pap\xE1 Noel?",o:["Renos","Caballos","Perros","Ciervos","Burros"],d:0,cat:"Ciencia y naturaleza",id:"fica10"},{q:"\xBFDe qu\xE9 color es tradicionalmente la ropa interior que da suerte en Nochevieja?",o:["Roja","Verde","Amarilla","Blanca","Azul"],d:0,cat:"Cultura general",id:"fica11"},{q:"\xBFC\xF3mo se llama el sorteo de loter\xEDa del 6 de enero?",o:["El Ni\xF1o","El Gordo","La Bonoloto","El Rey","La Quiniela"],d:1,cat:"Cultura general",id:"fica12"},{q:"\xBFCu\xE1l es el nombre del reno de nariz roja?",o:["Rudolph","Dasher","Prancer","Blitzen","Comet"],d:1,cat:"Cultura general",id:"fica13"},{q:"\xBFQu\xE9 tres regalos llevaron los Reyes Magos?",o:["Oro, incienso y mirra","Oro, plata y bronce","Pan, vino y aceite","Seda, sal y oro","Perfume, oro y lana"],d:1,cat:"Historia",id:"fica14"},{q:"\xBFQu\xE9 compositor escribi\xF3 \xABEl cascanueces\xBB?",o:["Chaikovski","Mozart","Strauss","Vivaldi","Bach"],d:1,cat:"Arte y letras",id:"fica15"},{q:"\xBFEn qu\xE9 ciudad de Alicante se fabrica tradicionalmente turr\xF3n?",o:["Jijona","Elche","Alcoy","Denia","Orihuela"],d:1,cat:"Geograf\xEDa",id:"fica16"},{q:"\xBFQu\xE9 escritor cre\xF3 \xABCuento de Navidad\xBB con el avaro Scrooge?",o:["Charles Dickens","Mark Twain","Oscar Wilde","Lewis Carroll","Jules Verne"],d:1,cat:"Arte y letras",id:"fica17"},{q:"\xBFQu\xE9 villancico empieza \xABLos peces en el r\xEDo\xBB?",o:["Los peces en el r\xEDo","Campana sobre campana","Ande, ande, ande","Hacia Bel\xE9n va una burra","El tamborilero"],d:1,cat:"Geograf\xEDa",id:"fica18"},{q:"\xBFEn qu\xE9 estepa sevillana son famosos los polvorones?",o:["Estepa","\xC9cija","Utrera","Osuna","Carmona"],d:1,cat:"Cultura general",id:"fica19"},{q:"\xBFEn qu\xE9 pa\xEDs naci\xF3 la tradici\xF3n de San Nicol\xE1s que inspir\xF3 a Pap\xE1 Noel?",o:["Turqu\xEDa (antigua Licia)","Finlandia","Noruega","Canad\xE1","Islandia"],d:1,cat:"Geograf\xEDa",id:"fica20"},{q:"\xBFQu\xE9 d\xEDa se celebra el d\xEDa de los Santos Inocentes?",o:["28 de diciembre","1 de enero","1 de abril","30 de diciembre","26 de diciembre"],d:1,cat:"Cultura general",id:"fica21"}],cal:[{def:"Lo que se desea al llegar el 1 de enero",f:"Feliz __ __",a:["A\xF1o","Mes","D\xEDa"],b:["Nuevo","Viejo","Largo"],id:"fica0"},{def:"Dulce que se reparte el d\xEDa de Reyes",f:"El __ de __",a:["rosc\xF3n","turr\xF3n","flan"],b:["Reyes","Pascua","Mayo"],id:"fica1"},{def:"Villancico del ni\xF1o que toca el tambor",f:"El __ __",a:["tamborilero","pastorcito","burrito"],b:["sabanero","navide\xF1o","cantor"],id:"fica2"},{def:"Cena del 24 de diciembre",f:"La __ de __",a:["cena","comida","merienda"],b:["Nochebuena","Reyes","Carnaval"],id:"fica3"},{def:"Carrera popular de fin de a\xF1o en Madrid",f:"La __ __",a:["San Silvestre","Marat\xF3n","Vuelta"],b:["Vallecana","Madrile\xF1a","Alcala\xEDna"],id:"fica4"},{def:"Escena del nacimiento",f:"El __ de __",a:["Bel\xE9n","Portal","Pesebre"],b:["Navidad","verano","ciudad"],id:"fica5"}],est:[{t:"Navidad",q:"Villancicos populares en Espa\xF1a",ok:["Campana sobre campana","Los peces en el r\xEDo","Ande ande ande","El tamborilero","Hacia Bel\xE9n va una burra","Noche de paz","Arre borriquito"],bad:["La Macarena","Paquito el chocolatero","Asereje"],id:"fies0"},{t:"Dulces",q:"Dulces t\xEDpicos de la Navidad en Espa\xF1a",ok:["Turr\xF3n","Mazap\xE1n","Polvor\xF3n","Mantecado","Rosc\xF3n","Peladillas","Alfajor"],bad:["Torrija","Bu\xF1uelo de viento","Mona de Pascua"],id:"fies1"},{t:"Fin de a\xF1o",q:"Tradiciones de Nochevieja en el mundo",ok:["Comer uvas","Ropa interior roja","Brindar con cava","Ver las campanadas","Pedir deseos","Fuegos artificiales","Besarse a medianoche"],bad:["Esconder huevos","Saltar hogueras","Tirar tomates"],id:"fies2"}],cla:[{q:"\xBFLas uvas se comen con las campanadas o con los cuartos?",o:["Con las campanadas","Con los cuartos"],id:"ficl0"},{q:"\xBFPap\xE1 Noel viste de rojo o de verde en la imagen popular?",o:["De rojo","De verde"],id:"ficl1"},{q:"\xBFEl rosc\xF3n se come en Reyes o en Carnaval?",o:["En Reyes","En Carnaval"],id:"ficl2"},{q:"\xBFLos Reyes Magos llegan en camello o en trineo?",o:["En camello","En trineo"],id:"ficl3"},{q:"\xBFPap\xE1 Noel entra por la chimenea o por la ventana seg\xFAn la tradici\xF3n?",o:["Por la chimenea","Por la ventana"],id:"ficl4"},{q:"\xBFEl Gordo de Navidad se sortea el 22 o el 24 de diciembre?",o:["El 22","El 24"],id:"ficl5"},{q:"\xBFEl turr\xF3n blando es el de Jijona o el de Alicante?",o:["El de Jijona","El de Alicante"],id:"ficl6"},{q:"\xBFNochevieja es el 31 de diciembre o el 1 de enero?",o:["El 31 de diciembre","El 1 de enero"],id:"ficl7"},{q:"\xBFEl Olentzero es una tradici\xF3n vasca o canaria?",o:["Vasca","Canaria"],id:"ficl8"},{q:"\xBFEl Ti\xF3 de Nadal es tradici\xF3n catalana o gallega?",o:["Catalana","Gallega"],id:"ficl9"},{q:"\xBFLos ni\xF1os de San Ildefonso cantan la loter\xEDa o villancicos en la tele?",o:["La loter\xEDa","Villancicos"],id:"ficl10"},{q:"\xBFEl cava es un vino espumoso o una cerveza?",o:["Un vino espumoso","Una cerveza"],id:"ficl11"},{q:"\xBFEl mu\xE9rdago es una planta o un dulce?",o:["Una planta","Un dulce"],id:"ficl12"},{q:"\xBFEl abeto es de hoja perenne o caduca?",o:["Perenne","Caduca"],id:"ficl13"},{q:"\xBFLos villancicos son canciones o bailes?",o:["Canciones","Bailes"],id:"ficl14"},{q:"\xBFLa cabalgata de Reyes es el 5 o el 6 de enero por la tarde?",o:["El 5","El 6"],id:"ficl15"},{q:"\xBFLos polvorones tienen almendra o chocolate en la receta cl\xE1sica?",o:["Almendra","Chocolate"],id:"ficl16"},{q:"\xBFRudolph tiene la nariz roja o azul?",o:["Roja","Azul"],id:"ficl17"},{q:"\xBFEl bel\xE9n representa el nacimiento o la boda?",o:["El nacimiento","La boda"],id:"ficl18"},{q:"\xBFEl A\xF1o Nuevo chino se celebra en la misma fecha que el nuestro?",o:["No","S\xED"],id:"ficl19"}],bot:[{q:"\xBFCu\xE1ntas campanadas marcan la medianoche?",o:["Doce","Diez","Veinte"],id:"fibo0"},{q:"\xBFQu\xE9 fruta se come con las campanadas en Espa\xF1a?",o:["Uvas","Fresas","Cerezas"],id:"fibo1"},{q:"\xBFQu\xE9 d\xEDa traen regalos los Reyes Magos?",o:["6 de enero","25 de diciembre","1 de enero"],id:"fibo2"},{q:"\xBFQu\xE9 rey mago es el m\xE1s joven en la tradici\xF3n?",o:["Gaspar","Melchor","Baltasar"],id:"fibo3"},{q:"\xBFC\xF3mo se llama la figura que reparte regalos en el Pa\xEDs Vasco?",o:["Olentzero","Ti\xF3","Mari Domingi"],id:"fibo4"},{q:"\xBFQu\xE9 dulce se hace con almendra y az\xFAcar, t\xEDpico de Toledo?",o:["Mazap\xE1n","Turr\xF3n","Polvor\xF3n"],id:"fibo5"},{q:"\xBFQu\xE9 animales acompa\xF1an al ni\xF1o en el bel\xE9n?",o:["La mula y el buey","El perro y el gato","El le\xF3n y el oso"],id:"fibo6"},{q:"\xBFQu\xE9 estrella gu\xEDa a los Reyes?",o:["La estrella de Bel\xE9n","La estrella polar","Sirio"],id:"fibo7"},{q:"\xBFQu\xE9 se brinda en Nochevieja en Espa\xF1a tradicionalmente?",o:["Cava","Leche","Agua"],id:"fibo8"},{q:"\xBFEn qu\xE9 plaza madrile\xF1a est\xE1 el reloj de las campanadas?",o:["Puerta del Sol","Plaza de Espa\xF1a","Plaza Mayor"],id:"fibo9"},{q:"\xBFQu\xE9 n\xFAmero tiene el premio llamado \xABGordo\xBB cuando toca?",o:["El primer premio","El segundo premio","La pedrea"],id:"fibo10"},{q:"\xBFQu\xE9 villancico dice \xABha nacido el ni\xF1o Dios\xBB?",o:["Ande, ande, ande","Jingle Bells","Feliz Navidad"],id:"fibo11"},{q:"\xBFQu\xE9 se escribe a los Reyes para pedir regalos?",o:["Una carta","Un mensaje de radio","Un examen"],id:"fibo12"},{q:"\xBFQu\xE9 fruta seca cubre muchas peladillas?",o:["Almendra","Avellana","Nuez"],id:"fibo13"},{q:"\xBFQu\xE9 se pone en la punta del \xE1rbol de Navidad?",o:["Una estrella","Un zapato","Una bombilla rota"],id:"fibo14"},{q:"\xBFQu\xE9 carrera popular se corre el 31 de diciembre?",o:["San Silvestre","Behobia","Marat\xF3n de Sevilla"],id:"fibo15"},{q:"\xBFQu\xE9 animal es Rudolph?",o:["Un reno","Un ciervo","Un alce"],id:"fibo16"},{q:"\xBFQu\xE9 d\xEDa se come el rosc\xF3n?",o:["6 de enero","31 de diciembre","24 de diciembre"],id:"fibo17"},{q:"\xBFCu\xE1l es el color de la flor de Pascua m\xE1s t\xEDpica?",o:["Rojo","Azul","Negro"],id:"fibo18"},{q:"\xBFQu\xE9 ni\xF1os cantan los n\xFAmeros de la loter\xEDa?",o:["Los de San Ildefonso","Los de Viena","Los de Montserrat"],id:"fibo19"}]},tele:{cable:[{q:"\xBFEn qu\xE9 cadena se emiti\xF3 \xA1Boom! entre 2014 y 2023?",o:["Antena 3","La 1","Telecinco","La Sexta","Cuatro"],d:0,cat:"Televisi\xF3n",id:"teca0"},{q:"\xBFDe qu\xE9 pa\xEDs era el formato original de \xA1Boom!?",o:["Israel","Estados Unidos","Reino Unido","Pa\xEDses Bajos","Italia"],d:0,cat:"Geograf\xEDa",id:"teca1"},{q:"\xBFQu\xE9 se corta en las bombas de \xA1Boom! para desactivarlas?",o:["Cables","Cuerdas","Cintas","Hilos de lana","Tubos"],d:0,cat:"Televisi\xF3n",id:"teca2"},{q:"\xBFQu\xE9 cable se debe cortar en \xA1Boom!?",o:["Los de las respuestas incorrectas","El de la respuesta correcta","Solo el rojo","Todos a la vez","Ninguno"],d:0,cat:"Televisi\xF3n",id:"teca3"},{q:"\xBFCu\xE1ntos concursantes tiene cada equipo en \xA1Boom!?",o:["Cuatro","Tres","Cinco","Dos","Seis"],d:0,cat:"Deportes y ocio",id:"teca4"},{q:"\xBFQu\xE9 colores tienen los equipos de \xA1Boom!?",o:["Rojo y azul","Verde y amarillo","Blanco y negro","Naranja y morado","Rosa y gris"],d:0,cat:"Deportes y ocio",id:"teca5"},{q:"\xBFDe qu\xE9 color es la bomba del bote?",o:["Dorada","Plateada","Negra","Roja","Azul"],d:0,cat:"Televisi\xF3n",id:"teca6"},{q:"\xBFQu\xE9 concurso consiste en completar un rosco de letras?",o:["Pasapalabra","Saber y ganar","Cifras y letras","Atrapa un mill\xF3n","La ruleta de la suerte"],d:0,cat:"Televisi\xF3n",id:"teca7"},{q:"\xBFEn qu\xE9 concurso se gira una ruleta para resolver paneles?",o:["La ruleta de la suerte","El precio justo","Pasapalabra","\xA1Boom!","Password"],d:0,cat:"Televisi\xF3n",id:"teca8"},{q:"\xBFQu\xE9 concurso preguntaba \xAB\xBFA cu\xE1nto?\xBB por el precio de objetos?",o:["El precio justo","Saber y ganar","Lingo","El tiempo es oro","Alta tensi\xF3n"],d:0,cat:"Televisi\xF3n",id:"teca9"},{q:"\xBFEn qu\xE9 a\xF1o se estren\xF3 \xA1Boom! en Espa\xF1a?",o:["2014","2012","2016","2010","2018"],d:1,cat:"Historia",id:"teca10"},{q:"\xBFQu\xE9 productora hizo \xA1Boom! en su etapa de Antena 3?",o:["Gestmusic","Mediacrest","Globomedia","Zeppelin","Bamb\xFA"],d:1,cat:"Televisi\xF3n",id:"teca11"},{q:"\xBFEn qu\xE9 cadena volvi\xF3 \xA1Boom! en 2024?",o:["Cuatro","La 1","Antena 3","Telecinco","La Sexta"],d:1,cat:"Televisi\xF3n",id:"teca12"},{q:"\xBFQu\xE9 equipo logr\xF3 el r\xE9cord Guinness de permanencia en \xA1Boom!?",o:["Los Lobos","RockCampers","Extremis","Uep!!","Sindulfos"],d:1,cat:"Deportes y ocio",id:"teca13"},{q:"\xBFCu\xE1ntos programas seguidos jugaron Los Lobos para el r\xE9cord Guinness?",o:["505","300","420","612","250"],d:1,cat:"Televisi\xF3n",id:"teca14"},{q:"\xBFQu\xE9 bote se llevaron Los Lobos en julio de 2019?",o:["4.130.000 \u20AC","1.935.000 \u20AC","2.326.500 \u20AC","3.000.000 \u20AC","5.000.000 \u20AC"],d:1,cat:"Televisi\xF3n",id:"teca15"},{q:"\xBFQu\xE9 bote se llevaron los RockCampers en 2016?",o:["1.935.000 \u20AC","4.130.000 \u20AC","155.000 \u20AC","990.000 \u20AC","2.500.000 \u20AC"],d:1,cat:"Televisi\xF3n",id:"teca16"},{q:"\xBFCu\xE1ntas minibombas tiene la bomba bote?",o:["Quince","Diez","Doce","Veinte","Siete"],d:1,cat:"Televisi\xF3n",id:"teca17"},{q:"\xBFDe qu\xE9 color es la bomba de la fase clasificatoria?",o:["Plateada","Dorada","Negra","Roja","Blanca"],d:1,cat:"Televisi\xF3n",id:"teca18"},{q:"\xBFCu\xE1nto crece el bote cada d\xEDa de programa?",o:["5.000 \u20AC","1.000 \u20AC","10.000 \u20AC","2.000 \u20AC","50.000 \u20AC"],d:1,cat:"Televisi\xF3n",id:"teca19"},{q:"\xBFCon qu\xE9 cantidad se reinicia el bote tras ser ganado?",o:["50.000 \u20AC","10.000 \u20AC","100.000 \u20AC","5.000 \u20AC","25.000 \u20AC"],d:1,cat:"Televisi\xF3n",id:"teca20"},{q:"\xBFCu\xE1nto vale cada acierto en la bomba clasificatoria de la etapa de Antena 3?",o:["200 \u20AC","100 \u20AC","500 \u20AC","50 \u20AC","1.000 \u20AC"],d:1,cat:"Televisi\xF3n",id:"teca21"},{q:"\xBFQu\xE9 valores ten\xEDan las cuatro bombas de la fase principal en Antena 3?",o:["200, 400, 600 y 800 \u20AC","100, 200, 300 y 500 \u20AC","300, 600, 900 y 1.200 \u20AC","500, 1.000, 1.500 y 2.000 \u20AC","50, 100, 150 y 200 \u20AC"],d:1,cat:"Televisi\xF3n",id:"teca22"},{q:"\xBFQu\xE9 fase se a\xF1adi\xF3 el 18 de octubre de 2021?",o:["Bomba caliente","Bomba estrat\xE9gica","Bomba clasificatoria","Bomba de cristal","Bomba bote"],d:1,cat:"Cultura general",id:"teca23"},{q:"\xBFEn qu\xE9 a\xF1o se a\xF1adi\xF3 la bomba estrat\xE9gica?",o:["2018","2015","2020","2014","2022"],d:1,cat:"Historia",id:"teca24"},{q:"\xBFQu\xE9 magac\xEDn ocup\xF3 la franja de \xA1Boom! en octubre de 2022?",o:["Y ahora Sonsoles","Espejo P\xFAblico","El hormiguero","M\xE1s vale tarde","S\xE1lvame"],d:1,cat:"Televisi\xF3n",id:"teca25"},{q:"\xBFCu\xE1ntos aciertos tiene cada panel de la bomba estrat\xE9gica?",o:["Siete de diez","Cinco de diez","Seis de ocho","Ocho de diez","Tres de cinco"],d:1,cat:"Televisi\xF3n",id:"teca26"},{q:"\xBFQu\xE9 concurso de Antena 3 presentaba Arturo Valls con un mill\xF3n de euros en fajos?",o:["Atrapa un mill\xF3n","\xA1Ahora caigo!","El millonario","\xA1Boom!","Pasapalabra"],d:1,cat:"Televisi\xF3n",id:"teca27"}],cal:[{def:"Equipo con r\xE9cord Guinness de \xA1Boom!",f:"Los __ __",a:["Lobos","Linces","Leones"],b:["de Boom","del bote","campeones"],id:"teca0"},{def:"Lo que se grita para pasar en la bomba bote",f:"\xA1__! y __",a:["Boom","Paso","Siguiente"],b:["a la segunda vuelta","a casa","a la final"],id:"teca1"},{def:"Concurso del rosco",f:"__ __",a:["Pasapalabra","Saber","Cifras"],b:["de Antena 3","y ganar","y letras"],id:"teca2"},{def:"Fase con dos huecos y tres segundos",f:"Bomba __ __",a:["caliente","fr\xEDa","tibia"],b:["de \xA1Boom!","del bote","de cristal"],id:"teca3"},{def:"Lo que hacen los concursantes con los cables",f:"Cortar los __ __",a:["incorrectos","correctos","rojos"],b:["uno a uno","todos juntos","ninguno"],id:"teca4"},{def:"Etapa de 2024 del concurso",f:"\xA1Boom! en __ __",a:["Cuatro","La 1","Telecinco"],b:["2024","1990","2010"],id:"teca5"}],est:[{t:"Concursos",q:"Concursos de la televisi\xF3n espa\xF1ola",ok:["Pasapalabra","Saber y ganar","Cifras y letras","El precio justo","La ruleta de la suerte","Un, dos, tres","Atrapa un mill\xF3n"],bad:["Jeopardy!","Family Feud","The Chase UK"],id:"tees0"},{t:"\xA1Boom!",q:"Elementos o fases que existen en \xA1Boom!",ok:["Bomba caliente","Fase principal","Bomba estrat\xE9gica","Bomba clasificatoria","Bomba bote","Bomba de cristal","Cable blanco"],bad:["Rosco final","Trampillas","Comod\xEDn del p\xFAblico"],id:"tees1"},{t:"Equipos de \xA1Boom!",q:"Equipos que concursaron en \xA1Boom!",ok:["Los Lobos","RockCampers","Extremis","Uep!!","Sindulfos","Los Dispersos","Beatleillas"],bad:["Los Picapiedra","Los Cazadores","Los Sabios"],id:"tees2"},{t:"Especiales",q:"Especiales que se emitieron en \xA1Boom!",ok:["Especial ni\xF1os","Fin de a\xF1o","Semana de campeones","Duelo de Titanes","Navidad famosos","Quinto aniversario","Superliga"],bad:["Especial Mundial","Especial Eurovisi\xF3n","Especial Olimpiadas"],id:"tees3"}],cla:[{q:"\xBF\xA1Boom! se estren\xF3 en 2014 o en 2016?",o:["En 2014","En 2016"],id:"tecl0"},{q:"\xBFEl formato original es israel\xED o japon\xE9s?",o:["Israel\xED","Japon\xE9s"],id:"tecl1"},{q:"\xBFHay que cortar los cables incorrectos o el correcto?",o:["Los incorrectos","El correcto"],id:"tecl2"},{q:"\xBFLa bomba bote es dorada o plateada?",o:["Dorada","Plateada"],id:"tecl3"},{q:"\xBFLa bomba clasificatoria es plateada o dorada?",o:["Plateada","Dorada"],id:"tecl4"},{q:"\xBFCada equipo tiene cuatro o cinco concursantes?",o:["Cuatro","Cinco"],id:"tecl5"},{q:"\xBFEl bote sube 5.000 o 50.000 \u20AC por programa?",o:["5.000 \u20AC","50.000 \u20AC"],id:"tecl6"},{q:"\xBFLos Lobos ganaron 4.130.000 \u20AC o 1.935.000 \u20AC?",o:["4.130.000 \u20AC","1.935.000 \u20AC"],id:"tecl7"},{q:"\xBFEn la bomba bote hay 15 o 10 minibombas?",o:["15","10"],id:"tecl8"},{q:"\xBFEn la estrat\xE9gica hay 7 o 5 respuestas correctas?",o:["7","5"],id:"tecl9"},{q:"\xBFLa bomba caliente da 3 o 10 segundos por pregunta?",o:["3 segundos","10 segundos"],id:"tecl10"},{q:"\xBFEn la fase principal las dos \xFAltimas bombas tienen 5 o 3 cables?",o:["5 cables","3 cables"],id:"tecl11"},{q:"\xBFLa etapa de Cuatro fue en 2024 o en 2020?",o:["2024","2020"],id:"tecl12"},{q:"\xBFEl equipo azul es el veterano o el nuevo?",o:["El veterano","El nuevo"],id:"tecl13"},{q:"\xBFEl equipo rojo es el aspirante o el veterano?",o:["El aspirante","El veterano"],id:"tecl14"},{q:"\xBF\xABPasapalabra\xBB tiene un rosco o una ruleta?",o:["Un rosco","Una ruleta"],id:"tecl15"},{q:"\xBF\xABLa ruleta de la suerte\xBB resuelve paneles o roscos?",o:["Paneles","Roscos"],id:"tecl16"},{q:"\xBF\xABSaber y ganar\xBB se emite en La 2 o en Antena 3?",o:["La 2","Antena 3"],id:"tecl17"},{q:"\xBF\xABCifras y letras\xBB tiene pruebas de n\xFAmeros o de baile?",o:["De n\xFAmeros","De baile"],id:"tecl18"},{q:"\xBFEl r\xE9cord Guinness de Los Lobos fue por permanencia o por velocidad?",o:["Por permanencia","Por velocidad"],id:"tecl19"}],bot:[{q:"\xBFEn qu\xE9 cadena naci\xF3 \xA1Boom! en 2014?",o:["Antena 3","Cuatro","La 1"],id:"tebo0"},{q:"\xBFCu\xE1ntas bombas tiene cada equipo en la fase principal?",o:["Cuatro","Cinco","Tres"],id:"tebo1"},{q:"\xBFQu\xE9 palabra se dice para pasar en la bomba bote?",o:["\xA1Boom!","Paso","Siguiente"],id:"tebo2"},{q:"\xBFCu\xE1ntos segundos dura la primera bomba de la fase principal?",o:["45","30","60"],id:"tebo3"},{q:"\xBFCu\xE1ntos minutos dura la bomba bote?",o:["Dos","Tres","Uno"],id:"tebo4"},{q:"\xBFQu\xE9 equipo se llev\xF3 el bote m\xE1s grande?",o:["Los Lobos","RockCampers","Furi\xF3"],id:"tebo5"},{q:"\xBFQu\xE9 equipo gan\xF3 el bote en junio de 2016?",o:["RockCampers","Los Lobos","Boomberos"],id:"tebo6"},{q:"\xBFQu\xE9 equipo fue el primero en llevarse el bote, en 2014?",o:["Boomberos","Furi\xF3","Extremis"],id:"tebo7"},{q:"\xBFCu\xE1ntas respuestas hay en un panel de la estrat\xE9gica?",o:["Diez","Doce","Siete"],id:"tebo8"},{q:"\xBFQu\xE9 ventaja permite eliminar una respuesta incorrecta?",o:["Cable blanco","Siguen todos","Uno menos"],id:"tebo9"},{q:"\xBFQu\xE9 ventaja evita que nadie sea eliminado en una bomba?",o:["Siguen todos","Cable blanco","Elige tema"],id:"tebo10"},{q:"\xBFQu\xE9 ventaja silencia a un rival en una pregunta?",o:["Uno menos","Elige tema","Rescate"],id:"tebo11"},{q:"\xBFQu\xE9 ventaja de la estrat\xE9gica recupera a un compa\xF1ero?",o:["Rescate","Cable blanco","Uno menos"],id:"tebo12"},{q:"\xBFCu\xE1nto tiempo extra da la ventaja de ampliar el turno?",o:["Diez segundos","Treinta segundos","Un minuto"],id:"tebo13"},{q:"\xBFCu\xE1nto dura el turno normal de la clasificatoria?",o:["Dos minutos","Un minuto","Tres minutos"],id:"tebo14"},{q:"\xBFCu\xE1ntos programas hizo \xA1Boom! en Antena 3 aproximadamente?",o:["1977","505","3000"],id:"tebo15"},{q:"\xBFQu\xE9 concurso de Antena 3 ten\xEDa trampillas para el dinero?",o:["Atrapa un mill\xF3n","Pasapalabra","\xA1Boom!"],id:"tebo16"},{q:"\xBFQu\xE9 concurso tiene \xABEl Rosco\xBB como prueba final?",o:["Pasapalabra","Saber y ganar","Password"],id:"tebo17"},{q:"\xBFCu\xE1ntos espectadores vieron el bote de Los Lobos como m\xE1ximo?",o:["4.272.000","2.300.000","1.000.000"],id:"tebo18"},{q:"\xBFQu\xE9 cuota de pantalla logr\xF3 el bote de Los Lobos?",o:["28 %","12 %","50 %"],id:"tebo19"},{q:"\xBFEn qu\xE9 fecha se emiti\xF3 por \xFAltima vez \xA1Boom! en Cuatro?",o:["5 de diciembre de 2024","9 de septiembre de 2024","21 de octubre de 2022"],id:"tebo20"},{q:"\xBFCu\xE1l fue el n\xFAmero de temporadas de \xA1Boom!?",o:["Diez","Cinco","Quince"],id:"tebo21"},{q:"\xBFCon qu\xE9 bomba se apuesta el valor de una bomba de la fase principal?",o:["Bomba de cristal","Bomba caliente","Bomba bote"],id:"tebo22"},{q:"\xBFCu\xE1nto dinero m\xE1ximo se puede sumar en la fase principal de Antena 3?",o:["2.000 \u20AC","1.100 \u20AC","3.000 \u20AC"],id:"tebo23"}]}}};var kd={abort:!0},Nn={run:0},Ce=i=>{if(i!==Nn.run)throw kd},Rn=i=>i==="red"?"blue":"red",Lt=i=>fe.names[i],sn=Te("#play");function oi(i){return sn.innerHTML=i,sn.classList.remove("hidden"),sn}function Li(){sn.classList.add("hidden"),sn.innerHTML=""}var Vo=Te("#overlay");function Gd(i){return Vo.innerHTML=i,Vo.classList.remove("hidden"),Vo}function Ns(){Vo.classList.add("hidden"),Vo.innerHTML=""}function si(i,e){return Pi?Promise.resolve(e):(Gd(i),new Promise(t=>Vo.querySelectorAll("[data-z]").forEach(n=>n.addEventListener("click",()=>{Ns(),ze.play("select",{volume:.5}),t(n.dataset.z)},{once:!0}))))}function ri(i,e=""){Te("#hPhase").innerHTML=`${i}${e?`<small>${e}</small>`:""}`}var Cn=i=>!Pi&&i===mt.human&&!fe.aiOnly;function rs(i){let e={facil:.55,normal:.7,dificil:.82}[mt.ai]||.7;return e+=fe.aiBonus||0,i===mt.human&&(e=.78),fe.silenced&&fe.silenced.team===i&&(e-=.08),Math.max(.3,Math.min(.95,e))}var qi=i=>[0,1,2,3].filter(e=>fe.alive[i][e]),zd=Hd.pools,ll=new Set,cl={pool:"general"};function Ra(i,e=null,t=cl.pool){let n=o=>!ll.has(o.id)&&(!e||e(o)),a=zd[t][i].filter(n);!a.length&&t!=="general"&&(a=zd.general[i].filter(n)),a.length||(a=zd[t][i].filter(o=>!e||e(o)),a.length||(a=zd.general[i]));let s=Yt(a);return ll.add(s.id),s}function dl(i,{display:e=!0,ticks:t=!0,onTick:n=null}={}){let a={left:i,total:i,running:!0,stopped:!1},s=Math.ceil(i),o=Te("#timer");return e&&(o.classList.remove("hidden"),o.textContent=Yh(i)),a.done=new Promise(r=>{a.res=r,a.off=Go(l=>{if(!a.running||a.stopped)return;a.left-=l/da,e&&(o.textContent=Yh(Math.max(0,a.left)),o.classList.toggle("low",a.left<=10)),n&&n(a);let c=Math.ceil(a.left);c!==s&&(s=c,t&&!Ri&&(c<=10&&c>0?ze.play("beep",{volume:.35}):c>0&&ze.play(c%2?"tick":"tock",{volume:.25}))),a.left<=0&&(a.left=0,a.stop(),r("time"))})}),a.stop=()=>{a.stopped=!0,a.off&&a.off(),e&&o.classList.remove("low"),a.res&&a.res("stopped")},a.pause=()=>{a.running=!1},a.resume=()=>{a.running=!0},a}var Yh=i=>(i=Math.ceil(i),i>=60?`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`:String(i)),Pa=()=>{Te("#timer").classList.add("hidden"),Te("#timer").classList.remove("low")},Ds=i=>new Promise(e=>setTimeout(()=>e("timeout"),i*da));async function jh(i=ht.bomb,e=1){ua.explode(i,e),ze.play(e<.6?"miniBoom":"explosion"),We.shake=.9*e,xe.shake=.5,Nt.event("fall"),Tn("ooh"),[...tt.red,...tt.blue].forEach(t=>{t.position.distanceTo(i)<3.2&&(t.userData.mood="shock")}),await At(1600),[...tt.red,...tt.blue].forEach(t=>{t.userData.mood==="shock"&&(t.userData.mood=null)})}var $h={blanco:["Cable blanco","Elimina una respuesta incorrecta en una bomba"],siguen:["Siguen todos","En una bomba, si explota, nadie es eliminado"],tema:["Elige tema","Escoge la categor\xEDa de una de vuestras bombas"],uno:["Uno menos","Un rival se queda callado en una de sus bombas"],rescate:["Rescate","Recupera a un compa\xF1ero eliminado"],mas:["+10 segundos","Tu turno de la clasificatoria dura 2:10"],menos:["\u221210 segundos","El turno rival de la clasificatoria dura 1:50"]};async function Qh(i,e,t){fe.turn=e,ln();let n=Cn(e)?await si(`<div class="txt">${Lt(e)}: elegid ventaja</div><div class="ovb">${t.map(s=>`<button class="ov-btn ${e==="blue"?"blue":""}" data-z="${s}">${$h[s][0]}<small>${$h[s][1]}</small></button>`).join("")}</div>`,t[0]):(await At(1200),t.includes("rescate")?"rescate":Yt(t));Ce(i),Ot(`${Lt(e)} elige: <b>${$h[n][0]}</b>`,2600,""),ze.play("stinger",{volume:.5});let a={blanco:"advBlanco",siguen:"advSiguen",tema:"advTema",uno:"advUno",rescate:"advRescate",mas:"advMas",menos:"advMenos"}[n];return Xe.host(),await st(a),Ce(i),n}async function Vd(i,{train:e=!1}={}){ri("Bomba caliente","3 segundos por pregunta \xB7 la bomba pasa de mano en mano");let t=[],n=qi("red"),a=qi("blue");for(let M=0;M<2;M++)t.push(tt.red[n[M%n.length]]),t.push(tt.blue[a[M%a.length]]);let s=[-2.1,-.7,.7,2.1];await Promise.all(t.map((M,R)=>ii(M,Me(s[R],.3,1.9)))),t.forEach(M=>rn(M,Me(M.position.x*.3,0,6))),Rt.position.set(2.6,.3,1.4),rn(Rt,Me(0,0,1.9));let o={red:0,blue:0};Ae.mode="cal",Ae.data={def:"",f:"",pts:o},Xe.caliente(),e||(await st("calIntro"),Ce(i));let r=0,l=null,c=null,u=null,p=()=>{l=Ra("cal"),c=Gn(l.a),u=Gn(l.b),Ae.data.def=l.def,Ae.data.f=l.f.replace("__","___").replace("__","___")};p(),xe.mini.visible=!0,Ca(t[0]),t[0].userData.mood="hold",await st("calGo"),Ce(i);let d=e?45:38+Math.random()*22,h=dl(d,{display:!1,ticks:!1}),g=ze.play("fuse",{loop:!0,volume:.35}),_=ze.music("caliente",!0),m=!1;h.done.then(M=>{M==="time"&&(m=!0)});try{for(;!m;){Ce(i);let b=t[r],w=b.userData.team;fe.turn=w,ln(),Ca(b),t.forEach(S=>S.userData.mood=S===b?"hold":null),It(b.position.clone().add(Me(.4,1.7,2.2)),b.position.clone().add(Me(0,1.35,0)),!1,4);let T=Cn(w),L,v=`<div class="q"><small>${l.def}</small>${l.f.replace("__",`<u>${"&nbsp;".repeat(6)}</u>`).replace("__",`<u>${"&nbsp;".repeat(6)}</u>`)}</div><div class="who ${w}">\u{1F4A3} ${b.userData.name} (${Lt(w)})</div><div class="bar"><div id="calBar" style="width:100%"></div></div>`;if(T){oi(v+`<div class="row" id="ra">${c.map((I,U)=>`<button class="opt" data-a="${U}">${I}</button>`).join("")}</div><div class="row" id="rb">${u.map((I,U)=>`<button class="opt" data-b="${U}">${I}</button>`).join("")}</div>`);let S={a:null,b:null},C=new Promise(I=>{sn.querySelectorAll("[data-a]").forEach(U=>U.onclick=()=>{S.a=+U.dataset.a,sn.querySelectorAll("[data-a]").forEach(Y=>Y.classList.toggle("sel",Y===U)),S.b!=null&&I(S)}),sn.querySelectorAll("[data-b]").forEach(U=>U.onclick=()=>{S.b=+U.dataset.b,sn.querySelectorAll("[data-b]").forEach(Y=>Y.classList.toggle("sel",Y===U)),S.a!=null&&I(S)})}),P=performance.now(),B=setInterval(()=>{let I=Te("#calBar");I&&(I.style.width=Math.max(0,100-(performance.now()-P)/(3e3*da)*100)+"%")},50);L=await Promise.race([C,Ds(3e3),h.done.then(()=>"boom")]),clearInterval(B)}else{oi(v);let S=rs(w)*.92,C=700+Math.random()*1900;L=await Promise.race([Ds(C),h.done.then(()=>"boom")])==="boom"?"boom":Math.random()<S?{a:c.indexOf(l.a[0]),b:u.indexOf(l.b[0])}:Math.random()<.3?"timeout":{a:(c.indexOf(l.a[0])+1)%3,b:u.indexOf(l.b[0])}}if(Ce(i),L==="boom"||m||(L!=="timeout"&&c[L.a]===l.a[0]&&u[L.b]===l.b[0]?(o[w]++,ze.play("ok"),Ae.data.f=l.f.replace("__",l.a[0]).replace("__",l.b[0]),Ot(`\u2714 ${l.f.replace("__",l.a[0]).replace("__",l.b[0])}`,1500,""),Vi(b,Yt(Tm)),Tn("clap"),await At(700),p()):(ze.play("bad"),Ot(L==="timeout"?"\u23F1 \xA1Tiempo! Pasa la bomba":"\u2716 Fallo. \xA1Pasa la bomba!",1200,""),await At(350)),m))break;r=(r+1)%t.length,ze.play("whoosh",{volume:.3})}Ce(i),Li(),g.pause(),ze.stopMusic();let M=t[r],R=M.userData.team;await jh(xe.mini.position.clone(),.45),xe.mini.visible=!1,Ca(null),o[R]--,Ot(`\u{1F4A5} Le explota a ${M.userData.name}: ${Lt(R)} resta un punto`,2600,""),Xe.caliente(),await st("calBoom"),Ce(i)}finally{h.stop(),g.pause(),xe.mini.visible=!1,Ca(null)}let f=o.red>o.blue?"red":o.blue>o.red?"blue":null;if(Ot(`Marcador: ${Lt("red")} ${o.red} \xB7 ${Lt("blue")} ${o.blue}`,3e3,""),!f){await st("calTie"),Ce(i);for(let M=0;M<8&&!f;M++){let R={};for(let b of["red","blue"]){let w=tt[b][qi(b)[0]];Ca(null),Xe.team(b);let T=Ra("cal"),L=Gn(T.a),v=Gn(T.b),y;if(Cn(b)){oi(`<div class="q"><small>Muerte s\xFAbita \xB7 ${w.userData.name}</small>${T.def}<br>${T.f}</div><div class="row">${L.map((B,I)=>`<button class="opt" data-a="${I}">${B}</button>`).join("")}</div><div class="row">${v.map((B,I)=>`<button class="opt" data-b="${I}">${B}</button>`).join("")}</div>`);let S={},C=new Promise(B=>{sn.querySelectorAll("button").forEach(I=>I.onclick=()=>{I.dataset.a!=null?S.a=+I.dataset.a:S.b=+I.dataset.b,I.parentNode.querySelectorAll("button").forEach(U=>U.classList.toggle("sel",U===I)),S.a!=null&&S.b!=null&&B(S)})}),P=await Promise.race([C,Ds(6e3)]);y=P!=="timeout"&&L[P.a]===T.a[0]&&v[P.b]===T.b[0]}else await At(1500),y=Math.random()<rs(b);Ce(i),Li(),ze.play(y?"ok":"bad"),Ot(`${Lt(b)}: ${y?"\u2714 ":"\u2716 "}${T.f.replace("__",T.a[0]).replace("__",T.b[0])}`,1800,""),R[b]=y,await At(1200)}R.red!==R.blue&&(f=R.red?"red":"blue")}f||(f=Math.random()<.5?"red":"blue")}return Li(),t.forEach(M=>M.userData.mood=null),ze.play("stinger",{volume:.6}),tt[f].forEach(M=>M.userData.mood="cheer"),Tn("cheer"),Nt.event("win"),Ae.mode="big",Ae.data={big:Lt(f).toUpperCase(),small:"GANA LA BOMBA CALIENTE",col:la[f]},Xe.teamWide(f),await st("calWin"),Ce(i),tt[f].forEach(M=>M.userData.mood=null),Rt.position.copy(ht.host),rn(Rt,Me(-1.5,0,9)),await Promise.all([ha("red"),ha("blue")]),f}async function Jm(i){ri("Bomba de cristal","Apuesta por una de tus bombas"),Xe.host(),await st("cristal"),Ce(i),fe.cristal={},fe.cristalWon={red:0,blue:0};for(let e of["red","blue"]){fe.turn=e,ln();let t=Cn(e)?+await si(`<div class="txt">${Lt(e)}: bomba de cristal</div><div class="sub2">Si desactiv\xE1is esta bomba, su valor es vuestro aunque perd\xE1is.</div><div class="ovb">${[200,400,600,800].map((n,a)=>`<button class="ov-btn" data-z="${a}">Bomba ${a+1}<small>${bt(n)}</small></button>`).join("")}</div>`,"1"):(await At(900),Math.random()<.6?1:2);Ce(i),fe.cristal[e]=t,Ot(`${Lt(e)} apuesta por la <b>bomba ${t+1}</b> (${bt([200,400,600,800][t])})`,2400,""),ze.play("select"),await At(1500)}}var i1=[200,400,600,800],a1=[45,45,60,60];async function Zm(i,e){ri("Fase principal","4 bombas por equipo"),Xe.wide(),await st("fpIntro"),Ce(i);let t={red:0,blue:0},n=e;for(;t.red<4||t.blue<4;){if(Ce(i),t[n]>=4||qi(n).length===0){if(n=Rn(n),t[n]>=4||qi(n).length===0)break;continue}let a=await qd(i,n,t[n]);t[n]++,a==="boom"&&t[Rn(n)]<4&&(n=Rn(n),Xe.host(),await st("switchTeam"),Ce(i))}fe.turn=null,ln()}function s1(i,e){let t=i<2?0:1,n=i<2?4:5,a=Ra("cable",r=>e?r.cat===e:r.d===t)||Ra("cable"),s=Gn(a.o.slice(1)).slice(0,n-1),o=Gn([a.o[0],...s]);return{id:a.id,q:a.q,opts:o,c:o.indexOf(a.o[0]),cat:a.cat}}async function qd(i,e,t,{train:n=!1}={}){fe.turn=e,ln();let a=Cn(e),s=i1[t],o=Math.round(a1[t]*(mt.timeMul||1)),r=t<2?4:5;if(ri(`${Lt(e)} \xB7 Bomba ${t+1}`,`${bt(s)} \xB7 ${o} s \xB7 ${r} cables${fe.cristal&&fe.cristal[e]===t?" \xB7 \u{1F48E} CRISTAL":""}`),xe.setKind("black"),xe.clearCables(),xe.time=o,xe.value=bt(s),xe.dirty=!0,ai(null),!n&&_t.shelf&&_t.shelf.take(e,t),n)await xi(e);else{let C=Rn(e);ha(C),await xi(e)}Ce(i);let l=fe.adv&&fe.adv[e]||{},c=null,u=!1;if(!n&&(l.tema===1||l.siguen===1)){let C=[];if(a){let P=await si(`<div class="txt">Bomba ${t+1} \xB7 ${bt(s)}</div><div class="sub2">\xBFUs\xE1is alguna ventaja en esta bomba?</div><div class="ovb">${l.tema===1?'<button class="ov-btn" data-z="tema">Elige tema</button>':""}${l.siguen===1?'<button class="ov-btn" data-z="siguen">Siguen todos</button>':""}<button class="ov-btn alt" data-z="no">Ahora no</button></div>`,"no");P!=="no"&&C.push(P)}else l.tema===1&&t===2&&C.push("tema"),l.siguen===1&&t===3&&C.push("siguen");for(let P of C)if(l[P]=2,P==="siguen"&&(u=!0,Ot(`${Lt(e)} activa <b>Siguen todos</b> en esta bomba`,2500,"")),P==="tema"){let B=Gn([...new Set(Hd.pools[cl.pool].cable.concat(Hd.pools.general.cable).filter(I=>!ll.has(I.id)).map(I=>I.cat))]).slice(0,3);c=a?await si(`<div class="txt">Elige tema</div><div class="ovb">${B.map(I=>`<button class="ov-btn" data-z="${I}">${I}</button>`).join("")}</div>`,B[0]):Yt(B),Ot(`Tema elegido: <b>${c}</b>`,2200,"")}}fe.silenced=null;let p=fe.adv&&fe.adv[Rn(e)]||{};if(!n&&p.uno===1&&t>=1&&qi(e).length>1&&(Cn(Rn(e))||t===2)){let C=Cn(Rn(e));if(!C||await si(`<div class="txt">\xBFAplic\xE1is \xABUno menos\xBB en la bomba ${t+1} de ${Lt(e)}?</div><div class="ovb"><button class="ov-btn" data-z="si">S\xED</button><button class="ov-btn alt" data-z="no">M\xE1s adelante</button></div>`,"si")==="si"){p.uno=2;let B=qi(e),I=C?+await si(`<div class="txt">\xBFQui\xE9n se queda callado?</div><div class="ovb">${B.map(U=>`<button class="ov-btn ${e==="blue"?"blue":""}" data-z="${U}">${tt[e][U].userData.name}</button>`).join("")}</div>`,String(B[0])):Yt(B);fe.silenced={team:e,k:I},tt[e][I].userData.mood="sad",Ot(`\u{1F910} ${tt[e][I].userData.name} no puede hablar en esta bomba (Uno menos)`,2800,"")}}Ce(i);let d=s1(t,c),h=d.opts.map(()=>null);xe.setCables(r),ai(d.opts,h),Ae.mode="cables",Ae.data={title:`${Lt(e).toUpperCase()} \xB7 BOMBA ${t+1} \xB7 ${bt(s)}`,q:d.q,opts:d.opts,state:h},Xe.bomb(),n||(await st("b"+(t+1)),Ce(i)),Xe.panel(),await Od(d.id,d.q),Ce(i),!n&&mt.jokes&&Math.random()<.18&&(Xe.host(),await st(Yt(Ad)),Tn("laugh"),Ce(i)),Xe.bomb(),await st("cutGo"),Ce(i);let g=!n&&l.blanco===1,_=dl(o,{onTick:C=>{xe.time=C.left}}),m=ze.music("tension",!0),f=null,M,R=new Promise(C=>M=C),b=C=>{f||(f=C,M(C))};_.done.then(C=>{C==="time"&&b("time")});let w=()=>h.filter((C,P)=>P!==d.c&&C!=="cut").length,T=(C,P=!1)=>{if(f||h[C]==="cut")return;if(C===d.c){h[C]="bad",b("boom");return}h[C]="cut";let B=xe.cut(C);ze.play("snip"),B&&ua.sparkle(B,24),ai(d.opts,h),L(),!P&&Math.random()<.35&&st(Yt(["ok1","ok2","ok3","ok4"])),w()===0&&b("defused")},L=()=>{if(!a)return;sn.querySelectorAll(".cable").forEach((P,B)=>{P.classList.toggle("cut",h[B]==="cut"),P.disabled=h[B]==="cut"});let C=Te("#btnBlanco");C&&(C.disabled=!g)},v=tt[e].filter((C,P)=>fe.alive[e][P]);if(a){oi(`<div class="q"><small>Bomba ${t+1} \xB7 ${bt(s)} \xB7 corta las respuestas INCORRECTAS</small>${d.q}</div><div class="row">${d.opts.map((B,I)=>`<button class="cable" data-i="${I}"><i style="background:${Lo[I]}">${sl[I]}</i><span>${B}</span><em>\u2702</em></button>`).join("")}</div>${g?'<div class="row"><button class="aux" id="btnBlanco">\u26AA Usar cable blanco</button></div>':""}`),sn.querySelectorAll(".cable").forEach(B=>B.onclick=()=>T(+B.dataset.i));let C=Te("#btnBlanco");C&&(C.onclick=()=>{if(!g)return;g=!1,l.blanco=2;let B=Gn(d.opts.map((I,U)=>U).filter(I=>I!==d.c&&h[I]!=="cut"))[0];st("blancoUse"),B!=null&&T(B,!0),L()}),Oo.cable=B=>T(B);let P=B=>{let I="12345".indexOf(B.key);I>=0&&I<r&&T(I)};Ls.add(P),R.then(()=>Ls.delete(P)),mt.hints&&(async()=>{let B=0;for(;!f&&B<3&&(await At(4500+Math.random()*5e3),!(f||i!==Nn.run));){let I=v.filter(F=>!(fe.silenced&&fe.silenced.team===e&&F.userData.k===fe.silenced.k));if(!I.length)break;let U=Yt(I),Y=d.opts.map((F,k)=>k).filter(F=>h[F]!=="cut");if(Y.length<2)break;let se=Math.random()<.8?Yt(Y.filter(F=>F!==d.c)):d.c;Vi(U,Yt(Em).replace("{x}",`la ${sl[se]} (${d.opts[se]})`)),U.userData.mood="think",setTimeout(()=>{U.userData.mood==="think"&&(U.userData.mood=null)},2e3),B++}})()}else{oi(`<div class="q"><small>${Lt(e)} juega la bomba ${t+1} \xB7 ${bt(s)}</small>${d.q}</div><div class="row">${d.opts.map((P,B)=>`<button class="cable" disabled><i style="background:${Lo[B]}">${sl[B]}</i><span>${P}</span></button>`).join("")}</div>`);let C=()=>sn.querySelectorAll(".cable").forEach((P,B)=>P.classList.toggle("cut",h[B]==="cut"));(async()=>{let P=rs(e),B=Math.min(.97,[.9,.84,.66,.54][t]*(P/.7)),I=Math.random()<B,U=Gn(d.opts.map((J,se)=>se).filter(J=>J!==d.c)),Y=I?-1:Math.floor(Math.random()*U.length);g&&t>=2&&(await At(1500),g=!1,l.blanco=2,st("blancoUse"),T(U.shift(),!0),C());for(let J=0;J<U.length+1&&!f;J++){let se=Yt(v);if(se.userData.mood="think",await At((1800+Math.random()*3800)*Math.min(1,o/50)),se.userData.mood="cut",f||i!==Nn.run)return;if(J===Y){T(d.c);return}J<U.length&&(T(U[J]),C()),se.userData.mood=null}})()}Pi&&a&&(async()=>{let P=Gn(d.opts.map((B,I)=>I).filter(B=>B!==d.c));for(let B of P){if(await At(1200),f)return;if(Math.random()>.85){T(d.c);return}T(B)}})();let y=await R;if(_.stop(),ze.stopMusic(),Oo.cable=null,Ce(i),v.forEach(C=>{C.userData.mood!=="sad"&&(C.userData.mood=null)}),fe.silenced){let C=tt[fe.silenced.team][fe.silenced.k];C.userData.mood=null}let S;return y==="defused"?(xe.markCable(d.c,"ok"),h[d.c]="ok",ze.play("defuse"),Nt.event("correct"),xe.time=null,xe.value="DESACTIVADA",xe.dirty=!0,a&&sn.querySelectorAll(".cable").forEach((C,P)=>C.classList.add(P===d.c?"ok":"cut")),v.forEach(C=>C.userData.mood="cheer"),Tn("cheer"),Xe.bombTeam(),await st(Yt(["defused","defused2"])),Ce(i),n||(fe.money[e]+=s,fe.cristal&&fe.cristal[e]===t&&(fe.cristalWon[e]=s,Ot(`\u{1F48E} \xA1Bomba de cristal desactivada! ${bt(s)} asegurados para ${Lt(e)}`,3e3,"")),ln()),v.forEach(C=>C.userData.mood=null),S="ok"):(h[d.c]="bad",a&&sn.querySelectorAll(".cable").forEach((C,P)=>C.classList.toggle("bad",P===d.c)),ai(d.opts,h),xe.time=0,xe.dirty=!0,await jh(),Ce(i),xe.time=null,xe.value="\xA1BOOM!",xe.dirty=!0,Xe.bombTeam(),await st(y==="time"?"timeBoom":Yt(["boom1","boom2"])),Ce(i),Ot(`La respuesta correcta era: <b>${d.opts[d.c]}</b>`,3e3,""),n||await o1(i,e,u),S="boom"),Li(),Pa(),await At(600),xe.clearCables(),ai(null),xe.time=null,xe.value="",xe.dirty=!0,fe.silenced=null,n||await ha(e),S}async function o1(i,e,t){if(t){await st("siguenSave"),Ce(i);return}let n=qi(e);if(n.length<=1){Ot("Solo queda un concursante: sigue jugando.",2500,"");return}Xe.host(),await st("elimChoose"),Ce(i);let a=Rn(e),s;Cn(a)?s=+await si(`<div class="txt">${Lt(a)}: \xBFqui\xE9n de ${Lt(e)} deja de jugar?</div><div class="ovb">${n.map(r=>`<button class="ov-btn ${e==="blue"?"blue":""}" data-z="${r}">${tt[e][r].userData.name}</button>`).join("")}</div>`,String(n[0])):(await At(1200),s=Yt(n)),Ce(i);let o=tt[e][s];fe.alive[e][s]=0,ln(),o.userData.mood="sad",It(o.position.clone().add(Me(.6,1.7,2.2)),o.position.clone().add(Me(0,1.3,0))),Ot(`${o.userData.name} pasa al banquillo`,2400,""),await st("elimOut"),Ce(i),await ii(o,Bd(e,s)),o.userData.mood="sit",rn(o,Me(0,0,0))}async function Jh(i,{train:e=!1}={}){ri("Bomba estrat\xE9gica","6 temas \xB7 7 respuestas buenas de 10"),Pa(),Xe.wide(),e||(await st("estIntro"),Ce(i));let t={};for(let l of["red","blue"]){let c=qi(l);t[l]=Cn(l)&&c.length>1?+await si(`<div class="txt">\xBFQui\xE9n juega la estrat\xE9gica por ${Lt(l)}?</div><div class="ovb">${c.map(u=>`<button class="ov-btn" data-z="${u}">${tt[l][u].userData.name}</button>`).join("")}</div>`,String(c[0])):c[0]}Ce(i);let n={red:tt.red[t.red],blue:tt.blue[t.blue]};await Promise.all([ii(n.red,Me(-1.2,.3,1.95)),ii(n.blue,Me(1.2,.3,1.95))]),rn(n.red,Me(-1.2,0,8)),rn(n.blue,Me(1.2,0,8));let a=[];for(let l=0;l<6;l++)a.push(Ra("est"));let s={red:0,blue:0},o={red:!0,blue:!0};for(let l=0;l<2;l++){Ce(i);let c=l===0?"red":"blue";fe.turn=c,ln();let u=a.filter(b=>!b.usedT);Ae.mode="text",Ae.data={title:"BOMBA ESTRAT\xC9GICA \xB7 TEMAS",text:u.map(b=>b.t).join(" \xB7 ")},Xe.wall(),await st("estPick"),Ce(i);let p=Cn(c)?+await si(`<div class="txt">${Lt(c)}: elegid tema</div><div class="ovb">${u.map(b=>`<button class="ov-btn ${c==="blue"?"blue":""}" data-z="${a.indexOf(b)}">${b.t}</button>`).join("")}</div>`,String(a.indexOf(u[0]))):(await At(1200),a.indexOf(Yt(u)));Ce(i);let d=a[p];d.usedT=!0;let h=Gn([...d.ok.map(b=>({s:b,ok:1})),...d.bad.map(b=>({s:b,ok:0}))]),g=h.map(()=>null),_={[c]:60*(mt.timeMul||1),[Rn(c)]:30*(mt.timeMul||1)};Ae.mode="est";let m=()=>{Ae.data={title:`${d.t.toUpperCase()} \xB7 BOMBA ${l+1}`,q:d.q,items:h.map(b=>b.s),state:g,left:`${n.red.userData.name}: ${s.red}`,right:`${n.blue.userData.name}: ${s.blue}`}};m(),Xe.wall(),await Od(d.id,`${d.t}. ${d.q}`),Ce(i),ze.music("estrategica",!0);let f=c,M=()=>g.filter(b=>b==="ok").length,R=()=>g.filter(b=>b==="bad").length;for(;Ce(i),!(M()>=7||R()>=3||_.red<=0&&_.blue<=0);){if(l===1){let S=7-M();if(Math.abs(s.red-s.blue)>S)break}if(_[f]<=0){f=Rn(f);continue}fe.turn=f,ln();let b=n[f];It(b.position.clone().add(Me(f==="red"?.8:-.8,1.75,2.4)),b.position.clone().add(Me(0,1.4,0)),!1,3);let w=dl(_[f]),T=null,L=()=>{if(!Cn(f)){oi(`<div class="q"><small>${b.userData.name} (${Lt(f)}) responde</small>${d.q}</div><div class="grid10">${h.map((S,C)=>`<button disabled class="${g[C]||""}">${g[C],S.s}</button>`).join("")}</div>`);return}oi(`<div class="q"><small>${b.userData.name}: elige respuestas correctas \xB7 ${s[f]} aciertos</small>${d.q}</div><div class="grid10">${h.map((S,C)=>`<button data-i="${C}" class="${g[C]||""}" ${g[C]?"disabled":""} style="${T===C?"box-shadow:0 0 0 3px #ffd000":""}">${S.s}</button>`).join("")}</div><div class="row"><button class="aux" id="btnCom" ${o[f]?"":"disabled"}>\u{1F4DE} Comod\xEDn de consulta</button></div>`)};L();let v=new Promise(S=>{Cn(f)?sn.addEventListener("click",function C(P){let B=P.target.closest("[data-i]");if(B&&!B.disabled&&(sn.removeEventListener("click",C),S(+B.dataset.i)),P.target.closest("#btnCom")&&o[f]){o[f]=!1,st("estComodin");let U=h.map((se,F)=>F).filter(se=>!g[se]),Y=U.filter(se=>h[se].ok);T=Math.random()<.82&&Y.length?Yt(Y):Yt(U);let J=tt[f].find((se,F)=>F!==t[f]&&fe.alive[f][F])||tt[f][(t[f]+1)%4];setTimeout(()=>{Vi(J,`\xA1Di \xAB${h[T].s}\xBB!`),L()},1500*da)}}):(async()=>{let C=rs(f)+.02;o[f]&&Math.random()<.2&&(o[f]=!1,await st("estComodin"),C=.9),await At(1400+Math.random()*3200);let P=h.map((U,Y)=>Y).filter(U=>!g[U]),B=P.filter(U=>h[U].ok),I=P.filter(U=>!h[U].ok);S(Math.random()<C&&B.length?Yt(B):I.length?Yt(I):Yt(P))})()}),y=await Promise.race([v,w.done.then(()=>"time")]);if(_[f]=w.left,w.stop(),Ce(i),y==="time"){_[f]=0,Ot(`\u23F1 Se acaba el tiempo de ${b.userData.name}`,1800,""),ze.play("bad"),await At(900),f=Rn(f);continue}Pi&&Cn(f),h[y].ok?(g[y]="ok",s[f]++,ze.play("ok"),Vi(b,h[y].s),Math.random()<.4&&st("estOk")):(g[y]="bad",ze.play("bad"),Vi(b,h[y].s),Tn("ooh"),await st("estBad"),_[Rn(f)]>0&&(f=Rn(f),await st("estRebote"))),m(),Ce(i)}ze.stopMusic(),Pa(),h.forEach((b,w)=>{!g[w]&&b.ok&&(g[w]="rev")}),m(),Li(),Xe.wall(),await At(2200)}let r=s.red>s.blue?"red":s.blue>s.red?"blue":null;if(Ot(`Estrat\xE9gica: ${n.red.userData.name} ${s.red} \xB7 ${n.blue.userData.name} ${s.blue}`,3e3,""),!r){await st("estTie"),Ce(i);for(let l=0;l<4&&!r;l++){let c=Ra("est"),u=Gn([...c.ok.slice(0,6).map(d=>({s:d,ok:1})),...c.bad.map(d=>({s:d,ok:0})),{s:c.ok[6],ok:1}]).slice(0,10),p=u.map(()=>null);Ae.mode="est",Ae.data={title:"PANEL DE DESEMPATE",q:c.q,items:u.map(d=>d.s),state:p,left:"",right:""};for(let d=0;d<5&&!r;d++){let h={};for(let g of["red","blue"]){let _,m=u.map((f,M)=>M).filter(f=>!p[f]);if(Cn(g))oi(`<div class="q"><small>Desempate \xB7 ${n[g].userData.name}</small>${c.q}</div><div class="grid10">${u.map((f,M)=>`<button data-i="${M}" class="${p[M]||""}" ${p[M]?"disabled":""}>${f.s}</button>`).join("")}</div>`),_=await new Promise(f=>sn.querySelectorAll("[data-i]").forEach(M=>M.onclick=()=>f(+M.dataset.i)));else{await At(1500);let f=m.filter(M=>u[M].ok);_=Math.random()<rs(g)&&f.length?Yt(f):Yt(m)}Ce(i),p[_]=u[_].ok?"ok":"bad",h[g]=!!u[_].ok,ze.play(h[g]?"ok":"bad"),Vi(n[g],u[_].s),await At(700)}h.red!==h.blue&&(r=h.red?"red":"blue")}}r||(r=Math.random()<.5?"red":"blue")}return Li(),n[r].userData.mood="cheer",Tn("cheer"),ze.play("stinger",{volume:.6}),Ae.mode="big",Ae.data={big:Lt(r).toUpperCase(),small:"GANA LA BOMBA ESTRAT\xC9GICA",col:la[r]},Xe.host(),await st("estWin"),Ce(i),n[r].userData.mood=null,await Promise.all([ha("red"),ha("blue")]),r}async function Km(i,e){let n=fe.alive[e].some(s=>!s)?["rescate","mas","menos"]:["mas","menos"],a=await Qh(i,e,n);if(fe.claTime={red:120,blue:120},a==="mas")fe.claTime[e]=130;else if(a==="menos")fe.claTime[Rn(e)]=110;else{let s=[0,1,2,3].filter(l=>!fe.alive[e][l]),o=Cn(e)&&s.length>1?+await si(`<div class="txt">\xBFA qui\xE9n rescat\xE1is?</div><div class="ovb">${s.map(l=>`<button class="ov-btn" data-z="${l}">${tt[e][l].userData.name}</button>`).join("")}</div>`,String(s[0])):s[0];fe.alive[e][o]=1,ln();let r=tt[e][o];r.userData.mood="cheer",Tn("clap"),Ot(`\xA1${r.userData.name} vuelve al juego!`,2200,""),await ii(r,rl(e,o)),r.userData.mood=null}}async function Wd(i,{train:e=!1,only:t=null}={}){ri("Bomba clasificatoria","Bomba plateada \xB7 2 opciones \xB7 \xB1200 \u20AC"),Pa(),xe.setKind("silver"),xe.clearCables(),xe.setLedFrac(1),xe.value="\xB1200 \u20AC",xe.time=null,xe.dirty=!0,ai(null),e||(Xe.bomb(),await st("claIntro"),Ce(i));let n=t?[t]:fe.money.red>fe.money.blue?["red","blue"]:["blue","red"];t||Ot(`Empieza ${Lt(n[0])}${fe.money.red===fe.money.blue?" (empate: empieza el equipo azul, el veterano)":" (m\xE1s dinero en la fase principal)"}`,3200,"");for(let o of n){Ce(i),fe.turn=o,ln();let r=Cn(o);e||ha(Rn(o)),await xi(o),Ce(i);let l=qi(o),c=0,u=(fe.claTime&&fe.claTime[o]||120)*(mt.timeMul||1);ri(`Clasificatoria \xB7 ${Lt(o)}`,`${Yh(u)} \xB7 cada acierto +200 \u20AC \xB7 cada fallo \u2212200 \u20AC`),Xe.bombTeam(),await st("claGo"),Ce(i);let p=dl(u,{onTick:m=>{xe.time=m.left,xe.setLedFrac(m.left/m.total)}}),d=ze.music("clasif",!0),h=ze.play("fuse",{loop:!0,volume:.25}),g=!1;p.done.then(m=>{m==="time"&&(g=!0)});let _=0;for(;!g;){Ce(i);let m=tt[o][l[c%l.length]];[...tt[o]].forEach(T=>{T.userData.mood!=="sit"&&(T.userData.mood=T===m?"point":null)});let f=Ra("cla"),M=Math.random()<.5?[f.o[0],f.o[1]]:[f.o[1],f.o[0]],R=M.indexOf(f.o[0]);Ae.mode="cla",Ae.data={title:`${Lt(o).toUpperCase()} \xB7 RESPONDE ${m.userData.name.toUpperCase()}`,q:f.q,opts:M,state:null,money:bt(fe.money[o])},_%4===0&&It(m.position.clone().add(Me(.3,1.8,2.4)),m.position.clone().add(Me(0,1.4,0)),!1,3);let b;if(r){oi(`<div class="q"><small>Responde ${m.userData.name} \xB7 ${bt(fe.money[o])}</small>${f.q}</div><div class="row">${M.map((v,y)=>`<button class="opt" data-i="${y}">${v}</button>`).join("")}</div>`);let T=null,L=new Promise(v=>{sn.querySelectorAll("[data-i]").forEach(y=>y.onclick=()=>v(+y.dataset.i)),T=y=>{(y.key==="1"||y.key==="ArrowLeft")&&v(0),(y.key==="2"||y.key==="ArrowRight")&&v(1)},Ls.add(T)});b=await Promise.race([L,p.done.then(()=>"time"),Pi?Ds(900).then(()=>Math.random()<.8?R:1-R):new Promise(()=>{})]),Ls.delete(T)}else{oi(`<div class="q"><small>${Lt(o)} \xB7 responde ${m.userData.name} \xB7 ${bt(fe.money[o])}</small>${f.q}</div><div class="row">${M.map(v=>`<button class="opt" disabled>${v}</button>`).join("")}</div>`);let T=900+Math.random()*2e3;b=await Promise.race([Ds(T),p.done.then(()=>"time")])==="time"?"time":Math.random()<rs(o)+.04?R:1-R}if(Ce(i),b==="time"||g)break;Vi(m,M[b]);let w=b===R;Ae.data.state=M.map((T,L)=>L===R?"ok":L===b?"bad":null),sn.querySelectorAll(".opt").forEach((T,L)=>T.classList.add(L===R?"ok":L===b?"bad":"dim")),w?(fe.money[o]+=200,ze.play("ok"),_++):(fe.money[o]=Math.max(0,fe.money[o]-200),ze.play("bad"),c++,_=0,Tn("ooh"),Ot(`\u2716 Fallo: pasa a ${tt[o][l[c%l.length]].userData.name}`,1400,"")),Ae.data.money=bt(fe.money[o]),ln(),await At(w?450:900)}p.stop(),ze.stopMusic(),h.pause(),Li(),Pa(),xe.time=0,xe.setLedFrac(0),ze.play("alarm",{volume:.5}),tt[o].forEach(m=>{m.userData.mood!=="sit"&&(m.userData.mood=null)}),Xe.bomb(),await st("claEnd"),Ce(i),Ae.mode="score",Ae.data={title:"MARCADOR"},await At(1500),e||await ha(o)}if(t)return t;let a=fe.money.red>fe.money.blue?"red":fe.money.blue>fe.money.red?"blue":null;if(!a){await st("claTie"),Ce(i);for(let o=0;o<8&&!a;o++){let r={};for(let l of["red","blue"]){let c=Ra("cla"),u=Gn(c.o),p=u.indexOf(c.o[0]),d;Cn(l)?(oi(`<div class="q"><small>Desempate \xB7 ${Lt(l)}</small>${c.q}</div><div class="row">${u.map((h,g)=>`<button class="opt" data-i="${g}">${h}</button>`).join("")}</div>`),d=await new Promise(h=>sn.querySelectorAll("[data-i]").forEach(g=>g.onclick=()=>h(+g.dataset.i)))):(await At(1500),d=Math.random()<rs(l)?p:1-p),r[l]=d===p,ze.play(r[l]?"ok":"bad"),Ot(`${Lt(l)}: ${u[d]} ${r[l]?"\u2714":"\u2716"}`,1500,""),await At(900)}r.red!==r.blue&&(a=r.red?"red":"blue")}a||(a="blue"),Li()}xe.setKind("black"),xe.time=null,xe.value="",xe.dirty=!0;let s=Rn(a);return tt[a].forEach(o=>{o.userData.mood!=="sit"&&(o.userData.mood="cheer")}),tt[s].forEach(o=>{o.userData.mood!=="sit"&&(o.userData.mood="sad")}),Ae.mode="big",Ae.data={big:Lt(a).toUpperCase(),small:"\xA1A LA BOMBA DORADA!",col:la[a]},Tn("cheer"),Nt.event("win"),ze.play("stinger",{volume:.6}),Xe.teamWide(a),await st("claWin"),Ce(i),[...tt.red,...tt.blue].forEach(o=>{o.userData.mood!=="sit"&&(o.userData.mood=null)}),a}async function Xd(i,e,{train:t=!1,bote:n=ni()}={}){ri(`Bomba dorada \xB7 ${Lt(e)}`,`Bote: ${bt(n)} \xB7 15 minibombas \xB7 2 minutos`),Pa(),fe.turn=e,ln(),xe.setKind("gold"),xe.clearCables(),xe.minis.forEach(f=>f.state="off"),xe.value=bt(n),xe.time=120,xe.dirty=!0,ai(null);let a=qi(e);await Promise.all(a.map((f,M)=>ii(tt[e][f],Me((M-(a.length-1)/2)*.8,.3,2.3)))),a.forEach(f=>rn(tt[e][f],ht.bomb.clone().setY(0)));let s=xe.minis.map(()=>"off"),o=()=>{s.forEach((f,M)=>xe.setMini(M,f))};Ae.mode="bote",Ae.data={bote:bt(n),q:"",minis:s,round:"PRIMERA VUELTA"},Xe.diamonds(),t?(await At(1500),Ce(i)):(await st("boteIntro"),Ce(i)),Xe.bote();let r=Array.from({length:15},()=>Ra("bot"));await st("boteGo"),Ce(i),Nt.event("final");let l=Cn(e),c=120*(mt.timeMul||1),u=dl(c,{onTick:f=>{xe.time=f.left}}),p=ze.music("bote",!0),d=!1;u.done.then(f=>{f==="time"&&(d=!0)});let h=!1,g=-1,_=async(f,M)=>{s[f]="cur",o();let R=r[f],b=Gn(R.o),w=b.indexOf(R.o[0]);Ae.data.q=`${f+1}. ${R.q}`;let T=tt[e][a[f%a.length]];f%3===0&&Xe[f%2?"boteSide":"bote"]();let L,v=`<div class="minis">${s.map((y,S)=>`<button class="${y}" disabled>${S+1}</button>`).join("")}</div>`;if(l)oi(`${v}<div class="q"><small>Minibomba ${f+1}${M===2?" \xB7 segunda vuelta: un fallo y explota":""}</small>${R.q}</div><div class="row">${b.map((y,S)=>`<button class="opt" data-i="${S}">${y}</button>`).join("")}${M===1?'<button class="boom" data-i="boom">\xA1BOOM!</button>':""}</div>`),L=await Promise.race([new Promise(y=>sn.querySelectorAll("[data-i]").forEach(S=>S.onclick=()=>y(S.dataset.i==="boom"?"boom":+S.dataset.i))),u.done.then(()=>"time"),Pi?Ds(700).then(()=>Math.random()<.85?w:M===1?"boom":(w+1)%3):new Promise(()=>{})]);else{oi(`${v}<div class="q"><small>${Lt(e)} \xB7 minibomba ${f+1}</small>${R.q}</div><div class="row">${b.map(C=>`<button class="opt" disabled>${C}</button>`).join("")}</div>`);let y=await Promise.race([Ds(1200+Math.random()*2500),u.done.then(()=>"time")]),S=Math.random()<rs(e)-.02;L=y==="time"?"time":S?w:M===1&&Math.random()<.8?"boom":(w+1+Math.floor(Math.random()*2))%3}return Ce(i),L==="time"?"time":L==="boom"?(s[f]="pend",o(),ze.play("pass"),Vi(T,"\xA1Boom!"),"pend"):(Vi(T,b[L]),L===w?(s[f]="ok",o(),ze.play("ok"),Math.random()<.3&&st("boteOk"),"ok"):(s[f]="bad",o(),ze.play("bad"),Ot(`\u2716 Era: <b>${R.o[0]}</b>`,2500,""),"bad"))};for(let f=0;f<15&&!h&&!d;f++){let M=await _(f,1);if(M==="bad"&&(h=!0,g=f),M==="time")break}if(Ce(i),!h&&!d&&s.includes("pend"))for(u.pause(),Ae.data.round="SEGUNDA VUELTA",Xe.bote(),await st("boteSecond"),Ce(i),u.resume();!h&&!d&&s.includes("pend");){let f=s.map((b,w)=>b==="pend"?w:-1).filter(b=>b>=0),M;if(l&&!Pi){oi(`<div class="q"><small>Segunda vuelta \xB7 elegid minibomba</small>\xBFCu\xE1l contest\xE1is ahora?</div><div class="minis">${s.map((w,T)=>`<button class="${w}" data-i="${T}" ${w==="pend"?"":"disabled"}>${T+1}</button>`).join("")}</div>`);let b=await Promise.race([new Promise(w=>sn.querySelectorAll("[data-i]").forEach(T=>T.onclick=()=>w(+T.dataset.i))),u.done.then(()=>"time")]);if(b==="time")break;M=b}else await At(700),M=f[0];Ce(i);let R=await _(M,2);if(R==="bad"&&(h=!0,g=M),R==="time")break}u.stop(),ze.stopMusic(),Li(),Pa(),Ce(i);let m=!h&&!d&&s.every(f=>f==="ok");return m?(xe.time=null,xe.value="\xA1BOTE!",xe.dirty=!0,ze.play("defuse"),ze.play("fanfarria"),ua.confetti(!0),Nt.event("win"),Tn("cheer"),tt[e].forEach(f=>f.userData.mood="cheer"),Ae.mode="big",Ae.data={big:bt(n),small:`\xA1${Lt(e).toUpperCase()} DESACTIVAN LA BOMBA DORADA!`,col:"#ffd34d",size:200},Xe.bote(),await st("boteWin"),Ce(i),await At(2500)):(d&&s.forEach((f,M)=>{f!=="ok"&&(s[M]="bad")}),o(),xe.time=0,xe.dirty=!0,await jh(ht.bomb,1.25),Ce(i),xe.value="\xA1BOOM!",xe.dirty=!0,Ae.mode="big",Ae.data={big:"\xA1BOOM!",small:d?"SE ACAB\xD3 EL TIEMPO":`FALLO EN LA MINIBOMBA ${g+1}`,col:"#ff3a24"},Xe.bote(),await st("boteLose"),Ce(i)),tt[e].forEach(f=>{f.userData.mood!=="sit"&&(f.userData.mood=null)}),{won:m,bote:n,okCount:s.filter(f=>f==="ok").length}}function $d(i=360,e=1100){let t=document.createElement("canvas");t.width=e*2,t.height=i*2;let n=t.getContext("2d");return n.scale(2,2),Ao(n,e/2,i*.56,i*.62,{glow:!0}),t.toDataURL("image/png")}var ef={ninos:{name:"Especial ni\xF1os",pool:"ninos",voice:"spNinos",sub:"ESPECIAL NI\xD1OS",theme:"esp10",pal:["#ff3fa4","#33e1ff"],ai:-.08,teams:{red:{name:"Los Peques Rojos",p:[["Leo","M"],["Vega","F"],["Nico","M"],["Martina","F"]]},blue:{name:"Los Peques Azules",p:[["Daniela","F"],["\xC1lex","M"],["Noa","F"],["Bruno","M"]]}}},finano:{name:"Especial fin de a\xF1o",pool:"fiesta",voice:"spFin",sub:"ESPECIAL NOCHEVIEJA",theme:"esp1000",pal:["#ffd000","#ffffff"],confetti:!0},navidad:{name:"Navidad famosos",pool:"fiesta",voice:"spNav",sub:"ESPECIAL NAVIDAD",theme:"esp1000",pal:["#ff2020","#20c040"],teams:{red:{name:"Famosos Turr\xF3n",p:[["Estrella Ficticia","F"],["Gal\xE1n Virtual","M"],["Cantante Inventada","F"],["Humorista X","M"]]},blue:{name:"Famosos Polvor\xF3n",p:[["Actriz Y","F"],["Chef Z","M"],["Deportista W","M"],["Presentadora V","F"]]}}},campeones:{name:"Semana de campeones",pool:"general",voice:"spCamp",sub:"SEMANA DE CAMPEONES",theme:"prime",pal:["#ffd000","#ff2a44"],ai:.08},titanes:{name:"Duelo de titanes",pool:"general",voice:"spTit",sub:"DUELO DE TITANES",theme:"prime",pal:["#ff2a00","#2a6aff"],ai:.12},aniversario:{name:"Especial aniversario",pool:"tele",voice:"spAniv",sub:"ESPECIAL ANIVERSARIO",theme:"esp1000",pal:["#ffb000","#b040ff"]},superliga:{name:"Superliga",pool:"general",voice:"spSuper",sub:"SUPERLIGA",theme:"prime",pal:["#00e5ff","#ffd000"],ai:.1},prime:{name:"Bote prime time",pool:"general",voice:"spPrime",sub:"ESPECIAL PRIME TIME",theme:"prime",pal:["#ffd000","#ff5a00"],bote:413e4,confetti:!0}},r1=Te("#spBtns");Object.entries(ef).forEach(([i,e])=>{let t=document.createElement("button");t.textContent=e.name,t.dataset.mode="sp_"+i,r1.appendChild(t)});var ls=i=>Te("#menu").classList.toggle("hidden",!i);function li(i){Te("#hud").classList.toggle("hidden",!i)}function Yd(){ll.clear(),fe.money={red:0,blue:0},fe.alive={red:[1,1,1,1],blue:[1,1,1,1]},fe.turn=null,fe.adv={red:{},blue:{}},fe.cristal=null,fe.cristalWon={red:0,blue:0},fe.claTime={red:120,blue:120},fe.silenced=null,fe.aiBonus=0,fe.aiOnly=!1,xe.setKind("black"),xe.clearCables(),xe.time=null,xe.value="",xe.dirty=!0,xe.mini.visible=!1,ai(null),Pa(),_t.shelf&&_t.shelf.reset()}function La(){ca.fn=null,jd(null),Fs(0),Dt.domElement.style.filter="",Nn.run++,ze.stopAll(),Ns(),Li(),li(!1),Te("#sub").classList.add("hidden"),Te("#skip").classList.add("hidden"),Te("#chat").innerHTML="",Te("#mosca").classList.add("hidden"),We.mode==="walk"&&Is(!1),We.mode="orbit",Ae.mode="logo",Ae.sub="",Ae.bg=null,Nt.event("menu"),Nt.setPalette("#ff5a00","#2a6aff"),Ci.theme&&Ci.theme(null),cl.pool="general",Ho(),Yd(),zo(),ln(),Te("#topBtns").classList.add("hidden"),ls(!0),ze.music("tema",!0),Te("#career").textContent=bn.programs?`Tu equipo: ${bn.programs} programas \xB7 ${bt(bn.money)} ganados \xB7 ${bn.botes} botes \xB7 Bote actual: ${bt(ni())}`:`Bote actual: ${bt(ni())}`,Te("#qName").textContent=Eh[wh()]}Te("#tbHome").onclick=La;Te("#tbLights").onclick=()=>Te("#glights").classList.toggle("hidden");Te("#tbMute").onclick=()=>{ze.setMuted(!ze.muted),Te("#tbMute").textContent=ze.muted?"\u{1F507}":"\u{1F50A}"};var Zh=0;Te("#tbCam").onclick=()=>{We.mode==="walk"&&Is(!1),Zh=(Zh+1)%Fd.length,Xe[Fd[Zh]]()};Te("#tbWalk").onclick=()=>Is(We.mode!=="walk");var Us=!1;Te("#skip").onclick=()=>{Us=!0,ze.stopVoice()};(location.protocol==="file:"||/Android.*wv|; wv\)/.test(navigator.userAgent))&&(Te("#dlLinks").style.display="none");async function l1(i,e,t=!1){Us=!1,Te("#skip").classList.remove("hidden"),Nt.event("intro"),t||(ze.music("tema"),Rt.position.set(6.5,0,8),rn(Rt,Me(0,0,0)));let n=[async()=>{ze.play("whoosh"),await ko(Me(0,9.5,14),ht.hex.clone().multiplyScalar(.5).setY(5),Me(0,5,-6),ht.hex.clone(),4.2)},async()=>{await ko(Me(-8.5,4,5),Me(-3.5,2.4,3.5),Me(0,2,-8),Me(0,1.3,-.8),3.6)},async()=>{Tn("cheer"),Xe.hostWide(),await ii(Rt,ht.host),rn(Rt,Me(-1.5,0,9))},async()=>{Xe.host(),await st("intro1")},async()=>{e?(Xe.wall(),await st(e.voice)):(Xe.wide(),await st("intro2"))},async()=>{Xe.teamWide("red"),tt.red.forEach(a=>a.userData.mood="cheer"),await st("introRed"),Tn("clap"),tt.red.forEach(a=>a.userData.mood=null)},async()=>{Xe.teamWide("blue"),tt.blue.forEach(a=>a.userData.mood="cheer"),await st("introBlue"),Tn("clap"),tt.blue.forEach(a=>a.userData.mood=null)},async()=>{Xe.bomb(),xe.setKind("gold"),xe.value=bt(fe.bote),xe.dirty=!0,Ae.mode="big",Ae.data={big:bt(fe.bote),small:"BOTE DE HOY",col:"#ffd34d"},await st("bote"),await At(800),xe.setKind("black"),xe.value="",xe.dirty=!0}];for(let a of t?n.slice(3):n){if(Us)break;Ce(i),await a()}Ce(i),Te("#skip").classList.add("hidden"),ze.stopVoice(),ze.stopMusic(),Ea.clear(),Rt.position.copy(ht.host),rn(Rt,Me(-1.5,0,9)),Nt.event("idle"),xe.setKind("black"),Ae.mode="logo"}var Bs=null,Fs=i=>{Te("#wflash").style.opacity=String(Math.max(0,Math.min(1,i)))};function e0(i){let e=0;if(i>=pt.boom){let t=(i-pt.boom)/.6;e=Math.max(e,t<1?.95*(1-t)*(1-t):0)}return i>=pt.flashSet-.12&&i<pt.flashSet+.8&&(e=Math.max(e,i<pt.flashSet?(i-pt.flashSet+.12)/.12:1-(i-pt.flashSet)/.8)),e}var Kh=null;function jd(i){Kh||(Kh=[0,1].map(()=>{let t=document.createElement("canvas");return t.className="cabTimer",document.body.appendChild(t),t}));let e=(i||[]).filter(t=>t.timer!=null);Kh.forEach((t,n)=>{let a=e[n];if(!a){t.style.display="none";return}let s=Math.round(a.w*innerWidth),o=innerHeight,r=Math.min(2,devicePixelRatio||1);t.width!==s*r&&(t.width=s*r,t.height=o*r),Object.assign(t.style,{display:"block",left:a.x*100+"vw",width:a.w*100+"vw"});let l=t.getContext("2d");l.setTransform(r,0,0,r,0,0);let c=l.createRadialGradient(s*.5,o*.5,10,s*.5,o*.5,Math.max(s,o)*.8);c.addColorStop(0,"#2a1a12"),c.addColorStop(1,"#050202"),l.fillStyle=c,l.fillRect(0,0,s,o),l.save();let u=s*2.1,p=u*.28;l.translate(s*-.55,o/2-p/2),Wh(l,u,p,a.timer),l.restore();let d=l.createLinearGradient(0,0,s,0);d.addColorStop(0,"rgba(0,0,0,.55)"),d.addColorStop(.5,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(0,0,0,.55)"),l.fillStyle=d,l.fillRect(0,0,s,o)})}function t0(i){let e=Bs.update(i),t=window.__post.bloom;t&&(t.strength=.3,t.threshold=1),Gh(Bs.scene,Bs.cam,e),t&&(t.strength=.5,t.threshold=.92),jd(e),Fs(e0(i)),Dt.domElement.style.filter="sepia(.32) saturate(1.18) contrast(1.06)"}var qo=null;function n0(){if(!qo){let n=document.createElement("canvas");n.width=n.height=128;let a=n.getContext("2d"),s=a.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(255,255,255,.85)"),s.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=s,a.fillRect(0,0,128,128);let o=new In(n);o.colorSpace=Gt,qo=[];for(let r=0;r<24;r++){let l=new Hn(new Ln({map:o,transparent:!0,depthWrite:!1,color:15262960}));l.visible=!1,_t.scene.add(l),qo.push(l)}}let i=0;qo.forEach((n,a)=>{n.userData={a:Math.random()*6.28,r:.6+Math.random()*1.6,y:2+Math.random()*5.5,s:1.4+Math.random()*2,v:.2+Math.random()*.4},n.visible=!0});let e=performance.now(),t=Go(()=>{i=(performance.now()-e)/1e3,qo.forEach(n=>{let a=n.userData,s=a.r+i*a.v;n.position.set(Math.cos(a.a+i*.1)*s,Math.max(.6,a.y-i*.35),Math.sin(a.a+i*.1)*s),n.scale.setScalar(a.s+i*.5),n.material.opacity=Math.max(0,.42-i*.04)}),i>11&&(qo.forEach(n=>n.visible=!1),t())})}var c1=()=>[["Iker Rodriguez Tejedor","Creador del remake"],["Presentador virtual","Presentaci\xF3n"],[fe.names.red+" \xB7 "+fe.names.blue,"Concursantes virtuales"],["Piper TTS","Voces sintetizadas"],["Three.js","Motor 3D"],["Remake de fans","No oficial \xB7 sin \xE1nimo de lucro"]];async function d1(i,e){if(Ri)return;Bs=Bs||Xh(Dt),li(!1),Us=!1,Te("#skip").classList.remove("hidden"),Te("#mosca").classList.add("hidden");let t=ze.music("cabecera"),n=performance.now(),a=()=>t&&!t.paused&&t.currentTime>.05?t.currentTime:(performance.now()-n)/1e3,s=0;if(ca.fn=()=>{s=a(),t0(s)},await new Promise(g=>{let _=setInterval(()=>{(s>=pt.flashSet||Us||i!==Nn.run)&&(clearInterval(_),g())},30)}),ca.fn=null,Dt.domElement.style.filter="",jd(null),i!==Nn.run)return Fs(0),Ce(i);xe.setKind("silver"),xe.setLedFrac(1),Ae.mode="logo",Nt.event("intro");let o=ht.bomb.y;xe.root.position.y=7,n0(),Rt.position.set(6.5,0,8),rn(Rt,ht.host),It(Me(.4,1.2,4.6),Me(0,6.6,0),!0);let r=Te("#lt");Te("#ltLogo").src=$d(260,420);let l=0,c=a(),u=!1,p=c1(),d=-1,h=Go(g=>{let _=Us?99:a();Fs(e0(_));let m=Math.min(1,Math.max(0,(_-pt.end)/3.2));xe.root.position.y=7+(o-7)*(1-Math.pow(1-m,3));let f=Math.floor((_-8.2)/2.35),M=_>8.2&&f<p.length&&(_-8.2)%2.35<2;M&&f!==d&&(d=f,r.querySelector("b").textContent=p[f][0],r.querySelector("i").textContent=p[f][1]),r.classList.toggle("hidden",!M)});try{await At(300),Ce(i),ko(Me(.4,1.2,4.6),Me(-6.5,6.5,11.5),Me(0,6,0),Me(.5,1.2,-1),4.2),await new Promise(g=>setTimeout(g,2600)),Ce(i),Tn("cheer"),Xe.hostWide(),ii(Rt,ht.host).then(()=>rn(Rt,Me(-1.5,0,9))),await new Promise(g=>setTimeout(g,2800)),Ce(i),ko(We.pos.clone(),Me(7.5,4.2,9.5),We.look.clone(),Me(0,1.4,-.5),5),await new Promise(g=>{let _=setInterval(()=>{let m=a();(Us||i!==Nn.run||m>21.6||t&&t.ended)&&(clearInterval(_),g())},50)})}finally{h(),r.classList.add("hidden"),Fs(0),xe.root.position.y=o,mt.mosca&&Te("#mosca").classList.remove("hidden")}Ce(i),Ea.delete(Rt),Rt.position.copy(ht.host),rn(Rt,Me(-1.5,0,9)),xe.setKind("black"),ze.stopMusic()}var i0="#ffb000";async function a0(i,e,t){Ri||(ze.music("creditos"),We.mode="orbit",Nt.event("intro"),Ae.mode="logo",[...tt.red,...tt.blue].forEach((n,a)=>{n.userData.mood!=="sit"&&(n.userData.mood=a%3?"clap":"cheer")}),Ci.react("clap",30),await Mm({head:{img:$d(),title:e?e.name:"\xA1BOOM! 3D"},sections:[{h:"Resultado de hoy",p:[t],sm:[`${fe.names.red}: ${bt(fe.money.red)} \xB7 ${fe.names.blue}: ${bt(fe.money.blue)}`]},{h:"Creado por",p:["Iker Rodriguez Tejedor"]},{h:"Idea y direcci\xF3n del remake",p:["Iker Rodriguez Tejedor"]},{h:"Presentador",p:["Presentador virtual"],sm:["Personaje ficticio \xB7 no representa a ninguna persona real"]},{h:"Concursantes virtuales",p:[fe.names.red,...tt.red.map(n=>n.userData.name),fe.names.blue,...tt.blue.map(n=>n.userData.name)]},{h:"P\xFAblico",p:["P\xFAblico virtual del plat\xF3"]},{h:"Voces sintetizadas",p:["Piper TTS (es_ES)"]},{h:"Motor 3D",p:["Three.js"],sm:["Iluminaci\xF3n din\xE1mica GLights \xB7 plat\xF3 modelado por c\xF3digo"]},{h:"M\xFAsica y efectos",p:["Sintetizados para este remake"]},{h:"Tipograf\xEDas",p:["Anton \xB7 Barlow (SIL Open Font License)"]},{h:"Preguntas",p:["Banco original escrito para este remake"]},{h:"Aviso",sm:["Remake no oficial hecho por un fan, sin \xE1nimo de lucro.","\xA1Boom! es un formato de Keshet. En Espa\xF1a lo emitieron Antena 3 (Gestmusic, 2014-2023) y Cuatro (Mediacrest, 2024).","Sin relaci\xF3n oficial con el programa, sus productoras ni sus cadenas."]}],end:{big:"\xA1HASTA MA\xD1ANA!",small:["\xA1BOOM! 3D \xB7 remake de fans"]},accent:i0,skipText:"Saltar \u23ED",aborted:()=>i!==Nn.run}),[...tt.red,...tt.blue].forEach(n=>{n.userData.mood!=="sit"&&(n.userData.mood=null)}))}async function tf(i=null){let e=++Nn.run;ls(!1),Ns(),ze.stopAll(),Te("#topBtns").classList.remove("hidden"),cl.pool=i?i.pool:"general",Ho(mt.redTeam,mt.blueTeam,i&&i.teams?i.teams:null),Yd(),zo(),ln(),fe.aiBonus=i&&i.ai?i.ai:0,fe.bote=i&&i.bote?i.bote:ni(),i?(Nt.setPalette(i.pal[0],i.pal[1]),Ci.theme&&Ci.theme(i.theme),Ae.sub=i.sub):Ae.sub="",Te("#mosca").classList.toggle("hidden",!mt.mosca),We.mode="show";try{await d1(e,i),Ce(e),await l1(e,i,!0),Ce(e),i&&i.confetti&&ua.confetti(!!i.bote),li(!0),ln();let t=await Vd(e);Ce(e),Xe.host(),await st("advChoose"),Ce(e);let n=await Qh(e,t,["blanco","siguen","tema","uno"]);fe.adv[t][n]=1,await Jm(e),Ce(e),await Zm(e,t),Ce(e),Ae.mode="score",Ae.data={title:"FIN DE LA FASE PRINCIPAL"},Xe.wall(),await At(2500),mt.jokes&&(Xe.host(),await st(Yt(Ad)),Tn("laugh"));let a=await Jh(e);Ce(e),await Km(e,a),Ce(e);let s=await Wd(e);Ce(e);let o=Rn(s),r=mt.human;fe.cristalWon[o]&&Ot(`${fe.names[o]} se va con su bomba de cristal: ${bt(fe.cristalWon[o])}`,3500,""),fe.aiOnly=!1;let l=await Xd(e,s,{bote:fe.bote});Ce(e);let c,u=s===r;if(l.won?(c=`${fe.names[s]} se llevan el bote: ${bt(l.bote)}`,(!i||!i.bote)&&(bn.bote=5e4)):(c=`${fe.names[s]} no desactivan la bomba dorada (${l.okCount}/15)`,(!i||!i.bote)&&(bn.bote=ni()+5e3)),!Pi){bn.programs++;let d=u?fe.money[r]+(l.won?l.bote:0):fe.cristalWon[r];bn.money+=d,u&&bn.won++,u&&l.won&&bn.botes++,Ud()}if(li(!1),Xe.hostWide(),await st("outro"),Ce(e),await a0(e,i,c),Ce(e),window.__lastResult={mode:i?i.name:"tv",winner:s,bote:l.won,money:{...fe.money}},await si(`<div class="txt">${c}</div><div class="sub2">${fe.names[r]}: ${u?bt(fe.money[r]+(l.won?l.bote:0)):"eliminados en la clasificatoria"+(fe.cristalWon[r]?` \xB7 cristal ${bt(fe.cristalWon[r])}`:"")}</div><div class="ovb"><button class="ov-btn" data-z="again">Siguiente programa</button><button class="ov-btn alt" data-z="menu">Men\xFA</button></div>`,"menu")==="again")return tf(i);La()}catch(t){t!==kd&&(console.error(t),window.__err=String(t&&t.stack||t))}}async function s0(){let i=++Nn.run;ls(!1),Te("#topBtns").classList.remove("hidden"),Yd(),Ho(),zo(),ln(),Xe.wide(),li(!0);let e=await si(`<div class="panel"><h3>Entrenamiento</h3><div>Practica cada fase por separado. Aqu\xED nadie se va al banquillo.</div></div><div class="ovb">
    <button class="ov-btn" data-z="cal">\u{1F4A3} Bomba caliente</button><button class="ov-btn" data-z="b0">\u2702 Bomba 1 \xB7 200 \u20AC</button><button class="ov-btn" data-z="b1">\u2702 Bomba 2 \xB7 400 \u20AC</button><button class="ov-btn" data-z="b2">\u2702 Bomba 3 \xB7 600 \u20AC</button><button class="ov-btn" data-z="b3">\u2702 Bomba 4 \xB7 800 \u20AC</button>
    <button class="ov-btn blue" data-z="est">\u{1F9E0} Bomba estrat\xE9gica</button><button class="ov-btn blue" data-z="cla">\u{1F948} Bomba clasificatoria</button><button class="ov-btn" data-z="bote">\u{1F947} Bomba dorada (bote)</button><button class="ov-btn alt" data-z="menu">Volver</button></div>`,Pi?(os.match(/train=(\w+)/)||[])[1]||"b2":"b0");if(e==="menu")return La();let t=mt.human;fe.turn=t;try{if(e==="cal"?await Vd(i,{train:!0}):e[0]==="b"&&e!=="bote"?await qd(i,t,+e[1],{train:!0}):e==="est"?await Jh(i,{train:!0}):e==="cla"?await Wd(i,{train:!0,only:t}):e==="bote"&&await Xd(i,t,{train:!0,bote:ni()}),Ce(i),window.__lastResult={mode:"train",z:e},await si('<div class="txt">\xA1Entrenamiento completado!</div><div class="ovb"><button class="ov-btn" data-z="again">Otra prueba</button><button class="ov-btn alt" data-z="menu">Men\xFA</button></div>',"menu")==="again")return s0();La()}catch(n){n!==kd&&(console.error(n),window.__err=String(n&&n.stack||n))}}function u1(){let i=++Nn.run;ls(!1),Te("#topBtns").classList.remove("hidden"),Xe.wall();let e=0;Ae.mode="text";let t=()=>{Ae.data={title:Po[e%Po.length][0].toUpperCase(),text:Po[e%Po.length][1]}};t(),st("hist"),Gd(`<div class="panel"><h3>Historia de \xA1Boom!</h3>${Po.map(a=>`<div class="hcard"><b>${a[0]}</b><br>${a[1]}</div>`).join("")}<div class="hcard"><b>Este remake</b><br>Versi\xF3n 3D hecha por un fan, con presentador, equipos y p\xFAblico virtuales. Las fases siguen la etapa de Antena 3: bomba caliente, fase principal con bomba de cristal, estrat\xE9gica, clasificatoria y bomba dorada.</div></div><div class="ovb"><button class="ov-btn" data-z="walk">\u{1F6B6} Pasear por el plat\xF3</button><button class="ov-btn alt" data-z="menu">Volver</button></div>`);let n=setInterval(()=>{if(i!==Nn.run){clearInterval(n);return}e++,t()},7e3);Te("#overlay").querySelectorAll("[data-z]").forEach(a=>a.onclick=()=>{Ns(),a.dataset.z==="walk"?Is(!0):(clearInterval(n),La())})}Te("#btnCustom").onclick=()=>{ls(!1),Xe.teamWide(mt.human),Gd(`<div class="panel"><h3>Personalizar</h3>
  <label>Tu equipo juega como: <select id="cHum"><option value="red" ${mt.human==="red"?"selected":""}>Rojo (aspirante)</option><option value="blue" ${mt.human==="blue"?"selected":""}>Azul (veterano)</option></select></label>
  <label>Equipo rojo: <select id="cRed">${Cs.red.map((i,e)=>`<option value="${e}" ${mt.redTeam===e?"selected":""}>${i.name}</option>`).join("")}</select></label>
  <label>Equipo azul: <select id="cBlue">${Cs.blue.map((i,e)=>`<option value="${e}" ${mt.blueTeam===e?"selected":""}>${i.name}</option>`).join("")}</select></label>
  <label>Nombre de tu equipo (rojo): <input type="text" id="cName" maxlength="22" value="${mt.redName}" placeholder="(por defecto)"></label>
  <label>Nombres (rojo): ${[0,1,2,3].map(i=>`<input type="text" class="cN" maxlength="12" size="8" value="${mt.names[i]||""}" placeholder="${Cs.red[mt.redTeam].p[i][0]}">`).join("")}</label>
  <label>Nivel del rival: <select id="cAi">${[["facil","F\xE1cil"],["normal","Normal"],["dificil","Dif\xEDcil"]].map(([i,e])=>`<option value="${i}" ${mt.ai===i?"selected":""}>${e}</option>`).join("")}</select></label>
  <label>Tiempo de las bombas: <select id="cTm">${[[1,"Normal"],[1.5,"+50 %"],[2,"Doble"]].map(([i,e])=>`<option value="${i}" ${mt.timeMul===i?"selected":""}>${e}</option>`).join("")}</select></label>
  <label>Bote inicial: <select id="cBote">${[5e4,1e5,5e5,1e6].map(i=>`<option value="${i}" ${mt.startBote===i?"selected":""}>${bt(i)}</option>`).join("")}</select> <button class="ov-btn alt" id="cResetB" style="min-width:0;padding:4px 10px;font-size:13px">Reiniciar bote y carrera</button></label>
  <label><input type="checkbox" id="cHints" ${mt.hints?"checked":""}> Pistas de los compa\xF1eros</label>
  <label><input type="checkbox" id="cJokes" ${mt.jokes?"checked":""}> Bromas del presentador</label>
  <label><input type="checkbox" id="cVoice" ${ze.voiceOn?"checked":""}> Voz del presentador</label>
  <label><input type="checkbox" id="cMosca" ${mt.mosca?"checked":""}> Mosca de la cadena (logo + DIRECTO)</label>
  <label>Volumen m\xFAsica: <input type="range" id="cMus" min="0" max="100" value="${Math.round(ze.musicVol*100)}"></label></div>
  <div class="ovb"><button class="ov-btn" data-z="save">Guardar</button><button class="ov-btn alt" data-z="back">Volver</button></div>`),Te("#cResetB").onclick=()=>{bn.bote=null,bn.programs=bn.money=bn.won=bn.botes=0,Ud(),Te("#cResetB").textContent="\u2714 Reiniciado"},Te("#overlay").querySelectorAll("[data-z]").forEach(i=>i.onclick=()=>{i.dataset.z==="save"&&(Object.assign(mt,{human:Te("#cHum").value,redTeam:+Te("#cRed").value,blueTeam:+Te("#cBlue").value,redName:Te("#cName").value.trim(),names:[...document.querySelectorAll(".cN")].map(e=>e.value.trim()),ai:Te("#cAi").value,timeMul:+Te("#cTm").value,startBote:+Te("#cBote").value,hints:Te("#cHints").checked,jokes:Te("#cJokes").checked,mosca:Te("#cMosca").checked}),ze.setVoice(Te("#cVoice").checked),ze.setMusicVol(Te("#cMus").value/100),kh()),Ns(),La()})};Te("#btnQuality").onclick=()=>{let i=wh(),e=Ts[(Ts.indexOf(i)+1)%Ts.length];fm(e),Te("#qName").textContent=Eh[e]+" (recargando\u2026)",setTimeout(()=>location.reload(),400)};var ul={tv:()=>tf(null),train:()=>s0(),historia:()=>u1(),walk:()=>{ls(!1),Nn.run++,Te("#topBtns").classList.remove("hidden"),Ae.mode="logo",Is(!0)}};Object.keys(ef).forEach(i=>ul["sp_"+i]=()=>tf(ef[i]));document.addEventListener("click",i=>{let e=i.target.closest("[data-mode]");if(!e)return;ze.stopMusic();let t=ul[e.dataset.mode];t&&t()});window.__boom={C:qh,B:xe,FX:ua,S:_t,G:fe,wall:Ae,views:Xe,cam:We,camTo:It,goMenu:La,MODES:ul,R:Nn,team:tt,host:Rt,drawPods:ln,drawPanel:ai,Lg:Nt,phases:{phaseCaliente:Vd,playCableBomb:qd,phaseClasif:Wd,phaseBote:Xd}};(async()=>{try{await Promise.all(["900 40px Barlow","700 40px Barlow","600 40px Barlow","40px Anton"].map(t=>document.fonts.load(t)))}catch{}let i=$d();Te("#menuLogo").src=i,Te("#moscaLogo").src=$d(200,600),Vh(),Te("#loading").classList.add("hidden"),La();let e=os.match(/[?&]mode=(\w+)/);e&&ul[e[1]]&&(ls(!1),ul[e[1]]())})();window.__stage=async i=>{Nn.run++,ca.fn=null,Dt.domElement.style.filter="",Fs(0),jd(null),xe.root.position.copy(ht.bomb),ls(!1),Ns(),Li(),Te("#topBtns").classList.remove("hidden"),li(!0),window.__snap=!0,Yd(),Ho(),zo(),ln(),Te("#mosca").classList.remove("hidden");let e=["Mercurio","Venus","Marte","J\xFApiter","Saturno"];if(i==="overview")li(!1),Te("#mosca").classList.add("hidden"),Nt.event("idle"),Xe.high();else if(i==="ref"||i==="ref2"||i==="ref3")li(!1),Te("#topBtns").classList.add("hidden"),Te("#mosca").classList.add("hidden"),Nt.event("idle"),xi("red",!0),Xe[i]();else if(i==="wide")Nt.event("idle"),Xe.wide();else if(i==="caliente")ri("Bomba caliente","3 segundos por respuesta"),xi("red",!0),xe.mini.visible=!0,Ca(tt.red[1]),Ae.mode="cal",Ae.data={def:"Frase hecha",f:"M\xE1s vale __ que __ volando",pts:{red:2,blue:1}},Nt.event("tension"),Xe.caliente();else if(i==="cables"){fe.turn="red",ri("Los Petardos \xB7 Bomba 3","600 \u20AC \xB7 60 s \xB7 5 cables"),xi("red",!0),xe.setCables(5);let t=["cut",null,null,"cut",null];xe.cut(0),xe.cut(3),xe.time=37,xe.value="600 \u20AC",xe.dirty=!0,ai(e,t),Ae.mode="cables",Ae.data={title:"LOS PETARDOS \xB7 BOMBA 3 \xB7 600 \u20AC",q:"\xBFCu\xE1l es el planeta m\xE1s grande del sistema solar?",opts:e,state:t},Nt.event("question"),Xe.panel()}else if(i==="cablesWide")fe.turn="red",xi("red",!0),xe.setCables(5),xe.cut(1),xe.time=22,xe.value="600 \u20AC",xe.dirty=!0,ai(e,[null,"cut",null,null,null]),Ae.mode="cables",Ae.data={title:"LOS PETARDOS \xB7 BOMBA 3 \xB7 600 \u20AC",q:"\xBFCu\xE1l es el planeta m\xE1s grande del sistema solar?",opts:e,state:[null,"cut",null,null,null]},Nt.event("tension"),Xe.bombTeam();else if(i==="explosion")xi("red",!0),xe.setCables(4),Xe.bombTeam(),await At(300),ua.explode(ht.bomb,1),xe.shake=1,Nt.event("fall");else if(i==="estrategica"){ri("Bomba estrat\xE9gica","6 temas \xB7 7 respuestas buenas de 10");let t=["Dal\xED","Murillo","Van Gogh","Sorolla","Mir\xF3","Vel\xE1zquez","Monet","Picasso","Rembrandt","Goya"];Ae.mode="est",Ae.data={title:"ARTE \xB7 BOMBA 1",q:"Pintores nacidos en Espa\xF1a",items:t,state:["ok","ok",null,"ok",null,null,null,"ok","bad",null],left:"Marta: 3",right:"Tom\xE1s: 2"},Xe.wall()}else if(i==="clasif")ri("Bomba clasificatoria","2 minutos \xB7 \xB1200 \u20AC"),xe.setKind("silver"),xe.setLedFrac(.62),xe.value="\xB1200 \u20AC",xe.dirty=!0,xi("blue",!0),Ae.mode="cla",Ae.data={title:"LOS ARTIFICIEROS \xB7 RESPONDE TOM\xC1S",q:"\xBFQu\xE9 oc\xE9ano ba\xF1a las costas de Galicia?",opts:["Atl\xE1ntico","\xCDndico"],state:null,money:"1.800 \u20AC"},fe.turn="blue",Xe.bombTeam();else if(i==="bote"){ri("Bomba dorada","Bote: "+bt(ni())),xe.setKind("gold"),xe.value=bt(ni()),xe.time=74,xe.dirty=!0;let t=[];for(let n=0;n<15;n++){let a=n<6?"ok":n===6||n===8?"pend":n===9?"cur":n===7?"ok":"off";t.push(a),xe.setMini(n,a)}xi("red",!0),Ae.mode="bote",Ae.data={bote:bt(ni()),q:"\xBFEn qu\xE9 ciudad est\xE1 la Alhambra?",minis:t,round:"PRIMERA VUELTA"},Nt.event("tension"),Xe.bote()}else if(i==="boteWall")li(!1),xe.setKind("gold"),Ae.mode="bote",Ae.data={bote:bt(ni()),q:"\xBFEn qu\xE9 ciudad est\xE1 la Alhambra?",minis:Array(15).fill("off"),round:"PRIMERA VUELTA"},Nt.event("tension"),Xe.diamonds();else if(i==="host")Nt.event("idle"),Xe.host();else if(i==="logo")li(!1),Xe.logo();else if(i==="credits")li(!1),Te("#mosca").classList.add("hidden"),Xe.high(),a0(Nn.run,null,"Los Petardos se llevan el bote: 85.000 \u20AC");else if(i==="opening")li(!1),Te("#mosca").classList.add("hidden"),ym([{small:"Un remake de fans creado por",big:"Iker Rodriguez Tejedor",ms:6e4}],{accent:i0}),It(Me(-6,3,6),Me(0,1.2,-1),!0);else if(i.startsWith("cab")){li(!1),Te("#topBtns").classList.add("hidden"),Te("#mosca").classList.add("hidden"),Bs=Bs||Xh(Dt);let t={cab1:.5,cab2:1.9,cab3:3.1,cab4:4.35,cab5:4.8,cab6:5.9}[i];ca.fn=()=>t0(t)}else i==="entrance"?(ca.fn=null,Dt.domElement.style.filter="",Fs(0),li(!1),xe.setKind("silver"),xe.root.position.y=4.2,n0(),It(Me(-2.5,1.6,7.5),Me(0,4,0),!0)):i==="menu"&&La()};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
