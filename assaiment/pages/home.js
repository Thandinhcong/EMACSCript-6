import header from "../components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import MainProfile from "../components/main/main-info";
import introduceInfo from "../components/main/introduce";
import ContactFage from "./contacts";
const HomeFage = () => {
    return `
   <div class="container container-fluid bg-dark">
   <header>
   ${header()}
   </header>
   <main>
   ${MainProfile()}
   ${introduceInfo()}
   ${ContactFage()}
   </main>
   </div>

    `;
}
export default HomeFage;