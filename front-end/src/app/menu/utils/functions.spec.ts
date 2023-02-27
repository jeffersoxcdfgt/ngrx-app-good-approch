import { removejscssfile } from './functions'

describe('functions', () => {

   it('should call removejscssfile', () => {
    const filename = 'filenname.txt';
    const filetype ='css';
    removejscssfile(filename, filetype);
    const res = document.getElementsByTagName('none');
    expect(res).not.toBeNull();
   });


   it('should call removejscssfile with javascript file', () => {
   
    const script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.3.1.slim.min.js';
    document.body.appendChild(script);
    const filename = 'jquery-3.3.1.slim.min';
    const filetype = 'js';
    removejscssfile(filename, filetype);
    const res = document.getElementsByTagName('script');
    expect(res).not.toBeNull();

   });

   it('should call removejscssfile with css file', () => {
   
    const script = document.createElement('link');
    script.href = 'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css';
    document.body.appendChild(script);
    const filename = 'bootstrap.min';
    const filetype = 'css';
    removejscssfile(filename, filetype);
    const res = document.getElementsByTagName('css');
    expect(res).not.toBeNull();

   })

});
