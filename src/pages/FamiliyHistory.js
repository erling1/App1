import React from 'react';
import '../CSS/FamilyHistory.css';
import PersonCard from './historyCard';

const FamilyHistory = () => {
    return (
        <div className="tree-container">
            
           <div className="tree-reversed">
            <ul>
              <li>
                <ul>
                  <li>
                    <PersonCard personId="Else Karin Fylling" />
                    <ul>
                      <li>
                        <PersonCard personId="Erna Laila Fylling" />
                        <ul>
                          <li>
                            <PersonCard personId="Ellen Petrine Sollid" />
                            <ul>
                              <li>
                                <PersonCard personId="Joakim Olsen Reite" />
                                <ul>
                                  <li><PersonCard personId="Karen Johanne Gurine" /></li>
                                  <li><PersonCard personId="Ole Peter Eriksen" /></li>
                                </ul>
                              </li>
                              <li>
                                <PersonCard personId="Anne Juliane" />
                                <ul>
                                  <li><PersonCard personId="Berte Lovise" /></li>  
                                  <li><PersonCard personId="Elling Andreas Karlsen Hjelle Viset" /></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <PersonCard personId="Anton Mariusen Sollid" />
                            <ul>
                              <li>
                                <PersonCard personId="Ludvig Severin Olaus Sollid" />
                                <ul>
                                  <li><PersonCard personId="Ole Martinus Olsen" /></li>
                                  <li><PersonCard personId="Anne Marie Oldsdatter Hallvardseter" /></li>
                                </ul>
                              </li>
                              <li>
                                <PersonCard personId="Lovise Birgitte Nikoline" />
                                <ul>
                                  <li><PersonCard personId="Ingeborg Marie" /></li>
                                  <li><PersonCard personId="Peder Andreas" /></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <PersonCard personId="Paul Johan" />
                        <ul>
                          <li>
                            <PersonCard personId="Tormod" />
                            <ul>
                              <li>
                                <PersonCard personId="Paul Pedersen Vestre" />
                                <ul>
                                  <li><PersonCard personId="Farfar til Tormod" /></li>
                                  <li><PersonCard personId="Farmor til Tormod" /></li>
                                </ul>
                              </li>
                              <li>
                                <PersonCard personId="Karoline Tomasine" />
                                <ul>
                                  <li><PersonCard personId="Peder" /></li>
                                  <li><PersonCard personId="Kari" /></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <PersonCard personId="Edvine Jensine Karoline Sofie" />
                            <ul>
                              <li>
                                <PersonCard personId="Johan Carolius" />
                                <ul>
                                  <li><PersonCard personId="Farfar til Edvine" /></li>
                                  <li><PersonCard personId="Farmor til Edvine" /></li>
                                </ul>
                              </li>
                              <li>
                                <PersonCard personId="Rebekka Antonette Josefine Britan" />
                                <ul>
                                  <li><PersonCard personId="Morfar til Edvine" /></li>
                                  <li><PersonCard personId="Mormor til Edvine" /></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>   
          </div>
                
          <div className="tree-erling">
            <ul>
                <li>
                  <PersonCard personId="Erling Nupen" />
                </li>
            </ul>
          </div>
    
          <div className="tree">
            <ul>
              <li>
                <ul>
                  <li>
                    <ul>
                      <li>
                        <PersonCard personId="Edvin Dag Nupen" />
                      </li>
                    </ul>
                    <ul>
                        <li>
                        <div className="siblings-container bg-gray-50 rounded-lg p-4 mt-4 border border-gray-200">
                            <ul className="grid grid-cols-10 gap-10">
                                <li className="!p-0"><PersonCard personId="Johan Viken" /></li>
                                <li className="parent-tag"><PersonCard personId="Ingrid Lovise Viken" /></li>
                                <li className="!p-0"><PersonCard personId="Reidar Viken" /></li>
                            </ul>
                        </div>

                            <ul>
                                <li>
                                  <PersonCard personId="Edvard Olsen Viken" />
                                    <ul>
                                        <li>
                                          <PersonCard personId="empty" />
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                  <PersonCard personId="Ragna Olsen Viken" />
                                    <ul>
                                        <li>
                                          <PersonCard personId="mor til mor til ingrid" />
                                        </li>
                                        <li>
                                          <PersonCard personId="far til mor til ingrid" />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                        <div className="siblings-container bg-gray-50 rounded-lg p-4 mt-4 border border-gray-200">
                            <ul className="grid grid-cols-10 gap-10">
                                <li className="!p-0"><PersonCard personId="Sigfried Nupen" /></li>
                                <li className="!p-0"><PersonCard personId="Odd Nupen" /></li>
                                <li className="!p-0"><PersonCard personId="Jenny Nupen" /></li>
                                <li className="parent-tag"><PersonCard personId="Jon D Nupen" /></li>
                                <li className="!p-0"><PersonCard personId="Edbjørg Nupen" /></li>
                                <li className="!p-0"><PersonCard personId="John" /></li>
                                <li className="!p-0"><PersonCard personId="Borgny Nupen" /></li>
                                <li className="!p-0"><PersonCard personId="Dagny" /></li>
                            </ul>
                        </div>
                            
                        <ul>
                            <li>
                              <PersonCard personId="Daniel O Nupen" />
                                <ul>
                                    <li>
                                      <PersonCard personId="Test 1" />
                                    </li>
                                    <li>
                                      <PersonCard personId="Test 3" />
                                    </li>
                                </ul>
                            </li>
                            <li>
                              <PersonCard personId="Karen Slettedal" />
                                <ul>
                                    <li>
                                      <PersonCard personId="Test 1" />
                                    </li>
                                    <li>
                                      <PersonCard personId="Test 3" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>



            <div className="tree-pets">
                <ul>
                    <li>
                        <ul>
                            <li>
                                <PersonCard personId="Family Pets" />
                                <ul>
                                    <li>
                                        <PersonCard personId="Cilja" />
                                        <ul>
                                            <li>
                                                <PersonCard personId="William" />
                                            </li>
                                            <li>
                                                <PersonCard personId="Truls" />
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <PersonCard personId="Billie" />
                                        <ul>
                                            <li>
                                                <PersonCard personId="Chanel" />
                                            </li>
                                            <li>
                                                <PersonCard personId="Wilma" />
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>


          </div>
        </div>
      );
};

export default FamilyHistory;
