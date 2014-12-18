(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Formlet,Body,Html,Default,List,Controls,Reactive,HotStream,Formlet1,Base,Result,T,Operators,jQuery,EventsPervasives,Data,Formlet2,Operators1,CssConstants,Math,Seq,Utils,Tree,Edit,Form,Arrays,IntrinsicFunctionProxy,FormletProvider,Formlet3,Util,LayoutProvider,LayoutUtils,Reactive1,Validator,ValidatorProvidor,RegExp,Collections,Dictionary,ElementStore,Enhance,FormButtonConfiguration,FormContainerConfiguration,Padding,ManyConfiguration,ValidationFrameConfiguration,ValidationIconConfiguration,JSON,FormletBuilder,Layout,FormRowConfiguration,LabelConfiguration,Padding1,Enumerator;
 Runtime.Define(Global,{
  IntelliFactory:{
   WebSharper:{
    Formlet:{
     Body:Runtime.Class({},{
      New:function(el,l)
      {
       return Runtime.New(Body,{
        Element:el,
        Label:l
       });
      }
     }),
     Controls:{
      Button:function(label)
      {
       var genElem;
       genElem=function()
       {
        return Default.Button(List.ofArray([Default.Text(label)]));
       };
       return Controls.ElementButton(genElem);
      },
      Checkbox:function(def)
      {
       return Controls.CheckboxControl(false,def);
      },
      CheckboxControl:function(readOnly,def)
      {
       var f;
       f=function()
       {
        var state,readOnlyAtts,_,_this,x,_this1,arg00,body,_2,objectArg,arg002,objectArg1,arg003,reset;
        state=HotStream.New(Runtime.New(Result,{
         $:0,
         $0:def
        }));
        if(readOnly)
         {
          _this=Default.Attr();
          _=List.ofArray([_this.NewAttr("disabled","disabled")]);
         }
        else
         {
          _=Runtime.New(T,{
           $:0
          });
         }
        readOnlyAtts=_;
        _this1=Default.Attr();
        x=Operators.add(Default.Input(List.ofArray([_this1.NewAttr("type","checkbox"),Default.Attr().Class("inputCheckbox")])),readOnlyAtts);
        arg00=function(cb)
        {
         return function()
         {
          var _1,arg0,arg001;
          if(!readOnly)
           {
            arg0=jQuery(cb.Body).prop("checked");
            arg001=Runtime.New(Result,{
             $:0,
             $0:arg0
            });
            _1=state.Trigger(arg001);
           }
          else
           {
            _1=null;
           }
          return _1;
         };
        };
        EventsPervasives.Events().OnClick(arg00,x);
        body=x;
        if(def)
         {
          objectArg=body["HtmlProvider@31"];
          arg002=body.Body;
          _2=objectArg.SetAttribute(arg002,"defaultChecked","true");
         }
        else
         {
          objectArg1=body["HtmlProvider@31"];
          arg003=body.Body;
          _2=objectArg1.RemoveAttribute(arg003,"checked");
         }
        reset=function()
        {
         var _1,objectArg2,arg001,objectArg3,arg004,objectArg4,arg005;
         if(def)
          {
           objectArg2=body["HtmlProvider@31"];
           arg001=body.Body;
           _1=objectArg2.SetProperty(arg001,"checked",true);
          }
         else
          {
           objectArg3=body["HtmlProvider@31"];
           arg004=body.Body;
           objectArg3.RemoveAttribute(arg004,"checked");
           objectArg4=body["HtmlProvider@31"];
           arg005=body.Body;
           _1=objectArg4.SetProperty(arg005,"checked",false);
          }
         return state.Trigger(Runtime.New(Result,{
          $:0,
          $0:def
         }));
        };
        reset(null);
        return[body,reset,state];
       };
       return Data.MkFormlet(f);
      },
      CheckboxGroup:function(values)
      {
       return Controls.CheckboxGroupControl(false,values);
      },
      CheckboxGroupControl:function(readOnly,values)
      {
       var mapping,fs,x2,chooser,f1;
       mapping=Runtime.Tupled(function(tupledArg)
       {
        var l,v,b,x,arg0,label,f,formlet;
        l=tupledArg[0];
        v=tupledArg[1];
        b=tupledArg[2];
        x=Controls.CheckboxControl(readOnly,b);
        arg0=function()
        {
         var x1,_this;
         x1=List.ofArray([Default.Text(l)]);
         _this=Default.Tags();
         return _this.NewTag("label",x1);
        };
        label={
         $:1,
         $0:arg0
        };
        f=function(b1)
        {
         return[b1,v];
        };
        formlet=Formlet2.WithLabel(label,x);
        return Formlet2.Map(f,formlet);
       });
       fs=List.map(mapping,values);
       x2=Formlet2.Sequence(fs);
       chooser=Runtime.Tupled(function(tupledArg)
       {
        var b,v;
        b=tupledArg[0];
        v=tupledArg[1];
        return b?{
         $:1,
         $0:v
        }:{
         $:0
        };
       });
       f1=function(list)
       {
        return List.choose(chooser,list);
       };
       return Formlet2.Map(f1,x2);
      },
      ElementButton:function(genElem)
      {
       var f;
       f=function()
       {
        var state,count,x,arg00,body,reset;
        state=HotStream.New(Runtime.New(Result,{
         $:1,
         $0:Runtime.New(T,{
          $:0
         })
        }));
        count={
         contents:0
        };
        x=genElem(null);
        arg00=function()
        {
         return function()
         {
          state.Trigger(Runtime.New(Result,{
           $:0,
           $0:count.contents
          }));
          return Operators1.Increment(count);
         };
        };
        EventsPervasives.Events().OnClick(arg00,x);
        body=x;
        reset=function()
        {
         count.contents=0;
         return state.Trigger(Runtime.New(Result,{
          $:1,
          $0:Runtime.New(T,{
           $:0
          })
         }));
        };
        return[body,reset,state];
       };
       return Data.MkFormlet(f);
      },
      Input:function(value)
      {
       return Controls.InputField(false,"text",CssConstants.InputTextClass(),value);
      },
      InputControl:function(value,f)
      {
       var f1;
       f1=function()
       {
        var state,body,reset;
        state=HotStream.New(Runtime.New(Result,{
         $:0,
         $0:value
        }));
        body=f(state);
        body.set_Value(value);
        reset=function()
        {
         body.set_Value(value);
         return state.Trigger(Runtime.New(Result,{
          $:0,
          $0:value
         }));
        };
        return[body,reset,state];
       };
       return Data.MkFormlet(f1);
      },
      InputField:function(readOnly,typ,cls,value)
      {
       return Controls.InputControl(value,function(state)
       {
        var ro,_,_this,a,_this1,x,input,f;
        if(readOnly)
         {
          _this=Default.Attr();
          _=List.ofArray([_this.NewAttr("readonly","readonly")]);
         }
        else
         {
          _=Runtime.New(T,{
           $:0
          });
         }
        ro=_;
        _this1=Default.Attr();
        a=List.ofArray([_this1.NewAttr("type",typ),Default.Attr().Class(cls)]);
        x=List.append(a,ro);
        input=Default.Input(x);
        f=function()
        {
         return!readOnly?state.Trigger(Runtime.New(Result,{
          $:0,
          $0:input.get_Value()
         })):null;
        };
        Controls.OnTextChange(f,input);
        return input;
       });
      },
      OnTextChange:function(f,control)
      {
       var value,up,arg00,arg001;
       value={
        contents:control.get_Value()
       };
       up=function()
       {
        var _;
        if(control.get_Value()!==value.contents)
         {
          value.contents=control.get_Value();
          _=f(null);
         }
        else
         {
          _=null;
         }
        return _;
       };
       arg00=function()
       {
        return up(null);
       };
       EventsPervasives.Events().OnChange(arg00,control);
       arg001=function()
       {
        return function()
        {
         return up(null);
        };
       };
       EventsPervasives.Events().OnKeyUp(arg001,control);
       control.Body.oninput=up;
       return;
      },
      Password:function(value)
      {
       return Controls.InputField(false,"password","inputPassword",value);
      },
      RadioButtonGroup:function(def,values)
      {
       return Controls.RadioButtonGroupControl(false,def,values);
      },
      RadioButtonGroupControl:function(readOnly,def,values)
      {
       var f;
       f=function()
       {
        var groupId,x,_,defIx,mapping,x1,chooser,d,f1,state,mapping1,rbLbVls,resetRB,reset,mapping2,vs,arg0,arg003,body;
        groupId="id"+Math.round(Math.random()*100000000);
        if(def.$==0)
         {
          _={
           $:0
          };
         }
        else
         {
          defIx=def.$0;
          mapping=function(ix)
          {
           return Runtime.Tupled(function(tupledArg)
           {
            var value;
            tupledArg[0];
            value=tupledArg[1];
            return[ix,value];
           });
          };
          x1=List.mapi(mapping,values);
          chooser=Runtime.Tupled(function(tupledArg)
          {
           var ix,value,_1,defIx1;
           ix=tupledArg[0];
           value=tupledArg[1];
           if(def.$==0)
            {
             _1={
              $:0
             };
            }
           else
            {
             defIx1=def.$0;
             _1=defIx1===ix?{
              $:1,
              $0:Runtime.New(Result,{
               $:0,
               $0:value
              })
             }:{
              $:0
             };
            }
           return _1;
          });
          _=Seq.tryPick(chooser,x1);
         }
        x=_;
        d=HotStream.New(Runtime.New(Result,{
         $:1,
         $0:Runtime.New(T,{
          $:0
         })
        }));
        f1=function(arg00)
        {
         return HotStream.New(arg00);
        };
        state=Utils.Maybe(d,f1,x);
        mapping1=Runtime.Tupled(function(tupledArg)
        {
         var label,value,inp,_this,_this1,_1,_this2;
         label=tupledArg[0];
         value=tupledArg[1];
         _this=Default.Attr();
         _this1=Default.Attr();
         if(readOnly)
          {
           _this2=Default.Attr();
           _1=List.ofArray([_this2.NewAttr("disabled","disabled")]);
          }
         else
          {
           _1=Runtime.New(T,{
            $:0
           });
          }
         inp=Operators.add(Default.Input(List.ofArray([Default.Attr().Class("inputRadio"),_this.NewAttr("type","radio"),_this1.NewAttr("name",groupId)])),_1);
         return[inp,label,value];
        });
        rbLbVls=List.map(mapping1,values);
        resetRB=function(rb,value,ix)
        {
         var _1,objectArg,arg00,defIx1,_2,objectArg1,arg001,objectArg2,arg002;
         if(def.$==0)
          {
           objectArg=rb["HtmlProvider@31"];
           arg00=rb.Body;
           objectArg.RemoveAttribute(arg00,"checked");
           _1=state.Trigger(Runtime.New(Result,{
            $:1,
            $0:Runtime.New(T,{
             $:0
            })
           }));
          }
         else
          {
           defIx1=def.$0;
           if(defIx1===ix)
            {
             objectArg1=rb["HtmlProvider@31"];
             arg001=rb.Body;
             objectArg1.SetProperty(arg001,"checked",true);
             _2=state.Trigger(Runtime.New(Result,{
              $:0,
              $0:value
             }));
            }
           else
            {
             objectArg2=rb["HtmlProvider@31"];
             arg002=rb.Body;
             _2=objectArg2.SetProperty(arg002,"checked",false);
            }
           _1=_2;
          }
         return _1;
        };
        reset=function()
        {
         var action;
         action=function(ix)
         {
          return Runtime.Tupled(function(tupledArg)
          {
           var rb,value;
           rb=tupledArg[0];
           tupledArg[1];
           value=tupledArg[2];
           return resetRB(rb,value,ix);
          });
         };
         return Seq.iteri(action,rbLbVls);
        };
        mapping2=function(ix)
        {
         return Runtime.Tupled(function(tupledArg)
         {
          var rb,label,value,arg00,Label;
          rb=tupledArg[0];
          label=tupledArg[1];
          value=tupledArg[2];
          resetRB(rb,value,ix);
          arg00=function()
          {
           return function()
           {
            return!readOnly?state.Trigger(Runtime.New(Result,{
             $:0,
             $0:value
            })):null;
           };
          };
          EventsPervasives.Events().OnClick(arg00,rb);
          Label={
           $:1,
           $0:function()
           {
            var x2,_this;
            x2=List.ofArray([Default.Text(label)]);
            _this=Default.Tags();
            return _this.NewTag("label",x2);
           }
          };
          return Runtime.New(Body,{
           Element:rb,
           Label:Label
          });
         });
        };
        vs=List.mapi(mapping2,rbLbVls);
        arg0=Tree.FromSequence(vs);
        arg003=Runtime.New(Edit,{
         $:0,
         $0:arg0
        });
        body=Data.RX().Return(arg003);
        return Runtime.New(Form,{
         Body:body,
         Dispose1:function()
         {
         },
         Notify:function()
         {
          return reset(null);
         },
         State:state
        });
       };
       return Formlet2.New(f);
      },
      ReadOnlyCheckbox:function(def)
      {
       return Controls.CheckboxControl(true,def);
      },
      ReadOnlyInput:function(value)
      {
       return Controls.InputField(true,"text",CssConstants.InputTextClass(),value);
      },
      ReadOnlyRadioButtonGroup:function(def,values)
      {
       return Controls.RadioButtonGroupControl(true,def,values);
      },
      ReadOnlySelect:function(def,vls)
      {
       return Controls.SelectControl(true,def,vls);
      },
      ReadOnlyTextArea:function(value)
      {
       return Controls.TextAreaControl(true,value);
      },
      Select:function(def,vls)
      {
       return Controls.SelectControl(false,def,vls);
      },
      SelectControl:function(readOnly,def,vls)
      {
       var f;
       f=function()
       {
        var mapping,list,aVls,sIx,mapping1,x2,select,body,_,_this2,sValue,state,reset,arg001;
        mapping=Runtime.Tupled(function(tuple)
        {
         return tuple[1];
        });
        list=List.map(mapping,vls);
        aVls=Arrays.ofSeq(list);
        sIx=(def>=0?def<vls.get_Length():false)?def:0;
        mapping1=function(i)
        {
         return Runtime.Tupled(function(tupledArg)
         {
          var nm,_this,x,_this1,x1;
          nm=tupledArg[0];
          tupledArg[1];
          _this=Default.Tags();
          _this1=Default.Attr();
          x1=Global.String(i);
          x=List.ofArray([Default.Text(nm),_this1.NewAttr("value",x1)]);
          return _this.NewTag("option",x);
         });
        };
        x2=List.mapi(mapping1,vls);
        select=Default.Select(x2);
        if(readOnly)
         {
          _this2=Default.Attr();
          _=Operators.add(select,List.ofArray([_this2.NewAttr("disabled","disabled")]));
         }
        else
         {
          _=select;
         }
        body=_;
        sValue=Runtime.New(Result,{
         $:0,
         $0:IntrinsicFunctionProxy.GetArray(aVls,sIx)
        });
        state=HotStream.New(sValue);
        reset=function()
        {
         var value,objectArg,arg00;
         value=Global.String(sIx);
         objectArg=body["HtmlProvider@31"];
         arg00=body.Body;
         objectArg.SetProperty(arg00,"value",value);
         return state.Trigger(sValue);
        };
        reset(null);
        arg001=function()
        {
         var _1,value,arg0,arg00;
         if(!readOnly)
          {
           value=body.get_Value();
           arg0=IntrinsicFunctionProxy.GetArray(aVls,value<<0);
           arg00=Runtime.New(Result,{
            $:0,
            $0:arg0
           });
           _1=state.Trigger(arg00);
          }
         else
          {
           _1=null;
          }
         return _1;
        };
        EventsPervasives.Events().OnChange(arg001,body);
        reset(null);
        return[body,reset,state];
       };
       return Data.MkFormlet(f);
      },
      TextArea:function(value)
      {
       return Controls.TextAreaControl(false,value);
      },
      TextAreaControl:function(readOnly,value)
      {
       return Controls.InputControl(value,function(state)
       {
        var x,_,_this,input,f;
        if(readOnly)
         {
          _this=Default.Attr();
          _=List.ofArray([_this.NewAttr("readonly","readonly")]);
         }
        else
         {
          _=Runtime.New(T,{
           $:0
          });
         }
        x=_;
        input=Default.TextArea(x);
        f=function()
        {
         return!readOnly?state.Trigger(Runtime.New(Result,{
          $:0,
          $0:input.get_Value()
         })):null;
        };
        Controls.OnTextChange(f,input);
        return input;
       });
      }
     },
     CssConstants:{
      InputTextClass:Runtime.Field(function()
      {
       return"inputText";
      })
     },
     Data:{
      $:function(f,x)
      {
       var objectArg,x1;
       objectArg=Data.BaseFormlet();
       x1=objectArg.Apply(f,x);
       return Data.OfIFormlet(x1);
      },
      BaseFormlet:function()
      {
       return FormletProvider.New(Data.UtilsProvider());
      },
      DefaultLayout:Runtime.Field(function()
      {
       return Data.Layout().get_Vertical();
      }),
      Formlet:Runtime.Class({
       Build:function()
       {
        return this.BuildInternal.call(null,null);
       },
       MapResult:function(f)
       {
        var x,_this=this;
        x=Runtime.New(Formlet3,{
         BuildInternal:function()
         {
          var form,objectArg,arg00,arg10;
          form=_this.BuildInternal.call(null,null);
          objectArg=_this.Utils.Reactive;
          arg00=form.State;
          arg10=function(x1)
          {
           return f(x1);
          };
          return Runtime.New(Form,{
           Body:form.Body,
           Dispose1:form.Dispose1,
           Notify:form.Notify,
           State:objectArg.Select(arg00,arg10)
          });
         },
         LayoutInternal:_this.LayoutInternal,
         ElementInternal:{
          $:0
         },
         FormletBase:_this.FormletBase,
         Utils:_this.Utils
        });
        return x;
       },
       Render:function()
       {
        return this.Run(function()
        {
        }).Render();
       },
       Run:function(f)
       {
        var matchValue,_,formlet,form,value,matchValue1,el,_1,patternInput,body,body1,el1;
        matchValue=this.ElementInternal;
        if(matchValue.$==0)
         {
          formlet=this.FormletBase.ApplyLayout(this);
          form=formlet.Build();
          value=Util.subscribeTo(form.State,function(res)
          {
           var value1;
           value1=Result.Map(f,res);
           return;
          });
          matchValue1=formlet.get_Layout().Apply.call(null,form.Body);
          if(matchValue1.$==0)
           {
            patternInput=Data.DefaultLayout().Apply.call(null,form.Body).$0;
            body=patternInput[0];
            _1=body.Element;
           }
          else
           {
            body1=matchValue1.$0[0];
            _1=body1.Element;
           }
          el=_1;
          this.ElementInternal={
           $:1,
           $0:el
          };
          _=el;
         }
        else
         {
          el1=matchValue.$0;
          _=el1;
         }
        return _;
       },
       get_Body:function()
       {
        return this.Run(function()
        {
        }).get_Body();
       },
       get_Layout:function()
       {
        return this.LayoutInternal;
       }
      }),
      Layout:Runtime.Field(function()
      {
       return LayoutProvider.New(LayoutUtils.New({
        Reactive:Reactive1.Default()
       }));
      }),
      MkFormlet:function(f)
      {
       var objectArg,arg00,formlet;
       objectArg=Data.BaseFormlet();
       arg00=function()
       {
        var patternInput,state,reset,body,Notify,value,arg001;
        patternInput=f(null);
        state=patternInput[2];
        reset=patternInput[1];
        body=patternInput[0];
        Notify=function()
        {
         return reset(null);
        };
        value=Data.NewBody(body,{
         $:0
        });
        arg001=Tree.Set(value);
        return Runtime.New(Form,{
         Body:Data.RX().Return(arg001),
         Dispose1:function()
         {
          return null;
         },
         Notify:Notify,
         State:state
        });
       };
       formlet=objectArg.New(arg00);
       return Data.OfIFormlet(formlet);
      },
      NewBody:function(arg00,arg10)
      {
       return Body.New(arg00,arg10);
      },
      OfIFormlet:function(formlet)
      {
       var f2;
       f2=Runtime.New(Formlet3,{
        BuildInternal:function()
        {
         return formlet.Build();
        },
        LayoutInternal:formlet.get_Layout(),
        ElementInternal:{
         $:0
        },
        FormletBase:Data.BaseFormlet(),
        Utils:Data.UtilsProvider()
       });
       return Data.PropagateRenderFrom(formlet,f2);
      },
      PropagateRenderFrom:function(f1,f2)
      {
       f1.hasOwnProperty("Render")?void(f2.Render=f1.Render):null;
       return f2;
      },
      RX:Runtime.Field(function()
      {
       return Reactive1.Default();
      }),
      UtilsProvider:function()
      {
       return{
        Reactive:Data.RX(),
        DefaultLayout:Data.DefaultLayout()
       };
      },
      Validator:Runtime.Field(function()
      {
       return Validator.New(ValidatorProvidor.New());
      }),
      ValidatorProvidor:Runtime.Class({
       Matches:function(regex,text)
       {
        return text.match(new RegExp(regex));
       }
      },{
       New:function()
       {
        return Runtime.New(this,{});
       }
      })
     },
     ElementStore:Runtime.Class({
      Init:function()
      {
       this.store=Dictionary.New2();
       return;
      },
      RegisterElement:function(key,f)
      {
       var value;
       value=this.store.ContainsKey(key);
       return!value?this.store.set_Item(key,f):null;
      },
      Remove:function(key)
      {
       var _,value;
       if(this.store.ContainsKey(key))
        {
         (this.store.get_Item(key))(null);
         value=this.store.Remove(key);
         _=void value;
        }
       else
        {
         _=null;
        }
       return _;
      }
     },{
      New:function()
      {
       return Runtime.New(this,{});
      },
      NewElementStore:function()
      {
       var store;
       store=ElementStore.New();
       store.Init();
       return store;
      }
     }),
     Enhance:{
      Cancel:function(formlet,isCancel)
      {
       return Formlet2.Replace(formlet,function(value)
       {
        return isCancel(value)?Formlet2.Empty():Formlet2.Return(value);
       });
      },
      CustomMany:function(config,formlet)
      {
       var formlet1,addButton,f,formlet2,c,x,l,x1,delF,manyF,resetS,formlet6,resetF,reset,_builder_,formlet7;
       formlet1=Controls.ElementButton(function()
       {
        return Operators.add(Default.Div(List.ofArray([Default.Attr().Class(config.AddIconClass)])),List.ofArray([Default.Div(Runtime.New(T,{
         $:0
        }))]));
       });
       addButton=Formlet2.InitWith(1,formlet1);
       f=function()
       {
       };
       formlet2=Controls.ElementButton(function()
       {
        return Operators.add(Default.Div(List.ofArray([Default.Attr().Class(config.RemoveIconClass)])),List.ofArray([Default.Div(Runtime.New(T,{
         $:0
        }))]));
       });
       c=Formlet2.Map(f,formlet2);
       x=Formlet2.WithCancelation(formlet,c);
       l=Data.Layout().get_Horizontal();
       x1=Formlet2.WithLayout(l,x);
       delF=Enhance.Deletable(x1);
       manyF=function()
       {
        var f1,formlet3,formlet4,formlet5;
        f1=function(source)
        {
         return List.ofSeq(source);
        };
        formlet3=Enhance.Many_(addButton,function()
        {
         return delF;
        });
        formlet4=Formlet2.Map(f1,formlet3);
        formlet5=Formlet2.WithLayoutOrDefault(formlet4);
        return Formlet2.ApplyLayout(formlet5);
       };
       resetS=HotStream.New(Runtime.New(Result,{
        $:0,
        $0:null
       }));
       formlet6=Data.BaseFormlet().FromState(resetS);
       resetF=Data.OfIFormlet(formlet6);
       reset=function()
       {
        return resetS.Trigger(Runtime.New(Result,{
         $:0,
         $0:null
        }));
       };
       _builder_=Formlet2.Do();
       formlet7=_builder_.Delay(function()
       {
        return _builder_.Bind(resetF,function()
        {
         return _builder_.ReturnFrom(manyF(null));
        });
       });
       return Formlet2.WithNotification(reset,formlet7);
      },
      Deletable:function(formlet)
      {
       return Enhance.Replace(formlet,function(value)
       {
        var _,value1;
        if(value.$==1)
         {
          value1=value.$0;
          _=Formlet2.Return({
           $:1,
           $0:value1
          });
         }
        else
         {
          _=Formlet2.ReturnEmpty({
           $:0
          });
         }
        return _;
       });
      },
      FormButtonConfiguration:Runtime.Class({},{
       get_Default:function()
       {
        return Runtime.New(FormButtonConfiguration,{
         Label:{
          $:0
         },
         Style:{
          $:0
         },
         Class:{
          $:0
         }
        });
       }
      }),
      FormContainerConfiguration:Runtime.Class({},{
       get_Default:function()
       {
        var Description;
        Description={
         $:0
        };
        return Runtime.New(FormContainerConfiguration,{
         Header:{
          $:0
         },
         Padding:Padding.get_Default(),
         Description:Description,
         BackgroundColor:{
          $:0
         },
         BorderColor:{
          $:0
         },
         CssClass:{
          $:0
         },
         Style:{
          $:0
         }
        });
       }
      }),
      InputButton:function(conf,enabled)
      {
       var f;
       f=function()
       {
        var state,count,label,x1,_this,_this1,arg00,submit,submit1,_,objectArg,arg001,matchValue,_1,style,objectArg1,arg002,matchValue1,_2,cls,objectArg2,arg003,reset;
        state=HotStream.New(Runtime.New(Result,{
         $:1,
         $0:Runtime.New(T,{
          $:0
         })
        }));
        count={
         contents:0
        };
        label=Utils.Maybe("Submit",function(x)
        {
         return x;
        },conf.Label);
        _this=Default.Attr();
        _this1=Default.Attr();
        x1=Operators.add(Default.Input(List.ofArray([_this.NewAttr("type","button")])),List.ofArray([Default.Attr().Class("submitButton"),_this1.NewAttr("value",label)]));
        arg00=function()
        {
         return function()
         {
          Operators1.Increment(count);
          return state.Trigger(Runtime.New(Result,{
           $:0,
           $0:count.contents
          }));
         };
        };
        EventsPervasives.Events().OnClick(arg00,x1);
        submit=x1;
        if(!enabled)
         {
          objectArg=submit["HtmlProvider@31"];
          arg001=submit.Body;
          _=objectArg.AddClass(arg001,"disabledButton");
         }
        else
         {
          _=null;
         }
        matchValue=conf.Style;
        if(matchValue.$==1)
         {
          style=matchValue.$0;
          objectArg1=submit["HtmlProvider@31"];
          arg002=submit.Body;
          _1=objectArg1.SetStyle(arg002,style);
         }
        else
         {
          _1=null;
         }
        matchValue1=conf.Class;
        if(matchValue1.$==1)
         {
          cls=matchValue1.$0;
          objectArg2=submit["HtmlProvider@31"];
          arg003=submit.Body;
          _2=objectArg2.AddClass(arg003,cls);
         }
        else
         {
          _2=null;
         }
        submit1=submit;
        reset=function()
        {
         count.contents=0;
         return state.Trigger(Runtime.New(Result,{
          $:1,
          $0:Runtime.New(T,{
           $:0
          })
         }));
        };
        state.Trigger(Runtime.New(Result,{
         $:1,
         $0:Runtime.New(T,{
          $:0
         })
        }));
        return[submit1,reset,state];
       };
       return Data.MkFormlet(f);
      },
      Many:function(formlet)
      {
       return Enhance.CustomMany(ManyConfiguration.get_Default(),formlet);
      },
      ManyConfiguration:Runtime.Class({},{
       get_Default:function()
       {
        return Runtime.New(ManyConfiguration,{
         AddIconClass:"addIcon",
         RemoveIconClass:"removeIcon"
        });
       }
      }),
      Many_:function(add,f)
      {
       var f1,chooser,f2,formlet,formlet1,formlet2;
       f1=function(v)
       {
        return f(v);
       };
       chooser=function(x)
       {
        return x;
       };
       f2=function(source)
       {
        return Seq.choose(chooser,source);
       };
       formlet=Formlet2.Map(f1,add);
       formlet1=Formlet2.SelectMany(formlet);
       formlet2=Formlet2.FlipBody(formlet1);
       return Formlet2.Map(f2,formlet2);
      },
      Padding:Runtime.Class({},{
       get_Default:function()
       {
        return Runtime.New(Padding,{
         Left:{
          $:0
         },
         Right:{
          $:0
         },
         Top:{
          $:0
         },
         Bottom:{
          $:0
         }
        });
       }
      }),
      Replace:function(formlet,f)
      {
       var f1,x;
       f1=function(res)
       {
        var _,fs,arg0,s;
        if(res.$==1)
         {
          fs=res.$0;
          arg0=Formlet2.FailWith(fs);
          _=Runtime.New(Result,{
           $:0,
           $0:arg0
          });
         }
        else
         {
          s=res.$0;
          _=Runtime.New(Result,{
           $:0,
           $0:f(s)
          });
         }
        return _;
       };
       x=Formlet2.MapResult(f1,formlet);
       return Formlet2.Switch(x);
      },
      ValidationFrameConfiguration:Runtime.Class({},{
       get_Default:function()
       {
        return Runtime.New(ValidationFrameConfiguration,{
         ValidClass:{
          $:1,
          $0:"successFormlet"
         },
         ValidStyle:{
          $:0
         },
         ErrorClass:{
          $:1,
          $0:"errorFormlet"
         },
         ErrorStyle:{
          $:0
         }
        });
       }
      }),
      ValidationIconConfiguration:Runtime.Class({},{
       get_Default:function()
       {
        return Runtime.New(ValidationIconConfiguration,{
         ValidIconClass:"validIcon",
         ErrorIconClass:"errorIcon"
        });
       }
      }),
      WithCssClass:function(css,formlet)
      {
       var f;
       f=function(el)
       {
        var objectArg,arg00;
        objectArg=el["HtmlProvider@31"];
        arg00=el.Body;
        objectArg.AddClass(arg00,css);
        return el;
       };
       return Formlet2.MapElement(f,formlet);
      },
      WithCustomFormContainer:function(fc,formlet)
      {
       var x,f;
       x=Formlet2.ApplyLayout(formlet);
       f=function(formEl)
       {
        var x1,d,f1,description,x2,d1,f2,tb,cell,f3,o,x3,f4,value,f5,value1,f6,value2,f7,value3,f8,value4,action,matchValue,_1,style,objectArg1,arg002,matchValue1,_2,cls,objectArg2,arg003;
        x1=fc.Description;
        d=Runtime.New(T,{
         $:0
        });
        f1=function(descr)
        {
         var _,genEl,text;
         if(descr.$==1)
          {
           genEl=descr.$0;
           _=List.ofArray([genEl(null)]);
          }
         else
          {
           text=descr.$0;
           _=List.ofArray([Default.P(List.ofArray([Default.Tags().text(text)]))]);
          }
         return _;
        };
        description=Utils.Maybe(d,f1,x1);
        x2=fc.Header;
        d1=Utils.InTable(List.ofArray([List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("headerPanel")])),description)]),List.ofArray([formEl])]));
        f2=function(formElem)
        {
         var hdr,_,genElem,text,header;
         if(formElem.$==1)
          {
           genElem=formElem.$0;
           _=genElem(null);
          }
         else
          {
           text=formElem.$0;
           _=Default.H1(List.ofArray([Default.Tags().text(text)]));
          }
         hdr=_;
         header=Operators.add(Default.Div(List.ofArray([Default.Attr().Class("headerPanel")])),Runtime.New(T,{
          $:1,
          $0:hdr,
          $1:description
         }));
         return Utils.InTable(List.ofArray([List.ofArray([header]),List.ofArray([formEl])]));
        };
        tb=Utils.Maybe(d1,f2,x2);
        cell=Operators.add(Default.TD(List.ofArray([Default.Attr().Class("formlet")])),List.ofArray([tb]));
        f3=function(color)
        {
         var arg00,objectArg,arg001;
         arg00="border-color: "+color;
         objectArg=cell["HtmlProvider@31"];
         arg001=cell.Body;
         return objectArg.SetStyle(arg001,arg00);
        };
        o=fc.BorderColor;
        Utils.Maybe(null,f3,o);
        f4=function(color)
        {
         return color;
        };
        value=fc.BackgroundColor;
        f5=function(v)
        {
         return Global.String(v)+"px";
        };
        value1=fc.Padding.Left;
        f6=function(v)
        {
         return Global.String(v)+"px";
        };
        value2=fc.Padding.Right;
        f7=function(v)
        {
         return Global.String(v)+"px";
        };
        value3=fc.Padding.Top;
        f8=function(v)
        {
         return Global.String(v)+"px";
        };
        value4=fc.Padding.Bottom;
        x3=List.ofArray([["background-color",Utils.MapOption(f4,value)],["padding-left",Utils.MapOption(f5,value1)],["padding-right",Utils.MapOption(f6,value2)],["padding-top",Utils.MapOption(f7,value3)],["padding-bottom",Utils.MapOption(f8,value4)]]);
        action=Runtime.Tupled(function(tupledArg)
        {
         var name,value5,_,v,objectArg,arg00;
         name=tupledArg[0];
         value5=tupledArg[1];
         if(value5.$==0)
          {
           _=null;
          }
         else
          {
           v=value5.$0;
           objectArg=cell["HtmlProvider@31"];
           arg00=cell.Body;
           _=objectArg.SetCss(arg00,name,v);
          }
         return _;
        });
        Seq.iter(action,x3);
        matchValue=fc.Style;
        if(matchValue.$==0)
         {
          _1=null;
         }
        else
         {
          style=matchValue.$0;
          objectArg1=cell["HtmlProvider@31"];
          arg002=cell.Body;
          _1=objectArg1.SetStyle(arg002,style);
         }
        matchValue1=fc.CssClass;
        if(matchValue1.$==0)
         {
          _2=null;
         }
        else
         {
          cls=matchValue1.$0;
          objectArg2=cell["HtmlProvider@31"];
          arg003=cell.Body;
          _2=objectArg2.AddClass(arg003,cls);
         }
        return Default.Table(List.ofArray([Default.TBody(List.ofArray([Default.TR(List.ofArray([cell]))]))]));
       };
       return Formlet2.MapElement(f,x);
      },
      WithCustomResetButton:function(buttonConf,formlet)
      {
       var matchValue,buttonConf1,_,reset;
       matchValue=buttonConf.Label;
       if(matchValue.$==0)
        {
         _=Runtime.New(FormButtonConfiguration,{
          Label:{
           $:1,
           $0:"Reset"
          },
          Style:buttonConf.Style,
          Class:buttonConf.Class
         });
        }
       else
        {
         matchValue.$0;
         _=buttonConf;
        }
       buttonConf1=_;
       reset=Enhance.InputButton(buttonConf1,true);
       return Enhance.WithResetFormlet(formlet,reset);
      },
      WithCustomSubmitAndResetButtons:function(submitConf,resetConf,formlet)
      {
       var submitReset;
       submitReset=function(reset)
       {
        return function(result)
        {
         var submit,_,fs,f,formlet1,value,f1,formlet2,_builder_,reset1,x,l;
         if(result.$==1)
          {
           fs=result.$0;
           f=function()
           {
            return Runtime.New(Result,{
             $:1,
             $0:fs
            });
           };
           formlet1=Enhance.InputButton(submitConf,false);
           _=Formlet2.MapResult(f,formlet1);
          }
         else
          {
           value=result.$0;
           f1=function()
           {
            return value;
           };
           formlet2=Enhance.InputButton(submitConf,true);
           _=Formlet2.Map(f1,formlet2);
          }
         submit=_;
         _builder_=Formlet2.Do();
         reset1=_builder_.Delay(function()
         {
          return _builder_.Bind(Formlet2.LiftResult(Enhance.InputButton(resetConf,true)),function(_arg1)
          {
           _arg1.$==0?reset(null):null;
           return _builder_.Return(null);
          });
         });
         x=Data.$(Data.$(Formlet2.Return(function(v)
         {
          return function()
          {
           return v;
          };
         }),submit),reset1);
         l=Data.Layout().get_Horizontal();
         return Formlet2.WithLayout(l,x);
        };
       };
       return Enhance.WithSubmitAndReset(formlet,submitReset);
      },
      WithCustomSubmitButton:function(buttonConf,formlet)
      {
       var matchValue,buttonConf1,_;
       matchValue=buttonConf.Label;
       if(matchValue.$==0)
        {
         _=Runtime.New(FormButtonConfiguration,{
          Label:{
           $:1,
           $0:"Submit"
          },
          Style:buttonConf.Style,
          Class:buttonConf.Class
         });
        }
       else
        {
         matchValue.$0;
         _=buttonConf;
        }
       buttonConf1=_;
       return Enhance.WithSubmitFormlet(formlet,function(res)
       {
        var f,enabled,formlet1;
        f=function()
        {
        };
        enabled=res.$==0?true:false;
        formlet1=Enhance.InputButton(buttonConf1,enabled);
        return Formlet2.Map(f,formlet1);
       });
      },
      WithCustomValidationFrame:function(vc,formlet)
      {
       var wrapper;
       wrapper=function(state)
       {
        return function(body)
        {
         var x,f;
         x=Default.Div(List.ofArray([body.Element]));
         f=function(panel)
         {
          var value;
          value=Util.subscribeTo(state,function(res)
          {
           var _,msgs,matchValue,_1,cls,objectArg,arg00,matchValue1,_2,cls1,objectArg1,arg001,matchValue2,_3,style,objectArg2,arg002,objectArg3,arg003,matchValue3,_4,cls2,objectArg4,arg004,matchValue4,_5,cls3,objectArg5,arg005,matchValue5,_6,style1,objectArg6,arg006,objectArg7,arg007;
           if(res.$==1)
            {
             msgs=res.$0;
             matchValue=vc.ValidClass;
             if(matchValue.$==1)
              {
               cls=matchValue.$0;
               objectArg=panel["HtmlProvider@31"];
               arg00=panel.Body;
               _1=objectArg.RemoveClass(arg00,cls);
              }
             else
              {
               _1=null;
              }
             matchValue1=vc.ErrorClass;
             if(matchValue1.$==1)
              {
               cls1=matchValue1.$0;
               objectArg1=panel["HtmlProvider@31"];
               arg001=panel.Body;
               _2=objectArg1.AddClass(arg001,cls1);
              }
             else
              {
               _2=null;
              }
             matchValue2=vc.ErrorStyle;
             if(matchValue2.$==1)
              {
               style=matchValue2.$0;
               objectArg2=panel["HtmlProvider@31"];
               arg002=panel.Body;
               _3=objectArg2.SetStyle(arg002,style);
              }
             else
              {
               objectArg3=panel["HtmlProvider@31"];
               arg003=panel.Body;
               _3=objectArg3.SetStyle(arg003,"");
              }
             _=_3;
            }
           else
            {
             matchValue3=vc.ErrorClass;
             if(matchValue3.$==1)
              {
               cls2=matchValue3.$0;
               objectArg4=panel["HtmlProvider@31"];
               arg004=panel.Body;
               _4=objectArg4.RemoveClass(arg004,cls2);
              }
             else
              {
               _4=null;
              }
             matchValue4=vc.ValidClass;
             if(matchValue4.$==1)
              {
               cls3=matchValue4.$0;
               objectArg5=panel["HtmlProvider@31"];
               arg005=panel.Body;
               _5=objectArg5.AddClass(arg005,cls3);
              }
             else
              {
               _5=null;
              }
             matchValue5=vc.ValidStyle;
             if(matchValue5.$==1)
              {
               style1=matchValue5.$0;
               objectArg6=panel["HtmlProvider@31"];
               arg006=panel.Body;
               _6=objectArg6.SetStyle(arg006,style1);
              }
             else
              {
               objectArg7=panel["HtmlProvider@31"];
               arg007=panel.Body;
               _6=objectArg7.SetStyle(arg007,"");
              }
             _=_6;
            }
           return _;
          });
          return;
         };
         Operators.OnAfterRender(f,x);
         return x;
        };
       };
       return Enhance.WrapFormlet(wrapper,formlet);
      },
      WithCustomValidationIcon:function(vic,formlet)
      {
       var formlet1,valid,_builder_,f1,formlet2,x1,l;
       formlet1=Formlet2.WithLayoutOrDefault(formlet);
       valid=function(res)
       {
        var genElem;
        genElem=function()
        {
         var _,msgs,f,title,_this,_this1;
         if(res.$==1)
          {
           msgs=res.$0;
           f=function(x)
           {
            return function(y)
            {
             return x+" "+y;
            };
           };
           title=Seq.fold(f,"",msgs);
           _this=Default.Attr();
           _=Operators.add(Default.Div(List.ofArray([Default.Attr().Class(vic.ErrorIconClass),_this.NewAttr("title",title)])),List.ofArray([Default.Div(Runtime.New(T,{
            $:0
           }))]));
          }
         else
          {
           _this1=Default.Attr();
           _=Operators.add(Default.Div(List.ofArray([Default.Attr().Class(vic.ValidIconClass),_this1.NewAttr("title","")])),List.ofArray([Default.Div(Runtime.New(T,{
            $:0
           }))]));
          }
         return _;
        };
        return Formlet2.OfElement(genElem);
       };
       _builder_=Formlet2.Do();
       f1=function(arg00)
       {
        return Result.Join(arg00);
       };
       formlet2=_builder_.Delay(function()
       {
        return _builder_.Bind(Formlet2.LiftResult(formlet1),function(_arg1)
        {
         return _builder_.Bind(valid(_arg1),function()
         {
          return _builder_.Return(_arg1);
         });
        });
       });
       x1=Formlet2.MapResult(f1,formlet2);
       l=Data.Layout().get_Horizontal();
       return Formlet2.WithLayout(l,x1);
      },
      WithErrorFormlet:function(f,formlet)
      {
       var _builder_,f1,formlet1;
       _builder_=Formlet2.Do();
       f1=function(arg00)
       {
        return Result.Join(arg00);
       };
       formlet1=_builder_.Delay(function()
       {
        return _builder_.Bind(Formlet2.LiftResult(formlet),function(_arg1)
        {
         var _,msgs,_builder_1;
         if(_arg1.$==1)
          {
           msgs=_arg1.$0;
           _builder_1=Formlet2.Do();
           _=_builder_1.Delay(function()
           {
            return _builder_1.Bind(f(msgs),function()
            {
             return _builder_1.Return(_arg1);
            });
           });
          }
         else
          {
           _arg1.$0;
           _=Formlet2.Return(_arg1);
          }
         return _builder_.ReturnFrom(_);
        });
       });
       return Formlet2.MapResult(f1,formlet1);
      },
      WithErrorSummary:function(label,formlet)
      {
       var errrFormlet,_builder_,f1,formlet1;
       errrFormlet=function(fs)
       {
        return Formlet2.OfElement(function()
        {
         var x,x1,_this,mapping,x2,_this1;
         x1=List.ofArray([Default.Text(label)]);
         _this=Default.Tags();
         mapping=function(f)
         {
          return Default.LI(List.ofArray([Default.Text(f)]));
         };
         x2=List.map(mapping,fs);
         x=List.ofArray([_this.NewTag("legend",x1),Default.UL(x2)]);
         _this1=Default.Tags();
         return _this1.NewTag("fieldset",x);
        });
       };
       _builder_=Formlet2.Do();
       f1=function(arg00)
       {
        return Result.Join(arg00);
       };
       formlet1=_builder_.Delay(function()
       {
        return _builder_.Bind(Formlet2.LiftResult(formlet),function(_arg1)
        {
         var _,fs,f,formlet2;
         if(_arg1.$==1)
          {
           fs=_arg1.$0;
           f=function()
           {
            return _arg1;
           };
           formlet2=errrFormlet(fs);
           _=Formlet2.Map(f,formlet2);
          }
         else
          {
           _arg1.$0;
           _=Formlet2.Return(_arg1);
          }
         return _builder_.ReturnFrom(_);
        });
       });
       return Formlet2.MapResult(f1,formlet1);
      },
      WithFormContainer:function(formlet)
      {
       return Enhance.WithCustomFormContainer(FormContainerConfiguration.get_Default(),formlet);
      },
      WithJsonPost:function(conf,formlet)
      {
       var matchValue,postUrl,_,url,_this,matchValue1,enc,_1,enc1,_this1,_this2,x,_this3,_this4,x1,hiddenField,_this5,x2,_this6,_this7,submitButton,a,_this8,_this9,formAttrs,x3,f,form1,f1,formlet1;
       matchValue=conf.PostUrl;
       if(matchValue.$==0)
        {
         _=Runtime.New(T,{
          $:0
         });
        }
       else
        {
         url=matchValue.$0;
         _this=Default.Attr();
         _=List.ofArray([_this.NewAttr("action",url)]);
        }
       postUrl=_;
       matchValue1=conf.EncodingType;
       if(matchValue1.$==0)
        {
         _1=Runtime.New(T,{
          $:0
         });
        }
       else
        {
         enc1=matchValue1.$0;
         _this1=Default.Attr();
         _1=List.ofArray([_this1.NewAttr("enctype",enc1)]);
        }
       enc=_1;
       _this2=Default.Tags();
       _this3=Default.Attr();
       _this4=Default.Attr();
       x1=conf.ParameterName;
       x=List.ofArray([_this3.NewAttr("type","hidden"),_this4.NewAttr("name",x1)]);
       hiddenField=_this2.NewTag("input",x);
       _this5=Default.Tags();
       _this6=Default.Attr();
       _this7=Default.Attr();
       x2=List.ofArray([_this6.NewAttr("type","submit"),_this7.NewAttr("value","Submit")]);
       submitButton=_this5.NewTag("input",x2);
       _this8=Default.Attr();
       _this9=Default.Attr();
       a=Runtime.New(T,{
        $:1,
        $0:_this8.NewAttr("method","POST"),
        $1:Runtime.New(T,{
         $:1,
         $0:_this9.NewAttr("style","display:none"),
         $1:postUrl
        })
       });
       formAttrs=List.append(a,enc);
       x3=Operators.add(Default.Form(formAttrs),List.ofArray([hiddenField,submitButton]));
       f=function(form)
       {
        var matchValue2,_2,enc2,_3,value;
        matchValue2=conf.EncodingType;
        if(matchValue2.$==0)
         {
          _2=null;
         }
        else
         {
          enc2=matchValue2.$0;
          if(enc2==="multipart/form-data")
           {
            value=jQuery(form.Body).attr("encoding","multipart/form-data");
            _3=void value;
           }
          else
           {
            _3=null;
           }
          _2=_3;
         }
        return _2;
       };
       Operators.OnAfterRender(f,x3);
       form1=x3;
       f1=function(value)
       {
        var data;
        data=JSON.stringify(value);
        jQuery(hiddenField.Body).val(data);
        return jQuery(submitButton.Body).click();
       };
       formlet1=Formlet2.Map(f1,formlet);
       return Default.Div(List.ofArray([form1,formlet1]));
      },
      WithLabel:function(labelGen,formlet)
      {
       return Formlet2.WithLabel({
        $:1,
        $0:labelGen
       },formlet);
      },
      WithLabelAbove:function(formlet)
      {
       var f;
       f=function(body)
       {
        var matchValue,label,_,l,el,Label;
        matchValue=body.Label;
        if(matchValue.$==0)
         {
          _=Default.Span(Runtime.New(T,{
           $:0
          }));
         }
        else
         {
          l=matchValue.$0;
          _=l(null);
         }
        label=_;
        el=Default.Table(List.ofArray([Default.TBody(List.ofArray([Default.TR(List.ofArray([Default.TD(List.ofArray([label]))])),Default.TR(List.ofArray([Default.TD(List.ofArray([body.Element]))]))]))]));
        Label={
         $:0
        };
        return Runtime.New(Body,{
         Element:el,
         Label:Label
        });
       };
       return Formlet2.MapBody(f,formlet);
      },
      WithLabelAndInfo:function(label,info,formlet)
      {
       var lblTbl;
       lblTbl=function()
       {
        var x,_this,_this1;
        x=List.ofArray([Default.Text(label)]);
        _this=Default.Tags();
        _this1=Default.Attr();
        return Utils.InTable(List.ofArray([List.ofArray([_this.NewTag("label",x),Default.Span(List.ofArray([_this1.NewAttr("title",info),Default.Attr().Class("infoIcon")]))])]));
       };
       return Enhance.WithLabel(lblTbl,formlet);
      },
      WithLabelConfiguration:function(lc,formlet)
      {
       var x,l;
       x=Formlet2.ApplyLayout(formlet);
       l=Data.Layout().LabelLayout(lc);
       return Formlet2.WithLayout(l,x);
      },
      WithLabelLeft:function(formlet)
      {
       var f;
       f=function(body)
       {
        var matchValue,label,_,l,el,Label;
        matchValue=body.Label;
        if(matchValue.$==0)
         {
          _=Default.Span(Runtime.New(T,{
           $:0
          }));
         }
        else
         {
          l=matchValue.$0;
          _=l(null);
         }
        label=_;
        el=Default.Table(List.ofArray([Default.TBody(List.ofArray([Default.TR(List.ofArray([Default.TD(List.ofArray([body.Element])),Default.TD(List.ofArray([label]))]))]))]));
        Label={
         $:0
        };
        return Runtime.New(Body,{
         Element:el,
         Label:Label
        });
       };
       return Formlet2.MapBody(f,formlet);
      },
      WithLegend:function(label,formlet)
      {
       var f;
       f=function(body)
       {
        var x,x1,_this,matchValue,_,label1,_this1,element;
        x1=List.ofArray([Default.Tags().text(label)]);
        _this=Default.Tags();
        matchValue=body.Label;
        if(matchValue.$==0)
         {
          _=body.Element;
         }
        else
         {
          label1=matchValue.$0;
          _=Utils.InTable(List.ofArray([List.ofArray([label1(null),body.Element])]));
         }
        x=List.ofArray([_this.NewTag("legend",x1),_]);
        _this1=Default.Tags();
        element=_this1.NewTag("fieldset",x);
        return Runtime.New(Body,{
         Element:element,
         Label:{
          $:0
         }
        });
       };
       return Formlet2.MapBody(f,formlet);
      },
      WithResetAction:function(f,formlet)
      {
       var f1,x,l,x1,x2;
       f1=function()
       {
        var form,notify;
        form=formlet.Build();
        notify=function(o)
        {
         return f(null)?form.Notify.call(null,o):null;
        };
        return Runtime.New(Form,{
         Body:form.Body,
         Dispose1:form.Dispose1,
         Notify:notify,
         State:form.State
        });
       };
       x=Formlet2.New(f1);
       l=formlet.get_Layout();
       x1=Formlet2.WithLayout(l,x);
       x2=Data.PropagateRenderFrom(formlet,x1);
       return Data.OfIFormlet(x2);
      },
      WithResetButton:function(formlet)
      {
       return Enhance.WithCustomResetButton(FormButtonConfiguration.get_Default(),formlet);
      },
      WithResetFormlet:function(formlet,reset)
      {
       var formlet1,x,x1,x2,formlet2,button,_builder_,f,formlet3,f2,x3;
       formlet1=Formlet2.WithLayoutOrDefault(formlet);
       x=Formlet2.ApplyLayout(formlet1);
       x1=Formlet2.InitWithFailure(x);
       x2=Formlet2.LiftResult(x1);
       formlet2=Formlet2.WithNotificationChannel(x2);
       button=Formlet2.LiftResult(reset);
       _builder_=Formlet2.Do();
       f=function(arg00)
       {
        return Result.Join(arg00);
       };
       formlet3=_builder_.Delay(function()
       {
        return _builder_.Bind(formlet2,Runtime.Tupled(function(_arg1)
        {
         var v,notify;
         v=_arg1[0];
         notify=_arg1[1];
         return _builder_.Bind(button,function(_arg2)
         {
          _arg2.$==0?notify(null):null;
          return _builder_.Return(v);
         });
        }));
       });
       f2=Formlet2.MapResult(f,formlet3);
       x3=Data.PropagateRenderFrom(formlet2,f2);
       return Data.OfIFormlet(x3);
      },
      WithRowConfiguration:function(rc,formlet)
      {
       var x,l;
       x=Formlet2.ApplyLayout(formlet);
       l=Data.Layout().RowLayout(rc);
       return Formlet2.WithLayout(l,x);
      },
      WithSubmitAndReset:function(formlet,submReset)
      {
       var _builder_,f2,formlet3;
       _builder_=Formlet2.Do();
       f2=_builder_.Delay(function()
       {
        var formlet1,formlet2;
        formlet1=Formlet2.InitWithFailure(formlet);
        formlet2=Formlet2.LiftResult(formlet1);
        return _builder_.Bind(Formlet2.WithNotificationChannel(formlet2),Runtime.Tupled(function(_arg1)
        {
         var res,notify;
         res=_arg1[0];
         notify=_arg1[1];
         return _builder_.ReturnFrom((submReset(function(arg00)
         {
          return notify(arg00);
         }))(res));
        }));
       });
       formlet3=Data.PropagateRenderFrom(formlet,f2);
       return Data.OfIFormlet(formlet3);
      },
      WithSubmitAndResetButtons:function(formlet)
      {
       var inputRecord,submitConf,inputRecord1,resetConf;
       inputRecord=FormButtonConfiguration.get_Default();
       submitConf=Runtime.New(FormButtonConfiguration,{
        Label:{
         $:1,
         $0:"Submit"
        },
        Style:inputRecord.Style,
        Class:inputRecord.Class
       });
       inputRecord1=FormButtonConfiguration.get_Default();
       resetConf=Runtime.New(FormButtonConfiguration,{
        Label:{
         $:1,
         $0:"Reset"
        },
        Style:inputRecord1.Style,
        Class:inputRecord1.Class
       });
       return Enhance.WithCustomSubmitAndResetButtons(submitConf,resetConf,formlet);
      },
      WithSubmitButton:function(formlet)
      {
       return Enhance.WithCustomSubmitButton(FormButtonConfiguration.get_Default(),formlet);
      },
      WithSubmitFormlet:function(formlet,submit)
      {
       var _builder_,f,formlet1,f2,x;
       _builder_=Formlet2.Do();
       f=function(arg00)
       {
        return Result.Join(arg00);
       };
       formlet1=_builder_.Delay(function()
       {
        var formlet2;
        formlet2=Formlet2.InitWithFailure(formlet);
        return _builder_.Bind(Formlet2.LiftResult(formlet2),function(_arg1)
        {
         return _builder_.Bind(submit(_arg1),function()
         {
          return _builder_.Return(_arg1);
         });
        });
       });
       f2=Formlet2.MapResult(f,formlet1);
       x=Data.PropagateRenderFrom(formlet,f2);
       return Data.OfIFormlet(x);
      },
      WithTextLabel:function(label,formlet)
      {
       return Enhance.WithLabel(function()
       {
        var x,_this;
        x=List.ofArray([Default.Text(label)]);
        _this=Default.Tags();
        return _this.NewTag("label",x);
       },formlet);
      },
      WithValidationFrame:function(formlet)
      {
       return Enhance.WithCustomValidationFrame(ValidationFrameConfiguration.get_Default(),formlet);
      },
      WithValidationIcon:function(formlet)
      {
       return Enhance.WithCustomValidationIcon(ValidationIconConfiguration.get_Default(),formlet);
      },
      WrapFormlet:function(wrapper,formlet)
      {
       var f;
       f=function()
       {
        var formlet1,form,patternInput,body,panel;
        formlet1=Formlet2.WithLayoutOrDefault(formlet);
        form=Formlet2.BuildForm(formlet1);
        patternInput=formlet1.get_Layout().Apply.call(null,form.Body).$0;
        patternInput[1];
        body=patternInput[0];
        panel=(wrapper(form.State))(body);
        return[panel,function()
        {
         return form.Notify.call(null,null);
        },form.State];
       };
       return Data.MkFormlet(f);
      }
     },
     Formlet:{
      ApplyLayout:function(formlet)
      {
       var f2,formlet1;
       f2=Data.BaseFormlet().ApplyLayout(formlet);
       formlet1=Data.PropagateRenderFrom(formlet,f2);
       return Data.OfIFormlet(formlet1);
      },
      Bind:function(fl,f)
      {
       var objectArg,arg10,x1,x2;
       objectArg=Data.BaseFormlet();
       arg10=function(x)
       {
        var y;
        y=f(x);
        return y;
       };
       x1=objectArg.Bind(fl,arg10);
       x2=Data.PropagateRenderFrom(fl,x1);
       return Data.OfIFormlet(x2);
      },
      BindWith:function(compose,formlet,f)
      {
       var objectArg,arg20,x1,x2;
       objectArg=Data.BaseFormlet();
       arg20=function(x)
       {
        return f(x);
       };
       x1=objectArg.BindWith(compose,formlet,arg20);
       x2=Data.PropagateRenderFrom(formlet,x1);
       return Data.OfIFormlet(x2);
      },
      BuildForm:function(f)
      {
       return Data.BaseFormlet().BuildForm(f);
      },
      BuildFormlet:function(f)
      {
       return Data.MkFormlet(f);
      },
      Choose:function(fs)
      {
       var count,mapping,fs1,x1,f2,x5,arg00,x6,f3;
       count={
        contents:0
       };
       mapping=function(f)
       {
        var f1,formlet,formlet1;
        f1=function(x)
        {
         Operators1.Increment(count);
         return[x,count.contents];
        };
        formlet=Formlet2.Map(f1,f);
        formlet1=Formlet2.InitWithFailure(formlet);
        return Formlet2.LiftResult(formlet1);
       };
       fs1=Seq.map(mapping,fs);
       x1=Formlet2.Sequence(fs1);
       f2=function(xs)
       {
        var chooser,x2,projection,x3,x4,chooser1;
        chooser=function(x)
        {
         var _,v;
         if(x.$==0)
          {
           v=x.$0;
           _={
            $:1,
            $0:v
           };
          }
         else
          {
           _={
            $:0
           };
          }
         return _;
        };
        x2=List.choose(chooser,xs);
        projection=Runtime.Tupled(function(tupledArg)
        {
         var ix;
         tupledArg[0];
         ix=tupledArg[1];
         return ix;
        });
        x3=List.sortBy(projection,x2);
        x4=List.rev(x3);
        chooser1=Runtime.Tupled(function(tupledArg)
        {
         var x;
         x=tupledArg[0];
         tupledArg[1];
         return{
          $:1,
          $0:x
         };
        });
        return Seq.tryPick(chooser1,x4);
       };
       x5=Formlet2.Map(f2,x1);
       arg00=function(x)
       {
        return x.$==1;
       };
       x6=Data.Validator().Is(arg00,"",x5);
       f3=function(x)
       {
        return x.$0;
       };
       return Formlet2.Map(f3,x6);
      },
      Delay:function(f)
      {
       var formlet;
       formlet=Data.BaseFormlet().Delay(function()
       {
        return f(null);
       });
       return Data.OfIFormlet(formlet);
      },
      Deletable:function(formlet)
      {
       var f2,formlet1;
       f2=Data.BaseFormlet().Deletable(formlet);
       formlet1=Data.PropagateRenderFrom(formlet,f2);
       return Data.OfIFormlet(formlet1);
      },
      Do:Runtime.Field(function()
      {
       return FormletBuilder.New();
      }),
      Empty:function()
      {
       var formlet;
       formlet=Data.BaseFormlet().Empty();
       return Data.OfIFormlet(formlet);
      },
      FailWith:function(fs)
      {
       var formlet;
       formlet=Data.BaseFormlet().FailWith(fs);
       return Data.OfIFormlet(formlet);
      },
      FlipBody:function(formlet)
      {
       var f2,formlet1;
       f2=Data.BaseFormlet().FlipBody(formlet);
       formlet1=Data.PropagateRenderFrom(formlet,f2);
       return Data.OfIFormlet(formlet1);
      },
      Flowlet:function(formlet)
      {
       var objectArg,arg00,x,x1;
       objectArg=Data.BaseFormlet();
       arg00=Data.Layout().get_Flowlet();
       x=objectArg.WithLayout(arg00,formlet);
       x1=Data.PropagateRenderFrom(formlet,x);
       return Data.OfIFormlet(x1);
      },
      Horizontal:function(formlet)
      {
       var objectArg,arg00,x,x1;
       objectArg=Data.BaseFormlet();
       arg00=Data.Layout().get_Horizontal();
       x=objectArg.WithLayout(arg00,formlet);
       x1=Data.PropagateRenderFrom(formlet,x);
       return Data.OfIFormlet(x1);
      },
      InitWith:function(value,formlet)
      {
       var objectArg,x,x1;
       objectArg=Data.BaseFormlet();
       x=objectArg.InitWith(value,formlet);
       x1=Data.PropagateRenderFrom(formlet,x);
       return Data.OfIFormlet(x1);
      },
      InitWithFailure:function(formlet)
      {
       var f2,formlet1;
       f2=Data.BaseFormlet().InitWithFailure(formlet);
       formlet1=Data.PropagateRenderFrom(formlet,f2);
       return Data.OfIFormlet(formlet1);
      },
      Join:function(formlet)
      {
       var f,x,objectArg,x1,x2;
       f=function(f1)
       {
        return f1;
       };
       x=Formlet2.Map(f,formlet);
       objectArg=Data.BaseFormlet();
       x1=objectArg.Join(x);
       x2=Data.PropagateRenderFrom(formlet,x1);
       return Data.OfIFormlet(x2);
      },
      LiftResult:function(formlet)
      {
       var f2,formlet1;
       f2=Data.BaseFormlet().LiftResult(formlet);
       formlet1=Data.PropagateRenderFrom(formlet,f2);
       return Data.OfIFormlet(formlet1);
      },
      Map:function(f,formlet)
      {
       var objectArg,x,x1;
       objectArg=Data.BaseFormlet();
       x=objectArg.Map(f,formlet);
       x1=Data.PropagateRenderFrom(formlet,x);
       return Data.OfIFormlet(x1);
      },
      MapBody:function(f,formlet)
      {
       var objectArg,x,x1;
       objectArg=Data.BaseFormlet();
       x=objectArg.MapBody(f,formlet);
       x1=Data.PropagateRenderFrom(formlet,x);
       return Data.OfIFormlet(x1);
      },
      MapElement:function(f,formlet)
      {
       var objectArg,arg00,f2,formlet1;
       objectArg=Data.BaseFormlet();
       arg00=function(b)
       {
        return Runtime.New(Body,{
         Element:f(b.Element),
         Label:b.Label
        });
       };
       f2=objectArg.MapBody(arg00,formlet);
       formlet1=Data.PropagateRenderFrom(formlet,f2);
       return Data.OfIFormlet(formlet1);
      },
      MapResult:function(f,formlet)
      {
       var objectArg,x,x1;
       objectArg=Data.BaseFormlet();
       x=objectArg.MapResult(f,formlet);
       x1=Data.PropagateRenderFrom(formlet,x);
       return Data.OfIFormlet(x1);
      },
      Never:function()
      {
       var formlet;
       formlet=Data.BaseFormlet().Never();
       return Data.OfIFormlet(formlet);
      },
      New:function(f)
      {
       var formlet;
       formlet=Data.BaseFormlet().New(f);
       return Data.OfIFormlet(formlet);
      },
      OfElement:function(genElem)
      {
       var f;
       f=function()
       {
        var elem;
        elem=genElem(null);
        return[elem,function()
        {
        },Data.RX().Return(Runtime.New(Result,{
         $:0,
         $0:null
        }))];
       };
       return Data.MkFormlet(f);
      },
      Render:function(formlet)
      {
       var f2;
       f2=formlet.Run(function()
       {
       });
       return Data.PropagateRenderFrom(formlet,f2);
      },
      Replace:function(formlet,f)
      {
       var objectArg,arg10,x1,x2;
       objectArg=Data.BaseFormlet();
       arg10=function(x)
       {
        return f(x);
       };
       x1=objectArg.Replace(formlet,arg10);
       x2=Data.PropagateRenderFrom(formlet,x1);
       return Data.OfIFormlet(x2);
      },
      ReplaceFirstWithFailure:function(formlet)
      {
       var f2,formlet1;
       f2=Data.BaseFormlet().ReplaceFirstWithFailure(formlet);
       formlet1=Data.PropagateRenderFrom(formlet,f2);
       return Data.OfIFormlet(formlet1);
      },
      Return:function(x)
      {
       var formlet;
       formlet=Data.BaseFormlet().Return(x);
       return Data.OfIFormlet(formlet);
      },
      ReturnEmpty:function(x)
      {
       var formlet;
       formlet=Data.BaseFormlet().ReturnEmpty(x);
       return Data.OfIFormlet(formlet);
      },
      Run:function(f,formlet)
      {
       return formlet.Run(f);
      },
      SelectMany:function(formlet)
      {
       var f,x,objectArg,x1,x2;
       f=function(f1)
       {
        return f1;
       };
       x=Formlet2.Map(f,formlet);
       objectArg=Data.BaseFormlet();
       x1=objectArg.SelectMany(x);
       x2=Data.PropagateRenderFrom(formlet,x1);
       return Data.OfIFormlet(x2);
      },
      Sequence:function(fs)
      {
       var mapping,x1,objectArg,x2;
       mapping=function(x)
       {
        return x;
       };
       x1=Seq.map(mapping,fs);
       objectArg=Data.BaseFormlet();
       x2=objectArg.Sequence(x1);
       return Data.OfIFormlet(x2);
      },
      Switch:function(formlet)
      {
       var f,x,objectArg,x1,x2;
       f=function(f1)
       {
        return f1;
       };
       x=Formlet2.Map(f,formlet);
       objectArg=Data.BaseFormlet();
       x1=objectArg.Switch(x);
       x2=Data.PropagateRenderFrom(formlet,x1);
       return Data.OfIFormlet(x2);
      },
      Vertical:function(formlet)
      {
       var objectArg,arg00,x,x1;
       objectArg=Data.BaseFormlet();
       arg00=Data.Layout().get_Vertical();
       x=objectArg.WithLayout(arg00,formlet);
       x1=Data.PropagateRenderFrom(formlet,x);
       return Data.OfIFormlet(x1);
      },
      WithCancelation:function(formlet,c)
      {
       var objectArg,x,x1;
       objectArg=Data.BaseFormlet();
       x=objectArg.WithCancelation(formlet,c);
       x1=Data.PropagateRenderFrom(formlet,x);
       return Data.OfIFormlet(x1);
      },
      WithLabel:function(label,formlet)
      {
       var objectArg,arg00,f2,formlet1;
       objectArg=Data.BaseFormlet();
       arg00=function(body)
       {
        return Runtime.New(Body,{
         Element:body.Element,
         Label:label
        });
       };
       f2=objectArg.MapBody(arg00,formlet);
       formlet1=Data.PropagateRenderFrom(formlet,f2);
       return Data.OfIFormlet(formlet1);
      },
      WithLayout:function(l,formlet)
      {
       var objectArg,x,x1;
       objectArg=Data.BaseFormlet();
       x=objectArg.WithLayout(l,formlet);
       x1=Data.PropagateRenderFrom(formlet,x);
       return Data.OfIFormlet(x1);
      },
      WithLayoutOrDefault:function(formlet)
      {
       var f2,formlet1;
       f2=Data.BaseFormlet().WithLayoutOrDefault(formlet);
       formlet1=Data.PropagateRenderFrom(formlet,f2);
       return Data.OfIFormlet(formlet1);
      },
      WithNotification:function(c,formlet)
      {
       var objectArg,x,x1;
       objectArg=Data.BaseFormlet();
       x=objectArg.WithNotification(c,formlet);
       x1=Data.PropagateRenderFrom(formlet,x);
       return Data.OfIFormlet(x1);
      },
      WithNotificationChannel:function(formlet)
      {
       var f2,formlet1;
       f2=Data.BaseFormlet().WithNotificationChannel(formlet);
       formlet1=Data.PropagateRenderFrom(formlet,f2);
       return Data.OfIFormlet(formlet1);
      }
     },
     FormletBuilder:Runtime.Class({
      Bind:function(formlet,f)
      {
       var objectArg,arg10,x1,x2;
       objectArg=Data.BaseFormlet();
       arg10=function(x)
       {
        var y;
        y=f(x);
        return y;
       };
       x1=objectArg.Bind(formlet,arg10);
       x2=Data.PropagateRenderFrom(formlet,x1);
       return Data.OfIFormlet(x2);
      },
      Delay:function(f)
      {
       var formlet;
       formlet=Data.BaseFormlet().Delay(function(x)
       {
        return f(x);
       });
       return Data.OfIFormlet(formlet);
      },
      Return:function(x)
      {
       var formlet;
       formlet=Data.BaseFormlet().Return(x);
       return Data.OfIFormlet(formlet);
      },
      ReturnFrom:function(f)
      {
       return Data.OfIFormlet(f);
      }
     },{
      New:function()
      {
       return Runtime.New(this,{});
      }
     }),
     Layout:{
      FormRowConfiguration:Runtime.Class({},{
       get_Default:function()
       {
        return Runtime.New(FormRowConfiguration,{
         Padding:{
          $:0
         },
         Color:{
          $:0
         },
         Class:{
          $:0
         },
         Style:{
          $:0
         },
         LabelConfiguration:{
          $:0
         }
        });
       }
      }),
      LabelConfiguration:Runtime.Class({},{
       get_Default:function()
       {
        return Runtime.New(LabelConfiguration,{
         Align:{
          $:0
         },
         VerticalAlign:{
          $:1
         },
         Placement:{
          $:0
         }
        });
       }
      }),
      Padding:Runtime.Class({},{
       get_Default:function()
       {
        return Runtime.New(Padding1,{
         Left:{
          $:0
         },
         Right:{
          $:0
         },
         Top:{
          $:0
         },
         Bottom:{
          $:0
         }
        });
       }
      })
     },
     LayoutProvider:Runtime.Class({
      ColumnLayout:function(rowConfig)
      {
       var objectArg,arg00,_this=this;
       objectArg=this.LayoutUtils;
       arg00=function()
       {
        var row,container,store,insert,remove;
        row=Default.TR(Runtime.New(T,{
         $:0
        }));
        container=Default.Table(List.ofArray([Default.TBody(List.ofArray([row]))]));
        store=ElementStore.NewElementStore();
        insert=function(rowIx)
        {
         return function(body)
         {
          var elemId,newCol,jqPanel,index,inserted;
          elemId=body.Element.get_Id();
          newCol=Default.TD(List.ofArray([Default.Table(List.ofArray([Default.TBody(List.ofArray([_this.MakeRow(rowConfig,rowIx,body)]))]))]));
          jqPanel=jQuery(row.Body);
          index={
           contents:0
          };
          inserted={
           contents:false
          };
          jqPanel.children().each(function()
          {
           var jqCol,_;
           jqCol=jQuery(this);
           if(rowIx===index.contents)
            {
             jQuery(newCol.Body).insertBefore(jqCol);
             newCol.Render();
             _=void(inserted.contents=true);
            }
           else
            {
             _=null;
            }
           return Operators1.Increment(index);
          });
          !inserted.contents?row.AppendI(newCol):null;
          return store.RegisterElement(elemId,function()
          {
           return newCol["HtmlProvider@31"].Remove(newCol.Body);
          });
         };
        };
        remove=function(elems)
        {
         var enumerator,b;
         enumerator=Enumerator.Get(elems);
         while(enumerator.MoveNext())
          {
           b=enumerator.get_Current();
           store.Remove(b.Element.get_Id());
          }
         return;
        };
        return{
         Body:Runtime.New(Body,{
          Element:container,
          Label:{
           $:0
          }
         }),
         SyncRoot:null,
         Insert:insert,
         Remove:remove
        };
       };
       return objectArg.New(arg00);
      },
      HorizontalAlignElem:function(align,el)
      {
       var _float,_this,x;
       _float=align.$==0?"left":"right";
       _this=Default.Attr();
       x="float:"+_float+";";
       return Operators.add(Default.Div(List.ofArray([_this.NewAttr("style",x)])),List.ofArray([el]));
      },
      LabelLayout:function(lc)
      {
       var inputRecord,LabelConfiguration1;
       inputRecord=FormRowConfiguration.get_Default();
       LabelConfiguration1={
        $:1,
        $0:lc
       };
       return this.RowLayout(Runtime.New(FormRowConfiguration,{
        Padding:inputRecord.Padding,
        Color:inputRecord.Color,
        Class:inputRecord.Class,
        Style:inputRecord.Style,
        LabelConfiguration:LabelConfiguration1
       }));
      },
      MakeLayout:function(lm)
      {
       var objectArg,arg00;
       objectArg=this.LayoutUtils;
       arg00=function()
       {
        var lm1,store,insert,remove;
        lm1=lm(null);
        store=ElementStore.NewElementStore();
        insert=function(ix)
        {
         return function(bd)
         {
          var elemId,newElems;
          elemId=bd.Element.get_Id();
          newElems=(lm1.Insert.call(null,ix))(bd);
          return store.RegisterElement(elemId,function()
          {
           var enumerator,e;
           enumerator=Enumerator.Get(newElems);
           while(enumerator.MoveNext())
            {
             e=enumerator.get_Current();
             e["HtmlProvider@31"].Remove(e.Body);
            }
           return;
          });
         };
        };
        remove=function(elems)
        {
         var enumerator,b;
         enumerator=Enumerator.Get(elems);
         while(enumerator.MoveNext())
          {
           b=enumerator.get_Current();
           store.Remove(b.Element.get_Id());
          }
         return;
        };
        return{
         Body:Runtime.New(Body,{
          Element:lm1.Panel,
          Label:{
           $:0
          }
         }),
         SyncRoot:null,
         Insert:insert,
         Remove:remove
        };
       };
       return objectArg.New(arg00);
      },
      MakeRow:function(rowConfig,rowIndex,body)
      {
       var x,d,f,padding,f1,o,paddingLeft,f2,o1,paddingTop,f3,o2,paddingRight,f4,o3,paddingBottom,makeCell,elem1,matchValue,cells,_1,labelGen,x5,d1,f6,labelConf,arg00,arg10,label,matchValue1,_2,x6,x7,x8,d2,f7,rowClass,x9,d3,f8,rowColorStyleProp,xa,d4,f9,rowStyleProp,matchValue2,rowStyle,_3,arg002,_this2,b2,b3,xb;
       x=rowConfig.Padding;
       d=Padding1.get_Default();
       f=function(x1)
       {
        return x1;
       };
       padding=Utils.Maybe(d,f,x);
       f1=function(x1)
       {
        return x1;
       };
       o=padding.Left;
       paddingLeft=Utils.Maybe(0,f1,o);
       f2=function(x1)
       {
        return x1;
       };
       o1=padding.Top;
       paddingTop=Utils.Maybe(0,f2,o1);
       f3=function(x1)
       {
        return x1;
       };
       o2=padding.Right;
       paddingRight=Utils.Maybe(0,f3,o2);
       f4=function(x1)
       {
        return x1;
       };
       o3=padding.Bottom;
       paddingBottom=Utils.Maybe(0,f4,o3);
       makeCell=function(l)
       {
        return function(t)
        {
         return function(r)
         {
          return function(b)
          {
           return function(csp)
           {
            return function(valign)
            {
             return function(elem)
             {
              var x1,mapping,reduction,source,paddingStyle,f5,valignStyle,_this,x3,style,colSpan,_,_this1,a,b1,x4;
              x1=List.ofArray([["padding-left: ",l],["padding-top: ",t],["padding-right: ",r],["padding-bottom: ",b]]);
              mapping=Runtime.Tupled(function(tupledArg)
              {
               var k,v;
               k=tupledArg[0];
               v=tupledArg[1];
               return k+Global.String(v)+"px;";
              });
              reduction=function(x2)
              {
               return function(y)
               {
                return x2+y;
               };
              };
              source=List.map(mapping,x1);
              paddingStyle=Seq.reduce(reduction,source);
              f5=function(valign1)
              {
               var value;
               value=valign1.$==1?"middle":valign1.$==2?"bottom":"top";
               return"vertical-align: "+value+";";
              };
              valignStyle=Utils.Maybe("",f5,valign);
              _this=Default.Attr();
              x3=paddingStyle+";"+valignStyle;
              style=_this.NewAttr("style",x3);
              if(csp)
               {
                _this1=Default.Attr();
                _=List.ofArray([_this1.NewAttr("colspan","2")]);
               }
              else
               {
                _=Runtime.New(T,{
                 $:0
                });
               }
              colSpan=_;
              a=Runtime.New(T,{
               $:1,
               $0:style,
               $1:colSpan
              });
              b1=List.ofArray([elem]);
              x4=List.append(a,b1);
              return Default.TD(x4);
             };
            };
           };
          };
         };
        };
       };
       elem1=body.Element;
       matchValue=body.Label;
       if(matchValue.$==1)
        {
         labelGen=matchValue.$0;
         x5=rowConfig.LabelConfiguration;
         d1=LabelConfiguration.get_Default();
         f6=function(x1)
         {
          return x1;
         };
         labelConf=Utils.Maybe(d1,f6,x5);
         arg00=labelConf.Align;
         arg10=labelGen(null);
         label=this.HorizontalAlignElem(arg00,arg10);
         matchValue1=labelConf.Placement;
         if(matchValue1.$==3)
          {
           x6=Utils.InTable(List.ofArray([List.ofArray([elem1]),List.ofArray([label])]));
           _2=List.ofArray([((((((makeCell(paddingLeft))(paddingTop))(paddingRight))(paddingBottom))(true))({
            $:0
           }))(x6)]);
          }
         else
          {
           if(matchValue1.$==0)
            {
             _2=List.ofArray([((((((makeCell(paddingLeft))(paddingTop))(0))(paddingBottom))(false))({
              $:1,
              $0:labelConf.VerticalAlign
             }))(label),((((((makeCell(0))(paddingTop))(paddingRight))(paddingBottom))(false))({
              $:0
             }))(elem1)]);
            }
           else
            {
             if(matchValue1.$==1)
              {
               _2=List.ofArray([((((((makeCell(paddingLeft))(paddingTop))(0))(paddingBottom))(false))({
                $:1,
                $0:labelConf.VerticalAlign
               }))(elem1),((((((makeCell(0))(paddingTop))(paddingRight))(paddingBottom))(false))({
                $:0
               }))(label)]);
              }
             else
              {
               x7=Utils.InTable(List.ofArray([List.ofArray([label]),List.ofArray([elem1])]));
               _2=List.ofArray([((((((makeCell(paddingLeft))(paddingTop))(paddingRight))(paddingBottom))(true))({
                $:0
               }))(x7)]);
              }
            }
          }
         _1=_2;
        }
       else
        {
         _1=List.ofArray([((((((makeCell(paddingLeft))(paddingTop))(paddingRight))(paddingBottom))(true))({
          $:0
         }))(elem1)]);
        }
       cells=_1;
       x8=rowConfig.Class;
       d2=Runtime.New(T,{
        $:0
       });
       f7=function(classGen)
       {
        var arg001;
        arg001=classGen(rowIndex);
        return List.ofArray([Default.Attr().Class(arg001)]);
       };
       rowClass=Utils.Maybe(d2,f7,x8);
       x9=rowConfig.Color;
       d3=Runtime.New(T,{
        $:0
       });
       f8=function(colGen)
       {
        var col;
        col=colGen(rowIndex);
        return List.ofArray(["background-color: "+col]);
       };
       rowColorStyleProp=Utils.Maybe(d3,f8,x9);
       xa=rowConfig.Style;
       d4=Runtime.New(T,{
        $:0
       });
       f9=function(styleGen)
       {
        return List.ofArray([styleGen(rowIndex)]);
       };
       rowStyleProp=Utils.Maybe(d4,f9,xa);
       matchValue2=List.append(rowColorStyleProp,rowStyleProp);
       if(matchValue2.$==0)
        {
         _3=Runtime.New(T,{
          $:0
         });
        }
       else
        {
         arg002=Seq.reduce(function(x1)
         {
          return function(y)
          {
           return x1+";"+y;
          };
         },matchValue2);
         _this2=Default.Attr();
         _3=List.ofArray([_this2.NewAttr("style",arg002)]);
        }
       rowStyle=_3;
       b2=List.append(rowStyle,cells);
       b3=List.append(rowStyle,b2);
       xb=List.append(rowClass,b3);
       return Default.TR(xb);
      },
      RowLayout:function(rowConfig)
      {
       var objectArg,arg00,_this=this;
       objectArg=this.LayoutUtils;
       arg00=function()
       {
        var panel,container,store,insert,remove;
        panel=Default.TBody(Runtime.New(T,{
         $:0
        }));
        container=Default.Table(List.ofArray([panel]));
        store=ElementStore.NewElementStore();
        insert=function(rowIx)
        {
         return function(body)
         {
          var elemId,row,jqPanel,index,inserted;
          elemId=body.Element.get_Id();
          row=_this.MakeRow(rowConfig,rowIx,body);
          jqPanel=jQuery(panel.Body);
          index={
           contents:0
          };
          inserted={
           contents:false
          };
          jqPanel.children().each(function()
          {
           var jqRow,_;
           jqRow=jQuery(this);
           if(rowIx===index.contents)
            {
             jQuery(row.Body).insertBefore(jqRow);
             row.Render();
             _=void(inserted.contents=true);
            }
           else
            {
             _=null;
            }
           return Operators1.Increment(index);
          });
          !inserted.contents?panel.AppendI(row):null;
          return store.RegisterElement(elemId,function()
          {
           return row["HtmlProvider@31"].Remove(row.Body);
          });
         };
        };
        remove=function(elems)
        {
         var enumerator,b;
         enumerator=Enumerator.Get(elems);
         while(enumerator.MoveNext())
          {
           b=enumerator.get_Current();
           store.Remove(b.Element.get_Id());
          }
         return;
        };
        return{
         Body:Runtime.New(Body,{
          Element:container,
          Label:{
           $:0
          }
         }),
         SyncRoot:null,
         Insert:insert,
         Remove:remove
        };
       };
       return objectArg.New(arg00);
      },
      VerticalAlignedTD:function(valign,elem)
      {
       var valign1,cell,objectArg,arg00;
       valign1=valign.$==1?"middle":valign.$==2?"bottom":"top";
       cell=Default.TD(List.ofArray([elem]));
       objectArg=cell["HtmlProvider@31"];
       arg00=cell.Body;
       objectArg.SetCss(arg00,"vertical-align",valign1);
       return cell;
      },
      get_Flowlet:function()
      {
       var lm;
       lm=function()
       {
        var panel,insert;
        panel=Default.Div(Runtime.New(T,{
         $:0
        }));
        insert=function()
        {
         return function(bd)
         {
          var label,nextScreen;
          label=bd.Label.$==1?bd.Label.$0.call(null,null):Default.Span(Runtime.New(T,{
           $:0
          }));
          nextScreen=Utils.InTable(List.ofArray([List.ofArray([label,Default.Div(List.ofArray([bd.Element]))])]));
          panel["HtmlProvider@31"].Clear(panel.Body);
          panel.AppendI(nextScreen);
          return List.ofArray([nextScreen]);
         };
        };
        return{
         Insert:insert,
         Panel:panel
        };
       };
       return this.MakeLayout(lm);
      },
      get_Horizontal:function()
      {
       return this.ColumnLayout(FormRowConfiguration.get_Default());
      },
      get_Vertical:function()
      {
       return this.RowLayout(FormRowConfiguration.get_Default());
      }
     },{
      New:function(LayoutUtils1)
      {
       var r;
       r=Runtime.New(this,{});
       r.LayoutUtils=LayoutUtils1;
       return r;
      }
     }),
     Utils:{
      InTable:function(rows)
      {
       var mapping,rs,tb;
       mapping=function(cols)
       {
        var mapping1,xs;
        mapping1=function(c)
        {
         return Default.TD(List.ofArray([c]));
        };
        xs=List.map(mapping1,cols);
        return Default.TR(xs);
       };
       rs=List.map(mapping,rows);
       tb=Default.TBody(rs);
       return Default.Table(List.ofArray([tb]));
      },
      MapOption:function(f,value)
      {
       var _,v;
       if(value.$==1)
        {
         v=value.$0;
         _={
          $:1,
          $0:f(v)
         };
        }
       else
        {
         _={
          $:0
         };
        }
       return _;
      },
      Maybe:function(d,f,o)
      {
       var _,x;
       if(o.$==0)
        {
         _=d;
        }
       else
        {
         x=o.$0;
         _=f(x);
        }
       return _;
      }
     }
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Formlet=Runtime.Safe(WebSharper.Formlet);
  Body=Runtime.Safe(Formlet.Body);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  Controls=Runtime.Safe(Formlet.Controls);
  Reactive=Runtime.Safe(Global.IntelliFactory.Reactive);
  HotStream=Runtime.Safe(Reactive.HotStream);
  Formlet1=Runtime.Safe(Global.IntelliFactory.Formlet);
  Base=Runtime.Safe(Formlet1.Base);
  Result=Runtime.Safe(Base.Result);
  T=Runtime.Safe(List.T);
  Operators=Runtime.Safe(Html.Operators);
  jQuery=Runtime.Safe(Global.jQuery);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  Data=Runtime.Safe(Formlet.Data);
  Formlet2=Runtime.Safe(Formlet.Formlet);
  Operators1=Runtime.Safe(WebSharper.Operators);
  CssConstants=Runtime.Safe(Formlet.CssConstants);
  Math=Runtime.Safe(Global.Math);
  Seq=Runtime.Safe(WebSharper.Seq);
  Utils=Runtime.Safe(Formlet.Utils);
  Tree=Runtime.Safe(Base.Tree);
  Edit=Runtime.Safe(Tree.Edit);
  Form=Runtime.Safe(Base.Form);
  Arrays=Runtime.Safe(WebSharper.Arrays);
  IntrinsicFunctionProxy=Runtime.Safe(WebSharper.IntrinsicFunctionProxy);
  FormletProvider=Runtime.Safe(Base.FormletProvider);
  Formlet3=Runtime.Safe(Data.Formlet);
  Util=Runtime.Safe(WebSharper.Util);
  LayoutProvider=Runtime.Safe(Formlet.LayoutProvider);
  LayoutUtils=Runtime.Safe(Base.LayoutUtils);
  Reactive1=Runtime.Safe(Reactive.Reactive);
  Validator=Runtime.Safe(Base.Validator);
  ValidatorProvidor=Runtime.Safe(Data.ValidatorProvidor);
  RegExp=Runtime.Safe(Global.RegExp);
  Collections=Runtime.Safe(WebSharper.Collections);
  Dictionary=Runtime.Safe(Collections.Dictionary);
  ElementStore=Runtime.Safe(Formlet.ElementStore);
  Enhance=Runtime.Safe(Formlet.Enhance);
  FormButtonConfiguration=Runtime.Safe(Enhance.FormButtonConfiguration);
  FormContainerConfiguration=Runtime.Safe(Enhance.FormContainerConfiguration);
  Padding=Runtime.Safe(Enhance.Padding);
  ManyConfiguration=Runtime.Safe(Enhance.ManyConfiguration);
  ValidationFrameConfiguration=Runtime.Safe(Enhance.ValidationFrameConfiguration);
  ValidationIconConfiguration=Runtime.Safe(Enhance.ValidationIconConfiguration);
  JSON=Runtime.Safe(Global.JSON);
  FormletBuilder=Runtime.Safe(Formlet.FormletBuilder);
  Layout=Runtime.Safe(Formlet.Layout);
  FormRowConfiguration=Runtime.Safe(Layout.FormRowConfiguration);
  LabelConfiguration=Runtime.Safe(Layout.LabelConfiguration);
  Padding1=Runtime.Safe(Layout.Padding);
  return Enumerator=Runtime.Safe(WebSharper.Enumerator);
 });
 Runtime.OnLoad(function()
 {
  Formlet2.Do();
  Data.Validator();
  Data.RX();
  Data.Layout();
  Data.DefaultLayout();
  CssConstants.InputTextClass();
  return;
 });
}());
