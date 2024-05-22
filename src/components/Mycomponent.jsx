import React from 'react'
import { Link } from 'react-router-dom'

function Mycomponent() {
    return (
        <div className='conntainer '>
            <header className="App-header">
                <h1 className='font tracking-tight font-bold mt-5'>Sleeve 2</h1>
                <p style={{
                    fontSize: '3rem',
                    lineHeight: '1',
                    fontWeight: '700',
                    position: 'relative',
                    margin: '0'
                }}>The ultimate music accessory for your Mac.</p>
                <p style={{
                    marginTop: '20px',
                    color: 'hsla(0, 0%, 100%, 0.8)',
                    fontSize: '1.5rem',
                    lineHeight: '2 rem',
                    boxSizing: 'border-box',
                    letterSpacing: '-0.025em'
                }}>Sleeve sits on the desktop, displaying and controlling the music you're <br /> currently playing in
                    <span style={{
                        marginLeft: '.25rem',
                        boxSizing: 'border-box',
                    }}>
                        <span>
                            <img src="https://replay.software/sleeve/images/AppMusic.png" alt="Apple Music" style={{ width: '30px', height: '30px', margin: '5px' }} />Apple Music
                        </span>,
                        <span>
                            <img src="https://replay.software/sleeve/images/AppSpotify.png" alt="Spotify" style={{ width: '30px', height: '30px', margin: '5px' }} />Spotify
                        </span>, and
                        <span>
                            <img src="https://replay.software/sleeve/images/AppDoppler.png" alt="Doppler" style={{ width: '30px', height: '30px', margin: '5px' }} />Doppler.
                        </span>
                    </span>
                </p>

                <div>
                    <div className='mt-3'>
                        <button className="button" style={{ borderRadius: '10px', }}>
                            <i className="fa-brands fa-apple"></i> <b>Mac App Store</b>
                        </button>
                        <Link to="/payment" className="button" style={{ marginLeft: "10px", borderRadius: "10px", backgroundColor: '#fff', color: '#0f0f0f', textDecoration: 'none' }}>
                            <b>Buy Directly </b><b>$5.99</b>
                        </Link>
                    </div>

                </div>
                <p className='mt-5' style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>No subscriptions. No in-app purchases. Requires macOS 11 Big Sur or later.</p>

                <button className='mt-3' style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '10px',

                    border: '1px solid #f0f0f0',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    outline: 'none',
                    textAlign: 'left',

                }} onClick={() => { /* Add your click handler here */ }}>
                    <img src="https://replay.software/sleeve/images/ShelfCallout.png" alt="Shelf Callout" style={{ marginRight: '10px' }} />
                    <span style={{ flex: 1, textDecoration: 'none', color: '#fff', fontSize: '1rem' }}>
                        Now with shelves and a progress bar. See what's new in Sleeve 2.3</span>
                    <span style={{ marginLeft: '10px' }}>➡</span>
                </button>


                <div className='container mt-5'>
                    <h1 className='mt-5' style={{ fontSize: "60px", fontWeight: "1rem" }}>Themes. Unlimited themes.</h1>
                    <p style={{ fontSize: "1.5rem", lineHeight: "2rem", boxSizing: 'border-box', }}>Themes in Sleeve make creating and switching between customizations easy. Share your own creations <br /> with friends and install as many themes as you like with just a double-click.</p>

                    <div className="background-image mt-5">
                        <div className="image-card-container">
                            <div className="image-card-content">
                                <img src="https://i.pinimg.com/736x/c3/7a/f1/c37af139600de0ed5d5a89543830ea79.jpg" width="200px" height="200px" className="rounded-2xl" />
                                <br />
                                <b>Eternal Sunshine</b>
                                <h5> Forgotten Feels</h5>
                                <h6>Slow Magic</h6>
                            </div>

                            <div className="image-card-content">
                                <img src="https://i.ytimg.com/vi/zHro3kno7os/sddefault.jpg" width="200px" height="200px" className="rounded-2xl" />
                                <br />
                                <i className="fa-solid fa-backward-step"></i>
                                <i className="fa-solid fa-pause"></i>
                                <i className="fa-solid fa-forward-step"></i>
                                <h6>Are You Listening How To Be Human Chelsea Cutler</h6>
                            </div>

                            <div className="image-card-content">
                                <img src="https://i.ytimg.com/vi/LdlC3XLRiRE/maxresdefault.jpg" width="200px" height="200px" className="rounded-2xl" />
                                <h6><b>Creation Comes Alive</b></h6>
                                <h6>Petit Biscuit</h6>
                            </div>

                            <div className="image-card-content">
                                <img src="https://replay.software/sleeve/images/ArtSlowMagic.jpg" width="200px" height="200px" className="rounded-2xl" />
                                <h6><b>Bunny Is a Rider</b></h6>
                                <h6>Desire, I Want to Turn Into You Caroline Polachek</h6>
                            </div>


                        </div>
                    </div>



                    <div className="textcontent mt-5">
                        <div className="textcardcontainer">
                            <div className="textcard change-it-up gradient-from-blue rounded-2xl overflow-hidden relative">
                                <div>
                                    <h4><b>Change it up</b></h4>
                                    <h6> Switch between themes with just a click.</h6>
                                    <h6>Modify the built-in themes or create your own using Sleeve’s extensive preferences.</h6>
                                </div>
                                <div>
                                    <img src="https://replay.software/sleeve/images/ThemeUIDark.png" className="musicimg" />
                                    <img src="https://replay.software/sleeve/images/ThemeUIActiveDark.png" className="musicimg1" />
                                </div>
                            </div>
                        </div>
                        <div className="textcardcontainer">
                            <div className="textcard gradient-from-blue rounded-2xl overflow-hidden relative">
                                <div>
                                    <h4><b>Shareable</b></h4>
                                    <h6>Export your themes and share them with friends using the handy new Sleeve Theme file format.</h6>
                                    <h6>Install themes from anywhere with a double-click or a drag and drop.</h6>
                                </div>
                                <div>
                                    <img src="https://replay.software/sleeve/images/ThemeExportDark.png" className="shareable-image" width="200px" height="200px" />
                                </div>
                            </div>
                        </div>
                    </div>



                    <div>

                    </div>

                </div>
                <div >
                    <h1 style={{ fontSize: "80px", fontWeight: "1rem" }}><b>Countless ways to customize.</b></h1>
                    <h2>Customization is at the core of the Sleeve experience — choose from any combination of design choices, behaviors and settings to make Sleeve at home on your desktop.</h2>
                    <div className="customize-image-section">
                        <img src="https://replay.software/sleeve/images/IconArrayHotkeys.png" />
                        <img src="https://replay.software/sleeve/images/IconArrayWindow.png" />
                        <img src="https://replay.software/sleeve/images/IconArrayInterface.png" />
                        <img src="https://replay.software/sleeve/images/IconArrayLayout.png" />
                        <img src="https://replay.software/sleeve/images/IconArrayTheme.png" />
                        <img src="https://replay.software/sleeve/images/IconArrayTrack.png" />
                        <img src="https://replay.software/sleeve/images/IconArrayPosition.png" />
                        <img src="https://replay.software/sleeve/images/IconArrayArtwork.png" />
                        <img src="https://replay.software/sleeve/images/IconArraySettings.png" />
                    </div>

                </div>
                <div className="headingcontainer">
                    <div>
                        <img src="https://replay.software/sleeve/images/IconArrayArtworkDark.png"></img>
                        <h2><b>Artwork</b></h2>
                        <h4>Scale artwork all the way up or all the way down. Round the corners or leave them square.</h4><br />
                        <h4>Choose shadow and lighting effects to bring your album artwork to life.</h4><br />
                        <h4>Or hide it completely.</h4>
                    </div>
                    <div className="artworkimg">
                        <img src="https://replay.software/sleeve/images/Artwork1Dark.jpg" style={{ borderRadius: "30px" }}></img>
                        <img src="https://replay.software/sleeve/images/Artwork2Dark.jpg" style={{ borderRadius: "30px" }}></img>
                        <img src="https://replay.software/sleeve/images/Artwork3Dark.jpg" style={{ borderRadius: "30px" }}></img>
                    </div>
                </div>
                <div className="headingcontainer">
                    <div>
                        <img src="https://replay.software/sleeve/images/IconArrayTrack.png"></img>
                        <h2><b>Typography</b></h2>
                        <h4>Pick the track info you want to display, and then exactly how to display it.</h4><br />
                        <h4>Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.

                        </h4>

                    </div>
                    <div className="artworkimg">
                        <img src="https://replay.software/sleeve/images/Typography1Dark.jpg" style={{ borderRadius: "30px" }}></img>
                        <img src="https://replay.software/sleeve/images/Typography2Dark.jpg" style={{ borderRadius: "30px" }}></img>

                    </div>
                </div>
                <div className="headingcontainer">
                    <div>
                        <img src="https://replay.software/sleeve/images/IconInterface.png"></img>
                        <h2><b>Interface</b></h2>
                        <h4>Customize the layout, alignment and position to fit your setup.</h4><br />
                        <h4>Show and hide playback controls. Add a backdrop layer and customize it.

                        </h4>

                    </div>
                    <div className="artworkimg">
                        <img src="https://replay.software/sleeve/images/Interface1Dark.jpg" style={{ borderRadius: "30px" }}></img>
                        <img src="https://replay.software/sleeve/images/Interface2Dark.jpg" style={{ borderRadius: "30px" }}></img>

                    </div>
                </div>
                <div>
                    <h2 style={{ fontSize: "3rem", fontWeight: "70", marginTop: "100px", lineHeight: '1' }}><b>Like, Scrobble.</b></h2>

                </div>

            </header>
        </div>
    )
}

export default Mycomponent
