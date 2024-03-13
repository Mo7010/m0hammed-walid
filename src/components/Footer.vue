<script>

</script>

<template>
    <hr>
    <div class="footer">
        <img class="logo" src="https://media.discordapp.net/attachments/1197492540660797482/1199430425169371146/2AgXxu-LogoMakr.png?ex=65f9e2a1&is=65e76da1&hm=0c0dacf1aa03d733dd4a083e4de75b48938ff093803925cfeda6792fdcebc3a2&=&format=webp&quality=lossless" alt="mohammed walid">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">My Projects</a></li>
            <li><a href="#experiance">Experiance</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>
    </div>
</template>

<style scoped>
hr{
    margin-top:300px;
}

.footer{
    font-family: 'Rubik';
    width:100%;
    margin:50px 0;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10%;
}

.footer img{
    width:50px;
}

.footer ul{
    list-style:none;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:40px;
}

.footer li a{
    text-decoration:none;
    color:black;
}

@media (max-width:650px) {
    .footer{
        flex-direction:column;
        gap:80px;
    }

    .footer ul{
        flex-direction:column;
    }
}
</style>