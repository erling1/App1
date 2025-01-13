import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/CV.css';
import html2pdf from 'html2pdf.js';

function CV() {

  const navigate = useNavigate();
      const handleClick =() =>{
  
          navigate("/pages/CVEnglish")}


      const handleDownload = () => {
              const cvElement = document.getElementById('cv-content');
              const opt = {
                  margin: 1,
                  filename: 'Erling_Nupen_CV_English.pdf',
                  image: { type: 'jpeg', quality: 0.98 },
                  html2canvas: { scale: 2 },
                  jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
              };
                  
                  html2pdf().set(opt).from(cvElement).save();
                };
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>Erling Nupen</h1>

        
        <button class="Btn-cv" onClick={handleDownload}>
          <svg class="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
          <span class="icon2"></span>
          <span class="tooltip">Download</span>
        </button>

        <button class="button-english-v" onClick={handleClick}>English CV</button>
        
  
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
          <li><strong>Azure:</strong> Begynner; utforsker diverseifiseringer i Azure, hvor AZ-204 er målet i løpet av høsten 2024</li>
          <li><strong>APIs:</strong> God; har brukt APIs til å hente data fra ulike nettsider, for å lage ulike regresjonsmodeller og tidsserieanalyser</li>
          <li><strong>HTML, CSS, JavaScript, React:</strong> God; disse språkene blir hovedfokuset for høsten 2024</li>
          <li><strong>SQL:</strong> Begynner</li>
        </ul>
      </section>
    </div>
  );
}

export default CV;
