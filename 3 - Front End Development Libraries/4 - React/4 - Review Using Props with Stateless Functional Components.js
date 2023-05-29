{/* Il componente genitore CampSite renderizza il componente figlio Camper. */}
class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper name = "Marco" /> {/* Qui accanto si può modificare il "name" che, se eliminato, returna il name di default definito dalla "defaultProps". Si nota che se provo a scrivere un tipo diverso da string, da errore. */}
        </div>
      );
    }
  };
  
  {/* Il componente figlio Camper renderizza "this.props.name", definito dal propTypes, il quale richiede che il value alla key "name" sia una stringa e sia richiesto per forza. */}
  class Camper extends React.Component {
    render() {
      return (
        <div>
          <p>
          Il nome di default è:
          </p>
          <p>
            {this.props.name}
          </p>
        </div>
      );
    }
  }
  
  Camper.defaultProps = {
    name: "CamperBot"
  }
  
  Camper.propTypes = {
    name: PropTypes.string.isRequired
  }