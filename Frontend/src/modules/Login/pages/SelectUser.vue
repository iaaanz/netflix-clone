<template>
  <div class="main-content">
  <nav class="logo_nav">
    <a href="#"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Logo da Netflix"></a>
  </nav>

  <div class="text">
    <h1>Quem está assistindo?</h1>
  </div>

  <div class="select_users">
    <div class="user-one users-text userIt-hv">
      <div class="user-one users-img">
        <img src="https://occ-0-1356-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFODe-79HMte1GvxsxPzvEhS4oamceVNh3isrrNF3kcraRbsL9uOcrH0MyKtlmWkLJyKJIxId66coocNnpINTOKpTcQ.png?r=f08" alt="logo de usuários">
        <p>Usuário 1</p>
      </div>
    </div>

    <div class="user-two users-text userIt-hv">
      <div class="userTwo-img users-img">
        <img src="https://occ-0-1356-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFH0VbIGycnpOMaFT5ER1erOVKsxpCLYnZF0-sxIK15G0mY7z7RnNlEEiRFGOOBCJcyB2CEibnXtHsXwNqmcCGg-XlQ.png?r=9fe" alt="logo de usuários">
      </div>
      <p>Usuário 2</p>
    </div>

    <div class="user-three users-text userIt-hv">
      <div class="userThree-img users-img">
        <img src="https://occ-0-1356-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFM5PrJX0TiFgfm4HOoS76PWmofnZtjwSQQj-dPSEdzfCr8p8wNhjBwMybzmLIAGotByD810aYhO6nG8N8FMUoXG-sg.png?r=ab" alt="logo de usuários">
      </div>
      <p>Usuário 3</p>
    </div>

    <div class="user-kids users-text userIt-hv">
      <div class="userKids-img users-img">
        <img src="https://occ-0-1356-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcLIHTkNuA8jSxuJlbbZppCm90vEXAZ7nMv9P3Uqv0E-ufs9-AbpdXjBF3dF_imIb966YrjBqk-iJc25JoWLtqtqR5B3.png?r=1b8" alt="logo de usuários">
      </div>
      <p>Infantil</p>
    </div>

    <div class="add-profile">
      <div class="img-addProfile">
        <img src="https://cloneselectuser.netlify.app/assets/img/add-user.png" alt="adicionar perfil">
      </div>
      <p>Adicionar perfil</p>
    </div>
  </div>

  <div class="content-manageProfile">
    <a href="#" class="manageProfile">Gerenciar perfis</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'SelectUser',
};
</script>

<style>
* {
    padding: 0%;
    margin: 0%;
}

.main-content {
    height: 100vh;
    background-color: rgb(20, 20, 20);
}

.logo_nav {
    height: 65px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 10%, rgba(15, 15, 15, 0.1));
    background-repeat: no-repeat;
}

.logo_nav img {
    width: 92px;
    margin: 22px 0px 0px 54px;
    z-index: 1;
}

.text h1 {
    display: flex;
    justify-content: center;
    margin-top: 89px;
    font-family: sans-serif;
    color: white;
    font-size: 45px;
}

.select_users {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

.users-img img {
    width: 135px;
    border-radius: 5px;
}

.users-text p {
    font-size: 18px;
    text-align: center;
    color: white;
    font-family: sans-serif;
    margin-top: 10px;
    color: gray;
}

.user-one {
    margin: 0px 15px;
}

.user-two {
    margin: 0px 15px;
}

.user-three {
    margin: 0px 15px;
}

.user-kids {
    margin: 0px 15px;
}

.add-profile {
    width: 135px;
    margin: 0px 15px 30px 15px;
}

.img-addProfile {
    width: 135px;
    height: 135px;
}

.img-addProfile img {
    width: 75px;
    margin-top: 30px;
    margin-left: 30px;
}

.add-profile p {
    font-size: 18px;
    text-align: center;
    color: white;
    font-family: sans-serif;
    margin-top: 14px;
    color: gray;
}

.content-manageProfile {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.manageProfile {
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    width: 240px;
    height: 36px;
    border: 1px solid gray;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.userIt-hv:hover > div > img {
    width: 129px;
    border: 3px solid white;
}

.userIt-hv:hover p {
    color: lightgray;
}

.add-profile:hover > .img-addProfile {
    background-color: lightgray;
}

.add-profile:hover p {
    color: lightgray;
}

.manageProfile:hover {
    color: white;
    border: 1px solid white;
}
</style>
