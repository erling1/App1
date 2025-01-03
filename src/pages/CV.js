import React from 'react';
import '../CSS/CV.css';

function CV() {
  return (
    <div className="cv-container">
      <header className="cv-header">
  <h1>Erling Nupen</h1>
  <div className="card">
    {/* Instagram */}
    <a href="#" className="socialContainer containerOne">
      <svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
        <path
          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
        ></path>
      </svg>
    </a>

    {/* Phone (Replacing Twitter) */}
    <a href="tel:+1234567890" className="socialContainer containerTwo">
      <svg className="socialSvg phoneSvg" viewBox="0 0 16 16">
      <path
        d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
      ></path>
      </svg>
    </a>

    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/erlingnupen" className="socialContainer containerThree">
      <svg className="socialSvg linkedinSvg" viewBox="0 0 448 512">
        <path
          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
        ></path>
      </svg>
    </a>

    {/* Email */}
    <a href="mailto:erlingnupen@example.com" className="socialContainer containerFour">
      <svg className="socialSvg emailSvg" viewBox="0 0 16 16">
      <path
        d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"
      ></path>
      <path
        d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"
      ></path>
      </svg>
    </a>
  </div>
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
