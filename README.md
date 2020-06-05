# country-api

Türkiyede bulunan il ve ilçelere göre istek atarak bilgilerin alınabileceği ufak bir express çalışması.

Daha sonrasında belki başka ülkelerde eklenebilir düşüncesi ile özellikle /tr
olarak belirttim rotayı.

[Online Demo](https://country-api-tr.herokuapp.com/)

### Kullanımı

`git clone https://github.com/halilcakar/country-api.git`

`npm install`

`npm run dev`

VSCode Rest-Client eklentisini kullanıyorsanız `src/tr/request.http` de oluşturduğum bir kaç requesti görebilirsiniz.

Yada 

`http://localhost:3000/tr` ye tıkladıktan sonra açılan pencerede query parametresi olarak: bolge, il ve plaka şeklinde sorgulama yapabilirsiniz.
