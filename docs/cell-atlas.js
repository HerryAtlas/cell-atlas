(()=>{var Qu=0,Yc=1,ju=2;var $r=1,ed=2,Bs=3,Ni=0,Wt=1,on=2,Rn=0,zs=1,ct=2,Zc=3,$c=4,td=5;var ts=100,nd=101,id=102,sd=103,rd=104,ad=200,od=201,ld=202,cd=203,Jc=204,Kc=205,hd=206,ud=207,dd=208,fd=209,pd=210,md=211,gd=212,_d=213,vd=214,uo=0,fo=1,po=2,As=3,mo=4,go=5,_o=6,vo=7,Qc=0,xd=1,yd=2,kn=0,Jr=1,Kr=2,Qr=3,ns=4,jr=5,ea=6,ta=7;var jc=300,Di=301,is=302,Hs=303,Qo=304,na=306,xo=1e3,Yn=1001,yo=1002,$t=1003,Md=1004;var ia=1005;var jt=1006,jo=1007;var Ui=1008;var gn=1009,eh=1010,th=1011,ks=1012,el=1013,Vn=1014,Cn=1015,tn=1016,tl=1017,nl=1018,Vs=1020,nh=35902,ih=35899,sh=1021,rh=1022,Pn=1023,Zn=1026,Fi=1027,il=1028,sl=1029,Oi=1030,rl=1031;var al=1033,sa=33776,ra=33777,aa=33778,oa=33779,ol=35840,ll=35841,cl=35842,hl=35843,ul=36196,dl=37492,fl=37496,pl=37488,ml=37489,la=37490,gl=37491,_l=37808,vl=37809,xl=37810,yl=37811,Ml=37812,Sl=37813,bl=37814,El=37815,Tl=37816,wl=37817,Al=37818,Rl=37819,Cl=37820,Pl=37821,Il=36492,Ll=36494,Nl=36495,Dl=36283,Ul=36284,ca=36285,Fl=36286;var Er=2300,Mo=2301,co=2302,Oc=2303,Bc=2400,zc=2401,Hc=2402;var Sd=3200;var Ol=0,bd=1,pi="",an="srgb",Tr="srgb-linear",wr="linear",mt="srgb";var ho=7680;var Ed=519,Td=512,wd=513,Ad=514,Bl=515,Rd=516,Cd=517,zl=518,Pd=519,Id=35044;var ah="300 es",Fn=2e3,Rs=2001;function vp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ld(){let i=Ar("canvas");return i.style.display="block",i}var xu={},Cs=null;function oh(...i){let e="THREE."+i.shift();Cs?Cs("log",e,...i):console.log(e,...i)}function Nd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=Nd(i);let e="THREE."+i.shift();if(Cs)Cs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=Nd(i);let e="THREE."+i.shift();if(Cs)Cs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function $i(...i){let e=i.join(" ");e in xu||(xu[e]=!0,He(...i))}function Dd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ud={[uo]:fo,[po]:_o,[mo]:vo,[As]:go,[fo]:uo,[_o]:po,[vo]:mo,[go]:As},$n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=1234567,yr=Math.PI/180,Ji=180/Math.PI;function Gs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function lh(i,e){return(i%e+e)%e}function yp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Mp(i,e,t){return i!==e?(t-i)/(e-i):0}function Mr(i,e,t){return(1-t)*i+t*e}function Sp(i,e,t,n){return Mr(i,e,1-Math.exp(-t*n))}function bp(i,e=1){return e-Math.abs(lh(i,e*2)-e)}function Ep(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ap(i,e){return i+Math.random()*(e-i)}function Rp(i){return i*(.5-Math.random())}function Cp(i){i!==void 0&&(yu=i);let e=yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pp(i){return i*yr}function Ip(i){return i*Ji}function Lp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Np(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Up(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*h,o*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ts(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ha={DEG2RAD:yr,RAD2DEG:Ji,generateUUID:Gs,clamp:je,euclideanModulo:lh,mapLinear:yp,inverseLerp:Mp,lerp:Mr,damp:Sp,pingpong:bp,smoothstep:Ep,smootherstep:Tp,randInt:wp,randFloat:Ap,randFloatSpread:Rp,seededRandom:Cp,degToRad:Pp,radToDeg:Ip,isPowerOfTwo:Lp,ceilPowerOfTwo:Np,floorPowerOfTwo:Dp,setQuaternionFromProperEuler:Up,normalize:un,denormalize:Ts},ph=class ph{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ph.prototype.isVector2=!0;var Me=ph,Jn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],_=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==p||h!==_){let m=l*u+c*p+h*_+d*M;m<0&&(u=-u,p=-p,_=-_,M=-M,m=-m);let f=1-o;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);f=Math.sin(f*S)/A,o=Math.sin(o*S)/A,l=l*f+u*o,c=c*f+p*o,h=h*f+_*o,d=d*f+M*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+_*o,d=d*f+M*o;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+h*d+l*p-c*u,e[t+1]=l*_+h*u+c*d-o*p,e[t+2]=c*_+h*p+o*u-l*d,e[t+3]=h*_-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d-u*p*_;break;case"YXZ":this._x=u*h*d+c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d+u*p*_;break;case"ZXY":this._x=u*h*d-c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d-u*p*_;break;case"ZYX":this._x=u*h*d-c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d+u*p*_;break;case"YZX":this._x=u*h*d+c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d-u*p*_;break;case"XZY":this._x=u*h*d-c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d+u*p*_;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mh=class mh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mh.prototype.isVector3=!0;var R=mh,dc=new R,Mu=new Jn,gh=class gh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],_=n[8],M=s[0],m=s[3],f=s[6],S=s[1],A=s[4],y=s[7],T=s[2],b=s[5],C=s[8];return r[0]=a*M+o*S+l*T,r[3]=a*m+o*A+l*b,r[6]=a*f+o*y+l*C,r[1]=c*M+h*S+d*T,r[4]=c*m+h*A+d*b,r[7]=c*f+h*y+d*C,r[2]=u*M+p*S+_*T,r[5]=u*m+p*A+_*b,r[8]=u*f+p*y+_*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,_=t*d+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=d*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return $i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fc.makeScale(e,t)),this}rotate(e){return $i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return $i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gh.prototype.isMatrix3=!0;var We=gh,fc=new We,Su=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fp(){let i={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Tr]:{primaries:e,whitePoint:n,transfer:wr,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}var et=Fp();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var us,So=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{us===void 0&&(us=Ar("canvas")),us.width=e.width,us.height=e.height;let s=us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ar("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Op=0,Ps=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(pc(s[a].image)):r.push(pc(s[a]))}else r=pc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function pc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?So.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var Bp=0,mc=new R,dn=class i extends $n{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=jt,a=Ui,o=Pn,l=gn,c=i.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Gs(),this.name="",this.source=new Ps(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mc).x}get height(){return this.source.getSize(mc).y}get depth(){return this.source.getSize(mc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xo:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xo:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=jc;dn.DEFAULT_ANISOTROPY=1;var _h=class _h{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],_=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,y=(p+1)/2,T=(f+1)/2,b=(h+u)/4,C=(d+M)/4,v=(_+m)/4;return A>y&&A>T?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=C/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=v/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=v/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(d-M)/S,this.z=(u-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_h.prototype.isVector4=!0;var Nt=_h,bo=class extends $n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new dn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ps(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zt=class extends bo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rr=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Eo=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ko=class Ko{constructor(e,t,n,s,r,a,o,l,c,h,d,u,p,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,p,_,M,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,p,_,M,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ko().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*d,_=o*h,M=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,_=c*h,M=c*d;t[0]=u+M*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,_=c*h,M=c*d;t[0]=u-M*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,_=o*h,M=o*d;t[0]=l*h,t[4]=_*c-p,t[8]=u*c+M,t[1]=l*d,t[5]=M*c+u,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,_=o*l,M=o*c;t[0]=l*h,t[4]=M-u*d,t[8]=_*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+_,t[10]=u-M*d}else if(e.order==="XZY"){let u=a*l,p=a*c,_=o*l,M=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+M,t[5]=a*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*h,t[10]=M*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,Hp)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Si.crossVectors(n,vn),Si.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Si.crossVectors(n,vn)),Si.normalize(),za.crossVectors(vn,Si),s[0]=Si.x,s[4]=za.x,s[8]=vn.x,s[1]=Si.y,s[5]=za.y,s[9]=vn.y,s[2]=Si.z,s[6]=za.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],_=n[2],M=n[6],m=n[10],f=n[14],S=n[3],A=n[7],y=n[11],T=n[15],b=s[0],C=s[4],v=s[8],E=s[12],P=s[1],B=s[5],z=s[9],k=s[13],D=s[2],X=s[6],K=s[10],J=s[14],re=s[3],Y=s[7],te=s[11],se=s[15];return r[0]=a*b+o*P+l*D+c*re,r[4]=a*C+o*B+l*X+c*Y,r[8]=a*v+o*z+l*K+c*te,r[12]=a*E+o*k+l*J+c*se,r[1]=h*b+d*P+u*D+p*re,r[5]=h*C+d*B+u*X+p*Y,r[9]=h*v+d*z+u*K+p*te,r[13]=h*E+d*k+u*J+p*se,r[2]=_*b+M*P+m*D+f*re,r[6]=_*C+M*B+m*X+f*Y,r[10]=_*v+M*z+m*K+f*te,r[14]=_*E+M*k+m*J+f*se,r[3]=S*b+A*P+y*D+T*re,r[7]=S*C+A*B+y*X+T*Y,r[11]=S*v+A*z+y*K+T*te,r[15]=S*E+A*k+y*J+T*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],_=e[3],M=e[7],m=e[11],f=e[15],S=l*p-c*u,A=o*p-c*d,y=o*u-l*d,T=a*p-c*h,b=a*u-l*h,C=a*d-o*h;return t*(M*S-m*A+f*y)-n*(_*S-m*T+f*b)+s*(_*A-M*T+f*C)-r*(_*y-M*b+m*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],_=e[12],M=e[13],m=e[14],f=e[15],S=t*o-n*a,A=t*l-s*a,y=t*c-r*a,T=n*l-s*o,b=n*c-r*o,C=s*c-r*l,v=h*M-d*_,E=h*m-u*_,P=h*f-p*_,B=d*m-u*M,z=d*f-p*M,k=u*f-p*m,D=S*k-A*z+y*B+T*P-b*E+C*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/D;return e[0]=(o*k-l*z+c*B)*X,e[1]=(s*z-n*k-r*B)*X,e[2]=(M*C-m*b+f*T)*X,e[3]=(u*b-d*C-p*T)*X,e[4]=(l*P-a*k-c*E)*X,e[5]=(t*k-s*P+r*E)*X,e[6]=(m*y-_*C-f*A)*X,e[7]=(h*C-u*y+p*A)*X,e[8]=(a*z-o*P+c*v)*X,e[9]=(n*P-t*z-r*v)*X,e[10]=(_*b-M*y+f*S)*X,e[11]=(d*y-h*b-p*S)*X,e[12]=(o*E-a*B-l*v)*X,e[13]=(t*B-n*E+s*v)*X,e[14]=(M*A-_*T-m*S)*X,e[15]=(h*T-d*A+u*S)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,_=r*d,M=a*h,m=a*d,f=o*d,S=l*c,A=l*h,y=l*d,T=n.x,b=n.y,C=n.z;return s[0]=(1-(M+f))*T,s[1]=(p+y)*T,s[2]=(_-A)*T,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(u+f))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(_+A)*C,s[9]=(m-S)*C,s[10]=(1-(u+M))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ds.set(s[0],s[1],s[2]).length(),o=ds.set(s[4],s[5],s[6]).length(),l=ds.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ln.copy(this);let c=1/a,h=1/o,d=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,t.setFromRotationMatrix(Ln),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Fn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),_,M;if(l)_=r/(a-r),M=a*r/(a-r);else if(o===Fn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Rs)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Fn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),_,M;if(l)_=1/(a-r),M=a/(a-r);else if(o===Fn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===Rs)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ko.prototype.isMatrix4=!0;var bt=Ko,ds=new R,Ln=new bt,zp=new R(0,0,0),Hp=new R(1,1,1),Si=new R,za=new R,vn=new R,Eu=new bt,Tu=new Jn,ui=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kp=0,wu=new R,fs=new Jn,ri=new bt,Ha=new R,fr=new R,Vp=new R,Gp=new Jn,Au=new R(1,0,0),Ru=new R(0,1,0),Cu=new R(0,0,1),Pu={type:"added"},Wp={type:"removed"},ps={type:"childadded",child:null},gc={type:"childremoved",child:null},At=class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new ui,n=new Jn,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new We}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ha.copy(e):Ha.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(fr,Ha,this.up):ri.lookAt(Ha,fr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(ri),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pu),ps.child=e,this.dispatchEvent(ps),ps.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wp),gc.child=e,this.dispatchEvent(gc),gc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pu),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new R(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xp={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ka={h:0,s:0,l:0};function _c(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=lh(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=_c(a,r,e+1/3),this.g=_c(a,r,e),this.b=_c(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){let n=Fd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return et.workingToColorSpace(rn.copy(this),e),Math.round(je(rn.r*255,0,255))*65536+Math.round(je(rn.g*255,0,255))*256+Math.round(je(rn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(rn.copy(this),t);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=an){et.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,s=rn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(ka);let n=Mr(bi.h,ka.h,t),s=Mr(bi.s,ka.s,t),r=Mr(bi.l,ka.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new pe;pe.NAMES=Fd;var Pr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ir=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nn=new R,ai=new R,vc=new R,oi=new R,ms=new R,gs=new R,Iu=new R,xc=new R,yc=new R,Mc=new R,Sc=new Nt,bc=new Nt,Ec=new Nt,Ai=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),ai.subVectors(n,t),vc.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(ai),l=Nn.dot(vc),c=ai.dot(ai),h=ai.dot(vc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Sc.setScalar(0),bc.setScalar(0),Ec.setScalar(0),Sc.fromBufferAttribute(e,t),bc.fromBufferAttribute(e,n),Ec.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Sc,r.x),a.addScaledVector(bc,r.y),a.addScaledVector(Ec,r.z),a}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),ai.subVectors(e,t),Nn.cross(ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Nn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ms.subVectors(s,n),gs.subVectors(r,n),xc.subVectors(e,n);let l=ms.dot(xc),c=gs.dot(xc);if(l<=0&&c<=0)return t.copy(n);yc.subVectors(e,s);let h=ms.dot(yc),d=gs.dot(yc);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ms,a);Mc.subVectors(e,r);let p=ms.dot(Mc),_=gs.dot(Mc);if(_>=0&&p<=_)return t.copy(r);let M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(gs,o);let m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return Iu.subVectors(r,s),o=(d-h)/(d-h+(p-_)),t.copy(s).addScaledVector(Iu,o);let f=1/(m+M+u);return a=M*f,o=u*f,t.copy(n).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Ga.subVectors(this.max,pr),_s.subVectors(e.a,pr),vs.subVectors(e.b,pr),xs.subVectors(e.c,pr),Ei.subVectors(vs,_s),Ti.subVectors(xs,vs),Xi.subVectors(_s,xs);let t=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-Xi.z,Xi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,Xi.z,0,-Xi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-Xi.y,Xi.x,0];return!Tc(t,_s,vs,xs,Ga)||(t=[1,0,0,0,1,0,0,0,1],!Tc(t,_s,vs,xs,Ga))?!1:(Wa.crossVectors(Ei,Ti),t=[Wa.x,Wa.y,Wa.z],Tc(t,_s,vs,xs,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},li=[new R,new R,new R,new R,new R,new R,new R,new R],Dn=new R,Va=new Kn,_s=new R,vs=new R,xs=new R,Ei=new R,Ti=new R,Xi=new R,pr=new R,Ga=new R,Wa=new R,qi=new R;function Tc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qi.fromArray(i,r);let o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Bt=new R,Xa=new Me,qp=0,Et=class extends $n{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Id,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Lr=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Nr=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yp=new Kn,mr=new R,wc=new R,Qn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);let t=mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(mr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(wc)),this.expandByPoint(mr.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zp=0,wn=new bt,Ac=new At,ys=new R,xn=new Kn,gr=new Kn,Yt=new R,ut=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vp(e)?Nr:Lr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(xn.min,gr.min),xn.expandByPoint(Yt),Yt.addVectors(xn.max,gr.max),xn.expandByPoint(Yt)):(xn.expandByPoint(gr.min),xn.expandByPoint(gr.max))}xn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Yt.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(e,c),Yt.add(ys)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Et(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new R,l[v]=new R;let c=new R,h=new R,d=new R,u=new Me,p=new Me,_=new Me,M=new R,m=new R;function f(v,E,P){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,v),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,P),h.sub(c),d.sub(c),p.sub(u),_.sub(u);let B=1/(p.x*_.y-_.x*p.y);isFinite(B)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(B),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(B),o[v].add(M),o[E].add(M),o[P].add(M),l[v].add(m),l[E].add(m),l[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,E=S.length;v<E;++v){let P=S[v],B=P.start,z=P.count;for(let k=B,D=B+z;k<D;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let A=new R,y=new R,T=new R,b=new R;function C(v){T.fromBufferAttribute(s,v),b.copy(T);let E=o[v];A.copy(E),A.sub(T.multiplyScalar(T.dot(E))).normalize(),y.crossVectors(b,E);let B=y.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,B)}for(let v=0,E=S.length;v<E;++v){let P=S[v],B=P.start,z=P.count;for(let k=B,D=B+z;k<D;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let u=0,p=e.count;u<p;u+=3){let _=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)u[_++]=c[p++]}return new Et(u,h,d)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Rc=new R,$p=new R,Jp=new We,Un=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Rc.subVectors(n,t).cross($p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Rc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jp.getNormalMatrix(e),s=this.coplanarPoint(Rc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Kp=0,jn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=zs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=Kc,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Un().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ci=new R,Cc=new R,qa=new R,Ya=new R,Ls=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Cc.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),Ya.copy(this.origin).sub(Cc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(qa),o=Ya.dot(this.direction),l=-Ya.dot(qa),c=Ya.lengthSq(),h=Math.abs(1-a*a),d,u,p,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){let M=1/h;d*=M,u*=M,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Cc).addScaledVector(qa,u),p}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,p=e.z-a.z,_=t.x-a.x,M=t.y-a.y,m=t.z-a.z,f=n.x-a.x,S=n.y-a.y,A=n.z-a.z,y=Math.abs(l),T=Math.abs(c),b=Math.abs(h),C,v,E,P,B,z,k,D,X,K,J,re;if(y>=T&&y>=b?(E=l,z=d,X=_,re=f,l>=0?(C=c,v=h,P=u,B=p,k=M,D=m,K=S,J=A):(C=h,v=c,P=p,B=u,k=m,D=M,K=A,J=S)):T>=b?(E=c,z=u,X=M,re=S,c>=0?(C=h,v=l,P=p,B=d,k=m,D=_,K=A,J=f):(C=l,v=h,P=d,B=p,k=_,D=m,K=f,J=A)):(E=h,z=p,X=m,re=A,h>=0?(C=l,v=c,P=d,B=u,k=_,D=M,K=f,J=S):(C=c,v=l,P=u,B=d,k=M,D=_,K=S,J=f)),E===0)return null;let Y=C/E,te=v/E,se=1/E,Ne=P-Y*z,Fe=B-te*z,_t=k-Y*X,rt=D-te*X,at=K-Y*re,Q=J-te*re,ne=at*rt-Q*_t,Te=Ne*Q-Fe*at,ke=_t*Fe-rt*Ne;if(s){if(ne<0||Te<0||ke<0)return null}else if((ne<0||Te<0||ke<0)&&(ne>0||Te>0||ke>0))return null;let Se=ne+Te+ke;if(Se===0)return null;let Ze=se*(ne*z+Te*X+ke*re);return(Se>0?Ze<0:Ze>0)?null:this.at(Ze/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Lu=new bt,Yi=new Ls,Za=new Qn,Nu=new R,$a=new R,Ja=new R,Ka=new R,Pc=new R,Qa=new R,Du=new R,ja=new R,Re=class extends At{constructor(e=new ut,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Pc.fromBufferAttribute(d,e),a?Qa.addScaledVector(Pc,h):Qa.addScaledVector(Pc.sub(t),h))}t.add(Qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(Za.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Za,Nu)===null||Yi.origin.distanceToSquared(Nu)>(e.far-e.near)**2))&&(Lu.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Lu),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){let m=u[_],f=a[m.materialIndex],S=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,T=A;y<T;y+=3){let b=o.getX(y),C=o.getX(y+1),v=o.getX(y+2);s=eo(this,f,e,n,c,h,d,b,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){let S=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);s=eo(this,a,e,n,c,h,d,S,A,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){let m=u[_],f=a[m.materialIndex],S=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,T=A;y<T;y+=3){let b=y,C=y+1,v=y+2;s=eo(this,f,e,n,c,h,d,b,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){let S=m,A=m+1,y=m+2;s=eo(this,a,e,n,c,h,d,S,A,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Qp(i,e,t,n,s,r,a,o){let l;if(e.side===Wt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ni,o),l===null)return null;ja.copy(o),ja.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ja);return c<t.near||c>t.far?null:{distance:c,point:ja.clone(),object:i}}function eo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,$a),i.getVertexPosition(l,Ja),i.getVertexPosition(c,Ka);let h=Qp(i,e,t,n,$a,Ja,Ka,Du);if(h){let d=new R;Ai.getBarycoord(Du,$a,Ja,Ka,d),s&&(h.uv=Ai.getInterpolatedAttribute(s,o,l,c,d,new Me)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,o,l,c,d,new Me)),a&&(h.normal=Ai.getInterpolatedAttribute(a,o,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};Ai.getNormal($a,Ja,Ka,u.normal),h.face=u,h.barycoord=d}return h}var Dr=class extends dn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=$t,h=$t,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ur=class extends Et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ms=new bt,Uu=new bt,to=[],Fu=new Kn,jp=new bt,_r=new Re,vr=new Qn,di=class extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),Fu.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Fu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),vr.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),e.ray.intersectsSphere(vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),Uu.multiplyMatrices(n,Ms),_r.matrixWorld=Uu,_r.raycast(e,to);for(let a=0,o=to.length;a<o;a++){let l=to[a];l.instanceId=r,l.object=this,t.push(l)}to.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dr(new Float32Array(s*this.count),s,this.count,il,Cn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zi=new Qn,em=new Me(.5,.5),no=new R,Ns=class{constructor(e=new Un,t=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],_=r[8],M=r[9],m=r[10],f=r[11],S=r[12],A=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,p-h,f-_,T-S).normalize(),s[1].setComponents(c+a,p+h,f+_,T+S).normalize(),s[2].setComponents(c+o,p+d,f+M,T+A).normalize(),s[3].setComponents(c-o,p-d,f-M,T-A).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,p-u,f-m,T-y).normalize();else if(s[4].setComponents(c-l,p-u,f-m,T-y).normalize(),t===Fn)s[5].setComponents(c+l,p+u,f+m,T+y).normalize();else if(t===Rs)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);let t=em.distanceTo(e.center);return Zi.radius=.7071067811865476+t,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(no.x=s.normal.x>0?e.max.x:e.min.x,no.y=s.normal.y>0?e.max.y:e.min.y,no.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ds=class extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},To=new R,wo=new R,Ou=new bt,xr=new Ls,io=new Qn,Ic=new R,Bu=new R,Ao=class extends At{constructor(e=new ut,t=new Ds){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)To.fromBufferAttribute(t,s-1),wo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=To.distanceTo(wo);e.setAttribute("lineDistance",new Ye(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(s),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;Ou.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Ou);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=c){let f=h.getX(M),S=h.getX(M+1),A=so(this,e,xr,l,f,S,M);A&&t.push(A)}if(this.isLineLoop){let M=h.getX(_-1),m=h.getX(p),f=so(this,e,xr,l,M,m,_-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=c){let f=so(this,e,xr,l,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){let M=so(this,e,xr,l,_-1,p,_-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function so(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(To.fromBufferAttribute(o,s),wo.fromBufferAttribute(o,r),t.distanceSqToSegment(To,wo,Ic,Bu)>n)return;Ic.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ic);if(!(c<e.near||c>e.far))return{distance:c,point:Bu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var zu=new R,Hu=new R,Ki=class extends Ao{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)zu.fromBufferAttribute(t,s),Hu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zu.distanceTo(Hu);e.setAttribute("lineDistance",new Ye(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var On=class extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ku=new bt,kc=new Ls,ro=new Qn,ao=new R,yn=class extends At{constructor(e=new ut,t=new On){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;ku.copy(s).invert(),kc.copy(e.ray).applyMatrix4(ku);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=u,M=p;_<M;_++){let m=c.getX(_);ao.fromBufferAttribute(d,m),Vu(ao,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=u,M=p;_<M;_++)ao.fromBufferAttribute(d,_),Vu(ao,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vu(i,e,t,n,s,r,a){let o=kc.distanceSqToPoint(i);if(o<t){let l=new R;kc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Fr=class extends dn{constructor(e=[],t=Di,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Or=class extends dn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ri=class extends dn{constructor(e,t,n=Vn,s,r,a,o=$t,l=$t,c,h=Zn,d=1){if(h!==Zn&&h!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ps(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ro=class extends Ri{constructor(e,t=Vn,n=Di,s,r,a=$t,o=$t,l,c=Zn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Br=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Us=class i extends ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2));function _(M,m,f,S,A,y,T,b,C,v,E){let P=y/C,B=T/v,z=y/2,k=T/2,D=b/2,X=C+1,K=v+1,J=0,re=0,Y=new R;for(let te=0;te<K;te++){let se=te*B-k;for(let Ne=0;Ne<X;Ne++){let Fe=Ne*P-z;Y[M]=Fe*S,Y[m]=se*A,Y[f]=D,c.push(Y.x,Y.y,Y.z),Y[M]=0,Y[m]=0,Y[f]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Ne/C),d.push(1-te/v),J+=1}}for(let te=0;te<v;te++)for(let se=0;se<C;se++){let Ne=u+se+X*te,Fe=u+se+X*(te+1),_t=u+(se+1)+X*(te+1),rt=u+(se+1)+X*te;l.push(Ne,Fe,rt),l.push(Fe,_t,rt),re+=6}o.addGroup(p,re,E),p+=re,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Bn=class i extends ut{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,p=2*d+u,_=n*2+r,M=s+1,m=new R,f=new R;for(let S=0;S<=_;S++){let A=0,y=0,T=0,b=0;if(S<=n){let E=S/n,P=E*Math.PI/2;y=-h-e*Math.cos(P),T=e*Math.sin(P),b=-e*Math.cos(P),A=E*d}else if(S<=n+r){let E=(S-n)/r;y=-h+E*t,T=e,b=0,A=d+E*u}else{let E=(S-n-r)/n,P=E*Math.PI/2;y=h+e*Math.sin(P),T=e*Math.cos(P),b=e*Math.sin(P),A=d+u+E*d}let C=Math.max(0,Math.min(1,A/p)),v=0;S===0?v=.5/s:S===_&&(v=-.5/s);for(let E=0;E<=s;E++){let P=E/s,B=P*Math.PI*2,z=Math.sin(B),k=Math.cos(B);f.x=-T*k,f.y=y,f.z=T*z,o.push(f.x,f.y,f.z),m.set(-T*k,b,T*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+v,C)}if(S>0){let E=(S-1)*M;for(let P=0;P<s;P++){let B=E+P,z=E+P+1,k=S*M+P,D=S*M+P+1;a.push(B,z,k),a.push(z,D,k)}}}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var zn=class i extends ut{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],_=0,M=[],m=n/2,f=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(p,2));function S(){let y=new R,T=new R,b=0,C=(t-e)/n;for(let v=0;v<=r;v++){let E=[],P=v/r,B=P*(t-e)+e;for(let z=0;z<=s;z++){let k=z/s,D=k*l+o,X=Math.sin(D),K=Math.cos(D);T.x=B*X,T.y=-P*n+m,T.z=B*K,d.push(T.x,T.y,T.z),y.set(X,C,K).normalize(),u.push(y.x,y.y,y.z),p.push(k,1-P),E.push(_++)}M.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){let P=M[E][v],B=M[E+1][v],z=M[E+1][v+1],k=M[E][v+1];(e>0||E!==0)&&(h.push(P,B,k),b+=3),(t>0||E!==r-1)&&(h.push(B,z,k),b+=3)}c.addGroup(f,b,0),f+=b}function A(y){let T=_,b=new Me,C=new R,v=0,E=y===!0?e:t,P=y===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*P,0),u.push(0,P,0),p.push(.5,.5),_++;let B=_;for(let z=0;z<=s;z++){let D=z/s*l+o,X=Math.cos(D),K=Math.sin(D);C.x=E*K,C.y=m*P,C.z=E*X,d.push(C.x,C.y,C.z),u.push(0,P,0),b.x=X*.5+.5,b.y=K*.5*P+.5,p.push(b.x,b.y),_++}for(let z=0;z<s;z++){let k=T+z,D=B+z;y===!0?h.push(D,D+1,k):h.push(D+1,D,k),v+=3}c.addGroup(f,v,y===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zr=class i extends zn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Co=class i extends ut{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let A=new R,y=new R,T=new R;for(let b=0;b<t.length;b+=3)p(t[b+0],A),p(t[b+1],y),p(t[b+2],T),l(A,y,T,S)}function l(S,A,y,T){let b=T+1,C=[];for(let v=0;v<=b;v++){C[v]=[];let E=S.clone().lerp(y,v/b),P=A.clone().lerp(y,v/b),B=b-v;for(let z=0;z<=B;z++)z===0&&v===b?C[v][z]=E:C[v][z]=E.clone().lerp(P,z/B)}for(let v=0;v<b;v++)for(let E=0;E<2*(b-v)-1;E++){let P=Math.floor(E/2);E%2===0?(u(C[v][P+1]),u(C[v+1][P]),u(C[v][P])):(u(C[v][P+1]),u(C[v+1][P+1]),u(C[v+1][P]))}}function c(S){let A=new R;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(S),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function h(){let S=new R;for(let A=0;A<r.length;A+=3){S.x=r[A+0],S.y=r[A+1],S.z=r[A+2];let y=m(S)/2/Math.PI+.5,T=f(S)/Math.PI+.5;a.push(y,1-T)}_(),d()}function d(){for(let S=0;S<a.length;S+=6){let A=a[S+0],y=a[S+2],T=a[S+4],b=Math.max(A,y,T),C=Math.min(A,y,T);b>.9&&C<.1&&(A<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function p(S,A){let y=S*3;A.x=e[y+0],A.y=e[y+1],A.z=e[y+2]}function _(){let S=new R,A=new R,y=new R,T=new R,b=new Me,C=new Me,v=new Me;for(let E=0,P=0;E<r.length;E+=9,P+=6){S.set(r[E+0],r[E+1],r[E+2]),A.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),b.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),v.set(a[P+4],a[P+5]),T.copy(S).add(A).add(y).divideScalar(3);let B=m(T);M(b,P+0,S,B),M(C,P+2,A,B),M(v,P+4,y,B)}}function M(S,A,y,T){T<0&&S.x===1&&(a[A]=S.x-1),y.x===0&&y.z===0&&(a[A]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Me:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,s=[],r=[],a=[],o=new R,l=new bt;for(let p=0;p<=e;p++){let _=p/e;s[p]=this.getTangentAt(_,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(je(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(je(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hr=class extends An{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Po=class extends Hr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ch(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Gu=new R,Wu=new R,Lc=new ch,Nc=new ch,Dc=new ch,fn=class extends An{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Wu.subVectors(s[0],s[1]).add(s[0]),c=Wu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Gu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Gu),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(d),p),M=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);M<1e-4&&(M=1),_<1e-4&&(_=M),m<1e-4&&(m=M),Lc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,_,M,m),Nc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,_,M,m),Dc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,_,M,m)}else this.curveType==="catmullrom"&&(Lc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Nc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Dc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Lc.calc(l),Nc.calc(l),Dc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function tm(i,e){let t=1-i;return t*t*e}function nm(i,e){return 2*(1-i)*i*e}function im(i,e){return i*i*e}function Sr(i,e,t,n){return tm(i,e)+nm(i,t)+im(i,n)}function sm(i,e){let t=1-i;return t*t*t*e}function rm(i,e){let t=1-i;return 3*t*t*i*e}function am(i,e){return 3*(1-i)*i*i*e}function om(i,e){return i*i*i*e}function br(i,e,t,n,s){return sm(i,e)+rm(i,t)+am(i,n)+om(i,s)}var Io=class extends An{constructor(e=new Me,t=new Me,n=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(e,s.x,r.x,a.x,o.x),br(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lo=class extends An{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(e,s.x,r.x,a.x,o.x),br(e,s.y,r.y,a.y,o.y),br(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},No=class extends An{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends An{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends An{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Sr(e,s.x,r.x,a.x),Sr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kr=class extends An{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Sr(e,s.x,r.x,a.x),Sr(e,s.y,r.y,a.y),Sr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Xu(o,l.x,c.x,h.x,d.x),Xu(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Me().fromArray(s))}return this}},lm=Object.freeze({__proto__:null,ArcCurve:Po,CatmullRomCurve3:fn,CubicBezierCurve:Io,CubicBezierCurve3:Lo,EllipseCurve:Hr,LineCurve:No,LineCurve3:Do,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:kr,SplineCurve:Fo});var Qi=class i extends Co{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Vr=class i extends ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,p=[],_=[],M=[],m=[];for(let f=0;f<h;f++){let S=f*u-a;for(let A=0;A<c;A++){let y=A*d-r;_.push(y,-S,0),M.push(0,0,1),m.push(A/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let A=S+c*f,y=S+c*(f+1),T=S+1+c*(f+1),b=S+1+c*f;p.push(A,y,b),p.push(y,T,b)}this.setIndex(p),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(M,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Tt=class i extends ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new R,u=new R,p=[],_=[],M=[],m=[];for(let f=0;f<=n;f++){let S=[],A=f/n,y=a+A*o,T=e*Math.cos(y),b=Math.sqrt(e*e-T*T),C=0;f===0&&a===0?C=.5/t:f===n&&l===Math.PI&&(C=-.5/t);for(let v=0;v<=t;v++){let E=v/t,P=s+E*r;d.x=-b*Math.cos(P),d.y=T,d.z=b*Math.sin(P),_.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(E+C,1-A),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){let A=h[f][S+1],y=h[f][S],T=h[f+1][S],b=h[f+1][S+1];(f!==0||a>0)&&p.push(A,y,b),(f!==n-1||l<Math.PI)&&p.push(y,T,b)}this.setIndex(p),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(M,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mn=class i extends ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new R,p=new R,_=new R;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let f=0;f<=s;f++){let S=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(S),p.y=(e+t*Math.cos(m))*Math.sin(S),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),_.subVectors(p,u).normalize(),h.push(_.x,_.y,_.z),d.push(f/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let f=(s+1)*M+m-1,S=(s+1)*(M-1)+m-1,A=(s+1)*(M-1)+m,y=(s+1)*M+m;l.push(f,S,y),l.push(S,A,y)}this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Hn=class i extends ut{constructor(e=new kr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new Me,h=new R,d=[],u=[],p=[],_=[];M(),this.setIndex(_),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(p,2));function M(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),S(),f()}function m(A){h=e.getPointAt(A/t,h);let y=a.normals[A],T=a.binormals[A];for(let b=0;b<=s;b++){let C=b/s*Math.PI*2,v=Math.sin(C),E=-Math.cos(C);l.x=E*y.x+v*T.x,l.y=E*y.y+v*T.y,l.z=E*y.z+v*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let A=1;A<=t;A++)for(let y=1;y<=s;y++){let T=(s+1)*(A-1)+(y-1),b=(s+1)*A+(y-1),C=(s+1)*A+y,v=(s+1)*(A-1)+y;_.push(T,b,v),_.push(b,C,v)}}function S(){for(let A=0;A<=t;A++)for(let y=0;y<=s;y++)c.x=A/t,c.y=y/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new lm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ss(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(qu(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(qu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ln(i){let e={};for(let t=0;t<i.length;t++){let n=ss(i[t]);for(let s in n)e[s]=n[s]}return e}function qu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var mi={clone:ss,merge:ln},hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tt=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Me().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new bt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fs=class extends tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},en=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ji=class extends en{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Oo=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bo=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ss(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Uc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bc,endingEnd:Bc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zc:r=e,o=2*t-n;break;case Hc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zc:a=e,l=2*n-t;break;case Hc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),M=_*_,m=M*_,f=-u*m+2*u*M-u*_,S=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*_+1,A=(-1-p)*m+(1.5+p)*M+.5*_,y=p*m-p*M;for(let T=0;T!==o;++T)r[T]=f*a[h+T]+S*a[c+T]+A*a[l+T]+y*a[d+T];return r}},Ho=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},ko=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vo=class extends Ci{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(n-t)/(s-t),M=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*_;return r}let u=o*2,p=e-1;for(let _=0;_!==o;++_){let M=a[c+_],m=a[l+_],f=p*u+_*2,S=d[f],A=d[f+1],y=e*u+_*2,T=h[y],b=h[y+1],C=fm(n,t,S,T,s);r[_]=Od(C,M,A,b,m)}return r}};function Od(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function dm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function fm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Od(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=dm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Sn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ss(t,this.TimeBufferType),this.values=Ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ss(e.times,Array),values:Ss(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Uc(e.settings)&&(n.settings={inTangents:Ss(e.settings.inTangents,Array),outTangents:Ss(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Er:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case co:t=this.InterpolantFactoryMethodSmooth;break;case Oc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return co;case this.InterpolantFactoryMethodBezier:return Oc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Uc(this.settings)&&(Yu(this.settings.inTangents,e),Yu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&xp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===co,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,p=d+n;for(let _=0;_!==n;++_){let M=t[d+_];if(M!==t[u+_]||M!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Uc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Mo;var Pi=class extends Sn{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Er;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};Go.prototype.ValueTypeName="color";var Wo=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};Wo.prototype.ValueTypeName="number";var Xo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Jn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Gr=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends Sn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Er;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};qo.prototype.ValueTypeName="vector";var Yo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bd=new Yo,Zo=class{constructor(e){this.manager=e!==void 0?e:Bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var es=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wr=class extends es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fc=new bt,Zu=new R,$u=new R,Os=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zu),$u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($u),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Rs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oo=new R,lo=new Jn,qn=new R,Xr=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oo,lo,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(oo,lo,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wi=new R,Ju=new Me,Ku=new Me,Zt=class extends Xr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Ju,Ku),t.subVectors(Ku,Ju)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vc=class extends Os{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ji*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},qr=class extends es{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Vc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Gc=class extends Os{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}},fi=class extends es{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Li=class extends Xr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wc=class extends Os{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Wc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var bs=-90,Es=1,$o=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(bs,Es,e,t);s.layers=this.layers,this.add(s);let r=new Zt(bs,Es,e,t);r.layers=this.layers,this.add(r);let a=new Zt(bs,Es,e,t);a.layers=this.layers,this.add(a);let o=new Zt(bs,Es,e,t);o.layers=this.layers,this.add(o);let l=new Zt(bs,Es,e,t);l.layers=this.layers,this.add(l);let c=new Zt(bs,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Jo=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Zr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=pm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function pm(){this._document.hidden===!1&&this.reset()}var uh="\\[\\]\\.:\\/",mm=new RegExp("["+uh+"]","g"),dh="[^"+uh+"]",gm="[^"+uh.replace("\\.","")+"]",_m=/((?:WC+[\/:])*)/.source.replace("WC",dh),vm=/(WCOD+)?/.source.replace("WCOD",gm),xm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),Mm=new RegExp("^"+_m+vm+xm+ym+"$"),Sm=["material","materials","bones","map"],Xc=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mm,"")}static parseTrackName(e){let t=Mm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Sm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Xc;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ix=new Float32Array(1);var vh=class vh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};vh.prototype.isMatrix2=!0;var qc=vh;function fh(i,e,t,n){let s=bm(n);switch(t){case sh:return i*e;case il:return i*e/s.components*s.byteLength;case sl:return i*e/s.components*s.byteLength;case Oi:return i*e*2/s.components*s.byteLength;case rl:return i*e*2/s.components*s.byteLength;case rh:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case al:return i*e*4/s.components*s.byteLength;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:case hl:return Math.max(i,16)*Math.max(e,8)/4;case ol:case cl:return Math.max(i,8)*Math.max(e,8)/2;case ul:case dl:case pl:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fl:case la:case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case El:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Il:case Ll:case Nl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dl:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ca:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bm(i){switch(i){case gn:case eh:return{byteLength:1,components:1};case ks:case th:case tn:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case Vn:case el:case Cn:return{byteLength:4,components:1};case nh:case ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function of(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function wm(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){let _=d[u],M=d[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,_=d.length;p<_;p++){let M=d[p];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rm=`#ifdef USE_ALPHAHASH
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
#endif`,Cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nm=`#ifdef USE_AOMAP
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
#endif`,Dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um=`#ifdef USE_BATCHING
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
#endif`,Fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hm=`#ifdef USE_IRIDESCENCE
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
#endif`,km=`#ifdef USE_BUMPMAP
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
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jm=`#define PI 3.141592653589793
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
} // validated`,Km=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qm=`vec3 transformedNormal = objectNormal;
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
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rg=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pg=`#ifdef USE_GRADIENTMAP
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
}`,mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xg=`#ifdef USE_ENVMAP
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
#endif`,yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eg=`PhysicalMaterial material;
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
#endif`,Tg=`uniform sampler2D dfgLUT;
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
}`,wg=`
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
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Og=`#if defined( USE_POINTS_UV )
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
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`#ifdef USE_MORPHTARGETS
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
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jg=`#ifdef USE_NORMALMAP
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
#endif`,Kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d0=`float getShadowMask() {
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
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
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
}`,D0=`#if DEPTH_PACKING == 3200
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
}`,U0=`#define DISTANCE
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
}`,F0=`#define DISTANCE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,H0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,V0=`uniform vec3 diffuse;
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
}`,G0=`#define LAMBERT
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define MATCAP
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define NORMAL
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
}`,Z0=`#define NORMAL
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
}`,$0=`#define PHONG
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
}`,J0=`#define PHONG
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
}`,K0=`#define STANDARD
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
}`,Q0=`#define STANDARD
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
}`,j0=`#define TOON
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
}`,e_=`#define TOON
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
}`,t_=`uniform float size;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 color;
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
}`,r_=`uniform float rotation;
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
}`,a_=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Am,alphahash_pars_fragment:Rm,alphamap_fragment:Cm,alphamap_pars_fragment:Pm,alphatest_fragment:Im,alphatest_pars_fragment:Lm,aomap_fragment:Nm,aomap_pars_fragment:Dm,batching_pars_vertex:Um,batching_vertex:Fm,begin_vertex:Om,beginnormal_vertex:Bm,bsdfs:zm,iridescence_fragment:Hm,bumpmap_pars_fragment:km,clipping_planes_fragment:Vm,clipping_planes_pars_fragment:Gm,clipping_planes_pars_vertex:Wm,clipping_planes_vertex:Xm,color_fragment:qm,color_pars_fragment:Ym,color_pars_vertex:Zm,color_vertex:$m,common:Jm,cube_uv_reflection_fragment:Km,defaultnormal_vertex:Qm,displacementmap_pars_vertex:jm,displacementmap_vertex:eg,emissivemap_fragment:tg,emissivemap_pars_fragment:ng,colorspace_fragment:ig,colorspace_pars_fragment:sg,envmap_fragment:rg,envmap_common_pars_fragment:ag,envmap_pars_fragment:og,envmap_pars_vertex:lg,envmap_physical_pars_fragment:xg,envmap_vertex:cg,fog_vertex:hg,fog_pars_vertex:ug,fog_fragment:dg,fog_pars_fragment:fg,gradientmap_pars_fragment:pg,lightmap_pars_fragment:mg,lights_lambert_fragment:gg,lights_lambert_pars_fragment:_g,lights_pars_begin:vg,lights_toon_fragment:yg,lights_toon_pars_fragment:Mg,lights_phong_fragment:Sg,lights_phong_pars_fragment:bg,lights_physical_fragment:Eg,lights_physical_pars_fragment:Tg,lights_fragment_begin:wg,lights_fragment_maps:Ag,lights_fragment_end:Rg,lightprobes_pars_fragment:Cg,logdepthbuf_fragment:Pg,logdepthbuf_pars_fragment:Ig,logdepthbuf_pars_vertex:Lg,logdepthbuf_vertex:Ng,map_fragment:Dg,map_pars_fragment:Ug,map_particle_fragment:Fg,map_particle_pars_fragment:Og,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:zg,morphinstance_vertex:Hg,morphcolor_vertex:kg,morphnormal_vertex:Vg,morphtarget_pars_vertex:Gg,morphtarget_vertex:Wg,normal_fragment_begin:Xg,normal_fragment_maps:qg,normal_pars_fragment:Yg,normal_pars_vertex:Zg,normal_vertex:$g,normalmap_pars_fragment:Jg,clearcoat_normal_fragment_begin:Kg,clearcoat_normal_fragment_maps:Qg,clearcoat_pars_fragment:jg,iridescence_pars_fragment:e0,opaque_fragment:t0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:r0,dithering_pars_fragment:a0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:d0,skinbase_vertex:f0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:_0,specularmap_pars_fragment:v0,tonemapping_fragment:x0,tonemapping_pars_fragment:y0,transmission_fragment:M0,transmission_pars_fragment:S0,uv_pars_fragment:b0,uv_pars_vertex:E0,uv_vertex:T0,worldpos_vertex:w0,background_vert:A0,background_frag:R0,backgroundCube_vert:C0,backgroundCube_frag:P0,cube_vert:I0,cube_frag:L0,depth_vert:N0,depth_frag:D0,distance_vert:U0,distance_frag:F0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:H0,meshbasic_vert:k0,meshbasic_frag:V0,meshlambert_vert:G0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:q0,meshnormal_vert:Y0,meshnormal_frag:Z0,meshphong_vert:$0,meshphong_frag:J0,meshphysical_vert:K0,meshphysical_frag:Q0,meshtoon_vert:j0,meshtoon_frag:e_,points_vert:t_,points_frag:n_,shadow_vert:i_,shadow_frag:s_,sprite_vert:r_,sprite_frag:a_},ye={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ti={basic:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:ln([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:ln([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new pe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:ln([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:ln([ye.points,ye.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:ln([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:ln([ye.common,ye.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:ln([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:ln([ye.sprite,ye.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:ln([ye.common,ye.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:ln([ye.lights,ye.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ti.physical={uniforms:ln([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var Hl={r:0,b:0,g:0},o_=new bt,lf=new We;lf.set(-1,0,0,0,1,0,0,0,1);function l_(i,e,t,n,s,r){let a=new pe(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let y=S.backgroundBlurriness>0;A=e.get(A,y)}return A}function _(S){let A=!1,y=p(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),A=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,A){let y=p(A);y&&(y.isCubeTexture||y.mapping===na)?(c===void 0&&(c=new Re(new Us(1,1,1),new tt({name:"BackgroundCubeMaterial",uniforms:ss(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(o_.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(lf),c.material.toneMapped=et.getTransfer(y.colorSpace)!==mt,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Re(new Vr(2,2),new tt({name:"BackgroundMaterial",uniforms:ss(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=et.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(Hl,hh(i)),t.buffers.color.setClear(Hl.r,Hl.g,Hl.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:_,addToRenderList:M,dispose:f}}function c_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(B,z,k,D,X){let K=!1,J=d(B,D,k,z);r!==J&&(r=J,c(r.object)),K=p(B,D,k,X),K&&_(B,D,k,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(B,z,k,D),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(B){return i.bindVertexArray(B)}function h(B){return i.deleteVertexArray(B)}function d(B,z,k,D){let X=D.wireframe===!0,K=n[z.id];K===void 0&&(K={},n[z.id]=K);let J=B.isInstancedMesh===!0?B.id:0,re=K[J];re===void 0&&(re={},K[J]=re);let Y=re[k.id];Y===void 0&&(Y={},re[k.id]=Y);let te=Y[X];return te===void 0&&(te=u(l()),Y[X]=te),te}function u(B){let z=[],k=[],D=[];for(let X=0;X<t;X++)z[X]=0,k[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:D,object:B,attributes:{},index:null}}function p(B,z,k,D){let X=r.attributes,K=z.attributes,J=0,re=k.getAttributes();for(let Y in re)if(re[Y].location>=0){let se=X[Y],Ne=K[Y];if(Ne===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(Ne=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(Ne=B.instanceColor)),se===void 0||se.attribute!==Ne||Ne&&se.data!==Ne.data)return!0;J++}return r.attributesNum!==J||r.index!==D}function _(B,z,k,D){let X={},K=z.attributes,J=0,re=k.getAttributes();for(let Y in re)if(re[Y].location>=0){let se=K[Y];se===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(se=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(se=B.instanceColor));let Ne={};Ne.attribute=se,se&&se.data&&(Ne.data=se.data),X[Y]=Ne,J++}r.attributes=X,r.attributesNum=J,r.index=D}function M(){let B=r.newAttributes;for(let z=0,k=B.length;z<k;z++)B[z]=0}function m(B){f(B,0)}function f(B,z){let k=r.newAttributes,D=r.enabledAttributes,X=r.attributeDivisors;k[B]=1,D[B]===0&&(i.enableVertexAttribArray(B),D[B]=1),X[B]!==z&&(i.vertexAttribDivisor(B,z),X[B]=z)}function S(){let B=r.newAttributes,z=r.enabledAttributes;for(let k=0,D=z.length;k<D;k++)z[k]!==B[k]&&(i.disableVertexAttribArray(k),z[k]=0)}function A(B,z,k,D,X,K,J){J===!0?i.vertexAttribIPointer(B,z,k,X,K):i.vertexAttribPointer(B,z,k,D,X,K)}function y(B,z,k,D){M();let X=D.attributes,K=k.getAttributes(),J=z.defaultAttributeValues;for(let re in K){let Y=K[re];if(Y.location>=0){let te=X[re];if(te===void 0&&(re==="instanceMatrix"&&B.instanceMatrix&&(te=B.instanceMatrix),re==="instanceColor"&&B.instanceColor&&(te=B.instanceColor)),te!==void 0){let se=te.normalized,Ne=te.itemSize,Fe=e.get(te);if(Fe===void 0)continue;let _t=Fe.buffer,rt=Fe.type,at=Fe.bytesPerElement,Q=rt===i.INT||rt===i.UNSIGNED_INT||te.gpuType===el;if(te.isInterleavedBufferAttribute){let ne=te.data,Te=ne.stride,ke=te.offset;if(ne.isInstancedInterleavedBuffer){for(let Se=0;Se<Y.locationSize;Se++)f(Y.location+Se,ne.meshPerAttribute);B.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Se=0;Se<Y.locationSize;Se++)m(Y.location+Se);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Se=0;Se<Y.locationSize;Se++)A(Y.location+Se,Ne/Y.locationSize,rt,se,Te*at,(ke+Ne/Y.locationSize*Se)*at,Q)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<Y.locationSize;ne++)f(Y.location+ne,te.meshPerAttribute);B.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<Y.locationSize;ne++)m(Y.location+ne);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let ne=0;ne<Y.locationSize;ne++)A(Y.location+ne,Ne/Y.locationSize,rt,se,Ne*at,Ne/Y.locationSize*ne*at,Q)}}else if(J!==void 0){let se=J[re];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(Y.location,se);break;case 3:i.vertexAttrib3fv(Y.location,se);break;case 4:i.vertexAttrib4fv(Y.location,se);break;default:i.vertexAttrib1fv(Y.location,se)}}}}S()}function T(){E();for(let B in n){let z=n[B];for(let k in z){let D=z[k];for(let X in D){let K=D[X];for(let J in K)h(K[J].object),delete K[J];delete D[X]}}delete n[B]}}function b(B){if(n[B.id]===void 0)return;let z=n[B.id];for(let k in z){let D=z[k];for(let X in D){let K=D[X];for(let J in K)h(K[J].object),delete K[J];delete D[X]}}delete n[B.id]}function C(B){for(let z in n){let k=n[z];for(let D in k){let X=k[D];if(X[B.id]===void 0)continue;let K=X[B.id];for(let J in K)h(K[J].object),delete K[J];delete X[B.id]}}}function v(B){for(let z in n){let k=n[z],D=B.isInstancedMesh===!0?B.id:0,X=k[D];if(X!==void 0){for(let K in X){let J=X[K];for(let re in J)h(J[re].object),delete J[re];delete X[K]}delete k[D],Object.keys(k).length===0&&delete n[z]}}}function E(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function h_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function u_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let v=C===tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==gn&&C!==Cn&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:y,maxSamples:T,samples:b}}function d_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Un,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,A=S*4,y=f.clippingState||null;l.value=y,y=h(_,u,A,p);for(let T=0;T!==A;++T)y[T]=t[T];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,_){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,_!==!0||m===null){let f=p+M*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,y=p;A!==M;++A,y+=4)a.copy(d[A]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var Xs=4,f_=6,p_=20,m_=256,ua=new Li,zd=new pe,xh=null,yh=0,Mh=0,Sh=!1,g_=new R,rs=new R,Ys=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=g_}=r;xh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xh,yh,Mh),this._renderer.xr.enabled=Sh,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:tn,format:Pn,colorSpace:Tr,depthBuffer:!1},s=Hd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=__(r)),this._blurMaterial=x_(r,e,t),this._ggxMaterial=v_(r,e,t)}return s}_compileMaterial(e){let t=new Re(new ut,e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,n,s,r){let l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(zd),d.toneMapping=kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new Us,new Gt({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,f=!0):(m.color.copy(zd),f=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let T=this._cubeSize;Ws(s,y*T,A>2?T:0,T,T),d.setRenderTarget(s),f&&d.render(M,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Di||e.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ws(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ua)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:_}=this,M=this._sizeLods[n],m=3*M*(n>_-Xs?n-_+Xs:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,Ws(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(o,ua),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Ws(e,m,f,3*M,2*M),s.setRenderTarget(e),s.render(o,ua)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Xs?s-this._lodMax+Xs:0),u=4*(this._cubeSize-h);Ws(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,ua)}};function __(i){let e=[],t=[],n=i,s=i-Xs+1+f_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,_=new Float32Array(p*u*d),M=new Float32Array(p*u*d);for(let f=0;f<d;f++){let S=f%3*2/3-1,A=f>2?0:-1,y=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];_.set(y,p*u*f);for(let T=0;T<u;T++){let b=h[T*2]*2-1,C=h[T*2+1]*2-1;f===0?rs.set(1,C,b):f===1?rs.set(-b,1,-C):f===2?rs.set(-b,C,1):f===3?rs.set(-1,C,-b):f===4?rs.set(-b,-1,C):rs.set(b,C,-1),rs.toArray(M,(f*u+T)*p)}}let m=new ut;m.setAttribute("position",new Et(_,p)),m.setAttribute("outputDirection",new Et(M,p)),t.push(new Re(m,null)),n>Xs&&n--}return{lodMeshes:t,sizeLods:e}}function Hd(i,e,t){let n=new zt(i,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function v_(i,e,t){return new tt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function x_(i,e,t){return new tt({name:"SphericalGaussianBlur",defines:{SAMPLES:p_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function kd(){return new tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Vd(){return new tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Wl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vl=class extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Us(5,5,5),r=new tt({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Rn});r.uniforms.tEquirect.value=t;let a=new Re(s,r),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=jt),new $o(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function y_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Hs||p===Qo)if(e.has(u)){let _=e.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let M=new Vl(_.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,_=p===Hs||p===Qo,M=p===Di||p===is;if(_||M){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Ys(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return _&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new Ys(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Hs?u.mapping=Di:p===Qo&&(u.mapping=is),u}function l(u){let p=0,_=6;for(let M=0;M<_;M++)u[M]!==void 0&&p++;return p===_}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function M_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&$i("WebGLRenderer: "+n+" extension not supported."),s}}}function S_(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)e.update(u[p],i.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,_=d.attributes.position,M=0;if(_===void 0)return;if(p!==null){let S=p.array;M=p.version;for(let A=0,y=S.length;A<y;A+=3){let T=S[A+0],b=S[A+1],C=S[A+2];u.push(T,b,b,C,C,T)}}else{let S=_.array;M=_.version;for(let A=0,y=S.length/3-1;A<y;A+=3){let T=A+0,b=A+1,C=A+2;u.push(T,b,b,C,C,T)}}let m=new(_.count>=65535?Nr:Lr)(u,1);m.version=M;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function b_(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*a,p),t.update(u,n,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let M=0;for(let m=0;m<p;m++)M+=u[m];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function E_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function T_(i,e,t){let n=new WeakMap,s=new Nt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;p===!0&&(A=1),_===!0&&(A=2),M===!0&&(A=3);let y=o.attributes.position.count*A,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*T*4*d),C=new Rr(b,y,T,d);C.type=Cn,C.needsUpdate=!0;let v=A*4;for(let P=0;P<d;P++){let B=m[P],z=f[P],k=S[P],D=y*T*4*P;for(let X=0;X<B.count;X++){let K=X*v;p===!0&&(s.fromBufferAttribute(B,X),b[D+K+0]=s.x,b[D+K+1]=s.y,b[D+K+2]=s.z,b[D+K+3]=0),_===!0&&(s.fromBufferAttribute(z,X),b[D+K+4]=s.x,b[D+K+5]=s.y,b[D+K+6]=s.z,b[D+K+7]=0),M===!0&&(s.fromBufferAttribute(k,X),b[D+K+8]=s.x,b[D+K+9]=s.y,b[D+K+10]=s.z,b[D+K+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new Me(y,T)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function w_(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var A_={[Jr]:"LINEAR_TONE_MAPPING",[Kr]:"REINHARD_TONE_MAPPING",[Qr]:"CINEON_TONE_MAPPING",[ns]:"ACES_FILMIC_TONE_MAPPING",[ea]:"AGX_TONE_MAPPING",[ta]:"NEUTRAL_TONE_MAPPING",[jr]:"CUSTOM_TONE_MAPPING"};function R_(i,e,t,n,s,r){let a=new zt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ut;c.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let h=new Fs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Re(c,h),u=new Li(-1,1,1,-1,0,1),p=null,_=null,M=!1,m,f=null,S=[],A=!1;this.setSize=function(y,T){a.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let b=0;b<S.length;b++){let C=S[b];C.setSize&&C.setSize(y,T)}},this.setEffects=function(y){S=y,A=S.length>0&&S[0].isRenderPass===!0;let T=a.width,b=a.height;S.length>0&&o===null&&(o=new zt(T,b,{type:tn,depthBuffer:!1,stencilBuffer:!1}),l=new zt(T,b,{type:tn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let v=S[C];v.setSize&&v.setSize(T,b)}},this.begin=function(y,T){if(M||y.toneMapping===kn&&S.length===0)return!1;if(f=T,T!==null){let b=T.width,C=T.height;(a.width!==b||a.height!==C)&&this.setSize(b,C)}return A===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=kn,!0},this.hasRenderPass=function(){return A},this.end=function(y,T){y.toneMapping=m,M=!0;let b=a,C=o;for(let v=0;v<S.length;v++){let E=S[v];E.enabled!==!1&&(E.render(y,C,b,T),E.needsSwap!==!1&&(b=C,C=C===o?l:o))}if(p!==y.outputColorSpace||_!==y.toneMapping){p=y.outputColorSpace,_=y.toneMapping,h.defines={},et.getTransfer(p)===mt&&(h.defines.SRGB_TRANSFER="");let v=A_[_];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(f),y.render(d,u),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var cf=new dn,Th=new Ri(1,1),hf=new Rr,uf=new Eo,df=new Fr,Gd=[],Wd=[],Xd=new Float32Array(16),qd=new Float32Array(9),Yd=new Float32Array(4);function Zs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gd[s];if(r===void 0&&(r=new Float32Array(s),Gd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xl(i,e){let t=Wd[e];t===void 0&&(t=new Int32Array(e),Wd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function P_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function N_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Yd.set(n),i.uniformMatrix2fv(this.addr,!1,Yd),qt(t,n)}}function D_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;qd.set(n),i.uniformMatrix3fv(this.addr,!1,qd),qt(t,n)}}function U_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Xd.set(n),i.uniformMatrix4fv(this.addr,!1,Xd),qt(t,n)}}function F_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function O_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function B_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function H_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function k_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function G_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function W_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Th.compareFunction=t.isReversedDepthBuffer()?zl:Bl,r=Th):r=cf,t.setTexture2D(e||r,s)}function X_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||uf,s)}function q_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||df,s)}function Y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hf,s)}function Z_(i){switch(i){case 5126:return C_;case 35664:return P_;case 35665:return I_;case 35666:return L_;case 35674:return N_;case 35675:return D_;case 35676:return U_;case 5124:case 35670:return F_;case 35667:case 35671:return O_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return H_;case 36294:return k_;case 36295:return V_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}function $_(i,e){i.uniform1fv(this.addr,e)}function J_(i,e){let t=Zs(e,this.size,2);i.uniform2fv(this.addr,t)}function K_(i,e){let t=Zs(e,this.size,3);i.uniform3fv(this.addr,t)}function Q_(i,e){let t=Zs(e,this.size,4);i.uniform4fv(this.addr,t)}function j_(i,e){let t=Zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ev(i,e){let t=Zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tv(i,e){let t=Zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nv(i,e){i.uniform1iv(this.addr,e)}function iv(i,e){i.uniform2iv(this.addr,e)}function sv(i,e){i.uniform3iv(this.addr,e)}function rv(i,e){i.uniform4iv(this.addr,e)}function av(i,e){i.uniform1uiv(this.addr,e)}function ov(i,e){i.uniform2uiv(this.addr,e)}function lv(i,e){i.uniform3uiv(this.addr,e)}function cv(i,e){i.uniform4uiv(this.addr,e)}function hv(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Th:a=cf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function uv(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||uf,r[a])}function dv(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||df,r[a])}function fv(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hf,r[a])}function pv(i){switch(i){case 5126:return $_;case 35664:return J_;case 35665:return K_;case 35666:return Q_;case 35674:return j_;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return av;case 36294:return ov;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return fv}}var wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Z_(t.type)}},Ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pv(t.type)}},Rh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},bh=/(\w+)(\])?(\[|\.)?/g;function Zd(i,e){i.seq.push(e),i.map[e.id]=e}function mv(i,e,t){let n=i.name,s=n.length;for(bh.lastIndex=0;;){let r=bh.exec(n),a=bh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Zd(t,c===void 0?new wh(o,i,e):new Ah(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Rh(o),Zd(t,d)),t=d}}}var qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);mv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function $d(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var gv=37297,_v=0;function vv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Jd=new We;function xv(i){et._getMatrix(Jd,et.workingColorSpace,i);let e=`mat3( ${Jd.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case wr:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+vv(i.getShaderSource(e),o)}else return r}function yv(i,e){let t=xv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Mv={[Jr]:"Linear",[Kr]:"Reinhard",[Qr]:"Cineon",[ns]:"ACESFilmic",[ea]:"AgX",[ta]:"Neutral",[jr]:"Custom"};function Sv(i,e){let t=Mv[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var kl=new R;function bv(){et.getLuminanceCoefficients(kl);let i=kl.x.toFixed(4),e=kl.y.toFixed(4),t=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function Tv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function fa(i){return i!==""}function Qd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(i){return i.replace(Av,Cv)}var Rv=new Map;function Cv(i,e){let t=Ke[e];if(t===void 0){let n=Rv.get(e);if(n!==void 0)t=Ke[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ch(t)}var Pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(i){return i.replace(Pv,Iv)}function Iv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Lv={[$r]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function Nv(i){return Lv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Dv={[Di]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE_UV"};function Uv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Dv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fv={[is]:"ENVMAP_MODE_REFRACTION"};function Ov(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bv={[Qc]:"ENVMAP_BLENDING_MULTIPLY",[xd]:"ENVMAP_BLENDING_MIX",[yd]:"ENVMAP_BLENDING_ADD"};function zv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Bv[i.combine]||"ENVMAP_BLENDING_NONE"}function Hv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Nv(t),c=Uv(t),h=Ov(t),d=zv(t),u=Hv(t),p=Ev(t),_=Tv(r),M=s.createProgram(),m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fa).join(`
`),f.length>0&&(f+=`
`)):(m=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),f=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==kn?Sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,yv("linearToOutputTexel",t.outputColorSpace),bv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),a=Ch(a),a=Qd(a,t),a=jd(a,t),o=Ch(o),o=Qd(o,t),o=jd(o,t),a=ef(a),o=ef(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=S+m+a,y=S+f+o,T=$d(s,s.VERTEX_SHADER,A),b=$d(s,s.FRAGMENT_SHADER,y);s.attachShader(M,T),s.attachShader(M,b),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(B){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(M)||"",k=s.getShaderInfoLog(T)||"",D=s.getShaderInfoLog(b)||"",X=z.trim(),K=k.trim(),J=D.trim(),re=!0,Y=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,T,b);else{let te=Kd(s,T,"vertex"),se=Kd(s,b,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+X+`
`+te+`
`+se)}else X!==""?He("WebGLProgram: Program Info Log:",X):(K===""||J==="")&&(Y=!1);Y&&(B.diagnostics={runnable:re,programLog:X,vertexShader:{log:K,prefix:m},fragmentShader:{log:J,prefix:f}})}s.deleteShader(T),s.deleteShader(b),v=new qs(s,M),E=wv(s,M)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(M,gv)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_v++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=b,this}var Vv=0,Ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ih(e),t.set(e,n)),n}},Ih=class{constructor(e){this.id=Vv++,this.code=e,this.usedTimes=0}};function Gv(i){return i===Oi||i===la||i===ca}function Wv(i,e,t,n,s,r){let a=new Cr,o=new Ph,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,E,P,B,z,k){let D=B.fog,X=z.geometry,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?B.environment:null,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,re=e.get(v.envMap||K,J),Y=re&&re.mapping===na?re.image.height:null,te=p[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&He("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let se=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ne=se!==void 0?se.length:0,Fe=0;X.morphAttributes.position!==void 0&&(Fe=1),X.morphAttributes.normal!==void 0&&(Fe=2),X.morphAttributes.color!==void 0&&(Fe=3);let _t,rt,at,Q;if(te){let vt=ti[te];_t=vt.vertexShader,rt=vt.fragmentShader}else{_t=v.vertexShader,rt=v.fragmentShader;let vt=o.getVertexShaderStage(v),ft=o.getFragmentShaderStage(v);o.update(v,vt,ft),at=vt.id,Q=ft.id}let ne=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),ke=z.isInstancedMesh===!0,Se=z.isBatchedMesh===!0,Ze=!!v.map,Ut=!!v.matcap,$e=!!re,nt=!!v.aoMap,xt=!!v.lightMap,Qe=!!v.bumpMap&&v.wireframe===!1,yt=!!v.normalMap,Ft=!!v.displacementMap,Kt=!!v.emissiveMap,gt=!!v.metalnessMap,wt=!!v.roughnessMap,O=v.anisotropy>0,Ht=v.clearcoat>0,dt=v.dispersion>0,w=v.retroreflectivity>0,g=v.iridescence>0,H=v.sheen>0,W=v.transmission>0,Z=O&&!!v.anisotropyMap,ce=Ht&&!!v.clearcoatMap,he=Ht&&!!v.clearcoatNormalMap,$=Ht&&!!v.clearcoatRoughnessMap,ee=g&&!!v.iridescenceMap,ue=g&&!!v.iridescenceThicknessMap,De=H&&!!v.sheenColorMap,me=H&&!!v.sheenRoughnessMap,le=!!v.specularMap,Ue=!!v.specularColorMap,Be=!!v.specularIntensityMap,Ge=W&&!!v.transmissionMap,U=W&&!!v.thicknessMap,de=!!v.gradientMap,j=!!v.alphaMap,fe=v.alphaTest>0,ve=!!v.alphaHash,ie=!!v.extensions,Oe=kn;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Oe=i.toneMapping);let Ie={shaderID:te,shaderType:v.type,shaderName:v.name,vertexShader:_t,fragmentShader:rt,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Se,batchingColor:Se&&z._colorsTexture!==null,instancing:ke,instancingColor:ke&&z.instanceColor!==null,instancingMorph:ke&&z.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ze,matcap:Ut,envMap:$e,envMapMode:$e&&re.mapping,envMapCubeUVHeight:Y,aoMap:nt,lightMap:xt,bumpMap:Qe,normalMap:yt,displacementMap:Ft,emissiveMap:Kt,normalMapObjectSpace:yt&&v.normalMapType===bd,normalMapTangentSpace:yt&&v.normalMapType===Ol,packedNormalMap:yt&&v.normalMapType===Ol&&Gv(v.normalMap.format),metalnessMap:gt,roughnessMap:wt,anisotropy:O,anisotropyMap:Z,clearcoat:Ht,clearcoatMap:ce,clearcoatNormalMap:he,clearcoatRoughnessMap:$,dispersion:dt,retroreflection:w,iridescence:g,iridescenceMap:ee,iridescenceThicknessMap:ue,sheen:H,sheenColorMap:De,sheenRoughnessMap:me,specularMap:le,specularColorMap:Ue,specularIntensityMap:Be,transmission:W,transmissionMap:Ge,thicknessMap:U,gradientMap:de,opaque:v.transparent===!1&&v.blending===zs&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:fe,alphaHash:ve,combine:v.combine,mapUv:Ze&&_(v.map.channel),aoMapUv:nt&&_(v.aoMap.channel),lightMapUv:xt&&_(v.lightMap.channel),bumpMapUv:Qe&&_(v.bumpMap.channel),normalMapUv:yt&&_(v.normalMap.channel),displacementMapUv:Ft&&_(v.displacementMap.channel),emissiveMapUv:Kt&&_(v.emissiveMap.channel),metalnessMapUv:gt&&_(v.metalnessMap.channel),roughnessMapUv:wt&&_(v.roughnessMap.channel),anisotropyMapUv:Z&&_(v.anisotropyMap.channel),clearcoatMapUv:ce&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(v.sheenRoughnessMap.channel),specularMapUv:le&&_(v.specularMap.channel),specularColorMapUv:Ue&&_(v.specularColorMap.channel),specularIntensityMapUv:Be&&_(v.specularIntensityMap.channel),transmissionMapUv:Ge&&_(v.transmissionMap.channel),thicknessMapUv:U&&_(v.thicknessMap.channel),alphaMapUv:j&&_(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(yt||O),vertexNormals:!!X.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(Ze||j),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||X.attributes.normal===void 0&&yt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Te,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Fe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ze&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:Kt&&v.emissiveMap.isVideoTexture===!0&&et.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===Wt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function m(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)E.push(P),E.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(f(E,v),S(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function f(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function S(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){let E=p[v.type],P;if(E){let B=ti[E];P=mi.clone(B.uniforms)}else P=v.uniforms;return P}function y(v,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new kv(i,E,v,s),c.push(P),h.set(E,P)),P}function T(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:C}}function Xv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function qv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function nf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,M,m,f){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},i[e]=S):(S.id=u.id,S.object=u,S.geometry=p,S.material=_,S.materialVariant=a(u),S.groupOrder=M,S.renderOrder=u.renderOrder,S.z=m,S.group=f),e++,S}function l(u,p,_,M,m,f,S){S.reversedDepth===!0&&(m=-m);let A=o(u,p,_,M,m,f);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):t.push(A)}function c(u,p,_,M,m,f){let S=o(u,p,_,M,m,f);_.transmission>0?n.unshift(S):_.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,p){t.length>1&&t.sort(u||qv),n.length>1&&n.sort(p||nf),s.length>1&&s.sort(p||nf)}function d(){for(let u=e,p=i.length;u<p;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Yv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new sf,i.set(n,[a])):s>=r.length?(a=new sf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new pe};break;case"SpotLight":t={position:new R,direction:new R,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function $v(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jv=0;function Kv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qv(i){let e=new Zv,t=$v(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new bt,a=new bt;function o(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let p=0,_=0,M=0,m=0,f=0,S=0,A=0,y=0,T=0,b=0,C=0,v=0,E=0,P=0;c.sort(Kv);for(let z=0,k=c.length;z<k;z++){let D=c[z],X=D.color,K=D.intensity,J=D.distance,re=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Oi?re=D.shadow.map.texture:re=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=X.r*K,d+=X.g*K,u+=X.b*K;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],K);P++}else if(D.isSunLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let te=D.shadow,se=t.get(D);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[_]=se,n.sunShadowMap[_]=re;let Ne=te.getViewportCount();for(let Fe=0;Fe<Ne;Fe++)n.sunShadowMatrix[M+Fe]=te.getMatrix(Fe),n.sunShadowCascade[M+Fe]=te._cascadeData[Fe];M+=Ne,_++}n.sun[p]=Y,p++}else if(D.isDirectionalLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let te=D.shadow,se=t.get(D);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,n.directionalShadow[m]=se,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=D.shadow.matrix,T++}n.directional[m]=Y,m++}else if(D.isSpotLight){let Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(X).multiplyScalar(K),Y.distance=J,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[S]=Y;let te=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,te.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[S]=te.matrix,D.castShadow){let se=t.get(D);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,n.spotShadow[S]=se,n.spotShadowMap[S]=re,C++}S++}else if(D.isRectAreaLight){let Y=e.get(D);Y.color.copy(X).multiplyScalar(K),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=Y,A++}else if(D.isPointLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let te=D.shadow,se=t.get(D);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,se.shadowCameraNear=te.camera.near,se.shadowCameraFar=te.camera.far,n.pointShadow[f]=se,n.pointShadowMap[f]=re,n.pointShadowMatrix[f]=D.shadow.matrix,b++}n.point[f]=Y,f++}else if(D.isHemisphereLight){let Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(K),Y.groundColor.copy(D.groundColor).multiplyScalar(K),n.hemi[y]=Y,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let B=n.hash;(B.sunLength!==p||B.directionalLength!==m||B.pointLength!==f||B.spotLength!==S||B.rectAreaLength!==A||B.hemiLength!==y||B.numSunShadows!==_||B.numDirectionalShadows!==T||B.numPointShadows!==b||B.numSpotShadows!==C||B.numSpotMaps!==v||B.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=f,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,B.sunLength=p,B.directionalLength=m,B.pointLength=f,B.spotLength=S,B.rectAreaLength=A,B.hemiLength=y,B.numSunShadows=_,B.numDirectionalShadows=T,B.numPointShadows=b,B.numSpotShadows=C,B.numSpotMaps=v,B.numLightProbes=P,n.version=Jv++)}function l(c,h){let d=0,u=0,p=0,_=0,M=0,m=0,f=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let y=c[S];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),d++}else if(y.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),u++}else if(y.isSpotLight){let T=n.spot[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),_++}else if(y.isRectAreaLight){let T=n.rectArea[M];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),a.identity(),r.copy(y.matrixWorld),r.premultiply(f),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let T=n.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function rf(i){let e=new Qv(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function jv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new rf(i),e.set(s,[o])):r>=a.length?(o=new rf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
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
}`,nx=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],ix=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],af=new bt,da=new R,Eh=new R;function sx(i,e,t){let n=new Ns,s=new Me,r=new Me,a=new Nt,o=new Oo,l=new Bo,c={},h=t.maxTextureSize,d={[Ni]:Wt,[Wt]:Ni,[on]:on},u=new tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:ex,fragmentShader:tx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new ut;_.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Re(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r;let f=this.type;this.render=function(b,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===ed&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$r);let E=i.getRenderTarget(),P=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Rn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=f!==this.type;k&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(X=>X.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,X=b.length;D<X;D++){let K=b[D],J=K.shadow;if(J===void 0){He("WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let re=J.getFrameExtents();s.multiply(re),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,J.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=Y,J.map===null||k===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Bs){if(K.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new zt(s.x,s.y,{format:Oi,type:tn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),J.map.texture.name=K.name+".shadowMap",J.map.depthTexture=new Ri(s.x,s.y,Cn),J.map.depthTexture.name=K.name+".shadowMapDepth",J.map.depthTexture.format=Zn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=$t,J.map.depthTexture.magFilter=$t}else K.isPointLight?(J.map=new Vl(s.x),J.map.depthTexture=new Ro(s.x,Vn)):(J.map=new zt(s.x,s.y),J.map.depthTexture=new Ri(s.x,s.y,Vn)),J.map.depthTexture.name=K.name+".shadowMap",J.map.depthTexture.format=Zn,this.type===$r?(J.map.depthTexture.compareFunction=Y?zl:Bl,J.map.depthTexture.minFilter=jt,J.map.depthTexture.magFilter=jt):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=$t,J.map.depthTexture.magFilter=$t);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let te=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();K.isPointLight!==!0&&J.updateMatrices(K,v);for(let se=0;se<te;se++){let Ne=J.getCamera(se);if(K.isPointLight){let Fe=J.camera,_t=J.matrix,rt=K.distance||Fe.far;rt!==Fe.far&&(Fe.far=rt,Fe.updateProjectionMatrix()),da.setFromMatrixPosition(K.matrixWorld),Fe.position.copy(da),Eh.copy(Fe.position),Eh.add(nx[se]),Fe.up.copy(ix[se]),Fe.lookAt(Eh),Fe.updateMatrixWorld(),_t.makeTranslation(-da.x,-da.y,-da.z),af.multiplyMatrices(Fe.projectionMatrix,Fe.matrixWorldInverse),J._frustum.setFromProjectionMatrix(af,Fe.coordinateSystem,Fe.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,se),i.clear();else{se===0&&(i.setRenderTarget(J.map),i.clear());let Fe=J.getViewport(se);a.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),z.viewport(a)}n=J.getFrustum(se),y(C,v,Ne,K,this.type)}J.isPointLightShadow!==!0&&this.type===Bs&&S(J,v),J.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,P,B)};function S(b,C){let v=e.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new zt(s.x,s.y,{format:Oi,type:tn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,v,u,M,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,v,p,M,null)}function A(b,C,v,E){let P=null,B=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(B!==void 0)P=B;else if(P=v.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=P.uuid,k=C.uuid,D=c[z];D===void 0&&(D={},c[z]=D);let X=D[k];X===void 0&&(X=P.clone(),D[k]=X,C.addEventListener("dispose",T)),P=X}if(P.visible=C.visible,P.wireframe=C.wireframe,E===Bs?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=i.properties.get(P);z.light=v}return P}function y(b,C,v,E,P){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Bs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let k=e.update(b),D=b.material;if(Array.isArray(D)){let X=k.groups;for(let K=0,J=X.length;K<J;K++){let re=X[K],Y=D[re.materialIndex];if(Y&&Y.visible){let te=A(b,Y,E,P);b.onBeforeShadow(i,b,C,v,k,te,re),i.renderBufferDirect(v,null,k,te,b,re),b.onAfterShadow(i,b,C,v,k,te,re)}}}else if(D.visible){let X=A(b,D,E,P);b.onBeforeShadow(i,b,C,v,k,X,null),i.renderBufferDirect(v,null,k,X,b,null),b.onAfterShadow(i,b,C,v,k,X,null)}}let z=b.children;for(let k=0,D=z.length;k<D;k++)y(z[k],C,v,E,P)}function T(b){b.target.removeEventListener("dispose",T);for(let v in c){let E=c[v],P=b.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function rx(i,e){function t(){let U=!1,de=new Nt,j=null,fe=new Nt(0,0,0,0);return{setMask:function(ve){j!==ve&&!U&&(i.colorMask(ve,ve,ve,ve),j=ve)},setLocked:function(ve){U=ve},setClear:function(ve,ie,Oe,Ie,vt){vt===!0&&(ve*=Ie,ie*=Ie,Oe*=Ie),de.set(ve,ie,Oe,Ie),fe.equals(de)===!1&&(i.clearColor(ve,ie,Oe,Ie),fe.copy(de))},reset:function(){U=!1,j=null,fe.set(-1,0,0,0)}}}function n(){let U=!1,de=!1,j=null,fe=null,ve=null;return{setReversed:function(ie){if(de!==ie){let Oe=e.get("EXT_clip_control");ie?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),de=ie;let Ie=ve;ve=null,this.setClear(Ie)}},getReversed:function(){return de},setTest:function(ie){ie?ne(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(ie){j!==ie&&!U&&(i.depthMask(ie),j=ie)},setFunc:function(ie){if(de&&(ie=Ud[ie]),fe!==ie){switch(ie){case uo:i.depthFunc(i.NEVER);break;case fo:i.depthFunc(i.ALWAYS);break;case po:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case mo:i.depthFunc(i.EQUAL);break;case go:i.depthFunc(i.GEQUAL);break;case _o:i.depthFunc(i.GREATER);break;case vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=ie}},setLocked:function(ie){U=ie},setClear:function(ie){ve!==ie&&(ve=ie,de&&(ie=1-ie),i.clearDepth(ie))},reset:function(){U=!1,j=null,fe=null,ve=null,de=!1}}}function s(){let U=!1,de=null,j=null,fe=null,ve=null,ie=null,Oe=null,Ie=null,vt=null;return{setTest:function(ft){U||(ft?ne(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(ft){de!==ft&&!U&&(i.stencilMask(ft),de=ft)},setFunc:function(ft,pn,kt){(j!==ft||fe!==pn||ve!==kt)&&(i.stencilFunc(ft,pn,kt),j=ft,fe=pn,ve=kt)},setOp:function(ft,pn,kt){(ie!==ft||Oe!==pn||Ie!==kt)&&(i.stencilOp(ft,pn,kt),ie=ft,Oe=pn,Ie=kt)},setLocked:function(ft){U=ft},setClear:function(ft){vt!==ft&&(i.clearStencil(ft),vt=ft)},reset:function(){U=!1,de=null,j=null,fe=null,ve=null,ie=null,Oe=null,Ie=null,vt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,_=[],M=null,m=!1,f=null,S=null,A=null,y=null,T=null,b=null,C=null,v=new pe(0,0,0),E=0,P=!1,B=null,z=null,k=null,D=null,X=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,re=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=re>=1):Y.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=re>=2);let te=null,se={},Ne=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),_t=new Nt().fromArray(Ne),rt=new Nt().fromArray(Fe);function at(U,de,j,fe){let ve=new Uint8Array(4),ie=i.createTexture();i.bindTexture(U,ie),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<j;Oe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(de+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return ie}let Q={};Q[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(As),Qe(!1),yt(Yc),ne(i.CULL_FACE),nt(Rn);function ne(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Te(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function ke(U,de){return u[U]!==de?(i.bindFramebuffer(U,de),u[U]=de,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=de),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Se(U,de){let j=_,fe=!1;if(U){j=p.get(de),j===void 0&&(j=[],p.set(de,j));let ve=U.textures;if(j.length!==ve.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Oe=ve.length;ie<Oe;ie++)j[ie]=i.COLOR_ATTACHMENT0+ie;j.length=ve.length,fe=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,fe=!0);fe&&i.drawBuffers(j)}function Ze(U){return M!==U?(i.useProgram(U),M=U,!0):!1}let Ut={[ts]:i.FUNC_ADD,[nd]:i.FUNC_SUBTRACT,[id]:i.FUNC_REVERSE_SUBTRACT};Ut[sd]=i.MIN,Ut[rd]=i.MAX;let $e={[ad]:i.ZERO,[od]:i.ONE,[ld]:i.SRC_COLOR,[Jc]:i.SRC_ALPHA,[pd]:i.SRC_ALPHA_SATURATE,[dd]:i.DST_COLOR,[hd]:i.DST_ALPHA,[cd]:i.ONE_MINUS_SRC_COLOR,[Kc]:i.ONE_MINUS_SRC_ALPHA,[fd]:i.ONE_MINUS_DST_COLOR,[ud]:i.ONE_MINUS_DST_ALPHA,[md]:i.CONSTANT_COLOR,[gd]:i.ONE_MINUS_CONSTANT_COLOR,[_d]:i.CONSTANT_ALPHA,[vd]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(U,de,j,fe,ve,ie,Oe,Ie,vt,ft){if(U===Rn){m===!0&&(Te(i.BLEND),m=!1);return}if(m===!1&&(ne(i.BLEND),m=!0),U!==td){if(U!==f||ft!==P){if((S!==ts||T!==ts)&&(i.blendEquation(i.FUNC_ADD),S=ts,T=ts),ft)switch(U){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ct:i.blendFunc(i.ONE,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $c:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",U);break}else switch(U){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ct:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zc:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $c:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",U);break}A=null,y=null,b=null,C=null,v.set(0,0,0),E=0,f=U,P=ft}return}ve=ve||de,ie=ie||j,Oe=Oe||fe,(de!==S||ve!==T)&&(i.blendEquationSeparate(Ut[de],Ut[ve]),S=de,T=ve),(j!==A||fe!==y||ie!==b||Oe!==C)&&(i.blendFuncSeparate($e[j],$e[fe],$e[ie],$e[Oe]),A=j,y=fe,b=ie,C=Oe),(Ie.equals(v)===!1||vt!==E)&&(i.blendColor(Ie.r,Ie.g,Ie.b,vt),v.copy(Ie),E=vt),f=U,P=!1}function xt(U,de){U.side===on?Te(i.CULL_FACE):ne(i.CULL_FACE);let j=U.side===Wt;de&&(j=!j),Qe(j),U.blending===zs&&U.transparent===!1?nt(Rn):nt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let fe=U.stencilWrite;o.setTest(fe),fe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Kt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(U){B!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),B=U)}function yt(U){U!==Qu?(ne(i.CULL_FACE),U!==z&&(U===Yc?i.cullFace(i.BACK):U===ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),z=U}function Ft(U){U!==k&&(J&&i.lineWidth(U),k=U)}function Kt(U,de,j){U?(ne(i.POLYGON_OFFSET_FILL),(D!==de||X!==j)&&(D=de,X=j,a.getReversed()&&(de=-de),i.polygonOffset(de,j))):Te(i.POLYGON_OFFSET_FILL)}function gt(U){U?ne(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function wt(U){U===void 0&&(U=i.TEXTURE0+K-1),te!==U&&(i.activeTexture(U),te=U)}function O(U,de,j){j===void 0&&(te===null?j=i.TEXTURE0+K-1:j=te);let fe=se[j];fe===void 0&&(fe={type:void 0,texture:void 0},se[j]=fe),(fe.type!==U||fe.texture!==de)&&(te!==j&&(i.activeTexture(j),te=j),i.bindTexture(U,de||Q[U]),fe.type=U,fe.texture=de)}function Ht(){let U=se[te];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function g(){try{i.texSubImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function H(){try{i.texSubImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function ce(){try{i.texStorage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function he(){try{i.texStorage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function $(){try{i.texImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function ee(){try{i.texImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function ue(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function De(U,de){d[U]!==de&&(i.pixelStorei(U,de),d[U]=de)}function me(U){_t.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),_t.copy(U))}function le(U){rt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),rt.copy(U))}function Ue(U,de){let j=c.get(de);j===void 0&&(j=new WeakMap,c.set(de,j));let fe=j.get(U);fe===void 0&&(fe=i.getUniformBlockIndex(de,U.name),j.set(U,fe))}function Be(U,de){let fe=c.get(de).get(U);l.get(de)!==fe&&(i.uniformBlockBinding(de,fe,U.__bindingPointIndex),l.set(de,fe))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},te=null,se={},u={},p=new WeakMap,_=[],M=null,m=!1,f=null,S=null,A=null,y=null,T=null,b=null,C=null,v=new pe(0,0,0),E=0,P=!1,B=null,z=null,k=null,D=null,X=null,_t.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:Te,bindFramebuffer:ke,drawBuffers:Se,useProgram:Ze,setBlending:nt,setMaterial:xt,setFlipSided:Qe,setCullFace:yt,setLineWidth:Ft,setPolygonOffset:Kt,setScissorTest:gt,activeTexture:wt,bindTexture:O,unbindTexture:Ht,compressedTexImage2D:dt,compressedTexImage3D:w,texImage2D:$,texImage3D:ee,pixelStorei:De,getParameter:ue,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:ce,texStorage3D:he,texSubImage2D:g,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:me,viewport:le,reset:Ge}}function ax(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap,d=new Set,u,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,g){return _?new OffscreenCanvas(w,g):Ar("canvas")}function m(w,g,H){let W=1,Z=dt(w);if((Z.width>H||Z.height>H)&&(W=H/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ce=Math.floor(W*Z.width),he=Math.floor(W*Z.height);u===void 0&&(u=M(ce,he));let $=g?M(ce,he):u;return $.width=ce,$.height=he,$.getContext("2d").drawImage(w,0,0,ce,he),He("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ce+"x"+he+")."),$}else return"data"in w&&He("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function f(w){return w.generateMipmaps}function S(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,g,H,W,Z,ce=!1){if(w!==null){if(i[w]!==void 0)return i[w];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he;W&&(he=e.get("EXT_texture_norm16"),he||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===i.RED&&(H===i.FLOAT&&($=i.R32F),H===i.HALF_FLOAT&&($=i.R16F),H===i.UNSIGNED_BYTE&&($=i.R8),H===i.UNSIGNED_SHORT&&he&&($=he.R16_EXT),H===i.SHORT&&he&&($=he.R16_SNORM_EXT)),g===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.R8UI),H===i.UNSIGNED_SHORT&&($=i.R16UI),H===i.UNSIGNED_INT&&($=i.R32UI),H===i.BYTE&&($=i.R8I),H===i.SHORT&&($=i.R16I),H===i.INT&&($=i.R32I)),g===i.RG&&(H===i.FLOAT&&($=i.RG32F),H===i.HALF_FLOAT&&($=i.RG16F),H===i.UNSIGNED_BYTE&&($=i.RG8),H===i.UNSIGNED_SHORT&&he&&($=he.RG16_EXT),H===i.SHORT&&he&&($=he.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RG8UI),H===i.UNSIGNED_SHORT&&($=i.RG16UI),H===i.UNSIGNED_INT&&($=i.RG32UI),H===i.BYTE&&($=i.RG8I),H===i.SHORT&&($=i.RG16I),H===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGB8UI),H===i.UNSIGNED_SHORT&&($=i.RGB16UI),H===i.UNSIGNED_INT&&($=i.RGB32UI),H===i.BYTE&&($=i.RGB8I),H===i.SHORT&&($=i.RGB16I),H===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGBA8UI),H===i.UNSIGNED_SHORT&&($=i.RGBA16UI),H===i.UNSIGNED_INT&&($=i.RGBA32UI),H===i.BYTE&&($=i.RGBA8I),H===i.SHORT&&($=i.RGBA16I),H===i.INT&&($=i.RGBA32I)),g===i.RGB&&(H===i.UNSIGNED_SHORT&&he&&($=he.RGB16_EXT),H===i.SHORT&&he&&($=he.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){let ee=ce?wr:et.getTransfer(Z);H===i.FLOAT&&($=i.RGBA32F),H===i.HALF_FLOAT&&($=i.RGBA16F),H===i.UNSIGNED_BYTE&&($=ee===mt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&he&&($=he.RGBA16_EXT),H===i.SHORT&&he&&($=he.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function T(w,g){let H;return w?g===null||g===Vn||g===Vs?H=i.DEPTH24_STENCIL8:g===Cn?H=i.DEPTH32F_STENCIL8:g===ks&&(H=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Vn||g===Vs?H=i.DEPTH_COMPONENT24:g===Cn?H=i.DEPTH_COMPONENT32F:g===ks&&(H=i.DEPTH_COMPONENT16),H}function b(w,g){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==$t&&w.minFilter!==jt?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function C(w){let g=w.target;g.removeEventListener("dispose",C),E(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&d.delete(g)}function v(w){let g=w.target;g.removeEventListener("dispose",v),B(g)}function E(w){let g=n.get(w);if(g.__webglInit===void 0)return;let H=w.source,W=p.get(H);if(W){let Z=W[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(w),Object.keys(W).length===0&&p.delete(H)}n.remove(w)}function P(w){let g=n.get(w);i.deleteTexture(g.__webglTexture);let H=w.source,W=p.get(H);delete W[g.__cacheKey],a.memory.textures--}function B(w){let g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Z=0;Z<g.__webglFramebuffer[W].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[W][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let H=w.textures;for(let W=0,Z=H.length;W<Z;W++){let ce=n.get(H[W]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(H[W])}n.remove(w)}let z=0;function k(){z=0}function D(){return z}function X(w){z=w}function K(){let w=z;return w>=s.maxTextures&&He("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,w}function J(w){let g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function re(w,g){let H=n.get(w);if(w.isVideoTexture&&O(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){let W=w.image;if(W===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(H,w,g);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+g)}function Y(w,g){let H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Te(H,w,g);return}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+g)}function te(w,g){let H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Te(H,w,g);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+g)}function se(w,g){let H=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&H.__version!==w.version){ke(H,w,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+g)}let Ne={[xo]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[yo]:i.MIRRORED_REPEAT},Fe={[$t]:i.NEAREST,[Md]:i.NEAREST_MIPMAP_NEAREST,[ia]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[jo]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},_t={[Td]:i.NEVER,[Pd]:i.ALWAYS,[wd]:i.LESS,[Bl]:i.LEQUAL,[Ad]:i.EQUAL,[zl]:i.GEQUAL,[Rd]:i.GREATER,[Cd]:i.NOTEQUAL};function rt(w,g){if(g.type===Cn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===jt||g.magFilter===jo||g.magFilter===ia||g.magFilter===Ui||g.minFilter===jt||g.minFilter===jo||g.minFilter===ia||g.minFilter===Ui)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ne[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ne[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ne[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Fe[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Fe[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,_t[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===$t||g.minFilter!==ia&&g.minFilter!==Ui||g.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function at(w,g){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",C));let W=g.source,Z=p.get(W);Z===void 0&&(Z={},p.set(W,Z));let ce=J(g);if(ce!==w.__cacheKey){Z[ce]===void 0&&(Z[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[ce].usedTimes++;let he=Z[w.__cacheKey];he!==void 0&&(Z[w.__cacheKey].usedTimes--,he.usedTimes===0&&P(g)),w.__cacheKey=ce,w.__webglTexture=Z[ce].texture}return H}function Q(w,g,H){return Math.floor(Math.floor(w/H)/g)}function ne(w,g,H,W){let ce=w.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,H,W,g.data);else{ce.sort((De,me)=>De.start-me.start);let he=0;for(let De=1;De<ce.length;De++){let me=ce[he],le=ce[De],Ue=me.start+me.count,Be=Q(le.start,g.width,4),Ge=Q(me.start,g.width,4);le.start<=Ue+1&&Be===Ge&&Q(le.start+le.count-1,g.width,4)===Be?me.count=Math.max(me.count,le.start+le.count-me.start):(++he,ce[he]=le)}ce.length=he+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let De=0,me=ce.length;De<me;De++){let le=ce[De],Ue=Math.floor(le.start/4),Be=Math.ceil(le.count/4),Ge=Ue%g.width,U=Math.floor(Ue/g.width),de=Be,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ge,U,de,j,H,W,g.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function Te(w,g,H){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);let Z=at(w,g),ce=g.source;t.bindTexture(W,w.__webglTexture,i.TEXTURE0+H);let he=n.get(ce);if(ce.version!==he.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let j=et.getPrimaries(et.workingColorSpace),fe=g.colorSpace===pi?null:et.getPrimaries(g.colorSpace),ve=g.colorSpace===pi||j===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ee=m(g.image,!1,s.maxTextureSize);ee=Ht(g,ee);let ue=r.convert(g.format,g.colorSpace),De=r.convert(g.type),me=y(g.internalFormat,ue,De,g.normalized,g.colorSpace,g.isVideoTexture);rt(W,g);let le,Ue=g.mipmaps,Be=g.isVideoTexture!==!0,Ge=he.__version===void 0||Z===!0,U=ce.dataReady,de=b(g,ee);if(g.isDepthTexture)me=T(g.format===Fi,g.type),Ge&&(Be?t.texStorage2D(i.TEXTURE_2D,1,me,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,me,ee.width,ee.height,0,ue,De,null));else if(g.isDataTexture)if(Ue.length>0){Be&&Ge&&t.texStorage2D(i.TEXTURE_2D,de,me,Ue[0].width,Ue[0].height);for(let j=0,fe=Ue.length;j<fe;j++)le=Ue[j],Be?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,le.width,le.height,ue,De,le.data):t.texImage2D(i.TEXTURE_2D,j,me,le.width,le.height,0,ue,De,le.data);g.generateMipmaps=!1}else Be?(Ge&&t.texStorage2D(i.TEXTURE_2D,de,me,ee.width,ee.height),U&&ne(g,ee,ue,De)):t.texImage2D(i.TEXTURE_2D,0,me,ee.width,ee.height,0,ue,De,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Be&&Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,me,Ue[0].width,Ue[0].height,ee.depth);for(let j=0,fe=Ue.length;j<fe;j++)if(le=Ue[j],g.format!==Pn)if(ue!==null)if(Be){if(U)if(g.layerUpdates.size>0){let ve=fh(le.width,le.height,g.format,g.type);for(let ie of g.layerUpdates){let Oe=le.data.subarray(ie*ve/le.data.BYTES_PER_ELEMENT,(ie+1)*ve/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ie,le.width,le.height,1,ue,Oe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,le.width,le.height,ee.depth,ue,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,me,le.width,le.height,ee.depth,0,le.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,le.width,le.height,ee.depth,ue,De,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,me,le.width,le.height,ee.depth,0,ue,De,le.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Be&&Ge&&t.texStorage2D(i.TEXTURE_2D,de,me,Ue[0].width,Ue[0].height);for(let j=0,fe=Ue.length;j<fe;j++)le=Ue[j],g.format!==Pn?ue!==null?Be?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,le.width,le.height,ue,le.data):t.compressedTexImage2D(i.TEXTURE_2D,j,me,le.width,le.height,0,le.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,le.width,le.height,ue,De,le.data):t.texImage2D(i.TEXTURE_2D,j,me,le.width,le.height,0,ue,De,le.data)}else if(g.isDataArrayTexture)if(Be){if(Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,me,ee.width,ee.height,ee.depth),U)if(g.layerUpdates.size>0){let j=fh(ee.width,ee.height,g.format,g.type);for(let fe of g.layerUpdates){let ve=ee.data.subarray(fe*j/ee.data.BYTES_PER_ELEMENT,(fe+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,ee.width,ee.height,1,ue,De,ve)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,De,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,ee.width,ee.height,ee.depth,0,ue,De,ee.data);else if(g.isData3DTexture)Be?(Ge&&t.texStorage3D(i.TEXTURE_3D,de,me,ee.width,ee.height,ee.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,De,ee.data)):t.texImage3D(i.TEXTURE_3D,0,me,ee.width,ee.height,ee.depth,0,ue,De,ee.data);else if(g.isFramebufferTexture){if(Ge)if(Be)t.texStorage2D(i.TEXTURE_2D,de,me,ee.width,ee.height);else{let j=ee.width,fe=ee.height;for(let ve=0;ve<de;ve++)t.texImage2D(i.TEXTURE_2D,ve,me,j,fe,0,ue,De,null),j>>=1,fe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ee.parentNode!==j){j.appendChild(ee),d.add(g),j.onpaint=fe=>{let ve=fe.changedElements;for(let ie of d)ve.includes(ie.image)&&(ie.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let ve=i.RGBA,ie=i.RGBA,Oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ve,ie,Oe,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Be&&Ge){let j=dt(Ue[0]);t.texStorage2D(i.TEXTURE_2D,de,me,j.width,j.height)}for(let j=0,fe=Ue.length;j<fe;j++)le=Ue[j],Be?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ue,De,le):t.texImage2D(i.TEXTURE_2D,j,me,ue,De,le);g.generateMipmaps=!1}else if(Be){if(Ge){let j=dt(ee);t.texStorage2D(i.TEXTURE_2D,de,me,j.width,j.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,De,ee)}else t.texImage2D(i.TEXTURE_2D,0,me,ue,De,ee);f(g)&&S(W),he.__version=ce.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ke(w,g,H){if(g.image.length!==6)return;let W=at(w,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);let ce=n.get(Z);if(Z.version!==ce.__version||W===!0){t.activeTexture(i.TEXTURE0+H);let he=et.getPrimaries(et.workingColorSpace),$=g.colorSpace===pi?null:et.getPrimaries(g.colorSpace),ee=g.colorSpace===pi||he===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ue=g.isCompressedTexture||g.image[0].isCompressedTexture,De=g.image[0]&&g.image[0].isDataTexture,me=[];for(let ie=0;ie<6;ie++)!ue&&!De?me[ie]=m(g.image[ie],!0,s.maxCubemapSize):me[ie]=De?g.image[ie].image:g.image[ie],me[ie]=Ht(g,me[ie]);let le=me[0],Ue=r.convert(g.format,g.colorSpace),Be=r.convert(g.type),Ge=y(g.internalFormat,Ue,Be,g.normalized,g.colorSpace),U=g.isVideoTexture!==!0,de=ce.__version===void 0||W===!0,j=Z.dataReady,fe=b(g,le);rt(i.TEXTURE_CUBE_MAP,g);let ve;if(ue){U&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ge,le.width,le.height);for(let ie=0;ie<6;ie++){ve=me[ie].mipmaps;for(let Oe=0;Oe<ve.length;Oe++){let Ie=ve[Oe];g.format!==Pn?Ue!==null?U?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,0,0,Ie.width,Ie.height,Ue,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,Ge,Ie.width,Ie.height,0,Ie.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,0,0,Ie.width,Ie.height,Ue,Be,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,Ge,Ie.width,Ie.height,0,Ue,Be,Ie.data)}}}else{if(ve=g.mipmaps,U&&de){ve.length>0&&fe++;let ie=dt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ge,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(De){U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me[ie].width,me[ie].height,Ue,Be,me[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,me[ie].width,me[ie].height,0,Ue,Be,me[ie].data);for(let Oe=0;Oe<ve.length;Oe++){let vt=ve[Oe].image[ie].image;U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,0,0,vt.width,vt.height,Ue,Be,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,Ge,vt.width,vt.height,0,Ue,Be,vt.data)}}else{U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ue,Be,me[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,Ue,Be,me[ie]);for(let Oe=0;Oe<ve.length;Oe++){let Ie=ve[Oe];U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,0,0,Ue,Be,Ie.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,Ge,Ue,Be,Ie.image[ie])}}}f(g)&&S(i.TEXTURE_CUBE_MAP),ce.__version=Z.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Se(w,g,H,W,Z,ce){let he=r.convert(H.format,H.colorSpace),$=r.convert(H.type),ee=y(H.internalFormat,he,$,H.normalized,H.colorSpace),ue=n.get(g),De=n.get(H);if(De.__renderTarget=g,!ue.__hasExternalTextures){let me=Math.max(1,g.width>>ce),le=Math.max(1,g.height>>ce);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ce,ee,me,le,g.depth,0,he,$,null):t.texImage2D(Z,ce,ee,me,le,0,he,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),wt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Z,De.__webglTexture,0,gt(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Z,De.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(w,g,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){let W=g.depthTexture,Z=W&&W.isDepthTexture?W.type:null,ce=T(g.stencilBuffer,Z),he=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;wt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(g),ce,g.width,g.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(g),ce,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ce,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,w)}else{let W=g.textures;for(let Z=0;Z<W.length;Z++){let ce=W[Z],he=r.convert(ce.format,ce.colorSpace),$=r.convert(ce.type),ee=y(ce.internalFormat,he,$,ce.normalized,ce.colorSpace);wt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(g),ee,g.width,g.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(g),ee,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ee,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(w,g,H){let W=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),rt(i.TEXTURE_CUBE_MAP,g.depthTexture);let ue=r.convert(g.depthTexture.format),De=r.convert(g.depthTexture.type),me;g.depthTexture.format===Zn?me=i.DEPTH_COMPONENT24:g.depthTexture.format===Fi&&(me=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,me,g.width,g.height,0,ue,De,null)}}else re(g.depthTexture,0);let ce=Z.__webglTexture,he=gt(g),$=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ee=g.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Zn)wt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,ce,0);else if(g.depthTexture.format===Fi)wt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(w){let g=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){let W=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){let Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=W}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)Ut(g.__webglFramebuffer[W],w,W);else{let W=w.texture.mipmaps;W&&W.length>0?Ut(g.__webglFramebuffer[0],w,0):Ut(g.__webglFramebuffer,w,0)}else if(H){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),Ze(g.__webglDepthbuffer[W],w,!1);else{let Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}else{let W=w.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ze(g.__webglDepthbuffer,w,!1);else{let Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(w,g,H){let W=n.get(w);g!==void 0&&Se(W.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&$e(w)}function xt(w){let g=w.texture,H=n.get(w),W=n.get(g);w.addEventListener("dispose",v);let Z=w.textures,ce=w.isWebGLCubeRenderTarget===!0,he=Z.length>1;if(he||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),ce){H.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){H.__webglFramebuffer[$]=[];for(let ee=0;ee<g.mipmaps.length;ee++)H.__webglFramebuffer[$][ee]=i.createFramebuffer()}else H.__webglFramebuffer[$]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){H.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)H.__webglFramebuffer[$]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(he)for(let $=0,ee=Z.length;$<ee;$++){let ue=n.get(Z[$]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&wt(w)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let $=0;$<Z.length;$++){let ee=Z[$];H.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[$]);let ue=r.convert(ee.format,ee.colorSpace),De=r.convert(ee.type),me=y(ee.internalFormat,ue,De,ee.normalized,ee.colorSpace,w.isXRRenderTarget===!0),le=gt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,me,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,H.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),rt(i.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let ee=0;ee<g.mipmaps.length;ee++)Se(H.__webglFramebuffer[$][ee],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ee);else Se(H.__webglFramebuffer[$],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(g)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let $=0,ee=Z.length;$<ee;$++){let ue=Z[$],De=n.get(ue),me=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(me=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,De.__webglTexture),rt(me,ue),Se(H.__webglFramebuffer,w,ue,i.COLOR_ATTACHMENT0+$,me,0),f(ue)&&S(me)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,W.__webglTexture),rt($,g),g.mipmaps&&g.mipmaps.length>0)for(let ee=0;ee<g.mipmaps.length;ee++)Se(H.__webglFramebuffer[ee],w,g,i.COLOR_ATTACHMENT0,$,ee);else Se(H.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,$,0);f(g)&&S($),t.unbindTexture()}w.depthBuffer&&$e(w)}function Qe(w){let g=w.textures;for(let H=0,W=g.length;H<W;H++){let Z=g[H];if(f(Z)){let ce=A(w),he=n.get(Z).__webglTexture;t.bindTexture(ce,he),S(ce),t.unbindTexture()}}}let yt=[],Ft=[];function Kt(w){if(w.samples>0){if(wt(w)===!1){let g=w.textures,H=w.width,W=w.height,Z=i.COLOR_BUFFER_BIT,ce=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(w),$=g.length>1;if($)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let ee=w.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);let De=n.get(g[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,H,W,0,0,H,W,Z,i.NEAREST),l===!0&&(yt.length=0,Ft.length=0,yt.push(i.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(yt.push(ce),Ft.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);let De=n.get(g[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function gt(w){return Math.min(s.maxSamples,w.samples)}function wt(w){let g=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function O(w){let g=a.render.frame;h.get(w)!==g&&(h.set(w,g),w.update())}function Ht(w,g){let H=w.colorSpace,W=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Tr&&H!==pi&&(et.getTransfer(H)===mt?(W!==Pn||Z!==gn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",H)),g}function dt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=X,this.setTexture2D=re,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=se,this.rebindTextures=nt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ox(i,e){function t(n,s=pi){let r,a=et.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ih)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===eh)return i.BYTE;if(n===th)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===el)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===tn)return i.HALF_FLOAT;if(n===sh)return i.ALPHA;if(n===rh)return i.RGB;if(n===Pn)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===il)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===Oi)return i.RG;if(n===rl)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===sa||n===ra||n===aa||n===oa)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===ll||n===cl||n===hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ul||n===dl||n===fl||n===pl||n===ml||n===la||n===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ul||n===dl)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===pl)return r.COMPRESSED_R11_EAC;if(n===ml)return r.COMPRESSED_SIGNED_R11_EAC;if(n===la)return r.COMPRESSED_RG11_EAC;if(n===gl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_l||n===vl||n===xl||n===yl||n===Ml||n===Sl||n===bl||n===El||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_l)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===El)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Al)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Il||n===Ll||n===Nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Il)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dl||n===Ul||n===ca||n===Fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cx=`
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

}`,Lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Br(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tt({vertexShader:lx,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new Vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nh=class extends $n{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,_=null,M=typeof XRWebGLBinding<"u",m=new Lh,f={},S=t.getContextAttributes(),A=null,y=null,T=[],b=[],C=new Me,v=null,E=null,P=new Zt;P.viewport=new Nt;let B=new Zt;B.viewport=new Nt;let z=[P,B],k=new Jo,D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=T[Q];return ne===void 0&&(ne=new Is,T[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=T[Q];return ne===void 0&&(ne=new Is,T[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=T[Q];return ne===void 0&&(ne=new Is,T[Q]=ne),ne.getHandSpace()};function K(Q){let ne=b.indexOf(Q.inputSource);if(ne===-1)return;let Te=T[ne];Te!==void 0&&(Te.update(Q.inputSource,Q.frame,c||a),Te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function J(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",re);for(let Q=0;Q<T.length;Q++){let ne=b[Q];ne!==null&&(b[Q]=null,T[Q].disconnect(ne))}D=null,X=null,m.reset();for(let Q in f)delete f[Q];if(e.setRenderTarget(A),p=null,u=null,d=null,s=null,y=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),E!==null){let Q=E.camera;Q.fov=E.fov,Q.zoom=E.zoom,Q.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",J),s.addEventListener("inputsourceschange",re),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,ke=null,Se=null;S.depth&&(Se=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=S.stencil?Fi:Zn,ke=S.stencil?Vs:Vn);let Ze={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ze),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new zt(u.textureWidth,u.textureHeight,{format:Pn,type:gn,depthTexture:new Ri(u.textureWidth,u.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new zt(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(Q){for(let ne=0;ne<Q.removed.length;ne++){let Te=Q.removed[ne],ke=b.indexOf(Te);ke>=0&&(b[ke]=null,T[ke].disconnect(Te))}for(let ne=0;ne<Q.added.length;ne++){let Te=Q.added[ne],ke=b.indexOf(Te);if(ke===-1){for(let Ze=0;Ze<T.length;Ze++)if(Ze>=b.length){b.push(Te),ke=Ze;break}else if(b[Ze]===null){b[Ze]=Te,ke=Ze;break}if(ke===-1)break}let Se=T[ke];Se&&Se.connect(Te)}}let Y=new R,te=new R;function se(Q,ne,Te){Y.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(Te.matrixWorld);let ke=Y.distanceTo(te),Se=ne.projectionMatrix.elements,Ze=Te.projectionMatrix.elements,Ut=Se[14]/(Se[10]-1),$e=Se[14]/(Se[10]+1),nt=(Se[9]+1)/Se[5],xt=(Se[9]-1)/Se[5],Qe=(Se[8]-1)/Se[0],yt=(Ze[8]+1)/Ze[0],Ft=Ut*Qe,Kt=Ut*yt,gt=ke/(-Qe+yt),wt=gt*-Qe;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(wt),Q.translateZ(gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Se[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let O=Ut+gt,Ht=$e+gt,dt=Ft-wt,w=Kt+(ke-wt),g=nt*$e/Ht*O,H=xt*$e/Ht*O;Q.projectionMatrix.makePerspective(dt,w,g,H,O,Ht),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ne(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ne=Q.near,Te=Q.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),k.near=B.near=P.near=ne,k.far=B.far=P.far=Te,(D!==k.near||X!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,X=k.far),k.layers.mask=Q.layers.mask|6,P.layers.mask=k.layers.mask&-5,B.layers.mask=k.layers.mask&-3;let ke=Q.parent,Se=k.cameras;Ne(k,ke);for(let Ze=0;Ze<Se.length;Ze++)Ne(Se[Ze],ke);Se.length===2?se(k,P,B):k.projectionMatrix.copy(P.projectionMatrix),E===null&&Q.isPerspectiveCamera&&(E={camera:Q,fov:Q.fov,zoom:Q.zoom}),Fe(Q,k,ke)};function Fe(Q,ne,Te){Te===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(Te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ji*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Q){return f[Q]};let _t=null;function rt(Q,ne){if(h=ne.getViewerPose(c||a),_=ne,h!==null){let Te=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ke=!1;Te.length!==k.cameras.length&&(k.cameras.length=0,ke=!0);for(let $e=0;$e<Te.length;$e++){let nt=Te[$e],xt=null;if(p!==null)xt=p.getViewport(nt);else{let yt=d.getViewSubImage(u,nt);xt=yt.viewport,$e===0&&(e.setRenderTargetTextures(y,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(y))}let Qe=z[$e];Qe===void 0&&(Qe=new Zt,Qe.layers.enable($e),Qe.viewport=new Nt,z[$e]=Qe),Qe.matrix.fromArray(nt.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(nt.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(xt.x,xt.y,xt.width,xt.height),$e===0&&(k.matrix.copy(Qe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ke===!0&&k.cameras.push(Qe)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let $e=d.getDepthInformation(Te[0]);$e&&$e.isValid&&$e.texture&&m.init($e,s.renderState)}if(Se&&Se.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let $e=0;$e<Te.length;$e++){let nt=Te[$e].camera;if(nt){let xt=f[nt];xt||(xt=new Br,f[nt]=xt);let Qe=d.getCameraImage(nt);xt.sourceTexture=Qe}}}}for(let Te=0;Te<T.length;Te++){let ke=b[Te],Se=T[Te];ke!==null&&Se!==void 0&&Se.update(ke,ne,c||a)}_t&&_t(Q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}let at=new of;at.setAnimationLoop(rt),this.setAnimationLoop=function(Q){_t=Q},this.dispose=function(){}}},hx=new bt,ff=new We;ff.set(-1,0,0,0,1,0,0,0,1);function ux(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,hh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,A,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=e.get(f),A=S.envMap,y=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ff),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=A*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dx(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let b=T.program;n.uniformBlockBinding(y,b)}function c(y,T){let b=s[y.id];b===void 0&&(m(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",S));let C=T.program;n.updateUBOMapping(y,C);let v=e.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function h(y){let T=d();y.__bindingPointIndex=T;let b=i.createBuffer(),C=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let T=s[y.id],b=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let v=0,E=b.length;v<E;v++){let P=b[v];if(Array.isArray(P))for(let B=0,z=P.length;B<z;B++)p(P[B],v,B,C);else p(P,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,T,b,C){if(M(y,T,b,C)===!0){let v=y.__offset,E=y.value;if(Array.isArray(E)){let P=0;for(let B=0;B<E.length;B++){let z=E[B],k=f(z);_(z,y.__data,P),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function _(y,T,b){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,b)}function M(y,T,b,C){let v=y.value,E=T+"_"+b;if(C[E]===void 0)return typeof v=="number"||typeof v=="boolean"?C[E]=v:ArrayBuffer.isView(v)?C[E]=v.slice():C[E]=v.clone(),!0;{let P=C[E];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return C[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(y){let T=y.uniforms,b=0,C=16;for(let E=0,P=T.length;E<P;E++){let B=Array.isArray(T[E])?T[E]:[T[E]];for(let z=0,k=B.length;z<k;z++){let D=B[z],X=Array.isArray(D.value)?D.value:[D.value];for(let K=0,J=X.length;K<J;K++){let re=X[K],Y=f(re),te=b%C,se=te%Y.boundary,Ne=te+se;b+=se,Ne!==0&&C-Ne<Y.storage&&(b+=C-Ne),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=Y.storage}}}let v=b%C;return v>0&&(b+=C-v),y.__size=b,y.__cache={},this}function f(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):He("WebGLRenderer: Unsupported uniform value type.",y),T}function S(y){let T=y.target;T.removeEventListener("dispose",S);let b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function A(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var fx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function px(){return ei===null&&(ei=new Dr(fx,16,16,Oi,tn),ei.name="DFG_LUT",ei.minFilter=jt,ei.magFilter=jt,ei.wrapS=Yn,ei.wrapT=Yn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var Gl=class{constructor(e={}){let{canvas:t=Ld(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=gn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let M=p,m=new Set([al,rl,sl]),f=new Set([gn,Vn,ks,Vs,tl,nl]),S=new Uint32Array(4),A=new Int32Array(4),y=new R,T=null,b=null,C=[],v=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,B=!1,z=null,k=null,D=null,X=null;this._outputColorSpace=an;let K=0,J=0,re=null,Y=-1,te=null,se=new Nt,Ne=new Nt,Fe=null,_t=new pe(0),rt=0,at=t.width,Q=t.height,ne=1,Te=null,ke=null,Se=new Nt(0,0,at,Q),Ze=new Nt(0,0,at,Q),Ut=!1,$e=new Ns,nt=!1,xt=!1,Qe=new bt,yt=new R,Ft=new Nt,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function wt(){return re===null?ne:1}let O=n;function Ht(x,N){return t.getContext(x,N)}let dt,w,g,H,W,Z,ce,he,$,ee,ue,De,me,le,Ue,Be,Ge,U,de,j,fe,ve,ie;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",pn,!1),O===null){let N="webgl2";if(O=Ht(N,x),O===null)throw Ht(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(x){throw t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",pn,!1),Ve("WebGLRenderer: "+x.message),x}function Oe(){dt=new M_(O),dt.init(),fe=new ox(O,dt),w=new u_(O,dt,e,fe),g=new rx(O,dt),w.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),k=O.createFramebuffer(),D=O.createFramebuffer(),X=O.createFramebuffer(),H=new E_(O),W=new Xv,Z=new ax(O,dt,g,W,w,fe,H),ce=new y_(P),he=new wm(O),ve=new c_(O,he),$=new S_(O,he,H,ve),ee=new w_(O,$,he,ve,H),U=new T_(O,w,Z),Ue=new d_(W),ue=new Wv(P,ce,dt,w,ve,Ue),De=new ux(P,W),me=new Yv,le=new jv(dt),Ge=new l_(P,ce,g,ee,_,l),Be=new sx(P,ee,w),ie=new dx(O,H,w,g),de=new h_(O,dt,H),j=new b_(O,dt,H),H.programs=ue.programs,P.capabilities=w,P.extensions=dt,P.properties=W,P.renderLists=me,P.shadowMap=Be,P.state=g,P.info=H}M!==gn&&(E=new R_(M,t.width,t.height,o,s,r));let Ie=new Nh(P,O);this.xr=Ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let x=dt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=dt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(x){x!==void 0&&(ne=x,this.setSize(at,Q,!1))},this.getSize=function(x){return x.set(at,Q)},this.setSize=function(x,N,q=!0){if(Ie.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}at=x,Q=N,t.width=Math.floor(x*ne),t.height=Math.floor(N*ne),q===!0&&(t.style.width=x+"px",t.style.height=N+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(at*ne,Q*ne).floor()},this.setDrawingBufferSize=function(x,N,q){at=x,Q=N,ne=q,t.width=Math.floor(x*q),t.height=Math.floor(N*q),this.setViewport(0,0,x,N)},this.setEffects=function(x){if(M===gn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let N=0;N<x.length;N++)if(x[N].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(se)},this.getViewport=function(x){return x.copy(Se)},this.setViewport=function(x,N,q,V){x.isVector4?Se.set(x.x,x.y,x.z,x.w):Se.set(x,N,q,V),g.viewport(se.copy(Se).multiplyScalar(ne).round())},this.getScissor=function(x){return x.copy(Ze)},this.setScissor=function(x,N,q,V){x.isVector4?Ze.set(x.x,x.y,x.z,x.w):Ze.set(x,N,q,V),g.scissor(Ne.copy(Ze).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(x){g.setScissorTest(Ut=x)},this.setOpaqueSort=function(x){Te=x},this.setTransparentSort=function(x){ke=x},this.getClearColor=function(x){return x.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,q=!0){let V=0;if(x){let G=!1;if(re!==null){let ge=re.texture.format;G=m.has(ge)}if(G){let ge=re.texture.type,we=f.has(ge),_e=Ge.getClearColor(),be=Ge.getClearAlpha(),Le=_e.r,qe=_e.g,Xe=_e.b;we?(S[0]=Le,S[1]=qe,S[2]=Xe,S[3]=be,O.clearBufferuiv(O.COLOR,0,S)):(A[0]=Le,A[1]=qe,A[2]=Xe,A[3]=be,O.clearBufferiv(O.COLOR,0,A))}else V|=O.COLOR_BUFFER_BIT}N&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),z=x},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",pn,!1),Ge.dispose(),me.dispose(),le.dispose(),W.dispose(),ce.dispose(),ee.dispose(),ve.dispose(),ie.dispose(),ue.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Ma),Ie.removeEventListener("sessionend",rr),ni.stop()};function vt(x){x.preventDefault(),oh("WebGLRenderer: Context Lost."),B=!0}function ft(){oh("WebGLRenderer: Context Restored."),B=!1;let x=H.autoReset,N=Be.enabled,q=Be.autoUpdate,V=Be.needsUpdate,G=Be.type;Oe(),H.autoReset=x,Be.enabled=N,Be.autoUpdate=q,Be.needsUpdate=V,Be.type=G}function pn(x){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function kt(x){let N=x.target;N.removeEventListener("dispose",kt),xa(N)}function xa(x){nc(x),W.remove(x)}function nc(x){let N=W.get(x).programs;N!==void 0&&(N.forEach(function(q){ue.releaseProgram(q)}),x.isShaderMaterial&&ue.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,q,V,G,ge){N===null&&(N=Kt);let we=G.isMesh&&G.matrixWorld.determinantAffine()<0,_e=Ea(x,N,q,V,G);g.setMaterial(V,we);let be=q.index,Le=1;if(V.wireframe===!0){if(be=$.getWireframeAttribute(q),be===void 0)return;Le=2}let qe=q.drawRange,Xe=q.attributes.position,Ce=qe.start*Le,ot=(qe.start+qe.count)*Le;ge!==null&&(Ce=Math.max(Ce,ge.start*Le),ot=Math.min(ot,(ge.start+ge.count)*Le)),be!==null?(Ce=Math.max(Ce,0),ot=Math.min(ot,be.count)):Xe!=null&&(Ce=Math.max(Ce,0),ot=Math.min(ot,Xe.count));let Lt=ot-Ce;if(Lt<0||Lt===1/0)return;ve.setup(G,V,_e,q,be);let Mt,St=de;if(be!==null&&(Mt=he.get(be),St=j,St.setIndex(Mt)),G.isMesh)V.wireframe===!0?(g.setLineWidth(V.wireframeLinewidth*wt()),St.setMode(O.LINES)):St.setMode(O.TRIANGLES);else if(G.isLine){let Vt=V.linewidth;Vt===void 0&&(Vt=1),g.setLineWidth(Vt*wt()),G.isLineSegments?St.setMode(O.LINES):G.isLineLoop?St.setMode(O.LINE_LOOP):St.setMode(O.LINE_STRIP)}else G.isPoints?St.setMode(O.POINTS):G.isSprite&&St.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))St.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Vt=G._multiDrawStarts,Ee=G._multiDrawCounts,Ot=G._multiDrawCount,it=be?he.get(be).bytesPerElement:1,nn=W.get(V).currentProgram.getUniforms();for(let En=0;En<Ot;En++)nn.setValue(O,"_gl_DrawID",En),St.render(Vt[En]/it,Ee[En])}else if(G.isInstancedMesh)St.renderInstances(Ce,Lt,G.count);else if(q.isInstancedBufferGeometry){let Vt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ee=Math.min(q.instanceCount,Vt);St.renderInstances(Ce,Lt,Ee)}else St.render(Ce,Lt)};function ya(x,N,q,V){z!==null&&x.isNodeMaterial&&z.setObject(V,x),nt===!0&&Ue.setState(x,q,!1),x.transparent===!0&&x.side===on&&x.forceSinglePass===!1?(x.side=Wt,x.needsUpdate=!0,vi(x,N,V),x.side=Ni,x.needsUpdate=!0,vi(x,N,V),x.side=on):vi(x,N,V)}this.compile=function(x,N,q=null){q===null&&(q=x),z!==null&&z.renderStart(x,N,q),b=le.get(q),b.init(N),v.push(b),q.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),x!==q&&x.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights(),z!==null&&z.updateLights(b.state.lightsArray),xt=this.localClippingEnabled,nt=Ue.init(this.clippingPlanes,xt),nt===!0&&Ue.setGlobalState(this.clippingPlanes,N),z!==null&&Be.render(b.state.shadowsArray,q,N);let V=new Set;return x.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ge=G.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){let _e=ge[we];ya(_e,q,N,G),V.add(_e)}else ya(ge,q,N,G),V.add(ge)}),b=v.pop(),z!==null&&z.renderEnd(),V},this.compileAsync=function(x,N,q=null){let V=this.compile(x,N,q);return new Promise(G=>{function ge(){if(V.forEach(function(we){let be=W.get(we).currentProgram;(be===void 0||be.isReady())&&V.delete(we)}),V.size===0){G(x);return}setTimeout(ge,10)}dt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let ir=null;function sr(x){ir&&ir(x)}function Ma(){ni.stop()}function rr(){ni.start()}let ni=new of;ni.setAnimationLoop(sr),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(x){ir=x,Ie.setAnimationLoop(x),x===null?ni.stop():ni.start()},Ie.addEventListener("sessionstart",Ma),Ie.addEventListener("sessionend",rr),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;z!==null&&z.renderStart(x,N);let q=Ie.enabled===!0&&Ie.isPresenting===!0,V=E!==null&&(re===null||q)&&E.begin(P,re);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(N),N=Ie.getCamera()),x.isScene===!0&&x.onBeforeRender(P,x,N,re),b=le.get(x,v.length),b.init(N),b.state.textureUnits=Z.getTextureUnits(),v.push(b),Qe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$e.setFromProjectionMatrix(Qe,Fn,N.reversedDepth),xt=this.localClippingEnabled,nt=Ue.init(this.clippingPlanes,xt),T=me.get(x,C.length),T.init(),C.push(T),Ie.enabled===!0&&Ie.isPresenting===!0){let we=P.xr.getDepthSensingMesh();we!==null&&hs(we,N,-1/0,P.sortObjects)}hs(x,N,0,P.sortObjects),T.finish(),z!==null&&z.updateLights(b.state.lightsArray),P.sortObjects===!0&&T.sort(Te,ke),gt=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,gt&&Ge.addToRenderList(T,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Ue.beginShadows();let G=b.state.shadowsArray;if(Be.render(G,x,N),nt===!0&&Ue.endShadows(),(V&&E.hasRenderPass())===!1){let we=T.opaque,_e=T.transmissive;if(b.setupLights(),N.isArrayCamera){let be=N.cameras;if(_e.length>0)for(let Le=0,qe=be.length;Le<qe;Le++){let Xe=be[Le];ar(we,_e,x,Xe)}gt&&Ge.render(x);for(let Le=0,qe=be.length;Le<qe;Le++){let Xe=be[Le];ii(T,x,Xe,Xe.viewport)}}else _e.length>0&&ar(we,_e,x,N),gt&&Ge.render(x),ii(T,x,N)}re!==null&&J===0&&(Z.updateMultisampleRenderTarget(re),Z.updateRenderTargetMipmap(re)),V&&E.end(P),x.isScene===!0&&x.onAfterRender(P,x,N),ve.resetDefaultState(),Y=-1,te=null,v.pop(),v.length>0?(b=v[v.length-1],Z.setTextureUnits(b.state.textureUnits),nt===!0&&Ue.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,z!==null&&z.renderEnd()};function hs(x,N,q,V){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)q=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum($e)){V&&Ft.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Qe);let we=ee.update(x),_e=x.material;_e.visible&&T.push(x,we,_e,q,Ft.z,null,N)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum($e))){let we=ee.update(x),_e=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ft.copy(x.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ft.copy(we.boundingSphere.center)),Ft.applyMatrix4(x.matrixWorld).applyMatrix4(Qe)),Array.isArray(_e)){let be=we.groups;for(let Le=0,qe=be.length;Le<qe;Le++){let Xe=be[Le],Ce=_e[Xe.materialIndex];Ce&&Ce.visible&&T.push(x,we,Ce,q,Ft.z,Xe,N)}}else _e.visible&&T.push(x,we,_e,q,Ft.z,null,N)}}let ge=x.children;for(let we=0,_e=ge.length;we<_e;we++)hs(ge[we],N,q,V)}function ii(x,N,q,V){let{opaque:G,transmissive:ge,transparent:we}=x;b.setupLightsView(q),nt===!0&&Ue.setGlobalState(P.clippingPlanes,q),V&&g.viewport(se.copy(V)),G.length>0&&Vi(G,N,q),ge.length>0&&Vi(ge,N,q),we.length>0&&Vi(we,N,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function ar(x,N,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let Ce=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new zt(1,1,{generateMipmaps:!0,type:Ce?tn:gn,minFilter:Ui,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let ge=b.state.transmissionRenderTarget[V.id],we=V.viewport||se;ge.setSize(we.z*P.transmissionResolutionScale,we.w*P.transmissionResolutionScale);let _e=P.getRenderTarget(),be=P.getActiveCubeFace(),Le=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor(_t),rt=P.getClearAlpha(),rt<1&&P.setClearColor(16777215,.5),P.clear(),gt&&Ge.render(q);let qe=P.toneMapping;P.toneMapping=kn;let Xe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),nt===!0&&Ue.setGlobalState(P.clippingPlanes,V),Vi(x,q,V),Z.updateMultisampleRenderTarget(ge),Z.updateRenderTargetMipmap(ge),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ot=0,Lt=N.length;ot<Lt;ot++){let Mt=N[ot],{object:St,geometry:Vt,material:Ee,group:Ot}=Mt;if(Ee.side===on&&St.layers.test(V.layers)){let it=Ee.side;Ee.side=Wt,Ee.needsUpdate=!0,or(St,q,V,Vt,Ee,Ot),Ee.side=it,Ee.needsUpdate=!0,Ce=!0}}Ce===!0&&(Z.updateMultisampleRenderTarget(ge),Z.updateRenderTargetMipmap(ge))}P.setRenderTarget(_e,be,Le),P.setClearColor(_t,rt),Xe!==void 0&&(V.viewport=Xe),P.toneMapping=qe}function Vi(x,N,q){let V=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ge=x.length;G<ge;G++){let we=x[G],{object:_e,geometry:be,group:Le}=we,qe=we.material;qe.allowOverride===!0&&V!==null&&(qe=V),_e.layers.test(q.layers)&&or(_e,N,q,be,qe,Le)}}function or(x,N,q,V,G,ge){z!==null&&G.isNodeMaterial&&z.setObject(x,G),x.onBeforeRender(P,N,q,V,G,ge),x.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),G.onBeforeRender(P,N,q,V,x,ge),G.transparent===!0&&G.side===on&&G.forceSinglePass===!1?(G.side=Wt,G.needsUpdate=!0,P.renderBufferDirect(q,N,V,G,x,ge),G.side=Ni,G.needsUpdate=!0,P.renderBufferDirect(q,N,V,G,x,ge),G.side=on):P.renderBufferDirect(q,N,V,G,x,ge),x.onAfterRender(P,N,q,V,G,ge)}function vi(x,N,q){N.isScene!==!0&&(N=Kt);let V=W.get(x),G=b.state.lights,ge=b.state.shadowsArray,we=G.state.version,_e=ue.getParameters(x,G.state,ge,N,q,b.state.lightProbeGridArray),be=ue.getProgramCacheKey(_e),Le=V.programs;V.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;let qe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;V.envMap=ce.get(x.envMap||V.environment,qe),V.envMapRotation=V.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Le===void 0&&(x.addEventListener("dispose",kt),Le=new Map,V.programs=Le);let Xe=Le.get(be);if(Xe!==void 0){if(V.currentProgram===Xe&&V.lightsStateVersion===we)return Sa(x,_e),Xe}else _e.uniforms=ue.getUniforms(x),z!==null&&x.isNodeMaterial&&z.build(x,q,_e),x.onBeforeCompile(_e,P),Xe=ue.acquireProgram(_e,be),Le.set(be,Xe),V.uniforms=_e.uniforms;let Ce=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),Sa(x,_e),V.needsLights=Ta(x),V.lightsStateVersion=we,V.needsLights&&(Ce.ambientLightColor.value=G.state.ambient,Ce.lightProbe.value=G.state.probe,Ce.sunLights.value=G.state.sun,Ce.sunLightShadows.value=G.state.sunShadow,Ce.directionalLights.value=G.state.directional,Ce.directionalLightShadows.value=G.state.directionalShadow,Ce.spotLights.value=G.state.spot,Ce.spotLightShadows.value=G.state.spotShadow,Ce.rectAreaLights.value=G.state.rectArea,Ce.ltc_1.value=G.state.rectAreaLTC1,Ce.ltc_2.value=G.state.rectAreaLTC2,Ce.pointLights.value=G.state.point,Ce.pointLightShadows.value=G.state.pointShadow,Ce.hemisphereLights.value=G.state.hemi,Ce.sunShadowMatrix.value=G.state.sunShadowMatrix,Ce.sunShadowCascade.value=G.state.sunShadowCascade,Ce.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ce.spotLightMatrix.value=G.state.spotLightMatrix,Ce.spotLightMap.value=G.state.spotLightMap,Ce.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=Xe,V.uniformsList=null,Xe}function Gi(x){if(x.uniformsList===null){let N=x.currentProgram.getUniforms();x.uniformsList=qs.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function Sa(x,N){let q=W.get(x);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function ba(x,N){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let q=0,V=x.length;q<V;q++){let G=x[q];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function Ea(x,N,q,V,G){N.isScene!==!0&&(N=Kt),Z.resetTextureUnits();let ge=N.fog,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,_e=re===null?P.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:et.workingColorSpace,be=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Le=ce.get(V.envMap||we,be),qe=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xe=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!q.morphAttributes.position,ot=!!q.morphAttributes.normal,Lt=!!q.morphAttributes.color,Mt=kn;V.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Mt=P.toneMapping);let St=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Vt=St!==void 0?St.length:0,Ee=W.get(V),Ot=b.state.lights;if(nt===!0&&(xt===!0||x!==te)){let pt=x===te&&V.id===Y;Ue.setState(V,x,pt)}let it=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ot.state.version||Ee.outputColorSpace!==_e||G.isBatchedMesh&&Ee.batching===!1||!G.isBatchedMesh&&Ee.batching===!0||G.isBatchedMesh&&Ee.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ee.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ee.instancing===!1||!G.isInstancedMesh&&Ee.instancing===!0||G.isSkinnedMesh&&Ee.skinning===!1||!G.isSkinnedMesh&&Ee.skinning===!0||G.isInstancedMesh&&Ee.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ee.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ee.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ee.instancingMorph===!1&&G.morphTexture!==null||Ee.envMap!==Le||V.fog===!0&&Ee.fog!==ge||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Ue.numPlanes||Ee.numIntersection!==Ue.numIntersection)||Ee.vertexAlphas!==qe||Ee.vertexTangents!==Xe||Ee.morphTargets!==Ce||Ee.morphNormals!==ot||Ee.morphColors!==Lt||Ee.toneMapping!==Mt||Ee.morphTargetsCount!==Vt||!!Ee.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,Ee.__version=V.version);let nn=Ee.currentProgram;it===!0&&(nn=vi(V,N,G),z&&V.isNodeMaterial&&z.onUpdateProgram(V,nn,Ee));let En=!1,In=!1,Wn=!1,ht=nn.getUniforms(),Rt=Ee.uniforms;if(g.useProgram(nn.program)&&(En=!0,In=!0,Wn=!0),V.id!==Y&&(Y=V.id,In=!0),Ee.needsLights){let pt=ba(b.state.lightProbeGridArray,G);Ee.lightProbeGrid!==pt&&(Ee.lightProbeGrid=pt,In=!0)}if(En||te!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ht.setValue(O,"projectionMatrix",x.projectionMatrix),ht.setValue(O,"viewMatrix",x.matrixWorldInverse);let Xn=ht.map.cameraPosition;Xn!==void 0&&Xn.setValue(O,yt.setFromMatrixPosition(x.matrixWorld)),w.logarithmicDepthBuffer&&ht.setValue(O,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ht.setValue(O,"isOrthographic",x.isOrthographicCamera===!0),te!==x&&(te=x,In=!0,Wn=!0)}if(Ee.needsLights&&(Ot.state.sunShadowMap.length>0&&ht.setValue(O,"sunShadowMap",Ot.state.sunShadowMap,Z),Ot.state.directionalShadowMap.length>0&&ht.setValue(O,"directionalShadowMap",Ot.state.directionalShadowMap,Z),Ot.state.spotShadowMap.length>0&&ht.setValue(O,"spotShadowMap",Ot.state.spotShadowMap,Z),Ot.state.pointShadowMap.length>0&&ht.setValue(O,"pointShadowMap",Ot.state.pointShadowMap,Z)),G.isSkinnedMesh){ht.setOptional(O,G,"bindMatrix"),ht.setOptional(O,G,"bindMatrixInverse");let pt=G.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ht.setValue(O,"boneTexture",pt.boneTexture,Z))}G.isBatchedMesh&&(ht.setOptional(O,G,"batchingTexture"),ht.setValue(O,"batchingTexture",G._matricesTexture,Z),ht.setOptional(O,G,"batchingIdTexture"),ht.setValue(O,"batchingIdTexture",G._indirectTexture,Z),ht.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&ht.setValue(O,"batchingColorTexture",G._colorsTexture,Z));let mn=q.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&U.update(G,q,nn),(In||Ee.receiveShadow!==G.receiveShadow)&&(Ee.receiveShadow=G.receiveShadow,ht.setValue(O,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(Rt.envMapIntensity.value=N.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=px()),In){if(ht.setValue(O,"toneMappingExposure",P.toneMappingExposure),Ee.needsLights&&ic(Rt,Wn),ge&&V.fog===!0&&De.refreshFogUniforms(Rt,ge),De.refreshMaterialUniforms(Rt,V,ne,Q,b.state.transmissionRenderTarget[x.id]),Ee.needsLights&&Ee.lightProbeGrid){let pt=Ee.lightProbeGrid;Rt.probesSH.value=pt.texture,Rt.probesMin.value.copy(pt.boundingBox.min),Rt.probesMax.value.copy(pt.boundingBox.max),Rt.probesResolution.value.copy(pt.resolution)}qs.upload(O,Gi(Ee),Rt,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(qs.upload(O,Gi(Ee),Rt,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ht.setValue(O,"center",G.center),ht.setValue(O,"modelViewMatrix",G.modelViewMatrix),ht.setValue(O,"normalMatrix",G.normalMatrix),ht.setValue(O,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let pt=V.uniformsGroups;for(let Xn=0,si=pt.length;Xn<si;Xn++){let lr=pt[Xn];ie.update(lr,nn),ie.bind(lr,nn)}}return nn}function ic(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.sunLights.needsUpdate=N,x.sunLightShadows.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Ta(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(x,N,q){let V=W.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(x.texture).__webglTexture=N,W.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){let q=W.get(x);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(x,N=0,q=0){re=x,K=N,J=q;let V=null,G=!1,ge=!1;if(x){let _e=W.get(x);if(_e.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(O.FRAMEBUFFER,_e.__webglFramebuffer),se.copy(x.viewport),Ne.copy(x.scissor),Fe=x.scissorTest,g.viewport(se),g.scissor(Ne),g.setScissorTest(Fe),Y=-1;return}else if(_e.__webglFramebuffer===void 0)Z.setupRenderTarget(x);else if(_e.__hasExternalTextures)Z.rebindTextures(x,W.get(x.texture).__webglTexture,W.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let qe=x.depthTexture;if(_e.__boundDepthTexture!==qe){if(qe!==null&&W.has(qe)&&(x.width!==qe.image.width||x.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(x)}}let be=x.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ge=!0);let Le=W.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?V=Le[N][q]:V=Le[N],G=!0):x.samples>0&&Z.useMultisampledRTT(x)===!1?V=W.get(x).__webglMultisampledFramebuffer:Array.isArray(Le)?V=Le[q]:V=Le,se.copy(x.viewport),Ne.copy(x.scissor),Fe=x.scissorTest}else se.copy(Se).multiplyScalar(ne).floor(),Ne.copy(Ze).multiplyScalar(ne).floor(),Fe=Ut;if(q!==0&&(V=k),g.bindFramebuffer(O.FRAMEBUFFER,V)&&g.drawBuffers(x,V),g.viewport(se),g.scissor(Ne),g.setScissorTest(Fe),G){let _e=W.get(x.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,q)}else if(ge){let _e=N;for(let be=0;be<x.textures.length;be++){let Le=W.get(x.textures[be]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+be,Le.__webglTexture,q,_e)}}else if(x!==null&&q!==0){let _e=W.get(x.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_e.__webglTexture,q)}Y=-1};function wa(x){let N=W.get(x);return(N.__readFormat!==x.format||N.__readType!==x.type)&&(N.__readFormat=x.format,N.__readType=x.type,N.__formatReadable=w.textureFormatReadable(x.format),N.__typeReadable=w.textureTypeReadable(x.type)),N}this.readRenderTargetPixels=function(x,N,q,V,G,ge,we,_e=0){if(!(x&&x.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=W.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&we!==void 0&&(be=be[we]),be){g.bindFramebuffer(O.FRAMEBUFFER,be);try{let Le=x.textures[_e],qe=Le.format,Xe=Le.type;x.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_e);let Ce=wa(Le);if(Ce.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-V&&q>=0&&q<=x.height-G&&O.readPixels(N,q,V,G,fe.convert(qe),fe.convert(Xe),ge)}finally{let Le=re!==null?W.get(re).__webglFramebuffer:null;g.bindFramebuffer(O.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(x,N,q,V,G,ge,we,_e=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=W.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&we!==void 0&&(be=be[we]),be)if(N>=0&&N<=x.width-V&&q>=0&&q<=x.height-G){g.bindFramebuffer(O.FRAMEBUFFER,be);let Le=x.textures[_e],qe=Le.format,Xe=Le.type;x.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_e);let Ce=wa(Le);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ot),O.bufferData(O.PIXEL_PACK_BUFFER,ge.byteLength,O.STREAM_READ),O.readPixels(N,q,V,G,fe.convert(qe),fe.convert(Xe),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Lt=re!==null?W.get(re).__webglFramebuffer:null;g.bindFramebuffer(O.FRAMEBUFFER,Lt);let Mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Dd(O,Mt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ot),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ge),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ot),O.deleteSync(Mt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,q=0){let V=Math.pow(2,-q),G=Math.floor(x.image.width*V),ge=Math.floor(x.image.height*V),we=N!==null?N.x:0,_e=N!==null?N.y:0;Z.setTexture2D(x,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,we,_e,G,ge),g.unbindTexture()},this.copyTextureToTexture=function(x,N,q=null,V=null,G=0,ge=0){let we,_e,be,Le,qe,Xe,Ce,ot,Lt,Mt=x.isCompressedTexture?x.mipmaps[ge]:x.image;if(q!==null)we=q.max.x-q.min.x,_e=q.max.y-q.min.y,be=q.isBox3?q.max.z-q.min.z:1,Le=q.min.x,qe=q.min.y,Xe=q.isBox3?q.min.z:0;else{let Rt=Math.pow(2,-G);we=Math.floor(Mt.width*Rt),_e=Math.floor(Mt.height*Rt),x.isDataArrayTexture?be=Mt.depth:x.isData3DTexture?be=Math.floor(Mt.depth*Rt):be=1,Le=0,qe=0,Xe=0}V!==null?(Ce=V.x,ot=V.y,Lt=V.z):(Ce=0,ot=0,Lt=0);let St=fe.convert(N.format),Vt=fe.convert(N.type),Ee;N.isData3DTexture?(Z.setTexture3D(N,0),Ee=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),Ee=O.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),Ee=O.TEXTURE_2D),g.activeTexture(O.TEXTURE0),g.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),g.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),g.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let Ot=g.getParameter(O.UNPACK_ROW_LENGTH),it=g.getParameter(O.UNPACK_IMAGE_HEIGHT),nn=g.getParameter(O.UNPACK_SKIP_PIXELS),En=g.getParameter(O.UNPACK_SKIP_ROWS),In=g.getParameter(O.UNPACK_SKIP_IMAGES);g.pixelStorei(O.UNPACK_ROW_LENGTH,Mt.width),g.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt.height),g.pixelStorei(O.UNPACK_SKIP_PIXELS,Le),g.pixelStorei(O.UNPACK_SKIP_ROWS,qe),g.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe);let Wn=x.isDataArrayTexture||x.isData3DTexture,ht=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){let Rt=W.get(x),mn=W.get(N),pt=W.get(Rt.__renderTarget),Xn=W.get(mn.__renderTarget);g.bindFramebuffer(O.READ_FRAMEBUFFER,pt.__webglFramebuffer),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let si=0;si<be;si++)Wn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(x).__webglTexture,G,Xe+si),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(N).__webglTexture,ge,Lt+si)),O.blitFramebuffer(Le,qe,we,_e,Ce,ot,we,_e,O.DEPTH_BUFFER_BIT,O.NEAREST);g.bindFramebuffer(O.READ_FRAMEBUFFER,null),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||x.isRenderTargetTexture||W.has(x)){let Rt=W.get(x),mn=W.get(N);g.bindFramebuffer(O.READ_FRAMEBUFFER,D),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,X);for(let pt=0;pt<be;pt++)Wn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.__webglTexture,G,Xe+pt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Rt.__webglTexture,G),ht?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,mn.__webglTexture,ge,Lt+pt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mn.__webglTexture,ge),G!==0?O.blitFramebuffer(Le,qe,we,_e,Ce,ot,we,_e,O.COLOR_BUFFER_BIT,O.NEAREST):ht?O.copyTexSubImage3D(Ee,ge,Ce,ot,Lt+pt,Le,qe,we,_e):O.copyTexSubImage2D(Ee,ge,Ce,ot,Le,qe,we,_e);g.bindFramebuffer(O.READ_FRAMEBUFFER,null),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ht?x.isDataTexture||x.isData3DTexture?O.texSubImage3D(Ee,ge,Ce,ot,Lt,we,_e,be,St,Vt,Mt.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Ee,ge,Ce,ot,Lt,we,_e,be,St,Mt.data):O.texSubImage3D(Ee,ge,Ce,ot,Lt,we,_e,be,St,Vt,Mt):x.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ge,Ce,ot,we,_e,St,Vt,Mt.data):x.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ge,Ce,ot,Mt.width,Mt.height,St,Mt.data):O.texSubImage2D(O.TEXTURE_2D,ge,Ce,ot,we,_e,St,Vt,Mt);g.pixelStorei(O.UNPACK_ROW_LENGTH,Ot),g.pixelStorei(O.UNPACK_IMAGE_HEIGHT,it),g.pixelStorei(O.UNPACK_SKIP_PIXELS,nn),g.pixelStorei(O.UNPACK_SKIP_ROWS,En),g.pixelStorei(O.UNPACK_SKIP_IMAGES,In),ge===0&&N.generateMipmaps&&O.generateMipmap(Ee),g.unbindTexture()},this.initRenderTarget=function(x){W.get(x).__webglFramebuffer===void 0&&Z.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Z.setTextureCube(x,0):x.isData3DTexture?Z.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Z.setTexture2DArray(x,0):Z.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){K=0,J=0,re=null,g.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var $s={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},mx=new Li(-1,1,1,-1,0,1),Uh=class extends ut{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}},gx=new Uh,Bi=class{constructor(e){this._mesh=new Re(gx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Js=class extends bn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mi.clone(e.uniforms),this.material=new tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Bi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var pa=class extends bn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ql=class extends bn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Yl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Me);this._width=n.width,this._height=n.height,t=new zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Js($s),this.copyPass.material.blending=Rn,this.timer=new Zr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}pa!==void 0&&(a instanceof pa?n=!0:a instanceof ql&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Zl=class extends bn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var pf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ks=class i extends bn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new pe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new zt(r,a,{type:tn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new zt(r,a,{type:tn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new zt(r,a,{type:tn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=pf;this.highPassUniforms=mi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Me(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mi.clone($s.uniforms),this.blendMaterial=new tt({uniforms:this.copyUniforms,vertexShader:$s.vertexShader,fragmentShader:$s.fragmentShader,premultipliedAlpha:!0,blending:ct,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pe,this._oldClearAlpha=1,this._basic=new Gt,this._fsQuad=new Bi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new tt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ks.BlurDirectionX=new Me(1,0);Ks.BlurDirectionY=new Me(0,1);var ma={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var $l=class extends bn{constructor(){super(),this.isOutputPass=!0,this.uniforms=mi.clone(ma.uniforms),this.material=new Fs({name:ma.name,uniforms:this.uniforms,vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader}),this._fsQuad=new Bi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ns?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ta?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===jr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var cn=[{id:"origin",no:"01",kicker:"PROLOGUE",cnKicker:"\u5E8F\u7AE0",short:"\u5FAE\u89C2\u5B87\u5B99",title:"\u7EC6\u80DE\uFF0C\u662F\u4E00\u4E2A\u5B87\u5B99",en:"THE CELL AS A MICROCOSM",body:"\u6B64\u523B\uFF0C\u4F60\u60AC\u505C\u5728\u4E00\u4E2A\u7EC6\u80DE\u7684\u8FB9\u754C\u4E4B\u5916\u3002\u5B83\u6CA1\u6709\u5927\u8111\uFF0C\u5374\u7EF4\u6301\u7740\u79E9\u5E8F\uFF1B\u6CA1\u6709\u56FE\u7EB8\uFF0C\u5374\u4E0D\u65AD\u91CD\u5EFA\u81EA\u5DF1\u3002\u63A5\u4E0B\u6765\u7684\u4E03\u5E55\uFF0C\u6211\u4EEC\u5C06\u7A7F\u8FC7\u5B83\u7684\u8D28\u819C\u3001\u9AA8\u67B6\u3001\u80FD\u91CF\u5DE5\u5382\u4E0E\u57FA\u56E0\u7EC4\u3002",facts:[{k:"\u4EBA\u4F53\u7EC6\u80DE",v:"\u7EA6 30 \u4E07\u4EBF"},{k:"\u5178\u578B\u76F4\u5F84",v:"10\u2013100 \xB5m"},{k:"\u9759\u606F\u819C\u7535\u4F4D",v:"\u221270 mV"}],readout:"WHOLE CELL / OPTICAL DARKFIELD",accent:"#7ff7e4",camera:{pos:[0,3,26.5],target:[0,.6,0],fov:42},duration:17e3,study:{textbook:{chapter:"\u7B2C\u4E00\u7AE0",title:"\u7EEA\u8BBA",pages:"1\u201317",sections:["\u7B2C\u4E00\u8282 \u7EC6\u80DE\u5B66\u4E0E\u7EC6\u80DE\u751F\u7269\u5B66","\u7B2C\u4E8C\u8282 \u7EC6\u80DE\u7684\u540C\u4E00\u6027\u4E0E\u591A\u6837\u6027"]},related:["\u7B2C\u4E8C\u7AE0 \u7EC6\u80DE\u751F\u7269\u5B66\u7814\u7A76\u65B9\u6CD5 \xB7 pp.18\u201339"],objectives:["\u7528\u7EC6\u80DE\u5B66\u8BF4\u89E3\u91CA\u201C\u7EC6\u80DE\u662F\u751F\u547D\u6D3B\u52A8\u7684\u57FA\u672C\u5355\u4F4D\u201D\u3002","\u4ECE\u6838\u819C\u3001\u7EC6\u80DE\u5668\u548C\u6838\u7CD6\u4F53\u7B49\u7ED3\u6784\u533A\u5206\u539F\u6838\u7EC6\u80DE\u4E0E\u771F\u6838\u7EC6\u80DE\u3002","\u4E86\u89E3\u7EC6\u80DE\u751F\u7269\u5B66\u4ECE\u5F62\u6001\u63CF\u8FF0\u8D70\u5411\u5206\u5B50\u673A\u5236\u7684\u7814\u7A76\u8DEF\u5F84\u3002"],visuals:[{color:"#7ff7e4",label:"\u534A\u900F\u660E\u5916\u58F3 = \u7EC6\u80DE\u8D28\u819C"},{color:"#c58cff",label:"\u4E2D\u592E\u7D2B\u6838 = \u7EC6\u80DE\u6838"},{color:"#9df5c1",label:"\u9752\u7EFF\u4E1D\u7F51 = \u7EC6\u80DE\u9AA8\u67B6"},{color:"#ffc177",label:"\u91D1\u8272\u53CC\u819C\u4E0E\u5C42\u7247 = \u7EBF\u7C92\u4F53\u53CA\u5D74"}],concepts:[{term:"\u7EC6\u80DE\u5B66\u8BF4",en:"cell theory",def:"1838\u20141839 \u5E74\u7531\u65BD\u83B1\u767B\u548C\u65BD\u4E07\u786E\u7ACB\uFF1A\u4E00\u5207\u751F\u7269\u90FD\u7531\u7EC6\u80DE\u6784\u6210\uFF0C\u7EC6\u80DE\u662F\u7ED3\u6784\u548C\u529F\u80FD\u7684\u57FA\u672C\u5355\u4F4D\uFF1B\u540E\u6765\u9B4F\u5C14\u8096\u8865\u5145\u201C\u7EC6\u80DE\u6765\u81EA\u7EC6\u80DE\u201D\u3002"},{term:"\u539F\u6838\u7EC6\u80DE",en:"prokaryotic cell",def:"\u6CA1\u6709\u6838\u819C\u5305\u56F4\u7684\u7EC6\u80DE\u6838\uFF0CDNA \u96C6\u4E2D\u5728\u62DF\u6838\u533A\uFF1B\u7F3A\u5C11\u819C\u6027\u7EC6\u80DE\u5668\uFF0C\u6838\u7CD6\u4F53\u4E3A 70S\uFF0C\u4EE3\u8868\u4E3A\u7EC6\u83CC\u548C\u53E4\u83CC\u3002"},{term:"\u771F\u6838\u7EC6\u80DE",en:"eukaryotic cell",def:"\u5177\u6709\u6838\u819C\u3001\u771F\u6B63\u7684\u7EC6\u80DE\u6838\u548C\u591A\u79CD\u819C\u6027\u7EC6\u80DE\u5668\uFF1B\u6709\u7EC6\u80DE\u9AA8\u67B6\uFF0C\u6838\u7CD6\u4F53\u4E3A 80S\u3002"},{term:"\u7EC6\u80DE\u751F\u7269\u5B66",en:"cell biology",def:"\u5E94\u7528\u73B0\u4EE3\u7269\u7406\u3001\u5316\u5B66\u548C\u5206\u5B50\u751F\u7269\u5B66\u65B9\u6CD5\uFF0C\u5728\u7EC6\u80DE\u6C34\u5E73\u7814\u7A76\u751F\u547D\u6D3B\u52A8\u7684\u5B66\u79D1\uFF1B\u6838\u5FC3\u95EE\u9898\u662F\u7ED3\u6784\u5982\u4F55\u6267\u884C\u529F\u80FD\u3002"},{term:"\u6A21\u5F0F\u751F\u7269",en:"model organism",def:"\u56E0\u7E41\u6B96\u5FEB\u3001\u9057\u4F20\u64CD\u4F5C\u6210\u719F\u800C\u7528\u4E8E\u63ED\u793A\u4FDD\u5B88\u673A\u5236\u7684\u6750\u6599\uFF0C\u5982\u5927\u80A0\u6746\u83CC\u3001\u9175\u6BCD\u3001\u7EBF\u866B\u3001\u679C\u8747\u3001\u62DF\u5357\u82A5\u548C\u5C0F\u9F20\u3002"}],mechanism:["\u7EC6\u80DE\u5B66\u8BF4\u3001\u8FDB\u5316\u8BBA\u548C\u9057\u4F20\u5B66\u5171\u540C\u6784\u6210\u73B0\u4EE3\u751F\u7269\u5B66\u7684\u4E09\u5927\u57FA\u77F3\uFF1B\u7EC6\u80DE\u5B66\u8BF4\u628A\u5B8F\u89C2\u751F\u547D\u73B0\u8C61\u843D\u5230\u53EF\u89C2\u5BDF\u7684\u5355\u4F4D\u4E0A\u3002","\u539F\u6838\u4E0E\u771F\u6838\u7684\u5206\u754C\u4E0D\u53EA\u662F\u201C\u6709\u65E0\u7EC6\u80DE\u6838\u201D\uFF0C\u8FD8\u5305\u62EC\u5185\u819C\u7CFB\u7EDF\u3001\u7EC6\u80DE\u9AA8\u67B6\u548C\u6838\u7CD6\u4F53\u7C7B\u578B\u7684\u6574\u4F53\u5DEE\u5F02\u3002","\u73B0\u4EE3\u7EC6\u80DE\u751F\u7269\u5B66\u5E38\u6309\u201C\u89C2\u5BDF\u2014\u5206\u79BB\u2014\u5E72\u9884\u2014\u91CD\u5EFA\u201D\u63A8\u8FDB\uFF1A\u663E\u5FAE\u6210\u50CF\u3001\u4E9A\u7EC6\u80DE\u5206\u79BB\u3001\u6D3B\u7EC6\u80DE\u8367\u5149\u548C\u9057\u4F20\u64CD\u4F5C\u4E92\u76F8\u9A8C\u8BC1\u3002"],pitfalls:["\u75C5\u6BD2\u6CA1\u6709\u7EC6\u80DE\u7ED3\u6784\uFF0C\u4E0D\u80FD\u72EC\u7ACB\u5B8C\u6210\u65B0\u9648\u4EE3\u8C22\uFF0C\u4E0D\u5C5E\u4E8E\u7EC6\u80DE\uFF1B\u5B83\u662F\u975E\u7EC6\u80DE\u5F62\u6001\u7684\u751F\u547D\u4F53\u3002","\u201C\u539F\u6838\u7EC6\u80DE\u6CA1\u6709\u7EC6\u80DE\u5668\u201D\u4E0D\u51C6\u786E\uFF1A\u5B83\u6709\u6838\u7CD6\u4F53\uFF0C\u90E8\u5206\u8FD8\u6709\u5185\u819C\u8936\u76B1\uFF0C\u53EA\u662F\u6CA1\u6709\u7531\u819C\u5305\u56F4\u7684\u7EC6\u80DE\u6838\u548C\u5178\u578B\u819C\u6027\u7EC6\u80DE\u5668\u3002"],quiz:[{q:"\u7EC6\u80DE\u5B66\u8BF4\u7684\u6838\u5FC3\u5185\u5BB9\u662F\u4EC0\u4E48\uFF1F\u5B83\u4E3A\u4EC0\u4E48\u662F\u751F\u7269\u5B66\u7684\u57FA\u7840\u7406\u8BBA\uFF1F",a:"\u6240\u6709\u751F\u7269\u7531\u7EC6\u80DE\u6784\u6210\uFF1B\u7EC6\u80DE\u662F\u7ED3\u6784\u548C\u529F\u80FD\u7684\u57FA\u672C\u5355\u4F4D\uFF1B\u7EC6\u80DE\u6765\u81EA\u5DF2\u5B58\u5728\u7684\u7EC6\u80DE\u3002\u5B83\u628A\u751F\u7269\u754C\u7684\u7EDF\u4E00\u6027\u5EFA\u7ACB\u5728\u53EF\u89C2\u5BDF\u7684\u5355\u4F4D\u4E0A\uFF0C\u5E76\u4E0E\u8FDB\u5316\u8BBA\u3001\u9057\u4F20\u5B66\u5171\u540C\u6784\u6210\u73B0\u4EE3\u751F\u7269\u5B66\u7684\u57FA\u7840\u3002"},{q:"\u5217\u51FA\u81F3\u5C11\u4E09\u9879\u539F\u6838\u7EC6\u80DE\u4E0E\u771F\u6838\u7EC6\u80DE\u7684\u7ED3\u6784\u5DEE\u5F02\u3002",a:"\u539F\u6838\u7EC6\u80DE\u65E0\u6838\u819C\u548C\u771F\u6B63\u7684\u7EC6\u80DE\u6838\uFF0CDNA \u4F4D\u4E8E\u62DF\u6838\uFF1B\u65E0\u5178\u578B\u819C\u6027\u7EC6\u80DE\u5668\uFF1B\u6838\u7CD6\u4F53\u4E3A 70S\u3002\u771F\u6838\u7EC6\u80DE\u6709\u6838\u819C\u3001\u7EC6\u80DE\u6838\u548C\u5185\u819C\u7CFB\u7EDF\uFF0C\u6838\u7CD6\u4F53\u4E3A 80S\uFF0C\u5E76\u6709\u7EC6\u80DE\u9AA8\u67B6\u3002"}]}},{id:"membrane",no:"02",kicker:"BOUNDARY",cnKicker:"\u8FB9\u754C",short:"\u6D41\u52A8\u7684\u8FB9\u754C",title:"\u8FB9\u754C\uFF0C\u4ECE\u672A\u9759\u6B62",en:"A LIQUID LANGUAGE OF SELF",body:"\u8FB9\u754C\u4E0D\u662F\u5899\uFF0C\u800C\u662F\u4E00\u5C42\u6301\u7EED\u91CD\u5199\u7684\u754C\u9762\u3002\u7EC6\u80DE\u8D28\u819C\u539A\u7EA6 7.5 nm\uFF0C\u5176\u4E2D\u758F\u6C34\u6838\u5FC3\u53EA\u6709\u7EA6 3.5 nm\uFF0C\u5374\u628A\u201C\u81EA\u6211\u201D\u4E0E\u201C\u4E16\u754C\u201D\u5206\u5F00\uFF1B\u819C\u86CB\u767D\u5728\u5176\u4E2D\u6F02\u79FB\u3001\u805A\u96C6\u3001\u5F00\u5408\uFF0C\u628A\u6BCF\u4E00\u6B21\u4EA4\u6362\u7FFB\u8BD1\u6210\u751F\u547D\u7684\u8BED\u8A00\u3002",facts:[{k:"\u7EC6\u80DE\u8D28\u819C\u539A\u5EA6",v:"\u2248 7.5 nm"},{k:"\u758F\u6C34\u6838\u5FC3",v:"\u2248 3.5 nm"},{k:"\u80C6\u56FA\u9187",v:"\u53CC\u5411\u8C03\u8282\u6D41\u52A8\u6027"}],readout:"SURFACE SECTION / 7.5 nm",accent:"#67e8f9",camera:{pos:[.6,2.9,12.6],target:[0,2.3,7.2],fov:44},duration:19e3,study:{textbook:{chapter:"\u7B2C\u4E09\u7AE0",title:"\u7EC6\u80DE\u8D28\u819C",pages:"40\u201355",sections:["\u7B2C\u4E00\u8282 \u7EC6\u80DE\u8D28\u819C\u7684\u7ED3\u6784\u6A21\u578B\u4E0E\u57FA\u672C\u6210\u5206","\u7B2C\u4E8C\u8282 \u7EC6\u80DE\u8D28\u819C\u7684\u57FA\u672C\u7279\u5F81\u4E0E\u529F\u80FD"]},related:["\u7B2C\u56DB\u7AE0 \u7269\u8D28\u7684\u8DE8\u819C\u8FD0\u8F93 \xB7 pp.56\u201373","\u7B2C\u5341\u4E00\u7AE0 \u7EC6\u80DE\u4FE1\u53F7\u8F6C\u5BFC \xB7 pp.224\u2013260"],objectives:["\u8BF4\u51FA\u6D41\u52A8\u9576\u5D4C\u6A21\u578B\u7684\u57FA\u672C\u5185\u5BB9\uFF0C\u5E76\u89E3\u91CA\u652F\u6301\u5B83\u7684\u5B9E\u9A8C\u8BC1\u636E\u3002","\u6BD4\u8F83\u819C\u8102\u3001\u819C\u86CB\u767D\u548C\u7CD6\u7C7B\u5728\u8D28\u819C\u4E2D\u7684\u4F4D\u7F6E\u4E0E\u529F\u80FD\u3002","\u7528\u6D41\u52A8\u6027\u3001\u4E0D\u5BF9\u79F0\u6027\u548C\u9009\u62E9\u900F\u8FC7\u6027\u89E3\u91CA\u8D28\u819C\u7684\u751F\u7406\u7279\u5F81\u3002","\u533A\u5206\u7B80\u5355\u6269\u6563\u3001\u534F\u52A9\u6269\u6563\u3001\u4E3B\u52A8\u8FD0\u8F93\u548C\u819C\u6CE1\u8FD0\u8F93\u3002"],visuals:[{color:"#67e8f9",label:"\u9752\u8272\u7EC6\u6746 = \u78F7\u8102\u758F\u6C34\u5C3E\u90E8"},{color:"#b7fff4",label:"\u4EAE\u70B9 = \u78F7\u8102\u6781\u6027\u5934\u90E8"},{color:"#ffcf87",label:"\u8DE8\u819C\u4E9A\u57FA / \u5F00\u653E\u5B54\u8154 = \u819C\u86CB\u767D\u4E0E\u901A\u9053"},{color:"#ffb36b",label:"\u5916\u56F4\u6BDB\u523A = \u7CD6\u843C"}],concepts:[{term:"\u6D41\u52A8\u9576\u5D4C\u6A21\u578B",en:"fluid mosaic model",def:"1972 \u5E74 Singer \u4E0E Nicolson \u63D0\u51FA\uFF1A\u819C\u8102\u5F62\u6210\u6D41\u52A8\u7684\u53CC\u5206\u5B50\u5C42\uFF0C\u819C\u86CB\u767D\u4EE5\u9576\u5D4C\u6216\u8D2F\u7A7F\u7684\u65B9\u5F0F\u5206\u5E03\u5176\u4E2D\uFF0C\u819C\u662F\u4E0D\u5BF9\u79F0\u3001\u53EF\u6D41\u52A8\u7684\u4E8C\u7EF4\u6DB2\u4F53\u3002"},{term:"\u819C\u8102",en:"membrane lipid",def:"\u4EE5\u78F7\u8102\u4E3A\u4E3B\uFF0C\u8FD8\u5305\u62EC\u7CD6\u8102\u548C\u80C6\u56FA\u9187\uFF1B\u4EB2\u6C34\u5934\u90E8\u671D\u5411\u6C34\u76F8\uFF0C\u758F\u6C34\u5C3E\u90E8\u5411\u5185\uFF0C\u5F62\u6210\u53CC\u5206\u5B50\u5C42\u3002"},{term:"\u819C\u86CB\u767D",en:"membrane protein",def:"\u6574\u5408\u819C\u86CB\u767D\u8DE8\u8D8A\u6216\u5D4C\u5165\u8102\u53CC\u5C42\uFF0C\u5916\u5468\u819C\u86CB\u767D\u9644\u7740\u5728\u819C\u8868\u9762\uFF1B\u5B83\u4EEC\u627F\u62C5\u8FD0\u8F93\u3001\u53D7\u4F53\u3001\u9176\u548C\u7ED3\u6784\u8FDE\u63A5\u7B49\u529F\u80FD\u3002"},{term:"\u819C\u7684\u4E0D\u5BF9\u79F0\u6027",en:"membrane asymmetry",def:"\u8102\u8D28\u3001\u86CB\u767D\u8D28\u548C\u7CD6\u94FE\u5728\u819C\u4E24\u4FA7\u7684\u5206\u5E03\u4E0D\u540C\uFF1B\u7CD6\u94FE\u901A\u5E38\u4F4D\u4E8E\u7EC6\u80DE\u5916\u4FA7\uFF0C\u5F62\u6210\u7CD6\u843C\u3002"},{term:"\u819C\u7684\u6D41\u52A8\u6027",en:"membrane fluidity",def:"\u819C\u8102\u548C\u819C\u86CB\u767D\u5728\u4E8C\u7EF4\u5E73\u9762\u5185\u7684\u4FA7\u5411\u8FD0\u52A8\u3002\u8102\u80AA\u9178\u4E0D\u9971\u548C\u5EA6\u3001\u94FE\u957F\u3001\u6E29\u5EA6\u548C\u80C6\u56FA\u9187\u90FD\u4F1A\u5F71\u54CD\u6D41\u52A8\u6027\u3002"},{term:"\u819C\u8F6C\u8FD0\u86CB\u767D",en:"membrane transport protein",def:"\u5305\u62EC\u901A\u9053\u86CB\u767D\u548C\u8F7D\u4F53\u86CB\u767D\uFF1B\u901A\u9053\u5F62\u6210\u4EB2\u6C34\u5B54\u9053\uFF0C\u8F7D\u4F53\u901A\u8FC7\u6784\u8C61\u53D8\u5316\u8F6C\u8FD0\u7269\u8D28\uFF0C\u6CF5\u5219\u6D88\u8017 ATP \u9006\u68AF\u5EA6\u8FD0\u8F93\u3002"},{term:"\u819C\u7535\u4F4D",en:"membrane potential",def:"\u819C\u4E24\u4FA7\u7535\u8377\u5206\u5E03\u4E0D\u5747\u5F62\u6210\u7684\u7535\u4F4D\u5DEE\uFF1B\u7531\u79BB\u5B50\u68AF\u5EA6\u548C\u819C\u5BF9\u5404\u79BB\u5B50\u7684\u76F8\u5BF9\u901A\u900F\u6027\u5171\u540C\u51B3\u5B9A\uFF0C\u9759\u606F\u65F6\u5185\u8D1F\u5916\u6B63\u3002"}],mechanism:["1925 \u5E74 Gorter \u4E0E Grendel \u53D1\u73B0\u7EA2\u7EC6\u80DE\u819C\u8102\u94FA\u5C55\u9762\u79EF\u4E3A\u7EC6\u80DE\u8868\u9762\u79EF\u7684 2 \u500D\uFF0C\u63D0\u793A\u8102\u8D28\u4EE5\u53CC\u5206\u5B50\u5C42\u6392\u5217\uFF1B\u6B64\u540E\u5355\u4F4D\u819C\u6A21\u578B\u3001\u51B7\u51BB\u8680\u523B\u548C\u7EC6\u80DE\u878D\u5408\u5B9E\u9A8C\u9010\u6B65\u652F\u6301\u6D41\u52A8\u9576\u5D4C\u6A21\u578B\u3002","\u819C\u86CB\u767D\u7684\u6D41\u52A8\u6027\u53EF\u7528\u7EC6\u80DE\u878D\u5408\u5B9E\u9A8C\u8BC1\u660E\uFF1A\u7528\u4E0D\u540C\u8367\u5149\u6297\u4F53\u6807\u8BB0\u4E24\u79CD\u7EC6\u80DE\uFF0C\u878D\u5408\u540E 40 \u5206\u949F\u8367\u5149\u5728\u819C\u4E0A\u5747\u5300\u5206\u5E03\u3002\u7EC6\u80DE\u9AA8\u67B6\u548C\u819C\u9AA8\u67B6\u4F1A\u628A\u90E8\u5206\u819C\u86CB\u767D\u951A\u5B9A\u5728\u7279\u5B9A\u533A\u57DF\u3002","\u8DE8\u819C\u8FD0\u8F93\u5206\u4E09\u6761\u8DEF\u7EBF\uFF1A\u88AB\u52A8\u8FD0\u8F93\uFF08\u7B80\u5355\u6269\u6563\u3001\u534F\u52A9\u6269\u6563\uFF09\u987A\u7535\u5316\u5B66\u68AF\u5EA6\uFF1B\u4E3B\u52A8\u8FD0\u8F93\uFF08\u5982 Na\u207A/K\u207A-ATP \u9176\uFF09\u6D88\u8017 ATP \u9006\u68AF\u5EA6\uFF1B\u80DE\u541E\u4E0E\u80DE\u5410\u5B8C\u6210\u5927\u5206\u5B50\u548C\u9897\u7C92\u7684\u819C\u6CE1\u8FD0\u8F93\u3002","Na\u207A/K\u207A-ATP \u9176\u6BCF\u6C34\u89E3 1 \u5206\u5B50 ATP\uFF0C\u628A 3 \u4E2A Na\u207A \u6CF5\u51FA\u30012 \u4E2A K\u207A \u6CF5\u5165\uFF0C\u7EF4\u6301\u7EC6\u80DE\u5185\u9AD8 K\u207A\u3001\u7EC6\u80DE\u5916\u9AD8 Na\u207A\uFF0C\u5E76\u4E3A\u819C\u7535\u4F4D\u548C\u6B21\u7EA7\u4E3B\u52A8\u8FD0\u8F93\u63D0\u4F9B\u80FD\u91CF\u3002"],pitfalls:["\u8D28\u819C\u539A\u7EA6 7.5 nm\uFF0C\u4E0D\u662F 5 nm\uFF1B\u5176\u4E2D\u758F\u6C34\u6838\u5FC3\u7EA6 3.5 nm\uFF0C\u4E24\u4FA7\u7684\u6781\u6027\u5934\u90E8\u548C\u86CB\u767D\u5C42\u5171\u540C\u6784\u6210\u5B8C\u6574\u819C\u539A\u3002","\u901A\u9053\u86CB\u767D\u4E0D\u6D88\u8017 ATP\uFF0C\u8F7D\u4F53\u86CB\u767D\u65E2\u53EF\u80FD\u534F\u52A9\u6269\u6563\u4E5F\u53EF\u80FD\u4E3B\u52A8\u8FD0\u8F93\uFF1B\u5224\u65AD\u8FD0\u8F93\u65B9\u5F0F\u8981\u770B\u662F\u5426\u9006\u7535\u5316\u5B66\u68AF\u5EA6\u3001\u662F\u5426\u9700\u8981\u80FD\u91CF\u3002","\u819C\u86CB\u767D\u5E76\u975E\u90FD\u80FD\u81EA\u7531\u6269\u6563\uFF1A\u8BB8\u591A\u86CB\u767D\u53D7\u819C\u9AA8\u67B6\u3001\u7EC6\u80DE\u8FDE\u63A5\u6216\u8102\u7B4F\u9650\u5236\uFF0C\u8FD0\u52A8\u8303\u56F4\u660E\u663E\u5C0F\u4E8E\u4EBA\u5DE5\u8102\u53CC\u5C42\u3002"],quiz:[{q:"\u7EA2\u7EC6\u80DE\u819C\u8102\u94FA\u5C55\u9762\u79EF\u662F\u5B8C\u6574\u7EA2\u7EC6\u80DE\u8868\u9762\u79EF\u7684 2 \u500D\uFF0C\u8FD9\u4E00\u7ED3\u679C\u8BF4\u660E\u4E86\u4EC0\u4E48\uFF1F",a:"\u8BF4\u660E\u819C\u8102\u5728\u5929\u7136\u819C\u4E2D\u4EE5\u53CC\u5206\u5B50\u5C42\u5F62\u5F0F\u6392\u5217\uFF1A\u6BCF\u5C42\u8102\u8D28\u94FA\u5C55\u5F00\u6765\u7EA6\u4E3A\u539F\u7EC6\u80DE\u8868\u9762\u79EF\uFF0C\u4E24\u5C42\u76F8\u52A0\u5373 2 \u500D\u3002"},{q:"\u7528\u7EC6\u80DE\u878D\u5408\u5B9E\u9A8C\u5982\u4F55\u8BC1\u660E\u819C\u86CB\u767D\u5177\u6709\u6D41\u52A8\u6027\uFF1F",a:"\u7528\u4E0D\u540C\u989C\u8272\u8367\u5149\u6297\u4F53\u5206\u522B\u6807\u8BB0\u4E24\u79CD\u7EC6\u80DE\u7684\u819C\u86CB\u767D\uFF0C\u8BF1\u5BFC\u7EC6\u80DE\u878D\u5408\uFF1B\u77ED\u65F6\u95F4\u5185\u4E24\u79CD\u8367\u5149\u5728\u878D\u5408\u7EC6\u80DE\u8868\u9762\u6DF7\u5408\u5E76\u5747\u5300\u5206\u5E03\uFF0C\u8BF4\u660E\u819C\u86CB\u767D\u80FD\u5728\u819C\u5E73\u9762\u5185\u81EA\u7531\u6269\u6563\u3002"},{q:"Na\u207A/K\u207A-ATP \u9176\u7684\u5DE5\u4F5C\u65B9\u5F0F\u548C\u751F\u7406\u610F\u4E49\u662F\u4EC0\u4E48\uFF1F",a:"\u6BCF\u6C34\u89E3 1 \u4E2A ATP\uFF0C\u6CF5\u51FA 3 \u4E2A Na\u207A\u3001\u6CF5\u5165 2 \u4E2A K\u207A\uFF0C\u5EFA\u7ACB\u5E76\u7EF4\u6301\u7EC6\u80DE\u5185\u5916 Na\u207A\u3001K\u207A \u6D53\u5EA6\u5DEE\uFF0C\u7EF4\u6301\u819C\u7535\u4F4D\uFF0C\u5E76\u4E3A\u8461\u8404\u7CD6\u3001\u6C28\u57FA\u9178\u7B49\u6B21\u7EA7\u4E3B\u52A8\u8FD0\u8F93\u63D0\u4F9B\u9A71\u52A8\u529B\u3002"}]}},{id:"cytoskeleton",no:"03",kicker:"TENSEGRITY",cnKicker:"\u5F20\u529B",short:"\u7EC6\u80DE\u9AA8\u67B6",title:"\u6CA1\u6709\u9AA8\u9ABC\uFF0C\u5374\u6709\u5F20\u529B",en:"A CONTINUOUSLY REWRITTEN SCAFFOLD",body:"\u7EC6\u80DE\u6CA1\u6709\u9AA8\u9ABC\uFF0C\u5374\u62E5\u6709\u5F20\u529B\u3002\u5FAE\u4E1D\u3001\u5FAE\u7BA1\u4E0E\u4E2D\u95F4\u4E1D\u7EC4\u6210\u4E00\u5F20\u4E0D\u65AD\u91CD\u5851\u7684\u7F51\uFF1B\u5206\u5B50\u9A6C\u8FBE\u6CBF\u8F68\u9053\u884C\u8D70\uFF0C\u628A\u7269\u8D28\u3001\u4FE1\u53F7\u4E0E\u529B\uFF0C\u4E00\u8D77\u642C\u8FD0\u5230\u9700\u8981\u7684\u5730\u65B9\u3002",facts:[{k:"\u5FAE\u4E1D",v:"\u2248 7 nm"},{k:"\u5FAE\u7BA1\u5916\u5F84",v:"\u2248 24 nm"},{k:"\u4E2D\u95F4\u4E1D",v:"\u2248 10 nm"}],readout:"CYTOSOL / FIBER TRACT",accent:"#9df5c1",camera:{pos:[3,1.2,5.7],target:[.3,.6,.4],fov:50},duration:18e3,study:{textbook:{chapter:"\u7B2C\u516B\u7AE0",title:"\u7EC6\u80DE\u9AA8\u67B6",pages:"144\u2013176",sections:["\u7B2C\u4E00\u8282 \u5FAE\u4E1D\u4E0E\u7EC6\u80DE\u8FD0\u52A8","\u7B2C\u4E8C\u8282 \u5FAE\u7BA1\u53CA\u5176\u529F\u80FD","\u7B2C\u4E09\u8282 \u4E2D\u95F4\u4E1D"]},related:["\u7B2C\u5341\u4E8C\u7AE0 \u7EC6\u80DE\u5468\u671F\u4E0E\u7EC6\u80DE\u5206\u88C2 \xB7 pp.261\u2013285\uFF08\u7EBA\u9524\u4F53\u4E0E\u67D3\u8272\u4F53\u8FD0\u52A8\uFF09"],objectives:["\u6BD4\u8F83\u5FAE\u4E1D\u3001\u5FAE\u7BA1\u548C\u4E2D\u95F4\u4E1D\u7684\u7EC4\u6210\u3001\u76F4\u5F84\u3001\u6781\u6027\u4E0E\u7EC4\u88C5\u65B9\u5F0F\u3002","\u89E3\u91CA\u8E0F\u8F66\u884C\u4E3A\u3001\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027\u548C\u5206\u5B50\u9A6C\u8FBE\u7684\u65B9\u5411\u6027\u3002","\u628A\u7EC6\u80DE\u9AA8\u67B6\u4E0E\u7EC6\u80DE\u5F62\u6001\u3001\u8FD0\u52A8\u3001\u7269\u8D28\u8FD0\u8F93\u548C\u5206\u88C2\u8054\u7CFB\u8D77\u6765\u3002"],visuals:[{color:"#9df5c1",label:"\u9752\u7EFF\u7EC6\u7EBF = \u5FAE\u4E1D\uFF08\u808C\u52A8\u86CB\u767D\u4E1D\uFF09"},{color:"#67e8f9",label:"\u4EAE\u9752\u7EC6\u7BA1 = \u5FAE\u7BA1"},{color:"#b7a3ff",label:"\u7D2B\u8272\u7C97\u7F06 = \u4E2D\u95F4\u4E1D"},{color:"#f2ffd0",label:"\u79FB\u52A8\u5149\u70B9 = \u5206\u5B50\u9A6C\u8FBE"}],concepts:[{term:"\u5FAE\u4E1D",en:"microfilament / actin filament",def:"\u7531\u808C\u52A8\u86CB\u767D\u4E9A\u57FA\u7EC4\u6210\u7684\u76F4\u5F84\u7EA6 7 nm \u7684\u87BA\u65CB\u7EA4\u7EF4\uFF1B\u6709\u6781\u6027\uFF0C\u53C2\u4E0E\u7EC6\u80DE\u5F62\u6001\u3001\u8FD0\u52A8\u3001\u6536\u7F29\u73AF\u548C\u5FAE\u7ED2\u6BDB\u3002"},{term:"\u5FAE\u7BA1",en:"microtubule",def:"\u7531 \u03B1/\u03B2 \u5FAE\u7BA1\u86CB\u767D\u4E8C\u805A\u4F53\u7EC4\u6210\u7684\u76F4\u5F84\u7EA6 24 nm \u7684\u4E2D\u7A7A\u7BA1\uFF1B\u6709\u6781\u6027\uFF0C\u53C2\u4E0E\u7269\u8D28\u8FD0\u8F93\u3001\u7EA4\u6BDB\u8FD0\u52A8\u548C\u7EBA\u9524\u4F53\u3002"},{term:"\u4E2D\u95F4\u4E1D",en:"intermediate filament",def:"\u76F4\u5F84\u7EA6 10 nm \u7684\u7EF3\u7D22\u72B6\u7EA4\u7EF4\uFF0C\u7531\u89D2\u86CB\u767D\u3001\u6CE2\u5F62\u86CB\u767D\u3001\u5C42\u7C98\u8FDE\u86CB\u767D\u7B49\u7EC4\u6210\uFF1B\u65E0\u6781\u6027\u3001\u6297\u62C9\u529B\uFF0C\u4E3B\u8981\u627F\u62C5\u673A\u68B0\u652F\u6491\u3002"},{term:"\u8E0F\u8F66\u884C\u4E3A",en:"treadmilling",def:"\u808C\u52A8\u86CB\u767D\u5728\u5FAE\u4E1D\u6B63\u6781\u805A\u5408\u3001\u5728\u8D1F\u6781\u89E3\u805A\uFF0C\u4F7F\u7EA4\u7EF4\u957F\u5EA6\u57FA\u672C\u4E0D\u53D8\u800C\u4E9A\u57FA\u6301\u7EED\u6D41\u52A8\u7684\u73B0\u8C61\u3002"},{term:"\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027",en:"dynamic instability",def:"\u5FAE\u7BA1\u6B63\u6781\u5728\u751F\u957F\u4E0E\u5FEB\u901F\u89E3\u805A\u4E4B\u95F4\u968F\u673A\u5207\u6362\uFF1BGTP \u5E3D\u7684\u5B58\u5728\u4FC3\u8FDB\u751F\u957F\uFF0CGTP \u6C34\u89E3\u540E\u5FAE\u7BA1\u5BB9\u6613 catastrophe\u3002"},{term:"\u5206\u5B50\u9A6C\u8FBE",en:"molecular motor",def:"\u628A ATP \u6C34\u89E3\u7684\u5316\u5B66\u80FD\u8F6C\u5316\u4E3A\u673A\u68B0\u8FD0\u52A8\u7684\u86CB\u767D\uFF1B\u808C\u7403\u86CB\u767D\u6CBF\u5FAE\u4E1D\u8FD0\u52A8\uFF0C\u9A71\u52A8\u86CB\u767D\u5411\u5FAE\u7BA1\u6B63\u6781\u3001\u52A8\u529B\u86CB\u767D\u5411\u8D1F\u6781\u8FD0\u52A8\u3002"},{term:"\u4E2D\u5FC3\u4F53",en:"centrosome",def:"\u7531\u4E00\u5BF9\u4E2D\u5FC3\u7C92\u548C\u5468\u56F4\u57FA\u8D28\u7EC4\u6210\uFF0C\u662F\u52A8\u7269\u7EC6\u80DE\u7684\u5FAE\u7BA1\u7EC4\u7EC7\u4E2D\u5FC3\uFF08MTOC\uFF09\uFF1B\u03B3-\u5FAE\u7BA1\u86CB\u767D\u53C2\u4E0E\u5FAE\u7BA1\u6210\u6838\u3002"}],mechanism:["\u5FAE\u4E1D\u7EC4\u88C5\u6709\u6781\u6027\uFF1AATP-\u808C\u52A8\u86CB\u767D\u4E3B\u8981\u5728\u6B63\u6781\u52A0\u5165\uFF0C\u8D1F\u6781\u89E3\u805A\uFF1B\u8E0F\u8F66\u884C\u4E3A\u4F7F\u5FAE\u4E1D\u80FD\u5728\u4FDD\u6301\u957F\u5EA6\u7684\u540C\u65F6\u5FEB\u901F\u66F4\u65B0\u3002\u808C\u7403\u86CB\u767D II \u4E0E\u5FAE\u4E1D\u5F62\u6210\u6536\u7F29\u7CFB\u7EDF\uFF0C\u53C2\u4E0E\u5E94\u529B\u7EA4\u7EF4\u548C\u80DE\u8D28\u5206\u88C2\u3002","\u5FAE\u7BA1\u7531 13 \u6761\u539F\u7EA4\u7EF4\u56F4\u6210\u7BA1\u58C1\uFF1B\u4E2D\u5FC3\u4F53\u4E0A\u7684 \u03B3-\u5FAE\u7BA1\u86CB\u767D\u73AF\u590D\u5408\u7269\u542F\u52A8\u6210\u6838\u3002\u5FAE\u7BA1\u6B63\u6781\u5411\u5916\u5EF6\u4F38\uFF0C\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027\u4F7F\u5176\u80FD\u5FEB\u901F\u641C\u7D22\u7A7A\u95F4\u3002","\u5206\u5B50\u9A6C\u8FBE\u5177\u6709\u65B9\u5411\u6027\uFF1A\u5927\u591A\u6570\u9A71\u52A8\u86CB\u767D\u5411\u5FAE\u7BA1\u6B63\u6781\u79FB\u52A8\uFF0C\u52A8\u529B\u86CB\u767D\u5411\u8D1F\u6781\u79FB\u52A8\uFF1B\u808C\u7403\u86CB\u767D\u6CBF\u5FAE\u4E1D\u8FD0\u52A8\u3002\u7EBA\u9524\u4F53\u540E\u671F B \u4F9D\u8D56 kinesin-5 \u5728\u53CD\u5411\u5E73\u884C\u6781\u5FAE\u7BA1\u4E0A\u6ED1\u52A8\uFF0C\u628A\u4E24\u6781\u63A8\u5F00\u3002","\u4E2D\u95F4\u4E1D\u4E0D\u4F9D\u8D56\u9A6C\u8FBE\uFF0C\u4E5F\u6CA1\u6709\u660E\u663E\u6781\u6027\uFF1B\u5B83\u4EEC\u901A\u8FC7\u6A2A\u5411\u4EA4\u8054\u548C\u7EC6\u80DE\u8FDE\u63A5\u628A\u76F8\u90BB\u7EC6\u80DE\u3001\u7EC6\u80DE\u6838\u548C\u80DE\u5916\u57FA\u8D28\u8FDE\u6210\u673A\u68B0\u7F51\u7EDC\u3002"],pitfalls:["\u4E09\u7C7B\u9AA8\u67B6\u90FD\u6709\u6781\u6027\uFF1F\u9519\u8BEF\u3002\u5FAE\u4E1D\u548C\u5FAE\u7BA1\u6709\u6781\u6027\uFF0C\u4E2D\u95F4\u4E1D\u6CA1\u6709\u6781\u6027\uFF0C\u4E5F\u4E0D\u4F5C\u4E3A\u5206\u5B50\u9A6C\u8FBE\u7684\u8F68\u9053\u3002","\u5FAE\u4E1D\u6B63\u6781\u901A\u5E38\u9760\u8FD1\u7EC6\u80DE\u819C\uFF1B\u5FAE\u7BA1\u6B63\u6781\u901A\u5E38\u80CC\u79BB\u4E2D\u5FC3\u4F53\u3002\u5224\u65AD\u9A71\u52A8\u86CB\u767D/\u52A8\u529B\u86CB\u767D\u65B9\u5411\u65F6\u8981\u5148\u786E\u5B9A\u7EA4\u7EF4\u6781\u6027\u3002","\u7D2B\u6749\u9187\u7A33\u5B9A\u5FAE\u7BA1\u3001\u6291\u5236\u89E3\u805A\uFF0C\u4F7F\u7EC6\u80DE\u505C\u6EDE\u5728 M \u671F\uFF1B\u79CB\u6C34\u4ED9\u7D20\u5219\u6291\u5236\u5FAE\u7BA1\u805A\u5408\u3002\u4E24\u8005\u90FD\u4F1A\u5E72\u6270\u7EBA\u9524\u4F53\uFF0C\u4F46\u4E0D\u662F\u540C\u4E00\u673A\u5236\u3002"],quiz:[{q:"\u5FAE\u4E1D\u3001\u5FAE\u7BA1\u548C\u4E2D\u95F4\u4E1D\u5728\u76F4\u5F84\u3001\u6781\u6027\u548C\u4E3B\u8981\u529F\u80FD\u4E0A\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F",a:"\u5FAE\u4E1D\u7EA6 7 nm\u3001\u6709\u6781\u6027\uFF0C\u4E3B\u8981\u7531\u808C\u52A8\u86CB\u767D\u7EC4\u6210\uFF0C\u53C2\u4E0E\u8FD0\u52A8\u4E0E\u6536\u7F29\uFF1B\u5FAE\u7BA1\u7EA6 24 nm\u3001\u6709\u6781\u6027\uFF0C\u53C2\u4E0E\u8FD0\u8F93\u548C\u7EBA\u9524\u4F53\uFF1B\u4E2D\u95F4\u4E1D\u7EA6 10 nm\u3001\u65E0\u6781\u6027\uFF0C\u4E3B\u8981\u63D0\u4F9B\u673A\u68B0\u652F\u6491\u3002"},{q:"\u4E3A\u4EC0\u4E48\u8BF4\u5FAE\u7BA1\u5177\u6709\u52A8\u6001\u4E0D\u7A33\u5B9A\u6027\uFF1F\u5B83\u5728\u6709\u4E1D\u5206\u88C2\u4E2D\u6709\u4EC0\u4E48\u610F\u4E49\uFF1F",a:"\u5FAE\u7BA1\u6B63\u6781\u53EF\u5728\u751F\u957F\u4E0E\u5FEB\u901F\u89E3\u805A\u4E4B\u95F4\u5207\u6362\uFF0C\u53D7 GTP \u5E3D\u8C03\u63A7\u3002\u8FD9\u79CD\u5FEB\u901F\u641C\u7D22\u4F7F\u7EBA\u9524\u4F53\u5FAE\u7BA1\u80FD\u6355\u6349\u52A8\u7C92\uFF0C\u5E76\u5728\u5206\u88C2\u4E0D\u540C\u9636\u6BB5\u8FC5\u901F\u91CD\u7EC4\u3002"},{q:"\u9A71\u52A8\u86CB\u767D\u548C\u52A8\u529B\u86CB\u767D\u5206\u522B\u5411\u5FAE\u7BA1\u7684\u54EA\u4E00\u7AEF\u79FB\u52A8\uFF1F",a:"\u5927\u591A\u6570\u9A71\u52A8\u86CB\u767D\u5411\u5FAE\u7BA1\u6B63\u6781\uFF08\u5916\u5468\u65B9\u5411\uFF09\u79FB\u52A8\uFF1B\u52A8\u529B\u86CB\u767D\u5411\u5FAE\u7BA1\u8D1F\u6781\uFF08\u4E2D\u5FC3\u4F53\u65B9\u5411\uFF09\u79FB\u52A8\u3002"}]}},{id:"mitochondria",no:"04",kicker:"CHEMIOSMOSIS",cnKicker:"\u80FD\u91CF",short:"\u80FD\u91CF\u68AF\u5EA6",title:"\u80FD\u91CF\uFF0C\u4EE5\u68AF\u5EA6\u7684\u5F62\u5F0F\u5B58\u5728",en:"THE PROTON GRADIENT ENGINE",body:"\u80FD\u91CF\u5E76\u4E0D\u603B\u662F\u88AB\u50A8\u5B58\u5728\u5206\u5B50\u91CC\uFF0C\u5B83\u4E5F\u53EF\u4EE5\u662F\u4E00\u9053\u68AF\u5EA6\u3002\u7EBF\u7C92\u4F53\u5185\u819C\u6298\u53E0\u6210\u5D74\uFF0C\u628A\u8D28\u5B50\u6CF5\u5230\u819C\u95F4\u9699\uFF1B\u8D28\u5B50\u987A\u68AF\u5EA6\u56DE\u6D41\uFF0C\u8F6C\u52A8 ATP \u5408\u9176\uFF0C\u50CF\u6C34\u8F6E\u673A\u4E00\u6837\u628A\u52BF\u80FD\u538B\u8FDB\u5316\u5B66\u952E\u3002",facts:[{k:"\u5185\u819C\u9762\u79EF",v:"\u2248 \u5916\u819C 5 \u500D"},{k:"\u5FC3\u78F7\u8102",v:"\u2248 \u5185\u819C\u78F7\u8102 20%"},{k:"ATP \u5408\u9176",v:"F\u2080F\u2081 \u65CB\u8F6C\u50AC\u5316"}],readout:"ORGANELLE CLUSTER / \u0394pH",accent:"#ffc177",camera:{pos:[7.4,2,8],target:[4.4,.2,2.4],fov:46},duration:19e3,study:{textbook:{chapter:"\u7B2C\u4E03\u7AE0",title:"\u7EBF\u7C92\u4F53\u548C\u53F6\u7EFF\u4F53",pages:"117\u2013143",sections:["\u7B2C\u4E00\u8282 \u7EBF\u7C92\u4F53\u4E0E\u6C27\u5316\u78F7\u9178\u5316","\u7B2C\u4E8C\u8282 \u53F6\u7EFF\u4F53\u4E0E\u5149\u5408\u4F5C\u7528","\u7B2C\u4E09\u8282 \u534A\u81EA\u4E3B\u6027\u53CA\u5176\u8D77\u6E90"]},related:["\u7B2C\u4E8C\u7AE0 \u7EC6\u80DE\u751F\u7269\u5B66\u7814\u7A76\u65B9\u6CD5 \xB7 pp.18\u201339\uFF08\u7EBF\u7C92\u4F53\u5206\u79BB\u4E0E\u547C\u5438\u6D4B\u5B9A\uFF09"],objectives:["\u753B\u51FA\u7EBF\u7C92\u4F53\u7684\u56DB\u4E2A\u533A\u5BA4\uFF0C\u8BF4\u660E\u5916\u819C\u3001\u5185\u819C\u3001\u819C\u95F4\u9699\u548C\u57FA\u8D28\u7684\u529F\u80FD\u5206\u5DE5\u3002","\u7528\u5316\u5B66\u6E17\u900F\u5047\u8BF4\u89E3\u91CA\u7535\u5B50\u4F20\u9012\u3001\u8D28\u5B50\u68AF\u5EA6\u548C ATP \u5408\u6210\u4E4B\u95F4\u7684\u8026\u5408\u3002","\u7406\u89E3\u7EBF\u7C92\u4F53\u534A\u81EA\u4E3B\u6027\u3001\u878D\u5408/\u5206\u88C2\u4EE5\u53CA\u6BCD\u7CFB\u9057\u4F20\u3002"],visuals:[{color:"#ffc177",label:"\u91D1\u8272\u53CC\u819C\u4E0E\u5C42\u7247 = \u7EBF\u7C92\u4F53\u53CA\u5D74"},{color:"#ffe4a4",label:"\u5185\u90E8\u6761\u7EB9 = \u5185\u819C\u5D74"},{color:"#85fff2",label:"\u9752\u84DD\u7C92\u5B50 = \u819C\u95F4\u9699\u8D28\u5B50"},{color:"#ffbf6b",label:"\u91D1\u8272\u7206\u53D1 = ATP"}],concepts:[{term:"\u5916\u819C",en:"outer membrane",def:"\u5E73\u6ED1\u7684\u5355\u4F4D\u819C\uFF0C\u542B\u5B54\u86CB\u767D\uFF0C\u901A\u900F\u6027\u9AD8\uFF1B\u5C0F\u5206\u5B50\u548C\u4EE3\u8C22\u7269\u53EF\u8F83\u81EA\u7531\u901A\u8FC7\u3002"},{term:"\u5185\u819C\u4E0E\u5D74",en:"inner membrane / cristae",def:"\u86CB\u767D\u8D28/\u8102\u8D28\u6BD4\u9AD8\u3001\u5BCC\u542B\u5FC3\u78F7\u8102\u3001\u901A\u900F\u6027\u4F4E\uFF1B\u5411\u5185\u6298\u53E0\u6210\u5D74\uFF0C\u663E\u8457\u589E\u52A0\u6C27\u5316\u78F7\u9178\u5316\u7684\u53CD\u5E94\u9762\u79EF\u3002"},{term:"\u819C\u95F4\u9699",en:"intermembrane space",def:"\u5916\u819C\u4E0E\u5185\u819C\u4E4B\u95F4\u7684\u7A7A\u95F4\uFF0C\u5BBD\u7EA6 6\u20138 nm\uFF1B\u7535\u5B50\u4F20\u9012\u94FE\u6CF5\u51FA\u7684 H\u207A \u5728\u6B64\u79EF\u7D2F\uFF0C\u5F62\u6210\u8D28\u5B50\u68AF\u5EA6\u3002"},{term:"\u7EBF\u7C92\u4F53\u57FA\u8D28",en:"matrix",def:"\u542B\u4E09\u7FA7\u9178\u5FAA\u73AF\u9176\u3001\u8102\u80AA\u9178\u6C27\u5316\u9176\u3001\u7EBF\u7C92\u4F53 DNA\u3001RNA \u548C\u6838\u7CD6\u4F53\uFF1B\u662F\u7EBF\u7C92\u4F53\u57FA\u56E0\u8868\u8FBE\u548C\u591A\u79CD\u4EE3\u8C22\u7684\u53CD\u5E94\u573A\u6240\u3002"},{term:"\u7535\u5B50\u4F20\u9012\u94FE",en:"electron transport chain",def:"\u5185\u819C\u4E0A\u7684\u590D\u5408\u4F53 I\u2013IV \u5C06 NADH/FADH\u2082 \u7684\u7535\u5B50\u9010\u7EA7\u4F20\u9012\uFF0C\u5E76\u6CF5\u51FA H\u207A\uFF1BO\u2082 \u662F\u6700\u7EC8\u7535\u5B50\u53D7\u4F53\uFF0C\u751F\u6210 H\u2082O\u3002"},{term:"\u5316\u5B66\u6E17\u900F",en:"chemiosmosis",def:"\u7535\u5B50\u4F20\u9012\u5EFA\u7ACB\u7684\u8DE8\u5185\u819C H\u207A \u7535\u5316\u5B66\u68AF\u5EA6\u9A71\u52A8 ATP \u5408\u9176\u65CB\u8F6C\uFF0C\u4F7F ADP \u4E0E Pi \u5408\u6210 ATP\u3002"},{term:"\u7EBF\u7C92\u4F53DNA",en:"mtDNA",def:"\u73AF\u72B6\u53CC\u94FE DNA\uFF0C\u7F16\u7801\u90E8\u5206\u547C\u5438\u94FE\u86CB\u767D\u548C rRNA/tRNA\uFF1B\u590D\u5236\u4E0E\u8F6C\u5F55\u4F9D\u8D56\u6838\u57FA\u56E0\u4EA7\u7269\uFF0C\u5448\u6BCD\u7CFB\u9057\u4F20\u3002"}],mechanism:["\u7CD6\u9175\u89E3\u5728\u7EC6\u80DE\u8D28\u4E2D\u4EA7\u751F\u4E19\u916E\u9178\uFF1B\u4E19\u916E\u9178\u8FDB\u5165\u7EBF\u7C92\u4F53\u57FA\u8D28\uFF0C\u7ECF\u4E19\u916E\u9178\u8131\u6C22\u9176\u590D\u5408\u4F53\u8F6C\u4E3A\u4E59\u9170 CoA\uFF0C\u8FDB\u5165\u4E09\u7FA7\u9178\u5FAA\u73AF\uFF0C\u751F\u6210 NADH\u3001FADH\u2082 \u548C\u5C11\u91CF ATP/GTP\u3002","NADH \u548C FADH\u2082 \u628A\u7535\u5B50\u4EA4\u7ED9\u5185\u819C\u4E0A\u7684\u7535\u5B50\u4F20\u9012\u94FE\uFF1B\u590D\u5408\u4F53 I\u3001III\u3001IV \u5C06 H\u207A \u6CF5\u5230\u819C\u95F4\u9699\uFF0C\u5F62\u6210\u8DE8\u5185\u819C\u8D28\u5B50\u52A8\u529B\u52BF\u3002","H\u207A \u7ECF ATP \u5408\u9176 F\u2080 \u90E8\u5206\u56DE\u6D41\uFF0C\u9A71\u52A8\u8F6C\u5B50\u4E0E\u4E2D\u592E\u8F74\u65CB\u8F6C\uFF0C\u4FC3\u4F7F\u56FA\u5B9A\u7684 F\u2081 \u50AC\u5316\u5934\u53D1\u751F\u6784\u8C61\u53D8\u5316\uFF0C\u4F7F ADP + Pi \u2192 ATP\u3002\u82E5\u5185\u819C\u5BF9 H\u207A \u81EA\u7531\u901A\u900F\uFF0C\u68AF\u5EA6\u6D88\u5931\uFF0C\u6C27\u5316\u4E0E\u78F7\u9178\u5316\u89E3\u5076\u8054\u3002","\u5D74\u589E\u52A0\u5185\u819C\u9762\u79EF\uFF1B\u7EBF\u7C92\u4F53\u901A\u8FC7\u878D\u5408\u4E0E\u5206\u88C2\u7EF4\u6301\u7F51\u7EDC\uFF0C\u53D7\u635F\u7EBF\u7C92\u4F53\u53EF\u7ECF\u7EBF\u7C92\u4F53\u81EA\u566C\u6E05\u9664\u3002"],pitfalls:["\u4E09\u7FA7\u9178\u5FAA\u73AF\u5728\u7EBF\u7C92\u4F53\u57FA\u8D28\uFF0C\u7535\u5B50\u4F20\u9012\u94FE\u5728\u7EBF\u7C92\u4F53\u5185\u819C\uFF1B\u4E0D\u662F\u6240\u6709\u6709\u6C27\u547C\u5438\u6B65\u9AA4\u90FD\u5728\u57FA\u8D28\u5B8C\u6210\u3002","O\u2082 \u4E0D\u76F4\u63A5\u4E0E\u8461\u8404\u7CD6\u53CD\u5E94\uFF0C\u800C\u662F\u5728\u7535\u5B50\u4F20\u9012\u94FE\u672B\u7AEF\u63A5\u53D7\u7535\u5B50\u751F\u6210\u6C34\uFF1B\u7F3A\u6C27\u6216\u590D\u5408\u4F53 IV \u88AB\u6291\u5236\u65F6\uFF0C\u7535\u5B50\u4F20\u9012\u548C ATP \u5408\u6210\u90FD\u4F1A\u53D7\u963B\u3002","\u7EBF\u7C92\u4F53\u6709 DNA \u548C\u6838\u7CD6\u4F53\uFF0C\u4F46\u591A\u6570\u86CB\u767D\u7531\u6838\u57FA\u56E0\u7F16\u7801\u3001\u5728\u7EC6\u80DE\u8D28\u5408\u6210\u540E\u8FD0\u5165\uFF0C\u56E0\u6B64\u53EA\u662F\u201C\u534A\u81EA\u4E3B\u201D\u3002"],quiz:[{q:"\u4E3A\u4EC0\u4E48\u7EBF\u7C92\u4F53\u5185\u819C\u5FC5\u987B\u5BF9 H\u207A \u5177\u6709\u4F4E\u901A\u900F\u6027\uFF1F",a:"\u4F4E\u901A\u900F\u6027\u4F7F\u7535\u5B50\u4F20\u9012\u6CF5\u51FA\u7684 H\u207A \u80FD\u5728\u819C\u95F4\u9699\u79EF\u7D2F\uFF0C\u5EFA\u7ACB\u7535\u5316\u5B66\u68AF\u5EA6\uFF1BH\u207A \u53EA\u80FD\u7ECF ATP \u5408\u9176\u56DE\u6D41\uFF0C\u4ECE\u800C\u628A\u6C27\u5316\u91CA\u653E\u7684\u80FD\u91CF\u8026\u5408\u5230 ATP \u5408\u6210\u3002"},{q:"\u6C30\u5316\u7269\u6291\u5236\u7EC6\u80DE\u8272\u7D20 c \u6C27\u5316\u9176\uFF08\u590D\u5408\u4F53 IV\uFF09\u540E\uFF0CATP \u5408\u6210\u4E3A\u4EC0\u4E48\u505C\u6B62\uFF1F",a:"\u590D\u5408\u4F53 IV \u4E0D\u80FD\u628A\u7535\u5B50\u4F20\u7ED9 O\u2082\uFF0C\u7535\u5B50\u4F20\u9012\u94FE\u963B\u65AD\uFF0CH\u207A \u6CF5\u51FA\u505C\u6B62\uFF0C\u8D28\u5B50\u68AF\u5EA6\u9010\u6E10\u6D88\u5931\uFF0CATP \u5408\u9176\u5931\u53BB\u9A71\u52A8\u529B\u3002"},{q:"\u7EBF\u7C92\u4F53\u201C\u534A\u81EA\u4E3B\u6027\u201D\u7684\u542B\u4E49\u662F\u4EC0\u4E48\uFF1F",a:"\u7EBF\u7C92\u4F53\u62E5\u6709\u81EA\u5DF1\u7684\u73AF\u72B6 DNA\u3001\u6838\u7CD6\u4F53\u548C\u90E8\u5206\u57FA\u56E0\u8868\u8FBE\u7CFB\u7EDF\uFF0C\u80FD\u5408\u6210\u5C11\u6570\u86CB\u767D\uFF1B\u4F46\u7EDD\u5927\u591A\u6570\u7EBF\u7C92\u4F53\u86CB\u767D\u7531\u6838\u57FA\u56E0\u7F16\u7801\uFF0C\u56E0\u6B64\u5176\u9057\u4F20\u548C\u529F\u80FD\u53D7\u6838\u57FA\u56E0\u7EC4\u63A7\u5236\u3002"}]}},{id:"nucleus",no:"05",kicker:"GENOME",cnKicker:"\u9057\u4F20",short:"\u6838\u5185\u6697\u623F",title:"\u4E24\u7C73 DNA\uFF0C\u6298\u53E0\u6210\u6697\u623F",en:"THE GENOME, CONTINUOUSLY READ",body:"\u4E24\u7C73\u957F\u7684 DNA\uFF0C\u88AB\u6298\u53E0\u8FDB\u76F4\u5F84\u7EA6 5\u201310 \u5FAE\u7C73\u7684\u6697\u623F\u3002\u67D3\u8272\u8D28\u4E0D\u65AD\u6298\u53E0\u3001\u89E3\u5F00\uFF1B\u6838\u5B54\u50CF\u6D77\u5173\uFF0C\u628A RNA \u4E0E\u86CB\u767D\u7684\u901A\u884C\u63A7\u5236\u5728\u7EB3\u7C73\u5C3A\u5EA6\u3002\u8FD9\u91CC\u6CA1\u6709\u9759\u6B62\u7684\u56FE\u7EB8\uFF0C\u53EA\u6709\u6301\u7EED\u88AB\u8BFB\u53D6\u7684\u62D3\u6251\u3002",facts:[{k:"\u4EBA\u7C7B\u7EC6\u80DE DNA",v:"\u2248 2 m"},{k:"\u7EC6\u80DE\u6838\u76F4\u5F84",v:"5\u201310 \xB5m"},{k:"\u6838\u5B54\u590D\u5408\u4F53\u5916\u5F84",v:"\u2248 120 nm"}],readout:"NUCLEAR INTERIOR / 4Pi",accent:"#d9a8ff",camera:{pos:[2.2,1.4,8.2],target:[0,.2,0],fov:42},duration:19e3,study:{textbook:{chapter:"\u7B2C\u4E5D\u7AE0",title:"\u7EC6\u80DE\u6838\u4E0E\u67D3\u8272\u8D28",pages:"177\u2013212",sections:["\u7B2C\u4E00\u8282 \u6838\u88AB\u819C","\u7B2C\u4E8C\u8282 \u67D3\u8272\u8D28","\u7B2C\u4E09\u8282 \u67D3\u8272\u8D28\u590D\u5236\u4E0E\u8868\u8FBE","\u7B2C\u56DB\u8282 \u67D3\u8272\u4F53","\u7B2C\u4E94\u8282 \u6838\u4EC1\u4E0E\u6838\u4F53"]},related:["\u7B2C\u5341\u7AE0 \u6838\u7CD6\u4F53 \xB7 pp.213\u2013223","\u7B2C\u5341\u4E8C\u7AE0 \u7EC6\u80DE\u5468\u671F\u4E0E\u7EC6\u80DE\u5206\u88C2 \xB7 pp.261\u2013285"],objectives:["\u8BF4\u660E\u6838\u88AB\u819C\u3001\u6838\u5B54\u590D\u5408\u4F53\u548C\u6838\u7EA4\u5C42\u7684\u7ED3\u6784\u5173\u7CFB\u3002","\u4ECE DNA + \u7EC4\u86CB\u767D\u7684\u89D2\u5EA6\u89E3\u91CA\u6838\u5C0F\u4F53\u300130 nm \u7EA4\u7EF4\u548C\u67D3\u8272\u8D28\u9AD8\u7EA7\u7ED3\u6784\u3002","\u533A\u5206\u5E38\u67D3\u8272\u8D28\u4E0E\u5F02\u67D3\u8272\u8D28\uFF0C\u7406\u89E3\u6838\u4EC1\u5728\u6838\u7CD6\u4F53\u53D1\u751F\u4E2D\u7684\u4F5C\u7528\u3002"],visuals:[{color:"#c58cff",label:"\u7D2B\u8272\u7403\u4F53 = \u7EC6\u80DE\u6838"},{color:"#8ff5ff",label:"\u8868\u9762\u5706\u73AF = \u6838\u5B54\u590D\u5408\u4F53"},{color:"#ff9bdd",label:"\u7C89\u7D2B\u4E1D\u7EBF = \u67D3\u8272\u8D28"},{color:"#b04a78",label:"\u6697\u7EA2\u56E2\u5757 = \u6838\u4EC1"}],concepts:[{term:"\u6838\u88AB\u819C",en:"nuclear envelope",def:"\u7531\u5185\u819C\u548C\u5916\u819C\u7EC4\u6210\u7684\u53CC\u5C42\u819C\uFF0C\u5916\u819C\u4E0E\u5185\u8D28\u7F51\u76F8\u8FDE\uFF1B\u4E24\u5C42\u819C\u4E4B\u95F4\u7684\u7A7A\u95F4\u79F0\u6838\u5468\u95F4\u9699\u3002"},{term:"\u6838\u5B54\u590D\u5408\u4F53",en:"nuclear pore complex, NPC",def:"\u8DE8\u8D8A\u6838\u88AB\u819C\u7684\u5927\u578B\u86CB\u767D\u590D\u5408\u4F53\uFF0C\u5916\u5F84\u7EA6 120 nm\uFF1B\u5C0F\u5206\u5B50\u53EF\u6269\u6563\u901A\u8FC7\uFF0C\u5927\u5206\u5B50\u9700\u6838\u5B9A\u4F4D\u4FE1\u53F7\u7B49\u4ECB\u5BFC\u7684\u4E3B\u52A8\u8FD0\u8F93\u3002"},{term:"\u6838\u7EA4\u5C42",en:"nuclear lamina",def:"\u7D27\u8D34\u6838\u819C\u5185\u4FA7\u7684\u4E2D\u95F4\u4E1D\u7F51\u7EDC\uFF0C\u4E3B\u8981\u7531\u6838\u7EA4\u5C42\u86CB\u767D\uFF08lamin\uFF09\u7EC4\u6210\uFF0C\u652F\u6491\u6838\u819C\u5E76\u53C2\u4E0E\u67D3\u8272\u8D28\u5B9A\u4F4D\u3002"},{term:"\u67D3\u8272\u8D28",en:"chromatin",def:"DNA \u4E0E\u7EC4\u86CB\u767D\u3001\u975E\u7EC4\u86CB\u767D\u7EC4\u6210\u7684\u590D\u5408\u7269\uFF1B\u662F\u9057\u4F20\u4FE1\u606F\u7684\u50A8\u5B58\u5F62\u5F0F\uFF0C\u4E5F\u662F\u590D\u5236\u3001\u8F6C\u5F55\u548C\u4FEE\u590D\u7684\u6A21\u677F\u3002"},{term:"\u6838\u5C0F\u4F53",en:"nucleosome",def:"\u7531 H2A\u3001H2B\u3001H3\u3001H4 \u5404\u4E24\u5206\u5B50\u7EC4\u6210\u7684\u7EC4\u86CB\u767D\u516B\u805A\u4F53\uFF0C\u5916\u52A0\u7EA6 147 bp DNA \u7F20\u7ED5\u7EA6 1.75 \u5708\u5F62\u6210\uFF1B\u662F\u67D3\u8272\u8D28\u7684\u57FA\u672C\u7ED3\u6784\u5355\u4F4D\u3002"},{term:"\u5E38\u67D3\u8272\u8D28\u4E0E\u5F02\u67D3\u8272\u8D28",en:"euchromatin / heterochromatin",def:"\u5E38\u67D3\u8272\u8D28\u8F83\u677E\u6563\u3001\u8F6C\u5F55\u6D3B\u8DC3\uFF1B\u5F02\u67D3\u8272\u8D28\u8F83\u6D53\u7F29\u3001\u8F6C\u5F55\u53D7\u6291\u5236\uFF0C\u591A\u5206\u5E03\u5728\u6838\u819C\u5185\u4FA7\u3002"},{term:"\u6838\u4EC1",en:"nucleolus",def:"\u6838\u5185\u65E0\u819C\u5305\u56F4\u7684\u81F4\u5BC6\u7ED3\u6784\uFF0C\u662F rRNA \u57FA\u56E0\u8F6C\u5F55\u3001rRNA \u52A0\u5DE5\u548C\u6838\u7CD6\u4F53\u4E9A\u57FA\u7EC4\u88C5\u7684\u573A\u6240\u3002"}],mechanism:["\u6838\u88AB\u819C\u628A\u6838\u5185\u8F6C\u5F55\u4E0E\u7EC6\u80DE\u8D28\u7FFB\u8BD1\u5206\u9694\u5F00\uFF1B\u5916\u819C\u4E0E\u5185\u8D28\u7F51\u8FDE\u7EED\uFF0C\u6838\u5B54\u590D\u5408\u4F53\u662F\u6838\u8D28\u4EA4\u6362\u7684\u552F\u4E00\u901A\u9053\u3002\u6838\u7EA4\u5C42\u4F4D\u4E8E\u5185\u819C\u5185\u4FA7\uFF0C\u4E3A\u6838\u819C\u63D0\u4F9B\u673A\u68B0\u652F\u6491\u3002","\u6838\u5C0F\u4F53\u76D8\u7ED5\u5F62\u6210 11 nm \u7684\u201C\u4E32\u73E0\u201D\u7ED3\u6784\uFF0C\u518D\u6298\u53E0\u6210\u7EA6 30 nm \u7684\u87BA\u7EBF\u7BA1\uFF1B\u66F4\u9AD8\u5C42\u6B21\u7684\u73AF\u951A\u5B9A\u5728\u6838\u9AA8\u67B6\u4E0A\uFF0C\u5F62\u6210\u67D3\u8272\u8D28\u73AF\u3002","\u67D3\u8272\u8D28\u590D\u5236\u5728 S \u671F\u8FDB\u884C\uFF1B\u590D\u5236\u8D77\u70B9\u3001\u7740\u4E1D\u7C92\u548C\u7AEF\u7C92\u662F\u67D3\u8272\u4F53\u7684\u4E09\u4E2A\u529F\u80FD\u5143\u4EF6\u3002\u6709\u4E1D\u5206\u88C2\u65F6\u67D3\u8272\u8D28\u9AD8\u5EA6\u51DD\u7F29\u6210\u67D3\u8272\u4F53\uFF0C\u4FBF\u4E8E\u5206\u914D\u3002","\u6838\u4EC1\u7EC4\u7EC7\u533A\uFF08NOR\uFF09\u8F6C\u5F55 rRNA \u524D\u4F53\uFF0C\u52A0\u5DE5\u540E\u4E0E\u6838\u7CD6\u4F53\u86CB\u767D\u7EC4\u88C5\u6210\u6838\u7CD6\u4F53\u5927\u5C0F\u4E9A\u57FA\uFF0C\u518D\u7ECF\u6838\u5B54\u8F93\u51FA\u5230\u7EC6\u80DE\u8D28\u3002"],pitfalls:["\u6838\u5B54\u590D\u5408\u4F53\u5916\u5F84\u7EA6 120 nm\uFF0C\u4F46\u6709\u6548\u8FD0\u8F93\u901A\u9053\u8FDC\u5C0F\u4E8E\u6B64\uFF1B\u5C0F\u5206\u5B50\u53EF\u88AB\u52A8\u6269\u6563\uFF0C\u5927\u5206\u5B50\u9700\u8981\u4FE1\u53F7\u5E8F\u5217\u548C Ran-GTP \u53C2\u4E0E\u7684\u4E3B\u52A8\u8FD0\u8F93\u3002","\u67D3\u8272\u8D28\u4E0D\u7B49\u4E8E\u67D3\u8272\u4F53\uFF1A\u67D3\u8272\u8D28\u662F\u95F4\u671F DNA-\u86CB\u767D\u590D\u5408\u7269\u7684\u5B58\u5728\u5F62\u5F0F\uFF0C\u67D3\u8272\u4F53\u662F\u5206\u88C2\u671F\u9AD8\u5EA6\u51DD\u7F29\u7684\u5F62\u6001\uFF1B\u4E8C\u8005\u662F\u540C\u4E00\u7269\u8D28\u7684\u4E0D\u540C\u72B6\u6001\u3002","\u6838\u4EC1\u4E0D\u662F\u6709\u819C\u7EC6\u80DE\u5668\uFF0C\u4E5F\u4E0D\u7B49\u4E8E\u201C\u7EC6\u80DE\u6838\u201D\uFF1B\u5B83\u53EA\u662F\u6838\u5185\u4E00\u4E2A\u65E0\u819C\u7684\u533A\u57DF\uFF0C\u4E0E\u6838\u7CD6\u4F53\u53D1\u751F\u6709\u5173\u3002"],quiz:[{q:"\u6838\u5B54\u590D\u5408\u4F53\u5982\u4F55\u517C\u987E\u201C\u9009\u62E9\u6027\u201D\u548C\u201C\u9AD8\u901A\u91CF\u201D\u8FD0\u8F93\uFF1F",a:"\u5C0F\u5206\u5B50\u548C\u79BB\u5B50\u53EF\u7ECF\u5B54\u9053\u88AB\u52A8\u6269\u6563\uFF1B\u5927\u5206\u5B50\u4F9D\u8D56\u6838\u5B9A\u4F4D\u4FE1\u53F7/\u6838\u8F93\u51FA\u4FE1\u53F7\u4E0E\u8F6C\u8FD0\u53D7\u4F53\uFF0C\u5E76\u5728 Ran-GTP \u68AF\u5EA6\u4E0B\u5B8C\u6210\u5B9A\u5411\u8FD0\u8F93\uFF0C\u56E0\u6B64\u65E2\u80FD\u9AD8\u6548\u901A\u884C\uFF0C\u53C8\u80FD\u4E25\u683C\u7B5B\u9009\u3002"},{q:"\u6838\u5C0F\u4F53\u7684\u7EC4\u6210\u662F\u4EC0\u4E48\uFF1F\u5B83\u5982\u4F55\u5E2E\u52A9 DNA \u538B\u7F29\uFF1F",a:"\u7531 H2A\u3001H2B\u3001H3\u3001H4 \u5404\u4E24\u5206\u5B50\u7EC4\u6210\u7EC4\u86CB\u767D\u516B\u805A\u4F53\uFF0C\u7EA6 147 bp DNA \u7F20\u7ED5\u7EA6 1.75 \u5708\u3002\u6838\u5C0F\u4F53\u4E32\u73E0\u518D\u6298\u53E0\u4E3A 30 nm \u7EA4\u7EF4\uFF0C\u9010\u7EA7\u538B\u7F29 DNA\u3002"},{q:"\u5E38\u67D3\u8272\u8D28\u4E0E\u5F02\u67D3\u8272\u8D28\u5728\u7ED3\u6784\u548C\u529F\u80FD\u4E0A\u6709\u4F55\u533A\u522B\uFF1F",a:"\u5E38\u67D3\u8272\u8D28\u8F83\u677E\u6563\u3001\u67D3\u8272\u6D45\u3001\u8F6C\u5F55\u6D3B\u8DC3\uFF1B\u5F02\u67D3\u8272\u8D28\u9AD8\u5EA6\u6D53\u7F29\u3001\u67D3\u8272\u6DF1\u3001\u8F6C\u5F55\u53D7\u6291\u5236\uFF0C\u5E38\u5206\u5E03\u5728\u6838\u819C\u5185\u4FA7\u6216\u6838\u4EC1\u5468\u56F4\u3002"}]}},{id:"endomembrane",no:"06",kicker:"SECRETION",cnKicker:"\u5206\u6CCC",short:"\u5185\u819C\u6CB3\u6D41",title:"\u7269\u8D28\u6CBF\u7740\u819C\u6539\u5F62",en:"THE SECRETORY RIVER",body:"\u7269\u8D28\u6CBF\u7740\u819C\uFF0C\u6539\u5199\u81EA\u5DF1\u7684\u5F62\u72B6\u3002\u5185\u8D28\u7F51\u6298\u53E0\u86CB\u767D\uFF0C\u9AD8\u5C14\u57FA\u4F53\u4FEE\u526A\u5E76\u5206\u62E3\uFF0C\u56CA\u6CE1\u51FA\u82BD\u3001\u7A7F\u884C\u3001\u878D\u5408\u3002\u6BCF\u4E00\u6B21\u819C\u878D\u5408\uFF0C\u90FD\u662F\u4E00\u6B21\u7CBE\u786E\u7684\u6295\u9012\uFF0C\u4E5F\u662F\u4E00\u6B21\u8EAB\u4EFD\u7684\u4EA4\u6362\u3002",facts:[{k:"\u987A\u5411\u8FD0\u8F93",v:"COPII \xB7 ER\u2192Golgi"},{k:"\u9006\u5411\u8FD0\u8F93",v:"COPI \xB7 Golgi\u2192ER"},{k:"\u819C\u878D\u5408",v:"SNARE \u4ECB\u5BFC"}],readout:"SECRETORY ROUTE / LIVE",accent:"#ffb36b",camera:{pos:[-7.8,3,8.2],target:[-3.2,.2,1.2],fov:46},duration:19e3,study:{textbook:{chapter:"\u7B2C\u4E94\u7AE0",title:"\u7EC6\u80DE\u8D28\u57FA\u8D28\u4E0E\u5185\u819C\u7CFB\u7EDF",pages:"74\u201399",sections:["\u7B2C\u4E00\u8282 \u7EC6\u80DE\u8D28\u57FA\u8D28\u53CA\u5176\u529F\u80FD","\u7B2C\u4E8C\u8282 \u7EC6\u80DE\u5185\u819C\u7CFB\u7EDF\u53CA\u5176\u529F\u80FD"]},related:["\u7B2C\u516D\u7AE0 \u86CB\u767D\u8D28\u5206\u9009\u4E0E\u819C\u6CE1\u8FD0\u8F93 \xB7 pp.100\u2013116","\u7B2C\u5341\u7AE0 \u6838\u7CD6\u4F53 \xB7 pp.213\u2013223"],objectives:["\u8BF4\u660E\u5185\u8D28\u7F51\u3001\u9AD8\u5C14\u57FA\u4F53\u548C\u6EB6\u9176\u4F53\u7684\u7ED3\u6784\u5206\u5DE5\u3002","\u7528\u4FE1\u53F7\u80BD\u5047\u8BF4\u89E3\u91CA\u5206\u6CCC\u86CB\u767D\u5982\u4F55\u8FDB\u5165\u5185\u8D28\u7F51\u3002","\u533A\u5206 COPII\u3001COPI \u548C\u7F51\u683C\u86CB\u767D\u5305\u88AB\u819C\u6CE1\u7684\u8FD0\u8F93\u65B9\u5411\u3002","\u7406\u89E3 M6P \u5206\u9009\u548C SNARE \u878D\u5408\u5728\u86CB\u767D\u8D28\u6295\u9012\u4E2D\u7684\u4F5C\u7528\u3002"],visuals:[{color:"#ffc073",label:"\u7425\u73C0\u7BA1\u7F51 = \u5185\u8D28\u7F51"},{color:"#ffa252",label:"\u53E0\u5C42\u5F27 = \u9AD8\u5C14\u57FA\u4F53"},{color:"#ffcf87",label:"\u5C0F\u5149\u7403 = \u8FD0\u8F93\u56CA\u6CE1"},{color:"#d66572",label:"\u7EA2\u8272\u5C0F\u7403 = \u6EB6\u9176\u4F53"}],concepts:[{term:"\u5185\u819C\u7CFB\u7EDF",en:"endomembrane system",def:"\u7531\u5185\u8D28\u7F51\u3001\u9AD8\u5C14\u57FA\u4F53\u3001\u6EB6\u9176\u4F53\u3001\u5185\u4F53\u3001\u5206\u6CCC\u6CE1\u7B49\u819C\u6027\u7EC6\u80DE\u5668\u7EC4\u6210\u7684\u52A8\u6001\u7F51\u7EDC\uFF0C\u901A\u8FC7\u819C\u6CE1\u8FD0\u8F93\u4EA4\u6362\u7269\u8D28\u3002"},{term:"\u5185\u8D28\u7F51",en:"endoplasmic reticulum, ER",def:"\u7531\u7BA1\u72B6\u548C\u6241\u56CA\u72B6\u819C\u56F4\u6210\u7684\u8FDE\u7EED\u4E09\u7EF4\u7F51\u7EDC\uFF1B\u7C97\u9762 ER \u9644\u7740\u6838\u7CD6\u4F53\uFF0C\u8D1F\u8D23\u5206\u6CCC\u86CB\u767D\u548C\u819C\u86CB\u767D\u7684\u5408\u6210\u3001\u6298\u53E0\u4E0E\u7CD6\u57FA\u5316\uFF1B\u5149\u9762 ER \u53C2\u4E0E\u8102\u8D28\u5408\u6210\u548C\u89E3\u6BD2\u3002"},{term:"\u9AD8\u5C14\u57FA\u4F53",en:"Golgi apparatus",def:"\u7531\u987A\u9762\u3001\u4E2D\u95F4\u533A\u548C\u53CD\u9762\u6241\u56CA\u7EC4\u6210\u7684\u6781\u6027\u7EC6\u80DE\u5668\uFF1B\u5BF9\u86CB\u767D\u8D28\u8FDB\u884C\u7CD6\u57FA\u5316\u4FEE\u9970\u3001\u5206\u9009\u548C\u5305\u88C5\uFF0C\u5E76\u5408\u6210\u90E8\u5206\u591A\u7CD6\u3002"},{term:"\u6EB6\u9176\u4F53",en:"lysosome",def:"\u542B\u591A\u79CD\u9178\u6027\u6C34\u89E3\u9176\u7684\u819C\u6027\u7EC6\u80DE\u5668\uFF0CpH \u7EA6 4.5\u20135\uFF1B\u8D1F\u8D23\u964D\u89E3\u7EC6\u80DE\u5185\u541E\u7269\u3001\u8001\u65E7\u7EC6\u80DE\u5668\u548C\u751F\u7269\u5927\u5206\u5B50\u3002"},{term:"\u4FE1\u53F7\u80BD",en:"signal peptide",def:"\u5206\u6CCC\u86CB\u767D N \u7AEF\u7684\u4E00\u6BB5\u758F\u6C34\u5E8F\u5217\uFF0C\u88AB\u4FE1\u53F7\u8BC6\u522B\u9897\u7C92\uFF08SRP\uFF09\u8BC6\u522B\uFF0C\u5F15\u5BFC\u6838\u7CD6\u4F53\u590D\u5408\u4F53\u5230\u5185\u8D28\u7F51\uFF0C\u5B9E\u73B0\u5171\u7FFB\u8BD1\u8F6C\u8FD0\u3002"},{term:"COPII \u4E0E COPI",en:"COPII / COPI vesicles",def:"COPII \u5305\u88AB\u819C\u6CE1\u4ECB\u5BFC ER\u2192\u9AD8\u5C14\u57FA\u4F53\u7684\u987A\u5411\u8FD0\u8F93\uFF1BCOPI \u4ECB\u5BFC\u9AD8\u5C14\u57FA\u4F53\u2192ER \u7684\u9006\u5411\u8FD0\u8F93\uFF0C\u5E76\u56DE\u6536\u9003\u9038\u7684 ER \u9A7B\u7559\u86CB\u767D\u3002"},{term:"SNARE",en:"SNARE complex",def:"\u4ECB\u5BFC\u819C\u6CE1\u4E0E\u9776\u819C\u878D\u5408\u7684\u86CB\u767D\u5BB6\u65CF\uFF1Bv-SNARE \u4E0E t-SNARE \u5F62\u6210\u56DB\u87BA\u65CB\u675F\uFF0C\u62C9\u8FD1\u4E24\u5C42\u819C\u5E76\u89E6\u53D1\u878D\u5408\u3002"}],mechanism:["\u5206\u6CCC\u86CB\u767D N \u7AEF\u7684\u4FE1\u53F7\u80BD\u88AB SRP \u8BC6\u522B\uFF0C\u7FFB\u8BD1\u6682\u65F6\u505C\u987F\uFF1BSRP \u4E0E ER \u819C\u4E0A\u7684 SRP \u53D7\u4F53\u7ED3\u5408\uFF0C\u6838\u7CD6\u4F53\u505C\u9760\u5728\u6613\u4F4D\u5B50\uFF08translocon\uFF09\u4E0A\uFF0C\u80BD\u94FE\u8FB9\u5408\u6210\u8FB9\u8FDB\u5165 ER \u8154\u3002\u4FE1\u53F7\u80BD\u968F\u540E\u88AB\u4FE1\u53F7\u80BD\u9176\u5207\u9664\u3002","\u8FDB\u5165 ER \u7684\u86CB\u767D\u5728\u4F34\u4FA3\u86CB\u767D\u548C\u6298\u53E0\u9176\u5E2E\u52A9\u4E0B\u6298\u53E0\uFF0C\u5E76\u8FDB\u884C N-\u8FDE\u63A5\u7CD6\u57FA\u5316\uFF1B\u672A\u6B63\u786E\u6298\u53E0\u7684\u86CB\u767D\u7ECF ERAD \u9014\u5F84\u53CD\u5411\u8F6C\u8FD0\u5230\u7EC6\u80DE\u8D28\u964D\u89E3\u3002","COPII \u5728 ER \u51FA\u53E3\u4F4D\u70B9\u51FA\u82BD\uFF0C\u628A\u8D27\u7269\u8FD0\u5F80\u9AD8\u5C14\u57FA\u4F53\uFF1BCOPI \u4ECE\u9AD8\u5C14\u57FA\u4F53\u51FA\u82BD\uFF0C\u56DE\u6536 ER \u9A7B\u7559\u86CB\u767D\uFF08KDEL \u4FE1\u53F7\uFF09\u3002\u7F51\u683C\u86CB\u767D\u5305\u88AB\u819C\u6CE1\u53C2\u4E0E TGN\u2192\u5185\u4F53/\u6EB6\u9176\u4F53\u4EE5\u53CA\u5185\u541E\u3002","\u6EB6\u9176\u4F53\u6C34\u89E3\u9176\u5728\u987A\u9762\u9AD8\u5C14\u57FA\u4F53\u83B7\u5F97\u7518\u9732\u7CD6-6-\u78F7\u9178\uFF08M6P\uFF09\u6807\u8BB0\uFF0C\u88AB M6P \u53D7\u4F53\u8BC6\u522B\u5E76\u5206\u9009\u5230\u5185\u4F53\uFF0C\u6700\u7EC8\u5728\u9178\u6027\u73AF\u5883\u4E2D\u91CA\u653E\u3002Rab \u86CB\u767D\u548C SNARE \u4FDD\u8BC1\u819C\u6CE1\u5B9A\u5411\u505C\u9760\u4E0E\u878D\u5408\u3002"],pitfalls:["COPII \u662F ER\u2192Golgi \u7684\u987A\u5411\u8FD0\u8F93\uFF0CCOPI \u662F Golgi\u2192ER \u7684\u9006\u5411\u8FD0\u8F93\uFF1B\u65B9\u5411\u4E0D\u8981\u8BB0\u53CD\u3002","\u5206\u6CCC\u86CB\u767D\u8FDB\u5165 ER \u662F\u5171\u7FFB\u8BD1\u8F6C\u8FD0\uFF1B\u7EBF\u7C92\u4F53\u3001\u53F6\u7EFF\u4F53\u86CB\u767D\u591A\u4E3A\u7FFB\u8BD1\u5B8C\u6210\u540E\u8FDB\u884C\u540E\u7FFB\u8BD1\u8F6C\u8FD0\u3002","\u9AD8\u5C14\u57FA\u4F53\u4E0D\u53EA\u662F\u201C\u5305\u88C5\u8F66\u95F4\u201D\uFF0C\u5B83\u8FD8\u662F\u7CD6\u57FA\u5316\u4FEE\u9970\u3001\u86CB\u767D\u8D28\u5206\u9009\u548C\u6EB6\u9176\u4F53\u9176\u6807\u8BB0\u7684\u5173\u952E\u573A\u6240\u3002"],quiz:[{q:"\u4FE1\u53F7\u80BD\u5047\u8BF4\u7684\u6838\u5FC3\u5185\u5BB9\u662F\u4EC0\u4E48\uFF1F",a:"\u5206\u6CCC\u86CB\u767D N \u7AEF\u4FE1\u53F7\u80BD\u88AB SRP \u8BC6\u522B\uFF0CSRP-\u6838\u7CD6\u4F53\u590D\u5408\u4F53\u7ED3\u5408 ER \u819C\u4E0A\u7684 SRP \u53D7\u4F53\uFF0C\u4F7F\u65B0\u751F\u80BD\u94FE\u5728\u6613\u4F4D\u5B50\u5904\u8FDB\u5165 ER \u8154\uFF1B\u4FE1\u53F7\u80BD\u968F\u540E\u88AB\u5207\u9664\uFF0C\u86CB\u767D\u5728 ER \u8154\u4E2D\u6298\u53E0\u548C\u4FEE\u9970\u3002"},{q:"\u6EB6\u9176\u4F53\u6C34\u89E3\u9176\u5982\u4F55\u88AB\u51C6\u786E\u5206\u9009\u5230\u6EB6\u9176\u4F53\uFF1F",a:"\u5728\u987A\u9762\u9AD8\u5C14\u57FA\u4F53\uFF0C\u6C34\u89E3\u9176\u83B7\u5F97\u7518\u9732\u7CD6-6-\u78F7\u9178\uFF08M6P\uFF09\u6807\u8BB0\uFF1BM6P \u53D7\u4F53\u5728 TGN \u8BC6\u522B\u5E76\u5305\u88C5\u6210\u7F51\u683C\u86CB\u767D\u819C\u6CE1\uFF0C\u8FD0\u9001\u5230\u5185\u4F53\uFF0C\u9178\u6027\u73AF\u5883\u4F7F\u9176\u4E0E\u53D7\u4F53\u89E3\u79BB\u5E76\u8FDB\u5165\u6EB6\u9176\u4F53\u3002"},{q:"COPII \u548C COPI \u819C\u6CE1\u5206\u522B\u627F\u62C5\u4EC0\u4E48\u8FD0\u8F93\u65B9\u5411\uFF1F",a:"COPII \u4ECB\u5BFC ER\u2192\u9AD8\u5C14\u57FA\u4F53\u7684\u987A\u5411\u8FD0\u8F93\uFF1BCOPI \u4ECB\u5BFC\u9AD8\u5C14\u57FA\u4F53\u2192ER \u7684\u9006\u5411\u8FD0\u8F93\uFF0C\u56DE\u6536 ER \u9A7B\u7559\u86CB\u767D\u5E76\u7EF4\u6301\u819C\u6210\u5206\u5E73\u8861\u3002"}]}},{id:"mitosis",no:"07",kicker:"MITOSIS",cnKicker:"\u5206\u88C2",short:"\u4E00\u5206\u4E3A\u4E8C",title:"\u628A\u5B87\u5B99\u4EA4\u7ED9\u4E24\u4E2A\u672A\u6765",en:"ONE COSMOS, TWO FUTURES",body:"\u5206\u88C2\uFF0C\u662F\u628A\u540C\u4E00\u4E2A\u5B87\u5B99\u4EA4\u7ED9\u4E24\u4E2A\u672A\u6765\u3002\u67D3\u8272\u8D28\u51DD\u7F29\u6210\u67D3\u8272\u4F53\uFF0C\u7EBA\u9524\u4F53\u4ECE\u4E24\u6781\u4F38\u5165\uFF1B\u52A8\u7C92\u88AB\u5FAE\u7BA1\u6355\u83B7\uFF0C\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u5728\u68C0\u9A8C\u70B9\u7684\u51DD\u89C6\u4E0B\u5206\u79BB\uFF0C\u76F4\u5230\u4E24\u4E2A\u5B50\u7EC6\u80DE\u5404\u81EA\u62E5\u6709\u5B8C\u6574\u7684\u57FA\u56E0\u7EC4\u3002",facts:[{k:"\u4EBA\u7C7B\u67D3\u8272\u4F53",v:"46 \u6761"},{k:"\u590D\u5236\u540E\u67D3\u8272\u5355\u4F53",v:"92 \u6761"},{k:"\u8D28\u91CF\u63A7\u5236",v:"SAC \u68C0\u9A8C\u70B9"}],readout:"SPINDLE ASSEMBLY / SAC",accent:"#ff74b7",camera:{pos:[0,1.3,15.5],target:[0,0,0],fov:40},duration:23e3,study:{textbook:{chapter:"\u7B2C\u5341\u4E8C\u7AE0",title:"\u7EC6\u80DE\u5468\u671F\u4E0E\u7EC6\u80DE\u5206\u88C2",pages:"261\u2013285",sections:["\u7B2C\u4E00\u8282 \u7EC6\u80DE\u5468\u671F","\u7B2C\u4E8C\u8282 \u7EC6\u80DE\u5206\u88C2"]},related:["\u7B2C\u5341\u4E09\u7AE0 \u7EC6\u80DE\u589E\u6B96\u8C03\u63A7\u4E0E\u764C\u7EC6\u80DE \xB7 pp.287\u2013306"],objectives:["\u6982\u8FF0\u7EC6\u80DE\u5468\u671F\u56DB\u4E2A\u65F6\u76F8\u53CA\u4E09\u4E2A\u5173\u952E\u68C0\u9A8C\u70B9\u3002","\u6309\u987A\u5E8F\u8BF4\u51FA\u6709\u4E1D\u5206\u88C2\u5404\u671F\u7684\u4E3B\u8981\u4E8B\u4EF6\uFF0C\u533A\u5206\u540E\u671F A \u548C\u540E\u671F B\u3002","\u89E3\u91CA CDK1-cyclin B\u3001APC/C\u3001separase \u548C SAC \u5982\u4F55\u63A7\u5236\u67D3\u8272\u4F53\u5206\u79BB\u3002"],visuals:[{color:"#ff6ab4",label:"\u7C89/\u9752 X \u5F62\u4F53 = \u59D0\u59B9\u67D3\u8272\u5355\u4F53"},{color:"#83f8ff",label:"\u653E\u5C04\u7EC6\u7EBF = \u7EBA\u9524\u4F53\u5FAE\u7BA1"},{color:"#7dfff0",label:"\u4E24\u7AEF\u4EAE\u7403 = \u4E2D\u5FC3\u4F53/\u7EBA\u9524\u4F53\u6781"},{color:"#8a7cff",label:"\u4E24\u4FA7\u7403\u4F53 = \u6B63\u5728\u5F62\u6210\u7684\u5B50\u6838"}],concepts:[{term:"\u7EC6\u80DE\u5468\u671F",en:"cell cycle",def:"\u7EC6\u80DE\u4ECE\u4E00\u6B21\u5206\u88C2\u7ED3\u675F\u5230\u4E0B\u4E00\u6B21\u5206\u88C2\u7ED3\u675F\u6240\u7ECF\u5386\u7684\u8FC7\u7A0B\uFF0C\u5206\u4E3A G1\u3001S\u3001G2 \u548C M \u671F\uFF1BDNA \u590D\u5236\u5728 S \u671F\u5B8C\u6210\u3002"},{term:"\u68C0\u9A8C\u70B9",en:"cell cycle checkpoint",def:"\u76D1\u6D4B\u5173\u952E\u4E8B\u4EF6\u662F\u5426\u5B8C\u6210\u7684\u63A7\u5236\u70B9\uFF0C\u5982 G1/S\u3001G2/M \u548C\u7EBA\u9524\u4F53\u7EC4\u88C5\u68C0\u9A8C\u70B9\uFF1B\u5F02\u5E38\u65F6\u6682\u505C\u5468\u671F\u4EE5\u4FEE\u590D\u6216\u89E6\u53D1\u6B7B\u4EA1\u3002"},{term:"MPF",en:"maturation/mitosis promoting factor",def:"\u7531 CDK1 \u4E0E cyclin B \u7EC4\u6210\u7684\u590D\u5408\u4F53\uFF0C\u9A71\u52A8 G2/M \u8F6C\u6362\uFF1Bcyclin B \u7684\u5408\u6210\u3001\u5B9A\u4F4D\u548C\u964D\u89E3\u51B3\u5B9A\u5176\u6D3B\u6027\u3002"},{term:"\u51DD\u7F29\u86CB\u767D\u4E0E\u9ECF\u8FDE\u86CB\u767D",en:"condensin / cohesin",def:"SMC \u86CB\u767D\u590D\u5408\u4F53\uFF1B\u51DD\u7F29\u86CB\u767D\u4FC3\u8FDB\u67D3\u8272\u4F53\u51DD\u7F29\uFF0C\u9ECF\u8FDE\u86CB\u767D\u628A\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u9ECF\u5728\u4E00\u8D77\uFF0C\u76F4\u5230\u540E\u671F\u88AB separase \u5207\u5272\u3002"},{term:"\u52A8\u7C92",en:"kinetochore",def:"\u4F4D\u4E8E\u67D3\u8272\u4F53\u7740\u4E1D\u7C92\u4E24\u4FA7\u7684\u86CB\u767D\u590D\u5408\u4F53\uFF0C\u8FDE\u63A5\u7740\u4E1D\u7C92 DNA \u4E0E\u7EBA\u9524\u4F53\u5FAE\u7BA1\uFF0C\u5E76\u53C2\u4E0E SAC \u4FE1\u53F7\u3002"},{term:"SAC",en:"spindle assembly checkpoint",def:"\u76D1\u6D4B\u6240\u6709\u52A8\u7C92\u662F\u5426\u88AB\u5FAE\u7BA1\u6B63\u786E\u8FDE\u63A5\uFF1B\u672A\u8FDE\u63A5\u65F6\u6291\u5236 APC/C\uFF0C\u963B\u6B62\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u63D0\u524D\u5206\u79BB\u3002"},{term:"\u540E\u671F A / \u540E\u671F B",en:"anaphase A / anaphase B",def:"\u540E\u671F A \u662F\u52A8\u7C92\u5FAE\u7BA1\u7F29\u77ED\u3001\u67D3\u8272\u4F53\u5411\u4E24\u6781\u79FB\u52A8\uFF1B\u540E\u671F B \u662F\u6781\u5FAE\u7BA1\u6ED1\u52A8\u548C\u5EF6\u957F\uFF0C\u628A\u4E24\u6781\u63A8\u5F00\u3002"}],mechanism:["G1 \u671F\u51C6\u5907 DNA \u590D\u5236\uFF0CS \u671F\u5B8C\u6210 DNA \u590D\u5236\uFF0CG2 \u671F\u68C0\u67E5\u590D\u5236\u5B8C\u6574\u6027\u5E76\u50A8\u5907\u5206\u88C2\u6240\u9700\u7269\u8D28\uFF0CM \u671F\u5B8C\u6210\u6838\u5206\u88C2\u548C\u80DE\u8D28\u5206\u88C2\u3002G1/S\u3001G2/M \u548C SAC \u662F\u4E09\u4E2A\u5173\u952E\u63A7\u5236\u70B9\u3002","CDK1-cyclin B\uFF08MPF\uFF09\u5728 G2/M \u8F6C\u6362\u65F6\u88AB\u6FC0\u6D3B\uFF0C\u78F7\u9178\u5316\u51DD\u7F29\u86CB\u767D\u3001\u6838\u7EA4\u5C42\u86CB\u767D\u548C\u7EBA\u9524\u4F53\u76F8\u5173\u86CB\u767D\uFF0C\u63A8\u52A8\u67D3\u8272\u4F53\u51DD\u7F29\u3001\u6838\u819C\u89E3\u4F53\u4E0E\u7EBA\u9524\u4F53\u7EC4\u88C5\u3002","\u524D\u4E2D\u671F\uFF0C\u7EBA\u9524\u4F53\u5FAE\u7BA1\u6355\u83B7\u52A8\u7C92\uFF1B\u672A\u8FDE\u63A5\u7684\u52A8\u7C92\u4EA7\u751F Mad/Bub \u4FE1\u53F7\uFF0C\u6291\u5236 APC/C\u3002\u6240\u6709\u67D3\u8272\u4F53\u6392\u5217\u5230\u8D64\u9053\u9762\u540E\uFF0CSAC \u89E3\u9664\uFF0CAPC/C \u6CDB\u7D20\u5316 securin\uFF0C\u91CA\u653E separase\uFF0C\u5207\u5272\u9ECF\u8FDE\u86CB\u767D\uFF0C\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u5206\u79BB\u3002","\u540E\u671F A \u7531\u52A8\u7C92\u5FAE\u7BA1\u7F29\u77ED\u9A71\u52A8\uFF1B\u540E\u671F B \u7531 kinesin-5 \u7B49\u53CC\u6781\u9A6C\u8FBE\u5728\u53CD\u5411\u5E73\u884C\u6781\u5FAE\u7BA1\u4E0A\u6ED1\u52A8\uFF0C\u63A8\u5F00\u4E24\u6781\u3002\u672B\u671F\u6838\u819C\u91CD\u5EFA\uFF0C\u80DE\u8D28\u5206\u88C2\u7531\u808C\u52A8\u86CB\u767D-\u808C\u7403\u86CB\u767D II \u6536\u7F29\u73AF\u5B8C\u6210\u3002"],pitfalls:["DNA \u590D\u5236\u53D1\u751F\u5728 S \u671F\uFF0C\u4E0D\u662F M \u671F\uFF1B\u6709\u4E1D\u5206\u88C2\u53EA\u8D1F\u8D23\u628A\u5DF2\u590D\u5236\u7684\u67D3\u8272\u4F53\u5206\u914D\u3002","\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u5728\u540E\u671F\u5206\u79BB\uFF0C\u4E0D\u662F\u524D\u671F\uFF1B\u524D\u671F\u53D1\u751F\u7684\u662F\u67D3\u8272\u8D28\u51DD\u7F29\u548C\u7EBA\u9524\u4F53\u5F00\u59CB\u5F62\u6210\u3002","SAC \u4E0D\u662F\u201C\u68C0\u67E5\u67D3\u8272\u4F53\u662F\u5426\u51DD\u7F29\u201D\uFF0C\u800C\u662F\u68C0\u67E5\u52A8\u7C92\u4E0E\u5FAE\u7BA1\u7684\u8FDE\u63A5\u548C\u5F20\u529B\uFF1BSAC \u5931\u6548\u4F1A\u5BFC\u81F4\u975E\u6574\u500D\u4F53\u3002","\u6709\u4E1D\u5206\u88C2\u4EA7\u751F\u4E24\u4E2A\u9057\u4F20\u7269\u8D28\u76F8\u540C\u7684\u5B50\u7EC6\u80DE\uFF1B\u51CF\u6570\u5206\u88C2\u53D1\u751F\u540C\u6E90\u91CD\u7EC4\u548C\u4E24\u6B21\u8FDE\u7EED\u5206\u88C2\uFF0C\u4EA7\u751F\u5355\u500D\u4F53\u7EC6\u80DE\u3002"],quiz:[{q:"\u5982\u679C SAC \u5931\u6548\uFF0C\u7EC6\u80DE\u53EF\u80FD\u51FA\u73B0\u4EC0\u4E48\u540E\u679C\uFF1F",a:"\u672A\u6B63\u786E\u8FDE\u63A5\u7684\u67D3\u8272\u4F53\u53EF\u80FD\u5728\u540E\u671F\u63D0\u524D\u5206\u79BB\uFF0C\u5BFC\u81F4\u5B50\u7EC6\u80DE\u67D3\u8272\u4F53\u6570\u76EE\u5F02\u5E38\uFF08\u975E\u6574\u500D\u4F53\uFF09\uFF0C\u5E76\u53EF\u80FD\u4FC3\u8FDB\u80BF\u7624\u53D1\u751F\u3002"},{q:"APC/C \u5982\u4F55\u89E6\u53D1\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u5206\u79BB\uFF1F",a:"APC/C \u6CDB\u7D20\u5316 securin\uFF0C\u4F7F\u5176\u88AB\u86CB\u767D\u9176\u4F53\u964D\u89E3\uFF1B\u91CA\u653E\u7684 separase \u5207\u5272\u9ECF\u8FDE\u86CB\u767D\uFF0C\u59D0\u59B9\u67D3\u8272\u5355\u4F53\u56E0\u6B64\u5931\u53BB\u9ECF\u8FDE\u5E76\u5206\u79BB\u3002"},{q:"\u6BD4\u8F83\u540E\u671F A \u548C\u540E\u671F B \u7684\u9A71\u52A8\u673A\u5236\u3002",a:"\u540E\u671F A \u4E3B\u8981\u9760\u52A8\u7C92\u5FAE\u7BA1\u7F29\u77ED\uFF0C\u628A\u67D3\u8272\u4F53\u62C9\u5411\u4E24\u6781\uFF1B\u540E\u671F B \u4E3B\u8981\u9760\u6781\u5FAE\u7BA1\u6ED1\u52A8\u548C\u5EF6\u957F\uFF0C\u628A\u4E24\u6781\u63A8\u5F00\uFF0C\u4E8C\u8005\u5171\u540C\u5B8C\u6210\u67D3\u8272\u4F53\u5206\u914D\u3002"}]}}],Fh={membrane:[1,1,.12,.08,.1,.08,0],lipids:[1,1,.05,.03,.03,.03,0],proteins:[.9,1,.05,.03,.03,.03,0],particles:[.65,.3,.35,.25,.25,.3,.15],cytoskeleton:[.55,.05,1,.06,.04,.06,0],mitochondria:[.78,.04,.06,1,.04,.04,0],nucleus:[1,.04,.08,.04,1,.06,0],endomembrane:[.62,.04,.06,.04,.05,1,0],mitosis:[0,0,0,0,0,0,1]};var zi=`
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
`,mf=`
uniform float uTime;
uniform float uAmp;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${zi}
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
`,gf=`
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uRim;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${zi}
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
`,Qs=`
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
`,js=`
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
`;var Oh=`
uniform float uTime;
uniform float uPixelRatio;
uniform float uSize;
uniform float uOpacity;
uniform float uDrift;
attribute float aSeed;
attribute float aScale;
varying float vSeed;
varying float vAlpha;
${zi}
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
`,Bh=`
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
`,_f=`
uniform float uTime;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${zi}
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
`,vf=`
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${zi}
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
`,xf=`
uniform float uTime;
varying vec3 vN;
varying vec3 vV;
varying vec3 vLocal;
${zi}
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
`,yf=`
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
`,Mf=`
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
`,Sf=`
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
`,zh=`
attribute float aT;
attribute float aSeed;
varying float vT;
varying float vSeed;
void main() {
  vT = aT;
  vSeed = aSeed;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Hh=`
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
`,bf=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ef=`
uniform float uTime;
uniform float uOpacity;
varying vec3 vDir;
${zi}
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
`,Tf=`
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
`,wf=`
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColor;
varying vec2 vUv;
varying vec3 vN;
varying vec3 vV;
${zi}
void main() {
  float facing = abs(dot(normalize(vN), normalize(vV)));
  float fall = smoothstep(0.0, 0.25, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y));
  float n = ca_fbm(vec3(vUv * vec2(6.0, 2.4), uTime * 0.07));
  float wisps = 0.5 + 0.5 * n;
  float alpha = uOpacity * fall * (0.08 + facing * 0.42) * (0.45 + wisps * 0.75);
  gl_FragColor = vec4(uColor * (1.1 + wisps * 0.9), alpha);
}
`,Af=`
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
  float ca = 0.00035 + r * 0.00065;
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
    blur += texture2D(tDiffuse, warped - dir * r * r * 0.008 * f).rgb * w;
    total += w;
  }
  blur /= total;
  col = mix(col, blur, smoothstep(0.4, 0.95, r) * 0.24 * uIntensity);

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
`;function ga(i,e,t,n=.15,s=0){let r=new Tt(1,40,20),a=r.attributes.position;for(let o=0;o<a.count;o++){let l=a.getX(o),c=a.getY(o),h=a.getZ(o),d=1+.065*Math.sin(l*5+s)*Math.cos(h*6);a.setXYZ(o,l*i*d,c*t+n*(l*l+.4*h*h)+t*.3*Math.sin(l*5+h*3+s),h*e*d)}return r.computeVertexNormals(),r}function Rf(i,e,t,n,s=[1,1,1],r=""){let a=new di(new Tt(t,12,8),new en({color:n,roughness:.62,metalness:.02}),e.length),o=new At;return o.scale.set(...s),e.forEach((l,c)=>{o.position.set(...l),o.updateMatrix(),a.setMatrixAt(c,o.matrix)}),a.name=r,i.add(a),a}var gi=Math.PI*2,Pt=(i,e,t)=>new R(i,e,t),Gn=(i,e=.85)=>new en({color:i,roughness:.62,metalness:.02,transparent:!0,opacity:e,emissive:i,emissiveIntensity:.12,depthWrite:!1});function as(i,e,t,n,s,r){let a=Rf(i,e,t,n,r,s);return a.geometry.dispose(),a.geometry=new Tt(t,8,6),a.material.transparent=!0,a.material.opacity=.86,a.material.depthWrite=!1,a.material.emissive.set(n),a.material.emissiveIntensity=.1,a}function Jl(i,e,t,n,s=""){let r=new fn(e),a=new Re(new Hn(r,Math.max(12,e.length*5),t,6,!1),n);return a.name=s,i.add(a),a}function Cf(i,e,t=[]){let n=new Je;n.name="spherical-bilayer";let s=i.filter(l=>!t.some(c=>l.dot(c)>.998)),r=[],a=[],o=new At;for(let l of s)for(let c of[-1,1]){let h=e+c*.2;r.push(l.clone().multiplyScalar(h).toArray()),o.position.copy(l).multiplyScalar(h),o.quaternion.setFromUnitVectors(Pt(0,1,0),l.clone().multiplyScalar(-c)),o.updateMatrix(),a.push(o.matrix.clone())}as(n,r,.064,7983040,"polar-heads");for(let l of[-1,1]){let c=new fn([Pt(l*.026,.025,0),Pt(l*.026,.09,0),Pt(l*.026+(l>0?.027:0),.15,.012),Pt(l*.026,.185,0)]),h=new di(new Hn(c,6,.012,4),Gn(4099976,.74),a.length);a.forEach((d,u)=>h.setMatrixAt(u,d)),h.name=l>0?"kinked-acyl-chains":"straight-acyl-chains",n.add(h)}return n.userData.leafletRadii=[e-.2,e+.2],n}function Pf(i,e){let t=Gn(e%2?14529914:7392445),n=[];if(e%3===0)for(let a=0;a<6;a++){let o=a*gi/6,l=new Re(new Bn(.065,.52,4,8),t);l.position.set(Math.cos(o)*.17,0,Math.sin(o)*.17),l.rotation.z=Math.cos(o)*.13,i.add(l)}else{let a=new Re(new Bn(.1,.68,4,10),t);a.position.y=.14,i.add(a);for(let o=0;o<3;o++)n.push([Math.cos(o*2.1)*.11,.5+o*.07,Math.sin(o*2.1)*.11]);as(i,n,.14,11982514,"receptor-domains",[1,.8,1])}let s=[],r=Gn(13940613,.75);for(let a of[-1,1]){let o=[Pt(.1*a,.3,0),Pt(.15*a,.58,.04),Pt(.26*a,.83,.07),Pt(.33*a,.99,-.03)];Jl(i,o,.012,r,"attached-glycan"),s.push(...o.slice(1).map(l=>l.toArray()))}as(i,s,.035,15847314,"sugars")}function If(){let i=new Je;i.name="centriole-pair";let e=Gn(13022341),t=new zn(.012,.012,.38,5);for(let n=0;n<2;n++){let s=new Je;s.rotation.z=n*Math.PI/2,s.position.set(n*.16,0,n*.15);for(let r=0;r<9;r++)for(let a=0;a<3;a++){let o=r*gi/9+a*.16,l=new Re(t,e);l.position.set(Math.cos(o)*(.09+a*.009),0,Math.sin(o)*(.09+a*.009)),s.add(l)}i.add(s)}return i}function Lf(i,e=48){let t=i*gi/e,n=Pt(-3.15,.1,0),s=Pt(Math.cos(t)*6.8,Math.sin(t)*5.7,Math.sin(t*3.1)*2.4),r=[n],a=Math.sin(t)>=0?1:-1;return r.push(Pt(-3.35,a*2.4,s.z*.3)),s.x>-1&&r.push(Pt(0,a*3.65,s.z*.8)),r.push(s),new fn(r,!1,"centripetal")}function Nf(i){let e=new Je;e.name="cytoskeleton-anatomy";let t=If();t.position.set(-3.15,.1,0),e.add(t);let n=[];for(let r of[3,15,27,39]){let a=i[r%i.length],o=a.computeFrenetFrames(60,!1);for(let l=0;l<=60;l++)for(let c=0;c<13;c++){let h=c*gi/13,d=a.getPointAt(l/60).addScaledVector(o.normals[l],Math.cos(h)*.075).addScaledVector(o.binormals[l],Math.sin(h)*.075);n.push(d.toArray())}}as(e,n,.026,7980977,"thirteen-protofilament-tubulin");let s=[];for(let r=0;r<18;r++){let a=r*gi/18;for(let o=0;o<64;o++)for(let l of[-1,1]){let c=o/63,h=a+c*.44,d=7.55+Math.cos(c*gi*5)*.035*l;s.push([Math.cos(h)*d,(r%3-1)*1.5+Math.sin(c*gi*5)*.035*l,Math.sin(h)*d])}}return as(e,s,.035,7977884,"paired-cortical-actin"),e}function Df(){let i=new Je;i.name="mitochondrial-inner-membrane";let e=new Re(new Bn(.365,1.46,8,24),Gn(10910281,.12));i.add(e);let t=Gn(13343325,.82);for(let n=0;n<8;n++){let s=new Re(ga(.32,.3,.022,.055,n),t);s.name="crista",s.position.set((n%2?1:-1)*.035,-.68+n*.19,0),s.rotation.z=(n%2?1:-1)*.14,i.add(s)}return i}function Uf(){let i=new Je;i.name="fixed-nuclear-basket";let e=Gn(8963789,.8);for(let n=0;n<8;n++){let s=n*gi/8,r=Math.cos(s),a=Math.sin(s);Jl(i,[Pt(r*.39,a*.39,-.07),Pt(r*.34,a*.34,-.32),Pt(r*.18,a*.18,-.56)],.014,e),Jl(i,[Pt(r*.38,a*.38,.06),Pt(r*.47,a*.47,.26),Pt(r*.45,a*.45,.42)],.013,e)}let t=new Re(new Mn(.18,.018,6,32),e);return t.position.z=-.56,i.add(t),i}function Ff(i){let e=new Je;e.name="chromatin-nucleosomes";let t=[];for(let n=0;n<i.length;n+=6){let s=Pt(...i.slice(n,n+3));s.distanceTo(Pt(.62,.38,.22))>.95&&t.push(s.toArray())}return as(e,t,.065,12420016,"nucleosome-beads",[1,.7,1]),e}function Of(){let i=new Je;i.name="rough-er-cisternae";let e=Gn(6072736,.7),t=[];for(let n=0;n<5;n++){let s=new Re(ga(1.18,.66,.055,.19,n),e);s.position.set(-2.85-n*.14,-.3+n*.32,-2.1),s.rotation.z=.28,s.updateMatrix(),i.add(s);let r=s.geometry.attributes.position;for(let a=44;a<r.count/2;a+=11){let o=Pt(r.getX(a),r.getY(a)+.045,r.getZ(a)).applyMatrix4(s.matrix);t.push(o.toArray())}}return as(i,t,.048,13808270,"membrane-bound-ribosomes",[1,.7,1]),i}function Bf(){let i=new Je;i.name="division-anatomy";let e=Gn(7125939,.38);for(let r of[-1,1]){let a=If();a.position.x=r*4.8,i.add(a);for(let o=0;o<14;o++){let l=o*gi/14;Jl(i,[Pt(r*4.8,0,0),Pt(r*5.15,Math.cos(l)*.7,Math.sin(l)*.7),Pt(r*5.55,Math.cos(l)*1.35,Math.sin(l)*1.35)],.012,e,"astral-microtubule")}}let t=new Re(new Mn(3.2,.045,8,96),Gn(13738376));t.name="actomyosin-ring",t.rotation.y=Math.PI/2,i.add(t);let n=new Re(new Tt(1,64,40),Gn(5611160,.08));n.name="cleavage-furrow";let s=n.geometry.attributes.position.array.slice();return i.add(n),i.userData.update=r=>{let a=ha.clamp(r,0,1);t.visible=a>.01,t.scale.setScalar(1-a*.88);let o=n.geometry.attributes.position;for(let l=0;l<o.count;l++){let c=s[l*3]*6.25,h=1-a*.88*Math.exp(-((c/1.6)**2));o.setXYZ(l,c,s[l*3+1]*3.2*h,s[l*3+2]*3.2*h)}o.needsUpdate=!0,n.geometry.computeVertexNormals()},i.userData.update(0),i}var Jt=Math.PI*2,os=8.2,vx=new R(0,1,0),xx=new R(1,0,0),yx=new R(0,1,0),Mx=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;function Sx(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function kh(i){let e=[],t=Math.PI*(3-Math.sqrt(5));for(let n=0;n<i;n+=1){let s=1-n/Math.max(1,i-1)*2,r=Math.sqrt(Math.max(0,1-s*s)),a=t*n;e.push(new R(Math.cos(a)*r,s,Math.sin(a)*r))}return e}function hn(i,e,t){return Math.max(e,Math.min(t,i))}function Kl(i,e,t){let n=hn((t-i)/(e-i),0,1);return n*n*(3-2*n)}function Hi(i){let e=i()*2-1,t=i()*Jt,n=Math.sqrt(Math.max(0,1-e*e));return new R(Math.cos(t)*n,e,Math.sin(t)*n)}function zf(i,e,t,n,s=1){let r=new Tt(i,e,t),a=r.attributes.position,o=new R;for(let l=0;l<a.count;l+=1){o.fromBufferAttribute(a,l).normalize();let c=Math.sin(o.x*4.2+s)*Math.cos(o.y*3.6-s*.4)*.55+Math.sin(o.z*6.7+s*2.1)*.25;o.multiplyScalar(i+c*n),a.setXYZ(l,o.x,o.y,o.z)}return a.needsUpdate=!0,r.computeVertexNormals(),r}function Hf(i,e={}){if(!i)throw new Error("Cell Atlas: no host element.");let t=Sx(1372459435),n={value:0},s={value:1},r=new Je,a=new Je;r.add(a);let o;try{o=new Gl({antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1})}catch(I){throw new Error(`Cell Atlas: WebGL could not start (${I.message}).`)}if(!o.getContext())throw new Error("Cell Atlas: WebGL is unavailable in this browser.");let l=Math.min(window.devicePixelRatio||1,1.5);o.setPixelRatio(l),o.outputColorSpace=an,o.toneMapping=ns,o.toneMappingExposure=.84,o.setClearColor(132619,1),o.domElement.className="ca-webgl",o.domElement.setAttribute("aria-hidden","true"),o.domElement.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;",i.appendChild(o.domElement);let c=new Ir;c.background=new pe(132619),c.fog=new Pr(132619,.017),c.add(r);let h=new Zt(42,1,.04,140);h.position.set(0,3,23.5);let d=new Yl(o),u=new Zl(c,h),p=new Ks(new Me(1,1),.42,.55,.28),_=new Js({uniforms:{tDiffuse:{value:null},uResolution:{value:new Me(1,1)},uTime:{value:0},uFlash:{value:1},uIntensity:{value:1},uGrain:{value:.028},uLetterbox:{value:0}},vertexShader:Mx,fragmentShader:Af}),M=new $l;d.addPass(u),d.addPass(p),d.addPass(_),d.addPass(M);let m=null;try{let I=document.createElement("canvas");I.width=1024,I.height=512;let L=I.getContext("2d"),F=L.createLinearGradient(0,0,0,512);F.addColorStop(0,"#01050a"),F.addColorStop(.45,"#04141c"),F.addColorStop(.7,"#031019"),F.addColorStop(1,"#010306"),L.fillStyle=F,L.fillRect(0,0,1024,512);let oe=[[180,230,260,"rgba(26, 210, 198, 0.38)"],[820,150,230,"rgba(255, 66, 158, 0.26)"],[520,390,190,"rgba(255, 168, 69, 0.16)"],[940,410,170,"rgba(74, 100, 255, 0.22)"]];for(let[ze,st,lt,Mi]of oe){let Qt=L.createRadialGradient(ze,st,0,ze,st,lt);Qt.addColorStop(0,Mi),Qt.addColorStop(1,"rgba(0,0,0,0)"),L.fillStyle=Qt,L.fillRect(ze-lt,st-lt,lt*2,lt*2)}let xe=new Or(I);xe.mapping=Hs,xe.colorSpace=an;let Ae=new Ys(o);Ae.compileEquirectangularShader(),m=Ae.fromEquirectangular(xe).texture,c.environment=m,xe.dispose(),Ae.dispose()}catch{}let f=new Wr(1590362,656137,.8);c.add(f);let S=new Yr(10485745,.95);S.position.set(9,12,10),c.add(S);let A=new fi(4191712,110,42,2);A.position.set(8,7,8),c.add(A);let y=new fi(16727711,85,40,2);y.position.set(-9,-3,6),c.add(y);let T=new fi(16755544,22,34,2);T.position.set(-7,4,5),c.add(T);let b=new qr(9435391,170,55,.62,.92,1.6);b.position.set(0,18,4),b.target.position.set(0,0,0),c.add(b),c.add(b.target);let C=new Map;function v(I,L){let F=C.get(I);F||(F={name:I,weight:0,target:0,objects:[],mats:[]},C.set(I,F)),F.objects.push(L),L.traverse(oe=>{if(!oe.material)return;let xe=Array.isArray(oe.material)?oe.material:[oe.material];for(let Ae of xe){if(!Ae||F.mats.some(st=>st.mat===Ae))continue;let ze=Ae.uniforms&&Ae.uniforms.uOpacity?Ae.uniforms.uOpacity.value:null;F.mats.push({mat:Ae,baseOpacity:Ae.opacity,baseEmissive:Ae.emissiveIntensity===void 0?1:Ae.emissiveIntensity,baseColor:Ae.color?Ae.color.clone():null,shaderOpacity:ze})}})}function E(I,L){let F=hn(L,0,1),oe=F>.012;for(let xe of I.objects)xe.visible=oe;if(oe)for(let xe of I.mats){let Ae=xe.mat;xe.shaderOpacity!==null?Ae.uniforms.uOpacity.value=xe.shaderOpacity*F:Ae.transparent&&(Ae.opacity=xe.baseOpacity*F),Ae.emissiveIntensity!==void 0&&(Ae.emissiveIntensity=xe.baseEmissive*(.25+.75*F)),xe.baseColor&&Ae.color&&Ae.color.copy(xe.baseColor).multiplyScalar(.4+.6*F)}}let P=new Je;c.add(P);let B=new tt({uniforms:{uTime:n,uOpacity:{value:1}},vertexShader:bf,fragmentShader:Ef,side:Wt,depthWrite:!1,fog:!1}),z=new Re(new Tt(72,64,40),B);z.frustumCulled=!1,P.add(z);let k=2600,D=new Float32Array(k*3),X=new Float32Array(k),K=new Float32Array(k);for(let I=0;I<k;I+=1){let L=Hi(t),F=19+t()*44;D[I*3]=L.x*F,D[I*3+1]=L.y*F,D[I*3+2]=L.z*F,X[I]=t(),K[I]=.25+t()*.85}let J=new ut;J.setAttribute("position",new Et(D,3)),J.setAttribute("aSeed",new Et(X,1)),J.setAttribute("aScale",new Et(K,1));let re=new tt({uniforms:{uTime:n,uPixelRatio:s,uSize:{value:1},uOpacity:{value:.42},uDrift:{value:.25}},vertexShader:Oh,fragmentShader:Bh,transparent:!0,depthWrite:!1,blending:ct,fog:!1}),Y=new yn(J,re);Y.frustumCulled=!1,P.add(Y);let te=new Je;P.add(te);let se=[{pos:[0,16,2],scale:[1.25,1.1,1.25],rot:[0,0,-.16],color:1806238,opacity:.1},{pos:[-13,7,-8],scale:[.75,.85,.75],rot:[.3,.2,.64],color:5000144,opacity:.07},{pos:[12,4,8],scale:[.6,.8,.6],rot:[-.24,0,-.7],color:13187973,opacity:.06}];for(let I of se){let L=new tt({uniforms:{uTime:n,uOpacity:{value:I.opacity},uColor:{value:new pe(I.color)}},vertexShader:Tf,fragmentShader:wf,transparent:!0,depthWrite:!1,side:on,blending:ct,fog:!1}),F=new Re(new zr(8.5,25,40,1,!0),L);F.position.fromArray(I.pos),F.scale.fromArray(I.scale),F.rotation.set(...I.rot),te.add(F)}let Ne=new Je;a.add(Ne);let Fe=new tt({uniforms:{uTime:n,uOpacity:{value:.56},uAmp:{value:.14},uColorA:{value:new pe(676450)},uColorB:{value:new pe(10169452)},uRim:{value:new pe(9371626)}},vertexShader:mf,fragmentShader:gf,transparent:!0,depthWrite:!1,side:on,blending:ct}),_t=new Re(new Qi(os,5),Fe);_t.renderOrder=3,Ne.add(_t);let rt=new ji({color:740181,roughness:.18,metalness:.04,transmission:.84,thickness:2.3,ior:1.33,clearcoat:1,clearcoatRoughness:.14,iridescence:.72,iridescenceIOR:1.3,iridescenceThicknessRange:[120,460],attenuationColor:new pe(750448),attenuationDistance:3.5,envMapIntensity:1.15,transparent:!0,opacity:.16,depthWrite:!1}),at=new Re(new Tt(os-.09,96,64),rt);at.renderOrder=1,Ne.add(at);let Q=new tt({uniforms:{uTime:n,uOpacity:{value:.13},uColor:{value:new pe(2081986)},uColorB:{value:new pe(10173069)},uPower:{value:2.8}},vertexShader:Qs,fragmentShader:js,transparent:!0,depthWrite:!1,side:Wt,blending:ct}),ne=new Re(new Tt(os-.3,64,48),Q);Ne.add(ne);let Te=new Je;a.add(Te);let ke=new At,Se=kh(30);Te.add(Cf(kh(2400),os,Se));let Ze=new Je;a.add(Ze);for(let I=0;I<Se.length;I+=1){let L=Se[I],F=new Je;F.position.copy(L).multiplyScalar(os-.03),F.quaternion.setFromUnitVectors(vx,L),F.rotateY(t()*Jt);let oe=.86+t()*.2;F.scale.setScalar(oe),Pf(F,I),Ze.add(F)}let Ut=new Je;a.add(Ut);let $e=3400,nt=new Float32Array($e*3),xt=new Float32Array($e),Qe=new Float32Array($e);for(let I=0;I<$e;I+=1){let L=Hi(t),F=Math.pow(t(),.62)*(os-.45),oe=L.multiplyScalar(F);nt[I*3]=oe.x,nt[I*3+1]=oe.y,nt[I*3+2]=oe.z,xt[I]=t(),Qe[I]=.25+Math.pow(t(),3)*1.6}let yt=new ut;yt.setAttribute("position",new Et(nt,3)),yt.setAttribute("aSeed",new Et(xt,1)),yt.setAttribute("aScale",new Et(Qe,1));let Ft=new tt({uniforms:{uTime:n,uPixelRatio:s,uSize:{value:.38},uOpacity:{value:.48},uDrift:{value:.42}},vertexShader:Oh,fragmentShader:Bh,transparent:!0,depthWrite:!1,blending:ct}),Kt=new yn(yt,Ft);Kt.frustumCulled=!1,Ut.add(Kt);let gt=new Je;a.add(gt);let wt=[],O=[],Ht=[],dt=[],w=[];for(let I=0;I<48;I+=1){let L=Lf(I);wt.push(L);let F=[];for(let ze=0;ze<140;ze+=1)F.push(L.getPoint(ze/139));O.push(F);let oe=34,xe=t(),Ae=L.getPoint(0);for(let ze=1;ze<oe;ze+=1){let st=ze/(oe-1),lt=L.getPoint(st);Ht.push(Ae.x,Ae.y,Ae.z,lt.x,lt.y,lt.z),dt.push((ze-1)/(oe-1),st),w.push(xe,xe),Ae=lt}}gt.add(Nf(wt));let g=new ut;g.setAttribute("position",new Ye(Ht,3)),g.setAttribute("aT",new Ye(dt,1)),g.setAttribute("aSeed",new Ye(w,1));let H=new tt({uniforms:{uTime:n,uOpacity:{value:.3},uColorA:{value:new pe(1820861)},uColorB:{value:new pe(10420152)}},vertexShader:zh,fragmentShader:Hh,transparent:!0,depthWrite:!1,blending:ct}),W=new Ki(g,H);W.frustumCulled=!1,gt.add(W);let Z=new Gt({color:7995376,transparent:!0,opacity:.07,depthWrite:!1,blending:ct});for(let I=0;I<10;I+=1){let L=wt[Math.floor(t()*wt.length)],F=new Re(new Hn(L,70,.016+t()*.018,4,!1),Z);gt.add(F)}let ce=new Gt({color:12035071,transparent:!0,opacity:.17,depthWrite:!1,blending:ct});for(let I=0;I<20;I+=1){let L=[],F=t()*Jt;for(let Ae=0;Ae<4;Ae+=1){let ze=3.1+t()*4.3;F+=.4+t()*.75,L.push(new R(Math.cos(F)*ze,(-1+t()*2)*Math.sqrt(Math.max(0,7.7**2-ze**2)),Math.sin(F)*ze))}let oe=new fn(L,!1,"catmullrom",.5),xe=new Re(new Hn(oe,72,.022+t()*.02,4,!1),ce);gt.add(xe)}let he=240,$=new Float32Array(he*3),ee=[];for(let I=0;I<he;I+=1){let L=Math.floor(t()*wt.length);ee.push({samples:O[L],offset:t(),speed:.012+t()*.035,radial:new R(t()-.5,t()-.5,t()-.5).multiplyScalar(.16)})}let ue=new ut;ue.setAttribute("position",new Et($,3));let De=new On({color:13172722,size:.105,sizeAttenuation:!0,transparent:!0,opacity:.5,depthWrite:!1,blending:ct}),me=new yn(ue,De);me.frustumCulled=!1,gt.add(me);let le=new Je;a.add(le);let Ue=new tt({uniforms:{uTime:n,uOpacity:{value:.22},uColorA:{value:new pe(4922224)},uColorB:{value:new pe(12797092)},uColorC:{value:new pe(9434623)}},vertexShader:_f,fragmentShader:vf,transparent:!0,depthWrite:!1}),Be=new Re(new Tt(2.5,96,64),Ue);le.add(Be);let Ge=new tt({uniforms:{uTime:n,uOpacity:{value:.28},uColor:{value:new pe(9397247)},uColorB:{value:new pe(5633507)},uPower:{value:2.2}},vertexShader:Qs,fragmentShader:js,transparent:!0,depthWrite:!1,side:on,blending:ct}),U=new Re(new Tt(2.78,64,48),Ge);le.add(U);let de=new Re(new Tt(2.66,64,40),Ge.clone());de.material.uniforms.uOpacity.value=.1,le.add(de);let j=zf(.82,32,24,.07,3.1),fe=new en({color:7151704,emissive:5049407,emissiveIntensity:1,roughness:.46,metalness:.1,transparent:!0,opacity:.84}),ve=new Re(j,fe);ve.position.set(.62,.38,.22),le.add(ve);let ie=88,Oe=new Mn(.105,.022,6,14),Ie=new Gt({color:10214655,transparent:!0,opacity:.3,depthWrite:!1,blending:ct}),vt=new di(Oe,Ie,ie),ft=kh(ie);for(let I=0;I<ie;I+=1){let L=ft[I];ke.position.copy(L).multiplyScalar(2.79),ke.quaternion.setFromUnitVectors(new R(0,0,1),L),ke.rotateZ(t()*Jt),ke.scale.setScalar(.8+t()*.65),ke.updateMatrix(),vt.setMatrixAt(I,ke.matrix)}vt.instanceMatrix.needsUpdate=!0,le.add(vt);let pn=new R(.58,.32,.75).normalize(),kt=new Je;kt.position.copy(pn.clone().multiplyScalar(2.78)),kt.quaternion.setFromUnitVectors(new R(0,0,1),pn);let xa=new Gt({color:10217727,transparent:!0,opacity:.74,depthWrite:!1,blending:ct}),nc=new Gt({color:16759016,transparent:!0,opacity:.62,depthWrite:!1,blending:ct}),ya=new Re(new Mn(.42,.03,8,40),xa),ir=new Re(new Mn(.26,.02,8,30),nc);kt.add(ya,ir);let sr=new Je,Ma=new zn(.016,.016,.28,6);for(let I=0;I<8;I+=1){let L=I/8*Jt,F=new Re(Ma,xa);F.position.set(Math.cos(L)*.32,Math.sin(L)*.32,0),F.rotation.z=L-Math.PI/2,sr.add(F)}sr.name="fixed-npc-scaffold",kt.add(sr,Uf());let rr=new Re(new zn(.085,.085,.3,16,1,!0),new Gt({color:7334143,transparent:!0,opacity:.18,side:on,depthWrite:!1}));rr.rotation.x=Math.PI/2,kt.add(rr);let ni=new Re(new Tt(.06,12,8),new Gt({color:16765681,transparent:!0,opacity:.9,depthWrite:!1}));kt.add(ni);let hs=[];for(let I=0;I<6;I+=1){let L=I%2===1,F=I/6*Jt,oe=new Re(new Tt(.045,10,7),new Gt({color:L?16761466:7727359,transparent:!0,opacity:.9,depthWrite:!1,blending:ct}));oe.position.set(Math.cos(F)*.09,Math.sin(F)*.09,L?.62:-.62),kt.add(oe),hs.push({mesh:oe,phase:I/6,speed:.28+I%2*.1,dir:L?1:-1})}le.add(kt);let ii=new Je;le.add(ii);let ar=[],Vi=[],or=[],vi=[];for(let I=0;I<34;I+=1){let L=[],oe=Hi(t).multiplyScalar(.5+t()*1.5);L.push(oe);for(let lt=0;lt<3;lt+=1){let Mi=Hi(t).multiplyScalar(.55+t()*1.6);L.push(Mi)}let xe=new fn(L,!1,"catmullrom",.55),Ae=30,ze=t(),st=xe.getPoint(0);for(let lt=1;lt<Ae;lt+=1){let Mi=lt/(Ae-1),Qt=xe.getPoint(Mi);ar.push(st.x,st.y,st.z,Qt.x,Qt.y,Qt.z),Vi.push((lt-1)/(Ae-1),Mi),or.push(ze,ze),st=Qt,vi.push(Qt.x,Qt.y,Qt.z)}}let Gi=new ut;Gi.setAttribute("position",new Ye(ar,3)),Gi.setAttribute("aT",new Ye(Vi,1)),Gi.setAttribute("aSeed",new Ye(or,1));let Sa=new tt({uniforms:{uTime:n,uOpacity:{value:.3},uColorA:{value:new pe(16735168)},uColorB:{value:new pe(9141247)}},vertexShader:zh,fragmentShader:Hh,transparent:!0,depthWrite:!1,blending:ct}),ba=new Ki(Gi,Sa);ba.frustumCulled=!1,ii.add(ba);let Ea=new ut;Ea.setAttribute("position",new Ye(vi,3));let ic=new On({color:16751581,size:.028,sizeAttenuation:!0,transparent:!0,opacity:.42,depthWrite:!1,blending:ct}),Ta=new yn(Ea,ic);Ta.frustumCulled=!1,ii.add(Ta,Ff(vi));let wa=new Re(new Qi(2.66,2),new Gt({color:9397247,wireframe:!0,transparent:!0,opacity:.025,depthWrite:!1,blending:ct}));ii.add(wa);let x=new fi(11820287,12,10,2);x.position.set(0,0,0),le.add(x);let N=new Je;a.add(N);let q=[[4.6,1.8,2.4],[5.6,-.8,1],[4.2,-2.2,3.8],[6.4,1,-1.2],[3.8,2.8,-2.6],[2,-4.2,2.2],[-3,4,3],[-5.2,-2.8,-2],[.5,5,1]],V=new tt({uniforms:{uTime:n,uOpacity:{value:.24},uColorA:{value:new pe(8007441)},uColorB:{value:new pe(16752202)},uColorC:{value:new pe(16770212)}},vertexShader:xf,fragmentShader:yf,transparent:!0,depthWrite:!1}),G=new tt({uniforms:{uTime:n,uOpacity:{value:.15},uColor:{value:new pe(16754255)},uColorB:{value:new pe(5437413)},uPower:{value:2.6}},vertexShader:Qs,fragmentShader:js,transparent:!0,depthWrite:!1,side:Wt,blending:ct}),ge=[],we=new Bn(.42,1.5,6,18),_e=new Bn(.5,1.55,6,18);for(let I=0;I<q.length;I+=1){let L=new Je;L.position.fromArray(q[I]),L.rotation.set(t()*Jt,t()*Jt,t()*Jt),L.scale.set(.8+t()*.45,.82+t()*.55,.8+t()*.45);let F=new Re(we,V);L.add(F,Df()),ge.push(L);let oe=new Re(_e,G);L.add(oe),N.add(L)}let be=[],Le=[],qe=new Gt({color:7927263,transparent:!0,opacity:.72,depthWrite:!1,blending:ct}),Xe=new en({color:16758878,emissive:10111507,emissiveIntensity:.85,roughness:.3,metalness:.08,transparent:!0,opacity:.9});[0,1,2,5,7].forEach(I=>{let L=ge[I];L.updateMatrix();let F=new R(0,0,1).applyQuaternion(L.quaternion),oe=new R(.04,.08,.3).applyMatrix4(L.matrix),xe=new Je;xe.position.copy(oe),xe.scale.setScalar(.62),xe.quaternion.setFromUnitVectors(new R(0,0,1),F);let Ae=new Re(new Mn(.3,.026,8,32),qe),ze=new Re(new Mn(.17,.015,8,24),qe);xe.add(Ae,ze);let st=new Je;st.position.z=-.3;let lt=new Re(new Tt(.14,16,12),Xe),Mi=new Re(new Mn(.21,.022,8,28),Xe);st.add(lt,Mi);for(let uc=0;uc<3;uc+=1){let _u=uc/3*Jt,vu=new Re(new Tt(.035,8,6),Xe);vu.position.set(Math.cos(_u)*.19,Math.sin(_u)*.19,0),st.add(vu)}xe.add(st);let Qt=new Re(new zn(.035,.045,.25,8),Xe);Qt.rotation.x=Math.PI/2,Qt.position.z=-.14,xe.add(Qt),N.add(xe),st.name="fixed-f1-head";let dr=new Je;dr.name="rotating-gamma-shaft",xe.remove(Qt),dr.add(Qt);let gu=new Re(new Tt(.04,8,6),Xe);gu.position.set(.035,0,-.2),dr.add(gu),xe.add(dr);let hc=new Re(new zn(.018,.018,.34,6),Xe);hc.rotation.x=Math.PI/2,hc.position.set(.2,0,-.15),xe.add(hc),Le.push(dr),be.push({anchor:oe,dir:F,quaternion:xe.quaternion.clone()})});let Ce=180,ot=new Float32Array(Ce*3),Lt=[];for(let I=0;I<Ce;I+=1){let L=be[I%be.length],F=t()*Jt;Lt.push({anchor:L.anchor,quaternion:L.quaternion,x:Math.cos(F)*(.02+t()*.07),y:Math.sin(F)*(.02+t()*.07),phase:t(),speed:.24+t()*.38})}let Mt=new ut;Mt.setAttribute("position",new Et(ot,3));let St=new On({color:9435135,size:.045,sizeAttenuation:!0,transparent:!0,opacity:.62,depthWrite:!1,blending:ct}),Vt=new yn(Mt,St);Vt.frustumCulled=!1,N.add(Vt);let Ee=520,Ot=new Float32Array(Ee*3),it=[];for(let I=0;I<Ee;I+=1){let L=new R().fromArray(q[Math.floor(t()*q.length)]);it.push({center:L,angle:t()*Jt,radius:.72+t()*.8,speed:.15+t()*.55,y:(t()-.5)*1.8})}let nn=new ut;nn.setAttribute("position",new Et(Ot,3));let En=new On({color:8781810,size:.06,sizeAttenuation:!0,transparent:!0,opacity:.46,depthWrite:!1,blending:ct}),In=new yn(nn,En);In.frustumCulled=!1,N.add(In);let Wn=120,ht=new Float32Array(Wn*3),Rt=new Float32Array(Wn),mn=[];for(let I=0;I<Wn;I+=1){let L=be[I%be.length],F=L.dir.clone(),oe=new R(-F.y,F.x,0).normalize();mn.push({origin:L.anchor.clone().addScaledVector(F,-.34),dir:F,tangent:oe,age:t()*3,life:2.6+t()*2.4,speed:.34+t()*.55,wobble:t()*Jt}),Rt[I]=mn[I].age/mn[I].life}let pt=new ut;pt.setAttribute("position",new Et(ht,3)),pt.setAttribute("aLife",new Et(Rt,1));let Xn=new tt({uniforms:{uPixelRatio:s,uSize:{value:1.4},uOpacity:{value:.5}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:ct}),si=new yn(pt,Xn);si.frustumCulled=!1,N.add(si);let lr=56,Aa=new Float32Array(lr*3),sc=[];for(let I=0;I<lr;I+=1){let L=be[I%be.length];sc.push({anchor:L.anchor,dir:L.dir,tangent:new R(-L.dir.y,L.dir.x,0).normalize(),phase:t(),speed:.2+t()*.28})}let rc=new ut;rc.setAttribute("position",new Et(Aa,3));let Jf=new On({color:9427199,size:.042,sizeAttenuation:!0,transparent:!0,opacity:.32,depthWrite:!1,blending:ct}),qh=new yn(rc,Jf);qh.frustumCulled=!1,N.add(qh);let ac=new fi(16751687,20,16,2);ac.position.set(4.9,.2,1.8),N.add(ac);let xi=new Je;a.add(xi);let Yh=new tt({uniforms:{uTime:n,uOpacity:{value:.38},uColorA:{value:new pe(1799531)},uColorB:{value:new pe(16760947)}},vertexShader:Mf,fragmentShader:Sf,transparent:!0,depthWrite:!1,blending:ct});xi.add(Of());let cr=[];for(let I=0;I<13;I+=1){let L=[],F=t()*Jt,oe=-1.8+t()*3.4,xe=3.2+t()*1.7;for(let st=0;st<4;st+=1){F+=.38+t()*.72;let lt=xe+Math.sin(F*2.1+I)*.5;L.push(new R(Math.cos(F)*lt-.5,oe+Math.sin(F*1.3)*.5,Math.sin(F)*lt)),oe+=(t()-.5)*1.2}let Ae=new fn(L,!1,"catmullrom",.5);cr.push(Ae);let ze=new Re(new Hn(Ae,110,.038+t()*.045,6,!1),Yh);xi.add(ze)}let Zh=440,$h=new Float32Array(Zh*3);for(let I=0;I<Zh;I+=1){let F=cr[Math.floor(t()*cr.length)].getPoint(t()),oe=Hi(t).multiplyScalar(.03+t()*.07);F.add(oe),$h.set([F.x,F.y,F.z],I*3)}let Jh=new ut;Jh.setAttribute("position",new Et($h,3));let Kf=new On({color:16767648,size:.045,sizeAttenuation:!0,transparent:!0,opacity:.42,depthWrite:!1,blending:ct}),Kh=new yn(Jh,Kf);Kh.frustumCulled=!1,xi.add(Kh);let Ra=new Je;Ra.position.set(-3.35,-.25,.75),Ra.rotation.set(.36,.85,.2),xi.add(Ra);let Qf=new en({color:16753234,emissive:10239244,emissiveIntensity:.22,roughness:.34,metalness:.16,transparent:!0,opacity:.55});for(let I=0;I<6;I+=1){let L=1.13-I*.08,F=new Re(ga(L,L*.7,.046,.15,I),Qf);F.position.z=(I-2.5)*.16,F.rotation.x=Math.PI/2,F.rotation.z=(I-2.5)*.035,Ra.add(F)}let Ca=[];for(let I=0;I<18;I+=1){let L=cr[I%cr.length].getPoint(.35+t()*.3),F=new R(-3.5+(t()-.5)*.8,-.3+(t()-.5)*.8,1.1+(t()-.5)*.8),oe=L.clone().lerp(F,.5).add(Hi(t).multiplyScalar(.8));Ca.push(new fn([L,oe,F]))}for(let I=0;I<22;I+=1){let L=new R(-3.5,-.25,.8),F=Hi(t);F.x=Math.abs(F.x)*.8+.1,F.z=Math.abs(F.z)*.8+.1;let oe=F.normalize().multiplyScalar(os-.2),xe=L.clone().lerp(oe,.5).add(Hi(t).multiplyScalar(1.6));Ca.push(new fn([L,xe,oe]))}let jf=new Tt(.115,12,9),ep=[new ji({color:16764807,emissive:13396511,emissiveIntensity:.9,roughness:.22,metalness:.05,transmission:.45,thickness:.2,transparent:!0,opacity:.62,envMapIntensity:1}),new ji({color:9437168,emissive:1346692,emissiveIntensity:.9,roughness:.2,metalness:.05,transmission:.4,thickness:.2,transparent:!0,opacity:.6,envMapIntensity:1})],Qh=[];for(let I=0;I<40;I+=1){let L=new Re(jf,ep[I%2]);if(I%3===0){let xe=new Re(new Qi(.13,1),new Gt({color:12956306,wireframe:!0,transparent:!0,opacity:.4,depthWrite:!1}));L.add(xe)}let F=Ca[I%Ca.length],oe={mesh:L,route:F,offset:t(),speed:.018+t()*.03,phase:t()*Jt};Qh.push(oe),xi.add(L)}let tp=new Tt(.16,16,12),np=new en({color:14050674,emissive:7017762,emissiveIntensity:.72,roughness:.32,metalness:.08,transparent:!0,opacity:.78});for(let I=0;I<9;I+=1){let L=new Re(tp,np);L.position.set(-3.5+(t()-.5)*1.9,-.55+(t()-.5)*1.7,.9+(t()-.5)*1.7),L.scale.setScalar(.75+t()*.9);let F=new Re(zf(.11,16,12,.035,I),new en({color:9589347,roughness:.8,transparent:!0,opacity:.8}));L.add(F),xi.add(L)}let yi=new Je;yi.scale.setScalar(1.16),a.add(yi);let ip=new Bn(.075,.4,4,10),sp=[new en({color:16738996,emissive:11869551,emissiveIntensity:.7,roughness:.3,metalness:.15,transparent:!0,opacity:.85}),new en({color:7600639,emissive:1478300,emissiveIntensity:.7,roughness:.28,metalness:.16,transparent:!0,opacity:.85})],Pa=[];for(let I=0;I<14;I+=1){let L=I/14*Jt+.12,F=new R((t()-.5)*.35,Math.cos(L)*1.28,Math.sin(L)*1.28);for(let oe of[-1,1]){let xe=new Je,Ae=sp[oe>0?0:1];for(let st=0;st<2;st+=1){let lt=new Re(ip,Ae);lt.rotation.z=(st===0?1:-1)*.58,lt.position.set(-oe*.13,(st===0?1:-1)*.2,0),lt.rotation.z=(st===0?-oe:oe)*.58,xe.add(lt)}let ze=new Re(new Tt(.065,10,8),new en({color:15128489,roughness:.65,transparent:!0,opacity:.9}));ze.name="kinetochore",xe.add(ze),xe.position.copy(F).add(new R(oe*.1,oe*.045,0)),yi.add(xe),Pa.push({group:xe,meta:xe.position.clone(),side:oe,phase:t()*Jt,baseScale:.82+t()*.35})}}let rp=new Float32Array(Pa.length*2*3),Ia=new ut;Ia.setAttribute("position",new Et(rp,3));let jh=new Ds({color:8648959,transparent:!0,opacity:.2,depthWrite:!1,blending:ct}),eu=new Ki(Ia,jh);eu.frustumCulled=!1,yi.add(eu);let ap=new tt({uniforms:{uTime:n,uOpacity:{value:.55},uColor:{value:new pe(8257520)},uColorB:{value:new pe(16738996)},uPower:{value:2.1}},vertexShader:Qs,fragmentShader:js,transparent:!0,depthWrite:!1,blending:ct}),oc=[];for(let I of[-4.8,4.8]){let L=new Re(new Tt(.22,18,12),ap);L.position.set(I,0,0),yi.add(L),oc.push(L)}let op=new tt({uniforms:{uTime:n,uOpacity:{value:.28},uColor:{value:new pe(9075967)},uColorB:{value:new pe(7012317)},uPower:{value:2.3}},vertexShader:Qs,fragmentShader:js,transparent:!0,depthWrite:!1,side:on,blending:ct}),lc=[];for(let I of[-3.8,3.8]){let L=new Re(new Tt(.95,32,24),op);L.position.set(I,0,0),L.scale.setScalar(.01),yi.add(L),lc.push(L)}let tu=Bf();yi.add(tu),v("membrane",Ne),v("lipids",Te),v("proteins",Ze),v("particles",Ut),v("cytoskeleton",gt),v("nucleus",le),v("mitochondria",N),v("endomembrane",xi),v("mitosis",yi);let ae={time:0,chapter:0,chapterStart:0,paused:!1,brightness:.58,flash:1,yaw:0,yawTarget:0,pitch:0,pitchTarget:0,pointerX:0,pointerY:0,pointerTargetX:0,pointerTargetY:0,zoom:1,zoomTarget:1,distanceScale:1,dragging:!1,dragDistance:0,lastPointerX:0,lastPointerY:0},La=new R().fromArray(cn[0].camera.pos),Wi=new R().fromArray(cn[0].camera.target),lp=new R,nu=new R,Na=new R,hr=new R,Da=cn[0].camera.fov;for(let I of C.values())I.weight=Fh[I.name][ae.chapter],I.target=I.weight,E(I,I.weight);function iu(I,L=!1){let F=hn(I,0,cn.length-1);ae.chapter=F,ae.chapterStart=ae.time,ae.flash=1,ae.yawTarget=0,ae.pitchTarget=0,ae.zoomTarget=1,ae.pointerTargetX=0,ae.pointerTargetY=0,La.fromArray(cn[F].camera.pos),Wi.fromArray(cn[F].camera.target),Da=cn[F].camera.fov;for(let oe of C.values())oe.target=Fh[oe.name][F],L&&(oe.weight=oe.target,E(oe,oe.weight));L&&(h.position.copy(La),Na.copy(Wi),h.lookAt(Na),h.fov=Da,h.updateProjectionMatrix())}function cp(I){let L=1-Math.exp(-I*1.55);for(let F of C.values())Math.abs(F.target-F.weight)<6e-4||(F.weight+=(F.target-F.weight)*L,E(F,F.weight))}function su(I){let L=hn(Number(I)||.58,.3,1);ae.brightness=L,o.toneMappingExposure=.55+L*.5,p.strength=.1+L*.3}function hp(I){ae.yaw+=(ae.yawTarget-ae.yaw)*(1-Math.exp(-I*4)),ae.pitch+=(ae.pitchTarget-ae.pitch)*(1-Math.exp(-I*4)),ae.zoom+=(ae.zoomTarget-ae.zoom)*(1-Math.exp(-I*3.2)),ae.pointerX+=(ae.pointerTargetX-ae.pointerX)*(1-Math.exp(-I*2.5)),ae.pointerY+=(ae.pointerTargetY-ae.pointerY)*(1-Math.exp(-I*2.5));let L=La.distanceTo(Wi),F=hn(.95/h.aspect,1,2.4),oe=Math.max(1.4,L*hn(ae.zoom,.42,1.75)*ae.distanceScale*F),xe=lp.copy(Wi);hr.copy(La).sub(Wi),hr.normalize().multiplyScalar(oe),hr.applyAxisAngle(yx,ae.yaw),hr.applyAxisAngle(xx,ae.pitch),xe.copy(Wi).add(hr);let Ae=ae.dragging?0:hn((oe-5.5)/16,0,1);xe.x+=ae.pointerX*oe*.018*Ae+Math.sin(ae.time*.21)*.05,xe.y+=-ae.pointerY*oe*.013*Ae+Math.cos(ae.time*.17)*.04,h.position.lerp(xe,1-Math.exp(-I*1.5)),nu.copy(Wi),Na.lerp(nu,1-Math.exp(-I*1.6)),h.lookAt(Na),h.fov+=(Da-h.fov)*(1-Math.exp(-I*1.4)),h.updateProjectionMatrix()}function up(I){let L=1+Math.sin(ae.time*.64)*.002;_t.scale.setScalar(L),at.scale.setScalar(L)}function dp(I){x.intensity=6*C.get("nucleus").weight,ii.rotation.y+=I*.018,ii.rotation.x=Math.sin(ae.time*.09)*.12,ve.rotation.y+=I*.05,U.rotation.y-=I*.012,hs.forEach(({mesh:L,phase:F,speed:oe,dir:xe})=>{let Ae=((ae.time*oe+F)%1+1)%1;L.position.z=xe>0?-.62+Ae*1.24:.62-Ae*1.24,L.scale.setScalar(.7+Math.sin(Ae*Math.PI)*.5),L.material.opacity=(.32+Math.sin(Ae*Math.PI)*.6)*C.get("nucleus").weight})}function fp(){for(let I=0;I<ee.length;I+=1){let L=ee[I],F=(L.offset+ae.time*L.speed)%1;if(!Number.isFinite(F)||!L.samples||L.samples.length<2)continue;let oe=Math.max(0,Math.min(1,F))*(L.samples.length-1),xe=Math.floor(oe),Ae=Math.min(L.samples.length-1,xe+1),ze=oe-xe,st=L.samples[xe],lt=L.samples[Ae];$[I*3]=st.x+(lt.x-st.x)*ze+L.radial.x,$[I*3+1]=st.y+(lt.y-st.y)*ze+L.radial.y,$[I*3+2]=st.z+(lt.z-st.z)*ze+L.radial.z}ue.attributes.position.needsUpdate=!0}let Tn=new R;function pp(I){for(let L=0;L<it.length;L+=1){let F=it[L],oe=F.angle+ae.time*F.speed,xe=F.radius*(.82+Math.sin(ae.time*.4+F.angle)*.14);Ot[L*3]=F.center.x+Math.cos(oe)*xe,Ot[L*3+1]=F.center.y+F.y+Math.sin(oe*1.7)*.35,Ot[L*3+2]=F.center.z+Math.sin(oe)*xe}nn.attributes.position.needsUpdate=!0;for(let L=0;L<Lt.length;L+=1){let F=Lt[L],oe=((ae.time*F.speed+F.phase)%1+1)%1;Tn.set(F.x,F.y,.58-oe*.92).applyQuaternion(F.quaternion).add(F.anchor),ot[L*3]=Tn.x,ot[L*3+1]=Tn.y,ot[L*3+2]=Tn.z}Mt.attributes.position.needsUpdate=!0;for(let L=0;L<sc.length;L+=1){let F=sc[L],oe=((ae.time*F.speed+F.phase)%1+1)%1;Tn.copy(F.anchor).addScaledVector(F.dir,1.02-oe*.82).addScaledVector(F.tangent,Math.sin(oe*Jt+F.phase)*.12),Aa[L*3]=Tn.x,Aa[L*3+1]=Tn.y,Aa[L*3+2]=Tn.z}rc.attributes.position.needsUpdate=!0;for(let L=0;L<mn.length;L+=1){let F=mn[L];F.age+=I,F.age>F.life&&(F.age=0);let oe=hn(F.age/F.life,0,1);Tn.copy(F.origin).addScaledVector(F.dir,F.age*F.speed).addScaledVector(F.tangent,Math.sin(F.age*1.8+F.wobble)*.18),ht[L*3]=Tn.x,ht[L*3+1]=Tn.y,ht[L*3+2]=Tn.z,Rt[L]=oe}pt.attributes.position.needsUpdate=!0,pt.attributes.aLife.needsUpdate=!0,Le.forEach((L,F)=>{L.rotation.z=ae.time*(1.35+F*.08)}),ac.intensity=(5+Math.sin(ae.time*1.7)*1.2)*C.get("mitochondria").weight}function mp(){let I=ae.time;for(let L of Qh){let F=ha.euclideanModulo(L.offset+I*L.speed,1);if(!Number.isFinite(F))continue;let oe=L.route.getPoint(F);L.mesh.position.copy(oe);let xe=.3+.95*Math.sin(Math.PI*F);L.mesh.scale.setScalar(xe),L.mesh.rotation.y+=.008,L.mesh.rotation.x+=.004}Yh.uniforms.uTime.value=I}let ru=new R,Ua=new R;function gp(){if(ae.chapter!==6)return;let I=Math.max(0,ae.time-ae.chapterStart)%12,L=Kl(0,2.6,I),F=Kl(5.2,9.4,I),oe=Kl(7.4,10.8,I);tu.userData.update(Kl(8.2,11.8,I));let xe=Ia.attributes.position.array;for(let Ae=0;Ae<Pa.length;Ae+=1){let ze=Pa[Ae],st=ze.side*(3.45+.22*Math.sin(ze.phase));ru.set(st,ze.meta.y*.78,ze.meta.z*.78),ze.group.position.lerpVectors(ze.meta,ru,F),ze.group.position.y+=Math.sin(I*2+ze.phase)*.045,ze.group.position.z+=Math.cos(I*1.7+ze.phase)*.045;let lt=.28+.72*L;ze.group.scale.setScalar(lt*ze.baseScale),ze.group.rotation.z=Math.sin(ze.phase+F*1.8)*.34,Ua.set(ze.side*4.8,0,0),xe[Ae*6]=Ua.x,xe[Ae*6+1]=Ua.y,xe[Ae*6+2]=Ua.z,xe[Ae*6+3]=ze.group.position.x,xe[Ae*6+4]=ze.group.position.y,xe[Ae*6+5]=ze.group.position.z}Ia.attributes.position.needsUpdate=!0,jh.opacity=.07+.17*L;for(let Ae=0;Ae<lc.length;Ae+=1){let ze=.01+oe*(.92+Math.sin(ae.time*1.6+Ae)*.05);lc[Ae].scale.setScalar(ze)}oc[0].scale.setScalar(.85+Math.sin(ae.time*2.2)*.12),oc[1].scale.setScalar(.85+Math.cos(ae.time*2.1)*.12)}let cc=0,Fa=!1,au=!1,ou=performance.now();function lu(I){if(!(I.button!==void 0&&I.button!==0)&&(ae.dragging=!0,ae.dragDistance=0,ae.lastPointerX=I.clientX,ae.lastPointerY=I.clientY,ae.pointerTargetX=0,ae.pointerTargetY=0,o.domElement.setPointerCapture))try{o.domElement.setPointerCapture(I.pointerId)}catch{}}function cu(I){let L=i.getBoundingClientRect();if(L.width>0&&L.height>0&&(ae.pointerTargetX=hn((I.clientX-L.left)/L.width*2-1,-1,1),ae.pointerTargetY=hn((I.clientY-L.top)/L.height*2-1,-1,1)),!ae.dragging)return;let F=I.clientX-ae.lastPointerX,oe=I.clientY-ae.lastPointerY;ae.lastPointerX=I.clientX,ae.lastPointerY=I.clientY,ae.dragDistance+=Math.abs(F)+Math.abs(oe),!(ae.dragDistance<3)&&(ae.yawTarget=hn(ae.yawTarget+F*.0021,-.8,.8),ae.pitchTarget=hn(ae.pitchTarget+oe*.0016,-.22,.22))}function Oa(I){if(ae.dragging=!1,o.domElement.releasePointerCapture&&I.pointerId!==void 0)try{o.domElement.releasePointerCapture(I.pointerId)}catch{}}function hu(){ae.pointerTargetX=0,ae.pointerTargetY=0}function uu(I){I.preventDefault();let L=I.deltaMode===1?I.deltaY*16:I.deltaMode===2?I.deltaY*400:I.deltaY,F=hn(L*.0012,-.18,.18);ae.zoomTarget=hn(ae.zoomTarget*Math.exp(F),.42,1.75)}function du(I){I.preventDefault(),fu()}function fu(){ae.yawTarget=0,ae.pitchTarget=0,ae.zoomTarget=1,ae.pointerTargetX=0,ae.pointerTargetY=0}o.domElement.addEventListener("pointerdown",lu),o.domElement.addEventListener("pointermove",cu),o.domElement.addEventListener("pointerup",Oa),o.domElement.addEventListener("pointercancel",Oa),o.domElement.addEventListener("pointerleave",hu),o.domElement.addEventListener("wheel",uu,{passive:!1}),o.domElement.addEventListener("dblclick",du);function ur(){if(Fa)return;let I=Math.max(1,i.clientWidth),L=Math.max(1,i.clientHeight),F=Math.min(window.devicePixelRatio||1,1.5);o.setPixelRatio(F),o.setSize(I,L,!0),d.setPixelRatio(F),d.setSize(I,L),h.aspect=I/L,h.aspect<.85?h.setViewOffset(I,L,0,L*.18,I,L):h.clearViewOffset(),h.updateProjectionMatrix(),s.value=F,_.uniforms.uResolution.value.set(I*F,L*F)}let Ba=typeof ResizeObserver<"u"?new ResizeObserver(ur):null;Ba&&Ba.observe(i),window.addEventListener("resize",ur);function pu(){requestAnimationFrame(ur)}document.addEventListener("fullscreenchange",pu),ur();function mu(I){if(Fa||(cc=requestAnimationFrame(mu),au))return;let L=hn((I-ou)/1e3,0,.05);ou=I;let F=ae.paused?.14:1;ae.time+=L*F,n.value=ae.time,_.uniforms.uTime.value=ae.time,ae.flash=Math.max(0,ae.flash-L*1.8),_.uniforms.uFlash.value=ae.flash*.45,_.uniforms.uGrain.value=ae.paused?.016:.022,ae.paused||(a.rotation.y+=L*.013,P.rotation.y+=L*.0035,te.rotation.y+=L*.006,Y.rotation.y+=L*.002),cp(L),hp(L),up(L),dp(L),fp(),pp(L*F),mp(),gp();try{d.render()}catch(oe){au=!0,typeof e.onError=="function"&&e.onError(oe);return}e.didRender||(e.didRender=!0,typeof e.onReady=="function"&&e.onReady())}iu(0,!0),su(ae.brightness),h.aspect=Math.max(1,i.clientWidth)/Math.max(1,i.clientHeight),h.fov=Da,h.updateProjectionMatrix(),_.uniforms.uResolution.value.set(Math.max(1,i.clientWidth)*l,Math.max(1,i.clientHeight)*l),cc=requestAnimationFrame(mu);function _p(){if(Fa)return;Fa=!0,cancelAnimationFrame(cc),o.domElement.removeEventListener("pointerdown",lu),o.domElement.removeEventListener("pointermove",cu),o.domElement.removeEventListener("pointerup",Oa),o.domElement.removeEventListener("pointercancel",Oa),o.domElement.removeEventListener("pointerleave",hu),o.domElement.removeEventListener("wheel",uu),o.domElement.removeEventListener("dblclick",du),window.removeEventListener("resize",ur),document.removeEventListener("fullscreenchange",pu),Ba&&Ba.disconnect();let I=new Set,L=new Set;c.traverse(F=>{if(F.geometry&&I.add(F.geometry),F.material){let oe=Array.isArray(F.material)?F.material:[F.material];for(let xe of oe)xe&&L.add(xe)}});for(let F of I)try{F.dispose()}catch{}for(let F of L)try{F.map&&F.map.dispose(),F.dispose()}catch{}m&&m.dispose();try{p.dispose()}catch{}try{d.dispose()}catch{}o.dispose();try{o.forceContextLoss()}catch{}o.domElement.parentNode===i&&i.removeChild(o.domElement)}return{setChapter(I){iu(I,!1)},setPaused(I){ae.paused=!!I},setBrightness(I){su(I)},setDistanceScale(I){ae.distanceScale=hn(Number(I)||1,.6,3)},resetView(){fu()},pulse(){ae.flash=Math.min(1.6,ae.flash+.9)},getChapter(){return ae.chapter},dispose:_p,renderer:o,scene:c}}var va=cn.length,bx={close:'<path d="M6 6 18 18M18 6 6 18"/>',prev:'<path d="m14.5 6-6 6 6 6"/><path d="M6.5 6v12" opacity=".4"/>',next:'<path d="m9.5 6 6 6-6 6"/><path d="M17.5 6v12" opacity=".4"/>',play:'<path d="M8.5 5.8 18 12l-9.5 6.2Z" fill="currentColor" stroke="none"/>',pause:'<path d="M8.5 6v12M15.5 6v12"/>',book:'<path d="M4 5.2c2.7-.9 5.3-.9 8 1.1v13c-2.7-2-5.3-2-8-1.1Z"/><path d="M20 5.2c-2.7-.9-5.3-.9-8 1.1v13c2.7-2 5.3-2 8-1.1Z"/><path d="M12 6.3v13" opacity=".5"/>',sun:'<circle cx="12" cy="12" r="3.6"/><path d="M12 3.2v2.1M12 18.7v2.1M3.2 12h2.1M18.7 12h2.1M5.8 5.8l1.5 1.5M16.7 16.7l1.5 1.5M18.2 5.8l-1.5 1.5M7.3 16.7l-1.5 1.5"/>',reset:'<circle cx="12" cy="12" r="3.2"/><path d="M12 3v3.4M12 17.6V21M3 12h3.4M17.6 12H21"/><path d="M6.2 6.2a8.2 8.2 0 0 1 11.6 0" opacity=".45"/>',expand:'<path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"/>',collapse:'<path d="M4 9h5V4M20 9h-5V4M4 15h5v5M20 15h-5v5"/>',arrow:'<path d="M4 12h15M13 6l6 6-6 6"/>',plus:'<path d="M12 6v12M6 12h12"/>',minus:'<path d="M6 12h12"/>'};function Dt(i,e=18){return`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${bx[i]||""}</svg>`}var Ex=`
<svg class="brand-mark-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
  <circle cx="32" cy="32" r="25" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="1.5 4"/>
  <circle cx="32" cy="32" r="19" stroke="currentColor" stroke-opacity=".6" stroke-width="1.1"/>
  <ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(-28 32 32)" stroke="#7ff7e4" stroke-opacity=".7" stroke-width="1.1"/>
  <path d="M17 41c6-3 10-9 15-10 6-1 9 5 16 3" stroke="currentColor" stroke-opacity=".4" stroke-width="1.1" stroke-linecap="round"/>
  <circle cx="32" cy="32" r="7.4" fill="#7ff7e4" fill-opacity=".16" stroke="#7ff7e4"/>
  <circle cx="32" cy="32" r="2.5" fill="#7ff7e4"/>
  <circle cx="45" cy="26" r="1.6" fill="#ff9fc9"/><circle cx="21" cy="37" r="1.2" fill="#ffd08a"/>
</svg>`,Wf=document.getElementById("app");Wf.innerHTML=`
  <div id="stage" class="stage"></div>
  <div class="loading" id="loading"><span class="loading-dot"></span> CALIBRATING OPTICAL FIELD <span class="loading-line"><i></i></span></div>
  <div class="grain"></div><div class="scanlines"></div><div class="vignette"></div>
  <div class="frame" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
  <div class="reticle" aria-hidden="true"></div>
  <div class="hud">
    <header class="hud-head">
      <div class="brand">${Ex}<div><div class="wordmark">CELL <b>ATLAS</b></div><div class="brand-cn">\u7EC6\u80DE\u56FE\u8C31 \xB7 \u4E00\u6B21\u5173\u4E8E\u8FB9\u754C\u7684\u6F2B\u6E38</div></div></div>
      <div class="top-readout"><span class="live-dot"></span><span>LIVE SPECIMEN</span><span class="slash">/</span><span id="readout">WHOLE CELL</span></div>
      <div class="hud-right">
        <a class="book-link" href="./textbook.html" aria-label="\u6253\u5F00\u5168\u4E66\u5206\u8282" title="\u5168\u4E66\u5206\u8282 \xB7 16\u7AE044\u8282">${Dt("book",15)}</a>
        <button class="study-btn" id="studyBtn" aria-expanded="false" title="\u5B66\u4E60\u624B\u518C \xB7 T">${Dt("book",15)}<span>\u5B66\u4E60\u624B\u518C</span></button>
        <div class="counter"><b id="chapterNo">01</b><span>/ ${String(va).padStart(2,"0")}</span></div>
        <button class="icon-btn" id="fullBtn" aria-label="\u5168\u5C4F" title="\u5168\u5C4F">${Dt("expand")}</button>
      </div>
    </header>
    <main class="main">
      <div class="stage-readout" id="stageReadout">WHOLE CELL / OPTICAL DARKFIELD</div>
      <article class="caption" id="caption">
        <div class="kicker"><span class="kicker-line"></span><span id="kicker">PROLOGUE / \u5E8F\u7AE0</span></div>
        <h1 id="title">\u7EC6\u80DE\uFF0C\u662F\u4E00\u4E2A\u5B87\u5B99</h1>
        <div class="en" id="en">THE CELL AS A MICROCOSM</div>
        <button class="textbook" id="textbookChip">
          <span class="textbook-icon">${Dt("book",18)}</span>
          <span class="textbook-copy"><b>\u5B66\u4E60\u624B\u518C</b><em id="textbookLabel">\u6559\u6750\u5BF9\u7167 \xB7 \u7B2C\u4E00\u7AE0 \u7EEA\u8BBA \xB7 pp.1\u201317</em><i>\u5B66\u4E60\u76EE\u6807 / \u673A\u5236\u62C6\u89E3 / \u81EA\u6D4B</i></span>
          <span class="key">T</span>${Dt("arrow",14)}
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
          ${Dt("sun",13)}
          <input id="lum" type="range" min="30" max="100" step="1" value="44" aria-label="\u4EAE\u5EA6" />
          <span id="lumValue">44</span>
        </label>
        <button class="ctrl" id="resetBtn" aria-label="\u91CD\u7F6E\u89C6\u89D2" title="\u91CD\u7F6E\u89C6\u89D2\uFF08R\uFF09">${Dt("reset")}</button>
        <button class="ctrl" id="prevBtn" aria-label="\u4E0A\u4E00\u7AE0" title="\u4E0A\u4E00\u7AE0">${Dt("prev")}</button>
        <button class="ctrl ctrl-primary" id="playBtn" aria-label="\u6682\u505C" title="\u6682\u505C">${Dt("pause")}</button>
        <button class="ctrl" id="nextBtn" aria-label="\u4E0B\u4E00\u7AE0" title="\u4E0B\u4E00\u7AE0">${Dt("next")}</button>
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
          <button class="enter" id="guideNext"><span>\u5148\u770B\u4F7F\u7528\u8BF4\u660E</span>${Dt("arrow",15)}</button>
          <span class="intro-count">01 / 04</span>
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
              <div><b>\u72EC\u7ACB\u7AD9\u4E0E\u63D2\u4EF6\u5747\u6709\u4E24\u8282\u4E92\u52A8\u5BFC\u5B66</b><p>\u6253\u5F00 3D \u6A21\u578B\u9875\uFF0C\u9009\u62E9\u300C\u8DE8\u819C\u8FD0\u8F93\u300D\u6216\u300CFRAP \u8367\u5149\u6F02\u767D\u6062\u590D\u300D\u2192\u300C\u8FDB\u5165\u5BFC\u5B66\u300D\uFF1A\u70B9\u51FB\u7ED3\u6784 \u2192 \u89C2\u5BDF\u8FC7\u7A0B \u2192 \u9884\u6D4B\u5E76\u505A\u5B9E\u9A8C \u2192 \u8FA8\u8BA4\u3001\u6392\u5E8F\u548C\u5206\u6790\u3002\u7B2C\u4E00\u8BFE\u89C2\u5BDF\u6CF5\u5FAA\u73AF\uFF0C\u7B2C\u4E8C\u8BFE\u6BD4\u8F83\u819C\u5206\u5B50\u4EA4\u6362\u7684\u6062\u590D\u66F2\u7EBF\u3002\u63D2\u4EF6\u5185\u4ECE\u5BF9\u5E94\u6A21\u578B\u70B9\u300C\u8FDB\u5165 / \u7EE7\u7EED\u4E92\u52A8\u8BFE\u300D\uFF0C\u65E0\u9700\u8DF3\u8F6C\u7F51\u7AD9\u3002\u624B\u673A\u7AEF\u70B9\u300C\u770B\u6A21\u578B\u300D\u53EF\u6536\u8D77\u9762\u677F\u540E\u76F4\u63A5\u70B9\u7ED3\u6784\u3002\u6253\u5F00\u624B\u518C\u3001\u5168\u4E66\u6216 3D \u6A21\u578B\u65F6\uFF0C\u81EA\u52A8\u6F2B\u6E38\u4ECD\u4F1A\u6682\u505C\u3002</p></div>
            </div>
          </div>
        </div>
        <div class="intro-actions">
          <button class="intro-secondary" id="guideBack">\u2190 \u8FD4\u56DE</button>
          <button class="enter" id="guideNextTwo"><span>\u4E0B\u4E00\u6B65\uFF1A\u65B0\u7248\u4F7F\u7528\u8BF4\u660E</span>${Dt("arrow",15)}</button>
          <span class="intro-count">02 / 04</span>
        </div>
      </div>

      <div class="intro-step intro-guide intro-lesson" id="introStepThree" hidden>
        <div class="intro-eyebrow">COMPLETE GUIDE / \u65B0\u7248\u5B8C\u6574\u5BFC\u5F15</div>
        <h2 class="guide-title">\u56DB\u4E2A\u9636\u6BB5\uFF0C\u8D70\u5B8C\u624D\u7B97\u7ED3\u8BFE</h2>
        <div class="lesson-guide-grid">
          <div class="lesson-stage-list">
            <div class="lesson-stage"><span>01</span><div><b>\u8BA4\u8BC6\u7ED3\u6784</b><p>\u6BCF\u8282\u8BFE\u5404\u6709\u56DB\u4E2A\u7ED3\u6784\uFF1A\u8DE8\u819C\u8FD0\u8F93\u770B\u819C\u3001\u901A\u9053\u3001\u6CF5\u3001ATP\uFF1BFRAP \u770B\u819C\u9762\u3001\u8367\u5149\u6807\u8BB0\u3001\u6F02\u767D\u533A\u548C\u66F2\u7EBF\u3002</p></div></div>
            <div class="lesson-stage"><span>02</span><div><b>\u89C2\u5BDF\u673A\u5236</b><p>\u53EF\u9009\u6B63\u5E38 / \u6162\u901F\u6216\u9010\u6B65\u770B\u3002\u8DE8\u819C\u8FD0\u8F93\u6709 5 \u6B65\uFF0CFRAP \u6709 4 \u6B65\uFF1B\u90FD\u770B\u8FC7\u624D\u80FD\u7EE7\u7EED\u3002</p></div></div>
            <div class="lesson-stage"><span>03</span><div><b>\u52A8\u624B\u63A2\u7D22</b><p>\u5148\u9884\u6D4B\u518D\u8FD0\u884C\uFF0C\u8BB0\u5F55\u53EF\u5BF9\u7167\u3001\u590D\u7528\u6761\u4EF6\uFF0C\u6CF5\u6309\u901F\u7387\u533A\u95F4\u6F14\u793A\uFF1B\u53EA\u6709\u76EE\u6807\u5B9E\u9A8C\u8BA1\u5B8C\u6210\u3002\u51CF\u5C11\u52A8\u6001\u6548\u679C\u5F00\u542F\u65F6\u663E\u793A\u9759\u6001\u793A\u610F\u3002</p></div></div>
            <div class="lesson-stage"><span>04</span><div><b>\u573A\u666F\u7EC3\u4E60</b><p>\u8FA8\u8BA4\u3001\u6392\u5E8F\u3001\u7ED3\u679C\u5206\u6790\u4E09\u9053\u90FD\u6B63\u786E\uFF0C\u624D\u80FD\u7ED3\u8BFE\u3002</p></div></div>
          </div>
          <div class="lesson-rules">
            <div class="lesson-target">
              <b>\u76EE\u6807\u5B9E\u9A8C \xB7 \u6309\u8BFE\u7A0B\u5206\u522B\u5B8C\u6210</b>
              <p>\u8DE8\u819C\u8FD0\u8F93\uFF1AATP 0%\u3001\u68AF\u5EA6 60%\u3001\u65E0\u6291\u5236\u5242\u3002</p><p>FRAP\uFF1A\u53EF\u79FB\u52A8\u6BD4\u4F8B 40%\u3001\u76F8\u5BF9\u4EA4\u6362\u901F\u5EA6 100%\u3002</p>
              <p>\u53EA\u8FD0\u884C\u8FD9\u4E2A\u6761\u4EF6\u624D\u4F1A\u89E3\u9501\u4E0B\u4E00\u6B65\uFF1B\u5176\u5B83\u7EC4\u5408\u663E\u793A\u201C\u81EA\u7531\u63A2\u7D22\u7ED3\u679C\u201D\uFF0C\u4E0D\u8BA1\u5B8C\u6210\u3002</p>
            </div>
            <div class="lesson-rule"><b>\u53EF\u4EE5\u81EA\u7531\u56DE\u770B</b><p>\u56DB\u4E2A\u9636\u6BB5\u53EF\u968F\u65F6\u5207\u6362\uFF0C\u4F46\u6700\u7EC8\u7ED3\u8BFE\u8981\u6C42\u6BCF\u4E2A\u9636\u6BB5\u90FD\u6709\u5F53\u524D\u6709\u6548\u8BC1\u636E\u3002</p></div>
            <div class="lesson-rule"><b>\u6539\u6761\u4EF6 = \u91CD\u8DD1</b><p>\u6539\u4EFB\u4F55\u5B9E\u9A8C\u6761\u4EF6\u540E\uFF0C\u65E7\u7ED3\u679C\u5931\u6548\uFF0C\u5FC5\u987B\u91CD\u65B0\u8FD0\u884C\u3002</p></div>
            <div class="lesson-rule"><b>\u5B8C\u6210\u540E\u590D\u4E60</b><p>\u5168\u90E8\u9636\u6BB5\u5B8C\u6210\u540E\u8FDB\u5165\u590D\u4E60\uFF0C\u53EF\u91CD\u65B0\u56DE\u770B\uFF1B\u300C\u91CD\u65B0\u5B66\u4E60\u300D\u4F1A\u5F00\u59CB\u65B0\u4E00\u8F6E\u3002</p></div>
            <div class="lesson-rule"><b>\u91CD\u65B0\u5B66\u4E60\u4E0E\u624B\u673A</b><p>\u4E24\u8BFE\u8FDB\u5EA6\u5206\u522B\u4FDD\u5B58\uFF0C\u5237\u65B0\u540E\u53EF\u7EE7\u7EED\uFF1B\u91CD\u5B66\u4FDD\u7559\u5386\u53F2\uFF0C\u4F7F\u7528\u8BF4\u660E\u5185\u53EF\u6E05\u9664\u672C\u8BFE\u8BB0\u5F55\uFF1B\u624B\u673A\u70B9\u300C\u770B\u6A21\u578B\u300D\u6536\u8D77\u9762\u677F\u540E\u76F4\u63A5\u70B9\u7ED3\u6784\u3002</p></div>
            <div class="lesson-rule"><b>\u5B8C\u6210\u5224\u5B9A</b><p>\u672C\u7248\u6CA1\u6709 AI \u81EA\u52A8\u6279\u6539\uFF1B\u662F\u5426\u5B8C\u6210\u7531\u8BFE\u7A0B\u5F15\u64CE\u6309\u4E0A\u8FF0\u8BC1\u636E\u5224\u65AD\u3002</p></div>
          </div>
        </div>
        <a class="guide-detail-link" href="./guide.html">\u6253\u5F00\u72EC\u7ACB\u5B8C\u6574\u8BF4\u660E\u9875 \u2192</a>
        <div class="intro-actions">
          <button class="intro-secondary" id="guideBackTwo">\u2190 \u8FD4\u56DE</button>
          <button class="enter" id="guideNextThree"><span>\u4E0B\u4E00\u6B65\uFF1A\u5168\u4E66\u4E0E\u64CD\u4F5C</span>${Dt("arrow",15)}</button>
          <span class="intro-count">03 / 04</span>
        </div>
      </div>

      <div class="intro-step intro-guide intro-controls" id="introStepFour" hidden>
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
              <div><b>\u6A21\u578B\u540D\u5B57\u5C31\u662F\u5165\u53E3</b><p>\u7AE0\u8282\u9876\u90E8\u548C\u6BCF\u4E2A\u5C0F\u8282\u4F1A\u663E\u793A 3D \u6A21\u578B\u540D\u79F0\uFF08\u7ED3\u6784 + \u5B9E\u9A8C\u65B9\u6CD5\uFF09\u3002\u70B9\u51FB\u540D\u79F0\u76F4\u63A5\u89C2\u5BDF\uFF0C\u5173\u95ED\u540E\u56DE\u5230\u8BE5\u5C0F\u8282\uFF1B\u8DE8\u819C\u8FD0\u8F93\u548C FRAP \u6A21\u578B\u90FD\u5E26\u300C\u5BFC\u5B66\u300D\u5165\u53E3\u3002</p></div>
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
          <button class="intro-secondary" id="guideBackThree">\u2190 \u8FD4\u56DE</button>
          <button class="enter" id="enterBtn"><span>\u8FDB\u5165\u7EC6\u80DE</span>${Dt("arrow",15)}</button>
          <span class="intro-count">04 / 04</span>
        </div>
      </div>
    </div>
    <div class="intro-skip">\u6309 T \u5B66\u4E60\u624B\u518C \xB7 B \u5168\u4E66\u5206\u8282 \xB7 \u62D6\u52A8\u65CB\u8F6C \xB7 \u6A21\u578B\u9875\u53EF\u8FDB\u5BFC\u5B66</div>
  </section>
  <div class="study-backdrop" id="studyBackdrop" hidden>
    <section class="study-panel" id="studyPanel" role="dialog" aria-modal="true" aria-labelledby="studyTitle" tabindex="-1">
      <header class="study-head">
        <div><div class="study-eyebrow">STUDY NOTES / \u5B66\u4E60\u624B\u518C</div><h2 id="studyTitle"></h2><div class="study-meta" id="studyMeta"></div></div>
        <button class="icon-btn" id="studyClose" aria-label="\u5173\u95ED\u5B66\u4E60\u624B\u518C">${Dt("close")}</button>
      </header>
      <div class="study-scroll" id="studyScroll"></div>
    </section>
  </div>
  <div class="error" id="error" hidden><div class="error-card"><div class="error-no">ERR / WEBGL</div><h2>\u5149\u5B66\u573A\u672A\u80FD\u542F\u52A8</h2><p id="errorText">\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u521B\u5EFA WebGL \u4E0A\u4E0B\u6587\u3002\u8BF7\u4F7F\u7528\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u7684\u73B0\u4EE3\u6D4F\u89C8\u5668\u3002</p><button class="enter" id="errorReload">\u91CD\u65B0\u52A0\u8F7D</button></div></div>
`;var Pe=i=>document.getElementById(i),Tx=Pe("stage"),Vh=Pe("caption"),wx=Pe("rail"),Ax=Pe("timeline"),_n=null,It=0,_i=!0,jl=!0,ls=!1,_a=0,er=cn[0].duration,kf=performance.now(),ki=44,Gh=new URLSearchParams(location.search).get("chapter"),Rx=Gh!==null&&Gh!=="",Ql=Number(Gh),Xf=Rx&&Number.isInteger(Ql)&&Ql>=0&&Ql<va,Cx=cn.map((i,e)=>{let t=document.createElement("button");return t.type="button",t.className="rail-btn",t.dataset.index=String(e),t.innerHTML=`<span class="rail-title">${i.short}</span><span class="rail-line"></span><span class="rail-no">${i.no}</span>`,t.setAttribute("aria-label",`${i.no} ${i.short}`),t.addEventListener("click",()=>cs(e)),wx.appendChild(t),t}),Wh=cn.map((i,e)=>{let t=document.createElement("button");return t.type="button",t.className="seg",t.innerHTML=`<span class="seg-track"><i></i></span><span class="seg-label">${i.no}</span>`,t.setAttribute("aria-label",`${i.no} ${i.short}`),t.addEventListener("click",()=>cs(e)),Ax.appendChild(t),t});function Px(){Pe("loading").classList.add("is-hidden")}function Vf(i){Pe("error").hidden=!1,Pe("errorText").textContent=String(i&&i.message?i.message:i).slice(0,500),Pe("loading").classList.add("is-hidden")}try{_n=Hf(Tx,{onReady:Px,onError:Vf});let i=Number(localStorage.getItem("cell-atlas.demo.brightness"));ki=Number.isFinite(i)&&i>=30&&i<=100?i:44,Pe("lum").value=String(ki),Pe("lumValue").textContent=String(ki),_n.setBrightness(ki/100)}catch(i){Vf(i)}Xf&&(It=Ql,er=cn[It].duration,_n&&_n.setChapter(It));function tc(i){return cn[i]}function qf(){let i=tc(It),e=i.study;document.documentElement.style.setProperty("--accent",i.accent),Pe("chapterNo").textContent=i.no,Pe("kicker").textContent=`${i.kicker} / ${i.cnKicker}`,Pe("title").textContent=i.title,Pe("en").textContent=i.en,Pe("body").textContent=i.body,Pe("readout").textContent=i.readout,Pe("stageReadout").textContent=i.readout,Pe("textbookLabel").textContent=`\u6559\u6750\u5BF9\u7167 \xB7 ${e.textbook.chapter} ${e.textbook.title} \xB7 pp.${e.textbook.pages}`,Pe("facts").innerHTML=i.facts.map(t=>`<div class="fact"><span class="fact-k">${t.k}</span><span class="fact-v">${t.v}</span></div>`).join(""),Cx.forEach((t,n)=>{t.classList.toggle("is-active",n===It),n===It?t.setAttribute("aria-current","step"):t.removeAttribute("aria-current")}),Wh.forEach((t,n)=>{t.classList.toggle("is-active",n===It);let s=t.querySelector(".seg-track i");s.style.transform=n<It?"scaleX(1)":n===It?`scaleX(${_a})`:"scaleX(0)"}),Pe("prevBtn").disabled=It===0,Pe("nextBtn").disabled=It===va-1,ls&&Yf(),Vh.style.animation="none",Vh.offsetWidth,Vh.style.animation=""}function Gf(){let i=Wh[It]&&Wh[It].querySelector(".seg-track i");i&&(i.style.transform=`scaleX(${_a})`)}function tr(i){_i=i,Pe("autoLabel").textContent=_i?"\u81EA\u52A8\u6F2B\u6E38":"\u5DF2\u6682\u505C",Pe("autoDot").classList.toggle("is-live",_i),Pe("playBtn").innerHTML=Dt(_i?"pause":"play"),Pe("playBtn").setAttribute("aria-label",_i?"\u6682\u505C":"\u64AD\u653E"),Pe("playBtn").title=_i?"\u6682\u505C":"\u64AD\u653E"}function cs(i){It=Math.max(0,Math.min(va-1,i)),_a=0,er=tc(It).duration,_n&&_n.setChapter(It),qf()}function Xh(){cn[It].study&&(ls=!0,tr(!1),Yf(),Pe("studyBackdrop").hidden=!1,Pe("studyBtn").setAttribute("aria-expanded","true"),requestAnimationFrame(()=>Pe("studyPanel").focus()))}function ec(){ls=!1,Pe("studyBackdrop").hidden=!0,Pe("studyBtn").setAttribute("aria-expanded","false")}function Yf(){let e=tc(It).study;Pe("studyTitle").textContent=`${e.textbook.chapter} \xB7 ${e.textbook.title}`,Pe("studyMeta").textContent=`\u4E01\u660E\u5B5D \u7B49\u300A\u7EC6\u80DE\u751F\u7269\u5B66\u300B\u7B2C 5 \u7248 \xB7 \u9AD8\u7B49\u6559\u80B2\u51FA\u7248\u793E \xB7 pp.${e.textbook.pages}`,Pe("studyScroll").innerHTML=`
    <a class="study-book-cta" href="./textbook.html">
      <span class="study-book-cta-icon">${Dt("book",18)}</span>
      <span class="study-book-cta-copy"><b>\u5168\u4E66\u5206\u8282\u5B66\u4E60</b><em>16 \u7AE0 \xB7 44 \u8282 \xB7 \u6309\u8282\u7CBE\u8BFB + \u81EA\u6D4B</em></span>
      <span class="study-book-cta-key">B</span>${Dt("arrow",14)}
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
      <div class="quiz-list">${e.quiz.map((t,n)=>`<div class="quiz" data-quiz="${n}"><button type="button" class="quiz-q" data-quiz-toggle="${n}" aria-expanded="false"><span>Q${String(n+1).padStart(2,"0")}</span><b>${t.q}</b>${Dt("plus",15)}</button><div class="quiz-a" hidden><span>\u7B54\u6848</span><p>${t.a}</p></div></div>`).join("")}</div>
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
  `,Pe("studyScroll").querySelectorAll("[data-quiz-toggle]").forEach(t=>{t.addEventListener("click",()=>{let s=t.closest(".quiz").querySelector(".quiz-a"),r=s.hidden;s.hidden=!r,t.setAttribute("aria-expanded",String(r));let a=t.querySelector("svg");a&&(a.outerHTML=Dt(r?"minus":"plus",15))})})}Pe("studyBtn").addEventListener("click",Xh);Pe("textbookChip").addEventListener("click",Xh);Pe("studyClose").addEventListener("click",ec);Pe("studyBackdrop").addEventListener("mousedown",i=>{i.target===i.currentTarget&&ec()});Pe("prevBtn").addEventListener("click",()=>cs(It-1));Pe("nextBtn").addEventListener("click",()=>cs(It+1));Pe("playBtn").addEventListener("click",()=>tr(!_i));Pe("resetBtn").addEventListener("click",()=>_n&&_n.resetView());Pe("lum").addEventListener("input",i=>{ki=Number(i.target.value),Pe("lumValue").textContent=String(ki),_n&&_n.setBrightness(ki/100);try{localStorage.setItem("cell-atlas.demo.brightness",String(ki))}catch{}});Pe("errorReload").addEventListener("click",()=>window.location.reload());Pe("guideNext").addEventListener("click",()=>nr(1));Pe("guideNextTwo").addEventListener("click",()=>nr(2));Pe("guideNextThree").addEventListener("click",()=>nr(3));Pe("guideBack").addEventListener("click",()=>nr(0));Pe("guideBackTwo").addEventListener("click",()=>nr(1));Pe("guideBackThree").addEventListener("click",()=>nr(2));Pe("enterBtn").addEventListener("click",i=>{i.stopPropagation(),Zf()});Pe("fullBtn").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):Wf.requestFullscreen?.().catch(()=>{})});document.addEventListener("fullscreenchange",()=>{Pe("fullBtn").innerHTML=document.fullscreenElement?Dt("collapse"):Dt("expand")});function nr(i){let e=Pe("introStepOne"),t=Pe("introStepTwo"),n=Pe("introStepThree"),s=Pe("introStepFour");!e||!t||!n||!s||(e.hidden=i!==0,t.hidden=i!==1,n.hidden=i!==2,s.hidden=i!==3)}function Zf(){jl&&(jl=!1,Pe("intro").classList.add("is-out"),setTimeout(()=>{Pe("intro").hidden=!0},650),_n&&_n.pulse(),tr(!0))}setTimeout(()=>{Xf&&jl&&Zf()},350);document.addEventListener("keydown",i=>{let e=i.target&&i.target.tagName;if(!(e==="INPUT"||e==="TEXTAREA"||i.target&&i.target.isContentEditable)){if(i.key==="Escape"){ls&&ec();return}if(i.key.toLowerCase()==="t"){i.preventDefault(),ls?ec():Xh();return}ls||e==="BUTTON"||e==="A"||(i.key==="ArrowRight"?cs(It+1):i.key==="ArrowLeft"?cs(It-1):i.key===" "?(i.preventDefault(),tr(!_i)):i.key.toLowerCase()==="f"?(i.preventDefault(),Pe("fullBtn").click()):i.key.toLowerCase()==="r"&&_n&&_n.resetView())}});function $f(i){let e=Math.min(80,i-kf);if(kf=i,_i&&!ls&&!jl&&Pe("error").hidden){er-=e;let t=tc(It).duration;_a=Math.max(0,Math.min(1,1-er/t)),Gf(),er<=0&&(It<va-1?cs(It+1):(er=0,_a=1,Gf(),tr(!1)))}requestAnimationFrame($f)}qf();tr(!0);requestAnimationFrame($f);})();
