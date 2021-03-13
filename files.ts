export default {"./src/content/another-page.md":"# Another page\n\nThis is another page in the site. Notice that links to this page now include an \"active\" class.\n\nAlso note that the H1 for this page has been used as the page title.","./src/content/index.md":"# Barebones Static Site Generator\n\nThis is the index or homepage for a basic site generated by [BBSSG](https://github.com/andrewbridge/bbssg).\n\nNote that this page is denoted as \"Home\" in the title instead of the page name.","./src/template.html":"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"/favicon.ico\" />\n    <link rel=\"stylesheet\" href=\"/assets/water.css\" />\n    <link rel=\"stylesheet\" href=\"/assets/styles.css\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <meta name=\"description\" content=\"A site generated with BBSSG\" />\n    <title>Barebones Static Site Generator | {%PAGE_TITLE%}</title>\n  </head>\n  <body>\n    <nav>\n      <ul>\n        <li><a href=\"/\">Home</a></li>\n        <li><a href=\"/another-page/\">Another page</a></li>\n      </ul>\n    </nav>\n    <hr>\n    <main>\n        {%PAGE_CONTENT%}\n    </main>\n  </body>\n</html>\n","./src/assets/styles.css":"nav ul {\n    list-style: none;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-bottom: 0;\n}\n\nnav ul li {\n    margin-right: 1em;\n    margin-bottom: .6em;\n}\n\nnav ul li a {\n    padding: 0 .5em .3em;\n}\n\nnav ul li a:hover, nav ul li a:focus, nav ul li a:active {\n    text-decoration: none;\n    border-bottom: .25em solid #dbdbdb;\n}\n\nnav ul li a.active {\n    border-bottom: .25em solid #0076d1;\n}","./src/assets/water.css":":root{--background-body:#fff;--background:#efefef;--background-alt:#f7f7f7;--selection:#9e9e9e;--text-main:#363636;--text-bright:#000;--text-muted:#70777f;--links:#0076d1;--focus:#0096bfab;--border:#dbdbdb;--code:#000;--animation-duration:0.1s;--button-hover:#ddd;--scrollbar-thumb:rgb(213, 213, 213);--scrollbar-thumb-hover:rgb(196, 196, 196);--form-placeholder:#949494;--form-text:#000;--variable:#39a33c;--highlight:#ff0;--select-arrow:url(\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='62.5' width='116.9' fill='%23161f27'%3E %3Cpath d='M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C0,3.2 0,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6Z'/%3E %3C/svg%3E\")}@media (prefers-color-scheme:dark){:root{--background-body:#202b38;--background:#161f27;--background-alt:#1a242f;--selection:#1c76c5;--text-main:#dbdbdb;--text-bright:#fff;--text-muted:#a9b1ba;--links:#41adff;--focus:#0096bfab;--border:#526980;--code:#ffbe85;--animation-duration:0.1s;--button-hover:#324759;--scrollbar-thumb:var(--button-hover);--scrollbar-thumb-hover:rgb(20, 20, 20);--form-placeholder:#a9a9a9;--form-text:#fff;--variable:#d941e2;--highlight:#efdb43;--select-arrow:url(\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='62.5' width='116.9' fill='%23efefef'%3E %3Cpath d='M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C0,3.2 0,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6Z'/%3E %3C/svg%3E\")}}html{scrollbar-color:#d5d5d5 #fff;scrollbar-color:var(--scrollbar-thumb) var(--background-body);scrollbar-width:thin}@media (prefers-color-scheme:dark){html{scrollbar-color:#324759 #202b38;scrollbar-color:var(--scrollbar-thumb) var(--background-body)}}@media (prefers-color-scheme:dark){html{scrollbar-color:#324759 #202b38;scrollbar-color:var(--scrollbar-thumb) var(--background-body)}}@media (prefers-color-scheme:dark){html{scrollbar-color:#324759 #202b38;scrollbar-color:var(--scrollbar-thumb) var(--background-body)}}@media (prefers-color-scheme:dark){html{scrollbar-color:#324759 #202b38;scrollbar-color:var(--scrollbar-thumb) var(--background-body)}}@media (prefers-color-scheme:dark){html{scrollbar-color:#324759 #202b38;scrollbar-color:var(--scrollbar-thumb) var(--background-body)}}@media (prefers-color-scheme:dark){html{scrollbar-color:#324759 #202b38;scrollbar-color:var(--scrollbar-thumb) var(--background-body)}}body{font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue','Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif;line-height:1.4;max-width:800px;margin:20px auto;padding:0 10px;word-wrap:break-word;color:#363636;color:var(--text-main);background:#fff;background:var(--background-body);text-rendering:optimizeLegibility}@media (prefers-color-scheme:dark){body{background:#202b38;background:var(--background-body)}}@media (prefers-color-scheme:dark){body{color:#dbdbdb;color:var(--text-main)}}button{transition:background-color .1s linear,border-color .1s linear,color .1s linear,box-shadow .1s linear,transform .1s ease;transition:background-color var(--animation-duration) linear,border-color var(--animation-duration) linear,color var(--animation-duration) linear,box-shadow var(--animation-duration) linear,transform var(--animation-duration) ease}@media (prefers-color-scheme:dark){button{transition:background-color .1s linear,border-color .1s linear,color .1s linear,box-shadow .1s linear,transform .1s ease;transition:background-color var(--animation-duration) linear,border-color var(--animation-duration) linear,color var(--animation-duration) linear,box-shadow var(--animation-duration) linear,transform var(--animation-duration) ease}}input{transition:background-color .1s linear,border-color .1s linear,color .1s linear,box-shadow .1s linear,transform .1s ease;transition:background-color var(--animation-duration) linear,border-color var(--animation-duration) linear,color var(--animation-duration) linear,box-shadow var(--animation-duration) linear,transform var(--animation-duration) ease}@media (prefers-color-scheme:dark){input{transition:background-color .1s linear,border-color .1s linear,color .1s linear,box-shadow .1s linear,transform .1s ease;transition:background-color var(--animation-duration) linear,border-color var(--animation-duration) linear,color var(--animation-duration) linear,box-shadow var(--animation-duration) linear,transform var(--animation-duration) ease}}textarea{transition:background-color .1s linear,border-color .1s linear,color .1s linear,box-shadow .1s linear,transform .1s ease;transition:background-color var(--animation-duration) linear,border-color var(--animation-duration) linear,color var(--animation-duration) linear,box-shadow var(--animation-duration) linear,transform var(--animation-duration) ease}@media (prefers-color-scheme:dark){textarea{transition:background-color .1s linear,border-color .1s linear,color .1s linear,box-shadow .1s linear,transform .1s ease;transition:background-color var(--animation-duration) linear,border-color var(--animation-duration) linear,color var(--animation-duration) linear,box-shadow var(--animation-duration) linear,transform var(--animation-duration) ease}}h1{font-size:2.2em;margin-top:0}h1,h2,h3,h4,h5,h6{margin-bottom:12px;margin-top:24px}h1{color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){h1{color:#fff;color:var(--text-bright)}}h2{color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){h2{color:#fff;color:var(--text-bright)}}h3{color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){h3{color:#fff;color:var(--text-bright)}}h4{color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){h4{color:#fff;color:var(--text-bright)}}h5{color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){h5{color:#fff;color:var(--text-bright)}}h6{color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){h6{color:#fff;color:var(--text-bright)}}strong{color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){strong{color:#fff;color:var(--text-bright)}}b,h1,h2,h3,h4,h5,h6,strong,th{font-weight:600}q::before{content:none}q::after{content:none}blockquote{border-left:4px solid #0096bfab;border-left:4px solid var(--focus);margin:1.5em 0;padding:.5em 1em;font-style:italic}@media (prefers-color-scheme:dark){blockquote{border-left:4px solid #0096bfab;border-left:4px solid var(--focus)}}q{border-left:4px solid #0096bfab;border-left:4px solid var(--focus);margin:1.5em 0;padding:.5em 1em;font-style:italic}@media (prefers-color-scheme:dark){q{border-left:4px solid #0096bfab;border-left:4px solid var(--focus)}}blockquote>footer{font-style:normal;border:0}blockquote cite{font-style:normal}address{font-style:normal}a[href^='mailto\\:']::before{content:'📧 '}a[href^='tel\\:']::before{content:'📞 '}a[href^='sms\\:']::before{content:'💬 '}mark{background-color:#ff0;background-color:var(--highlight);border-radius:2px;padding:0 2px 0 2px;color:#000}@media (prefers-color-scheme:dark){mark{background-color:#efdb43;background-color:var(--highlight)}}button,input[type=button],input[type=checkbox],input[type=radio],input[type=range],input[type=submit],select{cursor:pointer}input:not([type=checkbox]):not([type=radio]),select{display:block}input{color:#000;color:var(--form-text);background-color:#efefef;background-color:var(--background);font-family:inherit;font-size:inherit;margin-right:6px;margin-bottom:6px;padding:10px;border:none;border-radius:6px;outline:0}@media (prefers-color-scheme:dark){input{background-color:#161f27;background-color:var(--background)}}@media (prefers-color-scheme:dark){input{color:#fff;color:var(--form-text)}}button{color:#000;color:var(--form-text);background-color:#efefef;background-color:var(--background);font-family:inherit;font-size:inherit;margin-right:6px;margin-bottom:6px;padding:10px;border:none;border-radius:6px;outline:0}@media (prefers-color-scheme:dark){button{background-color:#161f27;background-color:var(--background)}}@media (prefers-color-scheme:dark){button{color:#fff;color:var(--form-text)}}textarea{color:#000;color:var(--form-text);background-color:#efefef;background-color:var(--background);font-family:inherit;font-size:inherit;margin-right:6px;margin-bottom:6px;padding:10px;border:none;border-radius:6px;outline:0}@media (prefers-color-scheme:dark){textarea{background-color:#161f27;background-color:var(--background)}}@media (prefers-color-scheme:dark){textarea{color:#fff;color:var(--form-text)}}select{color:#000;color:var(--form-text);background-color:#efefef;background-color:var(--background);font-family:inherit;font-size:inherit;margin-right:6px;margin-bottom:6px;padding:10px;border:none;border-radius:6px;outline:0}@media (prefers-color-scheme:dark){select{background-color:#161f27;background-color:var(--background)}}@media (prefers-color-scheme:dark){select{color:#fff;color:var(--form-text)}}input[type=checkbox],input[type=radio]{height:1em;width:1em}input[type=radio]{border-radius:100%}input{vertical-align:top}label{vertical-align:middle;margin-bottom:4px;display:inline-block}button,input:not([type=checkbox]):not([type=radio]),input[type=range],select,textarea{-webkit-appearance:none}textarea{display:block;margin-right:0;box-sizing:border-box;resize:vertical}textarea:not([cols]){width:100%}textarea:not([rows]){min-height:40px;height:140px}select{background:#efefef url(\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='62.5' width='116.9' fill='%23161f27'%3E %3Cpath d='M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C0,3.2 0,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6Z'/%3E %3C/svg%3E\") calc(100% - 12px) 50%/12px no-repeat;background:var(--background) var(--select-arrow) calc(100% - 12px) 50%/12px no-repeat;padding-right:35px}@media (prefers-color-scheme:dark){select{background:#161f27 url(\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='62.5' width='116.9' fill='%23efefef'%3E %3Cpath d='M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C0,3.2 0,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6Z'/%3E %3C/svg%3E\") calc(100% - 12px) 50%/12px no-repeat;background:var(--background) var(--select-arrow) calc(100% - 12px) 50%/12px no-repeat}}@media (prefers-color-scheme:dark){select{background:#161f27 url(\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='62.5' width='116.9' fill='%23efefef'%3E %3Cpath d='M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C0,3.2 0,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6Z'/%3E %3C/svg%3E\") calc(100% - 12px) 50%/12px no-repeat;background:var(--background) var(--select-arrow) calc(100% - 12px) 50%/12px no-repeat}}@media (prefers-color-scheme:dark){select{background:#161f27 url(\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='62.5' width='116.9' fill='%23efefef'%3E %3Cpath d='M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C0,3.2 0,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6Z'/%3E %3C/svg%3E\") calc(100% - 12px) 50%/12px no-repeat;background:var(--background) var(--select-arrow) calc(100% - 12px) 50%/12px no-repeat}}@media (prefers-color-scheme:dark){select{background:#161f27 url(\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='62.5' width='116.9' fill='%23efefef'%3E %3Cpath d='M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C0,3.2 0,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6Z'/%3E %3C/svg%3E\") calc(100% - 12px) 50%/12px no-repeat;background:var(--background) var(--select-arrow) calc(100% - 12px) 50%/12px no-repeat}}select::-ms-expand{display:none}select[multiple]{padding-right:10px;background-image:none;overflow-y:auto}button,input[type=button],input[type=submit]{padding-right:30px;padding-left:30px}button:hover{background:#ddd;background:var(--button-hover)}@media (prefers-color-scheme:dark){button:hover{background:#324759;background:var(--button-hover)}}input[type=submit]:hover{background:#ddd;background:var(--button-hover)}@media (prefers-color-scheme:dark){input[type=submit]:hover{background:#324759;background:var(--button-hover)}}input[type=button]:hover{background:#ddd;background:var(--button-hover)}@media (prefers-color-scheme:dark){input[type=button]:hover{background:#324759;background:var(--button-hover)}}input:focus{box-shadow:0 0 0 2px #0096bfab;box-shadow:0 0 0 2px var(--focus)}@media (prefers-color-scheme:dark){input:focus{box-shadow:0 0 0 2px #0096bfab;box-shadow:0 0 0 2px var(--focus)}}select:focus{box-shadow:0 0 0 2px #0096bfab;box-shadow:0 0 0 2px var(--focus)}@media (prefers-color-scheme:dark){select:focus{box-shadow:0 0 0 2px #0096bfab;box-shadow:0 0 0 2px var(--focus)}}button:focus{box-shadow:0 0 0 2px #0096bfab;box-shadow:0 0 0 2px var(--focus)}@media (prefers-color-scheme:dark){button:focus{box-shadow:0 0 0 2px #0096bfab;box-shadow:0 0 0 2px var(--focus)}}textarea:focus{box-shadow:0 0 0 2px #0096bfab;box-shadow:0 0 0 2px var(--focus)}@media (prefers-color-scheme:dark){textarea:focus{box-shadow:0 0 0 2px #0096bfab;box-shadow:0 0 0 2px var(--focus)}}button:active,input[type=button]:active,input[type=checkbox]:active,input[type=radio]:active,input[type=range]:active,input[type=submit]:active{transform:translateY(2px)}button:disabled,input:disabled,select:disabled,textarea:disabled{cursor:not-allowed;opacity:.5}::-moz-placeholder{color:#949494;color:var(--form-placeholder)}:-ms-input-placeholder{color:#949494;color:var(--form-placeholder)}::-ms-input-placeholder{color:#949494;color:var(--form-placeholder)}::placeholder{color:#949494;color:var(--form-placeholder)}@media (prefers-color-scheme:dark){::-moz-placeholder{color:#a9a9a9;color:var(--form-placeholder)}:-ms-input-placeholder{color:#a9a9a9;color:var(--form-placeholder)}::-ms-input-placeholder{color:#a9a9a9;color:var(--form-placeholder)}::placeholder{color:#a9a9a9;color:var(--form-placeholder)}}fieldset{border:1px #0096bfab solid;border:1px var(--focus) solid;border-radius:6px;margin:0;margin-bottom:12px;padding:10px}@media (prefers-color-scheme:dark){fieldset{border:1px #0096bfab solid;border:1px var(--focus) solid}}legend{font-size:.9em;font-weight:600}input[type=range]{margin:10px 0;padding:10px 0;background:0 0}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{width:100%;height:9.5px;-webkit-transition:.2s;transition:.2s;background:#efefef;background:var(--background);border-radius:3px}@media (prefers-color-scheme:dark){input[type=range]::-webkit-slider-runnable-track{background:#161f27;background:var(--background)}}input[type=range]::-webkit-slider-thumb{box-shadow:0 1px 1px #000,0 0 1px #0d0d0d;height:20px;width:20px;border-radius:50%;background:#dbdbdb;background:var(--border);-webkit-appearance:none;margin-top:-7px}@media (prefers-color-scheme:dark){input[type=range]::-webkit-slider-thumb{background:#526980;background:var(--border)}}input[type=range]:focus::-webkit-slider-runnable-track{background:#efefef;background:var(--background)}@media (prefers-color-scheme:dark){input[type=range]:focus::-webkit-slider-runnable-track{background:#161f27;background:var(--background)}}input[type=range]::-moz-range-track{width:100%;height:9.5px;-moz-transition:.2s;transition:.2s;background:#efefef;background:var(--background);border-radius:3px}@media (prefers-color-scheme:dark){input[type=range]::-moz-range-track{background:#161f27;background:var(--background)}}input[type=range]::-moz-range-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;height:20px;width:20px;border-radius:50%;background:#dbdbdb;background:var(--border)}@media (prefers-color-scheme:dark){input[type=range]::-moz-range-thumb{background:#526980;background:var(--border)}}input[type=range]::-ms-track{width:100%;height:9.5px;background:0 0;border-color:transparent;border-width:16px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#efefef;background:var(--background);border:.2px solid #010101;border-radius:3px;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d}@media (prefers-color-scheme:dark){input[type=range]::-ms-fill-lower{background:#161f27;background:var(--background)}}input[type=range]::-ms-fill-upper{background:#efefef;background:var(--background);border:.2px solid #010101;border-radius:3px;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d}@media (prefers-color-scheme:dark){input[type=range]::-ms-fill-upper{background:#161f27;background:var(--background)}}input[type=range]::-ms-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;border:1px solid #000;height:20px;width:20px;border-radius:50%;background:#dbdbdb;background:var(--border)}@media (prefers-color-scheme:dark){input[type=range]::-ms-thumb{background:#526980;background:var(--border)}}input[type=range]:focus::-ms-fill-lower{background:#efefef;background:var(--background)}@media (prefers-color-scheme:dark){input[type=range]:focus::-ms-fill-lower{background:#161f27;background:var(--background)}}input[type=range]:focus::-ms-fill-upper{background:#efefef;background:var(--background)}@media (prefers-color-scheme:dark){input[type=range]:focus::-ms-fill-upper{background:#161f27;background:var(--background)}}a{text-decoration:none;color:#0076d1;color:var(--links)}@media (prefers-color-scheme:dark){a{color:#41adff;color:var(--links)}}a:hover{text-decoration:underline}code{background:#efefef;background:var(--background);color:#000;color:var(--code);padding:2.5px 5px;border-radius:6px;font-size:1em}@media (prefers-color-scheme:dark){code{color:#ffbe85;color:var(--code)}}@media (prefers-color-scheme:dark){code{background:#161f27;background:var(--background)}}samp{background:#efefef;background:var(--background);color:#000;color:var(--code);padding:2.5px 5px;border-radius:6px;font-size:1em}@media (prefers-color-scheme:dark){samp{color:#ffbe85;color:var(--code)}}@media (prefers-color-scheme:dark){samp{background:#161f27;background:var(--background)}}time{background:#efefef;background:var(--background);color:#000;color:var(--code);padding:2.5px 5px;border-radius:6px;font-size:1em}@media (prefers-color-scheme:dark){time{color:#ffbe85;color:var(--code)}}@media (prefers-color-scheme:dark){time{background:#161f27;background:var(--background)}}pre>code{padding:10px;display:block;overflow-x:auto}var{color:#39a33c;color:var(--variable);font-style:normal;font-family:monospace}@media (prefers-color-scheme:dark){var{color:#d941e2;color:var(--variable)}}kbd{background:#efefef;background:var(--background);border:1px solid #dbdbdb;border:1px solid var(--border);border-radius:2px;color:#363636;color:var(--text-main);padding:2px 4px 2px 4px}@media (prefers-color-scheme:dark){kbd{color:#dbdbdb;color:var(--text-main)}}@media (prefers-color-scheme:dark){kbd{border:1px solid #526980;border:1px solid var(--border)}}@media (prefers-color-scheme:dark){kbd{background:#161f27;background:var(--background)}}img,video{max-width:100%;height:auto}hr{border:none;border-top:1px solid #dbdbdb;border-top:1px solid var(--border)}@media (prefers-color-scheme:dark){hr{border-top:1px solid #526980;border-top:1px solid var(--border)}}table{border-collapse:collapse;margin-bottom:10px;width:100%;table-layout:fixed}table caption{text-align:left}td,th{padding:6px;text-align:left;vertical-align:top;word-wrap:break-word}thead{border-bottom:1px solid #dbdbdb;border-bottom:1px solid var(--border)}@media (prefers-color-scheme:dark){thead{border-bottom:1px solid #526980;border-bottom:1px solid var(--border)}}tfoot{border-top:1px solid #dbdbdb;border-top:1px solid var(--border)}@media (prefers-color-scheme:dark){tfoot{border-top:1px solid #526980;border-top:1px solid var(--border)}}tbody tr:nth-child(even){background-color:#f7f7f7;background-color:var(--background-alt)}@media (prefers-color-scheme:dark){tbody tr:nth-child(even){background-color:#1a242f;background-color:var(--background-alt)}}::-webkit-scrollbar{height:10px;width:10px}::-webkit-scrollbar-track{background:#efefef;background:var(--background);border-radius:6px}@media (prefers-color-scheme:dark){::-webkit-scrollbar-track{background:#161f27;background:var(--background)}}::-webkit-scrollbar-thumb{background:#d5d5d5;background:var(--scrollbar-thumb);border-radius:6px}@media (prefers-color-scheme:dark){::-webkit-scrollbar-thumb{background:#324759;background:var(--scrollbar-thumb)}}@media (prefers-color-scheme:dark){::-webkit-scrollbar-thumb{background:#324759;background:var(--scrollbar-thumb)}}::-webkit-scrollbar-thumb:hover{background:#c4c4c4;background:var(--scrollbar-thumb-hover)}@media (prefers-color-scheme:dark){::-webkit-scrollbar-thumb:hover{background:#141414;background:var(--scrollbar-thumb-hover)}}::-moz-selection{background-color:#9e9e9e;background-color:var(--selection);color:#000;color:var(--text-bright)}::selection{background-color:#9e9e9e;background-color:var(--selection);color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){::-moz-selection{color:#fff;color:var(--text-bright)}::selection{color:#fff;color:var(--text-bright)}}@media (prefers-color-scheme:dark){::-moz-selection{background-color:#1c76c5;background-color:var(--selection)}::selection{background-color:#1c76c5;background-color:var(--selection)}}details{display:flex;flex-direction:column;align-items:flex-start;background-color:#f7f7f7;background-color:var(--background-alt);padding:10px 10px 0;margin:1em 0;border-radius:6px;overflow:hidden}@media (prefers-color-scheme:dark){details{background-color:#1a242f;background-color:var(--background-alt)}}details[open]{padding:10px}details>:last-child{margin-bottom:0}details[open] summary{margin-bottom:10px}summary{display:list-item;background-color:#efefef;background-color:var(--background);padding:10px;margin:-10px -10px 0;cursor:pointer;outline:0}@media (prefers-color-scheme:dark){summary{background-color:#161f27;background-color:var(--background)}}summary:focus,summary:hover{text-decoration:underline}details>:not(summary){margin-top:0}summary::-webkit-details-marker{color:#363636;color:var(--text-main)}@media (prefers-color-scheme:dark){summary::-webkit-details-marker{color:#dbdbdb;color:var(--text-main)}}footer{border-top:1px solid #dbdbdb;border-top:1px solid var(--border);padding-top:10px;color:#70777f;color:var(--text-muted)}@media (prefers-color-scheme:dark){footer{color:#a9b1ba;color:var(--text-muted)}}@media (prefers-color-scheme:dark){footer{border-top:1px solid #526980;border-top:1px solid var(--border)}}body>footer{margin-top:40px}@media print{body,button,code,details,input,pre,summary,textarea{background-color:#fff}button,input,textarea{border:1px solid #000}body,button,code,footer,h1,h2,h3,h4,h5,h6,input,pre,strong,summary,textarea{color:#000}summary::marker{color:#000}summary::-webkit-details-marker{color:#000}tbody tr:nth-child(even){background-color:#f2f2f2}a{color:#00f;text-decoration:underline}}","./package.json":"{\n  \"name\": \"bbssg\",\n  \"version\": \"1.0.0\",\n  \"description\": \"A barebones static site generator\",\n  \"main\": \"generate.ts\",\n  \"author\": \"Andrew Bridge <andrew@andrewhbridge.co.uk>\",\n  \"repository\": \"https://github.com/andrewbridge/bbssg\",\n  \"license\": \"MIT\",\n  \"scripts\": {\n    \"dev\": \"watchexec -i dist -c -- yarn build\",\n    \"build\": \"deno run --unstable --allow-read --allow-write generate.ts\",\n    \"serve\": \"npx http-server ./dist -p 8000 --cors -c-1\"\n  }\n}\n"}