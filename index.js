export default function shadowingeasy(options)
{
    let images=document.querySelectorAll('.shadowingeasy');
    console.log(images);
    console.log(options);
    if(options.shadow_type==='hard')
    {
        options.shadow_type==='0px';
    }
    else
    {
        options.shadow_type='15px';
    }
    images.forEach(image => {
        console.log(image);
        image.style.boxShadow="10px 20px 30px black";
        image.style.borderRadius="20px";
        if(options.margin)
        {
            image.style.margin= "50px";
        } 
      });
}
