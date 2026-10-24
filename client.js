(()=>{var ld=0,ru=1,cd=2;var la=1,ud=2,er=3,gi=0,Kt=1,Xt=2,Vn=0,tr=1,ot=2,au=3,ou=4,hd=5;var xs=100,dd=101,fd=102,pd=103,md=104,gd=200,xd=201,vd=202,yd=203,lu=204,cu=205,_d=206,bd=207,Md=208,Sd=209,Ed=210,wd=211,Td=212,Ad=213,Cd=214,wo=0,To=1,Ao=2,Ws=3,Co=4,Ro=5,Po=6,Io=7,hl=0,Rd=1,Pd=2,si=0,ca=1,ua=2,ha=3,Ci=4,da=5,fa=6,pa=7;var uu=300,qi=301,vs=302,nr=303,dl=304,ma=306,No=1e3,li=1001,Lo=1002,ln=1003,Id=1004;var ga=1005;var hn=1006,fl=1007;var Yi=1008;var An=1009,hu=1010,du=1011,ir=1012,pl=1013,ri=1014,Wn=1015,pn=1016,ml=1017,gl=1018,sr=1020,fu=35902,pu=35899,mu=1021,gu=1022,Xn=1023,ci=1026,Zi=1027,xl=1028,vl=1029,Ki=1030,yl=1031;var _l=1033,xa=33776,va=33777,ya=33778,_a=33779,bl=35840,Ml=35841,Sl=35842,El=35843,wl=36196,Tl=37492,Al=37496,Cl=37488,Rl=37489,ba=37490,Pl=37491,Il=37808,Nl=37809,Ll=37810,Dl=37811,Ul=37812,Fl=37813,Ol=37814,Bl=37815,kl=37816,zl=37817,Hl=37818,Gl=37819,Vl=37820,Wl=37821,Xl=36492,ql=36494,Yl=36495,Zl=36283,Kl=36284,Ma=36285,Jl=36286;var Or=2300,Do=2301,So=2302,Kc=2303,Jc=2400,$c=2401,jc=2402;var Nd=3200;var Sa=0,Ld=1,Ri="",on="srgb",Br="srgb-linear",kr="linear",Rt="srgb";var Eo=7680;var Dd=519,Ud=512,Fd=513,Od=514,$l=515,Bd=516,kd=517,jl=518,zd=519,Hd=35044;var xu="300 es",ei=2e3,Xs=2001;function wp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Tp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gd(){let i=zr("canvas");return i.style.display="block",i}var Ph={},qs=null;function vu(...i){let e="THREE."+i.shift();qs?qs("log",e,...i):console.log(e,...i)}function Vd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Je(...i){i=Vd(i);let e="THREE."+i.shift();if(qs)qs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=Vd(i);let e="THREE."+i.shift();if(qs)qs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function hs(...i){let e=i.join(" ");e in Ph||(Ph[e]=!0,Je(...i))}function Wd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Xd={[wo]:To,[Ao]:Po,[Co]:Io,[Ws]:Ro,[To]:wo,[Po]:Ao,[Io]:Co,[Ro]:Ws},ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mc=Math.PI/180,Hr=180/Math.PI;function Ea(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function Ap(i,e){return(i%e+e)%e}function Sc(i,e,t){return(1-t)*i+t*e}function Ar(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Eu=class Eu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Eu.prototype.isVector2=!0;var Se=Eu,hi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||c!==h||l!==f||u!==g){let x=c*h+l*f+u*g+d*M;x<0&&(h=-h,f=-f,g=-g,M=-M,x=-x);let m=1-o;if(x<.9995){let S=Math.acos(x),C=Math.sin(S);m=Math.sin(m*S)/C,o=Math.sin(o*S)/C,c=c*m+h*o,l=l*m+f*o,u=u*m+g*o,d=d*m+M*o}else{c=c*m+h*o,l=l*m+f*o,u=u*m+g*o,d=d*m+M*o;let S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-o*f,e[t+2]=l*g+u*f+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),h=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},wu=class wu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ih.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wu.prototype.isVector3=!0;var R=wu,Ec=new R,Ih=new hi,Tu=class Tu{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],M=s[0],x=s[3],m=s[6],S=s[1],C=s[4],_=s[7],T=s[2],E=s[5],P=s[8];return r[0]=a*M+o*S+c*T,r[3]=a*x+o*C+c*E,r[6]=a*m+o*_+c*P,r[1]=l*M+u*S+d*T,r[4]=l*x+u*C+d*E,r[7]=l*m+u*_+d*P,r[2]=h*M+f*S+g*T,r[5]=h*x+f*C+g*E,r[8]=h*m+f*_+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,g=t*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return e[0]=d*M,e[1]=(s*l-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=h*M,e[4]=(u*t-s*c)*M,e[5]=(s*r-o*t)*M,e[6]=f*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wc.makeScale(e,t)),this}rotate(e){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wc.makeRotation(-e)),this}translate(e,t){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tu.prototype.isMatrix3=!0;var at=Tu,wc=new at,Nh=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cp(){let i={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Rt&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Rt&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Br]:{primaries:e,whitePoint:n,transfer:kr,toXYZ:Nh,fromXYZ:Lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:Nh,fromXYZ:Lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}var yt=Cp();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Rs,Uo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rs===void 0&&(Rs=zr("canvas")),Rs.width=e.width,Rs.height=e.height;let s=Rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Rs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rp=0,Ys=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Ea(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tc(s[a].image)):r.push(Tc(s[a]))}else r=Tc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Tc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var Pp=0,Ac=new R,bn=class i extends ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=li,s=li,r=hn,a=Yi,o=Xn,c=An,l=i.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Ea(),this.name="",this.source=new Ys(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ac).x}get height(){return this.source.getSize(Ac).y}get depth(){return this.source.getSize(Ac).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case No:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case No:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=uu;bn.DEFAULT_ANISOTROPY=1;var Au=class Au{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],M=c[2],x=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(g+x)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(l+1)/2,_=(f+1)/2,T=(m+1)/2,E=(u+h)/4,P=(d+M)/4,y=(g+x)/4;return C>_&&C>T?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=E/n,r=P/n):_>T?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=y/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=P/r,s=y/r),this.set(n,s,r,t),this}let S=Math.sqrt((x-g)*(x-g)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(x-g)/S,this.y=(d-M)/S,this.z=(h-u)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Au.prototype.isVector4=!0;var Wt=Au,Fo=class extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new bn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ys(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends Fo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Gr=class extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oo=class extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ul=class ul{constructor(e,t,n,s,r,a,o,c,l,u,d,h,f,g,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,d,h,f,g,M,x)}set(e,t,n,s,r,a,o,c,l,u,d,h,f,g,M,x){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=M,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ul().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),a=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,M=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-M*l,t[9]=-o*c,t[2]=M-h*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,g=l*u,M=l*d;t[0]=h+M*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=M+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,g=l*u,M=l*d;t[0]=h-M*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,M=o*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+M,t[1]=c*d,t[5]=M*l+h,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,f=a*l,g=o*c,M=o*l;t[0]=c*u,t[4]=M-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-M*d}else if(e.order==="XZY"){let h=a*c,f=a*l,g=o*c,M=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+M,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=M*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ip,e,Np)}lookAt(e,t,n){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Li.crossVectors(n,Rn),Li.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Li.crossVectors(n,Rn)),Li.normalize(),ja.crossVectors(Rn,Li),s[0]=Li.x,s[4]=ja.x,s[8]=Rn.x,s[1]=Li.y,s[5]=ja.y,s[9]=Rn.y,s[2]=Li.z,s[6]=ja.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],M=n[6],x=n[10],m=n[14],S=n[3],C=n[7],_=n[11],T=n[15],E=s[0],P=s[4],y=s[8],w=s[12],I=s[1],D=s[5],z=s[9],G=s[13],U=s[2],X=s[6],K=s[10],J=s[14],ne=s[3],Z=s[7],ee=s[11],re=s[15];return r[0]=a*E+o*I+c*U+l*ne,r[4]=a*P+o*D+c*X+l*Z,r[8]=a*y+o*z+c*K+l*ee,r[12]=a*w+o*G+c*J+l*re,r[1]=u*E+d*I+h*U+f*ne,r[5]=u*P+d*D+h*X+f*Z,r[9]=u*y+d*z+h*K+f*ee,r[13]=u*w+d*G+h*J+f*re,r[2]=g*E+M*I+x*U+m*ne,r[6]=g*P+M*D+x*X+m*Z,r[10]=g*y+M*z+x*K+m*ee,r[14]=g*w+M*G+x*J+m*re,r[3]=S*E+C*I+_*U+T*ne,r[7]=S*P+C*D+_*X+T*Z,r[11]=S*y+C*z+_*K+T*ee,r[15]=S*w+C*G+_*J+T*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],M=e[7],x=e[11],m=e[15],S=c*f-l*h,C=o*f-l*d,_=o*h-c*d,T=a*f-l*u,E=a*h-c*u,P=a*d-o*u;return t*(M*S-x*C+m*_)-n*(g*S-x*T+m*E)+s*(g*C-M*T+m*P)-r*(g*_-M*E+x*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],M=e[13],x=e[14],m=e[15],S=t*o-n*a,C=t*c-s*a,_=t*l-r*a,T=n*c-s*o,E=n*l-r*o,P=s*l-r*c,y=u*M-d*g,w=u*x-h*g,I=u*m-f*g,D=d*x-h*M,z=d*m-f*M,G=h*m-f*x,U=S*G-C*z+_*D+T*I-E*w+P*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/U;return e[0]=(o*G-c*z+l*D)*X,e[1]=(s*z-n*G-r*D)*X,e[2]=(M*P-x*E+m*T)*X,e[3]=(h*E-d*P-f*T)*X,e[4]=(c*I-a*G-l*w)*X,e[5]=(t*G-s*I+r*w)*X,e[6]=(x*_-g*P-m*C)*X,e[7]=(u*P-h*_+f*C)*X,e[8]=(a*z-o*I+l*y)*X,e[9]=(n*I-t*z-r*y)*X,e[10]=(g*E-M*_+m*S)*X,e[11]=(d*_-u*E-f*S)*X,e[12]=(o*w-a*D-c*y)*X,e[13]=(t*D-n*w+s*y)*X,e[14]=(M*C-g*T-x*S)*X,e[15]=(u*T-d*C+h*S)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,g=r*d,M=a*u,x=a*d,m=o*d,S=c*l,C=c*u,_=c*d,T=n.x,E=n.y,P=n.z;return s[0]=(1-(M+m))*T,s[1]=(f+_)*T,s[2]=(g-C)*T,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(h+m))*E,s[6]=(x+S)*E,s[7]=0,s[8]=(g+C)*P,s[9]=(x-S)*P,s[10]=(1-(h+M))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ps.set(s[0],s[1],s[2]).length(),o=Ps.set(s[4],s[5],s[6]).length(),c=Ps.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Jn.copy(this);let l=1/a,u=1/o,d=1/c;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,t.setFromRotationMatrix(Jn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=ei,c=!1){let l=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),g,M;if(c)g=r/(a-r),M=a*r/(a-r);else if(o===ei)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Xs)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ei,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),g,M;if(c)g=1/(a-r),M=a/(a-r);else if(o===ei)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Xs)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ul.prototype.isMatrix4=!0;var Ft=ul,Ps=new R,Jn=new Ft,Ip=new R(0,0,0),Np=new R(1,1,1),Li=new R,ja=new R,Rn=new R,Dh=new Ft,Uh=new hi,di=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lp=0,Fh=new R,Is=new hi,bi=new Ft,Qa=new R,Cr=new R,Dp=new R,Up=new hi,Oh=new R(1,0,0),Bh=new R(0,1,0),kh=new R(0,0,1),zh={type:"added"},Fp={type:"removed"},Ns={type:"childadded",child:null},Cc={type:"childremoved",child:null},Ht=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new di,n=new hi,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new at}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(Bh,e)}rotateZ(e){return this.rotateOnAxis(kh,e)}translateOnAxis(e,t){return Fh.copy(e).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(Bh,e)}translateZ(e){return this.translateOnAxis(kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qa.copy(e):Qa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Cr,Qa,this.up):bi.lookAt(Qa,Cr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(bi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zh),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fp),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zh),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,Dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new R(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Op={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let M of e.hand.values()){let x=t.getJointPose(M,n),m=this._getHandJoint(l,M);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Rc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=Ap(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Rc(a,r,e+1/3),this.g=Rc(a,r,e),this.b=Rc(a,r,e-1/3)}return yt.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function n(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){let n=qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return yt.workingToColorSpace(xn.copy(this),e),Math.round(_t(xn.r*255,0,255))*65536+Math.round(_t(xn.g*255,0,255))*256+Math.round(_t(xn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(xn.copy(this),t);let n=xn.r,s=xn.g,r=xn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=on){yt.workingToColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,s=xn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(eo);let n=Sc(Di.h,eo.h,t),s=Sc(Di.s,eo.s,t),r=Sc(Di.l,eo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new pe;pe.NAMES=qd;var ds=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ai=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new R,Mi=new R,Pc=new R,Si=new R,Ls=new R,Ds=new R,Hh=new R,Ic=new R,Nc=new R,Lc=new R,Dc=new Wt,Uc=new Wt,Fc=new Wt,Bi=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),Mi.subVectors(n,t),Pc.subVectors(e,t);let a=$n.dot($n),o=$n.dot(Mi),c=$n.dot(Pc),l=Mi.dot(Mi),u=Mi.dot(Pc),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Si.x),c.addScaledVector(a,Si.y),c.addScaledVector(o,Si.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Dc.setScalar(0),Uc.setScalar(0),Fc.setScalar(0),Dc.fromBufferAttribute(e,t),Uc.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Dc,r.x),a.addScaledVector(Uc,r.y),a.addScaledVector(Fc,r.z),a}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),Mi.subVectors(e,t),$n.cross(Mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),$n.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ls.subVectors(s,n),Ds.subVectors(r,n),Ic.subVectors(e,n);let c=Ls.dot(Ic),l=Ds.dot(Ic);if(c<=0&&l<=0)return t.copy(n);Nc.subVectors(e,s);let u=Ls.dot(Nc),d=Ds.dot(Nc);if(u>=0&&d<=u)return t.copy(s);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ls,a);Lc.subVectors(e,r);let f=Ls.dot(Lc),g=Ds.dot(Lc);if(g>=0&&f<=g)return t.copy(r);let M=f*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ds,o);let x=u*g-f*d;if(x<=0&&d-u>=0&&f-g>=0)return Hh.subVectors(r,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(Hh,o);let m=1/(x+M+h);return a=M*m,o=h*m,t.copy(n).addScaledVector(Ls,a).addScaledVector(Ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fi=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(r,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),no.subVectors(this.max,Rr),Us.subVectors(e.a,Rr),Fs.subVectors(e.b,Rr),Os.subVectors(e.c,Rr),Ui.subVectors(Fs,Us),Fi.subVectors(Os,Fs),os.subVectors(Us,Os);let t=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-os.z,os.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,os.z,0,-os.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-os.y,os.x,0];return!Oc(t,Us,Fs,Os,no)||(t=[1,0,0,0,1,0,0,0,1],!Oc(t,Us,Fs,Os,no))?!1:(io.crossVectors(Ui,Fi),t=[io.x,io.y,io.z],Oc(t,Us,Fs,Os,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ei=[new R,new R,new R,new R,new R,new R,new R,new R],jn=new R,to=new fi,Us=new R,Fs=new R,Os=new R,Ui=new R,Fi=new R,os=new R,Rr=new R,no=new R,io=new R,ls=new R;function Oc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ls.fromArray(i,r);let o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),c=e.dot(ls),l=t.dot(ls),u=n.dot(ls);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var $t=new R,so=new Se,Bp=0,Pt=class extends ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hd,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ar(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),s=wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),s=wn(s,this.array),r=wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Wr=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xr=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},kp=new fi,Pr=new R,Bc=new R,pi=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):kp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Bc)),this.expandByPoint(Pr.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zp=0,zn=new Ft,kc=new Ht,Bs=new R,Pn=new fi,Ir=new fi,an=new R,xt=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wp(e)?Xr:Wr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Pn.min,Ir.min),Pn.expandByPoint(an),an.addVectors(Pn.max,Ir.max),Pn.expandByPoint(an)):(Pn.expandByPoint(Ir.min),Pn.expandByPoint(Ir.max))}Pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)an.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(an));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)an.fromBufferAttribute(o,l),c&&(Bs.fromBufferAttribute(e,l),an.add(Bs)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new R,c[y]=new R;let l=new R,u=new R,d=new R,h=new Se,f=new Se,g=new Se,M=new R,x=new R;function m(y,w,I){l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,I),h.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,I),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),x.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[y].add(M),o[w].add(M),o[I].add(M),c[y].add(x),c[w].add(x),c[I].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let y=0,w=S.length;y<w;++y){let I=S[y],D=I.start,z=I.count;for(let G=D,U=D+z;G<U;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let C=new R,_=new R,T=new R,E=new R;function P(y){T.fromBufferAttribute(s,y),E.copy(T);let w=o[y];C.copy(w),C.sub(T.multiplyScalar(T.dot(w))).normalize(),_.crossVectors(E,w);let D=_.dot(c[y])<0?-1:1;a.setXYZW(y,C.x,C.y,C.z,D)}for(let y=0,w=S.length;y<w;++y){let I=S[y],D=I.start,z=I.count;for(let G=D,U=D+z;G<U;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,u=new R,d=new R;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),M=e.getX(h+1),x=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,x),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,x),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let M=0,x=c.length;M<x;M++){o.isInterleavedBufferAttribute?f=c[M]*o.data.stride+o.offset:f=c[M]*u;for(let m=0;m<u;m++)h[g++]=l[f++]}return new Pt(h,u,d)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var zc=new R,Hp=new R,Gp=new at,Qn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zc.subVectors(n,t).cross(Hp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(zc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gp.getNormalMatrix(e),s=this.coplanarPoint(zc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vp=0,ti=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Ea(),this.name="",this.type="Material",this.blending=tr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lu,this.blendDst=cu,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var wi=new R,Hc=new R,ro=new R,ao=new R,Ks=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hc.copy(e).add(t).multiplyScalar(.5),ro.copy(t).sub(e).normalize(),ao.copy(this.origin).sub(Hc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ro),o=ao.dot(this.direction),c=-ao.dot(ro),l=ao.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=r*u,d>=0)if(h>=-g)if(h<=g){let M=1/u;d*=M,h*=M,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Hc).addScaledVector(ro,h),f}intersectSphere(e,t){if(e.radius<0)return null;wi.subVectors(e.center,this.origin);let n=wi.dot(this.direction),s=wi.dot(wi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,M=t.y-a.y,x=t.z-a.z,m=n.x-a.x,S=n.y-a.y,C=n.z-a.z,_=Math.abs(c),T=Math.abs(l),E=Math.abs(u),P,y,w,I,D,z,G,U,X,K,J,ne;if(_>=T&&_>=E?(w=c,z=d,X=g,ne=m,c>=0?(P=l,y=u,I=h,D=f,G=M,U=x,K=S,J=C):(P=u,y=l,I=f,D=h,G=x,U=M,K=C,J=S)):T>=E?(w=l,z=h,X=M,ne=S,l>=0?(P=u,y=c,I=f,D=d,G=x,U=g,K=C,J=m):(P=c,y=u,I=d,D=f,G=g,U=x,K=m,J=C)):(w=u,z=f,X=x,ne=C,u>=0?(P=c,y=l,I=d,D=h,G=g,U=M,K=m,J=S):(P=l,y=c,I=h,D=d,G=M,U=g,K=S,J=m)),w===0)return null;let Z=P/w,ee=y/w,re=1/w,De=I-Z*z,Ue=D-ee*z,Mt=G-Z*X,ct=U-ee*X,dt=K-Z*ne,j=J-ee*ne,se=dt*ct-j*Mt,we=De*j-Ue*dt,qe=Mt*Ue-ct*De;if(s){if(se<0||we<0||qe<0)return null}else if((se<0||we<0||qe<0)&&(se>0||we>0||qe>0))return null;let me=se+we+qe;if(me===0)return null;let nt=re*(se*z+we*X+qe*ne);return(me>0?nt<0:nt>0)?null:this.at(nt/me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gh=new Ft,cs=new Ks,oo=new pi,Vh=new R,lo=new R,co=new R,uo=new R,Gc=new R,ho=new R,Wh=new R,fo=new R,Ge=class extends Ht{constructor(e=new xt,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(Gc.fromBufferAttribute(d,e),a?ho.addScaledVector(Gc,u):ho.addScaledVector(Gc.sub(t),u))}t.add(ho)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(oo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(oo,Vh)===null||cs.origin.distanceToSquared(Vh)>(e.far-e.near)**2))&&(Gh.copy(r).invert(),cs.copy(e.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){let x=h[g],m=a[x.materialIndex],S=Math.max(x.start,f.start),C=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let _=S,T=C;_<T;_+=3){let E=o.getX(_),P=o.getX(_+1),y=o.getX(_+2);s=po(this,m,e,n,l,u,d,E,P,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let x=g,m=M;x<m;x+=3){let S=o.getX(x),C=o.getX(x+1),_=o.getX(x+2);s=po(this,a,e,n,l,u,d,S,C,_),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){let x=h[g],m=a[x.materialIndex],S=Math.max(x.start,f.start),C=Math.min(c.count,Math.min(x.start+x.count,f.start+f.count));for(let _=S,T=C;_<T;_+=3){let E=_,P=_+1,y=_+2;s=po(this,m,e,n,l,u,d,E,P,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let x=g,m=M;x<m;x+=3){let S=x,C=x+1,_=x+2;s=po(this,a,e,n,l,u,d,S,C,_),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function Wp(i,e,t,n,s,r,a,o){let c;if(e.side===Kt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===gi,o),c===null)return null;fo.copy(o),fo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(fo);return l<t.near||l>t.far?null:{distance:l,point:fo.clone(),object:i}}function po(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,lo),i.getVertexPosition(c,co),i.getVertexPosition(l,uo);let u=Wp(i,e,t,n,lo,co,uo,Wh);if(u){let d=new R;Bi.getBarycoord(Wh,lo,co,uo,d),s&&(u.uv=Bi.getInterpolatedAttribute(s,o,c,l,d,new Se)),r&&(u.uv1=Bi.getInterpolatedAttribute(r,o,c,l,d,new Se)),a&&(u.normal=Bi.getInterpolatedAttribute(a,o,c,l,d,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new R,materialIndex:0};Bi.getNormal(lo,co,uo,h.normal),u.face=h,u.barycoord=d}return u}var qr=class extends bn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=ln,u=ln,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yr=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ks=new Ft,Xh=new Ft,mo=[],qh=new fi,Xp=new Ft,Nr=new Ge,Lr=new pi,ni=class extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),qh.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(qh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),Lr.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),e.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ks),Xh.multiplyMatrices(n,ks),Nr.matrixWorld=Xh,Nr.raycast(e,mo);for(let a=0,o=mo.length;a<o;a++){let c=mo[a];c.instanceId=r,c.object=this,t.push(c)}mo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qr(new Float32Array(s*this.count),s,this.count,xl,Wn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},us=new pi,qp=new Se(.5,.5),go=new R,Js=class{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],M=r[9],x=r[10],m=r[11],S=r[12],C=r[13],_=r[14],T=r[15];if(s[0].setComponents(l-a,f-u,m-g,T-S).normalize(),s[1].setComponents(l+a,f+u,m+g,T+S).normalize(),s[2].setComponents(l+o,f+d,m+M,T+C).normalize(),s[3].setComponents(l-o,f-d,m-M,T-C).normalize(),n)s[4].setComponents(c,h,x,_).normalize(),s[5].setComponents(l-c,f-h,m-x,T-_).normalize();else if(s[4].setComponents(l-c,f-h,m-x,T-_).normalize(),t===ei)s[5].setComponents(l+c,f+h,m+x,T+_).normalize();else if(t===Xs)s[5].setComponents(c,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);let t=qp.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fs=class extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bo=new R,ko=new R,Yh=new Ft,Dr=new Ks,xo=new pi,Vc=new R,Zh=new R,zo=class extends Ht{constructor(e=new xt,t=new fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Bo.fromBufferAttribute(t,s-1),ko.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Bo.distanceTo(ko);e.setAttribute("lineDistance",new tt(n,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;Yh.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Yh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=f,x=g-1;M<x;M+=l){let m=u.getX(M),S=u.getX(M+1),C=vo(this,e,Dr,c,m,S,M);C&&t.push(C)}if(this.isLineLoop){let M=u.getX(g-1),x=u.getX(f),m=vo(this,e,Dr,c,M,x,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=f,x=g-1;M<x;M+=l){let m=vo(this,e,Dr,c,M,M+1,M);m&&t.push(m)}if(this.isLineLoop){let M=vo(this,e,Dr,c,g-1,f,g-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Bo.fromBufferAttribute(o,s),ko.fromBufferAttribute(o,r),t.distanceSqToSegment(Bo,ko,Vc,Zh)>n)return;Vc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Vc);if(!(l<e.near||l>e.far))return{distance:l,point:Zh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Kh=new R,Jh=new R,ki=class extends zo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Kh.fromBufferAttribute(t,s),Jh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kh.distanceTo(Jh);e.setAttribute("lineDistance",new tt(n,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Mn=class extends ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$h=new Ft,Qc=new Ks,yo=new pi,_o=new R,dn=class extends Ht{constructor(e=new xt,t=new Mn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;$h.copy(s).invert(),Qc.copy(e.ray).applyMatrix4($h);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=h,M=f;g<M;g++){let x=l.getX(g);_o.fromBufferAttribute(d,x),jh(_o,x,c,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,M=f;g<M;g++)_o.fromBufferAttribute(d,g),jh(_o,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function jh(i,e,t,n,s,r,a){let o=Qc.distanceSqToPoint(i);if(o<t){let c=new R;Qc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Zr=class extends bn{constructor(e=[],t=qi,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kr=class extends bn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zi=class extends bn{constructor(e,t,n=ri,s,r,a,o=ln,c=ln,l,u=ci,d=1){if(u!==ci&&u!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ys(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ho=class extends zi{constructor(e,t=ri,n=qi,s,r,a=ln,o=ln,c,l=ci){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Jr=class extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},In=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(d,2));function g(M,x,m,S,C,_,T,E,P,y,w){let I=_/P,D=T/y,z=_/2,G=T/2,U=E/2,X=P+1,K=y+1,J=0,ne=0,Z=new R;for(let ee=0;ee<K;ee++){let re=ee*D-G;for(let De=0;De<X;De++){let Ue=De*I-z;Z[M]=Ue*S,Z[x]=re*C,Z[m]=U,l.push(Z.x,Z.y,Z.z),Z[M]=0,Z[x]=0,Z[m]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(De/P),d.push(1-ee/y),J+=1}}for(let ee=0;ee<y;ee++)for(let re=0;re<P;re++){let De=h+re+X*ee,Ue=h+re+X*(ee+1),Mt=h+(re+1)+X*(ee+1),ct=h+(re+1)+X*ee;c.push(De,Ue,ct),c.push(Ue,Mt,ct),ne+=6}o.addGroup(f,ne,w),f+=ne,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ii=class i extends xt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,g=n*2+r,M=s+1,x=new R,m=new R;for(let S=0;S<=g;S++){let C=0,_=0,T=0,E=0;if(S<=n){let w=S/n,I=w*Math.PI/2;_=-u-e*Math.cos(I),T=e*Math.sin(I),E=-e*Math.cos(I),C=w*d}else if(S<=n+r){let w=(S-n)/r;_=-u+w*t,T=e,E=0,C=d+w*h}else{let w=(S-n-r)/n,I=w*Math.PI/2;_=u+e*Math.sin(I),T=e*Math.cos(I),E=e*Math.sin(I),C=d+h+w*d}let P=Math.max(0,Math.min(1,C/f)),y=0;S===0?y=.5/s:S===g&&(y=-.5/s);for(let w=0;w<=s;w++){let I=w/s,D=I*Math.PI*2,z=Math.sin(D),G=Math.cos(D);m.x=-T*G,m.y=_,m.z=T*z,o.push(m.x,m.y,m.z),x.set(-T*G,E,T*z),x.normalize(),c.push(x.x,x.y,x.z),l.push(I+y,P)}if(S>0){let w=(S-1)*M;for(let I=0;I<s;I++){let D=w+I,z=w+I+1,G=S*M+I,U=S*M+I+1;a.push(D,z,G),a.push(z,U,G)}}}this.setIndex(a),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},$r=class i extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new R,u=new Se;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=n+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ie=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,M=[],x=n/2,m=0;S(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(f,2));function S(){let _=new R,T=new R,E=0,P=(t-e)/n;for(let y=0;y<=r;y++){let w=[],I=y/r,D=I*(t-e)+e;for(let z=0;z<=s;z++){let G=z/s,U=G*c+o,X=Math.sin(U),K=Math.cos(U);T.x=D*X,T.y=-I*n+x,T.z=D*K,d.push(T.x,T.y,T.z),_.set(X,P,K).normalize(),h.push(_.x,_.y,_.z),f.push(G,1-I),w.push(g++)}M.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let I=M[w][y],D=M[w+1][y],z=M[w+1][y+1],G=M[w][y+1];(e>0||w!==0)&&(u.push(I,D,G),E+=3),(t>0||w!==r-1)&&(u.push(D,z,G),E+=3)}l.addGroup(m,E,0),m+=E}function C(_){let T=g,E=new Se,P=new R,y=0,w=_===!0?e:t,I=_===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,x*I,0),h.push(0,I,0),f.push(.5,.5),g++;let D=g;for(let z=0;z<=s;z++){let U=z/s*c+o,X=Math.cos(U),K=Math.sin(U);P.x=w*K,P.y=x*I,P.z=w*X,d.push(P.x,P.y,P.z),h.push(0,I,0),E.x=X*.5+.5,E.y=K*.5*I+.5,f.push(E.x,E.y),g++}for(let z=0;z<s;z++){let G=T+z,U=D+z;_===!0?u.push(U,U+1,G):u.push(U+1,U,G),y+=3}l.addGroup(m,y,_===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hi=class i extends Ie{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Go=class i extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let C=new R,_=new R,T=new R;for(let E=0;E<t.length;E+=3)f(t[E+0],C),f(t[E+1],_),f(t[E+2],T),c(C,_,T,S)}function c(S,C,_,T){let E=T+1,P=[];for(let y=0;y<=E;y++){P[y]=[];let w=S.clone().lerp(_,y/E),I=C.clone().lerp(_,y/E),D=E-y;for(let z=0;z<=D;z++)z===0&&y===E?P[y][z]=w:P[y][z]=w.clone().lerp(I,z/D)}for(let y=0;y<E;y++)for(let w=0;w<2*(E-y)-1;w++){let I=Math.floor(w/2);w%2===0?(h(P[y][I+1]),h(P[y+1][I]),h(P[y][I])):(h(P[y][I+1]),h(P[y+1][I+1]),h(P[y+1][I]))}}function l(S){let C=new R;for(let _=0;_<r.length;_+=3)C.x=r[_+0],C.y=r[_+1],C.z=r[_+2],C.normalize().multiplyScalar(S),r[_+0]=C.x,r[_+1]=C.y,r[_+2]=C.z}function u(){let S=new R;for(let C=0;C<r.length;C+=3){S.x=r[C+0],S.y=r[C+1],S.z=r[C+2];let _=x(S)/2/Math.PI+.5,T=m(S)/Math.PI+.5;a.push(_,1-T)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){let C=a[S+0],_=a[S+2],T=a[S+4],E=Math.max(C,_,T),P=Math.min(C,_,T);E>.9&&P<.1&&(C<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function f(S,C){let _=S*3;C.x=e[_+0],C.y=e[_+1],C.z=e[_+2]}function g(){let S=new R,C=new R,_=new R,T=new R,E=new Se,P=new Se,y=new Se;for(let w=0,I=0;w<r.length;w+=9,I+=6){S.set(r[w+0],r[w+1],r[w+2]),C.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),E.set(a[I+0],a[I+1]),P.set(a[I+2],a[I+3]),y.set(a[I+4],a[I+5]),T.copy(S).add(C).add(_).divideScalar(3);let D=x(T);M(E,I+0,S,D),M(P,I+2,C,D),M(y,I+4,_,D)}}function M(S,C,_,T){T<0&&S.x===1&&(a[C]=S.x-1),_.x===0&&_.z===0&&(a[C]=T/2/Math.PI+.5)}function x(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Se:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,s=[],r=[],a=[],o=new R,c=new Ft;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(_t(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(_t(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},jr=class extends Hn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vo=class extends jr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yu(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Qh=new R,ed=new R,Wc=new yu,Xc=new yu,qc=new yu,Sn=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(ed.subVectors(s[0],s[1]).add(s[0]),l=ed);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Qh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Qh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(u),f);M<1e-4&&(M=1),g<1e-4&&(g=M),x<1e-4&&(x=M),Wc.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,M,x),Xc.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,M,x),qc.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,M,x)}else this.curveType==="catmullrom"&&(Wc.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Xc.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),qc.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Wc.calc(c),Xc.calc(c),qc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function td(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Yp(i,e){let t=1-i;return t*t*e}function Zp(i,e){return 2*(1-i)*i*e}function Kp(i,e){return i*i*e}function Ur(i,e,t,n){return Yp(i,e)+Zp(i,t)+Kp(i,n)}function Jp(i,e){let t=1-i;return t*t*t*e}function $p(i,e){let t=1-i;return 3*t*t*i*e}function jp(i,e){return 3*(1-i)*i*i*e}function Qp(i,e){return i*i*i*e}function Fr(i,e,t,n,s){return Jp(i,e)+$p(i,t)+jp(i,n)+Qp(i,s)}var Wo=class extends Hn{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fr(e,s.x,r.x,a.x,o.x),Fr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xo=class extends Hn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fr(e,s.x,r.x,a.x,o.x),Fr(e,s.y,r.y,a.y,o.y),Fr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qo=class extends Hn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yo=class extends Hn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zo=class extends Hn{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ur(e,s.x,r.x,a.x),Ur(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends Hn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ur(e,s.x,r.x,a.x),Ur(e,s.y,r.y,a.y),Ur(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(td(o,c.x,l.x,u.x,d.x),td(o,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},em=Object.freeze({__proto__:null,ArcCurve:Vo,CatmullRomCurve3:Sn,CubicBezierCurve:Wo,CubicBezierCurve3:Xo,EllipseCurve:jr,LineCurve:qo,LineCurve3:Yo,QuadraticBezierCurve:Zo,QuadraticBezierCurve3:Qr,SplineCurve:Ko});var $s=class i extends Go{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ea=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=e/o,h=t/c,f=[],g=[],M=[],x=[];for(let m=0;m<u;m++){let S=m*h-a;for(let C=0;C<l;C++){let _=C*d-r;g.push(_,-S,0),M.push(0,0,1),x.push(C/o),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){let C=S+l*m,_=S+l*(m+1),T=S+1+l*(m+1),E=S+1+l*m;f.push(C,_,E),f.push(_,T,E)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(M,3)),this.setAttribute("uv",new tt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var bt=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],d=new R,h=new R,f=[],g=[],M=[],x=[];for(let m=0;m<=n;m++){let S=[],C=m/n,_=a+C*o,T=e*Math.cos(_),E=Math.sqrt(e*e-T*T),P=0;m===0&&a===0?P=.5/t:m===n&&c===Math.PI&&(P=-.5/t);for(let y=0;y<=t;y++){let w=y/t,I=s+w*r;d.x=-E*Math.cos(I),d.y=T,d.z=E*Math.sin(I),g.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),x.push(w+P,1-C),S.push(l++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){let C=u[m][S+1],_=u[m][S],T=u[m+1][S],E=u[m+1][S+1];(m!==0||a>0)&&f.push(C,_,E),(m!==n-1||c<Math.PI)&&f.push(_,T,E)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(M,3)),this.setAttribute("uv",new tt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var cn=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],d=[],h=new R,f=new R,g=new R;for(let M=0;M<=n;M++){let x=a+M/n*o;for(let m=0;m<=s;m++){let S=m/s*r;f.x=(e+t*Math.cos(x))*Math.cos(S),f.y=(e+t*Math.cos(x))*Math.sin(S),f.z=t*Math.sin(x),l.push(f.x,f.y,f.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(m/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let x=1;x<=s;x++){let m=(s+1)*M+x-1,S=(s+1)*(M-1)+x-1,C=(s+1)*(M-1)+x,_=(s+1)*M+x;c.push(m,S,_),c.push(S,C,_)}this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var mi=class i extends xt{constructor(e=new Qr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,c=new R,l=new Se,u=new R,d=[],h=[],f=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(f,2));function M(){for(let C=0;C<t;C++)x(C);x(r===!1?t:0),S(),m()}function x(C){u=e.getPointAt(C/t,u);let _=a.normals[C],T=a.binormals[C];for(let E=0;E<=s;E++){let P=E/s*Math.PI*2,y=Math.sin(P),w=-Math.cos(P);c.x=w*_.x+y*T.x,c.y=w*_.y+y*T.y,c.z=w*_.z+y*T.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,d.push(o.x,o.y,o.z)}}function m(){for(let C=1;C<=t;C++)for(let _=1;_<=s;_++){let T=(s+1)*(C-1)+(_-1),E=(s+1)*C+(_-1),P=(s+1)*C+_,y=(s+1)*(C-1)+_;g.push(T,E,y),g.push(E,P,y)}}function S(){for(let C=0;C<=t;C++)for(let _=0;_<=s;_++)l.x=C/t,l.y=_/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new em[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ys(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(nd(s))s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(nd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function vn(i){let e={};for(let t=0;t<i.length;t++){let n=ys(i[t]);for(let s in n)e[s]=n[s]}return e}function nd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _u(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var Pi={clone:ys,merge:vn},nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nm,this.fragmentShader=im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Se().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new at().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ft().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},js=class extends vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fn=class extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gn=class extends fn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ta=class extends ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=hl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jo=class extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$o=class extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function zs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},jo=class extends Gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jc,endingEnd:Jc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $c:r=e,o=2*t-n;break;case jc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $c:a=e,c=2*n-t;break;case jc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),M=g*g,x=M*g,m=-h*x+2*h*M-h*g,S=(1+h)*x+(-1.5-2*h)*M+(-.5+h)*g+1,C=(-1-f)*x+(1.5+f)*M+.5*g,_=f*x-f*M;for(let T=0;T!==o;++T)r[T]=m*a[u+T]+S*a[l+T]+C*a[c+T]+_*a[d+T];return r}},Qo=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*d+a[c+h]*u;return r}},el=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},tl=class extends Gi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-t)/(s-t),M=1-g;for(let x=0;x!==o;++x)r[x]=a[l+x]*M+a[c+x]*g;return r}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let M=a[l+g],x=a[c+g],m=f*h+g*2,S=d[m],C=d[m+1],_=e*h+g*2,T=u[_],E=u[_+1],P=rm(n,t,S,T,s);r[g]=Yd(P,M,C,E,x)}return r}};function Yd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function sm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function rm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Yd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=sm(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zs(t,this.TimeBufferType),this.values=zs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zs(e.times,Array),values:zs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Yc(e.settings)&&(n.settings={inTangents:zs(e.settings.inTangents,Array),outTangents:zs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new tl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case Do:t=this.InterpolantFactoryMethodLinear;break;case So:t=this.InterpolantFactoryMethodSmooth;break;case Kc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return Do;case this.InterpolantFactoryMethodSmooth:return So;case this.InterpolantFactoryMethodBezier:return Kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Yc(this.settings)&&(id(this.settings.inTangents,e),id(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){et("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){et("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Tp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){et("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===So,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let M=t[d+g];if(M!==t[h+g]||M!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Yc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function id(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Do;var Vi=class extends Nn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Or;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};nl.prototype.ValueTypeName="color";var il=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};il.prototype.ValueTypeName="number";var sl=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)hi.slerpFlat(r,0,a,l-o,a,l,c);return r}},na=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}};na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Nn{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Or;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};rl.prototype.ValueTypeName="vector";var al=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zd=new al,ol=class{constructor(e){this.manager=e!==void 0?e:Zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var ps=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ms=class extends ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zc=new Ft,sd=new R,rd=new R,Qs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;sd.setFromMatrixPosition(e.matrixWorld),t.position.copy(sd),rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Xs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bo=new R,Mo=new hi,oi=new R,ia=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bo,Mo,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,Mo,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(bo,Mo,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,Mo,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new R,ad=new Se,od=new Se,jt=class extends ia{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,ad,od),t.subVectors(od,ad)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},eu=class extends Qs{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Hr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},sa=class extends ps{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new eu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},tu=class extends Qs{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},Tn=class extends ps{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Xi=class extends ia{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nu=class extends Qs{constructor(){super(new Xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new nu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Hs=-90,Gs=1,ll=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(Hs,Gs,e,t);s.layers=this.layers,this.add(s);let r=new jt(Hs,Gs,e,t);r.layers=this.layers,this.add(r);let a=new jt(Hs,Gs,e,t);a.layers=this.layers,this.add(a);let o=new jt(Hs,Gs,e,t);o.layers=this.layers,this.add(o);let c=new jt(Hs,Gs,e,t);c.layers=this.layers,this.add(c);let l=new jt(Hs,Gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},cl=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ra=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=am.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function am(){this._document.hidden===!1&&this.reset()}var bu="\\[\\]\\.:\\/",om=new RegExp("["+bu+"]","g"),Mu="[^"+bu+"]",lm="[^"+bu.replace("\\.","")+"]",cm=/((?:WC+[\/:])*)/.source.replace("WC",Mu),um=/(WCOD+)?/.source.replace("WCOD",lm),hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mu),dm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mu),fm=new RegExp("^"+cm+um+hm+dm+"$"),pm=["material","materials","bones","map"],iu=class{constructor(e,t,n){let s=n||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(om,"")}static parseTrackName(e){let t=fm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);pm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;et("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=iu;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xy=new Float32Array(1);var aa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Je("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Cu=class Cu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Cu.prototype.isMatrix2=!0;var su=Cu;var oa=class extends ki{constructor(e=10,t=10,n=4473924,s=8947848){n=new pe(n),s=new pe(s);let r=t/2,a=e/t,o=e/2,c=[],l=[];for(let h=0,f=0,g=-o;h<=t;h++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);let M=h===r?n:s;M.toArray(l,f),f+=3,M.toArray(l,f),f+=3,M.toArray(l,f),f+=3,M.toArray(l,f),f+=3}let u=new xt;u.setAttribute("position",new tt(c,3)),u.setAttribute("color",new tt(l,3));let d=new fs({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Su(i,e,t,n){let s=mm(n);switch(t){case mu:return i*e;case xl:return i*e/s.components*s.byteLength;case vl:return i*e/s.components*s.byteLength;case Ki:return i*e*2/s.components*s.byteLength;case yl:return i*e*2/s.components*s.byteLength;case gu:return i*e*3/s.components*s.byteLength;case Xn:return i*e*4/s.components*s.byteLength;case _l:return i*e*4/s.components*s.byteLength;case xa:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ml:case El:return Math.max(i,16)*Math.max(e,8)/4;case bl:case Sl:return Math.max(i,8)*Math.max(e,8)/2;case wl:case Tl:case Cl:case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Al:case ba:case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xl:case ql:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zl:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ma:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mm(i){switch(i){case An:case hu:return{byteLength:1,components:1};case ir:case du:case pn:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case ri:case pl:case Wn:return{byteLength:4,components:1};case fu:case pu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function xf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xm(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,d[h]=M)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let M=d[f];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ym=`#ifdef USE_ALPHAHASH
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
#endif`,_m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Em=`#ifdef USE_AOMAP
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
#endif`,wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tm=`#ifdef USE_BATCHING
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
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Im=`#ifdef USE_IRIDESCENCE
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
#endif`,Nm=`#ifdef USE_BUMPMAP
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
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hm=`#define PI 3.141592653589793
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
} // validated`,Gm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
}`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,u0=`#ifdef USE_ENVMAP
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
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
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
#endif`,g0=`uniform sampler2D dfgLUT;
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
}`,x0=`
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,b0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C0=`#if defined( USE_POINTS_UV )
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
#endif`,R0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,H0=`#ifdef USE_NORMALMAP
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
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ig=`float getShadowMask() {
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
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,wg=`#if DEPTH_PACKING == 3200
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
}`,Tg=`#define DISTANCE
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
}`,Ag=`#define DISTANCE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Dg=`#define LAMBERT
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
}`,Ug=`#define LAMBERT
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
}`,Fg=`#define MATCAP
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
}`,Og=`#define MATCAP
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
}`,Bg=`#define NORMAL
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
}`,kg=`#define NORMAL
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
}`,zg=`#define PHONG
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
}`,Hg=`#define PHONG
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
}`,Gg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
}`,Wg=`#define TOON
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
}`,Xg=`#define TOON
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
}`,qg=`uniform float size;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Kg=`uniform vec3 color;
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
}`,Jg=`uniform float rotation;
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
}`,$g=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:vm,alphahash_pars_fragment:ym,alphamap_fragment:_m,alphamap_pars_fragment:bm,alphatest_fragment:Mm,alphatest_pars_fragment:Sm,aomap_fragment:Em,aomap_pars_fragment:wm,batching_pars_vertex:Tm,batching_vertex:Am,begin_vertex:Cm,beginnormal_vertex:Rm,bsdfs:Pm,iridescence_fragment:Im,bumpmap_pars_fragment:Nm,clipping_planes_fragment:Lm,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Fm,color_fragment:Om,color_pars_fragment:Bm,color_pars_vertex:km,color_vertex:zm,common:Hm,cube_uv_reflection_fragment:Gm,defaultnormal_vertex:Vm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Xm,emissivemap_fragment:qm,emissivemap_pars_fragment:Ym,colorspace_fragment:Zm,colorspace_pars_fragment:Km,envmap_fragment:Jm,envmap_common_pars_fragment:$m,envmap_pars_fragment:jm,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:u0,envmap_vertex:e0,fog_vertex:t0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:a0,lights_lambert_fragment:o0,lights_lambert_pars_fragment:l0,lights_pars_begin:c0,lights_toon_fragment:h0,lights_toon_pars_fragment:d0,lights_phong_fragment:f0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:x0,lights_fragment_maps:v0,lights_fragment_end:y0,lightprobes_pars_fragment:_0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:E0,map_fragment:w0,map_pars_fragment:T0,map_particle_fragment:A0,map_particle_pars_fragment:C0,metalnessmap_fragment:R0,metalnessmap_pars_fragment:P0,morphinstance_vertex:I0,morphcolor_vertex:N0,morphnormal_vertex:L0,morphtarget_pars_vertex:D0,morphtarget_vertex:U0,normal_fragment_begin:F0,normal_fragment_maps:O0,normal_pars_fragment:B0,normal_pars_vertex:k0,normal_vertex:z0,normalmap_pars_fragment:H0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:q0,packing:Y0,premultiplied_alpha_fragment:Z0,project_vertex:K0,dithering_fragment:J0,dithering_pars_fragment:$0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:eg,shadowmap_pars_vertex:tg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:sg,skinning_pars_vertex:rg,skinning_vertex:ag,skinnormal_vertex:og,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:ug,tonemapping_pars_fragment:hg,transmission_fragment:dg,transmission_pars_fragment:fg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:xg,background_vert:vg,background_frag:yg,backgroundCube_vert:_g,backgroundCube_frag:bg,cube_vert:Mg,cube_frag:Sg,depth_vert:Eg,depth_frag:wg,distance_vert:Tg,distance_frag:Ag,equirect_vert:Cg,equirect_frag:Rg,linedashed_vert:Pg,linedashed_frag:Ig,meshbasic_vert:Ng,meshbasic_frag:Lg,meshlambert_vert:Dg,meshlambert_frag:Ug,meshmatcap_vert:Fg,meshmatcap_frag:Og,meshnormal_vert:Bg,meshnormal_frag:kg,meshphong_vert:zg,meshphong_frag:Hg,meshphysical_vert:Gg,meshphysical_frag:Vg,meshtoon_vert:Wg,meshtoon_frag:Xg,points_vert:qg,points_frag:Yg,shadow_vert:Zg,shadow_frag:Kg,sprite_vert:Jg,sprite_frag:$g},Te={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},vi={basic:{uniforms:vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:vn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:vn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new pe(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:vn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:vn([Te.points,Te.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:vn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:vn([Te.common,Te.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:vn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:vn([Te.sprite,Te.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:vn([Te.common,Te.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:vn([Te.lights,Te.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};vi.physical={uniforms:vn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Ql={r:0,b:0,g:0},jg=new Ft,vf=new at;vf.set(-1,0,0,0,1,0,0,0,1);function Qg(i,e,t,n,s,r){let a=new pe(0),o=s===!0?0:1,c,l,u=null,d=0,h=null;function f(S){let C=S.isScene===!0?S.background:null;if(C&&C.isTexture){let _=S.backgroundBlurriness>0;C=e.get(C,_)}return C}function g(S){let C=!1,_=f(S);_===null?x(a,o):_&&_.isColor&&(x(_,1),C=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,C){let _=f(C);_&&(_.isCubeTexture||_.mapping===ma)?(l===void 0&&(l=new Ge(new In(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:ys(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(C.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(vf),l.material.toneMapped=yt.getTransfer(_.colorSpace)!==Rt,(u!==_||d!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ge(new ea(2,2),new vt({name:"BackgroundMaterial",uniforms:ys(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=yt.getTransfer(_.colorSpace)!==Rt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function x(S,C){S.getRGB(Ql,_u(i)),t.buffers.color.setClear(Ql.r,Ql.g,Ql.b,C,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,C=1){a.set(S),o=C,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,x(a,o)},render:g,addToRenderList:M,dispose:m}}function ex(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(D,z,G,U,X){let K=!1,J=d(D,U,G,z);r!==J&&(r=J,l(r.object)),K=f(D,U,G,X),K&&g(D,U,G,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(D,z,G,U),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function d(D,z,G,U){let X=U.wireframe===!0,K=n[z.id];K===void 0&&(K={},n[z.id]=K);let J=D.isInstancedMesh===!0?D.id:0,ne=K[J];ne===void 0&&(ne={},K[J]=ne);let Z=ne[G.id];Z===void 0&&(Z={},ne[G.id]=Z);let ee=Z[X];return ee===void 0&&(ee=h(c()),Z[X]=ee),ee}function h(D){let z=[],G=[],U=[];for(let X=0;X<t;X++)z[X]=0,G[X]=0,U[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:U,object:D,attributes:{},index:null}}function f(D,z,G,U){let X=r.attributes,K=z.attributes,J=0,ne=G.getAttributes();for(let Z in ne)if(ne[Z].location>=0){let re=X[Z],De=K[Z];if(De===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(De=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(De=D.instanceColor)),re===void 0||re.attribute!==De||De&&re.data!==De.data)return!0;J++}return r.attributesNum!==J||r.index!==U}function g(D,z,G,U){let X={},K=z.attributes,J=0,ne=G.getAttributes();for(let Z in ne)if(ne[Z].location>=0){let re=K[Z];re===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));let De={};De.attribute=re,re&&re.data&&(De.data=re.data),X[Z]=De,J++}r.attributes=X,r.attributesNum=J,r.index=U}function M(){let D=r.newAttributes;for(let z=0,G=D.length;z<G;z++)D[z]=0}function x(D){m(D,0)}function m(D,z){let G=r.newAttributes,U=r.enabledAttributes,X=r.attributeDivisors;G[D]=1,U[D]===0&&(i.enableVertexAttribArray(D),U[D]=1),X[D]!==z&&(i.vertexAttribDivisor(D,z),X[D]=z)}function S(){let D=r.newAttributes,z=r.enabledAttributes;for(let G=0,U=z.length;G<U;G++)z[G]!==D[G]&&(i.disableVertexAttribArray(G),z[G]=0)}function C(D,z,G,U,X,K,J){J===!0?i.vertexAttribIPointer(D,z,G,X,K):i.vertexAttribPointer(D,z,G,U,X,K)}function _(D,z,G,U){M();let X=U.attributes,K=G.getAttributes(),J=z.defaultAttributeValues;for(let ne in K){let Z=K[ne];if(Z.location>=0){let ee=X[ne];if(ee===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){let re=ee.normalized,De=ee.itemSize,Ue=e.get(ee);if(Ue===void 0)continue;let Mt=Ue.buffer,ct=Ue.type,dt=Ue.bytesPerElement,j=ct===i.INT||ct===i.UNSIGNED_INT||ee.gpuType===pl;if(ee.isInterleavedBufferAttribute){let se=ee.data,we=se.stride,qe=ee.offset;if(se.isInstancedInterleavedBuffer){for(let me=0;me<Z.locationSize;me++)m(Z.location+me,se.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<Z.locationSize;me++)x(Z.location+me);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let me=0;me<Z.locationSize;me++)C(Z.location+me,De/Z.locationSize,ct,re,we*dt,(qe+De/Z.locationSize*me)*dt,j)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<Z.locationSize;se++)m(Z.location+se,ee.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<Z.locationSize;se++)x(Z.location+se);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let se=0;se<Z.locationSize;se++)C(Z.location+se,De/Z.locationSize,ct,re,De*dt,De/Z.locationSize*se*dt,j)}}else if(J!==void 0){let re=J[ne];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(Z.location,re);break;case 3:i.vertexAttrib3fv(Z.location,re);break;case 4:i.vertexAttrib4fv(Z.location,re);break;default:i.vertexAttrib1fv(Z.location,re)}}}}S()}function T(){w();for(let D in n){let z=n[D];for(let G in z){let U=z[G];for(let X in U){let K=U[X];for(let J in K)u(K[J].object),delete K[J];delete U[X]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let z=n[D.id];for(let G in z){let U=z[G];for(let X in U){let K=U[X];for(let J in K)u(K[J].object),delete K[J];delete U[X]}}delete n[D.id]}function P(D){for(let z in n){let G=n[z];for(let U in G){let X=G[U];if(X[D.id]===void 0)continue;let K=X[D.id];for(let J in K)u(K[J].object),delete K[J];delete X[D.id]}}}function y(D){for(let z in n){let G=n[z],U=D.isInstancedMesh===!0?D.id:0,X=G[U];if(X!==void 0){for(let K in X){let J=X[K];for(let ne in J)u(J[ne].object),delete J[ne];delete X[K]}delete G[U],Object.keys(G).length===0&&delete n[z]}}}function w(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:x,disableUnusedAttributes:S}}function tx(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function nx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Xn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let y=P===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==An&&P!==Wn&&!y&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Je("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:S,maxVaryings:C,maxFragmentUniforms:_,maxSamples:T,samples:E}}function ix(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Qn,o=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,M=d.clipIntersection,x=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!x)r?u(null):l();else{let S=r?0:n,C=S*4,_=m.clippingState||null;c.value=_,_=u(g,h,C,f);for(let T=0;T!==C;++T)_[T]=t[T];m.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let M=d!==null?d.length:0,x=null;if(M!==0){if(x=c.value,g!==!0||x===null){let m=f+M*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(x===null||x.length<m)&&(x=new Float32Array(m));for(let C=0,_=f;C!==M;++C,_+=4)a.copy(d[C]).applyMatrix4(S,o),a.normal.toArray(x,_),x[_+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}var ar=4,sx=6,rx=20,ax=256,wa=new Xi,Kd=new pe,Ru=null,Pu=0,Iu=0,Nu=!1,ox=new R,_s=new R,Ji=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=ox}=r;Ru=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ru,Pu,Iu),this._renderer.xr.enabled=Nu,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ru=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:pn,format:Xn,colorSpace:Br,depthBuffer:!1},s=Jd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lx(r)),this._blurMaterial=ux(r,e,t),this._ggxMaterial=cx(r,e,t)}return s}_compileMaterial(e){let t=new Ge(new xt,e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,s,r){let c=new jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Kd),d.toneMapping=si,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ge(new In,new St({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,x=M.material,m=!1,S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,m=!0):(x.color.copy(Kd),m=!0);for(let C=0;C<6;C++){let _=C%3;_===0?(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[C],r.y,r.z)):_===1?(c.up.set(0,0,l[C]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[C],r.z)):(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[C]));let T=this._cubeSize;rr(s,_*T,C>2?T:0,T,T),d.setRenderTarget(s),m&&d.render(M,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===qi||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$d());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;rr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,wa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:g}=this,M=this._sizeLods[n],x=3*M*(n>g-ar?n-g+ar:0),m=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,rr(r,x,m,3*M,2*M),s.setRenderTarget(r),s.render(o,wa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,rr(e,x,m,3*M,2*M),s.setRenderTarget(e),s.render(o,wa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-ar?s-this._lodMax+ar:0),h=4*(this._cubeSize-u);rr(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(c,wa)}};function lx(i){let e=[],t=[],n=i,s=i-ar+1+sx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),M=new Float32Array(f*h*d);for(let m=0;m<d;m++){let S=m%3*2/3-1,C=m>2?0:-1,_=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];g.set(_,f*h*m);for(let T=0;T<h;T++){let E=u[T*2]*2-1,P=u[T*2+1]*2-1;m===0?_s.set(1,P,E):m===1?_s.set(-E,1,-P):m===2?_s.set(-E,P,1):m===3?_s.set(-1,P,-E):m===4?_s.set(-E,-1,P):_s.set(E,P,-1),_s.toArray(M,(m*h+T)*f)}}let x=new xt;x.setAttribute("position",new Pt(g,f)),x.setAttribute("outputDirection",new Pt(M,f)),t.push(new Ge(x,null)),n>ar&&n--}return{lodMeshes:t,sizeLods:e}}function Jd(i,e,t){let n=new Qt(i,e,t);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cx(i,e,t){return new vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ax,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ux(i,e,t){return new vt({name:"SphericalGaussianBlur",defines:{SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function $d(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function jd(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var tc=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new In(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Vn});r.uniforms.tEquirect.value=t;let a=new Ge(s,r),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=hn),new ll(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function hx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===nr||f===dl)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let M=new tc(g.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",l),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===nr||f===dl,M=f===qi||f===vs;if(g||M){let x=t.get(h),m=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Ji(i)),x=g?n.fromEquirectangular(h,x):n.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{let S=h.image;return g&&S&&S.height>0||M&&S&&c(S)?(n===null&&(n=new Ji(i)),x=g?n.fromEquirectangular(h):n.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function o(h,f){return f===nr?h.mapping=qi:f===dl&&(h.mapping=vs),h}function c(h){let f=0,g=6;for(let M=0;M<g;M++)h[M]!==void 0&&f++;return f===g}function l(h){let f=h.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function dx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&hs("WebGLRenderer: "+n+" extension not supported."),s}}}function fx(i,e,t,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,g=d.attributes.position,M=0;if(g===void 0)return;if(f!==null){let S=f.array;M=f.version;for(let C=0,_=S.length;C<_;C+=3){let T=S[C+0],E=S[C+1],P=S[C+2];h.push(T,E,E,P,P,T)}}else{let S=g.array;M=g.version;for(let C=0,_=S.length/3-1;C<_;C+=3){let T=C+0,E=C+1,P=C+2;h.push(T,E,E,P,P,T)}}let x=new(g.count>=65535?Xr:Wr)(h,1);x.version=M;let m=r.get(d);m&&e.remove(m),r.set(d,x)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function px(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function l(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let M=0;for(let x=0;x<f;x++)M+=h[x];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function mx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function gx(i,e,t){let n=new WeakMap,s=new Wt;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let w=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],C=0;f===!0&&(C=1),g===!0&&(C=2),M===!0&&(C=3);let _=o.attributes.position.count*C,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*T*4*d),P=new Gr(E,_,T,d);P.type=Wn,P.needsUpdate=!0;let y=C*4;for(let I=0;I<d;I++){let D=x[I],z=m[I],G=S[I],U=_*T*4*I;for(let X=0;X<D.count;X++){let K=X*y;f===!0&&(s.fromBufferAttribute(D,X),E[U+K+0]=s.x,E[U+K+1]=s.y,E[U+K+2]=s.z,E[U+K+3]=0),g===!0&&(s.fromBufferAttribute(z,X),E[U+K+4]=s.x,E[U+K+5]=s.y,E[U+K+6]=s.z,E[U+K+7]=0),M===!0&&(s.fromBufferAttribute(G,X),E[U+K+8]=s.x,E[U+K+9]=s.y,E[U+K+10]=s.z,E[U+K+11]=G.itemSize===4?s.w:1)}}h={count:d,texture:P,size:new Se(_,T)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let M=0;M<l.length;M++)f+=l[M];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function xx(i,e,t,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var vx={[ca]:"LINEAR_TONE_MAPPING",[ua]:"REINHARD_TONE_MAPPING",[ha]:"CINEON_TONE_MAPPING",[Ci]:"ACES_FILMIC_TONE_MAPPING",[fa]:"AGX_TONE_MAPPING",[pa]:"NEUTRAL_TONE_MAPPING",[da]:"CUSTOM_TONE_MAPPING"};function yx(i,e,t,n,s,r){let a=new Qt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new xt;l.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new tt([0,2,0,0,2,0],2));let u=new js({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ge(l,u),h=new Xi(-1,1,1,-1,0,1),f=null,g=null,M=!1,x,m=null,S=[],C=!1;this.setSize=function(_,T){a.setSize(_,T),o!==null&&o.setSize(_,T),c!==null&&c.setSize(_,T);for(let E=0;E<S.length;E++){let P=S[E];P.setSize&&P.setSize(_,T)}},this.setEffects=function(_){S=_,C=S.length>0&&S[0].isRenderPass===!0;let T=a.width,E=a.height;S.length>0&&o===null&&(o=new Qt(T,E,{type:pn,depthBuffer:!1,stencilBuffer:!1}),c=new Qt(T,E,{type:pn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<S.length;P++){let y=S[P];y.setSize&&y.setSize(T,E)}},this.begin=function(_,T){if(M||_.toneMapping===si&&S.length===0)return!1;if(m=T,T!==null){let E=T.width,P=T.height;(a.width!==E||a.height!==P)&&this.setSize(E,P)}return C===!1&&_.setRenderTarget(a),x=_.toneMapping,_.toneMapping=si,!0},this.hasRenderPass=function(){return C},this.end=function(_,T){_.toneMapping=x,M=!0;let E=a,P=o;for(let y=0;y<S.length;y++){let w=S[y];w.enabled!==!1&&(w.render(_,P,E,T),w.needsSwap!==!1&&(E=P,P=P===o?c:o))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,u.defines={},yt.getTransfer(f)===Rt&&(u.defines.SRGB_TRANSFER="");let y=vx[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(m),_.render(d,h),m=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var yf=new bn,Uu=new zi(1,1),_f=new Gr,bf=new Oo,Mf=new Zr,Qd=[],ef=[],tf=new Float32Array(16),nf=new Float32Array(9),sf=new Float32Array(4);function cr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Qd[s];if(r===void 0&&(r=new Float32Array(s),Qd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ic(i,e){let t=ef[e];t===void 0&&(t=new Int32Array(e),ef[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _x(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function Mx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function Sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function Ex(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;sf.set(n),i.uniformMatrix2fv(this.addr,!1,sf),tn(t,n)}}function wx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;nf.set(n),i.uniformMatrix3fv(this.addr,!1,nf),tn(t,n)}}function Tx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;tf.set(n),i.uniformMatrix4fv(this.addr,!1,tf),tn(t,n)}}function Ax(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function Rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function Px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function Ix(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function Lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function Ux(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uu.compareFunction=t.isReversedDepthBuffer()?jl:$l,r=Uu):r=yf,t.setTexture2D(e||r,s)}function Fx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bf,s)}function Ox(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Mf,s)}function Bx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_f,s)}function kx(i){switch(i){case 5126:return _x;case 35664:return bx;case 35665:return Mx;case 35666:return Sx;case 35674:return Ex;case 35675:return wx;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return Cx;case 35668:case 35672:return Rx;case 35669:case 35673:return Px;case 5125:return Ix;case 36294:return Nx;case 36295:return Lx;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Bx}}function zx(i,e){i.uniform1fv(this.addr,e)}function Hx(i,e){let t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function Gx(i,e){let t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function Vx(i,e){let t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function Wx(i,e){let t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xx(i,e){let t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qx(i,e){let t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yx(i,e){i.uniform1iv(this.addr,e)}function Zx(i,e){i.uniform2iv(this.addr,e)}function Kx(i,e){i.uniform3iv(this.addr,e)}function Jx(i,e){i.uniform4iv(this.addr,e)}function $x(i,e){i.uniform1uiv(this.addr,e)}function jx(i,e){i.uniform2uiv(this.addr,e)}function Qx(i,e){i.uniform3uiv(this.addr,e)}function ev(i,e){i.uniform4uiv(this.addr,e)}function tv(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Uu:a=yf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function nv(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bf,r[a])}function iv(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Mf,r[a])}function sv(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_f,r[a])}function rv(i){switch(i){case 5126:return zx;case 35664:return Hx;case 35665:return Gx;case 35666:return Vx;case 35674:return Wx;case 35675:return Xx;case 35676:return qx;case 5124:case 35670:return Yx;case 35667:case 35671:return Zx;case 35668:case 35672:return Kx;case 35669:case 35673:return Jx;case 5125:return $x;case 36294:return jx;case 36295:return Qx;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return sv}}var Fu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kx(t.type)}},Ou=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rv(t.type)}},Bu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Lu=/(\w+)(\])?(\[|\.)?/g;function rf(i,e){i.seq.push(e),i.map[e.id]=e}function av(i,e,t){let n=i.name,s=n.length;for(Lu.lastIndex=0;;){let r=Lu.exec(n),a=Lu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){rf(t,l===void 0?new Fu(o,i,e):new Ou(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Bu(o),rf(t,d)),t=d}}}var or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);av(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function af(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ov=37297,lv=0;function cv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var of=new at;function uv(i){yt._getMatrix(of,yt.workingColorSpace,i);let e=`mat3( ${of.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case kr:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+cv(i.getShaderSource(e),o)}else return r}function hv(i,e){let t=uv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var dv={[ca]:"Linear",[ua]:"Reinhard",[ha]:"Cineon",[Ci]:"ACESFilmic",[fa]:"AgX",[pa]:"Neutral",[da]:"Custom"};function fv(i,e){let t=dv[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ec=new R;function pv(){yt.getLuminanceCoefficients(ec);let i=ec.x.toFixed(4),e=ec.y.toFixed(4),t=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function gv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Aa(i){return i!==""}function cf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(i){return i.replace(vv,_v)}var yv=new Map;function _v(i,e){let t=pt[e];if(t===void 0){let n=yv.get(e);if(n!==void 0)t=pt[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ku(t)}var bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hf(i){return i.replace(bv,Mv)}function Mv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function df(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Sv={[la]:"SHADOWMAP_TYPE_PCF",[er]:"SHADOWMAP_TYPE_VSM"};function Ev(i){return Sv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wv={[qi]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function Tv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":wv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Av={[vs]:"ENVMAP_MODE_REFRACTION"};function Cv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Av[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Rv={[hl]:"ENVMAP_BLENDING_MULTIPLY",[Rd]:"ENVMAP_BLENDING_MIX",[Pd]:"ENVMAP_BLENDING_ADD"};function Pv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Rv[i.combine]||"ENVMAP_BLENDING_NONE"}function Iv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Nv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ev(t),l=Tv(t),u=Cv(t),d=Pv(t),h=Iv(t),f=mv(t),g=gv(r),M=s.createProgram(),x,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Aa).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Aa).join(`
`),m.length>0&&(m+=`
`)):(x=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),m=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?pt.tonemapping_pars_fragment:"",t.toneMapping!==si?fv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,hv("linearToOutputTexel",t.outputColorSpace),pv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),a=ku(a),a=cf(a,t),a=uf(a,t),o=ku(o),o=cf(o,t),o=uf(o,t),a=hf(a),o=hf(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let C=S+x+a,_=S+m+o,T=af(s,s.VERTEX_SHADER,C),E=af(s,s.FRAGMENT_SHADER,_);s.attachShader(M,T),s.attachShader(M,E),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(D){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(M)||"",G=s.getShaderInfoLog(T)||"",U=s.getShaderInfoLog(E)||"",X=z.trim(),K=G.trim(),J=U.trim(),ne=!0,Z=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,T,E);else{let ee=lf(s,T,"vertex"),re=lf(s,E,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+ee+`
`+re)}else X!==""?Je("WebGLProgram: Program Info Log:",X):(K===""||J==="")&&(Z=!1);Z&&(D.diagnostics={runnable:ne,programLog:X,vertexShader:{log:K,prefix:x},fragmentShader:{log:J,prefix:m}})}s.deleteShader(T),s.deleteShader(E),y=new or(s,M),w=xv(s,M)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(M,ov)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lv++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=E,this}var Lv=0,zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hu(e),t.set(e,n)),n}},Hu=class{constructor(e){this.id=Lv++,this.code=e,this.usedTimes=0}};function Dv(i){return i===Ki||i===ba||i===Ma}function Uv(i,e,t,n,s,r){let a=new Vr,o=new zu,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function M(y,w,I,D,z,G){let U=D.fog,X=z.geometry,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ne=e.get(y.envMap||K,J),Z=ne&&ne.mapping===ma?ne.image.height:null,ee=f[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&Je("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,De=re!==void 0?re.length:0,Ue=0;X.morphAttributes.position!==void 0&&(Ue=1),X.morphAttributes.normal!==void 0&&(Ue=2),X.morphAttributes.color!==void 0&&(Ue=3);let Mt,ct,dt,j;if(ee){let It=vi[ee];Mt=It.vertexShader,ct=It.fragmentShader}else{Mt=y.vertexShader,ct=y.fragmentShader;let It=o.getVertexShaderStage(y),At=o.getFragmentShaderStage(y);o.update(y,It,At),dt=It.id,j=At.id}let se=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),qe=z.isInstancedMesh===!0,me=z.isBatchedMesh===!0,nt=!!y.map,Ot=!!y.matcap,Qe=!!ne,lt=!!y.aoMap,wt=!!y.lightMap,oe=!!y.bumpMap&&y.wireframe===!1,ue=!!y.normalMap,mt=!!y.displacementMap,Be=!!y.emissiveMap,Ze=!!y.metalnessMap,it=!!y.roughnessMap,B=y.anisotropy>0,qt=y.clearcoat>0,Tt=y.dispersion>0,A=y.retroreflectivity>0,v=y.iridescence>0,H=y.sheen>0,q=y.transmission>0,$=B&&!!y.anisotropyMap,fe=qt&&!!y.clearcoatMap,xe=qt&&!!y.clearcoatNormalMap,Q=qt&&!!y.clearcoatRoughnessMap,ie=v&&!!y.iridescenceMap,ve=v&&!!y.iridescenceThicknessMap,We=H&&!!y.sheenColorMap,be=H&&!!y.sheenRoughnessMap,ge=!!y.specularMap,Ve=!!y.specularColorMap,Ke=!!y.specularIntensityMap,rt=q&&!!y.transmissionMap,k=q&&!!y.thicknessMap,ye=!!y.gradientMap,te=!!y.alphaMap,_e=y.alphaTest>0,Ae=!!y.alphaHash,ae=!!y.extensions,Xe=si;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Xe=i.toneMapping);let He={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:Mt,fragmentShader:ct,defines:y.defines,customVertexShaderID:dt,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:me,batchingColor:me&&z._colorsTexture!==null,instancing:qe,instancingColor:qe&&z.instanceColor!==null,instancingMorph:qe&&z.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:Ot,envMap:Qe,envMapMode:Qe&&ne.mapping,envMapCubeUVHeight:Z,aoMap:lt,lightMap:wt,bumpMap:oe,normalMap:ue,displacementMap:mt,emissiveMap:Be,normalMapObjectSpace:ue&&y.normalMapType===Ld,normalMapTangentSpace:ue&&y.normalMapType===Sa,packedNormalMap:ue&&y.normalMapType===Sa&&Dv(y.normalMap.format),metalnessMap:Ze,roughnessMap:it,anisotropy:B,anisotropyMap:$,clearcoat:qt,clearcoatMap:fe,clearcoatNormalMap:xe,clearcoatRoughnessMap:Q,dispersion:Tt,retroreflection:A,iridescence:v,iridescenceMap:ie,iridescenceThicknessMap:ve,sheen:H,sheenColorMap:We,sheenRoughnessMap:be,specularMap:ge,specularColorMap:Ve,specularIntensityMap:Ke,transmission:q,transmissionMap:rt,thicknessMap:k,gradientMap:ye,opaque:y.transparent===!1&&y.blending===tr&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:_e,alphaHash:Ae,combine:y.combine,mapUv:nt&&g(y.map.channel),aoMapUv:lt&&g(y.aoMap.channel),lightMapUv:wt&&g(y.lightMap.channel),bumpMapUv:oe&&g(y.bumpMap.channel),normalMapUv:ue&&g(y.normalMap.channel),displacementMapUv:mt&&g(y.displacementMap.channel),emissiveMapUv:Be&&g(y.emissiveMap.channel),metalnessMapUv:Ze&&g(y.metalnessMap.channel),roughnessMapUv:it&&g(y.roughnessMap.channel),anisotropyMapUv:$&&g(y.anisotropyMap.channel),clearcoatMapUv:fe&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:We&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(y.sheenRoughnessMap.channel),specularMapUv:ge&&g(y.specularMap.channel),specularColorMapUv:Ve&&g(y.specularColorMap.channel),specularIntensityMapUv:Ke&&g(y.specularIntensityMap.channel),transmissionMapUv:rt&&g(y.transmissionMap.channel),thicknessMapUv:k&&g(y.thicknessMap.channel),alphaMapUv:te&&g(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ue||B),vertexNormals:!!X.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(nt||te),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||X.attributes.normal===void 0&&ue===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:we,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ue,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&yt.getTransfer(y.map.colorSpace)===Rt,decodeVideoTextureEmissive:Be&&y.emissiveMap.isVideoTexture===!0&&yt.getTransfer(y.emissiveMap.colorSpace)===Rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xt,flipSided:y.side===Kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ae&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&y.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function x(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)w.push(I),w.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(m(w,y),S(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function m(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function C(y){let w=f[y.type],I;if(w){let D=vi[w];I=Pi.clone(D.uniforms)}else I=y.uniforms;return I}function _(y,w){let I=u.get(w);return I!==void 0?++I.usedTimes:(I=new Nv(i,w,y,s),l.push(I),u.set(w,I)),I}function T(y){if(--y.usedTimes===0){let w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function P(){o.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:C,acquireProgram:_,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:P}}function Fv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ov(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ff(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,M,x,m){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:x,group:m},i[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=a(h),S.groupOrder=M,S.renderOrder=h.renderOrder,S.z=x,S.group=m),e++,S}function c(h,f,g,M,x,m,S){S.reversedDepth===!0&&(x=-x);let C=o(h,f,g,M,x,m);g.transmission>0?n.push(C):g.transparent===!0?s.push(C):t.push(C)}function l(h,f,g,M,x,m){let S=o(h,f,g,M,x,m);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,f){t.length>1&&t.sort(h||Ov),n.length>1&&n.sort(f||ff),s.length>1&&s.sort(f||ff)}function d(){for(let h=e,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function Bv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new pf,i.set(n,[a])):s>=r.length?(a=new pf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function kv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new pe};break;case"SpotLight":t={position:new R,direction:new R,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function zv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Hv=0;function Gv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vv(i){let e=new kv,t=zv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new Ft,a=new Ft;function o(l){let u=0,d=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,g=0,M=0,x=0,m=0,S=0,C=0,_=0,T=0,E=0,P=0,y=0,w=0,I=0;l.sort(Gv);for(let z=0,G=l.length;z<G;z++){let U=l[z],X=U.color,K=U.intensity,J=U.distance,ne=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ki?ne=U.shadow.map.texture:ne=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=X.r*K,d+=X.g*K,h+=X.b*K;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(U.sh.coefficients[Z],K);I++}else if(U.isSunLight){let Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ee=U.shadow,re=t.get(U);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[g]=re,n.sunShadowMap[g]=ne;let De=ee.getViewportCount();for(let Ue=0;Ue<De;Ue++)n.sunShadowMatrix[M+Ue]=ee.getMatrix(Ue),n.sunShadowCascade[M+Ue]=ee._cascadeData[Ue];M+=De,g++}n.sun[f]=Z,f++}else if(U.isDirectionalLight){let Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ee=U.shadow,re=t.get(U);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,n.directionalShadow[x]=re,n.directionalShadowMap[x]=ne,n.directionalShadowMatrix[x]=U.shadow.matrix,T++}n.directional[x]=Z,x++}else if(U.isSpotLight){let Z=e.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy(X).multiplyScalar(K),Z.distance=J,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,n.spot[S]=Z;let ee=U.shadow;if(U.map&&(n.spotLightMap[y]=U.map,y++,ee.updateMatrices(U),U.castShadow&&w++),n.spotLightMatrix[S]=ee.matrix,U.castShadow){let re=t.get(U);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,n.spotShadow[S]=re,n.spotShadowMap[S]=ne,P++}S++}else if(U.isRectAreaLight){let Z=e.get(U);Z.color.copy(X).multiplyScalar(K),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),n.rectArea[C]=Z,C++}else if(U.isPointLight){let Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){let ee=U.shadow,re=t.get(U);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,re.shadowCameraNear=ee.camera.near,re.shadowCameraFar=ee.camera.far,n.pointShadow[m]=re,n.pointShadowMap[m]=ne,n.pointShadowMatrix[m]=U.shadow.matrix,E++}n.point[m]=Z,m++}else if(U.isHemisphereLight){let Z=e.get(U);Z.skyColor.copy(U.color).multiplyScalar(K),Z.groundColor.copy(U.groundColor).multiplyScalar(K),n.hemi[_]=Z,_++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let D=n.hash;(D.sunLength!==f||D.directionalLength!==x||D.pointLength!==m||D.spotLength!==S||D.rectAreaLength!==C||D.hemiLength!==_||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==P||D.numSpotMaps!==y||D.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=x,n.spot.length=S,n.rectArea.length=C,n.point.length=m,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=I,D.sunLength=f,D.directionalLength=x,D.pointLength=m,D.spotLength=S,D.rectAreaLength=C,D.hemiLength=_,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=P,D.numSpotMaps=y,D.numLightProbes=I,n.version=Hv++)}function c(l,u){let d=0,h=0,f=0,g=0,M=0,x=0,m=u.matrixWorldInverse;for(let S=0,C=l.length;S<C;S++){let _=l[S];if(_.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),d++}else if(_.isDirectionalLight){let T=n.directional[h];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(_.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(_.isRectAreaLight){let T=n.rectArea[M];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(_.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let T=n.hemi[x];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function mf(i){let e=new Vv(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Wv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new mf(i),e.set(s,[o])):r>=a.length?(o=new mf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
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
}`,Yv=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Zv=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],gf=new Ft,Ta=new R,Du=new R;function Kv(i,e,t){let n=new Js,s=new Se,r=new Se,a=new Wt,o=new Jo,c=new $o,l={},u=t.maxTextureSize,d={[gi]:Kt,[Kt]:gi,[Xt]:Xt},h=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Xv,fragmentShader:qv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ge(g,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=la;let m=this.type;this.render=function(E,P,y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;this.type===ud&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=la);let w=i.getRenderTarget(),I=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Vn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=m!==this.type;G&&P.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(X=>X.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,X=E.length;U<X;U++){let K=E[U],J=K.shadow;if(J===void 0){Je("WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ne=J.getFrameExtents();s.multiply(ne),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,J.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=Z,J.map===null||G===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===er){if(K.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Qt(s.x,s.y,{format:Ki,type:pn,minFilter:hn,magFilter:hn,generateMipmaps:!1}),J.map.texture.name=K.name+".shadowMap",J.map.depthTexture=new zi(s.x,s.y,Wn),J.map.depthTexture.name=K.name+".shadowMapDepth",J.map.depthTexture.format=ci,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ln,J.map.depthTexture.magFilter=ln}else K.isPointLight?(J.map=new tc(s.x),J.map.depthTexture=new Ho(s.x,ri)):(J.map=new Qt(s.x,s.y),J.map.depthTexture=new zi(s.x,s.y,ri)),J.map.depthTexture.name=K.name+".shadowMap",J.map.depthTexture.format=ci,this.type===la?(J.map.depthTexture.compareFunction=Z?jl:$l,J.map.depthTexture.minFilter=hn,J.map.depthTexture.magFilter=hn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ln,J.map.depthTexture.magFilter=ln);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let ee=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();K.isPointLight!==!0&&J.updateMatrices(K,y);for(let re=0;re<ee;re++){let De=J.getCamera(re);if(K.isPointLight){let Ue=J.camera,Mt=J.matrix,ct=K.distance||Ue.far;ct!==Ue.far&&(Ue.far=ct,Ue.updateProjectionMatrix()),Ta.setFromMatrixPosition(K.matrixWorld),Ue.position.copy(Ta),Du.copy(Ue.position),Du.add(Yv[re]),Ue.up.copy(Zv[re]),Ue.lookAt(Du),Ue.updateMatrixWorld(),Mt.makeTranslation(-Ta.x,-Ta.y,-Ta.z),gf.multiplyMatrices(Ue.projectionMatrix,Ue.matrixWorldInverse),J._frustum.setFromProjectionMatrix(gf,Ue.coordinateSystem,Ue.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,re),i.clear();else{re===0&&(i.setRenderTarget(J.map),i.clear());let Ue=J.getViewport(re);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),z.viewport(a)}n=J.getFrustum(re),_(P,y,De,K,this.type)}J.isPointLightShadow!==!0&&this.type===er&&S(J,y),J.needsUpdate=!1}m=this.type,x.needsUpdate=!1,i.setRenderTarget(w,I,D)};function S(E,P){let y=e.update(M);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Qt(s.x,s.y,{format:Ki,type:pn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,y,h,M,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,y,f,M,null)}function C(E,P,y,w){let I=null,D=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)I=D;else if(I=y.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=I.uuid,G=P.uuid,U=l[z];U===void 0&&(U={},l[z]=U);let X=U[G];X===void 0&&(X=I.clone(),U[G]=X,P.addEventListener("dispose",T)),I=X}if(I.visible=P.visible,I.wireframe=P.wireframe,w===er?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:d[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let z=i.properties.get(I);z.light=y}return I}function _(E,P,y,w,I){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===er)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let G=e.update(E),U=E.material;if(Array.isArray(U)){let X=G.groups;for(let K=0,J=X.length;K<J;K++){let ne=X[K],Z=U[ne.materialIndex];if(Z&&Z.visible){let ee=C(E,Z,w,I);E.onBeforeShadow(i,E,P,y,G,ee,ne),i.renderBufferDirect(y,null,G,ee,E,ne),E.onAfterShadow(i,E,P,y,G,ee,ne)}}}else if(U.visible){let X=C(E,U,w,I);E.onBeforeShadow(i,E,P,y,G,X,null),i.renderBufferDirect(y,null,G,X,E,null),E.onAfterShadow(i,E,P,y,G,X,null)}}let z=E.children;for(let G=0,U=z.length;G<U;G++)_(z[G],P,y,w,I)}function T(E){E.target.removeEventListener("dispose",T);for(let y in l){let w=l[y],I=E.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function Jv(i,e){function t(){let k=!1,ye=new Wt,te=null,_e=new Wt(0,0,0,0);return{setMask:function(Ae){te!==Ae&&!k&&(i.colorMask(Ae,Ae,Ae,Ae),te=Ae)},setLocked:function(Ae){k=Ae},setClear:function(Ae,ae,Xe,He,It){It===!0&&(Ae*=He,ae*=He,Xe*=He),ye.set(Ae,ae,Xe,He),_e.equals(ye)===!1&&(i.clearColor(Ae,ae,Xe,He),_e.copy(ye))},reset:function(){k=!1,te=null,_e.set(-1,0,0,0)}}}function n(){let k=!1,ye=!1,te=null,_e=null,Ae=null;return{setReversed:function(ae){if(ye!==ae){let Xe=e.get("EXT_clip_control");ae?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ye=ae;let He=Ae;Ae=null,this.setClear(He)}},getReversed:function(){return ye},setTest:function(ae){ae?se(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(ae){te!==ae&&!k&&(i.depthMask(ae),te=ae)},setFunc:function(ae){if(ye&&(ae=Xd[ae]),_e!==ae){switch(ae){case wo:i.depthFunc(i.NEVER);break;case To:i.depthFunc(i.ALWAYS);break;case Ao:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case Co:i.depthFunc(i.EQUAL);break;case Ro:i.depthFunc(i.GEQUAL);break;case Po:i.depthFunc(i.GREATER);break;case Io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=ae}},setLocked:function(ae){k=ae},setClear:function(ae){Ae!==ae&&(Ae=ae,ye&&(ae=1-ae),i.clearDepth(ae))},reset:function(){k=!1,te=null,_e=null,Ae=null,ye=!1}}}function s(){let k=!1,ye=null,te=null,_e=null,Ae=null,ae=null,Xe=null,He=null,It=null;return{setTest:function(At){k||(At?se(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(At){ye!==At&&!k&&(i.stencilMask(At),ye=At)},setFunc:function(At,yn,Fn){(te!==At||_e!==yn||Ae!==Fn)&&(i.stencilFunc(At,yn,Fn),te=At,_e=yn,Ae=Fn)},setOp:function(At,yn,Fn){(ae!==At||Xe!==yn||He!==Fn)&&(i.stencilOp(At,yn,Fn),ae=At,Xe=yn,He=Fn)},setLocked:function(At){k=At},setClear:function(At){It!==At&&(i.clearStencil(At),It=At)},reset:function(){k=!1,ye=null,te=null,_e=null,Ae=null,ae=null,Xe=null,He=null,It=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],M=null,x=!1,m=null,S=null,C=null,_=null,T=null,E=null,P=null,y=new pe(0,0,0),w=0,I=!1,D=null,z=null,G=null,U=null,X=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ne=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Z)[1]),J=ne>=1):Z.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),J=ne>=2);let ee=null,re={},De=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Mt=new Wt().fromArray(De),ct=new Wt().fromArray(Ue);function dt(k,ye,te,_e){let Ae=new Uint8Array(4),ae=i.createTexture();i.bindTexture(k,ae),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<te;Xe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(ye+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return ae}let j={};j[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(Ws),oe(!1),ue(ru),se(i.CULL_FACE),lt(Vn);function se(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function we(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function qe(k,ye){return h[k]!==ye?(i.bindFramebuffer(k,ye),h[k]=ye,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function me(k,ye){let te=g,_e=!1;if(k){te=f.get(ye),te===void 0&&(te=[],f.set(ye,te));let Ae=k.textures;if(te.length!==Ae.length||te[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Xe=Ae.length;ae<Xe;ae++)te[ae]=i.COLOR_ATTACHMENT0+ae;te.length=Ae.length,_e=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,_e=!0);_e&&i.drawBuffers(te)}function nt(k){return M!==k?(i.useProgram(k),M=k,!0):!1}let Ot={[xs]:i.FUNC_ADD,[dd]:i.FUNC_SUBTRACT,[fd]:i.FUNC_REVERSE_SUBTRACT};Ot[pd]=i.MIN,Ot[md]=i.MAX;let Qe={[gd]:i.ZERO,[xd]:i.ONE,[vd]:i.SRC_COLOR,[lu]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[_d]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[cu]:i.ONE_MINUS_SRC_ALPHA,[Sd]:i.ONE_MINUS_DST_COLOR,[bd]:i.ONE_MINUS_DST_ALPHA,[wd]:i.CONSTANT_COLOR,[Td]:i.ONE_MINUS_CONSTANT_COLOR,[Ad]:i.CONSTANT_ALPHA,[Cd]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(k,ye,te,_e,Ae,ae,Xe,He,It,At){if(k===Vn){x===!0&&(we(i.BLEND),x=!1);return}if(x===!1&&(se(i.BLEND),x=!0),k!==hd){if(k!==m||At!==I){if((S!==xs||T!==xs)&&(i.blendEquation(i.FUNC_ADD),S=xs,T=xs),At)switch(k){case tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ot:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",k);break}else switch(k){case tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ot:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case au:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ou:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",k);break}C=null,_=null,E=null,P=null,y.set(0,0,0),w=0,m=k,I=At}return}Ae=Ae||ye,ae=ae||te,Xe=Xe||_e,(ye!==S||Ae!==T)&&(i.blendEquationSeparate(Ot[ye],Ot[Ae]),S=ye,T=Ae),(te!==C||_e!==_||ae!==E||Xe!==P)&&(i.blendFuncSeparate(Qe[te],Qe[_e],Qe[ae],Qe[Xe]),C=te,_=_e,E=ae,P=Xe),(He.equals(y)===!1||It!==w)&&(i.blendColor(He.r,He.g,He.b,It),y.copy(He),w=It),m=k,I=!1}function wt(k,ye){k.side===Xt?we(i.CULL_FACE):se(i.CULL_FACE);let te=k.side===Kt;ye&&(te=!te),oe(te),k.blending===tr&&k.transparent===!1?lt(Vn):lt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let _e=k.stencilWrite;o.setTest(_e),_e&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Be(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(k){D!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),D=k)}function ue(k){k!==ld?(se(i.CULL_FACE),k!==z&&(k===ru?i.cullFace(i.BACK):k===cd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),z=k}function mt(k){k!==G&&(J&&i.lineWidth(k),G=k)}function Be(k,ye,te){k?(se(i.POLYGON_OFFSET_FILL),(U!==ye||X!==te)&&(U=ye,X=te,a.getReversed()&&(ye=-ye),i.polygonOffset(ye,te))):we(i.POLYGON_OFFSET_FILL)}function Ze(k){k?se(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function it(k){k===void 0&&(k=i.TEXTURE0+K-1),ee!==k&&(i.activeTexture(k),ee=k)}function B(k,ye,te){te===void 0&&(ee===null?te=i.TEXTURE0+K-1:te=ee);let _e=re[te];_e===void 0&&(_e={type:void 0,texture:void 0},re[te]=_e),(_e.type!==k||_e.texture!==ye)&&(ee!==te&&(i.activeTexture(te),ee=te),i.bindTexture(k,ye||j[k]),_e.type=k,_e.texture=ye)}function qt(){let k=re[ee];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Tt(){try{i.compressedTexImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function v(){try{i.texSubImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function H(){try{i.texSubImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function fe(){try{i.texStorage2D(...arguments)}catch(k){et("WebGLState:",k)}}function xe(){try{i.texStorage3D(...arguments)}catch(k){et("WebGLState:",k)}}function Q(){try{i.texImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function ie(){try{i.texImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function ve(k){return d[k]!==void 0?d[k]:i.getParameter(k)}function We(k,ye){d[k]!==ye&&(i.pixelStorei(k,ye),d[k]=ye)}function be(k){Mt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Mt.copy(k))}function ge(k){ct.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ct.copy(k))}function Ve(k,ye){let te=l.get(ye);te===void 0&&(te=new WeakMap,l.set(ye,te));let _e=te.get(k);_e===void 0&&(_e=i.getUniformBlockIndex(ye,k.name),te.set(k,_e))}function Ke(k,ye){let _e=l.get(ye).get(k);c.get(ye)!==_e&&(i.uniformBlockBinding(ye,_e,k.__bindingPointIndex),c.set(ye,_e))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},ee=null,re={},h={},f=new WeakMap,g=[],M=null,x=!1,m=null,S=null,C=null,_=null,T=null,E=null,P=null,y=new pe(0,0,0),w=0,I=!1,D=null,z=null,G=null,U=null,X=null,Mt.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:we,bindFramebuffer:qe,drawBuffers:me,useProgram:nt,setBlending:lt,setMaterial:wt,setFlipSided:oe,setCullFace:ue,setLineWidth:mt,setPolygonOffset:Be,setScissorTest:Ze,activeTexture:it,bindTexture:B,unbindTexture:qt,compressedTexImage2D:Tt,compressedTexImage3D:A,texImage2D:Q,texImage3D:ie,pixelStorei:We,getParameter:ve,updateUBOMapping:Ve,uniformBlockBinding:Ke,texStorage2D:fe,texStorage3D:xe,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:$,scissor:be,viewport:ge,reset:rt}}function $v(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,v){return g?new OffscreenCanvas(A,v):zr("canvas")}function x(A,v,H){let q=1,$=Tt(A);if(($.width>H||$.height>H)&&(q=H/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let fe=Math.floor(q*$.width),xe=Math.floor(q*$.height);h===void 0&&(h=M(fe,xe));let Q=v?M(fe,xe):h;return Q.width=fe,Q.height=xe,Q.getContext("2d").drawImage(A,0,0,fe,xe),Je("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+fe+"x"+xe+")."),Q}else return"data"in A&&Je("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function m(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,v,H,q,$,fe=!1){if(A!==null){if(i[A]!==void 0)return i[A];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let xe;q&&(xe=e.get("EXT_texture_norm16"),xe||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===i.RED&&(H===i.FLOAT&&(Q=i.R32F),H===i.HALF_FLOAT&&(Q=i.R16F),H===i.UNSIGNED_BYTE&&(Q=i.R8),H===i.UNSIGNED_SHORT&&xe&&(Q=xe.R16_EXT),H===i.SHORT&&xe&&(Q=xe.R16_SNORM_EXT)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.R8UI),H===i.UNSIGNED_SHORT&&(Q=i.R16UI),H===i.UNSIGNED_INT&&(Q=i.R32UI),H===i.BYTE&&(Q=i.R8I),H===i.SHORT&&(Q=i.R16I),H===i.INT&&(Q=i.R32I)),v===i.RG&&(H===i.FLOAT&&(Q=i.RG32F),H===i.HALF_FLOAT&&(Q=i.RG16F),H===i.UNSIGNED_BYTE&&(Q=i.RG8),H===i.UNSIGNED_SHORT&&xe&&(Q=xe.RG16_EXT),H===i.SHORT&&xe&&(Q=xe.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RG8UI),H===i.UNSIGNED_SHORT&&(Q=i.RG16UI),H===i.UNSIGNED_INT&&(Q=i.RG32UI),H===i.BYTE&&(Q=i.RG8I),H===i.SHORT&&(Q=i.RG16I),H===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),H===i.UNSIGNED_INT&&(Q=i.RGB32UI),H===i.BYTE&&(Q=i.RGB8I),H===i.SHORT&&(Q=i.RGB16I),H===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),H===i.UNSIGNED_INT&&(Q=i.RGBA32UI),H===i.BYTE&&(Q=i.RGBA8I),H===i.SHORT&&(Q=i.RGBA16I),H===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_SHORT&&xe&&(Q=xe.RGB16_EXT),H===i.SHORT&&xe&&(Q=xe.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),v===i.RGBA){let ie=fe?kr:yt.getTransfer($);H===i.FLOAT&&(Q=i.RGBA32F),H===i.HALF_FLOAT&&(Q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Q=ie===Rt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&xe&&(Q=xe.RGBA16_EXT),H===i.SHORT&&xe&&(Q=xe.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function T(A,v){let H;return A?v===null||v===ri||v===sr?H=i.DEPTH24_STENCIL8:v===Wn?H=i.DEPTH32F_STENCIL8:v===ir&&(H=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ri||v===sr?H=i.DEPTH_COMPONENT24:v===Wn?H=i.DEPTH_COMPONENT32F:v===ir&&(H=i.DEPTH_COMPONENT16),H}function E(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ln&&A.minFilter!==hn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function P(A){let v=A.target;v.removeEventListener("dispose",P),w(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function y(A){let v=A.target;v.removeEventListener("dispose",y),D(v)}function w(A){let v=n.get(A);if(v.__webglInit===void 0)return;let H=A.source,q=f.get(H);if(q){let $=q[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(A),Object.keys(q).length===0&&f.delete(H)}n.remove(A)}function I(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let H=A.source,q=f.get(H);delete q[v.__cacheKey],a.memory.textures--}function D(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let $=0;$<v.__webglFramebuffer[q].length;$++)i.deleteFramebuffer(v.__webglFramebuffer[q][$]);else i.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)i.deleteFramebuffer(v.__webglFramebuffer[q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let H=A.textures;for(let q=0,$=H.length;q<$;q++){let fe=n.get(H[q]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(H[q])}n.remove(A)}let z=0;function G(){z=0}function U(){return z}function X(A){z=A}function K(){let A=z;return A>=s.maxTextures&&Je("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,A}function J(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function ne(A,v){let H=n.get(A);if(A.isVideoTexture&&B(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){let q=A.image;if(q===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{we(H,A,v);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function Z(A,v){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){we(H,A,v);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function ee(A,v){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){we(H,A,v);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function re(A,v){let H=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){qe(H,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}let De={[No]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},Ue={[ln]:i.NEAREST,[Id]:i.NEAREST_MIPMAP_NEAREST,[ga]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[fl]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},Mt={[Ud]:i.NEVER,[zd]:i.ALWAYS,[Fd]:i.LESS,[$l]:i.LEQUAL,[Od]:i.EQUAL,[jl]:i.GEQUAL,[Bd]:i.GREATER,[kd]:i.NOTEQUAL};function ct(A,v){if(v.type===Wn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===hn||v.magFilter===fl||v.magFilter===ga||v.magFilter===Yi||v.minFilter===hn||v.minFilter===fl||v.minFilter===ga||v.minFilter===Yi)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,De[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,De[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,De[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ue[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ue[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ln||v.minFilter!==ga&&v.minFilter!==Yi||v.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function dt(A,v){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",P));let q=v.source,$=f.get(q);$===void 0&&($={},f.set(q,$));let fe=J(v);if(fe!==A.__cacheKey){$[fe]===void 0&&($[fe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),$[fe].usedTimes++;let xe=$[A.__cacheKey];xe!==void 0&&($[A.__cacheKey].usedTimes--,xe.usedTimes===0&&I(v)),A.__cacheKey=fe,A.__webglTexture=$[fe].texture}return H}function j(A,v,H){return Math.floor(Math.floor(A/H)/v)}function se(A,v,H,q){let fe=A.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,q,v.data);else{fe.sort((We,be)=>We.start-be.start);let xe=0;for(let We=1;We<fe.length;We++){let be=fe[xe],ge=fe[We],Ve=be.start+be.count,Ke=j(ge.start,v.width,4),rt=j(be.start,v.width,4);ge.start<=Ve+1&&Ke===rt&&j(ge.start+ge.count-1,v.width,4)===Ke?be.count=Math.max(be.count,ge.start+ge.count-be.start):(++xe,fe[xe]=ge)}fe.length=xe+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let We=0,be=fe.length;We<be;We++){let ge=fe[We],Ve=Math.floor(ge.start/4),Ke=Math.ceil(ge.count/4),rt=Ve%v.width,k=Math.floor(Ve/v.width),ye=Ke,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,rt,k,ye,te,H,q,v.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function we(A,v,H){let q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=i.TEXTURE_3D);let $=dt(A,v),fe=v.source;t.bindTexture(q,A.__webglTexture,i.TEXTURE0+H);let xe=n.get(fe);if(fe.version!==xe.__version||$===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let te=yt.getPrimaries(yt.workingColorSpace),_e=v.colorSpace===Ri?null:yt.getPrimaries(v.colorSpace),Ae=v.colorSpace===Ri||te===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ie=x(v.image,!1,s.maxTextureSize);ie=qt(v,ie);let ve=r.convert(v.format,v.colorSpace),We=r.convert(v.type),be=_(v.internalFormat,ve,We,v.normalized,v.colorSpace,v.isVideoTexture);ct(q,v);let ge,Ve=v.mipmaps,Ke=v.isVideoTexture!==!0,rt=xe.__version===void 0||$===!0,k=fe.dataReady,ye=E(v,ie);if(v.isDepthTexture)be=T(v.format===Zi,v.type),rt&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,be,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,be,ie.width,ie.height,0,ve,We,null));else if(v.isDataTexture)if(Ve.length>0){Ke&&rt&&t.texStorage2D(i.TEXTURE_2D,ye,be,Ve[0].width,Ve[0].height);for(let te=0,_e=Ve.length;te<_e;te++)ge=Ve[te],Ke?k&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ge.width,ge.height,ve,We,ge.data):t.texImage2D(i.TEXTURE_2D,te,be,ge.width,ge.height,0,ve,We,ge.data);v.generateMipmaps=!1}else Ke?(rt&&t.texStorage2D(i.TEXTURE_2D,ye,be,ie.width,ie.height),k&&se(v,ie,ve,We)):t.texImage2D(i.TEXTURE_2D,0,be,ie.width,ie.height,0,ve,We,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ke&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,be,Ve[0].width,Ve[0].height,ie.depth);for(let te=0,_e=Ve.length;te<_e;te++)if(ge=Ve[te],v.format!==Xn)if(ve!==null)if(Ke){if(k)if(v.layerUpdates.size>0){let Ae=Su(ge.width,ge.height,v.format,v.type);for(let ae of v.layerUpdates){let Xe=ge.data.subarray(ae*Ae/ge.data.BYTES_PER_ELEMENT,(ae+1)*Ae/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ae,ge.width,ge.height,1,ve,Xe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ie.depth,ve,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,be,ge.width,ge.height,ie.depth,0,ge.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ie.depth,ve,We,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,be,ge.width,ge.height,ie.depth,0,ve,We,ge.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ke&&rt&&t.texStorage2D(i.TEXTURE_2D,ye,be,Ve[0].width,Ve[0].height);for(let te=0,_e=Ve.length;te<_e;te++)ge=Ve[te],v.format!==Xn?ve!==null?Ke?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,te,be,ge.width,ge.height,0,ge.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?k&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ge.width,ge.height,ve,We,ge.data):t.texImage2D(i.TEXTURE_2D,te,be,ge.width,ge.height,0,ve,We,ge.data)}else if(v.isDataArrayTexture)if(Ke){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,be,ie.width,ie.height,ie.depth),k)if(v.layerUpdates.size>0){let te=Su(ie.width,ie.height,v.format,v.type);for(let _e of v.layerUpdates){let Ae=ie.data.subarray(_e*te/ie.data.BYTES_PER_ELEMENT,(_e+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,ie.width,ie.height,1,ve,We,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,We,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,ve,We,ie.data);else if(v.isData3DTexture)Ke?(rt&&t.texStorage3D(i.TEXTURE_3D,ye,be,ie.width,ie.height,ie.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,We,ie.data)):t.texImage3D(i.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,ve,We,ie.data);else if(v.isFramebufferTexture){if(rt)if(Ke)t.texStorage2D(i.TEXTURE_2D,ye,be,ie.width,ie.height);else{let te=ie.width,_e=ie.height;for(let Ae=0;Ae<ye;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,be,te,_e,0,ve,We,null),te>>=1,_e>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ie.parentNode!==te){te.appendChild(ie),d.add(v),te.onpaint=_e=>{let Ae=_e.changedElements;for(let ae of d)Ae.includes(ae.image)&&(ae.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let Ae=i.RGBA,ae=i.RGBA,Xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,ae,Xe,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Ke&&rt){let te=Tt(Ve[0]);t.texStorage2D(i.TEXTURE_2D,ye,be,te.width,te.height)}for(let te=0,_e=Ve.length;te<_e;te++)ge=Ve[te],Ke?k&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ve,We,ge):t.texImage2D(i.TEXTURE_2D,te,be,ve,We,ge);v.generateMipmaps=!1}else if(Ke){if(rt){let te=Tt(ie);t.texStorage2D(i.TEXTURE_2D,ye,be,te.width,te.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,We,ie)}else t.texImage2D(i.TEXTURE_2D,0,be,ve,We,ie);m(v)&&S(q),xe.__version=fe.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function qe(A,v,H){if(v.image.length!==6)return;let q=dt(A,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);let fe=n.get($);if($.version!==fe.__version||q===!0){t.activeTexture(i.TEXTURE0+H);let xe=yt.getPrimaries(yt.workingColorSpace),Q=v.colorSpace===Ri?null:yt.getPrimaries(v.colorSpace),ie=v.colorSpace===Ri||xe===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ve=v.isCompressedTexture||v.image[0].isCompressedTexture,We=v.image[0]&&v.image[0].isDataTexture,be=[];for(let ae=0;ae<6;ae++)!ve&&!We?be[ae]=x(v.image[ae],!0,s.maxCubemapSize):be[ae]=We?v.image[ae].image:v.image[ae],be[ae]=qt(v,be[ae]);let ge=be[0],Ve=r.convert(v.format,v.colorSpace),Ke=r.convert(v.type),rt=_(v.internalFormat,Ve,Ke,v.normalized,v.colorSpace),k=v.isVideoTexture!==!0,ye=fe.__version===void 0||q===!0,te=$.dataReady,_e=E(v,ge);ct(i.TEXTURE_CUBE_MAP,v);let Ae;if(ve){k&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,rt,ge.width,ge.height);for(let ae=0;ae<6;ae++){Ae=be[ae].mipmaps;for(let Xe=0;Xe<Ae.length;Xe++){let He=Ae[Xe];v.format!==Xn?Ve!==null?k?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Xe,0,0,He.width,He.height,Ve,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Xe,rt,He.width,He.height,0,He.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Xe,0,0,He.width,He.height,Ve,Ke,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Xe,rt,He.width,He.height,0,Ve,Ke,He.data)}}}else{if(Ae=v.mipmaps,k&&ye){Ae.length>0&&_e++;let ae=Tt(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,rt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(We){k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,be[ae].width,be[ae].height,Ve,Ke,be[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,rt,be[ae].width,be[ae].height,0,Ve,Ke,be[ae].data);for(let Xe=0;Xe<Ae.length;Xe++){let It=Ae[Xe].image[ae].image;k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Xe+1,0,0,It.width,It.height,Ve,Ke,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Xe+1,rt,It.width,It.height,0,Ve,Ke,It.data)}}else{k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ve,Ke,be[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,rt,Ve,Ke,be[ae]);for(let Xe=0;Xe<Ae.length;Xe++){let He=Ae[Xe];k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Xe+1,0,0,Ve,Ke,He.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Xe+1,rt,Ve,Ke,He.image[ae])}}}m(v)&&S(i.TEXTURE_CUBE_MAP),fe.__version=$.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function me(A,v,H,q,$,fe){let xe=r.convert(H.format,H.colorSpace),Q=r.convert(H.type),ie=_(H.internalFormat,xe,Q,H.normalized,H.colorSpace),ve=n.get(v),We=n.get(H);if(We.__renderTarget=v,!ve.__hasExternalTextures){let be=Math.max(1,v.width>>fe),ge=Math.max(1,v.height>>fe);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,fe,ie,be,ge,v.depth,0,xe,Q,null):t.texImage2D($,fe,ie,be,ge,0,xe,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),it(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,$,We.__webglTexture,0,Ze(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,$,We.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(A,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let q=v.depthTexture,$=q&&q.isDepthTexture?q.type:null,fe=T(v.stencilBuffer,$),xe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;it(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze(v),fe,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze(v),fe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,fe,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,A)}else{let q=v.textures;for(let $=0;$<q.length;$++){let fe=q[$],xe=r.convert(fe.format,fe.colorSpace),Q=r.convert(fe.type),ie=_(fe.internalFormat,xe,Q,fe.normalized,fe.colorSpace);it(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze(v),ie,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze(v),ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ie,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(A,v,H){let q=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",P)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ct(i.TEXTURE_CUBE_MAP,v.depthTexture);let ve=r.convert(v.depthTexture.format),We=r.convert(v.depthTexture.type),be;v.depthTexture.format===ci?be=i.DEPTH_COMPONENT24:v.depthTexture.format===Zi&&(be=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,be,v.width,v.height,0,ve,We,null)}}else ne(v.depthTexture,0);let fe=$.__webglTexture,xe=Ze(v),Q=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ie=v.depthTexture.format===Zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ci)it(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,Q,fe,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,Q,fe,0);else if(v.depthTexture.format===Zi)it(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,Q,fe,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,Q,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(A){let v=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){let $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=q}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)Ot(v.__webglFramebuffer[q],A,q);else{let q=A.texture.mipmaps;q&&q.length>0?Ot(v.__webglFramebuffer[0],A,0):Ot(v.__webglFramebuffer,A,0)}else if(H){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=i.createRenderbuffer(),nt(v.__webglDepthbuffer[q],A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=v.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,fe)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),nt(v.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,v,H){let q=n.get(A);v!==void 0&&me(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Qe(A)}function wt(A){let v=A.texture,H=n.get(A),q=n.get(v);A.addEventListener("dispose",y);let $=A.textures,fe=A.isWebGLCubeRenderTarget===!0,xe=$.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,a.memory.textures++),fe){H.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[Q]=[];for(let ie=0;ie<v.mipmaps.length;ie++)H.__webglFramebuffer[Q][ie]=i.createFramebuffer()}else H.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)H.__webglFramebuffer[Q]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(xe)for(let Q=0,ie=$.length;Q<ie;Q++){let ve=n.get($[Q]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&it(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Q=0;Q<$.length;Q++){let ie=$[Q];H.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Q]);let ve=r.convert(ie.format,ie.colorSpace),We=r.convert(ie.type),be=_(ie.internalFormat,ve,We,ie.normalized,ie.colorSpace,A.isXRRenderTarget===!0),ge=Ze(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,be,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,H.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ct(i.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)me(H.__webglFramebuffer[Q][ie],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ie);else me(H.__webglFramebuffer[Q],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(v)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let Q=0,ie=$.length;Q<ie;Q++){let ve=$[Q],We=n.get(ve),be=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(be=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,We.__webglTexture),ct(be,ve),me(H.__webglFramebuffer,A,ve,i.COLOR_ATTACHMENT0+Q,be,0),m(ve)&&S(be)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,q.__webglTexture),ct(Q,v),v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)me(H.__webglFramebuffer[ie],A,v,i.COLOR_ATTACHMENT0,Q,ie);else me(H.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,Q,0);m(v)&&S(Q),t.unbindTexture()}A.depthBuffer&&Qe(A)}function oe(A){let v=A.textures;for(let H=0,q=v.length;H<q;H++){let $=v[H];if(m($)){let fe=C(A),xe=n.get($).__webglTexture;t.bindTexture(fe,xe),S(fe),t.unbindTexture()}}}let ue=[],mt=[];function Be(A){if(A.samples>0){if(it(A)===!1){let v=A.textures,H=A.width,q=A.height,$=i.COLOR_BUFFER_BIT,fe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(A),Q=v.length>1;if(Q)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let ie=A.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);let We=n.get(v[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,H,q,0,0,H,q,$,i.NEAREST),c===!0&&(ue.length=0,mt.length=0,ue.push(i.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ue.push(fe),mt.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);let We=n.get(v[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ze(A){return Math.min(s.maxSamples,A.samples)}function it(A){let v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function B(A){let v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function qt(A,v){let H=A.colorSpace,q=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Br&&H!==Ri&&(yt.getTransfer(H)===Rt?(q!==Xn||$!==An)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",H)),v}function Tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.getTextureUnits=U,this.setTextureUnits=X,this.setTexture2D=ne,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=re,this.rebindTextures=lt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function jv(i,e){function t(n,s=Ri){let r,a=yt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hu)return i.BYTE;if(n===du)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===mu)return i.ALPHA;if(n===gu)return i.RGB;if(n===Xn)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===_l)return i.RGBA_INTEGER;if(n===xa||n===va||n===ya||n===_a)if(a===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===Ml||n===Sl||n===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===Tl||n===Al||n===Cl||n===Rl||n===ba||n===Pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wl||n===Tl)return a===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Al)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cl)return r.COMPRESSED_R11_EAC;if(n===Rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ba)return r.COMPRESSED_RG11_EAC;if(n===Pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Il||n===Nl||n===Ll||n===Dl||n===Ul||n===Fl||n===Ol||n===Bl||n===kl||n===zl||n===Hl||n===Gl||n===Vl||n===Wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Il)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xl||n===ql||n===Yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xl)return a===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===Kl||n===Ma||n===Jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ey=`
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

}`,Gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Jr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vt({vertexShader:Qv,fragmentShader:ey,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new ea(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vu=class extends ui{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,M=typeof XRWebGLBinding<"u",x=new Gu,m={},S=t.getContextAttributes(),C=null,_=null,T=[],E=[],P=new Se,y=null,w=null,I=new jt;I.viewport=new Wt;let D=new jt;D.viewport=new Wt;let z=[I,D],G=new cl,U=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=T[j];return se===void 0&&(se=new Zs,T[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=T[j];return se===void 0&&(se=new Zs,T[j]=se),se.getGripSpace()},this.getHand=function(j){let se=T[j];return se===void 0&&(se=new Zs,T[j]=se),se.getHandSpace()};function K(j){let se=E.indexOf(j.inputSource);if(se===-1)return;let we=T[se];we!==void 0&&(we.update(j.inputSource,j.frame,l||a),we.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ne);for(let j=0;j<T.length;j++){let se=E[j];se!==null&&(E[j]=null,T[j].disconnect(se))}U=null,X=null,x.reset();for(let j in m)delete m[j];if(e.setRenderTarget(C),f=null,h=null,d=null,s=null,_=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(P.width,P.height,!1),w!==null){let j=w.camera;j.fov=w.fov,j.zoom=w.zoom,j.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,qe=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=S.stencil?Zi:ci,qe=S.stencil?sr:ri);let nt={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(nt),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Qt(h.textureWidth,h.textureHeight,{format:Xn,type:An,depthTexture:new zi(h.textureWidth,h.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let we={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Qt(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ne(j){for(let se=0;se<j.removed.length;se++){let we=j.removed[se],qe=E.indexOf(we);qe>=0&&(E[qe]=null,T[qe].disconnect(we))}for(let se=0;se<j.added.length;se++){let we=j.added[se],qe=E.indexOf(we);if(qe===-1){for(let nt=0;nt<T.length;nt++)if(nt>=E.length){E.push(we),qe=nt;break}else if(E[nt]===null){E[nt]=we,qe=nt;break}if(qe===-1)break}let me=T[qe];me&&me.connect(we)}}let Z=new R,ee=new R;function re(j,se,we){Z.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(we.matrixWorld);let qe=Z.distanceTo(ee),me=se.projectionMatrix.elements,nt=we.projectionMatrix.elements,Ot=me[14]/(me[10]-1),Qe=me[14]/(me[10]+1),lt=(me[9]+1)/me[5],wt=(me[9]-1)/me[5],oe=(me[8]-1)/me[0],ue=(nt[8]+1)/nt[0],mt=Ot*oe,Be=Ot*ue,Ze=qe/(-oe+ue),it=Ze*-oe;if(se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(it),j.translateZ(Ze),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),me[10]===-1)j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let B=Ot+Ze,qt=Qe+Ze,Tt=mt-it,A=Be+(qe-it),v=lt*Qe/qt*B,H=wt*Qe/qt*B;j.projectionMatrix.makePerspective(Tt,A,v,H,B,qt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function De(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let se=j.near,we=j.far;x.texture!==null&&(x.depthNear>0&&(se=x.depthNear),x.depthFar>0&&(we=x.depthFar)),G.near=D.near=I.near=se,G.far=D.far=I.far=we,(U!==G.near||X!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),U=G.near,X=G.far),G.layers.mask=j.layers.mask|6,I.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let qe=j.parent,me=G.cameras;De(G,qe);for(let nt=0;nt<me.length;nt++)De(me[nt],qe);me.length===2?re(G,I,D):G.projectionMatrix.copy(I.projectionMatrix),w===null&&j.isPerspectiveCamera&&(w={camera:j,fov:j.fov,zoom:j.zoom}),Ue(j,G,qe)};function Ue(j,se,we){we===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(we.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Hr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(G)},this.getCameraTexture=function(j){return m[j]};let Mt=null;function ct(j,se){if(u=se.getViewerPose(l||a),g=se,u!==null){let we=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let qe=!1;we.length!==G.cameras.length&&(G.cameras.length=0,qe=!0);for(let Qe=0;Qe<we.length;Qe++){let lt=we[Qe],wt=null;if(f!==null)wt=f.getViewport(lt);else{let ue=d.getViewSubImage(h,lt);wt=ue.viewport,Qe===0&&(e.setRenderTargetTextures(_,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(_))}let oe=z[Qe];oe===void 0&&(oe=new jt,oe.layers.enable(Qe),oe.viewport=new Wt,z[Qe]=oe),oe.matrix.fromArray(lt.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(lt.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(wt.x,wt.y,wt.width,wt.height),Qe===0&&(G.matrix.copy(oe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),qe===!0&&G.cameras.push(oe)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let Qe=d.getDepthInformation(we[0]);Qe&&Qe.isValid&&Qe.texture&&x.init(Qe,s.renderState)}if(me&&me.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let Qe=0;Qe<we.length;Qe++){let lt=we[Qe].camera;if(lt){let wt=m[lt];wt||(wt=new Jr,m[lt]=wt);let oe=d.getCameraImage(lt);wt.sourceTexture=oe}}}}for(let we=0;we<T.length;we++){let qe=E[we],me=T[we];qe!==null&&me!==void 0&&me.update(qe,se,l||a)}Mt&&Mt(j,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let dt=new xf;dt.setAnimationLoop(ct),this.setAnimationLoop=function(j){Mt=j},this.dispose=function(){}}},ty=new Ft,Sf=new at;Sf.set(-1,0,0,0,1,0,0,0,1);function ny(i,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,_u(i)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,S,C,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(x,m):m.isMeshLambertMaterial?(r(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(x,m),d(x,m)):m.isMeshPhongMaterial?(r(x,m),u(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(x,m),h(x,m),m.isMeshPhysicalMaterial&&f(x,m,_)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),M(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(a(x,m),m.isLineDashedMaterial&&o(x,m)):m.isPointsMaterial?c(x,m,S,C):m.isSpriteMaterial?l(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===Kt&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===Kt&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let S=e.get(m),C=S.envMap,_=S.envMapRotation;C&&(x.envMap.value=C,x.envMapRotation.value.setFromMatrix4(ty.makeRotationFromEuler(_)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Sf),x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function a(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function o(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,S,C){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*S,x.scale.value=C*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function l(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function u(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function d(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function h(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function f(x,m,S){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Kt&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.retroreflectivity>0&&(x.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function M(x,m){let S=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(S.matrixWorld),x.nearDistance.value=S.shadow.camera.near,x.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iy(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,T){let E=T.program;n.uniformBlockBinding(_,E)}function l(_,T){let E=s[_.id];E===void 0&&(x(_),E=u(_),s[_.id]=E,_.addEventListener("dispose",S));let P=T.program;n.updateUBOMapping(_,P);let y=e.render.frame;r[_.id]!==y&&(h(_),r[_.id]=y)}function u(_){let T=d();_.__bindingPointIndex=T;let E=i.createBuffer(),P=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let T=s[_.id],E=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let y=0,w=E.length;y<w;y++){let I=E[y];if(Array.isArray(I))for(let D=0,z=I.length;D<z;D++)f(I[D],y,D,P);else f(I,y,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,T,E,P){if(M(_,T,E,P)===!0){let y=_.__offset,w=_.value;if(Array.isArray(w)){let I=0;for(let D=0;D<w.length;D++){let z=w[D],G=m(z);g(z,_.__data,I),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function g(_,T,E){typeof _=="number"||typeof _=="boolean"?T[0]=_:_.isMatrix3?(T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0):ArrayBuffer.isView(_)?T.set(new _.constructor(_.buffer,_.byteOffset,T.length)):_.toArray(T,E)}function M(_,T,E,P){let y=_.value,w=T+"_"+E;if(P[w]===void 0)return typeof y=="number"||typeof y=="boolean"?P[w]=y:ArrayBuffer.isView(y)?P[w]=y.slice():P[w]=y.clone(),!0;{let I=P[w];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return P[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function x(_){let T=_.uniforms,E=0,P=16;for(let w=0,I=T.length;w<I;w++){let D=Array.isArray(T[w])?T[w]:[T[w]];for(let z=0,G=D.length;z<G;z++){let U=D[z],X=Array.isArray(U.value)?U.value:[U.value];for(let K=0,J=X.length;K<J;K++){let ne=X[K],Z=m(ne),ee=E%P,re=ee%Z.boundary,De=ee+re;E+=re,De!==0&&P-De<Z.storage&&(E+=P-De),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=Z.storage}}}let y=E%P;return y>0&&(E+=P-y),_.__size=E,_.__cache={},this}function m(_){let T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(T.boundary=16,T.storage=_.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",_),T}function S(_){let T=_.target;T.removeEventListener("dispose",S);let E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function C(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:C}}var sy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function ry(){return xi===null&&(xi=new qr(sy,16,16,Ki,pn),xi.name="DFG_LUT",xi.minFilter=hn,xi.magFilter=hn,xi.wrapS=li,xi.wrapT=li,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var lr=class{constructor(e={}){let{canvas:t=Gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=An}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=f,x=new Set([_l,yl,vl]),m=new Set([An,ri,ir,sr,ml,gl]),S=new Uint32Array(4),C=new Int32Array(4),_=new R,T=null,E=null,P=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,z=null,G=null,U=null,X=null;this._outputColorSpace=on;let K=0,J=0,ne=null,Z=-1,ee=null,re=new Wt,De=new Wt,Ue=null,Mt=new pe(0),ct=0,dt=t.width,j=t.height,se=1,we=null,qe=null,me=new Wt(0,0,dt,j),nt=new Wt(0,0,dt,j),Ot=!1,Qe=new Js,lt=!1,wt=!1,oe=new Ft,ue=new R,mt=new Wt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function it(){return ne===null?se:1}let B=n;function qt(b,O){return t.getContext(b,O)}let Tt,A,v,H,q,$,fe,xe,Q,ie,ve,We,be,ge,Ve,Ke,rt,k,ye,te,_e,Ae,ae;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",yn,!1),B===null){let O="webgl2";if(B=qt(O,b),B===null)throw qt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(b){throw t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),et("WebGLRenderer: "+b.message),b}function Xe(){Tt=new dx(B),Tt.init(),_e=new jv(B,Tt),A=new nx(B,Tt,e,_e),v=new Jv(B,Tt),A.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),G=B.createFramebuffer(),U=B.createFramebuffer(),X=B.createFramebuffer(),H=new mx(B),q=new Fv,$=new $v(B,Tt,v,q,A,_e,H),fe=new hx(I),xe=new xm(B),Ae=new ex(B,xe),Q=new fx(B,xe,H,Ae),ie=new xx(B,Q,xe,Ae,H),k=new gx(B,A,$),Ve=new ix(q),ve=new Uv(I,fe,Tt,A,Ae,Ve),We=new ny(I,q),be=new Bv,ge=new Wv(Tt),rt=new Qg(I,fe,v,ie,g,c),Ke=new Kv(I,ie,A),ae=new iy(B,H,A,v),ye=new tx(B,Tt,H),te=new px(B,Tt,H),H.programs=ve.programs,I.capabilities=A,I.extensions=Tt,I.properties=q,I.renderLists=be,I.shadowMap=Ke,I.state=v,I.info=H}M!==An&&(w=new yx(M,t.width,t.height,o,s,r));let He=new Vu(I,B);this.xr=He,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=Tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(b){b!==void 0&&(se=b,this.setSize(dt,j,!1))},this.getSize=function(b){return b.set(dt,j)},this.setSize=function(b,O,Y=!0){if(He.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=b,j=O,t.width=Math.floor(b*se),t.height=Math.floor(O*se),Y===!0&&(t.style.width=b+"px",t.style.height=O+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(dt*se,j*se).floor()},this.setDrawingBufferSize=function(b,O,Y){dt=b,j=O,se=Y,t.width=Math.floor(b*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(M===An){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(re)},this.getViewport=function(b){return b.copy(me)},this.setViewport=function(b,O,Y,W){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,O,Y,W),v.viewport(re.copy(me).multiplyScalar(se).round())},this.getScissor=function(b){return b.copy(nt)},this.setScissor=function(b,O,Y,W){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,O,Y,W),v.scissor(De.copy(nt).multiplyScalar(se).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(b){v.setScissorTest(Ot=b)},this.setOpaqueSort=function(b){we=b},this.setTransparentSort=function(b){qe=b},this.getClearColor=function(b){return b.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,Y=!0){let W=0;if(b){let V=!1;if(ne!==null){let Ee=ne.texture.format;V=x.has(Ee)}if(V){let Ee=ne.texture.type,Ne=m.has(Ee),Me=rt.getClearColor(),Fe=rt.getClearAlpha(),ke=Me.r,ut=Me.g,ft=Me.b;Ne?(S[0]=ke,S[1]=ut,S[2]=ft,S[3]=Fe,B.clearBufferuiv(B.COLOR,0,S)):(C[0]=ke,C[1]=ut,C[2]=ft,C[3]=Fe,B.clearBufferiv(B.COLOR,0,C))}else W|=B.COLOR_BUFFER_BIT}O&&(W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),rt.dispose(),be.dispose(),ge.dispose(),q.dispose(),fe.dispose(),ie.dispose(),Ae.dispose(),ae.dispose(),ve.dispose(),He.dispose(),He.removeEventListener("sessionstart",_r),He.removeEventListener("sessionend",La),yi.stop()};function It(b){b.preventDefault(),vu("WebGLRenderer: Context Lost."),D=!0}function At(){vu("WebGLRenderer: Context Restored."),D=!1;let b=H.autoReset,O=Ke.enabled,Y=Ke.autoUpdate,W=Ke.needsUpdate,V=Ke.type;Xe(),H.autoReset=b,Ke.enabled=O,Ke.autoUpdate=Y,Ke.needsUpdate=W,Ke.type=V}function yn(b){et("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Fn(b){let O=b.target;O.removeEventListener("dispose",Fn),Ia(O)}function Ia(b){qn(b),q.remove(b)}function qn(b){let O=q.get(b).programs;O!==void 0&&(O.forEach(function(Y){ve.releaseProgram(Y)}),b.isShaderMaterial&&ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Y,W,V,Ee){O===null&&(O=Be);let Ne=V.isMesh&&V.matrixWorld.determinantAffine()<0,Me=lc(b,O,Y,W,V);v.setMaterial(W,Ne);let Fe=Y.index,ke=1;if(W.wireframe===!0){if(Fe=Q.getWireframeAttribute(Y),Fe===void 0)return;ke=2}let ut=Y.drawRange,ft=Y.attributes.position,Oe=ut.start*ke,Ct=(ut.start+ut.count)*ke;Ee!==null&&(Oe=Math.max(Oe,Ee.start*ke),Ct=Math.min(Ct,(Ee.start+Ee.count)*ke)),Fe!==null?(Oe=Math.max(Oe,0),Ct=Math.min(Ct,Fe.count)):ft!=null&&(Oe=Math.max(Oe,0),Ct=Math.min(Ct,ft.count));let Yt=Ct-Oe;if(Yt<0||Yt===1/0)return;Ae.setup(V,W,Me,Y,Fe);let Bt,Dt=ye;if(Fe!==null&&(Bt=xe.get(Fe),Dt=te,Dt.setIndex(Bt)),V.isMesh)W.wireframe===!0?(v.setLineWidth(W.wireframeLinewidth*it()),Dt.setMode(B.LINES)):Dt.setMode(B.TRIANGLES);else if(V.isLine){let kt=W.linewidth;kt===void 0&&(kt=1),v.setLineWidth(kt*it()),V.isLineSegments?Dt.setMode(B.LINES):V.isLineLoop?Dt.setMode(B.LINE_LOOP):Dt.setMode(B.LINE_STRIP)}else V.isPoints?Dt.setMode(B.POINTS):V.isSprite&&Dt.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let kt=V._multiDrawStarts,Ce=V._multiDrawCounts,un=V._multiDrawCount,Et=Fe?xe.get(Fe).bytesPerElement:1,En=q.get(W).currentProgram.getUniforms();for(let On=0;On<un;On++)En.setValue(B,"_gl_DrawID",On),Dt.render(kt[On]/Et,Ce[On])}else if(V.isInstancedMesh)Dt.renderInstances(Oe,Yt,V.count);else if(Y.isInstancedBufferGeometry){let kt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ce=Math.min(Y.instanceCount,kt);Dt.renderInstances(Oe,Yt,Ce)}else Dt.render(Oe,Yt)};function Na(b,O,Y,W){z!==null&&b.isNodeMaterial&&z.setObject(W,b),lt===!0&&Ve.setState(b,Y,!1),b.transparent===!0&&b.side===Xt&&b.forceSinglePass===!1?(b.side=Kt,b.needsUpdate=!0,As(b,O,W),b.side=gi,b.needsUpdate=!0,As(b,O,W),b.side=Xt):As(b,O,W)}this.compile=function(b,O,Y=null){Y===null&&(Y=b),z!==null&&z.renderStart(b,O,Y),E=ge.get(Y),E.init(O),y.push(E),Y.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),b!==Y&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),wt=this.localClippingEnabled,lt=Ve.init(this.clippingPlanes,wt),lt===!0&&Ve.setGlobalState(this.clippingPlanes,O),z!==null&&Ke.render(E.state.shadowsArray,Y,O);let W=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Ee=V.material;if(Ee)if(Array.isArray(Ee))for(let Ne=0;Ne<Ee.length;Ne++){let Me=Ee[Ne];Na(Me,Y,O,V),W.add(Me)}else Na(Ee,Y,O,V),W.add(Ee)}),E=y.pop(),z!==null&&z.renderEnd(),W},this.compileAsync=function(b,O,Y=null){let W=this.compile(b,O,Y);return new Promise(V=>{function Ee(){if(W.forEach(function(Ne){let Fe=q.get(Ne).currentProgram;(Fe===void 0||Fe.isReady())&&W.delete(Ne)}),W.size===0){V(b);return}setTimeout(Ee,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let yr=null;function oc(b){yr&&yr(b)}function _r(){yi.stop()}function La(){yi.start()}let yi=new xf;yi.setAnimationLoop(oc),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(b){yr=b,He.setAnimationLoop(b),b===null?yi.stop():yi.start()},He.addEventListener("sessionstart",_r),He.addEventListener("sessionend",La),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(b,O);let Y=He.enabled===!0&&He.isPresenting===!0,W=w!==null&&(ne===null||Y)&&w.begin(I,ne);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(O),O=He.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,O,ne),E=ge.get(b,y.length),E.init(O),E.state.textureUnits=$.getTextureUnits(),y.push(E),oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Qe.setFromProjectionMatrix(oe,ei,O.reversedDepth),wt=this.localClippingEnabled,lt=Ve.init(this.clippingPlanes,wt),T=be.get(b,P.length),T.init(),P.push(T),He.enabled===!0&&He.isPresenting===!0){let Ne=I.xr.getDepthSensingMesh();Ne!==null&&is(Ne,O,-1/0,I.sortObjects)}is(b,O,0,I.sortObjects),T.finish(),z!==null&&z.updateLights(E.state.lightsArray),I.sortObjects===!0&&T.sort(we,qe),Ze=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,Ze&&rt.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Ve.beginShadows();let V=E.state.shadowsArray;if(Ke.render(V,b,O),lt===!0&&Ve.endShadows(),(W&&w.hasRenderPass())===!1){let Ne=T.opaque,Me=T.transmissive;if(E.setupLights(),O.isArrayCamera){let Fe=O.cameras;if(Me.length>0)for(let ke=0,ut=Fe.length;ke<ut;ke++){let ft=Fe[ke];Da(Ne,Me,b,ft)}Ze&&rt.render(b);for(let ke=0,ut=Fe.length;ke<ut;ke++){let ft=Fe[ke];Es(T,b,ft,ft.viewport)}}else Me.length>0&&Da(Ne,Me,b,O),Ze&&rt.render(b),Es(T,b,O)}ne!==null&&J===0&&($.updateMultisampleRenderTarget(ne),$.updateRenderTargetMipmap(ne)),W&&w.end(I),b.isScene===!0&&b.onAfterRender(I,b,O),Ae.resetDefaultState(),Z=-1,ee=null,y.pop(),y.length>0?(E=y[y.length-1],$.setTextureUnits(E.state.textureUnits),lt===!0&&Ve.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,z!==null&&z.renderEnd()};function is(b,O,Y,W){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Qe)){W&&mt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(oe);let Ne=ie.update(b),Me=b.material;Me.visible&&T.push(b,Ne,Me,Y,mt.z,null,O)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Qe))){let Ne=ie.update(b),Me=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),mt.copy(b.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),mt.copy(Ne.boundingSphere.center)),mt.applyMatrix4(b.matrixWorld).applyMatrix4(oe)),Array.isArray(Me)){let Fe=Ne.groups;for(let ke=0,ut=Fe.length;ke<ut;ke++){let ft=Fe[ke],Oe=Me[ft.materialIndex];Oe&&Oe.visible&&T.push(b,Ne,Oe,Y,mt.z,ft,O)}}else Me.visible&&T.push(b,Ne,Me,Y,mt.z,null,O)}}let Ee=b.children;for(let Ne=0,Me=Ee.length;Ne<Me;Ne++)is(Ee[Ne],O,Y,W)}function Es(b,O,Y,W){let{opaque:V,transmissive:Ee,transparent:Ne}=b;E.setupLightsView(Y),lt===!0&&Ve.setGlobalState(I.clippingPlanes,Y),W&&v.viewport(re.copy(W)),V.length>0&&ws(V,O,Y),Ee.length>0&&ws(Ee,O,Y),Ne.length>0&&ws(Ne,O,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Da(b,O,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let Oe=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Qt(1,1,{generateMipmaps:!0,type:Oe?pn:An,minFilter:Yi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let Ee=E.state.transmissionRenderTarget[W.id],Ne=W.viewport||re;Ee.setSize(Ne.z*I.transmissionResolutionScale,Ne.w*I.transmissionResolutionScale);let Me=I.getRenderTarget(),Fe=I.getActiveCubeFace(),ke=I.getActiveMipmapLevel();I.setRenderTarget(Ee),I.getClearColor(Mt),ct=I.getClearAlpha(),ct<1&&I.setClearColor(16777215,.5),I.clear(),Ze&&rt.render(Y);let ut=I.toneMapping;I.toneMapping=si;let ft=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),lt===!0&&Ve.setGlobalState(I.clippingPlanes,W),ws(b,Y,W),$.updateMultisampleRenderTarget(Ee),$.updateRenderTargetMipmap(Ee),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ct=0,Yt=O.length;Ct<Yt;Ct++){let Bt=O[Ct],{object:Dt,geometry:kt,material:Ce,group:un}=Bt;if(Ce.side===Xt&&Dt.layers.test(W.layers)){let Et=Ce.side;Ce.side=Kt,Ce.needsUpdate=!0,Ts(Dt,Y,W,kt,Ce,un),Ce.side=Et,Ce.needsUpdate=!0,Oe=!0}}Oe===!0&&($.updateMultisampleRenderTarget(Ee),$.updateRenderTargetMipmap(Ee))}I.setRenderTarget(Me,Fe,ke),I.setClearColor(Mt,ct),ft!==void 0&&(W.viewport=ft),I.toneMapping=ut}function ws(b,O,Y){let W=O.isScene===!0?O.overrideMaterial:null;for(let V=0,Ee=b.length;V<Ee;V++){let Ne=b[V],{object:Me,geometry:Fe,group:ke}=Ne,ut=Ne.material;ut.allowOverride===!0&&W!==null&&(ut=W),Me.layers.test(Y.layers)&&Ts(Me,O,Y,Fe,ut,ke)}}function Ts(b,O,Y,W,V,Ee){z!==null&&V.isNodeMaterial&&z.setObject(b,V),b.onBeforeRender(I,O,Y,W,V,Ee),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(I,O,Y,W,b,Ee),V.transparent===!0&&V.side===Xt&&V.forceSinglePass===!1?(V.side=Kt,V.needsUpdate=!0,I.renderBufferDirect(Y,O,W,V,b,Ee),V.side=gi,V.needsUpdate=!0,I.renderBufferDirect(Y,O,W,V,b,Ee),V.side=Xt):I.renderBufferDirect(Y,O,W,V,b,Ee),b.onAfterRender(I,O,Y,W,V,Ee)}function As(b,O,Y){O.isScene!==!0&&(O=Be);let W=q.get(b),V=E.state.lights,Ee=E.state.shadowsArray,Ne=V.state.version,Me=ve.getParameters(b,V.state,Ee,O,Y,E.state.lightProbeGridArray),Fe=ve.getProgramCacheKey(Me),ke=W.programs;W.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;let ut=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;W.envMap=fe.get(b.envMap||W.environment,ut),W.envMapRotation=W.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",Fn),ke=new Map,W.programs=ke);let ft=ke.get(Fe);if(ft!==void 0){if(W.currentProgram===ft&&W.lightsStateVersion===Ne)return Yn(b,Me),ft}else Me.uniforms=ve.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,Y,Me),b.onBeforeCompile(Me,I),ft=ve.acquireProgram(Me,Fe),ke.set(Fe,ft),W.uniforms=Me.uniforms;let Oe=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=Ve.uniform),Yn(b,Me),W.needsLights=uc(b),W.lightsStateVersion=Ne,W.needsLights&&(Oe.ambientLightColor.value=V.state.ambient,Oe.lightProbe.value=V.state.probe,Oe.sunLights.value=V.state.sun,Oe.sunLightShadows.value=V.state.sunShadow,Oe.directionalLights.value=V.state.directional,Oe.directionalLightShadows.value=V.state.directionalShadow,Oe.spotLights.value=V.state.spot,Oe.spotLightShadows.value=V.state.spotShadow,Oe.rectAreaLights.value=V.state.rectArea,Oe.ltc_1.value=V.state.rectAreaLTC1,Oe.ltc_2.value=V.state.rectAreaLTC2,Oe.pointLights.value=V.state.point,Oe.pointLightShadows.value=V.state.pointShadow,Oe.hemisphereLights.value=V.state.hemi,Oe.sunShadowMatrix.value=V.state.sunShadowMatrix,Oe.sunShadowCascade.value=V.state.sunShadowCascade,Oe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Oe.spotLightMatrix.value=V.state.spotLightMatrix,Oe.spotLightMap.value=V.state.spotLightMap,Oe.pointShadowMatrix.value=V.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=ft,W.uniformsList=null,ft}function br(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=or.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Yn(b,O){let Y=q.get(b);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Ua(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let Y=0,W=b.length;Y<W;Y++){let V=b[Y];if(V.texture!==null&&V.boundingBox.containsPoint(_))return V}return null}function lc(b,O,Y,W,V){O.isScene!==!0&&(O=Be),$.resetTextureUnits();let Ee=O.fog,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,Me=ne===null?I.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:yt.workingColorSpace,Fe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,ke=fe.get(W.envMap||Ne,Fe),ut=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ft=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Oe=!!Y.morphAttributes.position,Ct=!!Y.morphAttributes.normal,Yt=!!Y.morphAttributes.color,Bt=si;W.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Bt=I.toneMapping);let Dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,kt=Dt!==void 0?Dt.length:0,Ce=q.get(W),un=E.state.lights;if(lt===!0&&(wt===!0||b!==ee)){let Lt=b===ee&&W.id===Z;Ve.setState(W,b,Lt)}let Et=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==un.state.version||Ce.outputColorSpace!==Me||V.isBatchedMesh&&Ce.batching===!1||!V.isBatchedMesh&&Ce.batching===!0||V.isBatchedMesh&&Ce.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ce.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ce.instancing===!1||!V.isInstancedMesh&&Ce.instancing===!0||V.isSkinnedMesh&&Ce.skinning===!1||!V.isSkinnedMesh&&Ce.skinning===!0||V.isInstancedMesh&&Ce.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ce.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ce.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ce.instancingMorph===!1&&V.morphTexture!==null||Ce.envMap!==ke||W.fog===!0&&Ce.fog!==Ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ve.numPlanes||Ce.numIntersection!==Ve.numIntersection)||Ce.vertexAlphas!==ut||Ce.vertexTangents!==ft||Ce.morphTargets!==Oe||Ce.morphNormals!==Ct||Ce.morphColors!==Yt||Ce.toneMapping!==Bt||Ce.morphTargetsCount!==kt||!!Ce.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,Ce.__version=W.version);let En=Ce.currentProgram;Et===!0&&(En=As(W,O,V),z&&W.isNodeMaterial&&z.onUpdateProgram(W,En,Ce));let On=!1,mn=!1,_i=!1,Nt=En.getUniforms(),zt=Ce.uniforms;if(v.useProgram(En.program)&&(On=!0,mn=!0,_i=!0),W.id!==Z&&(Z=W.id,mn=!0),Ce.needsLights){let Lt=Ua(E.state.lightProbeGridArray,V);Ce.lightProbeGrid!==Lt&&(Ce.lightProbeGrid=Lt,mn=!0)}if(On||ee!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Nt.setValue(B,"projectionMatrix",b.projectionMatrix),Nt.setValue(B,"viewMatrix",b.matrixWorldInverse);let Bn=Nt.map.cameraPosition;Bn!==void 0&&Bn.setValue(B,ue.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&Nt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Nt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),ee!==b&&(ee=b,mn=!0,_i=!0)}if(Ce.needsLights&&(un.state.sunShadowMap.length>0&&Nt.setValue(B,"sunShadowMap",un.state.sunShadowMap,$),un.state.directionalShadowMap.length>0&&Nt.setValue(B,"directionalShadowMap",un.state.directionalShadowMap,$),un.state.spotShadowMap.length>0&&Nt.setValue(B,"spotShadowMap",un.state.spotShadowMap,$),un.state.pointShadowMap.length>0&&Nt.setValue(B,"pointShadowMap",un.state.pointShadowMap,$)),V.isSkinnedMesh){Nt.setOptional(B,V,"bindMatrix"),Nt.setOptional(B,V,"bindMatrixInverse");let Lt=V.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Nt.setValue(B,"boneTexture",Lt.boneTexture,$))}V.isBatchedMesh&&(Nt.setOptional(B,V,"batchingTexture"),Nt.setValue(B,"batchingTexture",V._matricesTexture,$),Nt.setOptional(B,V,"batchingIdTexture"),Nt.setValue(B,"batchingIdTexture",V._indirectTexture,$),Nt.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&Nt.setValue(B,"batchingColorTexture",V._colorsTexture,$));let Zn=Y.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&k.update(V,Y,En),(mn||Ce.receiveShadow!==V.receiveShadow)&&(Ce.receiveShadow=V.receiveShadow,Nt.setValue(B,"receiveShadow",V.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(zt.envMapIntensity.value=O.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=ry()),mn){if(Nt.setValue(B,"toneMappingExposure",I.toneMappingExposure),Ce.needsLights&&cc(zt,_i),Ee&&W.fog===!0&&We.refreshFogUniforms(zt,Ee),We.refreshMaterialUniforms(zt,W,se,j,E.state.transmissionRenderTarget[b.id]),Ce.needsLights&&Ce.lightProbeGrid){let Lt=Ce.lightProbeGrid;zt.probesSH.value=Lt.texture,zt.probesMin.value.copy(Lt.boundingBox.min),zt.probesMax.value.copy(Lt.boundingBox.max),zt.probesResolution.value.copy(Lt.resolution)}or.upload(B,br(Ce),zt,$)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(or.upload(B,br(Ce),zt,$),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Nt.setValue(B,"center",V.center),Nt.setValue(B,"modelViewMatrix",V.modelViewMatrix),Nt.setValue(B,"normalMatrix",V.normalMatrix),Nt.setValue(B,"modelMatrix",V.matrixWorld),W.uniformsGroups!==void 0){let Lt=W.uniformsGroups;for(let Bn=0,ai=Lt.length;Bn<ai;Bn++){let Fa=Lt[Bn];ae.update(Fa,En),ae.bind(Fa,En)}}return En}function cc(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.sunLights.needsUpdate=O,b.sunLightShadows.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function uc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(b,O,Y){let W=q.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(b.texture).__webglTexture=O,q.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let Y=q.get(b);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,Y=0){ne=b,K=O,J=Y;let W=null,V=!1,Ee=!1;if(b){let Me=q.get(b);if(Me.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(B.FRAMEBUFFER,Me.__webglFramebuffer),re.copy(b.viewport),De.copy(b.scissor),Ue=b.scissorTest,v.viewport(re),v.scissor(De),v.setScissorTest(Ue),Z=-1;return}else if(Me.__webglFramebuffer===void 0)$.setupRenderTarget(b);else if(Me.__hasExternalTextures)$.rebindTextures(b,q.get(b.texture).__webglTexture,q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ut=b.depthTexture;if(Me.__boundDepthTexture!==ut){if(ut!==null&&q.has(ut)&&(b.width!==ut.image.width||b.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(b)}}let Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ee=!0);let ke=q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?W=ke[O][Y]:W=ke[O],V=!0):b.samples>0&&$.useMultisampledRTT(b)===!1?W=q.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?W=ke[Y]:W=ke,re.copy(b.viewport),De.copy(b.scissor),Ue=b.scissorTest}else re.copy(me).multiplyScalar(se).floor(),De.copy(nt).multiplyScalar(se).floor(),Ue=Ot;if(Y!==0&&(W=G),v.bindFramebuffer(B.FRAMEBUFFER,W)&&v.drawBuffers(b,W),v.viewport(re),v.scissor(De),v.setScissorTest(Ue),V){let Me=q.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,Y)}else if(Ee){let Me=O;for(let Fe=0;Fe<b.textures.length;Fe++){let ke=q.get(b.textures[Fe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Fe,ke.__webglTexture,Y,Me)}}else if(b!==null&&Y!==0){let Me=q.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Me.__webglTexture,Y)}Z=-1};function Cs(b){let O=q.get(b);return(O.__readFormat!==b.format||O.__readType!==b.type)&&(O.__readFormat=b.format,O.__readType=b.type,O.__formatReadable=A.textureFormatReadable(b.format),O.__typeReadable=A.textureTypeReadable(b.type)),O}this.readRenderTargetPixels=function(b,O,Y,W,V,Ee,Ne,Me=0){if(!(b&&b.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){v.bindFramebuffer(B.FRAMEBUFFER,Fe);try{let ke=b.textures[Me],ut=ke.format,ft=ke.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);let Oe=Cs(ke);if(Oe.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-W&&Y>=0&&Y<=b.height-V&&B.readPixels(O,Y,W,V,_e.convert(ut),_e.convert(ft),Ee)}finally{let ke=ne!==null?q.get(ne).__webglFramebuffer:null;v.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,O,Y,W,V,Ee,Ne,Me=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe)if(O>=0&&O<=b.width-W&&Y>=0&&Y<=b.height-V){v.bindFramebuffer(B.FRAMEBUFFER,Fe);let ke=b.textures[Me],ut=ke.format,ft=ke.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);let Oe=Cs(ke);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ct=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ct),B.bufferData(B.PIXEL_PACK_BUFFER,Ee.byteLength,B.STREAM_READ),B.readPixels(O,Y,W,V,_e.convert(ut),_e.convert(ft),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Yt=ne!==null?q.get(ne).__webglFramebuffer:null;v.bindFramebuffer(B.FRAMEBUFFER,Yt);let Bt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Wd(B,Bt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ct),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ee),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Ct),B.deleteSync(Bt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,Y=0){let W=Math.pow(2,-Y),V=Math.floor(b.image.width*W),Ee=Math.floor(b.image.height*W),Ne=O!==null?O.x:0,Me=O!==null?O.y:0;$.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Ne,Me,V,Ee),v.unbindTexture()},this.copyTextureToTexture=function(b,O,Y=null,W=null,V=0,Ee=0){let Ne,Me,Fe,ke,ut,ft,Oe,Ct,Yt,Bt=b.isCompressedTexture?b.mipmaps[Ee]:b.image;if(Y!==null)Ne=Y.max.x-Y.min.x,Me=Y.max.y-Y.min.y,Fe=Y.isBox3?Y.max.z-Y.min.z:1,ke=Y.min.x,ut=Y.min.y,ft=Y.isBox3?Y.min.z:0;else{let zt=Math.pow(2,-V);Ne=Math.floor(Bt.width*zt),Me=Math.floor(Bt.height*zt),b.isDataArrayTexture?Fe=Bt.depth:b.isData3DTexture?Fe=Math.floor(Bt.depth*zt):Fe=1,ke=0,ut=0,ft=0}W!==null?(Oe=W.x,Ct=W.y,Yt=W.z):(Oe=0,Ct=0,Yt=0);let Dt=_e.convert(O.format),kt=_e.convert(O.type),Ce;O.isData3DTexture?($.setTexture3D(O,0),Ce=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?($.setTexture2DArray(O,0),Ce=B.TEXTURE_2D_ARRAY):($.setTexture2D(O,0),Ce=B.TEXTURE_2D),v.activeTexture(B.TEXTURE0),v.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let un=v.getParameter(B.UNPACK_ROW_LENGTH),Et=v.getParameter(B.UNPACK_IMAGE_HEIGHT),En=v.getParameter(B.UNPACK_SKIP_PIXELS),On=v.getParameter(B.UNPACK_SKIP_ROWS),mn=v.getParameter(B.UNPACK_SKIP_IMAGES);v.pixelStorei(B.UNPACK_ROW_LENGTH,Bt.width),v.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Bt.height),v.pixelStorei(B.UNPACK_SKIP_PIXELS,ke),v.pixelStorei(B.UNPACK_SKIP_ROWS,ut),v.pixelStorei(B.UNPACK_SKIP_IMAGES,ft);let _i=b.isDataArrayTexture||b.isData3DTexture,Nt=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let zt=q.get(b),Zn=q.get(O),Lt=q.get(zt.__renderTarget),Bn=q.get(Zn.__renderTarget);v.bindFramebuffer(B.READ_FRAMEBUFFER,Lt.__webglFramebuffer),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let ai=0;ai<Fe;ai++)_i&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(b).__webglTexture,V,ft+ai),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(O).__webglTexture,Ee,Yt+ai)),B.blitFramebuffer(ke,ut,Ne,Me,Oe,Ct,Ne,Me,B.DEPTH_BUFFER_BIT,B.NEAREST);v.bindFramebuffer(B.READ_FRAMEBUFFER,null),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||q.has(b)){let zt=q.get(b),Zn=q.get(O);v.bindFramebuffer(B.READ_FRAMEBUFFER,U),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,X);for(let Lt=0;Lt<Fe;Lt++)_i?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,zt.__webglTexture,V,ft+Lt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,zt.__webglTexture,V),Nt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zn.__webglTexture,Ee,Yt+Lt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Zn.__webglTexture,Ee),V!==0?B.blitFramebuffer(ke,ut,Ne,Me,Oe,Ct,Ne,Me,B.COLOR_BUFFER_BIT,B.NEAREST):Nt?B.copyTexSubImage3D(Ce,Ee,Oe,Ct,Yt+Lt,ke,ut,Ne,Me):B.copyTexSubImage2D(Ce,Ee,Oe,Ct,ke,ut,Ne,Me);v.bindFramebuffer(B.READ_FRAMEBUFFER,null),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Nt?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Ce,Ee,Oe,Ct,Yt,Ne,Me,Fe,Dt,kt,Bt.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(Ce,Ee,Oe,Ct,Yt,Ne,Me,Fe,Dt,Bt.data):B.texSubImage3D(Ce,Ee,Oe,Ct,Yt,Ne,Me,Fe,Dt,kt,Bt):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ee,Oe,Ct,Ne,Me,Dt,kt,Bt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ee,Oe,Ct,Bt.width,Bt.height,Dt,Bt.data):B.texSubImage2D(B.TEXTURE_2D,Ee,Oe,Ct,Ne,Me,Dt,kt,Bt);v.pixelStorei(B.UNPACK_ROW_LENGTH,un),v.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et),v.pixelStorei(B.UNPACK_SKIP_PIXELS,En),v.pixelStorei(B.UNPACK_SKIP_ROWS,On),v.pixelStorei(B.UNPACK_SKIP_IMAGES,mn),Ee===0&&O.generateMipmaps&&B.generateMipmap(Ce),v.unbindTexture()},this.initRenderTarget=function(b){q.get(b).__webglFramebuffer===void 0&&$.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){K=0,J=0,ne=null,v.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var ur={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ay=new Xi(-1,1,1,-1,0,1),Wu=class extends xt{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}},oy=new Wu,$i=class{constructor(e){this._mesh=new Ge(oy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ay)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var hr=class extends Ln{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pi.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $i(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ca=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},sc=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var dr=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Se);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hr(ur),this.copyPass.material.blending=Vn,this.timer=new ra}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ca!==void 0&&(a instanceof Ca?n=!0:a instanceof sc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fr=class extends Ln{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var wf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ji=class i extends Ln{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new pe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,a,{type:pn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Qt(r,a,{type:pn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new Qt(r,a,{type:pn,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=wf;this.highPassUniforms=Pi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Se(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pi.clone(ur.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:ur.vertexShader,fragmentShader:ur.fragmentShader,premultipliedAlpha:!0,blending:ot,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pe,this._oldClearAlpha=1,this._basic=new St,this._fsQuad=new $i(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new vt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Se(.5,.5)},direction:{value:new Se(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ji.BlurDirectionX=new Se(1,0);ji.BlurDirectionY=new Se(0,1);var Ra={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var pr=class extends Ln{constructor(){super(),this.isOutputPass=!0,this.uniforms=Pi.clone(Ra.uniforms),this.material=new js({name:Ra.name,uniforms:this.uniforms,vertexShader:Ra.vertexShader,fragmentShader:Ra.fragmentShader}),this._fsQuad=new $i(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yt.getTransfer(this._outputColorSpace)===Rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ca?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ha?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ci?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===da&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var nn=[{id:"origin",no:"01",kicker:"PROLOGUE",cnKicker:"\u5E8F\u7AE0",short:"\u5FAE\u89C2\u5B87\u5B99",title:"\u7EC6\u80DE\uFF0C\u662F\u4E00\u4E2A\u5B87\u5B99",en:"THE CELL AS A MICROCOSM",body:"\u6B64\u523B\uFF0C\u4F60\u60AC\u505C\u5728\u4E00\u4E2A\u7EC6\u80DE\u7684\u8FB9\u754C\u4E4B\u5916\u3002\u5B83\u6CA1\u6709\u5927\u8111\uFF0C\u5374\u7EF4\u6301\u7740\u79E9\u5E8F\uFF1B\u6CA1\u6709\u56FE\u7EB8\uFF0C\u5374\u4E0D\u65AD\u91CD\u5EFA\u81EA\u5DF1\u3002\u63A5\u4E0B\u6765\u7684\u4E03\u5E55\uFF0C\u6211\u4EEC\u5C06\u7A7F\u8FC7\u5B83\u7684\u8D28\u819C\u3001\u9AA8\u67B6\u3001\u80FD\u91CF\u5DE5\u5382\u4E0E\u57FA\u56E0\u7EC4\u3002",facts:[{k:"\u4EBA\u4F53\u7EC6\u80DE",v:"\u7EA6 30 \u4E07\u4EBF"},{k:"\u5178\u578B\u76F4\u5F84",v:"10\u2013100 \xB5m"},{k:"\u9759\u606F\u819C\u7535\u4F4D",v:"\u221270 mV"}],readout:"WHOLE CELL / OPTICAL DARKFIELD",accent:"#7ff7e4",camera:{pos:[0,3,23.5],target:[0,.6,0],fov:42},duration:17e3,study:{textbook:{chapter:"\u7B2C\u4E00\u7AE0",title:"\u7EEA\u8BBA",pages:"1\u201317",sections:["\u7B2C\u4E00\u8282 \u7EC6\u80DE\u5B66\u4E0E\u7EC6\u80DE\u751F\u7269\u5B66","\u7B2C\u4E8C\u8282 \u7EC6\u80DE\u7684\u540C\u4E00\u6027\u4E0E\u591A\u6837\u6027"]},related:["\u7B2C\u4E8C\u7AE0 \u7EC6\u80DE\u751F\u7269\u5B66\u7814\u7A76\u65B9\u6CD5 \xB7 pp.18\u201339"],objectives:["\u7528\u7EC6\u80DE\u5B66\u8BF4\u89E3\u91CA\u201C\u7EC6\u80DE\u662F\u751F\u547D\u6D3B\u52A8\u7684\u57FA\u672C\u5355\u4F4D\u201D\u3002","\u4ECE\u6838\u819C\u3001\u7EC6\u80DE\u5668\u548C\u6838\u7CD6\u4F53\u7B49\u7ED3\u6784\u533A\u5206\u539F\u6838\u7EC6\u80DE\u4E0E\u771F\u6838\u7EC6\u80DE\u3002","\u4E86\u89E3\u7EC6\u80DE\u751F\u7269\u5B66\u4ECE\u5F62\u6001\u63CF\u8FF0\u8D70\u5411\u5206\u5B50\u673A\u5236\u7684\u7814\u7A76\u8DEF\u5F84\u3002"],visuals:[{color:"#7ff7e4",label:"\u534A\u900F\u660E\u5916\u58F3 = \u7EC6\u80DE\u8D28\u819C"},{color:"#c58cff",label:"\u4E2D\u592E\u7D2B\u6838 = \u7EC6\u80DE\u6838"},{color:"#9df5c1",label:"\u9752\u7EFF\u4E1D\u7F51 = \u7EC6\u80DE\u9AA8\u67B6"},{color:"#ffc177",label:"\u91D1\u8272\u80F6\u56CA = \u7EBF\u7C92\u4F53"}],concepts:[{term:"\u7EC6\u80DE\u5B66\u8BF4",en:"cell theory",def:"1838\u20141839 \u5E74\u7531\u65BD\u83B1\u767B\u548C\u65BD\u4E07\u786E\u7ACB\uFF1A\u4E00\u5207\u751F\u7269\u90FD\u7531\u7EC6\u80DE\u6784\u6210\uFF0C\u7EC6\u80DE\u662F\u7ED3\u6784\u548C\u529F\u80FD\u7684\u57FA\u672C\u5355\u4F4D\uFF1B\u540E\u6765\u9B4F\u5C14\u8096\u8865\u5145\u201C\u7EC6\u80DE\u6765\u81EA\u7EC6\u80DE\u201D\u3002"},{term:"\u539F\u6838\u7EC6\u80DE",en:"prokaryotic cell",def:"\u6CA1\u6709\u6838\u819C\u5305\u56F4\u7684\u7EC6\u80DE\u6838\uFF0CDNA \u96C6\u4E2D\u5728\u62DF\u6838\u533A\uFF1B\u7F3A\u5C11\u819C\u6027\u7EC6\u80DE\u5668\uFF0C\u6838\u7CD6\u4F53\u4E3A 70S\uFF0C\u4EE3\u8868\u4E3A\u7EC6\u83CC\u548C\u53E4\u83CC\u3002"},{term:"\u771F\u6838\u7EC6\u80DE",en:"eukaryotic cell",def:"\u5177\u6709\u6838\u819C\u3001\u771F\u6B63\u7684\u7EC6\u80DE\u6838\u548C\u591A\u79CD\u819C\u6027\u7EC6\u80DE\u5668\uFF1B\u6709\u7EC6\u80DE\u9AA8\u67B6\uFF0C\u6838\u7CD6\u4F53\u4E3A 80S\u3002"},{term:"\u7EC6\u80DE\u751F\u7269\u5B66",en:"cell biology",def:"\u5E94\u7528\u73B0\u4EE3\u7269\u7406\u3001\u5316\u5B66\u548C\u5206\u5B50\u751F\u7269\u5B66\u65B9\u6CD5\uFF0C\u5728\u7EC6\u80DE\u6C34\u5E73\u7814\u7A76\u751F\u547D\u6D3B\u52A8\u7684\u5B66\u79D1\uFF1B\u6838\u5FC3\u95EE\u9898\u662F\u7ED3\u6784\u5982\u4F55\u6267\u884C\u529F\u80FD\u3002"},{term:"\u6A21\u5F0F\u751F\u7269",en:"model organism",def:"\u56E0\u7E41\u6B96\u5FEB\u3001\u9057\u4F20\u64CD\u4F5C\u6210\u719F\u800C\u7528\u4E8E\u63ED\u793A\u4FDD\u5B88\u673A\u5236\u7684\u6750\u6599\uFF0C\u5982\u5927\u80A0\u6746\u83CC\u3001\u9175\u6BCD\u3001\u7EBF\u866B\u3001\u679C\u8747\u3001\u62DF\u5357\u82A5\u548C\u5C0F\u9F20\u3002"}],mechanism:["\u7EC6\u80DE\u5B66\u8BF4\u3001\u8FDB\u5316\u8BBA\u548C\u9057\u4F20\u5B66\u5171\u540C\u6784\u6210\u73B0\u4EE3\u751F\u7269\u5B66\u7684\u4E09\u5927\u57FA\u77F3\uFF1B\u7EC6\u80DE\u5B66\u8BF4\u628A\u5B8F\u89C2\u751F\u547D\u73B0\u8C61\u843D\u5230\u53EF\u89C2\u5BDF\u7684\u5355\u4F4D\u4E0A\u3002","\u539F\u6838\u4E0E\u771F\u6838\u7684\u5206\u754C\u4E0D\u53EA\u662F\u201C\u6709\u65E0\u7EC6\u80DE\u6838\u201D\uFF0C\u8FD8\u5305\u62EC\u5185\u819C\u7CFB\u7EDF\u3001\u7EC6\u80DE\u9AA8\u67B6\u548C\u6838\u7CD6\u4F53\u7C7B\u578B\u7684\u6574\u4F53\u5DEE\u5F02\u3002","\u73B0\u4EE3\u7EC6\u80DE\u751F\u7269\u5B66\u5E38\u6309\u201C\u89C2\u5BDF\u2014\u5206\u79BB\u2014\u5E72\u9884\u2014\u91CD\u5EFA\u201D\u63A8\u8FDB\uFF1A\u663E\u5FAE\u6210\u50CF\u3001\u4E9A\u7EC6\u80DE\u5206\u79BB\u3001\u6D3B\u7EC6\u80DE\u8367\u5149\u548C\u9057\u4F20\u64CD\u4F5C\u4E92\u76F8\u9A8C\u8BC1\u3002"],pitfalls:["\u75C5\u6BD2\u6CA1\u6709\u7EC6\u80DE\u7ED3\u6784\uFF0C\u4E0D\u80FD\u72EC\u7ACB\u5B8C\u6210\u65B0\u9648\u4EE3\u8C22\uFF0C\u4E0D\u5C5E\u4E8E\u7EC6\u80DE\uFF1B\u5B83\u662F\u975E\u7EC6\u80DE\u5F62\u6001\u7684\u751F\u547D\u4F53\u3002","\u201C\u539F\u6838\u7EC6\u80DE\u6CA1\u6709\u7EC6\u80DE\u5668\u201D\u4E0D\u51C6\u786E\uFF1A\u5B83\u6709\u6838\u7CD6\u4F53\uFF0C\u90E8\u5206\u8FD8\u6709\u5185\u819C\u8936\u76B1\uFF0C\u53EA\u662F\u6CA1\u6709\u7531\u819C\u5305\u56F4\u7684\u7EC6\u80DE\u6838\u548C\u5178\u578B\u819C\u6027\u7EC6\u80DE\u5668\u3002"],quiz:[{q:"\u7EC6\u80DE\u5B66\u8BF4\u7684\u6838\u5FC3\u5185\u5BB9\u662F\u4EC0\u4E48\uFF1F\u5B83\u4E3A\u4EC0\u4E48\u662F\u751F\u7269\u5B66\u7684\u57FA\u7840\u7406\u8BBA\uFF1F",a:"\u6240\u6709\u751F\u7269\u7531\u7EC6\u80DE\u6784\u6210\uFF1B\u7EC6\u80DE\u662F\u7ED3\u6784\u548C\u529F\u80FD\u7684\u57FA\u672C\u5355\u4F4D\uFF1B\u7EC6\u80DE\u6765\u81EA\u5DF2\u5B58\u5728\u7684\u7EC6\u80DE\u3002\u5B83\u628A\u751F\u7269\u754C\u7684\u7EDF\u4E00\u6027\u5EFA\u7ACB\u5728\u53EF\u89C2\u5BDF\u7684\u5355\u4F4D\u4E0A\uFF0C\u5E76\u4E0E\u8FDB\u5316\u8BBA\u3001\u9057\u4F20\u5B66\u5171\u540C\u6784\u6210\u73B0\u4EE3\u751F\u7269\u5B66\u7684\u57FA\u7840\u3002"},{q:"\u5217\u51FA\u81F3\u5C11\u4E09\u9879\u539F\u6838\u7EC6\u80DE\u4E0E\u771F\u6838\u7EC6\u80DE\u7684\u7ED3\u6784\u5DEE\u5F02\u3002",a:"\u539F\u6838\u7EC6\u80DE\u65E0\u6838\u819C\u548C\u771F\u6B63\u7684\u7EC6\u80DE\u6838\uFF0CDNA \u4F4D\u4E8E\u62DF\u6838\uFF1B\u65E0\u5178\u578B\u819C\u6027\u7EC6\u80DE\u5668\uFF1B\u6838\u7CD6\u4F53\u4E3A 70S\u3002\u771F\u6838\u7EC6\u80DE\u6709\u6838\u819C\u3001\u7EC6\u80DE\u6838\u548C\u5185\u819C\u7CFB\u7EDF\uFF0C\u6838\u7CD6\u4F53\u4E3A 80S\uFF0C\u5E76\u6709\u7EC6\u80DE\u9AA8\u67B6\u3002"}]}},{id:"membrane",no:"02",kicker:"BOUNDARY",cnKicker:"\u8FB9\u754C",short:"\u6D41\u52A8\u7684\u8FB9\u754C",title:"\u8FB9\u754C\uFF0C\u4ECE\u672A\u9759\u6B62",en:"A LIQUID LANGUAGE OF SELF",body:"\u8FB9\u754C\u4E0D\u662F\u5899\uFF0C\u800C\u662F\u4E00\u5C42\u6301\u7EED\u91CD\u5199\u7684\u754C\u9762\u3002\u7EC6\u80DE\u8D28\u819C\u539A\u7EA6 7.5 nm\uFF0C\u5176\u4E2D\u758F\u6C34\u6838\u5FC3\u53EA\u6709\u7EA6 3.5 nm\uFF0C\u5374\u628A\u201C\u81EA\u6211\u201D\u4E0E\u201C\u4E16\u754C\u201D\u5206\u5F00\uFF1B\u819C\u86CB\u767D\u5728\u5176\u4E2D\u6F02\u79FB\u3001\u805A\u96C6\u3001\u5F00\u5408\uFF0C\u628A\u6BCF\u4E00\u6B21\u4EA4\u6362\u7FFB\u8BD1\u6210\u751F\u547D\u7684\u8BED\u8A00\u3002",facts:[{k:"\u7EC6\u80DE\u8D28\u819C\u539A\u5EA6",v:"\u2248 7.5 nm"},{k:"\u758F\u6C34\u6838\u5FC3",v:"\u2248 3.5 nm"},{k:"\u80C6\u56FA\u9187",v:"\u53CC\u5411\u8C03\u8282\u6D41\u52A8\u6027"}],readout:"SURFACE SECTION / 7.5 nm",accent:"#67e8f9",camera:{pos:[.6,2.9,12.6],target:[0,2.3,7.2],fov:44},duration:19e3,study:{textbook:{chapter:"\u7B2C\u4E09\u7AE0",title:"\u7EC6\u80DE\u8D28\u819C",pages:"40\u201355",sections:["\u7B2C\u4E00\u8282 \u7EC6\u80DE\u8D28\u819C\u7684\u7ED3\u6784\u6A21\u578B\u4E0E\u57FA\u672C\u6210\u5206","\u7B2C\u4E8C\u8282 \u7EC6\u80DE\u8D28\u819C\u7684\u57FA\u672C\u7279\u5F81\u4E0E\u529F\u80FD"]},related:["\u7B2C\u56DB\u7AE0 \u7269\u8D28\u7684\u8DE8\u819C\u8FD0\u8F93 \xB7 pp.56\u201373","\u7B2C\u5341\u4E00\u7AE0 \u7EC6\u80DE\u4FE1\u53F7\u8F6C\u5BFC \xB7 pp.224\u2013260"],objectives:["\u8BF4\u51FA\u6D41\u52A8\u9576\u5D4C\u6A21\u578B\u7684\u57FA\u672C\u5185\u5BB9\uFF0C\u5E76\u89E3\u91CA\u652F\u6301\u5B83\u7684\u5B9E\u9A8C\u8BC1\u636E\u3002","\u6BD4\u8F83\u819C\u8102\u3001\u819C\u86CB\u767D\u548C\u7CD6\u7C7B\u5728\u8D28\u819C\u4E2D\u7684\u4F4D\u7F6E\u4E0E\u529F\u80FD\u3002","\u7528\u6D41\u52A8\u6027\u3001\u4E0D\u5BF9\u79F0\u6027\u548C\u9009\u62E9\u900F\u8FC7\u6027\u89E3\u91CA\u8D28\u819C\u7684\u751F\u7406\u7279\u5F81\u3002","\u533A\u5206\u7B80\u5355\u6269\u6563\u3001\u534F\u52A9\u6269\u6563\u3001\u4E3B\u52A8\u8FD0\u8F93\u548C\u819C\u6CE1\u8FD0\u8F93\u3002"],visuals:[{color:"#67e8f9",label:"\u9752\u8272\u7EC6\u6746 = \u78F7\u8102\u758F\u6C34\u5C3E\u90E8"},{color:"#b7fff4",label:"\u4EAE\u70B9 = \u78F7\u8102\u6781\u6027\u5934\u90E8"},{color:"#ffcf87",label:"\u80F6\u56CA/\u73AF = \u819C\u86CB\u767D\u4E0E\u901A\u9053"},{color:"#ffb36b",label:"\u5916\u56F4\u6BDB\u523A = \u7CD6\u843C"}],concepts:[{term:"\u6D41\u52A8\u9576\u5D4C\u6A21\u578B",en:"fluid mosaic model",def:"1972 \u5E74 Singer \u4E0E Nicolson \u63D0\u51FA\uFF1A\u819C\u8102\u5F62\u6210\u6D41\u52A8\u7684\u53CC\u5206\u5B50\u5C42\uFF0C\u819C\u86CB\u767D\u4EE5\u9576\u5D4C\u6216\u8D2F\u7A7F\u7684\u65B9\u5F0F\u5206\u5E03\u5176\u4E2D\uFF0C\u819C\u662F\u4E0D\u5BF9\u79F0\u3001\u53EF\u6D41\u52A8\u7684\u4E8C\u7EF4\u6DB2\u4F53\u3002"},{term:"\u819C\u8102",en:"membrane lipid",def:"\u4EE5\u78F7\u8102\u4E3A\u4E3B\uFF0C\u8FD8\u5305\u62EC\u7CD6\u8102\u548C\u80C6\u56FA\u9187\uFF1B\u4EB2\u6C34\u5934\u90E8\u671D\u5411\u6C34\u76F8\uFF0C\u758F\u6C34\u5C3E\u90E8\u5411\u5185\uFF0C\u5F62\u6210\u53CC\u5206\u5B50\u5C42\u3002"},{term:"\u819C\u86CB\u767D",en:"membrane protein",def:"\u6574\u5408\u819C\u86CB\u767D\u8DE8\u8D8A\u6216\u5D4C\u5165\u8102\u53CC\u5C42\uFF0C\u5916\u5468\u819C\u86CB\u767D\u9644\u7740\u5728\u819C\u8868\u9762\uFF1B\u5B83\u4EEC\u627F\u62C5\u8FD0\u8F93\u3001\u53D7\u4F53\u3001\u9176\u548C\u7ED3\u6784\u8FDE\u63A5\u7B49\u529F\u80FD\u3002"},{term:"\u819C\u7684\u4E0D\u5BF9\u79F0\u6027",en:"membrane asymmetry",def:"\u8102\u8D28\u3001\u86CB\u767D\u8D28\u548C\u7CD6\u94FE\u5728\u819C\u4E24\u4FA7\u7684\u5206\u5E03\u4E0D\u540C\uFF1B\u7CD6\u94FE\u901A\u5E38\u4F4D\u4E8E\u7EC6\u80DE\u5916\u4FA7\uFF0C\u5F62\u6210\u7CD6\u843C\u3002"},{term:"\u819C\u7684\u6D41\u52A8\u6027",en:"membrane fluidity",def:"\u819C\u8102\u548C\u819C\u86CB\u767D\u5728\u4E8C\u7EF4\u5E73\u9762\u5185\u7684\u4FA7\u5411\u8FD0\u52A8\u3002\u8102\u80AA\u9178\u4E0D\u9971\u548C\u5EA6\u3001\u94FE\u957F\u3001\u6E29\u5EA6\u548C\u80C6\u56FA\u9187\u90FD\u4F1A\u5F71\u54CD\u6D41\u52A8\u6027\u3002"},{term:"\u819C\u8F6C\u8FD0\u86CB\u767D",en:"membrane transport protein",def:"\u5305\u62EC\u901A\u9053\u86CB\u767D\u548C\u8F7D\u4F53\u86CB\u767D\uFF1B\u901A\u9053\u5F62\u6210\u4EB2\u6C34\u5B54\u9053\uFF0C\u8F7D\u4F53\u901A\u8FC7\u6784\u8C61\u53D8\u5316\u8F6C\u8FD0\u7269\u8D28\uFF0C\u6CF5\u5219\u6D88\u8017 ATP \u9006\u68AF\u5EA6\u8FD0\u8F93\u3002"},{term:"\u819C\u7535\u4F4D",en:"membrane potential",def:"\u819C\u4E24\u4FA7\u7535\u8377\u5206\u5E03\u4E0D\u5747\u5F62\u6210\u7684\u7535\u4F4D\u5DEE\uFF1B\u7531\u79BB\u5B50\u68AF\u5EA6\u548C\u819C\u5BF9\u5404\u79BB\u5B50\u7684\u76F8\u5BF9\u901A\u900F\u6027\u5171\u540C\u51B3\u5B9A\uFF0C\u9759\u606F\u65F6\u5185\u8D1F\u5916\u6B63\u3002"}],mechanism:["1925 \u5E74 Gorter \u4E0E Grendel \u53D1\u73B0\u7EA2\u7EC6\u80DE\u819C\u8102\u94FA\u5C55\u9762\u79EF\u4E3A\u7EC6\u80DE\u8868\u9762\u79EF\u7684 2 \u500D\uFF0C\u63D0\u793A\u8102\u8D28\u4EE5\u53CC\u5206\u5B50\u5C42\u6392\u5217\uFF1B\u6B64\u540E\u5355\u4F4D\u819C\u6A21\u578B\u3001\u51B7\u51BB\u8680\u523B\u548C\u7EC6\u80DE\u878D\u5408\u5B9E\u9A8C\u9010\u6B65\u652F\u6301\u6D41\u52A8\u9576\u5D4C\u6A21\u578B\u3002","\u819C\u86CB\u767D\u7684\u6D41\u52A8\u6027\u53EF\u7528\u7EC6\u80DE\u878D\u5408\u5B9E\u9A8C\u8BC1\u660E\uFF1A\u7528\u4E0D\u540C\u8367\u5149\u6297\u4F53\u6807\u8BB0\u4E24\u79CD\u7EC6\u80DE\uFF0C\u878D\u5408\u540E 40 \u5206\u949F\u8367\u5149\u5728\u819C\u4E0A\u5747\u5300\u5206\u5E03\u3002\u7EC6\u80DE\u9AA8\u67B6\u548C\u819C\u9AA8\u67B6\u4F1A\u628A\u90E8\u5206\u819C\u86CB\u767D\u951A\u5B9A\u5728\u7279\u5B9A\u533A\u57DF\u3002","\u8DE8\u819C\u8FD0\u8F93\u5206\u4E09\u6761\u8DEF\u7EBF\uFF1A\u88AB\u52A8\u8FD0\u8F93\uFF08\u7B80\u5355\u6269\u6563\u3001\u534F\u52A9\u6269\u6563\uFF09\u987A\u7535\u5316\u5B66\u68AF\u5EA6\uFF1B\u4E3B\u52A8\u8FD0\u8F93\uFF08\u5982 Na\u207A/K\u207A-ATP \u9176\uFF09\u6D88\u8017 ATP \u9006\u68AF\u5EA6\uFF1B\u80DE\u541E\u4E0E\u80DE\u5410\u5B8C\u6210\u5927\u5206\u5B50\u548C\u9897\u7C92\u7684\u819C\u6CE1\u8FD0\u8F93\u3002","Na\u207A/K\u207A-ATP \u9176\u6BCF\u6C34\u89E3 1 \u5206\u5B50 ATP\uFF0C\u628A 3 \u4E2A Na\u207A \u6CF5\u51FA\u30012 \u4E2A K\u207A \u6CF5\u5165\uFF0C\u7EF4\u6301\u7EC6\u80DE\u5185\u9AD8 K\u207A\u3001\u7EC6\u80DE\u5916\u9AD8 Na\u207A\uFF0C\u5E76\u4E3A\u819C\u7535\u4F4D\u548C\u6B21\u7EA7\u4E3B\u52A8\u8FD0\u8F93\u63D0\u4F9B\u80FD\u91CF\u3002"],pitfalls:["\u8D28\u819C\u539A\u7EA6 7.5 nm\uFF0C\u4E0D\u662F 5 nm\uFF1B\u5176\u4E2D\u758F\u6C34\u6838\u5FC3\u7EA6 3.5 nm\uFF0C\u4E24\u4FA7\u7684\u6781\u6027\u5934\u90E8\u548C\u86CB\u767D\u5C42\u5171\u540C\u6784\u6210\u5B8C\u6574\u819C\u539A\u3002","\u901A\u9053\u86CB\u767D\u4E0D\u6D88\u8017 ATP\uFF0C\u8F7D\u4F53\u86CB\u767D\u65E2\u53EF\u80FD\u534F\u52A9\u6269\u6563\u4E5F\u53EF\u80FD\u4E3B\u52A8\u8FD0\u8F93\uFF1B\u5224\u65AD\u8FD0\u8F93\u65B9\u5F0F\u8981\u770B\u662F\u5426\u9006\u7535\u5316\u5B66\u68AF\u5EA6\u3001\u662F\u5426\u9700\u8981\u80FD\u91CF\u3002","\u819C\u86CB\u767D\u5E76\u975E\u90FD\u80FD\u81EA\u7531\u6269\u6563\uFF1A\u8BB8\u591A\u86CB\u767D\u53D7\u819C\u9AA8\u67B6\u3001\u7EC6\u80DE\u8FDE\u63A5\u6216\u8102\u7B4F\u9650\u5236\uFF0C\u8FD0\u52A8\u8303\u56F4\u660E\u663E\u5C0F\u4E8E\u4EBA\u5DE5\u8102\u53CC\u5C42\u3002"],quiz:[{q:"\u7EA2\u7EC6\u80DE\u819C\u8102\u94FA\u5C55\u9762\u79EF\u662F\u5B8C\u6574\u7EA2\u7EC6\u80DE\u8868\u9762\u79EF\u7684 2 \u500D\uFF0C\u8FD9\u4E00\u7ED3\u679C\u8BF4\u660E\u4E86\u4EC0\u4E48\uFF1F",a:"\u8BF4\u660E\u819C\u8102\u5728\u5929\u7136\u819C\u4E2D\u4EE5\u53CC\u5206\u5B50\u5C42\u5F62\u5F0F\u6392\u5217\uFF1A\u6BCF\u5C42\u8102\u8D28\u94FA\u5C55\u5F00\u6765\u7EA6\u4E3A\u539F\u7EC6\u80DE\u8868\u9762\u79EF\uFF0C\u4E24\u5C42\u76F8\u52A0\u5373 2 \u500D\u3002"},{q:"\u7528\u7EC6\u80DE\u878D\u5408\u5B9E\u9A8C\u5982\u4F55\u8BC1\u660E\u819C\u86CB\u767D\u5177\u6709\u6D41\u52A8\u6027\uFF1F",a:"\u7528\u4E0D\u540C\u989C\u8272\u8367\u5149\u6297\u4F53\u5206\u522B\u6807\u8BB0\u4E24\u79CD\u7EC6\u80DE\u7684\u819C\u86CB\u767D\uFF0C\u8BF1\u5BFC\u7EC6\u80DE\u878D\u5408\uFF1B\u77ED\u65F6\u95F4\u5185\u4E24\u79CD\u8367\u5149\u5728\u878D\u5408\u7EC6\u80DE\u8868\u9762\u6DF7\u5408\u5E76\u5747\u5300\u5206\u5E03\uFF0C\u8BF4\u660E\u819C\u86CB\u767D\u80FD\u5728\u819C\u5E73\u9762\u5185\u81EA\u7531\u6269\u6563\u3002"},{q:"Na\u207A/K\u207A-ATP \u9176\u7684\u5DE5\u4F5C\u65B9\u5F0F\u548C\u751F\u7406\u610F\u4E49\u662F\u4EC0\u4E48\uFF1F",a:"\u6BCF\u6C34\u89E3 1 \u4E2A ATP\uFF0C\u6CF5\u51FA 3 \u4E2A Na\u207A\u3001\u6CF5\u5165 2 \u4E2A K\u207A\uFF0C\u5EFA\u7ACB\u5E76\u7EF4\u6301\u7EC6\u80DE\u5185\u5916 Na\u207A\u3001K\u207A \u6D53\u5EA6\u5DEE\uFF0C\u7EF4\u6301\u819C\u7535\u4F4D\uFF0C\u5E76\u4E3A\u8461\u8404\u7CD6\u3001\u6C28\u57FA\u9178\u7B49\u6B21\u7EA7\u4E3B\u52A8\u8FD0\u8F93\u63D0\u4F9B\u9A71\u52A8\u529B\u3002"}]}},{id:"cytoskeleton",no:"03",kicker:"TENSEGRITY",cnKicker:"\u5F20\u529B",short:"\u7EC6\u80DE\u9AA8\u67B6",title:"\u6CA1\u6709\u9AA8\u9ABC\uFF0C\u5374\u6709\u5F20\u529B",en:"A CONTINUOUSLY REWRITTEN SCAFFOLD",body:"\u7EC6\u80DE\u6CA1\u6709\u9AA8\u9ABC\uFF0C\u5374\u62E5\u6709\u5F20\u529B\u3002\u5FAE\u4E1D\u3001\u5FAE\u7BA1\u4E0E\u4E2D\u95F4\u4E1D\u7EC4\u6210\u4E00\u5F20\u4E0D\u65AD\u91CD\u5851\u7684\u7F51\uFF1B\u5206\u5B50\u9A6C\u8FBE\u6CBF\u8F68\u9053\u884C\u8D70\uFF0C\u628A\u7269\u8D28\u3001\u4FE1\u53F7\u4E0E\u529B\uFF0C\u4E00\u8D77\u642C\u8FD0\u5230\u9700\u8981\u7684\u5730\u65B9\u3002",facts:[{k:"\u5FAE\u4E1D",v:"\u2248 7 nm"},{k:"\u5FAE\u7BA1\u5916\u5F84",v:"\u2248 24 nm"},{k:"\u4E2D\u95F4\u4E1D",v:"\u2248 10 nm"}],readout:"CYTOSOL / FIBER TRACT",accent:"#9df5c1",camera:{pos:[3,1.2,5.7],target:[.3,.6,.4],fov:50},duration:18e3,study:{textbook:{chapter:"\u7B2C\u516B\u7AE0",title:"\u7EC6\u80DE\u9AA8\u67B6",pages:"144\u2013176",sections:["\u7B2C\u4E00\u8282 \u5FAE\u4E1D\u4E0E\u7EC6\u80DE\u8FD0\u52A8","\u7B2C\u4E8C\u8282 \u5FAE\u7BA1\u53CA\u5176\u529F\u80FD","\u7B2C\u4E09\u8282 \u4E2D\u95F4\u4E1D"]},related:["\u7B2C\u5341\u4E8C\u7AE0 \u7EC6\u80DE\u5468\u671F\u4E0E\u7EC6\u80DE\u5206\u88C2 \xB7 pp.261\u2013285\uFF08\u7EBA\u9524\u4F53\u4E0E\u67D3\u8272\u4F53\u8FD0\u52A8\uFF09"],objectives:["\u6BD4\u8F83\u5FAE\u4E1D\u3001\u5FAE\u7BA1\u548C\u4E2D\u95F4\u4E1D\u7684\u7EC4\u6210\u3001\u76F4\u5F84\u3001\u6781\u6027\u4E0E\u7EC4\u88C5\u65B9\u5F0F\u3002","\u89E3\u91CA\u8E0F\u8F66\u884C\u4E3A\u3001\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027\u548C\u5206\u5B50\u9A6C\u8FBE\u7684\u65B9\u5411\u6027\u3002","\u628A\u7EC6\u80DE\u9AA8\u67B6\u4E0E\u7EC6\u80DE\u5F62\u6001\u3001\u8FD0\u52A8\u3001\u7269\u8D28\u8FD0\u8F93\u548C\u5206\u88C2\u8054\u7CFB\u8D77\u6765\u3002"],visuals:[{color:"#9df5c1",label:"\u9752\u7EFF\u7EC6\u7EBF = \u5FAE\u4E1D\uFF08\u808C\u52A8\u86CB\u767D\u4E1D\uFF09"},{color:"#67e8f9",label:"\u4EAE\u9752\u7EC6\u7BA1 = \u5FAE\u7BA1"},{color:"#b7a3ff",label:"\u7D2B\u8272\u7C97\u7F06 = \u4E2D\u95F4\u4E1D"},{color:"#f2ffd0",label:"\u79FB\u52A8\u5149\u70B9 = \u5206\u5B50\u9A6C\u8FBE"}],concepts:[{term:"\u5FAE\u4E1D",en:"microfilament / actin filament",def:"\u7531\u808C\u52A8\u86CB\u767D\u4E9A\u57FA\u7EC4\u6210\u7684\u76F4\u5F84\u7EA6 7 nm \u7684\u87BA\u65CB\u7EA4\u7EF4\uFF1B\u6709\u6781\u6027\uFF0C\u53C2\u4E0E\u7EC6\u80DE\u5F62\u6001\u3001\u8FD0\u52A8\u3001\u6536\u7F29\u73AF\u548C\u5FAE\u7ED2\u6BDB\u3002"},{term:"\u5FAE\u7BA1",en:"microtubule",def:"\u7531 \u03B1/\u03B2 \u5FAE\u7BA1\u86CB\u767D\u4E8C\u805A\u4F53\u7EC4\u6210\u7684\u76F4\u5F84\u7EA6 24 nm \u7684\u4E2D\u7A7A\u7BA1\uFF1B\u6709\u6781\u6027\uFF0C\u53C2\u4E0E\u7269\u8D28\u8FD0\u8F93\u3001\u7EA4\u6BDB\u8FD0\u52A8\u548C\u7EBA\u9524\u4F53\u3002"},{term:"\u4E2D\u95F4\u4E1D",en:"intermediate filament",def:"\u76F4\u5F84\u7EA6 10 nm \u7684\u7EF3\u7D22\u72B6\u7EA4\u7EF4\uFF0C\u7531\u89D2\u86CB\u767D\u3001\u6CE2\u5F62\u86CB\u767D\u3001\u5C42\u7C98\u8FDE\u86CB\u767D\u7B49\u7EC4\u6210\uFF1B\u65E0\u6781\u6027\u3001\u6297\u62C9\u529B\uFF0C\u4E3B\u8981\u627F\u62C5\u673A\u68B0\u652F\u6491\u3002"},{term:"\u8E0F\u8F66\u884C\u4E3A",en:"treadmilling",def:"\u808C\u52A8\u86CB\u767D\u5728\u5FAE\u4E1D\u6B63\u6781\u805A\u5408\u3001\u5728\u8D1F\u6781\u89E3\u805A\uFF0C\u4F7F\u7EA4\u7EF4\u957F\u5EA6\u57FA\u672C\u4E0D\u53D8\u800C\u4E9A\u57FA\u6301\u7EED\u6D41\u52A8\u7684\u73B0\u8C61\u3002"},{term:"\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027",en:"dynamic instability",def:"\u5FAE\u7BA1\u6B63\u6781\u5728\u751F\u957F\u4E0E\u5FEB\u901F\u89E3\u805A\u4E4B\u95F4\u968F\u673A\u5207\u6362\uFF1BGTP \u5E3D\u7684\u5B58\u5728\u4FC3\u8FDB\u751F\u957F\uFF0CGTP \u6C34\u89E3\u540E\u5FAE\u7BA1\u5BB9\u6613 catastrophe\u3002"},{term:"\u5206\u5B50\u9A6C\u8FBE",en:"molecular motor",def:"\u628A ATP \u6C34\u89E3\u7684\u5316\u5B66\u80FD\u8F6C\u5316\u4E3A\u673A\u68B0\u8FD0\u52A8\u7684\u86CB\u767D\uFF1B\u808C\u7403\u86CB\u767D\u6CBF\u5FAE\u4E1D\u8FD0\u52A8\uFF0C\u9A71\u52A8\u86CB\u767D\u5411\u5FAE\u7BA1\u6B63\u6781\u3001\u52A8\u529B\u86CB\u767D\u5411\u8D1F\u6781\u8FD0\u52A8\u3002"},{term:"\u4E2D\u5FC3\u4F53",en:"centrosome",def:"\u7531\u4E00\u5BF9\u4E2D\u5FC3\u7C92\u548C\u5468\u56F4\u57FA\u8D28\u7EC4\u6210\uFF0C\u662F\u52A8\u7269\u7EC6\u80DE\u7684\u5FAE\u7BA1\u7EC4\u7EC7\u4E2D\u5FC3\uFF08MTOC\uFF09\uFF1B\u03B3-\u5FAE\u7BA1\u86CB\u767D\u53C2\u4E0E\u5FAE\u7BA1\u6210\u6838\u3002"}],mechanism:["\u5FAE\u4E1D\u7EC4\u88C5\u6709\u6781\u6027\uFF1AATP-\u808C\u52A8\u86CB\u767D\u4E3B\u8981\u5728\u6B63\u6781\u52A0\u5165\uFF0C\u8D1F\u6781\u89E3\u805A\uFF1B\u8E0F\u8F66\u884C\u4E3A\u4F7F\u5FAE\u4E1D\u80FD\u5728\u4FDD\u6301\u957F\u5EA6\u7684\u540C\u65F6\u5FEB\u901F\u66F4\u65B0\u3002\u808C\u7403\u86CB\u767D II \u4E0E\u5FAE\u4E1D\u5F62\u6210\u6536\u7F29\u7CFB\u7EDF\uFF0C\u53C2\u4E0E\u5E94\u529B\u7EA4\u7EF4\u548C\u80DE\u8D28\u5206\u88C2\u3002","\u5FAE\u7BA1\u7531 13 \u6761\u539F\u7EA4\u7EF4\u56F4\u6210\u7BA1\u58C1\uFF1B\u4E2D\u5FC3\u4F53\u4E0A\u7684 \u03B3-\u5FAE\u7BA1\u86CB\u767D\u73AF\u590D\u5408\u7269\u542F\u52A8\u6210\u6838\u3002\u5FAE\u7BA1\u6B63\u6781\u5411\u5916\u5EF6\u4F38\uFF0C\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027\u4F7F\u5176\u80FD\u5FEB\u901F\u641C\u7D22\u7A7A\u95F4\u3002","\u5206\u5B50\u9A6C\u8FBE\u5177\u6709\u65B9\u5411\u6027\uFF1A\u5927\u591A\u6570\u9A71\u52A8\u86CB\u767D\u5411\u5FAE\u7BA1\u6B63\u6781\u79FB\u52A8\uFF0C\u52A8\u529B\u86CB\u767D\u5411\u8D1F\u6781\u79FB\u52A8\uFF1B\u808C\u7403\u86CB\u767D\u6CBF\u5FAE\u4E1D\u8FD0\u52A8\u3002\u7EBA\u9524\u4F53\u540E\u671F B \u4F9D\u8D56 kinesin-5 \u5728\u53CD\u5411\u5E73\u884C\u6781\u5FAE\u7BA1\u4E0A\u6ED1\u52A8\uFF0C\u628A\u4E24\u6781\u63A8\u5F00\u3002","\u4E2D\u95F4\u4E1D\u4E0D\u4F9D\u8D56\u9A6C\u8FBE\uFF0C\u4E5F\u6CA1\u6709\u660E\u663E\u6781\u6027\uFF1B\u5B83\u4EEC\u901A\u8FC7\u6A2A\u5411\u4EA4\u8054\u548C\u7EC6\u80DE\u8FDE\u63A5\u628A\u76F8\u90BB\u7EC6\u80DE\u3001\u7EC6\u80DE\u6838\u548C\u80DE\u5916\u57FA\u8D28\u8FDE\u6210\u673A\u68B0\u7F51\u7EDC\u3002"],pitfalls:["\u4E09\u7C7B\u9AA8\u67B6\u90FD\u6709\u6781\u6027\uFF1F\u9519\u8BEF\u3002\u5FAE\u4E1D\u548C\u5FAE\u7BA1\u6709\u6781\u6027\uFF0C\u4E2D\u95F4\u4E1D\u6CA1\u6709\u6781\u6027\uFF0C\u4E5F\u4E0D\u4F5C\u4E3A\u5206\u5B50\u9A6C\u8FBE\u7684\u8F68\u9053\u3002","\u5FAE\u4E1D\u6B63\u6781\u901A\u5E38\u9760\u8FD1\u7EC6\u80DE\u819C\uFF1B\u5FAE\u7BA1\u6B63\u6781\u901A\u5E38\u80CC\u79BB\u4E2D\u5FC3\u4F53\u3002\u5224\u65AD\u9A71\u52A8\u86CB\u767D/\u52A8\u529B\u86CB\u767D\u65B9\u5411\u65F6\u8981\u5148\u786E\u5B9A\u7EA4\u7EF4\u6781\u6027\u3002","\u7D2B\u6749\u9187\u7A33\u5B9A\u5FAE\u7BA1\u3001\u6291\u5236\u89E3\u805A\uFF0C\u4F7F\u7EC6\u80DE\u505C\u6EDE\u5728 M \u671F\uFF1B\u79CB\u6C34\u4ED9\u7D20\u5219\u6291\u5236\u5FAE\u7BA1\u805A\u5408\u3002\u4E24\u8005\u90FD\u4F1A\u5E72\u6270\u7EBA\u9524\u4F53\uFF0C\u4F46\u4E0D\u662F\u540C\u4E00\u673A\u5236\u3002"],quiz:[{q:"\u5FAE\u4E1D\u3001\u5FAE\u7BA1\u548C\u4E2D\u95F4\u4E1D\u5728\u76F4\u5F84\u3001\u6781\u6027\u548C\u4E3B\u8981\u529F\u80FD\u4E0A\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F",a:"\u5FAE\u4E1D\u7EA6 7 nm\u3001\u6709\u6781\u6027\uFF0C\u4E3B\u8981\u7531\u808C\u52A8\u86CB\u767D\u7EC4\u6210\uFF0C\u53C2\u4E0E\u8FD0\u52A8\u4E0E\u6536\u7F29\uFF1B\u5FAE\u7BA1\u7EA6 24 nm\u3001\u6709\u6781\u6027\uFF0C\u53C2\u4E0E\u8FD0\u8F93\u548C\u7EBA\u9524\u4F53\uFF1B\u4E2D\u95F4\u4E1D\u7EA6 10 nm\u3001\u65E0\u6781\u6027\uFF0C\u4E3B\u8981\u63D0\u4F9B\u673A\u68B0\u652F\u6491\u3002"},{q:"\u4E3A\u4EC0\u4E48\u8BF4\u5FAE\u7BA1\u5177\u6709\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027\uFF1F\u5B83\u5728\u6709\u4E1D\u5206\u88C2\u4E2D\u6709\u4EC0\u4E48\u610F\u4E49\uFF1F",a:"\u5FAE\u7BA1\u6B63\u6781\u53EF\u5728\u751F\u957F\u4E0E\u5FEB\u901F\u89E3\u805A\u4E4B\u95F4\u5207\u6362\uFF0C\u53D7 GTP \u5E3D\u8C03\u63A7\u3002\u8FD9\u79CD\u5FEB\u901F\u641C\u7D22\u4F7F\u7EBA\u9524\u4F53\u5FAE\u7BA1\u80FD\u6355\u6349\u52A8\u7C92\uFF0C\u5E76\u5728\u5206\u88C2\u4E0D\u540C\u9636\u6BB5\u8FC5\u901F\u91CD\u7EC4\u3002"},{q:"\u9A71\u52A8\u86CB\u767D\u548C\u52A8\u529B\u86CB\u767D\u5206\u522B\u5411\u5FAE\u7BA1\u7684\u54EA\u4E00\u7AEF\u79FB\u52A8\uFF1F",a:"\u5927\u591A\u6570\u9A71\u52A8\u86CB\u767D\u5411\u5FAE\u7BA1\u6B63\u6781\uFF08\u5916\u5468\u65B9\u5411\uFF09\u79FB\u52A8\uFF1B\u52A8\u529B\u86CB\u767D\u5411\u5FAE\u7BA1\u8D1F\u6781\uFF08\u4E2D\u5FC3\u4F53\u65B9\u5411\uFF09\u79FB\u52A8\u3002"}]}},{id:"mitochondria",no:"04",kicker:"CHEMIOSMOSIS",cnKicker:"\u80FD\u91CF",short:"\u80FD\u91CF\u68AF\u5EA6",title:"\u80FD\u91CF\uFF0C\u4EE5\u68AF\u5EA6\u7684\u5F62\u5F0F\u5B58\u5728",en:"THE PROTON GRADIENT ENGINE",body:"\u80FD\u91CF\u5E76\u4E0D\u603B\u662F\u88AB\u50A8\u5B58\u5728\u5206\u5B50\u91CC\uFF0C\u5B83\u4E5F\u53EF\u4EE5\u662F\u4E00\u9053\u68AF\u5EA6\u3002\u7EBF\u7C92\u4F53\u5185\u819C\u6298\u53E0\u6210\u5D74\uFF0C\u628A\u8D28\u5B50\u6CF5\u5230\u819C\u95F4\u9699\uFF1B\u8D28\u5B50\u987A\u68AF\u5EA6\u56DE\u6D41\uFF0C\u8F6C\u52A8 ATP \u5408\u9176\uFF0C\u50CF\u6C34\u8F6E\u673A\u4E00\u6837\u628A\u52BF\u80FD\u538B\u8FDB\u5316\u5B66\u952E\u3002",facts:[{k:"\u5185\u819C\u9762\u79EF",v:"\u2248 \u5916\u819C 5 \u500D"},{k:"\u5FC3\u78F7\u8102",v:"\u2248 \u5185\u819C\u78F7\u8102 20%"},{k:"ATP \u5408\u9176",v:"F\u2080F\u2081 \u65CB\u8F6C\u50AC\u5316"}],readout:"ORGANELLE CLUSTER / \u0394pH",accent:"#ffc177",camera:{pos:[7.4,2,8],target:[4.4,.2,2.4],fov:46},duration:19e3,study:{textbook:{chapter:"\u7B2C\u4E03\u7AE0",title:"\u7EBF\u7C92\u4F53\u548C\u53F6\u7EFF\u4F53",pages:"117\u2013143",sections:["\u7B2C\u4E00\u8282 \u7EBF\u7C92\u4F53\u4E0E\u6C27\u5316\u78F7\u9178\u5316","\u7B2C\u4E8C\u8282 \u53F6\u7EFF\u4F53\u4E0E\u5149\u5408\u4F5C\u7528","\u7B2C\u4E09\u8282 \u534A\u81EA\u4E3B\u6027\u53CA\u5176\u8D77\u6E90"]},related:["\u7B2C\u4E8C\u7AE0 \u7EC6\u80DE\u751F\u7269\u5B66\u7814\u7A76\u65B9\u6CD5 \xB7 pp.18\u201339\uFF08\u7EBF\u7C92\u4F53\u5206\u79BB\u4E0E\u547C\u5438\u6D4B\u5B9A\uFF09"],objectives:["\u753B\u51FA\u7EBF\u7C92\u4F53\u7684\u56DB\u4E2A\u533A\u5BA4\uFF0C\u8BF4\u660E\u5916\u819C\u3001\u5185\u819C\u3001\u819C\u95F4\u9699\u548C\u57FA\u8D28\u7684\u529F\u80FD\u5206\u5DE5\u3002","\u7528\u5316\u5B66\u6E17\u900F\u5047\u8BF4\u89E3\u91CA\u7535\u5B50\u4F20\u9012\u3001\u8D28\u5B50\u68AF\u5EA6\u548C ATP \u5408\u6210\u4E4B\u95F4\u7684\u8026\u5408\u3002","\u7406\u89E3\u7EBF\u7C92\u4F53\u534A\u81EA\u4E3B\u6027\u3001\u878D\u5408/\u5206\u88C2\u4EE5\u53CA\u6BCD\u7CFB\u9057\u4F20\u3002"],visuals:[{color:"#ffc177",label:"\u91D1\u8272\u80F6\u56CA = \u7EBF\u7C92\u4F53"},{color:"#ffe4a4",label:"\u5185\u90E8\u6761\u7EB9 = \u5185\u819C\u5D74"},{color:"#85fff2",label:"\u9752\u84DD\u7C92\u5B50 = \u819C\u95F4\u9699\u8D28\u5B50"},{color:"#ffbf6b",label:"\u91D1\u8272\u7206\u53D1 = ATP"}],concepts:[{term:"\u5916\u819C",en:"outer membrane",def:"\u5E73\u6ED1\u7684\u5355\u4F4D\u819C\uFF0C\u542B\u5B54\u86CB\u767D\uFF0C\u901A\u900F\u6027\u9AD8\uFF1B\u5C0F\u5206\u5B50\u548C\u4EE3\u8C22\u7269\u53EF\u8F83\u81EA\u7531\u901A\u8FC7\u3002"},{term:"\u5185\u819C\u4E0E\u5D74",en:"inner membrane / cristae",def:"\u86CB\u767D\u8D28/\u8102\u8D28\u6BD4\u9AD8\u3001\u5BCC\u542B\u5FC3\u78F7\u8102\u3001\u901A\u900F\u6027\u4F4E\uFF1B\u5411\u5185\u6298\u53E0\u6210\u5D74\uFF0C\u663E\u8457\u589E\u52A0\u6C27\u5316\u78F7\u9178\u5316\u7684\u53CD\u5E94\u9762\u79EF\u3002"},{term:"\u819C\u95F4\u9699",en:"intermembrane space",def:"\u5916\u819C\u4E0E\u5185\u819C\u4E4B\u95F4\u7684\u7A7A\u95F4\uFF0C\u5BBD\u7EA6 6\u20138 nm\uFF1B\u7535\u5B50\u4F20\u9012\u94FE\u6CF5\u51FA\u7684 H\u207A \u5728\u6B64\u79EF\u7D2F\uFF0C\u5F62\u6210\u8D28\u5B50\u68AF\u5EA6\u3002"},{term:"\u7EBF\u7C92\u4F53\u57FA\u8D28",en:"matrix",def:"\u542B\u4E09\u7FA7\u9178\u5FAA\u73AF\u9176\u3001\u8102\u80AA\u9178\u6C27\u5316\u9176\u3001\u7EBF\u7C92\u4F53 DNA\u3001RNA \u548C\u6838\u7CD6\u4F53\uFF1B\u662F\u7EBF\u7C92\u4F53\u57FA\u56E0\u8868\u8FBE\u548C\u591A\u79CD\u4EE3\u8C22\u7684\u53CD\u5E94\u573A\u6240\u3002"},{term:"\u7535\u5B50\u4F20\u9012\u94FE",en:"electron transport chain",def:"\u5185\u819C\u4E0A\u7684\u590D\u5408\u4F53 I\u2013IV \u5C06 NADH/FADH\u2082 \u7684\u7535\u5B50\u9010\u7EA7\u4F20\u9012\uFF0C\u5E76\u6CF5\u51FA H\u207A\uFF1BO\u2082 \u662F\u6700\u7EC8\u7535\u5B50\u53D7\u4F53\uFF0C\u751F\u6210 H\u2082O\u3002"},{term:"\u5316\u5B66\u6E17\u900F",en:"chemiosmosis",def:"\u7535\u5B50\u4F20\u9012\u5EFA\u7ACB\u7684\u8DE8\u5185\u819C H\u207A \u7535\u5316\u5B66\u68AF\u5EA6\u9A71\u52A8 ATP \u5408\u9176\u65CB\u8F6C\uFF0C\u4F7F ADP \u4E0E Pi \u5408\u6210 ATP\u3002"},{term:"\u7EBF\u7C92\u4F53DNA",en:"mtDNA",def:"\u73AF\u72B6\u53CC\u94FE DNA\uFF0C\u7F16\u7801\u90E8\u5206\u547C\u5438\u94FE\u86CB\u767D\u548C rRNA/tRNA\uFF1B\u590D\u5236\u4E0E\u8F6C\u5F55\u4F9D\u8D56\u6838\u57FA\u56E0\u4EA7\u7269\uFF0C\u5448\u6BCD\u7CFB\u9057\u4F20\u3002"}],mechanism:["\u7CD6\u9175\u89E3\u5728\u7EC6\u80DE\u8D28\u4E2D\u4EA7\u751F\u4E19\u916E\u9178\uFF1B\u4E19\u916E\u9178\u8FDB\u5165\u7EBF\u7C92\u4F53\u57FA\u8D28\uFF0C\u7ECF\u4E19\u916E\u9178\u8131\u6C22\u9176\u590D\u5408\u4F53\u8F6C\u4E3A\u4E59\u9170 CoA\uFF0C\u8FDB\u5165\u4E09\u7FA7\u9178\u5FAA\u73AF\uFF0C\u751F\u6210 NADH\u3001FADH\u2082 \u548C\u5C11\u91CF ATP/GTP\u3002","NADH \u548C FADH\u2082 \u628A\u7535\u5B50\u4EA4\u7ED9\u5185\u819C\u4E0A\u7684\u7535\u5B50\u4F20\u9012\u94FE\uFF1B\u590D\u5408\u4F53 I\u3001III\u3001IV \u5C06 H\u207A \u6CF5\u5230\u819C\u95F4\u9699\uFF0C\u5F62\u6210\u8DE8\u5185\u819C\u8D28\u5B50\u52A8\u529B\u52BF\u3002","H\u207A \u7ECF ATP \u5408\u9176 F\u2080 \u90E8\u5206\u56DE\u6D41\uFF0C\u9A71\u52A8 F\u2081 \u5934\u90E8\u65CB\u8F6C\uFF0C\u4F7F ADP + Pi \u2192 ATP\u3002\u82E5\u5185\u819C\u5BF9 H\u207A \u81EA\u7531\u901A\u900F\uFF0C\u68AF\u5EA6\u6D88\u5931\uFF0C\u6C27\u5316\u4E0E\u78F7\u9178\u5316\u89E3\u5076\u8054\u3002","\u5D74\u589E\u52A0\u5185\u819C\u9762\u79EF\uFF1B\u7EBF\u7C92\u4F53\u901A\u8FC7\u878D\u5408\u4E0E\u5206\u88C2\u7EF4\u6301\u7F51\u7EDC\uFF0C\u53D7\u635F\u7EBF\u7C92\u4F53\u53EF\u7ECF\u7EBF\u7C92\u4F53\u81EA\u566C\u6E05\u9664\u3002"],pitfalls:["\u4E09\u7FA7\u9178\u5FAA\u73AF\u5728\u7EBF\u7C92\u4F53\u57FA\u8D28\uFF0C\u7535\u5B50\u4F20\u9012\u94FE\u5728\u7EBF\u7C92\u4F53\u5185\u819C\uFF1B\u4E0D\u662F\u6240\u6709\u6709\u6C27\u547C\u5438\u6B65\u9AA4\u90FD\u5728\u57FA\u8D28\u5B8C\u6210\u3002","O\u2082 \u4E0D\u76F4\u63A5\u4E0E\u8461\u8404\u7CD6\u53CD\u5E94\uFF0C\u800C\u662F\u5728\u7535\u5B50\u4F20\u9012\u94FE\u672B\u7AEF\u63A5\u53D7\u7535\u5B50\u751F\u6210\u6C34\uFF1B\u7F3A\u6C27\u6216\u590D\u5408\u4F53 IV \u88AB\u6291\u5236\u65F6\uFF0C\u7535\u5B50\u4F20\u9012\u548C ATP \u5408\u6210\u90FD\u4F1A\u53D7\u963B\u3002","\u7EBF\u7C92\u4F53\u6709 DNA \u548C\u6838\u7CD6\u4F53\uFF0C\u4F46\u591A\u6570\u86CB\u767D\u7531\u6838\u57FA\u56E0\u7F16\u7801\u3001\u5728\u7EC6\u80DE\u8D28\u5408\u6210\u540E\u8FD0\u5165\uFF0C\u56E0\u6B64\u53EA\u662F\u201C\u534A\u81EA\u4E3B\u201D\u3002"],quiz:[{q:"\u4E3A\u4EC0\u4E48\u7EBF\u7C92\u4F53\u5185\u819C\u5FC5\u987B\u5BF9 H\u207A \u5177\u6709\u4F4E\u901A\u900F\u6027\uFF1F",a:"\u4F4E\u901A\u900F\u6027\u4F7F\u7535\u5B50\u4F20\u9012\u6CF5\u51FA\u7684 H\u207A \u80FD\u5728\u819C\u95F4\u9699\u79EF\u7D2F\uFF0C\u5EFA\u7ACB\u7535\u5316\u5B66\u68AF\u5EA6\uFF1BH\u207A \u53EA\u80FD\u7ECF ATP \u5408\u9176\u56DE\u6D41\uFF0C\u4ECE\u800C\u628A\u6C27\u5316\u91CA\u653E\u7684\u80FD\u91CF\u8026\u5408\u5230 ATP \u5408\u6210\u3002"},{q:"\u6C30\u5316\u7269\u6291\u5236\u7EC6\u80DE\u8272\u7D20 c \u6C27\u5316\u9176\uFF08\u590D\u5408\u4F53 IV\uFF09\u540E\uFF0CATP \u5408\u6210\u4E3A\u4EC0\u4E48\u505C\u6B62\uFF1F",a:"\u590D\u5408\u4F53 IV \u4E0D\u80FD\u628A\u7535\u5B50\u4F20\u7ED9 O\u2082\uFF0C\u7535\u5B50\u4F20\u9012\u94FE\u963B\u65AD\uFF0CH\u207A \u6CF5\u51FA\u505C\u6B62\uFF0C\u8D28\u5B50\u68AF\u5EA6\u9010\u6E10\u6D88\u5931\uFF0CATP \u5408\u9176\u5931\u53BB\u9A71\u52A8\u529B\u3002"},{q:"\u7EBF\u7C92\u4F53\u201C\u534A\u81EA\u4E3B\u6027\u201D\u7684\u542B\u4E49\u662F\u4EC0\u4E48\uFF1F",a:"\u7EBF\u7C92\u4F53\u62E5\u6709\u81EA\u5DF1\u7684\u73AF\u72B6 DNA\u3001\u6838\u7CD6\u4F53\u548C\u90E8\u5206\u57FA\u56E0\u8868\u8FBE\u7CFB\u7EDF\uFF0C\u80FD\u5408\u6210\u5C11\u6570\u86CB\u767D\uFF1B\u4F46\u7EDD\u5927\u591A\u6570\u7EBF\u7C92\u4F53\u86CB\u767D\u7531\u6838\u57FA\u56E0\u7F16\u7801\uFF0C\u56E0\u6B64\u5176\u9057\u4F20\u548C\u529F\u80FD\u53D7\u6838\u57FA\u56E0\u7EC4\u63A7\u5236\u3002"}]}},{id:"nucleus",no:"05",kicker:"GENOME",cnKicker:"\u9057\u4F20",short:"\u6838\u5185\u6697\u623F",title:"\u4E24\u7C73 DNA\uFF0C\u6298\u53E0\u6210\u6697\u623F",en:"THE GENOME, CONTINUOUSLY READ",body:"\u4E24\u7C73\u957F\u7684 DNA\uFF0C\u88AB\u6298\u53E0\u8FDB\u76F4\u5F84\u7EA6 5\u201310 \u5FAE\u7C73\u7684\u6697\u623F\u3002\u67D3\u8272\u8D28\u4E0D\u65AD\u6298\u53E0\u3001\u89E3\u5F00\uFF1B\u6838\u5B54\u50CF\u6D77\u5173\uFF0C\u628A RNA \u4E0E\u86CB\u767D\u7684\u901A\u884C\u63A7\u5236\u5728\u7EB3\u7C73\u5C3A\u5EA6\u3002\u8FD9\u91CC\u6CA1\u6709\u9759\u6B62\u7684\u56FE\u7EB8\uFF0C\u53EA\u6709\u6301\u7EED\u88AB\u8BFB\u53D6\u7684\u62D3\u6251\u3002",facts:[{k:"\u4EBA\u7C7B\u7EC6\u80DE DNA",v:"\u2248 2 m"},{k:"\u7EC6\u80DE\u6838\u76F4\u5F84",v:"5\u201310 \xB5m"},{k:"\u6838\u5B54\u590D\u5408\u4F53\u5916\u5F84",v:"\u2248 120 nm"}],readout:"NUCLEAR INTERIOR / 4Pi",accent:"#d9a8ff",camera:{pos:[2.2,1.4,8.2],target:[0,.2,0],fov:42},duration:19e3,study:{textbook:{chapter:"\u7B2C\u4E5D\u7AE0",title:"\u7EC6\u80DE\u6838\u4E0E\u67D3\u8272\u8D28",pages:"177\u2013212",sections:["\u7B2C\u4E00\u8282 \u6838\u88AB\u819C","\u7B2C\u4E8C\u8282 \u67D3\u8272\u8D28","\u7B2C\u4E09\u8282 \u67D3\u8272\u8D28\u590D\u5236\u4E0E\u8868\u8FBE","\u7B2C\u56DB\u8282 \u67D3\u8272\u4F53","\u7B2C\u4E94\u8282 \u6838\u4EC1\u4E0E\u6838\u4F53"]},related:["\u7B2C\u5341\u7AE0 \u6838\u7CD6\u4F53 \xB7 pp.213\u2013223","\u7B2C\u5341\u4E8C\u7AE0 \u7EC6\u80DE\u5468\u671F\u4E0E\u7EC6\u80DE\u5206\u88C2 \xB7 pp.261\u2013285"],objectives:["\u8BF4\u660E\u6838\u88AB\u819C\u3001\u6838\u5B54\u590D\u5408\u4F53\u548C\u6838\u7EA4\u5C42\u7684\u7ED3\u6784\u5173\u7CFB\u3002","\u4ECE DNA + \u7EC4\u86CB\u767D\u7684\u89D2\u5EA6\u89E3\u91CA\u6838\u5C0F\u4F53\u300130 nm \u7EA4\u7EF4\u548C\u67D3\u8272\u8D28\u9AD8\u7EA7\u7ED3\u6784\u3002","\u533A\u5206\u5E38\u67D3\u8272\u8D28\u4E0E\u5F02\u67D3\u8272\u8D28\uFF0C\u7406\u89E3\u6838\u4EC1\u5728\u6838\u7CD6\u4F53\u53D1\u751F\u4E2D\u7684\u4F5C\u7528\u3002"],visuals:[{color:"#c58cff",label:"\u7D2B\u8272\u7403\u4F53 = \u7EC6\u80DE\u6838"},{color:"#8ff5ff",label:"\u8868\u9762\u5706\u73AF = \u6838\u5B54\u590D\u5408\u4F53"},{color:"#ff9bdd",label:"\u7C89\u7D2B\u4E1D\u7EBF = \u67D3\u8272\u8D28"},{color:"#b04a78",label:"\u6697\u7EA2\u56E2\u5757 = \u6838\u4EC1"}],concepts:[{term:"\u6838\u88AB\u819C",en:"nuclear envelope",def:"\u7531\u5185\u819C\u548C\u5916\u819C\u7EC4\u6210\u7684\u53CC\u5C42\u819C\uFF0C\u5916\u819C\u4E0E\u5185\u8D28\u7F51\u76F8\u8FDE\uFF1B\u4E24\u5C42\u819C\u4E4B\u95F4\u7684\u7A7A\u95F4\u79F0\u6838\u5468\u95F4\u9699\u3002"},{term:"\u6838\u5B54\u590D\u5408\u4F53",en:"nuclear pore complex, NPC",def:"\u8DE8\u8D8A\u6838\u88AB\u819C\u7684\u5927\u578B\u86CB\u767D\u590D\u5408\u4F53\uFF0C\u5916\u5F84\u7EA6 120 nm\uFF1B\u5C0F\u5206\u5B50\u53EF\u6269\u6563\u901A\u8FC7\uFF0C\u5927\u5206\u5B50\u9700\u6838\u5B9A\u4F4D\u4FE1\u53F7\u7B49\u4ECB\u5BFC\u7684\u4E3B\u52A8\u8FD0\u8F93\u3002"},{term:"\u6838\u7EA4\u5C42",en:"nuclear lamina",def:"\u7D27\u8D34\u6838\u819C\u5185\u4FA7\u7684\u4E2D\u95F4\u4E1D\u7F51\u7EDC\uFF0C\u4E3B\u8981\u7531\u6838\u7EA4\u5C42\u86CB\u767D\uFF08lamin\uFF09\u7EC4\u6210\uFF0C\u652F\u6491\u6838\u819C\u5E76\u53C2\u4E0E\u67D3\u8272\u8D28\u5B9A\u4F4D\u3002"},{term:"\u67D3\u8272\u8D28",en:"chromatin",def:"DNA \u4E0E\u7EC4\u86CB\u767D\u3001\u975E\u7EC4\u86CB\u767D\u7EC4\u6210\u7684\u590D\u5408\u7269\uFF1B\u662F\u9057\u4F20\u4FE1\u606F\u7684\u50A8\u5B58\u5F62\u5F0F\uFF0C\u4E5F\u662F\u590D\u5236\u3001\u8F6C\u5F55\u548C\u4FEE\u590D\u7684\u6A21\u677F\u3002"},{term:"\u6838\u5C0F\u4F53",en:"nucleosome",def:"\u7531 H2A\u3001H2B\u3001H3\u3001H4 \u5404\u4E24\u5206\u5B50\u7EC4\u6210\u7684\u7EC4\u86CB\u767D\u516B\u805A\u4F53\uFF0C\u5916\u52A0\u7EA6 147 bp DNA \u7F20\u7ED5\u7EA6 1.75 \u5708\u5F62\u6210\uFF1B\u662F\u67D3\u8272\u8D28\u7684\u57FA\u672C\u7ED3\u6784\u5355\u4F4D\u3002"},{term:"\u5E38\u67D3\u8272\u8D28\u4E0E\u5F02\u67D3\u8272\u8D28",en:"euchromatin / heterochromatin",def:"\u5E38\u67D3\u8272\u8D28\u8F83\u677E\u6563\u3001\u8F6C\u5F55\u6D3B\u8DC3\uFF1B\u5F02\u67D3\u8272\u8D28\u8F83\u6D53\u7F29\u3001\u8F6C\u5F55\u53D7\u6291\u5236\uFF0C\u591A\u5206\u5E03\u5728\u6838\u819C\u5185\u4FA7\u3002"},{term:"\u6838\u4EC1",en:"nucleolus",def:"\u6838\u5185\u65E0\u819C\u5305\u56F4\u7684\u81F4\u5BC6\u7ED3\u6784\uFF0C\u662F rRNA \u57FA\u56E0\u8F6C\u5F55\u3001rRNA \u52A0\u5DE5\u548C\u6838\u7CD6\u4F53\u4E9A\u57FA\u7EC4\u88C5\u7684\u573A\u6240\u3002"}],mechanism:["\u6838\u88AB\u819C\u628A\u6838\u5185\u8F6C\u5F55\u4E0E\u7EC6\u80DE\u8D28\u7FFB\u8BD1\u5206\u9694\u5F00\uFF1B\u5916\u819C\u4E0E\u5185\u8D28\u7F51\u8FDE\u7EED\uFF0C\u6838\u5B54\u590D\u5408\u4F53\u662F\u6838\u8D28\u4EA4\u6362\u7684\u552F\u4E00\u901A\u9053\u3002\u6838\u7EA4\u5C42\u4F4D\u4E8E\u5185\u819C\u5185\u4FA7\uFF0C\u4E3A\u6838\u819C\u63D0\u4F9B\u673A\u68B0\u652F\u6491\u3002","\u6838\u5C0F\u4F53\u76D8\u7ED5\u5F62\u6210 11 nm \u7684\u201C\u4E32\u73E0\u201D\u7ED3\u6784\uFF0C\u518D\u6298\u53E0\u6210\u7EA6 30 nm \u7684\u87BA\u7EBF\u7BA1\uFF1B\u66F4\u9AD8\u5C42\u6B21\u7684\u73AF\u951A\u5B9A\u5728\u6838\u9AA8\u67B6\u4E0A\uFF0C\u5F62\u6210\u67D3\u8272\u8D28\u73AF\u3002","\u67D3\u8272\u8D28\u590D\u5236\u5728 S \u671F\u8FDB\u884C\uFF1B\u590D\u5236\u8D77\u70B9\u3001\u7740\u4E1D\u7C92\u548C\u7AEF\u7C92\u662F\u67D3\u8272\u4F53\u7684\u4E09\u4E2A\u529F\u80FD\u5143\u4EF6\u3002\u6709\u4E1D\u5206\u88C2\u65F6\u67D3\u8272\u8D28\u9AD8\u5EA6\u51DD\u7F29\u6210\u67D3\u8272\u4F53\uFF0C\u4FBF\u4E8E\u5206\u914D\u3002","\u6838\u4EC1\u7EC4\u7EC7\u533A\uFF08NOR\uFF09\u8F6C\u5F55 rRNA \u524D\u4F53\uFF0C\u52A0\u5DE5\u540E\u4E0E\u6838\u7CD6\u4F53\u86CB\u767D\u7EC4\u88C5\u6210\u6838\u7CD6\u4F53\u5927\u5C0F\u4E9A\u57FA\uFF0C\u518D\u7ECF\u6838\u5B54\u8F93\u51FA\u5230\u7EC6\u80DE\u8D28\u3002"],pitfalls:["\u6838\u5B54\u590D\u5408\u4F53\u5916\u5F84\u7EA6 120 nm\uFF0C\u4F46\u6709\u6548\u8FD0\u8F93\u901A\u9053\u8FDC\u5C0F\u4E8E\u6B64\uFF1B\u5C0F\u5206\u5B50\u53EF\u88AB\u52A8\u6269\u6563\uFF0C\u5927\u5206\u5B50\u9700\u8981\u4FE1\u53F7\u5E8F\u5217\u548C Ran-GTP \u53C2\u4E0E\u7684\u4E3B\u52A8\u8FD0\u8F93\u3002","\u67D3\u8272\u8D28\u4E0D\u7B49\u4E8E\u67D3\u8272\u4F53\uFF1A\u67D3\u8272\u8D28\u662F\u95F4\u671F DNA-\u86CB\u767D\u590D\u5408\u7269\u7684\u5B58\u5728\u5F62\u5F0F\uFF0C\u67D3\u8272\u4F53\u662F\u5206\u88C2\u671F\u9AD8\u5EA6\u51DD\u7F29\u7684\u5F62\u6001\uFF1B\u4E8C\u8005\u662F\u540C\u4E00\u7269\u8D28\u7684\u4E0D\u540C\u72B6\u6001\u3002","\u6838\u4EC1\u4E0D\u662F\u6709\u819C\u7EC6\u80DE\u5668\uFF0C\u4E5F\u4E0D\u7B49\u4E8E\u201C\u7EC6\u80DE\u6838\u201D\uFF1B\u5B83\u53EA\u662F\u6838\u5185\u4E00\u4E2A\u65E0\u819C\u7684\u533A\u57DF\uFF0C\u4E0E\u6838\u7CD6\u4F53\u53D1\u751F\u6709\u5173\u3002"],quiz:[{q:"\u6838\u5B54\u590D\u5408\u4F53\u5982\u4F55\u517C\u987E\u201C\u9009\u62E9\u6027\u201D\u548C\u201C\u9AD8\u901A\u91CF\u201D\u8FD0\u8F93\uFF1F",a:"\u5C0F\u5206\u5B50\u548C\u79BB\u5B50\u53EF\u7ECF\u5B54\u9053\u88AB\u52A8\u6269\u6563\uFF1B\u5927\u5206\u5B50\u4F9D\u8D56\u6838\u5B9A\u4F4D\u4FE1\u53F7/\u6838\u8F93\u51FA\u4FE1\u53F7\u4E0E\u8F6C\u8FD0\u53D7\u4F53\uFF0C\u5E76\u5728 Ran-GTP \u68AF\u5EA6\u4E0B\u5B8C\u6210\u5B9A\u5411\u8FD0\u8F93\uFF0C\u56E0\u6B64\u65E2\u80FD\u9AD8\u6548\u901A\u884C\uFF0C\u53C8\u80FD\u4E25\u683C\u7B5B\u9009\u3002"},{q:"\u6838\u5C0F\u4F53\u7684\u7EC4\u6210\u662F\u4EC0\u4E48\uFF1F\u5B83\u5982\u4F55\u5E2E\u52A9 DNA \u538B\u7F29\uFF1F",a:"\u7531 H2A\u3001H2B\u3001H3\u3001H4 \u5404\u4E24\u5206\u5B50\u7EC4\u6210\u7EC4\u86CB\u767D\u516B\u805A\u4F53\uFF0C\u7EA6 147 bp DNA \u7F20\u7ED5\u7EA6 1.75 \u5708\u3002\u6838\u5C0F\u4F53\u4E32\u73E0\u518D\u6298\u53E0\u4E3A 30 nm \u7EA4\u7EF4\uFF0C\u9010\u7EA7\u538B\u7F29 DNA\u3002"},{q:"\u5E38\u67D3\u8272\u8D28\u4E0E\u5F02\u67D3\u8272\u8D28\u5728\u7ED3\u6784\u548C\u529F\u80FD\u4E0A\u6709\u4F55\u533A\u522B\uFF1F",a:"\u5E38\u67D3\u8272\u8D28\u8F83\u677E\u6563\u3001\u67D3\u8272\u6D45\u3001\u8F6C\u5F55\u6D3B\u8DC3\uFF1B\u5F02\u67D3\u8272\u8D28\u9AD8\u5EA6\u6D53\u7F29\u3001\u67D3\u8272\u6DF1\u3001\u8F6C\u5F55\u53D7\u6291\u5236\uFF0C\u5E38\u5206\u5E03\u5728\u6838\u819C\u5185\u4FA7\u6216\u6838\u4EC1\u5468\u56F4\u3002"}]}},{id:"endomembrane",no:"06",kicker:"SECRETION",cnKicker:"\u5206\u6CCC",short:"\u5185\u819C\u6CB3\u6D41",title:"\u7269\u8D28\u6CBF\u7740\u819C\u6539\u5F62",en:"THE SECRETORY RIVER",body:"\u7269\u8D28\u6CBF\u7740\u819C\uFF0C\u6539\u5199\u81EA\u5DF1\u7684\u5F62\u72B6\u3002\u5185\u8D28\u7F51\u6298\u53E0\u86CB\u767D\uFF0C\u9AD8\u5C14\u57FA\u4F53\u4FEE\u526A\u5E76\u5206\u62E3\uFF0C\u56CA\u6CE1\u51FA\u82BD\u3001\u7A7F\u884C\u3001\u878D\u5408\u3002\u6BCF\u4E00\u6B21\u819C\u878D\u5408\uFF0C\u90FD\u662F\u4E00\u6B21\u7CBE\u786E\u7684\u6295\u9012\uFF0C\u4E5F\u662F\u4E00\u6B21\u8EAB\u4EFD\u7684\u4EA4\u6362\u3002",facts:[{k:"\u987A\u5411\u8FD0\u8F93",v:"COPII \xB7 ER\u2192Golgi"},{k:"\u9006\u5411\u8FD0\u8F93",v:"COPI \xB7 Golgi\u2192ER"},{k:"\u819C\u878D\u5408",v:"SNARE \u4ECB\u5BFC"}],readout:"SECRETORY ROUTE / LIVE",accent:"#ffb36b",camera:{pos:[-7.8,3,8.2],target:[-3.2,.2,1.2],fov:46},duration:19e3,study:{textbook:{chapter:"\u7B2C\u4E94\u7AE0",title:"\u7EC6\u80DE\u8D28\u57FA\u8D28\u4E0E\u5185\u819C\u7CFB\u7EDF",pages:"74\u201399",sections:["\u7B2C\u4E00\u8282 \u7EC6\u80DE\u8D28\u57FA\u8D28\u53CA\u5176\u529F\u80FD","\u7B2C\u4E8C\u8282 \u7EC6\u80DE\u5185\u819C\u7CFB\u7EDF\u53CA\u5176\u529F\u80FD"]},related:["\u7B2C\u516D\u7AE0 \u86CB\u767D\u8D28\u5206\u9009\u4E0E\u819C\u6CE1\u8FD0\u8F93 \xB7 pp.100\u2013116","\u7B2C\u5341\u7AE0 \u6838\u7CD6\u4F53 \xB7 pp.213\u2013223"],objectives:["\u8BF4\u660E\u5185\u8D28\u7F51\u3001\u9AD8\u5C14\u57FA\u4F53\u548C\u6EB6\u9176\u4F53\u7684\u7ED3\u6784\u5206\u5DE5\u3002","\u7528\u4FE1\u53F7\u80BD\u5047\u8BF4\u89E3\u91CA\u5206\u6CCC\u86CB\u767D\u5982\u4F55\u8FDB\u5165\u5185\u8D28\u7F51\u3002","\u533A\u5206 COPII\u3001COPI \u548C\u7F51\u683C\u86CB\u767D\u5305\u88AB\u819C\u6CE1\u7684\u8FD0\u8F93\u65B9\u5411\u3002","\u7406\u89E3 M6P \u5206\u9009\u548C SNARE \u878D\u5408\u5728\u86CB\u767D\u8D28\u6295\u9012\u4E2D\u7684\u4F5C\u7528\u3002"],visuals:[{color:"#ffc073",label:"\u7425\u73C0\u7BA1\u7F51 = \u5185\u8D28\u7F51"},{color:"#ffa252",label:"\u53E0\u5C42\u5F27 = \u9AD8\u5C14\u57FA\u4F53"},{color:"#ffcf87",label:"\u5C0F\u5149\u7403 = \u8FD0\u8F93\u56CA\u6CE1"},{color:"#d66572",label:"\u7EA2\u8272\u5C0F\u7403 = \u6EB6\u9176\u4F53"}],concepts:[{term:"\u5185\u819C\u7CFB\u7EDF",en:"endomembrane system",def:"\u7531\u5185\u8D28\u7F51\u3001\u9AD8\u5C14\u57FA\u4F53\u3001\u6EB6\u9176\u4F53\u3001\u5185\u4F53\u3001\u5206\u6CCC\u6CE1\u7B49\u819C\u6027\u7EC6\u80DE\u5668\u7EC4\u6210\u7684\u52A8\u6001\u7F51\u7EDC\uFF0C\u901A\u8FC7\u819C\u6CE1\u8FD0\u8F93\u4EA4\u6362\u7269\u8D28\u3002"},{term:"\u5185\u8D28\u7F51",en:"endoplasmic reticulum, ER",def:"\u7531\u7BA1\u72B6\u548C\u6241\u56CA\u72B6\u819C\u56F4\u6210\u7684\u8FDE\u7EED\u4E09\u7EF4\u7F51\u7EDC\uFF1B\u7C97\u9762 ER \u9644\u7740\u6838\u7CD6\u4F53\uFF0C\u8D1F\u8D23\u5206\u6CCC\u86CB\u767D\u548C\u819C\u86CB\u767D\u7684\u5408\u6210\u3001\u6298\u53E0\u4E0E\u7CD6\u57FA\u5316\uFF1B\u5149\u9762 ER \u53C2\u4E0E\u8102\u8D28\u5408\u6210\u548C\u89E3\u6BD2\u3002"},{term:"\u9AD8\u5C14\u57FA\u4F53",en:"Golgi apparatus",def:"\u7531\u987A\u9762\u3001\u4E2D\u95F4\u533A\u548C\u53CD\u9762\u6241\u56CA\u7EC4\u6210\u7684\u6781\u6027\u7EC6\u80DE\u5668\uFF1B\u5BF9\u86CB\u767D\u8D28\u8FDB\u884C\u7CD6\u57FA\u5316\u4FEE\u9970\u3001\u5206\u9009\u548C\u5305\u88C5\uFF0C\u5E76\u5408\u6210\u90E8\u5206\u591A\u7CD6\u3002"},{term:"\u6EB6\u9176\u4F53",en:"lysosome",def:"\u542B\u591A\u79CD\u9178\u6027\u6C34\u89E3\u9176\u7684\u819C\u6027\u7EC6\u80DE\u5668\uFF0CpH \u7EA6 4.5\u20135\uFF1B\u8D1F\u8D23\u964D\u89E3\u7EC6\u80DE\u5185\u541E\u7269\u3001\u8001\u65E7\u7EC6\u80DE\u5668\u548C\u751F\u7269\u5927\u5206\u5B50\u3002"},{term:"\u4FE1\u53F7\u80BD",en:"signal peptide",def:"\u5206\u6CCC\u86CB\u767D N \u7AEF\u7684\u4E00\u6BB5\u758F\u6C34\u5E8F\u5217\uFF0C\u88AB\u4FE1\u53F7\u8BC6\u522B\u9897\u7C92\uFF08SRP\uFF09\u8BC6\u522B\uFF0C\u5F15\u5BFC\u6838\u7CD6\u4F53\u590D\u5408\u4F53\u5230\u5185\u8D28\u7F51\uFF0C\u5B9E\u73B0\u5171\u7FFB\u8BD1\u8F6C\u8FD0\u3002"},{term:"COPII \u4E0E COPI",en:"COPII / COPI vesicles",def:"COPII \u5305\u88AB\u819C\u6CE1\u4ECB\u5BFC ER\u2192\u9AD8\u5C14\u57FA\u4F53\u7684\u987A\u5411\u8FD0\u8F93\uFF1BCOPI \u4ECB\u5BFC\u9AD8\u5C14\u57FA\u4F53\u2192ER \u7684\u9006\u5411\u8FD0\u8F93\uFF0C\u5E76\u56DE\u6536\u9003\u9038\u7684 ER \u9A7B\u7559\u86CB\u767D\u3002"},{term:"SNARE",en:"SNARE complex",def:"\u4ECB\u5BFC\u819C\u6CE1\u4E0E\u9776\u819C\u878D\u5408\u7684\u86CB\u767D\u5BB6\u65CF\uFF1Bv-SNARE \u4E0E t-SNARE \u5F62\u6210\u56DB\u87BA\u65CB\u675F\uFF0C\u62C9\u8FD1\u4E24\u5C42\u819C\u5E76\u89E6\u53D1\u878D\u5408\u3002"}],mechanism:["\u5206\u6CCC\u86CB\u767D N \u7AEF\u7684\u4FE1\u53F7\u80BD\u88AB SRP \u8BC6\u522B\uFF0C\u7FFB\u8BD1\u6682\u65F6\u505C\u987F\uFF1BSRP \u4E0E ER \u819C\u4E0A\u7684 SRP \u53D7\u4F53\u7ED3\u5408\uFF0C\u6838\u7CD6\u4F53\u505C\u9760\u5728\u6613\u4F4D\u5B50\uFF08translocon\uFF09\u4E0A\uFF0C\u80BD\u94FE\u8FB9\u5408\u6210\u8FB9\u8FDB\u5165 ER \u8154\u3002\u4FE1\u53F7\u80BD\u968F\u540E\u88AB\u4FE1\u53F7\u80BD\u9176\u5207\u9664\u3002","\u8FDB\u5165 ER \u7684\u86CB\u767D\u5728\u4F34\u4FA3\u86CB\u767D\u548C\u6298\u53E0\u9176\u5E2E\u52A9\u4E0B\u6298\u53E0\uFF0C\u5E76\u8FDB\u884C N-\u8FDE\u63A5\u7CD6\u57FA\u5316\uFF1B\u672A\u6B63\u786E\u6298\u53E0\u7684\u86CB\u767D\u7ECF ERAD \u9014\u5F84\u53CD\u5411\u8F6C\u8FD0\u5230\u7EC6\u80DE\u8D28\u964D\u89E3\u3002","COPII \u5728 ER \u51FA\u53E3\u4F4D\u70B9\u51FA\u82BD\uFF0C\u628A\u8D27\u7269\u8FD0\u5F80\u9AD8\u5C14\u57FA\u4F53\uFF1BCOPI \u4ECE\u9AD8\u5C14\u57FA\u4F53\u51FA\u82BD\uFF0C\u56DE\u6536 ER \u9A7B\u7559\u86CB\u767D\uFF08KDEL \u4FE1\u53F7\uFF09\u3002\u7F51\u683C\u86CB\u767D\u5305\u88AB\u819C\u6CE1\u53C2\u4E0E TGN\u2192\u5185\u4F53/\u6EB6\u9176\u4F53\u4EE5\u53CA\u5185\u541E\u3002","\u6EB6\u9176\u4F53\u6C34\u89E3\u9176\u5728\u987A\u9762\u9AD8\u5C14\u57FA\u4F53\u83B7\u5F97\u7518\u9732\u7CD6-6-\u78F7\u9178\uFF08M6P\uFF09\u6807\u8BB0\uFF0C\u88AB M6P \u53D7\u4F53\u8BC6\u522B\u5E76\u5206\u9009\u5230\u5185\u4F53\uFF0C\u6700\u7EC8\u5728\u9178\u6027\u73AF\u5883\u4E2D\u91CA\u653E\u3002Rab \u86CB\u767D\u548C SNARE \u4FDD\u8BC1\u819C\u6CE1\u5B9A\u5411\u505C\u9760\u4E0E\u878D\u5408\u3002"],pitfalls:["COPII \u662F ER\u2192Golgi \u7684\u987A\u5411\u8FD0\u8F93\uFF0CCOPI \u662F Golgi\u2192ER \u7684\u9006\u5411\u8FD0\u8F93\uFF1B\u65B9\u5411\u4E0D\u8981\u8BB0\u53CD\u3002","\u5206\u6CCC\u86CB\u767D\u8FDB\u5165 ER \u662F\u5171\u7FFB\u8BD1\u8F6C\u8FD0\uFF1B\u7EBF\u7C92\u4F53\u3001\u53F6\u7EFF\u4F53\u86CB\u767D\u591A\u4E3A\u7FFB\u8BD1\u5B8C\u6210\u540E\u8FDB\u884C\u540E\u7FFB\u8BD1\u8F6C\u8FD0\u3002","\u9AD8\u5C14\u57FA\u4F53\u4E0D\u53EA\u662F\u201C\u5305\u88C5\u8F66\u95F4\u201D\uFF0C\u5B83\u8FD8\u662F\u7CD6\u57FA\u5316\u4FEE\u9970\u3001\u86CB\u767D\u8D28\u5206\u9009\u548C\u6EB6\u9176\u4F53\u9176\u6807\u8BB0\u7684\u5173\u952E\u573A\u6240\u3002"],quiz:[{q:"\u4FE1\u53F7\u80BD\u5047\u8BF4\u7684\u6838\u5FC3\u5185\u5BB9\u662F\u4EC0\u4E48\uFF1F",a:"\u5206\u6CCC\u86CB\u767D N \u7AEF\u4FE1\u53F7\u80BD\u88AB SRP \u8BC6\u522B\uFF0CSRP-\u6838\u7CD6\u4F53\u590D\u5408\u4F53\u7ED3\u5408 ER \u819C\u4E0A\u7684 SRP \u53D7\u4F53\uFF0C\u4F7F\u65B0\u751F\u80BD\u94FE\u5728\u6613\u4F4D\u5B50\u5904\u8FDB\u5165 ER \u8154\uFF1B\u4FE1\u53F7\u80BD\u968F\u540E\u88AB\u5207\u9664\uFF0C\u86CB\u767D\u5728 ER \u8154\u4E2D\u6298\u53E0\u548C\u4FEE\u9970\u3002"},{q:"\u6EB6\u9176\u4F53\u6C34\u89E3\u9176\u5982\u4F55\u88AB\u51C6\u786E\u5206\u9009\u5230\u6EB6\u9176\u4F53\uFF1F",a:"\u5728\u987A\u9762\u9AD8\u5C14\u57FA\u4F53\uFF0C\u6C34\u89E3\u9176\u83B7\u5F97\u7518\u9732\u7CD6-6-\u78F7\u9178\uFF08M6P\uFF09\u6807\u8BB0\uFF1BM6P \u53D7\u4F53\u5728 TGN \u8BC6\u522B\u5E76\u5305\u88C5\u6210\u7F51\u683C\u86CB\u767D\u819C\u6CE1\uFF0C\u8FD0\u9001\u5230\u5185\u4F53\uFF0C\u9178\u6027\u73AF\u5883\u4F7F\u9176\u4E0E\u53D7\u4F53\u89E3\u79BB\u5E76\u8FDB\u5165\u6EB6\u9176\u4F53\u3002"},{q:"COPII \u548C COPI \u819C\u6CE1\u5206\u522B\u627F\u62C5\u4EC0\u4E48\u8FD0\u8F93\u65B9\u5411\uFF1F",a:"COPII \u4ECB\u5BFC ER\u2192\u9AD8\u5C14\u57FA\u4F53\u7684\u987A\u5411\u8FD0\u8F93\uFF1BCOPI \u4ECB\u5BFC\u9AD8\u5C14\u57FA\u4F53\u2192ER \u7684\u9006\u5411\u8FD0\u8F93\uFF0C\u56DE\u6536 ER \u9A7B\u7559\u86CB\u767D\u5E76\u7EF4\u6301\u819C\u6210\u5206\u5E73\u8861\u3002"}]}},{id:"mitosis",no:"07",kicker:"MITOSIS",cnKicker:"\u5206\u88C2",short:"\u4E00\u5206\u4E3A\u4E8C",title:"\u628A\u5B87\u5B99\u4EA4\u7ED9\u4E24\u4E2A\u672A\u6765",en:"ONE COSMOS, TWO FUTURES",body:"\u5206\u88C2\uFF0C\u662F\u628A\u540C\u4E00\u4E2A\u5B87\u5B99\u4EA4\u7ED9\u4E24\u4E2A\u672A\u6765\u3002\u67D3\u8272\u8D28\u51DD\u7F29\u6210\u67D3\u8272\u4F53\uFF0C\u7EBA\u9524\u4F53\u4ECE\u4E24\u6781\u4F38\u5165\uFF1B\u52A8\u7C92\u88AB\u5FAE\u7BA1\u6355\u83B7\uFF0C\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u5728\u68C0\u9A8C\u70B9\u7684\u51DD\u89C6\u4E0B\u5206\u79BB\uFF0C\u76F4\u5230\u4E24\u4E2A\u5B50\u7EC6\u80DE\u5404\u81EA\u62E5\u6709\u5B8C\u6574\u7684\u57FA\u56E0\u7EC4\u3002",facts:[{k:"\u4EBA\u7C7B\u67D3\u8272\u4F53",v:"46 \u6761"},{k:"\u590D\u5236\u540E\u67D3\u8272\u5355\u4F53",v:"92 \u6761"},{k:"\u8D28\u91CF\u63A7\u5236",v:"SAC \u68C0\u9A8C\u70B9"}],readout:"SPINDLE ASSEMBLY / SAC",accent:"#ff74b7",camera:{pos:[0,1.3,15.5],target:[0,0,0],fov:40},duration:23e3,study:{textbook:{chapter:"\u7B2C\u5341\u4E8C\u7AE0",title:"\u7EC6\u80DE\u5468\u671F\u4E0E\u7EC6\u80DE\u5206\u88C2",pages:"261\u2013285",sections:["\u7B2C\u4E00\u8282 \u7EC6\u80DE\u5468\u671F","\u7B2C\u4E8C\u8282 \u7EC6\u80DE\u5206\u88C2"]},related:["\u7B2C\u5341\u4E09\u7AE0 \u7EC6\u80DE\u589E\u6B96\u8C03\u63A7\u4E0E\u764C\u7EC6\u80DE \xB7 pp.287\u2013306"],objectives:["\u6982\u8FF0\u7EC6\u80DE\u5468\u671F\u56DB\u4E2A\u65F6\u76F8\u53CA\u4E09\u4E2A\u5173\u952E\u68C0\u9A8C\u70B9\u3002","\u6309\u987A\u5E8F\u8BF4\u51FA\u6709\u4E1D\u5206\u88C2\u5404\u671F\u7684\u4E3B\u8981\u4E8B\u4EF6\uFF0C\u533A\u5206\u540E\u671F A \u548C\u540E\u671F B\u3002","\u89E3\u91CA CDK1-cyclin B\u3001APC/C\u3001separase \u548C SAC \u5982\u4F55\u63A7\u5236\u67D3\u8272\u4F53\u5206\u79BB\u3002"],visuals:[{color:"#ff6ab4",label:"\u7C89/\u9752 X \u5F62\u4F53 = \u59D0\u59B9\u67D3\u8272\u5355\u4F53"},{color:"#83f8ff",label:"\u653E\u5C04\u7EC6\u7EBF = \u7EBA\u9524\u4F53\u5FAE\u7BA1"},{color:"#7dfff0",label:"\u4E24\u7AEF\u4EAE\u7403 = \u4E2D\u5FC3\u4F53/\u7EBA\u9524\u4F53\u6781"},{color:"#8a7cff",label:"\u4E24\u4FA7\u7403\u4F53 = \u6B63\u5728\u5F62\u6210\u7684\u5B50\u6838"}],concepts:[{term:"\u7EC6\u80DE\u5468\u671F",en:"cell cycle",def:"\u7EC6\u80DE\u4ECE\u4E00\u6B21\u5206\u88C2\u7ED3\u675F\u5230\u4E0B\u4E00\u6B21\u5206\u88C2\u7ED3\u675F\u6240\u7ECF\u5386\u7684\u8FC7\u7A0B\uFF0C\u5206\u4E3A G1\u3001S\u3001G2 \u548C M \u671F\uFF1BDNA \u590D\u5236\u5728 S \u671F\u5B8C\u6210\u3002"},{term:"\u68C0\u9A8C\u70B9",en:"cell cycle checkpoint",def:"\u76D1\u6D4B\u5173\u952E\u4E8B\u4EF6\u662F\u5426\u5B8C\u6210\u7684\u63A7\u5236\u70B9\uFF0C\u5982 G1/S\u3001G2/M \u548C\u7EBA\u9524\u4F53\u7EC4\u88C5\u68C0\u9A8C\u70B9\uFF1B\u5F02\u5E38\u65F6\u6682\u505C\u5468\u671F\u4EE5\u4FEE\u590D\u6216\u89E6\u53D1\u6B7B\u4EA1\u3002"},{term:"MPF",en:"maturation/mitosis promoting factor",def:"\u7531 CDK1 \u4E0E cyclin B \u7EC4\u6210\u7684\u590D\u5408\u4F53\uFF0C\u9A71\u52A8 G2/M \u8F6C\u6362\uFF1Bcyclin B \u7684\u5408\u6210\u3001\u5B9A\u4F4D\u548C\u964D\u89E3\u51B3\u5B9A\u5176\u6D3B\u6027\u3002"},{term:"\u51DD\u7F29\u86CB\u767D\u4E0E\u9ECF\u8FDE\u86CB\u767D",en:"condensin / cohesin",def:"SMC \u86CB\u767D\u590D\u5408\u4F53\uFF1B\u51DD\u7F29\u86CB\u767D\u4FC3\u8FDB\u67D3\u8272\u4F53\u51DD\u7F29\uFF0C\u9ECF\u8FDE\u86CB\u767D\u628A\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u9ECF\u5728\u4E00\u8D77\uFF0C\u76F4\u5230\u540E\u671F\u88AB separase \u5207\u5272\u3002"},{term:"\u52A8\u7C92",en:"kinetochore",def:"\u4F4D\u4E8E\u67D3\u8272\u4F53\u7740\u4E1D\u7C92\u4E24\u4FA7\u7684\u86CB\u767D\u590D\u5408\u4F53\uFF0C\u8FDE\u63A5\u7740\u4E1D\u7C92 DNA \u4E0E\u7EBA\u9524\u4F53\u5FAE\u7BA1\uFF0C\u5E76\u53C2\u4E0E SAC \u4FE1\u53F7\u3002"},{term:"SAC",en:"spindle assembly checkpoint",def:"\u76D1\u6D4B\u6240\u6709\u52A8\u7C92\u662F\u5426\u88AB\u5FAE\u7BA1\u6B63\u786E\u8FDE\u63A5\uFF1B\u672A\u8FDE\u63A5\u65F6\u6291\u5236 APC/C\uFF0C\u963B\u6B62\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u63D0\u524D\u5206\u79BB\u3002"},{term:"\u540E\u671F A / \u540E\u671F B",en:"anaphase A / anaphase B",def:"\u540E\u671F A \u662F\u52A8\u7C92\u5FAE\u7BA1\u7F29\u77ED\u3001\u67D3\u8272\u4F53\u5411\u4E24\u6781\u79FB\u52A8\uFF1B\u540E\u671F B \u662F\u6781\u5FAE\u7BA1\u6ED1\u52A8\u548C\u5EF6\u957F\uFF0C\u628A\u4E24\u6781\u63A8\u5F00\u3002"}],mechanism:["G1 \u671F\u51C6\u5907 DNA \u590D\u5236\uFF0CS \u671F\u5B8C\u6210 DNA \u590D\u5236\uFF0CG2 \u671F\u68C0\u67E5\u590D\u5236\u5B8C\u6574\u6027\u5E76\u50A8\u5907\u5206\u88C2\u6240\u9700\u7269\u8D28\uFF0CM \u671F\u5B8C\u6210\u6838\u5206\u88C2\u548C\u80DE\u8D28\u5206\u88C2\u3002G1/S\u3001G2/M \u548C SAC \u662F\u4E09\u4E2A\u5173\u952E\u63A7\u5236\u70B9\u3002","CDK1-cyclin B\uFF08MPF\uFF09\u5728 G2/M \u8F6C\u6362\u65F6\u88AB\u6FC0\u6D3B\uFF0C\u78F7\u9178\u5316\u51DD\u7F29\u86CB\u767D\u3001\u6838\u7EA4\u5C42\u86CB\u767D\u548C\u7EBA\u9524\u4F53\u76F8\u5173\u86CB\u767D\uFF0C\u63A8\u52A8\u67D3\u8272\u4F53\u51DD\u7F29\u3001\u6838\u819C\u89E3\u4F53\u4E0E\u7EBA\u9524\u4F53\u7EC4\u88C5\u3002","\u524D\u4E2D\u671F\uFF0C\u7EBA\u9524\u4F53\u5FAE\u7BA1\u6355\u83B7\u52A8\u7C92\uFF1B\u672A\u8FDE\u63A5\u7684\u52A8\u7C92\u4EA7\u751F Mad/Bub \u4FE1\u53F7\uFF0C\u6291\u5236 APC/C\u3002\u6240\u6709\u67D3\u8272\u4F53\u6392\u5217\u5230\u8D64\u9053\u9762\u540E\uFF0CSAC \u89E3\u9664\uFF0CAPC/C \u6CDB\u7D20\u5316 securin\uFF0C\u91CA\u653E separase\uFF0C\u5207\u5272\u9ECF\u8FDE\u86CB\u767D\uFF0C\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u5206\u79BB\u3002","\u540E\u671F A \u7531\u52A8\u7C92\u5FAE\u7BA1\u7F29\u77ED\u9A71\u52A8\uFF1B\u540E\u671F B \u7531 kinesin-5 \u7B49\u53CC\u6781\u9A6C\u8FBE\u5728\u53CD\u5411\u5E73\u884C\u6781\u5FAE\u7BA1\u4E0A\u6ED1\u52A8\uFF0C\u63A8\u5F00\u4E24\u6781\u3002\u672B\u671F\u6838\u819C\u91CD\u5EFA\uFF0C\u80DE\u8D28\u5206\u88C2\u7531\u808C\u52A8\u86CB\u767D-\u808C\u7403\u86CB\u767D II \u6536\u7F29\u73AF\u5B8C\u6210\u3002"],pitfalls:["DNA \u590D\u5236\u53D1\u751F\u5728 S \u671F\uFF0C\u4E0D\u662F M \u671F\uFF1B\u6709\u4E1D\u5206\u88C2\u53EA\u8D1F\u8D23\u628A\u5DF2\u590D\u5236\u7684\u67D3\u8272\u4F53\u5206\u914D\u3002","\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u5728\u540E\u671F\u5206\u79BB\uFF0C\u4E0D\u662F\u524D\u671F\uFF1B\u524D\u671F\u53D1\u751F\u7684\u662F\u67D3\u8272\u8D28\u51DD\u7F29\u548C\u7EBA\u9524\u4F53\u5F00\u59CB\u5F62\u6210\u3002","SAC \u4E0D\u662F\u201C\u68C0\u67E5\u67D3\u8272\u4F53\u662F\u5426\u51DD\u7F29\u201D\uFF0C\u800C\u662F\u68C0\u67E5\u52A8\u7C92\u4E0E\u5FAE\u7BA1\u7684\u8FDE\u63A5\u548C\u5F20\u529B\uFF1BSAC \u5931\u6548\u4F1A\u5BFC\u81F4\u975E\u6574\u500D\u4F53\u3002","\u6709\u4E1D\u5206\u88C2\u4EA7\u751F\u4E24\u4E2A\u9057\u4F20\u7269\u8D28\u76F8\u540C\u7684\u5B50\u7EC6\u80DE\uFF1B\u51CF\u6570\u5206\u88C2\u53D1\u751F\u540C\u6E90\u91CD\u7EC4\u548C\u4E24\u6B21\u8FDE\u7EED\u5206\u88C2\uFF0C\u4EA7\u751F\u5355\u500D\u4F53\u7EC6\u80DE\u3002"],quiz:[{q:"\u5982\u679C SAC \u5931\u6548\uFF0C\u7EC6\u80DE\u53EF\u80FD\u51FA\u73B0\u4EC0\u4E48\u540E\u679C\uFF1F",a:"\u672A\u6B63\u786E\u8FDE\u63A5\u7684\u67D3\u8272\u4F53\u53EF\u80FD\u5728\u540E\u671F\u63D0\u524D\u5206\u79BB\uFF0C\u5BFC\u81F4\u5B50\u7EC6\u80DE\u67D3\u8272\u4F53\u6570\u76EE\u5F02\u5E38\uFF08\u975E\u6574\u500D\u4F53\uFF09\uFF0C\u5E76\u53EF\u80FD\u4FC3\u8FDB\u80BF\u7624\u53D1\u751F\u3002"},{q:"APC/C \u5982\u4F55\u89E6\u53D1\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u5206\u79BB\uFF1F",a:"APC/C \u6CDB\u7D20\u5316 securin\uFF0C\u4F7F\u5176\u88AB\u86CB\u767D\u9176\u4F53\u964D\u89E3\uFF1B\u91CA\u653E\u7684 separase \u5207\u5272\u9ECF\u8FDE\u86CB\u767D\uFF0C\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u56E0\u6B64\u5931\u53BB\u9ECF\u8FDE\u5E76\u5206\u79BB\u3002"},{q:"\u6BD4\u8F83\u540E\u671F A \u548C\u540E\u671F B \u7684\u9A71\u52A8\u673A\u5236\u3002",a:"\u540E\u671F A \u4E3B\u8981\u9760\u52A8\u7C92\u5FAE\u7BA1\u7F29\u77ED\uFF0C\u628A\u67D3\u8272\u4F53\u62C9\u5411\u4E24\u6781\uFF1B\u540E\u671F B \u4E3B\u8981\u9760\u6781\u5FAE\u7BA1\u6ED1\u52A8\u548C\u5EF6\u957F\uFF0C\u628A\u4E24\u6781\u63A8\u5F00\uFF0C\u4E8C\u8005\u5171\u540C\u5B8C\u6210\u67D3\u8272\u4F53\u5206\u914D\u3002"}]}}],Xu={membrane:[1,1,.2,.16,.28,.22,.1],lipids:[1,1,.18,.08,.1,.1,.04],proteins:[.9,1,.2,.1,.18,.16,.04],particles:[1,.55,.9,.55,.72,.72,.42],cytoskeleton:[.55,.2,1,.28,.36,.52,.38],mitochondria:[.78,.1,.3,1,.18,.14,.08],nucleus:[1,.16,.3,.1,1,.2,.1],endomembrane:[.62,.08,.25,.08,.35,1,.12],mitosis:[0,0,0,0,0,0,1]};var Qi=`
vec3 ca_mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 ca_mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 ca_permute(vec4 x) { return ca_mod289(((x * 34.0) + 1.0) * x); }
vec4 ca_taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float ca_snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = ca_mod289(i);
  vec4 p = ca_permute(ca_permute(ca_permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = ca_taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float ca_fbm(vec3 p) {
  float f = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    f += a * ca_snoise(p);
    p = p * 2.02 + 11.7;
    a *= 0.5;
  }
  return f;
}
`,Tf=`
uniform float uTime;
uniform float uAmp;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${Qi}
void main() {
  vec3 p = position;
  vec3 dir = normalize(position);
  float n = ca_fbm(dir * 2.15 + vec3(0.0, uTime * 0.055, 0.0));
  float breath = sin(uTime * 0.72 + position.y * 0.55 + position.x * 0.31);
  p += normal * (n * uAmp + breath * 0.025);
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - wp.xyz);
  vPos = p;
  vNoise = n;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Af=`
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uRim;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${Qi}
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(vV);
  float fres = pow(1.0 - clamp(abs(dot(N, V)), 0.0, 1.0), 2.3);
  float flow = 0.5 + 0.5 * sin(vPos.y * 1.9 + vPos.x * 1.4 - vNoise * 4.2 + uTime * 0.5);
  float veins = smoothstep(0.42, 0.82, ca_fbm(vPos * 1.05 + vec3(0.0, uTime * 0.045, 0.0)) * 0.5 + 0.5);
  float micro = 0.5 + 0.5 * sin(vPos.z * 8.0 + vPos.y * 3.0 + uTime * 1.1);
  vec3 col = mix(uColorA, uColorB, flow * 0.55 + veins * 0.45);
  col += uRim * (fres * 1.15 + flow * 0.06 + micro * 0.02);
  float alpha = (0.024 + fres * 0.4 + veins * 0.055) * uOpacity;
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(col, alpha);
}
`,mr=`
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - wp.xyz);
  vPos = position;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,gr=`
uniform vec3 uColor;
uniform vec3 uColorB;
uniform float uOpacity;
uniform float uTime;
uniform float uPower;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
void main() {
  float fres = pow(1.0 - clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0), uPower);
  float band = 0.5 + 0.5 * sin(vPos.y * 5.0 + vPos.x * 2.0 - uTime * 0.8);
  vec3 col = mix(uColor, uColorB, band * 0.45);
  col *= (0.72 + fres * 1.5);
  float alpha = uOpacity * (fres * 0.75 + 0.014);
  gl_FragColor = vec4(col, alpha);
}
`,Cf=`
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
varying vec3 vCol;
varying float vPulse;
void main() {
  vec3 p = position;
  vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
  float ph = uTime * 0.72 + ip.x * 1.35 + ip.y * 2.1 + ip.z * 1.65;
  p.x += sin(ph) * 0.04;
  p.z += cos(ph * 0.91) * 0.04;
  p.y += sin(ph * 0.47) * 0.025;
  vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
  vCol = mix(uColorA, uColorB, 0.5 + 0.5 * sin(ph * 0.55));
  vPulse = 0.62 + 0.38 * sin(ph);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Rf=`
uniform float uOpacity;
varying vec3 vCol;
varying float vPulse;
void main() {
  gl_FragColor = vec4(vCol * (1.25 + vPulse * 0.9), uOpacity * vPulse);
}
`,qu=`
uniform float uTime;
uniform float uPixelRatio;
uniform float uSize;
uniform float uOpacity;
uniform float uDrift;
attribute float aSeed;
attribute float aScale;
varying float vSeed;
varying float vAlpha;
${Qi}
void main() {
  vSeed = aSeed;
  vec3 p = position;
  float ang = uTime * (0.025 + aSeed * 0.055);
  float c = cos(ang);
  float s = sin(ang);
  p.xz = mat2(c, -s, s, c) * p.xz;
  float n1 = ca_snoise(position * 0.18 + vec3(0.0, uTime * 0.05, 0.0));
  float n2 = ca_snoise(position * 0.16 + vec3(17.0, uTime * 0.04, 3.0));
  p += vec3(n1, n2, ca_snoise(position * 0.2 + vec3(3.0, uTime * 0.03, 7.0))) * uDrift;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float depth = max(-mv.z, 0.1);
  gl_PointSize = clamp(uSize * aScale * uPixelRatio * (230.0 / depth), 1.0, 20.0);
  vAlpha = smoothstep(0.0, 1.6, depth);
}
`,Yu=`
uniform float uOpacity;
varying float vSeed;
varying float vAlpha;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float core = smoothstep(0.5, 0.0, d);
  float halo = smoothstep(0.5, 0.12, d) * 0.35;
  vec3 col = mix(vec3(0.30, 0.96, 0.88), vec3(1.0, 0.35, 0.68), smoothstep(0.52, 0.9, fract(vSeed * 13.71)));
  col = mix(col, vec3(1.0, 0.72, 0.36), smoothstep(0.87, 0.995, fract(vSeed * 7.31)) * 0.8);
  gl_FragColor = vec4(col, (core + halo) * vAlpha * uOpacity);
}
`,Pf=`
uniform float uTime;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${Qi}
void main() {
  vec3 p = position;
  float n = ca_fbm(normalize(position) * 1.35 + vec3(0.0, uTime * 0.04, 0.0));
  p += normal * n * 0.065;
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - wp.xyz);
  vPos = p;
  vNoise = n;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,If=`
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${Qi}
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(vV);
  float fres = pow(1.0 - clamp(abs(dot(N, V)), 0.0, 1.0), 2.0);
  float n = ca_fbm(vPos * 0.78 + vec3(0.0, uTime * 0.07, 4.0));
  float veins = smoothstep(-0.2, 0.55, n);
  float filament = smoothstep(0.55, 0.9, ca_fbm(vPos * 2.1 + vec3(3.0, uTime * 0.03, 0.0)) * 0.5 + 0.5);
  vec3 col = mix(uColorA, uColorB, veins * 0.8);
  col += uColorC * (pow(fres, 1.7) * 1.25 + filament * 0.12);
  col += uColorB * pow(max(0.0, sin(vPos.y * 3.4 + vPos.x * 1.7 + uTime * 0.65)), 8.0) * 0.12;
  gl_FragColor = vec4(col, uOpacity);
}
`,Nf=`
uniform float uTime;
varying vec3 vN;
varying vec3 vV;
varying vec3 vLocal;
${Qi}
void main() {
  vec3 p = position;
  float pulse = ca_snoise(normalize(position) * 2.0 + vec3(0.0, uTime * 0.25, 0.0));
  p += normal * pulse * 0.018;
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - wp.xyz);
  vLocal = position;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Lf=`
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
varying vec3 vN;
varying vec3 vV;
varying vec3 vLocal;
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(vV);
  float fres = pow(1.0 - clamp(abs(dot(N, V)), 0.0, 1.0), 2.0);
  float ribs = 0.5 + 0.5 * sin(vLocal.y * 19.0 + sin(vLocal.x * 8.5 + uTime * 1.15) * 1.9 + vLocal.z * 5.0);
  float ribs2 = pow(ribs, 3.0);
  vec3 col = mix(uColorA, uColorB, ribs * 0.62 + 0.2);
  col += uColorC * (ribs2 * 1.1 + fres * 0.9);
  float alpha = uOpacity * (0.65 + fres * 0.25);
  gl_FragColor = vec4(col, alpha);
}
`,Df=`
varying vec2 vUv;
varying vec3 vN;
varying vec3 vV;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vUv = uv;
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Uf=`
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColorA;
uniform vec3 uColorB;
varying vec2 vUv;
varying vec3 vN;
varying vec3 vV;
void main() {
  float fres = pow(1.0 - clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0), 2.0);
  float dash = smoothstep(0.22, 0.95, sin(vUv.x * 40.0 - uTime * 2.6 + vUv.y * 7.0) * 0.5 + 0.5);
  vec3 col = mix(uColorA, uColorB, vUv.x * 0.62 + 0.15);
  col += uColorB * (dash * 1.15 + fres * 1.3);
  float alpha = uOpacity * (0.22 + dash * 0.58 + fres * 0.28);
  gl_FragColor = vec4(col, alpha);
}
`,Zu=`
attribute float aT;
attribute float aSeed;
varying float vT;
varying float vSeed;
void main() {
  vT = aT;
  vSeed = aSeed;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ku=`
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColorA;
uniform vec3 uColorB;
varying float vT;
varying float vSeed;
void main() {
  float pulse = 0.5 + 0.5 * sin(vT * 28.0 - uTime * 1.9 + vSeed * 6.283);
  vec3 col = mix(uColorA, uColorB, pulse * 0.7 + vSeed * 0.3);
  float alpha = uOpacity * (0.16 + 0.62 * pulse);
  gl_FragColor = vec4(col * (1.0 + pulse * 0.6), alpha);
}
`,Ff=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Of=`
uniform float uTime;
uniform float uOpacity;
varying vec3 vDir;
${Qi}
void main() {
  vec3 d = normalize(vDir);
  float horizon = smoothstep(-0.75, 0.85, d.y);
  vec3 col = mix(vec3(0.0025, 0.006, 0.011), vec3(0.008, 0.028, 0.046), horizon);
  float n = ca_fbm(d * 3.1 + vec3(0.0, uTime * 0.009, 0.0));
  float cloud = pow(max(n * 0.5 + 0.5, 0.0), 3.0);
  col += vec3(0.025, 0.12, 0.145) * cloud * 1.2;
  float ribbon = smoothstep(0.67, 0.94, sin(d.x * 4.2 + d.y * 5.8 + n * 2.2 + uTime * 0.025) * 0.5 + 0.5);
  col += vec3(0.20, 0.025, 0.13) * ribbon * 0.32;
  float glow = smoothstep(0.45, 1.0, 1.0 - abs(d.x * 0.6 + d.y * 0.3));
  col += vec3(0.012, 0.055, 0.06) * glow * 0.5;
  gl_FragColor = vec4(col * uOpacity, 1.0);
}
`,Bf=`
varying vec2 vUv;
varying vec3 vN;
varying vec3 vV;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vUv = uv;
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,kf=`
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColor;
varying vec2 vUv;
varying vec3 vN;
varying vec3 vV;
${Qi}
void main() {
  float facing = abs(dot(normalize(vN), normalize(vV)));
  float fall = smoothstep(0.0, 0.25, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y));
  float n = ca_fbm(vec3(vUv * vec2(6.0, 2.4), uTime * 0.07));
  float wisps = 0.5 + 0.5 * n;
  float alpha = uOpacity * fall * (0.08 + facing * 0.42) * (0.45 + wisps * 0.75);
  gl_FragColor = vec4(uColor * (1.1 + wisps * 0.9), alpha);
}
`,zf=`
uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform float uTime;
uniform float uFlash;
uniform float uIntensity;
uniform float uGrain;
uniform float uLetterbox;
varying vec2 vUv;

float ca_hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  vec2 uv = vUv;
  vec2 c = uv - 0.5;
  float r = length(c);
  vec2 dir = normalize(c + 0.00001);
  float lens = r * r * 0.008 * uIntensity;
  vec2 warped = uv + dir * lens;
  float ca = 0.0014 + r * 0.0022;
  ca *= uIntensity;
  vec3 col;
  col.r = texture2D(tDiffuse, warped + dir * ca).r;
  col.g = texture2D(tDiffuse, warped).g;
  col.b = texture2D(tDiffuse, warped - dir * ca).b;

  // A lens-side focus falloff: the optical centre stays sharp while the
  // periphery is softened, like a wide-open macro lens.
  vec3 blur = vec3(0.0);
  float total = 0.0;
  for (int i = 0; i < 7; i++) {
    float f = float(i) / 6.0;
    float w = 1.0 - f;
    blur += texture2D(tDiffuse, warped - dir * r * r * 0.022 * f).rgb * w;
    total += w;
  }
  blur /= total;
  col = mix(col, blur, smoothstep(0.22, 0.9, r) * 0.5 * uIntensity);

  col += vec3(0.18, 0.48, 0.54) * uFlash * (0.12 + r * 0.56);
  float grain = ca_hash(gl_FragCoord.xy + uTime * 61.0) - 0.5;
  col += grain * uGrain * (0.4 + uIntensity * 0.6);
  float vig = smoothstep(1.06, 0.24, r);
  col *= mix(1.0, vig, 0.7);
  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(col, vec3(luma), 0.045);
  col *= vec3(0.965, 1.015, 1.03);
  col = max(col, vec3(0.0));
  gl_FragColor = vec4(col, 1.0);
}
`;var sn=Math.PI*2,Ii=8.2,Hf=new R(0,1,0),cy=new R(1,0,0),uy=new R(0,1,0),hy=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;function dy(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Ju(i){let e=[],t=Math.PI*(3-Math.sqrt(5));for(let n=0;n<i;n+=1){let s=1-n/Math.max(1,i-1)*2,r=Math.sqrt(Math.max(0,1-s*s)),a=t*n;e.push(new R(Math.cos(a)*r,s,Math.sin(a)*r))}return e}function Cn(i,e,t){return Math.max(e,Math.min(t,i))}function $u(i,e,t){let n=Cn((t-i)/(e-i),0,1);return n*n*(3-2*n)}function Dn(i){let e=i()*2-1,t=i()*sn,n=Math.sqrt(Math.max(0,1-e*e));return new R(Math.cos(t)*n,e,Math.sin(t)*n)}function fy(i,e,t,n,s=1){let r=new bt(i,e,t),a=r.attributes.position,o=new R;for(let c=0;c<a.count;c+=1){o.fromBufferAttribute(a,c).normalize();let l=Math.sin(o.x*4.2+s)*Math.cos(o.y*3.6-s*.4)*.55+Math.sin(o.z*6.7+s*2.1)*.25;o.multiplyScalar(i+l*n),a.setXYZ(c,o.x,o.y,o.z)}return a.needsUpdate=!0,r.computeVertexNormals(),r}function Gf(i,e={}){if(!i)throw new Error("Cell Atlas: no host element.");let t=dy(1372459435),n={value:0},s={value:1},r=new Re,a=new Re;r.add(a);let o;try{o=new lr({antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1})}catch(N){throw new Error(`Cell Atlas: WebGL could not start (${N.message}).`)}if(!o.getContext())throw new Error("Cell Atlas: WebGL is unavailable in this browser.");let c=Math.min(window.devicePixelRatio||1,1.5);o.setPixelRatio(c),o.outputColorSpace=on,o.toneMapping=Ci,o.toneMappingExposure=.84,o.setClearColor(132619,1),o.domElement.className="ca-webgl",o.domElement.setAttribute("aria-hidden","true"),o.domElement.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;",i.appendChild(o.domElement);let l=new Ai;l.background=new pe(132619),l.fog=new ds(132619,.017),l.add(r);let u=new jt(42,1,.04,140);u.position.set(0,3,23.5);let d=new dr(o),h=new fr(l,u),f=new ji(new Se(1,1),.42,.55,.28),g=new hr({uniforms:{tDiffuse:{value:null},uResolution:{value:new Se(1,1)},uTime:{value:0},uFlash:{value:1},uIntensity:{value:1},uGrain:{value:.028},uLetterbox:{value:0}},vertexShader:hy,fragmentShader:zf}),M=new pr;d.addPass(h),d.addPass(f),d.addPass(g),d.addPass(M);let x=null;try{let N=document.createElement("canvas");N.width=1024,N.height=512;let L=N.getContext("2d"),F=L.createLinearGradient(0,0,0,512);F.addColorStop(0,"#01050a"),F.addColorStop(.45,"#04141c"),F.addColorStop(.7,"#031019"),F.addColorStop(1,"#010306"),L.fillStyle=F,L.fillRect(0,0,1024,512);let ce=[[180,230,260,"rgba(26, 210, 198, 0.38)"],[820,150,230,"rgba(255, 66, 158, 0.26)"],[520,390,190,"rgba(255, 168, 69, 0.16)"],[940,410,170,"rgba(74, 100, 255, 0.22)"]];for(let[$e,gt,Ut,_n]of ce){let rn=L.createRadialGradient($e,gt,0,$e,gt,Ut);rn.addColorStop(0,_n),rn.addColorStop(1,"rgba(0,0,0,0)"),L.fillStyle=rn,L.fillRect($e-Ut,gt-Ut,Ut*2,Ut*2)}let Le=new Kr(N);Le.mapping=nr,Le.colorSpace=on;let ze=new Ji(o);ze.compileEquirectangularShader(),x=ze.fromEquirectangular(Le).texture,l.environment=x,Le.dispose(),ze.dispose()}catch{}let m=new ms(1590362,656137,.8);l.add(m);let S=new gs(10485745,.95);S.position.set(9,12,10),l.add(S);let C=new Tn(4191712,110,42,2);C.position.set(8,7,8),l.add(C);let _=new Tn(16727711,85,40,2);_.position.set(-9,-3,6),l.add(_);let T=new Tn(16755544,70,34,2);T.position.set(-4,-1,2),l.add(T);let E=new sa(9435391,170,55,.62,.92,1.6);E.position.set(0,18,4),E.target.position.set(0,0,0),l.add(E),l.add(E.target);let P=new Map;function y(N,L){let F=P.get(N);F||(F={name:N,weight:0,target:0,objects:[],mats:[]},P.set(N,F)),F.objects.push(L),L.traverse(ce=>{if(!ce.material)return;let Le=Array.isArray(ce.material)?ce.material:[ce.material];for(let ze of Le){if(!ze||F.mats.some(gt=>gt.mat===ze))continue;let $e=ze.uniforms&&ze.uniforms.uOpacity?ze.uniforms.uOpacity.value:null;F.mats.push({mat:ze,baseOpacity:ze.opacity,baseEmissive:ze.emissiveIntensity===void 0?1:ze.emissiveIntensity,baseColor:ze.color?ze.color.clone():null,shaderOpacity:$e})}})}function w(N,L){let F=Cn(L,0,1),ce=F>.012;for(let Le of N.objects)Le.visible=ce;if(ce)for(let Le of N.mats){let ze=Le.mat;Le.shaderOpacity!==null?ze.uniforms.uOpacity.value=Le.shaderOpacity*F:ze.transparent&&(ze.opacity=Le.baseOpacity*F),ze.emissiveIntensity!==void 0&&(ze.emissiveIntensity=Le.baseEmissive*(.25+.75*F)),Le.baseColor&&ze.color&&ze.color.copy(Le.baseColor).multiplyScalar(.4+.6*F)}}let I=new Re;l.add(I);let D=new vt({uniforms:{uTime:n,uOpacity:{value:1}},vertexShader:Ff,fragmentShader:Of,side:Kt,depthWrite:!1,fog:!1}),z=new Ge(new bt(72,64,40),D);z.frustumCulled=!1,I.add(z);let G=2600,U=new Float32Array(G*3),X=new Float32Array(G),K=new Float32Array(G);for(let N=0;N<G;N+=1){let L=Dn(t),F=19+t()*44;U[N*3]=L.x*F,U[N*3+1]=L.y*F,U[N*3+2]=L.z*F,X[N]=t(),K[N]=.25+t()*.85}let J=new xt;J.setAttribute("position",new Pt(U,3)),J.setAttribute("aSeed",new Pt(X,1)),J.setAttribute("aScale",new Pt(K,1));let ne=new vt({uniforms:{uTime:n,uPixelRatio:s,uSize:{value:1},uOpacity:{value:.42},uDrift:{value:.25}},vertexShader:qu,fragmentShader:Yu,transparent:!0,depthWrite:!1,blending:ot,fog:!1}),Z=new dn(J,ne);Z.frustumCulled=!1,I.add(Z);let ee=new Re;I.add(ee);let re=[{pos:[0,16,2],scale:[1.25,1.1,1.25],rot:[0,0,-.16],color:1806238,opacity:.1},{pos:[-13,7,-8],scale:[.75,.85,.75],rot:[.3,.2,.64],color:5000144,opacity:.07},{pos:[12,4,8],scale:[.6,.8,.6],rot:[-.24,0,-.7],color:13187973,opacity:.06}];for(let N of re){let L=new vt({uniforms:{uTime:n,uOpacity:{value:N.opacity},uColor:{value:new pe(N.color)}},vertexShader:Bf,fragmentShader:kf,transparent:!0,depthWrite:!1,side:Xt,blending:ot,fog:!1}),F=new Ge(new Hi(8.5,25,40,1,!0),L);F.position.fromArray(N.pos),F.scale.fromArray(N.scale),F.rotation.set(...N.rot),ee.add(F)}let De=new Re;a.add(De);let Ue=new vt({uniforms:{uTime:n,uOpacity:{value:.8},uAmp:{value:.14},uColorA:{value:new pe(676450)},uColorB:{value:new pe(10169452)},uRim:{value:new pe(9371626)}},vertexShader:Tf,fragmentShader:Af,transparent:!0,depthWrite:!1,side:Xt,blending:ot}),Mt=new Ge(new $s(Ii,5),Ue);Mt.renderOrder=3,De.add(Mt);let ct=new Gn({color:740181,roughness:.18,metalness:.04,transmission:.84,thickness:2.3,ior:1.33,clearcoat:1,clearcoatRoughness:.14,iridescence:.72,iridescenceIOR:1.3,iridescenceThicknessRange:[120,460],attenuationColor:new pe(750448),attenuationDistance:3.5,envMapIntensity:1.15,transparent:!0,opacity:.28,depthWrite:!1}),dt=new Ge(new bt(Ii-.09,96,64),ct);dt.renderOrder=1,De.add(dt);let j=new vt({uniforms:{uTime:n,uOpacity:{value:.13},uColor:{value:new pe(2081986)},uColorB:{value:new pe(10173069)},uPower:{value:2.8}},vertexShader:mr,fragmentShader:gr,transparent:!0,depthWrite:!1,side:Kt,blending:ot}),se=new Ge(new bt(Ii-.3,64,48),j);De.add(se);let we=new Re;a.add(we);let qe=Ju(1500),me=new Ht,nt=new Ie(.026,.038,.36,4,1,!1),Ot=new vt({uniforms:{uTime:n,uOpacity:{value:.48},uColorA:{value:new pe(3000768)},uColorB:{value:new pe(16741559)}},vertexShader:Cf,fragmentShader:Rf,transparent:!0,depthWrite:!1,blending:ot}),Qe=new ni(nt,Ot,qe.length);Qe.frustumCulled=!1;for(let N=0;N<qe.length;N+=1){let L=qe[N];me.position.copy(L).multiplyScalar(Ii+.03),me.quaternion.setFromUnitVectors(Hf,L),me.rotateY(t()*sn);let F=.72+t()*.7;me.scale.set(F,F,F),me.updateMatrix(),Qe.setMatrixAt(N,me.matrix)}Qe.instanceMatrix.needsUpdate=!0,we.add(Qe);let lt=new Float32Array(qe.length*3);for(let N=0;N<qe.length;N+=1){let L=qe[N].clone().multiplyScalar(Ii+.22);lt[N*3]=L.x,lt[N*3+1]=L.y,lt[N*3+2]=L.z}let wt=new xt;wt.setAttribute("position",new Pt(lt,3));let oe=new Mn({color:10485745,size:.085,sizeAttenuation:!0,transparent:!0,opacity:.36,depthWrite:!1,blending:ot}),ue=new dn(wt,oe);ue.frustumCulled=!1,we.add(ue);let mt=new Re;a.add(mt);let Be=Ju(30),Ze=new ii(.145,.42,5,12),it=new cn(.27,.052,6,18),B=new bt(.085,10,8),qt=[new Gn({color:7337437,emissive:1740156,emissiveIntensity:.62,roughness:.3,metalness:.15,transmission:.28,thickness:.4,clearcoat:1,clearcoatRoughness:.2,transparent:!0,opacity:.78,envMapIntensity:1.05}),new Gn({color:16758891,emissive:9257489,emissiveIntensity:.58,roughness:.28,metalness:.2,transmission:.24,thickness:.4,clearcoat:1,clearcoatRoughness:.16,transparent:!0,opacity:.78,envMapIntensity:1.05}),new Gn({color:12488191,emissive:5515148,emissiveIntensity:.55,roughness:.32,metalness:.1,transmission:.2,thickness:.35,clearcoat:.9,clearcoatRoughness:.22,transparent:!0,opacity:.78,envMapIntensity:1})];for(let N=0;N<Be.length;N+=1){let L=Be[N],F=new Re;F.position.copy(L).multiplyScalar(Ii-.03),F.quaternion.setFromUnitVectors(Hf,L),F.rotateY(t()*sn);let ce=.78+t()*.8;F.scale.setScalar(ce);let Le=qt[N%qt.length],ze=new Ge(Ze,Le);ze.position.y=.28,F.add(ze);let $e=new Ge(it,Le);$e.rotation.x=Math.PI*.5,$e.position.y=.02,F.add($e);let gt=2+Math.floor(t()*3);for(let Ut=0;Ut<gt;Ut+=1){let _n=new Ge(B,Le);_n.position.set((t()-.5)*.44,.7+t()*.4,(t()-.5)*.44),F.add(_n)}mt.add(F)}let Tt=180,A=new Float32Array(Tt*3);for(let N=0;N<Tt;N+=1){let F=Dn(t).multiplyScalar(Ii+.38+t()*.38);A.set([F.x,F.y,F.z],N*3)}let v=new xt;v.setAttribute("position",new Pt(A,3));let H=new Mn({color:16765327,size:.07,sizeAttenuation:!0,transparent:!0,opacity:.36,depthWrite:!1,blending:ot}),q=new dn(v,H);q.frustumCulled=!1,mt.add(q);let $=new Re;a.add($);let fe=3400,xe=new Float32Array(fe*3),Q=new Float32Array(fe),ie=new Float32Array(fe);for(let N=0;N<fe;N+=1){let L=Dn(t),F=Math.pow(t(),.62)*(Ii-.45),ce=L.multiplyScalar(F);xe[N*3]=ce.x,xe[N*3+1]=ce.y,xe[N*3+2]=ce.z,Q[N]=t(),ie[N]=.25+Math.pow(t(),3)*1.6}let ve=new xt;ve.setAttribute("position",new Pt(xe,3)),ve.setAttribute("aSeed",new Pt(Q,1)),ve.setAttribute("aScale",new Pt(ie,1));let We=new vt({uniforms:{uTime:n,uPixelRatio:s,uSize:{value:.38},uOpacity:{value:.48},uDrift:{value:.42}},vertexShader:qu,fragmentShader:Yu,transparent:!0,depthWrite:!1,blending:ot}),be=new dn(ve,We);be.frustumCulled=!1,$.add(be);let ge=new Re;a.add(ge);let Ve=[],Ke=[],rt=[],k=[],ye=[];for(let N=0;N<76;N+=1){let L=[],ce=Dn(t).multiplyScalar(2.9+t()*4.6);L.push(ce);let Le=Dn(t).multiplyScalar(1.2+t()*2.3);L.push(ce.clone().multiplyScalar(.58).add(Le));let ze=Dn(t).multiplyScalar(2.8+t()*4.7);L.push(ze);let $e=Dn(t).multiplyScalar(2.8+t()*4.7);L.push($e);let gt=new Sn(L,!1,"catmullrom",.5);Ve.push(gt);let Ut=[];for(let Kn=0;Kn<140;Kn+=1)Ut.push(gt.getPoint(Kn/139));Ke.push(Ut);let _n=34,rn=t(),Ni=gt.getPoint(0);for(let Kn=1;Kn<_n;Kn+=1){let Tr=Kn/(_n-1),$a=gt.getPoint(Tr);rt.push(Ni.x,Ni.y,Ni.z,$a.x,$a.y,$a.z),k.push((Kn-1)/(_n-1),Tr),ye.push(rn,rn),Ni=$a}}let te=new xt;te.setAttribute("position",new tt(rt,3)),te.setAttribute("aT",new tt(k,1)),te.setAttribute("aSeed",new tt(ye,1));let _e=new vt({uniforms:{uTime:n,uOpacity:{value:.3},uColorA:{value:new pe(1820861)},uColorB:{value:new pe(10420152)}},vertexShader:Zu,fragmentShader:Ku,transparent:!0,depthWrite:!1,blending:ot}),Ae=new ki(te,_e);Ae.frustumCulled=!1,ge.add(Ae);let ae=new St({color:7995376,transparent:!0,opacity:.07,depthWrite:!1,blending:ot});for(let N=0;N<10;N+=1){let L=Ve[Math.floor(t()*Ve.length)],F=new Ge(new mi(L,70,.016+t()*.018,4,!1),ae);ge.add(F)}let Xe=new St({color:12035071,transparent:!0,opacity:.17,depthWrite:!1,blending:ot});for(let N=0;N<20;N+=1){let L=[],F=t()*sn;for(let ze=0;ze<4;ze+=1){let $e=3.1+t()*4.3;F+=.4+t()*.75,L.push(new R(Math.cos(F)*$e,-3.8+t()*7.6,Math.sin(F)*$e))}let ce=new Sn(L,!1,"catmullrom",.5),Le=new Ge(new mi(ce,72,.022+t()*.02,4,!1),Xe);ge.add(Le)}let He=240,It=new Float32Array(He*3),At=[];for(let N=0;N<He;N+=1){let L=Math.floor(t()*Ve.length);At.push({samples:Ke[L],offset:t(),speed:.012+t()*.035,radial:new R(t()-.5,t()-.5,t()-.5).multiplyScalar(.16)})}let yn=new xt;yn.setAttribute("position",new Pt(It,3));let Fn=new Mn({color:13172722,size:.105,sizeAttenuation:!0,transparent:!0,opacity:.5,depthWrite:!1,blending:ot}),Ia=new dn(yn,Fn);Ia.frustumCulled=!1,ge.add(Ia);let qn=new Re;a.add(qn);let Na=new vt({uniforms:{uTime:n,uOpacity:{value:.92},uColorA:{value:new pe(4922224)},uColorB:{value:new pe(12797092)},uColorC:{value:new pe(9434623)}},vertexShader:Pf,fragmentShader:If,transparent:!0,depthWrite:!0}),yr=new Ge(new bt(2.5,96,64),Na);qn.add(yr);let oc=new vt({uniforms:{uTime:n,uOpacity:{value:.28},uColor:{value:new pe(9397247)},uColorB:{value:new pe(5633507)},uPower:{value:2.2}},vertexShader:mr,fragmentShader:gr,transparent:!0,depthWrite:!1,side:Xt,blending:ot}),_r=new Ge(new bt(2.78,64,48),oc);qn.add(_r);let La=fy(.82,32,24,.07,3.1),yi=new fn({color:7151704,emissive:5049407,emissiveIntensity:1,roughness:.46,metalness:.1,transparent:!0,opacity:.84}),is=new Ge(La,yi);is.position.set(.62,.38,.22),qn.add(is);let Es=88,Da=new cn(.105,.022,6,14),ws=new St({color:10214655,transparent:!0,opacity:.3,depthWrite:!1,blending:ot}),Ts=new ni(Da,ws,Es),As=Ju(Es);for(let N=0;N<Es;N+=1){let L=As[N];me.position.copy(L).multiplyScalar(2.79),me.quaternion.setFromUnitVectors(new R(0,0,1),L),me.rotateZ(t()*sn),me.scale.setScalar(.8+t()*.65),me.updateMatrix(),Ts.setMatrixAt(N,me.matrix)}Ts.instanceMatrix.needsUpdate=!0,qn.add(Ts);let br=new R(.58,.32,.75).normalize(),Yn=new Re;Yn.position.copy(br.clone().multiplyScalar(2.78)),Yn.quaternion.setFromUnitVectors(new R(0,0,1),br);let Ua=new St({color:10217727,transparent:!0,opacity:.74,depthWrite:!1,blending:ot}),lc=new St({color:16759016,transparent:!0,opacity:.62,depthWrite:!1,blending:ot}),cc=new Ge(new cn(.42,.03,8,40),Ua),uc=new Ge(new cn(.26,.02,8,30),lc);Yn.add(cc,uc);let Cs=new Re,b=new Ie(.016,.016,.28,6);for(let N=0;N<8;N+=1){let L=N/8*sn,F=new Ge(b,Ua);F.position.set(Math.cos(L)*.32,Math.sin(L)*.32,0),F.rotation.z=L-Math.PI/2,Cs.add(F)}Yn.add(Cs);let O=new Ge(new Ie(.085,.085,.3,16,1,!0),new St({color:7334143,transparent:!0,opacity:.18,side:Xt,depthWrite:!1}));O.rotation.x=Math.PI/2,Yn.add(O);let Y=new Ge(new bt(.06,12,8),new St({color:16765681,transparent:!0,opacity:.9,depthWrite:!1}));Yn.add(Y);let W=[];for(let N=0;N<6;N+=1){let L=N%2===1,F=N/6*sn,ce=new Ge(new bt(.045,10,7),new St({color:L?16761466:7727359,transparent:!0,opacity:.9,depthWrite:!1,blending:ot}));ce.position.set(Math.cos(F)*.09,Math.sin(F)*.09,L?.62:-.62),Yn.add(ce),W.push({mesh:ce,phase:N/6,speed:.28+N%2*.1,dir:L?1:-1})}qn.add(Yn);let V=new Re;qn.add(V);let Ee=[],Ne=[],Me=[],Fe=[];for(let N=0;N<34;N+=1){let L=[],ce=Dn(t).multiplyScalar(.5+t()*1.5);L.push(ce);for(let Ut=0;Ut<3;Ut+=1){let _n=Dn(t).multiplyScalar(.55+t()*1.6);L.push(_n)}let Le=new Sn(L,!1,"catmullrom",.55),ze=30,$e=t(),gt=Le.getPoint(0);for(let Ut=1;Ut<ze;Ut+=1){let _n=Ut/(ze-1),rn=Le.getPoint(_n);Ee.push(gt.x,gt.y,gt.z,rn.x,rn.y,rn.z),Ne.push((Ut-1)/(ze-1),_n),Me.push($e,$e),gt=rn,Fe.push(rn.x,rn.y,rn.z)}}let ke=new xt;ke.setAttribute("position",new tt(Ee,3)),ke.setAttribute("aT",new tt(Ne,1)),ke.setAttribute("aSeed",new tt(Me,1));let ut=new vt({uniforms:{uTime:n,uOpacity:{value:.3},uColorA:{value:new pe(16735168)},uColorB:{value:new pe(9141247)}},vertexShader:Zu,fragmentShader:Ku,transparent:!0,depthWrite:!1,blending:ot}),ft=new ki(ke,ut);ft.frustumCulled=!1,V.add(ft);let Oe=new xt;Oe.setAttribute("position",new tt(Fe,3));let Ct=new Mn({color:16751581,size:.028,sizeAttenuation:!0,transparent:!0,opacity:.42,depthWrite:!1,blending:ot}),Yt=new dn(Oe,Ct);Yt.frustumCulled=!1,V.add(Yt);let Bt=new Ge(new $s(2.66,2),new St({color:9397247,wireframe:!0,transparent:!0,opacity:.025,depthWrite:!1,blending:ot}));V.add(Bt);let Dt=new Tn(11820287,12,10,2);Dt.position.set(0,0,0),qn.add(Dt);let kt=new Re;a.add(kt);let Ce=[[4.6,1.8,2.4],[5.6,-.8,1],[4.2,-2.2,3.8],[6.4,1,-1.2],[3.8,2.8,-2.6],[2,-4.2,2.2],[-3,4,3],[-5.2,-2.8,-2],[.5,5,1]],un=new vt({uniforms:{uTime:n,uOpacity:{value:.76},uColorA:{value:new pe(8007441)},uColorB:{value:new pe(16752202)},uColorC:{value:new pe(16770212)}},vertexShader:Nf,fragmentShader:Lf,transparent:!0,depthWrite:!0}),Et=new vt({uniforms:{uTime:n,uOpacity:{value:.15},uColor:{value:new pe(16754255)},uColorB:{value:new pe(5437413)},uPower:{value:2.6}},vertexShader:mr,fragmentShader:gr,transparent:!0,depthWrite:!1,side:Kt,blending:ot}),En=new ii(.42,1.5,6,18),On=new ii(.5,1.55,6,18);for(let N=0;N<Ce.length;N+=1){let L=new Re;L.position.fromArray(Ce[N]),L.rotation.set(t()*sn,t()*sn,t()*sn),L.scale.set(.8+t()*.45,.82+t()*.55,.8+t()*.45);let F=new Ge(En,un);L.add(F);let ce=new Ge(On,Et);L.add(ce),kt.add(L)}let mn=[],_i=[],Nt=new St({color:7927263,transparent:!0,opacity:.72,depthWrite:!1,blending:ot}),zt=new fn({color:16758878,emissive:10111507,emissiveIntensity:.85,roughness:.3,metalness:.3});[0,1,2,5,7].forEach(N=>{let L=new R().fromArray(Ce[N]),F=L.clone().normalize(),ce=L.clone().addScaledVector(F,.98),Le=new Re;Le.position.copy(ce),Le.quaternion.setFromUnitVectors(new R(0,0,1),F);let ze=new Ge(new cn(.3,.026,8,32),Nt),$e=new Ge(new cn(.17,.015,8,24),Nt);Le.add(ze,$e);let gt=new Re;gt.position.z=-.3;let Ut=new Ge(new bt(.14,16,12),zt),_n=new Ge(new cn(.21,.022,8,28),zt);gt.add(Ut,_n);for(let Ni=0;Ni<3;Ni+=1){let Kn=Ni/3*sn,Tr=new Ge(new bt(.035,8,6),zt);Tr.position.set(Math.cos(Kn)*.19,Math.sin(Kn)*.19,0),gt.add(Tr)}Le.add(gt);let rn=new Ge(new Ie(.035,.045,.25,8),zt);rn.rotation.x=Math.PI/2,rn.position.z=-.14,Le.add(rn),kt.add(Le),_i.push(gt),mn.push({anchor:ce,dir:F,quaternion:Le.quaternion.clone()})});let Zn=180,Lt=new Float32Array(Zn*3),Bn=[];for(let N=0;N<Zn;N+=1){let L=mn[N%mn.length],F=t()*sn;Bn.push({anchor:L.anchor,quaternion:L.quaternion,x:Math.cos(F)*(.02+t()*.07),y:Math.sin(F)*(.02+t()*.07),phase:t(),speed:.24+t()*.38})}let ai=new xt;ai.setAttribute("position",new Pt(Lt,3));let Fa=new Mn({color:9435135,size:.045,sizeAttenuation:!0,transparent:!0,opacity:.62,depthWrite:!1,blending:ot}),nh=new dn(ai,Fa);nh.frustumCulled=!1,kt.add(nh);let ih=520,Oa=new Float32Array(ih*3),hc=[];for(let N=0;N<ih;N+=1){let L=new R().fromArray(Ce[Math.floor(t()*Ce.length)]);hc.push({center:L,angle:t()*sn,radius:.72+t()*.8,speed:.15+t()*.55,y:(t()-.5)*1.8})}let dc=new xt;dc.setAttribute("position",new Pt(Oa,3));let tp=new Mn({color:8781810,size:.06,sizeAttenuation:!0,transparent:!0,opacity:.46,depthWrite:!1,blending:ot}),sh=new dn(dc,tp);sh.frustumCulled=!1,kt.add(sh);let fc=120,Ba=new Float32Array(fc*3),pc=new Float32Array(fc),Mr=[];for(let N=0;N<fc;N+=1){let L=mn[N%mn.length],F=L.dir.clone(),ce=new R(-F.y,F.x,0).normalize();Mr.push({origin:L.anchor.clone().addScaledVector(F,-.34),dir:F,tangent:ce,age:t()*3,life:2.6+t()*2.4,speed:.34+t()*.55,wobble:t()*sn}),pc[N]=Mr[N].age/Mr[N].life}let Sr=new xt;Sr.setAttribute("position",new Pt(Ba,3)),Sr.setAttribute("aLife",new Pt(pc,1));let np=new vt({uniforms:{uPixelRatio:s,uSize:{value:1.4},uOpacity:{value:.5}},vertexShader:`
      uniform float uPixelRatio;
      uniform float uSize;
      attribute float aLife;
      varying float vLife;
      void main() {
        vLife = aLife;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uSize * uPixelRatio * (1.0 - aLife) * (180.0 / max(-mv.z, 0.1));
      }
    `,fragmentShader:`
      uniform float uOpacity;
      varying float vLife;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c);
        float core = smoothstep(0.5, 0.02, d);
        gl_FragColor = vec4(vec3(1.0, 0.82, 0.4) * (1.4 + (1.0 - vLife)), core * uOpacity * (1.0 - vLife));
      }
    `,transparent:!0,depthWrite:!1,blending:ot}),rh=new dn(Sr,np);rh.frustumCulled=!1,kt.add(rh);let ah=56,ka=new Float32Array(ah*3),mc=[];for(let N=0;N<ah;N+=1){let L=mn[N%mn.length];mc.push({anchor:L.anchor,dir:L.dir,tangent:new R(-L.dir.y,L.dir.x,0).normalize(),phase:t(),speed:.2+t()*.28})}let gc=new xt;gc.setAttribute("position",new Pt(ka,3));let ip=new Mn({color:9427199,size:.042,sizeAttenuation:!0,transparent:!0,opacity:.32,depthWrite:!1,blending:ot}),oh=new dn(gc,ip);oh.frustumCulled=!1,kt.add(oh);let xc=new Tn(16751687,20,16,2);xc.position.set(4.9,.2,1.8),kt.add(xc);let ss=new Re;a.add(ss);let lh=new vt({uniforms:{uTime:n,uOpacity:{value:.38},uColorA:{value:new pe(1799531)},uColorB:{value:new pe(16760947)}},vertexShader:Df,fragmentShader:Uf,transparent:!0,depthWrite:!1,blending:ot}),vc=[];for(let N=0;N<13;N+=1){let L=[],F=t()*sn,ce=-1.8+t()*3.4,Le=3.2+t()*1.7;for(let gt=0;gt<4;gt+=1){F+=.38+t()*.72;let Ut=Le+Math.sin(F*2.1+N)*.5;L.push(new R(Math.cos(F)*Ut-.5,ce+Math.sin(F*1.3)*.5,Math.sin(F)*Ut)),ce+=(t()-.5)*1.2}let ze=new Sn(L,!1,"catmullrom",.5);vc.push(ze);let $e=new Ge(new mi(ze,110,.038+t()*.045,6,!1),lh);ss.add($e)}let ch=440,uh=new Float32Array(ch*3);for(let N=0;N<ch;N+=1){let F=vc[Math.floor(t()*vc.length)].getPoint(t()),ce=Dn(t).multiplyScalar(.03+t()*.07);F.add(ce),uh.set([F.x,F.y,F.z],N*3)}let hh=new xt;hh.setAttribute("position",new Pt(uh,3));let sp=new Mn({color:16767648,size:.045,sizeAttenuation:!0,transparent:!0,opacity:.42,depthWrite:!1,blending:ot}),dh=new dn(hh,sp);dh.frustumCulled=!1,ss.add(dh);let za=new Re;za.position.set(-3.35,-.25,.75),za.rotation.set(.36,.85,.2),ss.add(za);let rp=new fn({color:16753234,emissive:10239244,emissiveIntensity:.7,roughness:.34,metalness:.16,transparent:!0,opacity:.55});for(let N=0;N<6;N+=1){let L=1.13-N*.08,F=Math.PI*(1.18+N*.025),ce=new Ge(new cn(L,.048,8,80,F),rp);ce.position.z=(N-2.5)*.16,ce.rotation.z=-F*.5+Math.PI*.5,za.add(ce)}let Ha=[];for(let N=0;N<18;N+=1){let L=new R(-3.4+(t()-.5)*1.2,.3+(t()-.5)*1.2,1.1+(t()-.5)*1.2),F=new R(-3.5+(t()-.5)*.8,-.3+(t()-.5)*.8,1.1+(t()-.5)*.8),ce=L.clone().lerp(F,.5).add(Dn(t).multiplyScalar(.8));Ha.push(new Sn([L,ce,F]))}for(let N=0;N<22;N+=1){let L=new R(-3.5,-.25,.8),F=Dn(t);F.x=Math.abs(F.x)*.8+.1,F.z=Math.abs(F.z)*.8+.1;let ce=F.normalize().multiplyScalar(Ii-.2),Le=L.clone().lerp(ce,.5).add(Dn(t).multiplyScalar(1.6));Ha.push(new Sn([L,Le,ce]))}let ap=new bt(.115,12,9),op=[new Gn({color:16764807,emissive:13396511,emissiveIntensity:.9,roughness:.22,metalness:.05,transmission:.45,thickness:.2,transparent:!0,opacity:.62,envMapIntensity:1}),new Gn({color:9437168,emissive:1346692,emissiveIntensity:.9,roughness:.2,metalness:.05,transmission:.4,thickness:.2,transparent:!0,opacity:.6,envMapIntensity:1})],fh=[];for(let N=0;N<40;N+=1){let L=new Ge(ap,op[N%2]),F=Ha[N%Ha.length],ce={mesh:L,route:F,offset:t(),speed:.018+t()*.03,phase:t()*sn};fh.push(ce),ss.add(L)}let lp=new bt(.16,16,12),cp=new fn({color:14050674,emissive:7017762,emissiveIntensity:.72,roughness:.32,metalness:.08,transparent:!0,opacity:.78});for(let N=0;N<9;N+=1){let L=new Ge(lp,cp);L.position.set(-3.5+(t()-.5)*1.9,-.55+(t()-.5)*1.7,.9+(t()-.5)*1.7),L.scale.setScalar(.75+t()*.9),ss.add(L)}let rs=new Re;rs.scale.setScalar(1.16),a.add(rs);let up=new ii(.075,.4,4,10),hp=[new fn({color:16738996,emissive:11869551,emissiveIntensity:.7,roughness:.3,metalness:.15,transparent:!0,opacity:.85}),new fn({color:7600639,emissive:1478300,emissiveIntensity:.7,roughness:.28,metalness:.16,transparent:!0,opacity:.85})],Ga=[];for(let N=0;N<14;N+=1){let L=N/14*sn+.12,F=new R((t()-.5)*.35,Math.cos(L)*1.28,Math.sin(L)*1.28);for(let ce of[-1,1]){let Le=new Re,ze=hp[ce>0?0:1];for(let $e=0;$e<2;$e+=1){let gt=new Ge(up,ze);gt.rotation.z=($e===0?1:-1)*.58,gt.position.x=($e===0?1:-1)*.1,Le.add(gt)}Le.position.copy(F).add(new R(ce*.1,ce*.045,0)),rs.add(Le),Ga.push({group:Le,meta:Le.position.clone(),side:ce,phase:t()*sn,baseScale:.82+t()*.35})}}let dp=new Float32Array(Ga.length*2*3),Va=new xt;Va.setAttribute("position",new Pt(dp,3));let ph=new fs({color:8648959,transparent:!0,opacity:.2,depthWrite:!1,blending:ot}),mh=new ki(Va,ph);mh.frustumCulled=!1,rs.add(mh);let fp=new vt({uniforms:{uTime:n,uOpacity:{value:.55},uColor:{value:new pe(8257520)},uColorB:{value:new pe(16738996)},uPower:{value:2.1}},vertexShader:mr,fragmentShader:gr,transparent:!0,depthWrite:!1,blending:ot}),yc=[];for(let N of[-4.8,4.8]){let L=new Ge(new bt(.22,18,12),fp);L.position.set(N,0,0),rs.add(L),yc.push(L)}let pp=new vt({uniforms:{uTime:n,uOpacity:{value:.28},uColor:{value:new pe(9075967)},uColorB:{value:new pe(7012317)},uPower:{value:2.3}},vertexShader:mr,fragmentShader:gr,transparent:!0,depthWrite:!1,side:Xt,blending:ot}),_c=[];for(let N of[-3.8,3.8]){let L=new Ge(new bt(.95,32,24),pp);L.position.set(N,0,0),L.scale.setScalar(.01),rs.add(L),_c.push(L)}y("membrane",De),y("lipids",we),y("proteins",mt),y("particles",$),y("cytoskeleton",ge),y("nucleus",qn),y("mitochondria",kt),y("endomembrane",ss),y("mitosis",rs);let le={time:0,chapter:0,chapterStart:0,paused:!1,brightness:.58,flash:1,yaw:0,yawTarget:0,pitch:0,pitchTarget:0,pointerX:0,pointerY:0,pointerTargetX:0,pointerTargetY:0,zoom:1,zoomTarget:1,distanceScale:1,dragging:!1,dragDistance:0,lastPointerX:0,lastPointerY:0},Wa=new R().fromArray(nn[0].camera.pos),as=new R().fromArray(nn[0].camera.target),mp=new R,gh=new R,Xa=new R,Er=new R,qa=nn[0].camera.fov;for(let N of P.values())N.weight=Xu[N.name][le.chapter],N.target=N.weight,w(N,N.weight);function xh(N,L=!1){let F=Cn(N,0,nn.length-1);le.chapter=F,le.chapterStart=le.time,le.flash=1,le.yawTarget=0,le.pitchTarget=0,le.zoomTarget=1,le.pointerTargetX=0,le.pointerTargetY=0,Wa.fromArray(nn[F].camera.pos),as.fromArray(nn[F].camera.target),qa=nn[F].camera.fov;for(let ce of P.values())ce.target=Xu[ce.name][F],L&&(ce.weight=ce.target,w(ce,ce.weight));L&&(u.position.copy(Wa),Xa.copy(as),u.lookAt(Xa),u.fov=qa,u.updateProjectionMatrix())}function gp(N){let L=1-Math.exp(-N*1.55);for(let F of P.values())Math.abs(F.target-F.weight)<6e-4||(F.weight+=(F.target-F.weight)*L,w(F,F.weight))}function vh(N){let L=Cn(Number(N)||.58,.3,1);le.brightness=L,o.toneMappingExposure=.55+L*.5,f.strength=.14+L*.46}function xp(N){le.yaw+=(le.yawTarget-le.yaw)*(1-Math.exp(-N*4)),le.pitch+=(le.pitchTarget-le.pitch)*(1-Math.exp(-N*4)),le.zoom+=(le.zoomTarget-le.zoom)*(1-Math.exp(-N*3.2)),le.pointerX+=(le.pointerTargetX-le.pointerX)*(1-Math.exp(-N*2.5)),le.pointerY+=(le.pointerTargetY-le.pointerY)*(1-Math.exp(-N*2.5));let L=Wa.distanceTo(as),F=Math.max(1.4,L*Cn(le.zoom,.42,1.75)*le.distanceScale),ce=mp.copy(as);Er.copy(Wa).sub(as),Er.normalize().multiplyScalar(F),Er.applyAxisAngle(uy,le.yaw),Er.applyAxisAngle(cy,le.pitch),ce.copy(as).add(Er);let Le=le.dragging?0:Cn((F-5.5)/16,0,1);ce.x+=le.pointerX*F*.018*Le+Math.sin(le.time*.21)*.05,ce.y+=-le.pointerY*F*.013*Le+Math.cos(le.time*.17)*.04,u.position.lerp(ce,1-Math.exp(-N*1.5)),gh.copy(as),Xa.lerp(gh,1-Math.exp(-N*1.6)),u.lookAt(Xa),u.fov+=(qa-u.fov)*(1-Math.exp(-N*1.4)),u.updateProjectionMatrix()}function vp(N){let L=1+Math.sin(le.time*.64)*.006;Mt.scale.setScalar(L),dt.scale.setScalar(L)}function yp(N){V.rotation.y+=N*.018,V.rotation.x=Math.sin(le.time*.09)*.12,is.rotation.y+=N*.05,_r.rotation.y-=N*.012,Cs.rotation.z=le.time*.14,W.forEach(({mesh:L,phase:F,speed:ce,dir:Le})=>{let ze=((le.time*ce+F)%1+1)%1;L.position.z=Le>0?-.62+ze*1.24:.62-ze*1.24,L.scale.setScalar(.7+Math.sin(ze*Math.PI)*.5),L.material.opacity=.32+Math.sin(ze*Math.PI)*.6})}function _p(){for(let N=0;N<At.length;N+=1){let L=At[N],F=(L.offset+le.time*L.speed)%1;if(!Number.isFinite(F)||!L.samples||L.samples.length<2)continue;let ce=Math.max(0,Math.min(1,F))*(L.samples.length-1),Le=Math.floor(ce),ze=Math.min(L.samples.length-1,Le+1),$e=ce-Le,gt=L.samples[Le],Ut=L.samples[ze];It[N*3]=gt.x+(Ut.x-gt.x)*$e+L.radial.x,It[N*3+1]=gt.y+(Ut.y-gt.y)*$e+L.radial.y,It[N*3+2]=gt.z+(Ut.z-gt.z)*$e+L.radial.z}yn.attributes.position.needsUpdate=!0}let kn=new R;function bp(N){for(let L=0;L<hc.length;L+=1){let F=hc[L],ce=F.angle+le.time*F.speed,Le=F.radius*(.82+Math.sin(le.time*.4+F.angle)*.14);Oa[L*3]=F.center.x+Math.cos(ce)*Le,Oa[L*3+1]=F.center.y+F.y+Math.sin(ce*1.7)*.35,Oa[L*3+2]=F.center.z+Math.sin(ce)*Le}dc.attributes.position.needsUpdate=!0;for(let L=0;L<Bn.length;L+=1){let F=Bn[L],ce=((le.time*F.speed+F.phase)%1+1)%1;kn.set(F.x,F.y,.58-ce*.92).applyQuaternion(F.quaternion).add(F.anchor),Lt[L*3]=kn.x,Lt[L*3+1]=kn.y,Lt[L*3+2]=kn.z}ai.attributes.position.needsUpdate=!0;for(let L=0;L<mc.length;L+=1){let F=mc[L],ce=((le.time*F.speed+F.phase)%1+1)%1;kn.copy(F.anchor).addScaledVector(F.dir,1.02-ce*.82).addScaledVector(F.tangent,Math.sin(ce*sn+F.phase)*.12),ka[L*3]=kn.x,ka[L*3+1]=kn.y,ka[L*3+2]=kn.z}gc.attributes.position.needsUpdate=!0;for(let L=0;L<Mr.length;L+=1){let F=Mr[L];F.age+=N,F.age>F.life&&(F.age=0);let ce=Cn(F.age/F.life,0,1);kn.copy(F.origin).addScaledVector(F.dir,F.age*F.speed).addScaledVector(F.tangent,Math.sin(F.age*1.8+F.wobble)*.18),Ba[L*3]=kn.x,Ba[L*3+1]=kn.y,Ba[L*3+2]=kn.z,pc[L]=ce}Sr.attributes.position.needsUpdate=!0,Sr.attributes.aLife.needsUpdate=!0,_i.forEach((L,F)=>{L.rotation.z=le.time*(1.35+F*.08)}),xc.intensity=15+Math.sin(le.time*1.7)*5}function Mp(){let N=le.time;for(let L of fh){let F=(L.offset+N*L.speed)%1;if(!Number.isFinite(F))continue;let ce=L.route.getPoint(F);L.mesh.position.copy(ce);let Le=.3+.95*Math.sin(Math.PI*F);L.mesh.scale.setScalar(Le),L.mesh.rotation.y+=.008,L.mesh.rotation.x+=.004}lh.uniforms.uTime.value=N}let yh=new R,Ya=new R;function Sp(){if(le.chapter!==6)return;let N=Math.max(0,le.time-le.chapterStart)%12,L=$u(0,2.6,N),F=$u(5.2,9.4,N),ce=$u(7.4,10.8,N),Le=Va.attributes.position.array;for(let ze=0;ze<Ga.length;ze+=1){let $e=Ga[ze],gt=$e.side*(3.45+.22*Math.sin($e.phase));yh.set(gt,$e.meta.y*.78,$e.meta.z*.78),$e.group.position.lerpVectors($e.meta,yh,F),$e.group.position.y+=Math.sin(N*2+$e.phase)*.045,$e.group.position.z+=Math.cos(N*1.7+$e.phase)*.045;let Ut=.28+.72*L;$e.group.scale.setScalar(Ut*$e.baseScale),$e.group.rotation.z=Math.sin($e.phase+F*1.8)*.34,Ya.set($e.side*4.8,0,0),Le[ze*6]=Ya.x,Le[ze*6+1]=Ya.y,Le[ze*6+2]=Ya.z,Le[ze*6+3]=$e.group.position.x,Le[ze*6+4]=$e.group.position.y,Le[ze*6+5]=$e.group.position.z}Va.attributes.position.needsUpdate=!0,ph.opacity=.07+.17*L;for(let ze=0;ze<_c.length;ze+=1){let $e=.01+ce*(.92+Math.sin(le.time*1.6+ze)*.05);_c[ze].scale.setScalar($e)}yc[0].scale.setScalar(.85+Math.sin(le.time*2.2)*.12),yc[1].scale.setScalar(.85+Math.cos(le.time*2.1)*.12)}let bc=0,Za=!1,_h=!1,bh=performance.now();function Mh(N){if(!(N.button!==void 0&&N.button!==0)&&(le.dragging=!0,le.dragDistance=0,le.lastPointerX=N.clientX,le.lastPointerY=N.clientY,le.pointerTargetX=0,le.pointerTargetY=0,o.domElement.setPointerCapture))try{o.domElement.setPointerCapture(N.pointerId)}catch{}}function Sh(N){let L=i.getBoundingClientRect();if(L.width>0&&L.height>0&&(le.pointerTargetX=Cn((N.clientX-L.left)/L.width*2-1,-1,1),le.pointerTargetY=Cn((N.clientY-L.top)/L.height*2-1,-1,1)),!le.dragging)return;let F=N.clientX-le.lastPointerX,ce=N.clientY-le.lastPointerY;le.lastPointerX=N.clientX,le.lastPointerY=N.clientY,le.dragDistance+=Math.abs(F)+Math.abs(ce),!(le.dragDistance<3)&&(le.yawTarget=Cn(le.yawTarget+F*.0021,-.8,.8),le.pitchTarget=Cn(le.pitchTarget+ce*.0016,-.22,.22))}function Ka(N){if(le.dragging=!1,o.domElement.releasePointerCapture&&N.pointerId!==void 0)try{o.domElement.releasePointerCapture(N.pointerId)}catch{}}function Eh(){le.pointerTargetX=0,le.pointerTargetY=0}function wh(N){N.preventDefault();let L=N.deltaMode===1?N.deltaY*16:N.deltaMode===2?N.deltaY*400:N.deltaY,F=Cn(L*.0012,-.18,.18);le.zoomTarget=Cn(le.zoomTarget*Math.exp(F),.42,1.75)}function Th(N){N.preventDefault(),Ah()}function Ah(){le.yawTarget=0,le.pitchTarget=0,le.zoomTarget=1,le.pointerTargetX=0,le.pointerTargetY=0}o.domElement.addEventListener("pointerdown",Mh),o.domElement.addEventListener("pointermove",Sh),o.domElement.addEventListener("pointerup",Ka),o.domElement.addEventListener("pointercancel",Ka),o.domElement.addEventListener("pointerleave",Eh),o.domElement.addEventListener("wheel",wh,{passive:!1}),o.domElement.addEventListener("dblclick",Th);function wr(){if(Za)return;let N=Math.max(1,i.clientWidth),L=Math.max(1,i.clientHeight),F=Math.min(window.devicePixelRatio||1,1.5);o.setPixelRatio(F),o.setSize(N,L,!0),d.setPixelRatio(F),d.setSize(N,L),u.aspect=N/L,u.updateProjectionMatrix(),s.value=F,g.uniforms.uResolution.value.set(N*F,L*F)}let Ja=typeof ResizeObserver<"u"?new ResizeObserver(wr):null;Ja&&Ja.observe(i),window.addEventListener("resize",wr);function Ch(){requestAnimationFrame(wr)}document.addEventListener("fullscreenchange",Ch),wr();function Rh(N){if(Za||(bc=requestAnimationFrame(Rh),_h))return;let L=Math.min((N-bh)/1e3,.05);bh=N;let F=le.paused?.14:1;le.time+=L*F,n.value=le.time,g.uniforms.uTime.value=le.time,le.flash=Math.max(0,le.flash-L*1.8),g.uniforms.uFlash.value=le.flash*.45,g.uniforms.uGrain.value=le.paused?.016:.022,le.paused||(a.rotation.y+=L*.013,I.rotation.y+=L*.0035,ee.rotation.y+=L*.006,Z.rotation.y+=L*.002),gp(L),xp(L),vp(L),yp(L),_p(),bp(L*F),Mp(),Sp();try{d.render()}catch(ce){_h=!0,typeof e.onError=="function"&&e.onError(ce);return}e.didRender||(e.didRender=!0,typeof e.onReady=="function"&&e.onReady())}xh(0,!0),vh(le.brightness),u.aspect=Math.max(1,i.clientWidth)/Math.max(1,i.clientHeight),u.fov=qa,u.updateProjectionMatrix(),g.uniforms.uResolution.value.set(Math.max(1,i.clientWidth)*c,Math.max(1,i.clientHeight)*c),bc=requestAnimationFrame(Rh);function Ep(){if(Za)return;Za=!0,cancelAnimationFrame(bc),o.domElement.removeEventListener("pointerdown",Mh),o.domElement.removeEventListener("pointermove",Sh),o.domElement.removeEventListener("pointerup",Ka),o.domElement.removeEventListener("pointercancel",Ka),o.domElement.removeEventListener("pointerleave",Eh),o.domElement.removeEventListener("wheel",wh),o.domElement.removeEventListener("dblclick",Th),window.removeEventListener("resize",wr),document.removeEventListener("fullscreenchange",Ch),Ja&&Ja.disconnect();let N=new Set,L=new Set;l.traverse(F=>{if(F.geometry&&N.add(F.geometry),F.material){let ce=Array.isArray(F.material)?F.material:[F.material];for(let Le of ce)Le&&L.add(Le)}});for(let F of N)try{F.dispose()}catch{}for(let F of L)try{F.map&&F.map.dispose(),F.dispose()}catch{}x&&x.dispose();try{f.dispose()}catch{}try{d.dispose()}catch{}o.dispose();try{o.forceContextLoss()}catch{}o.domElement.parentNode===i&&i.removeChild(o.domElement)}return{setChapter(N){xh(N,!1)},setPaused(N){le.paused=!!N},setBrightness(N){vh(N)},setDistanceScale(N){le.distanceScale=Cn(Number(N)||1,.6,3)},resetView(){Ah()},pulse(){le.flash=Math.min(1.6,le.flash+.9)},getChapter(){return le.chapter},dispose:Ep,renderer:o,scene:l}}var Vf=[{id:"ch01",no:"\u7B2C\u4E00\u7AE0",title:"\u7EEA\u8BBA",pages:"1\u201317",scene:0,overview:"\u4ECE\u7EC6\u80DE\u7684\u53D1\u73B0\u3001\u7EC6\u80DE\u5B66\u8BF4\u7684\u5EFA\u7ACB\u5230\u73B0\u4EE3\u7EC6\u80DE\u751F\u7269\u5B66\u7684\u5F62\u6210\uFF0C\u5EFA\u7ACB\u201C\u7EC6\u80DE\u662F\u751F\u547D\u6D3B\u52A8\u57FA\u672C\u5355\u4F4D\u201D\u7684\u6846\u67B6\uFF0C\u5E76\u8BA4\u8BC6\u7EC6\u80DE\u7684\u540C\u4E00\u6027\u4E0E\u591A\u6837\u6027\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u7EC6\u80DE\u5B66\u4E0E\u7EC6\u80DE\u751F\u7269\u5B66",pages:"1\u20135",outline:["\u7EC6\u80DE\u7684\u53D1\u73B0","\u7EC6\u80DE\u5B66\u8BF4\u7684\u5EFA\u7ACB\u53CA\u5176\u610F\u4E49","\u4ECE\u7ECF\u5178\u7EC6\u80DE\u5B66\u5230\u5B9E\u9A8C\u7EC6\u80DE\u5B66\u65F6\u671F","\u7EC6\u80DE\u751F\u7269\u5B66\u5B66\u79D1\u7684\u5F62\u6210\u4E0E\u53D1\u5C55"],summary:"\u7EC6\u80DE\u751F\u7269\u5B66\u4ECE\u663E\u5FAE\u5F62\u6001\u63CF\u8FF0\u53D1\u5C55\u800C\u6765\uFF0C\u5728\u7EC6\u80DE\u5B66\u8BF4\u3001\u5B9E\u9A8C\u7EC6\u80DE\u5B66\u548C\u5206\u5B50\u751F\u7269\u5B66\u7684\u57FA\u7840\u4E0A\uFF0C\u5F62\u6210\u7814\u7A76\u7EC6\u80DE\u7ED3\u6784\u3001\u529F\u80FD\u4E0E\u751F\u547D\u6D3B\u52A8\u89C4\u5F8B\u7684\u7EFC\u5408\u5B66\u79D1\u3002",points:["1665 \u5E74 Hooke \u89C2\u5BDF\u5230\u7EC6\u80DE\u58C1\u5E76\u547D\u540D\u201Ccell\u201D\uFF1BLeeuwenhoek \u968F\u540E\u89C2\u5BDF\u5230\u6D3B\u7EC6\u80DE\u3002","1838\u20141839 \u5E74 Schleiden \u4E0E Schwann \u5EFA\u7ACB\u7EC6\u80DE\u5B66\u8BF4\uFF1BVirchow \u8865\u5145\u201C\u7EC6\u80DE\u6765\u81EA\u7EC6\u80DE\u201D\u3002","20 \u4E16\u7EAA\u4E2D\u53F6\u4EE5\u540E\uFF0C\u7535\u5B50\u663E\u5FAE\u955C\u3001\u5206\u5B50\u751F\u7269\u5B66\u548C\u6D3B\u7EC6\u80DE\u6210\u50CF\u628A\u7EC6\u80DE\u7814\u7A76\u63A8\u8FDB\u5230\u7EC6\u80DE\u5668\u4E0E\u5206\u5B50\u673A\u5236\u5C42\u9762\u3002"],terms:[{t:"\u7EC6\u80DE\u5B66\u8BF4",d:"\u4E00\u5207\u751F\u7269\u7531\u7EC6\u80DE\u6784\u6210\uFF1B\u7EC6\u80DE\u662F\u7ED3\u6784\u548C\u529F\u80FD\u7684\u57FA\u672C\u5355\u4F4D\uFF1B\u7EC6\u80DE\u6765\u81EA\u5DF2\u5B58\u5728\u7684\u7EC6\u80DE\u3002"},{t:"\u7EC6\u80DE\u751F\u7269\u5B66",d:"\u5E94\u7528\u73B0\u4EE3\u7269\u7406\u3001\u5316\u5B66\u548C\u5206\u5B50\u751F\u7269\u5B66\u65B9\u6CD5\uFF0C\u5728\u7EC6\u80DE\u6C34\u5E73\u7814\u7A76\u751F\u547D\u6D3B\u52A8\u7684\u5B66\u79D1\u3002"}],check:{q:"\u7EC6\u80DE\u5B66\u8BF4\u4E3A\u4EC0\u4E48\u662F\u751F\u7269\u5B66\u7684\u57FA\u7840\u7406\u8BBA\uFF1F",a:"\u5B83\u628A\u751F\u7269\u754C\u7684\u7EDF\u4E00\u6027\u5EFA\u7ACB\u5728\u53EF\u89C2\u5BDF\u7684\u7EC6\u80DE\u5355\u4F4D\u4E0A\uFF0C\u5E76\u4E0E\u8FDB\u5316\u8BBA\u3001\u9057\u4F20\u5B66\u4E00\u8D77\u6784\u6210\u73B0\u4EE3\u751F\u7269\u5B66\u7684\u57FA\u7840\uFF1B\u540E\u7EED\u7814\u7A76\u90FD\u53EF\u5728\u7EC6\u80DE\u5C42\u9762\u8FFD\u6EAF\u7ED3\u6784\u4E0E\u529F\u80FD\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"\u7EC6\u80DE\u7684\u540C\u4E00\u6027\u4E0E\u591A\u6837\u6027",pages:"5\u201317",outline:["\u7EC6\u80DE\u662F\u751F\u547D\u6D3B\u52A8\u7684\u57FA\u672C\u5355\u4F4D","\u7EC6\u80DE\u7684\u57FA\u672C\u7C7B\u578B","\u75C5\u6BD2\u53CA\u5176\u4E0E\u7EC6\u80DE\u7684\u5173\u7CFB"],summary:"\u6240\u6709\u7EC6\u80DE\u5171\u4EAB\u9057\u4F20\u5BC6\u7801\u3001\u819C\u7ED3\u6784\u548C\u80FD\u91CF\u4EE3\u8C22\u7B49\u57FA\u672C\u673A\u5236\uFF0C\u4F46\u539F\u6838\u4E0E\u771F\u6838\u7EC6\u80DE\u5728\u6838\u819C\u3001\u5185\u819C\u7CFB\u7EDF\u548C\u7EC6\u80DE\u9AA8\u67B6\u4E0A\u5B58\u5728\u6839\u672C\u5DEE\u5F02\u3002",points:["\u539F\u6838\u7EC6\u80DE\u6CA1\u6709\u6838\u819C\u5305\u56F4\u7684\u7EC6\u80DE\u6838\uFF0CDNA \u96C6\u4E2D\u5728\u62DF\u6838\uFF1B\u6838\u7CD6\u4F53\u4E3A 70S\uFF0C\u65E0\u5178\u578B\u819C\u6027\u7EC6\u80DE\u5668\u3002","\u771F\u6838\u7EC6\u80DE\u6709\u771F\u6B63\u7684\u7EC6\u80DE\u6838\u3001\u5185\u819C\u7CFB\u7EDF\u548C\u7EC6\u80DE\u9AA8\u67B6\uFF0C\u6838\u7CD6\u4F53\u4E3A 80S\u3002","\u75C5\u6BD2\u6CA1\u6709\u7EC6\u80DE\u7ED3\u6784\uFF0C\u53EA\u80FD\u4F9D\u8D56\u6D3B\u7EC6\u80DE\u590D\u5236\uFF0C\u662F\u4ECB\u4E8E\u751F\u547D\u4E0E\u975E\u751F\u547D\u4E4B\u95F4\u7684\u975E\u7EC6\u80DE\u5F62\u6001\u3002"],terms:[{t:"\u539F\u6838\u7EC6\u80DE",d:"\u65E0\u6838\u819C\u548C\u771F\u6B63\u7EC6\u80DE\u6838\u7684\u7EC6\u80DE\uFF0C\u4EE3\u8868\u4E3A\u7EC6\u83CC\u4E0E\u53E4\u83CC\u3002"},{t:"\u771F\u6838\u7EC6\u80DE",d:"\u5177\u6709\u6838\u819C\u3001\u7EC6\u80DE\u6838\u548C\u591A\u79CD\u819C\u6027\u7EC6\u80DE\u5668\u7684\u7EC6\u80DE\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48\u8BF4\u201C\u539F\u6838\u7EC6\u80DE\u6CA1\u6709\u7EC6\u80DE\u5668\u201D\u5E76\u4E0D\u51C6\u786E\uFF1F",a:"\u539F\u6838\u7EC6\u80DE\u6709\u6838\u7CD6\u4F53\uFF0C\u90E8\u5206\u8FD8\u6709\u5185\u819C\u8936\u76B1\uFF1B\u53EA\u662F\u6CA1\u6709\u7531\u819C\u5305\u56F4\u7684\u7EC6\u80DE\u6838\u548C\u5178\u578B\u819C\u6027\u7EC6\u80DE\u5668\u3002"}}]},{id:"ch02",no:"\u7B2C\u4E8C\u7AE0",title:"\u7EC6\u80DE\u751F\u7269\u5B66\u7814\u7A76\u65B9\u6CD5",pages:"18\u201339",scene:0,overview:"\u7EC6\u80DE\u751F\u7269\u5B66\u4F9D\u8D56\u201C\u770B\u5F97\u89C1\u3001\u5206\u5F97\u5F00\u3001\u6D4B\u5F97\u51C6\u3001\u6539\u5F97\u52A8\u201D\u7684\u65B9\u6CD5\u4F53\u7CFB\uFF1A\u663E\u5FAE\u6210\u50CF\u3001\u4E9A\u7EC6\u80DE\u5206\u79BB\u3001\u7EC6\u80DE\u57F9\u517B\u4E0E\u5206\u5B50\u5E72\u9884\u5171\u540C\u6784\u6210\u8BC1\u636E\u94FE\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u7EC6\u80DE\u5F62\u6001\u7ED3\u6784\u7684\u89C2\u5BDF\u65B9\u6CD5",pages:"18\u201330",outline:["\u5149\u5B66\u663E\u5FAE\u955C","\u7535\u5B50\u663E\u5FAE\u955C","\u626B\u63CF\u96A7\u9053\u663E\u5FAE\u955C"],summary:"\u663E\u5FAE\u6280\u672F\u7684\u5173\u952E\u6307\u6807\u662F\u5206\u8FA8\u7387\uFF0C\u800C\u4E0D\u53EA\u662F\u653E\u5927\u500D\u6570\uFF1B\u4E0D\u540C\u663E\u5FAE\u65B9\u6CD5\u5728\u6D3B\u7EC6\u80DE\u3001\u8D85\u5FAE\u7ED3\u6784\u548C\u8868\u9762\u5F62\u8C8C\u4E4B\u95F4\u5404\u6709\u53D6\u820D\u3002",points:["\u5149\u5B66\u663E\u5FAE\u955C\u5206\u8FA8\u7387\u7684\u7406\u8BBA\u6781\u9650\u53D7\u884D\u5C04\u9650\u5236\uFF1B\u8367\u5149\u3001\u5171\u805A\u7126\u548C\u8D85\u5206\u8FA8\u6280\u672F\u63D0\u9AD8\u4E86\u5BF9\u6BD4\u5EA6\u4E0E\u5B9A\u4F4D\u7CBE\u5EA6\u3002","\u900F\u5C04\u7535\u955C\uFF08TEM\uFF09\u89C2\u5BDF\u8D85\u8584\u5207\u7247\u7684\u5185\u90E8\u7ED3\u6784\uFF1B\u626B\u63CF\u7535\u955C\uFF08SEM\uFF09\u89C2\u5BDF\u8868\u9762\u5F62\u8C8C\u3002","\u626B\u63CF\u96A7\u9053\u663E\u5FAE\u955C\u548C\u539F\u5B50\u529B\u663E\u5FAE\u955C\u53EF\u5728\u7EB3\u7C73\u5C3A\u5EA6\u63A2\u6D4B\u8868\u9762\uFF0C\u4F46\u6837\u54C1\u4E0E\u6210\u50CF\u6761\u4EF6\u8981\u6C42\u9AD8\u3002"],terms:[{t:"\u5206\u8FA8\u7387",d:"\u80FD\u533A\u5206\u4E24\u4E2A\u76F8\u90BB\u7269\u70B9\u7684\u6700\u5C0F\u8DDD\u79BB\uFF1B\u662F\u663E\u5FAE\u6210\u50CF\u7684\u6838\u5FC3\u6307\u6807\u3002"},{t:"\u8367\u5149\u663E\u5FAE\u955C",d:"\u7528\u8367\u5149\u63A2\u9488\u6807\u8BB0\u7279\u5B9A\u5206\u5B50\uFF0C\u5728\u6697\u80CC\u666F\u4E0B\u89C2\u5BDF\u5176\u5206\u5E03\u4E0E\u52A8\u6001\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48\u7535\u5B50\u663E\u5FAE\u955C\u7684\u5206\u8FA8\u7387\u9AD8\u4E8E\u5149\u5B66\u663E\u5FAE\u955C\uFF1F",a:"\u7535\u5B50\u7684\u5FB7\u5E03\u7F57\u610F\u6CE2\u957F\u8FDC\u5C0F\u4E8E\u53EF\u89C1\u5149\uFF0C\u53D7\u884D\u5C04\u9650\u5236\u66F4\u5C0F\uFF1B\u540C\u65F6\u7535\u955C\u7528\u7535\u78C1\u900F\u955C\u805A\u7126\u7535\u5B50\u675F\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"\u7EC6\u80DE\u53CA\u5176\u7EC4\u5206\u7684\u5206\u6790\u65B9\u6CD5",pages:"30\u201332",outline:["\u7528\u8D85\u79BB\u5FC3\u6280\u672F\u5206\u79BB\u7EC6\u80DE\u7EC4\u5206","\u7279\u5F02\u86CB\u767D\u6297\u539F\u7684\u5B9A\u4F4D\u4E0E\u5B9A\u6027","\u7EC6\u80DE\u5185\u7279\u5F02\u6838\u9178\u7684\u5B9A\u4F4D\u4E0E\u5B9A\u6027","\u7EC6\u80DE\u6210\u5206\u7684\u5206\u6790\u4E0E\u7EC6\u80DE\u5206\u9009\u6280\u672F"],summary:"\u628A\u7EC6\u80DE\u7834\u788E\u3001\u5206\u7EA7\u5206\u79BB\uFF0C\u518D\u7ED3\u5408\u6297\u4F53\u3001\u6838\u9178\u63A2\u9488\u548C\u6D41\u5F0F\u5206\u9009\uFF0C\u53EF\u5728\u7EC6\u80DE\u5668\u4E0E\u5355\u7EC6\u80DE\u6C34\u5E73\u5EFA\u7ACB\u6210\u5206\u2014\u5B9A\u4F4D\u2014\u529F\u80FD\u5BF9\u5E94\u5173\u7CFB\u3002",points:["\u5DEE\u901F\u79BB\u5FC3\u6309\u9897\u7C92\u5927\u5C0F\u548C\u5BC6\u5EA6\u5206\u79BB\u7EC6\u80DE\u6838\u3001\u7EBF\u7C92\u4F53\u3001\u5FAE\u7C92\u4F53\u7B49\u7EC4\u5206\uFF1B\u5BC6\u5EA6\u68AF\u5EA6\u79BB\u5FC3\u53EF\u8FDB\u4E00\u6B65\u7EAF\u5316\u3002","\u514D\u75AB\u8367\u5149/\u514D\u75AB\u7535\u955C\u7528\u7279\u5F02\u6297\u4F53\u5B9A\u4F4D\u86CB\u767D\uFF1B\u539F\u4F4D\u6742\u4EA4\u7528\u6838\u9178\u63A2\u9488\u5B9A\u4F4D DNA \u6216 RNA\u3002","\u6D41\u5F0F\u7EC6\u80DE\u672F\u53EF\u5BF9\u5355\u7EC6\u80DE\u8FDB\u884C\u5B9A\u91CF\u5206\u6790\u4E0E\u5206\u9009\uFF0C\u7EC4\u5B66\u65B9\u6CD5\u53EF\u5E76\u884C\u8BFB\u53D6\u8F6C\u5F55\u672C\u3001\u86CB\u767D\u548C\u4EE3\u8C22\u7269\u3002"],terms:[{t:"\u5DEE\u901F\u79BB\u5FC3",d:"\u901A\u8FC7\u9010\u7EA7\u63D0\u9AD8\u79BB\u5FC3\u529B\uFF0C\u628A\u4E0D\u540C\u5927\u5C0F\u548C\u5BC6\u5EA6\u7684\u7EC6\u80DE\u7EC4\u5206\u4F9D\u6B21\u6C89\u6DC0\u5206\u79BB\u3002"},{t:"\u514D\u75AB\u7EC6\u80DE\u5316\u5B66",d:"\u7528\u5E26\u6807\u8BB0\u7684\u6297\u4F53\u5728\u7EC6\u80DE\u539F\u4F4D\u68C0\u6D4B\u7279\u5B9A\u6297\u539F\u7684\u5206\u5E03\u3002"}],check:{q:"\u5206\u79BB\u7EBF\u7C92\u4F53\u65F6\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u7B49\u6E17\u7F13\u51B2\u6DB2\u548C\u86CB\u767D\u9176\u6291\u5236\u5242\uFF1F",a:"\u7B49\u6E17\u6761\u4EF6\u4FDD\u62A4\u7EC6\u80DE\u5668\u5F62\u6001\u4E0E\u819C\u5B8C\u6574\u6027\uFF0C\u86CB\u767D\u9176\u6291\u5236\u5242\u51CF\u5C11\u86CB\u767D\u964D\u89E3\uFF1B\u4F4E\u6E29\u64CD\u4F5C\u4E5F\u6709\u52A9\u4E8E\u4FDD\u6301\u6D3B\u6027\u3002"}},{no:"\u7B2C\u4E09\u8282",title:"\u7EC6\u80DE\u57F9\u517B\u4E0E\u7EC6\u80DE\u5DE5\u7A0B",pages:"32\u201335",outline:["\u7EC6\u80DE\u57F9\u517B","\u7EC6\u80DE\u5DE5\u7A0B"],summary:"\u4F53\u5916\u57F9\u517B\u4F7F\u7EC6\u80DE\u6210\u4E3A\u53EF\u64CD\u63A7\u7684\u5B9E\u9A8C\u7CFB\u7EDF\uFF1B\u7EC6\u80DE\u878D\u5408\u3001\u57FA\u56E0\u8F6C\u79FB\u548C\u57FA\u56E0\u7F16\u8F91\u5219\u628A\u89C2\u5BDF\u63A8\u8FDB\u5230\u529F\u80FD\u5E72\u9884\u3002",points:["\u539F\u4EE3\u57F9\u517B\u6765\u81EA\u7EC4\u7EC7\u76F4\u63A5\u5206\u79BB\u7684\u7EC6\u80DE\uFF0C\u7EC6\u80DE\u7CFB\u53EF\u957F\u671F\u4F20\u4EE3\u4F46\u53EF\u80FD\u53D1\u751F\u8868\u578B\u6F02\u79FB\u3002","\u57F9\u517B\u9700\u8981\u5408\u9002\u7684\u57F9\u517B\u57FA\u3001\u8840\u6E05/\u751F\u957F\u56E0\u5B50\u3001\u6E29\u5EA6\u3001pH \u548C\u65E0\u83CC\u73AF\u5883\uFF1B\u63A5\u89E6\u6291\u5236\u4E0E\u5BC6\u5EA6\u9650\u5236\u5F71\u54CD\u751F\u957F\u3002","\u7EC6\u80DE\u878D\u5408\u3001\u8F6C\u57FA\u56E0\u3001RNA \u5E72\u6270\u548C CRISPR \u57FA\u56E0\u7F16\u8F91\u53EF\u7528\u4E8E\u6784\u5EFA\u75BE\u75C5\u6A21\u578B\u3001\u751F\u4EA7\u86CB\u767D\u548C\u89E3\u6790\u57FA\u56E0\u529F\u80FD\u3002"],terms:[{t:"\u539F\u4EE3\u57F9\u517B",d:"\u76F4\u63A5\u4ECE\u7EC4\u7EC7\u5206\u79BB\u5E76\u9996\u6B21\u57F9\u517B\u7684\u7EC6\u80DE\uFF0C\u901A\u5E38\u66F4\u63A5\u8FD1\u4F53\u5185\u8868\u578B\u3002"},{t:"\u7EC6\u80DE\u7CFB",d:"\u80FD\u5728\u4F53\u5916\u957F\u671F\u4F20\u4EE3\u3001\u5177\u6709\u76F8\u5BF9\u7A33\u5B9A\u8868\u578B\u7684\u7EC6\u80DE\u7FA4\u4F53\u3002"}],check:{q:"\u539F\u4EE3\u7EC6\u80DE\u4E0E\u8FDE\u7EED\u7EC6\u80DE\u7CFB\u5404\u6709\u4EC0\u4E48\u4F18\u7F3A\u70B9\uFF1F",a:"\u539F\u4EE3\u7EC6\u80DE\u66F4\u63A5\u8FD1\u4F53\u5185\u72B6\u6001\uFF0C\u4F46\u4F20\u4EE3\u6709\u9650\u3001\u6279\u6B21\u5DEE\u5F02\u5927\uFF1B\u8FDE\u7EED\u7EC6\u80DE\u7CFB\u53EF\u957F\u671F\u6269\u589E\u3001\u91CD\u590D\u6027\u597D\uFF0C\u4F46\u53EF\u80FD\u79EF\u7D2F\u9057\u4F20\u4E0E\u8868\u578B\u6539\u53D8\u3002"}},{no:"\u7B2C\u56DB\u8282",title:"\u7EC6\u80DE\u53CA\u751F\u7269\u5927\u5206\u5B50\u7684\u52A8\u6001\u53D8\u5316",pages:"35\u201339",outline:["\u8367\u5149\u6F02\u767D\u6062\u590D\u6280\u672F","\u9175\u6BCD\u53CC\u6742\u4EA4\u6280\u672F","\u8367\u5149\u5171\u632F\u80FD\u91CF\u8F6C\u79FB\u6280\u672F","\u653E\u5C04\u81EA\u663E\u5F71\u6280\u672F"],summary:"\u6D3B\u7EC6\u80DE\u52A8\u6001\u7814\u7A76\u8981\u56DE\u7B54\u201C\u5206\u5B50\u5728\u54EA\u91CC\u3001\u548C\u8C01\u4F5C\u7528\u3001\u505C\u7559\u591A\u4E45\u3001\u5982\u4F55\u79FB\u52A8\u201D\uFF0C\u9700\u8981\u65F6\u95F4\u5206\u8FA8\u7684\u6807\u8BB0\u4E0E\u6270\u52A8\u65B9\u6CD5\u3002",points:["FRAP \u7528\u5F3A\u5149\u6F02\u767D\u5C40\u90E8\u8367\u5149\uFF0C\u6D4B\u91CF\u8367\u5149\u6062\u590D\u901F\u5EA6\uFF0C\u63A8\u65AD\u5206\u5B50\u7684\u6269\u6563\u4E0E\u7ED3\u5408\u52A8\u529B\u5B66\u3002","FRET \u901A\u8FC7\u4E24\u4E2A\u8367\u5149\u57FA\u56E2\u7684\u80FD\u91CF\u8F6C\u79FB\uFF0C\u68C0\u6D4B\u7EB3\u7C73\u5C3A\u5EA6\u7684\u5206\u5B50\u95F4\u8DDD\u79BB\u4E0E\u76F8\u4E92\u4F5C\u7528\u3002","\u9175\u6BCD\u53CC\u6742\u4EA4\u7B5B\u9009\u86CB\u767D\u2014\u86CB\u767D\u76F8\u4E92\u4F5C\u7528\uFF1B\u653E\u5C04\u81EA\u663E\u5F71\u8FFD\u8E2A\u653E\u5C04\u6027\u6807\u8BB0\u5206\u5B50\u7684\u5408\u6210\u3001\u8FD0\u8F93\u4E0E\u5B9A\u4F4D\u3002"],terms:[{t:"FRAP",d:"\u8367\u5149\u6F02\u767D\u540E\u6062\u590D\u6280\u672F\uFF0C\u7528\u6062\u590D\u66F2\u7EBF\u8BC4\u4F30\u5206\u5B50\u8FD0\u52A8\u4E0E\u4EA4\u6362\u901F\u7387\u3002"},{t:"FRET",d:"\u8367\u5149\u5171\u632F\u80FD\u91CF\u8F6C\u79FB\uFF0C\u53EF\u62A5\u544A\u7EB3\u7C73\u5C3A\u5EA6\u5185\u7684\u5206\u5B50\u90BB\u8FD1\u4E0E\u6784\u8C61\u53D8\u5316\u3002"}],check:{q:"FRAP \u6062\u590D\u5F88\u5FEB\u662F\u5426\u4E00\u5B9A\u8BF4\u660E\u5206\u5B50\u6269\u6563\u5FEB\uFF1F",a:"\u4E0D\u4E00\u5B9A\u3002\u6062\u590D\u901F\u5EA6\u8FD8\u53D7\u7ED3\u5408/\u89E3\u79BB\u3001\u7EC6\u80DE\u533A\u5BA4\u548C\u5149\u6591\u5927\u5C0F\u5F71\u54CD\uFF1B\u9700\u7ED3\u5408\u6A21\u578B\u548C\u5BF9\u7167\u5B9E\u9A8C\u89E3\u91CA\u3002"}}]},{id:"ch03",no:"\u7B2C\u4E09\u7AE0",title:"\u7EC6\u80DE\u8D28\u819C",pages:"40\u201355",scene:1,overview:"\u7EC6\u80DE\u8D28\u819C\u662F\u539A\u5EA6\u7EA6 7.5 nm \u7684\u6D41\u52A8\u9576\u5D4C\u754C\u9762\uFF0C\u7531\u819C\u8102\u3001\u819C\u86CB\u767D\u548C\u7CD6\u7C7B\u7EC4\u6210\uFF0C\u8D1F\u8D23\u8FB9\u754C\u3001\u8FD0\u8F93\u3001\u4FE1\u53F7\u3001\u8BC6\u522B\u4E0E\u8FDE\u63A5\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u7EC6\u80DE\u8D28\u819C\u7684\u7ED3\u6784\u6A21\u578B\u4E0E\u57FA\u672C\u6210\u5206",pages:"40\u201349",outline:["\u7EC6\u80DE\u8D28\u819C\u7684\u7ED3\u6784\u6A21\u578B","\u819C\u8102","\u819C\u86CB\u767D"],summary:"\u4ECE\u4E09\u660E\u6CBB\u6A21\u578B\u3001\u5355\u4F4D\u819C\u6A21\u578B\u5230\u6D41\u52A8\u9576\u5D4C\u6A21\u578B\uFF0C\u5B9E\u9A8C\u8BC1\u636E\u9010\u6B65\u786E\u7ACB\u4E86\u201C\u8102\u53CC\u5C42\u4E3A\u9AA8\u67B6\u3001\u86CB\u767D\u8D28\u9576\u5D4C\u5176\u4E2D\u201D\u7684\u819C\u7ED3\u6784\u3002",points:["\u6D41\u52A8\u9576\u5D4C\u6A21\u578B\u7531 Singer \u4E0E Nicolson \u4E8E 1972 \u5E74\u63D0\u51FA\uFF1A\u819C\u8102\u5F62\u6210\u53EF\u6D41\u52A8\u7684\u53CC\u5C42\uFF0C\u819C\u86CB\u767D\u4EE5\u9576\u5D4C\u6216\u8D2F\u7A7F\u65B9\u5F0F\u5206\u5E03\u3002","\u819C\u8102\u4EE5\u78F7\u8102\u4E3A\u4E3B\uFF0C\u8FD8\u542B\u80C6\u56FA\u9187\u548C\u7CD6\u8102\uFF1B\u4EB2\u6C34\u5934\u90E8\u671D\u5411\u6C34\u76F8\uFF0C\u758F\u6C34\u5C3E\u90E8\u5411\u5185\u3002","\u819C\u86CB\u767D\u5206\u4E3A\u6574\u5408\u819C\u86CB\u767D\u548C\u5916\u5468\u819C\u86CB\u767D\uFF0C\u627F\u62C5\u8FD0\u8F93\u3001\u53D7\u4F53\u3001\u9176\u3001\u8BC6\u522B\u548C\u7ED3\u6784\u8FDE\u63A5\u7B49\u529F\u80FD\u3002"],terms:[{t:"\u6D41\u52A8\u9576\u5D4C\u6A21\u578B",d:"\u819C\u8102\u53CC\u5C42\u4E3A\u6D41\u52A8\u9AA8\u67B6\u3001\u86CB\u767D\u8D28\u9576\u5D4C\u5176\u4E2D\u7684\u4E0D\u5BF9\u79F0\u4E8C\u7EF4\u6DB2\u4F53\u6A21\u578B\u3002"},{t:"\u6574\u5408\u819C\u86CB\u767D",d:"\u5D4C\u5165\u6216\u8D2F\u7A7F\u8102\u53CC\u5C42\u7684\u819C\u86CB\u767D\uFF0C\u901A\u5E38\u9700\u8981\u53BB\u57A2\u5242\u624D\u80FD\u5206\u79BB\u3002"}],check:{q:"\u7EA2\u7EC6\u80DE\u819C\u8102\u94FA\u5C55\u9762\u79EF\u4E3A\u7EC6\u80DE\u8868\u9762\u79EF\u7684 2 \u500D\uFF0C\u8BF4\u660E\u4E86\u4EC0\u4E48\uFF1F",a:"\u8BF4\u660E\u819C\u8102\u4EE5\u53CC\u5206\u5B50\u5C42\u6392\u5217\uFF1A\u6BCF\u4E00\u5C42\u7684\u8102\u8D28\u94FA\u5C55\u5F00\u6765\u7EA6\u4E3A\u539F\u7EC6\u80DE\u8868\u9762\u79EF\uFF0C\u4E24\u5C42\u76F8\u52A0\u4E3A 2 \u500D\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"\u7EC6\u80DE\u8D28\u819C\u7684\u57FA\u672C\u7279\u5F81\u4E0E\u529F\u80FD",pages:"49\u201355",outline:["\u819C\u7684\u6D41\u52A8\u6027","\u819C\u7684\u4E0D\u5BF9\u79F0\u6027","\u7EC6\u80DE\u8D28\u819C\u76F8\u5173\u7684\u819C\u9AA8\u67B6","\u7EC6\u80DE\u8D28\u819C\u7684\u57FA\u672C\u529F\u80FD"],summary:"\u819C\u662F\u52A8\u6001\u3001\u4E0D\u5BF9\u79F0\u7684\u4E8C\u7EF4\u6D41\u4F53\uFF1B\u819C\u9AA8\u67B6\u548C\u7EC6\u80DE\u9AA8\u67B6\u9650\u5236\u86CB\u767D\u8FD0\u52A8\uFF0C\u4F7F\u819C\u5728\u4FDD\u6301\u6D41\u52A8\u6027\u7684\u540C\u65F6\u5177\u6709\u533A\u57DF\u79E9\u5E8F\u3002",points:["\u819C\u8102\u7684\u4FA7\u5411\u8FD0\u52A8\u53D7\u8102\u80AA\u9178\u4E0D\u9971\u548C\u5EA6\u3001\u94FE\u957F\u3001\u6E29\u5EA6\u548C\u80C6\u56FA\u9187\u5F71\u54CD\uFF1B\u80C6\u56FA\u9187\u5BF9\u6D41\u52A8\u6027\u6709\u53CC\u5411\u8C03\u8282\u3002","\u819C\u86CB\u767D\u53EF\u5728\u819C\u5E73\u9762\u6269\u6563\uFF0C\u4F46\u5E38\u88AB\u819C\u9AA8\u67B6\u3001\u7EC6\u80DE\u8FDE\u63A5\u6216\u8102\u7B4F\u9650\u5236\u5728\u7279\u5B9A\u533A\u57DF\u3002","\u819C\u7684\u4E0D\u5BF9\u79F0\u6027\u4F53\u73B0\u5728\u8102\u8D28\u3001\u86CB\u767D\u548C\u7CD6\u94FE\u7684\u5206\u5E03\u5DEE\u5F02\uFF1B\u7CD6\u94FE\u4E3B\u8981\u4F4D\u4E8E\u7EC6\u80DE\u5916\u4FA7\uFF0C\u5F62\u6210\u7CD6\u843C\u3002","\u57FA\u672C\u529F\u80FD\u5305\u62EC\u754C\u5B9A\u8FB9\u754C\u3001\u9009\u62E9\u6027\u8FD0\u8F93\u3001\u4FE1\u53F7\u63A5\u6536\u3001\u7EC6\u80DE\u8BC6\u522B\u4E0E\u8FDE\u63A5\u3001\u7EF4\u6301\u819C\u7535\u4F4D\u3002"],terms:[{t:"\u819C\u7684\u6D41\u52A8\u6027",d:"\u819C\u8102\u548C\u819C\u86CB\u767D\u5728\u4E8C\u7EF4\u5E73\u9762\u5185\u7684\u4FA7\u5411\u8FD0\u52A8\u80FD\u529B\u3002"},{t:"\u819C\u9AA8\u67B6",d:"\u9644\u7740\u5728\u819C\u5185\u4FA7\u3001\u652F\u6491\u819C\u5F62\u72B6\u5E76\u9650\u5236\u819C\u86CB\u767D\u8FD0\u52A8\u7684\u86CB\u767D\u7F51\u7EDC\u3002"}],check:{q:"\u80C6\u56FA\u9187\u5982\u4F55\u5F71\u54CD\u819C\u7684\u6D41\u52A8\u6027\uFF1F",a:"\u5728\u8F83\u9AD8\u6E29\u5EA6\u4E0B\u80C6\u56FA\u9187\u9650\u5236\u78F7\u8102\u5C3E\u5DF4\u8FD0\u52A8\u3001\u964D\u4F4E\u6D41\u52A8\u6027\uFF1B\u5728\u4F4E\u6E29\u4E0B\u5B83\u53C8\u80FD\u963B\u6B62\u8102\u8D28\u7D27\u5BC6\u5806\u79EF\uFF0C\u7EF4\u6301\u6D41\u52A8\u72B6\u6001\uFF0C\u5448\u53CC\u5411\u8C03\u8282\u3002"}}]},{id:"ch04",no:"\u7B2C\u56DB\u7AE0",title:"\u7269\u8D28\u7684\u8DE8\u819C\u8FD0\u8F93",pages:"56\u201373",scene:1,overview:"\u7EC6\u80DE\u8D28\u819C\u7684\u9009\u62E9\u900F\u8FC7\u6027\u7531\u819C\u8F6C\u8FD0\u86CB\u767D\u3001\u79BB\u5B50\u68AF\u5EA6\u548C\u819C\u7535\u4F4D\u5171\u540C\u5B9E\u73B0\uFF1B\u5C0F\u5206\u5B50\u8FD0\u8F93\u4E0E\u819C\u6CE1\u8FD0\u8F93\u5206\u5DE5\u534F\u4F5C\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u819C\u8F6C\u8FD0\u86CB\u767D\u4E0E\u5C0F\u5206\u5B50\u53CA\u79BB\u5B50\u7684\u8DE8\u819C\u8FD0\u8F93",pages:"56\u201362",outline:["\u819C\u8F6C\u8FD0\u86CB\u767D","\u5C0F\u5206\u5B50\u53CA\u79BB\u5B50\u7684\u8DE8\u819C\u8FD0\u8F93\u7C7B\u578B"],summary:"\u8102\u53CC\u5C42\u5BF9\u5E26\u7535\u548C\u6781\u6027\u5206\u5B50\u57FA\u672C\u4E0D\u901A\u900F\uFF1B\u901A\u9053\u86CB\u767D\u548C\u8F7D\u4F53\u86CB\u767D\u4F7F\u79BB\u5B50\u3001\u7CD6\u548C\u6C28\u57FA\u9178\u80FD\u591F\u987A\u6D53\u5EA6\u6216\u7535\u5316\u5B66\u68AF\u5EA6\u8DE8\u819C\u3002",points:["\u7B80\u5355\u6269\u6563\u9002\u7528\u4E8E\u8102\u6EB6\u6027\u5C0F\u5206\u5B50\u548C\u5C0F\u7684\u4E0D\u5E26\u7535\u5206\u5B50\uFF1B\u534F\u52A9\u6269\u6563\u9700\u8981\u901A\u9053\u6216\u8F7D\u4F53\uFF0C\u4ECD\u987A\u7535\u5316\u5B66\u68AF\u5EA6\u3002","\u901A\u9053\u86CB\u767D\u5F62\u6210\u4EB2\u6C34\u5B54\u9053\uFF0C\u8F7D\u4F53\u86CB\u767D\u901A\u8FC7\u6784\u8C61\u53D8\u5316\u8F6C\u8FD0\u5E95\u7269\uFF1B\u4E24\u8005\u90FD\u5177\u6709\u9009\u62E9\u6027\u3002","Na\u207A/K\u207A \u7B49\u79BB\u5B50\u7684\u4E0D\u5747\u5300\u5206\u5E03\u5F62\u6210\u819C\u7535\u4F4D\uFF0C\u9759\u606F\u65F6\u819C\u5185\u8D1F\u3001\u819C\u5916\u6B63\u3002"],terms:[{t:"\u901A\u9053\u86CB\u767D",d:"\u5728\u819C\u4E0A\u5F62\u6210\u4EB2\u6C34\u5B54\u9053\u3001\u5141\u8BB8\u7279\u5B9A\u79BB\u5B50\u6216\u5206\u5B50\u5FEB\u901F\u901A\u8FC7\u7684\u819C\u86CB\u767D\u3002"},{t:"\u8F7D\u4F53\u86CB\u767D",d:"\u901A\u8FC7\u6784\u8C61\u53D8\u5316\u628A\u5E95\u7269\u8DE8\u819C\u8F6C\u8FD0\u7684\u819C\u86CB\u767D\uFF0C\u53EF\u4ECB\u5BFC\u88AB\u52A8\u6216\u4E3B\u52A8\u8FD0\u8F93\u3002"}],check:{q:"\u534F\u52A9\u6269\u6563\u4E0E\u7B80\u5355\u6269\u6563\u7684\u6839\u672C\u5171\u540C\u70B9\u662F\u4EC0\u4E48\uFF1F",a:"\u4E24\u8005\u90FD\u987A\u7535\u5316\u5B66\u68AF\u5EA6\u3001\u4E0D\u9700\u8981\u7EC6\u80DE\u76F4\u63A5\u6D88\u8017 ATP\uFF1B\u533A\u522B\u662F\u534F\u52A9\u6269\u6563\u9700\u8981\u819C\u8F6C\u8FD0\u86CB\u767D\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"ATP \u9A71\u52A8\u6CF5\u4E0E\u4E3B\u52A8\u8FD0\u8F93",pages:"62\u201368",outline:["P \u578B\u6CF5","V \u578B\u8D28\u5B50\u6CF5\u548C F \u578B\u8D28\u5B50\u6CF5","ABC \u8D85\u5BB6\u65CF","\u79BB\u5B50\u8DE8\u819C\u8F6C\u8FD0\u4E0E\u819C\u7535\u4F4D"],summary:"\u4E3B\u52A8\u8FD0\u8F93\u9006\u7535\u5316\u5B66\u68AF\u5EA6\u8FDB\u884C\uFF0C\u9700\u8981 ATP \u6216\u5176\u5B83\u80FD\u6E90\uFF1B\u6CF5\u86CB\u767D\u5EFA\u7ACB\u5E76\u7EF4\u6301\u79BB\u5B50\u68AF\u5EA6\uFF0C\u662F\u819C\u7535\u4F4D\u548C\u6B21\u7EA7\u8FD0\u8F93\u7684\u57FA\u7840\u3002",points:["P \u578B ATP \u9176\u5728\u8F6C\u8FD0\u5FAA\u73AF\u4E2D\u53D1\u751F\u78F7\u9178\u5316\uFF0C\u5982 Na\u207A/K\u207A-ATP \u9176\u3001Ca\xB2\u207A-ATP \u9176\u3002","V \u578B\u8D28\u5B50\u6CF5\u4E3B\u8981\u4F4D\u4E8E\u6DB2\u6CE1/\u6EB6\u9176\u4F53\u819C\uFF1BF \u578B\u8D28\u5B50\u6CF5\u5229\u7528\u8D28\u5B50\u68AF\u5EA6\u5408\u6210 ATP\uFF0C\u4E5F\u89C1\u4E8E\u7EC6\u83CC\u8D28\u819C\u3002","ABC \u8F6C\u8FD0\u86CB\u767D\u5229\u7528 ATP \u8F6C\u8FD0\u591A\u79CD\u5E95\u7269\uFF1BNa\u207A/K\u207A \u6CF5\u6BCF\u6C34\u89E3 1 \u4E2A ATP \u6CF5\u51FA 3 \u4E2A Na\u207A\u3001\u6CF5\u5165 2 \u4E2A K\u207A\u3002"],terms:[{t:"P \u578B ATP \u9176",d:"\u5728\u8F6C\u8FD0\u8FC7\u7A0B\u4E2D\u5F62\u6210\u78F7\u9178\u5316\u4E2D\u95F4\u4F53\u7684\u4E00\u7C7B\u79BB\u5B50\u6CF5\u3002"},{t:"Na\u207A/K\u207A-ATP \u9176",d:"\u7EF4\u6301\u7EC6\u80DE\u5185\u9AD8 K\u207A\u3001\u7EC6\u80DE\u5916\u9AD8 Na\u207A \u7684\u4E3B\u52A8\u8FD0\u8F93\u6CF5\uFF0C\u53C2\u4E0E\u819C\u7535\u4F4D\u4E0E\u6B21\u7EA7\u8FD0\u8F93\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48 Na\u207A/K\u207A \u6CF5\u662F\u751F\u7535\u6027\u7684\uFF1F",a:"\u6BCF\u5FAA\u73AF\u51C0\u6CF5\u51FA 1 \u4E2A\u6B63\u7535\u8377\uFF083 Na\u207A \u51FA\u30012 K\u207A \u5165\uFF09\uFF0C\u4F7F\u819C\u5916\u66F4\u6B63\uFF0C\u53C2\u4E0E\u7EF4\u6301\u9759\u606F\u819C\u7535\u4F4D\u3002"}},{no:"\u7B2C\u4E09\u8282",title:"\u80DE\u541E\u4F5C\u7528\u4E0E\u80DE\u5410\u4F5C\u7528",pages:"68\u201373",outline:["\u80DE\u541E\u4F5C\u7528\u7684\u7C7B\u578B","\u80DE\u541E\u4F5C\u7528\u4E0E\u7EC6\u80DE\u4FE1\u53F7\u8F6C\u5BFC","\u80DE\u5410\u4F5C\u7528"],summary:"\u5927\u5206\u5B50\u548C\u9897\u7C92\u4E0D\u80FD\u76F4\u63A5\u7A7F\u8FC7\u8102\u53CC\u5C42\uFF0C\u7EC6\u80DE\u901A\u8FC7\u819C\u7684\u5185\u9677\u3001\u56CA\u6CE1\u5F62\u6210\u548C\u5916\u6392\u5B8C\u6210\u6444\u53D6\u4E0E\u5206\u6CCC\u3002",points:["\u80DE\u541E\u5305\u62EC\u541E\u566C\u3001\u80DE\u996E\u548C\u53D7\u4F53\u4ECB\u5BFC\u7684\u80DE\u541E\uFF1B\u7F51\u683C\u86CB\u767D\u53C2\u4E0E\u8BB8\u591A\u53D7\u4F53\u2014\u914D\u4F53\u590D\u5408\u7269\u7684\u5185\u541E\u3002","\u5185\u4F53\u5206\u9009\u51B3\u5B9A\u53D7\u4F53\u662F\u88AB\u56DE\u6536\u8FD8\u662F\u8FDB\u5165\u6EB6\u9176\u4F53\u964D\u89E3\uFF1B\u80DE\u541E\u4E5F\u53C2\u4E0E\u4FE1\u53F7\u8F6C\u5BFC\u7684\u8C03\u63A7\u3002","\u80DE\u5410\u901A\u8FC7\u5206\u6CCC\u56CA\u6CE1\u4E0E\u8D28\u819C\u878D\u5408\uFF0C\u628A\u5185\u5BB9\u7269\u91CA\u653E\u5230\u7EC6\u80DE\u5916\uFF0C\u540C\u65F6\u8865\u5145\u819C\u6210\u5206\u3002"],terms:[{t:"\u80DE\u541E\u4F5C\u7528",d:"\u8D28\u819C\u5185\u9677\u5F62\u6210\u56CA\u6CE1\uFF0C\u5C06\u7EC6\u80DE\u5916\u7269\u8D28\u6444\u5165\u7EC6\u80DE\u7684\u8FC7\u7A0B\u3002"},{t:"\u80DE\u5410\u4F5C\u7528",d:"\u7EC6\u80DE\u5185\u56CA\u6CE1\u4E0E\u8D28\u819C\u878D\u5408\uFF0C\u628A\u5185\u5BB9\u7269\u91CA\u653E\u5230\u7EC6\u80DE\u5916\u7684\u8FC7\u7A0B\u3002"}],check:{q:"\u53D7\u4F53\u4ECB\u5BFC\u7684\u80DE\u541E\u4E3A\u4EC0\u4E48\u5177\u6709\u9AD8\u5EA6\u9009\u62E9\u6027\uFF1F",a:"\u914D\u4F53\u5148\u4E0E\u8D28\u819C\u4E0A\u7684\u7279\u5F02\u53D7\u4F53\u7ED3\u5408\uFF0C\u53D7\u4F53\u2014\u914D\u4F53\u590D\u5408\u7269\u5728\u819C\u5FAE\u533A\u5BCC\u96C6\u540E\u88AB\u7F51\u683C\u86CB\u767D\u7B49\u5305\u88AB\uFF0C\u5F62\u6210\u5BCC\u96C6\u7279\u5B9A\u8D27\u7269\u7684\u56CA\u6CE1\u3002"}}]},{id:"ch05",no:"\u7B2C\u4E94\u7AE0",title:"\u7EC6\u80DE\u8D28\u57FA\u8D28\u4E0E\u5185\u819C\u7CFB\u7EDF",pages:"74\u201399",scene:5,overview:"\u7EC6\u80DE\u8D28\u57FA\u8D28\u4E0E\u5185\u819C\u7CFB\u7EDF\u5171\u540C\u7EC4\u7EC7\u7EC6\u80DE\u5185\u533A\u5BA4\uFF1A\u5185\u8D28\u7F51\u3001\u9AD8\u5C14\u57FA\u4F53\u548C\u6EB6\u9176\u4F53\u5728\u7ED3\u6784\u3001\u529F\u80FD\u53D1\u751F\u4E0A\u76F8\u4E92\u5173\u8054\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u7EC6\u80DE\u8D28\u57FA\u8D28\u53CA\u5176\u529F\u80FD",pages:"75\u201378",outline:["\u7EC6\u80DE\u8D28\u57FA\u8D28\u7684\u6DB5\u4E49","\u7EC6\u80DE\u8D28\u57FA\u8D28\u7684\u529F\u80FD"],summary:"\u7EC6\u80DE\u8D28\u57FA\u8D28\u4E0D\u662F\u201C\u80CC\u666F\u6DB2\u4F53\u201D\uFF0C\u800C\u662F\u5305\u542B\u4EE3\u8C22\u9176\u3001\u6838\u7CD6\u4F53\u3001\u7EC6\u80DE\u9AA8\u67B6\u548C\u4FE1\u53F7\u5206\u5B50\u7684\u9AD8\u5EA6\u7EC4\u7EC7\u5316\u533A\u5BA4\u3002",points:["\u7EC6\u80DE\u8D28\u57FA\u8D28\u5360\u7EC6\u80DE\u4F53\u79EF\u7684\u5F88\u5927\u6BD4\u4F8B\uFF0C\u662F\u7CD6\u9175\u89E3\u3001\u86CB\u767D\u7FFB\u8BD1\u548C\u591A\u79CD\u4FE1\u53F7\u53CD\u5E94\u53D1\u751F\u7684\u573A\u6240\u3002","\u7EC6\u80DE\u9AA8\u67B6\u548C\u819C\u7ED3\u5408\u4F4D\u70B9\u4F7F\u57FA\u8D28\u4E2D\u7684\u9176\u548CmRNA\u5F62\u6210\u533A\u57DF\u5316\u7EC4\u7EC7\uFF0C\u63D0\u9AD8\u53CD\u5E94\u6548\u7387\u3002","\u57FA\u8D28\u8FD8\u53C2\u4E0E\u86CB\u767D\u8D28\u6298\u53E0\u3001\u4FEE\u9970\u3001\u8FD0\u8F93\u548C\u964D\u89E3\uFF0C\u5E76\u8C03\u8282\u7EC6\u80DE\u5F62\u6001\u4E0E\u8FD0\u52A8\u3002"],terms:[{t:"\u7EC6\u80DE\u8D28\u57FA\u8D28",d:"\u7EC6\u80DE\u8D28\u4E2D\u9664\u7EC6\u80DE\u5668\u548C\u5185\u542B\u7269\u4EE5\u5916\u7684\u80F6\u72B6\u4ECB\u8D28\uFF0C\u542B\u9176\u3001\u6838\u7CD6\u4F53\u3001\u79BB\u5B50\u548C\u4EE3\u8C22\u7269\u3002"},{t:"\u7EC6\u80DE\u8D28",d:"\u8D28\u819C\u4EE5\u5185\u3001\u6838\u819C\u4EE5\u5916\u7684\u5168\u90E8\u5185\u5BB9\uFF0C\u5305\u62EC\u7EC6\u80DE\u8D28\u57FA\u8D28\u4E0E\u7EC6\u80DE\u5668\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48\u8BF4\u7EC6\u80DE\u8D28\u57FA\u8D28\u5177\u6709\u201C\u533A\u5BA4\u5316\u201D\u7279\u5F81\uFF1F",a:"\u7EC6\u80DE\u9AA8\u67B6\u3001\u819C\u8868\u9762\u548C\u86CB\u767D\u590D\u5408\u7269\u628A\u9176\u4E0E\u5E95\u7269\u7EC4\u7EC7\u6210\u5C40\u90E8\u5FAE\u533A\uFF0C\u4F7F\u4EE3\u8C22\u548C\u4FE1\u53F7\u53CD\u5E94\u5728\u7A7A\u95F4\u4E0A\u6709\u5E8F\uFF0C\u800C\u4E0D\u662F\u5747\u5300\u7A00\u91CA\u7684\u6EB6\u6DB2\u53CD\u5E94\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"\u7EC6\u80DE\u5185\u819C\u7CFB\u7EDF\u53CA\u5176\u529F\u80FD",pages:"78\u201399",outline:["\u5185\u8D28\u7F51\u7684\u7ED3\u6784\u4E0E\u529F\u80FD","\u9AD8\u5C14\u57FA\u4F53\u7684\u5F62\u6001\u7ED3\u6784\u4E0E\u529F\u80FD","\u6EB6\u9176\u4F53\u7684\u7ED3\u6784\u4E0E\u529F\u80FD"],summary:"\u5185\u8D28\u7F51\u3001\u9AD8\u5C14\u57FA\u4F53\u548C\u6EB6\u9176\u4F53\u901A\u8FC7\u819C\u6CE1\u8FD0\u8F93\u8FDE\u6210\u52A8\u6001\u7F51\u7EDC\uFF0C\u5B8C\u6210\u86CB\u767D\u8D28\u4E0E\u8102\u8D28\u5408\u6210\u3001\u4FEE\u9970\u3001\u5206\u9009\u548C\u964D\u89E3\u3002",points:["\u7C97\u9762\u5185\u8D28\u7F51\u9644\u7740\u6838\u7CD6\u4F53\uFF0C\u5408\u6210\u5206\u6CCC\u86CB\u767D\u548C\u819C\u86CB\u767D\uFF1B\u5149\u9762\u5185\u8D28\u7F51\u53C2\u4E0E\u8102\u8D28\u5408\u6210\u3001\u89E3\u6BD2\u548C\u9499\u50A8\u5B58\u3002","\u9AD8\u5C14\u57FA\u4F53\u7531\u987A\u9762\u3001\u4E2D\u95F4\u533A\u3001\u53CD\u9762\u6241\u56CA\u7EC4\u6210\uFF0C\u662F\u7CD6\u57FA\u5316\u4FEE\u9970\u3001\u5206\u9009\u548C\u5305\u88C5\u7684\u67A2\u7EBD\u3002","\u6EB6\u9176\u4F53\u542B\u9178\u6027\u6C34\u89E3\u9176\uFF0C\u5728\u4F4E pH \u4E0B\u964D\u89E3\u5185\u541E\u7269\u3001\u7EC6\u80DE\u5668\u548C\u5927\u5206\u5B50\uFF1B\u81EA\u566C\u628A\u7EC6\u80DE\u8D28\u6210\u5206\u9001\u5165\u6EB6\u9176\u4F53\u3002"],terms:[{t:"\u5185\u8D28\u7F51",d:"\u7531\u7BA1\u72B6\u548C\u6241\u56CA\u72B6\u819C\u6784\u6210\u7684\u8FDE\u7EED\u7F51\u7EDC\uFF0C\u53C2\u4E0E\u86CB\u767D\u8D28\u4E0E\u8102\u8D28\u5408\u6210\u3002"},{t:"\u6EB6\u9176\u4F53",d:"\u542B\u9178\u6027\u6C34\u89E3\u9176\u7684\u819C\u6027\u7EC6\u80DE\u5668\uFF0C\u662F\u7EC6\u80DE\u5185\u964D\u89E3\u7684\u4E3B\u8981\u573A\u6240\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48\u6EB6\u9176\u4F53\u9176\u4E0D\u4F1A\u5728\u5408\u6210\u540E\u7ACB\u5373\u6D88\u5316\u7EC6\u80DE\u81EA\u8EAB\uFF1F",a:"\u8FD9\u4E9B\u9176\u5728 ER/\u9AD8\u5C14\u57FA\u4F53\u4E2D\u5408\u6210\u5E76\u6807\u8BB0\uFF0C\u7ECF M6P \u53D7\u4F53\u5206\u9009\u8FDB\u5165\u5185\u4F53/\u6EB6\u9176\u4F53\uFF1B\u53EA\u6709\u5728\u9178\u6027\u73AF\u5883\u4E2D\u624D\u5145\u5206\u6FC0\u6D3B\uFF0C\u4E14\u591A\u6570\u4EE5\u9176\u539F\u5F62\u5F0F\u5B58\u5728\u3002"}}]},{id:"ch06",no:"\u7B2C\u516D\u7AE0",title:"\u86CB\u767D\u8D28\u5206\u9009\u4E0E\u819C\u6CE1\u8FD0\u8F93",pages:"100\u2013116",scene:5,overview:"\u86CB\u767D\u8D28\u5E26\u6709\u5206\u9009\u4FE1\u53F7\uFF0C\u7EC6\u80DE\u901A\u8FC7\u95E8\u63A7\u8F6C\u8FD0\u3001\u8DE8\u819C\u8F6C\u8FD0\u548C\u819C\u6CE1\u8FD0\u8F93\u628A\u5B83\u4EEC\u9001\u5230\u6B63\u786E\u533A\u5BA4\uFF1B\u819C\u6CE1\u8FD0\u8F93\u9700\u8981\u5305\u88AB\u3001Rab \u548C SNARE \u534F\u540C\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u7EC6\u80DE\u5185\u86CB\u767D\u8D28\u7684\u5206\u9009",pages:"100\u2013107",outline:["\u4FE1\u53F7\u5047\u8BF4\u4E0E\u86CB\u767D\u8D28\u5206\u9009\u4FE1\u53F7","\u86CB\u767D\u8D28\u5206\u9009\u8F6C\u8FD0\u7684\u57FA\u672C\u9014\u5F84\u4E0E\u7C7B\u578B","\u86CB\u767D\u8D28\u5411\u7EBF\u7C92\u4F53\u548C\u53F6\u7EFF\u4F53\u7684\u5206\u9009"],summary:"\u5206\u9009\u4FE1\u53F7\u51B3\u5B9A\u86CB\u767D\u8D28\u7684\u53BB\u5411\uFF1B\u5206\u6CCC\u86CB\u767D\u5728\u7FFB\u8BD1\u540C\u65F6\u8FDB\u5165 ER\uFF0C\u800C\u7EBF\u7C92\u4F53/\u53F6\u7EFF\u4F53\u86CB\u767D\u591A\u5728\u540E\u7FFB\u8BD1\u9636\u6BB5\u88AB\u8F6C\u8FD0\u3002",points:["\u4FE1\u53F7\u80BD\u5047\u8BF4\uFF1AN \u7AEF\u4FE1\u53F7\u80BD\u88AB SRP \u8BC6\u522B\uFF0CSRP-\u6838\u7CD6\u4F53\u590D\u5408\u4F53\u7ED3\u5408 ER \u819C\u4E0A\u7684 SRP \u53D7\u4F53\uFF0C\u4F7F\u65B0\u751F\u80BD\u94FE\u8FDB\u5165\u6613\u4F4D\u5B50\u3002","\u86CB\u767D\u8D28\u5206\u9009\u5305\u62EC\u95E8\u63A7\u8F6C\u8FD0\uFF08\u6838\u5B54\uFF09\u3001\u8DE8\u819C\u8F6C\u8FD0\uFF08ER\u3001\u7EBF\u7C92\u4F53\u3001\u53F6\u7EFF\u4F53\uFF09\u548C\u819C\u6CE1\u8FD0\u8F93\uFF08\u5185\u819C\u7CFB\u7EDF\u4E0E\u5206\u6CCC\uFF09\u3002","\u7EBF\u7C92\u4F53\u86CB\u767D\u901A\u5E38\u5E26\u6709 N \u7AEF\u7684\u524D\u5BFC\u80BD\uFF0C\u5728\u7FFB\u8BD1\u5B8C\u6210\u540E\u4E0E\u7EBF\u7C92\u4F53\u5916\u819C\u53D7\u4F53\u7ED3\u5408\u5E76\u88AB\u5BFC\u5165\u3002"],terms:[{t:"\u4FE1\u53F7\u80BD",d:"\u5F15\u5BFC\u65B0\u751F\u86CB\u767D\u8FDB\u5165\u7279\u5B9A\u533A\u5BA4\u7684\u77ED\u80BD\u5E8F\u5217\uFF0C\u5E38\u4F4D\u4E8E N \u7AEF\u3002"},{t:"SRP",d:"\u4FE1\u53F7\u8BC6\u522B\u9897\u7C92\uFF0C\u8BC6\u522B\u4FE1\u53F7\u80BD\u5E76\u6682\u505C\u7FFB\u8BD1\u3001\u628A\u6838\u7CD6\u4F53\u5E26\u5230 ER \u819C\u3002"}],check:{q:"\u5206\u6CCC\u86CB\u767D\u4E0E\u7EBF\u7C92\u4F53\u86CB\u767D\u8FDB\u5165\u76F8\u5E94\u533A\u5BA4\u7684\u65F6\u95F4\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F",a:"\u5206\u6CCC\u86CB\u767D\u5728\u7FFB\u8BD1\u540C\u65F6\uFF08\u5171\u7FFB\u8BD1\uFF09\u8FDB\u5165 ER\uFF1B\u7EBF\u7C92\u4F53\u86CB\u767D\u591A\u5728\u7FFB\u8BD1\u5B8C\u6210\u540E\uFF08\u540E\u7FFB\u8BD1\uFF09\u8FDB\u5165\u7EBF\u7C92\u4F53\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"\u7EC6\u80DE\u5185\u819C\u6CE1\u8FD0\u8F93",pages:"107\u2013116",outline:["\u819C\u6CE1\u8FD0\u8F93\u6982\u8FF0","COPII \u5305\u88AB\u819C\u6CE1\u7684\u88C5\u914D\u53CA\u8FD0\u8F93","COPI \u5305\u88AB\u819C\u6CE1\u7684\u88C5\u914D\u53CA\u8FD0\u8F93","\u7F51\u683C\u86CB\u767D/\u63A5\u5934\u86CB\u767D\u5305\u88AB\u819C\u6CE1\u7684\u88C5\u914D\u4E0E\u8FD0\u8F93","\u8F6C\u8FD0\u819C\u6CE1\u4E0E\u9776\u819C\u7684\u951A\u5B9A\u548C\u878D\u5408"],summary:"\u819C\u6CE1\u8FD0\u8F93\u901A\u8FC7\u4E0D\u540C\u5305\u88AB\u86CB\u767D\u5F62\u6210\u5B9A\u5411\u56CA\u6CE1\uFF0C\u518D\u7531 Rab \u548C SNARE \u4FDD\u8BC1\u505C\u9760\u4E0E\u878D\u5408\u7684\u7279\u5F02\u6027\uFF0C\u5B8C\u6210\u987A\u5411\u4E0E\u9006\u5411\u8FD0\u8F93\u3002",points:["COPII \u4ECB\u5BFC ER\u2192\u9AD8\u5C14\u57FA\u4F53\u7684\u987A\u5411\u8FD0\u8F93\uFF1BCOPI \u4ECB\u5BFC\u9AD8\u5C14\u57FA\u4F53\u2192ER \u7684\u9006\u5411\u8FD0\u8F93\uFF0C\u5E76\u56DE\u6536 ER \u9A7B\u7559\u86CB\u767D\u3002","\u7F51\u683C\u86CB\u767D\u4E0E\u63A5\u5934\u86CB\u767D\u4ECB\u5BFC TGN\u2192\u5185\u4F53/\u6EB6\u9176\u4F53\u4EE5\u53CA\u53D7\u4F53\u4ECB\u5BFC\u7684\u5185\u541E\u3002","Rab \u86CB\u767D\u8BC6\u522B\u9776\u819C\uFF0CSNARE \u5F62\u6210\u56DB\u87BA\u65CB\u675F\u62C9\u8FD1\u5E76\u878D\u5408\u4E24\u5C42\u819C\uFF1BM6P \u6807\u8BB0\u628A\u6C34\u89E3\u9176\u5206\u9009\u5230\u6EB6\u9176\u4F53\u3002"],terms:[{t:"COPII",d:"\u5728 ER \u51FA\u53E3\u4F4D\u70B9\u5F62\u6210\u3001\u4ECB\u5BFC ER\u2192\u9AD8\u5C14\u57FA\u4F53\u987A\u5411\u8FD0\u8F93\u7684\u5305\u88AB\u86CB\u767D\u590D\u5408\u4F53\u3002"},{t:"SNARE",d:"\u4ECB\u5BFC\u819C\u6CE1\u4E0E\u9776\u819C\u878D\u5408\u7684\u86CB\u767D\u5BB6\u65CF\uFF0Cv-SNARE \u4E0E t-SNARE \u5F62\u6210\u5377\u66F2\u87BA\u65CB\u675F\u3002"}],check:{q:"COPII \u4E0E COPI \u7684\u8FD0\u8F93\u65B9\u5411\u5206\u522B\u662F\u4EC0\u4E48\uFF1F",a:"COPII \u4ECE ER \u5230\u9AD8\u5C14\u57FA\u4F53\uFF08\u987A\u5411\uFF09\uFF1BCOPI \u4ECE\u9AD8\u5C14\u57FA\u4F53\u56DE\u5230 ER\uFF08\u9006\u5411\uFF09\uFF0C\u4E5F\u53C2\u4E0E\u9AD8\u5C14\u57FA\u4F53\u5185\u90E8\u7684\u9006\u5411\u8FD0\u8F93\u3002"}}]},{id:"ch07",no:"\u7B2C\u4E03\u7AE0",title:"\u7EBF\u7C92\u4F53\u548C\u53F6\u7EFF\u4F53",pages:"117\u2013143",scene:3,overview:"\u7EBF\u7C92\u4F53\u548C\u53F6\u7EFF\u4F53\u662F\u534A\u81EA\u4E3B\u6027\u80FD\u91CF\u8F6C\u6362\u7EC6\u80DE\u5668\uFF0C\u5206\u522B\u901A\u8FC7\u6C27\u5316\u78F7\u9178\u5316\u548C\u5149\u5408\u4F5C\u7528\u5EFA\u7ACB\u8D28\u5B50\u68AF\u5EA6\u5E76\u5408\u6210 ATP\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u7EBF\u7C92\u4F53\u4E0E\u6C27\u5316\u78F7\u9178\u5316",pages:"117\u2013126",outline:["\u7EBF\u7C92\u4F53\u7684\u57FA\u672C\u5F62\u6001\u53CA\u52A8\u6001\u7279\u5F81","\u7EBF\u7C92\u4F53\u7684\u8D85\u5FAE\u7ED3\u6784","\u6C27\u5316\u78F7\u9178\u5316","\u7EBF\u7C92\u4F53\u4E0E\u75BE\u75C5"],summary:"\u7EBF\u7C92\u4F53\u7531\u5916\u819C\u3001\u5185\u819C\u3001\u819C\u95F4\u9699\u548C\u57FA\u8D28\u7EC4\u6210\uFF1B\u7535\u5B50\u4F20\u9012\u94FE\u6CF5\u51FA\u8D28\u5B50\uFF0CATP \u5408\u9176\u5229\u7528\u8D28\u5B50\u56DE\u6D41\u5408\u6210 ATP\u3002",points:["\u5916\u819C\u542B\u5B54\u86CB\u767D\u3001\u901A\u900F\u6027\u9AD8\uFF1B\u5185\u819C\u5BCC\u542B\u5FC3\u78F7\u8102\u3001\u901A\u900F\u6027\u4F4E\uFF0C\u5E76\u6298\u53E0\u6210\u5D74\uFF0C\u663E\u8457\u6269\u5927\u53CD\u5E94\u9762\u79EF\u3002","\u4E09\u7FA7\u9178\u5FAA\u73AF\u5728\u57FA\u8D28\u4E2D\u8FDB\u884C\uFF0C\u751F\u6210 NADH/FADH\u2082\uFF1B\u7535\u5B50\u7ECF\u590D\u5408\u4F53 I\u2013IV \u4F20\u7ED9 O\u2082\uFF0C\u5E76\u6CF5\u51FA H\u207A\u3002","H\u207A \u7ECF ATP \u5408\u9176 F\u2080F\u2081 \u56DE\u6D41\uFF0C\u9A71\u52A8 ADP + Pi \u5408\u6210 ATP\uFF1B\u7EBF\u7C92\u4F53\u529F\u80FD\u969C\u788D\u53EF\u5BFC\u81F4\u591A\u79CD\u75BE\u75C5\u3002"],terms:[{t:"\u5D74",d:"\u7EBF\u7C92\u4F53\u5185\u819C\u5411\u57FA\u8D28\u6298\u53E0\u5F62\u6210\u7684\u7ED3\u6784\uFF0C\u6269\u5927\u6C27\u5316\u78F7\u9178\u5316\u7684\u53CD\u5E94\u9762\u79EF\u3002"},{t:"\u5316\u5B66\u6E17\u900F",d:"\u8DE8\u5185\u819C\u8D28\u5B50\u68AF\u5EA6\u9A71\u52A8 ATP \u5408\u9176\u65CB\u8F6C\u3001\u628A ADP \u78F7\u9178\u5316\u4E3A ATP \u7684\u8FC7\u7A0B\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48\u7EBF\u7C92\u4F53\u5185\u819C\u5BF9\u8D28\u5B50\u4F4E\u901A\u900F\u6027\u662F\u6C27\u5316\u78F7\u9178\u5316\u7684\u524D\u63D0\uFF1F",a:"\u4F4E\u901A\u900F\u6027\u4F7F\u7535\u5B50\u4F20\u9012\u6CF5\u51FA\u7684 H\u207A \u80FD\u5728\u819C\u95F4\u9699\u79EF\u7D2F\uFF0C\u5F62\u6210\u8D28\u5B50\u52A8\u529B\u52BF\uFF1BH\u207A \u53EA\u80FD\u7ECF ATP \u5408\u9176\u56DE\u6D41\uFF0C\u4ECE\u800C\u628A\u80FD\u91CF\u8026\u5408\u5230 ATP \u5408\u6210\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"\u53F6\u7EFF\u4F53\u4E0E\u5149\u5408\u4F5C\u7528",pages:"126\u2013137",outline:["\u53F6\u7EFF\u4F53\u7684\u57FA\u672C\u5F62\u6001\u53CA\u52A8\u6001\u7279\u5F81","\u53F6\u7EFF\u4F53\u7684\u8D85\u5FAE\u7ED3\u6784","\u5149\u5408\u4F5C\u7528"],summary:"\u53F6\u7EFF\u4F53\u7531\u53CC\u5C42\u819C\u3001\u7C7B\u56CA\u4F53\u819C\u7CFB\u7EDF\u548C\u57FA\u8D28\u7EC4\u6210\uFF1B\u5149\u53CD\u5E94\u5728\u7C7B\u56CA\u4F53\u819C\u4E0A\u751F\u6210 ATP \u4E0E NADPH\uFF0C\u6697\u53CD\u5E94\u5728\u57FA\u8D28\u4E2D\u56FA\u5B9A CO\u2082\u3002",points:["\u7C7B\u56CA\u4F53\u819C\u4E0A\u5206\u5E03\u5149\u7CFB\u7EDF I\u3001II\u3001\u7EC6\u80DE\u8272\u7D20 b6f \u548C ATP \u5408\u9176\uFF1B\u57FA\u7C92\u7531\u7C7B\u56CA\u4F53\u5806\u53E0\u5F62\u6210\u3002","\u5149\u7CFB\u7EDF\u5438\u6536\u5149\u80FD\u5E76\u63A8\u52A8\u7535\u5B50\u4F20\u9012\uFF0C\u4EA7\u751F ATP \u548C NADPH\uFF0C\u540C\u65F6\u88C2\u89E3\u6C34\u91CA\u653E O\u2082\u3002","Calvin \u5FAA\u73AF\u5229\u7528 ATP \u548C NADPH \u56FA\u5B9A CO\u2082\uFF0C\u751F\u6210\u4E09\u78B3\u7CD6\u5E76\u518D\u751F RuBP\u3002"],terms:[{t:"\u7C7B\u56CA\u4F53",d:"\u53F6\u7EFF\u4F53\u5185\u90E8\u7531\u819C\u56F4\u6210\u7684\u6241\u56CA\uFF0C\u5806\u53E0\u5F62\u6210\u57FA\u7C92\uFF0C\u662F\u5149\u53CD\u5E94\u7684\u573A\u6240\u3002"},{t:"Calvin \u5FAA\u73AF",d:"\u5229\u7528 ATP \u4E0E NADPH \u56FA\u5B9A CO\u2082\u3001\u5408\u6210\u7CD6\u7C7B\u7684\u78B3\u540C\u5316\u5FAA\u73AF\u3002"}],check:{q:"\u5149\u5408\u4F5C\u7528\u7684\u5149\u53CD\u5E94\u548C\u6697\u53CD\u5E94\u5206\u522B\u53D1\u751F\u5728\u54EA\u91CC\uFF1F",a:"\u5149\u53CD\u5E94\u5728\u7C7B\u56CA\u4F53\u819C\u4E0A\u8FDB\u884C\uFF1B\u6697\u53CD\u5E94\uFF08Calvin \u5FAA\u73AF\uFF09\u5728\u53F6\u7EFF\u4F53\u57FA\u8D28\u4E2D\u8FDB\u884C\u3002"}},{no:"\u7B2C\u4E09\u8282",title:"\u7EBF\u7C92\u4F53\u548C\u53F6\u7EFF\u4F53\u7684\u534A\u81EA\u4E3B\u6027\u53CA\u5176\u8D77\u6E90",pages:"137\u2013143",outline:["\u7EBF\u7C92\u4F53\u548C\u53F6\u7EFF\u4F53\u7684\u534A\u81EA\u4E3B\u6027","\u7EBF\u7C92\u4F53\u548C\u53F6\u7EFF\u4F53\u7684\u8D77\u6E90"],summary:"\u7EBF\u7C92\u4F53\u548C\u53F6\u7EFF\u4F53\u6709\u81EA\u8EAB DNA\u3001\u6838\u7CD6\u4F53\u548C\u90E8\u5206\u57FA\u56E0\u8868\u8FBE\u7CFB\u7EDF\uFF0C\u4F46\u591A\u6570\u86CB\u767D\u7531\u6838\u57FA\u56E0\u7F16\u7801\uFF1B\u5185\u5171\u751F\u5B66\u8BF4\u89E3\u91CA\u5176\u8FDB\u5316\u6765\u6E90\u3002",points:["\u7EBF\u7C92\u4F53/\u53F6\u7EFF\u4F53 DNA \u4E3A\u73AF\u72B6\uFF0C\u7F16\u7801\u90E8\u5206\u547C\u5438\u94FE\u6216\u5149\u5408\u94FE\u86CB\u767D\u4EE5\u53CA rRNA\u3001tRNA\u3002","\u7EDD\u5927\u591A\u6570\u7EC6\u80DE\u5668\u86CB\u767D\u7531\u6838\u57FA\u56E0\u7F16\u7801\u3001\u5728\u7EC6\u80DE\u8D28\u6838\u7CD6\u4F53\u5408\u6210\u540E\u88AB\u5BFC\u5165\u3002","\u5185\u5171\u751F\u5B66\u8BF4\u8BA4\u4E3A\u5B83\u4EEC\u8D77\u6E90\u4E8E\u88AB\u771F\u6838\u7EC6\u80DE\u541E\u566C\u7684\u7EC6\u83CC/\u84DD\u7EC6\u83CC\uFF1B\u7EBF\u7C92\u4F53 DNA \u591A\u4E3A\u6BCD\u7CFB\u9057\u4F20\u3002"],terms:[{t:"\u534A\u81EA\u4E3B\u6027",d:"\u7EC6\u80DE\u5668\u62E5\u6709\u90E8\u5206\u81EA\u8EAB\u9057\u4F20\u7CFB\u7EDF\uFF0C\u4F46\u591A\u6570\u86CB\u767D\u4ECD\u4F9D\u8D56\u6838\u57FA\u56E0\u3002"},{t:"\u5185\u5171\u751F\u5B66\u8BF4",d:"\u7EBF\u7C92\u4F53\u548C\u53F6\u7EFF\u4F53\u8D77\u6E90\u4E8E\u88AB\u5BBF\u4E3B\u7EC6\u80DE\u541E\u566C\u7684\u7EC6\u83CC\u6216\u84DD\u7EC6\u83CC\u7684\u5B66\u8BF4\u3002"}],check:{q:"\u7EBF\u7C92\u4F53\u201C\u534A\u81EA\u4E3B\u201D\u8868\u73B0\u5728\u54EA\u4E9B\u65B9\u9762\uFF1F",a:"\u5B83\u6709\u81EA\u8EAB\u73AF\u72B6 DNA\u3001\u6838\u7CD6\u4F53\u548C\u90E8\u5206\u57FA\u56E0\u8868\u8FBE\uFF0C\u4F46\u591A\u6570\u7EBF\u7C92\u4F53\u86CB\u767D\u7531\u6838\u57FA\u56E0\u7F16\u7801\u5E76\u5BFC\u5165\uFF0C\u590D\u5236\u4E0E\u5206\u88C2\u4E5F\u53D7\u6838\u57FA\u56E0\u8C03\u63A7\u3002"}}]},{id:"ch08",no:"\u7B2C\u516B\u7AE0",title:"\u7EC6\u80DE\u9AA8\u67B6",pages:"144\u2013176",scene:2,overview:"\u7EC6\u80DE\u9AA8\u67B6\u7531\u5FAE\u4E1D\u3001\u5FAE\u7BA1\u548C\u4E2D\u95F4\u4E1D\u7EC4\u6210\uFF0C\u7EF4\u6301\u5F62\u6001\u3001\u4EA7\u751F\u529B\u3001\u7EC4\u7EC7\u7EC6\u80DE\u5668\u5E76\u652F\u6301\u8FD0\u52A8\uFF1B\u4E09\u7C7B\u7EA4\u7EF4\u7684\u7EC4\u6210\u3001\u6781\u6027\u548C\u52A8\u529B\u5B66\u5404\u4E0D\u76F8\u540C\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u5FAE\u4E1D\u4E0E\u7EC6\u80DE\u8FD0\u52A8",pages:"144\u2013156",outline:["\u5FAE\u4E1D\u7684\u7EC4\u6210\u53CA\u5176\u7EC4\u88C5","\u5FAE\u4E1D\u7F51\u7EDC\u7ED3\u6784\u7684\u8C03\u8282\u4E0E\u7EC6\u80DE\u8FD0\u52A8","\u808C\u7403\u86CB\u767D\uFF1A\u4F9D\u8D56\u4E8E\u5FAE\u4E1D\u7684\u5206\u5B50\u9A6C\u8FBE","\u808C\u7EC6\u80DE\u7684\u6536\u7F29\u8FD0\u52A8"],summary:"\u5FAE\u4E1D\u662F\u808C\u52A8\u86CB\u767D\u7EC4\u6210\u7684\u6781\u6027\u7EA4\u7EF4\uFF0C\u901A\u8FC7\u8E0F\u8F66\u884C\u4E3A\u548C\u9A6C\u8FBE\u86CB\u767D\u4EA7\u751F\u6536\u7F29\u3001\u8FD0\u52A8\u4E0E\u5F62\u6001\u53D8\u5316\u3002",points:["\u5FAE\u4E1D\u76F4\u5F84\u7EA6 7 nm\uFF0C\u7531 ATP-\u808C\u52A8\u86CB\u767D\u805A\u5408\u800C\u6210\uFF1B\u6B63\u6781\u805A\u5408\u3001\u8D1F\u6781\u89E3\u805A\u5F62\u6210\u8E0F\u8F66\u884C\u4E3A\u3002","\u808C\u7403\u86CB\u767D\u6CBF\u5FAE\u4E1D\u8FD0\u52A8\uFF0C\u808C\u7403\u86CB\u767D II \u4E0E\u808C\u52A8\u86CB\u767D\u5F62\u6210\u6536\u7F29\u7CFB\u7EDF\uFF0C\u53C2\u4E0E\u5E94\u529B\u7EA4\u7EF4\u548C\u80DE\u8D28\u5206\u88C2\u3002","\u5FAE\u4E1D\u7F51\u7EDC\u5728\u7EC6\u80DE\u76AE\u5C42\u5BCC\u96C6\uFF0C\u901A\u8FC7\u6210\u6838\u3001\u4EA4\u8054\u3001\u5207\u65AD\u548C\u52A0\u5E3D\u86CB\u767D\u52A8\u6001\u91CD\u5851\u3002"],terms:[{t:"\u5FAE\u4E1D",d:"\u7531\u808C\u52A8\u86CB\u767D\u4E9A\u57FA\u7EC4\u6210\u7684\u76F4\u5F84\u7EA6 7 nm \u7684\u87BA\u65CB\u7EA4\u7EF4\u3002"},{t:"\u8E0F\u8F66\u884C\u4E3A",d:"\u5FAE\u4E1D\u6B63\u6781\u805A\u5408\u3001\u8D1F\u6781\u89E3\u805A\uFF0C\u4E9A\u57FA\u6301\u7EED\u6D41\u52A8\u800C\u957F\u5EA6\u57FA\u672C\u4E0D\u53D8\u7684\u73B0\u8C61\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48\u5FAE\u4E1D\u9700\u8981 ATP \u624D\u80FD\u7EF4\u6301\u52A8\u6001\u7EC4\u88C5\uFF1F",a:"ATP-\u808C\u52A8\u86CB\u767D\u7684\u805A\u5408\u4E0E ATP \u6C34\u89E3\u9A71\u52A8\u4E9A\u57FA\u5FAA\u73AF\uFF1BATP \u7ED3\u5408\u72B6\u6001\u4FC3\u8FDB\u6B63\u6781\u6DFB\u52A0\uFF0C\u6C34\u89E3\u540E\u4FC3\u8FDB\u8D1F\u6781\u89E3\u805A\uFF0C\u5F62\u6210\u8E0F\u8F66\u884C\u4E3A\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"\u5FAE\u7BA1\u53CA\u5176\u529F\u80FD",pages:"156\u2013171",outline:["\u5FAE\u7BA1\u7684\u7ED3\u6784\u7EC4\u5206\u4E0E\u6781\u6027","\u5FAE\u7BA1\u7684\u7EC4\u88C5\u4E0E\u89E3\u805A","\u5FAE\u7BA1\u7EC4\u7EC7\u4E2D\u5FC3","\u5FAE\u7BA1\u7684\u52A8\u529B\u5B66\u6027\u8D28","\u5FAE\u7BA1\u7ED3\u5408\u86CB\u767D","\u5FAE\u7BA1\u5BF9\u7EC6\u80DE\u7ED3\u6784\u7684\u7EC4\u7EC7\u4F5C\u7528","\u7EC6\u80DE\u5185\u4F9D\u8D56\u4E8E\u5FAE\u7BA1\u7684\u7269\u8D28\u8FD0\u8F93","\u7EA4\u6BDB\u548C\u97AD\u6BDB\u7684\u7ED3\u6784\u4E0E\u529F\u80FD","\u7EBA\u9524\u4F53\u548C\u67D3\u8272\u4F53\u8FD0\u52A8"],summary:"\u5FAE\u7BA1\u662F \u03B1/\u03B2 \u5FAE\u7BA1\u86CB\u767D\u4E8C\u805A\u4F53\u7EC4\u6210\u7684\u4E2D\u7A7A\u7BA1\uFF0C\u5177\u6709\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027\u548C\u6781\u6027\uFF0C\u662F\u8FD0\u8F93\u8F68\u9053\u4E0E\u7EBA\u9524\u4F53\u7684\u6838\u5FC3\u3002",points:["\u5FAE\u7BA1\u5916\u5F84\u7EA6 24 nm\u3001\u5185\u5F84\u7EA6 15 nm\uFF0C\u7531 13 \u6761\u539F\u7EA4\u7EF4\u56F4\u6210\uFF1B\u6B63\u6781\u591A\u671D\u5411\u5916\u5468\uFF0C\u8D1F\u6781\u9760\u8FD1\u4E2D\u5FC3\u4F53\u3002","\u5FAE\u7BA1\u6B63\u6781\u5728\u751F\u957F\u4E0E\u5FEB\u901F\u89E3\u805A\u4E4B\u95F4\u5207\u6362\uFF08\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027\uFF09\uFF0C\u53D7 GTP \u5E3D\u548C\u5FAE\u7BA1\u7ED3\u5408\u86CB\u767D\u8C03\u63A7\u3002","\u9A71\u52A8\u86CB\u767D\u591A\u5411\u6B63\u6781\u3001\u52A8\u529B\u86CB\u767D\u5411\u8D1F\u6781\u8FD0\u8F93\u8D27\u7269\uFF1B\u5FAE\u7BA1\u8FD8\u6784\u6210\u7EA4\u6BDB\u3001\u97AD\u6BDB\u548C\u7EBA\u9524\u4F53\u3002"],terms:[{t:"\u5FAE\u7BA1",d:"\u7531 \u03B1/\u03B2 \u5FAE\u7BA1\u86CB\u767D\u4E8C\u805A\u4F53\u7EC4\u6210\u7684\u6781\u6027\u4E2D\u7A7A\u7BA1\uFF0C\u76F4\u5F84\u7EA6 24 nm\u3002"},{t:"\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027",d:"\u5FAE\u7BA1\u6B63\u6781\u5728\u751F\u957F\u4E0E\u5FEB\u901F\u89E3\u805A\u4E4B\u95F4\u968F\u673A\u5207\u6362\u7684\u884C\u4E3A\u3002"}],check:{q:"\u7D2B\u6749\u9187\u4E3A\u4EC0\u4E48\u80FD\u6291\u5236\u7EC6\u80DE\u5206\u88C2\uFF1F",a:"\u7D2B\u6749\u9187\u7A33\u5B9A\u5FAE\u7BA1\u3001\u6291\u5236\u5176\u89E3\u805A\uFF0C\u4F7F\u7EBA\u9524\u4F53\u5FAE\u7BA1\u65E0\u6CD5\u6B63\u5E38\u91CD\u7EC4\uFF0C\u7EC6\u80DE\u505C\u6EDE\u4E8E M \u671F\u5E76\u89E6\u53D1\u51CB\u4EA1\u3002"}},{no:"\u7B2C\u4E09\u8282",title:"\u4E2D\u95F4\u4E1D",pages:"171\u2013176",outline:["\u4E2D\u95F4\u4E1D\u7684\u4E3B\u8981\u7C7B\u578B\u548C\u7EC4\u6210\u6210\u5206","\u4E2D\u95F4\u4E1D\u7684\u7EC4\u88C5\u4E0E\u8868\u8FBE","\u4E2D\u95F4\u4E1D\u4E0E\u5176\u4ED6\u7EC6\u80DE\u7ED3\u6784\u7684\u8054\u7CFB"],summary:"\u4E2D\u95F4\u4E1D\u662F\u76F4\u5F84\u7EA6 10 nm\u3001\u65E0\u6781\u6027\u3001\u6297\u62C9\u529B\u7684\u7EF3\u7D22\u72B6\u7EA4\u7EF4\uFF0C\u4E3B\u8981\u627F\u62C5\u673A\u68B0\u652F\u6491\u5E76\u628A\u7EC6\u80DE\u4E0E\u7EC6\u80DE\u3001\u7EC6\u80DE\u4E0E\u57FA\u8D28\u8FDE\u63A5\u8D77\u6765\u3002",points:["\u4E2D\u95F4\u4E1D\u7531\u89D2\u86CB\u767D\u3001\u6CE2\u5F62\u86CB\u767D\u3001\u7ED3\u86CB\u767D\u3001\u795E\u7ECF\u4E1D\u86CB\u767D\u548C\u6838\u7EA4\u5C42\u86CB\u767D\u7B49\u7EC4\u6210\uFF0C\u5177\u6709\u7EC4\u7EC7\u7279\u5F02\u6027\u3002","\u4E2D\u95F4\u4E1D\u65E0\u6781\u6027\u3001\u4E0D\u4F9D\u8D56\u5206\u5B50\u9A6C\u8FBE\uFF0C\u4F46\u80FD\u901A\u8FC7\u6A2A\u5411\u4EA4\u8054\u5F62\u6210\u7F51\u7EDC\uFF0C\u6297\u673A\u68B0\u5E94\u529B\u3002","\u89D2\u86CB\u767D\u53C2\u4E0E\u6865\u7C92/\u534A\u6865\u7C92\u8FDE\u63A5\uFF1B\u6838\u7EA4\u5C42\u86CB\u767D\u7EC4\u6210\u6838\u7EA4\u5C42\uFF0C\u652F\u6491\u6838\u819C\u3002"],terms:[{t:"\u4E2D\u95F4\u4E1D",d:"\u76F4\u5F84\u7EA6 10 nm\u3001\u65E0\u6781\u6027\u3001\u6297\u62C9\u529B\u7684\u7EC6\u80DE\u9AA8\u67B6\u7EA4\u7EF4\u3002"},{t:"\u6838\u7EA4\u5C42\u86CB\u767D",d:"\u7EC4\u6210\u6838\u7EA4\u5C42\u7684\u4E00\u7C7B\u4E2D\u95F4\u4E1D\u86CB\u767D\uFF0C\u4F4D\u4E8E\u6838\u819C\u5185\u4FA7\u3002"}],check:{q:"\u4E2D\u95F4\u4E1D\u4E0E\u5FAE\u4E1D\u3001\u5FAE\u7BA1\u5728\u6781\u6027\u548C\u9A6C\u8FBE\u4F7F\u7528\u4E0A\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F",a:"\u4E2D\u95F4\u4E1D\u6CA1\u6709\u660E\u663E\u6781\u6027\uFF0C\u4E5F\u4E0D\u4F5C\u4E3A\u5206\u5B50\u9A6C\u8FBE\u7684\u8F68\u9053\uFF1B\u5FAE\u4E1D\u548C\u5FAE\u7BA1\u6709\u6781\u6027\uFF0C\u5E76\u5206\u522B\u4E0E\u808C\u7403\u86CB\u767D\u3001\u9A71\u52A8\u86CB\u767D/\u52A8\u529B\u86CB\u767D\u914D\u5408\u3002"}}]}];var Wf=[{id:"ch09",no:"\u7B2C\u4E5D\u7AE0",title:"\u7EC6\u80DE\u6838\u4E0E\u67D3\u8272\u8D28",pages:"177\u2013212",scene:4,overview:"\u7EC6\u80DE\u6838\u662F\u9057\u4F20\u4FE1\u606F\u50A8\u5B58\u3001\u590D\u5236\u4E0E\u8F6C\u5F55\u8C03\u63A7\u7684\u4E2D\u5FC3\uFF1B\u6838\u88AB\u819C\u3001\u67D3\u8272\u8D28\u3001\u6838\u4EC1\u548C\u6838\u57FA\u8D28\u5171\u540C\u6784\u6210\u9AD8\u5EA6\u7EC4\u7EC7\u7684\u6838\u5185\u7A7A\u95F4\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u6838\u88AB\u819C",pages:"178\u2013185",outline:["\u6838\u819C","\u6838\u5B54\u590D\u5408\u4F53","\u6838\u7EA4\u5C42"],summary:"\u6838\u88AB\u819C\u7531\u5185\u5916\u4E24\u5C42\u819C\u7EC4\u6210\uFF0C\u5916\u819C\u4E0E\u5185\u8D28\u7F51\u8FDE\u7EED\uFF1B\u6838\u5B54\u590D\u5408\u4F53\u63A7\u5236\u6838\u8D28\u4EA4\u6362\uFF0C\u6838\u7EA4\u5C42\u4E3A\u6838\u819C\u63D0\u4F9B\u673A\u68B0\u652F\u6491\u3002",points:["\u6838\u819C\u662F\u53CC\u5C42\u819C\uFF0C\u4E24\u5C42\u4E4B\u95F4\u7684\u6838\u5468\u95F4\u9699\u4E0E\u5185\u8D28\u7F51\u8154\u76F8\u901A\u3002","\u6838\u5B54\u590D\u5408\u4F53\u5916\u5F84\u7EA6 120 nm\uFF1B\u5C0F\u5206\u5B50\u53EF\u6269\u6563\uFF0C\u5927\u5206\u5B50\u9700\u6838\u5B9A\u4F4D\u4FE1\u53F7/\u6838\u8F93\u51FA\u4FE1\u53F7\u548C Ran-GTP \u53C2\u4E0E\u4E3B\u52A8\u8FD0\u8F93\u3002","\u6838\u7EA4\u5C42\u7531 lamin \u4E2D\u95F4\u4E1D\u7EC4\u6210\uFF0C\u4F4D\u4E8E\u5185\u819C\u5185\u4FA7\uFF0C\u652F\u6491\u6838\u819C\u5E76\u53C2\u4E0E\u67D3\u8272\u8D28\u5B9A\u4F4D\u3002"],terms:[{t:"\u6838\u5B54\u590D\u5408\u4F53",d:"\u8DE8\u8D8A\u6838\u88AB\u819C\u3001\u4ECB\u5BFC\u6838\u8D28\u4EA4\u6362\u7684\u5927\u578B\u86CB\u767D\u590D\u5408\u4F53\u3002"},{t:"\u6838\u7EA4\u5C42",d:"\u7D27\u8D34\u6838\u819C\u5185\u4FA7\u7684 lamin \u4E2D\u95F4\u4E1D\u7F51\u7EDC\uFF0C\u4E3A\u6838\u819C\u63D0\u4F9B\u652F\u6491\u3002"}],check:{q:"\u6838\u5B54\u590D\u5408\u4F53\u5982\u4F55\u517C\u987E\u9AD8\u901A\u91CF\u4E0E\u9009\u62E9\u6027\uFF1F",a:"\u5C0F\u5206\u5B50\u548C\u79BB\u5B50\u53EF\u7ECF\u5B54\u9053\u88AB\u52A8\u6269\u6563\uFF1B\u5927\u5206\u5B50\u4F9D\u8D56\u6838\u5B9A\u4F4D/\u8F93\u51FA\u4FE1\u53F7\u3001\u8F6C\u8FD0\u53D7\u4F53\u548C Ran-GTP \u68AF\u5EA6\u8FDB\u884C\u4E3B\u52A8\u8FD0\u8F93\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"\u67D3\u8272\u8D28",pages:"185\u2013195",outline:["\u67D3\u8272\u8D28 DNA","\u67D3\u8272\u8D28\u86CB\u767D","\u6838\u5C0F\u4F53","\u67D3\u8272\u8D28\u7EC4\u88C5","\u67D3\u8272\u8D28\u7C7B\u578B"],summary:"\u67D3\u8272\u8D28\u7531 DNA\u3001\u7EC4\u86CB\u767D\u548C\u975E\u7EC4\u86CB\u767D\u7EC4\u6210\uFF1B\u6838\u5C0F\u4F53\u662F\u57FA\u672C\u7ED3\u6784\u5355\u4F4D\uFF0C\u8FDB\u4E00\u6B65\u6298\u53E0\u5F62\u6210 30 nm \u7EA4\u7EF4\u548C\u9AD8\u7EA7\u7ED3\u6784\u3002",points:["\u6838\u5C0F\u4F53\u6838\u5FC3\u7531 H2A\u3001H2B\u3001H3\u3001H4 \u5404\u4E24\u5206\u5B50\u7EC4\u6210\u7EC4\u86CB\u767D\u516B\u805A\u4F53\uFF0C\u7EA6 147 bp DNA \u7F20\u7ED5\u7EA6 1.75 \u5708\u3002","\u6838\u5C0F\u4F53\u4E32\u73E0\u6298\u53E0\u6210\u7EA6 30 nm \u87BA\u7EBF\u7BA1\uFF0C\u518D\u5F62\u6210\u73AF\u72B6\u7ED3\u6784\u57DF\u548C\u66F4\u9AD8\u5C42\u6B21\u7684\u67D3\u8272\u8D28\u3002","\u5E38\u67D3\u8272\u8D28\u8F83\u677E\u6563\u3001\u8F6C\u5F55\u6D3B\u8DC3\uFF1B\u5F02\u67D3\u8272\u8D28\u8F83\u6D53\u7F29\u3001\u8F6C\u5F55\u53D7\u6291\u5236\u3002"],terms:[{t:"\u67D3\u8272\u8D28",d:"DNA \u4E0E\u7EC4\u86CB\u767D\u3001\u975E\u7EC4\u86CB\u767D\u7EC4\u6210\u7684\u590D\u5408\u7269\uFF0C\u662F\u9057\u4F20\u4FE1\u606F\u7684\u50A8\u5B58\u5F62\u5F0F\u3002"},{t:"\u6838\u5C0F\u4F53",d:"\u7531\u7EC4\u86CB\u767D\u516B\u805A\u4F53\u548C\u7EA6 147 bp DNA \u7EC4\u6210\u7684\u67D3\u8272\u8D28\u57FA\u672C\u7ED3\u6784\u5355\u4F4D\u3002"}],check:{q:"\u6838\u5C0F\u4F53\u5982\u4F55\u5E2E\u52A9 DNA \u538B\u7F29\uFF1F",a:"DNA \u7F20\u7ED5\u7EC4\u86CB\u767D\u516B\u805A\u4F53\u5F62\u6210 11 nm \u4E32\u73E0\uFF0C\u518D\u6298\u53E0\u6210 30 nm \u7EA4\u7EF4\uFF0C\u5E76\u901A\u8FC7\u73AF\u951A\u5B9A\u7B49\u9AD8\u7EA7\u7ED3\u6784\u9010\u7EA7\u538B\u7F29\u3002"}},{no:"\u7B2C\u4E09\u8282",title:"\u67D3\u8272\u8D28\u7684\u590D\u5236\u4E0E\u8868\u8FBE",pages:"195\u2013203",outline:["\u67D3\u8272\u8D28\u7684\u590D\u5236\u4E0E\u4FEE\u590D","\u67D3\u8272\u8D28\u7684\u6FC0\u6D3B\u4E0E\u5931\u6D3B","\u67D3\u8272\u8D28\u4E0E\u57FA\u56E0\u8868\u8FBE\u8C03\u63A7","\u67D3\u8272\u8D28\u7684\u4E09\u7EF4\u52A8\u6001\u5206\u5E03\u4E0E\u7EC6\u80DE ID"],summary:"\u67D3\u8272\u8D28\u5728 S \u671F\u590D\u5236\u3001\u5728\u635F\u4F24\u65F6\u4FEE\u590D\uFF0C\u5E76\u901A\u8FC7\u7EC4\u86CB\u767D\u4FEE\u9970\u3001DNA \u7532\u57FA\u5316\u548C\u4E09\u7EF4\u6298\u53E0\u8C03\u63A7\u57FA\u56E0\u8868\u8FBE\u3002",points:["DNA \u590D\u5236\u4ECE\u590D\u5236\u8D77\u70B9\u8D77\u59CB\uFF0C\u53CC\u5411\u8FDB\u884C\uFF1B\u590D\u5236\u53C9\u4E0E\u7EC4\u86CB\u767D\u88C5\u914D\u3001\u67D3\u8272\u8D28\u6210\u719F\u8026\u5408\u3002","DNA \u7532\u57FA\u5316\u3001\u7EC4\u86CB\u767D\u4E59\u9170\u5316/\u7532\u57FA\u5316\u548C\u67D3\u8272\u8D28\u91CD\u5851\u6539\u53D8\u53EF\u53CA\u6027\uFF0C\u6784\u6210\u8868\u89C2\u9057\u4F20\u8C03\u63A7\u3002","\u67D3\u8272\u8D28\u5F62\u6210\u62D3\u6251\u5173\u8054\u7ED3\u6784\u57DF\uFF08TAD\uFF09\u548C\u73AF\uFF0C\u4E09\u7EF4\u6784\u8C61\u5F71\u54CD\u589E\u5F3A\u5B50\u2014\u542F\u52A8\u5B50\u901A\u8BAF\u3002"],terms:[{t:"\u590D\u5236\u8D77\u70B9",d:"DNA \u590D\u5236\u8D77\u59CB\u7684\u7279\u5B9A\u5E8F\u5217\uFF0C\u67D3\u8272\u4F53\u53EF\u542B\u591A\u4E2A\u590D\u5236\u8D77\u70B9\u3002"},{t:"\u8868\u89C2\u9057\u4F20",d:"\u4E0D\u6539\u53D8 DNA \u5E8F\u5217\u3001\u4F46\u53EF\u9057\u4F20\u5730\u5F71\u54CD\u57FA\u56E0\u8868\u8FBE\u7684\u67D3\u8272\u8D28\u4FEE\u9970\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48\u540C\u6837\u7684 DNA \u5E8F\u5217\u53EF\u4EE5\u4EA7\u751F\u4E0D\u540C\u7EC6\u80DE\u7C7B\u578B\uFF1F",a:"\u4E0D\u540C\u7EC6\u80DE\u8868\u8FBE\u4E0D\u540C\u7684\u8F6C\u5F55\u56E0\u5B50\uFF0C\u5E76\u5EFA\u7ACB\u4E0D\u540C\u7684 DNA \u7532\u57FA\u5316\u3001\u7EC4\u86CB\u767D\u4FEE\u9970\u548C\u67D3\u8272\u8D28\u4E09\u7EF4\u7ED3\u6784\uFF0C\u4F7F\u540C\u4E00\u57FA\u56E0\u7EC4\u7684\u4E0D\u540C\u57FA\u56E0\u88AB\u9009\u62E9\u6027\u5F00\u542F\u6216\u5173\u95ED\u3002"}},{no:"\u7B2C\u56DB\u8282",title:"\u67D3\u8272\u4F53",pages:"203\u2013208",outline:["\u67D3\u8272\u4F53\u7684\u5F62\u6001\u7ED3\u6784","\u67D3\u8272\u4F53\u7684\u529F\u80FD\u5143\u4EF6","\u67D3\u8272\u4F53\u5E26\u578B","\u7279\u6B8A\u67D3\u8272\u4F53"],summary:"\u67D3\u8272\u4F53\u662F\u5206\u88C2\u671F\u9AD8\u5EA6\u51DD\u7F29\u7684\u67D3\u8272\u8D28\uFF0C\u5177\u6709\u7740\u4E1D\u7C92\u3001\u7AEF\u7C92\u548C\u590D\u5236\u8D77\u70B9\u4E09\u4E2A\u529F\u80FD\u5143\u4EF6\uFF0C\u53EF\u901A\u8FC7\u5E26\u578B\u8FDB\u884C\u8BC6\u522B\u4E0E\u6838\u578B\u5206\u6790\u3002",points:["\u7740\u4E1D\u7C92\u8FDE\u63A5\u52A8\u7C92\u4E0E\u7EBA\u9524\u4F53\u5FAE\u7BA1\uFF1B\u7AEF\u7C92\u4FDD\u62A4\u67D3\u8272\u4F53\u672B\u7AEF\u5E76\u53C2\u4E0E\u590D\u5236\u8870\u8001\uFF1B\u590D\u5236\u8D77\u70B9\u4FDD\u8BC1 DNA \u590D\u5236\u3002","\u4EBA\u7C7B\u4F53\u7EC6\u80DE\u6709 46 \u6761\u67D3\u8272\u4F53\uFF0822 \u5BF9\u5E38\u67D3\u8272\u4F53 + XX/XY\uFF09\uFF0C\u6838\u578B\u5206\u6790\u7528\u4E8E\u68C0\u6D4B\u6570\u76EE\u548C\u7ED3\u6784\u5F02\u5E38\u3002","\u591A\u7EBF\u67D3\u8272\u4F53\u548C\u706F\u5237\u67D3\u8272\u4F53\u662F\u7279\u6B8A\u53D1\u80B2\u9636\u6BB5\u7684\u5DE8\u5927\u67D3\u8272\u4F53\uFF0C\u4FBF\u4E8E\u7814\u7A76\u57FA\u56E0\u8868\u8FBE\u4E0E\u67D3\u8272\u4F53\u7ED3\u6784\u3002"],terms:[{t:"\u7740\u4E1D\u7C92",d:"\u67D3\u8272\u4F53\u4E0A\u8FDE\u63A5\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u3001\u7EC4\u88C5\u52A8\u7C92\u7684\u533A\u57DF\u3002"},{t:"\u7AEF\u7C92",d:"\u67D3\u8272\u4F53\u672B\u7AEF\u7684\u91CD\u590D\u5E8F\u5217\u4E0E\u86CB\u767D\u590D\u5408\u4F53\uFF0C\u4FDD\u62A4\u672B\u7AEF\u5E76\u9650\u5236\u590D\u5236\u6027\u8870\u8001\u3002"}],check:{q:"\u67D3\u8272\u4F53\u7684\u4E09\u4E2A\u529F\u80FD\u5143\u4EF6\u662F\u4EC0\u4E48\uFF1F",a:"DNA \u590D\u5236\u8D77\u70B9\u3001\u7740\u4E1D\u7C92\u548C\u7AEF\u7C92\uFF1B\u5B83\u4EEC\u5206\u522B\u4FDD\u8BC1\u590D\u5236\u3001\u5206\u914D\u548C\u672B\u7AEF\u7A33\u5B9A\u3002"}},{no:"\u7B2C\u4E94\u8282",title:"\u6838\u4EC1\u4E0E\u6838\u4F53",pages:"208\u2013211",outline:["\u6838\u4EC1\u7684\u7ED3\u6784","\u6838\u4EC1\u7684\u529F\u80FD","\u6838\u4EC1\u7684\u52A8\u6001\u5468\u671F\u53D8\u5316","\u6838\u4F53"],summary:"\u6838\u4EC1\u662F\u65E0\u819C\u7ED3\u6784\u7684\u6838\u5185\u533A\u57DF\uFF0C\u56F4\u7ED5 rRNA \u57FA\u56E0\u7EC4\u7EC7\uFF0C\u5B8C\u6210 rRNA \u8F6C\u5F55\u3001\u52A0\u5DE5\u548C\u6838\u7CD6\u4F53\u4E9A\u57FA\u7EC4\u88C5\u3002",points:["\u6838\u4EC1\u7EC4\u7EC7\u533A\uFF08NOR\uFF09\u542B rRNA \u57FA\u56E0\uFF1BRNA \u805A\u5408\u9176 I \u8F6C\u5F55 rRNA \u524D\u4F53\uFF0C\u52A0\u5DE5\u540E\u4E0E\u6838\u7CD6\u4F53\u86CB\u767D\u7EC4\u88C5\u3002","\u6838\u4EC1\u5728\u7EC6\u80DE\u5468\u671F\u4E2D\u52A8\u6001\u53D8\u5316\uFF1A\u5206\u88C2\u671F\u89E3\u4F53\uFF0C\u5206\u88C2\u540E\u91CD\u65B0\u5F62\u6210\u3002","\u6838\u4F53\u662F\u6838\u5185\u591A\u79CD\u65E0\u819C\u5C0F\u4F53\uFF0C\u53C2\u4E0E\u526A\u63A5\u3001\u8F6C\u5F55\u548C\u5E94\u6FC0\u53CD\u5E94\u7684\u7EC4\u7EC7\u3002"],terms:[{t:"\u6838\u4EC1",d:"\u6838\u5185\u5408\u6210 rRNA\u3001\u7EC4\u88C5\u6838\u7CD6\u4F53\u4E9A\u57FA\u7684\u65E0\u819C\u7ED3\u6784\u3002"},{t:"NOR",d:"\u542B\u6709 rRNA \u57FA\u56E0\u3001\u7EC4\u7EC7\u6838\u4EC1\u5F62\u6210\u7684\u67D3\u8272\u4F53\u533A\u57DF\u3002"}],check:{q:"\u6838\u4EC1\u4E3A\u4EC0\u4E48\u6CA1\u6709\u819C\u5374\u80FD\u88AB\u8BC6\u522B\uFF1F",a:"\u6838\u4EC1\u7531 rRNA \u57FA\u56E0\u3001\u8F6C\u5F55\u673A\u5668\u3001rRNA\u3001\u6838\u7CD6\u4F53\u86CB\u767D\u548C\u591A\u79CD\u6838\u4EC1\u86CB\u767D\u9AD8\u5EA6\u5BCC\u96C6\u5F62\u6210\uFF0C\u5177\u6709\u4E0D\u540C\u4E8E\u6838\u57FA\u8D28\u7684\u5BC6\u5EA6\u548C\u5206\u5B50\u7EC4\u6210\uFF0C\u56E0\u6B64\u53EF\u5728\u663E\u5FAE\u955C\u4E0B\u8BC6\u522B\u3002"}},{no:"\u7B2C\u516D\u8282",title:"\u6838\u57FA\u8D28",pages:"211\u2013212",outline:["\u6838\u57FA\u8D28"],summary:"\u6838\u57FA\u8D28\u662F\u6838\u5185\u9664\u67D3\u8272\u8D28\u3001\u6838\u819C\u548C\u6838\u4EC1\u5916\u7684\u86CB\u767D\u6027\u7F51\u7EDC\uFF0C\u53C2\u4E0E\u67D3\u8272\u8D28\u7EC4\u7EC7\u3001\u8F6C\u5F55\u3001\u590D\u5236\u548C RNA \u52A0\u5DE5\u3002",points:["\u6838\u57FA\u8D28\u4E0D\u662F\u5747\u5300\u6EB6\u6DB2\uFF0C\u800C\u662F\u7531\u7EA4\u7EF4\u86CB\u767D\u548C\u590D\u5408\u7269\u6784\u6210\u7684\u52A8\u6001\u7F51\u7EDC\u3002","\u5B83\u4E0E\u6838\u7EA4\u5C42\u3001\u6838\u5B54\u548C\u67D3\u8272\u8D28\u76F8\u4E92\u4F5C\u7528\uFF0C\u4E3A\u6838\u5185\u53CD\u5E94\u63D0\u4F9B\u7A7A\u95F4\u7EC4\u7EC7\u3002","\u6838\u57FA\u8D28\u86CB\u767D\u53C2\u4E0E\u57FA\u56E0\u8868\u8FBE\u8C03\u63A7\u548C DNA \u590D\u5236\uFF0C\u662F\u6838\u5185\u7ED3\u6784\u7814\u7A76\u7684\u91CD\u8981\u90E8\u5206\u3002"],terms:[{t:"\u6838\u57FA\u8D28",d:"\u6838\u5185\u9664\u67D3\u8272\u8D28\u3001\u6838\u819C\u3001\u6838\u4EC1\u5916\u7684\u7EA4\u7EF4\u86CB\u767D\u7F51\u7EDC\u4E0E\u53EF\u6EB6\u6027\u6210\u5206\u3002"}],check:{q:"\u6838\u57FA\u8D28\u4E0E\u6838\u7EA4\u5C42\u6709\u4EC0\u4E48\u533A\u522B\uFF1F",a:"\u6838\u7EA4\u5C42\u662F\u7D27\u8D34\u6838\u819C\u5185\u4FA7\u7684 lamin \u4E2D\u95F4\u4E1D\u7F51\u7EDC\uFF1B\u6838\u57FA\u8D28\u662F\u8D2F\u7A7F\u6838\u5185\u7684\u66F4\u5E7F\u6CDB\u86CB\u767D\u7F51\u7EDC\uFF0C\u4E8C\u8005\u6709\u8054\u7CFB\u4F46\u8303\u56F4\u4E0D\u540C\u3002"}}]},{id:"ch10",no:"\u7B2C\u5341\u7AE0",title:"\u6838\u7CD6\u4F53",pages:"213\u2013223",scene:5,overview:"\u6838\u7CD6\u4F53\u662F\u628A mRNA \u7684\u9057\u4F20\u4FE1\u606F\u7FFB\u8BD1\u6210\u86CB\u767D\u8D28\u7684\u5206\u5B50\u673A\u5668\uFF1B\u539F\u6838\u4E0E\u771F\u6838\u6838\u7CD6\u4F53\u5728\u5927\u5C0F\u3001\u7EC4\u6210\u548C RNA \u542B\u91CF\u4E0A\u6709\u5DEE\u5F02\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u6838\u7CD6\u4F53\u7684\u7C7B\u578B\u4E0E\u7ED3\u6784",pages:"214\u2013218",outline:["\u6838\u7CD6\u4F53\u7684\u57FA\u672C\u7C7B\u578B\u4E0E\u5316\u5B66\u7EC4\u6210","\u6838\u7CD6\u4F53\u7684\u7ED3\u6784","\u6838\u7CD6\u4F53\u86CB\u767D\u8D28\u4E0E rRNA \u7684\u529F\u80FD"],summary:"\u6838\u7CD6\u4F53\u7531\u5927\u5C0F\u4E24\u4E2A\u4E9A\u57FA\u7EC4\u6210\uFF0C\u542B rRNA \u4E0E\u6838\u7CD6\u4F53\u86CB\u767D\uFF1BrRNA \u4E0D\u4EC5\u6784\u5EFA\u9AA8\u67B6\uFF0C\u8FD8\u76F4\u63A5\u53C2\u4E0E\u80BD\u952E\u5F62\u6210\u548C\u7FFB\u8BD1\u8C03\u63A7\u3002",points:["\u539F\u6838\u6838\u7CD6\u4F53\u4E3A 70S\uFF0850S + 30S\uFF09\uFF0C\u771F\u6838\u6838\u7CD6\u4F53\u4E3A 80S\uFF0860S + 40S\uFF09\u3002","\u6838\u7CD6\u4F53\u6709 A\u3001P\u3001E \u4E09\u4E2A tRNA \u7ED3\u5408\u4F4D\u70B9\uFF0CmRNA \u7ED3\u5408\u4F4D\u70B9\u4F4D\u4E8E\u5C0F\u4E9A\u57FA\u3002","rRNA \u6784\u6210\u6838\u7CD6\u4F53\u6838\u5FC3\u5E76\u50AC\u5316\u80BD\u952E\u5F62\u6210\uFF0C\u6838\u7CD6\u4F53\u86CB\u767D\u591A\u4F4D\u4E8E\u8868\u9762\uFF0C\u53C2\u4E0E\u7EC4\u88C5\u4E0E\u529F\u80FD\u8C03\u8282\u3002"],terms:[{t:"\u6838\u7CD6\u4F53",d:"\u7531 rRNA \u4E0E\u86CB\u767D\u8D28\u7EC4\u6210\u3001\u6267\u884C\u86CB\u767D\u8D28\u5408\u6210\u7684\u6838\u7CD6\u6838\u86CB\u767D\u590D\u5408\u4F53\u3002"},{t:"rRNA",d:"\u6838\u7CD6\u4F53 RNA\uFF0C\u6784\u6210\u6838\u7CD6\u4F53\u9AA8\u67B6\u5E76\u53C2\u4E0E\u50AC\u5316\u4E0E\u8BC6\u522B\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48\u8BF4\u6838\u7CD6\u4F53\u662F\u6838\u9176\uFF1F",a:"\u6838\u7CD6\u4F53\u7684\u50AC\u5316\u6838\u5FC3\u7531 rRNA \u6784\u6210\uFF0C\u80BD\u952E\u5F62\u6210\u4E3B\u8981\u7531 rRNA \u50AC\u5316\uFF1B\u86CB\u767D\u8D28\u66F4\u591A\u53C2\u4E0E\u7ED3\u6784\u548C\u8C03\u8282\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"\u591A\u6838\u7CD6\u4F53\u4E0E\u86CB\u767D\u8D28\u7684\u5408\u6210",pages:"218\u2013223",outline:["\u591A\u6838\u7CD6\u4F53","\u86CB\u767D\u8D28\u7684\u5408\u6210","\u6838\u7CD6\u4F53\u4E0E RNA \u4E16\u754C"],summary:"\u591A\u4E2A\u6838\u7CD6\u4F53\u53EF\u540C\u65F6\u7FFB\u8BD1\u540C\u4E00\u6761 mRNA \u5F62\u6210\u591A\u6838\u7CD6\u4F53\uFF1B\u7FFB\u8BD1\u5206\u4E3A\u8D77\u59CB\u3001\u5EF6\u4F38\u548C\u7EC8\u6B62\uFF0C\u9700\u8981 tRNA\u3001\u8D77\u59CB\u56E0\u5B50\u548C\u80FD\u91CF\u3002",points:["\u8D77\u59CB\u9636\u6BB5\u5C0F\u4E9A\u57FA\u3001\u8D77\u59CB tRNA \u4E0E mRNA \u7EC4\u88C5\uFF0C\u8BC6\u522B\u8D77\u59CB\u5BC6\u7801\u5B50\uFF1B\u5EF6\u4F38\u9636\u6BB5\u6309\u5BC6\u7801\u5B50\u2014\u53CD\u5BC6\u7801\u5B50\u914D\u5BF9\u6DFB\u52A0\u6C28\u57FA\u9178\u3002","\u7EC8\u6B62\u5BC6\u7801\u5B50\u7531\u91CA\u653E\u56E0\u5B50\u8BC6\u522B\uFF0C\u80BD\u94FE\u91CA\u653E\uFF0C\u6838\u7CD6\u4F53\u89E3\u4F53\u5E76\u53EF\u91CD\u590D\u4F7F\u7528\u3002","\u591A\u6838\u7CD6\u4F53\u80FD\u63D0\u9AD8\u540C\u4E00\u6761 mRNA \u7684\u7FFB\u8BD1\u6548\u7387\uFF1BrRNA \u7684\u50AC\u5316\u4E0E\u4FE1\u606F\u8BC6\u522B\u652F\u6301\u201CRNA \u4E16\u754C\u201D\u5047\u8BF4\u3002"],terms:[{t:"\u591A\u6838\u7CD6\u4F53",d:"\u540C\u4E00\u6761 mRNA \u4E0A\u591A\u4E2A\u6838\u7CD6\u4F53\u540C\u65F6\u7FFB\u8BD1\u5F62\u6210\u7684\u590D\u5408\u4F53\u3002"},{t:"\u6838\u9176",d:"\u5177\u6709\u50AC\u5316\u6D3B\u6027\u7684 RNA \u5206\u5B50\u3002"}],check:{q:"\u591A\u6838\u7CD6\u4F53\u5982\u4F55\u63D0\u9AD8\u86CB\u767D\u8D28\u5408\u6210\u6548\u7387\uFF1F",a:"\u591A\u4E2A\u6838\u7CD6\u4F53\u540C\u65F6\u7ED3\u5408\u540C\u4E00\u6761 mRNA\uFF0C\u4ECE\u4E0D\u540C\u4F4D\u7F6E\u5E76\u884C\u7FFB\u8BD1\uFF0C\u663E\u8457\u63D0\u9AD8\u5355\u4F4D\u65F6\u95F4\u5185\u5408\u6210\u7684\u86CB\u767D\u91CF\u3002"}}]},{id:"ch11",no:"\u7B2C\u5341\u4E00\u7AE0",title:"\u7EC6\u80DE\u4FE1\u53F7\u8F6C\u5BFC",pages:"224\u2013260",scene:1,overview:"\u7EC6\u80DE\u901A\u8FC7\u4FE1\u53F7\u5206\u5B50\u3001\u53D7\u4F53\u548C\u80DE\u5185\u4FE1\u53F7\u7F51\u7EDC\u611F\u77E5\u73AF\u5883\u5E76\u4F5C\u51FA\u53CD\u5E94\uFF1B\u4FE1\u53F7\u8F6C\u5BFC\u5177\u6709\u7279\u5F02\u6027\u3001\u653E\u5927\u6027\u548C\u7F51\u7EDC\u6574\u5408\u6027\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u7EC6\u80DE\u901A\u4FE1\u4E0E\u4FE1\u53F7\u8F6C\u5BFC",pages:"224\u2013233",outline:["\u7EC6\u80DE\u901A\u4FE1","\u7EC6\u80DE\u7684\u4FE1\u53F7\u5206\u5B50\u4E0E\u53D7\u4F53","\u4FE1\u53F7\u8F6C\u5BFC\u7CFB\u7EDF\u53CA\u5176\u7279\u6027"],summary:"\u7EC6\u80DE\u901A\u4FE1\u5305\u62EC\u65C1\u5206\u6CCC\u3001\u81EA\u5206\u6CCC\u3001\u5185\u5206\u6CCC\u548C\u63A5\u89E6\u4F9D\u8D56\u7B49\u65B9\u5F0F\uFF1B\u53D7\u4F53\u628A\u80DE\u5916\u4FE1\u53F7\u8F6C\u6362\u4E3A\u80DE\u5185\u7B2C\u4E8C\u4FE1\u4F7F\u548C\u6FC0\u9176\u7EA7\u8054\u3002",points:["\u4FE1\u53F7\u5206\u5B50\u53EF\u4E3A\u6FC0\u7D20\u3001\u751F\u957F\u56E0\u5B50\u3001\u795E\u7ECF\u9012\u8D28\u3001\u6C14\u4F53\u5206\u5B50\u6216\u819C\u7ED3\u5408\u914D\u4F53\uFF1B\u53D7\u4F53\u5305\u62EC G \u86CB\u767D\u5076\u8054\u53D7\u4F53\u3001\u9176\u8054\u53D7\u4F53\u548C\u6838\u53D7\u4F53\u3002","\u4FE1\u53F7\u8F6C\u5BFC\u5177\u6709\u7279\u5F02\u6027\u3001\u653E\u5927\u6027\u3001\u9002\u5E94\u6027\u548C\u7F51\u7EDC\u6574\u5408\u6027\u3002","\u53D7\u4F53\u6FC0\u6D3B\u540E\u5E38\u901A\u8FC7\u7B2C\u4E8C\u4FE1\u4F7F\uFF08cAMP\u3001Ca\xB2\u207A\u3001IP3\u3001DAG\uFF09\u548C\u86CB\u767D\u78F7\u9178\u5316\u7EA7\u8054\u4F20\u9012\u4FE1\u53F7\u3002"],terms:[{t:"\u53D7\u4F53",d:"\u7279\u5F02\u6027\u8BC6\u522B\u4FE1\u53F7\u5206\u5B50\u5E76\u5C06\u5176\u8F6C\u6362\u4E3A\u80DE\u5185\u4FE1\u53F7\u7684\u86CB\u767D\u3002"},{t:"\u7B2C\u4E8C\u4FE1\u4F7F",d:"\u53D7\u4F53\u6FC0\u6D3B\u540E\u5728\u7EC6\u80DE\u5185\u751F\u6210\u3001\u653E\u5927\u5E76\u4F20\u9012\u4FE1\u53F7\u7684\u5C0F\u5206\u5B50\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48\u4FE1\u53F7\u8F6C\u5BFC\u9700\u8981\u201C\u653E\u5927\u201D\u548C\u201C\u7EC8\u6B62\u201D\u4E24\u4E2A\u73AF\u8282\uFF1F",a:"\u653E\u5927\u4F7F\u5C11\u91CF\u914D\u4F53\u4EA7\u751F\u663E\u8457\u7EC6\u80DE\u53CD\u5E94\uFF1B\u7EC8\u6B62\uFF08\u53D7\u4F53\u8131\u654F\u3001\u78F7\u9178\u9176\u3001\u7B2C\u4E8C\u4FE1\u4F7F\u964D\u89E3\uFF09\u4FDD\u8BC1\u4FE1\u53F7\u6709\u65F6\u9650\uFF0C\u907F\u514D\u6301\u7EED\u6FC0\u6D3B\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"G \u86CB\u767D\u5076\u8054\u53D7\u4F53\u53CA\u5176\u4ECB\u5BFC\u7684\u4FE1\u53F7\u8F6C\u5BFC",pages:"233\u2013244",outline:["G \u86CB\u767D\u5076\u8054\u53D7\u4F53\u7684\u7ED3\u6784\u4E0E\u4F5C\u7528\u673A\u5236","G \u86CB\u767D\u5076\u8054\u53D7\u4F53\u6240\u4ECB\u5BFC\u7684\u7EC6\u80DE\u4FE1\u53F7\u901A\u8DEF"],summary:"GPCR \u662F\u4E03\u6B21\u8DE8\u819C\u53D7\u4F53\uFF0C\u6FC0\u6D3B\u5F02\u4E09\u805A\u4F53 G \u86CB\u767D\uFF1B\u4E0D\u540C G \u86CB\u767D\u8C03\u8282\u817A\u82F7\u9178\u73AF\u5316\u9176\u3001\u78F7\u8102\u9176 C \u6216\u79BB\u5B50\u901A\u9053\u3002",points:["\u914D\u4F53\u7ED3\u5408 GPCR \u540E\uFF0C\u53D7\u4F53\u4F5C\u4E3A GEF \u4FC3\u8FDB G\u03B1 \u91CA\u653E GDP\u3001\u7ED3\u5408 GTP\uFF0CG\u03B1 \u4E0E G\u03B2\u03B3 \u5206\u79BB\u5E76\u6FC0\u6D3B\u4E0B\u6E38\u6548\u5E94\u5668\u3002","Gs \u6FC0\u6D3B\u817A\u82F7\u9178\u73AF\u5316\u9176\uFF0C\u63D0\u9AD8 cAMP\u3001\u6FC0\u6D3B PKA\uFF1BGi \u6291\u5236\u817A\u82F7\u9178\u73AF\u5316\u9176\uFF1BGq \u6FC0\u6D3B PLC\uFF0C\u4EA7\u751F IP3 \u4E0E DAG\uFF0C\u5347\u9AD8\u80DE\u8D28 Ca\xB2\u207A\u3002","GTP \u6C34\u89E3\u4F7F G\u03B1 \u5931\u6D3B\u5E76\u91CD\u65B0\u7ED3\u5408 G\u03B2\u03B3\uFF0C\u4FE1\u53F7\u7EC8\u6B62\u3002"],terms:[{t:"GPCR",d:"\u4E03\u6B21\u8DE8\u819C\u3001\u5076\u8054\u5F02\u4E09\u805A\u4F53 G \u86CB\u767D\u7684\u53D7\u4F53\u5BB6\u65CF\u3002"},{t:"G \u86CB\u767D",d:"\u7531 \u03B1\u3001\u03B2\u3001\u03B3 \u4E9A\u57FA\u7EC4\u6210\u3001\u7ED3\u5408 GTP/GDP \u7684\u5206\u5B50\u5F00\u5173\u3002"}],check:{q:"G \u86CB\u767D\u5982\u4F55\u5145\u5F53\u5206\u5B50\u5F00\u5173\uFF1F",a:"G\u03B1 \u7ED3\u5408 GTP \u65F6\u6FC0\u6D3B\uFF0C\u7ED3\u5408 GDP \u65F6\u5931\u6D3B\uFF1B\u53D7\u4F53\u4FC3\u8FDB GDP\u2192GTP \u4EA4\u6362\uFF0CG\u03B1 \u5185\u5728 GTP \u9176\u6D3B\u6027\u4F7F\u4FE1\u53F7\u81EA\u52A8\u7EC8\u6B62\u3002"}},{no:"\u7B2C\u4E09\u8282",title:"\u4ECB\u5BFC\u5E76\u8C03\u63A7\u7EC6\u80DE\u57FA\u56E0\u8868\u8FBE\u7684\u53D7\u4F53\u53CA\u5176\u4FE1\u53F7\u901A\u8DEF",pages:"244\u2013257",outline:["\u9176\u8054\u53D7\u4F53\u53CA\u5176\u4ECB\u5BFC\u7684\u7EC6\u80DE\u4FE1\u53F7\u8F6C\u5BFC\u901A\u8DEF","\u5176\u4ED6\u8C03\u63A7\u57FA\u56E0\u8868\u8FBE\u7684\u7EC6\u80DE\u8868\u9762\u53D7\u4F53\u53CA\u5176\u4ECB\u5BFC\u7684\u4FE1\u53F7\u8F6C\u5BFC\u901A\u8DEF"],summary:"\u9176\u8054\u53D7\u4F53\uFF08\u5982 RTK\uFF09\u548C\u591A\u79CD\u53D1\u80B2\u4FE1\u53F7\u901A\u8DEF\u901A\u8FC7\u6FC0\u9176\u7EA7\u8054\u3001\u8F6C\u5F55\u56E0\u5B50\u5165\u6838\uFF0C\u6539\u53D8\u57FA\u56E0\u8868\u8FBE\u7A0B\u5E8F\u3002",points:["RTK \u914D\u4F53\u7ED3\u5408\u5BFC\u81F4\u53D7\u4F53\u4E8C\u805A\u5316\u3001\u81EA\u78F7\u9178\u5316\uFF0C\u62DB\u52DF GRB2/SOS\uFF0C\u6FC0\u6D3B Ras-MAPK \u7EA7\u8054\uFF0C\u8C03\u63A7\u589E\u6B96\u4E0E\u5206\u5316\u3002","JAK-STAT\u3001TGF-\u03B2/Smad\u3001Wnt/\u03B2-catenin\u3001Hedgehog\u3001Notch \u7B49\u901A\u8DEF\u628A\u80DE\u5916\u4FE1\u53F7\u8F6C\u5316\u4E3A\u8F6C\u5F55\u8C03\u63A7\u3002","\u6838\u53D7\u4F53\u53EF\u76F4\u63A5\u7ED3\u5408\u8102\u6EB6\u6027\u914D\u4F53\u5E76\u4F5C\u4E3A\u8F6C\u5F55\u56E0\u5B50\uFF1B\u4FE1\u53F7\u6700\u7EC8\u6C47\u805A\u5230\u57FA\u56E0\u8868\u8FBE\u548C\u7EC6\u80DE\u884C\u4E3A\u3002"],terms:[{t:"RTK",d:"\u53D7\u4F53\u916A\u6C28\u9178\u6FC0\u9176\uFF0C\u914D\u4F53\u7ED3\u5408\u540E\u81EA\u78F7\u9178\u5316\u5E76\u542F\u52A8\u80DE\u5185\u4FE1\u53F7\u7EA7\u8054\u3002"},{t:"MAPK",d:"\u4E1D\u88C2\u539F\u6D3B\u5316\u86CB\u767D\u6FC0\u9176\u7EA7\u8054\uFF0C\u8C03\u63A7\u589E\u6B96\u3001\u5206\u5316\u548C\u5E94\u6FC0\u53CD\u5E94\u3002"}],check:{q:"RTK \u6FC0\u6D3B Ras \u7684\u57FA\u672C\u6B65\u9AA4\u662F\u4EC0\u4E48\uFF1F",a:"\u914D\u4F53\u8BF1\u5BFC RTK \u4E8C\u805A\u5316\u4E0E\u81EA\u78F7\u9178\u5316\uFF0C\u78F7\u9178\u916A\u6C28\u9178\u62DB\u52DF GRB2-SOS\uFF1BSOS \u4FC3\u8FDB Ras \u91CA\u653E GDP\u3001\u7ED3\u5408 GTP\uFF0CRas \u6FC0\u6D3B Raf-MEK-ERK \u7EA7\u8054\u3002"}},{no:"\u7B2C\u56DB\u8282",title:"\u7EC6\u80DE\u4FE1\u53F7\u8F6C\u5BFC\u7684\u6574\u5408\u4E0E\u63A7\u5236",pages:"257\u2013260",outline:["\u7EC6\u80DE\u5BF9\u4FE1\u53F7\u7684\u5E94\u7B54\u53CD\u5E94\u5177\u6709\u53D1\u6563\u6027\u6216\u6536\u655B\u6027\u7279\u5F81","\u86CB\u767D\u6FC0\u9176\u7684\u7F51\u7EDC\u6574\u5408\u4FE1\u606F","\u4FE1\u53F7\u7684\u63A7\u5236\uFF1A\u53D7\u4F53\u7684\u8131\u654F\u4E0E\u4E0B\u8C03"],summary:"\u4FE1\u53F7\u901A\u8DEF\u4E0D\u662F\u7EBF\u6027\u7BA1\u9053\uFF0C\u800C\u662F\u53D1\u6563\u3001\u6536\u655B\u548C\u4EA4\u53C9\u8C03\u63A7\u7684\u7F51\u7EDC\uFF1B\u53D7\u4F53\u8131\u654F\u3001\u5185\u541E\u548C\u964D\u89E3\u63A7\u5236\u4FE1\u53F7\u5F3A\u5EA6\u4E0E\u6301\u7EED\u65F6\u95F4\u3002",points:["\u4E00\u4E2A\u53D7\u4F53\u53EF\u6FC0\u6D3B\u591A\u6761\u901A\u8DEF\uFF08\u53D1\u6563\uFF09\uFF0C\u591A\u6761\u901A\u8DEF\u4E5F\u53EF\u6C47\u805A\u5230\u540C\u4E00\u6548\u5E94\u5668\uFF08\u6536\u655B\uFF09\u3002","\u86CB\u767D\u6FC0\u9176\u548C\u78F7\u9178\u9176\u7F51\u7EDC\u901A\u8FC7\u6B63\u8D1F\u53CD\u9988\u3001\u652F\u67B6\u86CB\u767D\u548C\u4E9A\u7EC6\u80DE\u5B9A\u4F4D\u6574\u5408\u4FE1\u53F7\u3002","\u53D7\u4F53\u78F7\u9178\u5316\u3001\u6291\u5236\u86CB\u767D\u7ED3\u5408\u3001\u5185\u541E\u548C\u964D\u89E3\u4F7F\u53D7\u4F53\u8131\u654F\u6216\u4E0B\u8C03\uFF0C\u907F\u514D\u8FC7\u5EA6\u6FC0\u6D3B\u3002"],terms:[{t:"\u4FE1\u53F7\u53D1\u6563",d:"\u4E00\u4E2A\u4FE1\u53F7\u6216\u53D7\u4F53\u6FC0\u6D3B\u591A\u6761\u4E0B\u6E38\u901A\u8DEF\u7684\u73B0\u8C61\u3002"},{t:"\u53D7\u4F53\u8131\u654F",d:"\u53D7\u4F53\u5728\u6301\u7EED\u523A\u6FC0\u4E0B\u53CD\u5E94\u6027\u4E0B\u964D\u7684\u8FC7\u7A0B\u3002"}],check:{q:"\u53D7\u4F53\u8131\u654F\u548C\u53D7\u4F53\u4E0B\u8C03\u6709\u4EC0\u4E48\u533A\u522B\uFF1F",a:"\u8131\u654F\u662F\u53D7\u4F53\u529F\u80FD\u5728\u77ED\u671F\u5185\u88AB\u6291\u5236\uFF08\u5982\u78F7\u9178\u5316\u3001\u6291\u5236\u86CB\u767D\u7ED3\u5408\uFF09\uFF0C\u53D7\u4F53\u6570\u91CF\u672A\u5FC5\u51CF\u5C11\uFF1B\u4E0B\u8C03\u901A\u5E38\u6307\u53D7\u4F53\u5185\u541E\u548C\u964D\u89E3\u5BFC\u81F4\u6570\u91CF\u4E0B\u964D\u3002"}}]},{id:"ch12",no:"\u7B2C\u5341\u4E8C\u7AE0",title:"\u7EC6\u80DE\u5468\u671F\u4E0E\u7EC6\u80DE\u5206\u88C2",pages:"261\u2013285",scene:6,overview:"\u7EC6\u80DE\u5468\u671F\u6309 G1\u2192S\u2192G2\u2192M \u6709\u5E8F\u63A8\u8FDB\uFF0C\u5E76\u7531\u68C0\u9A8C\u70B9\u76D1\u63A7\uFF1B\u6709\u4E1D\u5206\u88C2\u548C\u51CF\u6570\u5206\u88C2\u901A\u8FC7\u7EBA\u9524\u4F53\u4E0E\u9ECF\u8FDE\u86CB\u767D\u5B8C\u6210\u67D3\u8272\u4F53\u5206\u914D\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u7EC6\u80DE\u5468\u671F",pages:"261\u2013269",outline:["\u7EC6\u80DE\u5468\u671F\u6982\u8FF0","\u7EC6\u80DE\u5468\u671F\u4E2D\u5404\u4E0D\u540C\u65F6\u76F8\u53CA\u5176\u4E3B\u8981\u4E8B\u4EF6","\u7EC6\u80DE\u5468\u671F\u540C\u6B65\u5316","\u7279\u6B8A\u7684\u7EC6\u80DE\u5468\u671F"],summary:"\u7EC6\u80DE\u5468\u671F\u5206\u4E3A G1\u3001S\u3001G2\u3001M \u56DB\u671F\uFF1BS \u671F\u5B8C\u6210 DNA \u590D\u5236\uFF0CG2/M \u68C0\u9A8C\u70B9\u51B3\u5B9A\u662F\u5426\u8FDB\u5165\u5206\u88C2\u3002",points:["G1 \u671F\u7EC6\u80DE\u751F\u957F\u5E76\u51C6\u5907\u590D\u5236\uFF1BS \u671F DNA \u590D\u5236\u548C\u7EC4\u86CB\u767D\u5408\u6210\uFF1BG2 \u671F\u68C0\u67E5\u590D\u5236\u5B8C\u6574\u6027\uFF1BM \u671F\u5B8C\u6210\u6838\u5206\u88C2\u4E0E\u80DE\u8D28\u5206\u88C2\u3002","G1/S\u3001G2/M \u548C\u7EBA\u9524\u4F53\u7EC4\u88C5\u68C0\u9A8C\u70B9\uFF08SAC\uFF09\u76D1\u63A7\u5173\u952E\u4E8B\u4EF6\u3002","\u7EC6\u80DE\u5468\u671F\u540C\u6B65\u5316\u548C\u7279\u6B8A\u7EC6\u80DE\u5468\u671F\uFF08\u5982\u65E9\u671F\u80DA\u80CE\u3001\u4F11\u7720\u7EC6\u80DE\uFF09\u662F\u7814\u7A76\u5468\u671F\u8C03\u63A7\u7684\u91CD\u8981\u4F53\u7CFB\u3002"],terms:[{t:"\u7EC6\u80DE\u5468\u671F",d:"\u7EC6\u80DE\u4ECE\u4E00\u6B21\u5206\u88C2\u7ED3\u675F\u5230\u4E0B\u4E00\u6B21\u5206\u88C2\u7ED3\u675F\u6240\u7ECF\u5386\u7684\u5168\u8FC7\u7A0B\u3002"},{t:"\u68C0\u9A8C\u70B9",d:"\u76D1\u63A7\u5173\u952E\u4E8B\u4EF6\u662F\u5426\u5B8C\u6210\u3001\u51B3\u5B9A\u7EC6\u80DE\u5468\u671F\u662F\u5426\u7EE7\u7EED\u7684\u63A7\u5236\u70B9\u3002"}],check:{q:"DNA \u590D\u5236\u53D1\u751F\u5728\u54EA\u4E2A\u65F6\u76F8\uFF1F",a:"S \u671F\uFF1BM \u671F\u53EA\u8D1F\u8D23\u628A\u5DF2\u590D\u5236\u7684\u67D3\u8272\u4F53\u5206\u914D\u5230\u5B50\u7EC6\u80DE\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"\u7EC6\u80DE\u5206\u88C2",pages:"269\u2013285",outline:["\u6709\u4E1D\u5206\u88C2","\u51CF\u6570\u5206\u88C2"],summary:"\u6709\u4E1D\u5206\u88C2\u901A\u8FC7\u524D\u671F\u51DD\u7F29\u3001\u524D\u4E2D\u671F\u6355\u83B7\u3001\u4E2D\u671F\u6392\u5217\u3001\u540E\u671F\u5206\u79BB\u548C\u672B\u671F\u91CD\u5EFA\u5B8C\u6210\u67D3\u8272\u4F53\u5206\u914D\uFF1B\u51CF\u6570\u5206\u88C2\u589E\u52A0\u540C\u6E90\u91CD\u7EC4\u548C\u4E24\u6B21\u5206\u88C2\u3002",points:["\u524D\u671F\u7531\u51DD\u7F29\u86CB\u767D\u4FC3\u8FDB\u67D3\u8272\u4F53\u51DD\u7F29\uFF1B\u524D\u4E2D\u671F\u6838\u819C\u89E3\u4F53\u3001\u52A8\u7C92\u88AB\u5FAE\u7BA1\u6355\u83B7\uFF1B\u4E2D\u671F\u67D3\u8272\u4F53\u6392\u5217\u5728\u8D64\u9053\u9762\u3002","SAC \u76D1\u63A7\u52A8\u7C92\u8FDE\u63A5\uFF0C\u5168\u90E8\u6B63\u786E\u8FDE\u63A5\u540E APC/C \u6FC0\u6D3B\u3001separase \u5207\u5272\u9ECF\u8FDE\u86CB\u767D\uFF0C\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u5206\u79BB\uFF08\u540E\u671F A/B\uFF09\u3002","\u672B\u671F\u6838\u819C\u91CD\u5EFA\u3001\u80DE\u8D28\u5206\u88C2\u7531\u808C\u52A8\u86CB\u767D\u2014\u808C\u7403\u86CB\u767D\u6536\u7F29\u73AF\u5B8C\u6210\uFF1B\u51CF\u6570\u5206\u88C2\u53D1\u751F\u540C\u6E90\u91CD\u7EC4\u5E76\u6709\u4E24\u6B21\u8FDE\u7EED\u5206\u88C2\u3002"],terms:[{t:"\u6709\u4E1D\u5206\u88C2",d:"\u4EA7\u751F\u4E24\u4E2A\u9057\u4F20\u7269\u8D28\u76F8\u540C\u7684\u5B50\u7EC6\u80DE\u7684\u6838\u5206\u88C2\u8FC7\u7A0B\u3002"},{t:"\u51CF\u6570\u5206\u88C2",d:"\u53D1\u751F\u4E00\u6B21 DNA \u590D\u5236\u3001\u4E24\u6B21\u8FDE\u7EED\u5206\u88C2\uFF0C\u4EA7\u751F\u5355\u500D\u4F53\u7EC6\u80DE\u7684\u7279\u6B8A\u5206\u88C2\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48 SAC \u5931\u6548\u4F1A\u5BFC\u81F4\u975E\u6574\u500D\u4F53\uFF1F",a:"SAC \u5931\u6548\u65F6\u672A\u6B63\u786E\u8FDE\u63A5\u7684\u67D3\u8272\u4F53\u53EF\u80FD\u63D0\u524D\u5206\u79BB\uFF0C\u5B50\u7EC6\u80DE\u83B7\u5F97\u9519\u8BEF\u6570\u91CF\u7684\u67D3\u8272\u4F53\uFF0C\u5F62\u6210\u975E\u6574\u500D\u4F53\u3002"}}]},{id:"ch13",no:"\u7B2C\u5341\u4E09\u7AE0",title:"\u7EC6\u80DE\u589E\u6B96\u8C03\u63A7\u4E0E\u764C\u7EC6\u80DE",pages:"287\u2013306",scene:6,overview:"\u7EC6\u80DE\u589E\u6B96\u53D7 CDK-cyclin\u3001\u68C0\u9A8C\u70B9\u548C\u4FE1\u53F7\u7F51\u7EDC\u4E25\u683C\u63A7\u5236\uFF1B\u764C\u7EC6\u80DE\u7A81\u7834\u8FD9\u4E9B\u9650\u5236\uFF0C\u83B7\u5F97\u6301\u7EED\u589E\u6B96\u3001\u4FB5\u88AD\u548C\u8F6C\u79FB\u80FD\u529B\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u7EC6\u80DE\u589E\u6B96\u8C03\u63A7",pages:"287\u2013298",outline:["MPF \u7684\u53D1\u73B0\u53CA\u5176\u4F5C\u7528","p34cdc2 \u6FC0\u9176\u7684\u53D1\u73B0\u53CA\u5176\u4E0E MPF \u7684\u5173\u7CFB","\u5468\u671F\u86CB\u767D","CDK \u548C CDK \u6291\u5236\u56E0\u5B50","\u7EC6\u80DE\u5468\u671F\u8FD0\u8F6C\u8C03\u63A7","\u5176\u4ED6\u56E0\u7D20\u5728\u7EC6\u80DE\u5468\u671F\u8C03\u63A7\u4E2D\u7684\u4F5C\u7528"],summary:"MPF \u7531 CDK1 \u4E0E cyclin B \u7EC4\u6210\uFF0C\u9A71\u52A8 G2/M \u8F6C\u6362\uFF1B\u4E0D\u540C cyclin-CDK \u7EC4\u5408\u548C CKI \u7CBE\u786E\u63A7\u5236\u5404\u65F6\u76F8\u3002",points:["CDK1-cyclin B\uFF08MPF\uFF09\u6FC0\u6D3B\u540E\u78F7\u9178\u5316\u51DD\u7F29\u86CB\u767D\u3001\u6838\u7EA4\u5C42\u86CB\u767D\u7B49\uFF0C\u63A8\u52A8\u67D3\u8272\u4F53\u51DD\u7F29\u548C\u6838\u819C\u89E3\u4F53\u3002","cyclin \u7684\u5408\u6210\u4E0E\u964D\u89E3\u51B3\u5B9A CDK \u6D3B\u6027\uFF1BCKI \u6291\u5236 CDK\uFF0C\u68C0\u9A8C\u70B9\u901A\u8FC7\u78F7\u9178\u5316\u8C03\u63A7 CDK \u6D3B\u6027\u3002","APC/C \u6CDB\u7D20\u5316 cyclin B \u548C securin\uFF0C\u4F7F CDK \u5931\u6D3B\u3001separase \u91CA\u653E\uFF0C\u63A8\u52A8\u540E\u671F\u548C\u5468\u671F\u9000\u51FA\u3002"],terms:[{t:"MPF",d:"CDK1 \u4E0E cyclin B \u7EC4\u6210\u7684\u4FC3\u6210\u719F/\u4FC3\u5206\u88C2\u56E0\u5B50\u3002"},{t:"CKI",d:"CDK \u6291\u5236\u56E0\u5B50\uFF0C\u8D1F\u8C03\u63A7\u7EC6\u80DE\u5468\u671F\u63A8\u8FDB\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48 cyclin \u5FC5\u987B\u88AB\u964D\u89E3\uFF0C\u7EC6\u80DE\u624D\u80FD\u9000\u51FA M \u671F\uFF1F",a:"cyclin B \u964D\u89E3\u4F7F CDK1 \u5931\u6D3B\uFF0C\u67D3\u8272\u4F53\u53BB\u51DD\u7F29\u3001\u6838\u819C\u91CD\u5EFA\u548C\u80DE\u8D28\u5206\u88C2\u624D\u80FD\u5B8C\u6210\uFF1B\u5426\u5219\u7EC6\u80DE\u4F1A\u505C\u6EDE\u5728\u6709\u4E1D\u5206\u88C2\u72B6\u6001\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"\u764C\u7EC6\u80DE",pages:"298\u2013306",outline:["\u764C\u7EC6\u80DE\u7684\u57FA\u672C\u7279\u5F81","\u764C\u57FA\u56E0\u4E0E\u6291\u764C\u57FA\u56E0","\u80BF\u7624\u7684\u53D1\u751F\u662F\u57FA\u56E0\u7A81\u53D8\u9010\u6E10\u79EF\u7D2F\u7684\u7ED3\u679C","\u80BF\u7624\u5E72\u7EC6\u80DE","\u80BF\u7624\u7684\u6CBB\u7597"],summary:"\u764C\u7EC6\u80DE\u5177\u6709\u6301\u7EED\u589E\u6B96\u3001\u9003\u907F\u751F\u957F\u6291\u5236\u3001\u62B5\u6297\u51CB\u4EA1\u3001\u4FB5\u88AD\u8F6C\u79FB\u548C\u57FA\u56E0\u7EC4\u4E0D\u7A33\u5B9A\u7B49\u7279\u5F81\uFF0C\u901A\u5E38\u6E90\u4E8E\u591A\u6B65\u57FA\u56E0\u7A81\u53D8\u79EF\u7D2F\u3002",points:["\u764C\u57FA\u56E0\u529F\u80FD\u83B7\u5F97\u6027\u7A81\u53D8\u4FC3\u8FDB\u589E\u6B96\uFF1B\u6291\u764C\u57FA\u56E0\u529F\u80FD\u7F3A\u5931\u89E3\u9664\u751F\u957F\u6291\u5236\u548C\u51CB\u4EA1\u3002","\u80BF\u7624\u53D1\u751F\u662F\u591A\u6B65\u7A81\u53D8\u79EF\u7D2F\u7684\u7ED3\u679C\uFF0C\u6D89\u53CA\u589E\u6B96\u3001\u51CB\u4EA1\u3001DNA \u4FEE\u590D\u3001\u8840\u7BA1\u751F\u6210\u548C\u514D\u75AB\u9003\u9038\u3002","\u80BF\u7624\u5E72\u7EC6\u80DE\u5047\u8BF4\u8BA4\u4E3A\u90E8\u5206\u7EC6\u80DE\u5177\u6709\u81EA\u6211\u66F4\u65B0\u548C\u5206\u5316\u80FD\u529B\uFF1B\u9776\u5411\u6CBB\u7597\u3001\u514D\u75AB\u6CBB\u7597\u548C\u8054\u5408\u6CBB\u7597\u662F\u91CD\u8981\u65B9\u5411\u3002"],terms:[{t:"\u764C\u57FA\u56E0",d:"\u4FC3\u8FDB\u7EC6\u80DE\u589E\u6B96\u6216\u5B58\u6D3B\u7684\u57FA\u56E0\uFF0C\u5176\u6FC0\u6D3B\u53EF\u9A71\u52A8\u80BF\u7624\u53D1\u751F\u3002"},{t:"\u6291\u764C\u57FA\u56E0",d:"\u6B63\u5E38\u60C5\u51B5\u4E0B\u6291\u5236\u589E\u6B96\u6216\u4FC3\u8FDB\u51CB\u4EA1\u3001\u4FEE\u590D\u7684\u57FA\u56E0\uFF0C\u529F\u80FD\u7F3A\u5931\u6613\u81F4\u764C\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48\u80BF\u7624\u901A\u5E38\u9700\u8981\u591A\u4E2A\u57FA\u56E0\u7A81\u53D8\u624D\u80FD\u5F62\u6210\uFF1F",a:"\u7EC6\u80DE\u6709\u591A\u91CD\u5B89\u5168\u673A\u5236\uFF08\u589E\u6B96\u6291\u5236\u3001\u51CB\u4EA1\u3001DNA \u4FEE\u590D\u3001\u514D\u75AB\u76D1\u63A7\uFF09\uFF0C\u5355\u4E00\u7A81\u53D8\u901A\u5E38\u4E0D\u8DB3\u4EE5\u7A81\u7834\u5168\u90E8\u9650\u5236\uFF1B\u591A\u6B65\u7A81\u53D8\u9010\u6B65\u79EF\u7D2F\u624D\u5F62\u6210\u6076\u6027\u8868\u578B\u3002"}}]},{id:"ch14",no:"\u7B2C\u5341\u56DB\u7AE0",title:"\u7EC6\u80DE\u5206\u5316\u4E0E\u5E72\u7EC6\u80DE",pages:"307\u2013322",scene:4,overview:"\u7EC6\u80DE\u5206\u5316\u662F\u57FA\u56E0\u9009\u62E9\u6027\u8868\u8FBE\u4EA7\u751F\u7279\u5316\u7EC6\u80DE\u7684\u8FC7\u7A0B\uFF1B\u5E72\u7EC6\u80DE\u901A\u8FC7\u81EA\u6211\u66F4\u65B0\u548C\u591A\u5411\u5206\u5316\u7EF4\u6301\u7EC4\u7EC7\u4FEE\u590D\u4E0E\u53D1\u80B2\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u7EC6\u80DE\u5206\u5316",pages:"308\u2013313",outline:["\u7EC6\u80DE\u5206\u5316\u7684\u57FA\u672C\u6982\u5FF5","\u5F71\u54CD\u7EC6\u80DE\u5206\u5316\u7684\u56E0\u7D20"],summary:"\u5206\u5316\u7EC6\u80DE\u5F62\u6001\u3001\u7ED3\u6784\u548C\u529F\u80FD\u7279\u5316\uFF0C\u4F46\u901A\u5E38\u4FDD\u7559\u5B8C\u6574\u57FA\u56E0\u7EC4\uFF1B\u8F6C\u5F55\u56E0\u5B50\u3001\u4FE1\u53F7\u548C\u8868\u89C2\u9057\u4F20\u5171\u540C\u51B3\u5B9A\u5206\u5316\u65B9\u5411\u3002",points:["\u7EC6\u80DE\u5206\u5316\u662F\u57FA\u56E0\u9009\u62E9\u6027\u8868\u8FBE\u7684\u7ED3\u679C\uFF0C\u5206\u5316\u7EC6\u80DE\u6838\u4ECD\u5177\u6709\u53D1\u80B2\u5168\u80FD\u6027\uFF08\u5982\u690D\u7269\u7EC6\u80DE\u3001\u514B\u9686\u52A8\u7269\uFF09\u3002","\u7EC6\u80DE\u8D28\u51B3\u5B9A\u5B50\u3001\u8BF1\u5BFC\u4FE1\u53F7\u3001\u4F4D\u7F6E\u4FE1\u606F\u548C\u8868\u89C2\u9057\u4F20\u4FEE\u9970\u5F71\u54CD\u5206\u5316\u65B9\u5411\u3002","\u8F6C\u5206\u5316/\u53BB\u5206\u5316\u662F\u5206\u5316\u72B6\u6001\u7684\u53EF\u5851\u6027\u8868\u73B0\uFF0C\u5728\u518D\u751F\u548C\u75BE\u75C5\u4E2D\u5177\u6709\u91CD\u8981\u610F\u4E49\u3002"],terms:[{t:"\u7EC6\u80DE\u5206\u5316",d:"\u7EC6\u80DE\u5728\u5F62\u6001\u3001\u7ED3\u6784\u548C\u529F\u80FD\u4E0A\u4EA7\u751F\u7A33\u5B9A\u5DEE\u5F02\u7684\u8FC7\u7A0B\u3002"},{t:"\u8868\u89C2\u9057\u4F20",d:"\u4E0D\u6539\u53D8 DNA \u5E8F\u5217\u800C\u6539\u53D8\u57FA\u56E0\u8868\u8FBE\u72B6\u6001\u7684\u67D3\u8272\u8D28\u4FEE\u9970\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48\u5206\u5316\u7EC6\u80DE\u901A\u5E38\u4ECD\u542B\u5B8C\u6574\u57FA\u56E0\u7EC4\uFF1F",a:"\u5206\u5316\u4E3B\u8981\u7531\u57FA\u56E0\u9009\u62E9\u6027\u8868\u8FBE\u548C\u67D3\u8272\u8D28\u72B6\u6001\u51B3\u5B9A\uFF0CDNA \u5E8F\u5217\u901A\u5E38\u4E0D\u53D8\uFF1B\u6838\u79FB\u690D\u5B9E\u9A8C\u4E5F\u8BC1\u660E\u5206\u5316\u6838\u53EF\u88AB\u91CD\u7F16\u7A0B\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"\u5E72\u7EC6\u80DE",pages:"313\u2013322",outline:["\u5E72\u7EC6\u80DE\u6982\u5FF5\u53CA\u5176\u5206\u7C7B","\u80DA\u80CE\u5E72\u7EC6\u80DE","\u6210\u4F53\u5E72\u7EC6\u80DE","\u7EC6\u80DE\u547D\u8FD0\u91CD\u7F16\u7A0B\u4E0E\u8BF1\u5BFC\u6027\u591A\u80FD\u5E72\u7EC6\u80DE","\u8C31\u7CFB\u91CD\u7F16\u7A0B","\u5E72\u7EC6\u80DE\u5E94\u7528"],summary:"\u5E72\u7EC6\u80DE\u5177\u6709\u81EA\u6211\u66F4\u65B0\u548C\u591A\u5411\u5206\u5316\u80FD\u529B\uFF1B\u80DA\u80CE\u5E72\u7EC6\u80DE\u3001\u6210\u4F53\u5E72\u7EC6\u80DE\u548C iPSC \u5728\u518D\u751F\u533B\u5B66\u4E0E\u75BE\u75C5\u5EFA\u6A21\u4E2D\u5404\u6709\u4F18\u52BF\u4E0E\u9650\u5236\u3002",points:["\u6309\u53D1\u80B2\u6F5C\u80FD\u5206\u4E3A\u5168\u80FD\u3001\u591A\u80FD\u3001\u591A\u80FD\u548C\u5355\u80FD\u5E72\u7EC6\u80DE\uFF1B\u6309\u6765\u6E90\u5206\u4E3A\u80DA\u80CE\u5E72\u7EC6\u80DE\u548C\u6210\u4F53\u5E72\u7EC6\u80DE\u3002","\u80DA\u80CE\u5E72\u7EC6\u80DE\u6765\u81EA\u56CA\u80DA\u5185\u7EC6\u80DE\u56E2\uFF0C\u53EF\u5206\u5316\u6210\u4E09\u4E2A\u80DA\u5C42\uFF1B\u6210\u4F53\u5E72\u7EC6\u80DE\u5B58\u5728\u4E8E\u591A\u79CD\u7EC4\u7EC7\uFF0C\u8D1F\u8D23\u65E5\u5E38\u4FEE\u590D\u3002","iPSC \u901A\u8FC7\u5BFC\u5165\u91CD\u7F16\u7A0B\u56E0\u5B50\u628A\u4F53\u7EC6\u80DE\u8F6C\u4E3A\u591A\u80FD\u72B6\u6001\uFF1B\u8C31\u7CFB\u91CD\u7F16\u7A0B\u76F4\u63A5\u8F6C\u4E3A\u76EE\u6807\u7EC6\u80DE\u7C7B\u578B\uFF0C\u907F\u514D\u591A\u80FD\u9636\u6BB5\u3002"],terms:[{t:"\u5E72\u7EC6\u80DE",d:"\u5177\u6709\u81EA\u6211\u66F4\u65B0\u548C\u5206\u5316\u6F5C\u80FD\u3001\u80FD\u4EA7\u751F\u591A\u79CD\u7EC6\u80DE\u7684\u672A\u5206\u5316\u7EC6\u80DE\u3002"},{t:"iPSC",d:"\u8BF1\u5BFC\u6027\u591A\u80FD\u5E72\u7EC6\u80DE\uFF0C\u7531\u4F53\u7EC6\u80DE\u91CD\u7F16\u7A0B\u83B7\u5F97\u7684\u591A\u80FD\u7EC6\u80DE\u3002"}],check:{q:"\u80DA\u80CE\u5E72\u7EC6\u80DE\u4E0E iPSC \u7684\u4E3B\u8981\u5DEE\u522B\u662F\u4EC0\u4E48\uFF1F",a:"\u6765\u6E90\u4E0D\u540C\uFF1AESC \u6765\u81EA\u80DA\u80CE\u5185\u7EC6\u80DE\u56E2\uFF0CiPSC \u7531\u4F53\u7EC6\u80DE\u91CD\u7F16\u7A0B\u83B7\u5F97\uFF1BiPSC \u907F\u514D\u4E86\u80DA\u80CE\u6765\u6E90\u7684\u4F26\u7406\u95EE\u9898\uFF0C\u4F46\u9700\u5173\u6CE8\u91CD\u7F16\u7A0B\u5B8C\u6574\u6027\u548C\u81F4\u7624\u6027\u3002"}}]},{id:"ch15",no:"\u7B2C\u5341\u4E94\u7AE0",title:"\u7EC6\u80DE\u8870\u8001\u4E0E\u7EC6\u80DE\u7A0B\u5E8F\u6027\u6B7B\u4EA1",pages:"323\u2013338",scene:0,overview:"\u7EC6\u80DE\u8870\u8001\u662F\u4E0D\u53EF\u9006\u7684\u589E\u6B96\u505C\u6EDE\uFF1B\u7A0B\u5E8F\u6027\u6B7B\u4EA1\uFF08\u5C24\u5176\u51CB\u4EA1\uFF09\u662F\u53D7\u57FA\u56E0\u8C03\u63A7\u7684\u4E3B\u52A8\u6E05\u9664\u8FC7\u7A0B\uFF0C\u5BF9\u53D1\u80B2\u548C\u7EC4\u7EC7\u7A33\u6001\u81F3\u5173\u91CD\u8981\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u7EC6\u80DE\u8870\u8001",pages:"323\u2013327",outline:["\u7EC6\u80DE\u8870\u8001\u7684\u6982\u5FF5","\u7EC6\u80DE\u590D\u5236\u8870\u8001\u7684\u7279\u5F81","\u7EC6\u80DE\u590D\u5236\u8870\u8001\u7684\u673A\u5236","\u7EC6\u80DE\u8870\u8001\u4E0E\u4E2A\u4F53\u8870\u8001"],summary:"\u590D\u5236\u6027\u8870\u8001\u7531\u7AEF\u7C92\u7F29\u77ED\u3001DNA \u635F\u4F24\u53CD\u5E94\u548C\u7EC6\u80DE\u5468\u671F\u6291\u5236\u56E0\u5B50\u79EF\u7D2F\u9A71\u52A8\uFF1B\u8870\u8001\u7EC6\u80DE\u53EF\u5206\u6CCC SASP \u5F71\u54CD\u7EC4\u7EC7\u5FAE\u73AF\u5883\u3002",points:["\u7AEF\u7C92\u968F\u590D\u5236\u7F29\u77ED\uFF0C\u89E6\u53D1 DNA \u635F\u4F24\u53CD\u5E94\uFF0Cp53/p21 \u548C p16/Rb \u901A\u8DEF\u4F7F\u7EC6\u80DE\u5468\u671F\u505C\u6EDE\u3002","\u8870\u8001\u7EC6\u80DE\u5F62\u6001\u53D8\u5927\u3001\u589E\u6B96\u505C\u6B62\u4F46\u4ECD\u5B58\u6D3B\uFF0C\u5E38\u51FA\u73B0 SA-\u03B2-gal \u9633\u6027\u548C SASP\u3002","SASP \u53EF\u62DB\u52DF\u514D\u75AB\u7EC6\u80DE\u6E05\u9664\u8870\u8001\u7EC6\u80DE\uFF0C\u4F46\u957F\u671F\u79EF\u7D2F\u4F1A\u4FC3\u8FDB\u6162\u6027\u708E\u75C7\u548C\u4E2A\u4F53\u8870\u8001\u3002"],terms:[{t:"\u590D\u5236\u6027\u8870\u8001",d:"\u7EC6\u80DE\u56E0\u7AEF\u7C92\u7F29\u77ED\u548C DNA \u635F\u4F24\u53CD\u5E94\u800C\u6C38\u4E45\u9000\u51FA\u7EC6\u80DE\u5468\u671F\u3002"},{t:"SASP",d:"\u8870\u8001\u76F8\u5173\u5206\u6CCC\u8868\u578B\uFF0C\u8870\u8001\u7EC6\u80DE\u5206\u6CCC\u7684\u708E\u75C7\u56E0\u5B50\u548C\u57FA\u8D28\u9176\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48\u7AEF\u7C92\u7F29\u77ED\u4F1A\u89E6\u53D1\u7EC6\u80DE\u8870\u8001\uFF1F",a:"\u7AEF\u7C92\u8FC7\u77ED\u4F1A\u88AB\u8BC6\u522B\u4E3A DNA \u53CC\u94FE\u65AD\u88C2\uFF0C\u6FC0\u6D3B p53/p21 \u7B49\u901A\u8DEF\uFF0C\u4F7F\u7EC6\u80DE\u5468\u671F\u505C\u6EDE\uFF1B\u8FD9\u662F\u9632\u6B62\u67D3\u8272\u4F53\u4E0D\u7A33\u5B9A\u7684\u4E00\u79CD\u4FDD\u62A4\u673A\u5236\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"\u7EC6\u80DE\u7A0B\u5E8F\u6027\u6B7B\u4EA1",pages:"327\u2013338",outline:["\u591A\u79CD\u5F62\u5F0F\u7684\u7EC6\u80DE\u6B7B\u4EA1\u53CA\u5176\u751F\u7269\u5B66\u610F\u4E49","\u7EC6\u80DE\u51CB\u4EA1\u7684\u8FC7\u7A0B\u53CA\u5206\u5B50\u673A\u5236","\u7EC6\u80DE\u7A0B\u5E8F\u6027\u574F\u6B7B\u7684\u5206\u5B50\u673A\u5236","\u690D\u7269\u7EC6\u80DE\u7A0B\u5E8F\u6027\u6B7B\u4EA1\u7684\u5206\u5B50\u673A\u5236"],summary:"\u51CB\u4EA1\u5177\u6709\u7EC6\u80DE\u76B1\u7F29\u3001\u67D3\u8272\u8D28\u51DD\u96C6\u3001\u51CB\u4EA1\u5C0F\u4F53\u5F62\u6210\u7B49\u7279\u5F81\uFF0C\u4F9D\u8D56 caspase \u7EA7\u8054\uFF1B\u7A0B\u5E8F\u6027\u574F\u6B7B\u662F\u53D7\u8C03\u63A7\u7684\u574F\u6B7B\u6837\u6B7B\u4EA1\u3002",points:["\u51CB\u4EA1\u5206\u4E3A\u5185\u6E90\u6027\uFF08\u7EBF\u7C92\u4F53\uFF09\u548C\u5916\u6E90\u6027\uFF08\u6B7B\u4EA1\u53D7\u4F53\uFF09\u901A\u8DEF\uFF0Ccaspase-8/9 \u6FC0\u6D3B\u6267\u884C\u8005 caspase-3/7\u3002","Bcl-2 \u5BB6\u65CF\u8C03\u63A7\u7EBF\u7C92\u4F53\u5916\u819C\u901A\u900F\u6027\uFF1Bcytochrome c \u91CA\u653E\u4FC3\u8FDB\u51CB\u4EA1\u4F53\u5F62\u6210\u548C caspase \u6FC0\u6D3B\u3002","\u51CB\u4EA1\u4E0D\u5F15\u53D1\u708E\u75C7\uFF0C\u800C\u574F\u6B7B/\u7A0B\u5E8F\u6027\u574F\u6B7B\u5E38\u4F34\u968F\u819C\u7834\u88C2\u548C\u708E\u75C7\uFF1B\u690D\u7269\u4E5F\u5B58\u5728\u7A0B\u5E8F\u6027\u6B7B\u4EA1\u3002"],terms:[{t:"\u7EC6\u80DE\u51CB\u4EA1",d:"\u53D7\u57FA\u56E0\u8C03\u63A7\u3001\u4E0D\u5F15\u8D77\u708E\u75C7\u7684\u7A0B\u5E8F\u6027\u7EC6\u80DE\u6B7B\u4EA1\u3002"},{t:"caspase",d:"\u534A\u80F1\u6C28\u9178\u86CB\u767D\u9176\u5BB6\u65CF\uFF0C\u6267\u884C\u51CB\u4EA1\u7684\u7EA7\u8054\u53CD\u5E94\u3002"}],check:{q:"\u51CB\u4EA1\u4E0E\u574F\u6B7B\u5728\u5F62\u6001\u548C\u708E\u75C7\u53CD\u5E94\u4E0A\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F",a:"\u51CB\u4EA1\u7EC6\u80DE\u76B1\u7F29\u3001\u67D3\u8272\u8D28\u51DD\u96C6\u3001\u5F62\u6210\u51CB\u4EA1\u5C0F\u4F53\uFF0C\u88AB\u541E\u566C\u540E\u901A\u5E38\u4E0D\u5F15\u53D1\u708E\u75C7\uFF1B\u574F\u6B7B\u7EC6\u80DE\u80BF\u80C0\u3001\u819C\u7834\u88C2\u3001\u5185\u5BB9\u7269\u91CA\u653E\uFF0C\u5E38\u5F15\u8D77\u708E\u75C7\u3002"}}]},{id:"ch16",no:"\u7B2C\u5341\u516D\u7AE0",title:"\u7EC6\u80DE\u7684\u793E\u4F1A\u8054\u7CFB",pages:"339\u2013358",scene:1,overview:"\u591A\u7EC6\u80DE\u751F\u7269\u901A\u8FC7\u7EC6\u80DE\u8FDE\u63A5\u3001\u7EC6\u80DE\u9ECF\u7740\u5206\u5B50\u548C\u7EC6\u80DE\u5916\u57FA\u8D28\u5F62\u6210\u7EC4\u7EC7\uFF1B\u8FD9\u4E9B\u7ED3\u6784\u65E2\u63D0\u4F9B\u673A\u68B0\u8FDE\u63A5\uFF0C\u4E5F\u4F20\u9012\u4FE1\u53F7\u3002",sections:[{no:"\u7B2C\u4E00\u8282",title:"\u7EC6\u80DE\u8FDE\u63A5",pages:"339\u2013345",outline:["\u5C01\u95ED\u8FDE\u63A5","\u951A\u5B9A\u8FDE\u63A5","\u901A\u4FE1\u8FDE\u63A5"],summary:"\u7EC6\u80DE\u8FDE\u63A5\u5206\u4E3A\u5C01\u95ED\u8FDE\u63A5\u3001\u951A\u5B9A\u8FDE\u63A5\u548C\u901A\u4FE1\u8FDE\u63A5\uFF0C\u5206\u522B\u63A7\u5236\u7269\u8D28\u901A\u900F\u3001\u63D0\u4F9B\u673A\u68B0\u8FDE\u63A5\u548C\u5B9E\u73B0\u7EC6\u80DE\u95F4\u901A\u8BAF\u3002",points:["\u7D27\u5BC6\u8FDE\u63A5\u5C01\u95ED\u7EC6\u80DE\u95F4\u9699\u3001\u9650\u5236\u7269\u8D28\u65C1\u8DEF\u6269\u6563\uFF0C\u5E76\u9694\u79BB\u9876\u7AEF\u4E0E\u57FA\u5E95\u819C\u533A\u57DF\u3002","\u951A\u5B9A\u8FDE\u63A5\u5305\u62EC\u9ECF\u7740\u5E26\u3001\u6865\u7C92\u548C\u534A\u6865\u7C92\uFF0C\u901A\u8FC7\u7EC6\u80DE\u9AA8\u67B6\u628A\u76F8\u90BB\u7EC6\u80DE\u6216\u7EC6\u80DE\u4E0E\u57FA\u8D28\u8FDE\u63A5\u8D77\u6765\u3002","\u95F4\u9699\u8FDE\u63A5\u7531\u8FDE\u63A5\u86CB\u767D\u6784\u6210\uFF0C\u5141\u8BB8\u79BB\u5B50\u548C\u5C0F\u5206\u5B50\u5728\u7EC6\u80DE\u95F4\u76F4\u63A5\u4F20\u9012\uFF0C\u534F\u8C03\u7EC4\u7EC7\u53CD\u5E94\u3002"],terms:[{t:"\u7D27\u5BC6\u8FDE\u63A5",d:"\u5C01\u95ED\u76F8\u90BB\u7EC6\u80DE\u95F4\u9699\u3001\u9650\u5236\u65C1\u8DEF\u6269\u6563\u7684\u7EC6\u80DE\u8FDE\u63A5\u3002"},{t:"\u95F4\u9699\u8FDE\u63A5",d:"\u7531\u8FDE\u63A5\u86CB\u767D\u6784\u6210\u7684\u901A\u9053\uFF0C\u5141\u8BB8\u5C0F\u5206\u5B50\u5728\u7EC6\u80DE\u95F4\u76F4\u63A5\u4EA4\u6362\u3002"}],check:{q:"\u6865\u7C92\u548C\u534A\u6865\u7C92\u5728\u8FDE\u63A5\u5BF9\u8C61\u4E0A\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F",a:"\u6865\u7C92\u8FDE\u63A5\u76F8\u90BB\u4E24\u4E2A\u7EC6\u80DE\u7684\u4E2D\u95F4\u4E1D\u7F51\u7EDC\uFF1B\u534A\u6865\u7C92\u8FDE\u63A5\u4E0A\u76AE\u7EC6\u80DE\u4E0E\u57FA\u5E95\u819C\uFF0C\u4E00\u4FA7\u662F\u7EC6\u80DE\u4E2D\u95F4\u4E1D\uFF0C\u53E6\u4E00\u4FA7\u662F\u7EC6\u80DE\u5916\u57FA\u8D28\u3002"}},{no:"\u7B2C\u4E8C\u8282",title:"\u7EC6\u80DE\u9ECF\u7740\u53CA\u5176\u5206\u5B50\u57FA\u7840",pages:"345\u2013350",outline:["\u9499\u9ECF\u86CB\u767D","\u9009\u62E9\u7D20","\u514D\u75AB\u7403\u86CB\u767D\u8D85\u5BB6\u65CF","\u6574\u8054\u86CB\u767D"],summary:"\u7EC6\u80DE\u9ECF\u7740\u5206\u5B50\u901A\u8FC7\u540C\u4EB2\u6216\u5F02\u4EB2\u7ED3\u5408\u4ECB\u5BFC\u7EC6\u80DE\u8BC6\u522B\u3001\u7EC4\u7EC7\u6784\u5EFA\u548C\u514D\u75AB\u7EC6\u80DE\u8FC1\u79FB\uFF1B\u4E0D\u540C\u5BB6\u65CF\u5206\u5DE5\u4E0D\u540C\u3002",points:["\u9499\u9ECF\u86CB\u767D\u4F9D\u8D56 Ca\xB2\u207A \u4ECB\u5BFC\u540C\u4EB2\u6027\u9ECF\u7740\uFF0C\u662F\u7EC4\u7EC7\u5F62\u6210\u548C\u4E0A\u76AE\u5B8C\u6574\u6027\u7684\u6838\u5FC3\u3002","\u9009\u62E9\u7D20\u8BC6\u522B\u7CD6\u914D\u4F53\uFF0C\u53C2\u4E0E\u767D\u7EC6\u80DE\u6EDA\u52A8\u548C\u708E\u75C7\u52DF\u96C6\uFF1B\u514D\u75AB\u7403\u86CB\u767D\u8D85\u5BB6\u65CF\u6210\u5458\u53C2\u4E0E\u591A\u79CD\u7EC6\u80DE\u8BC6\u522B\u3002","\u6574\u8054\u86CB\u767D\u4ECB\u5BFC\u7EC6\u80DE\u4E0E\u7EC6\u80DE\u5916\u57FA\u8D28\u7684\u9ECF\u7740\uFF0C\u5E76\u8FDE\u63A5\u7EC6\u80DE\u9AA8\u67B6\u4E0E\u4FE1\u53F7\u901A\u8DEF\u3002"],terms:[{t:"\u9499\u9ECF\u86CB\u767D",d:"Ca\xB2\u207A \u4F9D\u8D56\u7684\u7EC6\u80DE\u2014\u7EC6\u80DE\u9ECF\u7740\u5206\u5B50\uFF0C\u4ECB\u5BFC\u540C\u4EB2\u6027\u7ED3\u5408\u3002"},{t:"\u6574\u8054\u86CB\u767D",d:"\u4ECB\u5BFC\u7EC6\u80DE\u4E0E\u7EC6\u80DE\u5916\u57FA\u8D28\u9ECF\u7740\u3001\u5E76\u4F20\u9012\u80DE\u5185\u5916\u4FE1\u53F7\u7684\u53D7\u4F53\u5BB6\u65CF\u3002"}],check:{q:"\u4E3A\u4EC0\u4E48\u9009\u62E9\u7D20\u9002\u5408\u4ECB\u5BFC\u767D\u7EC6\u80DE\u5728\u8840\u7BA1\u5185\u76AE\u7684\u6EDA\u52A8\uFF1F",a:"\u9009\u62E9\u7D20\u4E0E\u7CD6\u914D\u4F53\u7684\u7ED3\u5408\u5FEB\u901F\u3001\u4F4E\u4EB2\u548C\u529B\u4E14\u53EF\u9006\uFF0C\u9002\u5408\u5728\u8840\u6D41\u4E2D\u5F62\u6210\u77ED\u6682\u9ECF\u9644\u4E0E\u6EDA\u52A8\uFF0C\u968F\u540E\u7531\u6574\u8054\u86CB\u767D\u4ECB\u5BFC\u7A33\u5B9A\u9ECF\u9644\u3002"}},{no:"\u7B2C\u4E09\u8282",title:"\u7EC6\u80DE\u5916\u57FA\u8D28",pages:"350\u2013358",outline:["\u80F6\u539F","\u5F39\u6027\u86CB\u767D","\u7CD6\u80FA\u805A\u7CD6\u548C\u86CB\u767D\u805A\u7CD6","\u7EA4\u8FDE\u86CB\u767D\u548C\u5C42\u7C98\u8FDE\u86CB\u767D","\u57FA\u819C\u4E0E\u7EC6\u80DE\u5916\u88AB","\u690D\u7269\u7EC6\u80DE\u58C1"],summary:"\u7EC6\u80DE\u5916\u57FA\u8D28\u7531\u80F6\u539F\u3001\u5F39\u6027\u86CB\u767D\u3001\u86CB\u767D\u805A\u7CD6\u548C\u9ECF\u7740\u7CD6\u86CB\u767D\u7EC4\u6210\uFF0C\u63D0\u4F9B\u673A\u68B0\u652F\u6491\u3001\u7EC4\u7EC7\u5206\u9694\u548C\u4FE1\u53F7\u8C03\u63A7\u3002",points:["\u80F6\u539F\u662F\u542B\u91CF\u6700\u4E30\u5BCC\u7684\u7ED3\u6784\u86CB\u767D\uFF0C\u63D0\u4F9B\u6297\u62C9\u5F3A\u5EA6\uFF1B\u5F39\u6027\u86CB\u767D\u8D4B\u4E88\u7EC4\u7EC7\u5F39\u6027\u3002","\u7CD6\u80FA\u805A\u7CD6/\u86CB\u767D\u805A\u7CD6\u9AD8\u5EA6\u6C34\u5408\uFF0C\u5F62\u6210\u51DD\u80F6\u72B6\u57FA\u8D28\u5E76\u8C03\u8282\u751F\u957F\u56E0\u5B50\uFF1B\u7EA4\u8FDE\u86CB\u767D\u548C\u5C42\u7C98\u8FDE\u86CB\u767D\u4ECB\u5BFC\u7EC6\u80DE\u9ECF\u7740\u3002","\u57FA\u819C\u662F\u7279\u5316\u7684\u7EC6\u80DE\u5916\u57FA\u8D28\uFF0C\u652F\u6491\u4E0A\u76AE\u5E76\u53C2\u4E0E\u4FE1\u53F7\uFF1B\u690D\u7269\u7EC6\u80DE\u58C1\u4EE5\u7EA4\u7EF4\u7D20\u4E3A\u4E3B\uFF0C\u63D0\u4F9B\u652F\u6301\u548C\u5F62\u6001\u3002"],terms:[{t:"\u80F6\u539F",d:"\u7EC6\u80DE\u5916\u57FA\u8D28\u4E2D\u542B\u91CF\u6700\u4E30\u5BCC\u7684\u7EA4\u7EF4\u72B6\u7ED3\u6784\u86CB\u767D\uFF0C\u63D0\u4F9B\u6297\u62C9\u5F3A\u5EA6\u3002"},{t:"\u5C42\u7C98\u8FDE\u86CB\u767D",d:"\u57FA\u819C\u7684\u4E3B\u8981\u7CD6\u86CB\u767D\uFF0C\u4ECB\u5BFC\u7EC6\u80DE\u4E0E\u57FA\u8D28\u7684\u9ECF\u7740\u548C\u4FE1\u53F7\u3002"}],check:{q:"\u7EC6\u80DE\u5916\u57FA\u8D28\u53EA\u63D0\u4F9B\u673A\u68B0\u652F\u6491\u5417\uFF1F",a:"\u4E0D\u53EA\u3002\u5B83\u8FD8\u80FD\u7ED3\u5408\u5E76\u50A8\u5B58\u751F\u957F\u56E0\u5B50\u3001\u8C03\u8282\u7EC6\u80DE\u9ECF\u7740\u548C\u4FE1\u53F7\u3001\u5F71\u54CD\u7EC6\u80DE\u589E\u6B96\u3001\u5206\u5316\u3001\u8FC1\u79FB\u548C\u5B58\u6D3B\u3002"}}]}];var es=[...Vf,...Wf],rc=es.reduce((i,e)=>i+e.sections.length,0),py=[0,2,7,6,8,4,11];function Xf(i){return py[i]??0}var ts=[{id:"prokaryote-eukaryote",no:"01",title:"\u539F\u6838\u7EC6\u80DE / \u771F\u6838\u7EC6\u80DE",en:"TWO ARCHITECTURES OF LIFE",book:0,sections:["\u7B2C\u4E8C\u8282"],accent:"#7ff7e4",summary:"\u540C\u4E00\u5957\u751F\u547D\u903B\u8F91\uFF0C\u4E24\u6761\u4E0D\u540C\u7684\u7A7A\u95F4\u7EC4\u7EC7\u8DEF\u7EBF\uFF1A\u539F\u6838\u7EC6\u80DE\u7528\u62DF\u6838\u4E0E\u7D27\u51D1\u7684\u7EC6\u80DE\u8D28\u5B8C\u6210\u4E00\u5207\uFF0C\u771F\u6838\u7EC6\u80DE\u7528\u819C\u6027\u533A\u5BA4\u628A\u53CD\u5E94\u5206\u5F00\u3002",points:["\u539F\u6838\u7EC6\u80DE\u6CA1\u6709\u6838\u819C\uFF0CDNA \u96C6\u4E2D\u5728\u62DF\u6838\u533A","\u771F\u6838\u7EC6\u80DE\u4EE5\u6838\u819C\u3001\u5185\u819C\u7CFB\u7EDF\u548C\u7EC6\u80DE\u9AA8\u67B6\u7EC4\u7EC7\u533A\u5BA4","\u6838\u7CD6\u4F53\u3001\u819C\u548C\u80FD\u91CF\u4EE3\u8C22\u662F\u4E24\u8005\u5171\u4EAB\u7684\u5E95\u5C42\u673A\u5236","\u7EC6\u80DE\u58C1\u3001\u835A\u819C\u548C\u83CC\u6BDB\u6784\u6210\u539F\u6838\u7EC6\u80DE\u7684\u754C\u9762\u4E0E\u9644\u7740\u7ED3\u6784"]},{id:"membrane-mosaic",no:"02",title:"\u7EC6\u80DE\u8D28\u819C\u7684\u6D41\u52A8\u9576\u5D4C",en:"A LIQUID MOSAIC",book:2,sections:["\u7B2C\u4E00\u8282","\u7B2C\u4E8C\u8282"],accent:"#65e6d8",summary:"\u819C\u4E0D\u662F\u4E00\u5835\u5899\uFF0C\u800C\u662F\u4E00\u7247\u4E8C\u7EF4\u6D41\u4F53\uFF1A\u8102\u8D28\u63D0\u4F9B\u6D41\u52A8\u6027\uFF0C\u86CB\u767D\u8D28\u63D0\u4F9B\u529F\u80FD\uFF0C\u7CD6\u94FE\u671D\u5411\u5916\u4FA7\u5F62\u6210\u8BC6\u522B\u5C42\u3002",points:["\u78F7\u8102\u53CC\u5206\u5B50\u5C42\u662F\u819C\u7684\u57FA\u672C\u9AA8\u67B6","\u6574\u5408\u819C\u86CB\u767D\u7A7F\u8D8A\u8102\u53CC\u5C42\uFF0C\u5916\u5468\u819C\u86CB\u767D\u9644\u7740\u5728\u8868\u9762","\u819C\u7684\u4E0D\u5BF9\u79F0\u6027\u4E0E\u6D41\u52A8\u6027\u5171\u540C\u51B3\u5B9A\u8FD0\u8F93\u3001\u8BC6\u522B\u548C\u4FE1\u53F7\u529F\u80FD","\u78F7\u8102\u9170\u4E1D\u6C28\u9178\u4E3B\u8981\u4F4D\u4E8E\u5185\u53F6\uFF0C\u8102\u8D28\u53EF\u4FA7\u5411\u6269\u6563\u4F46\u5F88\u5C11\u81EA\u53D1\u7FFB\u8F6C"]},{id:"transport",no:"03",title:"\u8DE8\u819C\u8FD0\u8F93\uFF1A\u901A\u9053\u4E0E\u6CF5",en:"CHANNELS, CARRIERS & PUMPS",book:3,sections:["\u7B2C\u4E00\u8282","\u7B2C\u4E8C\u8282"],accent:"#8dd7ff",summary:"\u901A\u9053\u8BA9\u79BB\u5B50\u987A\u68AF\u5EA6\u5FEB\u901F\u901A\u8FC7\uFF0C\u6CF5\u7528 ATP \u9006\u68AF\u5EA6\u5EFA\u7ACB\u5E76\u7EF4\u6301\u7535\u5316\u5B66\u68AF\u5EA6\uFF1B\u4E24\u8005\u5171\u540C\u5851\u9020\u819C\u7535\u4F4D\u4E0E\u6B21\u7EA7\u8FD0\u8F93\u3002",points:["\u901A\u9053\u86CB\u767D\u5F62\u6210\u4EB2\u6C34\u5B54\u9053\uFF0C\u9009\u62E9\u6027\u5F3A\u3001\u8F6C\u8FD0\u5FEB","P \u578B\u6CF5\u901A\u8FC7\u78F7\u9178\u5316\u6784\u8C61\u53D8\u5316\u9006\u68AF\u5EA6\u8F6C\u8FD0\u79BB\u5B50","Na\u207A/K\u207A \u6CF5\u6BCF\u6C34\u89E3 1 \u4E2A ATP \u51C0\u6CF5\u51FA 1 \u4E2A\u6B63\u7535\u8377\uFF0C\u53C2\u4E0E\u819C\u7535\u4F4D","\u6BCF\u4E2A\u5FAA\u73AF\u6CF5\u51FA 3 \u4E2A Na\u207A\u3001\u6CF5\u5165 2 \u4E2A K\u207A\uFF0C\u5E76\u7531 1 \u4E2A ATP \u4F9B\u80FD"]},{id:"endomembrane",no:"04",title:"\u5185\u819C\u7CFB\u7EDF\u4E0E\u819C\u6CE1\u8FD0\u8F93",en:"THE SECRETORY RIVER",book:4,sections:["\u7B2C\u4E8C\u8282"],maps:[{book:4,sections:["\u7B2C\u4E8C\u8282"]},{book:5,sections:["\u7B2C\u4E00\u8282","\u7B2C\u4E8C\u8282"]}],accent:"#ffb27a",summary:"\u5185\u8D28\u7F51\u3001\u9AD8\u5C14\u57FA\u4F53\u548C\u6EB6\u9176\u4F53\u901A\u8FC7\u819C\u6CE1\u8FDE\u6210\u4E00\u6761\u52A8\u6001\u6CB3\u6D41\uFF1A\u86CB\u767D\u8D28\u5728 ER \u5408\u6210\uFF0C\u5728\u9AD8\u5C14\u57FA\u4F53\u4FEE\u9970\u5206\u9009\uFF0C\u6700\u7EC8\u62B5\u8FBE\u6EB6\u9176\u4F53\u6216\u7EC6\u80DE\u5916\u3002",points:["\u7C97\u9762 ER \u5408\u6210\u5E76\u521D\u6B65\u6298\u53E0\u5206\u6CCC\u86CB\u767D\u548C\u819C\u86CB\u767D","\u9AD8\u5C14\u57FA\u4F53\u5B8C\u6210\u7CD6\u57FA\u5316\u3001\u5206\u9009\u4E0E\u5305\u88C5","COPII/COPI\u3001Rab \u4E0E SNARE \u4FDD\u8BC1\u819C\u6CE1\u5B9A\u5411\u8FD0\u8F93\u548C\u878D\u5408"]},{id:"mito-chloro",no:"05",title:"\u7EBF\u7C92\u4F53 / \u53F6\u7EFF\u4F53",en:"TWO ENERGY CONVERTERS",book:6,sections:["\u7B2C\u4E00\u8282","\u7B2C\u4E8C\u8282","\u7B2C\u4E09\u8282"],accent:"#ffb36b",summary:"\u7EBF\u7C92\u4F53\u628A\u5316\u5B66\u80FD\u8F6C\u6210\u8D28\u5B50\u68AF\u5EA6\uFF0C\u53F6\u7EFF\u4F53\u628A\u5149\u80FD\u8F6C\u6210\u5316\u5B66\u80FD\uFF1B\u4E24\u8005\u90FD\u7528\u819C\u4E0A\u7684\u7535\u5B50\u4F20\u9012\u94FE\u548C ATP \u5408\u9176\u5B8C\u6210\u80FD\u91CF\u8F6C\u6362\u3002",points:["\u7EBF\u7C92\u4F53\u5185\u819C\u6298\u53E0\u6210\u5D74\uFF0C\u6269\u5927\u6C27\u5316\u78F7\u9178\u5316\u9762\u79EF","\u53F6\u7EFF\u4F53\u7C7B\u56CA\u4F53\u5806\u53E0\u6210\u57FA\u7C92\uFF0C\u627F\u8F7D\u5149\u53CD\u5E94","H\u207A \u7ECF F\u2080F\u2081 ATP \u5408\u9176\u56DE\u6D41\uFF0C\u9A71\u52A8 ADP + Pi \u2192 ATP","F\u2081 \u5934\u90E8\u6BCF\u8F6C 120\xB0 \u5B8C\u6210\u4E00\u4E2A\u50AC\u5316\u4F4D\u70B9\u7684 ATP \u91CA\u653E","\u4E24\u8005\u90FD\u6709\u81EA\u8EAB DNA\uFF0C\u6309\u5185\u5171\u751F\u5B66\u8BF4\u8D77\u6E90\u4E8E\u7EC6\u83CC/\u84DD\u7EC6\u83CC"]},{id:"cytoskeleton",no:"06",title:"\u7EC6\u80DE\u9AA8\u67B6\u4E09\u7EA4\u7EF4",en:"THE LIVING SCAFFOLD",book:7,sections:["\u7B2C\u4E00\u8282","\u7B2C\u4E8C\u8282","\u7B2C\u4E09\u8282"],accent:"#9ee7ff",summary:"\u5FAE\u4E1D\u3001\u5FAE\u7BA1\u548C\u4E2D\u95F4\u4E1D\u5728\u76F4\u5F84\u3001\u6781\u6027\u3001\u52A8\u529B\u5B66\u548C\u529B\u5B66\u89D2\u8272\u4E0A\u5206\u5DE5\u4E0D\u540C\uFF0C\u5374\u5171\u540C\u628A\u7EC6\u80DE\u7EC4\u7EC7\u6210\u6709\u5F20\u529B\u3001\u53EF\u8FD0\u52A8\u3001\u80FD\u8FD0\u8F93\u7684\u6574\u4F53\u3002",points:["\u5FAE\u4E1D\u76F4\u5F84\u7EA6 7 nm\uFF0C\u6709\u6781\u6027\uFF0C\u808C\u7403\u86CB\u767D\u6CBF\u5176\u8FD0\u52A8","\u5FAE\u7BA1\u76F4\u5F84\u7EA6 24 nm\uFF0C\u52A8\u6001\u4E0D\u7A33\u5B9A\uFF0C\u662F\u8FD0\u8F93\u8F68\u9053\u548C\u7EBA\u9524\u4F53\u9AA8\u67B6","\u4E2D\u95F4\u4E1D\u76F4\u5F84\u7EA6 10 nm\uFF0C\u65E0\u6781\u6027\uFF0C\u4E3B\u8981\u627F\u62C5\u6297\u62C9\u529B","\u9A71\u52A8\u86CB\u767D\u5411\u5FAE\u7BA1\u6B63\u6781\u8FD0\u52A8\uFF0C\u52A8\u529B\u86CB\u767D\u5411\u8D1F\u6781\u8FD0\u52A8"]},{id:"nucleus",no:"07",title:"\u7EC6\u80DE\u6838\u4E0E\u67D3\u8272\u8D28",en:"THE GENOME, CONTINUOUSLY READ",book:8,sections:["\u7B2C\u4E00\u8282","\u7B2C\u4E8C\u8282","\u7B2C\u4E09\u8282","\u7B2C\u56DB\u8282","\u7B2C\u4E94\u8282","\u7B2C\u516D\u8282"],accent:"#d3a4ff",summary:"\u6838\u88AB\u819C\u628A\u8F6C\u5F55\u4E0E\u7FFB\u8BD1\u5728\u7A7A\u95F4\u4E0A\u5206\u5F00\uFF0C\u6838\u5B54\u63A7\u5236\u5927\u5206\u5B50\u4EA4\u6362\uFF0C\u67D3\u8272\u8D28\u5728\u6838\u5185\u6298\u53E0\u6210\u52A8\u6001\u7684\u4E09\u7EF4\u8C03\u63A7\u7F51\u7EDC\u3002",points:["\u6838\u5B54\u590D\u5408\u4F53\u63A7\u5236\u6838\u8D28\u4EA4\u6362\uFF0C\u6838\u7EA4\u5C42\u652F\u6491\u6838\u819C","\u6838\u5B54\u590D\u5408\u4F53\u7531\u5916\u73AF\u3001\u5185\u73AF\u3001\u8F90\u6761\u548C\u4E2D\u592E\u901A\u9053\u7EC4\u6210\uFF0C\u517C\u5177\u9AD8\u901A\u91CF\u4E0E\u9009\u62E9\u6027","\u6838\u5C0F\u4F53\u662F\u67D3\u8272\u8D28\u7684\u57FA\u672C\u5355\u4F4D\uFF0C\u7EA6 147 bp DNA \u7F20\u7ED5\u7EC4\u86CB\u767D\u516B\u805A\u4F53","\u6838\u4EC1\u7EC4\u7EC7 rRNA \u8F6C\u5F55\u3001\u52A0\u5DE5\u4E0E\u6838\u7CD6\u4F53\u4E9A\u57FA\u7EC4\u88C5","Ran-GTP \u5728\u6838\u5185\u9AD8\u3001Ran-GDP \u5728\u80DE\u8D28\u9AD8\uFF0C\u9A71\u52A8\u6838\u8D28\u8FD0\u8F93\u7684\u65B9\u5411\u6027"]},{id:"ribosome",no:"08",title:"\u6838\u7CD6\u4F53\u4E0E\u7FFB\u8BD1",en:"THE TRANSLATION MACHINE",book:9,sections:["\u7B2C\u4E00\u8282","\u7B2C\u4E8C\u8282"],accent:"#8cf0c8",summary:"\u6838\u7CD6\u4F53\u628A mRNA \u7684\u78B1\u57FA\u5E8F\u5217\u7FFB\u8BD1\u6210\u86CB\u767D\u8D28\uFF1A\u5C0F\u4E9A\u57FA\u8BC6\u522B mRNA\uFF0C\u5927\u4E9A\u57FA\u50AC\u5316\u80BD\u952E\u5F62\u6210\uFF0CtRNA \u6309\u5BC6\u7801\u5B50\u9012\u9001\u6C28\u57FA\u9178\u3002",points:["\u539F\u6838\u6838\u7CD6\u4F53\u4E3A 70S\uFF0C\u771F\u6838\u6838\u7CD6\u4F53\u4E3A 80S","rRNA \u6784\u6210\u50AC\u5316\u6838\u5FC3\uFF0C\u80BD\u952E\u5F62\u6210\u4E3B\u8981\u7531 rRNA \u50AC\u5316","\u591A\u6838\u7CD6\u4F53\u8BA9\u540C\u4E00\u6761 mRNA \u540C\u65F6\u88AB\u591A\u4E2A\u6838\u7CD6\u4F53\u7FFB\u8BD1","A/P/E \u4F4D\u70B9\u4F9D\u6B21\u5B8C\u6210\u6C28\u9170-tRNA \u8FDB\u5165\u3001\u80BD\u952E\u5F62\u6210\u548C\u7A7A tRNA \u91CA\u653E"]},{id:"light-microscopy",no:"09",batch:2,title:"\u5149\u5B66\u663E\u5FAE\u4E0E\u8367\u5149\u6210\u50CF",en:"LIGHT & FLUORESCENCE MICROSCOPY",book:1,sections:["\u7B2C\u4E00\u8282"],accent:"#8fe8ff",summary:"\u5149\u7A7F\u8FC7\u6837\u54C1\uFF0C\u88AB\u7269\u955C\u6536\u96C6\u3001\u6EE4\u7247\u7B5B\u9009\u540E\u6210\u50CF\uFF1B\u8367\u5149\u6807\u8BB0\u8BA9\u7279\u5B9A\u5206\u5B50\u4ECE\u80CC\u666F\u4E2D\u201C\u4EAE\u8D77\u6765\u201D\uFF0C\u5171\u805A\u7126\u5219\u7528\u70B9\u626B\u63CF\u53BB\u6389\u7126\u5916\u5149\u3002",points:["\u5206\u8FA8\u7387\u53D7\u884D\u5C04\u6781\u9650\u9650\u5236\uFF0C\u653E\u5927\u500D\u6570\u4E0D\u7B49\u4E8E\u5206\u8FA8\u7387","\u8367\u5149\u6EE4\u7247\u628A\u6FC0\u53D1\u5149\u548C\u53D1\u5C04\u5149\u5206\u5F00\uFF0C\u6697\u80CC\u666F\u4E0A\u53EA\u770B\u89C1\u6807\u8BB0\u5206\u5B50","\u5171\u805A\u7126\u9488\u5B54\u6291\u5236\u7126\u5916\u8367\u5149\uFF0C\u8D85\u5206\u8FA8\u65B9\u6CD5\u8FDB\u4E00\u6B65\u7A81\u7834\u884D\u5C04\u6781\u9650"]},{id:"electron-microscopy",no:"10",batch:2,title:"\u7535\u5B50\u663E\u5FAE\u955C",en:"ELECTRON MICROSCOPY",book:1,sections:["\u7B2C\u4E00\u8282"],accent:"#aab8ff",summary:"\u7535\u5B50\u675F\u5728\u771F\u7A7A\u67F1\u4E2D\u88AB\u7535\u78C1\u900F\u955C\u805A\u7126\uFF0C\u7A7F\u8FC7\u8D85\u8584\u6837\u54C1\u6216\u626B\u63CF\u8868\u9762\uFF1B\u6CE2\u957F\u66F4\u77ED\uFF0C\u4F7F\u5206\u8FA8\u7387\u8FDB\u5165\u7EB3\u7C73\u5C3A\u5EA6\u3002",points:["TEM \u8BA9\u7535\u5B50\u7A7F\u900F\u8D85\u8584\u5207\u7247\uFF0C\u89C2\u5BDF\u7EC6\u80DE\u5185\u90E8\u8D85\u5FAE\u7ED3\u6784","SEM \u6536\u96C6\u8868\u9762\u4E8C\u6B21\u7535\u5B50\uFF0C\u91CD\u5EFA\u6837\u54C1\u8868\u9762\u5F62\u8C8C","\u6837\u54C1\u9700\u56FA\u5B9A\u3001\u8131\u6C34\u3001\u5305\u57CB\u3001\u5207\u7247\u548C\u67D3\u8272\uFF0C\u6D3B\u7EC6\u80DE\u4E0D\u80FD\u76F4\u63A5\u89C2\u5BDF"]},{id:"centrifugation",no:"11",batch:2,title:"\u5DEE\u901F\u79BB\u5FC3\u4E0E\u4E9A\u7EC6\u80DE\u5206\u79BB",en:"DIFFERENTIAL CENTRIFUGATION",book:1,sections:["\u7B2C\u4E8C\u8282"],accent:"#ffcf8a",summary:"\u7EC6\u80DE\u88AB\u7834\u788E\u540E\uFF0C\u4E0D\u540C\u5927\u5C0F\u548C\u5BC6\u5EA6\u7684\u7EC6\u80DE\u5668\u5728\u79BB\u5FC3\u573A\u4E2D\u5206\u5C42\uFF1B\u9010\u6B65\u63D0\u9AD8\u79BB\u5FC3\u529B\uFF0C\u5C31\u80FD\u628A\u7EC6\u80DE\u6838\u3001\u7EBF\u7C92\u4F53\u3001\u5FAE\u7C92\u4F53\u7B49\u4F9D\u6B21\u5206\u79BB\u3002",points:["\u4F4E\u901F\u79BB\u5FC3\u5148\u6C89\u6DC0\u7EC6\u80DE\u6838\u548C\u672A\u7834\u788E\u7EC6\u80DE","\u63D0\u9AD8\u8F6C\u901F\u4F9D\u6B21\u6C89\u6DC0\u7EBF\u7C92\u4F53\u3001\u6EB6\u9176\u4F53\u3001\u5FAE\u7C92\u4F53","\u5BC6\u5EA6\u68AF\u5EA6\u79BB\u5FC3\u53EF\u8FDB\u4E00\u6B65\u7EAF\u5316\u540C\u4E00\u7EC6\u80DE\u5668"]},{id:"cell-culture",no:"12",batch:2,title:"\u7EC6\u80DE\u57F9\u517B",en:"CELL CULTURE",book:1,sections:["\u7B2C\u4E09\u8282"],accent:"#9ff2c0",summary:"\u7EC6\u80DE\u5728\u65E0\u83CC\u3001\u6052\u6E29\u3001\u5408\u9002\u57F9\u517B\u57FA\u548C\u6C14\u4F53\u73AF\u5883\u4E2D\u8D34\u58C1\u6216\u60AC\u6D6E\u751F\u957F\uFF1B\u57F9\u517B\u74F6\u628A\u201C\u4F53\u5185\u73AF\u5883\u201D\u538B\u7F29\u6210\u4E00\u4E2A\u53EF\u89C2\u5BDF\u3001\u53EF\u5E72\u9884\u7684\u5C0F\u7CFB\u7EDF\u3002",points:["\u539F\u4EE3\u7EC6\u80DE\u66F4\u63A5\u8FD1\u4F53\u5185\u72B6\u6001\uFF0C\u8FDE\u7EED\u7EC6\u80DE\u7CFB\u53EF\u957F\u671F\u4F20\u4EE3","\u57F9\u517B\u57FA\u63D0\u4F9B\u8425\u517B\u3001\u751F\u957F\u56E0\u5B50\u548C\u7F13\u51B2\u4F53\u7CFB\uFF0C\u9700\u5B9A\u671F\u6362\u6DB2","\u65E0\u83CC\u64CD\u4F5C\u3001\u6E29\u5EA6\u548C CO\u2082 \u6D53\u5EA6\u51B3\u5B9A\u57F9\u517B\u662F\u5426\u6210\u529F"]},{id:"frap",no:"13",batch:2,title:"FRAP \u8367\u5149\u6F02\u767D\u6062\u590D",en:"FLUORESCENCE RECOVERY AFTER PHOTOBLEACHING",book:1,sections:["\u7B2C\u56DB\u8282"],accent:"#71f0d4",summary:"\u7528\u5F3A\u6FC0\u5149\u628A\u4E00\u5C0F\u5757\u8367\u5149\u533A\u57DF\u6F02\u767D\uFF0C\u518D\u89C2\u5BDF\u5468\u56F4\u672A\u6F02\u767D\u5206\u5B50\u6269\u6563\u8FDB\u6765\uFF1B\u6062\u590D\u66F2\u7EBF\u80FD\u62A5\u544A\u5206\u5B50\u7684\u8FD0\u52A8\u901F\u5EA6\u4E0E\u7ED3\u5408\u72B6\u6001\u3002",points:["\u6F02\u767D\u533A\u8367\u5149\u6062\u590D\u901F\u5EA6\u53CD\u6620\u5206\u5B50\u6269\u6563\u548C\u4EA4\u6362","\u6062\u590D\u4E0D\u5B8C\u6574\u63D0\u793A\u5B58\u5728\u4E0D\u6613\u79FB\u52A8\u7684\u7ED3\u5408\u6C60","FRAP \u9002\u5408\u7814\u7A76\u819C\u86CB\u767D\u3001\u6838\u86CB\u767D\u548C\u7EC6\u80DE\u8D28\u5206\u5B50\u7684\u52A8\u6001"]},{id:"fret",no:"14",batch:2,title:"FRET \u8367\u5149\u5171\u632F\u80FD\u91CF\u8F6C\u79FB",en:"F\xD6RSTER RESONANCE ENERGY TRANSFER",book:1,sections:["\u7B2C\u56DB\u8282"],accent:"#ff9fc9",summary:"\u4E24\u4E2A\u8367\u5149\u57FA\u56E2\u8DB3\u591F\u9760\u8FD1\u65F6\uFF0C\u4F9B\u4F53\u628A\u80FD\u91CF\u65E0\u8F90\u5C04\u5730\u4F20\u7ED9\u53D7\u4F53\uFF1B\u53D7\u4F53\u53D1\u5149\u660E\u6697\u53D8\u5316\uFF0C\u53EF\u8BFB\u51FA\u7EB3\u7C73\u5C3A\u5EA6\u7684\u5206\u5B50\u90BB\u8FD1\u4E0E\u6784\u8C61\u53D8\u5316\u3002",points:["FRET \u6548\u7387\u968F\u8DDD\u79BB\u7684\u516D\u6B21\u65B9\u8870\u51CF\uFF0C\u4F5C\u7528\u8303\u56F4\u7EA6 1\u201310 nm","\u4F9B\u4F53\u53D1\u5C04\u4E0B\u964D\u3001\u53D7\u4F53\u53D1\u5C04\u589E\u5F3A\u662F\u7ECF\u5178\u8BFB\u51FA","\u53EF\u6784\u5EFA FRET \u63A2\u9488\u68C0\u6D4B\u86CB\u767D\u4E92\u4F5C\u3001\u9499\u79BB\u5B50\u548C\u6784\u8C61\u53D8\u5316"]}],FM=ts.length;function ju(i){return ts.find(e=>e.id===i)||ts[0]}function qf(i,e){let t=Number(String(i||"").replace("ch",""))-1;return ts.filter(n=>(n.maps||[{book:n.book,sections:n.sections}]).some(r=>r.book===t&&r.sections.includes(e)))}var ac=class extends Ai{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new In;e.deleteAttribute("uv");let t=new fn({side:Kt}),n=new fn,s=new Tn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ge(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ni(e,n,6),o=new Ht;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Ge(e,xr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Ge(e,xr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new Ge(e,xr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Ge(e,xr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new Ge(e,xr(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new Ge(e,xr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function xr(i){return new ta({color:0,emissive:16777215,emissiveIntensity:i})}var je=Math.PI*2;function Ye(i,e={}){return new fn({color:i,roughness:e.roughness??.36,metalness:e.metalness??.18,transparent:e.transparent??!1,opacity:e.opacity??1,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??1,side:e.side??gi})}function Ms(i,e=1.6){return new fn({color:i,emissive:i,emissiveIntensity:e,roughness:.28,metalness:.1,transparent:!0,opacity:.92})}function Jt(i,e=.18,t={}){return new Gn({color:i,transparent:!0,opacity:e,roughness:.16,metalness:.05,clearcoat:1,clearcoatRoughness:.2,ior:1.33,side:Xt,depthWrite:!1,...t})}function he(i,e,t,n,s,r){let a=new Ge(i,e);return t&&a.position.set(t[0],t[1],t[2]),n&&a.rotation.set(n[0],n[1],n[2]),r&&a.scale.set(r[0],r[1],r[2]),s.add(a),a}function Pe(i,e,t,n,s={}){let r=s.glass?Jt(t,s.opacity??.3):s.glow?Ms(t,s.glow):Ye(t,s);return he(new bt(e,s.segments??24,s.rings??16),r,n,null,i,s.scale)}function Un(i,e,t,n,s,r,a={}){return he(new ii(e,t,6,14),a.glass?Jt(n,a.opacity??.2):Ye(n,a),s,r,i,a.scale)}function st(i,e,t,n,s,r,a,o={}){let c=o.glass?Jt(s,o.opacity??.2):o.glow?Ms(s,o.glow):Ye(s,o);return he(new In(e,t,n),c,r,a,i)}function ht(i,e,t,n,s,r,a={}){return he(new cn(e,t,12,40,a.arc??je),a.glow?Ms(n,a.glow):Ye(n,a),s,r,i)}function Zt(i,e,t,n,s={}){let r=new Sn(e.map(o=>new R(...o)),!1,"catmullrom",.4),a=new mi(r,s.segments??64,t,8,!1);return he(a,s.glow?Ms(n,s.glow):Ye(n,s),null,null,i)}function de(i,e,t,n=""){i.userData.labels||(i.userData.labels=[]),i.userData.labels.push({text:e,sub:n,position:new R(...t)})}function ns(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function my(i,e){return i.userData.distance=e,i}function bs(i,e,t,n,s,r=[0,0,0],a=7){let o=new Re;o.position.set(...s),o.rotation.set(...r),he(new Ie(e,e,t,28),Ye(n,{metalness:.55,roughness:.35}),[0,0,0],null,o);for(let c=0;c<a;c+=1){let l=-t/2+(c+.5)*(t/a);ht(o,e*.98,.009,14221303,[0,l,0],[Math.PI/2,0,0],{transparent:!0,opacity:.25})}return i.add(o),o}function Yf(i,e,t,n,s,r=[0,0,0]){let a=new Re;return a.position.set(...s),a.rotation.set(...r),he(new Ie(e,e,t,28),Jt(n,.28,{depthWrite:!1}),[0,0,0],null,a),ht(a,e+.015,.018,12582128,[0,t/2,0],[Math.PI/2,0,0],{transparent:!0,opacity:.5}),ht(a,e+.015,.018,12582128,[0,-t/2,0],[Math.PI/2,0,0],{transparent:!0,opacity:.5}),i.add(a),a}function Pa(i,e,t,n,s,r=[0,0,0]){let a=new Re;return a.position.set(...s),a.rotation.set(...r),st(a,e+.12,t+.12,.055,662304,[0,0,0],null,{metalness:.45}),st(a,e,t,.045,n,[0,0,.01],null,{glow:.45}),i.add(a),a}function Zf(i,e,t,n,s,r=[0,0,0],a=.2){return he(new Ie(e*.55,e,t,16,1,!0),new St({color:n,transparent:!0,opacity:a,side:Xt,depthWrite:!1,blending:ot}),s,r,i)}function gy(){let i=new Re;i.userData.distance=14.2;let e=new Re;e.position.set(-3.35,.35,0),he(new bt(1.45,44,30),Jt(4905672,.15),null,null,e,[1.25,1,1]),he(new bt(1.52,24,16),new St({color:6219991,wireframe:!0,transparent:!0,opacity:.075}),null,null,e,[1.25,1,1]),he(new bt(1.58,24,16),new St({color:9302751,wireframe:!0,transparent:!0,opacity:.035}),null,null,e,[1.28,1.03,1.03]),he(new bt(1.72,20,14),Jt(8186584,.045),null,null,e,[1.26,1.02,1.02]);let t=ns(12);for(let o=0;o<42;o+=1){let c=t()*je,l=Math.acos(2*t()-1),u=1.05+t()*.18;Pe(e,.035,9435103,[Math.cos(c)*Math.sin(l)*u*1.2,Math.cos(l)*u,Math.sin(c)*Math.sin(l)*u],{glow:1.4,segments:8,rings:6})}Zt(e,[[-.7,.2,.1],[-.3,.65,-.2],[.25,.15,.25],[.6,-.3,-.05],[.1,-.55,.1],[-.35,-.1,-.25],[-.75,.35,.05]],.08,6484704,{glow:1.6,segments:80});for(let o=0;o<2;o+=1){let c=[];for(let l=0;l<18;l+=1){let u=l/17*je+o*2.2;c.push([-.05+Math.cos(u)*(.42+o*.18),.15+Math.sin(u)*.34,.2+Math.sin(u*2)*.22])}Zt(e,c,.026,9371605,{glow:.8,segments:44})}for(let o=0;o<9;o+=1){let c=o/9*je;Pe(e,.05,16765322,[Math.cos(c)*.72,-.2+Math.sin(c*2)*.32,Math.sin(c)*.56],{glow:.6,segments:8,rings:6})}let s=[];for(let o=0;o<7;o+=1)s.push([-1.35-o*.22,.05+Math.sin(o*.9)*.3,.25*Math.sin(o*1.4)]);Zt(e,s,.035,7391487,{glow:1.2,segments:60});for(let o=0;o<9;o+=1){let c=o/9*je;Zt(e,[[1.15*Math.cos(c),.5*Math.sin(c),.55],[1.6*Math.cos(c),.72*Math.sin(c),.8],[1.82*Math.cos(c),.82*Math.sin(c),.92]],.018,10217689,{opacity:.6,transparent:!0,segments:12})}i.add(e);let r=new Re;r.position.set(2.85,.1,0),he(new bt(2.15,52,34),Jt(10192623,.12),null,null,r),he(new bt(2.22,28,18),new St({color:12495359,wireframe:!0,transparent:!0,opacity:.06}),null,null,r),Pe(r,.96,13474559,[.2,.25,.05],{glass:!0,opacity:.35}),Pe(r,.32,16754393,[.45,.35,.25],{glow:1.6}),Zt(r,[[-.1,-.2,1.65],[.7,.1,1.2],[1.05,-.5,.65],[.45,-.9,.25],[-.25,-.55,.65],[-.8,-.9,1.05],[-.7,-.35,1.55]],.055,16761994,{glow:.9,segments:80});for(let o=0;o<3;o+=1)Un(r,.24,.75,16751458,[1.25+o*.06,.65-o*.48,-.45+o*.18],[Math.PI/2,.6,.4],{glow:.8});for(let o=0;o<3;o+=1){let c=o/3*je;Pe(r,.15,16765580,[Math.cos(c)*1.4,-.75,Math.sin(c)*1.15],{glow:1.4,segments:14,rings:10})}for(let o=0;o<4;o+=1)he(new cn(.55,.045,8,34,Math.PI*1.15),Ye(9302756,{transparent:!0,opacity:.7}),[.55,-.8+o*.13,1],[Math.PI/2,0,.25],r);for(let o=0;o<14;o+=1){let c=o/14*je,l=Math.acos(1-2*((o+.5)/14)),u=[Math.cos(c)*Math.sin(l)*2.01,Math.cos(l)*2.01,Math.sin(c)*Math.sin(l)*2.01];he(new cn(.13,.025,6,16),Ye(16765422,{transparent:!0,opacity:.8}),u,[0,0,0],r).lookAt(0,0,0)}for(let o=0;o<7;o+=1){let c=[];for(let l=0;l<16;l+=1){let u=l/15,d=u*je+o*.7;c.push([Math.cos(d)*(1.1+u*.8)*(o%2?1:-1),-1.1+u*1.9,Math.sin(d*1.3)*(.8+u*.6)])}Zt(r,c,.018,9434343,{glow:.35,transparent:!0,opacity:.55,segments:40})}for(let o=0;o<4;o+=1)Pe(r,.09,16765066,[-1.3+o*.8,-1.05+o%2*.3,.6],{glow:.5,segments:10,rings:7});return i.add(r),de(i,"\u539F\u6838\u7EC6\u80DE",[-3.35,2.1,0],"PROKARYOTE"),de(i,"\u62DF\u6838 DNA",[-4.1,0,.5],"NUCLEOID"),de(i,"70S \u6838\u7CD6\u4F53",[-2.2,-1.2,.5],"RIBOSOME"),de(i,"\u7EC6\u80DE\u58C1 / \u835A\u819C",[-4.15,1.35,.3],"CELL WALL / CAPSULE"),de(i,"\u97AD\u6BDB",[-4.75,-.65,.25],"FLAGELLUM"),de(i,"\u771F\u6838\u7EC6\u80DE",[2.85,2.75,0],"EUKARYOTE"),de(i,"\u7EC6\u80DE\u6838",[3.2,.3,1.2],"NUCLEUS"),de(i,"\u7EBF\u7C92\u4F53",[4.35,-.6,.2],"MITOCHONDRION"),de(i,"\u5185\u819C\u7CFB\u7EDF",[1.1,-1.8,1],"ENDOMEMBRANE"),de(i,"80S \u6838\u7CD6\u4F53",[2.15,-1.45,1],"80S RIBOSOME"),my(i,14.2)}function xy(){let i=new Re;i.userData.distance=11.2;let e=18,t=5,n=new bt(.105,14,10),s=new ii(.035,.32,4,8),r=new ni(n,Ye(3852474,{transparent:!0,opacity:.82,emissive:870982,emissiveIntensity:.2}),e*t*2),a=new ni(s,Ye(2325110,{transparent:!0,opacity:.48}),e*t*4),o=new Ht,c=0,l=0;for(let f=0;f<e;f+=1)for(let g=0;g<t;g+=1){let M=(f-(e-1)/2)*.34,x=(g-(t-1)/2)*.34;for(let m of[-1,1]){o.position.set(M,m*.28,x),o.rotation.set(0,0,0),o.scale.set(1,1,1),o.updateMatrix(),r.setMatrixAt(c,o.matrix),c+=1;for(let S of[-.065,.065])o.position.set(M+S,m*.5,x),o.rotation.set(0,0,0),o.scale.set(1,1,1),o.updateMatrix(),a.setMatrixAt(l,o.matrix),l+=1}(f+g)%7===0&&he(new Ie(.045,.045,.5,6),Ye(16764538,{emissive:7162388,emissiveIntensity:.3}),[M+.05,.1,x],[0,0,.3],i)}i.add(r,a);let u=[8052735,16756950,16765066,11117823];for(let f=0;f<5;f+=1){let g=-2.2+f*1.05;Un(i,.16,.8,u[f%u.length],[g,0,.02],[0,0,0],{transparent:!0,opacity:.9,glow:.55}),Pe(i,.17,u[(f+1)%u.length],[g,.58,.02],{glow:1.2,segments:12,rings:8})}for(let f=0;f<5;f+=1){let g=-2.3+f*1.12;Un(i,.1,.3,f%2?10194175:16752585,[g,.68,.28],[Math.PI/2,.2,.4],{transparent:!0,opacity:.65}),Un(i,.08,.26,8186073,[g+.5,-.7,-.25],[Math.PI/2,-.2,-.3],{transparent:!0,opacity:.55})}for(let f=0;f<24;f+=1){let g=f/24*je;Pe(i,.026,10218751,[Math.cos(g)*(1.3+f%4*.4),1+f%3*.16,Math.sin(g)*.8],{glow:.4,segments:6,rings:4})}for(let f=0;f<4;f+=1)Zt(i,[[-2.4+f*1.5,-.78,-.3],[-2.35+f*1.5,-1.2,-.35],[-2.2+f*1.5,-1.55,-.2]],.02,7791316,{glow:.25,transparent:!0,opacity:.45,segments:14});let d=he(new Ie(.36,.36,1.05,24,1,!0),Jt(8841471,.3),[.9,0,.05],null,i);d.material.side=Xt,ht(i,.36,.06,10284287,[.9,.52,.05],[Math.PI/2,0,0],{glow:1.2}),ht(i,.36,.06,10284287,[.9,-.52,.05],[Math.PI/2,0,0],{glow:1.2});for(let f=0;f<18;f+=1){let g=f/18*je;Zt(i,[[-2.6+f%3*.08,.62,-.8+f%5*.35],[-2.45+Math.cos(g)*.18,.95+f%4*.12,-.8+f%5*.35+Math.sin(g)*.12]],.018,16752585,{glow:.8,transparent:!0,opacity:.7,segments:8})}for(let f=0;f<22;f+=1){let g=f/22*je;Pe(i,.045,16759006,[1.95+Math.cos(g)*.25,.78+f%3*.12,-.4+Math.sin(g)*.25],{glow:1.1,segments:8,rings:6})}for(let f=0;f<7;f+=1)Pe(i,.075,16752331,[-1.25+f*.17,-.36,.48],{glow:.45,segments:8,rings:6});let h=[];for(let f=0;f<7;f+=1){let g=Pe(i,.045,16765806,[-2.25+f*.72,.42,.72],{glow:1,segments:8,rings:6});h.push({mesh:g,baseX:g.position.x,phase:f*.7})}return de(i,"\u78F7\u8102\u53CC\u5206\u5B50\u5C42",[-2.7,-.9,.4],"PHOSPHOLIPID BILAYER"),de(i,"\u6574\u5408\u819C\u86CB\u767D",[2.65,.2,.2],"INTEGRAL PROTEIN"),de(i,"\u901A\u9053\u86CB\u767D",[.9,1.05,.2],"CHANNEL"),de(i,"\u7CD6\u843C",[-1.55,1.25,.3],"GLYCOCALYX"),de(i,"\u80C6\u56FA\u9187",[-1.3,.15,-.6],"CHOLESTEROL"),de(i,"\u78F7\u8102\u9170\u4E1D\u6C28\u9178",[-1.35,-.72,.45],"PS \xB7 INNER LEAFLET"),de(i,"\u8102\u8D28\u4FA7\u5411\u6269\u6563",[1.75,.82,.55],"LATERAL DIFFUSION"),i.userData.update=f=>{h.forEach(({mesh:g,baseX:M,phase:x},m)=>{g.position.x=M+Math.sin(f*.45+x)*.24,g.position.z=.72+Math.cos(f*.32+x+m)*.1,g.material.emissiveIntensity=.8+Math.sin(f*1.8+m)*.3})},i}function vy(){let i=new Re;i.userData.distance=11.4,he(new In(6.4,.28,2.5),Ye(1794399,{transparent:!0,opacity:.42,emissive:734515,emissiveIntensity:.6}),[0,0,0],null,i);for(let a=0;a<30;a+=1){let o=-3+a/29*6;for(let c of[-1.1,1.1])Pe(i,.04,7464150,[o,.23,c],{glow:.5,segments:7,rings:5})}for(let a=0;a<18;a+=1){let o=-3+a/17*6;for(let c of[-.65,0,.65])Pe(i,.028,4832693,[o,.16,c],{glow:.25,segments:6,rings:4}),Pe(i,.028,4832693,[o,-.16,c],{glow:.25,segments:6,rings:4})}let e=he(new Ie(.46,.46,1.15,26,1,!0),Jt(9166079,.26),[-1.65,0,0],null,i);e.material.side=Xt,ht(i,.46,.065,10808063,[-1.65,.58,0],[Math.PI/2,0,0],{glow:1.3}),ht(i,.46,.065,10808063,[-1.65,-.58,0],[Math.PI/2,0,0],{glow:1.3});let t=new Re;t.position.set(1.65,0,0),Un(t,.42,.85,16758127,[0,.05,0],null,{glow:.4}),Un(t,.18,.5,16768157,[-.28,.55,0],[0,0,-.35],{glow:.8}),Un(t,.18,.5,16768157,[.28,.55,0],[0,0,.35],{glow:.8}),Pe(t,.16,16770726,[0,-.65,0],{glow:1.8}),i.add(t);let n=[],s=[7919871,16765580,11707135],r=ns(77);for(let a=0;a<18;a+=1){let o=Pe(i,.07,s[a%3],[-2.8+r()*5.6,-1.8+r()*3.6,-.7+r()*1.4],{glow:1.5,segments:10,rings:8});n.push({mesh:o,x:o.position.x,z:o.position.z,phase:r()*je,speed:.3+r()*.6})}return i.userData.update=a=>{n.forEach((o,c)=>{let l=-1.8+(a*o.speed+o.phase)%(Math.PI*2)/(Math.PI*2)*3.6;o.mesh.position.set(o.x+Math.sin(a*.5+c)*.12,l,o.z),o.mesh.material.emissiveIntensity=1.2+Math.sin(a*2+c)*.5}),t.children[1].rotation.z=-.35+Math.sin(a*.9)*.08,t.children[2].rotation.z=.35-Math.sin(a*.9)*.08},de(i,"\u901A\u9053\u86CB\u767D",[-1.65,1.15,.2],"CHANNEL"),de(i,"Na\u207A/K\u207A \u6CF5",[1.7,1.55,.2],"P-TYPE PUMP"),de(i,"3 Na\u207A \u51FA",[2.65,1.05,.25],"3 Na\u207A OUT"),de(i,"2 K\u207A \u5165",[2.65,-.95,.25],"2 K\u207A IN"),de(i,"1 ATP",[2.55,-1.45,.35],"ENERGY"),de(i,"\u819C\u7535\u4F4D",[3.1,-.4,.4],"MEMBRANE POTENTIAL"),de(i,"\u7EC6\u80DE\u5916",[-2.9,1.55,.1],"EXTRACELLULAR"),de(i,"\u7EC6\u80DE\u8D28",[-2.9,-1.6,.1],"CYTOPLASM"),i}function yy(){let i=new Re;i.userData.distance=12.6,Zt(i,[[-3,.2,.1],[-2.4,.9,-.3],[-1.7,.2,.4],[-2.2,-.6,-.2],[-3,-.7,.3],[-3.35,0,-.1],[-2.8,.45,.5],[-2.2,1,0]],.075,7661272,{glow:.9,segments:110});for(let r=0;r<12;r+=1)Pe(i,.045,10158047,[-2.9+r%4*.34,.55+r%3*.24,-.25+r%2*.4],{glow:1.2,segments:8,rings:6});for(let r=0;r<5;r+=1)he(new Ie(1.02-r*.07,.9-r*.06,.1,36),Ye(16757870,{transparent:!0,opacity:.82}),[.35,.8-r*.2,0],[.15,0,.06],i),ht(i,.86-r*.06,.035,16765853,[.35,.86-r*.2,0],[Math.PI/2,0,.06],{transparent:!0,opacity:.55});let t=new Sn([new R(-1.3,.1,.25),new R(-.7,.45,.1),new R(.9,-.1,.45),new R(2.25,.15,.1)]),n=[];for(let r=0;r<7;r+=1){let a=Pe(i,.14+r%2*.035,r%2?16764804:9433569,[0,0,0],{glow:.9,segments:14,rings:10});n.push({mesh:a,offset:r/7});for(let o=0;o<5;o+=1){let c=o/5*je;Pe(a,.025,12386281,[Math.cos(c)*.17,Math.sin(c)*.14,Math.cos(c*2)*.1],{glow:.35,segments:6,rings:4})}}let s=Pe(i,.72,12942079,[2.65,.05,.1],{glass:!0,opacity:.42});s.material=Jt(12942079,.38);for(let r=0;r<16;r+=1){let a=r/16*je;Pe(i,.045,16766090,[2.65+Math.cos(a)*.45,.05+Math.sin(a*2)*.32,.1+Math.sin(a)*.38],{glow:1.1,segments:8,rings:6})}return i.userData.update=r=>{n.forEach(a=>{let o=(a.offset+r*.035)%1,c=t.getPoint(o);a.mesh.position.copy(c),a.mesh.material.emissiveIntensity=.7+Math.sin(r*2.5+a.offset*8)*.3})},de(i,"\u5185\u8D28\u7F51",[-2.7,1.45,.2],"ENDOPLASMIC RETICULUM"),de(i,"\u9AD8\u5C14\u57FA\u4F53",[.35,1.25,.1],"GOLGI APPARATUS"),de(i,"\u987A\u9762 / \u53CD\u9762",[.35,1.78,.1],"CIS / TRANS"),de(i,"\u8F6C\u8FD0\u819C\u6CE1",[.95,-.95,.5],"TRANSPORT VESICLE"),de(i,"COPI / COPII",[1.45,-.38,.55],"COATOMER"),de(i,"\u6EB6\u9176\u4F53",[2.65,-.95,.2],"LYSOSOME"),i}function _y(){let i=new Re;i.userData.distance=12;let e=new Re;e.position.set(-2.25,.1,0),Un(e,1.05,1.35,16754533,[0,0,0],[0,0,.05],{glass:!0,opacity:.12}),Un(e,.88,1.08,16765071,[0,0,0],[0,0,.05],{glass:!0,opacity:.12});for(let l=0;l<7;l+=1){let u=-.85+l*.28,d=[];for(let h=0;h<12;h+=1){let f=h/11;d.push([-.62+f*1.24,u+Math.sin(f*je*1.4+l)*.09,Math.sin(f*je+l*.5)*.38])}Zt(e,d,.035,16757870,{glow:.45,segments:46})}for(let l=0;l<18;l+=1){let u=l/18*je;Pe(e,.035,16769186,[Math.cos(u)*1.08,-1.1+l%7*.32,Math.sin(u)*.38],{glow:.8,segments:7,rings:5})}for(let l=0;l<7;l+=1){let u=l/7*je;Un(e,.04,.16,16768410,[Math.cos(u)*.9,-1+l%4*.55,Math.sin(u)*.32],[0,0,0],{glow:.45})}let t=[];for(let l=0;l<20;l+=1){let u=l/19*je;t.push([Math.cos(u)*.38,.3+Math.sin(u*2)*.18,Math.sin(u)*.22])}Zt(e,t,.025,11141083,{glow:.5,segments:50}),i.add(e);let n=new Re;n.position.set(.72,.38,.62),n.rotation.set(.15,-.2,.12),ht(n,.2,.03,7861730,[0,0,0],[Math.PI/2,0,0],{glow:.9,transparent:!0,opacity:.82}),ht(n,.12,.018,16765326,[0,0,0],[Math.PI/2,0,0],{glow:.65,transparent:!0,opacity:.75}),he(new Ie(.045,.045,.2,12),Ye(12910578,{metalness:.25,emissive:2322276,emissiveIntensity:.5}),[0,.14,0],null,n);let s=new Re;s.position.y=.3,ht(s,.14,.028,16761461,[0,0,0],[Math.PI/2,0,0],{glow:.8,transparent:!0,opacity:.8});let r=[];for(let l=0;l<3;l+=1){let u=l/3*je;Pe(s,.04,16769188,[Math.cos(u)*.13,0,Math.sin(u)*.13],{glow:1.1,segments:8,rings:6});let d=Pe(s,.032,9435135,[Math.cos(u)*.19,0,Math.sin(u)*.19],{glow:.9,segments:7,rings:5});r.push({mesh:d,phase:l/3})}n.add(s),he(new Ie(.08,.11,.08,16),Ye(16765071,{metalness:.3,emissive:9063448,emissiveIntensity:.5}),[0,.38,0],null,n),Zt(e,[[.72,.36,.62],[.7,.66,.64],[.68,.98,.66]],.012,16765562,{glow:.5,transparent:!0,opacity:.26,segments:24}),e.add(n),Zt(e,[[.82,.98,.72],[.76,.62,.66],[.72,.3,.62],[.68,0,.58]],.012,9435135,{glow:.45,transparent:!0,opacity:.42,segments:36});let a=[],o=[];for(let l=0;l<10;l+=1){let u=Pe(e,.038,9435135,[.79,.9,.68],{glow:1,segments:8,rings:6});a.push({mesh:u,phase:l/10})}for(let l=0;l<10;l+=1){let u=Pe(e,.065,16764786,[.72,.4,.62],{glow:1.2,segments:10,rings:7});o.push({mesh:u,phase:l/10})}de(i,"ATP \u5408\u9176",[-1.5,1.2,.85],"ATP SYNTHASE"),de(i,"H\u207A \u56DE\u6D41",[-1.45,.28,.82],"H\u207A FLOW"),de(i,"F\u2081 \u4E09\u6B65\u65CB\u8F6C",[-.72,1.02,.8],"F\u2081 \xB7 120\xB0 STEPS"),de(i,"ADP + Pi \u2192 ATP",[-1.15,-1.12,.72],"ATP SYNTHESIS");let c=new Re;c.position.set(2.15,.05,0),he(new bt(1.55,44,30),Jt(6543777,.13),null,null,c,[1.15,1.28,.86]),he(new bt(1.58,24,16),new St({color:9106105,wireframe:!0,transparent:!0,opacity:.055}),null,null,c,[1.15,1.28,.86]);for(let l=0;l<3;l+=1){let u=-.55+l*.56;for(let d=0;d<5;d+=1)he(new Ie(.43,.43,.035,28),Ye(6083724,{emissive:1527088,emissiveIntensity:.22,transparent:!0,opacity:.9}),[u,-.55+d*.17,.05],[.12,.3,-.18],c);for(let d=0;d<5;d+=1)ht(c,.4,.022,12779474,[u,-.55+d*.17,.05],[Math.PI/2+.12,.3,-.18],{transparent:!0,opacity:.28})}for(let l=0;l<3;l+=1)Zt(c,[[-.7+l*.5,-.4,-.4],[-.35+l*.5,.1,.2],[0+l*.3,.55,.35]],.022,11138491,{glow:.25,transparent:!0,opacity:.45,segments:30});Pe(c,.28,16773575,[.75,-.55,.2],{glass:!0,opacity:.38});for(let l=0;l<4;l+=1){let u=he(new Hi(.55,3.4,12,1,!0),new St({color:16771496,transparent:!0,opacity:.018,side:Xt,depthWrite:!1}),[2.1+l*.1,1.9,.2],[.2,0,-.45],i);u.renderOrder=-1}return i.add(c),i.userData.update=l=>{e.rotation.z=Math.sin(l*.25)*.03,c.rotation.y=Math.sin(l*.22)*.08,s.rotation.y=l*1.7,r.forEach(({mesh:u,phase:d})=>{u.material.emissiveIntensity=.6+Math.sin(l*3+d*je)*.55,u.scale.setScalar(.85+Math.sin(l*3+d*je)*.25)}),a.forEach(({mesh:u,phase:d})=>{let h=((l*.26+d)%1+1)%1;u.position.set(.82-h*.14,.98-h*1.02,.72-h*.14),u.scale.setScalar(.65+Math.sin(h*Math.PI)*.5)}),o.forEach(({mesh:u,phase:d})=>{let h=((l*.34+d)%1+1)%1;u.position.set(.72+Math.sin(h*je+d)*.06,.3+h*.78,.62+h*.05),u.scale.setScalar(.7+Math.sin(h*Math.PI)*.45),u.material.opacity=.35+Math.sin(h*Math.PI)*.6})},de(i,"\u7EBF\u7C92\u4F53",[-2.25,1.85,.2],"MITOCHONDRION"),de(i,"\u5D74",[-2.55,.82,.55],"CRISTAE"),de(i,"\u53F6\u7EFF\u4F53",[2.15,2.25,.2],"CHLOROPLAST"),de(i,"\u7C7B\u56CA\u4F53 / \u57FA\u7C92",[2.8,-.9,.6],"THYLAKOID / GRANA"),i}function by(){let i=new Re;i.userData.distance=12.2,((s,r,a,o,c,l)=>{for(let u of[0,Math.PI]){let d=[];for(let h=0;h<=40;h+=1){let f=h/40,g=-3+f*6,M=f*je*l+u;d.push([g,s+Math.cos(M)*o,Math.sin(M)*o])}Zt(i,d,a,r,{glow:.65,segments:120})}})(1.25,6875867,.07,.23,6,7);for(let s=0;s<9;s+=1){let r=-2.7+s*.65;Pe(i,.055,11075568,[r,1.25+Math.sin(s*1.7)*.23,Math.cos(s*1.7)*.23],{glow:.35,segments:8,rings:6})}for(let s=0;s<5;s+=1)Pe(i,.12,16761965,[-2.2+s*1.1,1.5+s%2*.12,.25],{glow:1.1,segments:12,rings:8});he(new Ie(.28,.28,6,28,1,!0),Jt(8177919,.24),[0,-.55,0],[0,0,Math.PI/2],i);for(let s=0;s<7;s+=1)ht(i,.28,.025,11001855,[-2.7+s*.9,-.55,0],[0,Math.PI/2,0],{transparent:!0,opacity:.55});for(let s=0;s<3;s+=1){let r=[];for(let a=0;a<30;a+=1){let o=a/29,c=o*je*1.2+s;r.push([-2.8+o*5.6,-.55+Math.cos(c)*.26,Math.sin(c)*.26])}Zt(i,r,.018,12118271,{glow:.3,transparent:!0,opacity:.5,segments:60})}for(let s=0;s<5;s+=1)Zt(i,[[-1.2+s*.6,.75,.1],[-1.15+s*.6,.1,.2],[-1.1+s*.6,-.45,.1]],.015,16763277,{glow:.3,transparent:!0,opacity:.55,segments:12});for(let s=0;s<4;s+=1)Pe(i,.1,10194175,[-1.9+s*1.2,-.32,.3],{glow:1.2,segments:12,rings:8});for(let s=0;s<3;s+=1){let r=[];for(let a=0;a<=38;a+=1){let o=a/38,c=-3+o*6,l=o*je*4+s/3*je;r.push([c,-1.75+Math.cos(l)*.18,Math.sin(l)*.18])}Zt(i,r,.045,s===1?16752585:12046289,{glow:.5,segments:110})}let t=[],n=[16765806,16765806,16752585];for(let s=0;s<3;s+=1){let r=new Re;r.position.set(-2.2+s*1.5,-.55,.28),Pe(r,.1,n[s],[0,0,0],{glow:1.3,segments:12,rings:8}),Un(r,.035,.16,n[s],[-.08,.12,0],[0,0,-.45],{glow:.8}),Un(r,.035,.16,n[s],[.08,.12,0],[0,0,.45],{glow:.8}),Pe(r,.045,16773309,[0,.16,0],{glow:.7,segments:8,rings:5}),i.add(r),t.push({group:r,phase:s/3,speed:.1+s*.012,direction:s===2?-1:1})}return de(i,"\u5FAE\u4E1D",[-2,2.05,.4],"ACTIN FILAMENT \xB7 7 nm"),de(i,"\u5FAE\u7BA1",[-1.6,-.98,.55],"MICROTUBULE \xB7 24 nm"),de(i,"\u4E2D\u95F4\u4E1D",[2.2,-1.35,.4],"INTERMEDIATE FILAMENT \xB7 10 nm"),de(i,"\u5206\u5B50\u9A6C\u8FBE",[1.3,1.55,.45],"MOLECULAR MOTOR"),de(i,"\u9A71\u52A8\u86CB\u767D \u2192",[1.25,.05,.55],"KINESIN \xB7 + END"),de(i,"\u52A8\u529B\u86CB\u767D \u2190",[-1.8,-.18,.55],"DYNEIN \xB7 \u2212 END"),i.userData.update=s=>{t.forEach(({group:r,phase:a,speed:o,direction:c})=>{let l=((s*o+a)%1+1)%1;r.position.x=c>0?-2.85+l*5.7:2.85-l*5.7,r.position.y=-.55+Math.sin(l*je*4+a)*.035,r.rotation.z=c>0?.05:-.05})},i}function My(){let i=new Re;i.userData.distance=11.6,he(new bt(2.2,52,36),Jt(12162815,.13),null,null,i),he(new bt(2.23,26,18),new St({color:13942783,wireframe:!0,transparent:!0,opacity:.07}),null,null,i),he(new bt(2.08,24,16),new St({color:16762602,wireframe:!0,transparent:!0,opacity:.035}),null,null,i);let e=ns(404);for(let l=0;l<14;l+=1){let u=e()*je,d=Math.acos(2*e()-1),h=[Math.cos(u)*Math.sin(d)*2.21,Math.cos(d)*2.21,Math.sin(u)*Math.sin(d)*2.21];ht(i,.12,.03,16765681,h,[0,0,0],{glow:.3,transparent:!0,opacity:.5}).lookAt(0,0,0),Pe(i,.028,16769783,h,{glow:.35,segments:7,rings:5})}let t=new R(.58,.32,.75).normalize(),n=new Re;n.position.copy(t.clone().multiplyScalar(2.2)),n.quaternion.setFromUnitVectors(new R(0,0,1),t),ht(n,.38,.03,9428223,[0,0,0],[0,0,0],{glow:.9,transparent:!0,opacity:.82}),ht(n,.24,.022,16762602,[0,0,0],[0,0,0],{glow:.55,transparent:!0,opacity:.68}),ht(n,.46,.008,13170687,[0,0,0],[0,0,0],{glow:.35,transparent:!0,opacity:.28});let s=new Re;for(let l=0;l<8;l+=1){let u=l/8*je;he(new Ie(.018,.018,.27,6),Ye(13169919,{transparent:!0,opacity:.78,emissive:3115936,emissiveIntensity:.5}),[Math.cos(u)*.3,Math.sin(u)*.3,0],[0,0,u-Math.PI/2],s),Pe(s,.045,10284287,[Math.cos(u)*.37,Math.sin(u)*.37,0],{glow:.8,segments:8,rings:5})}he(new Ie(.085,.085,.3,16,1,!0),Jt(10217727,.32),[0,0,0],[Math.PI/2,0,0],n),Pe(n,.06,16765681,[0,0,0],{glow:.8,segments:12,rings:8}),n.add(s);let r=[];for(let l=0;l<4;l+=1){let u=l/4*je+.4,d=l%2===1,h=Pe(n,.055,d?16761466:7727359,[Math.cos(u)*.11,Math.sin(u)*.11,d?.52:-.52],{glow:1.15,segments:10,rings:7});r.push({mesh:h,phase:l/4,speed:.32+l%2*.12,dir:d?1:-1})}i.add(n);let a=ns(505);for(let l=0;l<14;l+=1){let u=a()*je,d=Math.acos(2*a()-1),h=.9+a()*.85;Pe(i,.032,8257476,[Math.cos(u)*Math.sin(d)*h,Math.cos(d)*h,Math.sin(u)*Math.sin(d)*h],{glow:.75,segments:7,rings:5})}let o=new R(-t.y,t.x,0).normalize(),c=new R().crossVectors(t,o).normalize();for(let l=0;l<8;l+=1){let u=n.position.clone().addScaledVector(t,.3+a()*.35).addScaledVector(o,(a()-.5)*.8).addScaledVector(c,(a()-.5)*.8);Pe(i,.032,16757611,[u.x,u.y,u.z],{glow:.8,segments:7,rings:5})}for(let l=0;l<5;l+=1){let u=[];for(let d=0;d<22;d+=1){let h=d/21,f=h*je*1.3+l;u.push([Math.cos(f)*(.4+h*1.2)+(l-2)*.18,(h-.5)*1.7+Math.sin(h*je+l)*.22,Math.sin(f)*(.4+h*1.2)+(l%2?.3:-.25)])}Zt(i,u,.04,l%2?16754393:13284351,{glow:.3,segments:90})}for(let l=0;l<22;l+=1){let u=l/22*je,d=.35+l%5*.2;Pe(i,.06,16761061,[Math.cos(u)*d,Math.sin(u*1.8)*.75,Math.sin(u)*d],{glow:.45,segments:9,rings:6})}Pe(i,.58,16748483,[.45,-.2,.3],{glass:!0,opacity:.5});for(let l=0;l<8;l+=1){let u=l/8*je;Pe(i,.055,16769192,[.45+Math.cos(u)*.35,-.2+Math.sin(u*2)*.25,.3+Math.sin(u)*.35],{glow:.5,segments:8,rings:6})}for(let l=0;l<7;l+=1){let u=l/7*je;Pe(i,.09+l%3*.02,11631576,[Math.cos(u)*1.5,-1+l%3*.8,Math.sin(u)*1.2],{glass:!0,opacity:.38,segments:10,rings:7})}return Pe(i,.18,10283007,[-1.3,.75,.65],{glass:!0,opacity:.35}),de(i,"\u6838\u88AB\u819C",[-2.25,1.25,.4],"NUCLEAR ENVELOPE"),de(i,"\u6838\u5B54\u590D\u5408\u4F53",[1.65,1.55,.8],"NUCLEAR PORE COMPLEX"),de(i,"\u6838\u8D28\u4EA4\u6362",[1.72,.92,.9],"IMPORT / EXPORT"),de(i,"Ran-GTP \u68AF\u5EA6",[-1.35,-1.6,.8],"RAN-GTP GRADIENT"),de(i,"\u67D3\u8272\u8D28",[-.9,-.85,1.3],"CHROMATIN"),de(i,"\u6838\u4EC1",[.45,-.2,1],"NUCLEOLUS"),i.userData.update=l=>{s.rotation.z=l*.16,r.forEach(({mesh:u,phase:d,speed:h,dir:f})=>{let g=((l*h+d)%1+1)%1;u.position.z=f>0?-.56+g*1.12:.56-g*1.12,u.scale.setScalar(.8+Math.sin(g*Math.PI)*.4),u.material.opacity=.45+Math.sin(g*Math.PI)*.5})},i}function Sy(){let i=new Re;i.userData.distance=10.8;let e=[];for(let l=0;l<=60;l+=1){let u=l/60;e.push([-3.3+u*6.6,-.55+Math.sin(u*je*1.2)*.1,Math.cos(u*je)*.16])}Zt(i,e,.07,16757611,{glow:.35,segments:150});let t=[7923414,16762220,12756735,16749762];for(let l=0;l<26;l+=1){let u=l/25,d=e[Math.round(u*60)];Pe(i,.055,t[l%4],[d[0]+.04,d[1]+.11,d[2]],{glow:.45,segments:8,rings:6})}let n=new Re;n.position.set(.25,.55,0),he(new bt(1.08,40,28),Ye(6444980,{roughness:.42,transparent:!0,opacity:.88}),null,null,n,[1.15,.78,1]),he(new bt(1.09,24,14),new St({color:11905279,wireframe:!0,transparent:!0,opacity:.08}),null,null,n,[1.15,.78,1]),i.add(n);let s=new Re;s.position.set(.25,-.28,0),he(new bt(.95,36,24),Ye(4169112,{roughness:.45,transparent:!0,opacity:.9}),null,null,s,[1.1,.56,.9]),i.add(s);for(let l=0;l<10;l+=1){let u=l/10*je;Pe(n,.055,10457855,[Math.cos(u)*1.06,Math.sin(u*2)*.45,Math.sin(u)*.94],{transparent:!0,opacity:.7,segments:7,rings:5})}for(let l=0;l<8;l+=1){let u=l/8*je;Pe(s,.045,7660759,[Math.cos(u)*.96,Math.sin(u*2)*.3,Math.sin(u)*.82],{transparent:!0,opacity:.65,segments:7,rings:5})}for(let l=0;l<3;l+=1)ht(i,.14,.03,16769699,[-.22+l*.25,.05,.82],[0,0,0],{glow:1.2,transparent:!0,opacity:.7});let r=[];for(let l=0;l<2;l+=1){let u=-.5+l*.9,d=[[u,-.35,.1],[u-.12,.2,.55],[u+.05,.8,.75],[u+.35,1.05,.5]];Zt(i,d,.055,l?16754895:9431039,{glow:.4,segments:40}),Pe(i,.12,l?16752331:7659519,[u+.35,1.05,.5],{glow:.5,segments:12,rings:8})}let a=[];for(let l=0;l<20;l+=1){let u=l/19;a.push([1.15+Math.sin(u*je*1.2)*.28,1+u*1.5,.2+Math.cos(u*je)*.2])}Zt(i,a,.055,16765580,{glow:.4,segments:50});for(let l=0;l<8;l+=1){let u=l/8;Pe(i,.06,16760951,[1.15+Math.sin(u*je*1.2)*.28,1+u*1.5,.2+Math.cos(u*je)*.2],{glow:.5,segments:8,rings:6})}let o=Pe(i,.075,16765580,[1.15,2.55,.2],{glow:1.1,segments:12,rings:8}),c=[];for(let l=0;l<3;l+=1){let u=Pe(i,.055,l===1?16756950:9431039,[-.35+l*.34,.28,.86],{glow:.9,segments:9,rings:6});c.push({mesh:u,phase:l/3})}return i.userData.update=l=>{n.rotation.z=Math.sin(l*.35)*.015,s.rotation.z=-Math.sin(l*.35)*.01,o.position.y=2.5+Math.sin(l*.8)*.08,o.scale.setScalar(.85+Math.sin(l*.8)*.15),c.forEach(({mesh:u,phase:d},h)=>{let f=((l*.12+d)%1+1)%1;u.position.x=-.55+f*1,u.position.y=.18+Math.sin(f*Math.PI)*.18,u.position.z=.86+Math.sin(f*je+h)*.04})},de(i,"\u5927\u4E9A\u57FA",[.9,1.45,.4],"LARGE SUBUNIT"),de(i,"\u5C0F\u4E9A\u57FA",[-.45,-.9,.4],"SMALL SUBUNIT"),de(i,"mRNA",[-2.5,-.4,.4],"MESSENGER RNA"),de(i,"tRNA",[-.7,1.2,.6],"TRANSFER RNA"),de(i,"\u65B0\u751F\u80BD\u94FE",[1.8,1.8,.3],"POLYPEPTIDE"),de(i,"A / P / E \u4F4D\u70B9",[.55,.1,.95],"SITES"),de(i,"\u80BD\u952E\u5F62\u6210",[1.05,.55,1],"PEPTIDYL TRANSFER"),de(i,"mRNA 5\u2032\u21923\u2032",[-2.55,.4,.5],"TRANSLATION DIRECTION"),i}function Ey(){let i=new Re;i.userData.distance=12.4;for(let r of[-1.9,1.9])for(let a of[-.85,.85])he(new Ie(.2,.24,.18,18),Ye(860968,{metalness:.5}),[r,-2.05,a],null,i);st(i,4.7,.28,2.5,1522240,[0,-1.86,0],null,{metalness:.65,roughness:.32}),st(i,4.25,.12,2.2,2381404,[0,-1.68,0],null,{metalness:.55}),he(new Ie(.5,.55,.28,32),Ye(1058862,{metalness:.6}),[0,-1.5,0],null,i),he(new Ie(.34,.34,.16,32),Ye(9368319,{emissive:1997713,emissiveIntensity:.9}),[0,-1.33,0],null,i),Yf(i,.42,.08,10152703,[0,-1.18,0]),st(i,.5,3.15,.62,1919568,[-1.7,-.25,0],null,{metalness:.55,roughness:.35}),st(i,.72,.55,.62,1919568,[-1.35,1.2,0],null,{metalness:.55}),st(i,1,.34,.68,2182997,[0,1.02,0],null,{metalness:.5}),bs(i,.3,.14,2776419,[-2.02,-.15,.18],[0,0,Math.PI/2],8),bs(i,.24,.12,2776419,[-2.02,-.55,.18],[0,0,Math.PI/2],7),st(i,3.15,.14,1.95,1986646,[0,-.43,0],null,{metalness:.55}),st(i,1.9,.045,1,11137775,[0,-.33,.05],null,{glass:!0,opacity:.2}),st(i,1.4,.025,.62,13237503,[.05,-.3,.05],null,{glass:!0,opacity:.24}),st(i,.34,.045,.62,7051934,[-.75,-.3,.05],null,{metalness:.5}),st(i,.34,.045,.62,7051934,[.78,-.3,.05],null,{metalness:.5}),bs(i,.16,.1,4685186,[1.72,-.43,.55],[0,0,Math.PI/2],6),bs(i,.13,.09,4685186,[1.72,-.43,.18],[0,0,Math.PI/2],6);let e=ns(91);for(let r=0;r<24;r+=1){let a=-.55+e()*1.1,o=-.22+e()*.48,c=Pe(i,.04+e()*.022,r%4?6681261:16745405,[a,-.275,o],{glow:.6,segments:10,rings:7});c.scale.y=.55}he(new Ie(.38,.46,.3,28),Ye(2843240,{metalness:.55}),[0,-.72,0],null,i),ht(i,.4,.025,10155759,[0,-.58,0],[Math.PI/2,0,0],{transparent:!0,opacity:.55});for(let r=0;r<5;r+=1)ht(i,.34-r*.02,.01,8579300,[0,-.83+r*.035,0],[Math.PI/2,0,0],{transparent:!0,opacity:.28});let t=he(new Hi(.62,1.2,32,1,!0),new St({color:9103871,transparent:!0,opacity:.075,side:Xt,depthWrite:!1,blending:ot}),[0,-.95,0],[0,Math.PI,0],i);t.renderOrder=-1;let n=new Re;n.position.set(0,.22,0),he(new Ie(.62,.52,.18,32),Ye(2842469,{metalness:.6}),[0,0,0],null,n),ht(n,.55,.025,9300964,[0,-.09,0],[Math.PI/2,0,0],{transparent:!0,opacity:.45}),[{x:-.32,z:.2,len:.62,ring:6744028},{x:.3,z:.24,len:.48,ring:16757613},{x:.12,z:-.28,len:.78,ring:10463743}].forEach(r=>{he(new Ie(.14,.11,r.len,20),Ye(10139832,{metalness:.55}),[r.x,-.35,r.z],[0,0,0],n),ht(n,.15,.018,r.ring,[r.x,-.35-r.len/2,r.z],[Math.PI/2,0,0],{glow:.5,transparent:!0,opacity:.75})}),i.add(n),he(new Ie(.26,.3,1.25,28),Ye(2842469,{metalness:.55}),[0,1.65,0],null,i),st(i,.95,.32,.7,1853004,[0,2.28,0],null,{metalness:.5});for(let r of[-.28,.28])he(new Ie(.16,.18,.62,22),Ye(2907234,{metalness:.5}),[r,2.56,-.02],[.12,0,r>0?-.14:.14],i),Yf(i,.13,.045,8839167,[r,2.88,-.04]);he(new Ie(.2,.24,.42,22),Ye(1918282,{metalness:.55}),[0,2.2,-.48],[Math.PI/2,0,0],i),he(new Ie(.14,.14,.08,20),Ye(6806757,{emissive:1925488,emissiveIntensity:.4}),[0,2.2,-.72],[Math.PI/2,0,0],i),st(i,1.1,.78,.9,1853004,[1.25,.45,.72],null,{transparent:!0,opacity:.62}),st(i,.78,.035,.55,10325247,[1.25,.45,.72],[0,0,.72],{glow:.5,transparent:!0,opacity:.68});for(let r=0;r<3;r+=1)he(new Ie(.045,.045,.94,8),Ye(r===0?6088191:16748231,{emissive:r===0?1331812:6297659,emissiveIntensity:.45}),[1.1+r*.14,1.02,.72],[.28,0,.25],i);Zf(i,.05,1.15,6482431,[1.25,.12,.42],[.5,0,.25],.22),Zf(i,.07,1.28,16752585,[1.25,1.12,.42],[-.35,0,-.25],.18);for(let r=0;r<8;r+=1){let a=r/8*je;he(new Ie(.035,.035,.035,8),Ye(8956328,{metalness:.7}),[Math.cos(a)*1.95,-1.69,Math.sin(a)*.9],[Math.PI/2,0,0],i)}return de(i,"\u5149\u6E90 / \u89C6\u573A\u5149\u9611",[-1.25,-1.42,.55],"LIGHT SOURCE"),de(i,"\u805A\u5149\u955C / \u8F7D\u7269\u53F0",[1.05,-.38,.65],"CONDENSER / STAGE"),de(i,"\u7269\u955C\u8F6C\u76D8",[-.82,.22,.48],"NOSEPIECE"),de(i,"\u8367\u5149\u6EE4\u5757",[1.65,.75,.65],"FILTER CUBE"),de(i,"\u76EE\u955C / \u76F8\u673A",[0,2.95,.1],"EYEPIECE / CAMERA"),de(i,"\u6837\u54C1 / \u8367\u5149\u6807\u8BB0",[0,.12,.72],"SAMPLE"),i.userData.update=r=>{t.material.opacity=.055+Math.sin(r*2)*.018},i}function wy(){let i=new Re;i.userData.distance=12.8;for(let n of[-1.7,1.7])for(let s of[-1,1])he(new Ie(.18,.22,.18,16),Ye(726056,{metalness:.5}),[n,-2.05,s],null,i);st(i,4.2,.32,2.7,1318202,[0,-1.86,0],null,{metalness:.6}),st(i,3.6,.2,2.2,2108752,[0,-1.66,0],null,{metalness:.5}),Pa(i,1.3,.6,7336662,[.75,-1.15,1.18],[.05,0,0]);for(let n=0;n<3;n+=1)bs(i,.12,.08,7508152,[-.65+n*.36,-1.24,1.2],[Math.PI/2,0,0],5);st(i,1.3,.08,.35,660520,[-.62,-1.43,1.16],null,{metalness:.4}),he(new Ie(1.05,1.12,4.9,40,1,!0),Jt(8886527,.07),[0,.45,0],null,i);let e=he(new Ie(1,1,4.6,40,1,!0),new St({color:9215720,wireframe:!0,transparent:!0,opacity:.055}),[0,.45,0],null,i);e.renderOrder=3;for(let n=0;n<5;n+=1){let s=-1.5+n*1.05;he(new Ie(1.08,1.08,.12,40),Ye(2898528,{metalness:.65}),[0,s,0],null,i),ht(i,1.06,.035,10466559,[0,s,0],[Math.PI/2,0,0],{transparent:!0,opacity:.4})}he(new Ie(.34,.48,.68,28),Ye(6387888,{metalness:.55}),[0,3.48,0],null,i),he(new Ie(.16,.26,.36,20),Ye(2110048,{metalness:.6}),[0,3.9,0],null,i),Pe(i,.11,14148351,[0,3.62,0],{glow:1.2,segments:12,rings:8}),ht(i,.5,.04,11715583,[0,3.12,0],[Math.PI/2,0,0],{glow:.6}),ht(i,.66,.035,7374279,[0,2.55,0],[Math.PI/2,0,0],{transparent:!0,opacity:.5});for(let n=0;n<3;n+=1){let s=he(new Ie(.48,.48,.025,28),Ye(3754876,{metalness:.4}),[0,2.18-n*.62,0],null,i);Pe(i,.055,9428991,[0,2.18-n*.62+.018,0],{glow:.6,segments:8,rings:5}),s.renderOrder=1}for(let n=0;n<5;n+=1)ht(i,.74,.025,9677567,[0,1.62-n*.11,0],[Math.PI/2,0,0],{transparent:!0,opacity:.5});he(new Ie(.22,.22,.9,20),Jt(11846911,.2),[1.55,.38,0],[0,0,Math.PI/2],i),he(new Ie(.28,.28,.32,20),Ye(3031148,{metalness:.6}),[1.15,.38,0],[0,0,Math.PI/2],i),st(i,1.8,.06,1.15,2569050,[0,.06,0],null,{metalness:.55});for(let n=0;n<5;n+=1)Pe(i,.045,11070207,[-.48+n*.22,.13,-.1+n%2*.22],{glow:.7,segments:8,rings:5});he(new Ie(.62,.74,.32,28),Ye(2109272,{metalness:.55}),[0,-.82,0],null,i),ht(i,.62,.04,8626431,[0,-.98,0],[Math.PI/2,0,0],{transparent:!0,opacity:.55}),st(i,1.65,.1,1.25,1120822,[0,-1.35,.08],null,{metalness:.5}),Pa(i,1.25,.85,5238963,[0,-1.26,.42],[Math.PI/2,0,0]),he(new Ie(.35,.42,1,24),Ye(2769248,{metalness:.5}),[-1.65,-.75,.15],null,i),ht(i,.4,.05,6719400,[-1.65,-.3,.15],[Math.PI/2,0,0],{transparent:!0,opacity:.5}),Zt(i,[[-1.65,-1.05,.1],[-1.3,-1.3,.1],[-.4,-1.5,.1]],.055,3495279,{metalness:.5,segments:20});let t=he(new Ie(.028,.1,4.5,16),new St({color:11188479,transparent:!0,opacity:.3,blending:ot,depthWrite:!1}),[0,1,0],null,i);return de(i,"\u7535\u5B50\u67AA / \u706F\u4E1D",[0,4.15,.2],"ELECTRON GUN"),de(i,"\u9633\u6781 / \u5149\u9611",[-.95,2.75,.35],"ANODE / APERTURE"),de(i,"\u7535\u78C1\u900F\u955C",[-1.2,1.25,.35],"MAGNETIC LENS"),de(i,"\u6837\u54C1\u6746",[1.6,1,.3],"SPECIMEN HOLDER"),de(i,"\u89C2\u5BDF\u5C4F / \u76F8\u673A",[0,-1.75,.55],"VIEWING SCREEN"),de(i,"\u63A7\u5236\u53F0",[.7,-1,1.35],"CONTROL CONSOLE"),i.userData.update=n=>{t.material.opacity=.22+Math.sin(n*4.2)*.06},i}function Ty(){let i=new Re;i.userData.distance=11.8;for(let n of[-2,2])for(let s of[-1.1,1.1])he(new Ie(.18,.23,.2,16),Ye(794660,{metalness:.5}),[n,-2.1,s],null,i);st(i,5.3,.34,3.7,1321777,[0,-1.9,0],null,{metalness:.6}),st(i,4.8,.16,3.2,2311757,[0,-1.7,0],null,{metalness:.5}),st(i,2.65,.9,.38,1059633,[0,-1.12,1.55],null,{metalness:.55}),Pa(i,1.15,.42,7337429,[-.45,-1.02,1.76],[.04,0,0]),bs(i,.16,.1,5014153,[.85,-1,1.78],[Math.PI/2,0,0],6),bs(i,.11,.08,5014153,[1.15,-1,1.78],[Math.PI/2,0,0],5),st(i,.75,.14,.05,2981752,[.55,-1.18,1.75],null,{glow:.5}),he(new Ie(2.85,3,.85,64,1,!0),Jt(8119516,.08),[0,-.65,0],null,i),ht(i,2.85,.06,6003102,[0,-.24,0],[Math.PI/2,0,0],{metalness:.6,transparent:!0,opacity:.6}),ht(i,2.95,.05,6003102,[0,-1.02,0],[Math.PI/2,0,0],{metalness:.6,transparent:!0,opacity:.55}),he(new Ie(2.6,2.6,.08,64,1,!0),Jt(10351848,.1),[0,0,0],null,i),he(new cn(2.55,.035,8,72),Ye(8382167,{transparent:!0,opacity:.5,emissive:2060393,emissiveIntensity:.4}),[0,.01,0],[Math.PI/2,0,0],i),he(new Ie(.18,.18,.25,16),Ye(5144453,{metalness:.5}),[0,.2,0],null,i);let e=new Re;e.position.y=.05,he(new Ie(.52,.62,.55,32),Ye(4156531,{metalness:.65,roughness:.3}),[0,0,0],null,e),ht(e,.53,.05,9234137,[0,.25,0],[Math.PI/2,0,0],{transparent:!0,opacity:.55});let t=[];for(let n=0;n<6;n+=1){let s=new Re;s.rotation.y=n/6*je,st(s,1.75,.11,.42,3497316,[.95,.06,0],null,{metalness:.6});for(let o of[-.24,.24])he(new Ie(.055,.055,.18,10),Ye(11989476,{metalness:.55}),[1.55,.04,o],[Math.PI/2,0,0],s);let r=new Re;r.position.set(1.65,.1,0),r.rotation.z=-.82,he(new Ie(.24,.2,1.55,24,1,!0),Jt(13038828,.24),[0,.36,0],null,r),he(new Ie(.26,.24,.16,24),Ye(6065297,{metalness:.55}),[0,1.17,0],null,r),ht(r,.24,.025,12124146,[0,1.27,0],[Math.PI/2,0,0],{transparent:!0,opacity:.55});let a=[8378367,16757870,10482352];for(let o=0;o<3;o+=1)he(new Ie(.18,.18,.28,18),Ye(a[o],{transparent:!0,opacity:.78,emissive:a[o],emissiveIntensity:.1}),[0,.48-o*.3,0],null,r);he(new Ie(.13,.15,.1,14),Ye(14090227,{glow:.25}),[0,-.37,0],null,r),s.add(r),e.add(s),t.push(r)}return i.add(e),de(i,"\u8F6C\u5B50 / \u540A\u6876",[-1.9,1.25,.3],"ROTOR / BUCKET"),de(i,"\u5BC6\u5EA6\u68AF\u5EA6",[2.25,1,.45],"DENSITY GRADIENT"),de(i,"\u7EC6\u80DE\u6838\u6C89\u6DC0",[2.05,.35,.45],"NUCLEAR PELLET"),de(i,"\u7EBF\u7C92\u4F53 / \u5FAE\u7C92\u4F53",[2.35,-.4,.3],"ORGANELLES"),de(i,"\u8F6C\u901F\u63A7\u5236",[-1.65,-1.1,1.8],"SPEED CONTROL"),i.userData.update=n=>{e.rotation.y=n*1.15,t.forEach((s,r)=>{s.rotation.z=-.82-Math.sin(n*2.2+r)*.018})},i}function Ay(){let i=new Re;i.userData.distance=11.2,st(i,5.6,.18,3.2,794660,[0,-1.28,0],null,{metalness:.45}),st(i,4.6,.12,2.5,1586746,[0,-1.16,0],null,{metalness:.35}),st(i,4.2,.14,2.35,7457216,[0,-1.05,0],null,{glass:!0,opacity:.22}),st(i,4.05,1.85,2.2,10282972,[0,0,0],null,{glass:!0,opacity:.075}),st(i,4.05,.09,2.2,9102039,[0,.92,0],null,{glass:!0,opacity:.16});for(let s of[-2.02,2.02])for(let r of[-1.1,1.1])st(i,.07,1.95,.07,8902349,[s,-.05,r],null,{transparent:!0,opacity:.4});for(let s of[-1.1,1.1])st(i,4.05,.07,.07,8902349,[0,.92,s],null,{transparent:!0,opacity:.4});he(new Ie(.3,.4,1.1,28),Jt(12189683,.15),[2.25,.88,0],[0,0,-.56],i),he(new Ie(.38,.35,.28,28),Ye(2846057,{metalness:.35}),[2.75,1.2,0],[0,0,-.56],i);let e=new Re;e.position.set(2.88,1.27,0),e.rotation.z=-.56,he(new Ie(.39,.39,.32,28),Ye(7322288,{metalness:.35}),[0,0,0],null,e);for(let s=0;s<8;s+=1)ht(e,.39,.012,13828084,[0,-.12+s*.033,0],[Math.PI/2,0,0],{transparent:!0,opacity:.35});he(new Ie(.16,.16,.06,20),Ye(2709845,{metalness:.45}),[0,.18,0],null,e),i.add(e);for(let s=0;s<7;s+=1)st(i,.12,.025,.02,13107189,[-1.7+s*.18,-.3,1.12],null,{transparent:!0,opacity:.45}),st(i,.12,.025,.02,13107189,[-1.7+s*.18,-.52,1.12],null,{transparent:!0,opacity:.45});st(i,3.9,.48,2.05,1863016,[0,-.68,0],null,{transparent:!0,opacity:.23}),st(i,3.9,.025,2.05,9434594,[0,-.43,0],null,{transparent:!0,opacity:.18});let t=ns(222);for(let s=0;s<18;s+=1)Pe(i,.022+t()*.02,13238259,[-1.7+t()*3.4,-.36+t()*.22,-.85+t()*1.7],{glow:.2,segments:7,rings:5});for(let s=0;s<62;s+=1){let r=-1.65+t()*3.3,a=-.82+t()*1.64,o=-.91+(t()-.5)*.022,c=Pe(i,.07+t()*.035,s%5===0?16755413:7924401,[r,o,a],{glow:.25,segments:12,rings:8});if(c.scale.y=.5,Pe(i,.026,7059880,[r,o+.035,a],{glow:.15,segments:7,rings:5}),s%9===0){let l=r+.12,u=Pe(i,.065,9433789,[l,o+.01,a+.05],{glow:.22,segments:10,rings:7});u.scale.y=.5}}for(let s=0;s<7;s+=1)Pe(i,.05,10148036,[-1.2+t()*2.4,-.28+t()*.8,-.4+t()*.8],{glow:.18,segments:8,rings:6});let n=new Re;return n.position.set(-1.15,1.9,.25),n.rotation.z=.3,he(new Ie(.055,.09,2,16),Ye(12906472,{transparent:!0,opacity:.6}),[0,0,0],null,n),Pe(n,.28,10347479,[0,.95,0],{glass:!0,opacity:.35,segments:20,rings:14}),he(new Ie(.09,.055,.22,14),Ye(14090228,{transparent:!0,opacity:.65}),[0,-1.1,0],null,n),Pe(n,.065,10352101,[0,-1.28,0],{glow:.55,segments:10,rings:7}),i.add(n),de(i,"T \u57F9\u517B\u74F6",[-1.7,1.15,.5],"T-FLASK"),de(i,"\u6EE4\u819C\u76D6",[2.85,1.65,.2],"FILTER CAP"),de(i,"\u57F9\u517B\u57FA / \u6DB2\u9762",[.35,-.3,.8],"MEDIUM / MENISCUS"),de(i,"\u8D34\u58C1\u7EC6\u80DE\u5355\u5C42",[-.8,-1.05,.5],"CELL MONOLAYER"),de(i,"\u79FB\u6DB2\u7BA1 / \u65E0\u83CC\u64CD\u4F5C",[-1.6,2.35,.3],"PIPETTE / STERILE"),i.userData.update=s=>{n.position.y=1.9+Math.sin(s*.5)*.02},i}function Cy(){let i=new Re;i.userData.distance=11,st(i,6.1,.2,3.1,729125,[0,-1.35,0],null,{metalness:.45}),st(i,4.8,.06,2.4,9296851,[0,-1.17,0],null,{glass:!0,opacity:.16}),st(i,4.8,.03,2.4,12910583,[0,-1.13,0],null,{glass:!0,opacity:.1}),he(new bt(2,56,34),Jt(6412478,.14),[0,-.72,0],null,i,[1.35,.3,1]),ht(i,2,.025,8843223,[0,-.72,0],[Math.PI/2,0,0],{transparent:!0,opacity:.35}),he(new bt(.48,32,20),Ye(11898111,{transparent:!0,opacity:.68}),[-.58,-.62,.02],null,i),Pe(i,.19,16755672,[-.58,-.62,.02],{glow:.35,segments:16,rings:10});let e=ns(781),t=[];for(let u=0;u<120;u+=1){let d=e()*je,h=.55+Math.sqrt(e())*1.25,f=Pe(i,.022+e()*.018,8257490,[Math.cos(d)*h,-.48+e()*.055,Math.sin(d)*h*.72],{glow:.5,segments:7,rings:5});t.push(f)}let n=new Re;n.position.set(.72,-.4,.08);let s=he(new $r(.5,40),new St({color:10354656,transparent:!0,opacity:.8,side:Xt,depthWrite:!1}),[0,0,0],[-Math.PI/2,0,0],n);ht(n,.56,.018,16777215,[0,.01,0],[Math.PI/2,0,0],{glow:.5,transparent:!0,opacity:.65}),ht(n,.76,.01,10485736,[0,.02,0],[Math.PI/2,0,0],{transparent:!0,opacity:.22}),i.add(n),he(new Ie(.42,.34,.6,28),Ye(8116176,{metalness:.4}),[.72,1.25,.08],null,i),he(new Ie(.27,.27,.42,24),Ye(2775646,{metalness:.55}),[.72,1.7,.08],null,i),ht(i,.43,.03,10284002,[.72,1.55,.08],[Math.PI/2,0,0],{transparent:!0,opacity:.5});let r=he(new Ie(.02,.09,1.65,14),new St({color:16744392,transparent:!0,opacity:.35,blending:ot,depthWrite:!1}),[.72,.48,.08],null,i);for(let u=0;u<3;u+=1)ht(i,.62+u*.13,.01,16752585,[.72,-.36+u*.1,.08],[Math.PI/2,0,0],{transparent:!0,opacity:.14});let a=new Re;a.position.set(2.25,-.05,.15),a.rotation.y=-.32,Pa(a,1.16,.82,732458,[0,0,0]),st(a,.012,.52,.012,7780522,[-.42,-.02,.045],null,{transparent:!0,opacity:.6}),st(a,.84,.01,.012,7780522,[0,-.27,.045],null,{transparent:!0,opacity:.6});let o=[];for(let u=0;u<=24;u+=1){let d=u/24,h=-.26+(d<.2?.02:d<.32?.02-(d-.2)*.8:.02+Math.min(.42,(d-.32)*.7));o.push(new R(-.4+d*.78,h,.05))}let c=new Sn(o);he(new mi(c,60,.01,6,!1),Ms(8257486,.5),null,null,a);let l=Pe(a,.035,16766078,[o[0].x,o[0].y,.07],{glow:1,segments:10,rings:7});return i.add(a),i.userData.update=u=>{let d=u%6.2,h;d<2.2?h=1:d<2.6?h=1-(d-2.2)/.4:h=Math.min(1,(d-2.6)/3.6),s.material.opacity=.08+h*.8,s.material.color.setHSL(.44,.8,.52+h*.28),r.material.opacity=d>2.12&&d<2.58?.5:.05,t.forEach((M,x)=>{M.material.emissiveIntensity=.22+(.38+Math.sin(u*1.5+x)*.15)*(.25+h*.55)});let f=Math.min(1,Math.max(0,d<2.2?.1:d<2.6?.1+(d-2.2)/.4*.22:.32+(d-2.6)/3.6*.68)),g=c.getPoint(f);l.position.set(g.x,g.y,.07)},de(i,"\u8367\u5149\u6807\u8BB0\u7EC6\u80DE",[-1.85,.35,.4],"FLUORESCENT CELL"),de(i,"\u7269\u955C",[1.45,1.45,.2],"OBJECTIVE"),de(i,"\u6F02\u767D\u533A ROI",[1.55,-.15,.2],"BLEACH ROI"),de(i,"\u6FC0\u5149\u8109\u51B2",[1.55,1,.1],"LASER PULSE"),de(i,"\u6062\u590D\u66F2\u7EBF",[2.25,-.85,.35],"RECOVERY"),i}function Ry(){let i=new Re;i.userData.distance=11.4,st(i,6,.2,3.1,729125,[0,-1.45,0],null,{metalness:.45}),st(i,5.35,.22,2.2,1723214,[0,-.88,0],null,{transparent:!0,opacity:.65});for(let c=0;c<16;c+=1){let l=-2.4+c*.32;for(let u of[-.82,.82])Pe(i,.04,7333333,[l,-.72,u],{glow:.22,segments:7,rings:5}),Pe(i,.035,4958116,[l,-1.02,u],{glow:.15,segments:6,rings:4})}for(let c of[-.42,.42]){he(new Ie(.16,.2,1.05,20),Ye(7439570,{transparent:!0,opacity:.85}),[c,-.25,0],null,i),Pe(i,.3,8164575,[c,.45,.02],{transparent:!0,opacity:.76,segments:22,rings:14}),Pe(i,.17,10399999,[c,.68,.02],{transparent:!0,opacity:.65,segments:14,rings:9}),he(new Ie(.075,.1,.55,14),Ye(5466277,{metalness:.2}),[c,-1.05,0],null,i);for(let l=0;l<3;l+=1)ht(i,.18,.015,10201855,[c,-.65+l*.22,0],[Math.PI/2,0,0],{transparent:!0,opacity:.28})}Un(i,.11,.5,9545196,[0,.16,0],[0,0,Math.PI/2],{transparent:!0,opacity:.7});let e=new Re;e.position.set(-.42,.95,.12),Pe(e,.23,5038847,[0,0,0],{glow:1,segments:28,rings:18}),ht(e,.3,.022,10418175,[0,0,0],[Math.PI/2,0,0],{transparent:!0,opacity:.6});for(let c=0;c<4;c+=1){let l=c/4*je;Pe(e,.055,7071487,[Math.cos(l)*.25,.06,Math.sin(l)*.25],{glow:.5,segments:8,rings:5})}i.add(e);let t=new Re;t.position.set(.42,.95,.12),Pe(t,.23,16757854,[0,0,0],{glow:.5,segments:28,rings:18}),ht(t,.3,.022,16767131,[0,0,0],[Math.PI/2,0,0],{transparent:!0,opacity:.6});for(let c=0;c<4;c+=1){let l=c/4*je+.3;Pe(t,.05,16764805,[Math.cos(l)*.25,-.06,Math.sin(l)*.25],{glow:.35,segments:8,rings:5})}i.add(t);for(let c=0;c<4;c+=1)ht(i,.28+c*.1,.012,7796191,[0,.95,.12],[Math.PI/2,0,0],{transparent:!0,opacity:.28-c*.05});st(i,.78,.012,.012,10483682,[0,1.34,.12],null,{transparent:!0,opacity:.45});for(let c of[-.42,.42])st(i,.012,.12,.012,10483682,[c,1.3,.12],null,{transparent:!0,opacity:.45});let n=he(new Ie(.035,.12,2.15,14),new St({color:6154495,transparent:!0,opacity:.24,blending:ot,depthWrite:!1}),[-.42,1.95,.12],null,i),s=he(new Ie(.035,.14,2.1,14),new St({color:16757854,transparent:!0,opacity:.18,blending:ot,depthWrite:!1}),[.42,1.95,.12],null,i),r=new Re;r.position.set(2.45,.15,.25),r.rotation.y=-.35,Pa(r,1.22,.9,731431,[0,0,0]),st(r,.7,.01,.012,8439991,[0,-.27,.05],null,{transparent:!0,opacity:.5});let a=he(new In(.16,.5,.035),Ms(5630463,.45),[-.19,-.27,.06],null,r),o=he(new In(.16,.5,.035),Ms(16757854,.45),[.19,-.27,.06],null,r);return a.geometry.translate(0,.25,0),o.geometry.translate(0,.25,0),i.add(r),i.userData.update=c=>{let l=Math.sin(c*1.8);e.rotation.y=c*.35,t.rotation.y=-c*.35,e.children[0].material.emissiveIntensity=.55+Math.max(0,-l)*.45,t.children[0].material.emissiveIntensity=.4+Math.max(0,l)*.65,n.material.opacity=.18+Math.max(0,-l)*.08,s.material.opacity=.1+Math.max(0,l)*.12,a.scale.y=.35+Math.max(0,-l)*.55,o.scale.y=.35+Math.max(0,l)*.55},de(i,"\u4F9B\u4F53\u8367\u5149\u56E2",[-1.3,1.55,.3],"DONOR"),de(i,"\u53D7\u4F53\u8367\u5149\u56E2",[1.35,1.55,.3],"ACCEPTOR"),de(i,"\u80FD\u91CF\u8F6C\u79FB",[0,1.32,.4],"ENERGY TRANSFER"),de(i,"\u8DDD\u79BB 1\u201310 nm",[0,-.28,.5],"DISTANCE"),de(i,"\u4F9B\u4F53\u53D1\u5C04 \u2193 / \u53D7\u4F53\u53D1\u5C04 \u2191",[2.35,-.4,.4],"SPECTRAL SHIFT"),i}var Py={"prokaryote-eukaryote":gy,"membrane-mosaic":xy,transport:vy,endomembrane:yy,"mito-chloro":_y,cytoskeleton:by,nucleus:My,ribosome:Sy,"light-microscopy":Ey,"electron-microscopy":wy,centrifugation:Ty,"cell-culture":Ay,frap:Cy,fret:Ry};function Kf(i){i.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>n.dispose())})}function Jf(i,e={}){let{onReady:t,onError:n,onModelChange:s}=e,r=()=>Math.max(320,i.clientWidth||window.innerWidth),a=()=>Math.max(320,i.clientHeight||window.innerHeight),o=new lr({antialias:!0,alpha:!1,powerPreference:"high-performance"});o.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),o.setSize(r(),a()),o.outputColorSpace=on,o.toneMapping=Ci,o.toneMappingExposure=.42,o.domElement.className="cm-canvas",i.appendChild(o.domElement);let c=new Ai;c.background=new pe(132874),c.fog=new ds(132874,.026);let l=new jt(38,r()/a(),.1,80);l.position.set(0,2.4,13),l.lookAt(0,0,0);let u=new Ji(o);u.compileEquirectangularShader();let d=u.fromScene(new ac,.05).texture;c.environment=d,c.add(new ms(8186332,1380648,.52));let h=new gs(15269881,1.45);h.position.set(4,8,7),c.add(h);let f=new Tn(5826786,8,22,2);f.position.set(-5,1,3),c.add(f);let g=new Tn(16744392,6.5,18,2);g.position.set(5,2,-4),c.add(g);let M=new Ge(new cn(4.85,.01,6,120),new St({color:8386532,transparent:!0,opacity:.2}));M.position.y=-3.18,M.rotation.x=Math.PI/2,c.add(M);let x=new oa(18,36,1391676,795684);x.position.y=-3.2,x.material.transparent=!0,x.material.opacity=.1,c.add(x);let m=new xt,S=520,C=new Float32Array(S*3),_=ns(912);for(let Be=0;Be<S;Be+=1)C[Be*3]=(_()-.5)*22,C[Be*3+1]=(_()-.5)*11,C[Be*3+2]=(_()-.5)*18;m.setAttribute("position",new Pt(C,3));let T=new dn(m,new Mn({color:10287337,size:.022,transparent:!0,opacity:.32,depthWrite:!1}));c.add(T);let E=new Re;c.add(E);let P=new dr(o);P.addPass(new fr(c,l));let y=new ji(new Se(r(),a()),.16,.42,.97);P.addPass(y),P.addPass(new pr);let w=document.createElement("div");w.className="cm-label-layer",i.appendChild(w);let I=[],D=null,z=[],G=13,U=13,X=.15,K=.15,J=0,ne=0,Z=!1,ee=0,re=0,De=!0,Ue=!1,Mt=!1,ct=new aa;function dt(){w.textContent="",I.length=0}function j(Be){dt(),z=Be||[],z.forEach(Ze=>{let it=document.createElement("div");it.className="cm-label",it.innerHTML=`<i></i><span><b>${Ze.text}</b>${Ze.sub?`<em>${Ze.sub}</em>`:""}</span>`,w.appendChild(it),I.push({el:it,position:Ze.position})})}function se(){let Be=r(),Ze=a(),it=new R;I.forEach((B,qt)=>{it.copy(B.position).applyMatrix4(E.matrixWorld).project(l);let Tt=it.z>-1&&it.z<1&&Math.abs(it.x)<1.3&&Math.abs(it.y)<1.3,A=(it.x*.5+.5)*Be,v=(-it.y*.5+.5)*Ze;B.el.style.opacity=Tt?"1":"0",B.el.style.transform=`translate(${A}px, ${v}px) translate(-50%, -50%)`,B.el.style.zIndex=String(10+qt)})}function we(Be){let Ze=ju(Be),it=Py[Ze.id];it&&(D&&(E.remove(D),Kf(D)),D=it(),D.userData.modelId=Ze.id,E.add(D),z=D.userData.labels||[],j(z),G=D.userData.distance||13,U=G,X=.15,K=.15,J=0,ne=0,s&&s(Ze),Ue||(Ue=!0,t&&t(Ze)))}function qe(){K=.15,ne=0,U=D?.userData.distance||13}function me(Be){De=!!Be}function nt(){let Be=r(),Ze=a();o.setSize(Be,Ze),P.setSize(Be,Ze),l.aspect=Be/Ze,l.updateProjectionMatrix()}let Ot=new ResizeObserver(nt);Ot.observe(i);function Qe(Be){Z=!0,ee=Be.clientX,re=Be.clientY,o.domElement.setPointerCapture?.(Be.pointerId)}function lt(Be){if(!Z)return;let Ze=Be.clientX-ee,it=Be.clientY-re;ee=Be.clientX,re=Be.clientY,K+=Ze*.006,ne=Math.max(-.65,Math.min(.65,ne+it*.005))}function wt(){Z=!1}function oe(Be){Be.preventDefault(),U=Math.max(7,Math.min(21,U+Be.deltaY*.008))}o.domElement.addEventListener("pointerdown",Qe),window.addEventListener("pointermove",lt),window.addEventListener("pointerup",wt),o.domElement.addEventListener("wheel",oe,{passive:!1});let ue=window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;function mt(){if(Mt)return;let Be=Math.min(ct.getDelta(),.05),Ze=ct.elapsedTime;De&&!Z&&!ue&&(K+=Be*.1),X+=(K-X)*.09,J+=(ne-J)*.09,G+=(U-G)*.08,E.rotation.y=X,E.rotation.x=J;let it=l.aspect<1?Math.min(1.8,1/Math.max(l.aspect,.55)):1;l.position.z=G*it,l.position.y=2.4+J*1.3,l.lookAt(0,0,0),E.updateMatrixWorld(!0),D?.userData.update&&D.userData.update(Ze,Be),T.rotation.y=Ze*.008,se(),P.render(),o.setAnimationLoop(null),requestAnimationFrame(mt)}return we(ts[0].id),requestAnimationFrame(mt),{setModel:we,resetView:qe,setAutoRotate:me,setExposure(Be){let Ze=Math.max(.2,Math.min(.8,Number(Be)||.42));o.toneMappingExposure=Ze},getSpec:()=>D&&ju(D.userData.modelId),dispose(){Mt=!0,Ot.disconnect(),o.domElement.removeEventListener("pointerdown",Qe),window.removeEventListener("pointermove",lt),window.removeEventListener("pointerup",wt),o.domElement.removeEventListener("wheel",oe),D&&Kf(D),o.setAnimationLoop(null),P.dispose(),o.dispose(),u.dispose(),c.environment?.dispose?.(),o.domElement.parentNode===i&&i.removeChild(o.domElement),w.parentNode===i&&i.removeChild(w)}}}var p=null,Ss=null,vr=null,$f=.58,Iy={launcherTitle:"Cell Atlas",launcherAria:"Open Cell Atlas",close:"Close Cell Atlas",play:"Play",pause:"Pause",replay:"Replay",prev:"Previous chapter",next:"Next chapter",fullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",brightness:"Brightness",brightnessHint:"Brightness (\u2212 / =)",resetView:"Reset view",resetViewHint:"Reset view (R)",study:"Study notes",studyTitle:"Study notes",closeStudy:"Close study notes",textbookAlignment:"Textbook",bookTitle:"Full textbook",bookSubtitle:"Section-by-section study",openBook:"Open section library",closeBook:"Close section library",jumpScene:"View related movement",bookCta:"Section-by-section study",bookCtaSub:"16 chapters \xB7 44 sections",selfCheck:"Self-check",chapterOf:"Chapter",objectives:"Learning objectives",concepts:"Key concepts",mechanism:"Mechanism",pitfalls:"Common traps",quiz:"Self-check",visuals:"Visual legend",related:"Related chapters",showAnswer:"Show answer",hideAnswer:"Hide answer",answer:"Answer",textbookSections:"Textbook sections",studyCitation:"Study summary aligned with Ding Mingxiao et al., Cell Biology, 5th ed., Higher Education Press, 2020 (ISBN 978-7-04-047157-1). Defer to the textbook.",auto:"AUTO",hold:"HOLD",hint:"Drag to look \xB7 Scroll to zoom \xB7 T opens study notes",enter:"Enter the cell",loading:"Calibrating optical field",chapter:"Chapter",errorTitle:"The optical field could not start",errorBody:"This browser could not create a WebGL context. Try a current browser with hardware acceleration enabled, then reopen the atlas.",dialog:"Cell Atlas \u2014 a cinematic journey through the living cell"},jf={launcherTitle:"\u7EC6\u80DE\u56FE\u8C31",launcherAria:"\u6253\u5F00\u7EC6\u80DE\u56FE\u8C31",close:"\u5173\u95ED\u7EC6\u80DE\u56FE\u8C31",play:"\u64AD\u653E",pause:"\u6682\u505C",replay:"\u91CD\u65B0\u64AD\u653E",prev:"\u4E0A\u4E00\u7AE0",next:"\u4E0B\u4E00\u7AE0",fullscreen:"\u8FDB\u5165\u5168\u5C4F",exitFullscreen:"\u9000\u51FA\u5168\u5C4F",brightness:"\u4EAE\u5EA6",brightnessHint:"\u4EAE\u5EA6\uFF08\u2212 / =\uFF09",resetView:"\u91CD\u7F6E\u89C6\u89D2",resetViewHint:"\u91CD\u7F6E\u89C6\u89D2\uFF08R\uFF09",study:"\u5B66\u4E60\u624B\u518C",studyTitle:"\u5B66\u4E60\u624B\u518C",closeStudy:"\u5173\u95ED\u5B66\u4E60\u624B\u518C",textbookAlignment:"\u6559\u6750\u5BF9\u7167",bookTitle:"\u6559\u6750\u5206\u8282",bookSubtitle:"\u6309\u8282\u5B66\u4E60",openBook:"\u6253\u5F00\u5168\u4E66\u5206\u8282",closeBook:"\u5173\u95ED\u5168\u4E66\u5206\u8282",jumpScene:"\u770B\u5BF9\u5E94\u753B\u9762",bookCta:"\u5168\u4E66\u5206\u8282\u5B66\u4E60",bookCtaSub:"16 \u7AE0 \xB7 44 \u8282",selfCheck:"\u81EA\u6D4B",chapterOf:"\u7AE0\u8282",objectives:"\u5B66\u4E60\u76EE\u6807",concepts:"\u6838\u5FC3\u6982\u5FF5",mechanism:"\u673A\u5236\u62C6\u89E3",pitfalls:"\u6613\u9519\u70B9",quiz:"\u81EA\u6D4B",visuals:"\u753B\u9762\u56FE\u4F8B",related:"\u76F8\u5173\u7AE0\u8282",showAnswer:"\u5C55\u5F00\u7B54\u6848",hideAnswer:"\u6536\u8D77\u7B54\u6848",answer:"\u7B54\u6848",textbookSections:"\u6559\u6750\u5C0F\u8282",studyCitation:"\u4F9D\u636E\u4E01\u660E\u5B5D\u7B49\u300A\u7EC6\u80DE\u751F\u7269\u5B66\u300B\u7B2C5\u7248\uFF08\u9AD8\u7B49\u6559\u80B2\u51FA\u7248\u793E\uFF0C2020\uFF0CISBN 978-7-04-047157-1\uFF09\u76F8\u5173\u7AE0\u8282\u6574\u7406\uFF1B\u672C\u9875\u4E3A\u5B66\u4E60\u6458\u8981\uFF0C\u8BF7\u4EE5\u539F\u4E66\u4E3A\u51C6\u3002",auto:"\u81EA\u52A8\u6F2B\u6E38",hold:"\u5DF2\u6682\u505C",hint:"\u62D6\u52A8\u73AF\u89C6 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u6309 T \u6253\u5F00\u5B66\u4E60\u624B\u518C",enter:"\u8FDB\u5165\u7EC6\u80DE",loading:"\u6B63\u5728\u6821\u51C6\u5149\u5B66\u573A",chapter:"\u7AE0\u8282",errorTitle:"\u5149\u5B66\u573A\u672A\u80FD\u542F\u52A8",errorBody:"\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u521B\u5EFA WebGL \u4E0A\u4E0B\u6587\u3002\u8BF7\u5C1D\u8BD5\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u7684\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF0C\u7136\u540E\u91CD\u65B0\u6253\u5F00\u7EC6\u80DE\u56FE\u8C31\u3002",dialog:"\u7EC6\u80DE\u56FE\u8C31 \u2014\u2014 \u4E00\u573A\u7A7F\u8FC7\u6D3B\u7EC6\u80DE\u7684\u89C6\u89C9\u6F2B\u6E38"};function Ny(){let i=!1,e=new Set;return{get:()=>i,set(t){let n=!!t;if(n!==i){i=n;for(let s of e)s()}},subscribe(t){return e.add(t),()=>e.delete(t)}}}function Qf(i,e){if(!vr)return e;try{let t=vr.bind("cell-atlas")(i);return t===i?e:t}catch{return e}}function Qu(){let[i,e]=p.useState(Ss.get());return p.useEffect(()=>Ss.subscribe(()=>e(Ss.get())),[]),i}function eh(){let[,i]=p.useReducer(e=>e+1,0);return p.useEffect(()=>{if(!(!vr||typeof vr.subscribe!="function"))return vr.subscribe(()=>i())},[]),p.useCallback((e,t)=>Qf(e,t),[])}function Vt({name:i,size:e=18}){let t={width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0};switch(i){case"close":return p.createElement("svg",{...t},p.createElement("path",{d:"M6 6 18 18M18 6 6 18"}));case"prev":return p.createElement("svg",{...t},p.createElement("path",{d:"m14.5 6-6 6 6 6"}),p.createElement("path",{d:"M6.5 6v12",opacity:"0.4"}));case"next":return p.createElement("svg",{...t},p.createElement("path",{d:"m9.5 6 6 6-6 6"}),p.createElement("path",{d:"M17.5 6v12",opacity:"0.4"}));case"pause":return p.createElement("svg",{...t},p.createElement("path",{d:"M8.5 6v12M15.5 6v12"}));case"play":return p.createElement("svg",{...t},p.createElement("path",{d:"M8.5 5.8 18 12l-9.5 6.2Z",fill:"currentColor",stroke:"none"}));case"replay":return p.createElement("svg",{...t},p.createElement("path",{d:"M5 12a7 7 0 1 0 2.2-5.1"}),p.createElement("path",{d:"M5 5.3V10h4.7"}));case"expand":return p.createElement("svg",{...t},p.createElement("path",{d:"M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"}));case"collapse":return p.createElement("svg",{...t},p.createElement("path",{d:"M4 9h5V4M20 9h-5V4M4 15h5v5M20 15h-5v5"}));case"arrow":return p.createElement("svg",{...t},p.createElement("path",{d:"M4 12h15M13 6l6 6-6 6"}));case"sun":return p.createElement("svg",{...t},p.createElement("circle",{cx:"12",cy:"12",r:"3.6"}),p.createElement("path",{d:"M12 3.2v2.1M12 18.7v2.1M3.2 12h2.1M18.7 12h2.1M5.8 5.8l1.5 1.5M16.7 16.7l1.5 1.5M18.2 5.8l-1.5 1.5M7.3 16.7l-1.5 1.5"}));case"reset":return p.createElement("svg",{...t},p.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),p.createElement("path",{d:"M12 3v3.4M12 17.6V21M3 12h3.4M17.6 12H21"}),p.createElement("path",{d:"M6.2 6.2a8.2 8.2 0 0 1 11.6 0",opacity:"0.45"}));case"book":return p.createElement("svg",{...t},p.createElement("path",{d:"M4 5.2c2.7-.9 5.3-.9 8 1.1v13c-2.7-2-5.3-2-8-1.1Z"}),p.createElement("path",{d:"M20 5.2c-2.7-.9-5.3-.9-8 1.1v13c2.7-2 5.3-2 8-1.1Z"}),p.createElement("path",{d:"M12 6.3v13",opacity:"0.5"}));case"plus":return p.createElement("svg",{...t},p.createElement("path",{d:"M12 6v12M6 12h12"}));case"minus":return p.createElement("svg",{...t},p.createElement("path",{d:"M6 12h12"}));default:return null}}function th({className:i=""}){return p.createElement("svg",{className:i,viewBox:"0 0 64 64",fill:"none","aria-hidden":"true",focusable:"false"},p.createElement("circle",{cx:"32",cy:"32",r:"25",stroke:"currentColor",strokeOpacity:"0.28",strokeDasharray:"1.5 4"}),p.createElement("circle",{cx:"32",cy:"32",r:"19",stroke:"currentColor",strokeOpacity:"0.6",strokeWidth:"1.1"}),p.createElement("ellipse",{cx:"32",cy:"32",rx:"25",ry:"10",transform:"rotate(-28 32 32)",stroke:"#7ff7e4",strokeOpacity:"0.7",strokeWidth:"1.1"}),p.createElement("path",{d:"M17 41c6-3 10-9 15-10 6-1 9 5 16 3",stroke:"currentColor",strokeOpacity:"0.4",strokeWidth:"1.1",strokeLinecap:"round"}),p.createElement("circle",{cx:"32",cy:"32",r:"7.4",fill:"#7ff7e4",fillOpacity:"0.16",stroke:"#7ff7e4",strokeWidth:"1"}),p.createElement("circle",{cx:"32",cy:"32",r:"2.5",fill:"#7ff7e4"}),p.createElement("circle",{cx:"45",cy:"26",r:"1.6",fill:"#ff9fc9"}),p.createElement("circle",{cx:"21",cy:"37",r:"1.2",fill:"#ffd08a"}),p.createElement("circle",{cx:"39",cy:"44",r:"1",fill:"#bda8ff",fillOpacity:"0.9"}))}function Ly(i){let e=Qu(),t=eh();return p.createElement(p.Fragment,null,p.createElement("style",null,Vy),p.createElement("button",{type:"button",className:`ca-launcher ${e?"is-open":""}`,title:t("launcherTitle","\u7EC6\u80DE\u56FE\u8C31"),"aria-label":t("launcherAria","\u6253\u5F00\u7EC6\u80DE\u56FE\u8C31"),"aria-pressed":e,onClick:()=>Ss.set(!0),"data-wide":i&&i.wide?"true":"false"},p.createElement("span",{className:"ca-launcher-halo","aria-hidden":"true"}),p.createElement(th,{className:"ca-launcher-mark"}),p.createElement("span",{className:"ca-launcher-dot","aria-hidden":"true"})))}function Dy(){let i=Qu(),e=eh();return p.createElement(p.Fragment,null,p.createElement("style",null,Gy),p.createElement("button",{type:"button",className:`ca-header-entry ${i?"is-open":""}`,title:e("launcherTitle","\u7EC6\u80DE\u56FE\u8C31"),"aria-label":e("launcherAria","\u6253\u5F00\u7EC6\u80DE\u56FE\u8C31"),"aria-haspopup":"dialog",onClick:()=>Ss.set(!0)},p.createElement("span",{className:"ca-header-entry-mark-wrap"},p.createElement(th,{className:"ca-header-entry-mark"}),p.createElement("span",{className:"ca-header-entry-live","aria-hidden":"true"})),p.createElement("span",{className:"ca-header-entry-text"},p.createElement("span",{className:"ca-header-entry-cn"},e("launcherTitle","\u7EC6\u80DE\u56FE\u8C31")),p.createElement("span",{className:"ca-header-entry-en"},"CELL ATLAS")),p.createElement(Vt,{name:"arrow",size:13})))}function Uy(i){return{origin:"12.4 \xB5m",membrane:"0.4 \xB5m",cytoskeleton:"3.2 \xB5m",mitochondria:"1.6 \xB5m",nucleus:"6.8 \xB5m",endomembrane:"2.4 \xB5m",mitosis:"9.1 \xB5m"}[i.id]||"\u2014"}function Fy({item:i,index:e,t}){let[n,s]=p.useState(!1);return p.createElement("div",{className:`ca-quiz ${n?"is-open":""}`},p.createElement("button",{type:"button",className:"ca-quiz-q",onClick:()=>s(r=>!r),"aria-expanded":n},p.createElement("span",{className:"ca-quiz-no"},"Q",String(e+1).padStart(2,"0")),p.createElement("span",{className:"ca-quiz-text"},i.q),p.createElement(Vt,{name:n?"minus":"plus",size:15})),n&&p.createElement("div",{className:"ca-quiz-a"},p.createElement("span",{className:"ca-quiz-a-label"},t("answer","\u7B54\u6848")),p.createElement("p",null,i.a)))}function Oy({chapter:i,onClose:e,onOpenBook:t,onOpenModel:n,t:s}){let r=i.study;return p.createElement("div",{className:"ca-study-backdrop",role:"presentation",onMouseDown:a=>{a.target===a.currentTarget&&e()}},p.createElement("section",{className:"ca-study-panel",id:"ca-study-panel",role:"dialog","aria-modal":"true","aria-labelledby":"ca-study-title",tabIndex:-1,autoFocus:!0},p.createElement("header",{className:"ca-study-head"},p.createElement("div",{className:"ca-study-heading"},p.createElement("div",{className:"ca-study-eyebrow"},"STUDY NOTES / ",s("studyTitle","\u5B66\u4E60\u624B\u518C")),p.createElement("h2",{id:"ca-study-title"},r.textbook.chapter," \xB7 ",r.textbook.title),p.createElement("div",{className:"ca-study-meta"},"\u300A\u7EC6\u80DE\u751F\u7269\u5B66\u300B\u7B2C 5 \u7248 \xB7 \u4E01\u660E\u5B5D \u7B49 \xB7 \u9AD8\u7B49\u6559\u80B2\u51FA\u7248\u793E \xB7 pp.",r.textbook.pages)),p.createElement("button",{type:"button",className:"ca-iconbtn ca-study-close",onClick:e,"aria-label":s("closeStudy","\u5173\u95ED\u5B66\u4E60\u624B\u518C"),title:s("closeStudy","\u5173\u95ED\u5B66\u4E60\u624B\u518C")},p.createElement(Vt,{name:"close"}))),p.createElement("div",{className:"ca-study-scroll"},p.createElement("button",{type:"button",className:"ca-study-book-cta",onClick:t},p.createElement("span",{className:"ca-study-book-cta-icon"},p.createElement(Vt,{name:"book",size:17})),p.createElement("span",{className:"ca-study-book-cta-copy"},p.createElement("b",null,s("bookCta","\u5168\u4E66\u5206\u8282\u5B66\u4E60")),p.createElement("em",null,es.length," \u7AE0 \xB7 ",rc," \u8282 \xB7 \u6309\u8282\u7CBE\u8BFB + \u81EA\u6D4B")),p.createElement("span",{className:"ca-study-book-cta-key"},"B"),p.createElement(Vt,{name:"arrow",size:14})),p.createElement("div",{className:"ca-study-model-index"},p.createElement("div",{className:"ca-study-model-head"},p.createElement("span",null,"3D \u6A21\u578B"),p.createElement("em",null,"\u70B9\u51FB\u540D\u79F0\u76F4\u63A5\u89C2\u5BDF")),p.createElement("div",{className:"ca-study-model-links"},[{label:"\u7ED3\u6784\u6A21\u578B",batch:1},{label:"\u5B9E\u9A8C\u65B9\u6CD5",batch:2}].map(a=>p.createElement("div",{className:"ca-study-model-group",key:a.label},p.createElement("div",{className:"ca-study-model-group-label"},a.label),p.createElement("div",{className:"ca-study-model-group-links"},ts.filter(o=>(o.batch||1)===a.batch).map(o=>{let c=es[o.book];return p.createElement("button",{type:"button",key:o.id,className:"ca-study-model-link",onClick:()=>n({modelId:o.id,book:o.book,section:o.sections[0],chapterTitle:c.title}),title:`${o.en} \xB7 ${c.no} ${c.title}`},p.createElement("span",null,o.no),o.title)})))))),p.createElement("section",{className:"ca-study-section"},p.createElement("div",{className:"ca-study-label"},p.createElement("span",null,"01"),p.createElement("b",null,s("objectives","\u5B66\u4E60\u76EE\u6807")),p.createElement("em",null,"OBJECTIVES")),p.createElement("ul",{className:"ca-study-objectives"},r.objectives.map(a=>p.createElement("li",{key:a},a)))),p.createElement("section",{className:"ca-study-section"},p.createElement("div",{className:"ca-study-label"},p.createElement("span",null,"02"),p.createElement("b",null,s("concepts","\u6838\u5FC3\u6982\u5FF5")),p.createElement("em",null,"KEY CONCEPTS")),p.createElement("dl",{className:"ca-concepts"},r.concepts.map(a=>p.createElement("div",{className:"ca-concept",key:a.term},p.createElement("dt",null,p.createElement("span",null,a.term),p.createElement("em",null,a.en)),p.createElement("dd",null,a.def))))),p.createElement("section",{className:"ca-study-section"},p.createElement("div",{className:"ca-study-label"},p.createElement("span",null,"03"),p.createElement("b",null,s("mechanism","\u673A\u5236\u62C6\u89E3")),p.createElement("em",null,"MECHANISM")),p.createElement("ol",{className:"ca-study-mechanism"},r.mechanism.map(a=>p.createElement("li",{key:a},a)))),p.createElement("section",{className:"ca-study-section"},p.createElement("div",{className:"ca-study-label"},p.createElement("span",null,"04"),p.createElement("b",null,s("pitfalls","\u6613\u9519\u70B9")),p.createElement("em",null,"COMMON TRAPS")),p.createElement("ul",{className:"ca-study-traps"},r.pitfalls.map(a=>p.createElement("li",{key:a},a)))),p.createElement("section",{className:"ca-study-section"},p.createElement("div",{className:"ca-study-label"},p.createElement("span",null,"05"),p.createElement("b",null,s("quiz","\u81EA\u6D4B")),p.createElement("em",null,"SELF-CHECK")),p.createElement("div",{className:"ca-quiz-list"},r.quiz.map((a,o)=>p.createElement(Fy,{key:a.q,item:a,index:o,t:s})))),p.createElement("section",{className:"ca-study-section"},p.createElement("div",{className:"ca-study-label"},p.createElement("span",null,"06"),p.createElement("b",null,s("visuals","\u753B\u9762\u56FE\u4F8B")),p.createElement("em",null,"VISUAL LEGEND")),p.createElement("div",{className:"ca-visuals"},r.visuals.map(a=>p.createElement("div",{className:"ca-visual",key:a.label},p.createElement("span",{className:"ca-visual-dot",style:{background:a.color,color:a.color}}),p.createElement("span",null,a.label))))),p.createElement("section",{className:"ca-study-section"},p.createElement("div",{className:"ca-study-label"},p.createElement("span",null,"07"),p.createElement("b",null,s("related","\u76F8\u5173\u7AE0\u8282")),p.createElement("em",null,"READ FURTHER")),p.createElement("ul",{className:"ca-related"},r.related.map(a=>p.createElement("li",{key:a},a))),p.createElement("div",{className:"ca-study-sections"},p.createElement("span",null,s("textbookSections","\u6559\u6750\u5C0F\u8282")),r.textbook.sections.map(a=>p.createElement("em",{key:a},a)))),p.createElement("footer",{className:"ca-study-footer"},p.createElement("span",{className:"ca-study-footer-mark"},"5"),p.createElement("p",null,s("studyCitation","\u4F9D\u636E\u4E01\u660E\u5B5D\u7B49\u300A\u7EC6\u80DE\u751F\u7269\u5B66\u300B\u7B2C5\u7248\uFF08\u9AD8\u7B49\u6559\u80B2\u51FA\u7248\u793E\uFF0C2020\uFF09\u76F8\u5173\u7AE0\u8282\u6574\u7406\uFF1B\u672C\u9875\u4E3A\u5B66\u4E60\u6458\u8981\uFF0C\u8BF7\u4EE5\u539F\u4E66\u4E3A\u51C6\u3002"))))))}function By({initialChapter:i,onClose:e,onJump:t,onOpenModel:n,t:s}){let[r,a]=p.useState(Math.max(0,Math.min(es.length-1,i||0))),[o,c]=p.useState(0),l=es[r];return p.useEffect(()=>{c(0)},[r]),p.createElement("div",{className:"ca-book-backdrop",role:"presentation",onMouseDown:u=>{u.target===u.currentTarget&&e()}},p.createElement("section",{className:"ca-book-panel",role:"dialog","aria-modal":"true","aria-labelledby":"ca-book-title",tabIndex:-1,autoFocus:!0},p.createElement("header",{className:"ca-book-head"},p.createElement("div",{className:"ca-book-heading"},p.createElement("div",{className:"ca-book-eyebrow"},"FULL TEXTBOOK / ",s("bookTitle","\u6559\u6750\u5206\u8282")),p.createElement("h2",{id:"ca-book-title"},s("bookSubtitle","\u6309\u8282\u5B66\u4E60"),p.createElement("span",null,es.length," \u7AE0 \xB7 ",rc," \u8282")),p.createElement("div",{className:"ca-book-meta"},"\u300A\u7EC6\u80DE\u751F\u7269\u5B66\u300B\u7B2C 5 \u7248 \xB7 \u4E01\u660E\u5B5D \u7B49 \xB7 \u9AD8\u7B49\u6559\u80B2\u51FA\u7248\u793E \xB7 2020")),p.createElement("button",{type:"button",className:"ca-iconbtn ca-book-close",onClick:e,"aria-label":s("closeBook","\u5173\u95ED\u5168\u4E66\u5206\u8282"),title:s("closeBook","\u5173\u95ED\u5168\u4E66\u5206\u8282")},p.createElement(Vt,{name:"close"}))),p.createElement("div",{className:"ca-book-body"},p.createElement("nav",{className:"ca-book-nav","aria-label":s("chapterOf","\u7AE0\u8282")},es.map((u,d)=>p.createElement("button",{type:"button",key:u.id,className:`ca-book-navitem ${d===r?"is-active":""}`,onClick:()=>a(d),"aria-current":d===r?"true":void 0},p.createElement("span",{className:"ca-book-nav-no"},u.no),p.createElement("span",{className:"ca-book-nav-title"},u.title),p.createElement("em",null,u.sections.length," \u8282"),u.scene!==null&&u.scene!==void 0&&p.createElement("i",null,"\u753B\u9762 ",String(u.scene+1).padStart(2,"0"))))),p.createElement("div",{className:"ca-book-main"},p.createElement("div",{className:"ca-book-chapterhead"},p.createElement("div",null,p.createElement("div",{className:"ca-book-kicker"},l.no," ",p.createElement("span",null,"/")," ",l.sections.length," \u8282 ",p.createElement("span",null,"/")," pp.",l.pages),p.createElement("h3",null,l.title),p.createElement("p",null,l.overview)),l.scene!==null&&l.scene!==void 0&&p.createElement("button",{type:"button",className:"ca-book-jump",onClick:()=>t(l.scene)},s("jumpScene","\u770B\u5BF9\u5E94\u753B\u9762"),p.createElement(Vt,{name:"arrow",size:14}))),p.createElement("div",{className:"ca-book-sections"},l.sections.map((u,d)=>{let h=d===o,f=qf(l.id,u.no);return p.createElement("article",{className:`ca-book-section ${h?"is-open":""}`,key:`${l.id}-${u.no}`},p.createElement("button",{type:"button",className:"ca-book-section-head",onClick:()=>c(h?-1:d),"aria-expanded":h},p.createElement("span",{className:"ca-book-section-no"},u.no),p.createElement("span",{className:"ca-book-section-title"},u.title),p.createElement("span",{className:"ca-book-section-pages"},"pp.",u.pages),p.createElement(Vt,{name:h?"minus":"plus",size:15})),h&&p.createElement("div",{className:"ca-book-section-body"},f.length>0&&p.createElement("div",{className:"ca-book-model-row"},f.map(g=>p.createElement("button",{type:"button",className:"ca-book-model-btn",key:g.id,onClick:()=>n({modelId:g.id,book:r,section:u.no,chapterTitle:l.title})},p.createElement("span",null,"3D"),g.title,p.createElement(Vt,{name:"arrow",size:13})))),p.createElement("div",{className:"ca-book-outline"},u.outline.map(g=>p.createElement("span",{key:g},g))),p.createElement("p",{className:"ca-book-summary"},u.summary),p.createElement("ul",{className:"ca-book-points"},u.points.map(g=>p.createElement("li",{key:g},g))),p.createElement("dl",{className:"ca-book-terms"},u.terms.map(g=>p.createElement("div",{key:g.t},p.createElement("dt",null,g.t),p.createElement("dd",null,g.d)))),p.createElement("details",{className:"ca-book-check"},p.createElement("summary",null,p.createElement("span",null,s("selfCheck","\u81EA\u6D4B")),u.check.q),p.createElement("p",null,u.check.a))))})),p.createElement("footer",{className:"ca-book-foot"},"\u4F9D\u636E\u300A\u7EC6\u80DE\u751F\u7269\u5B66\u300B\u7B2C 5 \u7248\u76F8\u5173\u7AE0\u8282\u6574\u7406 \xB7 \u5171 ",rc," \u8282 \xB7 \u4EE5\u539F\u4E66\u4E3A\u51C6")))))}function ky({context:i,onClose:e,t}){let n=p.useRef(null),s=p.useRef(null),[r,a]=p.useState(null),[o,c]=p.useState(null);return p.useEffect(()=>{let l=!0;try{let u=Jf(n.current,{onModelChange:d=>{l&&a(d)},onError:d=>{l&&c(d&&d.message?d.message:String(d))}});s.current=u,u.setModel(i.modelId)}catch(u){c(u&&u.message?u.message:String(u))}return()=>{l=!1,s.current&&(s.current.dispose(),s.current=null)}},[i.modelId]),p.createElement("div",{className:"ca-model-backdrop",role:"presentation"},p.createElement("section",{className:"ca-model-panel",role:"dialog","aria-modal":"true","aria-label":r?r.title:"3D model"},p.createElement("div",{className:"ca-model-stage",ref:n}),p.createElement("header",{className:"ca-model-head"},p.createElement("div",null,p.createElement("div",{className:"ca-model-eyebrow"},"SECTION MODEL / 3D SPECIMEN"),p.createElement("h2",null,r?r.title:"\u6B63\u5728\u6784\u5EFA\u6A21\u578B"),p.createElement("div",{className:"ca-model-meta"},i.section," \xB7 ",i.chapterTitle)),p.createElement("button",{type:"button",className:"ca-iconbtn",onClick:e,"aria-label":t("closeBook","\u5173\u95ED")},p.createElement(Vt,{name:"close"}))),r&&p.createElement("div",{className:"ca-model-caption"},p.createElement("div",{className:"ca-model-en"},r.en),p.createElement("p",null,r.summary),p.createElement("ul",null,r.points.map(l=>p.createElement("li",{key:l},l)))),p.createElement("div",{className:"ca-model-hint"},"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E"),p.createElement("div",{className:"ca-model-actions"},p.createElement("button",{type:"button",onClick:()=>s.current?.resetView()},"\u91CD\u7F6E\u89C6\u89D2"),p.createElement("button",{type:"button",onClick:e},"\u8FD4\u56DE\u5168\u4E66")),o&&p.createElement("div",{className:"ca-model-error"},p.createElement("b",null,"3D \u6A21\u578B\u672A\u80FD\u542F\u52A8"),p.createElement("span",null,o))))}function zy(){let i=eh(),e=p.useRef(null),t=p.useRef(null),n=p.useRef(null),s=p.useRef(null),r=p.useRef({}),a=p.useRef([]),o=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[c,l]=p.useState(0),[u,d]=p.useState(!o),[h,f]=p.useState(0),[g,M]=p.useState(()=>{try{let oe=Number(window.localStorage.getItem("cell-atlas.brightness"));if(Number.isFinite(oe)&&oe>=.3&&oe<=1)return oe}catch{}return $f}),[x,m]=p.useState(!1),[S,C]=p.useState(null),[_,T]=p.useState("in"),[E,P]=p.useState(0),[y,w]=p.useState(!1),[I,D]=p.useState(!1),[z,G]=p.useState(0),[U,X]=p.useState(null),[K,J]=p.useState(!1),ne=nn[c],Z=ne.study,ee=!u&&c===nn.length-1&&h>.995;p.useEffect(()=>{let oe=document.activeElement,ue=document.body.style.overflow;document.body.style.overflow="hidden";let mt=!0;try{let Be=Gf(t.current,{onReady:()=>{mt&&m(!0)},onError:Ze=>{mt&&C(Ze&&Ze.message?Ze.message:String(Ze))}});n.current=Be}catch(Be){C(Be&&Be.message?Be.message:String(Be))}return()=>{mt=!1,document.body.style.overflow=ue,n.current&&(n.current.dispose(),n.current=null);for(let Be of a.current)window.clearTimeout(Be);if(a.current=[],oe&&typeof oe.focus=="function")try{oe.focus({preventScroll:!0})}catch{}}},[]),p.useEffect(()=>{n.current&&n.current.setChapter(c)},[c]),p.useEffect(()=>{n.current&&n.current.setPaused(!u)},[u]),p.useEffect(()=>{n.current&&n.current.setBrightness(g);try{window.localStorage.setItem("cell-atlas.brightness",String(g))}catch{}},[g]),p.useEffect(()=>{let oe=window.setTimeout(()=>{T(ue=>ue)},2800);return a.current.push(oe),()=>window.clearTimeout(oe)},[]),p.useEffect(()=>{if(_!=="out")return;let oe=window.setTimeout(()=>T("gone"),720);return a.current.push(oe),()=>window.clearTimeout(oe)},[_]),p.useEffect(()=>{if(_!=="gone")return;let oe=window.setTimeout(()=>{if(s.current)try{s.current.focus({preventScroll:!0})}catch{}},100);return a.current.push(oe),()=>window.clearTimeout(oe)},[_]),p.useEffect(()=>{if(!u||_!=="gone"||S||y)return;let oe=0,ue=0,mt=performance.now(),Be=ne.duration,Ze=it=>{let B=Math.min(1,(it-mt)/Be);if(it-ue>70&&(ue=it,f(B)),B>=1){f(1),c<nn.length-1?(l(qt=>Math.min(nn.length-1,qt+1)),f(0)):d(!1);return}oe=window.requestAnimationFrame(Ze)};return oe=window.requestAnimationFrame(Ze),()=>window.cancelAnimationFrame(oe)},[c,u,_,S,y,ne.duration]);let re=p.useCallback(()=>{T(oe=>oe==="in"?"out":oe),n.current&&n.current.pulse()},[]),De=p.useCallback(()=>{document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen().catch(()=>{}),Ss.set(!1)},[]),Ue=p.useCallback(oe=>{let ue=Math.max(0,Math.min(nn.length-1,oe));l(ue),f(0)},[]),Mt=p.useCallback(oe=>{l(ue=>Math.max(0,Math.min(nn.length-1,ue+oe))),f(0)},[]),ct=p.useCallback(()=>{if(!u&&ee){l(0),f(0),d(!0);return}d(!u)},[u,ee]),dt=p.useCallback(()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):e.current&&e.current.requestFullscreen&&e.current.requestFullscreen().catch(()=>{})},[]),j=p.useCallback(oe=>{let ue=Math.max(.3,Math.min(1,Math.round(Number(oe)*100)/100));M(Number.isFinite(ue)?ue:$f)},[]),se=p.useCallback(oe=>{M(ue=>Math.max(.3,Math.min(1,Math.round((ue+oe)*100)/100)))},[]),we=p.useCallback(()=>{n.current&&n.current.resetView()},[]),qe=p.useCallback(()=>{d(!1),w(!0)},[]),me=p.useCallback(()=>{w(!1)},[]),nt=p.useCallback(()=>{d(!1),w(!1),G(Xf(c)),D(!0)},[c]),Ot=p.useCallback(()=>{D(!1)},[]),Qe=p.useCallback(oe=>{d(!1),n.current?.setPaused?.(!0),X(oe)},[]),lt=p.useCallback(()=>{n.current?.setPaused?.(!1),X(null)},[]);r.current={close:De,step:Mt,togglePlay:ct,toggleFullscreen:dt,nudgeBrightness:se,resetView:we,openStudy:qe,closeStudy:me,openBook:nt,closeBook:Ot,openModel:Qe,closeModel:lt,studyOpen:y,bookOpen:I,modelView:U},p.useEffect(()=>{let oe=ue=>{let mt=ue.target&&ue.target.tagName;if(!(mt==="INPUT"||mt==="TEXTAREA"||ue.target&&ue.target.isContentEditable)){if(r.current.modelView){ue.key==="Escape"&&(ue.preventDefault(),r.current.closeModel());return}if(r.current.bookOpen){(ue.key==="Escape"||ue.key.toLowerCase()==="b")&&(ue.preventDefault(),r.current.closeBook());return}if(ue.key==="Escape"){ue.preventDefault(),r.current.studyOpen?r.current.closeStudy():r.current.close();return}if(ue.key.toLowerCase()==="b"){ue.preventDefault(),r.current.openBook();return}if(ue.key.toLowerCase()==="t"){ue.preventDefault(),r.current.studyOpen?r.current.closeStudy():r.current.openStudy();return}r.current.studyOpen||mt==="BUTTON"||mt==="A"||(ue.key==="ArrowRight"?(ue.preventDefault(),r.current.step(1)):ue.key==="ArrowLeft"?(ue.preventDefault(),r.current.step(-1)):ue.key===" "||ue.key==="Spacebar"?(ue.preventDefault(),r.current.togglePlay()):ue.key.toLowerCase()==="f"?(ue.preventDefault(),r.current.toggleFullscreen()):ue.key==="-"||ue.key==="_"?(ue.preventDefault(),r.current.nudgeBrightness(-.06)):ue.key==="="||ue.key==="+"?(ue.preventDefault(),r.current.nudgeBrightness(.06)):ue.key.toLowerCase()==="r"&&(ue.preventDefault(),r.current.resetView()))}};return window.addEventListener("keydown",oe),()=>window.removeEventListener("keydown",oe)},[]),p.useEffect(()=>{let oe=()=>J(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",oe),()=>document.removeEventListener("fullscreenchange",oe)},[]);let wt=typeof document<"u"&&!!(document.fullscreenEnabled||document.webkitFullscreenEnabled);return p.createElement("div",{ref:e,className:`ca-root ${x?"is-ready":""}`,style:{"--ca-accent":ne.accent},role:"dialog","aria-modal":"true","aria-label":i("dialog","\u7EC6\u80DE\u56FE\u8C31 \u2014\u2014 \u4E00\u573A\u7A7F\u8FC7\u6D3B\u7EC6\u80DE\u7684\u89C6\u89C9\u6F2B\u6E38")},p.createElement("style",null,Wy),p.createElement("div",{className:"ca-fallback","aria-hidden":"true"},p.createElement("div",{className:"ca-fallback-cell"}),p.createElement("div",{className:"ca-fallback-glow"})),p.createElement("div",{className:`ca-canvas ${x?"is-ready":""}`,ref:t}),p.createElement("div",{className:"ca-grain","aria-hidden":"true"}),p.createElement("div",{className:"ca-scanlines","aria-hidden":"true"}),p.createElement("div",{className:"ca-vignette","aria-hidden":"true"}),p.createElement("div",{className:"ca-frame","aria-hidden":"true"},p.createElement("span",{className:"ca-corner ca-corner-tl"}),p.createElement("span",{className:"ca-corner ca-corner-tr"}),p.createElement("span",{className:"ca-corner ca-corner-bl"}),p.createElement("span",{className:"ca-corner ca-corner-br"})),p.createElement("div",{className:"ca-reticle","aria-hidden":"true"}),p.createElement("div",{className:"ca-ui"},p.createElement("header",{className:"ca-header"},p.createElement("div",{className:"ca-brand"},p.createElement(th,{className:"ca-brand-mark"}),p.createElement("div",{className:"ca-brand-text"},p.createElement("div",{className:"ca-wordmark"},"CELL ",p.createElement("span",null,"ATLAS")),p.createElement("div",{className:"ca-wordmark-cn"},"\u7EC6\u80DE\u56FE\u8C31 \xB7 \u4E00\u6B21\u5173\u4E8E\u8FB9\u754C\u7684\u6F2B\u6E38"))),p.createElement("div",{className:"ca-topreadout"},p.createElement("span",{className:"ca-live-dot"}),p.createElement("span",null,"LIVE SPECIMEN"),p.createElement("span",{className:"ca-topreadout-sep"},"/"),p.createElement("span",null,ne.readout)),p.createElement("div",{className:"ca-topright"},p.createElement("button",{type:"button",className:"ca-book-btn",onClick:nt,"aria-label":i("openBook","\u6253\u5F00\u5168\u4E66\u5206\u8282"),title:`${i("openBook","\u6253\u5F00\u5168\u4E66\u5206\u8282")} \xB7 B`},p.createElement(Vt,{name:"book",size:15})),p.createElement("button",{type:"button",className:"ca-study-toggle",onClick:qe,"aria-expanded":y,"aria-controls":"ca-study-panel",title:`${i("studyTitle","\u5B66\u4E60\u624B\u518C")} \xB7 T`},p.createElement(Vt,{name:"book",size:14}),p.createElement("span",null,i("study","\u5B66\u4E60"))),p.createElement("div",{className:"ca-counter","aria-label":`${i("chapter","\u7AE0\u8282")} ${c+1}`},p.createElement("b",null,ne.no),p.createElement("span",null,"/ ",String(nn.length).padStart(2,"0"))),p.createElement("button",{type:"button",className:"ca-iconbtn",onClick:De,ref:s,"aria-label":i("close","\u5173\u95ED\u7EC6\u80DE\u56FE\u8C31"),title:i("close","\u5173\u95ED\u7EC6\u80DE\u56FE\u8C31")},p.createElement(Vt,{name:"close"})))),p.createElement("main",{className:"ca-stage"},p.createElement("div",{className:"ca-readout","aria-hidden":"true"},p.createElement("div",null,ne.readout),p.createElement("div",{className:"ca-readout-sub"},"FOCUS ",Uy(ne)," ",p.createElement("span",null,"/")," SECTION 0.",c+2," \xB5m")),p.createElement("article",{className:"ca-caption",key:ne.id},p.createElement("div",{className:"ca-kicker"},p.createElement("span",{className:"ca-kicker-line"}),p.createElement("span",null,ne.kicker," ",p.createElement("span",{className:"ca-kicker-slash"},"/")," ",ne.cnKicker)),p.createElement("h1",null,ne.title),p.createElement("div",{className:"ca-en"},ne.en),p.createElement("button",{type:"button",className:"ca-textbook-chip",onClick:qe,"aria-label":`${i("study","\u5B66\u4E60\u624B\u518C")}\uFF1A${i("textbookAlignment","\u6559\u6750\u5BF9\u7167")}\uFF0C${Z.textbook.chapter} ${Z.textbook.title}\uFF0Cpp.${Z.textbook.pages}`,title:`${i("study","\u5B66\u4E60\u624B\u518C")} \xB7 T`},p.createElement("span",{className:"ca-textbook-chip-icon"},p.createElement(Vt,{name:"book",size:17})),p.createElement("span",{className:"ca-textbook-chip-main"},p.createElement("span",{className:"ca-textbook-chip-top"},p.createElement("b",null,i("study","\u5B66\u4E60\u624B\u518C")),p.createElement("em",null,i("textbookAlignment","\u6559\u6750\u5BF9\u7167")," \xB7 ",Z.textbook.chapter," ",Z.textbook.title)),p.createElement("span",{className:"ca-textbook-chip-sub"},"pp.",Z.textbook.pages," \xB7 \u5B66\u4E60\u76EE\u6807 / \u673A\u5236\u62C6\u89E3 / \u81EA\u6D4B")),p.createElement("span",{className:"ca-textbook-chip-key"},"T"),p.createElement(Vt,{name:"arrow",size:14})),p.createElement("p",{className:"ca-body"},ne.body),p.createElement("div",{className:"ca-facts"},ne.facts.map((oe,ue)=>p.createElement("div",{className:"ca-fact",key:oe.k,style:{"--i":ue}},p.createElement("div",{className:"ca-fact-k"},oe.k),p.createElement("div",{className:"ca-fact-v"},oe.v))))),p.createElement("nav",{className:"ca-rail","aria-label":"Chapters"},nn.map((oe,ue)=>p.createElement("button",{type:"button",key:oe.id,className:ue===c?"is-active":"","data-complete":ue<c?"true":"false",onClick:()=>Ue(ue),"aria-label":`${oe.no} ${oe.short}`,"aria-current":ue===c?"step":void 0},p.createElement("span",{className:"ca-rail-title"},oe.short),p.createElement("span",{className:"ca-rail-line"}),p.createElement("span",{className:"ca-rail-no"},oe.no)))),p.createElement("div",{className:"ca-spine","aria-hidden":"true"},p.createElement("span",null,"HOMO SAPIENS"),p.createElement("span",null,"CELLULAR SPECIMEN / 001"))),p.createElement("footer",{className:"ca-footer"},p.createElement("div",{className:"ca-auto"},p.createElement("span",{className:`ca-auto-dot ${u?"is-live":""}`}),p.createElement("span",{className:"ca-auto-label"},u?i("auto","\u81EA\u52A8\u6F2B\u6E38"):i("hold","\u5DF2\u6682\u505C")),p.createElement("span",{className:"ca-auto-sep"},"/"),p.createElement("span",{className:"ca-hint"},p.createElement("kbd",null,"T"),p.createElement("span",null,i("study","\u5B66\u4E60\u624B\u518C")))),p.createElement("div",{className:"ca-timeline",role:"group","aria-label":"Timeline"},nn.map((oe,ue)=>{let mt=ue<c?1:ue===c?h:0;return p.createElement("button",{type:"button",key:oe.id,className:`ca-seg ${ue===c?"is-active":""}`,onClick:()=>Ue(ue),"aria-label":`${oe.no} ${oe.short}`},p.createElement("span",{className:"ca-seg-track"},p.createElement("span",{className:"ca-seg-fill",style:{transform:`scaleX(${mt})`}})),p.createElement("span",{className:"ca-seg-label"},oe.no))})),p.createElement("div",{className:"ca-controls"},p.createElement("label",{className:"ca-lum",title:i("brightnessHint","\u4EAE\u5EA6\uFF08\u2212 / =\uFF09")},p.createElement(Vt,{name:"sun",size:13}),p.createElement("input",{type:"range",min:"0.3",max:"1",step:"0.01",value:g,onChange:oe=>j(oe.target.value),"aria-label":i("brightness","\u4EAE\u5EA6")}),p.createElement("span",{className:"ca-lum-value","aria-hidden":"true"},Math.round(g*100))),p.createElement("button",{type:"button",className:"ca-ctrl ca-ctrl-quiet",onClick:we,"aria-label":i("resetView","\u91CD\u7F6E\u89C6\u89D2"),title:i("resetViewHint","\u91CD\u7F6E\u89C6\u89D2\uFF08R\uFF09")},p.createElement(Vt,{name:"reset"})),p.createElement("button",{type:"button",className:"ca-ctrl",onClick:()=>Mt(-1),disabled:c===0,"aria-label":i("prev","\u4E0A\u4E00\u7AE0"),title:i("prev","\u4E0A\u4E00\u7AE0")},p.createElement(Vt,{name:"prev"})),p.createElement("button",{type:"button",className:"ca-ctrl ca-ctrl-primary",onClick:ct,"aria-label":ee?i("replay","\u91CD\u65B0\u64AD\u653E"):u?i("pause","\u6682\u505C"):i("play","\u64AD\u653E"),title:ee?i("replay","\u91CD\u65B0\u64AD\u653E"):u?i("pause","\u6682\u505C"):i("play","\u64AD\u653E")},p.createElement(Vt,{name:ee?"replay":u?"pause":"play"})),p.createElement("button",{type:"button",className:"ca-ctrl",onClick:()=>Mt(1),disabled:c===nn.length-1,"aria-label":i("next","\u4E0B\u4E00\u7AE0"),title:i("next","\u4E0B\u4E00\u7AE0")},p.createElement(Vt,{name:"next"})),wt&&p.createElement("button",{type:"button",className:"ca-ctrl ca-ctrl-quiet",onClick:dt,"aria-label":K?i("exitFullscreen","\u9000\u51FA\u5168\u5C4F"):i("fullscreen","\u8FDB\u5165\u5168\u5C4F"),title:K?i("exitFullscreen","\u9000\u51FA\u5168\u5C4F"):i("fullscreen","\u8FDB\u5165\u5168\u5C4F")},p.createElement(Vt,{name:K?"collapse":"expand"}))))),_!=="gone"&&p.createElement("div",{className:`ca-intro ${_==="out"?"is-out":""}`,"aria-hidden":_==="out"},p.createElement("div",{className:"ca-intro-grid","aria-hidden":"true"}),p.createElement("div",{className:`ca-intro-inner ${E>0?"is-guide":""}`},E===0&&p.createElement("div",{className:"ca-intro-step"},p.createElement("div",{className:"ca-intro-welcome"},"\u6B22\u8FCE\u6765\u5230\u7EC6\u80DE\u7684\u4E16\u754C"),p.createElement("div",{className:"ca-intro-eyebrow"},"AN INTERACTIVE CELL ATLAS \xB7 MMXXVI"),p.createElement("h2",null,p.createElement("span",{className:"ca-intro-fill"},"CELL"),p.createElement("span",{className:"ca-intro-slash"},"/"),p.createElement("span",{className:"ca-intro-outline"},"ATLAS")),p.createElement("div",{className:"ca-intro-cn"},"\u7EC6\u80DE\u56FE\u8C31"),p.createElement("div",{className:"ca-intro-sub"},"\u4E00\u573A\u4ECE\u8D28\u819C\u5230\u57FA\u56E0\u7EC4\u7684\u4E03\u5E55\u89C6\u89C9\u6F2B\u6E38"),p.createElement("div",{className:"ca-intro-quick"},p.createElement("div",null,p.createElement("kbd",null,"T"),p.createElement("b",null,"\u5B66\u4E60\u624B\u518C"),p.createElement("em",null,"\u76EE\u6807 \xB7 \u6982\u5FF5 \xB7 \u673A\u5236 \xB7 \u81EA\u6D4B")),p.createElement("div",null,p.createElement("kbd",null,"B"),p.createElement("b",null,"\u5168\u4E66\u5206\u8282"),p.createElement("em",null,"16 \u7AE0 \xB7 44 \u8282 \xB7 3D \u6A21\u578B")),p.createElement("div",null,p.createElement("kbd",null,"\u2194"),p.createElement("b",null,"\u81EA\u7531\u89C2\u5BDF"),p.createElement("em",null,"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E"))),p.createElement("div",{className:"ca-intro-actions"},p.createElement("button",{type:"button",className:"ca-enter",onClick:()=>P(1)},p.createElement("span",null,"\u5148\u770B\u4F7F\u7528\u8BF4\u660E"),p.createElement(Vt,{name:"arrow",size:15})),p.createElement("span",{className:"ca-intro-count"},"01 / 03"))),E===1&&p.createElement("div",{className:"ca-intro-step ca-intro-guide"},p.createElement("div",{className:"ca-intro-eyebrow"},"HOW TO USE / \u4F7F\u7528\u8BF4\u660E"),p.createElement("h2",{className:"ca-guide-title"},"\u6309 ",p.createElement("kbd",null,"T"),"\uFF0C\u6253\u5F00\u5B66\u4E60\u624B\u518C"),p.createElement("div",{className:"ca-guide-grid"},p.createElement("div",{className:"ca-guide-mock","aria-hidden":"true"},p.createElement("div",{className:"ca-guide-mock-head"},p.createElement("span",null,"STUDY NOTES"),p.createElement("b",null,"\u5B66\u4E60\u624B\u518C"),p.createElement("kbd",null,"T")),p.createElement("div",{className:"ca-guide-mock-body"},p.createElement("div",{className:"ca-guide-mini-label"},"\u5B66\u4E60\u76EE\u6807"),p.createElement("p",null,"\u8BF4\u51FA\u6D41\u52A8\u9576\u5D4C\u6A21\u578B\uFF0C\u5E76\u89E3\u91CA\u652F\u6301\u5B83\u7684\u5B9E\u9A8C\u8BC1\u636E\u3002"),p.createElement("div",{className:"ca-guide-mini-label"},"\u6838\u5FC3\u6982\u5FF5"),p.createElement("p",null,"\u78F7\u8102\u53CC\u5206\u5B50\u5C42 / \u6574\u5408\u819C\u86CB\u767D / \u819C\u7684\u4E0D\u5BF9\u79F0\u6027"),p.createElement("div",{className:"ca-guide-mini-label"},"\u673A\u5236\u62C6\u89E3"),p.createElement("p",null,"\u819C\u8102\u6D41\u52A8\u6027 \u2192 \u86CB\u767D\u8FD0\u52A8 \u2192 \u9009\u62E9\u900F\u8FC7\u4E0E\u4FE1\u53F7\u63A5\u6536"),p.createElement("div",{className:"ca-guide-mini-label"},"\u6613\u9519\u70B9"),p.createElement("p",null,"\u6D41\u52A8\u6027\u4E0D\u662F\u201C\u6240\u6709\u86CB\u767D\u90FD\u80FD\u81EA\u7531\u6F02\u79FB\u201D\uFF0C\u819C\u9AA8\u67B6\u548C\u8FDE\u63A5\u4F1A\u9650\u5236\u8FD0\u52A8\u3002"),p.createElement("div",{className:"ca-guide-mini-label"},"\u81EA\u6D4B"),p.createElement("p",null,"\u4E3A\u4EC0\u4E48\u80C6\u56FA\u9187\u5BF9\u819C\u6D41\u52A8\u6027\u6709\u53CC\u5411\u8C03\u8282\uFF1F"))),p.createElement("div",{className:"ca-guide-copy"},p.createElement("div",{className:"ca-guide-block"},p.createElement("span",null,"01"),p.createElement("div",null,p.createElement("b",null,"T \u6253\u5F00\u7684\u62BD\u5C49\u91CC\u6709\u4EC0\u4E48"),p.createElement("p",null,"\u5B66\u4E60\u76EE\u6807\u3001\u6838\u5FC3\u6982\u5FF5\u3001\u673A\u5236\u62C6\u89E3\u3001\u6613\u9519\u70B9\u3001\u753B\u9762\u56FE\u4F8B\u3001\u76F8\u5173\u7AE0\u8282\uFF0C\u4EE5\u53CA\u53EF\u5C55\u5F00\u7684\u81EA\u6D4B\u7B54\u6848\uFF1B\u6BCF\u9875\u90FD\u5E26\u6559\u6750\u9875\u7801\u3002"))),p.createElement("div",{className:"ca-guide-block"},p.createElement("span",null,"02"),p.createElement("div",null,p.createElement("b",null,"\u4ECE\u54EA\u91CC\u6253\u5F00"),p.createElement("p",null,"\u6309 T\uFF1B\u70B9\u53F3\u4E0A\u89D2\u7684\u300C\u5B66\u4E60\u624B\u518C\u300D\uFF1B\u6216\u70B9\u7AE0\u8282\u6807\u9898\u4E0B\u65B9\u7684\u300C\u5B66\u4E60\u624B\u518C \xB7 \u6559\u6750\u5BF9\u7167\u300D\u5927\u6309\u94AE\u3002\u5173\u95ED\u540E\u56DE\u5230\u539F\u4F4D\u3002"))),p.createElement("div",{className:"ca-guide-block"},p.createElement("span",null,"03"),p.createElement("div",null,p.createElement("b",null,"\u81EA\u52A8\u6F2B\u6E38\u4F1A\u6682\u505C"),p.createElement("p",null,"\u6253\u5F00\u624B\u518C\u3001\u5168\u4E66\u5206\u8282\u6216 3D \u6A21\u578B\u65F6\uFF0C\u81EA\u52A8\u6F2B\u6E38\u4F1A\u6682\u505C\uFF1B\u5173\u95ED\u540E\u624B\u52A8\u7EE7\u7EED\u3002"))))),p.createElement("div",{className:"ca-intro-actions"},p.createElement("button",{type:"button",className:"ca-intro-secondary",onClick:()=>P(0)},"\u2190 \u8FD4\u56DE"),p.createElement("button",{type:"button",className:"ca-enter",onClick:()=>P(2)},p.createElement("span",null,"\u4E0B\u4E00\u6B65\uFF1A\u5168\u4E66\u4E0E\u64CD\u4F5C"),p.createElement(Vt,{name:"arrow",size:15})),p.createElement("span",{className:"ca-intro-count"},"02 / 03"))),E===2&&p.createElement("div",{className:"ca-intro-step ca-intro-guide ca-intro-controls"},p.createElement("div",{className:"ca-intro-eyebrow"},"NAVIGATION & CONTROLS / \u5168\u4E66\u4E0E\u64CD\u4F5C"),p.createElement("h2",{className:"ca-guide-title"},"\u6309 ",p.createElement("kbd",null,"B"),"\uFF0C\u8FDB\u5165 16 \u7AE0 44 \u8282"),p.createElement("div",{className:"ca-controls-grid"},p.createElement("div",{className:"ca-guide-mock ca-book-mock","aria-hidden":"true"},p.createElement("div",{className:"ca-guide-mock-head"},p.createElement("span",null,"BOOK INDEX"),p.createElement("b",null,"\u5168\u4E66\u5206\u8282"),p.createElement("kbd",null,"B")),p.createElement("div",{className:"ca-book-mock-body"},p.createElement("div",{className:"ca-book-mock-row"},p.createElement("span",null,"01"),"\u7EEA\u8BBA",p.createElement("em",null,"2 \u8282")),p.createElement("div",{className:"ca-book-mock-row"},p.createElement("span",null,"02"),"\u7EC6\u80DE\u751F\u7269\u5B66\u7814\u7A76\u65B9\u6CD5",p.createElement("em",null,"4 \u8282")),p.createElement("div",{className:"ca-book-mock-row is-active"},p.createElement("span",null,"03"),"\u7EC6\u80DE\u8D28\u819C",p.createElement("em",null,"2 \u8282")),p.createElement("div",{className:"ca-book-mock-row"},p.createElement("span",null,"04"),"\u7269\u8D28\u7684\u8DE8\u819C\u8FD0\u8F93",p.createElement("em",null,"3 \u8282")),p.createElement("div",{className:"ca-book-mock-row"},p.createElement("span",null,"05"),"\u7EC6\u80DE\u8D28\u57FA\u8D28\u4E0E\u5185\u819C\u7CFB\u7EDF",p.createElement("em",null,"2 \u8282")),p.createElement("div",{className:"ca-book-mock-row"},p.createElement("span",null,"06"),"\u86CB\u767D\u8D28\u5206\u9009\u4E0E\u819C\u6CE1\u8FD0\u8F93",p.createElement("em",null,"2 \u8282")),p.createElement("div",{className:"ca-book-mock-section"},p.createElement("span",null,"\u7B2C\u4E00\u8282"),"\u7EC6\u80DE\u8D28\u819C\u7684\u7ED3\u6784\u6A21\u578B\u4E0E\u57FA\u672C\u6210\u5206",p.createElement("em",null,"3D \u6A21\u578B")))),p.createElement("div",{className:"ca-guide-copy"},p.createElement("div",{className:"ca-guide-block"},p.createElement("span",null,"01"),p.createElement("div",null,p.createElement("b",null,"\u5DE6\u4FA7\u7AE0\u8282\uFF0C\u53F3\u4FA7\u5C0F\u8282"),p.createElement("p",null,"\u6309 B \u6216\u70B9\u53F3\u4E0A\u89D2\u4E66\u672C\u56FE\u6807\u6253\u5F00\u5168\u4E66\u3002\u5DE6\u4FA7 16 \u7AE0\u53EF\u4EE5\u5207\u6362\uFF0C\u53F3\u4FA7\u5217\u51FA\u6BCF\u4E00\u8282\uFF1B\u641C\u7D22\u6846\u53EF\u7B5B\u7AE0\u8282\u548C\u5C0F\u8282\u3002"))),p.createElement("div",{className:"ca-guide-block"},p.createElement("span",null,"02"),p.createElement("div",null,p.createElement("b",null,"\u6BCF\u8282\u90FD\u6709\u5B8C\u6574\u5B66\u4E60\u5361"),p.createElement("p",null,"\u6559\u6750\u9875\u7801\u3001\u5C0F\u8282\u63D0\u7EB2\u3001\u5185\u5BB9\u5B9A\u4F4D\u3001\u673A\u5236\u8981\u70B9\u3001\u5173\u952E\u672F\u8BED\u3001\u53EF\u5C55\u5F00\u81EA\u6D4B\uFF1B\u9875\u9762\u652F\u6301\u76F4\u63A5\u6253\u5370\u3002"))),p.createElement("div",{className:"ca-guide-block"},p.createElement("span",null,"03"),p.createElement("div",null,p.createElement("b",null,"\u6A21\u578B\u540D\u5B57\u5C31\u662F\u5165\u53E3"),p.createElement("p",null,"\u7AE0\u8282\u9876\u90E8\u548C\u6BCF\u4E2A\u5C0F\u8282\u4F1A\u663E\u793A 3D \u6A21\u578B\u540D\u79F0\uFF08\u7ED3\u6784 + \u5B9E\u9A8C\u65B9\u6CD5\uFF09\u3002\u70B9\u51FB\u540D\u79F0\u76F4\u63A5\u89C2\u5BDF\uFF0C\u5173\u95ED\u540E\u56DE\u5230\u8BE5\u5C0F\u8282\u3002"))),p.createElement("div",{className:"ca-guide-block"},p.createElement("span",null,"04"),p.createElement("div",null,p.createElement("b",null,"\u89C2\u5BDF\u52A8\u4F5C\u4E0E\u4EAE\u5EA6"),p.createElement("p",null,"\u62D6\u52A8\u65CB\u8F6C\u3001\u6EDA\u8F6E\u7F29\u653E\u3001\u53CC\u51FB\u91CD\u7F6E\uFF1B\u6A21\u578B\u9875\u53F3\u4E0B\u89D2\u6709 20\u201370 \u7684\u4EAE\u5EA6\u6ED1\u6746\uFF0C\u4E3B\u573A\u666F\u4E5F\u53EF\u7528 \u2212 / = \u8C03\u4EAE\u5EA6\u3002"))))),p.createElement("div",{className:"ca-intro-keymap"},p.createElement("div",null,p.createElement("kbd",null,"\u2190"),p.createElement("kbd",null,"\u2192"),p.createElement("b",null,"\u5207\u6362\u7AE0\u8282")),p.createElement("div",null,p.createElement("kbd",null,"Space"),p.createElement("b",null,"\u6682\u505C / \u7EE7\u7EED")),p.createElement("div",null,p.createElement("kbd",null,"T"),p.createElement("b",null,"\u5B66\u4E60\u624B\u518C")),p.createElement("div",null,p.createElement("kbd",null,"B"),p.createElement("b",null,"\u5168\u4E66\u5206\u8282")),p.createElement("div",null,p.createElement("kbd",null,"F"),p.createElement("b",null,"\u5168\u5C4F")),p.createElement("div",null,p.createElement("kbd",null,"R"),p.createElement("b",null,"\u91CD\u7F6E\u89C6\u89D2")),p.createElement("div",null,p.createElement("kbd",null,"\u2212"),p.createElement("kbd",null,"="),p.createElement("b",null,"\u964D\u4F4E / \u63D0\u9AD8\u4EAE\u5EA6")),p.createElement("div",null,p.createElement("kbd",null,"\u53CC\u51FB"),p.createElement("b",null,"\u91CD\u7F6E\u89C6\u89D2"))),p.createElement("div",{className:"ca-intro-actions"},p.createElement("button",{type:"button",className:"ca-intro-secondary",onClick:()=>P(1)},"\u2190 \u8FD4\u56DE"),p.createElement("button",{type:"button",className:"ca-enter",onClick:re},p.createElement("span",null,i("enter","\u8FDB\u5165\u7EC6\u80DE")),p.createElement(Vt,{name:"arrow",size:15})),p.createElement("span",{className:"ca-intro-count"},"03 / 03")))),p.createElement("div",{className:"ca-intro-skip"},"\u6309 T \u5B66\u4E60\u624B\u518C \xB7 B \u5168\u4E66\u5206\u8282 \xB7 \u62D6\u52A8\u65CB\u8F6C")),y&&!S&&p.createElement(Oy,{chapter:ne,onClose:me,onOpenBook:nt,onOpenModel:Qe,t:i}),I&&!S&&p.createElement(By,{initialChapter:z,onClose:Ot,onJump:oe=>{D(!1),Ue(oe)},onOpenModel:Qe,t:i}),U&&p.createElement(ky,{context:U,onClose:lt,t:i}),S&&p.createElement("div",{className:"ca-error",role:"alert"},p.createElement("div",{className:"ca-error-card"},p.createElement("div",{className:"ca-error-no"},"ERR / WEBGL"),p.createElement("h2",null,i("errorTitle","\u5149\u5B66\u573A\u672A\u80FD\u542F\u52A8")),p.createElement("p",null,i("errorBody","\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u521B\u5EFA WebGL \u4E0A\u4E0B\u6587\u3002\u8BF7\u5C1D\u8BD5\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u7684\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF0C\u7136\u540E\u91CD\u65B0\u6253\u5F00\u7EC6\u80DE\u56FE\u8C31\u3002")),p.createElement("div",{className:"ca-error-detail"},S),p.createElement("div",{className:"ca-error-actions"},p.createElement("button",{type:"button",className:"ca-enter",onClick:()=>window.location.reload()},p.createElement("span",null,"RELOAD")),p.createElement("button",{type:"button",className:"ca-ctrl ca-ctrl-primary",onClick:De,"aria-label":i("close","\u5173\u95ED")},p.createElement(Vt,{name:"close"}))))))}function Hy(){return Qu()?p.createElement(zy,null):null}function ep(i){return p=i,Ss=Ny(),{inject:["slots"],apply(e){let t=e.get("locale");if(t){vr=t;try{e.effect(()=>t.register("cell-atlas","en",Iy)),e.effect(()=>t.register("cell-atlas","zh",jf)),e.effect(()=>t.register("cell-atlas","zh-CN",jf))}catch{}}e.slots.inject("conversation.header.leading",()=>e.slots.register({name:"conversation.header.leading"},Dy)),e.slots.inject("sidebar.footer.action",()=>e.slots.register({name:"sidebar.footer.action",id:"cell-atlas-launcher",order:22,label:()=>Qf("launcherTitle","\u7EC6\u80DE\u56FE\u8C31")},Ly)),e.slots.inject("shell.overlay",()=>e.slots.register({name:"shell.overlay",id:"cell-atlas-overlay",order:60},Hy))}}}var Gy=`
.ca-header-entry {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 30px;
  padding: 0 9px 0 5px;
  margin-right: 8px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 8px;
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 5%, transparent);
  color: var(--dsw-alias-label-secondary);
  font-family: inherit;
  cursor: pointer;
  appearance: none;
  flex: none;
  min-width: 0;
  transition: color .2s ease, border-color .2s ease, background .2s ease, transform .2s ease;
}
.ca-header-entry:hover,
.ca-header-entry:focus-visible {
  color: var(--dsw-alias-label-primary);
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 55%, var(--dsw-alias-border-l1));
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, var(--dsw-alias-bg-layer-1));
  transform: translateY(-1px);
  outline: none;
}
.ca-header-entry:focus-visible {
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--dsw-alias-brand-primary) 28%, transparent);
}
.ca-header-entry.is-open {
  border-color: var(--dsw-alias-brand-primary);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, var(--dsw-alias-bg-layer-1));
  color: var(--dsw-alias-label-primary);
}
.ca-header-entry-mark-wrap {
  position: relative;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  flex: none;
}
.ca-header-entry-mark {
  width: 21px;
  height: 21px;
  color: var(--dsw-alias-label-primary);
  opacity: .82;
}
.ca-header-entry-live {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--dsw-alias-brand-primary);
  box-shadow: 0 0 6px color-mix(in srgb, var(--dsw-alias-brand-primary) 70%, transparent);
}
.ca-header-entry-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  line-height: 1;
}
.ca-header-entry-cn {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: .08em;
  color: var(--dsw-alias-label-primary);
  white-space: nowrap;
}
.ca-header-entry-en {
  margin-top: 3px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 6px;
  letter-spacing: .2em;
  color: var(--dsw-alias-label-secondary);
  white-space: nowrap;
}
.ca-header-entry > svg {
  flex: none;
  opacity: .42;
  margin-left: 1px;
}
@media (max-width: 760px) {
  .ca-header-entry {
    width: 30px;
    padding: 0;
    justify-content: center;
    margin-right: 4px;
  }
  .ca-header-entry-text,
  .ca-header-entry > svg {
    display: none;
  }
}
`,Vy=`
.ca-launcher {
  position: relative;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 9px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
  transition: color .22s ease, background .22s ease, border-color .22s ease, transform .22s ease;
  overflow: visible;
}
.ca-launcher:hover,
.ca-launcher:focus-visible {
  color: var(--dsw-alias-label-primary);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent);
  border-color: var(--dsw-alias-border-l1);
  outline: none;
}
.ca-launcher.is-open {
  color: var(--dsw-alias-brand-primary);
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 40%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent);
}
.ca-launcher-mark {
  width: 21px;
  height: 21px;
  position: relative;
  z-index: 2;
  transition: transform .5s cubic-bezier(.2,.8,.2,1);
}
.ca-launcher:hover .ca-launcher-mark { transform: rotate(14deg) scale(1.06); }
.ca-launcher-halo {
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--dsw-alias-brand-primary) 32%, transparent), transparent 70%);
  filter: blur(5px);
  opacity: 0;
  transition: opacity .3s ease;
}
.ca-launcher:hover .ca-launcher-halo { opacity: .9; }
.ca-launcher-dot {
  position: absolute;
  right: 4px;
  bottom: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--dsw-alias-brand-primary);
  box-shadow: 0 0 8px color-mix(in srgb, var(--dsw-alias-brand-primary) 80%, transparent);
  opacity: .7;
}
`,Wy=`
.ca-root {
  position: fixed;
  inset: 0;
  z-index: 2147483000;
  overflow: hidden;
  pointer-events: auto;
  background: #02060b;
  color: #e8fbf7;
  font-family: "Inter", "SF Pro Display", "Segoe UI", system-ui, "Microsoft YaHei", sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
  isolation: isolate;
}
.ca-root *,
.ca-root *::before,
.ca-root *::after { box-sizing: border-box; }
.ca-root button { font: inherit; color: inherit; }
.ca-root ::selection { background: rgba(127,247,228,.3); color: #fff; }

.ca-fallback {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background:
    radial-gradient(45% 48% at 50% 52%, rgba(13,92,96,.45), transparent 70%),
    radial-gradient(30% 36% at 30% 38%, rgba(151,33,99,.16), transparent 75%),
    radial-gradient(35% 40% at 68% 64%, rgba(71,55,180,.16), transparent 75%),
    #02060b;
}
.ca-fallback-cell {
  position: absolute;
  left: 50%;
  top: 50%;
  width: min(60vw, 60vh);
  height: min(60vw, 60vh);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid rgba(127,247,228,.2);
  background: radial-gradient(circle at 36% 30%, rgba(45,219,205,.22), rgba(20,76,96,.13) 45%, rgba(4,12,18,.05) 70%);
  box-shadow: 0 0 120px rgba(31,182,201,.22), inset 0 0 90px rgba(127,247,228,.1);
  filter: blur(.4px);
  animation: caFallbackBreath 8s ease-in-out infinite;
}
.ca-fallback-cell::before,
.ca-fallback-cell::after {
  content: "";
  position: absolute;
  inset: 12%;
  border-radius: 50%;
  border: 1px solid rgba(255,110,180,.16);
  transform: rotate(24deg) scaleY(.42);
}
.ca-fallback-cell::after {
  inset: 28%;
  border-color: rgba(127,247,228,.22);
  transform: rotate(-38deg) scaleY(.5);
}
.ca-fallback-glow {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 28vw;
  height: 28vw;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,93,173,.2), rgba(127,247,228,.08) 40%, transparent 68%);
  filter: blur(30px);
}
@keyframes caFallbackBreath {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: .82; }
  50% { transform: translate(-50%, -50%) scale(1.035); opacity: 1; }
}

.ca-canvas {
  position: absolute;
  inset: 0;
  z-index: 1;
}
.ca-canvas canvas { opacity: 0; transition: opacity 1.6s cubic-bezier(.2,.7,.2,1); cursor: grab; }
.ca-canvas.is-ready canvas { opacity: 1; }
.ca-canvas canvas:active { cursor: grabbing; }

.ca-grain,
.ca-scanlines,
.ca-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.ca-grain {
  z-index: 3;
  opacity: .16;
  mix-blend-mode: soft-light;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E");
}
.ca-scanlines {
  z-index: 3;
  opacity: .16;
  background: repeating-linear-gradient(to bottom, rgba(215,255,248,.055) 0, rgba(215,255,248,.055) 1px, transparent 1px, transparent 3px);
  animation: caScanDrift 16s linear infinite;
}
@keyframes caScanDrift { from { background-position-y: 0; } to { background-position-y: 120px; } }
.ca-vignette {
  z-index: 3;
  background:
    linear-gradient(90deg, rgba(1,5,9,.56) 0%, rgba(1,5,9,.14) 24%, transparent 44%, transparent 72%, rgba(1,5,9,.34) 100%),
    radial-gradient(ellipse at 50% 50%, transparent 54%, rgba(0,4,8,.52) 100%);
}

.ca-frame { position: absolute; inset: 12px; z-index: 4; pointer-events: none; }
.ca-corner {
  position: absolute;
  width: 26px;
  height: 26px;
  border-color: rgba(127,247,228,.28);
  border-style: solid;
}
.ca-corner-tl { left: 0; top: 0; border-width: 1px 0 0 1px; }
.ca-corner-tr { right: 0; top: 0; border-width: 1px 1px 0 0; }
.ca-corner-bl { left: 0; bottom: 0; border-width: 0 0 1px 1px; }
.ca-corner-br { right: 0; bottom: 0; border-width: 0 1px 1px 0; }

.ca-reticle {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 34px;
  height: 34px;
  z-index: 4;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid rgba(127,247,228,.13);
  pointer-events: none;
  opacity: .55;
}
.ca-reticle::before,
.ca-reticle::after {
  content: "";
  position: absolute;
  background: rgba(127,247,228,.24);
}
.ca-reticle::before { width: 10px; height: 1px; left: 11px; top: 16px; }
.ca-reticle::after { width: 1px; height: 10px; left: 16px; top: 11px; }

.ca-ui {
  position: absolute;
  inset: 0;
  z-index: 6;
  display: flex;
  flex-direction: column;
  padding: 26px 32px 20px;
  pointer-events: none;
}
.ca-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  position: relative;
  flex: none;
}
.ca-brand { display: flex; align-items: center; gap: 11px; }
.ca-brand-mark {
  width: 37px;
  height: 37px;
  color: rgba(232,251,247,.66);
  filter: drop-shadow(0 0 12px rgba(127,247,228,.14));
  flex: none;
}
.ca-wordmark {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 11px;
  line-height: 1.2;
  letter-spacing: .35em;
  color: rgba(232,251,247,.78);
  white-space: nowrap;
}
.ca-wordmark span { color: var(--ca-accent); }
.ca-wordmark-cn {
  margin-top: 6px;
  font-size: 10px;
  letter-spacing: .12em;
  color: rgba(201,233,228,.44);
  white-space: nowrap;
}
.ca-topreadout {
  position: absolute;
  left: 50%;
  top: 4px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  letter-spacing: .22em;
  color: rgba(201,233,228,.42);
  white-space: nowrap;
}
.ca-topreadout-sep { opacity: .35; }
.ca-live-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--ca-accent);
  box-shadow: 0 0 9px var(--ca-accent);
  animation: caLivePulse 2.4s ease-in-out infinite;
}
@keyframes caLivePulse {
  0%, 100% { opacity: .35; transform: scale(.8); }
  50% { opacity: 1; transform: scale(1); }
}
.ca-topright { display: flex; align-items: center; gap: 12px; }
.ca-study-toggle {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 42px;
  padding: 0 17px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 42%, rgba(127,247,228,.18));
  border-radius: 999px;
  background: color-mix(in srgb, var(--ca-accent) 8%, rgba(3,12,16,.58));
  color: var(--ca-accent);
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: .08em;
  cursor: pointer;
  backdrop-filter: blur(10px);
  pointer-events: auto;
  flex: none;
  transition: color .25s ease, border-color .25s ease, background .25s ease, box-shadow .25s ease;
}
.ca-study-toggle:hover,
.ca-study-toggle:focus-visible {
  color: #fff;
  border-color: var(--ca-accent);
  background: rgba(17,46,48,.52);
  box-shadow: 0 0 18px color-mix(in srgb, var(--ca-accent) 16%, transparent);
  outline: none;
}
.ca-study-toggle[aria-expanded="true"] {
  color: var(--ca-accent);
  border-color: color-mix(in srgb, var(--ca-accent) 55%, transparent);
  background: color-mix(in srgb, var(--ca-accent) 9%, rgba(3,12,16,.5));
}
.ca-study-toggle > svg { flex: none; opacity: .8; }
.ca-book-btn {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  padding: 0;
  flex: none;
  border: 1px solid rgba(127,247,228,.2);
  border-radius: 50%;
  background: rgba(3,12,16,.3);
  color: var(--ca-accent);
  cursor: pointer;
  pointer-events: auto;
  backdrop-filter: blur(10px);
  transition: color .25s ease, border-color .25s ease, background .25s ease, box-shadow .25s ease;
}
.ca-book-btn:hover,
.ca-book-btn:focus-visible {
  color: #fff;
  border-color: var(--ca-accent);
  background: rgba(17,46,48,.52);
  box-shadow: 0 0 16px color-mix(in srgb, var(--ca-accent) 18%, transparent);
  outline: none;
}
.ca-counter {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 10px;
  letter-spacing: .18em;
  color: rgba(201,233,228,.42);
  display: flex;
  align-items: baseline;
  gap: 7px;
}
.ca-counter b {
  font-size: 17px;
  font-weight: 400;
  letter-spacing: .05em;
  color: var(--ca-accent);
}
.ca-iconbtn {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  padding: 0;
  border-radius: 50%;
  border: 1px solid rgba(127,247,228,.2);
  background: rgba(3,12,16,.3);
  color: rgba(232,251,247,.82);
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: border-color .25s ease, background .25s ease, color .25s ease, transform .25s ease;
  pointer-events: auto;
}
.ca-iconbtn:hover,
.ca-iconbtn:focus-visible {
  color: #fff;
  border-color: var(--ca-accent);
  background: rgba(17,46,48,.52);
  transform: rotate(90deg);
  outline: none;
}

.ca-stage { position: relative; flex: 1; min-height: 0; }

.ca-caption {
  position: absolute;
  left: 0;
  bottom: clamp(38px, 7vh, 88px);
  width: min(570px, 47vw);
  pointer-events: none;
  z-index: 2;
}
.ca-caption::before {
  content: "";
  position: absolute;
  inset: -30px -70px -30px -38px;
  z-index: -1;
  background: radial-gradient(ellipse at 18% 52%, rgba(1,6,10,.72), rgba(1,6,10,.24) 48%, transparent 72%);
  filter: blur(10px);
}
.ca-caption > * {
  animation: caCaptionIn .95s cubic-bezier(.16,.84,.24,1) both;
}
.ca-caption > *:nth-child(1) { animation-delay: .03s; }
.ca-caption > *:nth-child(2) { animation-delay: .1s; }
.ca-caption > *:nth-child(3) { animation-delay: .16s; }
.ca-caption > *:nth-child(4) { animation-delay: .22s; }
.ca-caption > *:nth-child(5) { animation-delay: .3s; }
@keyframes caCaptionIn {
  from { opacity: 0; transform: translateY(20px); filter: blur(7px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}
.ca-kicker {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: .3em;
  color: var(--ca-accent);
  text-transform: uppercase;
}
.ca-kicker-line {
  display: inline-block;
  width: 34px;
  height: 1px;
  background: var(--ca-accent);
  box-shadow: 0 0 8px var(--ca-accent);
}
.ca-kicker-slash { color: rgba(201,233,228,.32); margin: 0 3px; }
.ca-caption h1 {
  margin: 17px 0 9px;
  font-family: "Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", SimSun, serif;
  font-size: clamp(38px, 4.25vw, 62px);
  font-weight: 300;
  line-height: 1.08;
  letter-spacing: .025em;
  color: #dcefe9;
  text-shadow: 0 4px 28px rgba(0,0,0,.58), 0 0 44px rgba(127,247,228,.05);
}
.ca-en {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 9px;
  letter-spacing: .27em;
  color: rgba(201,233,228,.42);
  text-transform: uppercase;
  margin-bottom: 12px;
}
.ca-textbook-chip {
  display: flex;
  align-items: center;
  gap: 12px;
  width: min(100%, 440px);
  min-height: 54px;
  margin: 0 0 17px;
  padding: 9px 12px 9px 10px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 45%, rgba(127,247,228,.16));
  border-radius: 8px;
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--ca-accent) 9%, rgba(5,18,21,.62)), rgba(4,14,18,.4));
  color: rgba(232,251,247,.8);
  font-family: inherit;
  cursor: pointer;
  pointer-events: auto;
  text-align: left;
  box-shadow: inset 2px 0 0 color-mix(in srgb, var(--ca-accent) 70%, transparent);
  transition: border-color .25s ease, background .25s ease, box-shadow .25s ease, transform .25s ease;
}
.ca-textbook-chip:hover,
.ca-textbook-chip:focus-visible {
  border-color: color-mix(in srgb, var(--ca-accent) 70%, transparent);
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--ca-accent) 14%, rgba(6,22,24,.74)), rgba(5,18,21,.5));
  box-shadow:
    inset 2px 0 0 var(--ca-accent),
    0 0 22px color-mix(in srgb, var(--ca-accent) 10%, transparent);
  outline: none;
  transform: translateY(-1px);
}
.ca-textbook-chip-icon {
  flex: none;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 38%, transparent);
  border-radius: 6px;
  color: var(--ca-accent);
  background: color-mix(in srgb, var(--ca-accent) 7%, transparent);
}
.ca-textbook-chip-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.ca-textbook-chip-top {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 7px;
}
.ca-textbook-chip-top > b {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .08em;
  color: rgba(240,255,251,.92);
  white-space: nowrap;
}
.ca-textbook-chip-top > em {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8.5px;
  font-style: normal;
  letter-spacing: .05em;
  color: var(--ca-accent);
  opacity: .75;
  white-space: nowrap;
}
.ca-textbook-chip-sub {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  line-height: 1.5;
  letter-spacing: .04em;
  color: rgba(201,233,228,.44);
  white-space: nowrap;
}
.ca-textbook-chip-key {
  flex: none;
  width: 23px;
  height: 23px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(201,233,228,.28);
  border-radius: 4px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 10px;
  color: rgba(232,251,247,.68);
  background: rgba(2,10,14,.35);
}
.ca-textbook-chip > svg {
  flex: none;
  color: var(--ca-accent);
  opacity: .55;
}
.ca-body {
  margin: 0;
  max-width: 520px;
  font-size: 13.5px;
  line-height: 1.92;
  letter-spacing: .035em;
  color: rgba(216,241,236,.66);
  text-wrap: pretty;
}
.ca-facts {
  display: flex;
  gap: 30px;
  margin-top: 23px;
  padding-top: 15px;
  border-top: 1px solid rgba(127,247,228,.16);
  max-width: 540px;
}
.ca-fact { min-width: 0; animation: caCaptionIn .9s cubic-bezier(.16,.84,.24,1) both; animation-delay: calc(.32s + var(--i) * .08s); }
.ca-fact-k {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  letter-spacing: .14em;
  color: rgba(201,233,228,.38);
  white-space: nowrap;
}
.ca-fact-v {
  margin-top: 5px;
  font-size: 13px;
  letter-spacing: .03em;
  color: rgba(232,251,247,.8);
  white-space: nowrap;
}
.ca-fact-v::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-right: 8px;
  border-radius: 50%;
  background: var(--ca-accent);
  box-shadow: 0 0 8px var(--ca-accent);
  vertical-align: 2px;
}

.ca-readout {
  position: absolute;
  right: 0;
  top: 2px;
  text-align: right;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  letter-spacing: .18em;
  line-height: 1.8;
  color: rgba(201,233,228,.38);
  white-space: nowrap;
}
.ca-readout-sub { color: rgba(201,233,228,.24); }
.ca-readout-sub span { opacity: .5; margin: 0 3px; }

.ca-rail {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 13px;
  z-index: 2;
}
.ca-rail button {
  pointer-events: auto;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 9px;
  padding: 2px 0;
  border: 0;
  background: transparent;
  color: rgba(201,233,228,.42);
  cursor: pointer;
  opacity: .62;
  transition: color .3s ease, opacity .3s ease;
  outline: none;
}
.ca-rail button:hover,
.ca-rail button:focus-visible { color: var(--ca-accent); opacity: 1; }
.ca-rail button.is-active { color: var(--ca-accent); opacity: 1; }
.ca-rail-no {
  width: 18px;
  text-align: right;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  letter-spacing: .05em;
}
.ca-rail-line {
  width: 18px;
  height: 1px;
  background: currentColor;
  opacity: .55;
  transition: width .35s ease, box-shadow .35s ease;
}
.ca-rail button.is-active .ca-rail-line {
  width: 38px;
  box-shadow: 0 0 9px var(--ca-accent);
  opacity: 1;
}
.ca-rail-title {
  font-size: 10px;
  letter-spacing: .08em;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(7px);
  transition: opacity .3s ease, transform .3s ease;
}
.ca-rail button.is-active .ca-rail-title,
.ca-rail button:hover .ca-rail-title,
.ca-rail button:focus-visible .ca-rail-title {
  opacity: 1;
  transform: translateX(0);
}

.ca-spine {
  position: absolute;
  left: 3px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 18px;
  writing-mode: vertical-rl;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  letter-spacing: .28em;
  color: rgba(201,233,228,.22);
  opacity: .8;
  pointer-events: none;
}

.ca-footer {
  display: flex;
  align-items: center;
  gap: 24px;
  flex: none;
  padding-top: 13px;
  border-top: 1px solid rgba(127,247,228,.12);
}
.ca-auto {
  display: flex;
  align-items: center;
  gap: 9px;
  min-width: 250px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 9.5px;
  letter-spacing: .12em;
  color: rgba(201,233,228,.52);
}
.ca-auto-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px solid rgba(201,233,228,.4);
  background: transparent;
  transition: background .3s ease, border-color .3s ease;
}
.ca-auto-dot.is-live {
  background: var(--ca-accent);
  border-color: var(--ca-accent);
  box-shadow: 0 0 8px var(--ca-accent);
  animation: caLivePulse 2s ease-in-out infinite;
}
.ca-auto-label { color: rgba(232,251,247,.72); white-space: nowrap; }
.ca-auto-sep { opacity: .3; }
.ca-hint {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  opacity: 1;
  font-size: 9.5px;
  color: rgba(201,233,228,.68);
}
.ca-hint kbd {
  display: inline-grid;
  place-items: center;
  min-width: 17px;
  height: 17px;
  padding: 0 4px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 45%, transparent);
  border-bottom-color: color-mix(in srgb, var(--ca-accent) 70%, transparent);
  border-radius: 3px;
  background: color-mix(in srgb, var(--ca-accent) 7%, rgba(2,10,14,.6));
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  line-height: 1;
  color: var(--ca-accent);
  box-shadow: 0 0 8px color-mix(in srgb, var(--ca-accent) 12%, transparent);
}

.ca-timeline {
  display: flex;
  gap: 6px;
  flex: 1;
  min-width: 160px;
}
.ca-seg {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 3px 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  pointer-events: auto;
  opacity: .55;
  transition: opacity .3s ease;
}
.ca-seg:hover,
.ca-seg:focus-visible,
.ca-seg.is-active { opacity: 1; outline: none; }
.ca-seg-track {
  position: relative;
  display: block;
  height: 2px;
  background: rgba(201,233,228,.17);
  overflow: hidden;
}
.ca-seg-fill {
  position: absolute;
  inset: 0;
  background: var(--ca-accent);
  transform-origin: left center;
  box-shadow: 0 0 8px var(--ca-accent);
  transition: transform .12s linear;
}
.ca-seg-label {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  letter-spacing: .1em;
  color: rgba(201,233,228,.34);
  text-align: left;
}
.ca-seg.is-active .ca-seg-label { color: var(--ca-accent); }
.ca-seg[data-complete="true"] .ca-seg-fill { background: rgba(201,233,228,.42); box-shadow: none; }

.ca-controls { display: flex; align-items: center; gap: 7px; pointer-events: auto; }
.ca-lum {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 8px;
  border: 1px solid rgba(201,233,228,.13);
  border-radius: 999px;
  background: rgba(2,10,14,.28);
  color: rgba(201,233,228,.44);
  pointer-events: auto;
  flex: none;
  cursor: pointer;
  backdrop-filter: blur(8px);
}
.ca-lum > svg { flex: none; opacity: .7; }
.ca-lum input[type="range"] {
  appearance: none;
  -webkit-appearance: none;
  width: 56px;
  height: 16px;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}
.ca-lum input[type="range"]::-webkit-slider-runnable-track {
  height: 2px;
  border-radius: 2px;
  background: rgba(201,233,228,.25);
}
.ca-lum input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 9px;
  height: 9px;
  margin-top: -3.5px;
  border: 0;
  border-radius: 50%;
  background: var(--ca-accent);
  box-shadow: 0 0 7px color-mix(in srgb, var(--ca-accent) 65%, transparent);
}
.ca-lum input[type="range"]::-moz-range-track {
  height: 2px;
  border: 0;
  border-radius: 2px;
  background: rgba(201,233,228,.25);
}
.ca-lum input[type="range"]::-moz-range-thumb {
  width: 9px;
  height: 9px;
  border: 0;
  border-radius: 50%;
  background: var(--ca-accent);
  box-shadow: 0 0 7px color-mix(in srgb, var(--ca-accent) 65%, transparent);
}
.ca-lum:focus-within,
.ca-lum:hover { border-color: rgba(201,233,228,.32); color: rgba(232,251,247,.7); }
.ca-lum-value {
  width: 16px;
  text-align: right;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  letter-spacing: .04em;
  color: rgba(201,233,228,.45);
}
.ca-ctrl {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  padding: 0;
  border-radius: 50%;
  border: 1px solid rgba(201,233,228,.18);
  background: rgba(2,10,14,.28);
  color: rgba(232,251,247,.74);
  cursor: pointer;
  transition: color .22s ease, border-color .22s ease, background .22s ease, transform .22s ease;
  backdrop-filter: blur(8px);
}
.ca-ctrl:hover,
.ca-ctrl:focus-visible {
  color: #fff;
  border-color: var(--ca-accent);
  background: rgba(14,40,42,.5);
  outline: none;
}
.ca-ctrl:active { transform: scale(.94); }
.ca-ctrl:disabled { opacity: .24; cursor: default; }
.ca-ctrl:disabled:hover { color: rgba(232,251,247,.74); border-color: rgba(201,233,228,.18); background: rgba(2,10,14,.28); }
.ca-ctrl-primary {
  width: 39px;
  height: 39px;
  color: #03110f;
  border-color: transparent;
  background: var(--ca-accent);
  box-shadow: 0 0 20px color-mix(in srgb, var(--ca-accent) 36%, transparent);
}
.ca-ctrl-primary:hover,
.ca-ctrl-primary:focus-visible {
  color: #03110f;
  background: var(--ca-accent);
  border-color: transparent;
  box-shadow: 0 0 28px color-mix(in srgb, var(--ca-accent) 55%, transparent);
}
.ca-ctrl-quiet { border-color: transparent; background: transparent; }

.ca-study-backdrop {
  position: absolute;
  inset: 0;
  z-index: 30;
  display: flex;
  justify-content: flex-end;
  background: rgba(0,4,8,.6);
  backdrop-filter: blur(10px);
  pointer-events: auto;
  animation: caStudyFade .28s ease both;
}
@keyframes caStudyFade { from { opacity: 0; } to { opacity: 1; } }
.ca-study-panel {
  position: relative;
  width: min(600px, 94vw);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 100% 0%, color-mix(in srgb, var(--ca-accent) 7%, transparent), transparent 44%),
    linear-gradient(165deg, rgba(7,19,24,.985), rgba(2,7,11,.995));
  border-left: 1px solid rgba(127,247,228,.22);
  box-shadow: -42px 0 110px rgba(0,0,0,.55);
  animation: caStudyIn .48s cubic-bezier(.2,.82,.2,1) both;
}
@keyframes caStudyIn {
  from { transform: translateX(45px); opacity: .3; }
  to { transform: translateX(0); opacity: 1; }
}
.ca-study-panel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--ca-accent), transparent 70%);
  opacity: .8;
  z-index: 2;
}
.ca-study-panel:focus { outline: none; }
.ca-study-head {
  flex: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 28px 28px 20px;
  border-bottom: 1px solid rgba(127,247,228,.14);
}
.ca-study-heading { min-width: 0; }
.ca-study-eyebrow {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  letter-spacing: .28em;
  color: var(--ca-accent);
  text-transform: uppercase;
  opacity: .85;
}
.ca-study-head h2 {
  margin: 9px 0 9px;
  font-family: "Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", SimSun, serif;
  font-size: clamp(22px, 2.4vw, 30px);
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: .03em;
  color: rgba(232,251,247,.92);
}
.ca-study-meta {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  line-height: 1.7;
  letter-spacing: .06em;
  color: rgba(201,233,228,.4);
}
.ca-study-close { flex: none; width: 34px; height: 34px; }
.ca-study-close:hover { transform: rotate(90deg); }
.ca-study-scroll {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 8px 28px 38px;
  scrollbar-width: thin;
  scrollbar-color: rgba(127,247,228,.22) transparent;
}
.ca-study-scroll::-webkit-scrollbar { width: 6px; }
.ca-study-scroll::-webkit-scrollbar-track { background: transparent; }
.ca-study-scroll::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: rgba(127,247,228,.2);
}
.ca-study-book-cta {
  display: flex;
  align-items: center;
  gap: 11px;
  width: 100%;
  margin: 18px 0 2px;
  padding: 10px 11px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 40%, rgba(127,247,228,.14));
  border-radius: 8px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--ca-accent) 10%, rgba(5,18,21,.62)), rgba(4,14,18,.4));
  color: rgba(232,251,247,.8);
  text-align: left;
  cursor: pointer;
  box-shadow: inset 2px 0 0 color-mix(in srgb, var(--ca-accent) 70%, transparent);
  transition: border-color .25s ease, background .25s ease, transform .25s ease;
}
.ca-study-book-cta:hover,
.ca-study-book-cta:focus-visible {
  border-color: var(--ca-accent);
  background: color-mix(in srgb, var(--ca-accent) 12%, rgba(5,18,21,.7));
  transform: translateY(-1px);
  outline: none;
}
.ca-study-book-cta-icon {
  flex: none;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 38%, transparent);
  border-radius: 6px;
  color: var(--ca-accent);
  background: color-mix(in srgb, var(--ca-accent) 7%, transparent);
}
.ca-study-book-cta-copy { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.ca-study-book-cta-copy b { font-size: 13px; font-weight: 500; letter-spacing: .05em; color: rgba(240,255,251,.92); }
.ca-study-book-cta-copy em { font-family: var(--mono); font-size: 8px; font-style: normal; color: rgba(201,233,228,.45); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ca-study-book-cta-key {
  flex: none;
  width: 21px;
  height: 21px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(201,233,228,.25);
  border-radius: 4px;
  font-family: var(--mono);
  font-size: 9px;
  color: rgba(232,251,247,.55);
}
.ca-study-book-cta > svg { flex: none; color: var(--ca-accent); opacity: .55; }
.ca-study-model-index {
  margin-top: 12px;
  padding: 10px 11px;
  border: 1px solid rgba(127,247,228,.12);
  border-radius: 7px;
  background: rgba(4,14,18,.32);
}
.ca-study-model-head { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; margin-bottom: 8px; }
.ca-study-model-head > span { font-family: var(--mono); font-size: 8px; letter-spacing: .14em; color: var(--ca-accent); opacity: .72; }
.ca-study-model-head > em { font-family: var(--mono); font-size: 7px; font-style: normal; color: rgba(201,233,228,.34); }
.ca-study-model-links { display: flex; flex-direction: column; gap: 8px; }
.ca-study-model-group-label { margin-bottom: 4px; font-family: var(--mono); font-size: 6.5px; letter-spacing: .12em; color: rgba(201,233,228,.32); }
.ca-study-model-group-links { display: flex; flex-wrap: wrap; gap: 5px; }
.ca-study-model-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 7px;
  border: 1px solid rgba(127,247,228,.13);
  border-radius: 4px;
  background: transparent;
  color: rgba(232,251,247,.68);
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: .02em;
  cursor: pointer;
  transition: .2s ease;
}
.ca-study-model-link > span { color: var(--ca-accent); opacity: .55; font-size: 7px; }
.ca-study-model-link:hover,
.ca-study-model-link:focus-visible { border-color: var(--ca-accent); color: var(--ca-accent); background: color-mix(in srgb, var(--ca-accent) 8%, transparent); outline: none; }
.ca-study-section {
  padding-top: 24px;
}
.ca-study-section + .ca-study-section {
  margin-top: 24px;
  border-top: 1px solid rgba(127,247,228,.12);
}
.ca-study-label {
  display: flex;
  align-items: baseline;
  gap: 9px;
  margin-bottom: 14px;
}
.ca-study-label > span {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  color: var(--ca-accent);
  opacity: .75;
}
.ca-study-label > b {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: .12em;
  color: rgba(232,251,247,.85);
}
.ca-study-label > em {
  margin-left: auto;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  font-style: normal;
  letter-spacing: .18em;
  color: rgba(201,233,228,.26);
}
.ca-study-objectives {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ca-study-objectives li {
  position: relative;
  margin: 10px 0;
  padding-left: 22px;
  font-size: 12.5px;
  line-height: 1.8;
  color: rgba(220,242,236,.76);
}
.ca-study-objectives li::before {
  content: "";
  position: absolute;
  left: 0;
  top: .78em;
  width: 11px;
  height: 1px;
  background: var(--ca-accent);
  box-shadow: 0 0 6px var(--ca-accent);
}
.ca-concepts { margin: 0; }
.ca-concept {
  display: grid;
  grid-template-columns: 158px minmax(0, 1fr);
  gap: 18px;
  padding: 12px 0;
  border-top: 1px solid rgba(127,247,228,.09);
}
.ca-concept:first-child { border-top: 0; padding-top: 0; }
.ca-concept dt {
  margin: 0;
  min-width: 0;
}
.ca-concept dt > span {
  display: block;
  font-size: 12.5px;
  line-height: 1.5;
  letter-spacing: .03em;
  color: rgba(232,251,247,.88);
}
.ca-concept dt > em {
  display: block;
  margin-top: 4px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: .04em;
  color: var(--ca-accent);
  opacity: .56;
  overflow-wrap: anywhere;
}
.ca-concept dd {
  margin: 0;
  font-size: 12px;
  line-height: 1.82;
  color: rgba(210,236,230,.62);
}
.ca-study-mechanism {
  counter-reset: ca-step;
  list-style: none;
  margin: 0;
  padding: 0;
}
.ca-study-mechanism li {
  counter-increment: ca-step;
  position: relative;
  margin: 12px 0;
  padding-left: 30px;
  font-size: 12px;
  line-height: 1.85;
  color: rgba(210,236,230,.68);
}
.ca-study-mechanism li::before {
  content: counter(ca-step, decimal-leading-zero);
  position: absolute;
  left: 0;
  top: 3px;
  width: 19px;
  height: 19px;
  display: grid;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 42%, transparent);
  border-radius: 50%;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  color: var(--ca-accent);
  opacity: .8;
}
.ca-study-traps {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ca-study-traps li {
  position: relative;
  margin: 10px 0;
  padding: 5px 0 5px 14px;
  border-left: 1px solid rgba(255,116,183,.42);
  font-size: 12px;
  line-height: 1.8;
  color: rgba(220,242,236,.7);
}
.ca-study-traps li::before {
  content: "!";
  position: absolute;
  left: -5px;
  top: 9px;
  width: 9px;
  height: 9px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #081218;
  color: #ff8fc1;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 7px;
}
.ca-quiz-list { display: flex; flex-direction: column; gap: 8px; }
.ca-quiz {
  border: 1px solid rgba(127,247,228,.12);
  border-radius: 6px;
  background: rgba(4,13,17,.35);
  overflow: hidden;
  transition: border-color .25s ease, background .25s ease;
}
.ca-quiz.is-open {
  border-color: color-mix(in srgb, var(--ca-accent) 28%, rgba(127,247,228,.12));
  background: rgba(5,17,21,.5);
}
.ca-quiz-q {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 12px;
  border: 0;
  background: transparent;
  color: rgba(232,251,247,.8);
  text-align: left;
  cursor: pointer;
}
.ca-quiz-q:focus-visible { outline: 1px solid var(--ca-accent); outline-offset: -1px; }
.ca-quiz-no {
  flex: none;
  padding-top: 2px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  letter-spacing: .06em;
  color: var(--ca-accent);
  opacity: .7;
}
.ca-quiz-text {
  flex: 1;
  font-size: 12px;
  line-height: 1.75;
  color: rgba(232,251,247,.8);
}
.ca-quiz-q > svg { flex: none; margin-top: 2px; opacity: .45; }
.ca-quiz-a {
  display: flex;
  gap: 10px;
  padding: 0 12px 13px 38px;
  animation: caQuizIn .3s ease both;
}
@keyframes caQuizIn { from { opacity: 0; transform: translateY(-3px); } to { opacity: 1; transform: translateY(0); } }
.ca-quiz-a-label {
  flex: none;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 8px;
  letter-spacing: .06em;
  color: var(--ca-accent);
  padding-top: 2px;
  opacity: .75;
}
.ca-quiz-a p {
  margin: 0;
  font-size: 11.5px;
  line-height: 1.82;
  color: rgba(201,233,228,.62);
}
.ca-visuals {
  display: flex;
  flex-wrap: wrap;
  gap: 7px 8px;
}
.ca-visual {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 9px;
  border: 1px solid rgba(127,247,228,.12);
  border-radius: 4px;
  background: rgba(4,14,18,.35);
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: .03em;
  color: rgba(210,236,230,.66);
}
.ca-visual-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: 0 0 6px currentColor;
  flex: none;
}
.ca-related {
  list-style: none;
  margin: 0;
  padding: 0;
}.ca-related li {
  position: relative;
  margin: 8px 0;
  padding-left: 17px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  line-height: 1.8;
  letter-spacing: .04em;
  color: rgba(201,233,228,.52);
}
.ca-related li::before {
  content: "\u2197";
  position: absolute;
  left: 0;
  color: var(--ca-accent);
  opacity: .55;
}
.ca-study-sections {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 17px;
  padding-top: 14px;
  border-top: 1px solid rgba(127,247,228,.1);
}
.ca-study-sections > span {
  width: 100%;
  margin-bottom: 2px;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 7px;
  letter-spacing: .14em;
  color: rgba(201,233,228,.3);
}
.ca-study-sections > em {
  padding: 3px 7px;
  border: 1px solid rgba(127,247,228,.12);
  border-radius: 4px;
  font-style: normal;
  font-size: 9px;
  line-height: 1.5;
  color: rgba(201,233,228,.46);
}
.ca-study-footer {
  display: flex;
  gap: 14px;
  margin-top: 30px;
  padding-top: 18px;
  border-top: 1px solid rgba(127,247,228,.12);
}
.ca-study-footer-mark {
  flex: none;
  width: 26px;
  height: 32px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(127,247,228,.2);
  border-radius: 3px;
  font-family: "Songti SC", "Noto Serif SC", "STSong", serif;
  font-size: 15px;
  color: var(--ca-accent);
  opacity: .65;
}
.ca-study-footer p {
  margin: 0;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  line-height: 1.8;
  letter-spacing: .02em;
  color: rgba(201,233,228,.3);
}

.ca-book-backdrop {
  position: absolute;
  inset: 0;
  z-index: 40;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(0,4,8,.74);
  backdrop-filter: blur(12px);
  pointer-events: auto;
  animation: caStudyFade .28s ease both;
}
.ca-book-panel {
  width: min(1180px, 96vw);
  height: min(900px, 92vh);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(127,247,228,.22);
  border-radius: 10px;
  background:
    radial-gradient(ellipse at 100% 0%, color-mix(in srgb, var(--ca-accent) 7%, transparent), transparent 42%),
    linear-gradient(165deg, rgba(6,18,23,.995), rgba(2,7,11,.998));
  box-shadow: 0 30px 120px rgba(0,0,0,.65);
  animation: caBookIn .45s cubic-bezier(.2,.82,.2,1) both;
}
.ca-book-panel:focus { outline: none; }
@keyframes caBookIn {
  from { opacity: 0; transform: translateY(18px) scale(.985); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.ca-book-head {
  flex: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 28px 18px;
  border-bottom: 1px solid rgba(127,247,228,.14);
  position: relative;
}
.ca-book-head::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 170px;
  height: 2px;
  background: linear-gradient(90deg, var(--ca-accent), transparent);
  opacity: .8;
}
.ca-book-heading { min-width: 0; }
.ca-book-eyebrow {
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: .28em;
  color: var(--ca-accent);
  opacity: .85;
}
.ca-book-head h2 {
  margin: 8px 0 7px;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 12px;
  font-family: var(--serif);
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 400;
  letter-spacing: .03em;
  color: rgba(232,251,247,.94);
}
.ca-book-head h2 span {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: .1em;
  color: var(--ca-accent);
  opacity: .65;
}
.ca-book-meta {
  font-family: var(--mono);
  font-size: 8px;
  line-height: 1.7;
  color: rgba(201,233,228,.38);
}
.ca-book-close { flex: none; width: 34px; height: 34px; }
.ca-book-body {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 258px minmax(0, 1fr);
}
.ca-book-nav {
  overflow-y: auto;
  padding: 10px;
  border-right: 1px solid rgba(127,247,228,.12);
  background: rgba(2,9,13,.34);
  scrollbar-width: thin;
  scrollbar-color: rgba(127,247,228,.2) transparent;
}
.ca-book-navitem {
  width: 100%;
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr);
  gap: 2px 7px;
  align-items: center;
  padding: 8px 9px;
  margin-bottom: 3px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: transparent;
  color: rgba(201,233,228,.55);
  text-align: left;
  cursor: pointer;
  transition: .2s ease;
}
.ca-book-navitem:hover,
.ca-book-navitem:focus-visible {
  color: rgba(232,251,247,.88);
  background: rgba(127,247,228,.05);
  outline: none;
}
.ca-book-navitem.is-active {
  color: var(--ca-accent);
  border-color: color-mix(in srgb, var(--ca-accent) 35%, transparent);
  background: color-mix(in srgb, var(--ca-accent) 8%, rgba(4,14,18,.45));
}
.ca-book-nav-no {
  grid-row: 1 / 3;
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: .02em;
  color: currentColor;
  opacity: .65;
}
.ca-book-nav-title {
  font-size: 11px;
  line-height: 1.45;
  color: currentColor;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ca-book-navitem em,
.ca-book-navitem i {
  font-family: var(--mono);
  font-size: 7px;
  font-style: normal;
  line-height: 1.5;
  color: rgba(201,233,228,.3);
}
.ca-book-navitem i { color: var(--ca-accent); opacity: .55; }
.ca-book-main {
  overflow-y: auto;
  padding: 24px 28px 34px;
  scrollbar-width: thin;
  scrollbar-color: rgba(127,247,228,.2) transparent;
}
.ca-book-main::-webkit-scrollbar { width: 6px; }
.ca-book-main::-webkit-scrollbar-thumb { background: rgba(127,247,228,.2); border-radius: 6px; }
.ca-book-chapterhead {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(127,247,228,.12);
}
.ca-book-kicker {
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: .12em;
  color: var(--ca-accent);
  opacity: .7;
}
.ca-book-kicker span { color: rgba(201,233,228,.24); margin: 0 5px; }
.ca-book-chapterhead h3 {
  margin: 8px 0 7px;
  font-family: var(--serif);
  font-size: 28px;
  font-weight: 400;
  letter-spacing: .03em;
  color: rgba(232,251,247,.94);
}
.ca-book-chapterhead p {
  margin: 0;
  max-width: 720px;
  font-size: 12px;
  line-height: 1.85;
  color: rgba(210,236,230,.62);
}
.ca-book-jump {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 11px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 40%, transparent);
  border-radius: 5px;
  background: color-mix(in srgb, var(--ca-accent) 6%, transparent);
  color: var(--ca-accent);
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: .06em;
  white-space: nowrap;
  cursor: pointer;
}
.ca-book-jump:hover { background: color-mix(in srgb, var(--ca-accent) 13%, transparent); }
.ca-book-sections { padding-top: 15px; }
.ca-book-section {
  border-bottom: 1px solid rgba(127,247,228,.1);
}
.ca-book-section.is-open { background: rgba(127,247,228,.018); }
.ca-book-section-head {
  width: 100%;
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 13px 2px;
  border: 0;
  background: transparent;
  color: rgba(232,251,247,.82);
  text-align: left;
  cursor: pointer;
}
.ca-book-section-head:hover { color: #fff; }
.ca-book-section-no {
  flex: none;
  width: 40px;
  font-family: var(--mono);
  font-size: 8px;
  color: var(--ca-accent);
  opacity: .7;
}
.ca-book-section-title {
  flex: 1;
  min-width: 0;
  font-size: 14px;
  letter-spacing: .03em;
}
.ca-book-section-pages {
  flex: none;
  font-family: var(--mono);
  font-size: 7px;
  color: rgba(201,233,228,.32);
}
.ca-book-section-head > svg { flex: none; opacity: .45; }
.ca-book-section-body {
  padding: 0 2px 20px 52px;
  animation: caQuizIn .3s ease both;
}
.ca-book-outline {
  display: flex;
  flex-wrap: wrap;
  gap: 5px 6px;
  margin-bottom: 13px;
}
.ca-book-outline > span {
  padding: 3px 7px;
  border: 1px solid rgba(127,247,228,.12);
  border-radius: 3px;
  font-family: var(--mono);
  font-size: 8px;
  color: rgba(201,233,228,.46);
}
.ca-book-summary {
  margin: 0 0 13px;
  font-size: 12.5px;
  line-height: 1.85;
  color: rgba(220,242,236,.76);
}
.ca-book-points {
  margin: 0 0 14px;
  padding: 0;
  list-style: none;
  counter-reset: ca-book-point;
}
.ca-book-points li {
  counter-increment: ca-book-point;
  position: relative;
  padding-left: 24px;
  margin: 7px 0;
  font-size: 11.5px;
  line-height: 1.8;
  color: rgba(210,236,230,.66);
}
.ca-book-points li::before {
  content: counter(ca-book-point, decimal-leading-zero);
  position: absolute;
  left: 0;
  top: 3px;
  font-family: var(--mono);
  font-size: 7px;
  color: var(--ca-accent);
  opacity: .65;
}
.ca-book-terms {
  margin: 0 0 14px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
}
.ca-book-terms > div {
  padding: 8px 10px;
  border: 1px solid rgba(127,247,228,.09);
  border-radius: 4px;
  background: rgba(4,14,18,.3);
}
.ca-book-terms dt {
  font-size: 11px;
  color: rgba(232,251,247,.84);
}
.ca-book-terms dd {
  margin: 4px 0 0;
  font-size: 10.5px;
  line-height: 1.7;
  color: rgba(201,233,228,.54);
}
.ca-book-check {
  padding: 9px 11px;
  border: 1px solid rgba(127,247,228,.12);
  border-radius: 5px;
  background: rgba(4,14,18,.3);
}
.ca-book-check summary {
  display: flex;
  align-items: baseline;
  gap: 8px;
  cursor: pointer;
  list-style: none;
  font-size: 11px;
  line-height: 1.7;
  color: rgba(232,251,247,.72);
}
.ca-book-check summary::-webkit-details-marker { display: none; }
.ca-book-check summary > span {
  flex: none;
  font-family: var(--mono);
  font-size: 8px;
  color: var(--ca-accent);
  opacity: .75;
}
.ca-book-check[open] summary { color: rgba(232,251,247,.9); }
.ca-book-check p {
  margin: 9px 0 0 38px;
  font-size: 11px;
  line-height: 1.8;
  color: rgba(201,233,228,.62);
}
.ca-book-foot {
  margin-top: 22px;
  padding-top: 13px;
  border-top: 1px solid rgba(127,247,228,.1);
  font-family: var(--mono);
  font-size: 7px;
  line-height: 1.7;
  color: rgba(201,233,228,.28);
}

.ca-book-model-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 11px; }
.ca-book-model-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  width: auto;
  margin-top: 0;
  padding: 8px 10px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 28%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--ca-accent) 5%, transparent);
  color: rgba(232,251,247,.72);
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: .03em;
  text-align: left;
  cursor: pointer;
  transition: .2s ease;
}
.ca-book-model-btn:hover,
.ca-book-model-btn:focus-visible {
  border-color: var(--ca-accent);
  color: var(--ca-accent);
  background: color-mix(in srgb, var(--ca-accent) 10%, transparent);
  outline: none;
}
.ca-book-model-btn > span {
  flex: none;
  padding: 2px 5px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 38%, transparent);
  border-radius: 3px;
  color: var(--ca-accent);
  font-size: 6px;
}
.ca-book-model-btn > svg { margin-left: auto; opacity: .55; }

.ca-model-backdrop {
  position: absolute;
  inset: 0;
  z-index: 50;
  background: #02070a;
  animation: caStudyFade .3s ease both;
}
.ca-model-panel {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #02070a;
}
.ca-model-stage { position: absolute; inset: 0; z-index: 1; }
.ca-model-stage .cm-canvas { display: block; width: 100%; height: 100%; cursor: grab; }
.ca-model-stage .cm-canvas:active { cursor: grabbing; }
.ca-model-stage .cm-label-layer { position: absolute; inset: 0; z-index: 2; pointer-events: none; overflow: hidden; }
.ca-model-stage .cm-label { position: absolute; left: 0; top: 0; display: flex; align-items: center; gap: 7px; white-space: nowrap; filter: drop-shadow(0 2px 8px rgba(0,0,0,.8)); transition: opacity .25s ease; }
.ca-model-stage .cm-label i { width: 5px; height: 5px; flex: none; border-radius: 50%; background: var(--ca-accent); box-shadow: 0 0 9px var(--ca-accent); }
.ca-model-stage .cm-label span { display: flex; flex-direction: column; gap: 1px; padding: 3px 7px; border: 1px solid rgba(127,247,228,.14); border-radius: 3px; background: rgba(2,8,11,.58); backdrop-filter: blur(6px); }
.ca-model-stage .cm-label b { font-size: 11px; font-weight: 400; letter-spacing: .04em; color: rgba(240,255,251,.92); }
.ca-model-stage .cm-label em { font-family: var(--mono); font-size: 7px; font-style: normal; letter-spacing: .07em; color: rgba(204,235,228,.4); }
.ca-model-head {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 4;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  padding: 24px 28px 30px;
  background: linear-gradient(180deg, rgba(2,7,10,.82), transparent);
  pointer-events: none;
}
.ca-model-head > div { min-width: 0; }
.ca-model-eyebrow { font-family: var(--mono); font-size: 8px; letter-spacing: .26em; color: var(--ca-accent); opacity: .8; }
.ca-model-head h2 { margin: 8px 0 6px; font-family: var(--serif); font-size: clamp(26px, 3.2vw, 42px); font-weight: 300; letter-spacing: .03em; color: rgba(238,251,247,.95); }
.ca-model-meta { font-family: var(--mono); font-size: 8px; letter-spacing: .06em; color: rgba(204,235,228,.4); }
.ca-model-head .ca-iconbtn { pointer-events: auto; flex: none; }
.ca-model-caption {
  position: absolute;
  left: 28px;
  bottom: 28px;
  z-index: 4;
  width: min(500px, 48vw);
  padding: 18px 20px;
  border: 1px solid rgba(127,247,228,.14);
  border-radius: 7px;
  background: rgba(2,10,13,.66);
  backdrop-filter: blur(14px);
}
.ca-model-en { font-family: var(--mono); font-size: 9px; letter-spacing: .18em; color: var(--ca-accent); opacity: .7; }
.ca-model-caption p { margin: 10px 0 13px; font-size: 14px; line-height: 1.9; color: rgba(204,235,228,.7); }
.ca-model-caption ul { display: flex; flex-direction: column; gap: 6px; margin: 0; padding: 0; list-style: none; }
.ca-model-caption li { position: relative; padding-left: 16px; font-size: 12.5px; line-height: 1.75; color: rgba(204,235,228,.6); }
.ca-model-caption li::before { content: ""; position: absolute; left: 0; top: .62em; width: 7px; height: 1px; background: var(--ca-accent); opacity: .6; }
.ca-model-hint { position: absolute; right: 28px; bottom: 78px; z-index: 4; font-family: var(--mono); font-size: 7px; letter-spacing: .08em; color: rgba(204,235,228,.3); pointer-events: none; }
.ca-model-actions { position: absolute; right: 28px; bottom: 28px; z-index: 4; display: flex; gap: 6px; }
.ca-model-actions button { height: 31px; padding: 0 11px; border: 1px solid rgba(127,247,228,.18); border-radius: 999px; background: rgba(2,10,13,.55); color: rgba(232,251,247,.7); font-family: var(--mono); font-size: 8px; cursor: pointer; backdrop-filter: blur(10px); }
.ca-model-actions button:hover { border-color: var(--ca-accent); color: var(--ca-accent); }
.ca-model-error { position: absolute; inset: 0; z-index: 8; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; padding: 30px; background: rgba(2,7,10,.9); text-align: center; }
.ca-model-error b { font-family: var(--serif); font-size: 28px; font-weight: 400; color: #ffe8f2; }
.ca-model-error span { max-width: 520px; font-size: 12px; line-height: 1.8; color: rgba(204,235,228,.55); }

@media (max-width: 880px) {
  .ca-model-head { padding: 16px 16px 24px; }
  .ca-model-head h2 { font-size: 25px; }
  .ca-model-caption { left: 16px; right: 16px; bottom: 72px; width: auto; padding: 12px 14px; }
  .ca-model-caption p { display: none; }
  .ca-model-caption ul { display: none; }
  .ca-model-hint { display: none; }
  .ca-model-actions { right: 16px; bottom: 18px; }
  .ca-model-head .ca-iconbtn { width: 32px; height: 32px; }
  .ca-model-stage .cm-label b { font-size: 9px; }
  .ca-model-stage .cm-label em { display: none; }
  .ca-intro { overflow-y: auto; align-items: start; padding: 28px 16px 48px; }
  .ca-intro-quick { grid-template-columns: 1fr; max-width: 340px; margin-top: 20px; gap: 6px; }
  .ca-intro-quick > div { flex-direction: row; align-items: center; gap: 10px; padding: 9px 11px; text-align: left; }
  .ca-intro-actions { flex-wrap: wrap; gap: 10px; margin-top: 18px; }
  .ca-guide-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 18px; }
  .ca-guide-title { font-size: 26px !important; }
  .ca-guide-title kbd { min-width: 27px; height: 27px; font-size: 12px; }
  .ca-guide-mock-body { padding: 10px 12px 13px; }
  .ca-guide-mock-body p { font-size: 11px; }
  .ca-guide-copy { gap: 13px; }
  .ca-guide-block p { font-size: 11px; }
  .ca-intro-count { display: none; }
  .ca-controls-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 18px; }
  .ca-intro-keymap { grid-template-columns: 1fr 1fr; margin-top: 14px; }
  .ca-intro-keymap > div { padding: 6px 7px; }
  .ca-book-mock-row { font-size: 7.5px; }
  .ca-intro-controls .ca-intro-actions { margin-top: 14px; }
}
@media (max-width: 520px) {
  .ca-model-head h2 { font-size: 22px; }
  .ca-model-caption { bottom: 62px; }
  .ca-model-actions { left: 16px; right: auto; }
}

.ca-intro {
  position: absolute;
  inset: 0;
  z-index: 12;
  display: grid;
  place-items: center;
  padding: 24px;
  cursor: pointer;
  background:
    radial-gradient(ellipse at 50% 58%, rgba(2,8,12,.08) 0%, rgba(2,7,11,.62) 52%, rgba(1,4,8,.95) 100%);
  backdrop-filter: blur(2px);
  animation: caIntroIn .7s ease both;
  transition: opacity .6s ease;
}
@keyframes caIntroIn { from { opacity: 0; } to { opacity: 1; } }
.ca-intro.is-out { animation: caIntroOut .65s cubic-bezier(.4,0,.2,1) both; pointer-events: none; }
@keyframes caIntroOut { to { opacity: 0; visibility: hidden; } }
.ca-intro.is-out .ca-intro-inner { transform: scale(1.035); opacity: 0; transition: transform .65s ease, opacity .5s ease; }
.ca-intro-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(127,247,228,.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(127,247,228,.055) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse at center, #000 0%, transparent 68%);
  animation: caGridDrift 18s linear infinite;
  pointer-events: none;
}
@keyframes caGridDrift { from { background-position: 0 0, 0 0; } to { background-position: 0 72px, 72px 0; } }
.ca-intro-inner {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 960px;
  transition: transform .65s ease, opacity .5s ease;
}
.ca-intro-eyebrow {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 9px;
  letter-spacing: .48em;
  color: var(--ca-accent);
  opacity: .8;
  text-transform: uppercase;
}
.ca-intro h2 {
  margin: 26px 0 10px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: .12em;
  font-family: "Helvetica Neue", "Arial Narrow", "Segoe UI", sans-serif;
  font-size: clamp(66px, 13.5vw, 176px);
  font-weight: 200;
  line-height: .82;
  letter-spacing: .015em;
  color: #d9eee8;
}
.ca-intro-fill {
  background: linear-gradient(115deg, #c8e4dc 8%, #7fcfc2 46%, #a892c0 92%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.ca-intro-outline {
  color: transparent;
  -webkit-text-stroke: 1px rgba(220,242,235,.32);
}
.ca-intro-slash { color: var(--ca-accent); font-weight: 100; opacity: .62; }
.ca-intro-cn {
  margin-top: 22px;
  margin-left: .6em;
  font-family: "Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", SimSun, serif;
  font-size: 21px;
  font-weight: 300;
  letter-spacing: .6em;
  color: rgba(220,242,235,.74);
}
.ca-intro-sub {
  margin-top: 12px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 9px;
  letter-spacing: .3em;
  color: rgba(201,233,228,.4);
}
.ca-enter {
  margin-top: 32px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 13px 24px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 55%, transparent);
  background: color-mix(in srgb, var(--ca-accent) 6%, transparent);
  color: rgba(220,242,235,.86);
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 9px;
  letter-spacing: .3em;
  cursor: pointer;
  transition: background .3s ease, color .3s ease, box-shadow .3s ease;
  backdrop-filter: blur(8px);
}
.ca-enter:hover,
.ca-enter:focus-visible {
  background: var(--ca-accent);
  color: #03110f;
  box-shadow: 0 0 32px color-mix(in srgb, var(--ca-accent) 45%, transparent);
  outline: none;
}
.ca-intro-step { animation: caIntroStep .5s cubic-bezier(.16,.84,.24,1) both; }
.ca-intro-welcome { margin-bottom: 15px; font-family: "Songti SC", "Noto Serif SC", "STSong", SimSun, serif; font-size: 19px; font-weight: 300; letter-spacing: .24em; color: rgba(238,251,247,.88); }
@keyframes caIntroStep { from { opacity: 0; transform: translateY(12px); filter: blur(5px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
.ca-intro-quick { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; max-width: 620px; margin: 28px auto 0; }
.ca-intro-quick > div { display: flex; flex-direction: column; align-items: center; gap: 5px; padding: 12px 10px; border: 1px solid rgba(127,247,228,.13); border-radius: 6px; background: rgba(2,10,13,.36); }
.ca-intro-quick kbd { display: inline-grid; place-items: center; min-width: 23px; height: 23px; padding: 0 5px; border: 1px solid rgba(127,247,228,.45); border-radius: 4px; color: var(--ca-accent); font-family: "SFMono-Regular", Consolas, monospace; font-size: 10px; }
.ca-intro-quick b { font-size: 12px; font-weight: 400; letter-spacing: .08em; color: rgba(232,251,247,.88); }
.ca-intro-quick em { font-family: "SFMono-Regular", Consolas, monospace; font-size: 8px; line-height: 1.6; font-style: normal; color: rgba(201,233,228,.34); }
.ca-intro-actions { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 22px; }
.ca-intro-actions .ca-enter { margin-top: 0; }
.ca-intro-count { font-family: "SFMono-Regular", Consolas, monospace; font-size: 8px; letter-spacing: .18em; color: rgba(201,233,228,.3); }
.ca-intro-secondary { padding: 10px 15px; border: 0; background: transparent; color: rgba(201,233,228,.55); font-family: "SFMono-Regular", Consolas, monospace; font-size: 9px; letter-spacing: .06em; cursor: pointer; }
.ca-intro-secondary:hover { color: var(--ca-accent); }
.ca-intro-inner.is-guide { max-width: 1060px; text-align: left; }
.ca-intro-inner.is-guide .ca-intro-eyebrow { text-align: center; }
.ca-guide-title { display: block !important; justify-content: center !important; margin: 14px 0 0 !important; text-align: center; font-family: "Songti SC", "Noto Serif SC", "STSong", SimSun, serif !important; font-size: clamp(27px, 3vw, 38px) !important; font-weight: 300 !important; letter-spacing: .04em !important; color: rgba(238,251,247,.95) !important; }
.ca-guide-title kbd { display: inline-grid; place-items: center; min-width: 32px; height: 32px; padding: 0 8px; margin: 0 4px; border: 1px solid rgba(127,247,228,.45); border-radius: 5px; background: rgba(127,247,228,.05); color: var(--ca-accent); font-family: "SFMono-Regular", Consolas, monospace; font-size: 14px; vertical-align: 2px; }
.ca-guide-grid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: 26px; align-items: start; margin: 24px 0 4px; }
.ca-guide-mock { border: 1px solid rgba(127,247,228,.18); border-radius: 7px; background: linear-gradient(165deg, rgba(6,19,24,.94), rgba(2,8,11,.96)); box-shadow: 0 24px 60px rgba(0,0,0,.4); overflow: hidden; }
.ca-guide-mock-head { display: flex; align-items: center; gap: 9px; padding: 11px 14px; border-bottom: 1px solid rgba(127,247,228,.12); font-family: "SFMono-Regular", Consolas, monospace; }
.ca-guide-mock-head span { font-size: 6px; letter-spacing: .2em; color: rgba(127,247,228,.55); }
.ca-guide-mock-head b { font-size: 13px; font-weight: 400; letter-spacing: .06em; color: rgba(238,251,247,.9); }
.ca-guide-mock-head kbd { margin-left: auto; display: grid; place-items: center; width: 21px; height: 21px; border: 1px solid rgba(127,247,228,.35); border-radius: 3px; color: var(--ca-accent); font-family: "SFMono-Regular", Consolas, monospace; font-size: 9px; }
.ca-guide-mock-body { padding: 14px 16px 16px; }
.ca-guide-mini-label { margin: 10px 0 4px; font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; letter-spacing: .12em; color: var(--ca-accent); opacity: .72; }
.ca-guide-mock-body p { margin: 0; font-size: 12px; line-height: 1.75; color: rgba(201,233,228,.58); }
.ca-guide-copy { display: flex; flex-direction: column; gap: 16px; padding-top: 2px; }
.ca-guide-block { display: grid; grid-template-columns: 27px minmax(0, 1fr); gap: 9px; }
.ca-guide-block > span { width: 23px; height: 23px; display: grid; place-items: center; border: 1px solid rgba(127,247,228,.3); border-radius: 50%; color: var(--ca-accent); font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; }
.ca-guide-block b { display: block; margin-bottom: 4px; font-size: 13px; font-weight: 500; letter-spacing: .04em; color: rgba(238,251,247,.9); }
.ca-guide-block p { margin: 0; font-size: 12px; line-height: 1.78; color: rgba(201,233,228,.54); }
.ca-intro-inner.is-guide .ca-intro-actions { margin-top: 20px; }
.ca-controls-grid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: 26px; align-items: start; margin: 22px 0 0; }
.ca-book-mock-body { padding: 8px 12px 10px; }
.ca-book-mock-row { display: grid; grid-template-columns: 22px minmax(0, 1fr) auto; gap: 7px; align-items: center; padding: 4px 6px; border: 1px solid transparent; border-radius: 3px; font-family: "SFMono-Regular", Consolas, monospace; font-size: 8px; color: rgba(201,233,228,.42); }
.ca-book-mock-row > span { color: var(--ca-accent); opacity: .6; font-size: 7px; }
.ca-book-mock-row > em { font-style: normal; font-size: 7px; color: rgba(201,233,228,.26); }
.ca-book-mock-row.is-active { border-color: rgba(127,247,228,.22); background: rgba(127,247,228,.06); color: rgba(238,251,247,.82); }
.ca-book-mock-section { display: flex; align-items: center; gap: 7px; margin: 8px 0 2px 26px; padding: 7px 8px; border-left: 1px solid rgba(127,247,228,.3); font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; line-height: 1.5; color: rgba(201,233,228,.5); }
.ca-book-mock-section > span { color: var(--ca-accent); opacity: .7; }
.ca-book-mock-section > em { margin-left: auto; padding: 2px 4px; border: 1px solid rgba(127,247,228,.24); border-radius: 2px; font-style: normal; font-size: 6px; color: var(--ca-accent); white-space: nowrap; }
.ca-intro-keymap { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-top: 18px; }
.ca-intro-keymap > div { display: flex; flex-wrap: wrap; align-items: center; gap: 5px; padding: 7px 8px; border: 1px solid rgba(127,247,228,.11); border-radius: 4px; background: rgba(2,10,13,.3); }
.ca-intro-keymap kbd { display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 4px; border: 1px solid rgba(127,247,228,.35); border-radius: 3px; color: var(--ca-accent); font-family: "SFMono-Regular", Consolas, monospace; font-size: 8px; }
.ca-intro-keymap b { font-size: 9px; font-weight: 400; color: rgba(201,233,228,.55); }
.ca-intro-controls .ca-intro-actions { margin-top: 18px; }
.ca-intro-load {
  margin: 28px auto 0;
  width: 210px;
  height: 1px;
  background: rgba(201,233,228,.15);
  overflow: hidden;
}
.ca-intro-load span {
  display: block;
  width: 100%;
  height: 100%;
  background: var(--ca-accent);
  transform-origin: left center;
  animation: caLoad 2.8s cubic-bezier(.3,.6,.4,1) both;
  box-shadow: 0 0 10px var(--ca-accent);
}
@keyframes caLoad { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.ca-intro-meta {
  margin-top: 15px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  letter-spacing: .24em;
  color: rgba(201,233,228,.3);
}
.ca-intro-skip {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 26px;
  z-index: 2;
  text-align: center;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  letter-spacing: .26em;
  color: rgba(201,233,228,.35);
}

.ca-error {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  padding: 26px;
  background: rgba(1,4,8,.82);
  backdrop-filter: blur(8px);
}
.ca-error-card {
  max-width: 520px;
  padding: 30px 32px;
  border: 1px solid rgba(255,116,183,.26);
  background: rgba(5,11,16,.86);
  box-shadow: 0 24px 80px rgba(0,0,0,.6);
}
.ca-error-no {
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 8px;
  letter-spacing: .28em;
  color: #ff8fc1;
}
.ca-error-card h2 {
  margin: 14px 0 12px;
  font-family: "Songti SC", "Noto Serif SC", "STSong", SimSun, serif;
  font-size: 28px;
  font-weight: 400;
  color: #ffeaf4;
}
.ca-error-card p { margin: 0; font-size: 13px; line-height: 1.85; color: rgba(232,251,247,.66); }
.ca-error-detail {
  margin-top: 16px;
  padding: 10px 12px;
  background: rgba(255,116,183,.06);
  border-left: 2px solid rgba(255,116,183,.5);
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 9px;
  line-height: 1.6;
  color: rgba(255,190,217,.65);
  overflow-wrap: anywhere;
}
.ca-error-actions { display: flex; align-items: center; gap: 12px; margin-top: 20px; }

@media (max-width: 1180px) {
  .ca-spine { display: none; }
  .ca-topreadout { display: none; }
  .ca-caption { width: min(540px, 58vw); }
  .ca-readout { display: none; }
}
@media (max-width: 880px) {
  .ca-ui { padding: 16px 16px 14px; }
  .ca-brand-mark { width: 31px; height: 31px; }
  .ca-wordmark { font-size: 9px; letter-spacing: .26em; }
  .ca-wordmark-cn { display: none; }
  .ca-topright { gap: 10px; }
  .ca-study-toggle {
    width: 34px;
    height: 34px;
    padding: 0;
    justify-content: center;
    border-radius: 50%;
  }
  .ca-study-toggle span { display: none; }
  .ca-book-btn { width: 33px; height: 33px; }
  .ca-counter { font-size: 8px; }
  .ca-counter b { font-size: 14px; }
  .ca-iconbtn { width: 33px; height: 33px; }
  .ca-caption { width: min(590px, calc(100% - 8px)); bottom: 44px; }
  .ca-caption h1 { font-size: clamp(32px, 7.4vw, 44px); margin-top: 12px; }
  .ca-en { margin-bottom: 12px; font-size: 8px; }
  .ca-body { font-size: 12px; line-height: 1.8; max-width: 100%; }
  .ca-facts { gap: 18px; margin-top: 14px; padding-top: 11px; }
  .ca-fact-k { font-size: 7px; }
  .ca-fact-v { font-size: 11px; }
  .ca-rail { display: none; }
  .ca-footer { flex-wrap: wrap; gap: 9px 14px; padding-top: 10px; }
  .ca-auto { min-width: 0; flex: 1; order: 1; }
  .ca-hint { display: none; }
  .ca-controls { order: 2; margin-left: auto; gap: 5px; }
  .ca-lum { height: 31px; padding: 0 6px; gap: 4px; }
  .ca-lum input[type="range"] { width: 42px; }
  .ca-lum-value { display: none; }
  .ca-ctrl { width: 31px; height: 31px; }
  .ca-ctrl-primary { width: 35px; height: 35px; }
  .ca-timeline { order: 3; flex-basis: 100%; min-width: 0; }
  .ca-intro h2 { font-size: clamp(56px, 17vw, 110px); }
  .ca-intro-cn { font-size: 17px; margin-top: 18px; }
  .ca-intro-sub { font-size: 8px; letter-spacing: .2em; }
  .ca-intro-eyebrow { font-size: 7px; letter-spacing: .3em; }
  .ca-intro-inner { max-width: 100%; }
  .ca-intro-skip { bottom: 18px; font-size: 6px; }
  .ca-study-panel { width: 100%; }
  .ca-study-head { padding: 20px 18px 16px; }
  .ca-study-head h2 { font-size: 21px; }
  .ca-study-scroll { padding: 4px 18px 30px; }
  .ca-study-label > em { display: none; }
  .ca-concept { grid-template-columns: 1fr; gap: 5px; padding: 11px 0; }
  .ca-concept dt > span { font-size: 12px; }
  .ca-concept dd { font-size: 11.5px; }
  .ca-study-footer { margin-top: 24px; }
}
@media (max-width: 520px) {
  .ca-textbook-chip { width: 100%; min-height: 48px; gap: 8px; padding: 7px 9px; }
  .ca-textbook-chip-icon { width: 28px; height: 28px; }
  .ca-textbook-chip-top > b { font-size: 12px; }
  .ca-textbook-chip-top > em { font-size: 7.5px; }
  .ca-textbook-chip-sub { font-size: 7px; white-space: normal; }
  .ca-textbook-chip-key { display: none; }
  .ca-textbook-chip > svg { display: none; }
  .ca-study-meta { font-size: 7px; }
  .ca-study-objectives li,
  .ca-study-mechanism li,
  .ca-study-traps li { font-size: 11.5px; }
  .ca-book-backdrop { padding: 0; }
  .ca-book-panel { width: 100%; height: 100%; border-radius: 0; border: 0; }
  .ca-book-head { padding: 18px 18px 14px; }
  .ca-book-head h2 { font-size: 23px; margin: 6px 0; }
  .ca-book-body { display: flex; flex-direction: column; }
  .ca-book-nav {
    flex: none;
    display: flex;
    gap: 5px;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 8px 12px;
    border-right: 0;
    border-bottom: 1px solid rgba(127,247,228,.12);
  }
  .ca-book-navitem {
    flex: 0 0 164px;
    margin-bottom: 0;
    grid-template-columns: 38px minmax(0, 1fr);
  }
  .ca-book-navitem i { display: none; }
  .ca-book-main { flex: 1; padding: 18px 16px 26px; }
  .ca-book-chapterhead { gap: 12px; flex-wrap: wrap; }
  .ca-book-chapterhead h3 { font-size: 24px; }
  .ca-book-jump { order: 2; }
  .ca-book-section-head { gap: 8px; }
  .ca-book-section-no { width: 34px; }
  .ca-book-section-title { font-size: 13px; }
  .ca-book-section-body { padding-left: 42px; }
  .ca-book-terms { grid-template-columns: 1fr; }
  .ca-study-book-cta { margin-top: 12px; }
  .ca-study-book-cta-copy em { white-space: normal; line-height: 1.5; }
}
@media (max-height: 740px) {
  .ca-ui { padding-top: 16px; padding-bottom: 12px; }
  .ca-caption { bottom: 24px; }
  .ca-caption h1 { font-size: clamp(30px, 3.5vw, 44px); margin: 10px 0 6px; }
  .ca-body { display: none; }
  .ca-facts { margin-top: 10px; padding-top: 9px; }
  .ca-rail { gap: 8px; }
  .ca-intro h2 { font-size: clamp(58px, 10vw, 120px); }
  .ca-intro-cn { margin-top: 14px; }
  .ca-enter { margin-top: 20px; }
  .ca-intro-load { margin-top: 18px; }
  .ca-intro-meta { margin-top: 10px; }
  .ca-study-head { padding: 18px 22px 14px; }
  .ca-study-head h2 { margin: 6px 0; font-size: 22px; }
  .ca-study-scroll { padding-top: 0; }
  .ca-study-section { padding-top: 18px; }
  .ca-book-head { padding: 16px 20px 12px; }
  .ca-book-head h2 { font-size: 24px; margin: 5px 0; }
  .ca-book-main { padding-top: 16px; }
  .ca-book-chapterhead { padding-bottom: 14px; }
}
@media (prefers-reduced-motion: reduce) {
  .ca-root *,
  .ca-root *::before,
  .ca-root *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
`;window.__ModuleLoader__.load({id:"@local/cell-atlas",factory(i){return ep(i("react"))}});})();
