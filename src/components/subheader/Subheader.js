import '../../assets/sass/style.sass';
import '../subheaderMain/subheaderMain.sass';

const Subheader = ({subheaderBG, subheaderTitle}) => {
  return (
    <section className={subheaderBG}>
      <div className="container">
        <div className="subheader_content">
          <h1 className="title">{subheaderTitle}</h1>
        </div>
      </div>
    </section>
  )
}

export default Subheader;