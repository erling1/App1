// PoliticsSearch.jsx
import React, { useState, useEffect } from 'react';
import '../CSS/Politics.css';

const PoliticsSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [saksIDResults, setSaksIDResults] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setIsOpen(e.target.value.length > 0);
  };

  const handleResultClick = async (id) => {
    setIsOpen(false);
    setQuery('');
    setHasSearched(true);
    setIsLoading(true);
    
    try {
      const response = await fetch(
        `https://stortingetfunctions.azurewebsites.net/api/stemmeresultat?id=${encodeURIComponent(id)}`,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      const data = await response.json();
      setSaksIDResults(data);
    } catch (error) {
      console.error('Search error:', error);
      setSaksIDResults(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      try {
        const response = await fetch(
          `https://stortingetfunctions.azurewebsites.net/api/search?q=${encodeURIComponent(query)}`,
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      }
    };

    const debounceTimeout = setTimeout(fetchResults, 300);
    return () => clearTimeout(debounceTimeout);
  }, [query]);

  return (
    <div className="politics-search-container">
      <div className='app-description'>
        Search through cases processed the last 5 years by the Norwegian Parliament
      </div>

      <div className="politics-search-input-wrapper">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search political cases..."
          className="politics-search-input"
        />
        <span className="politics-search-icon">🔍</span>
      </div>
      
      {isOpen && (
        <div className="politics-dropdown">
          {results.length === 0 ? (
            <div className="politics-no-results">No results found</div>
          ) : (
            results.map((result, index) => (
              <div 
                key={index} 
                className="politics-dropdown-item"
                onClick={() => handleResultClick(result.id)}
                style={{ cursor: 'pointer' }}
              >
                <div>Title: {result.tittel}</div>
                <div>Short title: {result.korttittel}</div>
                <div>ID: {result.id}</div>
                <div>Status: {result.status}</div>
                <div>Type: {result.type}</div>
              </div>
            ))
          )}
        </div>
      )}

      {hasSearched && (
        <div className="results-container">
          {isLoading ? (
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          ) : saksIDResults?.result === "Enstemmig vedtatt" ? (
            <div className="unanimous-decision-card">
              <div className="unanimous-header">
                <span className="unanimous-title">Voting Result</span>
              </div>
              <div className="unanimous-content">
                {saksIDResults.info && (
                  <div className="voting-info-card">
                    <div className="voting-info-header">
                      <span className="voting-info-title">Information</span>
                    </div>
                    <div className="voting-info-content">
                      {Object.entries(saksIDResults.info).map(([infoKey, infoValue], infoIndex) => (
                        <div key={infoIndex} className="mb-4">
                          <h3 className="font-bold mb-2">{infoKey}</h3>
                          {Array.isArray(infoValue) ? (
                            infoValue.map((item, itemIndex) => (
                              <p key={itemIndex} className="voting-info-text mb-2">{item}</p>
                            ))
                          ) : (
                            <p className="voting-info-text">{infoValue}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="unanimous-badge">
                  Enstemmig vedtatt
                </div>
              </div>
            </div>
          ) : (
            Object.keys(saksIDResults || {}).map((proposalKey, index) => (
              <div key={index} className="proposal-section mb-8 border-b pb-8">
                <h2 className="text-xl font-bold mb-4"> Item {index + 1}: {proposalKey}</h2>
                {saksIDResults[proposalKey]?.representatives?.length > 0 ? (
                  <>
                    {saksIDResults[proposalKey].information && (
                      <div className="voting-info-card">
                        <div className="voting-info-header">
                          <span className="voting-info-title">Information</span>
                        </div>
                        <div className="voting-info-content">
                          {Object.entries(saksIDResults[proposalKey].information).map(([infoKey, infoValue], infoIndex) => (
                            <div key={infoIndex} className="mb-4">
                              <h3 className="font-bold mb-2">{infoKey}</h3>
                              {Array.isArray(infoValue) ? (
                                infoValue.map((item, itemIndex) => (
                                  <p key={itemIndex} className="voting-info-text mb-2">{item}</p>
                                ))
                              ) : (
                                <p className="voting-info-text">{infoValue}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {saksIDResults[proposalKey].proposedBy && (
                      <div className="voting-proposal-card">
                        <div className="voting-proposal-header">
                          <span className="voting-proposal-title">Proposed by</span>
                        </div>
                        <div className="voting-proposal-content">
                          <p className="voting-proposal-text">
                            {saksIDResults[proposalKey].proposedBy}
                          </p>
                        </div>
                      </div>
                    )}

                    {saksIDResults[proposalKey].voting_counts && (
                      <div className="voting-results-card">
                        <div className="voting-results-header">
                          <span className="voting-results-title">Voting Results</span>
                        </div>
                        <div className="voting-results-content">
                          <div className="voting-results-grid">
                            <div className="voting-result-item">
                              <span className="result-label">For:</span>
                              <span className="result-number">
                                {saksIDResults[proposalKey].voting_counts.for}
                              </span>
                            </div>
                            <div className="voting-result-item">
                              <span className="result-label">Against:</span>
                              <span className="result-number">
                                {saksIDResults[proposalKey].voting_counts.mot}
                              </span>
                            </div>
                            <div className="voting-result-item">
                              <span className="result-label">Absent:</span>
                              <span className="result-number">
                                {saksIDResults[proposalKey].voting_counts.ikke_tilstede}
                              </span>
                            </div>
                          </div>
                          <div className="voting-outcome">
                            <span className={`outcome-badge ${
                              saksIDResults[proposalKey].voting_counts.for >
                              saksIDResults[proposalKey].voting_counts.mot ? 'passed' : 'failed'
                            }`}>
                              {saksIDResults[proposalKey].voting_counts.for >
                               saksIDResults[proposalKey].voting_counts.mot ? 'Passed' : 'Failed'}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    <table className="voting-results-table">
                      <thead>
                        <tr className="table-header">
                          <th>Name</th>
                          <th>Party</th>
                          <th>Vote</th>
                        </tr>
                      </thead>
                      <tbody>
                        {saksIDResults[proposalKey].representatives.map((rep, repIndex) => (
                          <tr key={repIndex}>
                            <td>{rep.name}</td>
                            <td>{rep.party}</td>
                            <td className={`vote ${rep.vote.toLowerCase()}`}>
                              {rep.vote}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                ) : (
                  <div className="no-results-message">No results found</div>
                )}
              </div>
            ))
          )}
        </div>
      )}

      <div className="case-explanations">
        <div className="explanation-section">
        <h2>Case Status Types:</h2>
            <ul>
                <li><strong>Behandlet:</strong> Case has been processed and includes voting data - may show either unanimous decision or detailed voting distribution</li>
                <li><strong>Bortfalt/valg:</strong> Case has lapsed or been discontinued, often due to an election or end of parliamentary session</li>
                <li><strong>Debattert, avventer votering:</strong> Case has been debated but is awaiting final voting</li>
                <li><strong>Mottatt:</strong> Case has been received and registered in the system but processing has not yet begun</li>
                <li><strong>Til behandling:</strong> Case is currently under review - no voting data available yet</li>
                <li><strong>Trukket:</strong> Case has been withdrawn by the proposing party or individual</li>
                <li><strong>Varslet:</strong> Case has been announced or notified but not yet formally submitted</li>
                <li><strong>Ventet fra regjeringen:</strong> Case is awaiting response or action from the government</li>
            </ul>
        </div>

          <div className="explanation-section">
            <h2>Case Types:</h2>
            <ul>
              <li><strong>Budsjett:</strong> Budget-related case</li>
              <li><strong>Alminnelig sak:</strong> Regular parliamentary case</li>
              <li><strong>Lovsak:</strong> Legislative case</li>
            </ul>
          </div>

          <div className="explanation-section">
            <h2>Popular Search Terms:</h2>
            <div className="popular-terms">
              <span className="search-term">klima</span>
              <span className="search-term">oljefond</span>
              <span className="search-term">pensjon</span>
              <span className="search-term">skatt</span>
              <span className="search-term">barnehage</span>
              <span className="search-term">nav</span>
              <span className="search-term">statsbudsjett</span>
              <span className="search-term">helse</span>
            </div>
          </div>
        </div>
        
      
    </div>
  );
};

export default PoliticsSearch;