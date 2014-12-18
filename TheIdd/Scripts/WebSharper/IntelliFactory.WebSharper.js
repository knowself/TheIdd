(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Arrays,Operators,Number,IntrinsicFunctionProxy,Array,Seq,Unchecked,Enumerator,Arrays2D,Concurrency,AggregateException,Option,clearTimeout,setTimeout,CancellationTokenSource,Char,Util,Lazy,Error,Date,JavaScript,Scheduler,T,Json,List,T1,Math,Strings,PrintfHelpers,Remoting,XhrProvider,AsyncProxy,JSON,Enumerable,String,RegExp;
 Runtime.Define(Global,{
  IntelliFactory:{
   WebSharper:{
    AggregateException:Runtime.Class({},{
     New:function($innerExceptions)
     {
      var $0=this,$this=this;
      return Global.e=new Global.Error("AggregateException"),Global.e.InnerExceptions=$innerExceptions,Global.e;
     }
    }),
    Arrays:{
     Find:function(f,arr)
     {
      var matchValue,_,x;
      matchValue=Arrays.tryFind(f,arr);
      if(matchValue.$==0)
       {
        _=Operators.FailWith("KeyNotFoundException");
       }
      else
       {
        x=matchValue.$0;
        _=x;
       }
      return _;
     },
     FindIndex:function(f,arr)
     {
      var matchValue,_,x;
      matchValue=Arrays.tryFindIndex(f,arr);
      if(matchValue.$==0)
       {
        _=Operators.FailWith("KeyNotFoundException");
       }
      else
       {
        x=matchValue.$0;
        _=x;
       }
      return _;
     },
     Pick:function(f,arr)
     {
      var matchValue,_,x;
      matchValue=Arrays.tryPick(f,arr);
      if(matchValue.$==0)
       {
        _=Operators.FailWith("KeyNotFoundException");
       }
      else
       {
        x=matchValue.$0;
        _=x;
       }
      return _;
     },
     average:function(arr)
     {
      return Number(Arrays.sum(arr))/Number(IntrinsicFunctionProxy.GetLength(arr));
     },
     averageBy:function(f,arr)
     {
      return Number(Arrays.sumBy(f,arr))/Number(IntrinsicFunctionProxy.GetLength(arr));
     },
     blit:function(arr1,start1,arr2,start2,length)
     {
      var i;
      Arrays.checkRange(arr1,start1,length);
      Arrays.checkRange(arr2,start2,length);
      for(i=0;i<=length-1;i++){
       IntrinsicFunctionProxy.SetArray(arr2,start2+i,IntrinsicFunctionProxy.GetArray(arr1,start1+i));
      }
      return;
     },
     checkLength:function(arr1,arr2)
     {
      return IntrinsicFunctionProxy.GetLength(arr1)!==IntrinsicFunctionProxy.GetLength(arr2)?Operators.FailWith("Arrays differ in length."):null;
     },
     checkRange:function(arr,start,size)
     {
      return((size<0?true:start<0)?true:IntrinsicFunctionProxy.GetLength(arr)<start+size)?Operators.FailWith("Index was outside the bounds of the array."):null;
     },
     choose:function(f,arr)
     {
      var q,i,matchValue,_,x;
      q=[];
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr)-1;i++){
       matchValue=f(IntrinsicFunctionProxy.GetArray(arr,i));
       if(matchValue.$==0)
        {
         _=null;
        }
       else
        {
         x=matchValue.$0;
         _=q.push(x);
        }
      }
      return q;
     },
     collect:function(f,x)
     {
      return Array.prototype.concat.apply([],Arrays.map(f,x));
     },
     concat:function(xs)
     {
      return Array.prototype.concat.apply([],Arrays.ofSeq(xs));
     },
     create:function(size,value)
     {
      var r,i;
      r=Array(size);
      for(i=0;i<=size-1;i++){
       IntrinsicFunctionProxy.SetArray(r,i,value);
      }
      return r;
     },
     exists2:function(f,arr1,arr2)
     {
      Arrays.checkLength(arr1,arr2);
      return Seq.exists2(f,arr1,arr2);
     },
     fill:function(arr,start,length,value)
     {
      var i;
      Arrays.checkRange(arr,start,length);
      for(i=start;i<=start+length-1;i++){
       IntrinsicFunctionProxy.SetArray(arr,i,value);
      }
      return;
     },
     filter:function(f,arr)
     {
      var r,i;
      r=[];
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr)-1;i++){
       f(IntrinsicFunctionProxy.GetArray(arr,i))?r.push(IntrinsicFunctionProxy.GetArray(arr,i)):null;
      }
      return r;
     },
     fold:function(f,zero,arr)
     {
      var acc,i;
      acc=zero;
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr)-1;i++){
       acc=(f(acc))(IntrinsicFunctionProxy.GetArray(arr,i));
      }
      return acc;
     },
     fold2:function(f,zero,arr1,arr2)
     {
      var accum,i;
      Arrays.checkLength(arr1,arr2);
      accum=zero;
      for(i=0;i<=arr1.length-1;i++){
       accum=((f(accum))(IntrinsicFunctionProxy.GetArray(arr1,i)))(IntrinsicFunctionProxy.GetArray(arr2,i));
      }
      return accum;
     },
     foldBack:function(f,arr,zero)
     {
      var acc,len,i;
      acc=zero;
      len=IntrinsicFunctionProxy.GetLength(arr);
      for(i=1;i<=len;i++){
       acc=(f(IntrinsicFunctionProxy.GetArray(arr,len-i)))(acc);
      }
      return acc;
     },
     foldBack2:function(f,arr1,arr2,zero)
     {
      var len,accum,i;
      Arrays.checkLength(arr1,arr2);
      len=IntrinsicFunctionProxy.GetLength(arr1);
      accum=zero;
      for(i=1;i<=len;i++){
       accum=((f(IntrinsicFunctionProxy.GetArray(arr1,len-i)))(IntrinsicFunctionProxy.GetArray(arr2,len-i)))(accum);
      }
      return accum;
     },
     forall2:function(f,arr1,arr2)
     {
      Arrays.checkLength(arr1,arr2);
      return Seq.forall2(f,arr1,arr2);
     },
     init:function(size,f)
     {
      var r,i;
      size<0?Operators.FailWith("Negative size given."):null;
      r=Array(size);
      for(i=0;i<=size-1;i++){
       IntrinsicFunctionProxy.SetArray(r,i,f(i));
      }
      return r;
     },
     iter:function(f,arr)
     {
      var i;
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr)-1;i++){
       f(IntrinsicFunctionProxy.GetArray(arr,i));
      }
      return;
     },
     iter2:function(f,arr1,arr2)
     {
      var i;
      Arrays.checkLength(arr1,arr2);
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr1)-1;i++){
       (f(IntrinsicFunctionProxy.GetArray(arr1,i)))(IntrinsicFunctionProxy.GetArray(arr2,i));
      }
      return;
     },
     iteri:function(f,arr)
     {
      var i;
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr)-1;i++){
       (f(i))(IntrinsicFunctionProxy.GetArray(arr,i));
      }
      return;
     },
     iteri2:function(f,arr1,arr2)
     {
      var i;
      Arrays.checkLength(arr1,arr2);
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr1)-1;i++){
       ((f(i))(IntrinsicFunctionProxy.GetArray(arr1,i)))(IntrinsicFunctionProxy.GetArray(arr2,i));
      }
      return;
     },
     map:function(f,arr)
     {
      var r,i;
      r=Array(IntrinsicFunctionProxy.GetLength(arr));
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr)-1;i++){
       IntrinsicFunctionProxy.SetArray(r,i,f(IntrinsicFunctionProxy.GetArray(arr,i)));
      }
      return r;
     },
     map2:function(f,arr1,arr2)
     {
      var r,i;
      Arrays.checkLength(arr1,arr2);
      r=Array(IntrinsicFunctionProxy.GetLength(arr2));
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr2)-1;i++){
       IntrinsicFunctionProxy.SetArray(r,i,(f(IntrinsicFunctionProxy.GetArray(arr1,i)))(IntrinsicFunctionProxy.GetArray(arr2,i)));
      }
      return r;
     },
     mapi:function(f,arr)
     {
      var y,i;
      y=Array(IntrinsicFunctionProxy.GetLength(arr));
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr)-1;i++){
       IntrinsicFunctionProxy.SetArray(y,i,(f(i))(IntrinsicFunctionProxy.GetArray(arr,i)));
      }
      return y;
     },
     mapi2:function(f,arr1,arr2)
     {
      var res,i;
      Arrays.checkLength(arr1,arr2);
      res=Array(IntrinsicFunctionProxy.GetLength(arr1));
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr1)-1;i++){
       IntrinsicFunctionProxy.SetArray(res,i,((f(i))(IntrinsicFunctionProxy.GetArray(arr1,i)))(IntrinsicFunctionProxy.GetArray(arr2,i)));
      }
      return res;
     },
     max:function(x)
     {
      return Arrays.reduce(function(e1)
      {
       return function(e2)
       {
        return Operators.Max(e1,e2);
       };
      },x);
     },
     maxBy:function(f,arr)
     {
      return Arrays.reduce(function(x)
      {
       return function(y)
       {
        return Unchecked.Compare(f(x),f(y))===1?x:y;
       };
      },arr);
     },
     min:function(x)
     {
      return Arrays.reduce(function(e1)
      {
       return function(e2)
       {
        return Operators.Min(e1,e2);
       };
      },x);
     },
     minBy:function(f,arr)
     {
      return Arrays.reduce(function(x)
      {
       return function(y)
       {
        return Unchecked.Compare(f(x),f(y))===-1?x:y;
       };
      },arr);
     },
     nonEmpty:function(arr)
     {
      return IntrinsicFunctionProxy.GetLength(arr)===0?Operators.FailWith("The input array was empty."):null;
     },
     ofSeq:function(xs)
     {
      var q,_enum;
      q=[];
      _enum=Enumerator.Get(xs);
      while(_enum.MoveNext())
       {
        q.push(_enum.get_Current());
       }
      return q;
     },
     partition:function(f,arr)
     {
      var ret1,ret2,i;
      ret1=[];
      ret2=[];
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr)-1;i++){
       f(IntrinsicFunctionProxy.GetArray(arr,i))?ret1.push(IntrinsicFunctionProxy.GetArray(arr,i)):ret2.push(IntrinsicFunctionProxy.GetArray(arr,i));
      }
      return[ret1,ret2];
     },
     permute:function(f,arr)
     {
      var ret,i;
      ret=Array(IntrinsicFunctionProxy.GetLength(arr));
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr)-1;i++){
       IntrinsicFunctionProxy.SetArray(ret,f(i),IntrinsicFunctionProxy.GetArray(arr,i));
      }
      return ret;
     },
     reduce:function(f,arr)
     {
      var acc,i;
      Arrays.nonEmpty(arr);
      acc=IntrinsicFunctionProxy.GetArray(arr,0);
      for(i=1;i<=IntrinsicFunctionProxy.GetLength(arr)-1;i++){
       acc=(f(acc))(IntrinsicFunctionProxy.GetArray(arr,i));
      }
      return acc;
     },
     reduceBack:function(f,arr)
     {
      var len,acc,i;
      Arrays.nonEmpty(arr);
      len=IntrinsicFunctionProxy.GetLength(arr);
      acc=IntrinsicFunctionProxy.GetArray(arr,len-1);
      for(i=2;i<=len;i++){
       acc=(f(IntrinsicFunctionProxy.GetArray(arr,len-i)))(acc);
      }
      return acc;
     },
     reverse:function(array,offset,length)
     {
      var a;
      a=Arrays.sub(array,offset,length).slice().reverse();
      return Arrays.blit(a,0,array,offset,IntrinsicFunctionProxy.GetLength(a));
     },
     scan:function(f,zero,arr)
     {
      var ret,i;
      ret=Array(1+IntrinsicFunctionProxy.GetLength(arr));
      IntrinsicFunctionProxy.SetArray(ret,0,zero);
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr)-1;i++){
       IntrinsicFunctionProxy.SetArray(ret,i+1,(f(IntrinsicFunctionProxy.GetArray(ret,i)))(IntrinsicFunctionProxy.GetArray(arr,i)));
      }
      return ret;
     },
     scanBack:function(f,arr,zero)
     {
      var len,ret,i;
      len=IntrinsicFunctionProxy.GetLength(arr);
      ret=Array(1+len);
      IntrinsicFunctionProxy.SetArray(ret,len,zero);
      for(i=0;i<=len-1;i++){
       IntrinsicFunctionProxy.SetArray(ret,len-i-1,(f(IntrinsicFunctionProxy.GetArray(arr,len-i-1)))(IntrinsicFunctionProxy.GetArray(ret,len-i)));
      }
      return ret;
     },
     sort:function(arr)
     {
      return Arrays.sortBy(function(x)
      {
       return x;
      },arr);
     },
     sortBy:function(f,arr)
     {
      var f1;
      f1=Runtime.Tupled(function(tupledArg)
      {
       var x,y;
       x=tupledArg[0];
       y=tupledArg[1];
       return Operators.Compare(f(x),f(y));
      });
      return arr.slice().sort(f1);
     },
     sortInPlace:function(arr)
     {
      return Arrays.sortInPlaceBy(function(x)
      {
       return x;
      },arr);
     },
     sortInPlaceBy:function(f,arr)
     {
      var f1;
      f1=Runtime.Tupled(function(tupledArg)
      {
       var x,y;
       x=tupledArg[0];
       y=tupledArg[1];
       return Operators.Compare(f(x),f(y));
      });
      return arr.sort(f1);
     },
     sortInPlaceWith:function(comparer,arr)
     {
      var f;
      f=Runtime.Tupled(function(tupledArg)
      {
       var x,y;
       x=tupledArg[0];
       y=tupledArg[1];
       return(comparer(x))(y);
      });
      return arr.sort(f);
     },
     sortWith:function(comparer,arr)
     {
      var f;
      f=Runtime.Tupled(function(tupledArg)
      {
       var x,y;
       x=tupledArg[0];
       y=tupledArg[1];
       return(comparer(x))(y);
      });
      return arr.slice().sort(f);
     },
     sub:function(arr,start,length)
     {
      Arrays.checkRange(arr,start,length);
      return arr.slice(start,start+length);
     },
     sum:function($arr)
     {
      var $0=this,$this=this;
      var sum=0;
      for(var i=0;i<$arr.length;i++)sum+=$arr[i];
      return sum;
     },
     sumBy:function($f,$arr)
     {
      var $0=this,$this=this;
      var sum=0;
      for(var i=0;i<$arr.length;i++)sum+=$f($arr[i]);
      return sum;
     },
     tryFind:function(f,arr)
     {
      var res,i;
      res={
       $:0
      };
      i=0;
      while(i<IntrinsicFunctionProxy.GetLength(arr)?res.$==0:false)
       {
        f(IntrinsicFunctionProxy.GetArray(arr,i))?res={
         $:1,
         $0:IntrinsicFunctionProxy.GetArray(arr,i)
        }:null;
        i=i+1;
       }
      return res;
     },
     tryFindIndex:function(f,arr)
     {
      var res,i;
      res={
       $:0
      };
      i=0;
      while(i<IntrinsicFunctionProxy.GetLength(arr)?res.$==0:false)
       {
        f(IntrinsicFunctionProxy.GetArray(arr,i))?res={
         $:1,
         $0:i
        }:null;
        i=i+1;
       }
      return res;
     },
     tryPick:function(f,arr)
     {
      var res,i,matchValue;
      res={
       $:0
      };
      i=0;
      while(i<IntrinsicFunctionProxy.GetLength(arr)?res.$==0:false)
       {
        matchValue=f(IntrinsicFunctionProxy.GetArray(arr,i));
        matchValue.$==1?res=matchValue:null;
        i=i+1;
       }
      return res;
     },
     unzip:function(arr)
     {
      var x,y,i,patternInput,b,a;
      x=[];
      y=[];
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr)-1;i++){
       patternInput=IntrinsicFunctionProxy.GetArray(arr,i);
       b=patternInput[1];
       a=patternInput[0];
       x.push(a);
       y.push(b);
      }
      return[x,y];
     },
     unzip3:function(arr)
     {
      var x,y,z,i,matchValue,c,b,a;
      x=[];
      y=[];
      z=[];
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr)-1;i++){
       matchValue=IntrinsicFunctionProxy.GetArray(arr,i);
       c=matchValue[2];
       b=matchValue[1];
       a=matchValue[0];
       x.push(a);
       y.push(b);
       z.push(c);
      }
      return[x,y,z];
     },
     zip:function(arr1,arr2)
     {
      var res,i;
      Arrays.checkLength(arr1,arr2);
      res=Array(arr1.length);
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr1)-1;i++){
       IntrinsicFunctionProxy.SetArray(res,i,[IntrinsicFunctionProxy.GetArray(arr1,i),IntrinsicFunctionProxy.GetArray(arr2,i)]);
      }
      return res;
     },
     zip3:function(arr1,arr2,arr3)
     {
      var res,i;
      Arrays.checkLength(arr1,arr2);
      Arrays.checkLength(arr2,arr3);
      res=Array(arr1.length);
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr1)-1;i++){
       IntrinsicFunctionProxy.SetArray(res,i,[IntrinsicFunctionProxy.GetArray(arr1,i),IntrinsicFunctionProxy.GetArray(arr2,i),IntrinsicFunctionProxy.GetArray(arr3,i)]);
      }
      return res;
     }
    },
    Arrays2D:{
     copy:function(array)
     {
      return Arrays2D.init(array.length,array.length?array[0].length:0,function(i)
      {
       return function(j)
       {
        return IntrinsicFunctionProxy.GetArray2D(array,i,j);
       };
      });
     },
     init:function(n,m,f)
     {
      var array,i,j;
      array=Arrays2D.zeroCreate(n,m);
      for(i=0;i<=n-1;i++){
       for(j=0;j<=m-1;j++){
        IntrinsicFunctionProxy.SetArray2D(array,i,j,(f(i))(j));
       }
      }
      return array;
     },
     iter:function(f,array)
     {
      var count1,count2,i,j;
      count1=array.length;
      count2=array.length?array[0].length:0;
      for(i=0;i<=count1-1;i++){
       for(j=0;j<=count2-1;j++){
        f(IntrinsicFunctionProxy.GetArray2D(array,i,j));
       }
      }
      return;
     },
     iteri:function(f,array)
     {
      var count1,count2,i,j;
      count1=array.length;
      count2=array.length?array[0].length:0;
      for(i=0;i<=count1-1;i++){
       for(j=0;j<=count2-1;j++){
        ((f(i))(j))(IntrinsicFunctionProxy.GetArray2D(array,i,j));
       }
      }
      return;
     },
     map:function(f,array)
     {
      return Arrays2D.init(array.length,array.length?array[0].length:0,function(i)
      {
       return function(j)
       {
        return f(IntrinsicFunctionProxy.GetArray2D(array,i,j));
       };
      });
     },
     mapi:function(f,array)
     {
      return Arrays2D.init(array.length,array.length?array[0].length:0,function(i)
      {
       return function(j)
       {
        return((f(i))(j))(IntrinsicFunctionProxy.GetArray2D(array,i,j));
       };
      });
     },
     zeroCreate:function(n,m)
     {
      return IntrinsicFunctionProxy.Array2DZeroCreate(n,m);
     }
    },
    AsyncProxy:Runtime.Class({},{
     get_CancellationToken:function()
     {
      return Concurrency.GetCT();
     },
     get_DefaultCancellationToken:function()
     {
      return Concurrency.defCTS().contents;
     }
    }),
    CancellationTokenSource:Runtime.Class({
     Cancel:function()
     {
      var _,chooser,array,errors;
      if(!this.c)
       {
        this.c=true;
        chooser=function(a)
        {
         var _1,e;
         try
         {
          a(null);
          _1={
           $:0
          };
         }
         catch(e)
         {
          _1={
           $:1,
           $0:e
          };
         }
         return _1;
        };
        array=this.r;
        errors=Arrays.choose(chooser,array);
        _=IntrinsicFunctionProxy.GetLength(errors)>0?Operators.Raise(AggregateException.New(errors)):null;
       }
      else
       {
        _=null;
       }
      return _;
     },
     Cancel1:function(throwOnFirstException)
     {
      var _,_1,action,array;
      if(!throwOnFirstException)
       {
        _=this.Cancel();
       }
      else
       {
        if(!this.c)
         {
          this.c=true;
          action=function(a)
          {
           return a(null);
          };
          array=this.r;
          _1=Arrays.iter(action,array);
         }
        else
         {
          _1=null;
         }
        _=_1;
       }
      return _;
     },
     CancelAfter:function(delay)
     {
      var _,option,arg0,_this=this;
      if(!this.c)
       {
        option=this.pending;
        Option.iter(function(handle)
        {
         return clearTimeout(handle);
        },option);
        arg0=setTimeout(function()
        {
         return _this.Cancel();
        },delay);
        _=void(this.pending={
         $:1,
         $0:arg0
        });
       }
      else
       {
        _=null;
       }
      return _;
     },
     get_IsCancellationRequested:function()
     {
      return this.c;
     }
    },{
     CreateLinkedTokenSource:function(t1,t2)
     {
      return CancellationTokenSource.CreateLinkedTokenSource1([t1,t2]);
     },
     CreateLinkedTokenSource1:function(tokens)
     {
      var cts,action;
      cts=CancellationTokenSource.New();
      action=function(t)
      {
       var callback,value;
       callback=function()
       {
        return cts.Cancel();
       };
       value=Concurrency.Register(t,function()
       {
        return callback();
       });
       return;
      };
      return Arrays.iter(action,tokens);
     },
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r.c=false;
      r.pending={
       $:0
      };
      r.r=[];
      return r;
     }
    }),
    Char:Runtime.Class({},{
     GetNumericValue:function(c)
     {
      return(c>=48?c<=57:false)?Number(c)-Number(48):-1;
     },
     IsControl:function(c)
     {
      return(c>=0?c<=31:false)?true:c>=128?c<=159:false;
     },
     IsDigit:function(c)
     {
      return c>=48?c<=57:false;
     },
     IsLetter:function(c)
     {
      return(c>=65?c<=90:false)?true:c>=97?c<=122:false;
     },
     IsLetterOrDigit:function(c)
     {
      return Char.IsLetter(c)?true:Char.IsDigit(c);
     },
     IsLower:function(c)
     {
      return c>=97?c<=122:false;
     },
     IsUpper:function(c)
     {
      return c>=65?c<=90:false;
     },
     IsWhiteSpace:function($c)
     {
      var $0=this,$this=this;
      return Global.String.fromCharCode($c).match(/\s/)!==null;
     },
     Parse:function(s)
     {
      return s.length===1?s.charCodeAt(0):Operators.FailWith("String must be exactly one character long.");
     }
    }),
    Concurrency:{
     AwaitEvent:function(e)
     {
      var r;
      r=function(c)
      {
       var sub,sub1,creg,creg1,sub2,creg2;
       sub=function()
       {
        return Util.subscribeTo(e,function(x)
        {
         var action;
         Lazy.Force(sub1).Dispose();
         Lazy.Force(creg1).Dispose();
         action=function()
         {
          return c.k.call(null,{
           $:0,
           $0:x
          });
         };
         return Concurrency.scheduler().Fork(action);
        });
       };
       sub1=Lazy.Create(sub);
       creg=function()
       {
        return Concurrency.Register(c.ct,function()
        {
         var action;
         Lazy.Force(sub1).Dispose();
         action=function()
         {
          return c.k.call(null,{
           $:2,
           $0:new Error("OperationCanceledException")
          });
         };
         return Concurrency.scheduler().Fork(action);
        });
       };
       creg1=Lazy.Create(creg);
       sub2=Lazy.Force(sub1);
       creg2=Lazy.Force(creg1);
       return null;
      };
      return Concurrency.checkCancel(r);
     },
     Bind:function(r,f)
     {
      var r1;
      r1=function(c)
      {
       return r({
        k:function(_arg1)
        {
         var _,x,action,action1;
         if(_arg1.$==0)
          {
           x=_arg1.$0;
           action=function()
           {
            var _1,e;
            try
            {
             _1=(f(x))(c);
            }
            catch(e)
            {
             _1=c.k.call(null,{
              $:1,
              $0:e
             });
            }
            return _1;
           };
           _=Concurrency.scheduler().Fork(action);
          }
         else
          {
           action1=function()
           {
            return c.k.call(null,_arg1);
           };
           _=Concurrency.scheduler().Fork(action1);
          }
         return _;
        },
        ct:c.ct
       });
      };
      return Concurrency.checkCancel(r1);
     },
     Catch:function(r)
     {
      var r1;
      r1=function(c)
      {
       var _,e1;
       try
       {
        _=r({
         k:function(_arg1)
         {
          var _1,x,e;
          if(_arg1.$==0)
           {
            x=_arg1.$0;
            _1=c.k.call(null,{
             $:0,
             $0:{
              $:0,
              $0:x
             }
            });
           }
          else
           {
            if(_arg1.$==1)
             {
              e=_arg1.$0;
              _1=c.k.call(null,{
               $:0,
               $0:{
                $:1,
                $0:e
               }
              });
             }
            else
             {
              _1=c.k.call(null,_arg1);
             }
           }
          return _1;
         },
         ct:c.ct
        });
       }
       catch(e1)
       {
        _=c.k.call(null,{
         $:0,
         $0:{
          $:1,
          $0:e1
         }
        });
       }
       return _;
      };
      return Concurrency.checkCancel(r1);
     },
     Combine:function(a,b)
     {
      return Concurrency.Bind(a,function()
      {
       return b;
      });
     },
     Delay:function(mk)
     {
      var r;
      r=function(c)
      {
       var _,e;
       try
       {
        _=(mk(null))(c);
       }
       catch(e)
       {
        _=c.k.call(null,{
         $:1,
         $0:e
        });
       }
       return _;
      };
      return Concurrency.checkCancel(r);
     },
     For:function(s,b)
     {
      var ie;
      ie=Enumerator.Get(s);
      return Concurrency.While(function()
      {
       return ie.MoveNext();
      },Concurrency.Delay(function()
      {
       return b(ie.get_Current());
      }));
     },
     FromContinuations:function(subscribe)
     {
      var r;
      r=function(c)
      {
       var continued,once;
       continued={
        contents:false
       };
       once=function(cont)
       {
        var _;
        if(continued.contents)
         {
          _=Operators.FailWith("A continuation provided by Async.FromContinuations was invoked multiple times");
         }
        else
         {
          continued.contents=true;
          _=Concurrency.scheduler().Fork(cont);
         }
        return _;
       };
       return subscribe([function(a)
       {
        return once(function()
        {
         return c.k.call(null,{
          $:0,
          $0:a
         });
        });
       },function(e)
       {
        return once(function()
        {
         return c.k.call(null,{
          $:1,
          $0:e
         });
        });
       },function(e)
       {
        return once(function()
        {
         return c.k.call(null,{
          $:2,
          $0:e
         });
        });
       }]);
      };
      return Concurrency.checkCancel(r);
     },
     GetCT:Runtime.Field(function()
     {
      var r;
      r=function(c)
      {
       return c.k.call(null,{
        $:0,
        $0:c.ct
       });
      };
      return Concurrency.checkCancel(r);
     }),
     Ignore:function(r)
     {
      return Concurrency.Bind(r,function()
      {
       return Concurrency.Return(null);
      });
     },
     OnCancel:function(action)
     {
      var r;
      r=function(c)
      {
       return c.k.call(null,{
        $:0,
        $0:Concurrency.Register(c.ct,action)
       });
      };
      return Concurrency.checkCancel(r);
     },
     Parallel:function(cs)
     {
      var cs1,_,r;
      cs1=Arrays.ofSeq(cs);
      if(IntrinsicFunctionProxy.GetLength(cs1)===0)
       {
        _=Concurrency.Return([]);
       }
      else
       {
        r=function(c)
        {
         var n,o,a,accept;
         n=cs1.length;
         o={
          contents:n
         };
         a=Arrays.create(n,undefined);
         accept=function(i)
         {
          return function(x)
          {
           var matchValue,_1,_2,x1,res,_3,x2,n1,res1;
           matchValue=[o.contents,x];
           if(matchValue[0]===0)
            {
             _1=null;
            }
           else
            {
             if(matchValue[0]===1)
              {
               if(matchValue[1].$==0)
                {
                 x1=matchValue[1].$0;
                 IntrinsicFunctionProxy.SetArray(a,i,x1);
                 o.contents=0;
                 _2=c.k.call(null,{
                  $:0,
                  $0:a
                 });
                }
               else
                {
                 matchValue[0];
                 res=matchValue[1];
                 o.contents=0;
                 _2=c.k.call(null,res);
                }
               _1=_2;
              }
             else
              {
               if(matchValue[1].$==0)
                {
                 x2=matchValue[1].$0;
                 n1=matchValue[0];
                 IntrinsicFunctionProxy.SetArray(a,i,x2);
                 _3=void(o.contents=n1-1);
                }
               else
                {
                 matchValue[0];
                 res1=matchValue[1];
                 o.contents=0;
                 _3=c.k.call(null,res1);
                }
               _1=_3;
              }
            }
           return _1;
          };
         };
         return Arrays.iteri(function(i)
         {
          return function(run)
          {
           var action;
           action=function()
           {
            return run({
             k:accept(i),
             ct:c.ct
            });
           };
           return Concurrency.scheduler().Fork(action);
          };
         },cs1);
        };
        _=Concurrency.checkCancel(r);
       }
      return _;
     },
     Register:function(ct,callback)
     {
      var i;
      i=ct.r.push(callback)-1;
      return{
       Dispose:function()
       {
        return IntrinsicFunctionProxy.SetArray(ct.r,i,function()
        {
        });
       }
      };
     },
     Return:function(x)
     {
      var r;
      r=function(c)
      {
       return c.k.call(null,{
        $:0,
        $0:x
       });
      };
      return Concurrency.checkCancel(r);
     },
     Scheduler:Runtime.Class({
      Fork:function(action)
      {
       var _,value,_this=this;
       this.robin.push(action);
       if(this.idle)
        {
         this.idle=false;
         value=setTimeout(function()
         {
          return _this.tick();
         },0);
         _=void value;
        }
       else
        {
         _=null;
        }
       return _;
      },
      tick:function()
      {
       var t,loop,matchValue,_,_1,value,_this=this;
       t=Date.now();
       loop=true;
       while(loop)
        {
         matchValue=this.robin.length;
         if(matchValue===0)
          {
           this.idle=true;
           _=loop=false;
          }
         else
          {
           (this.robin.shift())(null);
           if(Date.now()-t>40)
            {
             value=setTimeout(function()
             {
              return _this.tick();
             },0);
             _1=loop=false;
            }
           else
            {
             _1=null;
            }
           _=_1;
          }
        }
       return;
      }
     },{
      New:function()
      {
       var r;
       r=Runtime.New(this,{});
       r.idle=true;
       r.robin=[];
       return r;
      }
     }),
     Sleep:function(ms)
     {
      var r;
      r=function(c)
      {
       var pending,pending1,creg,creg1,pending2,creg2;
       pending=function()
       {
        return setTimeout(function()
        {
         var action;
         Lazy.Force(creg1).Dispose();
         action=function()
         {
          return c.k.call(null,{
           $:0,
           $0:null
          });
         };
         return Concurrency.scheduler().Fork(action);
        },ms);
       };
       pending1=Lazy.Create(pending);
       creg=function()
       {
        return Concurrency.Register(c.ct,function()
        {
         var action;
         clearTimeout(Lazy.Force(pending1));
         action=function()
         {
          return c.k.call(null,{
           $:2,
           $0:new Error("OperationCanceledException")
          });
         };
         return Concurrency.scheduler().Fork(action);
        });
       };
       creg1=Lazy.Create(creg);
       pending2=Lazy.Force(pending1);
       creg2=Lazy.Force(creg1);
       return null;
      };
      return Concurrency.checkCancel(r);
     },
     Start:function(c,ctOpt)
     {
      return Concurrency.StartWithContinuations(c,function()
      {
      },function(exn)
      {
       return JavaScript.LogMore(["WebSharper: Uncaught asynchronous exception",exn]);
      },function()
      {
      },ctOpt);
     },
     StartChild:function(r)
     {
      var r1;
      r1=function(c)
      {
       var cached,queue,action,r2,r21;
       cached={
        contents:{
         $:0
        }
       };
       queue=[];
       action=function()
       {
        return r({
         k:function(res)
         {
          cached.contents={
           $:1,
           $0:res
          };
          while(queue.length>0)
           {
            (queue.shift())(res);
           }
          return;
         },
         ct:c.ct
        });
       };
       Concurrency.scheduler().Fork(action);
       r2=function(c2)
       {
        var matchValue,_,x;
        matchValue=cached.contents;
        if(matchValue.$==0)
         {
          _=queue.push(c2.k);
         }
        else
         {
          x=matchValue.$0;
          _=c2.k.call(null,x);
         }
        return _;
       };
       r21=Concurrency.checkCancel(r2);
       return c.k.call(null,{
        $:0,
        $0:r21
       });
      };
      return Concurrency.checkCancel(r1);
     },
     StartWithContinuations:function(c,s,f,cc,ctOpt)
     {
      var ct,action;
      ct=Operators.DefaultArg(ctOpt,Concurrency.defCTS().contents);
      action=function()
      {
       return c({
        k:function(_arg1)
        {
         var _,e,e1,x;
         if(_arg1.$==1)
          {
           e=_arg1.$0;
           _=f(e);
          }
         else
          {
           if(_arg1.$==2)
            {
             e1=_arg1.$0;
             _=cc(e1);
            }
           else
            {
             x=_arg1.$0;
             _=s(x);
            }
          }
         return _;
        },
        ct:ct
       });
      };
      return Concurrency.scheduler().Fork(action);
     },
     TryCancelled:function(run,comp)
     {
      var r;
      r=function(c)
      {
       return run({
        k:function(_arg1)
        {
         var _,e;
         if(_arg1.$==2)
          {
           e=_arg1.$0;
           comp(e);
           _=c.k.call(null,_arg1);
          }
         else
          {
           _=c.k.call(null,_arg1);
          }
         return _;
        },
        ct:c.ct
       });
      };
      return Concurrency.checkCancel(r);
     },
     TryFinally:function(run,f)
     {
      var r;
      r=function(c)
      {
       return run({
        k:function(r1)
        {
         var _,e;
         try
         {
          f(null);
          _=c.k.call(null,r1);
         }
         catch(e)
         {
          _=c.k.call(null,{
           $:1,
           $0:e
          });
         }
         return _;
        },
        ct:c.ct
       });
      };
      return Concurrency.checkCancel(r);
     },
     TryWith:function(r,f)
     {
      var r1;
      r1=function(c)
      {
       return r({
        k:function(_arg1)
        {
         var _,x,e,_1,e1;
         if(_arg1.$==0)
          {
           x=_arg1.$0;
           _=c.k.call(null,{
            $:0,
            $0:x
           });
          }
         else
          {
           if(_arg1.$==1)
            {
             e=_arg1.$0;
             try
             {
              _1=(f(e))(c);
             }
             catch(e1)
             {
              _1=c.k.call(null,_arg1);
             }
             _=_1;
            }
           else
            {
             _=c.k.call(null,_arg1);
            }
          }
         return _;
        },
        ct:c.ct
       });
      };
      return Concurrency.checkCancel(r1);
     },
     Using:function(x,f)
     {
      return Concurrency.TryFinally(f(x),function()
      {
       return x.Dispose();
      });
     },
     While:function(g,c)
     {
      return g(null)?Concurrency.Bind(c,function()
      {
       return Concurrency.While(g,c);
      }):Concurrency.Return(null);
     },
     checkCancel:function(r)
     {
      return function(c)
      {
       return c.ct.c?c.k.call(null,{
        $:2,
        $0:new Error("OperationCanceledException")
       }):r(c);
      };
     },
     defCTS:Runtime.Field(function()
     {
      return{
       contents:CancellationTokenSource.New()
      };
     }),
     scheduler:Runtime.Field(function()
     {
      return Scheduler.New();
     })
    },
    Control:{
     createEvent:function(add,remove,create)
     {
      return{
       AddHandler:add,
       RemoveHandler:remove,
       Subscribe:function(r)
       {
        var h;
        h=create(function()
        {
         return function(args)
         {
          return r.OnNext.call(null,args);
         };
        });
        add(h);
        return{
         Dispose:function()
         {
          return remove(h);
         }
        };
       }
      };
     }
    },
    DateTimeHelpers:{
     AddMonths:function(d,months)
     {
      var e;
      e=new Date(d);
      return(new Date(e.getFullYear(),e.getMonth()+months,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())).getTime();
     },
     AddYears:function(d,years)
     {
      var e;
      e=new Date(d);
      return(new Date(e.getFullYear()+years,e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())).getTime();
     },
     DatePortion:function(d)
     {
      var e;
      e=new Date(d);
      return(new Date(e.getFullYear(),e.getMonth(),e.getDate())).getTime();
     },
     TimePortion:function(d)
     {
      var e;
      e=new Date(d);
      return(((24*0+e.getHours())*60+e.getMinutes())*60+e.getSeconds())*1000+e.getMilliseconds();
     }
    },
    Enumerable:{
     Of:function(getEnumerator)
     {
      return{
       GetEnumerator:getEnumerator
      };
     }
    },
    Enumerator:{
     Get:function(x)
     {
      var _,next,_2,next1;
      if(x instanceof Global.Array)
       {
        next=function(e)
        {
         var i,_1,v,v1;
         i=e.s;
         if(i<IntrinsicFunctionProxy.GetLength(x))
          {
           v=IntrinsicFunctionProxy.GetArray(x,i);
           e.c=v;
           v1=i+1;
           e.s=v1;
           _1=true;
          }
         else
          {
           _1=false;
          }
         return _1;
        };
        _=T.New(0,null,next);
       }
      else
       {
        if(Unchecked.Equals(typeof x,"string"))
         {
          next1=function(e)
          {
           var i,_1,v,v1;
           i=e.s;
           if(i<x.length)
            {
             v=x.charCodeAt(i);
             e.c=v;
             v1=i+1;
             e.s=v1;
             _1=true;
            }
           else
            {
             _1=false;
            }
           return _1;
          };
          _2=T.New(0,null,next1);
         }
        else
         {
          _2=x.GetEnumerator();
         }
        _=_2;
       }
      return _;
     },
     T:Runtime.Class({
      MoveNext:function()
      {
       return this.n.call(null,this);
      },
      get_Current:function()
      {
       return this.c;
      }
     },{
      New:function(s,c,n)
      {
       var r;
       r=Runtime.New(this,{});
       r.s=s;
       r.c=c;
       r.n=n;
       return r;
      }
     })
    },
    ExtraTopLevelOperatorsProxy:{
     array2D:function(rows)
     {
      var mapping,source1,x;
      mapping=function(source)
      {
       return Arrays.ofSeq(source);
      };
      source1=Seq.map(mapping,rows);
      x=Arrays.ofSeq(source1);
      x.dims=2;
      return x;
     }
    },
    IntrinsicFunctionProxy:{
     Array2DZeroCreate:function(n,m)
     {
      var arr;
      arr=Arrays.init(n,function()
      {
       return Array(m);
      });
      arr.dims=2;
      return arr;
     },
     BoundsCheck:function(arr,n)
     {
      return(n<0?true:n>=IntrinsicFunctionProxy.GetLength(arr))?Operators.Raise(new Error("IndexOutOfRangeException")):null;
     },
     BoundsCheck2D:function(arr,n1,n2)
     {
      return(((n1<0?true:n2<0)?true:n1>=arr.length)?true:n2>=(arr.length?arr[0].length:0))?Operators.Raise(new Error("IndexOutOfRangeException")):null;
     },
     GetArray:function(arr,n)
     {
      IntrinsicFunctionProxy.BoundsCheck(arr,n);
      return arr[n];
     },
     GetArray2D:function(arr,n1,n2)
     {
      IntrinsicFunctionProxy.BoundsCheck2D(arr,n1,n2);
      return arr[n1][n2];
     },
     GetArray2DSub:function(src,src1,src2,len1,len2)
     {
      var len11,len21,dst,i,j;
      len11=len1<0?0:len1;
      len21=len2<0?0:len2;
      dst=IntrinsicFunctionProxy.Array2DZeroCreate(len11,len21);
      for(i=0;i<=len11-1;i++){
       for(j=0;j<=len21-1;j++){
        IntrinsicFunctionProxy.SetArray2D(dst,i,j,IntrinsicFunctionProxy.GetArray2D(src,src1+i,src2+j));
       }
      }
      return dst;
     },
     GetArraySub:function(arr,start,len)
     {
      var dst,i;
      dst=Array(len);
      for(i=0;i<=len-1;i++){
       IntrinsicFunctionProxy.SetArray(dst,i,IntrinsicFunctionProxy.GetArray(arr,start+1));
      }
      return dst;
     },
     GetLength:function(arr)
     {
      var matchValue;
      matchValue=arr.dims;
      return matchValue===2?arr.length*arr.length:arr.length;
     },
     SetArray:function(arr,n,x)
     {
      IntrinsicFunctionProxy.BoundsCheck(arr,n);
      arr[n]=x;
      return;
     },
     SetArray2D:function(arr,n1,n2,x)
     {
      IntrinsicFunctionProxy.BoundsCheck2D(arr,n1,n2);
      arr[n1][n2]=x;
      return;
     },
     SetArray2DSub:function(dst,src1,src2,len1,len2,src)
     {
      var i,j;
      for(i=0;i<=len1-1;i++){
       for(j=0;j<=len2-1;j++){
        IntrinsicFunctionProxy.SetArray2D(dst,src1+i,src2+j,IntrinsicFunctionProxy.GetArray2D(src,i,j));
       }
      }
      return;
     },
     SetArraySub:function(arr,start,len,src)
     {
      var i;
      for(i=0;i<=len-1;i++){
       IntrinsicFunctionProxy.SetArray(arr,start+i,IntrinsicFunctionProxy.GetArray(src,i));
      }
      return;
     }
    },
    JavaScript:{
     Delete:function($x,$field)
     {
      var $0=this,$this=this;
      return delete $x[$field];
     },
     ForEach:function($x,$iter)
     {
      var $0=this,$this=this;
      for(var k in $x){
       if($iter(k))
        break;
      }
     },
     GetFieldNames:function($o)
     {
      var $0=this,$this=this;
      var r=[];
      for(var k in $o)r.push(k);
      return r;
     },
     GetFieldValues:function($o)
     {
      var $0=this,$this=this;
      var r=[];
      for(var k in $o)r.push($o[k]);
      return r;
     },
     GetFields:function($o)
     {
      var $0=this,$this=this;
      var r=[];
      for(var k in $o)r.push([k,$o[k]]);
      return r;
     },
     Log:function($x)
     {
      var $0=this,$this=this;
      if(Global.console)
       Global.console.log($x);
     },
     LogMore:function($args)
     {
      var $0=this,$this=this;
      if(Global.console)
       Global.console.log.apply(Global.console,$args);
     }
    },
    Json:{
     Activate:function(json)
     {
      var types,i,decode;
      types=json.$TYPES;
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(types)-1;i++){
       IntrinsicFunctionProxy.SetArray(types,i,Json.lookup(IntrinsicFunctionProxy.GetArray(types,i)));
      }
      decode=function(x)
      {
       var _,matchValue,_1,_2,o,ti;
       if(Unchecked.Equals(x,null))
        {
         _=x;
        }
       else
        {
         matchValue=typeof x;
         if(matchValue==="object")
          {
           if(x instanceof Global.Array)
            {
             _2=Json.shallowMap(decode,x);
            }
           else
            {
             o=Json.shallowMap(decode,x.$V);
             ti=x.$T;
             _2=Unchecked.Equals(typeof ti,"undefined")?o:Json.restore(IntrinsicFunctionProxy.GetArray(types,ti),o);
            }
           _1=_2;
          }
         else
          {
           _1=x;
          }
         _=_1;
        }
       return _;
      };
      return decode(json.$DATA);
     },
     lookup:function(x)
     {
      var k,r,i,n,rn,_;
      k=IntrinsicFunctionProxy.GetLength(x);
      r=Global;
      i=0;
      while(i<k)
       {
        n=IntrinsicFunctionProxy.GetArray(x,i);
        rn=r[n];
        if(!Unchecked.Equals(typeof rn,undefined))
         {
          r=rn;
          _=i=i+1;
         }
        else
         {
          _=Operators.FailWith("Invalid server reply. Failed to find type: "+n);
         }
       }
      return r;
     },
     restore:function(ty,obj)
     {
      var r;
      r=new ty();
      JavaScript.ForEach(obj,function(k)
      {
       r[k]=obj[k];
       return false;
      });
      return r;
     },
     shallowMap:function(f,x)
     {
      var _,matchValue,_1,r;
      if(x instanceof Global.Array)
       {
        _=Arrays.map(f,x);
       }
      else
       {
        matchValue=typeof x;
        if(matchValue==="object")
         {
          r={};
          JavaScript.ForEach(x,function(y)
          {
           r[y]=f(x[y]);
           return false;
          });
          _1=r;
         }
        else
         {
          _1=x;
         }
        _=_1;
       }
      return _;
     }
    },
    Lazy:{
     Create:function(f)
     {
      var x,get;
      x={
       value:undefined,
       created:false,
       eval:f
      };
      get=function()
      {
       var _;
       if(x.created)
        {
         _=x.value;
        }
       else
        {
         x.created=true;
         x.value=f(null);
         _=x.value;
        }
       return _;
      };
      x.eval=get;
      return x;
     },
     CreateFromValue:function(v)
     {
      return{
       value:v,
       created:true,
       eval:function()
       {
        return v;
       },
       eval:function()
       {
        return v;
       }
      };
     },
     Force:function(x)
     {
      return x.eval.call(null,null);
     }
    },
    List:{
     T:Runtime.Class({
      GetEnumerator:function()
      {
       var next;
       next=function(e)
       {
        var matchValue,_,xs,x;
        matchValue=e.s;
        if(matchValue.$==0)
         {
          _=false;
         }
        else
         {
          xs=matchValue.$1;
          x=matchValue.$0;
          e.c=x;
          e.s=xs;
          _=true;
         }
        return _;
       };
       return T.New(this,null,next);
      },
      get_Item:function(x)
      {
       return Seq.nth(x,this);
      },
      get_Length:function()
      {
       return Seq.length(this);
      }
     },{
      Construct:function(head,tail)
      {
       return Runtime.New(T1,{
        $:1,
        $0:head,
        $1:tail
       });
      },
      get_Nil:function()
      {
       return Runtime.New(T1,{
        $:0
       });
      }
     }),
     append:function(x,y)
     {
      return List.ofSeq(Seq.append(x,y));
     },
     choose:function(f,l)
     {
      return List.ofSeq(Seq.choose(f,l));
     },
     collect:function(f,l)
     {
      return List.ofSeq(Seq.collect(f,l));
     },
     concat:function(s)
     {
      return List.ofSeq(Seq.concat(s));
     },
     exists2:function(p,l1,l2)
     {
      return Arrays.exists2(p,Arrays.ofSeq(l1),Arrays.ofSeq(l2));
     },
     filter:function(p,l)
     {
      return List.ofSeq(Seq.filter(p,l));
     },
     fold2:function(f,s,l1,l2)
     {
      return Arrays.fold2(f,s,Arrays.ofSeq(l1),Arrays.ofSeq(l2));
     },
     foldBack:function(f,l,s)
     {
      return Arrays.foldBack(f,Arrays.ofSeq(l),s);
     },
     foldBack2:function(f,l1,l2,s)
     {
      return Arrays.foldBack2(f,Arrays.ofSeq(l1),Arrays.ofSeq(l2),s);
     },
     forall2:function(p,l1,l2)
     {
      return Arrays.forall2(p,Arrays.ofSeq(l1),Arrays.ofSeq(l2));
     },
     head:function(l)
     {
      var _,h;
      if(l.$==1)
       {
        h=l.$0;
        _=h;
       }
      else
       {
        _=Operators.FailWith("The input list was empty.");
       }
      return _;
     },
     init:function(s,f)
     {
      return List.ofArray(Arrays.init(s,f));
     },
     iter2:function(f,l1,l2)
     {
      return Arrays.iter2(f,Arrays.ofSeq(l1),Arrays.ofSeq(l2));
     },
     iteri2:function(f,l1,l2)
     {
      return Arrays.iteri2(f,Arrays.ofSeq(l1),Arrays.ofSeq(l2));
     },
     map:function(f,l)
     {
      return List.ofSeq(Seq.map(f,l));
     },
     map2:function(f,l1,l2)
     {
      return List.ofArray(Arrays.map2(f,Arrays.ofSeq(l1),Arrays.ofSeq(l2)));
     },
     map3:function(f,l1,l2,l3)
     {
      var array;
      array=Arrays.map2(function(func)
      {
       return function(arg1)
       {
        return func(arg1);
       };
      },Arrays.map2(f,Arrays.ofSeq(l1),Arrays.ofSeq(l2)),Arrays.ofSeq(l3));
      return List.ofArray(array);
     },
     mapi:function(f,l)
     {
      return List.ofSeq(Seq.mapi(f,l));
     },
     mapi2:function(f,l1,l2)
     {
      return List.ofArray(Arrays.mapi2(f,Arrays.ofSeq(l1),Arrays.ofSeq(l2)));
     },
     max:function(l)
     {
      return Seq.reduce(function(e1)
      {
       return function(e2)
       {
        return Operators.Max(e1,e2);
       };
      },l);
     },
     maxBy:function(f,l)
     {
      return Seq.reduce(function(x)
      {
       return function(y)
       {
        return Unchecked.Compare(f(x),f(y))===1?x:y;
       };
      },l);
     },
     min:function(l)
     {
      return Seq.reduce(function(e1)
      {
       return function(e2)
       {
        return Operators.Min(e1,e2);
       };
      },l);
     },
     minBy:function(f,l)
     {
      return Seq.reduce(function(x)
      {
       return function(y)
       {
        return Unchecked.Compare(f(x),f(y))===-1?x:y;
       };
      },l);
     },
     ofArray:function(arr)
     {
      var r,i;
      r=Runtime.New(T1,{
       $:0
      });
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(arr)-1;i++){
       r=Runtime.New(T1,{
        $:1,
        $0:IntrinsicFunctionProxy.GetArray(arr,IntrinsicFunctionProxy.GetLength(arr)-i-1),
        $1:r
       });
      }
      return r;
     },
     ofSeq:function(s)
     {
      var r,e,x;
      r=[];
      e=Enumerator.Get(s);
      while(e.MoveNext())
       {
        r.unshift(e.get_Current());
       }
      x=r.slice(0);
      x.reverse();
      return List.ofArray(x);
     },
     partition:function(p,l)
     {
      var patternInput,b,a;
      patternInput=Arrays.partition(p,Arrays.ofSeq(l));
      b=patternInput[1];
      a=patternInput[0];
      return[List.ofArray(a),List.ofArray(b)];
     },
     permute:function(f,l)
     {
      return List.ofArray(Arrays.permute(f,Arrays.ofSeq(l)));
     },
     reduceBack:function(f,l)
     {
      return Arrays.reduceBack(f,Arrays.ofSeq(l));
     },
     replicate:function(size,value)
     {
      return List.ofArray(Arrays.create(size,value));
     },
     rev:function(l)
     {
      var a;
      a=Arrays.ofSeq(l);
      a.reverse();
      return List.ofArray(a);
     },
     scan:function(f,s,l)
     {
      return List.ofSeq(Seq.scan(f,s,l));
     },
     scanBack:function(f,l,s)
     {
      return List.ofArray(Arrays.scanBack(f,Arrays.ofSeq(l),s));
     },
     sort:function(l)
     {
      var a;
      a=Arrays.ofSeq(l);
      Arrays.sortInPlace(a);
      return List.ofArray(a);
     },
     sortBy:function(f,l)
     {
      return List.sortWith(function(x)
      {
       return function(y)
       {
        return Operators.Compare(f(x),f(y));
       };
      },l);
     },
     sortWith:function(f,l)
     {
      var a;
      a=Arrays.ofSeq(l);
      Arrays.sortInPlaceWith(f,a);
      return List.ofArray(a);
     },
     tail:function(l)
     {
      var _,t;
      if(l.$==1)
       {
        t=l.$1;
        _=t;
       }
      else
       {
        _=Operators.FailWith("The input list was empty.");
       }
      return _;
     },
     unzip:function(l)
     {
      var x,y,enumerator,forLoopVar,b,a;
      x=[];
      y=[];
      enumerator=Enumerator.Get(l);
      while(enumerator.MoveNext())
       {
        forLoopVar=enumerator.get_Current();
        b=forLoopVar[1];
        a=forLoopVar[0];
        x.push(a);
        y.push(b);
       }
      return[List.ofArray(x.slice(0)),List.ofArray(y.slice(0))];
     },
     unzip3:function(l)
     {
      var x,y,z,enumerator,forLoopVar,c,b,a;
      x=[];
      y=[];
      z=[];
      enumerator=Enumerator.Get(l);
      while(enumerator.MoveNext())
       {
        forLoopVar=enumerator.get_Current();
        c=forLoopVar[2];
        b=forLoopVar[1];
        a=forLoopVar[0];
        x.push(a);
        y.push(b);
        z.push(c);
       }
      return[List.ofArray(x.slice(0)),List.ofArray(y.slice(0)),List.ofArray(z.slice(0))];
     },
     zip:function(l1,l2)
     {
      return List.ofArray(Arrays.zip(Arrays.ofSeq(l1),Arrays.ofSeq(l2)));
     },
     zip3:function(l1,l2,l3)
     {
      return List.ofArray(Arrays.zip3(Arrays.ofSeq(l1),Arrays.ofSeq(l2),Arrays.ofSeq(l3)));
     }
    },
    OperatorIntrinsics:{
     GetArraySlice:function(source,start,finish)
     {
      var matchValue,_,_1,f,_2,s,f1,s1;
      matchValue=[start,finish];
      if(matchValue[0].$==0)
       {
        if(matchValue[1].$==1)
         {
          f=matchValue[1].$0;
          _1=source.slice(0,f+1);
         }
        else
         {
          _1=[];
         }
        _=_1;
       }
      else
       {
        if(matchValue[1].$==0)
         {
          s=matchValue[0].$0;
          _2=source.slice(s);
         }
        else
         {
          f1=matchValue[1].$0;
          s1=matchValue[0].$0;
          _2=source.slice(s1,f1+1);
         }
        _=_2;
       }
      return _;
     },
     GetArraySlice2D:function(arr,start1,finish1,start2,finish2)
     {
      var start11,_,n,start21,_1,n1,finish11,_2,n2,finish21,_3,n3,len1,len2;
      if(start1.$==1)
       {
        n=start1.$0;
        _=n;
       }
      else
       {
        _=0;
       }
      start11=_;
      if(start2.$==1)
       {
        n1=start2.$0;
        _1=n1;
       }
      else
       {
        _1=0;
       }
      start21=_1;
      if(finish1.$==1)
       {
        n2=finish1.$0;
        _2=n2;
       }
      else
       {
        _2=arr.length-1;
       }
      finish11=_2;
      if(finish2.$==1)
       {
        n3=finish2.$0;
        _3=n3;
       }
      else
       {
        _3=(arr.length?arr[0].length:0)-1;
       }
      finish21=_3;
      len1=finish11-start11+1;
      len2=finish21-start21+1;
      return IntrinsicFunctionProxy.GetArray2DSub(arr,start11,start21,len1,len2);
     },
     GetArraySlice2DFixed1:function(arr,fixed1,start2,finish2)
     {
      var start21,_,n,finish21,_1,n1,len2,dst,j;
      if(start2.$==1)
       {
        n=start2.$0;
        _=n;
       }
      else
       {
        _=0;
       }
      start21=_;
      if(finish2.$==1)
       {
        n1=finish2.$0;
        _1=n1;
       }
      else
       {
        _1=(arr.length?arr[0].length:0)-1;
       }
      finish21=_1;
      len2=finish21-start21+1;
      dst=Array(len2);
      for(j=0;j<=len2-1;j++){
       IntrinsicFunctionProxy.SetArray(dst,j,IntrinsicFunctionProxy.GetArray2D(arr,fixed1,start21+j));
      }
      return dst;
     },
     GetArraySlice2DFixed2:function(arr,start1,finish1,fixed2)
     {
      var start11,_,n,finish11,_1,n1,len1,dst,i;
      if(start1.$==1)
       {
        n=start1.$0;
        _=n;
       }
      else
       {
        _=0;
       }
      start11=_;
      if(finish1.$==1)
       {
        n1=finish1.$0;
        _1=n1;
       }
      else
       {
        _1=arr.length-1;
       }
      finish11=_1;
      len1=finish11-start11+1;
      dst=Array(len1);
      for(i=0;i<=len1-1;i++){
       IntrinsicFunctionProxy.SetArray(dst,i,IntrinsicFunctionProxy.GetArray2D(arr,start11+i,fixed2));
      }
      return dst;
     },
     GetStringSlice:function(source,start,finish)
     {
      var matchValue,_,_1,f,_2,s,f1,s1;
      matchValue=[start,finish];
      if(matchValue[0].$==0)
       {
        if(matchValue[1].$==1)
         {
          f=matchValue[1].$0;
          _1=source.slice(0,f+1);
         }
        else
         {
          _1="";
         }
        _=_1;
       }
      else
       {
        if(matchValue[1].$==0)
         {
          s=matchValue[0].$0;
          _2=source.slice(s);
         }
        else
         {
          f1=matchValue[1].$0;
          s1=matchValue[0].$0;
          _2=source.slice(s1,f1+1);
         }
        _=_2;
       }
      return _;
     },
     SetArraySlice:function(dst,start,finish,src)
     {
      var start1,_,n,finish1,_1,n1;
      if(start.$==1)
       {
        n=start.$0;
        _=n;
       }
      else
       {
        _=0;
       }
      start1=_;
      if(finish.$==1)
       {
        n1=finish.$0;
        _1=n1;
       }
      else
       {
        _1=IntrinsicFunctionProxy.GetLength(dst)-1;
       }
      finish1=_1;
      return IntrinsicFunctionProxy.SetArraySub(dst,start1,finish1-start1+1,src);
     },
     SetArraySlice2D:function(dst,start1,finish1,start2,finish2,src)
     {
      var start11,_,n,start21,_1,n1,finish11,_2,n2,finish21,_3,n3;
      if(start1.$==1)
       {
        n=start1.$0;
        _=n;
       }
      else
       {
        _=0;
       }
      start11=_;
      if(start2.$==1)
       {
        n1=start2.$0;
        _1=n1;
       }
      else
       {
        _1=0;
       }
      start21=_1;
      if(finish1.$==1)
       {
        n2=finish1.$0;
        _2=n2;
       }
      else
       {
        _2=dst.length-1;
       }
      finish11=_2;
      if(finish2.$==1)
       {
        n3=finish2.$0;
        _3=n3;
       }
      else
       {
        _3=(dst.length?dst[0].length:0)-1;
       }
      finish21=_3;
      return IntrinsicFunctionProxy.SetArray2DSub(dst,start11,start21,finish11-start11+1,finish21-start21+1,src);
     },
     SetArraySlice2DFixed1:function(dst,fixed1,start2,finish2,src)
     {
      var start21,_,n,finish21,_1,n1,len2,j;
      if(start2.$==1)
       {
        n=start2.$0;
        _=n;
       }
      else
       {
        _=0;
       }
      start21=_;
      if(finish2.$==1)
       {
        n1=finish2.$0;
        _1=n1;
       }
      else
       {
        _1=(dst.length?dst[0].length:0)-1;
       }
      finish21=_1;
      len2=finish21-start21+1;
      for(j=0;j<=len2-1;j++){
       IntrinsicFunctionProxy.SetArray2D(dst,fixed1,start21+j,IntrinsicFunctionProxy.GetArray(src,j));
      }
      return;
     },
     SetArraySlice2DFixed2:function(dst,start1,finish1,fixed2,src)
     {
      var start11,_,n,finish11,_1,n1,len1,i;
      if(start1.$==1)
       {
        n=start1.$0;
        _=n;
       }
      else
       {
        _=0;
       }
      start11=_;
      if(finish1.$==1)
       {
        n1=finish1.$0;
        _1=n1;
       }
      else
       {
        _1=dst.length-1;
       }
      finish11=_1;
      len1=finish11-start11+1;
      for(i=0;i<=len1-1;i++){
       IntrinsicFunctionProxy.SetArray2D(dst,start11+i,fixed2,IntrinsicFunctionProxy.GetArray(src,i));
      }
      return;
     }
    },
    Operators:{
     Compare:function(a,b)
     {
      return Unchecked.Compare(a,b);
     },
     Decrement:function(x)
     {
      x.contents=x.contents-1;
     },
     DefaultArg:function(x,d)
     {
      var _,x1;
      if(x.$==0)
       {
        _=d;
       }
      else
       {
        x1=x.$0;
        _=x1;
       }
      return _;
     },
     FailWith:function(msg)
     {
      return Operators.Raise(new Error(msg));
     },
     Increment:function(x)
     {
      x.contents=x.contents+1;
     },
     KeyValue:function(kvp)
     {
      return[kvp.K,kvp.V];
     },
     Max:function(a,b)
     {
      return Unchecked.Compare(a,b)===1?a:b;
     },
     Min:function(a,b)
     {
      return Unchecked.Compare(a,b)===-1?a:b;
     },
     Pown:function(a,n)
     {
      var p;
      p=function(n1)
      {
       var _,_1,b;
       if(n1===1)
        {
         _=a;
        }
       else
        {
         if(n1%2===0)
          {
           b=p(n1/2>>0);
           _1=b*b;
          }
         else
          {
           _1=a*p(n1-1);
          }
         _=_1;
        }
       return _;
      };
      return p(n);
     },
     Raise:function($e)
     {
      var $0=this,$this=this;
      throw $e;
     },
     Sign:function(x)
     {
      return x===0?0:x<0?-1:1;
     },
     Truncate:function(x)
     {
      return x<0?Math.ceil(x):Math.floor(x);
     },
     Using:function(t,f)
     {
      var _;
      try
      {
       _=f(t);
      }
      finally
      {
       t.Dispose();
      }
      return _;
     },
     range:function(min,max)
     {
      return Seq.init(1+max-min,function(x)
      {
       return x+min;
      });
     },
     step:function(min,step,max)
     {
      var s,predicate,source,x;
      s=Operators.Sign(step);
      predicate=function(k)
      {
       return s*(max-k)>=0;
      };
      source=Seq.initInfinite(function(k)
      {
       return min+k*step;
      });
      x=Seq.takeWhile(predicate,source);
      return x;
     }
    },
    Option:{
     bind:function(f,x)
     {
      var _,x1;
      if(x.$==0)
       {
        _={
         $:0
        };
       }
      else
       {
        x1=x.$0;
        _=f(x1);
       }
      return _;
     },
     exists:function(p,x)
     {
      var _,x1;
      if(x.$==0)
       {
        _=false;
       }
      else
       {
        x1=x.$0;
        _=p(x1);
       }
      return _;
     },
     fold:function(f,s,x)
     {
      var _,x1;
      if(x.$==0)
       {
        _=s;
       }
      else
       {
        x1=x.$0;
        _=(f(s))(x1);
       }
      return _;
     },
     foldBack:function(f,x,s)
     {
      var _,x1;
      if(x.$==0)
       {
        _=s;
       }
      else
       {
        x1=x.$0;
        _=(f(x1))(s);
       }
      return _;
     },
     forall:function(p,x)
     {
      var _,x1;
      if(x.$==0)
       {
        _=true;
       }
      else
       {
        x1=x.$0;
        _=p(x1);
       }
      return _;
     },
     iter:function(p,x)
     {
      var _,x1;
      if(x.$==0)
       {
        _=null;
       }
      else
       {
        x1=x.$0;
        _=p(x1);
       }
      return _;
     },
     map:function(f,x)
     {
      var _,x1;
      if(x.$==0)
       {
        _={
         $:0
        };
       }
      else
       {
        x1=x.$0;
        _={
         $:1,
         $0:f(x1)
        };
       }
      return _;
     },
     toArray:function(x)
     {
      var _,x1;
      if(x.$==0)
       {
        _=[];
       }
      else
       {
        x1=x.$0;
        _=[x1];
       }
      return _;
     },
     toList:function(x)
     {
      var _,x1;
      if(x.$==0)
       {
        _=Runtime.New(T1,{
         $:0
        });
       }
      else
       {
        x1=x.$0;
        _=List.ofArray([x1]);
       }
      return _;
     }
    },
    Pervasives:{
     NewFromList:function(fields)
     {
      var r,enumerator,forLoopVar,v,k;
      r={};
      enumerator=Enumerator.Get(fields);
      while(enumerator.MoveNext())
       {
        forLoopVar=enumerator.get_Current();
        v=forLoopVar[1];
        k=forLoopVar[0];
        r[k]=v;
       }
      return r;
     }
    },
    PrintfHelpers:{
     padNumLeft:function(s,l)
     {
      var f,_,_this,i;
      f=IntrinsicFunctionProxy.GetArray(s,0);
      if((f===" "?true:f==="+")?true:f==="-")
       {
        _this=s.substr(1);
        i=l-1;
        _=f+Strings.PadLeftWith(_this,i,48);
       }
      else
       {
        _=Strings.PadLeftWith(s,l,48);
       }
      return _;
     },
     plusForPos:function(n,s)
     {
      return 0<=n?"+"+s:s;
     },
     plusForPos0:function(n,s)
     {
      return 0<=n?"+"+s:s;
     },
     prettyPrint:function(o)
     {
      var printObject,t,_1,_2,_3,mapping1,strings1;
      printObject=function(o1)
      {
       var s,_,x,mapping,strings;
       s=Global.String(o1);
       if(s==="[object Object]")
        {
         x=JavaScript.GetFields(o1);
         mapping=Runtime.Tupled(function(tupledArg)
         {
          var k,v;
          k=tupledArg[0];
          v=tupledArg[1];
          return k+" = "+PrintfHelpers.prettyPrint(v);
         });
         strings=Arrays.map(mapping,x);
         _="{"+Strings.concat("; ",strings)+"}";
        }
       else
        {
         _=s;
        }
       return _;
      };
      t=typeof o;
      if(t=="string")
       {
        _1="\""+o+"\"";
       }
      else
       {
        if(t=="object")
         {
          if(o instanceof Global.Array)
           {
            mapping1=function(o1)
            {
             return PrintfHelpers.prettyPrint(o1);
            };
            strings1=Arrays.map(mapping1,o);
            _3="[|"+Strings.concat("; ",strings1)+"|]";
           }
          else
           {
            _3=printObject(o);
           }
          _2=_3;
         }
        else
         {
          _2=Global.String(o);
         }
        _1=_2;
       }
      return _1;
     },
     printArray:function(p,o)
     {
      var strings;
      strings=Arrays.map(p,o);
      return"[|"+Strings.concat("; ",strings)+"|]";
     },
     printArray2D:function(p,o)
     {
      var strings;
      strings=Seq.delay(function()
      {
       var l2;
       l2=o.length?o[0].length:0;
       return Seq.map(function(i)
       {
        var strings1;
        strings1=Seq.delay(function()
        {
         return Seq.map(function(j)
         {
          return p(IntrinsicFunctionProxy.GetArray2D(o,i,j));
         },Operators.range(0,l2-1));
        });
        return Strings.concat("; ",strings1);
       },Operators.range(0,o.length-1));
      });
      return"[["+Strings.concat("][",strings)+"]]";
     },
     printList:function(p,o)
     {
      var strings;
      strings=Seq.map(p,o);
      return"["+Strings.concat("; ",strings)+"]";
     },
     spaceForPos:function(n,s)
     {
      return 0<=n?" "+s:s;
     },
     toSafe:function(s)
     {
      return s==null?"":s;
     }
    },
    Queue:{
     Clear:function(a)
     {
      return a.splice(0,IntrinsicFunctionProxy.GetLength(a));
     },
     Contains:function(a,el)
     {
      return Seq.exists(function(y)
      {
       return Unchecked.Equals(el,y);
      },a);
     },
     CopyTo:function(a,array,index)
     {
      return Arrays.blit(a,0,array,index,IntrinsicFunctionProxy.GetLength(a));
     }
    },
    Remoting:{
     AjaxProvider:Runtime.Field(function()
     {
      return XhrProvider.New();
     }),
     Async:function(m,data)
     {
      var headers,payload,f;
      headers=Remoting.makeHeaders(m);
      payload=Remoting.makePayload(data);
      f=function()
      {
       var x,f1;
       x=AsyncProxy.get_CancellationToken();
       f1=function(_arg1)
       {
        var callback,x2;
        callback=Runtime.Tupled(function(tupledArg)
        {
         var ok,err,cc,waiting,callback1,reg,ok1,err1,arg00;
         ok=tupledArg[0];
         err=tupledArg[1];
         cc=tupledArg[2];
         waiting={
          contents:true
         };
         callback1=function()
         {
          var _;
          if(waiting.contents)
           {
            waiting.contents=false;
            _=cc(new Error("OperationCanceledException"));
           }
          else
           {
            _=null;
           }
          return _;
         };
         reg=Concurrency.Register(_arg1,function()
         {
          return callback1();
         });
         ok1=function(x1)
         {
          var _;
          if(waiting.contents)
           {
            waiting.contents=false;
            reg.Dispose();
            _=ok(Json.Activate(JSON.parse(x1)));
           }
          else
           {
            _=null;
           }
          return _;
         };
         err1=function(e)
         {
          var _;
          if(waiting.contents)
           {
            waiting.contents=false;
            reg.Dispose();
            _=err(e);
           }
          else
           {
            _=null;
           }
          return _;
         };
         arg00=Remoting.EndPoint();
         return Remoting.AjaxProvider().Async(arg00,headers,payload,ok1,err1);
        });
        x2=Concurrency.FromContinuations(callback);
        return x2;
       };
       return Concurrency.Bind(x,f1);
      };
      return Concurrency.Delay(f);
     },
     Call:function(m,data)
     {
      var arg00,arg10,arg20,data1;
      arg00=Remoting.EndPoint();
      arg10=Remoting.makeHeaders(m);
      arg20=Remoting.makePayload(data);
      data1=Remoting.AjaxProvider().Sync(arg00,arg10,arg20);
      return Json.Activate(JSON.parse(data1));
     },
     EndPoint:Runtime.Field(function()
     {
      return"?";
     }),
     Send:function(m,data)
     {
      var computation,computation1,t;
      computation=Remoting.Async(m,data);
      computation1=Concurrency.Ignore(computation);
      t={
       $:0
      };
      return Concurrency.Start(computation1,t);
     },
     XhrProvider:Runtime.Class({
      Async:function(url,headers,data,ok,err)
      {
       return Remoting.ajax(true,url,headers,data,ok,err);
      },
      Sync:function(url,headers,data)
      {
       var res;
       res={
        contents:undefined
       };
       Remoting.ajax(false,url,headers,data,function(x)
       {
        res.contents=x;
       },function(e)
       {
        return Operators.Raise(e);
       });
       return res.contents;
      }
     },{
      New:function()
      {
       return Runtime.New(this,{});
      }
     }),
     ajax:function($async,$url,$headers,$data,$ok,$err)
     {
      var $0=this,$this=this;
      var xhr=new Global.XMLHttpRequest();
      xhr.open("POST",$url,$async);
      for(var h in $headers){
       xhr.setRequestHeader(h,$headers[h]);
      }
      function k()
      {
       if(xhr.status==200)
        {
         $ok(xhr.responseText);
        }
       else
        {
         var msg="Response status is not 200: ";
         $err(new Global.Error(msg+xhr.status));
        }
      }
      if("onload"in xhr)
       {
        xhr.onload=xhr.onerror=xhr.onabort=k;
       }
      else
       {
        xhr.onreadystatechange=function()
        {
         if(xhr.readyState==4)
          {
           k();
          }
        };
       }
      xhr.send($data);
     },
     makeHeaders:function(m)
     {
      var headers;
      headers={};
      headers["content-type"]="application/json";
      headers["x-websharper-rpc"]=m;
      return headers;
     },
     makePayload:function(data)
     {
      return JSON.stringify(data);
     }
    },
    Seq:{
     append:function(s1,s2)
     {
      return Enumerable.Of(function()
      {
       var e1,next;
       e1=Enumerator.Get(s1);
       next=function(x)
       {
        var _,v,_1,e2,_2,v1;
        if(x.s.MoveNext())
         {
          v=x.s.get_Current();
          x.c=v;
          _=true;
         }
        else
         {
          if(x.s===e1)
           {
            e2=Enumerator.Get(s2);
            x.s=e2;
            if(e2.MoveNext())
             {
              v1=e2.get_Current();
              x.c=v1;
              _2=true;
             }
            else
             {
              _2=false;
             }
            _1=_2;
           }
          else
           {
            _1=false;
           }
          _=_1;
         }
        return _;
       };
       return T.New(e1,null,next);
      });
     },
     average:function(s)
     {
      var patternInput,sum,count;
      patternInput=Seq.fold(Runtime.Tupled(function(tupledArg)
      {
       var n,s1;
       n=tupledArg[0];
       s1=tupledArg[1];
       return function(x)
       {
        return[n+1,s1+x];
       };
      }),[0,0],s);
      sum=patternInput[1];
      count=patternInput[0];
      return sum/count;
     },
     averageBy:function(f,s)
     {
      var patternInput,sum,count;
      patternInput=Seq.fold(Runtime.Tupled(function(tupledArg)
      {
       var n,s1;
       n=tupledArg[0];
       s1=tupledArg[1];
       return function(x)
       {
        return[n+1,s1+f(x)];
       };
      }),[0,0],s);
      sum=patternInput[1];
      count=patternInput[0];
      return sum/count;
     },
     cache:function(s)
     {
      var cache,_enum,getEnumerator;
      cache=[];
      _enum=Enumerator.Get(s);
      getEnumerator=function()
      {
       var next;
       next=function(e)
       {
        var _,v,v1,_1,v2,v3;
        if(e.s+1<cache.length)
         {
          v=e.s+1;
          e.s=v;
          v1=cache[e.s];
          e.c=v1;
          _=true;
         }
        else
         {
          if(_enum.MoveNext())
           {
            v2=e.s+1;
            e.s=v2;
            v3=_enum.get_Current();
            e.c=v3;
            cache.push(e.get_Current());
            _1=true;
           }
          else
           {
            _1=false;
           }
          _=_1;
         }
        return _;
       };
       return T.New(0,null,next);
      };
      return Enumerable.Of(getEnumerator);
     },
     choose:function(f,s)
     {
      var mapping;
      mapping=function(x)
      {
       var matchValue,_,v;
       matchValue=f(x);
       if(matchValue.$==0)
        {
         _=Runtime.New(T1,{
          $:0
         });
        }
       else
        {
         v=matchValue.$0;
         _=List.ofArray([v]);
        }
       return _;
      };
      return Seq.collect(mapping,s);
     },
     collect:function(f,s)
     {
      return Seq.concat(Seq.map(f,s));
     },
     compareWith:function(f,s1,s2)
     {
      var e1,e2,r,loop,matchValue;
      e1=Enumerator.Get(s1);
      e2=Enumerator.Get(s2);
      r=0;
      loop=true;
      while(loop?r===0:false)
       {
        matchValue=[e1.MoveNext(),e2.MoveNext()];
        matchValue[0]?matchValue[1]?r=(f(e1.get_Current()))(e2.get_Current()):r=1:matchValue[1]?r=-1:loop=false;
       }
      return r;
     },
     concat:function(ss)
     {
      return Enumerable.Of(function()
      {
       var outerE,next;
       outerE=Enumerator.Get(ss);
       next=function(st)
       {
        var matchValue,_,_1,v,_2,v1;
        matchValue=st.s;
        if(Unchecked.Equals(matchValue,null))
         {
          if(outerE.MoveNext())
           {
            v=Enumerator.Get(outerE.get_Current());
            st.s=v;
            _1=next(st);
           }
          else
           {
            _1=false;
           }
          _=_1;
         }
        else
         {
          if(matchValue.MoveNext())
           {
            v1=matchValue.get_Current();
            st.c=v1;
            _2=true;
           }
          else
           {
            st.s=null;
            _2=next(st);
           }
          _=_2;
         }
        return _;
       };
       return T.New(null,null,next);
      });
     },
     countBy:function(f,s)
     {
      var generator;
      generator=function()
      {
       var d,e,keys,k,h,_,mapping,array,x;
       d={};
       e=Enumerator.Get(s);
       keys=[];
       while(e.MoveNext())
        {
         k=f(e.get_Current());
         h=Unchecked.Hash(k);
         if(d.hasOwnProperty(h))
          {
           _=void(d[h]=d[h]+1);
          }
         else
          {
           keys.push(k);
           _=void(d[h]=1);
          }
        }
       mapping=function(k1)
       {
        return[k1,d[Unchecked.Hash(k1)]];
       };
       array=keys.slice(0);
       x=Arrays.map(mapping,array);
       return x;
      };
      return Seq.delay(generator);
     },
     delay:function(f)
     {
      return Enumerable.Of(function()
      {
       return Enumerator.Get(f(null));
      });
     },
     distinct:function(s)
     {
      return Seq.distinctBy(function(x)
      {
       return x;
      },s);
     },
     distinctBy:function(f,s)
     {
      var getEnumerator;
      getEnumerator=function()
      {
       var _enum,seen,next;
       _enum=Enumerator.Get(s);
       seen={};
       next=function(e)
       {
        var _,cur,h,check,has,_1,v;
        if(_enum.MoveNext())
         {
          cur=_enum.get_Current();
          h=function(c)
          {
           var x;
           x=f(c);
           return Unchecked.Hash(x);
          };
          check=function(c)
          {
           return seen.hasOwnProperty(h(c));
          };
          has=check(cur);
          while(has?_enum.MoveNext():false)
           {
            cur=_enum.get_Current();
            has=check(cur);
           }
          if(has)
           {
            _1=false;
           }
          else
           {
            seen[h(cur)]=null;
            v=cur;
            e.c=v;
            _1=true;
           }
          _=_1;
         }
        else
         {
          _=false;
         }
        return _;
       };
       return T.New(null,null,next);
      };
      return Enumerable.Of(getEnumerator);
     },
     empty:function()
     {
      return[];
     },
     enumFinally:function(s,f)
     {
      return Enumerable.Of(function()
      {
       var e,_,e1,next;
       try
       {
        _=Enumerator.Get(s);
       }
       catch(e1)
       {
        f(null);
        _=Operators.Raise(e1);
       }
       e=_;
       next=function(x)
       {
        var _1,_2,v,e2;
        try
        {
         if(e.MoveNext())
          {
           v=e.get_Current();
           x.c=v;
           _2=true;
          }
         else
          {
           f(null);
           _2=false;
          }
         _1=_2;
        }
        catch(e2)
        {
         f(null);
         _1=Operators.Raise(e2);
        }
        return _1;
       };
       return T.New(null,null,next);
      });
     },
     enumUsing:function(x,f)
     {
      return f(x);
     },
     enumWhile:function(f,s)
     {
      return Enumerable.Of(function()
      {
       var next,state;
       next=function(en)
       {
        var matchValue,_,e,_1,v,v1,_2,v2;
        matchValue=en.s;
        if(matchValue.$==1)
         {
          e=matchValue.$0;
          if(e.MoveNext())
           {
            v=e.get_Current();
            en.c=v;
            _1=true;
           }
          else
           {
            v1={
             $:0
            };
            en.s=v1;
            _1=next(en);
           }
          _=_1;
         }
        else
         {
          if(f(null))
           {
            v2={
             $:1,
             $0:Enumerator.Get(s)
            };
            en.s=v2;
            _2=next(en);
           }
          else
           {
            _2=false;
           }
          _=_2;
         }
        return _;
       };
       state={
        $:0
       };
       return T.New(state,null,next);
      });
     },
     exists:function(p,s)
     {
      var e,r;
      e=Enumerator.Get(s);
      r=false;
      while(!r?e.MoveNext():false)
       {
        r=p(e.get_Current());
       }
      return r;
     },
     exists2:function(p,s1,s2)
     {
      var e1,e2,r;
      e1=Enumerator.Get(s1);
      e2=Enumerator.Get(s2);
      r=false;
      while((!r?e1.MoveNext():false)?e2.MoveNext():false)
       {
        r=(p(e1.get_Current()))(e2.get_Current());
       }
      return r;
     },
     filter:function(f,s)
     {
      var getEnumerator;
      getEnumerator=function()
      {
       var _enum,next;
       _enum=Enumerator.Get(s);
       next=function(e)
       {
        var loop,c,res,_,v;
        loop=_enum.MoveNext();
        c=_enum.get_Current();
        res=false;
        while(loop)
         {
          if(f(c))
           {
            v=c;
            e.c=v;
            res=true;
            _=loop=false;
           }
          else
           {
            _=_enum.MoveNext()?c=_enum.get_Current():loop=false;
           }
         }
        return res;
       };
       return T.New(null,null,next);
      };
      return Enumerable.Of(getEnumerator);
     },
     find:function(p,s)
     {
      var matchValue,_,x;
      matchValue=Seq.tryFind(p,s);
      if(matchValue.$==0)
       {
        _=Operators.FailWith("KeyNotFoundException");
       }
      else
       {
        x=matchValue.$0;
        _=x;
       }
      return _;
     },
     findIndex:function(p,s)
     {
      var matchValue,_,x;
      matchValue=Seq.tryFindIndex(p,s);
      if(matchValue.$==0)
       {
        _=Operators.FailWith("KeyNotFoundException");
       }
      else
       {
        x=matchValue.$0;
        _=x;
       }
      return _;
     },
     fold:function(f,x,s)
     {
      var r,e;
      r=x;
      e=Enumerator.Get(s);
      while(e.MoveNext())
       {
        r=(f(r))(e.get_Current());
       }
      return r;
     },
     forall:function(p,s)
     {
      return!Seq.exists(function(x)
      {
       return!p(x);
      },s);
     },
     forall2:function(p,s1,s2)
     {
      return!Seq.exists2(function(x)
      {
       return function(y)
       {
        return!(p(x))(y);
       };
      },s1,s2);
     },
     groupBy:function(f,s)
     {
      return Seq.delay(function()
      {
       var d,d1,keys,e,c,k,h;
       d={};
       d1={};
       keys=[];
       e=Enumerator.Get(s);
       while(e.MoveNext())
        {
         c=e.get_Current();
         k=f(c);
         h=Unchecked.Hash(k);
         !d.hasOwnProperty(h)?keys.push(k):null;
         d1[h]=k;
         d.hasOwnProperty(h)?d[h].push(c):void(d[h]=[c]);
        }
       return Arrays.map(function(k1)
       {
        return[k1,d[Unchecked.Hash(k1)]];
       },keys);
      });
     },
     head:function(s)
     {
      var e;
      e=Enumerator.Get(s);
      return e.MoveNext()?e.get_Current():Seq.insufficient();
     },
     init:function(n,f)
     {
      return Seq.take(n,Seq.initInfinite(f));
     },
     initInfinite:function(f)
     {
      var getEnumerator;
      getEnumerator=function()
      {
       var next;
       next=function(e)
       {
        var v,v1;
        v=f(e.s);
        e.c=v;
        v1=e.s+1;
        e.s=v1;
        return true;
       };
       return T.New(0,null,next);
      };
      return Enumerable.Of(getEnumerator);
     },
     insufficient:function()
     {
      return Operators.FailWith("The input sequence has an insufficient number of elements.");
     },
     isEmpty:function(s)
     {
      var e;
      e=Enumerator.Get(s);
      return!e.MoveNext();
     },
     iter:function(p,s)
     {
      return Seq.iteri(function()
      {
       return function(x)
       {
        return p(x);
       };
      },s);
     },
     iter2:function(p,s1,s2)
     {
      var e1,e2;
      e1=Enumerator.Get(s1);
      e2=Enumerator.Get(s2);
      while(e1.MoveNext()?e2.MoveNext():false)
       {
        (p(e1.get_Current()))(e2.get_Current());
       }
      return;
     },
     iteri:function(p,s)
     {
      var i,e;
      i=0;
      e=Enumerator.Get(s);
      while(e.MoveNext())
       {
        (p(i))(e.get_Current());
        i=i+1;
       }
      return;
     },
     length:function(s)
     {
      var i,e;
      i=0;
      e=Enumerator.Get(s);
      while(e.MoveNext())
       {
        i=i+1;
       }
      return i;
     },
     map:function(f,s)
     {
      var getEnumerator;
      getEnumerator=function()
      {
       var en,next;
       en=Enumerator.Get(s);
       next=function(e)
       {
        var _,v;
        if(en.MoveNext())
         {
          v=f(en.get_Current());
          e.c=v;
          _=true;
         }
        else
         {
          _=false;
         }
        return _;
       };
       return T.New(null,null,next);
      };
      return Enumerable.Of(getEnumerator);
     },
     mapi:function(f,s)
     {
      return Seq.mapi2(f,Seq.initInfinite(function(x)
      {
       return x;
      }),s);
     },
     mapi2:function(f,s1,s2)
     {
      var getEnumerator;
      getEnumerator=function()
      {
       var e1,e2,next;
       e1=Enumerator.Get(s1);
       e2=Enumerator.Get(s2);
       next=function(e)
       {
        var _,v;
        if(e1.MoveNext()?e2.MoveNext():false)
         {
          v=(f(e1.get_Current()))(e2.get_Current());
          e.c=v;
          _=true;
         }
        else
         {
          _=false;
         }
        return _;
       };
       return T.New(null,null,next);
      };
      return Enumerable.Of(getEnumerator);
     },
     max:function(s)
     {
      return Seq.reduce(function(x)
      {
       return function(y)
       {
        return Unchecked.Compare(x,y)>=0?x:y;
       };
      },s);
     },
     maxBy:function(f,s)
     {
      return Seq.reduce(function(x)
      {
       return function(y)
       {
        return Unchecked.Compare(f(x),f(y))>=0?x:y;
       };
      },s);
     },
     min:function(s)
     {
      return Seq.reduce(function(x)
      {
       return function(y)
       {
        return Unchecked.Compare(x,y)<=0?x:y;
       };
      },s);
     },
     minBy:function(f,s)
     {
      return Seq.reduce(function(x)
      {
       return function(y)
       {
        return Unchecked.Compare(f(x),f(y))<=0?x:y;
       };
      },s);
     },
     nth:function(index,s)
     {
      var pos,e;
      index<0?Operators.FailWith("negative index requested"):null;
      pos=-1;
      e=Enumerator.Get(s);
      while(pos<index)
       {
        !e.MoveNext()?Seq.insufficient():null;
        pos=pos+1;
       }
      return e.get_Current();
     },
     pairwise:function(s)
     {
      var mapping,source;
      mapping=function(x)
      {
       return[IntrinsicFunctionProxy.GetArray(x,0),IntrinsicFunctionProxy.GetArray(x,1)];
      };
      source=Seq.windowed(2,s);
      return Seq.map(mapping,source);
     },
     pick:function(p,s)
     {
      var matchValue,_,x;
      matchValue=Seq.tryPick(p,s);
      if(matchValue.$==0)
       {
        _=Operators.FailWith("KeyNotFoundException");
       }
      else
       {
        x=matchValue.$0;
        _=x;
       }
      return _;
     },
     readOnly:function(s)
     {
      return Enumerable.Of(function()
      {
       return Enumerator.Get(s);
      });
     },
     reduce:function(f,source)
     {
      var e,r;
      e=Enumerator.Get(source);
      !e.MoveNext()?Operators.FailWith("The input sequence was empty"):null;
      r=e.get_Current();
      while(e.MoveNext())
       {
        r=(f(r))(e.get_Current());
       }
      return r;
     },
     scan:function(f,x,s)
     {
      var getEnumerator;
      getEnumerator=function()
      {
       var en,next;
       en=Enumerator.Get(s);
       next=function(e)
       {
        var _,_1,v;
        if(e.s)
         {
          if(en.MoveNext())
           {
            v=(f(e.get_Current()))(en.get_Current());
            e.c=v;
            _1=true;
           }
          else
           {
            _1=false;
           }
          _=_1;
         }
        else
         {
          e.c=x;
          e.s=true;
          _=true;
         }
        return _;
       };
       return T.New(false,null,next);
      };
      return Enumerable.Of(getEnumerator);
     },
     skip:function(n,s)
     {
      return Enumerable.Of(function()
      {
       var e,i;
       e=Enumerator.Get(s);
       for(i=1;i<=n;i++){
        !e.MoveNext()?Seq.insufficient():null;
       }
       return e;
      });
     },
     skipWhile:function(f,s)
     {
      return Enumerable.Of(function()
      {
       var e,empty,_,_this,next;
       e=Enumerator.Get(s);
       empty=true;
       while(e.MoveNext()?f(e.get_Current()):false)
        {
         empty=false;
        }
       if(empty)
        {
         _this=Seq.empty();
         _=Enumerator.Get(_this);
        }
       else
        {
         next=function(x)
         {
          var _1,v,r,v1;
          if(x.s)
           {
            x.s=false;
            v=e.get_Current();
            x.c=v;
            _1=true;
           }
          else
           {
            r=e.MoveNext();
            v1=e.get_Current();
            x.c=v1;
            _1=r;
           }
          return _1;
         };
         _=T.New(true,null,next);
        }
       return _;
      });
     },
     sort:function(s)
     {
      return Seq.sortBy(function(x)
      {
       return x;
      },s);
     },
     sortBy:function(f,s)
     {
      return Seq.delay(function()
      {
       var array;
       array=Arrays.ofSeq(s);
       Arrays.sortInPlaceBy(f,array);
       return array;
      });
     },
     sum:function(s)
     {
      return Seq.fold(function(s1)
      {
       return function(x)
       {
        return s1+x;
       };
      },0,s);
     },
     sumBy:function(f,s)
     {
      return Seq.fold(function(s1)
      {
       return function(x)
       {
        return s1+f(x);
       };
      },0,s);
     },
     take:function(n,s)
     {
      return Enumerable.Of(function()
      {
       var e,next;
       e=Enumerator.Get(s);
       next=function(_enum)
       {
        var _,_1,v,v1;
        if(_enum.s>=n)
         {
          _=false;
         }
        else
         {
          if(e.MoveNext())
           {
            v=_enum.s+1;
            _enum.s=v;
            v1=e.get_Current();
            _enum.c=v1;
            _1=true;
           }
          else
           {
            e.Dispose();
            _enum.s=n;
            _1=false;
           }
          _=_1;
         }
        return _;
       };
       return T.New(0,null,next);
      });
     },
     takeWhile:function(f,s)
     {
      return Seq.delay(function()
      {
       return Seq.enumUsing(Enumerator.Get(s),function(e)
       {
        return Seq.enumWhile(function()
        {
         return e.MoveNext()?f(e.get_Current()):false;
        },Seq.delay(function()
        {
         return[e.get_Current()];
        }));
       });
      });
     },
     toArray:function(s)
     {
      var q,enumerator,e;
      q=[];
      enumerator=Enumerator.Get(s);
      while(enumerator.MoveNext())
       {
        e=enumerator.get_Current();
        q.push(e);
       }
      return q.slice(0);
     },
     toList:function(s)
     {
      return List.ofSeq(s);
     },
     truncate:function(n,s)
     {
      return Seq.delay(function()
      {
       return Seq.enumUsing(Enumerator.Get(s),function(e)
       {
        var i;
        i={
         contents:0
        };
        return Seq.enumWhile(function()
        {
         return e.MoveNext()?i.contents<n:false;
        },Seq.delay(function()
        {
         Operators.Increment(i);
         return[e.get_Current()];
        }));
       });
      });
     },
     tryFind:function(ok,s)
     {
      var e,r,x;
      e=Enumerator.Get(s);
      r={
       $:0
      };
      while(r.$==0?e.MoveNext():false)
       {
        x=e.get_Current();
        ok(x)?r={
         $:1,
         $0:x
        }:null;
       }
      return r;
     },
     tryFindIndex:function(ok,s)
     {
      var e,loop,i,x;
      e=Enumerator.Get(s);
      loop=true;
      i=0;
      while(loop?e.MoveNext():false)
       {
        x=e.get_Current();
        ok(x)?loop=false:i=i+1;
       }
      return loop?{
       $:0
      }:{
       $:1,
       $0:i
      };
     },
     tryPick:function(f,s)
     {
      var e,r;
      e=Enumerator.Get(s);
      r={
       $:0
      };
      while(Unchecked.Equals(r,{
       $:0
      })?e.MoveNext():false)
       {
        r=f(e.get_Current());
       }
      return r;
     },
     unfold:function(f,s)
     {
      var getEnumerator;
      getEnumerator=function()
      {
       var next;
       next=function(e)
       {
        var matchValue,_,t,s1;
        matchValue=f(e.s);
        if(matchValue.$==0)
         {
          _=false;
         }
        else
         {
          t=matchValue.$0[0];
          s1=matchValue.$0[1];
          e.c=t;
          e.s=s1;
          _=true;
         }
        return _;
       };
       return T.New(s,null,next);
      };
      return Enumerable.Of(getEnumerator);
     },
     windowed:function(windowSize,s)
     {
      windowSize<=0?Operators.FailWith("The input must be non-negative."):null;
      return Seq.delay(function()
      {
       return Seq.enumUsing(Enumerator.Get(s),function(e)
       {
        var q;
        q=[];
        return Seq.append(Seq.enumWhile(function()
        {
         return q.length<windowSize?e.MoveNext():false;
        },Seq.delay(function()
        {
         q.push(e.get_Current());
         return Seq.empty();
        })),Seq.delay(function()
        {
         return q.length===windowSize?Seq.append([q.slice(0)],Seq.delay(function()
         {
          return Seq.enumWhile(function()
          {
           return e.MoveNext();
          },Seq.delay(function()
          {
           q.shift();
           q.push(e.get_Current());
           return[q.slice(0)];
          }));
         })):Seq.empty();
        }));
       });
      });
     },
     zip:function(s1,s2)
     {
      return Seq.mapi2(function(x)
      {
       return function(y)
       {
        return[x,y];
       };
      },s1,s2);
     },
     zip3:function(s1,s2,s3)
     {
      return Seq.mapi2(function(x)
      {
       return Runtime.Tupled(function(tupledArg)
       {
        var y,z;
        y=tupledArg[0];
        z=tupledArg[1];
        return[x,y,z];
       });
      },s1,Seq.zip(s2,s3));
     }
    },
    Stack:{
     Clear:function(stack)
     {
      return stack.splice(0,IntrinsicFunctionProxy.GetLength(stack));
     },
     Contains:function(stack,el)
     {
      return Seq.exists(function(y)
      {
       return Unchecked.Equals(el,y);
      },stack);
     },
     CopyTo:function(stack,array,index)
     {
      return Arrays.blit(array,0,array,index,IntrinsicFunctionProxy.GetLength(stack));
     }
    },
    Strings:{
     Compare:function(x,y)
     {
      return Operators.Compare(x,y);
     },
     CopyTo:function(s,o,d,off,ct)
     {
      return Arrays.blit(Strings.ToCharArray(s),o,d,off,ct);
     },
     EndsWith:function($x,$s)
     {
      var $0=this,$this=this;
      return $x.substring($x.length-$s.length)==$s;
     },
     IndexOf:function($s,$c,$i)
     {
      var $0=this,$this=this;
      return $s.indexOf(Global.String.fromCharCode($c),$i);
     },
     Insert:function($x,$index,$s)
     {
      var $0=this,$this=this;
      return $x.substring(0,$index-1)+$s+$x.substring($index);
     },
     IsNullOrEmpty:function($x)
     {
      var $0=this,$this=this;
      return $x==null||$x=="";
     },
     Join:function($sep,$values)
     {
      var $0=this,$this=this;
      return $values.join($sep);
     },
     LastIndexOf:function($s,$c,$i)
     {
      var $0=this,$this=this;
      return $s.lastIndexOf(Global.String.fromCharCode($c),$i);
     },
     PadLeft:function(s,n)
     {
      return Strings.PadLeftWith(s,n,32);
     },
     PadLeftWith:function($s,$n,$c)
     {
      var $0=this,$this=this;
      return Global.Array($n-$s.length+1).join(Global.String.fromCharCode($c))+$s;
     },
     PadRight:function(s,n)
     {
      return Strings.PadRightWith(s,n,32);
     },
     PadRightWith:function($s,$n,$c)
     {
      var $0=this,$this=this;
      return $s+Global.Array($n-$s.length+1).join(Global.String.fromCharCode($c));
     },
     RegexEscape:function($s)
     {
      var $0=this,$this=this;
      return $s.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");
     },
     Remove:function($x,$ix,$ct)
     {
      var $0=this,$this=this;
      return $x.substring(0,$ix)+$x.substring($ix+$ct);
     },
     Replace:function(subject,search,replace)
     {
      var replaceLoop;
      replaceLoop=function(subj)
      {
       var index,_,replaced,nextStartIndex,ct;
       index=subj.indexOf(search);
       if(index!==-1)
        {
         replaced=Strings.ReplaceOnce(subj,search,replace);
         nextStartIndex=index+replace.length;
         ct=index+replace.length;
         _=Strings.Substring(replaced,0,ct)+replaceLoop(replaced.substring(nextStartIndex));
        }
       else
        {
         _=subj;
        }
       return _;
      };
      return replaceLoop(subject);
     },
     ReplaceChar:function(s,oldC,newC)
     {
      return Strings.Replace(s,String.fromCharCode(oldC),String.fromCharCode(newC));
     },
     ReplaceOnce:function($string,$search,$replace)
     {
      var $0=this,$this=this;
      return $string.replace($search,$replace);
     },
     Split:function(s,pat,opts)
     {
      var res;
      res=Strings.SplitWith(s,pat);
      return opts===1?Arrays.filter(function(x)
      {
       return x!=="";
      },res):res;
     },
     SplitChars:function(s,sep,opts)
     {
      var re;
      re="["+Strings.RegexEscape(String.fromCharCode.apply(undefined,sep))+"]";
      return Strings.Split(s,new RegExp(re),opts);
     },
     SplitStrings:function(s,sep,opts)
     {
      var re;
      re=Strings.concat("|",Arrays.map(function(s1)
      {
       return Strings.RegexEscape(s1);
      },sep));
      return Strings.Split(s,new RegExp(re),opts);
     },
     SplitWith:function($str,$pat)
     {
      var $0=this,$this=this;
      return $str.split($pat);
     },
     StartsWith:function($t,$s)
     {
      var $0=this,$this=this;
      return $t.substring(0,$s.length)==$s;
     },
     Substring:function($s,$ix,$ct)
     {
      var $0=this,$this=this;
      return $s.substr($ix,$ct);
     },
     ToCharArray:function(s)
     {
      return Arrays.init(s.length,function(x)
      {
       return s.charCodeAt(x);
      });
     },
     ToCharArrayRange:function(s,startIndex,length)
     {
      return Arrays.init(length,function(i)
      {
       return s.charCodeAt(startIndex+i);
      });
     },
     Trim:function($s)
     {
      var $0=this,$this=this;
      return $s.replace(/^\s+/,"").replace(/\s+$/,"");
     },
     collect:function(f,s)
     {
      return Arrays.init(s.length,function(i)
      {
       return f(s.charCodeAt(i));
      }).join("");
     },
     concat:function(separator,strings)
     {
      return Seq.toArray(strings).join(separator);
     },
     exists:function(f,s)
     {
      return Seq.exists(f,Strings.protect(s));
     },
     forall:function(f,s)
     {
      return Seq.forall(f,Strings.protect(s));
     },
     init:function(count,f)
     {
      return Arrays.init(count,f).join("");
     },
     iter:function(f,s)
     {
      return Seq.iter(f,Strings.protect(s));
     },
     iteri:function(f,s)
     {
      return Seq.iteri(f,Strings.protect(s));
     },
     length:function(s)
     {
      return Strings.protect(s).length;
     },
     map:function(f,s)
     {
      return Strings.collect(function(x)
      {
       return String.fromCharCode(f(x));
      },Strings.protect(s));
     },
     mapi:function(f,s)
     {
      return Seq.toArray(Seq.mapi(function(i)
      {
       return function(x)
       {
        return String.fromCharCode((f(i))(x));
       };
      },s)).join("");
     },
     protect:function(s)
     {
      return s===null?"":s;
     },
     replicate:function(count,s)
     {
      return Strings.init(count,function()
      {
       return s;
      });
     }
    },
    Unchecked:{
     Compare:function(a,b)
     {
      var _,matchValue,_1,matchValue1;
      if(a===b)
       {
        _=0;
       }
      else
       {
        matchValue=typeof a;
        if(matchValue==="undefined")
         {
          matchValue1=typeof b;
          _1=matchValue1==="undefined"?0:-1;
         }
        else
         {
          _1=matchValue==="function"?Operators.FailWith("Cannot compare function values."):matchValue==="boolean"?a<b?-1:1:matchValue==="number"?a<b?-1:1:matchValue==="string"?a<b?-1:1:a===null?-1:b===null?1:"CompareTo"in a?a.CompareTo(b):(a instanceof Array?b instanceof Array:false)?Unchecked.compareArrays(a,b):(a instanceof Date?b instanceof Date:false)?Unchecked.compareDates(a,b):Unchecked.compareArrays(JavaScript.GetFields(a),JavaScript.GetFields(b));
         }
        _=_1;
       }
      return _;
     },
     Equals:function(a,b)
     {
      var _,matchValue;
      if(a===b)
       {
        _=true;
       }
      else
       {
        matchValue=typeof a;
        _=matchValue==="object"?a===null?false:b===null?false:"Equals"in a?a.Equals(b):(a instanceof Array?b instanceof Array:false)?Unchecked.arrayEquals(a,b):(a instanceof Date?b instanceof Date:false)?Unchecked.dateEquals(a,b):Unchecked.arrayEquals(JavaScript.GetFields(a),JavaScript.GetFields(b)):false;
       }
      return _;
     },
     Hash:function(o)
     {
      var matchValue;
      matchValue=typeof o;
      return matchValue==="function"?0:matchValue==="boolean"?o?1:0:matchValue==="number"?o:matchValue==="string"?Unchecked.hashString(o):matchValue==="object"?o==null?0:o instanceof Array?Unchecked.hashArray(o):Unchecked.hashObject(o):0;
     },
     arrayEquals:function(a,b)
     {
      var _,eq,i;
      if(IntrinsicFunctionProxy.GetLength(a)===IntrinsicFunctionProxy.GetLength(b))
       {
        eq=true;
        i=0;
        while(eq?i<IntrinsicFunctionProxy.GetLength(a):false)
         {
          !Unchecked.Equals(IntrinsicFunctionProxy.GetArray(a,i),IntrinsicFunctionProxy.GetArray(b,i))?eq=false:null;
          i=i+1;
         }
        _=eq;
       }
      else
       {
        _=false;
       }
      return _;
     },
     compareArrays:function(a,b)
     {
      var _,_1,cmp,i;
      if(IntrinsicFunctionProxy.GetLength(a)<IntrinsicFunctionProxy.GetLength(b))
       {
        _=-1;
       }
      else
       {
        if(IntrinsicFunctionProxy.GetLength(a)>IntrinsicFunctionProxy.GetLength(b))
         {
          _1=1;
         }
        else
         {
          cmp=0;
          i=0;
          while(cmp===0?i<IntrinsicFunctionProxy.GetLength(a):false)
           {
            cmp=Unchecked.Compare(IntrinsicFunctionProxy.GetArray(a,i),IntrinsicFunctionProxy.GetArray(b,i));
            i=i+1;
           }
          _1=cmp;
         }
        _=_1;
       }
      return _;
     },
     compareDates:function(a,b)
     {
      return Operators.Compare(a.getTime(),b.getTime());
     },
     dateEquals:function(a,b)
     {
      return a.getTime()===b.getTime();
     },
     hashArray:function(o)
     {
      var h,i;
      h=-34948909;
      for(i=0;i<=IntrinsicFunctionProxy.GetLength(o)-1;i++){
       h=Unchecked.hashMix(h,Unchecked.Hash(IntrinsicFunctionProxy.GetArray(o,i)));
      }
      return h;
     },
     hashMix:function(x,y)
     {
      return(x<<5)+x+y;
     },
     hashObject:function(o)
     {
      var _,op_PlusPlus,h;
      if("GetHashCode"in o)
       {
        _=o.GetHashCode();
       }
      else
       {
        op_PlusPlus=function(x,y)
        {
         return Unchecked.hashMix(x,y);
        };
        h={
         contents:0
        };
        JavaScript.ForEach(o,function(key)
        {
         h.contents=op_PlusPlus(op_PlusPlus(h.contents,Unchecked.hashString(key)),Unchecked.Hash(o[key]));
         return false;
        });
        _=h.contents;
       }
      return _;
     },
     hashString:function(s)
     {
      var _,hash,i;
      if(s===null)
       {
        _=0;
       }
      else
       {
        hash=5381;
        for(i=0;i<=s.length-1;i++){
         hash=Unchecked.hashMix(hash,s.charCodeAt(i)<<0);
        }
        _=hash;
       }
      return _;
     }
    },
    Util:{
     addListener:function(event,h)
     {
      event.Subscribe(Util.observer(h));
     },
     observer:function(h)
     {
      return{
       OnCompleted:function()
       {
       },
       OnError:function()
       {
       },
       OnNext:h
      };
     },
     subscribeTo:function(event,h)
     {
      return event.Subscribe(Util.observer(h));
     }
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Arrays=Runtime.Safe(WebSharper.Arrays);
  Operators=Runtime.Safe(WebSharper.Operators);
  Number=Runtime.Safe(Global.Number);
  IntrinsicFunctionProxy=Runtime.Safe(WebSharper.IntrinsicFunctionProxy);
  Array=Runtime.Safe(Global.Array);
  Seq=Runtime.Safe(WebSharper.Seq);
  Unchecked=Runtime.Safe(WebSharper.Unchecked);
  Enumerator=Runtime.Safe(WebSharper.Enumerator);
  Arrays2D=Runtime.Safe(WebSharper.Arrays2D);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  AggregateException=Runtime.Safe(WebSharper.AggregateException);
  Option=Runtime.Safe(WebSharper.Option);
  clearTimeout=Runtime.Safe(Global.clearTimeout);
  setTimeout=Runtime.Safe(Global.setTimeout);
  CancellationTokenSource=Runtime.Safe(WebSharper.CancellationTokenSource);
  Char=Runtime.Safe(WebSharper.Char);
  Util=Runtime.Safe(WebSharper.Util);
  Lazy=Runtime.Safe(WebSharper.Lazy);
  Error=Runtime.Safe(Global.Error);
  Date=Runtime.Safe(Global.Date);
  JavaScript=Runtime.Safe(WebSharper.JavaScript);
  Scheduler=Runtime.Safe(Concurrency.Scheduler);
  T=Runtime.Safe(Enumerator.T);
  Json=Runtime.Safe(WebSharper.Json);
  List=Runtime.Safe(WebSharper.List);
  T1=Runtime.Safe(List.T);
  Math=Runtime.Safe(Global.Math);
  Strings=Runtime.Safe(WebSharper.Strings);
  PrintfHelpers=Runtime.Safe(WebSharper.PrintfHelpers);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  XhrProvider=Runtime.Safe(Remoting.XhrProvider);
  AsyncProxy=Runtime.Safe(WebSharper.AsyncProxy);
  JSON=Runtime.Safe(Global.JSON);
  Enumerable=Runtime.Safe(WebSharper.Enumerable);
  String=Runtime.Safe(Global.String);
  return RegExp=Runtime.Safe(Global.RegExp);
 });
 Runtime.OnLoad(function()
 {
  Remoting.EndPoint();
  Remoting.AjaxProvider();
  Concurrency.scheduler();
  Concurrency.defCTS();
  Concurrency.GetCT();
  return;
 });
}());
