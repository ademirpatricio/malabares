import Container from "../layout/Container";

import logo from "../../assets/images/logo-malabares.svg";

function Navbar(){
  return(

    <header className="py-8">

      <Container>

        <div className="
          flex items-center justify-between
        ">

          <div>
            <img src={logo} alt="Logo" className="w-70 h-auto" />
          </div>

          <nav>
            MENU
          </nav>

          <div>
            ICONS
          </div>

        </div>

      </Container>

    </header>

  )
}
export default Navbar;
