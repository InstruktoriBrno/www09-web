/* Right Context Menu configuration:
   Menu is built from four array items: title -> link -> display for pages -> display for headpages.
   Link is not created if it's 0, otherwise it's evaluated.
   Some usefull variables:
   url = node url;
   id = the page (or headpage if it's a namespace) DW id.
   node.id = page or namespace DW id.
   Second array is displayed only in edit mode.
*/

var indexmenu_contextmenu=new Array(
				    //Standard right menu
				    new Array(
					      '<b><u>Page action:</u></b>',0,1,0,
					      '<b><u>Namespace action:</u></b>',0,0,1,
					      'New page here','"javascript: indexmenu_reqpage(\'"+url+"\',\'"+this.config.sepchar+"\');"',1,1,
					      'Headpage here','"javascript: indexmenu_reqpage(\'"+url+"\',\'"+this.config.sepchar+"\',\'"+node.name+"\');"',0,1,
					      'Edit','url+"&do=edit"',1,0,
					      'Toc preview','"javascript: indexmenu_ajax(\'req=toc&id="+id+"\',\'picker_"+this.obj+"\',\'r"+this.obj+"\');"+this.obj+".divdisplay(\'r\',0);"',1,0,
					      'Revisions','url+"&do=revisions"',1,0
					      //'Purge cache','url+"&purge=true"',1,0
					      //'Acls','url+"do=admin&page=acl"',1,1
					      ),

				    //Right menu in edit mode.
				    new Array(
					      '<b><u>Edit action:</u></b>',0,1,0,
					      'Insert as DWlink','"javascript: indexmenu_insertTags(\'"+id+"\',\'"+this.config.sepchar+"\');"+this.obj+".divdisplay(\'r\',0);"',1,0
					      )
				    );

/*Custom User Functions
Insert your custom function here.
*/

function indexmenu_reqpage(u,s,id) {
    var r=id||prompt("Insert the pagename to create","");
    if (r) window.location.href=u+s+r+"&do=edit";
}
