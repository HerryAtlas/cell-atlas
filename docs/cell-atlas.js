(()=>{var Au=0,Lc=1,Cu=2;var zr=1,Ru=2,Ds=3,Ai=0,kt=1,an=2,En=0,Us=1,ft=2,Nc=3,Dc=4,Pu=5;var Yi=100,Iu=101,Lu=102,Nu=103,Du=104,Uu=200,Fu=201,Ou=202,Bu=203,Uc=204,Fc=205,zu=206,ku=207,Hu=208,Vu=209,Gu=210,Wu=211,Xu=212,qu=213,Yu=214,to=0,no=1,io=2,ys=3,so=4,ro=5,ao=6,oo=7,Oc=0,Zu=1,$u=2,Fn=0,kr=1,Hr=2,Vr=3,Zi=4,Gr=5,Wr=6,Xr=7;var Bc=300,Ci=301,$i=302,Fs=303,Vo=304,qr=306,lo=1e3,Hn=1001,co=1002,qt=1003,Ju=1004;var Yr=1005;var Zt=1006,Go=1007;var Ri=1008;var hn=1009,zc=1010,kc=1011,Os=1012,Wo=1013,On=1014,Tn=1015,$t=1016,Xo=1017,qo=1018,Bs=1020,Hc=35902,Vc=35899,Gc=1021,Wc=1022,wn=1023,Vn=1026,Pi=1027,Yo=1028,Zo=1029,Ii=1030,$o=1031;var Jo=1033,Zr=33776,$r=33777,Jr=33778,Kr=33779,Ko=35840,Qo=35841,jo=35842,el=35843,tl=36196,nl=37492,il=37496,sl=37488,rl=37489,Qr=37490,al=37491,ol=37808,ll=37809,cl=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,_l=37818,vl=37819,xl=37820,yl=37821,Sl=36492,Ml=36494,bl=36495,El=36283,Tl=36284,jr=36285,wl=36286;var fr=2300,ho=2301,ja=2302,Mc=2303,bc=2400,Ec=2401,Tc=2402;var Ku=3200;var Al=0,Qu=1,hi="",jt="srgb",pr="srgb-linear",mr="linear",ut="srgb";var eo=7680;var ju=519,ed=512,td=513,nd=514,Cl=515,id=516,sd=517,Rl=518,rd=519,ad=35044;var Xc="300 es",Nn=2e3,Ss=2001;function Of(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function od(){let i=gr("canvas");return i.style.display="block",i}var $h={},Ms=null;function qc(...i){let e="THREE."+i.shift();Ms?Ms("log",e,...i):console.log(e,...i)}function ld(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Be(...i){i=ld(i);let e="THREE."+i.shift();if(Ms)Ms("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function He(...i){i=ld(i);let e="THREE."+i.shift();if(Ms)Ms("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Vi(...i){let e=i.join(" ");e in $h||($h[e]=!0,Be(...i))}function cd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var hd={[to]:no,[io]:ao,[so]:oo,[ys]:ro,[no]:to,[ao]:io,[oo]:so,[ro]:ys},Gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $l=Math.PI/180,_r=180/Math.PI;function ea(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function zf(i,e){return(i%e+e)%e}function Jl(i,e,t){return(1-t)*i+t*e}function ir(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qc=class Qc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qc.prototype.isVector2=!0;var Me=Qc,Wn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],p=r[a+1],v=r[a+2],S=r[a+3];if(f!==S||l!==u||c!==p||h!==v){let m=l*u+c*p+h*v+f*S;m<0&&(u=-u,p=-p,v=-v,S=-S,m=-m);let d=1-o;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);d=Math.sin(d*M)/A,o=Math.sin(o*M)/A,l=l*d+u*o,c=c*d+p*o,h=h*d+v*o,f=f*d+S*o}else{l=l*d+u*o,c=c*d+p*o,h=h*d+v*o,f=f*d+S*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+h*f+l*p-c*u,e[t+1]=l*v+h*u+c*f-o*p,e[t+2]=c*v+h*p+o*u-l*f,e[t+3]=h*v-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*p*v,this._y=c*p*f-u*h*v,this._z=c*h*v+u*p*f,this._w=c*h*f-u*p*v;break;case"YXZ":this._x=u*h*f+c*p*v,this._y=c*p*f-u*h*v,this._z=c*h*v-u*p*f,this._w=c*h*f+u*p*v;break;case"ZXY":this._x=u*h*f-c*p*v,this._y=c*p*f+u*h*v,this._z=c*h*v+u*p*f,this._w=c*h*f-u*p*v;break;case"ZYX":this._x=u*h*f-c*p*v,this._y=c*p*f+u*h*v,this._z=c*h*v-u*p*f,this._w=c*h*f+u*p*v;break;case"YZX":this._x=u*h*f+c*p*v,this._y=c*p*f+u*h*v,this._z=c*h*v-u*p*f,this._w=c*h*f-u*p*v;break;case"XZY":this._x=u*h*f-c*p*v,this._y=c*p*f-u*h*v,this._z=c*h*v+u*p*f,this._w=c*h*f+u*p*v;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jc=class jc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kl.copy(this).projectOnVector(e),this.sub(Kl)}reflect(e){return this.sub(Kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jc.prototype.isVector3=!0;var P=jc,Kl=new P,Jh=new Wn,eh=class eh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],v=n[8],S=s[0],m=s[3],d=s[6],M=s[1],A=s[4],y=s[7],T=s[2],b=s[5],R=s[8];return r[0]=a*S+o*M+l*T,r[3]=a*m+o*A+l*b,r[6]=a*d+o*y+l*R,r[1]=c*S+h*M+f*T,r[4]=c*m+h*A+f*b,r[7]=c*d+h*y+f*R,r[2]=u*S+p*M+v*T,r[5]=u*m+p*A+v*b,r[8]=u*d+p*y+v*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,p=c*r-a*l,v=t*f+n*u+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/v;return e[0]=f*S,e[1]=(s*c-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=u*S,e[4]=(h*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ql.makeScale(e,t)),this}rotate(e){return Vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ql.makeRotation(-e)),this}translate(e,t){return Vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};eh.prototype.isMatrix3=!0;var Ge=eh,Ql=new Ge,Kh=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qh=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kf(){let i={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pr]:{primaries:e,whitePoint:n,transfer:mr,toXYZ:Kh,fromXYZ:Qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Kh,fromXYZ:Qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}var je=kf();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,uo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rs===void 0&&(rs=gr("canvas")),rs.width=e.width,rs.height=e.height;let s=rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=rs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hf=0,bs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=ea(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jl(s[a].image)):r.push(jl(s[a]))}else r=jl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var Vf=0,ec=new P,sn=class i extends Gn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=Zt,a=Ri,o=wn,l=hn,c=i.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=ea(),this.name="",this.source=new bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ec).x}get height(){return this.source.getSize(ec).y}get depth(){return this.source.getSize(ec).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Bc;sn.DEFAULT_ANISOTROPY=1;var th=class th{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],v=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,y=(p+1)/2,T=(d+1)/2,b=(h+u)/4,R=(f+S)/4,_=(v+m)/4;return A>y&&A>T?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=R/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=_/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-v)*(m-v)+(f-S)*(f-S)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-v)/M,this.y=(f-S)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};th.prototype.isVector4=!0;var Rt=th,fo=class extends Gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new sn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new bs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends fo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vr=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var po=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ho=class Ho{constructor(e,t,n,s,r,a,o,l,c,h,f,u,p,v,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,p,v,S,m)}set(e,t,n,s,r,a,o,l,c,h,f,u,p,v,S,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=v,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ho().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*f,v=o*h,S=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=u-S*c,t[9]=-o*l,t[2]=S-u*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*f,v=c*h,S=c*f;t[0]=u+S*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-v,t[6]=S+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*f,v=c*h,S=c*f;t[0]=u-S*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*h,t[9]=S-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*f,v=o*h,S=o*f;t[0]=l*h,t[4]=v*c-p,t[8]=u*c+S,t[1]=l*f,t[5]=S*c+u,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,v=o*l,S=o*c;t[0]=l*h,t[4]=S-u*f,t[8]=v*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+v,t[10]=u-S*f}else if(e.order==="XZY"){let u=a*l,p=a*c,v=o*l,S=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+S,t[5]=a*h,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*h,t[10]=S*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gf,e,Wf)}lookAt(e,t,n){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),mi.crossVectors(n,pn),mi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),mi.crossVectors(n,pn)),mi.normalize(),Ra.crossVectors(pn,mi),s[0]=mi.x,s[4]=Ra.x,s[8]=pn.x,s[1]=mi.y,s[5]=Ra.y,s[9]=pn.y,s[2]=mi.z,s[6]=Ra.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],v=n[2],S=n[6],m=n[10],d=n[14],M=n[3],A=n[7],y=n[11],T=n[15],b=s[0],R=s[4],_=s[8],E=s[12],C=s[1],F=s[5],O=s[9],V=s[13],N=s[2],X=s[6],K=s[10],$=s[14],re=s[3],Z=s[7],te=s[11],se=s[15];return r[0]=a*b+o*C+l*N+c*re,r[4]=a*R+o*F+l*X+c*Z,r[8]=a*_+o*O+l*K+c*te,r[12]=a*E+o*V+l*$+c*se,r[1]=h*b+f*C+u*N+p*re,r[5]=h*R+f*F+u*X+p*Z,r[9]=h*_+f*O+u*K+p*te,r[13]=h*E+f*V+u*$+p*se,r[2]=v*b+S*C+m*N+d*re,r[6]=v*R+S*F+m*X+d*Z,r[10]=v*_+S*O+m*K+d*te,r[14]=v*E+S*V+m*$+d*se,r[3]=M*b+A*C+y*N+T*re,r[7]=M*R+A*F+y*X+T*Z,r[11]=M*_+A*O+y*K+T*te,r[15]=M*E+A*V+y*$+T*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],v=e[3],S=e[7],m=e[11],d=e[15],M=l*p-c*u,A=o*p-c*f,y=o*u-l*f,T=a*p-c*h,b=a*u-l*h,R=a*f-o*h;return t*(S*M-m*A+d*y)-n*(v*M-m*T+d*b)+s*(v*A-S*T+d*R)-r*(v*y-S*b+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],v=e[12],S=e[13],m=e[14],d=e[15],M=t*o-n*a,A=t*l-s*a,y=t*c-r*a,T=n*l-s*o,b=n*c-r*o,R=s*c-r*l,_=h*S-f*v,E=h*m-u*v,C=h*d-p*v,F=f*m-u*S,O=f*d-p*S,V=u*d-p*m,N=M*V-A*O+y*F+T*C-b*E+R*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/N;return e[0]=(o*V-l*O+c*F)*X,e[1]=(s*O-n*V-r*F)*X,e[2]=(S*R-m*b+d*T)*X,e[3]=(u*b-f*R-p*T)*X,e[4]=(l*C-a*V-c*E)*X,e[5]=(t*V-s*C+r*E)*X,e[6]=(m*y-v*R-d*A)*X,e[7]=(h*R-u*y+p*A)*X,e[8]=(a*O-o*C+c*_)*X,e[9]=(n*C-t*O-r*_)*X,e[10]=(v*b-S*y+d*M)*X,e[11]=(f*y-h*b-p*M)*X,e[12]=(o*E-a*F-l*_)*X,e[13]=(t*F-n*E+s*_)*X,e[14]=(S*A-v*T-m*M)*X,e[15]=(h*T-f*A+u*M)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,p=r*h,v=r*f,S=a*h,m=a*f,d=o*f,M=l*c,A=l*h,y=l*f,T=n.x,b=n.y,R=n.z;return s[0]=(1-(S+d))*T,s[1]=(p+y)*T,s[2]=(v-A)*T,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(u+d))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(v+A)*R,s[9]=(m-M)*R,s[10]=(1-(u+S))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=as.set(s[0],s[1],s[2]).length(),o=as.set(s[4],s[5],s[6]).length(),l=as.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Rn.copy(this);let c=1/a,h=1/o,f=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,t.setFromRotationMatrix(Rn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Nn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),v,S;if(l)v=r/(a-r),S=a*r/(a-r);else if(o===Nn)v=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Ss)v=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Nn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),v,S;if(l)v=1/(a-r),S=a/(a-r);else if(o===Nn)v=-2/(a-r),S=-(a+r)/(a-r);else if(o===Ss)v=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ho.prototype.isMatrix4=!0;var yt=Ho,as=new P,Rn=new yt,Gf=new P(0,0,0),Wf=new P(1,1,1),mi=new P,Ra=new P,pn=new P,jh=new yt,eu=new Wn,li=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eu.setFromEuler(this),this.setFromQuaternion(eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xf=0,tu=new P,os=new Wn,ni=new yt,Pa=new P,sr=new P,qf=new P,Yf=new Wn,nu=new P(1,0,0),iu=new P(0,1,0),su=new P(0,0,1),ru={type:"added"},Zf={type:"removed"},ls={type:"childadded",child:null},tc={type:"childremoved",child:null},Nt=class i extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new li,n=new Wn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ge}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(nu,e)}rotateY(e){return this.rotateOnAxis(iu,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return tu.copy(e).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nu,e)}translateY(e){return this.translateOnAxis(iu,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pa.copy(e):Pa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(sr,Pa,this.up):ni.lookAt(Pa,sr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),os.setFromRotationMatrix(ni),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ru),ls.child=e,this.dispatchEvent(ls),ls.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zf),tc.child=e,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ru),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nt.DEFAULT_UP=new P(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},$f={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,n),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($f)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function nc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=zf(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=nc(a,r,e+1/3),this.g=nc(a,r,e),this.b=nc(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let n=ud[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return je.workingToColorSpace(Qt.copy(this),e),Math.round(et(Qt.r*255,0,255))*65536+Math.round(et(Qt.g*255,0,255))*256+Math.round(et(Qt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Qt.copy(this),t);let n=Qt.r,s=Qt.g,r=Qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=jt){je.workingToColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,s=Qt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Ia);let n=Jl(gi.h,Ia.h,t),s=Jl(gi.s,Ia.s,t),r=Jl(gi.l,Ia.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new de;de.NAMES=ud;var yr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Sr=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new P,ii=new P,ic=new P,si=new P,cs=new P,hs=new P,au=new P,sc=new P,rc=new P,ac=new P,oc=new Rt,lc=new Rt,cc=new Rt,yi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),ii.subVectors(n,t),ic.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(ii),l=Pn.dot(ic),c=ii.dot(ii),h=ii.dot(ic),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-o*h)*u,v=(a*h-o*l)*u;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return oc.setScalar(0),lc.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(e,t),lc.fromBufferAttribute(e,n),cc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(oc,r.x),a.addScaledVector(lc,r.y),a.addScaledVector(cc,r.z),a}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),ii.subVectors(e,t),Pn.cross(ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Pn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;cs.subVectors(s,n),hs.subVectors(r,n),sc.subVectors(e,n);let l=cs.dot(sc),c=hs.dot(sc);if(l<=0&&c<=0)return t.copy(n);rc.subVectors(e,s);let h=cs.dot(rc),f=hs.dot(rc);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(cs,a);ac.subVectors(e,r);let p=cs.dot(ac),v=hs.dot(ac);if(v>=0&&p<=v)return t.copy(r);let S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(hs,o);let m=h*v-p*f;if(m<=0&&f-h>=0&&p-v>=0)return au.subVectors(r,s),o=(f-h)/(f-h+(p-v)),t.copy(s).addScaledVector(au,o);let d=1/(m+S+u);return a=S*d,o=u*d,t.copy(n).addScaledVector(cs,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),La.copy(n.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Na.subVectors(this.max,rr),us.subVectors(e.a,rr),ds.subVectors(e.b,rr),fs.subVectors(e.c,rr),_i.subVectors(ds,us),vi.subVectors(fs,ds),Bi.subVectors(us,fs);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Bi.z,Bi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Bi.z,0,-Bi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Bi.y,Bi.x,0];return!hc(t,us,ds,fs,Na)||(t=[1,0,0,0,1,0,0,0,1],!hc(t,us,ds,fs,Na))?!1:(Da.crossVectors(_i,vi),t=[Da.x,Da.y,Da.z],hc(t,us,ds,fs,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ri=[new P,new P,new P,new P,new P,new P,new P,new P],In=new P,La=new Xn,us=new P,ds=new P,fs=new P,_i=new P,vi=new P,Bi=new P,rr=new P,Na=new P,Da=new P,zi=new P;function hc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zi.fromArray(i,r);let o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ft=new P,Ua=new Me,Jf=0,Mt=class extends Gn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ad,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Mr=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var br=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var We=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Kf=new Xn,ar=new P,uc=new P,qn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);let t=ar.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(uc)),this.expandByPoint(ar.copy(e.center).sub(uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qf=0,Sn=new yt,dc=new Nt,ps=new P,mn=new Xn,or=new Xn,Wt=new P,lt=class i extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Of(e)?br:Mr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new We(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(mn.min,or.min),mn.expandByPoint(Wt),Wt.addVectors(mn.max,or.max),mn.expandByPoint(Wt)):(mn.expandByPoint(or.min),mn.expandByPoint(or.max))}mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(e,c),Wt.add(ps)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;let c=new P,h=new P,f=new P,u=new Me,p=new Me,v=new Me,S=new P,m=new P;function d(_,E,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,C),u.fromBufferAttribute(r,_),p.fromBufferAttribute(r,E),v.fromBufferAttribute(r,C),h.sub(c),f.sub(c),p.sub(u),v.sub(u);let F=1/(p.x*v.y-v.x*p.y);isFinite(F)&&(S.copy(h).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(F),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(F),o[_].add(S),o[E].add(S),o[C].add(S),l[_].add(m),l[E].add(m),l[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,E=M.length;_<E;++_){let C=M[_],F=C.start,O=C.count;for(let V=F,N=F+O;V<N;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let A=new P,y=new P,T=new P,b=new P;function R(_){T.fromBufferAttribute(s,_),b.copy(T);let E=o[_];A.copy(E),A.sub(T.multiplyScalar(T.dot(E))).normalize(),y.crossVectors(b,E);let F=y.dot(l[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,F)}for(let _=0,E=M.length;_<E;++_){let C=M[_],F=C.start,O=C.count;for(let V=F,N=F+O;V<N;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,f=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){let v=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),p=0,v=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*h;for(let d=0;d<h;d++)u[v++]=c[p++]}return new Mt(u,h,f)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var fc=new P,jf=new P,ep=new Ge,Ln=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=fc.subVectors(n,t).cross(jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(fc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ep.getNormalMatrix(e),s=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},tp=0,Yn=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Us,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Fc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new de().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ln().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ai=new P,pc=new P,Fa=new P,Oa=new P,Ts=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pc.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),Oa.copy(this.origin).sub(pc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Fa),o=Oa.dot(this.direction),l=-Oa.dot(Fa),c=Oa.lengthSq(),h=Math.abs(1-a*a),f,u,p,v;if(h>0)if(f=a*l-o,u=a*o-l,v=r*h,f>=0)if(u>=-v)if(u<=v){let S=1/h;f*=S,u*=S,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-v?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=v?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(pc).addScaledVector(Fa,u),p}intersectSphere(e,t){if(e.radius<0)return null;ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,p=e.z-a.z,v=t.x-a.x,S=t.y-a.y,m=t.z-a.z,d=n.x-a.x,M=n.y-a.y,A=n.z-a.z,y=Math.abs(l),T=Math.abs(c),b=Math.abs(h),R,_,E,C,F,O,V,N,X,K,$,re;if(y>=T&&y>=b?(E=l,O=f,X=v,re=d,l>=0?(R=c,_=h,C=u,F=p,V=S,N=m,K=M,$=A):(R=h,_=c,C=p,F=u,V=m,N=S,K=A,$=M)):T>=b?(E=c,O=u,X=S,re=M,c>=0?(R=h,_=l,C=p,F=f,V=m,N=v,K=A,$=d):(R=l,_=h,C=f,F=p,V=v,N=m,K=d,$=A)):(E=h,O=p,X=m,re=A,h>=0?(R=l,_=c,C=f,F=u,V=v,N=S,K=d,$=M):(R=c,_=l,C=u,F=f,V=S,N=v,K=M,$=d)),E===0)return null;let Z=R/E,te=_/E,se=1/E,Le=C-Z*O,De=F-te*O,pt=V-Z*X,it=N-te*X,st=K-Z*re,Q=$-te*re,ne=st*it-Q*pt,Ee=Le*Q-De*st,ze=pt*De-it*Le;if(s){if(ne<0||Ee<0||ze<0)return null}else if((ne<0||Ee<0||ze<0)&&(ne>0||Ee>0||ze>0))return null;let pe=ne+Ee+ze;if(pe===0)return null;let Ye=se*(ne*O+Ee*X+ze*re);return(pe>0?Ye<0:Ye>0)?null:this.at(Ye/pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ou=new yt,ki=new Ts,Ba=new qn,lu=new P,za=new P,ka=new P,Ha=new P,mc=new P,Va=new P,cu=new P,Ga=new P,Ze=class extends Nt{constructor(e=new lt,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(mc.fromBufferAttribute(f,e),a?Va.addScaledVector(mc,h):Va.addScaledVector(mc.sub(t),h))}t.add(Va)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(Ba.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Ba,lu)===null||ki.origin.distanceToSquared(lu)>(e.far-e.near)**2))&&(ou.copy(r).invert(),ki.copy(e.ray).applyMatrix4(ou),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=u.length;v<S;v++){let m=u[v],d=a[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,T=A;y<T;y+=3){let b=o.getX(y),R=o.getX(y+1),_=o.getX(y+2);s=Wa(this,d,e,n,c,h,f,b,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=v,d=S;m<d;m+=3){let M=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);s=Wa(this,a,e,n,c,h,f,M,A,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=u.length;v<S;v++){let m=u[v],d=a[m.materialIndex],M=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,T=A;y<T;y+=3){let b=y,R=y+1,_=y+2;s=Wa(this,d,e,n,c,h,f,b,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=v,d=S;m<d;m+=3){let M=m,A=m+1,y=m+2;s=Wa(this,a,e,n,c,h,f,M,A,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function np(i,e,t,n,s,r,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ai,o),l===null)return null;Ga.copy(o),Ga.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ga);return c<t.near||c>t.far?null:{distance:c,point:Ga.clone(),object:i}}function Wa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,za),i.getVertexPosition(l,ka),i.getVertexPosition(c,Ha);let h=np(i,e,t,n,za,ka,Ha,cu);if(h){let f=new P;yi.getBarycoord(cu,za,ka,Ha,f),s&&(h.uv=yi.getInterpolatedAttribute(s,o,l,c,f,new Me)),r&&(h.uv1=yi.getInterpolatedAttribute(r,o,l,c,f,new Me)),a&&(h.normal=yi.getInterpolatedAttribute(a,o,l,c,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};yi.getNormal(za,ka,Ha,u.normal),h.face=u,h.barycoord=f}return h}var Er=class extends sn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=qt,h=qt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tr=class extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ms=new yt,hu=new yt,Xa=[],uu=new Xn,ip=new yt,lr=new Ze,cr=new qn,ws=class extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ip)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),uu.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(uu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),cr.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),e.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ms),hu.multiplyMatrices(n,ms),lr.matrixWorld=hu,lr.raycast(e,Xa);for(let a=0,o=Xa.length;a<o;a++){let l=Xa[a];l.instanceId=r,l.object=this,t.push(l)}Xa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Er(new Float32Array(s*this.count),s,this.count,Yo,Tn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hi=new qn,sp=new Me(.5,.5),qa=new P,As=class{constructor(e=new Ln,t=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],p=r[7],v=r[8],S=r[9],m=r[10],d=r[11],M=r[12],A=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,p-h,d-v,T-M).normalize(),s[1].setComponents(c+a,p+h,d+v,T+M).normalize(),s[2].setComponents(c+o,p+f,d+S,T+A).normalize(),s[3].setComponents(c-o,p-f,d-S,T-A).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,p-u,d-m,T-y).normalize();else if(s[4].setComponents(c-l,p-u,d-m,T-y).normalize(),t===Nn)s[5].setComponents(c+l,p+u,d+m,T+y).normalize();else if(t===Ss)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);let t=sp.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cs=class extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},mo=new P,go=new P,du=new yt,hr=new Ts,Ya=new qn,gc=new P,fu=new P,_o=class extends Nt{constructor(e=new lt,t=new Cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)mo.fromBufferAttribute(t,s-1),go.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=mo.distanceTo(go);e.setAttribute("lineDistance",new We(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(s),Ya.radius+=r,e.ray.intersectsSphere(Ya)===!1)return;du.copy(s).invert(),hr.copy(e.ray).applyMatrix4(du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let S=p,m=v-1;S<m;S+=c){let d=h.getX(S),M=h.getX(S+1),A=Za(this,e,hr,l,d,M,S);A&&t.push(A)}if(this.isLineLoop){let S=h.getX(v-1),m=h.getX(p),d=Za(this,e,hr,l,S,m,v-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let S=p,m=v-1;S<m;S+=c){let d=Za(this,e,hr,l,S,S+1,S);d&&t.push(d)}if(this.isLineLoop){let S=Za(this,e,hr,l,v-1,p,v-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Za(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(mo.fromBufferAttribute(o,s),go.fromBufferAttribute(o,r),t.distanceSqToSegment(mo,go,gc,fu)>n)return;gc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(gc);if(!(c<e.near||c>e.far))return{distance:c,point:fu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var pu=new P,mu=new P,Gi=class extends _o{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)pu.fromBufferAttribute(t,s),mu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+pu.distanceTo(mu);e.setAttribute("lineDistance",new We(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Dn=class extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gu=new yt,wc=new Ts,$a=new qn,Ja=new P,gn=class extends Nt{constructor(e=new lt,t=new Dn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;gu.copy(s).invert(),wc.copy(e.ray).applyMatrix4(gu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=u,S=p;v<S;v++){let m=c.getX(v);Ja.fromBufferAttribute(f,m),_u(Ja,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=u,S=p;v<S;v++)Ja.fromBufferAttribute(f,v),_u(Ja,v,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _u(i,e,t,n,s,r,a){let o=wc.distanceSqToPoint(i);if(o<t){let l=new P;wc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var wr=class extends sn{constructor(e=[],t=Ci,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ar=class extends sn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends sn{constructor(e,t,n=On,s,r,a,o=qt,l=qt,c,h=Vn,f=1){if(h!==Vn&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},vo=class extends Si{constructor(e,t=On,n=Ci,s,r,a=qt,o=qt,l,c=Vn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Cr=class extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rs=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(f,2));function v(S,m,d,M,A,y,T,b,R,_,E){let C=y/R,F=T/_,O=y/2,V=T/2,N=b/2,X=R+1,K=_+1,$=0,re=0,Z=new P;for(let te=0;te<K;te++){let se=te*F-V;for(let Le=0;Le<X;Le++){let De=Le*C-O;Z[S]=De*M,Z[m]=se*A,Z[d]=N,c.push(Z.x,Z.y,Z.z),Z[S]=0,Z[m]=0,Z[d]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(Le/R),f.push(1-te/_),$+=1}}for(let te=0;te<_;te++)for(let se=0;se<R;se++){let Le=u+se+X*te,De=u+se+X*(te+1),pt=u+(se+1)+X*(te+1),it=u+(se+1)+X*te;l.push(Le,De,it),l.push(De,pt,it),re+=6}o.addGroup(p,re,E),p+=re,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Mi=class i extends lt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,p=2*f+u,v=n*2+r,S=s+1,m=new P,d=new P;for(let M=0;M<=v;M++){let A=0,y=0,T=0,b=0;if(M<=n){let E=M/n,C=E*Math.PI/2;y=-h-e*Math.cos(C),T=e*Math.sin(C),b=-e*Math.cos(C),A=E*f}else if(M<=n+r){let E=(M-n)/r;y=-h+E*t,T=e,b=0,A=f+E*u}else{let E=(M-n-r)/n,C=E*Math.PI/2;y=h+e*Math.sin(C),T=e*Math.cos(C),b=e*Math.sin(C),A=f+u+E*f}let R=Math.max(0,Math.min(1,A/p)),_=0;M===0?_=.5/s:M===v&&(_=-.5/s);for(let E=0;E<=s;E++){let C=E/s,F=C*Math.PI*2,O=Math.sin(F),V=Math.cos(F);d.x=-T*V,d.y=y,d.z=T*O,o.push(d.x,d.y,d.z),m.set(-T*V,b,T*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+_,R)}if(M>0){let E=(M-1)*S;for(let C=0;C<s;C++){let F=E+C,O=E+C+1,V=M*S+C,N=M*S+C+1;a.push(F,O,V),a.push(O,N,V)}}}this.setIndex(a),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Ps=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],p=[],v=0,S=[],m=n/2,d=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new We(f,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(p,2));function M(){let y=new P,T=new P,b=0,R=(t-e)/n;for(let _=0;_<=r;_++){let E=[],C=_/r,F=C*(t-e)+e;for(let O=0;O<=s;O++){let V=O/s,N=V*l+o,X=Math.sin(N),K=Math.cos(N);T.x=F*X,T.y=-C*n+m,T.z=F*K,f.push(T.x,T.y,T.z),y.set(X,R,K).normalize(),u.push(y.x,y.y,y.z),p.push(V,1-C),E.push(v++)}S.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let C=S[E][_],F=S[E+1][_],O=S[E+1][_+1],V=S[E][_+1];(e>0||E!==0)&&(h.push(C,F,V),b+=3),(t>0||E!==r-1)&&(h.push(F,O,V),b+=3)}c.addGroup(d,b,0),d+=b}function A(y){let T=v,b=new Me,R=new P,_=0,E=y===!0?e:t,C=y===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,m*C,0),u.push(0,C,0),p.push(.5,.5),v++;let F=v;for(let O=0;O<=s;O++){let N=O/s*l+o,X=Math.cos(N),K=Math.sin(N);R.x=E*K,R.y=m*C,R.z=E*X,f.push(R.x,R.y,R.z),u.push(0,C,0),b.x=X*.5+.5,b.y=K*.5*C+.5,p.push(b.x,b.y),v++}for(let O=0;O<s;O++){let V=T+O,N=F+O;y===!0?h.push(N,N+1,V):h.push(N+1,N,V),_+=3}c.addGroup(d,_,y===!0?1:2),d+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rr=class i extends Ps{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xo=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(r.slice(),3)),this.setAttribute("uv",new We(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let A=new P,y=new P,T=new P;for(let b=0;b<t.length;b+=3)p(t[b+0],A),p(t[b+1],y),p(t[b+2],T),l(A,y,T,M)}function l(M,A,y,T){let b=T+1,R=[];for(let _=0;_<=b;_++){R[_]=[];let E=M.clone().lerp(y,_/b),C=A.clone().lerp(y,_/b),F=b-_;for(let O=0;O<=F;O++)O===0&&_===b?R[_][O]=E:R[_][O]=E.clone().lerp(C,O/F)}for(let _=0;_<b;_++)for(let E=0;E<2*(b-_)-1;E++){let C=Math.floor(E/2);E%2===0?(u(R[_][C+1]),u(R[_+1][C]),u(R[_][C])):(u(R[_][C+1]),u(R[_+1][C+1]),u(R[_+1][C]))}}function c(M){let A=new P;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(M),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function h(){let M=new P;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];let y=m(M)/2/Math.PI+.5,T=d(M)/Math.PI+.5;a.push(y,1-T)}v(),f()}function f(){for(let M=0;M<a.length;M+=6){let A=a[M+0],y=a[M+2],T=a[M+4],b=Math.max(A,y,T),R=Math.min(A,y,T);b>.9&&R<.1&&(A<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),T<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function p(M,A){let y=M*3;A.x=e[y+0],A.y=e[y+1],A.z=e[y+2]}function v(){let M=new P,A=new P,y=new P,T=new P,b=new Me,R=new Me,_=new Me;for(let E=0,C=0;E<r.length;E+=9,C+=6){M.set(r[E+0],r[E+1],r[E+2]),A.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),b.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),T.copy(M).add(A).add(y).divideScalar(3);let F=m(T);S(b,C+0,M,F),S(R,C+2,A,F),S(_,C+4,y,F)}}function S(M,A,y,T){T<0&&M.x===1&&(a[A]=M.x-1),y.x===0&&y.z===0&&(a[A]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Me:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new yt;for(let p=0;p<=e;p++){let v=p/e;s[p]=this.getTangentAt(v,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(et(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(et(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],p*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Pr=class extends bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*f+this.aX,c=u*f+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yo=class extends Pr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var vu=new P,xu=new P,_c=new Yc,vc=new Yc,xc=new Yc,Un=class extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(xu.subVectors(s[0],s[1]).add(s[0]),c=xu);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(vu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vu),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(f),p),S=Math.pow(f.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);S<1e-4&&(S=1),v<1e-4&&(v=S),m<1e-4&&(m=S),_c.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,v,S,m),vc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,v,S,m),xc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,v,S,m)}else this.curveType==="catmullrom"&&(_c.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),vc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),xc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(_c.calc(l),vc.calc(l),xc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function yu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function rp(i,e){let t=1-i;return t*t*e}function ap(i,e){return 2*(1-i)*i*e}function op(i,e){return i*i*e}function ur(i,e,t,n){return rp(i,e)+ap(i,t)+op(i,n)}function lp(i,e){let t=1-i;return t*t*t*e}function cp(i,e){let t=1-i;return 3*t*t*i*e}function hp(i,e){return 3*(1-i)*i*i*e}function up(i,e){return i*i*i*e}function dr(i,e,t,n,s){return lp(i,e)+cp(i,t)+hp(i,n)+up(i,s)}var So=class extends bn{constructor(e=new Me,t=new Me,n=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(dr(e,s.x,r.x,a.x,o.x),dr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mo=class extends bn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(dr(e,s.x,r.x,a.x,o.x),dr(e,s.y,r.y,a.y,o.y),dr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bo=class extends bn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eo=class extends bn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends bn{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ur(e,s.x,r.x,a.x),ur(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ir=class extends bn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ur(e,s.x,r.x,a.x),ur(e,s.y,r.y,a.y),ur(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(yu(o,l.x,c.x,h.x,f.x),yu(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Me().fromArray(s))}return this}},dp=Object.freeze({__proto__:null,ArcCurve:yo,CatmullRomCurve3:Un,CubicBezierCurve:So,CubicBezierCurve3:Mo,EllipseCurve:Pr,LineCurve:bo,LineCurve3:Eo,QuadraticBezierCurve:To,QuadraticBezierCurve3:Ir,SplineCurve:wo});var Is=class i extends xo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Lr=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,p=[],v=[],S=[],m=[];for(let d=0;d<h;d++){let M=d*u-a;for(let A=0;A<c;A++){let y=A*f-r;v.push(y,-M,0),S.push(0,0,1),m.push(A/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){let A=M+c*d,y=M+c*(d+1),T=M+1+c*(d+1),b=M+1+c*d;p.push(A,y,b),p.push(y,T,b)}this.setIndex(p),this.setAttribute("position",new We(v,3)),this.setAttribute("normal",new We(S,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var rn=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new P,u=new P,p=[],v=[],S=[],m=[];for(let d=0;d<=n;d++){let M=[],A=d/n,y=a+A*o,T=e*Math.cos(y),b=Math.sqrt(e*e-T*T),R=0;d===0&&a===0?R=.5/t:d===n&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){let E=_/t,C=s+E*r;f.x=-b*Math.cos(C),f.y=T,f.z=b*Math.sin(C),v.push(f.x,f.y,f.z),u.copy(f).normalize(),S.push(u.x,u.y,u.z),m.push(E+R,1-A),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){let A=h[d][M+1],y=h[d][M],T=h[d+1][M],b=h[d+1][M+1];(d!==0||a>0)&&p.push(A,y,b),(d!==n-1||l<Math.PI)&&p.push(y,T,b)}this.setIndex(p),this.setAttribute("position",new We(v,3)),this.setAttribute("normal",new We(S,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Wi=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new P,p=new P,v=new P;for(let S=0;S<=n;S++){let m=a+S/n*o;for(let d=0;d<=s;d++){let M=d/s*r;p.x=(e+t*Math.cos(m))*Math.cos(M),p.y=(e+t*Math.cos(m))*Math.sin(M),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),v.subVectors(p,u).normalize(),h.push(v.x,v.y,v.z),f.push(d/s),f.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){let d=(s+1)*S+m-1,M=(s+1)*(S-1)+m-1,A=(s+1)*(S-1)+m,y=(s+1)*S+m;l.push(d,M,y),l.push(M,A,y)}this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Xi=class i extends lt{constructor(e=new Ir(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new Me,h=new P,f=[],u=[],p=[],v=[];S(),this.setIndex(v),this.setAttribute("position",new We(f,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(p,2));function S(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),M(),d()}function m(A){h=e.getPointAt(A/t,h);let y=a.normals[A],T=a.binormals[A];for(let b=0;b<=s;b++){let R=b/s*Math.PI*2,_=Math.sin(R),E=-Math.cos(R);l.x=E*y.x+_*T.x,l.y=E*y.y+_*T.y,l.z=E*y.z+_*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function d(){for(let A=1;A<=t;A++)for(let y=1;y<=s;y++){let T=(s+1)*(A-1)+(y-1),b=(s+1)*A+(y-1),R=(s+1)*A+y,_=(s+1)*(A-1)+y;v.push(T,b,_),v.push(b,R,_)}}function M(){for(let A=0;A<=t;A++)for(let y=0;y<=s;y++)c.x=A/t,c.y=y/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new dp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ji(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Su(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Su(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=Ji(i[t]);for(let s in n)e[s]=n[s]}return e}function Su(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function fp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var ui={clone:Ji,merge:en},pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ke=class extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(s.value);break;case"v2":this.uniforms[n].value=new Me().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[n].value=new yt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ls=class extends Ke{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Zn=class extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Al,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$n=class extends Zn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ao=class extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Co=class extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function yc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ro=class extends bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bc,endingEnd:bc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ec:r=e,o=2*t-n;break;case Tc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:a=e,l=2*n-t;break;case Tc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,v=(n-t)/(s-t),S=v*v,m=S*v,d=-u*m+2*u*S-u*v,M=(1+u)*m+(-1.5-2*u)*S+(-.5+u)*v+1,A=(-1-p)*m+(1.5+p)*S+.5*v,y=p*m-p*S;for(let T=0;T!==o;++T)r[T]=d*a[h+T]+M*a[c+T]+A*a[l+T]+y*a[f+T];return r}},Po=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Io=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Lo=class extends bi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let v=(n-t)/(s-t),S=1-v;for(let m=0;m!==o;++m)r[m]=a[c+m]*S+a[l+m]*v;return r}let u=o*2,p=e-1;for(let v=0;v!==o;++v){let S=a[c+v],m=a[l+v],d=p*u+v*2,M=f[d],A=f[d+1],y=e*u+v*2,T=h[y],b=h[y+1],R=_p(n,t,M,T,s);r[v]=dd(R,S,A,b,m)}return r}};function dd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function gp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function _p(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=dd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=gp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var _n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),yc(e.settings)&&(n.settings={inTangents:gs(e.settings.inTangents,Array),outTangents:gs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Lo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case fr:t=this.InterpolantFactoryMethodDiscrete;break;case ho:t=this.InterpolantFactoryMethodLinear;break;case ja:t=this.InterpolantFactoryMethodSmooth;break;case Mc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return ja;case this.InterpolantFactoryMethodBezier:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;yc(this.settings)&&(Mu(this.settings.inTangents,e),Mu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){He("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Bf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ja,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,p=f+n;for(let v=0;v!==n;++v){let S=t[f+v];if(S!==t[u+v]||S!==t[p+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,yc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Mu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=ho;var Ei=class extends _n{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=fr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};No.prototype.ValueTypeName="color";var Do=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Do.prototype.ValueTypeName="number";var Uo=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Wn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Nr=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}};Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends _n{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=fr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Fo.prototype.ValueTypeName="vector";var Oo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fd=new Oo,Bo=class{constructor(e){this.manager=e!==void 0?e:fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bo.DEFAULT_MATERIAL_NAME="__DEFAULT";var qi=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Dr=class extends qi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Sc=new yt,bu=new P,Eu=new P,Ns=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(bu),Eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Sc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ss||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ka=new P,Qa=new Wn,kn=new P,Ur=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ka,Qa,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Qa,kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ka,Qa,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Qa,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xi=new P,Tu=new Me,wu=new Me,Xt=class extends Ur{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan($l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Tu,wu),t.subVectors(wu,Tu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($l*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ac=class extends Ns{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=_r*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Fr=class extends qi{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ac}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Cc=class extends Ns{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}},ci=class extends qi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},wi=class extends Ur{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rc=class extends Ns{constructor(){super(new wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Or=class extends qi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Rc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var _s=-90,vs=1,zo=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(_s,vs,e,t);s.layers=this.layers,this.add(s);let r=new Xt(_s,vs,e,t);r.layers=this.layers,this.add(r);let a=new Xt(_s,vs,e,t);a.layers=this.layers,this.add(a);let o=new Xt(_s,vs,e,t);o.layers=this.layers,this.add(o);let l=new Xt(_s,vs,e,t);l.layers=this.layers,this.add(l);let c=new Xt(_s,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},ko=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Br=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=vp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function vp(){this._document.hidden===!1&&this.reset()}var $c="\\[\\]\\.:\\/",xp=new RegExp("["+$c+"]","g"),Jc="[^"+$c+"]",yp="[^"+$c.replace("\\.","")+"]",Sp=/((?:WC+[\/:])*)/.source.replace("WC",Jc),Mp=/(WCOD+)?/.source.replace("WCOD",yp),bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jc),Ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jc),Tp=new RegExp("^"+Sp+Mp+bp+Ep+"$"),wp=["material","materials","bones","map"],Pc=class{constructor(e,t,n){let s=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xp,"")}static parseTrackName(e){let t=Tp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;He("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Pc;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Uv=new Float32Array(1);var nh=class nh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};nh.prototype.isMatrix2=!0;var Ic=nh;function Kc(i,e,t,n){let s=Ap(n);switch(t){case Gc:return i*e;case Yo:return i*e/s.components*s.byteLength;case Zo:return i*e/s.components*s.byteLength;case Ii:return i*e*2/s.components*s.byteLength;case $o:return i*e*2/s.components*s.byteLength;case Wc:return i*e*3/s.components*s.byteLength;case wn:return i*e*4/s.components*s.byteLength;case Jo:return i*e*4/s.components*s.byteLength;case Zr:case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jr:case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qo:case el:return Math.max(i,16)*Math.max(e,8)/4;case Ko:case jo:return Math.max(i,8)*Math.max(e,8)/2;case tl:case nl:case sl:case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case il:case Qr:case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Sl:case Ml:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case El:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case jr:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ap(i){switch(i){case hn:case zc:return{byteLength:1,components:1};case Os:case kc:case $t:return{byteLength:2,components:1};case Xo:case qo:return{byteLength:2,components:4};case On:case Wo:case Tn:return{byteLength:4,components:1};case Hc:case Vc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ud(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rp(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<f.length;p++){let v=f[u],S=f[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++u,f[u]=S)}f.length=u+1;for(let p=0,v=f.length;p<v;p++){let S=f[p];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ip=`#ifdef USE_ALPHAHASH
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
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fp=`#ifdef USE_AOMAP
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
#endif`,Op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp=`#ifdef USE_BATCHING
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
#endif`,zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
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
#endif`,Wp=`#ifdef USE_BUMPMAP
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jp=`#define PI 3.141592653589793
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
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_m=`#ifdef USE_GRADIENTMAP
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
}`,vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mm=`#ifdef USE_ENVMAP
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
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Am=`PhysicalMaterial material;
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
#endif`,Cm=`uniform sampler2D dfgLUT;
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
}`,Rm=`
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,km=`#if defined( USE_POINTS_UV )
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
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
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
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
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
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mg=`float getShadowMask() {
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
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#ifdef USE_TRANSMISSION
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`#include <common>
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
}`,Og=`#if DEPTH_PACKING == 3200
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
}`,Bg=`#define DISTANCE
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
}`,zg=`#define DISTANCE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define LAMBERT
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
}`,Zg=`#define MATCAP
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
}`,$g=`#define MATCAP
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
}`,Jg=`#define NORMAL
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
}`,Kg=`#define NORMAL
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
}`,Qg=`#define PHONG
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
}`,jg=`#define PHONG
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
}`,e0=`#define STANDARD
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
}`,t0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
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
}`,s0=`uniform float size;
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
}`,r0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,o0=`uniform vec3 color;
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
}`,l0=`uniform float rotation;
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
}`,c0=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Pp,alphahash_pars_fragment:Ip,alphamap_fragment:Lp,alphamap_pars_fragment:Np,alphatest_fragment:Dp,alphatest_pars_fragment:Up,aomap_fragment:Fp,aomap_pars_fragment:Op,batching_pars_vertex:Bp,batching_vertex:zp,begin_vertex:kp,beginnormal_vertex:Hp,bsdfs:Vp,iridescence_fragment:Gp,bumpmap_pars_fragment:Wp,clipping_planes_fragment:Xp,clipping_planes_pars_fragment:qp,clipping_planes_pars_vertex:Yp,clipping_planes_vertex:Zp,color_fragment:$p,color_pars_fragment:Jp,color_pars_vertex:Kp,color_vertex:Qp,common:jp,cube_uv_reflection_fragment:em,defaultnormal_vertex:tm,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:sm,emissivemap_pars_fragment:rm,colorspace_fragment:am,colorspace_pars_fragment:om,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:hm,envmap_pars_vertex:um,envmap_physical_pars_fragment:Mm,envmap_vertex:dm,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:_m,lightmap_pars_fragment:vm,lights_lambert_fragment:xm,lights_lambert_pars_fragment:ym,lights_pars_begin:Sm,lights_toon_fragment:bm,lights_toon_pars_fragment:Em,lights_phong_fragment:Tm,lights_phong_pars_fragment:wm,lights_physical_fragment:Am,lights_physical_pars_fragment:Cm,lights_fragment_begin:Rm,lights_fragment_maps:Pm,lights_fragment_end:Im,lightprobes_pars_fragment:Lm,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Um,logdepthbuf_vertex:Fm,map_fragment:Om,map_pars_fragment:Bm,map_particle_fragment:zm,map_particle_pars_fragment:km,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:Vm,morphinstance_vertex:Gm,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:qm,morphtarget_vertex:Ym,normal_fragment_begin:Zm,normal_fragment_maps:$m,normal_pars_fragment:Jm,normal_pars_vertex:Km,normal_vertex:Qm,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:sg,packing:rg,premultiplied_alpha_fragment:ag,project_vertex:og,dithering_fragment:lg,dithering_pars_fragment:cg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:fg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:_g,skinning_vertex:vg,skinnormal_vertex:xg,specularmap_fragment:yg,specularmap_pars_fragment:Sg,tonemapping_fragment:Mg,tonemapping_pars_fragment:bg,transmission_fragment:Eg,transmission_pars_fragment:Tg,uv_pars_fragment:wg,uv_pars_vertex:Ag,uv_vertex:Cg,worldpos_vertex:Rg,background_vert:Pg,background_frag:Ig,backgroundCube_vert:Lg,backgroundCube_frag:Ng,cube_vert:Dg,cube_frag:Ug,depth_vert:Fg,depth_frag:Og,distance_vert:Bg,distance_frag:zg,equirect_vert:kg,equirect_frag:Hg,linedashed_vert:Vg,linedashed_frag:Gg,meshbasic_vert:Wg,meshbasic_frag:Xg,meshlambert_vert:qg,meshlambert_frag:Yg,meshmatcap_vert:Zg,meshmatcap_frag:$g,meshnormal_vert:Jg,meshnormal_frag:Kg,meshphong_vert:Qg,meshphong_frag:jg,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:r0,shadow_vert:a0,shadow_frag:o0,sprite_vert:l0,sprite_frag:c0},xe={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Kn={basic:{uniforms:en([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:en([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:en([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:en([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:en([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new de(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:en([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:en([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:en([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:en([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:en([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:en([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:en([xe.common,xe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:en([xe.lights,xe.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Kn.physical={uniforms:en([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Pl={r:0,b:0,g:0},h0=new yt,Fd=new Ge;Fd.set(-1,0,0,0,1,0,0,0,1);function u0(i,e,t,n,s,r){let a=new de(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function p(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let y=M.backgroundBlurriness>0;A=e.get(A,y)}return A}function v(M){let A=!1,y=p(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),A=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,A){let y=p(A);y&&(y.isCubeTexture||y.mapping===qr)?(c===void 0&&(c=new Ze(new Rs(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:Ji(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(h0.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fd),c.material.toneMapped=je.getTransfer(y.colorSpace)!==ut,(h!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ze(new Lr(2,2),new Ke({name:"BackgroundMaterial",uniforms:Ji(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=je.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,A){M.getRGB(Pl,Zc(i)),t.buffers.color.setClear(Pl.r,Pl.g,Pl.b,A,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:v,addToRenderList:S,dispose:d}}function d0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(F,O,V,N,X){let K=!1,$=f(F,N,V,O);r!==$&&(r=$,c(r.object)),K=p(F,N,V,X),K&&v(F,N,V,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(F,O,V,N),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function f(F,O,V,N){let X=N.wireframe===!0,K=n[O.id];K===void 0&&(K={},n[O.id]=K);let $=F.isInstancedMesh===!0?F.id:0,re=K[$];re===void 0&&(re={},K[$]=re);let Z=re[V.id];Z===void 0&&(Z={},re[V.id]=Z);let te=Z[X];return te===void 0&&(te=u(l()),Z[X]=te),te}function u(F){let O=[],V=[],N=[];for(let X=0;X<t;X++)O[X]=0,V[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:N,object:F,attributes:{},index:null}}function p(F,O,V,N){let X=r.attributes,K=O.attributes,$=0,re=V.getAttributes();for(let Z in re)if(re[Z].location>=0){let se=X[Z],Le=K[Z];if(Le===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(Le=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(Le=F.instanceColor)),se===void 0||se.attribute!==Le||Le&&se.data!==Le.data)return!0;$++}return r.attributesNum!==$||r.index!==N}function v(F,O,V,N){let X={},K=O.attributes,$=0,re=V.getAttributes();for(let Z in re)if(re[Z].location>=0){let se=K[Z];se===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(se=F.instanceColor));let Le={};Le.attribute=se,se&&se.data&&(Le.data=se.data),X[Z]=Le,$++}r.attributes=X,r.attributesNum=$,r.index=N}function S(){let F=r.newAttributes;for(let O=0,V=F.length;O<V;O++)F[O]=0}function m(F){d(F,0)}function d(F,O){let V=r.newAttributes,N=r.enabledAttributes,X=r.attributeDivisors;V[F]=1,N[F]===0&&(i.enableVertexAttribArray(F),N[F]=1),X[F]!==O&&(i.vertexAttribDivisor(F,O),X[F]=O)}function M(){let F=r.newAttributes,O=r.enabledAttributes;for(let V=0,N=O.length;V<N;V++)O[V]!==F[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function A(F,O,V,N,X,K,$){$===!0?i.vertexAttribIPointer(F,O,V,X,K):i.vertexAttribPointer(F,O,V,N,X,K)}function y(F,O,V,N){S();let X=N.attributes,K=V.getAttributes(),$=O.defaultAttributeValues;for(let re in K){let Z=K[re];if(Z.location>=0){let te=X[re];if(te===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(te=F.instanceColor)),te!==void 0){let se=te.normalized,Le=te.itemSize,De=e.get(te);if(De===void 0)continue;let pt=De.buffer,it=De.type,st=De.bytesPerElement,Q=it===i.INT||it===i.UNSIGNED_INT||te.gpuType===Wo;if(te.isInterleavedBufferAttribute){let ne=te.data,Ee=ne.stride,ze=te.offset;if(ne.isInstancedInterleavedBuffer){for(let pe=0;pe<Z.locationSize;pe++)d(Z.location+pe,ne.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let pe=0;pe<Z.locationSize;pe++)m(Z.location+pe);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let pe=0;pe<Z.locationSize;pe++)A(Z.location+pe,Le/Z.locationSize,it,se,Ee*st,(ze+Le/Z.locationSize*pe)*st,Q)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<Z.locationSize;ne++)d(Z.location+ne,te.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<Z.locationSize;ne++)m(Z.location+ne);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let ne=0;ne<Z.locationSize;ne++)A(Z.location+ne,Le/Z.locationSize,it,se,Le*st,Le/Z.locationSize*ne*st,Q)}}else if($!==void 0){let se=$[re];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(Z.location,se);break;case 3:i.vertexAttrib3fv(Z.location,se);break;case 4:i.vertexAttrib4fv(Z.location,se);break;default:i.vertexAttrib1fv(Z.location,se)}}}}M()}function T(){E();for(let F in n){let O=n[F];for(let V in O){let N=O[V];for(let X in N){let K=N[X];for(let $ in K)h(K[$].object),delete K[$];delete N[X]}}delete n[F]}}function b(F){if(n[F.id]===void 0)return;let O=n[F.id];for(let V in O){let N=O[V];for(let X in N){let K=N[X];for(let $ in K)h(K[$].object),delete K[$];delete N[X]}}delete n[F.id]}function R(F){for(let O in n){let V=n[O];for(let N in V){let X=V[N];if(X[F.id]===void 0)continue;let K=X[F.id];for(let $ in K)h(K[$].object),delete K[$];delete X[F.id]}}}function _(F){for(let O in n){let V=n[O],N=F.isInstancedMesh===!0?F.id:0,X=V[N];if(X!==void 0){for(let K in X){let $=X[K];for(let re in $)h($[re].object),delete $[re];delete X[K]}delete V[N],Object.keys(V).length===0&&delete n[O]}}}function E(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function f0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function p0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==wn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===$t&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==hn&&R!==Tn&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:y,maxSamples:T,samples:b}}function m0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ln,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){let v=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,A=M*4,y=d.clippingState||null;l.value=y,y=h(v,u,A,p);for(let T=0;T!==A;++T)y[T]=t[T];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,p,v){let S=f!==null?f.length:0,m=null;if(S!==0){if(m=l.value,v!==!0||m===null){let d=p+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,y=p;A!==S;++A,y+=4)a.copy(f[A]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var ks=4,g0=6,_0=20,v0=256,ta=new wi,pd=new de,ih=null,sh=0,rh=0,ah=!1,x0=new P,Ki=new P,Vs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=x0}=r;ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,sh,rh),this._renderer.xr.enabled=ah,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:$t,format:wn,colorSpace:pr,depthBuffer:!1},s=md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=y0(r)),this._blurMaterial=M0(r,e,t),this._ggxMaterial=S0(r,e,t)}return s}_compileMaterial(e){let t=new Ze(new lt,e);this._renderer.compile(t,ta)}_sceneToCubeUV(e,t,n,s,r){let l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(pd),f.toneMapping=Fn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ze(new Rs,new Mn({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,d=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,d=!0):(m.color.copy(pd),d=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let T=this._cubeSize;zs(s,y*T,A>2?T:0,T,T),f.setRenderTarget(s),d&&f.render(S,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ci||e.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ta)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,p=f*u,{_lodMax:v}=this,S=this._sizeLods[n],m=3*S*(n>v-ks?n-v+ks:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,zs(r,m,d,3*S,2*S),s.setRenderTarget(r),s.render(o,ta),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-n,zs(e,m,d,3*S,2*S),s.setRenderTarget(e),s.render(o,ta)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-ks?s-this._lodMax+ks:0),u=4*(this._cubeSize-h);zs(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,ta)}};function y0(i){let e=[],t=[],n=i,s=i-ks+1+g0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,p=3,v=new Float32Array(p*u*f),S=new Float32Array(p*u*f);for(let d=0;d<f;d++){let M=d%3*2/3-1,A=d>2?0:-1,y=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];v.set(y,p*u*d);for(let T=0;T<u;T++){let b=h[T*2]*2-1,R=h[T*2+1]*2-1;d===0?Ki.set(1,R,b):d===1?Ki.set(-b,1,-R):d===2?Ki.set(-b,R,1):d===3?Ki.set(-1,R,-b):d===4?Ki.set(-b,-1,R):Ki.set(b,R,-1),Ki.toArray(S,(d*u+T)*p)}}let m=new lt;m.setAttribute("position",new Mt(v,p)),m.setAttribute("outputDirection",new Mt(S,p)),t.push(new Ze(m,null)),n>ks&&n--}return{lodMeshes:t,sizeLods:e}}function md(i,e,t){let n=new Ot(i,e,t);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function S0(i,e,t){return new Ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:v0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function M0(i,e,t){return new Ke({name:"SphericalGaussianBlur",defines:{SAMPLES:_0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function gd(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function _d(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ll=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new wr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rs(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:En});r.uniforms.tEquirect.value=t;let a=new Ze(s,r),o=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Zt),new zo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function b0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Fs||p===Vo)if(e.has(u)){let v=e.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let S=new Ll(v.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,v=p===Fs||p===Vo,S=p===Ci||p===$i;if(v||S){let m=t.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Vs(i)),m=v?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return v&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new Vs(i)),m=v?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Fs?u.mapping=Ci:p===Vo&&(u.mapping=$i),u}function l(u){let p=0,v=6;for(let S=0;S<v;S++)u[S]!==void 0&&p++;return p===v}function c(u){let p=u.target;p.removeEventListener("dispose",c);let v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function E0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Vi("WebGLRenderer: "+n+" extension not supported."),s}}}function T0(i,e,t,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let p in u)e.update(u[p],i.ARRAY_BUFFER)}function c(f){let u=[],p=f.index,v=f.attributes.position,S=0;if(v===void 0)return;if(p!==null){let M=p.array;S=p.version;for(let A=0,y=M.length;A<y;A+=3){let T=M[A+0],b=M[A+1],R=M[A+2];u.push(T,b,b,R,R,T)}}else{let M=v.array;S=v.version;for(let A=0,y=M.length/3-1;A<y;A+=3){let T=A+0,b=A+1,R=A+2;u.push(T,b,b,R,R,T)}}let m=new(v.count>=65535?br:Mr)(u,1);m.version=S;let d=r.get(f);d&&e.remove(d),r.set(f,m)}function h(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function w0(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,f*a,p),t.update(u,n,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,p);let S=0;for(let m=0;m<p;m++)S+=u[m];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function A0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function C0(i,e,t){let n=new WeakMap,s=new Rt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let E=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;p===!0&&(A=1),v===!0&&(A=2),S===!0&&(A=3);let y=o.attributes.position.count*A,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*T*4*f),R=new vr(b,y,T,f);R.type=Tn,R.needsUpdate=!0;let _=A*4;for(let C=0;C<f;C++){let F=m[C],O=d[C],V=M[C],N=y*T*4*C;for(let X=0;X<F.count;X++){let K=X*_;p===!0&&(s.fromBufferAttribute(F,X),b[N+K+0]=s.x,b[N+K+1]=s.y,b[N+K+2]=s.z,b[N+K+3]=0),v===!0&&(s.fromBufferAttribute(O,X),b[N+K+4]=s.x,b[N+K+5]=s.y,b[N+K+6]=s.z,b[N+K+7]=0),S===!0&&(s.fromBufferAttribute(V,X),b[N+K+8]=s.x,b[N+K+9]=s.y,b[N+K+10]=s.z,b[N+K+11]=V.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new Me(y,T)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function R0(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var P0={[kr]:"LINEAR_TONE_MAPPING",[Hr]:"REINHARD_TONE_MAPPING",[Vr]:"CINEON_TONE_MAPPING",[Zi]:"ACES_FILMIC_TONE_MAPPING",[Wr]:"AGX_TONE_MAPPING",[Xr]:"NEUTRAL_TONE_MAPPING",[Gr]:"CUSTOM_TONE_MAPPING"};function I0(i,e,t,n,s,r){let a=new Ot(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new lt;c.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new We([0,2,0,0,2,0],2));let h=new Ls({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ze(c,h),u=new wi(-1,1,1,-1,0,1),p=null,v=null,S=!1,m,d=null,M=[],A=!1;this.setSize=function(y,T){a.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let b=0;b<M.length;b++){let R=M[b];R.setSize&&R.setSize(y,T)}},this.setEffects=function(y){M=y,A=M.length>0&&M[0].isRenderPass===!0;let T=a.width,b=a.height;M.length>0&&o===null&&(o=new Ot(T,b,{type:$t,depthBuffer:!1,stencilBuffer:!1}),l=new Ot(T,b,{type:$t,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let _=M[R];_.setSize&&_.setSize(T,b)}},this.begin=function(y,T){if(S||y.toneMapping===Fn&&M.length===0)return!1;if(d=T,T!==null){let b=T.width,R=T.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return A===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Fn,!0},this.hasRenderPass=function(){return A},this.end=function(y,T){y.toneMapping=m,S=!0;let b=a,R=o;for(let _=0;_<M.length;_++){let E=M[_];E.enabled!==!1&&(E.render(y,R,b,T),E.needsSwap!==!1&&(b=R,R=R===o?l:o))}if(p!==y.outputColorSpace||v!==y.toneMapping){p=y.outputColorSpace,v=y.toneMapping,h.defines={},je.getTransfer(p)===ut&&(h.defines.SRGB_TRANSFER="");let _=P0[v];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(d),y.render(f,u),d=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Od=new sn,ch=new Si(1,1),Bd=new vr,zd=new po,kd=new wr,vd=[],xd=[],yd=new Float32Array(16),Sd=new Float32Array(9),Md=new Float32Array(4);function Gs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=vd[s];if(r===void 0&&(r=new Float32Array(s),vd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ul(i,e){let t=xd[e];t===void 0&&(t=new Int32Array(e),xd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function L0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function N0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function D0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function U0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function F0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Md.set(n),i.uniformMatrix2fv(this.addr,!1,Md),Vt(t,n)}}function O0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Sd.set(n),i.uniformMatrix3fv(this.addr,!1,Sd),Vt(t,n)}}function B0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;yd.set(n),i.uniformMatrix4fv(this.addr,!1,yd),Vt(t,n)}}function z0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function k0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function H0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function V0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function G0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function W0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function X0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function Y0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ch.compareFunction=t.isReversedDepthBuffer()?Rl:Cl,r=ch):r=Od,t.setTexture2D(e||r,s)}function Z0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zd,s)}function $0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kd,s)}function J0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bd,s)}function K0(i){switch(i){case 5126:return L0;case 35664:return N0;case 35665:return D0;case 35666:return U0;case 35674:return F0;case 35675:return O0;case 35676:return B0;case 5124:case 35670:return z0;case 35667:case 35671:return k0;case 35668:case 35672:return H0;case 35669:case 35673:return V0;case 5125:return G0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return J0}}function Q0(i,e){i.uniform1fv(this.addr,e)}function j0(i,e){let t=Gs(e,this.size,2);i.uniform2fv(this.addr,t)}function e_(i,e){let t=Gs(e,this.size,3);i.uniform3fv(this.addr,t)}function t_(i,e){let t=Gs(e,this.size,4);i.uniform4fv(this.addr,t)}function n_(i,e){let t=Gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function i_(i,e){let t=Gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function s_(i,e){let t=Gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function r_(i,e){i.uniform1iv(this.addr,e)}function a_(i,e){i.uniform2iv(this.addr,e)}function o_(i,e){i.uniform3iv(this.addr,e)}function l_(i,e){i.uniform4iv(this.addr,e)}function c_(i,e){i.uniform1uiv(this.addr,e)}function h_(i,e){i.uniform2uiv(this.addr,e)}function u_(i,e){i.uniform3uiv(this.addr,e)}function d_(i,e){i.uniform4uiv(this.addr,e)}function f_(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ch:a=Od;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function p_(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zd,r[a])}function m_(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||kd,r[a])}function g_(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Bd,r[a])}function __(i){switch(i){case 5126:return Q0;case 35664:return j0;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}var hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=K0(t.type)}},uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=__(t.type)}},dh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},oh=/(\w+)(\])?(\[|\.)?/g;function bd(i,e){i.seq.push(e),i.map[e.id]=e}function v_(i,e,t){let n=i.name,s=n.length;for(oh.lastIndex=0;;){let r=oh.exec(n),a=oh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bd(t,c===void 0?new hh(o,i,e):new uh(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new dh(o),bd(t,f)),t=f}}}var Hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);v_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ed(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var x_=37297,y_=0;function S_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Td=new Ge;function M_(i){je._getMatrix(Td,je.workingColorSpace,i);let e=`mat3( ${Td.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case mr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+S_(i.getShaderSource(e),o)}else return r}function b_(i,e){let t=M_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var E_={[kr]:"Linear",[Hr]:"Reinhard",[Vr]:"Cineon",[Zi]:"ACESFilmic",[Wr]:"AgX",[Xr]:"Neutral",[Gr]:"Custom"};function T_(i,e){let t=E_[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Il=new P;function w_(){je.getLuminanceCoefficients(Il);let i=Il.x.toFixed(4),e=Il.y.toFixed(4),t=Il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function C_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function R_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ia(i){return i!==""}function Ad(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(i){return i.replace(P_,L_)}var I_=new Map;function L_(i,e){let t=$e[e];if(t===void 0){let n=I_.get(e);if(n!==void 0)t=$e[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return fh(t)}var N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(i){return i.replace(N_,D_)}function D_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var U_={[zr]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function F_(i){return U_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var O_={[Ci]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE_UV"};function B_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":O_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var z_={[$i]:"ENVMAP_MODE_REFRACTION"};function k_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":z_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var H_={[Oc]:"ENVMAP_BLENDING_MULTIPLY",[Zu]:"ENVMAP_BLENDING_MIX",[$u]:"ENVMAP_BLENDING_ADD"};function V_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":H_[i.combine]||"ENVMAP_BLENDING_NONE"}function G_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function W_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=F_(t),c=B_(t),h=k_(t),f=V_(t),u=G_(t),p=A_(t),v=C_(r),S=s.createProgram(),m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ia).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ia).join(`
`),d.length>0&&(d+=`
`)):(m=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),d=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Fn?T_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,b_("linearToOutputTexel",t.outputColorSpace),w_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),a=fh(a),a=Ad(a,t),a=Cd(a,t),o=fh(o),o=Ad(o,t),o=Cd(o,t),a=Rd(a),o=Rd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let A=M+m+a,y=M+d+o,T=Ed(s,s.VERTEX_SHADER,A),b=Ed(s,s.FRAGMENT_SHADER,y);s.attachShader(S,T),s.attachShader(S,b),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(F){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(S)||"",V=s.getShaderInfoLog(T)||"",N=s.getShaderInfoLog(b)||"",X=O.trim(),K=V.trim(),$=N.trim(),re=!0,Z=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,T,b);else{let te=wd(s,T,"vertex"),se=wd(s,b,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+te+`
`+se)}else X!==""?Be("WebGLProgram: Program Info Log:",X):(K===""||$==="")&&(Z=!1);Z&&(F.diagnostics={runnable:re,programLog:X,vertexShader:{log:K,prefix:m},fragmentShader:{log:$,prefix:d}})}s.deleteShader(T),s.deleteShader(b),_=new Hs(s,S),E=R_(s,S)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(S,x_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y_++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=b,this}var X_=0,ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mh(e),t.set(e,n)),n}},mh=class{constructor(e){this.id=X_++,this.code=e,this.usedTimes=0}};function q_(i){return i===Ii||i===Qr||i===jr}function Y_(i,e,t,n,s,r){let a=new xr,o=new ph,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function S(_,E,C,F,O,V){let N=F.fog,X=O.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?F.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,re=e.get(_.envMap||K,$),Z=re&&re.mapping===qr?re.image.height:null,te=p[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let se=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Le=se!==void 0?se.length:0,De=0;X.morphAttributes.position!==void 0&&(De=1),X.morphAttributes.normal!==void 0&&(De=2),X.morphAttributes.color!==void 0&&(De=3);let pt,it,st,Q;if(te){let dt=Kn[te];pt=dt.vertexShader,it=dt.fragmentShader}else{pt=_.vertexShader,it=_.fragmentShader;let dt=o.getVertexShaderStage(_),at=o.getFragmentShaderStage(_);o.update(_,dt,at),st=dt.id,Q=at.id}let ne=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),ze=O.isInstancedMesh===!0,pe=O.isBatchedMesh===!0,Ye=!!_.map,Dt=!!_.matcap,Xe=!!re,tt=!!_.aoMap,gt=!!_.lightMap,Qe=!!_.bumpMap&&_.wireframe===!1,bt=!!_.normalMap,Pt=!!_.displacementMap,Yt=!!_.emissiveMap,Tt=!!_.metalnessMap,Lt=!!_.roughnessMap,U=_.anisotropy>0,Bt=_.clearcoat>0,ct=_.dispersion>0,w=_.retroreflectivity>0,g=_.iridescence>0,z=_.sheen>0,W=_.transmission>0,Y=U&&!!_.anisotropyMap,oe=Bt&&!!_.clearcoatMap,ce=Bt&&!!_.clearcoatNormalMap,J=Bt&&!!_.clearcoatRoughnessMap,ee=g&&!!_.iridescenceMap,ue=g&&!!_.iridescenceThicknessMap,Ne=z&&!!_.sheenColorMap,_e=z&&!!_.sheenRoughnessMap,le=!!_.specularMap,Re=!!_.specularColorMap,Oe=!!_.specularIntensityMap,Ve=W&&!!_.transmissionMap,D=W&&!!_.thicknessMap,fe=!!_.gradientMap,j=!!_.alphaMap,me=_.alphaTest>0,ye=!!_.alphaHash,ie=!!_.extensions,Ue=Fn;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ue=i.toneMapping);let Ae={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:pt,fragmentShader:it,defines:_.defines,customVertexShaderID:st,customFragmentShaderID:Q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:pe,batchingColor:pe&&O._colorsTexture!==null,instancing:ze,instancingColor:ze&&O.instanceColor!==null,instancingMorph:ze&&O.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ye,matcap:Dt,envMap:Xe,envMapMode:Xe&&re.mapping,envMapCubeUVHeight:Z,aoMap:tt,lightMap:gt,bumpMap:Qe,normalMap:bt,displacementMap:Pt,emissiveMap:Yt,normalMapObjectSpace:bt&&_.normalMapType===Qu,normalMapTangentSpace:bt&&_.normalMapType===Al,packedNormalMap:bt&&_.normalMapType===Al&&q_(_.normalMap.format),metalnessMap:Tt,roughnessMap:Lt,anisotropy:U,anisotropyMap:Y,clearcoat:Bt,clearcoatMap:oe,clearcoatNormalMap:ce,clearcoatRoughnessMap:J,dispersion:ct,retroreflection:w,iridescence:g,iridescenceMap:ee,iridescenceThicknessMap:ue,sheen:z,sheenColorMap:Ne,sheenRoughnessMap:_e,specularMap:le,specularColorMap:Re,specularIntensityMap:Oe,transmission:W,transmissionMap:Ve,thicknessMap:D,gradientMap:fe,opaque:_.transparent===!1&&_.blending===Us&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:me,alphaHash:ye,combine:_.combine,mapUv:Ye&&v(_.map.channel),aoMapUv:tt&&v(_.aoMap.channel),lightMapUv:gt&&v(_.lightMap.channel),bumpMapUv:Qe&&v(_.bumpMap.channel),normalMapUv:bt&&v(_.normalMap.channel),displacementMapUv:Pt&&v(_.displacementMap.channel),emissiveMapUv:Yt&&v(_.emissiveMap.channel),metalnessMapUv:Tt&&v(_.metalnessMap.channel),roughnessMapUv:Lt&&v(_.roughnessMap.channel),anisotropyMapUv:Y&&v(_.anisotropyMap.channel),clearcoatMapUv:oe&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(_.sheenRoughnessMap.channel),specularMapUv:le&&v(_.specularMap.channel),specularColorMapUv:Re&&v(_.specularColorMap.channel),specularIntensityMapUv:Oe&&v(_.specularIntensityMap.channel),transmissionMapUv:Ve&&v(_.transmissionMap.channel),thicknessMapUv:D&&v(_.thicknessMap.channel),alphaMapUv:j&&v(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(bt||U),vertexNormals:!!X.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Ye||j),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&bt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:De,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ye&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===ut,decodeVideoTextureEmissive:Yt&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===an,flipSided:_.side===kt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(d(E,_),M(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function d(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let E=p[_.type],C;if(E){let F=Kn[E];C=ui.clone(F.uniforms)}else C=_.uniforms;return C}function y(_,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new W_(i,E,_,s),c.push(C),h.set(E,C)),C}function T(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:R}}function Z_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function $_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Id(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ld(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,S,m,d){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:p,material:v,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:d},i[e]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=v,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=m,M.group=d),e++,M}function l(u,p,v,S,m,d,M){M.reversedDepth===!0&&(m=-m);let A=o(u,p,v,S,m,d);v.transmission>0?n.push(A):v.transparent===!0?s.push(A):t.push(A)}function c(u,p,v,S,m,d){let M=o(u,p,v,S,m,d);v.transmission>0?n.unshift(M):v.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,p){t.length>1&&t.sort(u||$_),n.length>1&&n.sort(p||Id),s.length>1&&s.sort(p||Id)}function f(){for(let u=e,p=i.length;u<p;u++){let v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function J_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ld,i.set(n,[a])):s>=r.length?(a=new Ld,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function K_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new de};break;case"SpotLight":t={position:new P,direction:new P,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Q_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var j_=0;function ev(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tv(i){let e=new K_,t=Q_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new yt,a=new yt;function o(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let p=0,v=0,S=0,m=0,d=0,M=0,A=0,y=0,T=0,b=0,R=0,_=0,E=0,C=0;c.sort(ev);for(let O=0,V=c.length;O<V;O++){let N=c[O],X=N.color,K=N.intensity,$=N.distance,re=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ii?re=N.shadow.map.texture:re=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=X.r*K,f+=X.g*K,u+=X.b*K;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(N.sh.coefficients[Z],K);C++}else if(N.isSunLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let te=N.shadow,se=t.get(N);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[v]=se,n.sunShadowMap[v]=re;let Le=te.getViewportCount();for(let De=0;De<Le;De++)n.sunShadowMatrix[S+De]=te.getMatrix(De),n.sunShadowCascade[S+De]=te._cascadeData[De];S+=Le,v++}n.sun[p]=Z,p++}else if(N.isDirectionalLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let te=N.shadow,se=t.get(N);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,n.directionalShadow[m]=se,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=N.shadow.matrix,T++}n.directional[m]=Z,m++}else if(N.isSpotLight){let Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(X).multiplyScalar(K),Z.distance=$,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,n.spot[M]=Z;let te=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,te.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[M]=te.matrix,N.castShadow){let se=t.get(N);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,n.spotShadow[M]=se,n.spotShadowMap[M]=re,R++}M++}else if(N.isRectAreaLight){let Z=e.get(N);Z.color.copy(X).multiplyScalar(K),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),n.rectArea[A]=Z,A++}else if(N.isPointLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){let te=N.shadow,se=t.get(N);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,se.shadowCameraNear=te.camera.near,se.shadowCameraFar=te.camera.far,n.pointShadow[d]=se,n.pointShadowMap[d]=re,n.pointShadowMatrix[d]=N.shadow.matrix,b++}n.point[d]=Z,d++}else if(N.isHemisphereLight){let Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(K),Z.groundColor.copy(N.groundColor).multiplyScalar(K),n.hemi[y]=Z,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let F=n.hash;(F.sunLength!==p||F.directionalLength!==m||F.pointLength!==d||F.spotLength!==M||F.rectAreaLength!==A||F.hemiLength!==y||F.numSunShadows!==v||F.numDirectionalShadows!==T||F.numPointShadows!==b||F.numSpotShadows!==R||F.numSpotMaps!==_||F.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=M,n.rectArea.length=A,n.point.length=d,n.hemi.length=y,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,F.sunLength=p,F.directionalLength=m,F.pointLength=d,F.spotLength=M,F.rectAreaLength=A,F.hemiLength=y,F.numSunShadows=v,F.numDirectionalShadows=T,F.numPointShadows=b,F.numSpotShadows=R,F.numSpotMaps=_,F.numLightProbes=C,n.version=j_++)}function l(c,h){let f=0,u=0,p=0,v=0,S=0,m=0,d=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let y=c[M];if(y.isSunLight){let T=n.sun[f];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),f++}else if(y.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),u++}else if(y.isSpotLight){let T=n.spot[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),v++}else if(y.isRectAreaLight){let T=n.rectArea[S];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){let T=n.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function Nd(i){let e=new tv(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function nv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Nd(i),e.set(s,[o])):r>=a.length?(o=new Nd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sv=`uniform sampler2D shadow_pass;
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
}`,rv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],av=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Dd=new yt,na=new P,lh=new P;function ov(i,e,t){let n=new As,s=new Me,r=new Me,a=new Rt,o=new Ao,l=new Co,c={},h=t.maxTextureSize,f={[Ai]:kt,[kt]:Ai,[an]:an},u=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:iv,fragmentShader:sv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let v=new lt;v.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Ze(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zr;let d=this.type;this.render=function(b,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Ru&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zr);let E=i.getRenderTarget(),C=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),O=i.state;O.setBlending(En),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=d!==this.type;V&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(X=>X.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,X=b.length;N<X;N++){let K=b[N],$=K.shadow;if($===void 0){Be("WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let re=$.getFrameExtents();s.multiply(re),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,$.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=Z,$.map===null||V===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Ds){if(K.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Ot(s.x,s.y,{format:Ii,type:$t,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),$.map.texture.name=K.name+".shadowMap",$.map.depthTexture=new Si(s.x,s.y,Tn),$.map.depthTexture.name=K.name+".shadowMapDepth",$.map.depthTexture.format=Vn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=qt,$.map.depthTexture.magFilter=qt}else K.isPointLight?($.map=new Ll(s.x),$.map.depthTexture=new vo(s.x,On)):($.map=new Ot(s.x,s.y),$.map.depthTexture=new Si(s.x,s.y,On)),$.map.depthTexture.name=K.name+".shadowMap",$.map.depthTexture.format=Vn,this.type===zr?($.map.depthTexture.compareFunction=Z?Rl:Cl,$.map.depthTexture.minFilter=Zt,$.map.depthTexture.magFilter=Zt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=qt,$.map.depthTexture.magFilter=qt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let te=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();K.isPointLight!==!0&&$.updateMatrices(K,_);for(let se=0;se<te;se++){let Le=$.getCamera(se);if(K.isPointLight){let De=$.camera,pt=$.matrix,it=K.distance||De.far;it!==De.far&&(De.far=it,De.updateProjectionMatrix()),na.setFromMatrixPosition(K.matrixWorld),De.position.copy(na),lh.copy(De.position),lh.add(rv[se]),De.up.copy(av[se]),De.lookAt(lh),De.updateMatrixWorld(),pt.makeTranslation(-na.x,-na.y,-na.z),Dd.multiplyMatrices(De.projectionMatrix,De.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Dd,De.coordinateSystem,De.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,se),i.clear();else{se===0&&(i.setRenderTarget($.map),i.clear());let De=$.getViewport(se);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),O.viewport(a)}n=$.getFrustum(se),y(R,_,Le,K,this.type)}$.isPointLightShadow!==!0&&this.type===Ds&&M($,_),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,C,F)};function M(b,R){let _=e.update(S);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ot(s.x,s.y,{format:Ii,type:$t}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,_,p,S,null)}function A(b,R,_,E){let C=null,F=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(F!==void 0)C=F;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let O=C.uuid,V=R.uuid,N=c[O];N===void 0&&(N={},c[O]=N);let X=N[V];X===void 0&&(X=C.clone(),N[V]=X,R.addEventListener("dispose",T)),C=X}if(C.visible=R.visible,C.wireframe=R.wireframe,E===Ds?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:f[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=_}return C}function y(b,R,_,E,C){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Ds)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let V=e.update(b),N=b.material;if(Array.isArray(N)){let X=V.groups;for(let K=0,$=X.length;K<$;K++){let re=X[K],Z=N[re.materialIndex];if(Z&&Z.visible){let te=A(b,Z,E,C);b.onBeforeShadow(i,b,R,_,V,te,re),i.renderBufferDirect(_,null,V,te,b,re),b.onAfterShadow(i,b,R,_,V,te,re)}}}else if(N.visible){let X=A(b,N,E,C);b.onBeforeShadow(i,b,R,_,V,X,null),i.renderBufferDirect(_,null,V,X,b,null),b.onAfterShadow(i,b,R,_,V,X,null)}}let O=b.children;for(let V=0,N=O.length;V<N;V++)y(O[V],R,_,E,C)}function T(b){b.target.removeEventListener("dispose",T);for(let _ in c){let E=c[_],C=b.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function lv(i,e){function t(){let D=!1,fe=new Rt,j=null,me=new Rt(0,0,0,0);return{setMask:function(ye){j!==ye&&!D&&(i.colorMask(ye,ye,ye,ye),j=ye)},setLocked:function(ye){D=ye},setClear:function(ye,ie,Ue,Ae,dt){dt===!0&&(ye*=Ae,ie*=Ae,Ue*=Ae),fe.set(ye,ie,Ue,Ae),me.equals(fe)===!1&&(i.clearColor(ye,ie,Ue,Ae),me.copy(fe))},reset:function(){D=!1,j=null,me.set(-1,0,0,0)}}}function n(){let D=!1,fe=!1,j=null,me=null,ye=null;return{setReversed:function(ie){if(fe!==ie){let Ue=e.get("EXT_clip_control");ie?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),fe=ie;let Ae=ye;ye=null,this.setClear(Ae)}},getReversed:function(){return fe},setTest:function(ie){ie?ne(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(ie){j!==ie&&!D&&(i.depthMask(ie),j=ie)},setFunc:function(ie){if(fe&&(ie=hd[ie]),me!==ie){switch(ie){case to:i.depthFunc(i.NEVER);break;case no:i.depthFunc(i.ALWAYS);break;case io:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case so:i.depthFunc(i.EQUAL);break;case ro:i.depthFunc(i.GEQUAL);break;case ao:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=ie}},setLocked:function(ie){D=ie},setClear:function(ie){ye!==ie&&(ye=ie,fe&&(ie=1-ie),i.clearDepth(ie))},reset:function(){D=!1,j=null,me=null,ye=null,fe=!1}}}function s(){let D=!1,fe=null,j=null,me=null,ye=null,ie=null,Ue=null,Ae=null,dt=null;return{setTest:function(at){D||(at?ne(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(at){fe!==at&&!D&&(i.stencilMask(at),fe=at)},setFunc:function(at,nn,yn){(j!==at||me!==nn||ye!==yn)&&(i.stencilFunc(at,nn,yn),j=at,me=nn,ye=yn)},setOp:function(at,nn,yn){(ie!==at||Ue!==nn||Ae!==yn)&&(i.stencilOp(at,nn,yn),ie=at,Ue=nn,Ae=yn)},setLocked:function(at){D=at},setClear:function(at){dt!==at&&(i.clearStencil(at),dt=at)},reset:function(){D=!1,fe=null,j=null,me=null,ye=null,ie=null,Ue=null,Ae=null,dt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},p=new WeakMap,v=[],S=null,m=!1,d=null,M=null,A=null,y=null,T=null,b=null,R=null,_=new de(0,0,0),E=0,C=!1,F=null,O=null,V=null,N=null,X=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,re=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=re>=1):Z.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=re>=2);let te=null,se={},Le=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),pt=new Rt().fromArray(Le),it=new Rt().fromArray(De);function st(D,fe,j,me){let ye=new Uint8Array(4),ie=i.createTexture();i.bindTexture(D,ie),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<j;Ue++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(fe+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ie}let Q={};Q[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(ys),Qe(!1),bt(Lc),ne(i.CULL_FACE),tt(En);function ne(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ee(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function ze(D,fe){return u[D]!==fe?(i.bindFramebuffer(D,fe),u[D]=fe,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function pe(D,fe){let j=v,me=!1;if(D){j=p.get(fe),j===void 0&&(j=[],p.set(fe,j));let ye=D.textures;if(j.length!==ye.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Ue=ye.length;ie<Ue;ie++)j[ie]=i.COLOR_ATTACHMENT0+ie;j.length=ye.length,me=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,me=!0);me&&i.drawBuffers(j)}function Ye(D){return S!==D?(i.useProgram(D),S=D,!0):!1}let Dt={[Yi]:i.FUNC_ADD,[Iu]:i.FUNC_SUBTRACT,[Lu]:i.FUNC_REVERSE_SUBTRACT};Dt[Nu]=i.MIN,Dt[Du]=i.MAX;let Xe={[Uu]:i.ZERO,[Fu]:i.ONE,[Ou]:i.SRC_COLOR,[Uc]:i.SRC_ALPHA,[Gu]:i.SRC_ALPHA_SATURATE,[Hu]:i.DST_COLOR,[zu]:i.DST_ALPHA,[Bu]:i.ONE_MINUS_SRC_COLOR,[Fc]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[ku]:i.ONE_MINUS_DST_ALPHA,[Wu]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[Yu]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(D,fe,j,me,ye,ie,Ue,Ae,dt,at){if(D===En){m===!0&&(Ee(i.BLEND),m=!1);return}if(m===!1&&(ne(i.BLEND),m=!0),D!==Pu){if(D!==d||at!==C){if((M!==Yi||T!==Yi)&&(i.blendEquation(i.FUNC_ADD),M=Yi,T=Yi),at)switch(D){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ft:i.blendFunc(i.ONE,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",D);break}else switch(D){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ft:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nc:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dc:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",D);break}A=null,y=null,b=null,R=null,_.set(0,0,0),E=0,d=D,C=at}return}ye=ye||fe,ie=ie||j,Ue=Ue||me,(fe!==M||ye!==T)&&(i.blendEquationSeparate(Dt[fe],Dt[ye]),M=fe,T=ye),(j!==A||me!==y||ie!==b||Ue!==R)&&(i.blendFuncSeparate(Xe[j],Xe[me],Xe[ie],Xe[Ue]),A=j,y=me,b=ie,R=Ue),(Ae.equals(_)===!1||dt!==E)&&(i.blendColor(Ae.r,Ae.g,Ae.b,dt),_.copy(Ae),E=dt),d=D,C=!1}function gt(D,fe){D.side===an?Ee(i.CULL_FACE):ne(i.CULL_FACE);let j=D.side===kt;fe&&(j=!j),Qe(j),D.blending===Us&&D.transparent===!1?tt(En):tt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let me=D.stencilWrite;o.setTest(me),me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(D){F!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),F=D)}function bt(D){D!==Au?(ne(i.CULL_FACE),D!==O&&(D===Lc?i.cullFace(i.BACK):D===Cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),O=D}function Pt(D){D!==V&&($&&i.lineWidth(D),V=D)}function Yt(D,fe,j){D?(ne(i.POLYGON_OFFSET_FILL),(N!==fe||X!==j)&&(N=fe,X=j,a.getReversed()&&(fe=-fe),i.polygonOffset(fe,j))):Ee(i.POLYGON_OFFSET_FILL)}function Tt(D){D?ne(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function Lt(D){D===void 0&&(D=i.TEXTURE0+K-1),te!==D&&(i.activeTexture(D),te=D)}function U(D,fe,j){j===void 0&&(te===null?j=i.TEXTURE0+K-1:j=te);let me=se[j];me===void 0&&(me={type:void 0,texture:void 0},se[j]=me),(me.type!==D||me.texture!==fe)&&(te!==j&&(i.activeTexture(j),te=j),i.bindTexture(D,fe||Q[D]),me.type=D,me.texture=fe)}function Bt(){let D=se[te];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ct(){try{i.compressedTexImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function g(){try{i.texSubImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function z(){try{i.texSubImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function oe(){try{i.texStorage2D(...arguments)}catch(D){He("WebGLState:",D)}}function ce(){try{i.texStorage3D(...arguments)}catch(D){He("WebGLState:",D)}}function J(){try{i.texImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function ee(){try{i.texImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function ue(D){return f[D]!==void 0?f[D]:i.getParameter(D)}function Ne(D,fe){f[D]!==fe&&(i.pixelStorei(D,fe),f[D]=fe)}function _e(D){pt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),pt.copy(D))}function le(D){it.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),it.copy(D))}function Re(D,fe){let j=c.get(fe);j===void 0&&(j=new WeakMap,c.set(fe,j));let me=j.get(D);me===void 0&&(me=i.getUniformBlockIndex(fe,D.name),j.set(D,me))}function Oe(D,fe){let me=c.get(fe).get(D);l.get(fe)!==me&&(i.uniformBlockBinding(fe,me,D.__bindingPointIndex),l.set(fe,me))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},te=null,se={},u={},p=new WeakMap,v=[],S=null,m=!1,d=null,M=null,A=null,y=null,T=null,b=null,R=null,_=new de(0,0,0),E=0,C=!1,F=null,O=null,V=null,N=null,X=null,pt.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:Ee,bindFramebuffer:ze,drawBuffers:pe,useProgram:Ye,setBlending:tt,setMaterial:gt,setFlipSided:Qe,setCullFace:bt,setLineWidth:Pt,setPolygonOffset:Yt,setScissorTest:Tt,activeTexture:Lt,bindTexture:U,unbindTexture:Bt,compressedTexImage2D:ct,compressedTexImage3D:w,texImage2D:J,texImage3D:ee,pixelStorei:Ne,getParameter:ue,updateUBOMapping:Re,uniformBlockBinding:Oe,texStorage2D:oe,texStorage3D:ce,texSubImage2D:g,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:Y,scissor:_e,viewport:le,reset:Ve}}function cv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap,f=new Set,u,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,g){return v?new OffscreenCanvas(w,g):gr("canvas")}function m(w,g,z){let W=1,Y=ct(w);if((Y.width>z||Y.height>z)&&(W=z/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let oe=Math.floor(W*Y.width),ce=Math.floor(W*Y.height);u===void 0&&(u=S(oe,ce));let J=g?S(oe,ce):u;return J.width=oe,J.height=ce,J.getContext("2d").drawImage(w,0,0,oe,ce),Be("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+oe+"x"+ce+")."),J}else return"data"in w&&Be("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),w;return w}function d(w){return w.generateMipmaps}function M(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,g,z,W,Y,oe=!1){if(w!==null){if(i[w]!==void 0)return i[w];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ce;W&&(ce=e.get("EXT_texture_norm16"),ce||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&ce&&(J=ce.R16_EXT),z===i.SHORT&&ce&&(J=ce.R16_SNORM_EXT)),g===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),g===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&ce&&(J=ce.RG16_EXT),z===i.SHORT&&ce&&(J=ce.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),g===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),g===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),g===i.RGB&&(z===i.UNSIGNED_SHORT&&ce&&(J=ce.RGB16_EXT),z===i.SHORT&&ce&&(J=ce.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),g===i.RGBA){let ee=oe?mr:je.getTransfer(Y);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=ee===ut?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ce&&(J=ce.RGBA16_EXT),z===i.SHORT&&ce&&(J=ce.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(w,g){let z;return w?g===null||g===On||g===Bs?z=i.DEPTH24_STENCIL8:g===Tn?z=i.DEPTH32F_STENCIL8:g===Os&&(z=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===On||g===Bs?z=i.DEPTH_COMPONENT24:g===Tn?z=i.DEPTH_COMPONENT32F:g===Os&&(z=i.DEPTH_COMPONENT16),z}function b(w,g){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==qt&&w.minFilter!==Zt?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function R(w){let g=w.target;g.removeEventListener("dispose",R),E(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function _(w){let g=w.target;g.removeEventListener("dispose",_),F(g)}function E(w){let g=n.get(w);if(g.__webglInit===void 0)return;let z=w.source,W=p.get(z);if(W){let Y=W[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(w),Object.keys(W).length===0&&p.delete(z)}n.remove(w)}function C(w){let g=n.get(w);i.deleteTexture(g.__webglTexture);let z=w.source,W=p.get(z);delete W[g.__cacheKey],a.memory.textures--}function F(w){let g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Y=0;Y<g.__webglFramebuffer[W].length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[W][Y]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let z=w.textures;for(let W=0,Y=z.length;W<Y;W++){let oe=n.get(z[W]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(z[W])}n.remove(w)}let O=0;function V(){O=0}function N(){return O}function X(w){O=w}function K(){let w=O;return w>=s.maxTextures&&Be("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,w}function $(w){let g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function re(w,g){let z=n.get(w);if(w.isVideoTexture&&U(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){let W=w.image;if(W===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(z,w,g);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+g)}function Z(w,g){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){Ee(z,w,g);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+g)}function te(w,g){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){Ee(z,w,g);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+g)}function se(w,g){let z=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&z.__version!==w.version){ze(z,w,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+g)}let Le={[lo]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[co]:i.MIRRORED_REPEAT},De={[qt]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[Go]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},pt={[ed]:i.NEVER,[rd]:i.ALWAYS,[td]:i.LESS,[Cl]:i.LEQUAL,[nd]:i.EQUAL,[Rl]:i.GEQUAL,[id]:i.GREATER,[sd]:i.NOTEQUAL};function it(w,g){if(g.type===Tn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Zt||g.magFilter===Go||g.magFilter===Yr||g.magFilter===Ri||g.minFilter===Zt||g.minFilter===Go||g.minFilter===Yr||g.minFilter===Ri)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Le[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Le[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Le[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,De[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,De[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,pt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===qt||g.minFilter!==Yr&&g.minFilter!==Ri||g.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function st(w,g){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",R));let W=g.source,Y=p.get(W);Y===void 0&&(Y={},p.set(W,Y));let oe=$(g);if(oe!==w.__cacheKey){Y[oe]===void 0&&(Y[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Y[oe].usedTimes++;let ce=Y[w.__cacheKey];ce!==void 0&&(Y[w.__cacheKey].usedTimes--,ce.usedTimes===0&&C(g)),w.__cacheKey=oe,w.__webglTexture=Y[oe].texture}return z}function Q(w,g,z){return Math.floor(Math.floor(w/z)/g)}function ne(w,g,z,W){let oe=w.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,z,W,g.data);else{oe.sort((Ne,_e)=>Ne.start-_e.start);let ce=0;for(let Ne=1;Ne<oe.length;Ne++){let _e=oe[ce],le=oe[Ne],Re=_e.start+_e.count,Oe=Q(le.start,g.width,4),Ve=Q(_e.start,g.width,4);le.start<=Re+1&&Oe===Ve&&Q(le.start+le.count-1,g.width,4)===Oe?_e.count=Math.max(_e.count,le.start+le.count-_e.start):(++ce,oe[ce]=le)}oe.length=ce+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ne=0,_e=oe.length;Ne<_e;Ne++){let le=oe[Ne],Re=Math.floor(le.start/4),Oe=Math.ceil(le.count/4),Ve=Re%g.width,D=Math.floor(Re/g.width),fe=Oe,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ve,D,fe,j,z,W,g.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function Ee(w,g,z){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);let Y=st(w,g),oe=g.source;t.bindTexture(W,w.__webglTexture,i.TEXTURE0+z);let ce=n.get(oe);if(oe.version!==ce.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let j=je.getPrimaries(je.workingColorSpace),me=g.colorSpace===hi?null:je.getPrimaries(g.colorSpace),ye=g.colorSpace===hi||j===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ee=m(g.image,!1,s.maxTextureSize);ee=Bt(g,ee);let ue=r.convert(g.format,g.colorSpace),Ne=r.convert(g.type),_e=y(g.internalFormat,ue,Ne,g.normalized,g.colorSpace,g.isVideoTexture);it(W,g);let le,Re=g.mipmaps,Oe=g.isVideoTexture!==!0,Ve=ce.__version===void 0||Y===!0,D=oe.dataReady,fe=b(g,ee);if(g.isDepthTexture)_e=T(g.format===Pi,g.type),Ve&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,_e,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,_e,ee.width,ee.height,0,ue,Ne,null));else if(g.isDataTexture)if(Re.length>0){Oe&&Ve&&t.texStorage2D(i.TEXTURE_2D,fe,_e,Re[0].width,Re[0].height);for(let j=0,me=Re.length;j<me;j++)le=Re[j],Oe?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,le.width,le.height,ue,Ne,le.data):t.texImage2D(i.TEXTURE_2D,j,_e,le.width,le.height,0,ue,Ne,le.data);g.generateMipmaps=!1}else Oe?(Ve&&t.texStorage2D(i.TEXTURE_2D,fe,_e,ee.width,ee.height),D&&ne(g,ee,ue,Ne)):t.texImage2D(i.TEXTURE_2D,0,_e,ee.width,ee.height,0,ue,Ne,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Oe&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,_e,Re[0].width,Re[0].height,ee.depth);for(let j=0,me=Re.length;j<me;j++)if(le=Re[j],g.format!==wn)if(ue!==null)if(Oe){if(D)if(g.layerUpdates.size>0){let ye=Kc(le.width,le.height,g.format,g.type);for(let ie of g.layerUpdates){let Ue=le.data.subarray(ie*ye/le.data.BYTES_PER_ELEMENT,(ie+1)*ye/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ie,le.width,le.height,1,ue,Ue)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,le.width,le.height,ee.depth,ue,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,_e,le.width,le.height,ee.depth,0,le.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,le.width,le.height,ee.depth,ue,Ne,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,_e,le.width,le.height,ee.depth,0,ue,Ne,le.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Oe&&Ve&&t.texStorage2D(i.TEXTURE_2D,fe,_e,Re[0].width,Re[0].height);for(let j=0,me=Re.length;j<me;j++)le=Re[j],g.format!==wn?ue!==null?Oe?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,le.width,le.height,ue,le.data):t.compressedTexImage2D(i.TEXTURE_2D,j,_e,le.width,le.height,0,le.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,le.width,le.height,ue,Ne,le.data):t.texImage2D(i.TEXTURE_2D,j,_e,le.width,le.height,0,ue,Ne,le.data)}else if(g.isDataArrayTexture)if(Oe){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,_e,ee.width,ee.height,ee.depth),D)if(g.layerUpdates.size>0){let j=Kc(ee.width,ee.height,g.format,g.type);for(let me of g.layerUpdates){let ye=ee.data.subarray(me*j/ee.data.BYTES_PER_ELEMENT,(me+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,ee.width,ee.height,1,ue,Ne,ye)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ne,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,ee.width,ee.height,ee.depth,0,ue,Ne,ee.data);else if(g.isData3DTexture)Oe?(Ve&&t.texStorage3D(i.TEXTURE_3D,fe,_e,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ne,ee.data)):t.texImage3D(i.TEXTURE_3D,0,_e,ee.width,ee.height,ee.depth,0,ue,Ne,ee.data);else if(g.isFramebufferTexture){if(Ve)if(Oe)t.texStorage2D(i.TEXTURE_2D,fe,_e,ee.width,ee.height);else{let j=ee.width,me=ee.height;for(let ye=0;ye<fe;ye++)t.texImage2D(i.TEXTURE_2D,ye,_e,j,me,0,ue,Ne,null),j>>=1,me>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ee.parentNode!==j){j.appendChild(ee),f.add(g),j.onpaint=me=>{let ye=me.changedElements;for(let ie of f)ye.includes(ie.image)&&(ie.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let ye=i.RGBA,ie=i.RGBA,Ue=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ye,ie,Ue,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Oe&&Ve){let j=ct(Re[0]);t.texStorage2D(i.TEXTURE_2D,fe,_e,j.width,j.height)}for(let j=0,me=Re.length;j<me;j++)le=Re[j],Oe?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ue,Ne,le):t.texImage2D(i.TEXTURE_2D,j,_e,ue,Ne,le);g.generateMipmaps=!1}else if(Oe){if(Ve){let j=ct(ee);t.texStorage2D(i.TEXTURE_2D,fe,_e,j.width,j.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ne,ee)}else t.texImage2D(i.TEXTURE_2D,0,_e,ue,Ne,ee);d(g)&&M(W),ce.__version=oe.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ze(w,g,z){if(g.image.length!==6)return;let W=st(w,g),Y=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);let oe=n.get(Y);if(Y.version!==oe.__version||W===!0){t.activeTexture(i.TEXTURE0+z);let ce=je.getPrimaries(je.workingColorSpace),J=g.colorSpace===hi?null:je.getPrimaries(g.colorSpace),ee=g.colorSpace===hi||ce===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ue=g.isCompressedTexture||g.image[0].isCompressedTexture,Ne=g.image[0]&&g.image[0].isDataTexture,_e=[];for(let ie=0;ie<6;ie++)!ue&&!Ne?_e[ie]=m(g.image[ie],!0,s.maxCubemapSize):_e[ie]=Ne?g.image[ie].image:g.image[ie],_e[ie]=Bt(g,_e[ie]);let le=_e[0],Re=r.convert(g.format,g.colorSpace),Oe=r.convert(g.type),Ve=y(g.internalFormat,Re,Oe,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,fe=oe.__version===void 0||W===!0,j=Y.dataReady,me=b(g,le);it(i.TEXTURE_CUBE_MAP,g);let ye;if(ue){D&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ve,le.width,le.height);for(let ie=0;ie<6;ie++){ye=_e[ie].mipmaps;for(let Ue=0;Ue<ye.length;Ue++){let Ae=ye[Ue];g.format!==wn?Re!==null?D?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue,0,0,Ae.width,Ae.height,Re,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue,Ve,Ae.width,Ae.height,0,Ae.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue,0,0,Ae.width,Ae.height,Re,Oe,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue,Ve,Ae.width,Ae.height,0,Re,Oe,Ae.data)}}}else{if(ye=g.mipmaps,D&&fe){ye.length>0&&me++;let ie=ct(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ve,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ne){D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,_e[ie].width,_e[ie].height,Re,Oe,_e[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,_e[ie].width,_e[ie].height,0,Re,Oe,_e[ie].data);for(let Ue=0;Ue<ye.length;Ue++){let dt=ye[Ue].image[ie].image;D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue+1,0,0,dt.width,dt.height,Re,Oe,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue+1,Ve,dt.width,dt.height,0,Re,Oe,dt.data)}}else{D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,Oe,_e[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,Re,Oe,_e[ie]);for(let Ue=0;Ue<ye.length;Ue++){let Ae=ye[Ue];D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue+1,0,0,Re,Oe,Ae.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue+1,Ve,Re,Oe,Ae.image[ie])}}}d(g)&&M(i.TEXTURE_CUBE_MAP),oe.__version=Y.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function pe(w,g,z,W,Y,oe){let ce=r.convert(z.format,z.colorSpace),J=r.convert(z.type),ee=y(z.internalFormat,ce,J,z.normalized,z.colorSpace),ue=n.get(g),Ne=n.get(z);if(Ne.__renderTarget=g,!ue.__hasExternalTextures){let _e=Math.max(1,g.width>>oe),le=Math.max(1,g.height>>oe);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,oe,ee,_e,le,g.depth,0,ce,J,null):t.texImage2D(Y,oe,ee,_e,le,0,ce,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Lt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,Ne.__webglTexture,0,Tt(g)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,Ne.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(w,g,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){let W=g.depthTexture,Y=W&&W.isDepthTexture?W.type:null,oe=T(g.stencilBuffer,Y),ce=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Lt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(g),oe,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(g),oe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,oe,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,w)}else{let W=g.textures;for(let Y=0;Y<W.length;Y++){let oe=W[Y],ce=r.convert(oe.format,oe.colorSpace),J=r.convert(oe.type),ee=y(oe.internalFormat,ce,J,oe.normalized,oe.colorSpace);Lt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(g),ee,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(g),ee,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ee,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(w,g,z){let W=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),it(i.TEXTURE_CUBE_MAP,g.depthTexture);let ue=r.convert(g.depthTexture.format),Ne=r.convert(g.depthTexture.type),_e;g.depthTexture.format===Vn?_e=i.DEPTH_COMPONENT24:g.depthTexture.format===Pi&&(_e=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,_e,g.width,g.height,0,ue,Ne,null)}}else re(g.depthTexture,0);let oe=Y.__webglTexture,ce=Tt(g),J=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ee=g.depthTexture.format===Pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Vn)Lt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,oe,0);else if(g.depthTexture.format===Pi)Lt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(w){let g=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){let W=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){let Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=W}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)Dt(g.__webglFramebuffer[W],w,W);else{let W=w.texture.mipmaps;W&&W.length>0?Dt(g.__webglFramebuffer[0],w,0):Dt(g.__webglFramebuffer,w,0)}else if(z){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),Ye(g.__webglDepthbuffer[W],w,!1);else{let Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,oe)}}else{let W=w.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ye(g.__webglDepthbuffer,w,!1);else{let Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(w,g,z){let W=n.get(w);g!==void 0&&pe(W.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Xe(w)}function gt(w){let g=w.texture,z=n.get(w),W=n.get(g);w.addEventListener("dispose",_);let Y=w.textures,oe=w.isWebGLCubeRenderTarget===!0,ce=Y.length>1;if(ce||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),oe){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let ee=0;ee<g.mipmaps.length;ee++)z.__webglFramebuffer[J][ee]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ce)for(let J=0,ee=Y.length;J<ee;J++){let ue=n.get(Y[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Lt(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<Y.length;J++){let ee=Y[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let ue=r.convert(ee.format,ee.colorSpace),Ne=r.convert(ee.type),_e=y(ee.internalFormat,ue,Ne,ee.normalized,ee.colorSpace,w.isXRRenderTarget===!0),le=Tt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,_e,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),it(i.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0)for(let ee=0;ee<g.mipmaps.length;ee++)pe(z.__webglFramebuffer[J][ee],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else pe(z.__webglFramebuffer[J],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);d(g)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let J=0,ee=Y.length;J<ee;J++){let ue=Y[J],Ne=n.get(ue),_e=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_e=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,Ne.__webglTexture),it(_e,ue),pe(z.__webglFramebuffer,w,ue,i.COLOR_ATTACHMENT0+J,_e,0),d(ue)&&M(_e)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,W.__webglTexture),it(J,g),g.mipmaps&&g.mipmaps.length>0)for(let ee=0;ee<g.mipmaps.length;ee++)pe(z.__webglFramebuffer[ee],w,g,i.COLOR_ATTACHMENT0,J,ee);else pe(z.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,J,0);d(g)&&M(J),t.unbindTexture()}w.depthBuffer&&Xe(w)}function Qe(w){let g=w.textures;for(let z=0,W=g.length;z<W;z++){let Y=g[z];if(d(Y)){let oe=A(w),ce=n.get(Y).__webglTexture;t.bindTexture(oe,ce),M(oe),t.unbindTexture()}}}let bt=[],Pt=[];function Yt(w){if(w.samples>0){if(Lt(w)===!1){let g=w.textures,z=w.width,W=w.height,Y=i.COLOR_BUFFER_BIT,oe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(w),J=g.length>1;if(J)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let ee=w.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);let Ne=n.get(g[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,z,W,0,0,z,W,Y,i.NEAREST),l===!0&&(bt.length=0,Pt.length=0,bt.push(i.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(bt.push(oe),Pt.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);let Ne=n.get(g[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Tt(w){return Math.min(s.maxSamples,w.samples)}function Lt(w){let g=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(w){let g=a.render.frame;h.get(w)!==g&&(h.set(w,g),w.update())}function Bt(w,g){let z=w.colorSpace,W=w.format,Y=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==pr&&z!==hi&&(je.getTransfer(z)===ut?(W!==wn||Y!==hn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",z)),g}function ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=V,this.getTextureUnits=N,this.setTextureUnits=X,this.setTexture2D=re,this.setTexture2DArray=Z,this.setTexture3D=te,this.setTextureCube=se,this.rebindTextures=tt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hv(i,e){function t(n,s=hi){let r,a=je.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===Xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zc)return i.BYTE;if(n===kc)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===Wo)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===$t)return i.HALF_FLOAT;if(n===Gc)return i.ALPHA;if(n===Wc)return i.RGB;if(n===wn)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===Pi)return i.DEPTH_STENCIL;if(n===Yo)return i.RED;if(n===Zo)return i.RED_INTEGER;if(n===Ii)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===Jo)return i.RGBA_INTEGER;if(n===Zr||n===$r||n===Jr||n===Kr)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===Qo||n===jo||n===el)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===Qr||n===al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tl||n===nl)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===il)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sl)return r.COMPRESSED_R11_EAC;if(n===rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qr)return r.COMPRESSED_RG11_EAC;if(n===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===vl||n===xl||n===yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sl||n===Ml||n===bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sl)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===El||n===Tl||n===jr||n===wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===El)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dv=`
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

}`,gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Cr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ke({vertexShader:uv,fragmentShader:dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new Lr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_h=class extends Gn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,v=null,S=typeof XRWebGLBinding<"u",m=new gh,d={},M=t.getContextAttributes(),A=null,y=null,T=[],b=[],R=new Me,_=null,E=null,C=new Xt;C.viewport=new Rt;let F=new Xt;F.viewport=new Rt;let O=[C,F],V=new ko,N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=T[Q];return ne===void 0&&(ne=new Es,T[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=T[Q];return ne===void 0&&(ne=new Es,T[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=T[Q];return ne===void 0&&(ne=new Es,T[Q]=ne),ne.getHandSpace()};function K(Q){let ne=b.indexOf(Q.inputSource);if(ne===-1)return;let Ee=T[ne];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,c||a),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",re);for(let Q=0;Q<T.length;Q++){let ne=b[Q];ne!==null&&(b[Q]=null,T[Q].disconnect(ne))}N=null,X=null,m.reset();for(let Q in d)delete d[Q];if(e.setRenderTarget(A),p=null,u=null,f=null,s=null,y=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),E!==null){let Q=E.camera;Q.fov=E.fov,Q.zoom=E.zoom,Q.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",$),s.addEventListener("inputsourceschange",re),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ze=null,pe=null;M.depth&&(pe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=M.stencil?Pi:Vn,ze=M.stencil?Bs:On);let Ye={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ye),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Ot(u.textureWidth,u.textureHeight,{format:wn,type:hn,depthTexture:new Si(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ot(p.framebufferWidth,p.framebufferHeight,{format:wn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(Q){for(let ne=0;ne<Q.removed.length;ne++){let Ee=Q.removed[ne],ze=b.indexOf(Ee);ze>=0&&(b[ze]=null,T[ze].disconnect(Ee))}for(let ne=0;ne<Q.added.length;ne++){let Ee=Q.added[ne],ze=b.indexOf(Ee);if(ze===-1){for(let Ye=0;Ye<T.length;Ye++)if(Ye>=b.length){b.push(Ee),ze=Ye;break}else if(b[Ye]===null){b[Ye]=Ee,ze=Ye;break}if(ze===-1)break}let pe=T[ze];pe&&pe.connect(Ee)}}let Z=new P,te=new P;function se(Q,ne,Ee){Z.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(Ee.matrixWorld);let ze=Z.distanceTo(te),pe=ne.projectionMatrix.elements,Ye=Ee.projectionMatrix.elements,Dt=pe[14]/(pe[10]-1),Xe=pe[14]/(pe[10]+1),tt=(pe[9]+1)/pe[5],gt=(pe[9]-1)/pe[5],Qe=(pe[8]-1)/pe[0],bt=(Ye[8]+1)/Ye[0],Pt=Dt*Qe,Yt=Dt*bt,Tt=ze/(-Qe+bt),Lt=Tt*-Qe;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Lt),Q.translateZ(Tt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),pe[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let U=Dt+Tt,Bt=Xe+Tt,ct=Pt-Lt,w=Yt+(ze-Lt),g=tt*Xe/Bt*U,z=gt*Xe/Bt*U;Q.projectionMatrix.makePerspective(ct,w,g,z,U,Bt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Le(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ne=Q.near,Ee=Q.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),V.near=F.near=C.near=ne,V.far=F.far=C.far=Ee,(N!==V.near||X!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,X=V.far),V.layers.mask=Q.layers.mask|6,C.layers.mask=V.layers.mask&-5,F.layers.mask=V.layers.mask&-3;let ze=Q.parent,pe=V.cameras;Le(V,ze);for(let Ye=0;Ye<pe.length;Ye++)Le(pe[Ye],ze);pe.length===2?se(V,C,F):V.projectionMatrix.copy(C.projectionMatrix),E===null&&Q.isPerspectiveCamera&&(E={camera:Q,fov:Q.fov,zoom:Q.zoom}),De(Q,V,ze)};function De(Q,ne,Ee){Ee===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=_r*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Q){return d[Q]};let pt=null;function it(Q,ne){if(h=ne.getViewerPose(c||a),v=ne,h!==null){let Ee=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ze=!1;Ee.length!==V.cameras.length&&(V.cameras.length=0,ze=!0);for(let Xe=0;Xe<Ee.length;Xe++){let tt=Ee[Xe],gt=null;if(p!==null)gt=p.getViewport(tt);else{let bt=f.getViewSubImage(u,tt);gt=bt.viewport,Xe===0&&(e.setRenderTargetTextures(y,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(y))}let Qe=O[Xe];Qe===void 0&&(Qe=new Xt,Qe.layers.enable(Xe),Qe.viewport=new Rt,O[Xe]=Qe),Qe.matrix.fromArray(tt.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(tt.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(gt.x,gt.y,gt.width,gt.height),Xe===0&&(V.matrix.copy(Qe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ze===!0&&V.cameras.push(Qe)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=n.getBinding();let Xe=f.getDepthInformation(Ee[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,s.renderState)}if(pe&&pe.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let Xe=0;Xe<Ee.length;Xe++){let tt=Ee[Xe].camera;if(tt){let gt=d[tt];gt||(gt=new Cr,d[tt]=gt);let Qe=f.getCameraImage(tt);gt.sourceTexture=Qe}}}}for(let Ee=0;Ee<T.length;Ee++){let ze=b[Ee],pe=T[Ee];ze!==null&&pe!==void 0&&pe.update(ze,ne,c||a)}pt&&pt(Q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),v=null}let st=new Ud;st.setAnimationLoop(it),this.setAnimationLoop=function(Q){pt=Q},this.dispose=function(){}}},fv=new yt,Hd=new Ge;Hd.set(-1,0,0,0,1,0,0,0,1);function pv(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Zc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,A,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),S(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,M,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=e.get(d),A=M.envMap,y=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(fv.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Hd),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){let M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let b=T.program;n.uniformBlockBinding(y,b)}function c(y,T){let b=s[y.id];b===void 0&&(m(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",M));let R=T.program;n.updateUBOMapping(y,R);let _=e.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let T=f();y.__bindingPointIndex=T;let b=i.createBuffer(),R=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let T=s[y.id],b=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let _=0,E=b.length;_<E;_++){let C=b[_];if(Array.isArray(C))for(let F=0,O=C.length;F<O;F++)p(C[F],_,F,R);else p(C,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,T,b,R){if(S(y,T,b,R)===!0){let _=y.__offset,E=y.value;if(Array.isArray(E)){let C=0;for(let F=0;F<E.length;F++){let O=E[F],V=d(O);v(O,y.__data,C),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function v(y,T,b){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,b)}function S(y,T,b,R){let _=y.value,E=T+"_"+b;if(R[E]===void 0)return typeof _=="number"||typeof _=="boolean"?R[E]=_:ArrayBuffer.isView(_)?R[E]=_.slice():R[E]=_.clone(),!0;{let C=R[E];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(y){let T=y.uniforms,b=0,R=16;for(let E=0,C=T.length;E<C;E++){let F=Array.isArray(T[E])?T[E]:[T[E]];for(let O=0,V=F.length;O<V;O++){let N=F[O],X=Array.isArray(N.value)?N.value:[N.value];for(let K=0,$=X.length;K<$;K++){let re=X[K],Z=d(re),te=b%R,se=te%Z.boundary,Le=te+se;b+=se,Le!==0&&R-Le<Z.storage&&(b+=R-Le),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=Z.storage}}}let _=b%R;return _>0&&(b+=R-_),y.__size=b,y.__cache={},this}function d(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",y),T}function M(y){let T=y.target;T.removeEventListener("dispose",M);let b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function A(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var gv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function _v(){return Jn===null&&(Jn=new Er(gv,16,16,Ii,$t),Jn.name="DFG_LUT",Jn.minFilter=Zt,Jn.magFilter=Zt,Jn.wrapS=Hn,Jn.wrapT=Hn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var Nl=class{constructor(e={}){let{canvas:t=od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=hn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let S=p,m=new Set([Jo,$o,Zo]),d=new Set([hn,On,Os,Bs,Xo,qo]),M=new Uint32Array(4),A=new Int32Array(4),y=new P,T=null,b=null,R=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,F=!1,O=null,V=null,N=null,X=null;this._outputColorSpace=jt;let K=0,$=0,re=null,Z=-1,te=null,se=new Rt,Le=new Rt,De=null,pt=new de(0),it=0,st=t.width,Q=t.height,ne=1,Ee=null,ze=null,pe=new Rt(0,0,st,Q),Ye=new Rt(0,0,st,Q),Dt=!1,Xe=new As,tt=!1,gt=!1,Qe=new yt,bt=new P,Pt=new Rt,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tt=!1;function Lt(){return re===null?ne:1}let U=n;function Bt(x,L){return t.getContext(x,L)}let ct,w,g,z,W,Y,oe,ce,J,ee,ue,Ne,_e,le,Re,Oe,Ve,D,fe,j,me,ye,ie;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",nn,!1),U===null){let L="webgl2";if(U=Bt(L,x),U===null)throw Bt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(x){throw t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),He("WebGLRenderer: "+x.message),x}function Ue(){ct=new E0(U),ct.init(),me=new hv(U,ct),w=new p0(U,ct,e,me),g=new lv(U,ct),w.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),V=U.createFramebuffer(),N=U.createFramebuffer(),X=U.createFramebuffer(),z=new A0(U),W=new Z_,Y=new cv(U,ct,g,W,w,me,z),oe=new b0(C),ce=new Rp(U),ye=new d0(U,ce),J=new T0(U,ce,z,ye),ee=new R0(U,J,ce,ye,z),D=new C0(U,w,Y),Re=new m0(W),ue=new Y_(C,oe,ct,w,ye,Re),Ne=new pv(C,W),_e=new J_,le=new nv(ct),Ve=new u0(C,oe,g,ee,v,l),Oe=new ov(C,ee,w),ie=new mv(U,z,w,g),fe=new f0(U,ct,z),j=new w0(U,ct,z),z.programs=ue.programs,C.capabilities=w,C.extensions=ct,C.properties=W,C.renderLists=_e,C.shadowMap=Oe,C.state=g,C.info=z}S!==hn&&(E=new I0(S,t.width,t.height,o,s,r));let Ae=new _h(C,U);this.xr=Ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let x=ct.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ct.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(x){x!==void 0&&(ne=x,this.setSize(st,Q,!1))},this.getSize=function(x){return x.set(st,Q)},this.setSize=function(x,L,q=!0){if(Ae.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}st=x,Q=L,t.width=Math.floor(x*ne),t.height=Math.floor(L*ne),q===!0&&(t.style.width=x+"px",t.style.height=L+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(st*ne,Q*ne).floor()},this.setDrawingBufferSize=function(x,L,q){st=x,Q=L,ne=q,t.width=Math.floor(x*q),t.height=Math.floor(L*q),this.setViewport(0,0,x,L)},this.setEffects=function(x){if(S===hn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let L=0;L<x.length;L++)if(x[L].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(se)},this.getViewport=function(x){return x.copy(pe)},this.setViewport=function(x,L,q,H){x.isVector4?pe.set(x.x,x.y,x.z,x.w):pe.set(x,L,q,H),g.viewport(se.copy(pe).multiplyScalar(ne).round())},this.getScissor=function(x){return x.copy(Ye)},this.setScissor=function(x,L,q,H){x.isVector4?Ye.set(x.x,x.y,x.z,x.w):Ye.set(x,L,q,H),g.scissor(Le.copy(Ye).multiplyScalar(ne).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(x){g.setScissorTest(Dt=x)},this.setOpaqueSort=function(x){Ee=x},this.setTransparentSort=function(x){ze=x},this.getClearColor=function(x){return x.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,q=!0){let H=0;if(x){let G=!1;if(re!==null){let ve=re.texture.format;G=m.has(ve)}if(G){let ve=re.texture.type,Se=d.has(ve),he=Ve.getClearColor(),we=Ve.getClearAlpha(),Pe=he.r,qe=he.g,Je=he.b;Se?(M[0]=Pe,M[1]=qe,M[2]=Je,M[3]=we,U.clearBufferuiv(U.COLOR,0,M)):(A[0]=Pe,A[1]=qe,A[2]=Je,A[3]=we,U.clearBufferiv(U.COLOR,0,A))}else H|=U.COLOR_BUFFER_BIT}L&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),Ve.dispose(),_e.dispose(),le.dispose(),W.dispose(),oe.dispose(),ee.dispose(),ye.dispose(),ie.dispose(),ue.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Qs),Ae.removeEventListener("sessionend",ha),Qn.stop()};function dt(x){x.preventDefault(),qc("WebGLRenderer: Context Lost."),F=!0}function at(){qc("WebGLRenderer: Context Restored."),F=!1;let x=z.autoReset,L=Oe.enabled,q=Oe.autoUpdate,H=Oe.needsUpdate,G=Oe.type;Ue(),z.autoReset=x,Oe.enabled=L,Oe.autoUpdate=q,Oe.needsUpdate=H,Oe.type=G}function nn(x){He("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function yn(x){let L=x.target;L.removeEventListener("dispose",yn),la(L)}function la(x){Bn(x),W.remove(x)}function Bn(x){let L=W.get(x).programs;L!==void 0&&(L.forEach(function(q){ue.releaseProgram(q)}),x.isShaderMaterial&&ue.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,q,H,G,ve){L===null&&(L=Yt);let Se=G.isMesh&&G.matrixWorld.determinantAffine()<0,he=fa(x,L,q,H,G);g.setMaterial(H,Se);let we=q.index,Pe=1;if(H.wireframe===!0){if(we=J.getWireframeAttribute(q),we===void 0)return;Pe=2}let qe=q.drawRange,Je=q.attributes.position,Te=qe.start*Pe,rt=(qe.start+qe.count)*Pe;ve!==null&&(Te=Math.max(Te,ve.start*Pe),rt=Math.min(rt,(ve.start+ve.count)*Pe)),we!==null?(Te=Math.max(Te,0),rt=Math.min(rt,we.count)):Je!=null&&(Te=Math.max(Te,0),rt=Math.min(rt,Je.count));let Ct=rt-Te;if(Ct<0||Ct===1/0)return;ye.setup(G,H,he,q,we);let _t,vt=fe;if(we!==null&&(_t=ce.get(we),vt=j,vt.setIndex(_t)),G.isMesh)H.wireframe===!0?(g.setLineWidth(H.wireframeLinewidth*Lt()),vt.setMode(U.LINES)):vt.setMode(U.TRIANGLES);else if(G.isLine){let zt=H.linewidth;zt===void 0&&(zt=1),g.setLineWidth(zt*Lt()),G.isLineSegments?vt.setMode(U.LINES):G.isLineLoop?vt.setMode(U.LINE_LOOP):vt.setMode(U.LINE_STRIP)}else G.isPoints?vt.setMode(U.POINTS):G.isSprite&&vt.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))vt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let zt=G._multiDrawStarts,be=G._multiDrawCounts,Ut=G._multiDrawCount,nt=we?ce.get(we).bytesPerElement:1,Gt=W.get(H).currentProgram.getUniforms();for(let Jt=0;Jt<Ut;Jt++)Gt.setValue(U,"_gl_DrawID",Jt),vt.render(zt[Jt]/nt,be[Jt])}else if(G.isInstancedMesh)vt.renderInstances(Te,Ct,G.count);else if(q.isInstancedBufferGeometry){let zt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,be=Math.min(q.instanceCount,zt);vt.renderInstances(Te,Ct,be)}else vt.render(Te,Ct)};function ca(x,L,q,H){O!==null&&x.isNodeMaterial&&O.setObject(H,x),tt===!0&&Re.setState(x,q,!1),x.transparent===!0&&x.side===an&&x.forceSinglePass===!1?(x.side=kt,x.needsUpdate=!0,is(x,L,H),x.side=Ai,x.needsUpdate=!0,is(x,L,H),x.side=an):is(x,L,H)}this.compile=function(x,L,q=null){q===null&&(q=x),O!==null&&O.renderStart(x,L,q),b=le.get(q),b.init(L),_.push(b),q.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),x!==q&&x.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),gt=this.localClippingEnabled,tt=Re.init(this.clippingPlanes,gt),tt===!0&&Re.setGlobalState(this.clippingPlanes,L),O!==null&&Oe.render(b.state.shadowsArray,q,L);let H=new Set;return x.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ve=G.material;if(ve)if(Array.isArray(ve))for(let Se=0;Se<ve.length;Se++){let he=ve[Se];ca(he,q,L,G),H.add(he)}else ca(ve,q,L,G),H.add(ve)}),b=_.pop(),O!==null&&O.renderEnd(),H},this.compileAsync=function(x,L,q=null){let H=this.compile(x,L,q);return new Promise(G=>{function ve(){if(H.forEach(function(Se){let we=W.get(Se).currentProgram;(we===void 0||we.isReady())&&H.delete(Se)}),H.size===0){G(x);return}setTimeout(ve,10)}ct.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Ks=null;function Xl(x){Ks&&Ks(x)}function Qs(){Qn.stop()}function ha(){Qn.start()}let Qn=new Ud;Qn.setAnimationLoop(Xl),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(x){Ks=x,Ae.setAnimationLoop(x),x===null?Qn.stop():Qn.start()},Ae.addEventListener("sessionstart",Qs),Ae.addEventListener("sessionend",ha),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;O!==null&&O.renderStart(x,L);let q=Ae.enabled===!0&&Ae.isPresenting===!0,H=E!==null&&(re===null||q)&&E.begin(C,re);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(L),L=Ae.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,L,re),b=le.get(x,_.length),b.init(L),b.state.textureUnits=Y.getTextureUnits(),_.push(b),Qe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Xe.setFromProjectionMatrix(Qe,Nn,L.reversedDepth),gt=this.localClippingEnabled,tt=Re.init(this.clippingPlanes,gt),T=_e.get(x,R.length),T.init(),R.push(T),Ae.enabled===!0&&Ae.isPresenting===!0){let Se=C.xr.getDepthSensingMesh();Se!==null&&Ui(Se,L,-1/0,C.sortObjects)}Ui(x,L,0,C.sortObjects),T.finish(),O!==null&&O.updateLights(b.state.lightsArray),C.sortObjects===!0&&T.sort(Ee,ze),Tt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Tt&&Ve.addToRenderList(T,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&Re.beginShadows();let G=b.state.shadowsArray;if(Oe.render(G,x,L),tt===!0&&Re.endShadows(),(H&&E.hasRenderPass())===!1){let Se=T.opaque,he=T.transmissive;if(b.setupLights(),L.isArrayCamera){let we=L.cameras;if(he.length>0)for(let Pe=0,qe=we.length;Pe<qe;Pe++){let Je=we[Pe];ua(Se,he,x,Je)}Tt&&Ve.render(x);for(let Pe=0,qe=we.length;Pe<qe;Pe++){let Je=we[Pe];es(T,x,Je,Je.viewport)}}else he.length>0&&ua(Se,he,x,L),Tt&&Ve.render(x),es(T,x,L)}re!==null&&$===0&&(Y.updateMultisampleRenderTarget(re),Y.updateRenderTargetMipmap(re)),H&&E.end(C),x.isScene===!0&&x.onAfterRender(C,x,L),ye.resetDefaultState(),Z=-1,te=null,_.pop(),_.length>0?(b=_[_.length-1],Y.setTextureUnits(b.state.textureUnits),tt===!0&&Re.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,O!==null&&O.renderEnd()};function Ui(x,L,q,H){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)q=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(Xe)){H&&Pt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Qe);let Se=ee.update(x),he=x.material;he.visible&&T.push(x,Se,he,q,Pt.z,null,L)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(Xe))){let Se=ee.update(x),he=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Pt.copy(x.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Pt.copy(Se.boundingSphere.center)),Pt.applyMatrix4(x.matrixWorld).applyMatrix4(Qe)),Array.isArray(he)){let we=Se.groups;for(let Pe=0,qe=we.length;Pe<qe;Pe++){let Je=we[Pe],Te=he[Je.materialIndex];Te&&Te.visible&&T.push(x,Se,Te,q,Pt.z,Je,L)}}else he.visible&&T.push(x,Se,he,q,Pt.z,null,L)}}let ve=x.children;for(let Se=0,he=ve.length;Se<he;Se++)Ui(ve[Se],L,q,H)}function es(x,L,q,H){let{opaque:G,transmissive:ve,transparent:Se}=x;b.setupLightsView(q),tt===!0&&Re.setGlobalState(C.clippingPlanes,q),H&&g.viewport(se.copy(H)),G.length>0&&ts(G,L,q),ve.length>0&&ts(ve,L,q),Se.length>0&&ts(Se,L,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function ua(x,L,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){let Te=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new Ot(1,1,{generateMipmaps:!0,type:Te?$t:hn,minFilter:Ri,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let ve=b.state.transmissionRenderTarget[H.id],Se=H.viewport||se;ve.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);let he=C.getRenderTarget(),we=C.getActiveCubeFace(),Pe=C.getActiveMipmapLevel();C.setRenderTarget(ve),C.getClearColor(pt),it=C.getClearAlpha(),it<1&&C.setClearColor(16777215,.5),C.clear(),Tt&&Ve.render(q);let qe=C.toneMapping;C.toneMapping=Fn;let Je=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),tt===!0&&Re.setGlobalState(C.clippingPlanes,H),ts(x,q,H),Y.updateMultisampleRenderTarget(ve),Y.updateRenderTargetMipmap(ve),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let rt=0,Ct=L.length;rt<Ct;rt++){let _t=L[rt],{object:vt,geometry:zt,material:be,group:Ut}=_t;if(be.side===an&&vt.layers.test(H.layers)){let nt=be.side;be.side=kt,be.needsUpdate=!0,ns(vt,q,H,zt,be,Ut),be.side=nt,be.needsUpdate=!0,Te=!0}}Te===!0&&(Y.updateMultisampleRenderTarget(ve),Y.updateRenderTargetMipmap(ve))}C.setRenderTarget(he,we,Pe),C.setClearColor(pt,it),Je!==void 0&&(H.viewport=Je),C.toneMapping=qe}function ts(x,L,q){let H=L.isScene===!0?L.overrideMaterial:null;for(let G=0,ve=x.length;G<ve;G++){let Se=x[G],{object:he,geometry:we,group:Pe}=Se,qe=Se.material;qe.allowOverride===!0&&H!==null&&(qe=H),he.layers.test(q.layers)&&ns(he,L,q,we,qe,Pe)}}function ns(x,L,q,H,G,ve){O!==null&&G.isNodeMaterial&&O.setObject(x,G),x.onBeforeRender(C,L,q,H,G,ve),x.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),G.onBeforeRender(C,L,q,H,x,ve),G.transparent===!0&&G.side===an&&G.forceSinglePass===!1?(G.side=kt,G.needsUpdate=!0,C.renderBufferDirect(q,L,H,G,x,ve),G.side=Ai,G.needsUpdate=!0,C.renderBufferDirect(q,L,H,G,x,ve),G.side=an):C.renderBufferDirect(q,L,H,G,x,ve),x.onAfterRender(C,L,q,H,G,ve)}function is(x,L,q){L.isScene!==!0&&(L=Yt);let H=W.get(x),G=b.state.lights,ve=b.state.shadowsArray,Se=G.state.version,he=ue.getParameters(x,G.state,ve,L,q,b.state.lightProbeGridArray),we=ue.getProgramCacheKey(he),Pe=H.programs;H.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,H.fog=L.fog;let qe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;H.envMap=oe.get(x.envMap||H.environment,qe),H.envMapRotation=H.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Pe===void 0&&(x.addEventListener("dispose",yn),Pe=new Map,H.programs=Pe);let Je=Pe.get(we);if(Je!==void 0){if(H.currentProgram===Je&&H.lightsStateVersion===Se)return js(x,he),Je}else he.uniforms=ue.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,q,he),x.onBeforeCompile(he,C),Je=ue.acquireProgram(he,we),Pe.set(we,Je),H.uniforms=he.uniforms;let Te=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Te.clippingPlanes=Re.uniform),js(x,he),H.needsLights=ss(x),H.lightsStateVersion=Se,H.needsLights&&(Te.ambientLightColor.value=G.state.ambient,Te.lightProbe.value=G.state.probe,Te.sunLights.value=G.state.sun,Te.sunLightShadows.value=G.state.sunShadow,Te.directionalLights.value=G.state.directional,Te.directionalLightShadows.value=G.state.directionalShadow,Te.spotLights.value=G.state.spot,Te.spotLightShadows.value=G.state.spotShadow,Te.rectAreaLights.value=G.state.rectArea,Te.ltc_1.value=G.state.rectAreaLTC1,Te.ltc_2.value=G.state.rectAreaLTC2,Te.pointLights.value=G.state.point,Te.pointLightShadows.value=G.state.pointShadow,Te.hemisphereLights.value=G.state.hemi,Te.sunShadowMatrix.value=G.state.sunShadowMatrix,Te.sunShadowCascade.value=G.state.sunShadowCascade,Te.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Te.spotLightMatrix.value=G.state.spotLightMatrix,Te.spotLightMap.value=G.state.spotLightMap,Te.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=Je,H.uniformsList=null,Je}function jn(x){if(x.uniformsList===null){let L=x.currentProgram.getUniforms();x.uniformsList=Hs.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function js(x,L){let q=W.get(x);q.outputColorSpace=L.outputColorSpace,q.batching=L.batching,q.batchingColor=L.batchingColor,q.instancing=L.instancing,q.instancingColor=L.instancingColor,q.instancingMorph=L.instancingMorph,q.skinning=L.skinning,q.morphTargets=L.morphTargets,q.morphNormals=L.morphNormals,q.morphColors=L.morphColors,q.morphTargetsCount=L.morphTargetsCount,q.numClippingPlanes=L.numClippingPlanes,q.numIntersection=L.numClipIntersection,q.vertexAlphas=L.vertexAlphas,q.vertexTangents=L.vertexTangents,q.toneMapping=L.toneMapping}function da(x,L){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;y.setFromMatrixPosition(L.matrixWorld);for(let q=0,H=x.length;q<H;q++){let G=x[q];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function fa(x,L,q,H,G){L.isScene!==!0&&(L=Yt),Y.resetTextureUnits();let ve=L.fog,Se=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?L.environment:null,he=re===null?C.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:je.workingColorSpace,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Pe=oe.get(H.envMap||Se,we),qe=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Je=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Te=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,Ct=!!q.morphAttributes.color,_t=Fn;H.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(_t=C.toneMapping);let vt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,zt=vt!==void 0?vt.length:0,be=W.get(H),Ut=b.state.lights;if(tt===!0&&(gt===!0||x!==te)){let mt=x===te&&H.id===Z;Re.setState(H,x,mt)}let nt=!1;H.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Ut.state.version||be.outputColorSpace!==he||G.isBatchedMesh&&be.batching===!1||!G.isBatchedMesh&&be.batching===!0||G.isBatchedMesh&&be.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&be.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&be.instancing===!1||!G.isInstancedMesh&&be.instancing===!0||G.isSkinnedMesh&&be.skinning===!1||!G.isSkinnedMesh&&be.skinning===!0||G.isInstancedMesh&&be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&be.instancingMorph===!1&&G.morphTexture!==null||be.envMap!==Pe||H.fog===!0&&be.fog!==ve||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Re.numPlanes||be.numIntersection!==Re.numIntersection)||be.vertexAlphas!==qe||be.vertexTangents!==Je||be.morphTargets!==Te||be.morphNormals!==rt||be.morphColors!==Ct||be.toneMapping!==_t||be.morphTargetsCount!==zt||!!be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,be.__version=H.version);let Gt=be.currentProgram;nt===!0&&(Gt=is(H,L,G),O&&H.isNodeMaterial&&O.onUpdateProgram(H,Gt,be));let Jt=!1,zn=!1,ei=!1,ht=Gt.getUniforms(),xt=be.uniforms;if(g.useProgram(Gt.program)&&(Jt=!0,zn=!0,ei=!0),H.id!==Z&&(Z=H.id,zn=!0),be.needsLights){let mt=da(b.state.lightProbeGridArray,G);be.lightProbeGrid!==mt&&(be.lightProbeGrid=mt,zn=!0)}if(Jt||te!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ht.setValue(U,"projectionMatrix",x.projectionMatrix),ht.setValue(U,"viewMatrix",x.matrixWorldInverse);let Cn=ht.map.cameraPosition;Cn!==void 0&&Cn.setValue(U,bt.setFromMatrixPosition(x.matrixWorld)),w.logarithmicDepthBuffer&&ht.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ht.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),te!==x&&(te=x,zn=!0,ei=!0)}if(be.needsLights&&(Ut.state.sunShadowMap.length>0&&ht.setValue(U,"sunShadowMap",Ut.state.sunShadowMap,Y),Ut.state.directionalShadowMap.length>0&&ht.setValue(U,"directionalShadowMap",Ut.state.directionalShadowMap,Y),Ut.state.spotShadowMap.length>0&&ht.setValue(U,"spotShadowMap",Ut.state.spotShadowMap,Y),Ut.state.pointShadowMap.length>0&&ht.setValue(U,"pointShadowMap",Ut.state.pointShadowMap,Y)),G.isSkinnedMesh){ht.setOptional(U,G,"bindMatrix"),ht.setOptional(U,G,"bindMatrixInverse");let mt=G.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ht.setValue(U,"boneTexture",mt.boneTexture,Y))}G.isBatchedMesh&&(ht.setOptional(U,G,"batchingTexture"),ht.setValue(U,"batchingTexture",G._matricesTexture,Y),ht.setOptional(U,G,"batchingIdTexture"),ht.setValue(U,"batchingIdTexture",G._indirectTexture,Y),ht.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&ht.setValue(U,"batchingColorTexture",G._colorsTexture,Y));let An=q.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&D.update(G,q,Gt),(zn||be.receiveShadow!==G.receiveShadow)&&(be.receiveShadow=G.receiveShadow,ht.setValue(U,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&L.environment!==null&&(xt.envMapIntensity.value=L.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=_v()),zn){if(ht.setValue(U,"toneMappingExposure",C.toneMappingExposure),be.needsLights&&pa(xt,ei),ve&&H.fog===!0&&Ne.refreshFogUniforms(xt,ve),Ne.refreshMaterialUniforms(xt,H,ne,Q,b.state.transmissionRenderTarget[x.id]),be.needsLights&&be.lightProbeGrid){let mt=be.lightProbeGrid;xt.probesSH.value=mt.texture,xt.probesMin.value.copy(mt.boundingBox.min),xt.probesMax.value.copy(mt.boundingBox.max),xt.probesResolution.value.copy(mt.resolution)}Hs.upload(U,jn(be),xt,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Hs.upload(U,jn(be),xt,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ht.setValue(U,"center",G.center),ht.setValue(U,"modelViewMatrix",G.modelViewMatrix),ht.setValue(U,"normalMatrix",G.normalMatrix),ht.setValue(U,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let mt=H.uniformsGroups;for(let Cn=0,ti=mt.length;Cn<ti;Cn++){let er=mt[Cn];ie.update(er,Gt),ie.bind(er,Gt)}}return Gt}function pa(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.sunLights.needsUpdate=L,x.sunLightShadows.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function ss(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(x,L,q){let H=W.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(x.texture).__webglTexture=L,W.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){let q=W.get(x);q.__webglFramebuffer=L,q.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,q=0){re=x,K=L,$=q;let H=null,G=!1,ve=!1;if(x){let he=W.get(x);if(he.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,he.__webglFramebuffer),se.copy(x.viewport),Le.copy(x.scissor),De=x.scissorTest,g.viewport(se),g.scissor(Le),g.setScissorTest(De),Z=-1;return}else if(he.__webglFramebuffer===void 0)Y.setupRenderTarget(x);else if(he.__hasExternalTextures)Y.rebindTextures(x,W.get(x.texture).__webglTexture,W.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let qe=x.depthTexture;if(he.__boundDepthTexture!==qe){if(qe!==null&&W.has(qe)&&(x.width!==qe.image.width||x.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(x)}}let we=x.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);let Pe=W.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pe[L])?H=Pe[L][q]:H=Pe[L],G=!0):x.samples>0&&Y.useMultisampledRTT(x)===!1?H=W.get(x).__webglMultisampledFramebuffer:Array.isArray(Pe)?H=Pe[q]:H=Pe,se.copy(x.viewport),Le.copy(x.scissor),De=x.scissorTest}else se.copy(pe).multiplyScalar(ne).floor(),Le.copy(Ye).multiplyScalar(ne).floor(),De=Dt;if(q!==0&&(H=V),g.bindFramebuffer(U.FRAMEBUFFER,H)&&g.drawBuffers(x,H),g.viewport(se),g.scissor(Le),g.setScissorTest(De),G){let he=W.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,he.__webglTexture,q)}else if(ve){let he=L;for(let we=0;we<x.textures.length;we++){let Pe=W.get(x.textures[we]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+we,Pe.__webglTexture,q,he)}}else if(x!==null&&q!==0){let he=W.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,he.__webglTexture,q)}Z=-1};function ma(x){let L=W.get(x);return(L.__readFormat!==x.format||L.__readType!==x.type)&&(L.__readFormat=x.format,L.__readType=x.type,L.__formatReadable=w.textureFormatReadable(x.format),L.__typeReadable=w.textureTypeReadable(x.type)),L}this.readRenderTargetPixels=function(x,L,q,H,G,ve,Se,he=0){if(!(x&&x.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=W.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){g.bindFramebuffer(U.FRAMEBUFFER,we);try{let Pe=x.textures[he],qe=Pe.format,Je=Pe.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he);let Te=ma(Pe);if(Te.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-H&&q>=0&&q<=x.height-G&&U.readPixels(L,q,H,G,me.convert(qe),me.convert(Je),ve)}finally{let Pe=re!==null?W.get(re).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(x,L,q,H,G,ve,Se,he=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=W.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we)if(L>=0&&L<=x.width-H&&q>=0&&q<=x.height-G){g.bindFramebuffer(U.FRAMEBUFFER,we);let Pe=x.textures[he],qe=Pe.format,Je=Pe.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he);let Te=ma(Pe);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,rt),U.bufferData(U.PIXEL_PACK_BUFFER,ve.byteLength,U.STREAM_READ),U.readPixels(L,q,H,G,me.convert(qe),me.convert(Je),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ct=re!==null?W.get(re).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Ct);let _t=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await cd(U,_t,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,rt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ve),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(rt),U.deleteSync(_t),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,q=0){let H=Math.pow(2,-q),G=Math.floor(x.image.width*H),ve=Math.floor(x.image.height*H),Se=L!==null?L.x:0,he=L!==null?L.y:0;Y.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Se,he,G,ve),g.unbindTexture()},this.copyTextureToTexture=function(x,L,q=null,H=null,G=0,ve=0){let Se,he,we,Pe,qe,Je,Te,rt,Ct,_t=x.isCompressedTexture?x.mipmaps[ve]:x.image;if(q!==null)Se=q.max.x-q.min.x,he=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Pe=q.min.x,qe=q.min.y,Je=q.isBox3?q.min.z:0;else{let xt=Math.pow(2,-G);Se=Math.floor(_t.width*xt),he=Math.floor(_t.height*xt),x.isDataArrayTexture?we=_t.depth:x.isData3DTexture?we=Math.floor(_t.depth*xt):we=1,Pe=0,qe=0,Je=0}H!==null?(Te=H.x,rt=H.y,Ct=H.z):(Te=0,rt=0,Ct=0);let vt=me.convert(L.format),zt=me.convert(L.type),be;L.isData3DTexture?(Y.setTexture3D(L,0),be=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Y.setTexture2DArray(L,0),be=U.TEXTURE_2D_ARRAY):(Y.setTexture2D(L,0),be=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let Ut=g.getParameter(U.UNPACK_ROW_LENGTH),nt=g.getParameter(U.UNPACK_IMAGE_HEIGHT),Gt=g.getParameter(U.UNPACK_SKIP_PIXELS),Jt=g.getParameter(U.UNPACK_SKIP_ROWS),zn=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,_t.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Pe),g.pixelStorei(U.UNPACK_SKIP_ROWS,qe),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Je);let ei=x.isDataArrayTexture||x.isData3DTexture,ht=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){let xt=W.get(x),An=W.get(L),mt=W.get(xt.__renderTarget),Cn=W.get(An.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,mt.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let ti=0;ti<we;ti++)ei&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(x).__webglTexture,G,Je+ti),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(L).__webglTexture,ve,Ct+ti)),U.blitFramebuffer(Pe,qe,Se,he,Te,rt,Se,he,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||x.isRenderTargetTexture||W.has(x)){let xt=W.get(x),An=W.get(L);g.bindFramebuffer(U.READ_FRAMEBUFFER,N),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,X);for(let mt=0;mt<we;mt++)ei?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.__webglTexture,G,Je+mt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xt.__webglTexture,G),ht?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,An.__webglTexture,ve,Ct+mt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,An.__webglTexture,ve),G!==0?U.blitFramebuffer(Pe,qe,Se,he,Te,rt,Se,he,U.COLOR_BUFFER_BIT,U.NEAREST):ht?U.copyTexSubImage3D(be,ve,Te,rt,Ct+mt,Pe,qe,Se,he):U.copyTexSubImage2D(be,ve,Te,rt,Pe,qe,Se,he);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ht?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(be,ve,Te,rt,Ct,Se,he,we,vt,zt,_t.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(be,ve,Te,rt,Ct,Se,he,we,vt,_t.data):U.texSubImage3D(be,ve,Te,rt,Ct,Se,he,we,vt,zt,_t):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ve,Te,rt,Se,he,vt,zt,_t.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ve,Te,rt,_t.width,_t.height,vt,_t.data):U.texSubImage2D(U.TEXTURE_2D,ve,Te,rt,Se,he,vt,zt,_t);g.pixelStorei(U.UNPACK_ROW_LENGTH,Ut),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nt),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Gt),g.pixelStorei(U.UNPACK_SKIP_ROWS,Jt),g.pixelStorei(U.UNPACK_SKIP_IMAGES,zn),ve===0&&L.generateMipmaps&&U.generateMipmap(be),g.unbindTexture()},this.initRenderTarget=function(x){W.get(x).__webglFramebuffer===void 0&&Y.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Y.setTextureCube(x,0):x.isData3DTexture?Y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Y.setTexture2DArray(x,0):Y.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){K=0,$=0,re=null,g.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var Ws={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},xv=new wi(-1,1,1,-1,0,1),vh=class extends lt{constructor(){super(),this.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new We([0,2,0,0,2,0],2))}},yv=new vh,Li=class{constructor(e){this._mesh=new Ze(yv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Xs=class extends vn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ke?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ui.clone(e.uniforms),this.material=new Ke({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Li(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var sa=class extends vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Fl=class extends vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ol=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Me);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$t}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xs(Ws),this.copyPass.material.blending=En,this.timer=new Br}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}sa!==void 0&&(a instanceof sa?n=!0:a instanceof Fl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bl=class extends vn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new de}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Vd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var qs=class i extends vn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,a,{type:$t,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Ot(r,a,{type:$t,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Ot(r,a,{type:$t,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Vd;this.highPassUniforms=ui.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ke({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Me(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ui.clone(Ws.uniforms),this.blendMaterial=new Ke({uniforms:this.copyUniforms,vertexShader:Ws.vertexShader,fragmentShader:Ws.fragmentShader,premultipliedAlpha:!0,blending:ft,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new Mn,this._fsQuad=new Li(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ke({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Ke({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};qs.BlurDirectionX=new Me(1,0);qs.BlurDirectionY=new Me(0,1);var ra={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var zl=class extends vn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ui.clone(ra.uniforms),this.material=new Ls({name:ra.name,uniforms:this.uniforms,vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader}),this._fsQuad=new Li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Gr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var tn=[{id:"origin",no:"01",kicker:"PROLOGUE",cnKicker:"\u5E8F\u7AE0",short:"\u5FAE\u89C2\u5B87\u5B99",title:"\u7EC6\u80DE\uFF0C\u662F\u4E00\u4E2A\u5B87\u5B99",en:"THE CELL AS A MICROCOSM",body:"\u6B64\u523B\uFF0C\u4F60\u60AC\u505C\u5728\u4E00\u4E2A\u7EC6\u80DE\u7684\u8FB9\u754C\u4E4B\u5916\u3002\u5B83\u6CA1\u6709\u5927\u8111\uFF0C\u5374\u7EF4\u6301\u7740\u79E9\u5E8F\uFF1B\u6CA1\u6709\u56FE\u7EB8\uFF0C\u5374\u4E0D\u65AD\u91CD\u5EFA\u81EA\u5DF1\u3002\u63A5\u4E0B\u6765\u7684\u4E03\u5E55\uFF0C\u6211\u4EEC\u5C06\u7A7F\u8FC7\u5B83\u7684\u8D28\u819C\u3001\u9AA8\u67B6\u3001\u80FD\u91CF\u5DE5\u5382\u4E0E\u57FA\u56E0\u7EC4\u3002",facts:[{k:"\u4EBA\u4F53\u7EC6\u80DE",v:"\u7EA6 30 \u4E07\u4EBF"},{k:"\u5178\u578B\u76F4\u5F84",v:"10\u2013100 \xB5m"},{k:"\u9759\u606F\u819C\u7535\u4F4D",v:"\u221270 mV"}],readout:"WHOLE CELL / OPTICAL DARKFIELD",accent:"#7ff7e4",camera:{pos:[0,3,23.5],target:[0,.6,0],fov:42},duration:17e3,study:{textbook:{chapter:"\u7B2C\u4E00\u7AE0",title:"\u7EEA\u8BBA",pages:"1\u201317",sections:["\u7B2C\u4E00\u8282 \u7EC6\u80DE\u5B66\u4E0E\u7EC6\u80DE\u751F\u7269\u5B66","\u7B2C\u4E8C\u8282 \u7EC6\u80DE\u7684\u540C\u4E00\u6027\u4E0E\u591A\u6837\u6027"]},related:["\u7B2C\u4E8C\u7AE0 \u7EC6\u80DE\u751F\u7269\u5B66\u7814\u7A76\u65B9\u6CD5 \xB7 pp.18\u201339"],objectives:["\u7528\u7EC6\u80DE\u5B66\u8BF4\u89E3\u91CA\u201C\u7EC6\u80DE\u662F\u751F\u547D\u6D3B\u52A8\u7684\u57FA\u672C\u5355\u4F4D\u201D\u3002","\u4ECE\u6838\u819C\u3001\u7EC6\u80DE\u5668\u548C\u6838\u7CD6\u4F53\u7B49\u7ED3\u6784\u533A\u5206\u539F\u6838\u7EC6\u80DE\u4E0E\u771F\u6838\u7EC6\u80DE\u3002","\u4E86\u89E3\u7EC6\u80DE\u751F\u7269\u5B66\u4ECE\u5F62\u6001\u63CF\u8FF0\u8D70\u5411\u5206\u5B50\u673A\u5236\u7684\u7814\u7A76\u8DEF\u5F84\u3002"],visuals:[{color:"#7ff7e4",label:"\u534A\u900F\u660E\u5916\u58F3 = \u7EC6\u80DE\u8D28\u819C"},{color:"#c58cff",label:"\u4E2D\u592E\u7D2B\u6838 = \u7EC6\u80DE\u6838"},{color:"#9df5c1",label:"\u9752\u7EFF\u4E1D\u7F51 = \u7EC6\u80DE\u9AA8\u67B6"},{color:"#ffc177",label:"\u91D1\u8272\u80F6\u56CA = \u7EBF\u7C92\u4F53"}],concepts:[{term:"\u7EC6\u80DE\u5B66\u8BF4",en:"cell theory",def:"1838\u20141839 \u5E74\u7531\u65BD\u83B1\u767B\u548C\u65BD\u4E07\u786E\u7ACB\uFF1A\u4E00\u5207\u751F\u7269\u90FD\u7531\u7EC6\u80DE\u6784\u6210\uFF0C\u7EC6\u80DE\u662F\u7ED3\u6784\u548C\u529F\u80FD\u7684\u57FA\u672C\u5355\u4F4D\uFF1B\u540E\u6765\u9B4F\u5C14\u8096\u8865\u5145\u201C\u7EC6\u80DE\u6765\u81EA\u7EC6\u80DE\u201D\u3002"},{term:"\u539F\u6838\u7EC6\u80DE",en:"prokaryotic cell",def:"\u6CA1\u6709\u6838\u819C\u5305\u56F4\u7684\u7EC6\u80DE\u6838\uFF0CDNA \u96C6\u4E2D\u5728\u62DF\u6838\u533A\uFF1B\u7F3A\u5C11\u819C\u6027\u7EC6\u80DE\u5668\uFF0C\u6838\u7CD6\u4F53\u4E3A 70S\uFF0C\u4EE3\u8868\u4E3A\u7EC6\u83CC\u548C\u53E4\u83CC\u3002"},{term:"\u771F\u6838\u7EC6\u80DE",en:"eukaryotic cell",def:"\u5177\u6709\u6838\u819C\u3001\u771F\u6B63\u7684\u7EC6\u80DE\u6838\u548C\u591A\u79CD\u819C\u6027\u7EC6\u80DE\u5668\uFF1B\u6709\u7EC6\u80DE\u9AA8\u67B6\uFF0C\u6838\u7CD6\u4F53\u4E3A 80S\u3002"},{term:"\u7EC6\u80DE\u751F\u7269\u5B66",en:"cell biology",def:"\u5E94\u7528\u73B0\u4EE3\u7269\u7406\u3001\u5316\u5B66\u548C\u5206\u5B50\u751F\u7269\u5B66\u65B9\u6CD5\uFF0C\u5728\u7EC6\u80DE\u6C34\u5E73\u7814\u7A76\u751F\u547D\u6D3B\u52A8\u7684\u5B66\u79D1\uFF1B\u6838\u5FC3\u95EE\u9898\u662F\u7ED3\u6784\u5982\u4F55\u6267\u884C\u529F\u80FD\u3002"},{term:"\u6A21\u5F0F\u751F\u7269",en:"model organism",def:"\u56E0\u7E41\u6B96\u5FEB\u3001\u9057\u4F20\u64CD\u4F5C\u6210\u719F\u800C\u7528\u4E8E\u63ED\u793A\u4FDD\u5B88\u673A\u5236\u7684\u6750\u6599\uFF0C\u5982\u5927\u80A0\u6746\u83CC\u3001\u9175\u6BCD\u3001\u7EBF\u866B\u3001\u679C\u8747\u3001\u62DF\u5357\u82A5\u548C\u5C0F\u9F20\u3002"}],mechanism:["\u7EC6\u80DE\u5B66\u8BF4\u3001\u8FDB\u5316\u8BBA\u548C\u9057\u4F20\u5B66\u5171\u540C\u6784\u6210\u73B0\u4EE3\u751F\u7269\u5B66\u7684\u4E09\u5927\u57FA\u77F3\uFF1B\u7EC6\u80DE\u5B66\u8BF4\u628A\u5B8F\u89C2\u751F\u547D\u73B0\u8C61\u843D\u5230\u53EF\u89C2\u5BDF\u7684\u5355\u4F4D\u4E0A\u3002","\u539F\u6838\u4E0E\u771F\u6838\u7684\u5206\u754C\u4E0D\u53EA\u662F\u201C\u6709\u65E0\u7EC6\u80DE\u6838\u201D\uFF0C\u8FD8\u5305\u62EC\u5185\u819C\u7CFB\u7EDF\u3001\u7EC6\u80DE\u9AA8\u67B6\u548C\u6838\u7CD6\u4F53\u7C7B\u578B\u7684\u6574\u4F53\u5DEE\u5F02\u3002","\u73B0\u4EE3\u7EC6\u80DE\u751F\u7269\u5B66\u5E38\u6309\u201C\u89C2\u5BDF\u2014\u5206\u79BB\u2014\u5E72\u9884\u2014\u91CD\u5EFA\u201D\u63A8\u8FDB\uFF1A\u663E\u5FAE\u6210\u50CF\u3001\u4E9A\u7EC6\u80DE\u5206\u79BB\u3001\u6D3B\u7EC6\u80DE\u8367\u5149\u548C\u9057\u4F20\u64CD\u4F5C\u4E92\u76F8\u9A8C\u8BC1\u3002"],pitfalls:["\u75C5\u6BD2\u6CA1\u6709\u7EC6\u80DE\u7ED3\u6784\uFF0C\u4E0D\u80FD\u72EC\u7ACB\u5B8C\u6210\u65B0\u9648\u4EE3\u8C22\uFF0C\u4E0D\u5C5E\u4E8E\u7EC6\u80DE\uFF1B\u5B83\u662F\u975E\u7EC6\u80DE\u5F62\u6001\u7684\u751F\u547D\u4F53\u3002","\u201C\u539F\u6838\u7EC6\u80DE\u6CA1\u6709\u7EC6\u80DE\u5668\u201D\u4E0D\u51C6\u786E\uFF1A\u5B83\u6709\u6838\u7CD6\u4F53\uFF0C\u90E8\u5206\u8FD8\u6709\u5185\u819C\u8936\u76B1\uFF0C\u53EA\u662F\u6CA1\u6709\u7531\u819C\u5305\u56F4\u7684\u7EC6\u80DE\u6838\u548C\u5178\u578B\u819C\u6027\u7EC6\u80DE\u5668\u3002"],quiz:[{q:"\u7EC6\u80DE\u5B66\u8BF4\u7684\u6838\u5FC3\u5185\u5BB9\u662F\u4EC0\u4E48\uFF1F\u5B83\u4E3A\u4EC0\u4E48\u662F\u751F\u7269\u5B66\u7684\u57FA\u7840\u7406\u8BBA\uFF1F",a:"\u6240\u6709\u751F\u7269\u7531\u7EC6\u80DE\u6784\u6210\uFF1B\u7EC6\u80DE\u662F\u7ED3\u6784\u548C\u529F\u80FD\u7684\u57FA\u672C\u5355\u4F4D\uFF1B\u7EC6\u80DE\u6765\u81EA\u5DF2\u5B58\u5728\u7684\u7EC6\u80DE\u3002\u5B83\u628A\u751F\u7269\u754C\u7684\u7EDF\u4E00\u6027\u5EFA\u7ACB\u5728\u53EF\u89C2\u5BDF\u7684\u5355\u4F4D\u4E0A\uFF0C\u5E76\u4E0E\u8FDB\u5316\u8BBA\u3001\u9057\u4F20\u5B66\u5171\u540C\u6784\u6210\u73B0\u4EE3\u751F\u7269\u5B66\u7684\u57FA\u7840\u3002"},{q:"\u5217\u51FA\u81F3\u5C11\u4E09\u9879\u539F\u6838\u7EC6\u80DE\u4E0E\u771F\u6838\u7EC6\u80DE\u7684\u7ED3\u6784\u5DEE\u5F02\u3002",a:"\u539F\u6838\u7EC6\u80DE\u65E0\u6838\u819C\u548C\u771F\u6B63\u7684\u7EC6\u80DE\u6838\uFF0CDNA \u4F4D\u4E8E\u62DF\u6838\uFF1B\u65E0\u5178\u578B\u819C\u6027\u7EC6\u80DE\u5668\uFF1B\u6838\u7CD6\u4F53\u4E3A 70S\u3002\u771F\u6838\u7EC6\u80DE\u6709\u6838\u819C\u3001\u7EC6\u80DE\u6838\u548C\u5185\u819C\u7CFB\u7EDF\uFF0C\u6838\u7CD6\u4F53\u4E3A 80S\uFF0C\u5E76\u6709\u7EC6\u80DE\u9AA8\u67B6\u3002"}]}},{id:"membrane",no:"02",kicker:"BOUNDARY",cnKicker:"\u8FB9\u754C",short:"\u6D41\u52A8\u7684\u8FB9\u754C",title:"\u8FB9\u754C\uFF0C\u4ECE\u672A\u9759\u6B62",en:"A LIQUID LANGUAGE OF SELF",body:"\u8FB9\u754C\u4E0D\u662F\u5899\uFF0C\u800C\u662F\u4E00\u5C42\u6301\u7EED\u91CD\u5199\u7684\u754C\u9762\u3002\u7EC6\u80DE\u8D28\u819C\u539A\u7EA6 7.5 nm\uFF0C\u5176\u4E2D\u758F\u6C34\u6838\u5FC3\u53EA\u6709\u7EA6 3.5 nm\uFF0C\u5374\u628A\u201C\u81EA\u6211\u201D\u4E0E\u201C\u4E16\u754C\u201D\u5206\u5F00\uFF1B\u819C\u86CB\u767D\u5728\u5176\u4E2D\u6F02\u79FB\u3001\u805A\u96C6\u3001\u5F00\u5408\uFF0C\u628A\u6BCF\u4E00\u6B21\u4EA4\u6362\u7FFB\u8BD1\u6210\u751F\u547D\u7684\u8BED\u8A00\u3002",facts:[{k:"\u7EC6\u80DE\u8D28\u819C\u539A\u5EA6",v:"\u2248 7.5 nm"},{k:"\u758F\u6C34\u6838\u5FC3",v:"\u2248 3.5 nm"},{k:"\u80C6\u56FA\u9187",v:"\u53CC\u5411\u8C03\u8282\u6D41\u52A8\u6027"}],readout:"SURFACE SECTION / 7.5 nm",accent:"#67e8f9",camera:{pos:[.6,2.9,12.6],target:[0,2.3,7.2],fov:44},duration:19e3,study:{textbook:{chapter:"\u7B2C\u4E09\u7AE0",title:"\u7EC6\u80DE\u8D28\u819C",pages:"40\u201355",sections:["\u7B2C\u4E00\u8282 \u7EC6\u80DE\u8D28\u819C\u7684\u7ED3\u6784\u6A21\u578B\u4E0E\u57FA\u672C\u6210\u5206","\u7B2C\u4E8C\u8282 \u7EC6\u80DE\u8D28\u819C\u7684\u57FA\u672C\u7279\u5F81\u4E0E\u529F\u80FD"]},related:["\u7B2C\u56DB\u7AE0 \u7269\u8D28\u7684\u8DE8\u819C\u8FD0\u8F93 \xB7 pp.56\u201373","\u7B2C\u5341\u4E00\u7AE0 \u7EC6\u80DE\u4FE1\u53F7\u8F6C\u5BFC \xB7 pp.224\u2013260"],objectives:["\u8BF4\u51FA\u6D41\u52A8\u9576\u5D4C\u6A21\u578B\u7684\u57FA\u672C\u5185\u5BB9\uFF0C\u5E76\u89E3\u91CA\u652F\u6301\u5B83\u7684\u5B9E\u9A8C\u8BC1\u636E\u3002","\u6BD4\u8F83\u819C\u8102\u3001\u819C\u86CB\u767D\u548C\u7CD6\u7C7B\u5728\u8D28\u819C\u4E2D\u7684\u4F4D\u7F6E\u4E0E\u529F\u80FD\u3002","\u7528\u6D41\u52A8\u6027\u3001\u4E0D\u5BF9\u79F0\u6027\u548C\u9009\u62E9\u900F\u8FC7\u6027\u89E3\u91CA\u8D28\u819C\u7684\u751F\u7406\u7279\u5F81\u3002","\u533A\u5206\u7B80\u5355\u6269\u6563\u3001\u534F\u52A9\u6269\u6563\u3001\u4E3B\u52A8\u8FD0\u8F93\u548C\u819C\u6CE1\u8FD0\u8F93\u3002"],visuals:[{color:"#67e8f9",label:"\u9752\u8272\u7EC6\u6746 = \u78F7\u8102\u758F\u6C34\u5C3E\u90E8"},{color:"#b7fff4",label:"\u4EAE\u70B9 = \u78F7\u8102\u6781\u6027\u5934\u90E8"},{color:"#ffcf87",label:"\u80F6\u56CA/\u73AF = \u819C\u86CB\u767D\u4E0E\u901A\u9053"},{color:"#ffb36b",label:"\u5916\u56F4\u6BDB\u523A = \u7CD6\u843C"}],concepts:[{term:"\u6D41\u52A8\u9576\u5D4C\u6A21\u578B",en:"fluid mosaic model",def:"1972 \u5E74 Singer \u4E0E Nicolson \u63D0\u51FA\uFF1A\u819C\u8102\u5F62\u6210\u6D41\u52A8\u7684\u53CC\u5206\u5B50\u5C42\uFF0C\u819C\u86CB\u767D\u4EE5\u9576\u5D4C\u6216\u8D2F\u7A7F\u7684\u65B9\u5F0F\u5206\u5E03\u5176\u4E2D\uFF0C\u819C\u662F\u4E0D\u5BF9\u79F0\u3001\u53EF\u6D41\u52A8\u7684\u4E8C\u7EF4\u6DB2\u4F53\u3002"},{term:"\u819C\u8102",en:"membrane lipid",def:"\u4EE5\u78F7\u8102\u4E3A\u4E3B\uFF0C\u8FD8\u5305\u62EC\u7CD6\u8102\u548C\u80C6\u56FA\u9187\uFF1B\u4EB2\u6C34\u5934\u90E8\u671D\u5411\u6C34\u76F8\uFF0C\u758F\u6C34\u5C3E\u90E8\u5411\u5185\uFF0C\u5F62\u6210\u53CC\u5206\u5B50\u5C42\u3002"},{term:"\u819C\u86CB\u767D",en:"membrane protein",def:"\u6574\u5408\u819C\u86CB\u767D\u8DE8\u8D8A\u6216\u5D4C\u5165\u8102\u53CC\u5C42\uFF0C\u5916\u5468\u819C\u86CB\u767D\u9644\u7740\u5728\u819C\u8868\u9762\uFF1B\u5B83\u4EEC\u627F\u62C5\u8FD0\u8F93\u3001\u53D7\u4F53\u3001\u9176\u548C\u7ED3\u6784\u8FDE\u63A5\u7B49\u529F\u80FD\u3002"},{term:"\u819C\u7684\u4E0D\u5BF9\u79F0\u6027",en:"membrane asymmetry",def:"\u8102\u8D28\u3001\u86CB\u767D\u8D28\u548C\u7CD6\u94FE\u5728\u819C\u4E24\u4FA7\u7684\u5206\u5E03\u4E0D\u540C\uFF1B\u7CD6\u94FE\u901A\u5E38\u4F4D\u4E8E\u7EC6\u80DE\u5916\u4FA7\uFF0C\u5F62\u6210\u7CD6\u843C\u3002"},{term:"\u819C\u7684\u6D41\u52A8\u6027",en:"membrane fluidity",def:"\u819C\u8102\u548C\u819C\u86CB\u767D\u5728\u4E8C\u7EF4\u5E73\u9762\u5185\u7684\u4FA7\u5411\u8FD0\u52A8\u3002\u8102\u80AA\u9178\u4E0D\u9971\u548C\u5EA6\u3001\u94FE\u957F\u3001\u6E29\u5EA6\u548C\u80C6\u56FA\u9187\u90FD\u4F1A\u5F71\u54CD\u6D41\u52A8\u6027\u3002"},{term:"\u819C\u8F6C\u8FD0\u86CB\u767D",en:"membrane transport protein",def:"\u5305\u62EC\u901A\u9053\u86CB\u767D\u548C\u8F7D\u4F53\u86CB\u767D\uFF1B\u901A\u9053\u5F62\u6210\u4EB2\u6C34\u5B54\u9053\uFF0C\u8F7D\u4F53\u901A\u8FC7\u6784\u8C61\u53D8\u5316\u8F6C\u8FD0\u7269\u8D28\uFF0C\u6CF5\u5219\u6D88\u8017 ATP \u9006\u68AF\u5EA6\u8FD0\u8F93\u3002"},{term:"\u819C\u7535\u4F4D",en:"membrane potential",def:"\u819C\u4E24\u4FA7\u7535\u8377\u5206\u5E03\u4E0D\u5747\u5F62\u6210\u7684\u7535\u4F4D\u5DEE\uFF1B\u7531\u79BB\u5B50\u68AF\u5EA6\u548C\u819C\u5BF9\u5404\u79BB\u5B50\u7684\u76F8\u5BF9\u901A\u900F\u6027\u5171\u540C\u51B3\u5B9A\uFF0C\u9759\u606F\u65F6\u5185\u8D1F\u5916\u6B63\u3002"}],mechanism:["1925 \u5E74 Gorter \u4E0E Grendel \u53D1\u73B0\u7EA2\u7EC6\u80DE\u819C\u8102\u94FA\u5C55\u9762\u79EF\u4E3A\u7EC6\u80DE\u8868\u9762\u79EF\u7684 2 \u500D\uFF0C\u63D0\u793A\u8102\u8D28\u4EE5\u53CC\u5206\u5B50\u5C42\u6392\u5217\uFF1B\u6B64\u540E\u5355\u4F4D\u819C\u6A21\u578B\u3001\u51B7\u51BB\u8680\u523B\u548C\u7EC6\u80DE\u878D\u5408\u5B9E\u9A8C\u9010\u6B65\u652F\u6301\u6D41\u52A8\u9576\u5D4C\u6A21\u578B\u3002","\u819C\u86CB\u767D\u7684\u6D41\u52A8\u6027\u53EF\u7528\u7EC6\u80DE\u878D\u5408\u5B9E\u9A8C\u8BC1\u660E\uFF1A\u7528\u4E0D\u540C\u8367\u5149\u6297\u4F53\u6807\u8BB0\u4E24\u79CD\u7EC6\u80DE\uFF0C\u878D\u5408\u540E 40 \u5206\u949F\u8367\u5149\u5728\u819C\u4E0A\u5747\u5300\u5206\u5E03\u3002\u7EC6\u80DE\u9AA8\u67B6\u548C\u819C\u9AA8\u67B6\u4F1A\u628A\u90E8\u5206\u819C\u86CB\u767D\u951A\u5B9A\u5728\u7279\u5B9A\u533A\u57DF\u3002","\u8DE8\u819C\u8FD0\u8F93\u5206\u4E09\u6761\u8DEF\u7EBF\uFF1A\u88AB\u52A8\u8FD0\u8F93\uFF08\u7B80\u5355\u6269\u6563\u3001\u534F\u52A9\u6269\u6563\uFF09\u987A\u7535\u5316\u5B66\u68AF\u5EA6\uFF1B\u4E3B\u52A8\u8FD0\u8F93\uFF08\u5982 Na\u207A/K\u207A-ATP \u9176\uFF09\u6D88\u8017 ATP \u9006\u68AF\u5EA6\uFF1B\u80DE\u541E\u4E0E\u80DE\u5410\u5B8C\u6210\u5927\u5206\u5B50\u548C\u9897\u7C92\u7684\u819C\u6CE1\u8FD0\u8F93\u3002","Na\u207A/K\u207A-ATP \u9176\u6BCF\u6C34\u89E3 1 \u5206\u5B50 ATP\uFF0C\u628A 3 \u4E2A Na\u207A \u6CF5\u51FA\u30012 \u4E2A K\u207A \u6CF5\u5165\uFF0C\u7EF4\u6301\u7EC6\u80DE\u5185\u9AD8 K\u207A\u3001\u7EC6\u80DE\u5916\u9AD8 Na\u207A\uFF0C\u5E76\u4E3A\u819C\u7535\u4F4D\u548C\u6B21\u7EA7\u4E3B\u52A8\u8FD0\u8F93\u63D0\u4F9B\u80FD\u91CF\u3002"],pitfalls:["\u8D28\u819C\u539A\u7EA6 7.5 nm\uFF0C\u4E0D\u662F 5 nm\uFF1B\u5176\u4E2D\u758F\u6C34\u6838\u5FC3\u7EA6 3.5 nm\uFF0C\u4E24\u4FA7\u7684\u6781\u6027\u5934\u90E8\u548C\u86CB\u767D\u5C42\u5171\u540C\u6784\u6210\u5B8C\u6574\u819C\u539A\u3002","\u901A\u9053\u86CB\u767D\u4E0D\u6D88\u8017 ATP\uFF0C\u8F7D\u4F53\u86CB\u767D\u65E2\u53EF\u80FD\u534F\u52A9\u6269\u6563\u4E5F\u53EF\u80FD\u4E3B\u52A8\u8FD0\u8F93\uFF1B\u5224\u65AD\u8FD0\u8F93\u65B9\u5F0F\u8981\u770B\u662F\u5426\u9006\u7535\u5316\u5B66\u68AF\u5EA6\u3001\u662F\u5426\u9700\u8981\u80FD\u91CF\u3002","\u819C\u86CB\u767D\u5E76\u975E\u90FD\u80FD\u81EA\u7531\u6269\u6563\uFF1A\u8BB8\u591A\u86CB\u767D\u53D7\u819C\u9AA8\u67B6\u3001\u7EC6\u80DE\u8FDE\u63A5\u6216\u8102\u7B4F\u9650\u5236\uFF0C\u8FD0\u52A8\u8303\u56F4\u660E\u663E\u5C0F\u4E8E\u4EBA\u5DE5\u8102\u53CC\u5C42\u3002"],quiz:[{q:"\u7EA2\u7EC6\u80DE\u819C\u8102\u94FA\u5C55\u9762\u79EF\u662F\u5B8C\u6574\u7EA2\u7EC6\u80DE\u8868\u9762\u79EF\u7684 2 \u500D\uFF0C\u8FD9\u4E00\u7ED3\u679C\u8BF4\u660E\u4E86\u4EC0\u4E48\uFF1F",a:"\u8BF4\u660E\u819C\u8102\u5728\u5929\u7136\u819C\u4E2D\u4EE5\u53CC\u5206\u5B50\u5C42\u5F62\u5F0F\u6392\u5217\uFF1A\u6BCF\u5C42\u8102\u8D28\u94FA\u5C55\u5F00\u6765\u7EA6\u4E3A\u539F\u7EC6\u80DE\u8868\u9762\u79EF\uFF0C\u4E24\u5C42\u76F8\u52A0\u5373 2 \u500D\u3002"},{q:"\u7528\u7EC6\u80DE\u878D\u5408\u5B9E\u9A8C\u5982\u4F55\u8BC1\u660E\u819C\u86CB\u767D\u5177\u6709\u6D41\u52A8\u6027\uFF1F",a:"\u7528\u4E0D\u540C\u989C\u8272\u8367\u5149\u6297\u4F53\u5206\u522B\u6807\u8BB0\u4E24\u79CD\u7EC6\u80DE\u7684\u819C\u86CB\u767D\uFF0C\u8BF1\u5BFC\u7EC6\u80DE\u878D\u5408\uFF1B\u77ED\u65F6\u95F4\u5185\u4E24\u79CD\u8367\u5149\u5728\u878D\u5408\u7EC6\u80DE\u8868\u9762\u6DF7\u5408\u5E76\u5747\u5300\u5206\u5E03\uFF0C\u8BF4\u660E\u819C\u86CB\u767D\u80FD\u5728\u819C\u5E73\u9762\u5185\u81EA\u7531\u6269\u6563\u3002"},{q:"Na\u207A/K\u207A-ATP \u9176\u7684\u5DE5\u4F5C\u65B9\u5F0F\u548C\u751F\u7406\u610F\u4E49\u662F\u4EC0\u4E48\uFF1F",a:"\u6BCF\u6C34\u89E3 1 \u4E2A ATP\uFF0C\u6CF5\u51FA 3 \u4E2A Na\u207A\u3001\u6CF5\u5165 2 \u4E2A K\u207A\uFF0C\u5EFA\u7ACB\u5E76\u7EF4\u6301\u7EC6\u80DE\u5185\u5916 Na\u207A\u3001K\u207A \u6D53\u5EA6\u5DEE\uFF0C\u7EF4\u6301\u819C\u7535\u4F4D\uFF0C\u5E76\u4E3A\u8461\u8404\u7CD6\u3001\u6C28\u57FA\u9178\u7B49\u6B21\u7EA7\u4E3B\u52A8\u8FD0\u8F93\u63D0\u4F9B\u9A71\u52A8\u529B\u3002"}]}},{id:"cytoskeleton",no:"03",kicker:"TENSEGRITY",cnKicker:"\u5F20\u529B",short:"\u7EC6\u80DE\u9AA8\u67B6",title:"\u6CA1\u6709\u9AA8\u9ABC\uFF0C\u5374\u6709\u5F20\u529B",en:"A CONTINUOUSLY REWRITTEN SCAFFOLD",body:"\u7EC6\u80DE\u6CA1\u6709\u9AA8\u9ABC\uFF0C\u5374\u62E5\u6709\u5F20\u529B\u3002\u5FAE\u4E1D\u3001\u5FAE\u7BA1\u4E0E\u4E2D\u95F4\u4E1D\u7EC4\u6210\u4E00\u5F20\u4E0D\u65AD\u91CD\u5851\u7684\u7F51\uFF1B\u5206\u5B50\u9A6C\u8FBE\u6CBF\u8F68\u9053\u884C\u8D70\uFF0C\u628A\u7269\u8D28\u3001\u4FE1\u53F7\u4E0E\u529B\uFF0C\u4E00\u8D77\u642C\u8FD0\u5230\u9700\u8981\u7684\u5730\u65B9\u3002",facts:[{k:"\u5FAE\u4E1D",v:"\u2248 7 nm"},{k:"\u5FAE\u7BA1\u5916\u5F84",v:"\u2248 24 nm"},{k:"\u4E2D\u95F4\u4E1D",v:"\u2248 10 nm"}],readout:"CYTOSOL / FIBER TRACT",accent:"#9df5c1",camera:{pos:[3,1.2,5.7],target:[.3,.6,.4],fov:50},duration:18e3,study:{textbook:{chapter:"\u7B2C\u516B\u7AE0",title:"\u7EC6\u80DE\u9AA8\u67B6",pages:"144\u2013176",sections:["\u7B2C\u4E00\u8282 \u5FAE\u4E1D\u4E0E\u7EC6\u80DE\u8FD0\u52A8","\u7B2C\u4E8C\u8282 \u5FAE\u7BA1\u53CA\u5176\u529F\u80FD","\u7B2C\u4E09\u8282 \u4E2D\u95F4\u4E1D"]},related:["\u7B2C\u5341\u4E8C\u7AE0 \u7EC6\u80DE\u5468\u671F\u4E0E\u7EC6\u80DE\u5206\u88C2 \xB7 pp.261\u2013285\uFF08\u7EBA\u9524\u4F53\u4E0E\u67D3\u8272\u4F53\u8FD0\u52A8\uFF09"],objectives:["\u6BD4\u8F83\u5FAE\u4E1D\u3001\u5FAE\u7BA1\u548C\u4E2D\u95F4\u4E1D\u7684\u7EC4\u6210\u3001\u76F4\u5F84\u3001\u6781\u6027\u4E0E\u7EC4\u88C5\u65B9\u5F0F\u3002","\u89E3\u91CA\u8E0F\u8F66\u884C\u4E3A\u3001\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027\u548C\u5206\u5B50\u9A6C\u8FBE\u7684\u65B9\u5411\u6027\u3002","\u628A\u7EC6\u80DE\u9AA8\u67B6\u4E0E\u7EC6\u80DE\u5F62\u6001\u3001\u8FD0\u52A8\u3001\u7269\u8D28\u8FD0\u8F93\u548C\u5206\u88C2\u8054\u7CFB\u8D77\u6765\u3002"],visuals:[{color:"#9df5c1",label:"\u9752\u7EFF\u7EC6\u7EBF = \u5FAE\u4E1D\uFF08\u808C\u52A8\u86CB\u767D\u4E1D\uFF09"},{color:"#67e8f9",label:"\u4EAE\u9752\u7EC6\u7BA1 = \u5FAE\u7BA1"},{color:"#b7a3ff",label:"\u7D2B\u8272\u7C97\u7F06 = \u4E2D\u95F4\u4E1D"},{color:"#f2ffd0",label:"\u79FB\u52A8\u5149\u70B9 = \u5206\u5B50\u9A6C\u8FBE"}],concepts:[{term:"\u5FAE\u4E1D",en:"microfilament / actin filament",def:"\u7531\u808C\u52A8\u86CB\u767D\u4E9A\u57FA\u7EC4\u6210\u7684\u76F4\u5F84\u7EA6 7 nm \u7684\u87BA\u65CB\u7EA4\u7EF4\uFF1B\u6709\u6781\u6027\uFF0C\u53C2\u4E0E\u7EC6\u80DE\u5F62\u6001\u3001\u8FD0\u52A8\u3001\u6536\u7F29\u73AF\u548C\u5FAE\u7ED2\u6BDB\u3002"},{term:"\u5FAE\u7BA1",en:"microtubule",def:"\u7531 \u03B1/\u03B2 \u5FAE\u7BA1\u86CB\u767D\u4E8C\u805A\u4F53\u7EC4\u6210\u7684\u76F4\u5F84\u7EA6 24 nm \u7684\u4E2D\u7A7A\u7BA1\uFF1B\u6709\u6781\u6027\uFF0C\u53C2\u4E0E\u7269\u8D28\u8FD0\u8F93\u3001\u7EA4\u6BDB\u8FD0\u52A8\u548C\u7EBA\u9524\u4F53\u3002"},{term:"\u4E2D\u95F4\u4E1D",en:"intermediate filament",def:"\u76F4\u5F84\u7EA6 10 nm \u7684\u7EF3\u7D22\u72B6\u7EA4\u7EF4\uFF0C\u7531\u89D2\u86CB\u767D\u3001\u6CE2\u5F62\u86CB\u767D\u3001\u5C42\u7C98\u8FDE\u86CB\u767D\u7B49\u7EC4\u6210\uFF1B\u65E0\u6781\u6027\u3001\u6297\u62C9\u529B\uFF0C\u4E3B\u8981\u627F\u62C5\u673A\u68B0\u652F\u6491\u3002"},{term:"\u8E0F\u8F66\u884C\u4E3A",en:"treadmilling",def:"\u808C\u52A8\u86CB\u767D\u5728\u5FAE\u4E1D\u6B63\u6781\u805A\u5408\u3001\u5728\u8D1F\u6781\u89E3\u805A\uFF0C\u4F7F\u7EA4\u7EF4\u957F\u5EA6\u57FA\u672C\u4E0D\u53D8\u800C\u4E9A\u57FA\u6301\u7EED\u6D41\u52A8\u7684\u73B0\u8C61\u3002"},{term:"\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027",en:"dynamic instability",def:"\u5FAE\u7BA1\u6B63\u6781\u5728\u751F\u957F\u4E0E\u5FEB\u901F\u89E3\u805A\u4E4B\u95F4\u968F\u673A\u5207\u6362\uFF1BGTP \u5E3D\u7684\u5B58\u5728\u4FC3\u8FDB\u751F\u957F\uFF0CGTP \u6C34\u89E3\u540E\u5FAE\u7BA1\u5BB9\u6613 catastrophe\u3002"},{term:"\u5206\u5B50\u9A6C\u8FBE",en:"molecular motor",def:"\u628A ATP \u6C34\u89E3\u7684\u5316\u5B66\u80FD\u8F6C\u5316\u4E3A\u673A\u68B0\u8FD0\u52A8\u7684\u86CB\u767D\uFF1B\u808C\u7403\u86CB\u767D\u6CBF\u5FAE\u4E1D\u8FD0\u52A8\uFF0C\u9A71\u52A8\u86CB\u767D\u5411\u5FAE\u7BA1\u6B63\u6781\u3001\u52A8\u529B\u86CB\u767D\u5411\u8D1F\u6781\u8FD0\u52A8\u3002"},{term:"\u4E2D\u5FC3\u4F53",en:"centrosome",def:"\u7531\u4E00\u5BF9\u4E2D\u5FC3\u7C92\u548C\u5468\u56F4\u57FA\u8D28\u7EC4\u6210\uFF0C\u662F\u52A8\u7269\u7EC6\u80DE\u7684\u5FAE\u7BA1\u7EC4\u7EC7\u4E2D\u5FC3\uFF08MTOC\uFF09\uFF1B\u03B3-\u5FAE\u7BA1\u86CB\u767D\u53C2\u4E0E\u5FAE\u7BA1\u6210\u6838\u3002"}],mechanism:["\u5FAE\u4E1D\u7EC4\u88C5\u6709\u6781\u6027\uFF1AATP-\u808C\u52A8\u86CB\u767D\u4E3B\u8981\u5728\u6B63\u6781\u52A0\u5165\uFF0C\u8D1F\u6781\u89E3\u805A\uFF1B\u8E0F\u8F66\u884C\u4E3A\u4F7F\u5FAE\u4E1D\u80FD\u5728\u4FDD\u6301\u957F\u5EA6\u7684\u540C\u65F6\u5FEB\u901F\u66F4\u65B0\u3002\u808C\u7403\u86CB\u767D II \u4E0E\u5FAE\u4E1D\u5F62\u6210\u6536\u7F29\u7CFB\u7EDF\uFF0C\u53C2\u4E0E\u5E94\u529B\u7EA4\u7EF4\u548C\u80DE\u8D28\u5206\u88C2\u3002","\u5FAE\u7BA1\u7531 13 \u6761\u539F\u7EA4\u7EF4\u56F4\u6210\u7BA1\u58C1\uFF1B\u4E2D\u5FC3\u4F53\u4E0A\u7684 \u03B3-\u5FAE\u7BA1\u86CB\u767D\u73AF\u590D\u5408\u7269\u542F\u52A8\u6210\u6838\u3002\u5FAE\u7BA1\u6B63\u6781\u5411\u5916\u5EF6\u4F38\uFF0C\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027\u4F7F\u5176\u80FD\u5FEB\u901F\u641C\u7D22\u7A7A\u95F4\u3002","\u5206\u5B50\u9A6C\u8FBE\u5177\u6709\u65B9\u5411\u6027\uFF1A\u5927\u591A\u6570\u9A71\u52A8\u86CB\u767D\u5411\u5FAE\u7BA1\u6B63\u6781\u79FB\u52A8\uFF0C\u52A8\u529B\u86CB\u767D\u5411\u8D1F\u6781\u79FB\u52A8\uFF1B\u808C\u7403\u86CB\u767D\u6CBF\u5FAE\u4E1D\u8FD0\u52A8\u3002\u7EBA\u9524\u4F53\u540E\u671F B \u4F9D\u8D56 kinesin-5 \u5728\u53CD\u5411\u5E73\u884C\u6781\u5FAE\u7BA1\u4E0A\u6ED1\u52A8\uFF0C\u628A\u4E24\u6781\u63A8\u5F00\u3002","\u4E2D\u95F4\u4E1D\u4E0D\u4F9D\u8D56\u9A6C\u8FBE\uFF0C\u4E5F\u6CA1\u6709\u660E\u663E\u6781\u6027\uFF1B\u5B83\u4EEC\u901A\u8FC7\u6A2A\u5411\u4EA4\u8054\u548C\u7EC6\u80DE\u8FDE\u63A5\u628A\u76F8\u90BB\u7EC6\u80DE\u3001\u7EC6\u80DE\u6838\u548C\u80DE\u5916\u57FA\u8D28\u8FDE\u6210\u673A\u68B0\u7F51\u7EDC\u3002"],pitfalls:["\u4E09\u7C7B\u9AA8\u67B6\u90FD\u6709\u6781\u6027\uFF1F\u9519\u8BEF\u3002\u5FAE\u4E1D\u548C\u5FAE\u7BA1\u6709\u6781\u6027\uFF0C\u4E2D\u95F4\u4E1D\u6CA1\u6709\u6781\u6027\uFF0C\u4E5F\u4E0D\u4F5C\u4E3A\u5206\u5B50\u9A6C\u8FBE\u7684\u8F68\u9053\u3002","\u5FAE\u4E1D\u6B63\u6781\u901A\u5E38\u9760\u8FD1\u7EC6\u80DE\u819C\uFF1B\u5FAE\u7BA1\u6B63\u6781\u901A\u5E38\u80CC\u79BB\u4E2D\u5FC3\u4F53\u3002\u5224\u65AD\u9A71\u52A8\u86CB\u767D/\u52A8\u529B\u86CB\u767D\u65B9\u5411\u65F6\u8981\u5148\u786E\u5B9A\u7EA4\u7EF4\u6781\u6027\u3002","\u7D2B\u6749\u9187\u7A33\u5B9A\u5FAE\u7BA1\u3001\u6291\u5236\u89E3\u805A\uFF0C\u4F7F\u7EC6\u80DE\u505C\u6EDE\u5728 M \u671F\uFF1B\u79CB\u6C34\u4ED9\u7D20\u5219\u6291\u5236\u5FAE\u7BA1\u805A\u5408\u3002\u4E24\u8005\u90FD\u4F1A\u5E72\u6270\u7EBA\u9524\u4F53\uFF0C\u4F46\u4E0D\u662F\u540C\u4E00\u673A\u5236\u3002"],quiz:[{q:"\u5FAE\u4E1D\u3001\u5FAE\u7BA1\u548C\u4E2D\u95F4\u4E1D\u5728\u76F4\u5F84\u3001\u6781\u6027\u548C\u4E3B\u8981\u529F\u80FD\u4E0A\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F",a:"\u5FAE\u4E1D\u7EA6 7 nm\u3001\u6709\u6781\u6027\uFF0C\u4E3B\u8981\u7531\u808C\u52A8\u86CB\u767D\u7EC4\u6210\uFF0C\u53C2\u4E0E\u8FD0\u52A8\u4E0E\u6536\u7F29\uFF1B\u5FAE\u7BA1\u7EA6 24 nm\u3001\u6709\u6781\u6027\uFF0C\u53C2\u4E0E\u8FD0\u8F93\u548C\u7EBA\u9524\u4F53\uFF1B\u4E2D\u95F4\u4E1D\u7EA6 10 nm\u3001\u65E0\u6781\u6027\uFF0C\u4E3B\u8981\u63D0\u4F9B\u673A\u68B0\u652F\u6491\u3002"},{q:"\u4E3A\u4EC0\u4E48\u8BF4\u5FAE\u7BA1\u5177\u6709\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027\uFF1F\u5B83\u5728\u6709\u4E1D\u5206\u88C2\u4E2D\u6709\u4EC0\u4E48\u610F\u4E49\uFF1F",a:"\u5FAE\u7BA1\u6B63\u6781\u53EF\u5728\u751F\u957F\u4E0E\u5FEB\u901F\u89E3\u805A\u4E4B\u95F4\u5207\u6362\uFF0C\u53D7 GTP \u5E3D\u8C03\u63A7\u3002\u8FD9\u79CD\u5FEB\u901F\u641C\u7D22\u4F7F\u7EBA\u9524\u4F53\u5FAE\u7BA1\u80FD\u6355\u6349\u52A8\u7C92\uFF0C\u5E76\u5728\u5206\u88C2\u4E0D\u540C\u9636\u6BB5\u8FC5\u901F\u91CD\u7EC4\u3002"},{q:"\u9A71\u52A8\u86CB\u767D\u548C\u52A8\u529B\u86CB\u767D\u5206\u522B\u5411\u5FAE\u7BA1\u7684\u54EA\u4E00\u7AEF\u79FB\u52A8\uFF1F",a:"\u5927\u591A\u6570\u9A71\u52A8\u86CB\u767D\u5411\u5FAE\u7BA1\u6B63\u6781\uFF08\u5916\u5468\u65B9\u5411\uFF09\u79FB\u52A8\uFF1B\u52A8\u529B\u86CB\u767D\u5411\u5FAE\u7BA1\u8D1F\u6781\uFF08\u4E2D\u5FC3\u4F53\u65B9\u5411\uFF09\u79FB\u52A8\u3002"}]}},{id:"mitochondria",no:"04",kicker:"CHEMIOSMOSIS",cnKicker:"\u80FD\u91CF",short:"\u80FD\u91CF\u68AF\u5EA6",title:"\u80FD\u91CF\uFF0C\u4EE5\u68AF\u5EA6\u7684\u5F62\u5F0F\u5B58\u5728",en:"THE PROTON GRADIENT ENGINE",body:"\u80FD\u91CF\u5E76\u4E0D\u603B\u662F\u88AB\u50A8\u5B58\u5728\u5206\u5B50\u91CC\uFF0C\u5B83\u4E5F\u53EF\u4EE5\u662F\u4E00\u9053\u68AF\u5EA6\u3002\u7EBF\u7C92\u4F53\u5185\u819C\u6298\u53E0\u6210\u5D74\uFF0C\u628A\u8D28\u5B50\u6CF5\u5230\u819C\u95F4\u9699\uFF1B\u8D28\u5B50\u987A\u68AF\u5EA6\u56DE\u6D41\uFF0C\u8F6C\u52A8 ATP \u5408\u9176\uFF0C\u50CF\u6C34\u8F6E\u673A\u4E00\u6837\u628A\u52BF\u80FD\u538B\u8FDB\u5316\u5B66\u952E\u3002",facts:[{k:"\u5185\u819C\u9762\u79EF",v:"\u2248 \u5916\u819C 5 \u500D"},{k:"\u5FC3\u78F7\u8102",v:"\u2248 \u5185\u819C\u78F7\u8102 20%"},{k:"ATP \u5408\u9176",v:"F\u2080F\u2081 \u65CB\u8F6C\u50AC\u5316"}],readout:"ORGANELLE CLUSTER / \u0394pH",accent:"#ffc177",camera:{pos:[7.4,2,8],target:[4.4,.2,2.4],fov:46},duration:19e3,study:{textbook:{chapter:"\u7B2C\u4E03\u7AE0",title:"\u7EBF\u7C92\u4F53\u548C\u53F6\u7EFF\u4F53",pages:"117\u2013143",sections:["\u7B2C\u4E00\u8282 \u7EBF\u7C92\u4F53\u4E0E\u6C27\u5316\u78F7\u9178\u5316","\u7B2C\u4E8C\u8282 \u53F6\u7EFF\u4F53\u4E0E\u5149\u5408\u4F5C\u7528","\u7B2C\u4E09\u8282 \u534A\u81EA\u4E3B\u6027\u53CA\u5176\u8D77\u6E90"]},related:["\u7B2C\u4E8C\u7AE0 \u7EC6\u80DE\u751F\u7269\u5B66\u7814\u7A76\u65B9\u6CD5 \xB7 pp.18\u201339\uFF08\u7EBF\u7C92\u4F53\u5206\u79BB\u4E0E\u547C\u5438\u6D4B\u5B9A\uFF09"],objectives:["\u753B\u51FA\u7EBF\u7C92\u4F53\u7684\u56DB\u4E2A\u533A\u5BA4\uFF0C\u8BF4\u660E\u5916\u819C\u3001\u5185\u819C\u3001\u819C\u95F4\u9699\u548C\u57FA\u8D28\u7684\u529F\u80FD\u5206\u5DE5\u3002","\u7528\u5316\u5B66\u6E17\u900F\u5047\u8BF4\u89E3\u91CA\u7535\u5B50\u4F20\u9012\u3001\u8D28\u5B50\u68AF\u5EA6\u548C ATP \u5408\u6210\u4E4B\u95F4\u7684\u8026\u5408\u3002","\u7406\u89E3\u7EBF\u7C92\u4F53\u534A\u81EA\u4E3B\u6027\u3001\u878D\u5408/\u5206\u88C2\u4EE5\u53CA\u6BCD\u7CFB\u9057\u4F20\u3002"],visuals:[{color:"#ffc177",label:"\u91D1\u8272\u80F6\u56CA = \u7EBF\u7C92\u4F53"},{color:"#ffe4a4",label:"\u5185\u90E8\u6761\u7EB9 = \u5185\u819C\u5D74"},{color:"#85fff2",label:"\u9752\u84DD\u7C92\u5B50 = \u819C\u95F4\u9699\u8D28\u5B50"},{color:"#ffbf6b",label:"\u91D1\u8272\u7206\u53D1 = ATP"}],concepts:[{term:"\u5916\u819C",en:"outer membrane",def:"\u5E73\u6ED1\u7684\u5355\u4F4D\u819C\uFF0C\u542B\u5B54\u86CB\u767D\uFF0C\u901A\u900F\u6027\u9AD8\uFF1B\u5C0F\u5206\u5B50\u548C\u4EE3\u8C22\u7269\u53EF\u8F83\u81EA\u7531\u901A\u8FC7\u3002"},{term:"\u5185\u819C\u4E0E\u5D74",en:"inner membrane / cristae",def:"\u86CB\u767D\u8D28/\u8102\u8D28\u6BD4\u9AD8\u3001\u5BCC\u542B\u5FC3\u78F7\u8102\u3001\u901A\u900F\u6027\u4F4E\uFF1B\u5411\u5185\u6298\u53E0\u6210\u5D74\uFF0C\u663E\u8457\u589E\u52A0\u6C27\u5316\u78F7\u9178\u5316\u7684\u53CD\u5E94\u9762\u79EF\u3002"},{term:"\u819C\u95F4\u9699",en:"intermembrane space",def:"\u5916\u819C\u4E0E\u5185\u819C\u4E4B\u95F4\u7684\u7A7A\u95F4\uFF0C\u5BBD\u7EA6 6\u20138 nm\uFF1B\u7535\u5B50\u4F20\u9012\u94FE\u6CF5\u51FA\u7684 H\u207A \u5728\u6B64\u79EF\u7D2F\uFF0C\u5F62\u6210\u8D28\u5B50\u68AF\u5EA6\u3002"},{term:"\u7EBF\u7C92\u4F53\u57FA\u8D28",en:"matrix",def:"\u542B\u4E09\u7FA7\u9178\u5FAA\u73AF\u9176\u3001\u8102\u80AA\u9178\u6C27\u5316\u9176\u3001\u7EBF\u7C92\u4F53 DNA\u3001RNA \u548C\u6838\u7CD6\u4F53\uFF1B\u662F\u7EBF\u7C92\u4F53\u57FA\u56E0\u8868\u8FBE\u548C\u591A\u79CD\u4EE3\u8C22\u7684\u53CD\u5E94\u573A\u6240\u3002"},{term:"\u7535\u5B50\u4F20\u9012\u94FE",en:"electron transport chain",def:"\u5185\u819C\u4E0A\u7684\u590D\u5408\u4F53 I\u2013IV \u5C06 NADH/FADH\u2082 \u7684\u7535\u5B50\u9010\u7EA7\u4F20\u9012\uFF0C\u5E76\u6CF5\u51FA H\u207A\uFF1BO\u2082 \u662F\u6700\u7EC8\u7535\u5B50\u53D7\u4F53\uFF0C\u751F\u6210 H\u2082O\u3002"},{term:"\u5316\u5B66\u6E17\u900F",en:"chemiosmosis",def:"\u7535\u5B50\u4F20\u9012\u5EFA\u7ACB\u7684\u8DE8\u5185\u819C H\u207A \u7535\u5316\u5B66\u68AF\u5EA6\u9A71\u52A8 ATP \u5408\u9176\u65CB\u8F6C\uFF0C\u4F7F ADP \u4E0E Pi \u5408\u6210 ATP\u3002"},{term:"\u7EBF\u7C92\u4F53DNA",en:"mtDNA",def:"\u73AF\u72B6\u53CC\u94FE DNA\uFF0C\u7F16\u7801\u90E8\u5206\u547C\u5438\u94FE\u86CB\u767D\u548C rRNA/tRNA\uFF1B\u590D\u5236\u4E0E\u8F6C\u5F55\u4F9D\u8D56\u6838\u57FA\u56E0\u4EA7\u7269\uFF0C\u5448\u6BCD\u7CFB\u9057\u4F20\u3002"}],mechanism:["\u7CD6\u9175\u89E3\u5728\u7EC6\u80DE\u8D28\u4E2D\u4EA7\u751F\u4E19\u916E\u9178\uFF1B\u4E19\u916E\u9178\u8FDB\u5165\u7EBF\u7C92\u4F53\u57FA\u8D28\uFF0C\u7ECF\u4E19\u916E\u9178\u8131\u6C22\u9176\u590D\u5408\u4F53\u8F6C\u4E3A\u4E59\u9170 CoA\uFF0C\u8FDB\u5165\u4E09\u7FA7\u9178\u5FAA\u73AF\uFF0C\u751F\u6210 NADH\u3001FADH\u2082 \u548C\u5C11\u91CF ATP/GTP\u3002","NADH \u548C FADH\u2082 \u628A\u7535\u5B50\u4EA4\u7ED9\u5185\u819C\u4E0A\u7684\u7535\u5B50\u4F20\u9012\u94FE\uFF1B\u590D\u5408\u4F53 I\u3001III\u3001IV \u5C06 H\u207A \u6CF5\u5230\u819C\u95F4\u9699\uFF0C\u5F62\u6210\u8DE8\u5185\u819C\u8D28\u5B50\u52A8\u529B\u52BF\u3002","H\u207A \u7ECF ATP \u5408\u9176 F\u2080 \u90E8\u5206\u56DE\u6D41\uFF0C\u9A71\u52A8 F\u2081 \u5934\u90E8\u65CB\u8F6C\uFF0C\u4F7F ADP + Pi \u2192 ATP\u3002\u82E5\u5185\u819C\u5BF9 H\u207A \u81EA\u7531\u901A\u900F\uFF0C\u68AF\u5EA6\u6D88\u5931\uFF0C\u6C27\u5316\u4E0E\u78F7\u9178\u5316\u89E3\u5076\u8054\u3002","\u5D74\u589E\u52A0\u5185\u819C\u9762\u79EF\uFF1B\u7EBF\u7C92\u4F53\u901A\u8FC7\u878D\u5408\u4E0E\u5206\u88C2\u7EF4\u6301\u7F51\u7EDC\uFF0C\u53D7\u635F\u7EBF\u7C92\u4F53\u53EF\u7ECF\u7EBF\u7C92\u4F53\u81EA\u566C\u6E05\u9664\u3002"],pitfalls:["\u4E09\u7FA7\u9178\u5FAA\u73AF\u5728\u7EBF\u7C92\u4F53\u57FA\u8D28\uFF0C\u7535\u5B50\u4F20\u9012\u94FE\u5728\u7EBF\u7C92\u4F53\u5185\u819C\uFF1B\u4E0D\u662F\u6240\u6709\u6709\u6C27\u547C\u5438\u6B65\u9AA4\u90FD\u5728\u57FA\u8D28\u5B8C\u6210\u3002","O\u2082 \u4E0D\u76F4\u63A5\u4E0E\u8461\u8404\u7CD6\u53CD\u5E94\uFF0C\u800C\u662F\u5728\u7535\u5B50\u4F20\u9012\u94FE\u672B\u7AEF\u63A5\u53D7\u7535\u5B50\u751F\u6210\u6C34\uFF1B\u7F3A\u6C27\u6216\u590D\u5408\u4F53 IV \u88AB\u6291\u5236\u65F6\uFF0C\u7535\u5B50\u4F20\u9012\u548C ATP \u5408\u6210\u90FD\u4F1A\u53D7\u963B\u3002","\u7EBF\u7C92\u4F53\u6709 DNA \u548C\u6838\u7CD6\u4F53\uFF0C\u4F46\u591A\u6570\u86CB\u767D\u7531\u6838\u57FA\u56E0\u7F16\u7801\u3001\u5728\u7EC6\u80DE\u8D28\u5408\u6210\u540E\u8FD0\u5165\uFF0C\u56E0\u6B64\u53EA\u662F\u201C\u534A\u81EA\u4E3B\u201D\u3002"],quiz:[{q:"\u4E3A\u4EC0\u4E48\u7EBF\u7C92\u4F53\u5185\u819C\u5FC5\u987B\u5BF9 H\u207A \u5177\u6709\u4F4E\u901A\u900F\u6027\uFF1F",a:"\u4F4E\u901A\u900F\u6027\u4F7F\u7535\u5B50\u4F20\u9012\u6CF5\u51FA\u7684 H\u207A \u80FD\u5728\u819C\u95F4\u9699\u79EF\u7D2F\uFF0C\u5EFA\u7ACB\u7535\u5316\u5B66\u68AF\u5EA6\uFF1BH\u207A \u53EA\u80FD\u7ECF ATP \u5408\u9176\u56DE\u6D41\uFF0C\u4ECE\u800C\u628A\u6C27\u5316\u91CA\u653E\u7684\u80FD\u91CF\u8026\u5408\u5230 ATP \u5408\u6210\u3002"},{q:"\u6C30\u5316\u7269\u6291\u5236\u7EC6\u80DE\u8272\u7D20 c \u6C27\u5316\u9176\uFF08\u590D\u5408\u4F53 IV\uFF09\u540E\uFF0CATP \u5408\u6210\u4E3A\u4EC0\u4E48\u505C\u6B62\uFF1F",a:"\u590D\u5408\u4F53 IV \u4E0D\u80FD\u628A\u7535\u5B50\u4F20\u7ED9 O\u2082\uFF0C\u7535\u5B50\u4F20\u9012\u94FE\u963B\u65AD\uFF0CH\u207A \u6CF5\u51FA\u505C\u6B62\uFF0C\u8D28\u5B50\u68AF\u5EA6\u9010\u6E10\u6D88\u5931\uFF0CATP \u5408\u9176\u5931\u53BB\u9A71\u52A8\u529B\u3002"},{q:"\u7EBF\u7C92\u4F53\u201C\u534A\u81EA\u4E3B\u6027\u201D\u7684\u542B\u4E49\u662F\u4EC0\u4E48\uFF1F",a:"\u7EBF\u7C92\u4F53\u62E5\u6709\u81EA\u5DF1\u7684\u73AF\u72B6 DNA\u3001\u6838\u7CD6\u4F53\u548C\u90E8\u5206\u57FA\u56E0\u8868\u8FBE\u7CFB\u7EDF\uFF0C\u80FD\u5408\u6210\u5C11\u6570\u86CB\u767D\uFF1B\u4F46\u7EDD\u5927\u591A\u6570\u7EBF\u7C92\u4F53\u86CB\u767D\u7531\u6838\u57FA\u56E0\u7F16\u7801\uFF0C\u56E0\u6B64\u5176\u9057\u4F20\u548C\u529F\u80FD\u53D7\u6838\u57FA\u56E0\u7EC4\u63A7\u5236\u3002"}]}},{id:"nucleus",no:"05",kicker:"GENOME",cnKicker:"\u9057\u4F20",short:"\u6838\u5185\u6697\u623F",title:"\u4E24\u7C73 DNA\uFF0C\u6298\u53E0\u6210\u6697\u623F",en:"THE GENOME, CONTINUOUSLY READ",body:"\u4E24\u7C73\u957F\u7684 DNA\uFF0C\u88AB\u6298\u53E0\u8FDB\u76F4\u5F84\u7EA6 5\u201310 \u5FAE\u7C73\u7684\u6697\u623F\u3002\u67D3\u8272\u8D28\u4E0D\u65AD\u6298\u53E0\u3001\u89E3\u5F00\uFF1B\u6838\u5B54\u50CF\u6D77\u5173\uFF0C\u628A RNA \u4E0E\u86CB\u767D\u7684\u901A\u884C\u63A7\u5236\u5728\u7EB3\u7C73\u5C3A\u5EA6\u3002\u8FD9\u91CC\u6CA1\u6709\u9759\u6B62\u7684\u56FE\u7EB8\uFF0C\u53EA\u6709\u6301\u7EED\u88AB\u8BFB\u53D6\u7684\u62D3\u6251\u3002",facts:[{k:"\u4EBA\u7C7B\u7EC6\u80DE DNA",v:"\u2248 2 m"},{k:"\u7EC6\u80DE\u6838\u76F4\u5F84",v:"5\u201310 \xB5m"},{k:"\u6838\u5B54\u590D\u5408\u4F53\u5916\u5F84",v:"\u2248 120 nm"}],readout:"NUCLEAR INTERIOR / 4Pi",accent:"#d9a8ff",camera:{pos:[2.2,1.4,8.2],target:[0,.2,0],fov:42},duration:19e3,study:{textbook:{chapter:"\u7B2C\u4E5D\u7AE0",title:"\u7EC6\u80DE\u6838\u4E0E\u67D3\u8272\u8D28",pages:"177\u2013212",sections:["\u7B2C\u4E00\u8282 \u6838\u88AB\u819C","\u7B2C\u4E8C\u8282 \u67D3\u8272\u8D28","\u7B2C\u4E09\u8282 \u67D3\u8272\u8D28\u590D\u5236\u4E0E\u8868\u8FBE","\u7B2C\u56DB\u8282 \u67D3\u8272\u4F53","\u7B2C\u4E94\u8282 \u6838\u4EC1\u4E0E\u6838\u4F53"]},related:["\u7B2C\u5341\u7AE0 \u6838\u7CD6\u4F53 \xB7 pp.213\u2013223","\u7B2C\u5341\u4E8C\u7AE0 \u7EC6\u80DE\u5468\u671F\u4E0E\u7EC6\u80DE\u5206\u88C2 \xB7 pp.261\u2013285"],objectives:["\u8BF4\u660E\u6838\u88AB\u819C\u3001\u6838\u5B54\u590D\u5408\u4F53\u548C\u6838\u7EA4\u5C42\u7684\u7ED3\u6784\u5173\u7CFB\u3002","\u4ECE DNA + \u7EC4\u86CB\u767D\u7684\u89D2\u5EA6\u89E3\u91CA\u6838\u5C0F\u4F53\u300130 nm \u7EA4\u7EF4\u548C\u67D3\u8272\u8D28\u9AD8\u7EA7\u7ED3\u6784\u3002","\u533A\u5206\u5E38\u67D3\u8272\u8D28\u4E0E\u5F02\u67D3\u8272\u8D28\uFF0C\u7406\u89E3\u6838\u4EC1\u5728\u6838\u7CD6\u4F53\u53D1\u751F\u4E2D\u7684\u4F5C\u7528\u3002"],visuals:[{color:"#c58cff",label:"\u7D2B\u8272\u7403\u4F53 = \u7EC6\u80DE\u6838"},{color:"#8ff5ff",label:"\u8868\u9762\u5706\u73AF = \u6838\u5B54\u590D\u5408\u4F53"},{color:"#ff9bdd",label:"\u7C89\u7D2B\u4E1D\u7EBF = \u67D3\u8272\u8D28"},{color:"#b04a78",label:"\u6697\u7EA2\u56E2\u5757 = \u6838\u4EC1"}],concepts:[{term:"\u6838\u88AB\u819C",en:"nuclear envelope",def:"\u7531\u5185\u819C\u548C\u5916\u819C\u7EC4\u6210\u7684\u53CC\u5C42\u819C\uFF0C\u5916\u819C\u4E0E\u5185\u8D28\u7F51\u76F8\u8FDE\uFF1B\u4E24\u5C42\u819C\u4E4B\u95F4\u7684\u7A7A\u95F4\u79F0\u6838\u5468\u95F4\u9699\u3002"},{term:"\u6838\u5B54\u590D\u5408\u4F53",en:"nuclear pore complex, NPC",def:"\u8DE8\u8D8A\u6838\u88AB\u819C\u7684\u5927\u578B\u86CB\u767D\u590D\u5408\u4F53\uFF0C\u5916\u5F84\u7EA6 120 nm\uFF1B\u5C0F\u5206\u5B50\u53EF\u6269\u6563\u901A\u8FC7\uFF0C\u5927\u5206\u5B50\u9700\u6838\u5B9A\u4F4D\u4FE1\u53F7\u7B49\u4ECB\u5BFC\u7684\u4E3B\u52A8\u8FD0\u8F93\u3002"},{term:"\u6838\u7EA4\u5C42",en:"nuclear lamina",def:"\u7D27\u8D34\u6838\u819C\u5185\u4FA7\u7684\u4E2D\u95F4\u4E1D\u7F51\u7EDC\uFF0C\u4E3B\u8981\u7531\u6838\u7EA4\u5C42\u86CB\u767D\uFF08lamin\uFF09\u7EC4\u6210\uFF0C\u652F\u6491\u6838\u819C\u5E76\u53C2\u4E0E\u67D3\u8272\u8D28\u5B9A\u4F4D\u3002"},{term:"\u67D3\u8272\u8D28",en:"chromatin",def:"DNA \u4E0E\u7EC4\u86CB\u767D\u3001\u975E\u7EC4\u86CB\u767D\u7EC4\u6210\u7684\u590D\u5408\u7269\uFF1B\u662F\u9057\u4F20\u4FE1\u606F\u7684\u50A8\u5B58\u5F62\u5F0F\uFF0C\u4E5F\u662F\u590D\u5236\u3001\u8F6C\u5F55\u548C\u4FEE\u590D\u7684\u6A21\u677F\u3002"},{term:"\u6838\u5C0F\u4F53",en:"nucleosome",def:"\u7531 H2A\u3001H2B\u3001H3\u3001H4 \u5404\u4E24\u5206\u5B50\u7EC4\u6210\u7684\u7EC4\u86CB\u767D\u516B\u805A\u4F53\uFF0C\u5916\u52A0\u7EA6 147 bp DNA \u7F20\u7ED5\u7EA6 1.75 \u5708\u5F62\u6210\uFF1B\u662F\u67D3\u8272\u8D28\u7684\u57FA\u672C\u7ED3\u6784\u5355\u4F4D\u3002"},{term:"\u5E38\u67D3\u8272\u8D28\u4E0E\u5F02\u67D3\u8272\u8D28",en:"euchromatin / heterochromatin",def:"\u5E38\u67D3\u8272\u8D28\u8F83\u677E\u6563\u3001\u8F6C\u5F55\u6D3B\u8DC3\uFF1B\u5F02\u67D3\u8272\u8D28\u8F83\u6D53\u7F29\u3001\u8F6C\u5F55\u53D7\u6291\u5236\uFF0C\u591A\u5206\u5E03\u5728\u6838\u819C\u5185\u4FA7\u3002"},{term:"\u6838\u4EC1",en:"nucleolus",def:"\u6838\u5185\u65E0\u819C\u5305\u56F4\u7684\u81F4\u5BC6\u7ED3\u6784\uFF0C\u662F rRNA \u57FA\u56E0\u8F6C\u5F55\u3001rRNA \u52A0\u5DE5\u548C\u6838\u7CD6\u4F53\u4E9A\u57FA\u7EC4\u88C5\u7684\u573A\u6240\u3002"}],mechanism:["\u6838\u88AB\u819C\u628A\u6838\u5185\u8F6C\u5F55\u4E0E\u7EC6\u80DE\u8D28\u7FFB\u8BD1\u5206\u9694\u5F00\uFF1B\u5916\u819C\u4E0E\u5185\u8D28\u7F51\u8FDE\u7EED\uFF0C\u6838\u5B54\u590D\u5408\u4F53\u662F\u6838\u8D28\u4EA4\u6362\u7684\u552F\u4E00\u901A\u9053\u3002\u6838\u7EA4\u5C42\u4F4D\u4E8E\u5185\u819C\u5185\u4FA7\uFF0C\u4E3A\u6838\u819C\u63D0\u4F9B\u673A\u68B0\u652F\u6491\u3002","\u6838\u5C0F\u4F53\u76D8\u7ED5\u5F62\u6210 11 nm \u7684\u201C\u4E32\u73E0\u201D\u7ED3\u6784\uFF0C\u518D\u6298\u53E0\u6210\u7EA6 30 nm \u7684\u87BA\u7EBF\u7BA1\uFF1B\u66F4\u9AD8\u5C42\u6B21\u7684\u73AF\u951A\u5B9A\u5728\u6838\u9AA8\u67B6\u4E0A\uFF0C\u5F62\u6210\u67D3\u8272\u8D28\u73AF\u3002","\u67D3\u8272\u8D28\u590D\u5236\u5728 S \u671F\u8FDB\u884C\uFF1B\u590D\u5236\u8D77\u70B9\u3001\u7740\u4E1D\u7C92\u548C\u7AEF\u7C92\u662F\u67D3\u8272\u4F53\u7684\u4E09\u4E2A\u529F\u80FD\u5143\u4EF6\u3002\u6709\u4E1D\u5206\u88C2\u65F6\u67D3\u8272\u8D28\u9AD8\u5EA6\u51DD\u7F29\u6210\u67D3\u8272\u4F53\uFF0C\u4FBF\u4E8E\u5206\u914D\u3002","\u6838\u4EC1\u7EC4\u7EC7\u533A\uFF08NOR\uFF09\u8F6C\u5F55 rRNA \u524D\u4F53\uFF0C\u52A0\u5DE5\u540E\u4E0E\u6838\u7CD6\u4F53\u86CB\u767D\u7EC4\u88C5\u6210\u6838\u7CD6\u4F53\u5927\u5C0F\u4E9A\u57FA\uFF0C\u518D\u7ECF\u6838\u5B54\u8F93\u51FA\u5230\u7EC6\u80DE\u8D28\u3002"],pitfalls:["\u6838\u5B54\u590D\u5408\u4F53\u5916\u5F84\u7EA6 120 nm\uFF0C\u4F46\u6709\u6548\u8FD0\u8F93\u901A\u9053\u8FDC\u5C0F\u4E8E\u6B64\uFF1B\u5C0F\u5206\u5B50\u53EF\u88AB\u52A8\u6269\u6563\uFF0C\u5927\u5206\u5B50\u9700\u8981\u4FE1\u53F7\u5E8F\u5217\u548C Ran-GTP \u53C2\u4E0E\u7684\u4E3B\u52A8\u8FD0\u8F93\u3002","\u67D3\u8272\u8D28\u4E0D\u7B49\u4E8E\u67D3\u8272\u4F53\uFF1A\u67D3\u8272\u8D28\u662F\u95F4\u671F DNA-\u86CB\u767D\u590D\u5408\u7269\u7684\u5B58\u5728\u5F62\u5F0F\uFF0C\u67D3\u8272\u4F53\u662F\u5206\u88C2\u671F\u9AD8\u5EA6\u51DD\u7F29\u7684\u5F62\u6001\uFF1B\u4E8C\u8005\u662F\u540C\u4E00\u7269\u8D28\u7684\u4E0D\u540C\u72B6\u6001\u3002","\u6838\u4EC1\u4E0D\u662F\u6709\u819C\u7EC6\u80DE\u5668\uFF0C\u4E5F\u4E0D\u7B49\u4E8E\u201C\u7EC6\u80DE\u6838\u201D\uFF1B\u5B83\u53EA\u662F\u6838\u5185\u4E00\u4E2A\u65E0\u819C\u7684\u533A\u57DF\uFF0C\u4E0E\u6838\u7CD6\u4F53\u53D1\u751F\u6709\u5173\u3002"],quiz:[{q:"\u6838\u5B54\u590D\u5408\u4F53\u5982\u4F55\u517C\u987E\u201C\u9009\u62E9\u6027\u201D\u548C\u201C\u9AD8\u901A\u91CF\u201D\u8FD0\u8F93\uFF1F",a:"\u5C0F\u5206\u5B50\u548C\u79BB\u5B50\u53EF\u7ECF\u5B54\u9053\u88AB\u52A8\u6269\u6563\uFF1B\u5927\u5206\u5B50\u4F9D\u8D56\u6838\u5B9A\u4F4D\u4FE1\u53F7/\u6838\u8F93\u51FA\u4FE1\u53F7\u4E0E\u8F6C\u8FD0\u53D7\u4F53\uFF0C\u5E76\u5728 Ran-GTP \u68AF\u5EA6\u4E0B\u5B8C\u6210\u5B9A\u5411\u8FD0\u8F93\uFF0C\u56E0\u6B64\u65E2\u80FD\u9AD8\u6548\u901A\u884C\uFF0C\u53C8\u80FD\u4E25\u683C\u7B5B\u9009\u3002"},{q:"\u6838\u5C0F\u4F53\u7684\u7EC4\u6210\u662F\u4EC0\u4E48\uFF1F\u5B83\u5982\u4F55\u5E2E\u52A9 DNA \u538B\u7F29\uFF1F",a:"\u7531 H2A\u3001H2B\u3001H3\u3001H4 \u5404\u4E24\u5206\u5B50\u7EC4\u6210\u7EC4\u86CB\u767D\u516B\u805A\u4F53\uFF0C\u7EA6 147 bp DNA \u7F20\u7ED5\u7EA6 1.75 \u5708\u3002\u6838\u5C0F\u4F53\u4E32\u73E0\u518D\u6298\u53E0\u4E3A 30 nm \u7EA4\u7EF4\uFF0C\u9010\u7EA7\u538B\u7F29 DNA\u3002"},{q:"\u5E38\u67D3\u8272\u8D28\u4E0E\u5F02\u67D3\u8272\u8D28\u5728\u7ED3\u6784\u548C\u529F\u80FD\u4E0A\u6709\u4F55\u533A\u522B\uFF1F",a:"\u5E38\u67D3\u8272\u8D28\u8F83\u677E\u6563\u3001\u67D3\u8272\u6D45\u3001\u8F6C\u5F55\u6D3B\u8DC3\uFF1B\u5F02\u67D3\u8272\u8D28\u9AD8\u5EA6\u6D53\u7F29\u3001\u67D3\u8272\u6DF1\u3001\u8F6C\u5F55\u53D7\u6291\u5236\uFF0C\u5E38\u5206\u5E03\u5728\u6838\u819C\u5185\u4FA7\u6216\u6838\u4EC1\u5468\u56F4\u3002"}]}},{id:"endomembrane",no:"06",kicker:"SECRETION",cnKicker:"\u5206\u6CCC",short:"\u5185\u819C\u6CB3\u6D41",title:"\u7269\u8D28\u6CBF\u7740\u819C\u6539\u5F62",en:"THE SECRETORY RIVER",body:"\u7269\u8D28\u6CBF\u7740\u819C\uFF0C\u6539\u5199\u81EA\u5DF1\u7684\u5F62\u72B6\u3002\u5185\u8D28\u7F51\u6298\u53E0\u86CB\u767D\uFF0C\u9AD8\u5C14\u57FA\u4F53\u4FEE\u526A\u5E76\u5206\u62E3\uFF0C\u56CA\u6CE1\u51FA\u82BD\u3001\u7A7F\u884C\u3001\u878D\u5408\u3002\u6BCF\u4E00\u6B21\u819C\u878D\u5408\uFF0C\u90FD\u662F\u4E00\u6B21\u7CBE\u786E\u7684\u6295\u9012\uFF0C\u4E5F\u662F\u4E00\u6B21\u8EAB\u4EFD\u7684\u4EA4\u6362\u3002",facts:[{k:"\u987A\u5411\u8FD0\u8F93",v:"COPII \xB7 ER\u2192Golgi"},{k:"\u9006\u5411\u8FD0\u8F93",v:"COPI \xB7 Golgi\u2192ER"},{k:"\u819C\u878D\u5408",v:"SNARE \u4ECB\u5BFC"}],readout:"SECRETORY ROUTE / LIVE",accent:"#ffb36b",camera:{pos:[-7.8,3,8.2],target:[-3.2,.2,1.2],fov:46},duration:19e3,study:{textbook:{chapter:"\u7B2C\u4E94\u7AE0",title:"\u7EC6\u80DE\u8D28\u57FA\u8D28\u4E0E\u5185\u819C\u7CFB\u7EDF",pages:"74\u201399",sections:["\u7B2C\u4E00\u8282 \u7EC6\u80DE\u8D28\u57FA\u8D28\u53CA\u5176\u529F\u80FD","\u7B2C\u4E8C\u8282 \u7EC6\u80DE\u5185\u819C\u7CFB\u7EDF\u53CA\u5176\u529F\u80FD"]},related:["\u7B2C\u516D\u7AE0 \u86CB\u767D\u8D28\u5206\u9009\u4E0E\u819C\u6CE1\u8FD0\u8F93 \xB7 pp.100\u2013116","\u7B2C\u5341\u7AE0 \u6838\u7CD6\u4F53 \xB7 pp.213\u2013223"],objectives:["\u8BF4\u660E\u5185\u8D28\u7F51\u3001\u9AD8\u5C14\u57FA\u4F53\u548C\u6EB6\u9176\u4F53\u7684\u7ED3\u6784\u5206\u5DE5\u3002","\u7528\u4FE1\u53F7\u80BD\u5047\u8BF4\u89E3\u91CA\u5206\u6CCC\u86CB\u767D\u5982\u4F55\u8FDB\u5165\u5185\u8D28\u7F51\u3002","\u533A\u5206 COPII\u3001COPI \u548C\u7F51\u683C\u86CB\u767D\u5305\u88AB\u819C\u6CE1\u7684\u8FD0\u8F93\u65B9\u5411\u3002","\u7406\u89E3 M6P \u5206\u9009\u548C SNARE \u878D\u5408\u5728\u86CB\u767D\u8D28\u6295\u9012\u4E2D\u7684\u4F5C\u7528\u3002"],visuals:[{color:"#ffc073",label:"\u7425\u73C0\u7BA1\u7F51 = \u5185\u8D28\u7F51"},{color:"#ffa252",label:"\u53E0\u5C42\u5F27 = \u9AD8\u5C14\u57FA\u4F53"},{color:"#ffcf87",label:"\u5C0F\u5149\u7403 = \u8FD0\u8F93\u56CA\u6CE1"},{color:"#d66572",label:"\u7EA2\u8272\u5C0F\u7403 = \u6EB6\u9176\u4F53"}],concepts:[{term:"\u5185\u819C\u7CFB\u7EDF",en:"endomembrane system",def:"\u7531\u5185\u8D28\u7F51\u3001\u9AD8\u5C14\u57FA\u4F53\u3001\u6EB6\u9176\u4F53\u3001\u5185\u4F53\u3001\u5206\u6CCC\u6CE1\u7B49\u819C\u6027\u7EC6\u80DE\u5668\u7EC4\u6210\u7684\u52A8\u6001\u7F51\u7EDC\uFF0C\u901A\u8FC7\u819C\u6CE1\u8FD0\u8F93\u4EA4\u6362\u7269\u8D28\u3002"},{term:"\u5185\u8D28\u7F51",en:"endoplasmic reticulum, ER",def:"\u7531\u7BA1\u72B6\u548C\u6241\u56CA\u72B6\u819C\u56F4\u6210\u7684\u8FDE\u7EED\u4E09\u7EF4\u7F51\u7EDC\uFF1B\u7C97\u9762 ER \u9644\u7740\u6838\u7CD6\u4F53\uFF0C\u8D1F\u8D23\u5206\u6CCC\u86CB\u767D\u548C\u819C\u86CB\u767D\u7684\u5408\u6210\u3001\u6298\u53E0\u4E0E\u7CD6\u57FA\u5316\uFF1B\u5149\u9762 ER \u53C2\u4E0E\u8102\u8D28\u5408\u6210\u548C\u89E3\u6BD2\u3002"},{term:"\u9AD8\u5C14\u57FA\u4F53",en:"Golgi apparatus",def:"\u7531\u987A\u9762\u3001\u4E2D\u95F4\u533A\u548C\u53CD\u9762\u6241\u56CA\u7EC4\u6210\u7684\u6781\u6027\u7EC6\u80DE\u5668\uFF1B\u5BF9\u86CB\u767D\u8D28\u8FDB\u884C\u7CD6\u57FA\u5316\u4FEE\u9970\u3001\u5206\u9009\u548C\u5305\u88C5\uFF0C\u5E76\u5408\u6210\u90E8\u5206\u591A\u7CD6\u3002"},{term:"\u6EB6\u9176\u4F53",en:"lysosome",def:"\u542B\u591A\u79CD\u9178\u6027\u6C34\u89E3\u9176\u7684\u819C\u6027\u7EC6\u80DE\u5668\uFF0CpH \u7EA6 4.5\u20135\uFF1B\u8D1F\u8D23\u964D\u89E3\u7EC6\u80DE\u5185\u541E\u7269\u3001\u8001\u65E7\u7EC6\u80DE\u5668\u548C\u751F\u7269\u5927\u5206\u5B50\u3002"},{term:"\u4FE1\u53F7\u80BD",en:"signal peptide",def:"\u5206\u6CCC\u86CB\u767D N \u7AEF\u7684\u4E00\u6BB5\u758F\u6C34\u5E8F\u5217\uFF0C\u88AB\u4FE1\u53F7\u8BC6\u522B\u9897\u7C92\uFF08SRP\uFF09\u8BC6\u522B\uFF0C\u5F15\u5BFC\u6838\u7CD6\u4F53\u590D\u5408\u4F53\u5230\u5185\u8D28\u7F51\uFF0C\u5B9E\u73B0\u5171\u7FFB\u8BD1\u8F6C\u8FD0\u3002"},{term:"COPII \u4E0E COPI",en:"COPII / COPI vesicles",def:"COPII \u5305\u88AB\u819C\u6CE1\u4ECB\u5BFC ER\u2192\u9AD8\u5C14\u57FA\u4F53\u7684\u987A\u5411\u8FD0\u8F93\uFF1BCOPI \u4ECB\u5BFC\u9AD8\u5C14\u57FA\u4F53\u2192ER \u7684\u9006\u5411\u8FD0\u8F93\uFF0C\u5E76\u56DE\u6536\u9003\u9038\u7684 ER \u9A7B\u7559\u86CB\u767D\u3002"},{term:"SNARE",en:"SNARE complex",def:"\u4ECB\u5BFC\u819C\u6CE1\u4E0E\u9776\u819C\u878D\u5408\u7684\u86CB\u767D\u5BB6\u65CF\uFF1Bv-SNARE \u4E0E t-SNARE \u5F62\u6210\u56DB\u87BA\u65CB\u675F\uFF0C\u62C9\u8FD1\u4E24\u5C42\u819C\u5E76\u89E6\u53D1\u878D\u5408\u3002"}],mechanism:["\u5206\u6CCC\u86CB\u767D N \u7AEF\u7684\u4FE1\u53F7\u80BD\u88AB SRP \u8BC6\u522B\uFF0C\u7FFB\u8BD1\u6682\u65F6\u505C\u987F\uFF1BSRP \u4E0E ER \u819C\u4E0A\u7684 SRP \u53D7\u4F53\u7ED3\u5408\uFF0C\u6838\u7CD6\u4F53\u505C\u9760\u5728\u6613\u4F4D\u5B50\uFF08translocon\uFF09\u4E0A\uFF0C\u80BD\u94FE\u8FB9\u5408\u6210\u8FB9\u8FDB\u5165 ER \u8154\u3002\u4FE1\u53F7\u80BD\u968F\u540E\u88AB\u4FE1\u53F7\u80BD\u9176\u5207\u9664\u3002","\u8FDB\u5165 ER \u7684\u86CB\u767D\u5728\u4F34\u4FA3\u86CB\u767D\u548C\u6298\u53E0\u9176\u5E2E\u52A9\u4E0B\u6298\u53E0\uFF0C\u5E76\u8FDB\u884C N-\u8FDE\u63A5\u7CD6\u57FA\u5316\uFF1B\u672A\u6B63\u786E\u6298\u53E0\u7684\u86CB\u767D\u7ECF ERAD \u9014\u5F84\u53CD\u5411\u8F6C\u8FD0\u5230\u7EC6\u80DE\u8D28\u964D\u89E3\u3002","COPII \u5728 ER \u51FA\u53E3\u4F4D\u70B9\u51FA\u82BD\uFF0C\u628A\u8D27\u7269\u8FD0\u5F80\u9AD8\u5C14\u57FA\u4F53\uFF1BCOPI \u4ECE\u9AD8\u5C14\u57FA\u4F53\u51FA\u82BD\uFF0C\u56DE\u6536 ER \u9A7B\u7559\u86CB\u767D\uFF08KDEL \u4FE1\u53F7\uFF09\u3002\u7F51\u683C\u86CB\u767D\u5305\u88AB\u819C\u6CE1\u53C2\u4E0E TGN\u2192\u5185\u4F53/\u6EB6\u9176\u4F53\u4EE5\u53CA\u5185\u541E\u3002","\u6EB6\u9176\u4F53\u6C34\u89E3\u9176\u5728\u987A\u9762\u9AD8\u5C14\u57FA\u4F53\u83B7\u5F97\u7518\u9732\u7CD6-6-\u78F7\u9178\uFF08M6P\uFF09\u6807\u8BB0\uFF0C\u88AB M6P \u53D7\u4F53\u8BC6\u522B\u5E76\u5206\u9009\u5230\u5185\u4F53\uFF0C\u6700\u7EC8\u5728\u9178\u6027\u73AF\u5883\u4E2D\u91CA\u653E\u3002Rab \u86CB\u767D\u548C SNARE \u4FDD\u8BC1\u819C\u6CE1\u5B9A\u5411\u505C\u9760\u4E0E\u878D\u5408\u3002"],pitfalls:["COPII \u662F ER\u2192Golgi \u7684\u987A\u5411\u8FD0\u8F93\uFF0CCOPI \u662F Golgi\u2192ER \u7684\u9006\u5411\u8FD0\u8F93\uFF1B\u65B9\u5411\u4E0D\u8981\u8BB0\u53CD\u3002","\u5206\u6CCC\u86CB\u767D\u8FDB\u5165 ER \u662F\u5171\u7FFB\u8BD1\u8F6C\u8FD0\uFF1B\u7EBF\u7C92\u4F53\u3001\u53F6\u7EFF\u4F53\u86CB\u767D\u591A\u4E3A\u7FFB\u8BD1\u5B8C\u6210\u540E\u8FDB\u884C\u540E\u7FFB\u8BD1\u8F6C\u8FD0\u3002","\u9AD8\u5C14\u57FA\u4F53\u4E0D\u53EA\u662F\u201C\u5305\u88C5\u8F66\u95F4\u201D\uFF0C\u5B83\u8FD8\u662F\u7CD6\u57FA\u5316\u4FEE\u9970\u3001\u86CB\u767D\u8D28\u5206\u9009\u548C\u6EB6\u9176\u4F53\u9176\u6807\u8BB0\u7684\u5173\u952E\u573A\u6240\u3002"],quiz:[{q:"\u4FE1\u53F7\u80BD\u5047\u8BF4\u7684\u6838\u5FC3\u5185\u5BB9\u662F\u4EC0\u4E48\uFF1F",a:"\u5206\u6CCC\u86CB\u767D N \u7AEF\u4FE1\u53F7\u80BD\u88AB SRP \u8BC6\u522B\uFF0CSRP-\u6838\u7CD6\u4F53\u590D\u5408\u4F53\u7ED3\u5408 ER \u819C\u4E0A\u7684 SRP \u53D7\u4F53\uFF0C\u4F7F\u65B0\u751F\u80BD\u94FE\u5728\u6613\u4F4D\u5B50\u5904\u8FDB\u5165 ER \u8154\uFF1B\u4FE1\u53F7\u80BD\u968F\u540E\u88AB\u5207\u9664\uFF0C\u86CB\u767D\u5728 ER \u8154\u4E2D\u6298\u53E0\u548C\u4FEE\u9970\u3002"},{q:"\u6EB6\u9176\u4F53\u6C34\u89E3\u9176\u5982\u4F55\u88AB\u51C6\u786E\u5206\u9009\u5230\u6EB6\u9176\u4F53\uFF1F",a:"\u5728\u987A\u9762\u9AD8\u5C14\u57FA\u4F53\uFF0C\u6C34\u89E3\u9176\u83B7\u5F97\u7518\u9732\u7CD6-6-\u78F7\u9178\uFF08M6P\uFF09\u6807\u8BB0\uFF1BM6P \u53D7\u4F53\u5728 TGN \u8BC6\u522B\u5E76\u5305\u88C5\u6210\u7F51\u683C\u86CB\u767D\u819C\u6CE1\uFF0C\u8FD0\u9001\u5230\u5185\u4F53\uFF0C\u9178\u6027\u73AF\u5883\u4F7F\u9176\u4E0E\u53D7\u4F53\u89E3\u79BB\u5E76\u8FDB\u5165\u6EB6\u9176\u4F53\u3002"},{q:"COPII \u548C COPI \u819C\u6CE1\u5206\u522B\u627F\u62C5\u4EC0\u4E48\u8FD0\u8F93\u65B9\u5411\uFF1F",a:"COPII \u4ECB\u5BFC ER\u2192\u9AD8\u5C14\u57FA\u4F53\u7684\u987A\u5411\u8FD0\u8F93\uFF1BCOPI \u4ECB\u5BFC\u9AD8\u5C14\u57FA\u4F53\u2192ER \u7684\u9006\u5411\u8FD0\u8F93\uFF0C\u56DE\u6536 ER \u9A7B\u7559\u86CB\u767D\u5E76\u7EF4\u6301\u819C\u6210\u5206\u5E73\u8861\u3002"}]}},{id:"mitosis",no:"07",kicker:"MITOSIS",cnKicker:"\u5206\u88C2",short:"\u4E00\u5206\u4E3A\u4E8C",title:"\u628A\u5B87\u5B99\u4EA4\u7ED9\u4E24\u4E2A\u672A\u6765",en:"ONE COSMOS, TWO FUTURES",body:"\u5206\u88C2\uFF0C\u662F\u628A\u540C\u4E00\u4E2A\u5B87\u5B99\u4EA4\u7ED9\u4E24\u4E2A\u672A\u6765\u3002\u67D3\u8272\u8D28\u51DD\u7F29\u6210\u67D3\u8272\u4F53\uFF0C\u7EBA\u9524\u4F53\u4ECE\u4E24\u6781\u4F38\u5165\uFF1B\u52A8\u7C92\u88AB\u5FAE\u7BA1\u6355\u83B7\uFF0C\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u5728\u68C0\u9A8C\u70B9\u7684\u51DD\u89C6\u4E0B\u5206\u79BB\uFF0C\u76F4\u5230\u4E24\u4E2A\u5B50\u7EC6\u80DE\u5404\u81EA\u62E5\u6709\u5B8C\u6574\u7684\u57FA\u56E0\u7EC4\u3002",facts:[{k:"\u4EBA\u7C7B\u67D3\u8272\u4F53",v:"46 \u6761"},{k:"\u590D\u5236\u540E\u67D3\u8272\u5355\u4F53",v:"92 \u6761"},{k:"\u8D28\u91CF\u63A7\u5236",v:"SAC \u68C0\u9A8C\u70B9"}],readout:"SPINDLE ASSEMBLY / SAC",accent:"#ff74b7",camera:{pos:[0,1.3,15.5],target:[0,0,0],fov:40},duration:23e3,study:{textbook:{chapter:"\u7B2C\u5341\u4E8C\u7AE0",title:"\u7EC6\u80DE\u5468\u671F\u4E0E\u7EC6\u80DE\u5206\u88C2",pages:"261\u2013285",sections:["\u7B2C\u4E00\u8282 \u7EC6\u80DE\u5468\u671F","\u7B2C\u4E8C\u8282 \u7EC6\u80DE\u5206\u88C2"]},related:["\u7B2C\u5341\u4E09\u7AE0 \u7EC6\u80DE\u589E\u6B96\u8C03\u63A7\u4E0E\u764C\u7EC6\u80DE \xB7 pp.287\u2013306"],objectives:["\u6982\u8FF0\u7EC6\u80DE\u5468\u671F\u56DB\u4E2A\u65F6\u76F8\u53CA\u4E09\u4E2A\u5173\u952E\u68C0\u9A8C\u70B9\u3002","\u6309\u987A\u5E8F\u8BF4\u51FA\u6709\u4E1D\u5206\u88C2\u5404\u671F\u7684\u4E3B\u8981\u4E8B\u4EF6\uFF0C\u533A\u5206\u540E\u671F A \u548C\u540E\u671F B\u3002","\u89E3\u91CA CDK1-cyclin B\u3001APC/C\u3001separase \u548C SAC \u5982\u4F55\u63A7\u5236\u67D3\u8272\u4F53\u5206\u79BB\u3002"],visuals:[{color:"#ff6ab4",label:"\u7C89/\u9752 X \u5F62\u4F53 = \u59D0\u59B9\u67D3\u8272\u5355\u4F53"},{color:"#83f8ff",label:"\u653E\u5C04\u7EC6\u7EBF = \u7EBA\u9524\u4F53\u5FAE\u7BA1"},{color:"#7dfff0",label:"\u4E24\u7AEF\u4EAE\u7403 = \u4E2D\u5FC3\u4F53/\u7EBA\u9524\u4F53\u6781"},{color:"#8a7cff",label:"\u4E24\u4FA7\u7403\u4F53 = \u6B63\u5728\u5F62\u6210\u7684\u5B50\u6838"}],concepts:[{term:"\u7EC6\u80DE\u5468\u671F",en:"cell cycle",def:"\u7EC6\u80DE\u4ECE\u4E00\u6B21\u5206\u88C2\u7ED3\u675F\u5230\u4E0B\u4E00\u6B21\u5206\u88C2\u7ED3\u675F\u6240\u7ECF\u5386\u7684\u8FC7\u7A0B\uFF0C\u5206\u4E3A G1\u3001S\u3001G2 \u548C M \u671F\uFF1BDNA \u590D\u5236\u5728 S \u671F\u5B8C\u6210\u3002"},{term:"\u68C0\u9A8C\u70B9",en:"cell cycle checkpoint",def:"\u76D1\u6D4B\u5173\u952E\u4E8B\u4EF6\u662F\u5426\u5B8C\u6210\u7684\u63A7\u5236\u70B9\uFF0C\u5982 G1/S\u3001G2/M \u548C\u7EBA\u9524\u4F53\u7EC4\u88C5\u68C0\u9A8C\u70B9\uFF1B\u5F02\u5E38\u65F6\u6682\u505C\u5468\u671F\u4EE5\u4FEE\u590D\u6216\u89E6\u53D1\u6B7B\u4EA1\u3002"},{term:"MPF",en:"maturation/mitosis promoting factor",def:"\u7531 CDK1 \u4E0E cyclin B \u7EC4\u6210\u7684\u590D\u5408\u4F53\uFF0C\u9A71\u52A8 G2/M \u8F6C\u6362\uFF1Bcyclin B \u7684\u5408\u6210\u3001\u5B9A\u4F4D\u548C\u964D\u89E3\u51B3\u5B9A\u5176\u6D3B\u6027\u3002"},{term:"\u51DD\u7F29\u86CB\u767D\u4E0E\u9ECF\u8FDE\u86CB\u767D",en:"condensin / cohesin",def:"SMC \u86CB\u767D\u590D\u5408\u4F53\uFF1B\u51DD\u7F29\u86CB\u767D\u4FC3\u8FDB\u67D3\u8272\u4F53\u51DD\u7F29\uFF0C\u9ECF\u8FDE\u86CB\u767D\u628A\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u9ECF\u5728\u4E00\u8D77\uFF0C\u76F4\u5230\u540E\u671F\u88AB separase \u5207\u5272\u3002"},{term:"\u52A8\u7C92",en:"kinetochore",def:"\u4F4D\u4E8E\u67D3\u8272\u4F53\u7740\u4E1D\u7C92\u4E24\u4FA7\u7684\u86CB\u767D\u590D\u5408\u4F53\uFF0C\u8FDE\u63A5\u7740\u4E1D\u7C92 DNA \u4E0E\u7EBA\u9524\u4F53\u5FAE\u7BA1\uFF0C\u5E76\u53C2\u4E0E SAC \u4FE1\u53F7\u3002"},{term:"SAC",en:"spindle assembly checkpoint",def:"\u76D1\u6D4B\u6240\u6709\u52A8\u7C92\u662F\u5426\u88AB\u5FAE\u7BA1\u6B63\u786E\u8FDE\u63A5\uFF1B\u672A\u8FDE\u63A5\u65F6\u6291\u5236 APC/C\uFF0C\u963B\u6B62\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u63D0\u524D\u5206\u79BB\u3002"},{term:"\u540E\u671F A / \u540E\u671F B",en:"anaphase A / anaphase B",def:"\u540E\u671F A \u662F\u52A8\u7C92\u5FAE\u7BA1\u7F29\u77ED\u3001\u67D3\u8272\u4F53\u5411\u4E24\u6781\u79FB\u52A8\uFF1B\u540E\u671F B \u662F\u6781\u5FAE\u7BA1\u6ED1\u52A8\u548C\u5EF6\u957F\uFF0C\u628A\u4E24\u6781\u63A8\u5F00\u3002"}],mechanism:["G1 \u671F\u51C6\u5907 DNA \u590D\u5236\uFF0CS \u671F\u5B8C\u6210 DNA \u590D\u5236\uFF0CG2 \u671F\u68C0\u67E5\u590D\u5236\u5B8C\u6574\u6027\u5E76\u50A8\u5907\u5206\u88C2\u6240\u9700\u7269\u8D28\uFF0CM \u671F\u5B8C\u6210\u6838\u5206\u88C2\u548C\u80DE\u8D28\u5206\u88C2\u3002G1/S\u3001G2/M \u548C SAC \u662F\u4E09\u4E2A\u5173\u952E\u63A7\u5236\u70B9\u3002","CDK1-cyclin B\uFF08MPF\uFF09\u5728 G2/M \u8F6C\u6362\u65F6\u88AB\u6FC0\u6D3B\uFF0C\u78F7\u9178\u5316\u51DD\u7F29\u86CB\u767D\u3001\u6838\u7EA4\u5C42\u86CB\u767D\u548C\u7EBA\u9524\u4F53\u76F8\u5173\u86CB\u767D\uFF0C\u63A8\u52A8\u67D3\u8272\u4F53\u51DD\u7F29\u3001\u6838\u819C\u89E3\u4F53\u4E0E\u7EBA\u9524\u4F53\u7EC4\u88C5\u3002","\u524D\u4E2D\u671F\uFF0C\u7EBA\u9524\u4F53\u5FAE\u7BA1\u6355\u83B7\u52A8\u7C92\uFF1B\u672A\u8FDE\u63A5\u7684\u52A8\u7C92\u4EA7\u751F Mad/Bub \u4FE1\u53F7\uFF0C\u6291\u5236 APC/C\u3002\u6240\u6709\u67D3\u8272\u4F53\u6392\u5217\u5230\u8D64\u9053\u9762\u540E\uFF0CSAC \u89E3\u9664\uFF0CAPC/C \u6CDB\u7D20\u5316 securin\uFF0C\u91CA\u653E separase\uFF0C\u5207\u5272\u9ECF\u8FDE\u86CB\u767D\uFF0C\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u5206\u79BB\u3002","\u540E\u671F A \u7531\u52A8\u7C92\u5FAE\u7BA1\u7F29\u77ED\u9A71\u52A8\uFF1B\u540E\u671F B \u7531 kinesin-5 \u7B49\u53CC\u6781\u9A6C\u8FBE\u5728\u53CD\u5411\u5E73\u884C\u6781\u5FAE\u7BA1\u4E0A\u6ED1\u52A8\uFF0C\u63A8\u5F00\u4E24\u6781\u3002\u672B\u671F\u6838\u819C\u91CD\u5EFA\uFF0C\u80DE\u8D28\u5206\u88C2\u7531\u808C\u52A8\u86CB\u767D-\u808C\u7403\u86CB\u767D II \u6536\u7F29\u73AF\u5B8C\u6210\u3002"],pitfalls:["DNA \u590D\u5236\u53D1\u751F\u5728 S \u671F\uFF0C\u4E0D\u662F M \u671F\uFF1B\u6709\u4E1D\u5206\u88C2\u53EA\u8D1F\u8D23\u628A\u5DF2\u590D\u5236\u7684\u67D3\u8272\u4F53\u5206\u914D\u3002","\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u5728\u540E\u671F\u5206\u79BB\uFF0C\u4E0D\u662F\u524D\u671F\uFF1B\u524D\u671F\u53D1\u751F\u7684\u662F\u67D3\u8272\u8D28\u51DD\u7F29\u548C\u7EBA\u9524\u4F53\u5F00\u59CB\u5F62\u6210\u3002","SAC \u4E0D\u662F\u201C\u68C0\u67E5\u67D3\u8272\u4F53\u662F\u5426\u51DD\u7F29\u201D\uFF0C\u800C\u662F\u68C0\u67E5\u52A8\u7C92\u4E0E\u5FAE\u7BA1\u7684\u8FDE\u63A5\u548C\u5F20\u529B\uFF1BSAC \u5931\u6548\u4F1A\u5BFC\u81F4\u975E\u6574\u500D\u4F53\u3002","\u6709\u4E1D\u5206\u88C2\u4EA7\u751F\u4E24\u4E2A\u9057\u4F20\u7269\u8D28\u76F8\u540C\u7684\u5B50\u7EC6\u80DE\uFF1B\u51CF\u6570\u5206\u88C2\u53D1\u751F\u540C\u6E90\u91CD\u7EC4\u548C\u4E24\u6B21\u8FDE\u7EED\u5206\u88C2\uFF0C\u4EA7\u751F\u5355\u500D\u4F53\u7EC6\u80DE\u3002"],quiz:[{q:"\u5982\u679C SAC \u5931\u6548\uFF0C\u7EC6\u80DE\u53EF\u80FD\u51FA\u73B0\u4EC0\u4E48\u540E\u679C\uFF1F",a:"\u672A\u6B63\u786E\u8FDE\u63A5\u7684\u67D3\u8272\u4F53\u53EF\u80FD\u5728\u540E\u671F\u63D0\u524D\u5206\u79BB\uFF0C\u5BFC\u81F4\u5B50\u7EC6\u80DE\u67D3\u8272\u4F53\u6570\u76EE\u5F02\u5E38\uFF08\u975E\u6574\u500D\u4F53\uFF09\uFF0C\u5E76\u53EF\u80FD\u4FC3\u8FDB\u80BF\u7624\u53D1\u751F\u3002"},{q:"APC/C \u5982\u4F55\u89E6\u53D1\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u5206\u79BB\uFF1F",a:"APC/C \u6CDB\u7D20\u5316 securin\uFF0C\u4F7F\u5176\u88AB\u86CB\u767D\u9176\u4F53\u964D\u89E3\uFF1B\u91CA\u653E\u7684 separase \u5207\u5272\u9ECF\u8FDE\u86CB\u767D\uFF0C\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u56E0\u6B64\u5931\u53BB\u9ECF\u8FDE\u5E76\u5206\u79BB\u3002"},{q:"\u6BD4\u8F83\u540E\u671F A \u548C\u540E\u671F B \u7684\u9A71\u52A8\u673A\u5236\u3002",a:"\u540E\u671F A \u4E3B\u8981\u9760\u52A8\u7C92\u5FAE\u7BA1\u7F29\u77ED\uFF0C\u628A\u67D3\u8272\u4F53\u62C9\u5411\u4E24\u6781\uFF1B\u540E\u671F B \u4E3B\u8981\u9760\u6781\u5FAE\u7BA1\u6ED1\u52A8\u548C\u5EF6\u957F\uFF0C\u628A\u4E24\u6781\u63A8\u5F00\uFF0C\u4E8C\u8005\u5171\u540C\u5B8C\u6210\u67D3\u8272\u4F53\u5206\u914D\u3002"}]}}],xh={membrane:[1,1,.2,.16,.28,.22,.1],lipids:[1,1,.18,.08,.1,.1,.04],proteins:[.9,1,.2,.1,.18,.16,.04],particles:[1,.55,.9,.55,.72,.72,.42],cytoskeleton:[.55,.2,1,.28,.36,.52,.38],mitochondria:[.78,.1,.3,1,.18,.14,.08],nucleus:[1,.16,.3,.1,1,.2,.1],endomembrane:[.62,.08,.25,.08,.35,1,.12],mitosis:[0,0,0,0,0,0,1]};var Ni=`
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
`,Gd=`
uniform float uTime;
uniform float uAmp;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${Ni}
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
`,Wd=`
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uRim;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${Ni}
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
`,Ys=`
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
`,Zs=`
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
`,Xd=`
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
`,qd=`
uniform float uOpacity;
varying vec3 vCol;
varying float vPulse;
void main() {
  gl_FragColor = vec4(vCol * (1.25 + vPulse * 0.9), uOpacity * vPulse);
}
`,yh=`
uniform float uTime;
uniform float uPixelRatio;
uniform float uSize;
uniform float uOpacity;
uniform float uDrift;
attribute float aSeed;
attribute float aScale;
varying float vSeed;
varying float vAlpha;
${Ni}
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
`,Sh=`
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
`,Yd=`
uniform float uTime;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${Ni}
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
`,Zd=`
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${Ni}
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
`,$d=`
uniform float uTime;
varying vec3 vN;
varying vec3 vV;
varying vec3 vLocal;
${Ni}
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
`,Jd=`
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
`,Kd=`
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
`,Qd=`
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
`,Mh=`
attribute float aT;
attribute float aSeed;
varying float vT;
varying float vSeed;
void main() {
  vT = aT;
  vSeed = aSeed;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,bh=`
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
`,jd=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ef=`
uniform float uTime;
uniform float uOpacity;
varying vec3 vDir;
${Ni}
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
`,tf=`
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
`,nf=`
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColor;
varying vec2 vUv;
varying vec3 vN;
varying vec3 vV;
${Ni}
void main() {
  float facing = abs(dot(normalize(vN), normalize(vV)));
  float fall = smoothstep(0.0, 0.25, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y));
  float n = ca_fbm(vec3(vUv * vec2(6.0, 2.4), uTime * 0.07));
  float wisps = 0.5 + 0.5 * n;
  float alpha = uOpacity * fall * (0.08 + facing * 0.42) * (0.45 + wisps * 0.75);
  gl_FragColor = vec4(uColor * (1.1 + wisps * 0.9), alpha);
}
`,sf=`
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
`;var xn=Math.PI*2,di=8.2,rf=new P(0,1,0),Mv=new P(1,0,0),bv=new P(0,1,0),Ev=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;function Tv(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Eh(i){let e=[],t=Math.PI*(3-Math.sqrt(5));for(let n=0;n<i;n+=1){let s=1-n/Math.max(1,i-1)*2,r=Math.sqrt(Math.max(0,1-s*s)),a=t*n;e.push(new P(Math.cos(a)*r,s,Math.sin(a)*r))}return e}function un(i,e,t){return Math.max(e,Math.min(t,i))}function Th(i,e,t){let n=un((t-i)/(e-i),0,1);return n*n*(3-2*n)}function on(i){let e=i()*2-1,t=i()*xn,n=Math.sqrt(Math.max(0,1-e*e));return new P(Math.cos(t)*n,e,Math.sin(t)*n)}function wv(i,e,t,n,s=1){let r=new rn(i,e,t),a=r.attributes.position,o=new P;for(let l=0;l<a.count;l+=1){o.fromBufferAttribute(a,l).normalize();let c=Math.sin(o.x*4.2+s)*Math.cos(o.y*3.6-s*.4)*.55+Math.sin(o.z*6.7+s*2.1)*.25;o.multiplyScalar(i+c*n),a.setXYZ(l,o.x,o.y,o.z)}return a.needsUpdate=!0,r.computeVertexNormals(),r}function af(i,e={}){if(!i)throw new Error("Cell Atlas: no host element.");let t=Tv(1372459435),n={value:0},s={value:1},r=new Et,a=new Et;r.add(a);let o;try{o=new Nl({antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1})}catch(I){throw new Error(`Cell Atlas: WebGL could not start (${I.message}).`)}if(!o.getContext())throw new Error("Cell Atlas: WebGL is unavailable in this browser.");let l=Math.min(window.devicePixelRatio||1,1.5);o.setPixelRatio(l),o.outputColorSpace=jt,o.toneMapping=Zi,o.toneMappingExposure=.84,o.setClearColor(132619,1),o.domElement.className="ca-webgl",o.domElement.setAttribute("aria-hidden","true"),o.domElement.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;",i.appendChild(o.domElement);let c=new Sr;c.background=new de(132619),c.fog=new yr(132619,.017),c.add(r);let h=new Xt(42,1,.04,140);h.position.set(0,3,23.5);let f=new Ol(o),u=new Bl(c,h),p=new qs(new Me(1,1),.42,.55,.28),v=new Xs({uniforms:{tDiffuse:{value:null},uResolution:{value:new Me(1,1)},uTime:{value:0},uFlash:{value:1},uIntensity:{value:1},uGrain:{value:.028},uLetterbox:{value:0}},vertexShader:Ev,fragmentShader:sf}),S=new zl;f.addPass(u),f.addPass(p),f.addPass(v),f.addPass(S);let m=null;try{let I=document.createElement("canvas");I.width=1024,I.height=512;let B=I.getContext("2d"),k=B.createLinearGradient(0,0,0,512);k.addColorStop(0,"#01050a"),k.addColorStop(.45,"#04141c"),k.addColorStop(.7,"#031019"),k.addColorStop(1,"#010306"),B.fillStyle=k,B.fillRect(0,0,1024,512);let ge=[[180,230,260,"rgba(26, 210, 198, 0.38)"],[820,150,230,"rgba(255, 66, 158, 0.26)"],[520,390,190,"rgba(255, 168, 69, 0.16)"],[940,410,170,"rgba(74, 100, 255, 0.22)"]];for(let[ke,ot,St,fn]of ge){let ln=B.createRadialGradient(ke,ot,0,ke,ot,St);ln.addColorStop(0,fn),ln.addColorStop(1,"rgba(0,0,0,0)"),B.fillStyle=ln,B.fillRect(ke-St,ot-St,St*2,St*2)}let Ce=new Ar(I);Ce.mapping=Fs,Ce.colorSpace=jt;let Fe=new Vs(o);Fe.compileEquirectangularShader(),m=Fe.fromEquirectangular(Ce).texture,c.environment=m,Ce.dispose(),Fe.dispose()}catch{}let d=new Dr(1590362,656137,.8);c.add(d);let M=new Or(10485745,.95);M.position.set(9,12,10),c.add(M);let A=new ci(4191712,110,42,2);A.position.set(8,7,8),c.add(A);let y=new ci(16727711,85,40,2);y.position.set(-9,-3,6),c.add(y);let T=new ci(16755544,70,34,2);T.position.set(-4,-1,2),c.add(T);let b=new Fr(9435391,170,55,.62,.92,1.6);b.position.set(0,18,4),b.target.position.set(0,0,0),c.add(b),c.add(b.target);let R=new Map;function _(I,B){let k=R.get(I);k||(k={name:I,weight:0,target:0,objects:[],mats:[]},R.set(I,k)),k.objects.push(B),B.traverse(ge=>{if(!ge.material)return;let Ce=Array.isArray(ge.material)?ge.material:[ge.material];for(let Fe of Ce){if(!Fe||k.mats.some(ot=>ot.mat===Fe))continue;let ke=Fe.uniforms&&Fe.uniforms.uOpacity?Fe.uniforms.uOpacity.value:null;k.mats.push({mat:Fe,baseOpacity:Fe.opacity,baseEmissive:Fe.emissiveIntensity===void 0?1:Fe.emissiveIntensity,baseColor:Fe.color?Fe.color.clone():null,shaderOpacity:ke})}})}function E(I,B){let k=un(B,0,1),ge=k>.012;for(let Ce of I.objects)Ce.visible=ge;if(ge)for(let Ce of I.mats){let Fe=Ce.mat;Ce.shaderOpacity!==null?Fe.uniforms.uOpacity.value=Ce.shaderOpacity*k:Fe.transparent&&(Fe.opacity=Ce.baseOpacity*k),Fe.emissiveIntensity!==void 0&&(Fe.emissiveIntensity=Ce.baseEmissive*(.25+.75*k)),Ce.baseColor&&Fe.color&&Fe.color.copy(Ce.baseColor).multiplyScalar(.4+.6*k)}}let C=new Et;c.add(C);let F=new Ke({uniforms:{uTime:n,uOpacity:{value:1}},vertexShader:jd,fragmentShader:ef,side:kt,depthWrite:!1,fog:!1}),O=new Ze(new rn(72,64,40),F);O.frustumCulled=!1,C.add(O);let V=2600,N=new Float32Array(V*3),X=new Float32Array(V),K=new Float32Array(V);for(let I=0;I<V;I+=1){let B=on(t),k=19+t()*44;N[I*3]=B.x*k,N[I*3+1]=B.y*k,N[I*3+2]=B.z*k,X[I]=t(),K[I]=.25+t()*.85}let $=new lt;$.setAttribute("position",new Mt(N,3)),$.setAttribute("aSeed",new Mt(X,1)),$.setAttribute("aScale",new Mt(K,1));let re=new Ke({uniforms:{uTime:n,uPixelRatio:s,uSize:{value:1},uOpacity:{value:.42},uDrift:{value:.25}},vertexShader:yh,fragmentShader:Sh,transparent:!0,depthWrite:!1,blending:ft,fog:!1}),Z=new gn($,re);Z.frustumCulled=!1,C.add(Z);let te=new Et;C.add(te);let se=[{pos:[0,16,2],scale:[1.25,1.1,1.25],rot:[0,0,-.16],color:1806238,opacity:.1},{pos:[-13,7,-8],scale:[.75,.85,.75],rot:[.3,.2,.64],color:5000144,opacity:.07},{pos:[12,4,8],scale:[.6,.8,.6],rot:[-.24,0,-.7],color:13187973,opacity:.06}];for(let I of se){let B=new Ke({uniforms:{uTime:n,uOpacity:{value:I.opacity},uColor:{value:new de(I.color)}},vertexShader:tf,fragmentShader:nf,transparent:!0,depthWrite:!1,side:an,blending:ft,fog:!1}),k=new Ze(new Rr(8.5,25,40,1,!0),B);k.position.fromArray(I.pos),k.scale.fromArray(I.scale),k.rotation.set(...I.rot),te.add(k)}let Le=new Et;a.add(Le);let De=new Ke({uniforms:{uTime:n,uOpacity:{value:.8},uAmp:{value:.14},uColorA:{value:new de(676450)},uColorB:{value:new de(10169452)},uRim:{value:new de(9371626)}},vertexShader:Gd,fragmentShader:Wd,transparent:!0,depthWrite:!1,side:an,blending:ft}),pt=new Ze(new Is(di,5),De);pt.renderOrder=3,Le.add(pt);let it=new $n({color:740181,roughness:.18,metalness:.04,transmission:.84,thickness:2.3,ior:1.33,clearcoat:1,clearcoatRoughness:.14,iridescence:.72,iridescenceIOR:1.3,iridescenceThicknessRange:[120,460],attenuationColor:new de(750448),attenuationDistance:3.5,envMapIntensity:1.15,transparent:!0,opacity:.28,depthWrite:!1}),st=new Ze(new rn(di-.09,96,64),it);st.renderOrder=1,Le.add(st);let Q=new Ke({uniforms:{uTime:n,uOpacity:{value:.13},uColor:{value:new de(2081986)},uColorB:{value:new de(10173069)},uPower:{value:2.8}},vertexShader:Ys,fragmentShader:Zs,transparent:!0,depthWrite:!1,side:kt,blending:ft}),ne=new Ze(new rn(di-.3,64,48),Q);Le.add(ne);let Ee=new Et;a.add(Ee);let ze=Eh(1500),pe=new Nt,Ye=new Ps(.026,.038,.36,4,1,!1),Dt=new Ke({uniforms:{uTime:n,uOpacity:{value:.48},uColorA:{value:new de(3000768)},uColorB:{value:new de(16741559)}},vertexShader:Xd,fragmentShader:qd,transparent:!0,depthWrite:!1,blending:ft}),Xe=new ws(Ye,Dt,ze.length);Xe.frustumCulled=!1;for(let I=0;I<ze.length;I+=1){let B=ze[I];pe.position.copy(B).multiplyScalar(di+.03),pe.quaternion.setFromUnitVectors(rf,B),pe.rotateY(t()*xn);let k=.72+t()*.7;pe.scale.set(k,k,k),pe.updateMatrix(),Xe.setMatrixAt(I,pe.matrix)}Xe.instanceMatrix.needsUpdate=!0,Ee.add(Xe);let tt=new Float32Array(ze.length*3);for(let I=0;I<ze.length;I+=1){let B=ze[I].clone().multiplyScalar(di+.22);tt[I*3]=B.x,tt[I*3+1]=B.y,tt[I*3+2]=B.z}let gt=new lt;gt.setAttribute("position",new Mt(tt,3));let Qe=new Dn({color:10485745,size:.085,sizeAttenuation:!0,transparent:!0,opacity:.36,depthWrite:!1,blending:ft}),bt=new gn(gt,Qe);bt.frustumCulled=!1,Ee.add(bt);let Pt=new Et;a.add(Pt);let Yt=Eh(30),Tt=new Mi(.145,.42,5,12),Lt=new Wi(.27,.052,6,18),U=new rn(.085,10,8),Bt=[new $n({color:7337437,emissive:1740156,emissiveIntensity:.62,roughness:.3,metalness:.15,transmission:.28,thickness:.4,clearcoat:1,clearcoatRoughness:.2,transparent:!0,opacity:.78,envMapIntensity:1.05}),new $n({color:16758891,emissive:9257489,emissiveIntensity:.58,roughness:.28,metalness:.2,transmission:.24,thickness:.4,clearcoat:1,clearcoatRoughness:.16,transparent:!0,opacity:.78,envMapIntensity:1.05}),new $n({color:12488191,emissive:5515148,emissiveIntensity:.55,roughness:.32,metalness:.1,transmission:.2,thickness:.35,clearcoat:.9,clearcoatRoughness:.22,transparent:!0,opacity:.78,envMapIntensity:1})];for(let I=0;I<Yt.length;I+=1){let B=Yt[I],k=new Et;k.position.copy(B).multiplyScalar(di-.03),k.quaternion.setFromUnitVectors(rf,B),k.rotateY(t()*xn);let ge=.78+t()*.8;k.scale.setScalar(ge);let Ce=Bt[I%Bt.length],Fe=new Ze(Tt,Ce);Fe.position.y=.28,k.add(Fe);let ke=new Ze(Lt,Ce);ke.rotation.x=Math.PI*.5,ke.position.y=.02,k.add(ke);let ot=2+Math.floor(t()*3);for(let St=0;St<ot;St+=1){let fn=new Ze(U,Ce);fn.position.set((t()-.5)*.44,.7+t()*.4,(t()-.5)*.44),k.add(fn)}Pt.add(k)}let ct=180,w=new Float32Array(ct*3);for(let I=0;I<ct;I+=1){let k=on(t).multiplyScalar(di+.38+t()*.38);w.set([k.x,k.y,k.z],I*3)}let g=new lt;g.setAttribute("position",new Mt(w,3));let z=new Dn({color:16765327,size:.07,sizeAttenuation:!0,transparent:!0,opacity:.36,depthWrite:!1,blending:ft}),W=new gn(g,z);W.frustumCulled=!1,Pt.add(W);let Y=new Et;a.add(Y);let oe=3400,ce=new Float32Array(oe*3),J=new Float32Array(oe),ee=new Float32Array(oe);for(let I=0;I<oe;I+=1){let B=on(t),k=Math.pow(t(),.62)*(di-.45),ge=B.multiplyScalar(k);ce[I*3]=ge.x,ce[I*3+1]=ge.y,ce[I*3+2]=ge.z,J[I]=t(),ee[I]=.25+Math.pow(t(),3)*1.6}let ue=new lt;ue.setAttribute("position",new Mt(ce,3)),ue.setAttribute("aSeed",new Mt(J,1)),ue.setAttribute("aScale",new Mt(ee,1));let Ne=new Ke({uniforms:{uTime:n,uPixelRatio:s,uSize:{value:.38},uOpacity:{value:.48},uDrift:{value:.42}},vertexShader:yh,fragmentShader:Sh,transparent:!0,depthWrite:!1,blending:ft}),_e=new gn(ue,Ne);_e.frustumCulled=!1,Y.add(_e);let le=new Et;a.add(le);let Re=[],Oe=[],Ve=[],D=[],fe=[];for(let I=0;I<76;I+=1){let B=[],ge=on(t).multiplyScalar(2.9+t()*4.6);B.push(ge);let Ce=on(t).multiplyScalar(1.2+t()*2.3);B.push(ge.clone().multiplyScalar(.58).add(Ce));let Fe=on(t).multiplyScalar(2.8+t()*4.7);B.push(Fe);let ke=on(t).multiplyScalar(2.8+t()*4.7);B.push(ke);let ot=new Un(B,!1,"catmullrom",.5);Re.push(ot);let St=[];for(let pi=0;pi<140;pi+=1)St.push(ot.getPoint(pi/139));Oe.push(St);let fn=34,ln=t(),Aa=ot.getPoint(0);for(let pi=1;pi<fn;pi+=1){let Zh=pi/(fn-1),Ca=ot.getPoint(Zh);Ve.push(Aa.x,Aa.y,Aa.z,Ca.x,Ca.y,Ca.z),D.push((pi-1)/(fn-1),Zh),fe.push(ln,ln),Aa=Ca}}let j=new lt;j.setAttribute("position",new We(Ve,3)),j.setAttribute("aT",new We(D,1)),j.setAttribute("aSeed",new We(fe,1));let me=new Ke({uniforms:{uTime:n,uOpacity:{value:.3},uColorA:{value:new de(1820861)},uColorB:{value:new de(10420152)}},vertexShader:Mh,fragmentShader:bh,transparent:!0,depthWrite:!1,blending:ft}),ye=new Gi(j,me);ye.frustumCulled=!1,le.add(ye);let ie=new Mn({color:7995376,transparent:!0,opacity:.07,depthWrite:!1,blending:ft});for(let I=0;I<10;I+=1){let B=Re[Math.floor(t()*Re.length)],k=new Ze(new Xi(B,70,.016+t()*.018,4,!1),ie);le.add(k)}let Ue=new Mn({color:12035071,transparent:!0,opacity:.17,depthWrite:!1,blending:ft});for(let I=0;I<20;I+=1){let B=[],k=t()*xn;for(let Fe=0;Fe<4;Fe+=1){let ke=3.1+t()*4.3;k+=.4+t()*.75,B.push(new P(Math.cos(k)*ke,-3.8+t()*7.6,Math.sin(k)*ke))}let ge=new Un(B,!1,"catmullrom",.5),Ce=new Ze(new Xi(ge,72,.022+t()*.02,4,!1),Ue);le.add(Ce)}let Ae=240,dt=new Float32Array(Ae*3),at=[];for(let I=0;I<Ae;I+=1){let B=Math.floor(t()*Re.length);at.push({samples:Oe[B],offset:t(),speed:.012+t()*.035,radial:new P(t()-.5,t()-.5,t()-.5).multiplyScalar(.16)})}let nn=new lt;nn.setAttribute("position",new Mt(dt,3));let yn=new Dn({color:13172722,size:.105,sizeAttenuation:!0,transparent:!0,opacity:.5,depthWrite:!1,blending:ft}),la=new gn(nn,yn);la.frustumCulled=!1,le.add(la);let Bn=new Et;a.add(Bn);let ca=new Ke({uniforms:{uTime:n,uOpacity:{value:.92},uColorA:{value:new de(4922224)},uColorB:{value:new de(12797092)},uColorC:{value:new de(9434623)}},vertexShader:Yd,fragmentShader:Zd,transparent:!0,depthWrite:!0}),Ks=new Ze(new rn(2.5,96,64),ca);Bn.add(Ks);let Xl=new Ke({uniforms:{uTime:n,uOpacity:{value:.28},uColor:{value:new de(9397247)},uColorB:{value:new de(5633507)},uPower:{value:2.2}},vertexShader:Ys,fragmentShader:Zs,transparent:!0,depthWrite:!1,side:an,blending:ft}),Qs=new Ze(new rn(2.78,64,48),Xl);Bn.add(Qs);let ha=wv(.82,32,24,.07,3.1),Qn=new Zn({color:7151704,emissive:5049407,emissiveIntensity:1,roughness:.46,metalness:.1,transparent:!0,opacity:.84}),Ui=new Ze(ha,Qn);Ui.position.set(.62,.38,.22),Bn.add(Ui);let es=88,ua=new Wi(.105,.022,6,14),ts=new Mn({color:10214655,transparent:!0,opacity:.3,depthWrite:!1,blending:ft}),ns=new ws(ua,ts,es),is=Eh(es);for(let I=0;I<es;I+=1){let B=is[I];pe.position.copy(B).multiplyScalar(2.79),pe.quaternion.setFromUnitVectors(new P(0,0,1),B),pe.rotateZ(t()*xn),pe.scale.setScalar(.8+t()*.65),pe.updateMatrix(),ns.setMatrixAt(I,pe.matrix)}ns.instanceMatrix.needsUpdate=!0,Bn.add(ns);let jn=new Et;Bn.add(jn);let js=[],da=[],fa=[],pa=[];for(let I=0;I<34;I+=1){let B=[],ge=on(t).multiplyScalar(.5+t()*1.5);B.push(ge);for(let St=0;St<3;St+=1){let fn=on(t).multiplyScalar(.55+t()*1.6);B.push(fn)}let Ce=new Un(B,!1,"catmullrom",.55),Fe=30,ke=t(),ot=Ce.getPoint(0);for(let St=1;St<Fe;St+=1){let fn=St/(Fe-1),ln=Ce.getPoint(fn);js.push(ot.x,ot.y,ot.z,ln.x,ln.y,ln.z),da.push((St-1)/(Fe-1),fn),fa.push(ke,ke),ot=ln,pa.push(ln.x,ln.y,ln.z)}}let ss=new lt;ss.setAttribute("position",new We(js,3)),ss.setAttribute("aT",new We(da,1)),ss.setAttribute("aSeed",new We(fa,1));let ma=new Ke({uniforms:{uTime:n,uOpacity:{value:.3},uColorA:{value:new de(16735168)},uColorB:{value:new de(9141247)}},vertexShader:Mh,fragmentShader:bh,transparent:!0,depthWrite:!1,blending:ft}),x=new Gi(ss,ma);x.frustumCulled=!1,jn.add(x);let L=new lt;L.setAttribute("position",new We(pa,3));let q=new Dn({color:16751581,size:.028,sizeAttenuation:!0,transparent:!0,opacity:.42,depthWrite:!1,blending:ft}),H=new gn(L,q);H.frustumCulled=!1,jn.add(H);let G=new Ze(new Is(2.66,2),new Mn({color:9397247,wireframe:!0,transparent:!0,opacity:.025,depthWrite:!1,blending:ft}));jn.add(G);let ve=new ci(11820287,12,10,2);ve.position.set(0,0,0),Bn.add(ve);let Se=new Et;a.add(Se);let he=[[4.6,1.8,2.4],[5.6,-.8,1],[4.2,-2.2,3.8],[6.4,1,-1.2],[3.8,2.8,-2.6],[2,-4.2,2.2],[-3,4,3],[-5.2,-2.8,-2],[.5,5,1]],we=new Ke({uniforms:{uTime:n,uOpacity:{value:.76},uColorA:{value:new de(8007441)},uColorB:{value:new de(16752202)},uColorC:{value:new de(16770212)}},vertexShader:$d,fragmentShader:Jd,transparent:!0,depthWrite:!0}),Pe=new Ke({uniforms:{uTime:n,uOpacity:{value:.15},uColor:{value:new de(16754255)},uColorB:{value:new de(5437413)},uPower:{value:2.6}},vertexShader:Ys,fragmentShader:Zs,transparent:!0,depthWrite:!1,side:kt,blending:ft}),qe=new Mi(.42,1.5,6,18),Je=new Mi(.5,1.55,6,18);for(let I=0;I<he.length;I+=1){let B=new Et;B.position.fromArray(he[I]),B.rotation.set(t()*xn,t()*xn,t()*xn),B.scale.set(.8+t()*.45,.82+t()*.55,.8+t()*.45);let k=new Ze(qe,we);B.add(k);let ge=new Ze(Je,Pe);B.add(ge),Se.add(B)}let Te=520,rt=new Float32Array(Te*3),Ct=[];for(let I=0;I<Te;I+=1){let B=new P().fromArray(he[Math.floor(t()*he.length)]);Ct.push({center:B,angle:t()*xn,radius:.72+t()*.8,speed:.15+t()*.55,y:(t()-.5)*1.8})}let _t=new lt;_t.setAttribute("position",new Mt(rt,3));let vt=new Dn({color:8781810,size:.06,sizeAttenuation:!0,transparent:!0,opacity:.46,depthWrite:!1,blending:ft}),zt=new gn(_t,vt);zt.frustumCulled=!1,Se.add(zt);let be=96,Ut=new Float32Array(be*3),nt=new Float32Array(be),Gt=[];for(let I=0;I<be;I+=1)Gt.push({center:new P().fromArray(he[Math.floor(t()*he.length)]),dir:on(t),age:t()*3,life:2+t()*3,speed:.35+t()*.9}),nt[I]=Gt[I].age/Gt[I].life;let Jt=new lt;Jt.setAttribute("position",new Mt(Ut,3)),Jt.setAttribute("aLife",new Mt(nt,1));let zn=new Ke({uniforms:{uPixelRatio:s,uSize:{value:1.4},uOpacity:{value:.5}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:ft}),ei=new gn(Jt,zn);ei.frustumCulled=!1,Se.add(ei);let ht=new ci(16751687,20,16,2);ht.position.set(4.9,.2,1.8),Se.add(ht);let xt=new Et;a.add(xt);let An=new Ke({uniforms:{uTime:n,uOpacity:{value:.38},uColorA:{value:new de(1799531)},uColorB:{value:new de(16760947)}},vertexShader:Kd,fragmentShader:Qd,transparent:!0,depthWrite:!1,blending:ft}),mt=[];for(let I=0;I<13;I+=1){let B=[],k=t()*xn,ge=-1.8+t()*3.4,Ce=3.2+t()*1.7;for(let ot=0;ot<4;ot+=1){k+=.38+t()*.72;let St=Ce+Math.sin(k*2.1+I)*.5;B.push(new P(Math.cos(k)*St-.5,ge+Math.sin(k*1.3)*.5,Math.sin(k)*St)),ge+=(t()-.5)*1.2}let Fe=new Un(B,!1,"catmullrom",.5);mt.push(Fe);let ke=new Ze(new Xi(Fe,110,.038+t()*.045,6,!1),An);xt.add(ke)}let Cn=440,ti=new Float32Array(Cn*3);for(let I=0;I<Cn;I+=1){let k=mt[Math.floor(t()*mt.length)].getPoint(t()),ge=on(t).multiplyScalar(.03+t()*.07);k.add(ge),ti.set([k.x,k.y,k.z],I*3)}let er=new lt;er.setAttribute("position",new Mt(ti,3));let gf=new Dn({color:16767648,size:.045,sizeAttenuation:!0,transparent:!0,opacity:.42,depthWrite:!1,blending:ft}),Ph=new gn(er,gf);Ph.frustumCulled=!1,xt.add(Ph);let ga=new Et;ga.position.set(-3.35,-.25,.75),ga.rotation.set(.36,.85,.2),xt.add(ga);let _f=new Zn({color:16753234,emissive:10239244,emissiveIntensity:.7,roughness:.34,metalness:.16,transparent:!0,opacity:.55});for(let I=0;I<6;I+=1){let B=1.13-I*.08,k=Math.PI*(1.18+I*.025),ge=new Ze(new Wi(B,.048,8,80,k),_f);ge.position.z=(I-2.5)*.16,ge.rotation.z=-k*.5+Math.PI*.5,ga.add(ge)}let _a=[];for(let I=0;I<18;I+=1){let B=new P(-3.4+(t()-.5)*1.2,.3+(t()-.5)*1.2,1.1+(t()-.5)*1.2),k=new P(-3.5+(t()-.5)*.8,-.3+(t()-.5)*.8,1.1+(t()-.5)*.8),ge=B.clone().lerp(k,.5).add(on(t).multiplyScalar(.8));_a.push(new Un([B,ge,k]))}for(let I=0;I<22;I+=1){let B=new P(-3.5,-.25,.8),k=on(t);k.x=Math.abs(k.x)*.8+.1,k.z=Math.abs(k.z)*.8+.1;let ge=k.normalize().multiplyScalar(di-.2),Ce=B.clone().lerp(ge,.5).add(on(t).multiplyScalar(1.6));_a.push(new Un([B,Ce,ge]))}let vf=new rn(.115,12,9),xf=[new $n({color:16764807,emissive:13396511,emissiveIntensity:.9,roughness:.22,metalness:.05,transmission:.45,thickness:.2,transparent:!0,opacity:.62,envMapIntensity:1}),new $n({color:9437168,emissive:1346692,emissiveIntensity:.9,roughness:.2,metalness:.05,transmission:.4,thickness:.2,transparent:!0,opacity:.6,envMapIntensity:1})],Ih=[];for(let I=0;I<40;I+=1){let B=new Ze(vf,xf[I%2]),k=_a[I%_a.length],ge={mesh:B,route:k,offset:t(),speed:.018+t()*.03,phase:t()*xn};Ih.push(ge),xt.add(B)}let yf=new rn(.16,16,12),Sf=new Zn({color:14050674,emissive:7017762,emissiveIntensity:.72,roughness:.32,metalness:.08,transparent:!0,opacity:.78});for(let I=0;I<9;I+=1){let B=new Ze(yf,Sf);B.position.set(-3.5+(t()-.5)*1.9,-.55+(t()-.5)*1.7,.9+(t()-.5)*1.7),B.scale.setScalar(.75+t()*.9),xt.add(B)}let Fi=new Et;Fi.scale.setScalar(1.16),a.add(Fi);let Mf=new Mi(.075,.4,4,10),bf=[new Zn({color:16738996,emissive:11869551,emissiveIntensity:.7,roughness:.3,metalness:.15,transparent:!0,opacity:.85}),new Zn({color:7600639,emissive:1478300,emissiveIntensity:.7,roughness:.28,metalness:.16,transparent:!0,opacity:.85})],va=[];for(let I=0;I<14;I+=1){let B=I/14*xn+.12,k=new P((t()-.5)*.35,Math.cos(B)*1.28,Math.sin(B)*1.28);for(let ge of[-1,1]){let Ce=new Et,Fe=bf[ge>0?0:1];for(let ke=0;ke<2;ke+=1){let ot=new Ze(Mf,Fe);ot.rotation.z=(ke===0?1:-1)*.58,ot.position.x=(ke===0?1:-1)*.1,Ce.add(ot)}Ce.position.copy(k).add(new P(ge*.1,ge*.045,0)),Fi.add(Ce),va.push({group:Ce,meta:Ce.position.clone(),side:ge,phase:t()*xn,baseScale:.82+t()*.35})}}let Ef=new Float32Array(va.length*2*3),xa=new lt;xa.setAttribute("position",new Mt(Ef,3));let Lh=new Cs({color:8648959,transparent:!0,opacity:.2,depthWrite:!1,blending:ft}),Nh=new Gi(xa,Lh);Nh.frustumCulled=!1,Fi.add(Nh);let Tf=new Ke({uniforms:{uTime:n,uOpacity:{value:.55},uColor:{value:new de(8257520)},uColorB:{value:new de(16738996)},uPower:{value:2.1}},vertexShader:Ys,fragmentShader:Zs,transparent:!0,depthWrite:!1,blending:ft}),ql=[];for(let I of[-4.8,4.8]){let B=new Ze(new rn(.22,18,12),Tf);B.position.set(I,0,0),Fi.add(B),ql.push(B)}let wf=new Ke({uniforms:{uTime:n,uOpacity:{value:.28},uColor:{value:new de(9075967)},uColorB:{value:new de(7012317)},uPower:{value:2.3}},vertexShader:Ys,fragmentShader:Zs,transparent:!0,depthWrite:!1,side:an,blending:ft}),Yl=[];for(let I of[-3.8,3.8]){let B=new Ze(new rn(.95,32,24),wf);B.position.set(I,0,0),B.scale.setScalar(.01),Fi.add(B),Yl.push(B)}_("membrane",Le),_("lipids",Ee),_("proteins",Pt),_("particles",Y),_("cytoskeleton",le),_("nucleus",Bn),_("mitochondria",Se),_("endomembrane",xt),_("mitosis",Fi);let ae={time:0,chapter:0,chapterStart:0,paused:!1,brightness:.58,flash:1,yaw:0,yawTarget:0,pitch:0,pitchTarget:0,pointerX:0,pointerY:0,pointerTargetX:0,pointerTargetY:0,zoom:1,zoomTarget:1,distanceScale:1,dragging:!1,dragDistance:0,lastPointerX:0,lastPointerY:0},ya=new P().fromArray(tn[0].camera.pos),Oi=new P().fromArray(tn[0].camera.target),Af=new P,Dh=new P,Sa=new P,tr=new P,Ma=tn[0].camera.fov;for(let I of R.values())I.weight=xh[I.name][ae.chapter],I.target=I.weight,E(I,I.weight);function Uh(I,B=!1){let k=un(I,0,tn.length-1);ae.chapter=k,ae.chapterStart=ae.time,ae.flash=1,ae.yawTarget=0,ae.pitchTarget=0,ae.zoomTarget=1,ae.pointerTargetX=0,ae.pointerTargetY=0,ya.fromArray(tn[k].camera.pos),Oi.fromArray(tn[k].camera.target),Ma=tn[k].camera.fov;for(let ge of R.values())ge.target=xh[ge.name][k],B&&(ge.weight=ge.target,E(ge,ge.weight));B&&(h.position.copy(ya),Sa.copy(Oi),h.lookAt(Sa),h.fov=Ma,h.updateProjectionMatrix())}function Cf(I){let B=1-Math.exp(-I*1.55);for(let k of R.values())Math.abs(k.target-k.weight)<6e-4||(k.weight+=(k.target-k.weight)*B,E(k,k.weight))}function Fh(I){let B=un(Number(I)||.58,.3,1);ae.brightness=B,o.toneMappingExposure=.55+B*.5,p.strength=.14+B*.46}function Rf(I){ae.yaw+=(ae.yawTarget-ae.yaw)*(1-Math.exp(-I*4)),ae.pitch+=(ae.pitchTarget-ae.pitch)*(1-Math.exp(-I*4)),ae.zoom+=(ae.zoomTarget-ae.zoom)*(1-Math.exp(-I*3.2)),ae.pointerX+=(ae.pointerTargetX-ae.pointerX)*(1-Math.exp(-I*2.5)),ae.pointerY+=(ae.pointerTargetY-ae.pointerY)*(1-Math.exp(-I*2.5));let B=ya.distanceTo(Oi),k=Math.max(1.4,B*un(ae.zoom,.42,1.75)*ae.distanceScale),ge=Af.copy(Oi);tr.copy(ya).sub(Oi),tr.normalize().multiplyScalar(k),tr.applyAxisAngle(bv,ae.yaw),tr.applyAxisAngle(Mv,ae.pitch),ge.copy(Oi).add(tr);let Ce=ae.dragging?0:un((k-5.5)/16,0,1);ge.x+=ae.pointerX*k*.018*Ce+Math.sin(ae.time*.21)*.05,ge.y+=-ae.pointerY*k*.013*Ce+Math.cos(ae.time*.17)*.04,h.position.lerp(ge,1-Math.exp(-I*1.5)),Dh.copy(Oi),Sa.lerp(Dh,1-Math.exp(-I*1.6)),h.lookAt(Sa),h.fov+=(Ma-h.fov)*(1-Math.exp(-I*1.4)),h.updateProjectionMatrix()}function Pf(I){let B=1+Math.sin(ae.time*.64)*.006;pt.scale.setScalar(B),st.scale.setScalar(B)}function If(I){jn.rotation.y+=I*.018,jn.rotation.x=Math.sin(ae.time*.09)*.12,Ui.rotation.y+=I*.05,Qs.rotation.y-=I*.012}function Lf(){for(let I=0;I<at.length;I+=1){let B=at[I],k=(B.offset+ae.time*B.speed)%1;if(!Number.isFinite(k)||!B.samples||B.samples.length<2)continue;let ge=Math.max(0,Math.min(1,k))*(B.samples.length-1),Ce=Math.floor(ge),Fe=Math.min(B.samples.length-1,Ce+1),ke=ge-Ce,ot=B.samples[Ce],St=B.samples[Fe];dt[I*3]=ot.x+(St.x-ot.x)*ke+B.radial.x,dt[I*3+1]=ot.y+(St.y-ot.y)*ke+B.radial.y,dt[I*3+2]=ot.z+(St.z-ot.z)*ke+B.radial.z}nn.attributes.position.needsUpdate=!0}function Nf(I){for(let B=0;B<Ct.length;B+=1){let k=Ct[B],ge=k.angle+ae.time*k.speed,Ce=k.radius*(.82+Math.sin(ae.time*.4+k.angle)*.14);rt[B*3]=k.center.x+Math.cos(ge)*Ce,rt[B*3+1]=k.center.y+k.y+Math.sin(ge*1.7)*.35,rt[B*3+2]=k.center.z+Math.sin(ge)*Ce}_t.attributes.position.needsUpdate=!0;for(let B=0;B<Gt.length;B+=1){let k=Gt[B];k.age+=I,k.age>k.life&&(k.age=0,k.dir=on(t),k.center.fromArray(he[Math.floor(t()*he.length)]));let ge=un(k.age/k.life,0,1),Ce=k.center.clone().addScaledVector(k.dir,k.age*k.speed);Ut[B*3]=Ce.x,Ut[B*3+1]=Ce.y+Math.sin(k.age*1.7+B)*.1,Ut[B*3+2]=Ce.z,nt[B]=ge}Jt.attributes.position.needsUpdate=!0,Jt.attributes.aLife.needsUpdate=!0,ht.intensity=15+Math.sin(ae.time*1.7)*5}function Df(){let I=ae.time;for(let B of Ih){let k=(B.offset+I*B.speed)%1;if(!Number.isFinite(k))continue;let ge=B.route.getPoint(k);B.mesh.position.copy(ge);let Ce=.3+.95*Math.sin(Math.PI*k);B.mesh.scale.setScalar(Ce),B.mesh.rotation.y+=.008,B.mesh.rotation.x+=.004}An.uniforms.uTime.value=I}let Oh=new P,ba=new P;function Uf(){if(ae.chapter!==6)return;let I=Math.max(0,ae.time-ae.chapterStart)%12,B=Th(0,2.6,I),k=Th(5.2,9.4,I),ge=Th(7.4,10.8,I),Ce=xa.attributes.position.array;for(let Fe=0;Fe<va.length;Fe+=1){let ke=va[Fe],ot=ke.side*(3.45+.22*Math.sin(ke.phase));Oh.set(ot,ke.meta.y*.78,ke.meta.z*.78),ke.group.position.lerpVectors(ke.meta,Oh,k),ke.group.position.y+=Math.sin(I*2+ke.phase)*.045,ke.group.position.z+=Math.cos(I*1.7+ke.phase)*.045;let St=.28+.72*B;ke.group.scale.setScalar(St*ke.baseScale),ke.group.rotation.z=Math.sin(ke.phase+k*1.8)*.34,ba.set(ke.side*4.8,0,0),Ce[Fe*6]=ba.x,Ce[Fe*6+1]=ba.y,Ce[Fe*6+2]=ba.z,Ce[Fe*6+3]=ke.group.position.x,Ce[Fe*6+4]=ke.group.position.y,Ce[Fe*6+5]=ke.group.position.z}xa.attributes.position.needsUpdate=!0,Lh.opacity=.07+.17*B;for(let Fe=0;Fe<Yl.length;Fe+=1){let ke=.01+ge*(.92+Math.sin(ae.time*1.6+Fe)*.05);Yl[Fe].scale.setScalar(ke)}ql[0].scale.setScalar(.85+Math.sin(ae.time*2.2)*.12),ql[1].scale.setScalar(.85+Math.cos(ae.time*2.1)*.12)}let Zl=0,Ea=!1,Bh=!1,zh=performance.now();function kh(I){if(!(I.button!==void 0&&I.button!==0)&&(ae.dragging=!0,ae.dragDistance=0,ae.lastPointerX=I.clientX,ae.lastPointerY=I.clientY,ae.pointerTargetX=0,ae.pointerTargetY=0,o.domElement.setPointerCapture))try{o.domElement.setPointerCapture(I.pointerId)}catch{}}function Hh(I){let B=i.getBoundingClientRect();if(B.width>0&&B.height>0&&(ae.pointerTargetX=un((I.clientX-B.left)/B.width*2-1,-1,1),ae.pointerTargetY=un((I.clientY-B.top)/B.height*2-1,-1,1)),!ae.dragging)return;let k=I.clientX-ae.lastPointerX,ge=I.clientY-ae.lastPointerY;ae.lastPointerX=I.clientX,ae.lastPointerY=I.clientY,ae.dragDistance+=Math.abs(k)+Math.abs(ge),!(ae.dragDistance<3)&&(ae.yawTarget=un(ae.yawTarget+k*.0021,-.8,.8),ae.pitchTarget=un(ae.pitchTarget+ge*.0016,-.22,.22))}function Ta(I){if(ae.dragging=!1,o.domElement.releasePointerCapture&&I.pointerId!==void 0)try{o.domElement.releasePointerCapture(I.pointerId)}catch{}}function Vh(){ae.pointerTargetX=0,ae.pointerTargetY=0}function Gh(I){I.preventDefault();let B=I.deltaMode===1?I.deltaY*16:I.deltaMode===2?I.deltaY*400:I.deltaY,k=un(B*.0012,-.18,.18);ae.zoomTarget=un(ae.zoomTarget*Math.exp(k),.42,1.75)}function Wh(I){I.preventDefault(),Xh()}function Xh(){ae.yawTarget=0,ae.pitchTarget=0,ae.zoomTarget=1,ae.pointerTargetX=0,ae.pointerTargetY=0}o.domElement.addEventListener("pointerdown",kh),o.domElement.addEventListener("pointermove",Hh),o.domElement.addEventListener("pointerup",Ta),o.domElement.addEventListener("pointercancel",Ta),o.domElement.addEventListener("pointerleave",Vh),o.domElement.addEventListener("wheel",Gh,{passive:!1}),o.domElement.addEventListener("dblclick",Wh);function nr(){if(Ea)return;let I=Math.max(1,i.clientWidth),B=Math.max(1,i.clientHeight),k=Math.min(window.devicePixelRatio||1,1.5);o.setPixelRatio(k),o.setSize(I,B,!0),f.setPixelRatio(k),f.setSize(I,B),h.aspect=I/B,h.updateProjectionMatrix(),s.value=k,v.uniforms.uResolution.value.set(I*k,B*k)}let wa=typeof ResizeObserver<"u"?new ResizeObserver(nr):null;wa&&wa.observe(i),window.addEventListener("resize",nr);function qh(){requestAnimationFrame(nr)}document.addEventListener("fullscreenchange",qh),nr();function Yh(I){if(Ea||(Zl=requestAnimationFrame(Yh),Bh))return;let B=Math.min((I-zh)/1e3,.05);zh=I;let k=ae.paused?.14:1;ae.time+=B*k,n.value=ae.time,v.uniforms.uTime.value=ae.time,ae.flash=Math.max(0,ae.flash-B*1.8),v.uniforms.uFlash.value=ae.flash*.45,v.uniforms.uGrain.value=ae.paused?.016:.022,ae.paused||(a.rotation.y+=B*.013,C.rotation.y+=B*.0035,te.rotation.y+=B*.006,Z.rotation.y+=B*.002),Cf(B),Rf(B),Pf(B),If(B),Lf(),Nf(B*k),Df(),Uf();try{f.render()}catch(ge){Bh=!0,typeof e.onError=="function"&&e.onError(ge);return}e.didRender||(e.didRender=!0,typeof e.onReady=="function"&&e.onReady())}Uh(0,!0),Fh(ae.brightness),h.aspect=Math.max(1,i.clientWidth)/Math.max(1,i.clientHeight),h.fov=Ma,h.updateProjectionMatrix(),v.uniforms.uResolution.value.set(Math.max(1,i.clientWidth)*l,Math.max(1,i.clientHeight)*l),Zl=requestAnimationFrame(Yh);function Ff(){if(Ea)return;Ea=!0,cancelAnimationFrame(Zl),o.domElement.removeEventListener("pointerdown",kh),o.domElement.removeEventListener("pointermove",Hh),o.domElement.removeEventListener("pointerup",Ta),o.domElement.removeEventListener("pointercancel",Ta),o.domElement.removeEventListener("pointerleave",Vh),o.domElement.removeEventListener("wheel",Gh),o.domElement.removeEventListener("dblclick",Wh),window.removeEventListener("resize",nr),document.removeEventListener("fullscreenchange",qh),wa&&wa.disconnect();let I=new Set,B=new Set;c.traverse(k=>{if(k.geometry&&I.add(k.geometry),k.material){let ge=Array.isArray(k.material)?k.material:[k.material];for(let Ce of ge)Ce&&B.add(Ce)}});for(let k of I)try{k.dispose()}catch{}for(let k of B)try{k.map&&k.map.dispose(),k.dispose()}catch{}m&&m.dispose();try{p.dispose()}catch{}try{f.dispose()}catch{}o.dispose();try{o.forceContextLoss()}catch{}o.domElement.parentNode===i&&i.removeChild(o.domElement)}return{setChapter(I){Uh(I,!1)},setPaused(I){ae.paused=!!I},setBrightness(I){Fh(I)},setDistanceScale(I){ae.distanceScale=un(Number(I)||1,.6,3)},resetView(){Xh()},pulse(){ae.flash=Math.min(1.6,ae.flash+.9)},getChapter(){return ae.chapter},dispose:Ff,renderer:o,scene:c}}var oa=tn.length,Av={close:'<path d="M6 6 18 18M18 6 6 18"/>',prev:'<path d="m14.5 6-6 6 6 6"/><path d="M6.5 6v12" opacity=".4"/>',next:'<path d="m9.5 6 6 6-6 6"/><path d="M17.5 6v12" opacity=".4"/>',play:'<path d="M8.5 5.8 18 12l-9.5 6.2Z" fill="currentColor" stroke="none"/>',pause:'<path d="M8.5 6v12M15.5 6v12"/>',book:'<path d="M4 5.2c2.7-.9 5.3-.9 8 1.1v13c-2.7-2-5.3-2-8-1.1Z"/><path d="M20 5.2c-2.7-.9-5.3-.9-8 1.1v13c2.7-2 5.3-2 8-1.1Z"/><path d="M12 6.3v13" opacity=".5"/>',sun:'<circle cx="12" cy="12" r="3.6"/><path d="M12 3.2v2.1M12 18.7v2.1M3.2 12h2.1M18.7 12h2.1M5.8 5.8l1.5 1.5M16.7 16.7l1.5 1.5M18.2 5.8l-1.5 1.5M7.3 16.7l-1.5 1.5"/>',reset:'<circle cx="12" cy="12" r="3.2"/><path d="M12 3v3.4M12 17.6V21M3 12h3.4M17.6 12H21"/><path d="M6.2 6.2a8.2 8.2 0 0 1 11.6 0" opacity=".45"/>',expand:'<path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"/>',collapse:'<path d="M4 9h5V4M20 9h-5V4M4 15h5v5M20 15h-5v5"/>',arrow:'<path d="M4 12h15M13 6l6 6-6 6"/>',plus:'<path d="M12 6v12M6 12h12"/>',minus:'<path d="M6 12h12"/>'};function It(i,e=18){return`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Av[i]||""}</svg>`}var Cv=`
<svg class="brand-mark-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
  <circle cx="32" cy="32" r="25" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="1.5 4"/>
  <circle cx="32" cy="32" r="19" stroke="currentColor" stroke-opacity=".6" stroke-width="1.1"/>
  <ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(-28 32 32)" stroke="#7ff7e4" stroke-opacity=".7" stroke-width="1.1"/>
  <path d="M17 41c6-3 10-9 15-10 6-1 9 5 16 3" stroke="currentColor" stroke-opacity=".4" stroke-width="1.1" stroke-linecap="round"/>
  <circle cx="32" cy="32" r="7.4" fill="#7ff7e4" fill-opacity=".16" stroke="#7ff7e4"/>
  <circle cx="32" cy="32" r="2.5" fill="#7ff7e4"/>
  <circle cx="45" cy="26" r="1.6" fill="#ff9fc9"/><circle cx="21" cy="37" r="1.2" fill="#ffd08a"/>
</svg>`,hf=document.getElementById("app");hf.innerHTML=`
  <div id="stage" class="stage"></div>
  <div class="loading" id="loading"><span class="loading-dot"></span> CALIBRATING OPTICAL FIELD <span class="loading-line"><i></i></span></div>
  <div class="grain"></div><div class="scanlines"></div><div class="vignette"></div>
  <div class="frame" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
  <div class="reticle" aria-hidden="true"></div>
  <div class="hud">
    <header class="hud-head">
      <div class="brand">${Cv}<div><div class="wordmark">CELL <b>ATLAS</b></div><div class="brand-cn">\u7EC6\u80DE\u56FE\u8C31 \xB7 \u4E00\u6B21\u5173\u4E8E\u8FB9\u754C\u7684\u6F2B\u6E38</div></div></div>
      <div class="top-readout"><span class="live-dot"></span><span>LIVE SPECIMEN</span><span class="slash">/</span><span id="readout">WHOLE CELL</span></div>
      <div class="hud-right">
        <a class="book-link" href="./textbook.html" aria-label="\u6253\u5F00\u5168\u4E66\u5206\u8282" title="\u5168\u4E66\u5206\u8282 \xB7 16\u7AE044\u8282">${It("book",15)}</a>
        <button class="study-btn" id="studyBtn" aria-expanded="false" title="\u5B66\u4E60\u624B\u518C \xB7 T">${It("book",15)}<span>\u5B66\u4E60\u624B\u518C</span></button>
        <div class="counter"><b id="chapterNo">01</b><span>/ ${String(oa).padStart(2,"0")}</span></div>
        <button class="icon-btn" id="fullBtn" aria-label="\u5168\u5C4F" title="\u5168\u5C4F">${It("expand")}</button>
      </div>
    </header>
    <main class="main">
      <div class="stage-readout" id="stageReadout">WHOLE CELL / OPTICAL DARKFIELD</div>
      <article class="caption" id="caption">
        <div class="kicker"><span class="kicker-line"></span><span id="kicker">PROLOGUE / \u5E8F\u7AE0</span></div>
        <h1 id="title">\u7EC6\u80DE\uFF0C\u662F\u4E00\u4E2A\u5B87\u5B99</h1>
        <div class="en" id="en">THE CELL AS A MICROCOSM</div>
        <button class="textbook" id="textbookChip">
          <span class="textbook-icon">${It("book",18)}</span>
          <span class="textbook-copy"><b>\u5B66\u4E60\u624B\u518C</b><em id="textbookLabel">\u6559\u6750\u5BF9\u7167 \xB7 \u7B2C\u4E00\u7AE0 \u7EEA\u8BBA \xB7 pp.1\u201317</em><i>\u5B66\u4E60\u76EE\u6807 / \u673A\u5236\u62C6\u89E3 / \u81EA\u6D4B</i></span>
          <span class="key">T</span>${It("arrow",14)}
        </button>
        <p class="body" id="body"></p>
        <div class="facts" id="facts"></div>
      </article>
      <nav class="rail" id="rail" aria-label="\u7AE0\u8282"></nav>
      <div class="spine" aria-hidden="true"><span>HOMO SAPIENS</span><span>CELLULAR SPECIMEN / 001</span></div>
    </main>
    <footer class="hud-foot">
      <div class="auto"><span class="auto-dot" id="autoDot"></span><span id="autoLabel">\u81EA\u52A8\u6F2B\u6E38</span><span class="hint"><kbd>T</kbd> \u5B66\u4E60\u624B\u518C</span></div>
      <div class="timeline" id="timeline"></div>
      <div class="controls">
        <label class="lum" title="\u4EAE\u5EA6">
          ${It("sun",13)}
          <input id="lum" type="range" min="30" max="100" step="1" value="44" aria-label="\u4EAE\u5EA6" />
          <span id="lumValue">44</span>
        </label>
        <button class="ctrl" id="resetBtn" aria-label="\u91CD\u7F6E\u89C6\u89D2" title="\u91CD\u7F6E\u89C6\u89D2\uFF08R\uFF09">${It("reset")}</button>
        <button class="ctrl" id="prevBtn" aria-label="\u4E0A\u4E00\u7AE0" title="\u4E0A\u4E00\u7AE0">${It("prev")}</button>
        <button class="ctrl ctrl-primary" id="playBtn" aria-label="\u6682\u505C" title="\u6682\u505C">${It("pause")}</button>
        <button class="ctrl" id="nextBtn" aria-label="\u4E0B\u4E00\u7AE0" title="\u4E0B\u4E00\u7AE0">${It("next")}</button>
      </div>
    </footer>
  </div>
  <section class="intro" id="intro" aria-label="Cell Atlas \u4F7F\u7528\u8BF4\u660E">
    <div class="intro-grid"></div>
    <div class="intro-inner">
      <div class="intro-step" id="introStepOne">
        <div class="intro-welcome">\u6B22\u8FCE\u6765\u5230\u7EC6\u80DE\u7684\u4E16\u754C</div>
        <div class="intro-eyebrow">AN INTERACTIVE CELL ATLAS \xB7 MMXXVI</div>
        <div class="intro-title"><span>CELL</span><i>/</i><em>ATLAS</em></div>
        <div class="intro-cn">\u7EC6\u80DE\u56FE\u8C31</div>
        <div class="intro-sub">\u4E00\u573A\u4ECE\u8D28\u819C\u5230\u57FA\u56E0\u7EC4\u7684\u4E03\u5E55\u89C6\u89C9\u6F2B\u6E38</div>
        <div class="intro-quick">
          <div><kbd>T</kbd><b>\u5B66\u4E60\u624B\u518C</b><em>\u76EE\u6807 \xB7 \u6982\u5FF5 \xB7 \u673A\u5236 \xB7 \u81EA\u6D4B</em></div>
          <div><kbd>B</kbd><b>\u5168\u4E66\u5206\u8282</b><em>16 \u7AE0 \xB7 44 \u8282 \xB7 3D \u6A21\u578B</em></div>
          <div><kbd>\u2194</kbd><b>\u81EA\u7531\u89C2\u5BDF</b><em>\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E</em></div>
        </div>
        <div class="intro-actions">
          <button class="enter" id="guideNext"><span>\u5148\u770B\u4F7F\u7528\u8BF4\u660E</span>${It("arrow",15)}</button>
          <span class="intro-count">01 / 03</span>
        </div>
      </div>

      <div class="intro-step intro-guide" id="introStepTwo" hidden>
        <div class="intro-eyebrow">HOW TO USE / \u4F7F\u7528\u8BF4\u660E</div>
        <h2 class="guide-title">\u6309 <kbd>T</kbd>\uFF0C\u6253\u5F00\u5B66\u4E60\u624B\u518C</h2>
        <div class="guide-grid">
          <div class="guide-mock" aria-hidden="true">
            <div class="guide-mock-head">
              <span>STUDY NOTES</span><b>\u5B66\u4E60\u624B\u518C</b><kbd>T</kbd>
            </div>
            <div class="guide-mock-body">
              <div class="guide-mini-label">\u5B66\u4E60\u76EE\u6807</div>
              <p>\u8BF4\u51FA\u6D41\u52A8\u9576\u5D4C\u6A21\u578B\uFF0C\u5E76\u89E3\u91CA\u652F\u6301\u5B83\u7684\u5B9E\u9A8C\u8BC1\u636E\u3002</p>
              <div class="guide-mini-label">\u6838\u5FC3\u6982\u5FF5</div>
              <p>\u78F7\u8102\u53CC\u5206\u5B50\u5C42 / \u6574\u5408\u819C\u86CB\u767D / \u819C\u7684\u4E0D\u5BF9\u79F0\u6027</p>
              <div class="guide-mini-label">\u673A\u5236\u62C6\u89E3</div>
              <p>\u819C\u8102\u6D41\u52A8\u6027 \u2192 \u86CB\u767D\u8FD0\u52A8 \u2192 \u9009\u62E9\u900F\u8FC7\u4E0E\u4FE1\u53F7\u63A5\u6536</p>
              <div class="guide-mini-label">\u6613\u9519\u70B9</div>
              <p>\u6D41\u52A8\u6027\u4E0D\u662F\u201C\u6240\u6709\u86CB\u767D\u90FD\u80FD\u81EA\u7531\u6F02\u79FB\u201D\uFF0C\u819C\u9AA8\u67B6\u548C\u8FDE\u63A5\u4F1A\u9650\u5236\u8FD0\u52A8\u3002</p>
              <div class="guide-mini-label">\u81EA\u6D4B</div>
              <p>\u4E3A\u4EC0\u4E48\u80C6\u56FA\u9187\u5BF9\u819C\u6D41\u52A8\u6027\u6709\u53CC\u5411\u8C03\u8282\uFF1F</p>
            </div>
          </div>
          <div class="guide-copy">
            <div class="guide-block">
              <div class="guide-block-no">01</div>
              <div><b>T \u6253\u5F00\u7684\u62BD\u5C49\u91CC\u6709\u4EC0\u4E48</b><p>\u5B66\u4E60\u76EE\u6807\u3001\u6838\u5FC3\u6982\u5FF5\u3001\u673A\u5236\u62C6\u89E3\u3001\u6613\u9519\u70B9\u3001\u753B\u9762\u56FE\u4F8B\u3001\u76F8\u5173\u7AE0\u8282\uFF0C\u4EE5\u53CA\u53EF\u5C55\u5F00\u7684\u81EA\u6D4B\u7B54\u6848\uFF1B\u6BCF\u9875\u90FD\u5E26\u6559\u6750\u9875\u7801\u3002</p></div>
            </div>
            <div class="guide-block">
              <div class="guide-block-no">02</div>
              <div><b>\u4ECE\u54EA\u91CC\u6253\u5F00</b><p>\u6309 T\uFF1B\u70B9\u53F3\u4E0A\u89D2\u7684\u300C\u5B66\u4E60\u624B\u518C\u300D\uFF1B\u6216\u70B9\u7AE0\u8282\u6807\u9898\u4E0B\u65B9\u7684\u300C\u5B66\u4E60\u624B\u518C \xB7 \u6559\u6750\u5BF9\u7167\u300D\u5927\u6309\u94AE\u3002\u5173\u95ED\u540E\u56DE\u5230\u539F\u4F4D\u3002</p></div>
            </div>
            <div class="guide-block">
              <div class="guide-block-no">03</div>
              <div><b>\u81EA\u52A8\u6F2B\u6E38\u4F1A\u6682\u505C</b><p>\u6253\u5F00\u624B\u518C\u3001\u5168\u4E66\u5206\u8282\u6216 3D \u6A21\u578B\u65F6\uFF0C\u53F3\u4E0B\u89D2\u7684\u81EA\u52A8\u6F2B\u6E38\u4F1A\u6682\u505C\uFF1B\u5173\u95ED\u540E\u624B\u52A8\u7EE7\u7EED\u3002</p></div>
            </div>
          </div>
        </div>
        <div class="intro-actions">
          <button class="intro-secondary" id="guideBack">\u2190 \u8FD4\u56DE</button>
          <button class="enter" id="guideNextTwo"><span>\u4E0B\u4E00\u6B65\uFF1A\u5168\u4E66\u4E0E\u64CD\u4F5C</span>${It("arrow",15)}</button>
          <span class="intro-count">02 / 03</span>
        </div>
      </div>

      <div class="intro-step intro-guide intro-controls" id="introStepThree" hidden>
        <div class="intro-eyebrow">NAVIGATION & CONTROLS / \u5168\u4E66\u4E0E\u64CD\u4F5C</div>
        <h2 class="guide-title">\u6309 <kbd>B</kbd>\uFF0C\u8FDB\u5165 16 \u7AE0 44 \u8282</h2>
        <div class="controls-grid">
          <div class="guide-mock book-mock" aria-hidden="true">
            <div class="guide-mock-head"><span>BOOK INDEX</span><b>\u5168\u4E66\u5206\u8282</b><kbd>B</kbd></div>
            <div class="book-mock-body">
              <div class="book-row"><span>01</span>\u7EEA\u8BBA<em>2 \u8282</em></div>
              <div class="book-row"><span>02</span>\u7EC6\u80DE\u751F\u7269\u5B66\u7814\u7A76\u65B9\u6CD5<em>4 \u8282</em></div>
              <div class="book-row is-active"><span>03</span>\u7EC6\u80DE\u8D28\u819C<em>2 \u8282</em></div>
              <div class="book-row"><span>04</span>\u7269\u8D28\u7684\u8DE8\u819C\u8FD0\u8F93<em>3 \u8282</em></div>
              <div class="book-row"><span>05</span>\u7EC6\u80DE\u8D28\u57FA\u8D28\u4E0E\u5185\u819C\u7CFB\u7EDF<em>2 \u8282</em></div>
              <div class="book-row"><span>06</span>\u86CB\u767D\u8D28\u5206\u9009\u4E0E\u819C\u6CE1\u8FD0\u8F93<em>2 \u8282</em></div>
              <div class="book-section-mini"><span>\u7B2C\u4E00\u8282</span>\u7EC6\u80DE\u8D28\u819C\u7684\u7ED3\u6784\u6A21\u578B\u4E0E\u57FA\u672C\u6210\u5206<em>3D \u6A21\u578B</em></div>
            </div>
          </div>
          <div class="guide-copy">
            <div class="guide-block">
              <div class="guide-block-no">01</div>
              <div><b>\u5DE6\u4FA7\u7AE0\u8282\uFF0C\u53F3\u4FA7\u5C0F\u8282</b><p>\u6309 B \u6216\u70B9\u53F3\u4E0A\u89D2\u4E66\u672C\u56FE\u6807\u6253\u5F00\u5168\u4E66\u3002\u5DE6\u4FA7 16 \u7AE0\u53EF\u4EE5\u5207\u6362\uFF0C\u53F3\u4FA7\u5217\u51FA\u6BCF\u4E00\u8282\uFF1B\u641C\u7D22\u6846\u53EF\u7B5B\u7AE0\u8282\u548C\u5C0F\u8282\u3002</p></div>
            </div>
            <div class="guide-block">
              <div class="guide-block-no">02</div>
              <div><b>\u6BCF\u8282\u90FD\u6709\u5B8C\u6574\u5B66\u4E60\u5361</b><p>\u6559\u6750\u9875\u7801\u3001\u5C0F\u8282\u63D0\u7EB2\u3001\u5185\u5BB9\u5B9A\u4F4D\u3001\u673A\u5236\u8981\u70B9\u3001\u5173\u952E\u672F\u8BED\u3001\u53EF\u5C55\u5F00\u81EA\u6D4B\uFF1B\u9875\u9762\u652F\u6301\u76F4\u63A5\u6253\u5370\u3002</p></div>
            </div>
            <div class="guide-block">
              <div class="guide-block-no">03</div>
              <div><b>\u6A21\u578B\u540D\u5B57\u5C31\u662F\u5165\u53E3</b><p>\u7AE0\u8282\u9876\u90E8\u548C\u6BCF\u4E2A\u5C0F\u8282\u4F1A\u663E\u793A 3D \u6A21\u578B\u540D\u79F0\uFF08\u7ED3\u6784 + \u5B9E\u9A8C\u65B9\u6CD5\uFF09\u3002\u70B9\u51FB\u540D\u79F0\u76F4\u63A5\u89C2\u5BDF\uFF0C\u5173\u95ED\u540E\u56DE\u5230\u8BE5\u5C0F\u8282\u3002</p></div>
            </div>
            <div class="guide-block">
              <div class="guide-block-no">04</div>
              <div><b>\u89C2\u5BDF\u52A8\u4F5C\u4E0E\u4EAE\u5EA6</b><p>\u62D6\u52A8\u65CB\u8F6C\u3001\u6EDA\u8F6E\u7F29\u653E\u3001\u53CC\u51FB\u91CD\u7F6E\uFF1B\u6A21\u578B\u9875\u53F3\u4E0B\u89D2\u6709 20\u201370 \u7684\u4EAE\u5EA6\u6ED1\u6746\uFF0C\u4E3B\u573A\u666F\u4E5F\u53EF\u7528 \u2212 / = \u8C03\u4EAE\u5EA6\u3002</p></div>
            </div>
          </div>
        </div>
        <div class="intro-keymap">
          <div><kbd>\u2190</kbd><kbd>\u2192</kbd><b>\u5207\u6362\u7AE0\u8282</b></div>
          <div><kbd>Space</kbd><b>\u6682\u505C / \u7EE7\u7EED</b></div>
          <div><kbd>T</kbd><b>\u5B66\u4E60\u624B\u518C</b></div>
          <div><kbd>B</kbd><b>\u5168\u4E66\u5206\u8282</b></div>
          <div><kbd>F</kbd><b>\u5168\u5C4F</b></div>
          <div><kbd>R</kbd><b>\u91CD\u7F6E\u89C6\u89D2</b></div>
          <div><kbd>\u2212</kbd><kbd>=</kbd><b>\u964D\u4F4E / \u63D0\u9AD8\u4EAE\u5EA6</b></div>
          <div><kbd>\u53CC\u51FB</kbd><b>\u91CD\u7F6E\u89C6\u89D2</b></div>
        </div>
        <div class="intro-actions">
          <button class="intro-secondary" id="guideBackTwo">\u2190 \u8FD4\u56DE</button>
          <button class="enter" id="enterBtn"><span>\u8FDB\u5165\u7EC6\u80DE</span>${It("arrow",15)}</button>
          <span class="intro-count">03 / 03</span>
        </div>
      </div>
    </div>
    <div class="intro-skip">\u6309 T \u5B66\u4E60\u624B\u518C \xB7 B \u5168\u4E66\u5206\u8282 \xB7 \u62D6\u52A8\u65CB\u8F6C</div>
  </section>
  <div class="study-backdrop" id="studyBackdrop" hidden>
    <section class="study-panel" id="studyPanel" role="dialog" aria-modal="true" aria-labelledby="studyTitle" tabindex="-1">
      <header class="study-head">
        <div><div class="study-eyebrow">STUDY NOTES / \u5B66\u4E60\u624B\u518C</div><h2 id="studyTitle"></h2><div class="study-meta" id="studyMeta"></div></div>
        <button class="icon-btn" id="studyClose" aria-label="\u5173\u95ED\u5B66\u4E60\u624B\u518C">${It("close")}</button>
      </header>
      <div class="study-scroll" id="studyScroll"></div>
    </section>
  </div>
  <div class="error" id="error" hidden><div class="error-card"><div class="error-no">ERR / WEBGL</div><h2>\u5149\u5B66\u573A\u672A\u80FD\u542F\u52A8</h2><p id="errorText">\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u521B\u5EFA WebGL \u4E0A\u4E0B\u6587\u3002\u8BF7\u4F7F\u7528\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u7684\u73B0\u4EE3\u6D4F\u89C8\u5668\u3002</p><button class="enter" id="errorReload">\u91CD\u65B0\u52A0\u8F7D</button></div></div>
`;var Ie=i=>document.getElementById(i),Rv=Ie("stage"),wh=Ie("caption"),Pv=Ie("rail"),Iv=Ie("timeline"),dn=null,At=0,fi=!0,Hl=!0,Qi=!1,aa=0,$s=tn[0].duration,of=performance.now(),Di=44,Ah=new URLSearchParams(location.search).get("chapter"),Lv=Ah!==null&&Ah!=="",kl=Number(Ah),uf=Lv&&Number.isInteger(kl)&&kl>=0&&kl<oa,Nv=tn.map((i,e)=>{let t=document.createElement("button");return t.type="button",t.className="rail-btn",t.dataset.index=String(e),t.innerHTML=`<span class="rail-title">${i.short}</span><span class="rail-line"></span><span class="rail-no">${i.no}</span>`,t.setAttribute("aria-label",`${i.no} ${i.short}`),t.addEventListener("click",()=>ji(e)),Pv.appendChild(t),t}),Ch=tn.map((i,e)=>{let t=document.createElement("button");return t.type="button",t.className="seg",t.innerHTML=`<span class="seg-track"><i></i></span><span class="seg-label">${i.no}</span>`,t.setAttribute("aria-label",`${i.no} ${i.short}`),t.addEventListener("click",()=>ji(e)),Iv.appendChild(t),t});function Dv(){Ie("loading").classList.add("is-hidden")}function lf(i){Ie("error").hidden=!1,Ie("errorText").textContent=String(i&&i.message?i.message:i).slice(0,500),Ie("loading").classList.add("is-hidden")}try{dn=af(Rv,{onReady:Dv,onError:lf});let i=Number(localStorage.getItem("cell-atlas.demo.brightness"));Di=Number.isFinite(i)&&i>=30&&i<=100?i:44,Ie("lum").value=String(Di),Ie("lumValue").textContent=String(Di),dn.setBrightness(Di/100)}catch(i){lf(i)}uf&&(At=kl,$s=tn[At].duration,dn&&dn.setChapter(At));function Gl(i){return tn[i]}function df(){let i=Gl(At),e=i.study;document.documentElement.style.setProperty("--accent",i.accent),Ie("chapterNo").textContent=i.no,Ie("kicker").textContent=`${i.kicker} / ${i.cnKicker}`,Ie("title").textContent=i.title,Ie("en").textContent=i.en,Ie("body").textContent=i.body,Ie("readout").textContent=i.readout,Ie("stageReadout").textContent=i.readout,Ie("textbookLabel").textContent=`\u6559\u6750\u5BF9\u7167 \xB7 ${e.textbook.chapter} ${e.textbook.title} \xB7 pp.${e.textbook.pages}`,Ie("facts").innerHTML=i.facts.map(t=>`<div class="fact"><span class="fact-k">${t.k}</span><span class="fact-v">${t.v}</span></div>`).join(""),Nv.forEach((t,n)=>{t.classList.toggle("is-active",n===At),n===At?t.setAttribute("aria-current","step"):t.removeAttribute("aria-current")}),Ch.forEach((t,n)=>{t.classList.toggle("is-active",n===At);let s=t.querySelector(".seg-track i");s.style.transform=n<At?"scaleX(1)":n===At?`scaleX(${aa})`:"scaleX(0)"}),Ie("prevBtn").disabled=At===0,Ie("nextBtn").disabled=At===oa-1,Qi&&ff(),wh.style.animation="none",wh.offsetWidth,wh.style.animation=""}function cf(){let i=Ch[At]&&Ch[At].querySelector(".seg-track i");i&&(i.style.transform=`scaleX(${aa})`)}function Js(i){fi=i,Ie("autoLabel").textContent=fi?"\u81EA\u52A8\u6F2B\u6E38":"\u5DF2\u6682\u505C",Ie("autoDot").classList.toggle("is-live",fi),Ie("playBtn").innerHTML=It(fi?"pause":"play"),Ie("playBtn").setAttribute("aria-label",fi?"\u6682\u505C":"\u64AD\u653E"),Ie("playBtn").title=fi?"\u6682\u505C":"\u64AD\u653E"}function ji(i){At=Math.max(0,Math.min(oa-1,i)),aa=0,$s=Gl(At).duration,dn&&dn.setChapter(At),df()}function Rh(){tn[At].study&&(Qi=!0,Js(!1),ff(),Ie("studyBackdrop").hidden=!1,Ie("studyBtn").setAttribute("aria-expanded","true"),requestAnimationFrame(()=>Ie("studyPanel").focus()))}function Vl(){Qi=!1,Ie("studyBackdrop").hidden=!0,Ie("studyBtn").setAttribute("aria-expanded","false")}function ff(){let e=Gl(At).study;Ie("studyTitle").textContent=`${e.textbook.chapter} \xB7 ${e.textbook.title}`,Ie("studyMeta").textContent=`\u4E01\u660E\u5B5D \u7B49\u300A\u7EC6\u80DE\u751F\u7269\u5B66\u300B\u7B2C 5 \u7248 \xB7 \u9AD8\u7B49\u6559\u80B2\u51FA\u7248\u793E \xB7 pp.${e.textbook.pages}`,Ie("studyScroll").innerHTML=`
    <a class="study-book-cta" href="./textbook.html">
      <span class="study-book-cta-icon">${It("book",18)}</span>
      <span class="study-book-cta-copy"><b>\u5168\u4E66\u5206\u8282\u5B66\u4E60</b><em>16 \u7AE0 \xB7 44 \u8282 \xB7 \u6309\u8282\u7CBE\u8BFB + \u81EA\u6D4B</em></span>
      <span class="study-book-cta-key">B</span>${It("arrow",14)}
    </a>
    <section class="study-section">
      <div class="study-label"><span>01</span><b>\u5B66\u4E60\u76EE\u6807</b><em>OBJECTIVES</em></div>
      <ul class="objectives">${e.objectives.map(t=>`<li>${t}</li>`).join("")}</ul>
    </section>
    <section class="study-section">
      <div class="study-label"><span>02</span><b>\u6838\u5FC3\u6982\u5FF5</b><em>KEY CONCEPTS</em></div>
      <dl class="concepts">${e.concepts.map(t=>`<div><dt><span>${t.term}</span><em>${t.en}</em></dt><dd>${t.def}</dd></div>`).join("")}</dl>
    </section>
    <section class="study-section">
      <div class="study-label"><span>03</span><b>\u673A\u5236\u62C6\u89E3</b><em>MECHANISM</em></div>
      <ol class="mechanism">${e.mechanism.map(t=>`<li>${t}</li>`).join("")}</ol>
    </section>
    <section class="study-section">
      <div class="study-label"><span>04</span><b>\u6613\u9519\u70B9</b><em>COMMON TRAPS</em></div>
      <ul class="traps">${e.pitfalls.map(t=>`<li>${t}</li>`).join("")}</ul>
    </section>
    <section class="study-section">
      <div class="study-label"><span>05</span><b>\u81EA\u6D4B</b><em>SELF-CHECK</em></div>
      <div class="quiz-list">${e.quiz.map((t,n)=>`<div class="quiz" data-quiz="${n}"><button type="button" class="quiz-q" data-quiz-toggle="${n}" aria-expanded="false"><span>Q${String(n+1).padStart(2,"0")}</span><b>${t.q}</b>${It("plus",15)}</button><div class="quiz-a" hidden><span>\u7B54\u6848</span><p>${t.a}</p></div></div>`).join("")}</div>
    </section>
    <section class="study-section">
      <div class="study-label"><span>06</span><b>\u753B\u9762\u56FE\u4F8B</b><em>VISUAL LEGEND</em></div>
      <div class="visuals">${e.visuals.map(t=>`<span class="visual"><i style="background:${t.color};color:${t.color}"></i>${t.label}</span>`).join("")}</div>
    </section>
    <section class="study-section">
      <div class="study-label"><span>07</span><b>\u76F8\u5173\u7AE0\u8282</b><em>READ FURTHER</em></div>
      <ul class="related">${e.related.map(t=>`<li>${t}</li>`).join("")}</ul>
      <div class="sections"><span>\u6559\u6750\u5C0F\u8282</span>${e.textbook.sections.map(t=>`<em>${t}</em>`).join("")}</div>
    </section>
    <footer class="study-footer"><span>5</span><p>\u4F9D\u636E\u4E01\u660E\u5B5D\u7B49\u300A\u7EC6\u80DE\u751F\u7269\u5B66\u300B\u7B2C5\u7248\uFF08\u9AD8\u7B49\u6559\u80B2\u51FA\u7248\u793E\uFF0C2020\uFF0CISBN 978-7-04-047157-1\uFF09\u76F8\u5173\u7AE0\u8282\u6574\u7406\u3002\u672C\u9875\u4E3A\u5B66\u4E60\u6458\u8981\uFF0C\u8BF7\u4EE5\u539F\u4E66\u4E3A\u51C6\u3002</p></footer>
  `,Ie("studyScroll").querySelectorAll("[data-quiz-toggle]").forEach(t=>{t.addEventListener("click",()=>{let s=t.closest(".quiz").querySelector(".quiz-a"),r=s.hidden;s.hidden=!r,t.setAttribute("aria-expanded",String(r));let a=t.querySelector("svg");a&&(a.outerHTML=It(r?"minus":"plus",15))})})}Ie("studyBtn").addEventListener("click",Rh);Ie("textbookChip").addEventListener("click",Rh);Ie("studyClose").addEventListener("click",Vl);Ie("studyBackdrop").addEventListener("mousedown",i=>{i.target===i.currentTarget&&Vl()});Ie("prevBtn").addEventListener("click",()=>ji(At-1));Ie("nextBtn").addEventListener("click",()=>ji(At+1));Ie("playBtn").addEventListener("click",()=>Js(!fi));Ie("resetBtn").addEventListener("click",()=>dn&&dn.resetView());Ie("lum").addEventListener("input",i=>{Di=Number(i.target.value),Ie("lumValue").textContent=String(Di),dn&&dn.setBrightness(Di/100);try{localStorage.setItem("cell-atlas.demo.brightness",String(Di))}catch{}});Ie("errorReload").addEventListener("click",()=>window.location.reload());Ie("guideNext").addEventListener("click",()=>Wl(1));Ie("guideNextTwo").addEventListener("click",()=>Wl(2));Ie("guideBack").addEventListener("click",()=>Wl(0));Ie("guideBackTwo").addEventListener("click",()=>Wl(1));Ie("enterBtn").addEventListener("click",i=>{i.stopPropagation(),pf()});Ie("fullBtn").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):hf.requestFullscreen?.().catch(()=>{})});document.addEventListener("fullscreenchange",()=>{Ie("fullBtn").innerHTML=document.fullscreenElement?It("collapse"):It("expand")});function Wl(i){let e=Ie("introStepOne"),t=Ie("introStepTwo"),n=Ie("introStepThree");!e||!t||!n||(e.hidden=i!==0,t.hidden=i!==1,n.hidden=i!==2)}function pf(){Hl&&(Hl=!1,Ie("intro").classList.add("is-out"),setTimeout(()=>{Ie("intro").hidden=!0},650),dn&&dn.pulse(),Js(!0))}setTimeout(()=>{uf&&Hl&&pf()},350);document.addEventListener("keydown",i=>{let e=i.target&&i.target.tagName;if(!(e==="INPUT"||e==="TEXTAREA"||i.target&&i.target.isContentEditable)){if(i.key==="Escape"){Qi&&Vl();return}if(i.key.toLowerCase()==="t"){i.preventDefault(),Qi?Vl():Rh();return}Qi||e==="BUTTON"||e==="A"||(i.key==="ArrowRight"?ji(At+1):i.key==="ArrowLeft"?ji(At-1):i.key===" "?(i.preventDefault(),Js(!fi)):i.key.toLowerCase()==="f"?(i.preventDefault(),Ie("fullBtn").click()):i.key.toLowerCase()==="r"&&dn&&dn.resetView())}});function mf(i){let e=Math.min(80,i-of);if(of=i,fi&&!Qi&&!Hl&&Ie("error").hidden){$s-=e;let t=Gl(At).duration;aa=Math.max(0,Math.min(1,1-$s/t)),cf(),$s<=0&&(At<oa-1?ji(At+1):($s=0,aa=1,cf(),Js(!1)))}requestAnimationFrame(mf)}df();Js(!0);requestAnimationFrame(mf);})();
