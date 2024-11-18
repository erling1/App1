import React from 'react';
import '../CSS/CV.css';  // This will contain your CSS for styling the CV

function CV() {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>Erling Nupen</h1>
        <p className="contact-info">
        <a href="http://www.linkedin.com/in/erlingnupen" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://www.github.com/erling1" target="_blank" rel="noopener noreferrer"> Github</a>| Oslo, NO | Tlf: 41 26 96 03
          <br />
          E-post: <a href="mailto:nupen.erling@gmail.com">nupen.erling@gmail.com</a>
        </p>
      </header>
      
      <section className="cv-section">
        <h2>Kvalifikasjoner</h2>
        <p>
          Nyutdannet med mastergrad i Partikkel Fysikk fra UiO. Ser etter en junior stilling eller graduate stilling i
          et selskap med et dynamisk arbeidsmiljø og mulighet til å utvikle meg faglig. Jeg har svært gode
          kunnskaper innen maskinlæring, dataanalyse, bildeanalyse, matematikk og fysikk, og ulike kodespråk.
          Foreløpig utforsker jeg ulike sertifiseringer i Azure.
        </p>
      </section>

      <section className="cv-section">
        <h2>Utdanning</h2>
        <ul>
          <li>
            <strong>2023-nå | Videreutdanning i informatikk | Universitetet i Oslo</strong>
            <ul>
              <li>Fokuset nå er å videreutvikle ekspertisen min i Python og C++, med særlig vekt på å skrive effektiv kode for maskinlæringsmodeller</li>
              <li>Skrev kode for flere prosjekter, deriblant dyp lærings nettverk for gjenkjenning av tall og dataanalyse, både fra bunnen av og ved hjelp av rammeverk som PyTorch, Scikit, og TensorFlow</li>
              <li>HTML, CSS, JavaScript, APIs, React</li>
            </ul>
          </li>
          <li>
            <strong>2021-2023 | M.Sc. i Partikkel Fysikk | Universitetet i Oslo</strong>
            <ul>
              <li>Masteroppgave: “Exploring The Impact Of Dimension-8 Operators In A Higgs Effective Field Theory Framework”</li>
              <li>Fokuset var teoretisk fysikk og høyere matematikk</li>
              <li>Andre sentrale aspekter inkluderer dataanalyse og visualisering av data fra partikkelakseleratoren ved CERN</li>
              <li>Flere prosjekter i C++</li>
            </ul>
          </li>
          <li>
            <strong>2017-2021 | B.Sc. i Materialvitenskap for Energi og Nanoteknologi | Universitetet i Oslo</strong>
            <ul>
              <li>Fikk god forståelse for materialvitenskap, og en god introduksjon til statistikk, programmering, matematikk og fysikk</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Arbeidserfaring</h2>
        <ul>
          <li>
            <strong>2022 - nå | Butikkmedarbeider | Coop Øst, Oslo</strong>
            <ul>
              <li>Kundebestillinger & hjemmeleveringer</li>
              <li>Kontrollere varebeholdningen</li>
              <li>Håndtering av kundeklager & Kunde oppfølging</li>
            </ul>
          </li>
          <li>
            <strong>2017-2022 | Butikkmedarbeider | Norgesgruppen AS, Oslo</strong>
            <ul>
              <li>Jeg hadde ansvaret for butikken i helgene på egen hånd, og jeg ble tillagt ansvaret for opplæringen av nye ansatte</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Språk- og IT-ferdigheter</h2>
        <ul>
          <li><strong>Norsk:</strong> Morsmål</li>
          <li><strong>Engelsk:</strong> Meget god muntlig og skriftlig</li>
          <li><strong>Python:</strong> Meget god; skrevet kode for flere prosjekter som omhandler maskinlæringsmodeller, dataanalyse, evolusjonsalgoritmer og dyp læringsmodeller</li>
          <li><strong>C++:</strong> God; skrevet kode for flere prosjekter som omhandler parallell prosessering, markovkjeder og ulike numeriske metoder og algoritmer</li>
          <li><strong>Git/Github:</strong> Meget god; Github er den foretrukne skyplattformen hvor de fleste av prosjektene mine har blitt lagret</li>
          <li><strong>Azure:</strong> Begynner; utforsker diverse sertifiseringer i Azure, hvor AZ-204 er målet i løpet av høsten 2024</li>
          <li><strong>APIs:</strong> God; har brukt APIs til å hente data fra ulike nettsider, for å lage ulike regresjonsmodeller og tidsserieanalyser</li>
          <li><strong>HTML, CSS, JavaScript, React:</strong> God; disse språkene blir hovedfokuset for høsten 2024</li>
          <li><strong>SQL:</strong> Begynner</li>
        </ul>
      </section>
    </div>
  );
}

export default CV;
