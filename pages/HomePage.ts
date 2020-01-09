import {by, element } from 'protractor';
export class Homepage
{

    listofcustomrs1=element.all(by.tagName('option'));
    

public  customerLoginButton()
{
    return element(by.xpath("(//div[@class='center']//button)[1]")).click();
    
}
public  customerselection()
{
    return element(by.id("userSelect")).click();
}
public   listofcustomrs()
{
     let list=element.all(by.tagName('option')).getText().then(function(text){
         console.log(text)
         console.log(text.length)
     })
     

}
// public  mainlogin()
// {
//     return element(by.xpath("//button[@type='submit']"));
// }
public  custlist()
{
    this.listofcustomrs1.then(function(items)
    {
        console.log(items.length);
        for(let i=0;i<items.length;i++)
        {
            items[i].getText().then(function(text:any){
                console.log(text);
                items[i].click();
                
                
                


            })
        }
    })
    
}
}