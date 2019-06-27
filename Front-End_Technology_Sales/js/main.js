function getEle(id)
{
    return document.getElementById('id');
}
var ts = getEle('hover');
getEle('hover').addEventListener("mouseenter",function ()
{
    ts.style.color = 'red';
})