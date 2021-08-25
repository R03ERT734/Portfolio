import "../Styles/AboutMe.css";
import Contact from "./Contact";
import Header from "./Header";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <>
        <Header />
      <div className="container">
        <img
          src="https://www.seekpng.com/png/detail/73-733923_man2-african-american-man-png.png"
          alt="Myself"
        ></img>
        <div className="personal-info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
            blandit arcu, ac vulputate turpis. Proin malesuada viverra nisl,
            vitae vulputate arcu fermentum in. Nulla arcu eros, pretium vitae
            urna vitae, tempus tincidunt lacus. Sed volutpat, ex nec vestibulum
            lacinia, arcu sem bibendum orci, eu venenatis diam enim in est.
            Morbi id elit in felis gravida mollis. Vestibulum magna lectus,
            blandit eu ultricies eget, efficitur sed lacus. Fusce quis sapien
            congue, semper metus et, tempus tellus. Cras euismod quis risus
            suscipit aliquam. Sed diam nunc, sodales ac tincidunt quis, auctor a
            orci. Integer sed dapibus dui, id lobortis mi. Nullam quis auctor
            purus. In sodales viverra nibh, eget rutrum est condimentum nec. Ut
            id placerat nibh, ac lacinia libero. Etiam congue lacus et congue
            ultricies. Donec varius eget turpis vel placerat. Cras viverra neque
            et felis mattis, ac egestas tellus convallis. Nulla facilisi.
            Vestibulum eget ultrices quam. Donec placerat eget nulla in sodales.
            Integer consequat malesuada nisi, ut posuere ipsum condimentum non.
            Nullam pulvinar mattis facilisis. Vivamus tincidunt velit sed tortor
            ullamcorper fringilla. Mauris sodales turpis at neque pretium
            tristique. Nulla pharetra viverra porttitor. Quisque ultricies nibh
            ligula, vitae scelerisque ligula accumsan in. Duis eleifend, nibh in
            sagittis eleifend, sem ex varius velit, sit amet pharetra arcu orci
            at metus. Duis ut tellus libero. Sed pulvinar vel lorem ut dapibus.
            Vivamus eget nunc a ante efficitur tempus ac sed mi. Duis a
            convallis tellus. Sed porttitor, orci eu pulvinar dapibus, ligula
            ligula blandit est, ac vulputate magna leo sed augue. Maecenas et
            leo non sapien condimentum viverra vitae non mi. Nulla pellentesque
            tortor ut leo ullamcorper, eget lacinia est efficitur. Proin
            iaculis, eros vel tempus finibus, nisi nulla suscipit arcu, in
            lacinia nisl nisi et nunc. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aenean luctus mauris a mi faucibus, ut lobortis
            ligula pharetra. Nunc orci quam, dapibus cursus velit sit amet,
            lobortis accumsan lectus. Nullam ut dui sed nulla placerat euismod.
            Nulla nunc lectus, porttitor vitae vestibulum in, venenatis vitae
            erat. Nullam eu ex rutrum, vestibulum massa sit amet, interdum
            libero. Aliquam vitae turpis et nulla suscipit posuere vel non arcu.
            Donec et suscipit felis, a cursus mi. Ut vel orci sed lorem ultrices
            tempus. Nullam tincidunt lobortis diam molestie vulputate.
            Suspendisse dignissim, ipsum sit amet ullamcorper cursus, odio neque
            venenatis nibh, sit amet dignissim diam orci id turpis. Nulla
            hendrerit congue mi, sed maximus tortor convallis et. Ut sit amet
            sodales sem. Phasellus sollicitudin elit at quam efficitur posuere.
            Donec arcu enim, semper non nisi quis, volutpat varius nisi. In
            hendrerit eu augue ac blandit. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Proin
            interdum ipsum et viverra imperdiet. Cras feugiat metus nisl, eu
            tincidunt nibh finibus id. Donec rhoncus gravida vestibulum. Nulla
            facilisi. Suspendisse hendrerit ultricies lectus, at fringilla lacus
            tincidunt id. Suspendisse interdum blandit ante a interdum. Donec
            rutrum urna sed nibh aliquam, sit amet sodales lacus semper.
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Description;
