export default class Animations{
    static animations = new Animations();

    FadeInScreen = (scren_name)=>{
        let screen = document.getElementById(scren_name);
        if (!scren_name || !screen)
        return

        screen.style.opacity = "5";
        screen.style.transform = "translateY(1px)";
    }
}