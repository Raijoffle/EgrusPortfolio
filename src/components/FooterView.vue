<template>
    <footer>
        <div class="logo">
            <img src="@/assets/images/logobeyaz.webp" alt="Egrus Logo White Single" />
        </div>
        <div class="Copyright">
            <span>©2023 Egrus Design</span>
            <span>Copyright EgrusDesign. All Rights Reserved.</span>
        </div>
        <div class="links">
            <a href="https://www.instagram.com/berkbati.x/" class="bi bi-instagram"></a>
            <a href="https://discord.com/users/297762444434997249" class="bi bi-discord"></a>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    width: 100%;
    height: 150px;
    background-color: #003554;
    margin-top: 120px;
    padding: 40px 0px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;

    & .logo {
        margin-bottom: 10px;
    }

    & .Copyright {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        margin-bottom: 10px;
    }

    & .links {
        font-size: 19px;

        & a {
            margin-right: 10px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            color: #fff;

            &:last-of-type {
                margin-right: 0;
            }

            &:hover {
                font-size: 17px;
            }
        }
    }
}
</style>
