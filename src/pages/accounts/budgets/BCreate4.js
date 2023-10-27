{/* above + total */}
<Row className={ `${styles.OverviewBlue} mx-1 mt-5 py-1`}>
<Col md={10}>
<p className={ `mb-0 ml-3 ${styles.BoldBlack}`}>ABOVE THE LINE</p>
</Col>
<Col md={2}><p className="mb-0 mb-0">{aboveTheLineTotal} </p></Col>
</Row>
{/* sections above click buttons */}
<Row className={`${styles.ButtonLine} mx-1`}>
<Col md={4} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowInfo(showInfo => !showInfo)} > Info / Length
    </p>
</Col>
<Col md={4}>
<p className="mb-0">{postDataLengthTotal} </p>
</Col>
</Row>
</div>
</Col>
<Col md={4} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRight}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowRights(showRights => !showRights)} > Rights
</p>
</Col>
<Col md={4}>
<p className="mb-0">{postDataRightsTotal} </p>
</Col>
</Row>
</div>
</Col>
<Col md={4} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRight}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
onClick={() => setShowDevelopment(showDevelopment => !showDevelopment)} > Development
</p>
</Col>
<Col md={4}>
<p className="mb-0">{developmentTotal} </p>
</Col>
</Row>
</div>
</Col>
<Col md={4} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowScenario(showScenario => !showScenario)} > Scenario
</p>
</Col>
<Col md={4}>
<p className="mb-0">{scenarioTotal} </p>
</Col>
</Row>
</div>
</Col>
<Col md={4} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRight}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowProDirs(showProDirs => !showProDirs)} > Producers/Directors
</p>
</Col>
<Col md={4}>
<p className="mb-0">{producersDirsTotal} </p>
</Col>
</Row>
</div>
</Col>
<Col md={4} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRight}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowStarsMus(showStarsMus => !showStarsMus)} > Stars/Music
</p>
</Col>
<Col md={4}>
<p className="mb-0">{starsMusicTotal} </p>
</Col>
</Row>
</div>
</Col>
</Row>  
{/* below B labour */}
<Row className={ `${styles.OverviewBlue} mx-1 mb-0 mt-2 py-1`}>
<Col md={10}>
<p className={ `mb-0 ml-3 ${styles.BoldBlack}`}>
  BELOW THE LINE "B" PRODUCTION - LABOUR</p>
</Col>
<Col md={2}><p className="mb-0">{belowTheLineBTotal} </p></Col>
</Row>
{/* sections below B labour click buttons */}
<Row className={`${styles.ButtonLine} mx-1`}>
{/* Cast */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowCast(showCast => !showCast)} >Cast
</p>
</Col>
<Col md={4}>
<p className="mb-0">{castTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Production Staff */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowProStaff(showProStaff => !showProStaff)} > Production Staff
</p>
</Col>
<Col md={4}>
<p className="mb-0">{productionstaffTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Design */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowDesign(showDesign => !showDesign)} > Design Labour
</p>
</Col>
<Col md={4}>
<p className="mb-0">{designlabourTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Construction */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowCon(showCon => !showCon)} >Construction Labour
</p>
</Col>
<Col md={4}>
<p className="mb-0">{constructionlabourTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Dressing */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowDress(showDress => !showDress)} >Set Dressing Labour
</p>
</Col>
<Col md={4}>
<p className="mb-0">{dressinglabourTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* FX */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowFx(showFx => !showFx)} >FX Labour
</p>
</Col>
<Col md={4}>
<p className="mb-0">{fxlabourTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* property */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowProps(showProps => !showProps)} >Property Labour
</p>
</Col>
<Col md={4}>
<p className="mb-0">{propertylabourTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Wrangling */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowWrang(showWrang => !showWrang)} >Wrangling Labour
</p>
</Col>
<Col md={4}>
<p className="mb-0">{wranglerlabourTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* wardrobe */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowWardrobe(showWardrobe => !showWardrobe)} >Wardrobe Labour
</p>
</Col>
<Col md={4}>
<p className="mb-0">{wardrobelabourTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Makeup */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowMake(showMake => !showMake)} >Makeup Labour
</p>
</Col>
<Col md={4}>
<p className="mb-0">{makeuplabourTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Camera */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowCam(showCam => !showCam)} >Camera Labour
</p>
</Col>
<Col md={4}>
<p className="mb-0">{cameralabourTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* electric */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowElec(showElec => !showElec)} >Electrical Labour
</p>
</Col>
<Col md={4}>
<p className="mb-0">{electriclabourTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* grip */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowGrip(showGrip => !showGrip)} >Grip Labour
</p>
</Col>
<Col md={4}>
<p className="mb-0">{griplabourTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Sound */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowSound(showSound => !showSound)} >Production Sound
</p>
</Col>
<Col md={4}>
<p className="mb-0">{soundlabourTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Transportation */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowTport(showTport => !showTport)} >Transportation
</p>
</Col>
<Col md={4}>
<p className="mb-0">{transportlabourTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* TV */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowTV(showTV => !showTV)} >TV Specific Labour
</p>
</Col>
<Col md={4}>
<p className="mb-0">{tvspecificlabourTotal} </p>
</Col>
</Row>
</div>
</Col>
</Row> 
{/* below B costs & total */}
<Row className={ `${styles.OverviewBlue} mx-1 mb-0 mt-2 py-1`}>
<Col md={10}>
<p className={ `mb-0 ml-3 ${styles.BoldBlack}`}>
  BELOW THE LINE "B" PRODUCTION - COSTS</p>
</Col>
<Col md={2}><p className="mb-0">{belowTheLineBCostsTotal} </p></Col>
</Row>
{/* sections below B costs click buttons */}
<Row className={`${styles.ButtonLine} mx-1`}>
{/* Production Office */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowProOff(showProOff => !showProOff)} >Production Office
</p>
</Col>
<Col md={4}>
<p className="mb-0">{proOffTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Studio/Backlot Expenses */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowStudio(showStudio => !showStudio)} >Studio/Backlot
</p>
</Col>
<Col md={4}>
<p className="mb-0">{studioTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Site Expenses */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowSite(showSite => !showSite)} >Site Expenses
</p>
</Col>
<Col md={4}>
<p className="mb-0">{siteTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Unit Expenses */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowUnit(showUnit => !showUnit)} >Unit Expenses
</p>
</Col>
<Col md={4}>
<p className="mb-0">{unitTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* travel and living */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowTraLiv(showTraLiv => !showTraLiv)} >Travel & Living
</p>
</Col>
<Col md={4}>
<p className="mb-0">{tralivTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Transportation */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowTransport(showTransport => !showTransport)} >Transportation
</p>
</Col>
<Col md={4}>
<p className="mb-0">{transportTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Construction Material */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowConMat(showConMat => !showConMat)} >Construction Material
</p>
</Col>
<Col md={4}>
<p className="mb-0">{constructionMatTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Art supplies */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowArtSup(showArtSup => !showArtSup)} >Art Supplies
</p>
</Col>
<Col md={4}>
<p className="mb-0">{artSupTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Set Dressing */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowDressing(showDressing => !showDressing)} >Set Dressing
</p>
</Col>
<Col md={4}>
<p className="mb-0">{dressingTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Props */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowProp(showProp => !showProp)} >Props
</p>
</Col>
<Col md={4}>
<p className="mb-0">{propsTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Fx */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowSpecFx(showSpecFx => !showSpecFx)} >Special Effects
</p>
</Col>
<Col md={4}>
<p className="mb-0">{fxTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Animals */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowAnim(showAnim => !showAnim)} >Animals
</p>
</Col>
<Col md={4}>
<p className="mb-0">{animalsTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Wardrobe */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowWardSup(showWardSup => !showWardSup)} >Wardrobe Supplies
</p>
</Col>
<Col md={4}>
<p className="mb-0">{wardrobeTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Makeup */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowMakeSup(showMakeSup => !showMakeSup)} >Makeup Supplies
</p>
</Col>
<Col md={4}>
<p className="mb-0">{makeupTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Camera Equipment */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowCamEqu(showCamEqu => !showCamEqu)} >Camera Eq
</p>
</Col>
<Col md={4}>
<p className="mb-0">{cameraTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Electrical Equipment */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowElecEqu(showElecEqu => !showElecEqu)} >Electrical Eq
</p>
</Col>
<Col md={4}>
<p className="mb-0">{electricTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Grip Equipment */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowGripEqu(showGripEqu => !showGripEqu)} >Grip
</p>
</Col>
<Col md={4}>
<p className="mb-0">{gripTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Sound Equipment */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowSoundEqu(showSoundEqu => !showSoundEqu)} >Sound
</p>
</Col>
<Col md={4}>
<p className="mb-0">{soundTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Second Unit */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowSecond(showSecond => !showSecond)} >Second Unit
</p>
</Col>
<Col md={4}>
<p className="mb-0">{secondUTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Stock & Lab */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowLab(showLab => !showLab)} >Stock & Lab
</p>
</Col>
<Col md={4}>
<p className="mb-0">{stockLabTotal} </p>
</Col>
</Row>
</div>
</Col>
</Row>
{blabourncoststotal}
{/* Post Production "C" & total */}
<Row className={ `${styles.OverviewBlue} mx-1 mb-0 mt-2 py-1`}>
<Col md={10}>
<p className={ `mb-0 ml-3 ${styles.BoldBlack}`}>
  "C" POST PRODUCTION </p>
</Col>
<Col md={2}><p className="mb-0">{postProductionCTotal} </p></Col>
</Row>
{/* sections post production C click buttons */}
<Row className={`${styles.ButtonLine} mx-1`}>
{/* Post Production Staff/Facilities */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
  onClick={() => setShowStaFac(showStaFac => !showStaFac)} >
Staff/Facilities
</p>
</Col>
<Col md={4}>
<p className="mb-0">{postStaffFacTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Editing */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
  onClick={() => setShowEdit(showEdit => !showEdit)} >
Editing
</p>
</Col>
<Col md={4}>
<p className="mb-0">{editingTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Post Sound */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
  onClick={() => setShowPoSoun(showPoSoun => !showPoSoun)} >
Post Sound
</p>
</Col>
<Col md={4}>
<p className="mb-0">{postSoundTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Post Visual Effects */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
  onClick={() => setShowVfxPo(showVfxPo => !showVfxPo)} >
Visual Effects
</p>
</Col>
<Col md={4}>
<p className="mb-0">{postVfxTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Post Lab/Video Copies */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
  onClick={() => setShowPoLab(showPoLab => !showPoLab)} >
Lab/Video
</p>
</Col>
<Col md={4}>
<p className="mb-0">{postLabTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Post Titles/Opticals/Stock Footage */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
  onClick={() => setShowTitle(showTitle => !showTitle)} >
Titles/Opticals
</p>
</Col>
<Col md={4}>
<p className="mb-0">{postTitlesTotal} </p>
</Col>
</Row>
</div>
</Col>
{/* Post Versioning */}
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
  onClick={() => setShowVers(showVers => !showVers)} >
Versioning
</p>
</Col>
<Col md={4}>
<p className="mb-0">{postVersionTotal} </p>
</Col>
</Row>
</div>
</Col>
</Row>
{/* below B and C total  */}
{belowbandcTotal}
{/* Above "A" and Below "B" and "C" total  */}
{abovebelowabcTotal}
{/* Other "D" & total */}
<Row className={ `${styles.OverviewBlue} mx-1 mb-0 mt-2 py-1`}>
<Col md={10}>
<p className={ `mb-0 ml-3 ${styles.BoldBlack}`}>
  "D" OTHER </p>
</Col>
<Col md={2}><p className="mb-0">{otherDTotal} </p></Col>
</Row>
{/* sections other "D" click buttons */}
<Row className={`${styles.ButtonLine} mx-1`}>
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
  onClick={() => setShowPub(showPub => !showPub)} >
Publicity
</p>
</Col>
<Col md={4}>
<p className="mb-0">{pubTotal} </p>
</Col>
</Row>
</div>
</Col>
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
  onClick={() => setShowInsur(showInsur => !showInsur)} >
Insurance
</p>
</Col>
<Col md={4}>
<p className="mb-0">{insurTotal} </p>
</Col>
</Row>
</div>
</Col>
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
  onClick={() => setShowGenex(showGenex => !showGenex)} >
General Exp
</p>
</Col>
<Col md={4}>
<p className="mb-0">{genExTotal} </p>
</Col>
</Row>
</div>
</Col>
<Col md={3} className='px-0 mx-0'>
<div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
<Row>
<Col md={8}>
<p className={`pl-2 py-0 mb-0 ${styles.Button}`}
  onClick={() => setShowIndir(showIndir => !showIndir)} >
Indirect Costs
</p>
</Col>
<Col md={4}>
<p className="mb-0">{indirCoTotal} </p>
</Col>
</Row>
</div>
</Col>
</Row>
{/* "A"  "B" and "C" and "D" total */}
{abovebelowabcanddTotal}
{contin}
{grandtotal}
{/* above components */}
{/* info */}
{!showInfo ? (
  ""
) : (
  <Info
  postDataDetails={postDataDetails}
  setPostDataDetails={setPostDataDetails}
  postDataLength={postDataLength}
  setPostDataLength={setPostDataLength}
  postDataLengthTotal={postDataLengthTotal}
  setPostDataLengthTotal={setPostDataLengthTotal}
  setShow={setShowInfo}  /> 
) } 
{/* rights */}
{!showRights ? (
  ""
) : (
  <Rights
  postDataRights={postDataRights}
  setPostDataRights={setPostDataRights}
  postDataRightsTotal={postDataRightsTotal}
  setPostDataRightsTotal={setPostDataRightsTotal}
  setShow={setShowRights}  /> 
) }
{/* development */}
{!showDevelopment ? (
  ""
) : (
  <Development
  postDataDevelopment={postDataDevelopment}
  setPostDataDevelopment={setPostDataDevelopment}
  developmentTotal={developmentTotal}
  setDevelopmentTotal={setDevelopmentTotal}
  setShow={setShowDevelopment}  /> 
) }
{/* scenario */}
{!showScenario ? (
  ""
) : (
  <Scenario
  postDataScenario={postDataScenario}
  setPostDataScenario={setPostDataScenario}
  writersTotal={writersTotal}
  setWritersTotal={setWritersTotal}
  consultantsTotal={consultantsTotal}
  setConsultantsTotal={setConsultantsTotal}
  editorsscenarioTotal={editorsscenarioTotal}
  setEditorsscenarioTotal={setEditorsscenarioTotal}
  adminScenarioTotal={adminScenarioTotal}
  setAdminScenarioTotal={setAdminScenarioTotal}
  scenarioTotal={scenarioTotal}
  setScenarioTotal={setScenarioTotal}
  setShow={setShowScenario}  /> 
) }
{/* producersDirs */}
{!showProDirs ? (
  ""
) : (
  <ProducersDirectors
  postDataProducersDirs={postDataProducersDirs}
  setPostDataProducersDirs={setPostDataProducersDirs}
  execProducersTotal={execProducersTotal}
  setExecProducersTotal={setExecProducersTotal}
  producersTotal={producersTotal}
  setProducersTotal={setProducersTotal}
  lineProducersTotal={lineProducersTotal}
  setLineProducersTotal={setLineProducersTotal}
  coProducersTotal={coProducersTotal}
  setCoProducersTotal={setCoProducersTotal}
  assocProducersTotal={assocProducersTotal}
  setAssocProducersTotal={setAssocProducersTotal}
  directorsTotal={directorsTotal}
  setDirectorsTotal={setDirectorsTotal}
  unit2DirectorsTotal={unit2DirectorsTotal}
  setUnit2DirectorsTotal={setUnit2DirectorsTotal}
  producersDirsTotal={producersDirsTotal}
  setProducersDirsTotal={setProducersDirsTotal}
  setShow={setShowProDirs}  /> 
) }
{/* starsmusic */}
{!showStarsMus ? (
  ""
) : (
  <StarsMusic
  postDataStarsMusic={postDataStarsMusic}
  setPostDataStarsMusic={setPostDataStarsMusic}
  starsMusicTotal={starsMusicTotal}
  setStarsMusicTotal={setStarsMusicTotal}
  setShow={setShowStarsMus}  /> 
) }
{/* below B Labour components */}
{/* cast */}
{!showCast ? (
  ""
) : (
  <Cast
  postDataCast={postDataCast}
  setPostDataCast={setPostDataCast}
  principalsTotal={principalsTotal}
  setPrincipalsTotal={setPrincipalsTotal}
  actorsTotal={actorsTotal}
  setActorsTotal={setActorsTotal}
  stuntcoordinatorsTotal={stuntcoordinatorsTotal}
  setStuntcoordinatorsTotal={setStuntcoordinatorsTotal}
  stuntperformersTotal={stuntperformersTotal}
  setStuntperformersTotal={setStuntperformersTotal}
  otherperformersTotal={otherperformersTotal}
  setOtherperformersTotal={setOtherperformersTotal}
  extrasTotal={extrasTotal}
  setExtrasTotal={setExtrasTotal}
  castTotal={castTotal}
  setCastTotal={setCastTotal}
  setShow={setShowCast}  /> 
) }
{/* production staff */}
{!showProStaff ? (
  ""
) : (
  <ProductionStaff
  postDataProduction={postDataProduction}
  setPostDataProduction={setPostDataProduction}
  productionmanagerTotal={productionmanagerTotal}
  setProductionmanagerTotal={setProductionmanagerTotal}
  productionsupervisorTotal={productionsupervisorTotal}
  setProductionsupervisorTotal={setProductionsupervisorTotal}
  productioncoordinatorTotal={productioncoordinatorTotal}
  setProductioncoordinatorTotal={setProductioncoordinatorTotal}
  unitmanagerTotal={unitmanagerTotal}
  setUnitmanagerTotal={setUnitmanagerTotal}
  locationmanagerTotal={locationmanagerTotal}
  setLocationmanagerTotal={setLocationmanagerTotal}
  locationmanagerassistantTotal={locationmanagerassistantTotal}
  setLocationmanagerassistantTotal={setLocationmanagerassistantTotal}
  productionassistantsTotal={productionassistantsTotal}
  setProductionassistantsTotal={setProductionassistantsTotal}
  productionsecretaryTotal={productionsecretaryTotal}
  setProductionsecretaryTotal={setProductionsecretaryTotal}
  productionaccountantTotal={productionaccountantTotal}
  setProductionaccountantTotal={setProductionaccountantTotal}
  productionaccountantassistantTotal={productionaccountantassistantTotal}
  setProductionaccountantassistantTotal={setProductionaccountantassistantTotal}
  scriptsupervisorcontinuityTotal={scriptsupervisorcontinuityTotal}
  setScriptsupervisorcontinuityTotal={setScriptsupervisorcontinuityTotal}
  payrollTotal={payrollTotal}
  setPayrollTotal={setPayrollTotal}
  otherproductionTotal={otherproductionTotal}
  setOtherproductionTotal={setOtherproductionTotal}
  directorsassistantTotal={directorsassistantTotal}
  setDirectorsassistantTotal={setDirectorsassistantTotal}
  assistantdirector1stTotal={assistantdirector1stTotal}
  setAssistantdirector1stTotal={setAssistantdirector1stTotal}
  assistantdirector2ndTotal={assistantdirector2ndTotal}
  setAssistantdirector2ndTotal={setAssistantdirector2ndTotal}
  assistantdirector3rdTotal={assistantdirector3rdTotal}
  setAssistantdirector3rdTotal={setAssistantdirector3rdTotal}
  craftservicesTotal={craftservicesTotal}
  setCraftservicesTotal={setCraftservicesTotal}
  productionstaffTotal={productionstaffTotal}
  setProductionstaffTotal={setProductionstaffTotal}
  setShow={setShowProStaff}  /> 
) }
{/* design */}
{!showDesign ? (
  ""
) : (
  <DesignLabour
  postDataDesign={postDataDesign}
  setPostDataDesign={setPostDataDesign}
  productiondesignerTotal={productiondesignerTotal}
  setProductiondesignerTotal={setProductiondesignerTotal}
  artdirectorTotal={artdirectorTotal}
  setArtdirectorTotal={setArtdirectorTotal}
  artassistantsTotal={artassistantsTotal}
  setArtassistantsTotal={setArtassistantsTotal}
  productionassistantstraineesTotal={productionassistantstraineesTotal}
  setProductionassistantstraineesTotal={setProductionassistantstraineesTotal}
  graphicartistsTotal={graphicartistsTotal}
  setGraphicartistsTotal={setGraphicartistsTotal}
  designlabourTotal={designlabourTotal}
  setDesignlabourTotal={setDesignlabourTotal}
  setShow={setShowDesign}  /> 
) }
{/* construction */}
{!showCon ? (
  ""
) : (
  <Construction
  postDataConstruction={postDataConstruction}
  setPostDataConstruction={setPostDataConstruction}
  constructioncoordinatorTotal={constructioncoordinatorTotal}
  setConstructioncoordinatorTotal={setConstructioncoordinatorTotal}
  headcarpenterTotal={headcarpenterTotal}
  setHeadcarpenterTotal={setHeadcarpenterTotal}
  carpentersTotal={carpentersTotal}
  setCarpentersTotal={setCarpentersTotal}
  scenicpaintersTotal={scenicpaintersTotal}
  setScenicpaintersTotal={setScenicpaintersTotal}
  headpainterTotal={headpainterTotal}
  setHeadpainterTotal={setHeadpainterTotal}
  paintersTotal={paintersTotal}
  setPaintersTotal={setPaintersTotal}
  labourersTotal={labourersTotal}
  setLabourersTotal={setLabourersTotal}
  constructionlabourTotal={constructionlabourTotal}
  setConstructionlabourTotal={setConstructionlabourTotal}
  setShow={setShowCon}  /> 
) }
{/* set dressing */}
{!showDress ? (
  ""
) : (
  <SetDressingLabour
  postDataSetDressing={postDataSetDressing}
  setPostDataSetDressing={setPostDataSetDressing}
  decoratorsetTotal={decoratorsetTotal}
  setDecoratorsetTotal={setDecoratorsetTotal}
  assistdecoratorsetTotal={assistdecoratorsetTotal}
  setAssistdecoratorsetTotal={setAssistdecoratorsetTotal}
  leadmanTotal={leadmanTotal}
  setLeadmanTotal={setLeadmanTotal}
  dressersTotal={dressersTotal}
  setDressersTotal={setDressersTotal}
  swinggangTotal={swinggangTotal}
  setSwinggangTotal={setSwinggangTotal}
  dressingbuyerTotal={dressingbuyerTotal}
  setDressingbuyerTotal={setDressingbuyerTotal}
  dressinglabourTotal={dressinglabourTotal}
  setDressinglabourTotal={setDressinglabourTotal}
  setShow={setShowDress}  /> 
) }
{/* property */}
{!showProps ? (
  ""
) : (
  <PropertyLabour
  postDataProperty={postDataProperty}
  setPostDataProperty={setPostDataProperty}
  propertymasterTotal={propertymasterTotal}
  setPropertymasterTotal={setPropertymasterTotal}
  assistpropertymasterTotal={assistpropertymasterTotal}
  setAssistpropertymasterTotal={setAssistpropertymasterTotal}
  onsetpropspersonTotal={onsetpropspersonTotal}
  setOnsetpropspersonTotal={setOnsetpropspersonTotal}
  propertybuyerTotal={propertybuyerTotal}
  setPropertybuyerTotal={setPropertybuyerTotal}
  armorerTotal={armorerTotal}
  setArmorerTotal={setArmorerTotal}
  propertylabourTotal={propertylabourTotal}
  setPropertylabourTotal={setPropertylabourTotal}
  setShow={setShowProps}  /> 
) }
{/* wrangling */}
{!showWrang ? (
  ""
) : (
  <Wrangling
  postDataWrangling={postDataWrangling}
  setPostDataWrangling={setPostDataWrangling}
  headwranglerTotal={headwranglerTotal}
  setHeadwranglerTotal={setHeadwranglerTotal}
  otherwranglinglabourTotal={otherwranglinglabourTotal}
  setOtherwranglinglabourTotal={setOtherwranglinglabourTotal}
  wranglerlabourTotal={wranglerlabourTotal}
  setWranglerlabourTotal={setWranglerlabourTotal}
  setShow={setShowWrang}  /> 
) }
{/* fx */}
{!showFx ? (
  ""
) : (
  <SpecialEffects
  postDataSpecialEffects={postDataSpecialEffects}
  setPostDataSpecialEffects={setPostDataSpecialEffects}
  fxsupervisorTotal={fxsupervisorTotal}
  setFxsupervisorTotal={setFxsupervisorTotal}
  assistfxTotal={assistfxTotal}
  setAssistfxTotal={setAssistfxTotal}
  otherfxlabourTotal={otherfxlabourTotal}
  setOtherfxlabourTotal={setOtherfxlabourTotal}
  fxlabourTotal={fxlabourTotal}
  setFxlabourTotal={setFxlabourTotal}
  setShow={setShowFx}  /> 
) }
{/* wardrobe */}
{!showWardrobe ? (
  ""
) : (
  <Wardrobe
  postDataWardrobe={postDataWardrobe}
  setPostDataWardrobe={setPostDataWardrobe}
  costumedesignerTotal={costumedesignerTotal}
  setCostumedesignerTotal={setCostumedesignerTotal}
  assistcosdesignerTotal={assistcosdesignerTotal}
  setAssistcosdesignerTotal={setAssistcosdesignerTotal}
  headwardrobeTotal={headwardrobeTotal}
  setHeadwardrobeTotal={setHeadwardrobeTotal}
  wardrobeassistTotal={wardrobeassistTotal}
  setWardrobeassistTotal={setWardrobeassistTotal}
  truckcostumerTotal={truckcostumerTotal}
  setTruckcostumerTotal={setTruckcostumerTotal}
  otherwardrobeTotal={otherwardrobeTotal}
  setOtherwardrobeTotal={setOtherwardrobeTotal}
  wardrobelabourTotal={wardrobelabourTotal}
  setWardrobelabourTotal={setWardrobelabourTotal}
  setShow={setShowWardrobe}  /> 
) }
{/* makeup */}
{!showMake ? (
  ""
) : (
  <Makeup 
  postDataMakeup={postDataMakeup}
  setPostDataMakeup={setPostDataMakeup}
  headmakeupTotal={headmakeupTotal}
  setHeadmakeupTotal={setHeadmakeupTotal}
  keymakeupTotal={keymakeupTotal}
  setKeymakeupTotal={setKeymakeupTotal}
  makeupartistTotal={makeupartistTotal}
  setMakeupartistTotal={setMakeupartistTotal}
  keyhairstylistTotal={keyhairstylistTotal}
  setKeyhairstylistTotal={setKeyhairstylistTotal}
  hairdresserTotal={hairdresserTotal}
  setHairdresserTotal={setHairdresserTotal}
  hairmakeupdailiesTotal={hairmakeupdailiesTotal}
  setHairmakeupdailiesTotal={setHairmakeupdailiesTotal}
  othermakeuplabourTotal={othermakeuplabourTotal}
  setOthermakeuplabourTotal={setOthermakeuplabourTotal}
  sfxmakeupTotal={sfxmakeupTotal}
  setSfxmakeupTotal={setSfxmakeupTotal}
  makeuplabourTotal={makeuplabourTotal}
  setMakeuplabourTotal={setMakeuplabourTotal}
  setShow={setShowMake}  /> 
) }
{/* camera */}
{!showCam ? (
  ""
) : (
  <Camera
  postDataCamera={postDataCamera}
  setPostDataCamera={setPostDataCamera}
  dopTotal={dopTotal}
  setDopTotal={setDopTotal}
  cameraopTotal={cameraopTotal}
  setCameraopTotal={setCameraopTotal}
  camac1Total={camac1Total}
  setCamac1Total={setCamac1Total}
  camac2Total={camac2Total}
  setCamac2Total={setCamac2Total}
  ditTotal={ditTotal}
  setDitTotal={setDitTotal}
  steadicamTotal={steadicamTotal}
  setSteadicamTotal={setSteadicamTotal}
  campaTotal={campaTotal}
  setCampaTotal={setCampaTotal}
  dronepilotTotal={dronepilotTotal}
  setDronepilotTotal={setDronepilotTotal}
  othercamTotal={othercamTotal}
  setOthercamTotal={setOthercamTotal}
  stillsTotal={stillsTotal}
  setStillsTotal={setStillsTotal}
  cameralabourTotal={cameralabourTotal}
  setCameralabourTotal={setCameralabourTotal}
  setShow={setShowCam}  /> 
) }
{/* electric */}
{!showElec ? (
  ""
) : (
  <Electric
  postDataElectric={postDataElectric}
  setPostDataElectric={setPostDataElectric}
  gafferTotal={gafferTotal}
  setGafferTotal={setGafferTotal}
  bestboyTotal={bestboyTotal}
  setBestboyTotal={setBestboyTotal}
  electricianTotal={electricianTotal}
  setElectricianTotal={setElectricianTotal}
  dailieselecTotal={dailieselecTotal}
  setDailieselecTotal={setDailieselecTotal}
  generatoropTotal={generatoropTotal}
  setGeneratoropTotal={setGeneratoropTotal}
  otherelectricTotal={otherelectricTotal}
  setOtherelectricTotal={setOtherelectricTotal}
  electriclabourTotal={electriclabourTotal}
  setElectriclabourTotal={setElectriclabourTotal}
  setShow={setShowElec}  /> 
) }
{/* grip */}
{!showGrip ? (
  ""
) : (
  <Grip 
  postDataGrip={postDataGrip}
  setPostDataGrip={setPostDataGrip}
  keygripTotal={keygripTotal}
  setKeygripTotal={setKeygripTotal}
  bestboygripTotal={bestboygripTotal}
  setBestboygripTotal={setBestboygripTotal}
  gripsTotal={gripsTotal}
  setGripsTotal={setGripsTotal}
  dailiesgripTotal={dailiesgripTotal}
  setDailiesgripTotal={setDailiesgripTotal}
  dollycranegripTotal={dollycranegripTotal}
  setDollycranegripTotal={setDollycranegripTotal}
  swinggripsTotal={swinggripsTotal}
  setSwinggripsTotal={setSwinggripsTotal}
  othergriplabourTotal={othergriplabourTotal}
  setOthergriplabourTotal={setOthergriplabourTotal}
  griplabourTotal={griplabourTotal}
  setGriplabourTotal={setGriplabourTotal}
  setShow={setShowGrip}  /> 
) }
{/* sound */}
{!showSound ? (
  ""
) : (
  <Sound 
  postDataSoundPro={postDataSoundPro}
  setPostDataSoundPro={setPostDataSoundPro}
  soundmixerTotal={soundmixerTotal}
  setSoundmixerTotal={setSoundmixerTotal}
  boomoperatorTotal={boomoperatorTotal}
  setBoomoperatorTotal={setBoomoperatorTotal}
  cablewranglerTotal={cablewranglerTotal}
  setCablewranglerTotal={setCablewranglerTotal}
  othersoundlabourTotal={othersoundlabourTotal}
  setOthersoundlabourTotal={setOthersoundlabourTotal}
  soundlabourTotal={soundlabourTotal}
  setSoundlabourTotal={setSoundlabourTotal}
  setShow={setShowSound}  /> 
) }
{/* transport */}
{!showTport ? (
  ""
) : (
  <Transport 
  postDataTransport={postDataTransport}
  setPostDataTransport={setPostDataTransport}
  tpcoordinatorTotal={tpcoordinatorTotal}
  setTpcoordinatorTotal={setTpcoordinatorTotal}
  tpcaptainTotal={tpcaptainTotal}
  setTpcaptainTotal={setTpcaptainTotal}
  tpmanagerTotal={tpmanagerTotal}
  setTpmanagerTotal={setTpmanagerTotal}
  headdriverTotal={headdriverTotal}
  setHeaddriverTotal={setHeaddriverTotal}
  driversTotal={driversTotal}
  setDriversTotal={setDriversTotal}
  transportlabourTotal={transportlabourTotal}
  setTransportlabourTotal={setTransportlabourTotal}
  setShow={setShowTport}  /> 
) }
{/* TV */}
{!showTV ? (
  ""
) : (
  <TV
  postDataTV={postDataTV}
  setPostDataTV={setPostDataTV}
  techsuperTotal={techsuperTotal}
  setTechsuperTotal={setTechsuperTotal}
  techdirectTotal={techdirectTotal}
  setTechdirectTotal={setTechdirectTotal}
  floormanTotal={floormanTotal}
  setFloormanTotal={setFloormanTotal}
  lightdirectTotal={lightdirectTotal}
  setLightdirectTotal={setLightdirectTotal}
  boardmanTotal={boardmanTotal}
  setBoardmanTotal={setBoardmanTotal}
  audioTotal={audioTotal}
  setAudioTotal={setAudioTotal}
  vtroperatorTotal={vtroperatorTotal}
  setVtroperatorTotal={setVtroperatorTotal}
  stagehandsTotal={stagehandsTotal}
  setStagehandsTotal={setStagehandsTotal}
  othertvTotal={othertvTotal}
  setOthertvTotal={setOthertvTotal}
  tvspecificlabourTotal={tvspecificlabourTotal}
  setTvspecificlabourTotal={setTvspecificlabourTotal}
  setShow={setShowTV}  /> 
) }
{/* below B costs components  */}
{/* Production Office */}
{!showProOff ? (
  ""
) : (
  <ProductionOffice
  postDataProOff={postDataProOff}
  setPostDataProOff={setPostDataProOff}
  proOffTotal={proOffTotal}
  setProOffTotal={setProOffTotal}
  setShow={setShowProOff}  /> 
) }
{/* Studio */}
{!showStudio ? (
  ""
) : (
  <Studio
  postDataStudio={postDataStudio}
  setPostDataStudio={setPostDataStudio}
  studioTotal={studioTotal}
  setStudioTotal={setStudioTotal}
  setShow={setShowStudio}  /> 
) }
{/* Site */}
{!showSite ? (
  ""
) : (
  <Site
  postDataSite={postDataSite}
  setPostDataSite={setPostDataSite}
  siteTotal={siteTotal}
  setSiteTotal={setSiteTotal}
  setShow={setShowSite}  /> 
) }
{/* Unit */}
{!showUnit ? (
  ""
) : (
  <Unit
  postDataUnit={postDataUnit}
  setPostDataUnit={setPostDataUnit}
  unitTotal={unitTotal}
  setUnitTotal={setUnitTotal}
  setShow={setShowUnit}  /> 
) }
{/* travel and living */}
{!showTraLiv ? (
  ""
) : (
  <TravelLiving
  postDataTraLiv={postDataTraLiv}
  setPostDataTraLiv={setPostDataTraLiv}
  tralivTotal={tralivTotal}
  setTralivTotal={setTralivTotal}
  setShow={setShowTraLiv}  /> 
) }
{/* Transport */}
{!showTransport ? (
  ""
) : (
  <Transportation
  postDataTransportation={postDataTransportation}
  setPostDataTransportation={setPostDataTransportation}
  transportTotal={transportTotal}
  setTransportTotal={setTransportTotal}
  setShow={setShowTransport}  /> 
) }
{/* Construction Material */}
{!showConMat ? (
  ""
) : (
  <ConstructionMat
  postDataConstructionMat={postDataConstructionMat}
  setPostDataConstructionMat={setPostDataConstructionMat}
  constructionMatTotal={constructionMatTotal}
  setConstructionMatTotal={setConstructionMatTotal}
  setShow={setShowConMat}  /> 
) }
{/* Art supplies */}
{!showArtSup ? (
  ""
) : (
  <ArtSupplies
  postDataArtSup={postDataArtSup}
  setPostDataArtSup={setPostDataArtSup}
  artSupTotal={artSupTotal}
  setArtSupTotal={setArtSupTotal}
  setShow={setShowArtSup}  /> 
) }
{/* Set Dressing */}
{!showDressing ? (
  ""
) : (
  <Dressing
  postDataDress={postDataDress}
  setPostDataDress={setPostDataDress}
  dressingTotal={dressingTotal}
  setDressingTotal={setDressingTotal}
  setShow={setShowDressing}  /> 
) }
{/* Props */}
{!showProp ? (
  ""
) : (
  <Props
  postDataProps={postDataProps}
  setPostDataProps={setPostDataProps}
  propsTotal={propsTotal}
  setPropsTotal={setPropsTotal}
  setShow={setShowProp}  /> 
) }
{/* Fx */}
{!showSpecFx ? (
  ""
) : (
  <Fx
  postDataSpecEf={postDataSpecEf}
  setPostDataSpecEf={setPostDataSpecEf}
  fxTotal={fxTotal}
  setFxTotal={setFxTotal}
  setShow={setShowSpecFx}  /> 
) }
{/* Animals */}
{!showAnim ? (
  ""
) : (
  <Animals
  postDataAnimals={postDataAnimals}
  setPostDataAnimals={setPostDataAnimals}
  animalsTotal={animalsTotal}
  setAnimalsTotal={setAnimalsTotal}
  setShow={setShowAnim}  /> 
) }
{/* Wardrobe Sup */}
{!showWardSup ? (
  ""
) : (
  <WardrobeSup
  postDataWardrobeSup={postDataWardrobeSup}
  setPostDataWardrobeSup={setPostDataWardrobeSup}
  wardrobeTotal={wardrobeTotal}
  setWardrobeTotal={setWardrobeTotal}
  setShow={setShowWardSup}  /> 
) }
{/* Makeup Sup */}
{!showMakeSup ? (
  ""
) : (
  <MakeupSup
  postDataMakeupSup={postDataMakeupSup}
  setPostDataMakeupSup={setPostDataMakeupSup}
  makeupTotal={makeupTotal}
  setMakeupTotal={setMakeupTotal}
  setShow={setShowMakeSup}  /> 
) }
{/* Camera Equipment */}
{!showCamEqu ? (
  ""
) : (
  <CameraEqu
  postDataCameraEqu={postDataCameraEqu}
  setPostDataCameraEqu={setPostDataCameraEqu}
  cameraTotal={cameraTotal}
  setCameraTotal={setCameraTotal}
  setShow={setShowCamEqu}  /> 
) }
{/* Electric Equipment */}
{!showElecEqu ? (
  ""
) : (
  <ElectricEqu
  postDataElectricEqu={postDataElectricEqu}
  setPostDataElectricEqu={setPostDataElectricEqu}
  electricTotal={electricTotal}
  setElectricTotal={setElectricTotal}
  setShow={setShowElecEqu}  /> 
) }
{/* Grip Equipment */}
{!showGripEqu ? (
  ""
) : (
  <GripEqu
  postDataGripEqu={postDataGripEqu}
  setPostDataGripEqu={setPostDataGripEqu}
  gripTotal={gripTotal}
  setGripTotal={setGripTotal}
  setShow={setShowGripEqu}  /> 
) }
{/* Sound Equipment */}
{!showSoundEqu ? (
  ""
) : (
  <SoundEqu
  postDataSoundEqu={postDataSoundEqu}
  setPostDataSoundEqu={setPostDataSoundEqu}
  soundTotal={soundTotal}
  setSoundTotal={setSoundTotal}
  setShow={setShowSoundEqu}  /> 
) }
{/*  Second Unit */}
{!showSecond ? (
  ""
) : (
  <SecondU
  postDataSecondU={postDataSecondU}
  setPostDataSecondU={setPostDataSecondU}
  secondUTotal={secondUTotal}
  setSecondUTotal={setSecondUTotal}
  setShow={setShowSecond}  /> 
) }
{/*  Stock Lab */}
{!showLab ? (
  ""
) : (
  <StockLab
  postDataStockLab={postDataStockLab}
  setPostDataStockLab={setPostDataStockLab}
  stockLabTotal={stockLabTotal}
  setStockLabTotal={setStockLabTotal}
  setShow={setShowLab}  /> 
) }
{/* post production "C" components */}
{/* Staff/Facilities */}
{!showStaFac ? (
  ""
) : (
  <StaffFacilities
  postDataPostStaffFac={postDataPostStaffFac}
  setPostDataPostStaffFac={setPostDataPostStaffFac}
  postSuperTotal={postSuperTotal}
  setPostSuperTotal={setPostSuperTotal}
  postCoordinTotal={postCoordinTotal}
  setPostCoordinTotal={setPostCoordinTotal}
  postAssistTotal={postAssistTotal}
  setPostAssistTotal={setPostAssistTotal}
  postAccountTotal={postAccountTotal}
  setPostAccountTotal={setPostAccountTotal}
  postAccountAssTotal={postAccountAssTotal}
  setPostAccountAssTotal={setPostAccountAssTotal}
  postStaffFacTotal={postStaffFacTotal}
  setPostStaffFacTotal={setPostStaffFacTotal}
  setShow={setShowStaFac}  /> 
) }
{/* Editing */}
{!showEdit ? (
  ""
) : (
  <Editing
  postDataEdit={postDataEdit}
  setPostDataEdit={setPostDataEdit}
  editorTotal={editorTotal}
  setEditorTotal={setEditorTotal}
  editorVfxTotal={editorVfxTotal}
  setEditorVfxTotal={setEditorVfxTotal}
  editorAssTotal={editorAssTotal}
  setEditorAssTotal={setEditorAssTotal}
  graderTotal={graderTotal}
  setGraderTotal={setGraderTotal}
  graphicsTotal={graphicsTotal}
  setGraphicsTotal={setGraphicsTotal}
  editingTotal={editingTotal}
  setEditingTotal={setEditingTotal}
  setShow={setShowEdit}  /> 
) }
{/* Post Sound */}
{!showPoSoun ? (
  ""
) : (
  <Postsound
  postDataPostSound={postDataPostSound}
  setPostDataPostSound={setPostDataPostSound}
  desSoundTotal={desSoundTotal}
  setDesSoundTotal={setDesSoundTotal}
  editorSoundTotal={editorSoundTotal}
  setEditorSoundTotal={setEditorSoundTotal}
  editorMusicTotal={editorMusicTotal}
  setEditorMusicTotal={setEditorMusicTotal}
  soundEdAssTotal={soundEdAssTotal}
  setSoundEdAssTotal={setSoundEdAssTotal}
  adrSupTotal={adrSupTotal}
  setAdrSupTotal={setAdrSupTotal}
  folLabTotal={folLabTotal}
  setFolLabTotal={setFolLabTotal}
  postSoundTotal={postSoundTotal}
  setPostSoundTotal={setPostSoundTotal}
  setShow={setShowPoSoun}  /> 
) }
{/* Post VFX */}
{!showVfxPo ? (
  ""
) : (
  <PostVisualEffects
  postDataPostVFX={postDataPostVFX}
  setPostDataPostVFX={setPostDataPostVFX}
  postVfxTotal={postVfxTotal}
  setPostVfxTotal={setPostVfxTotal}
  setShow={setShowVfxPo}  /> 
) }
{/* Post Lab/Video */}
{!showPoLab ? (
  ""
) : (
  <PostLabVideo
  postDataPostLab={postDataPostLab}
  setPostDataPostLab={setPostDataPostLab}
  postLabTotal={postLabTotal}
  setPostLabTotal={setPostLabTotal}
  setShow={setShowPoLab}  /> 
) }
{/* Post Titles/Opticals */}
{!showTitle ? (
  ""
) : (
  <Titles
  postDataPostTitles={postDataPostTitles}
  setPostDataPostTitles={setPostDataPostTitles}
  postTitlesTotal={postTitlesTotal}
  setPostTitlesTotal={setPostTitlesTotal}
  setShow={setShowTitle}  /> 
) }
{/* Post Versioning */}
{!showVers ? (
  ""
) : (
  <Versioning
  postDataPostVersion={postDataPostVersion}
  setPostDataPostVersion={setPostDataPostVersion}
  postVersionTotal={postVersionTotal}
  setPostVersionTotal={setPostVersionTotal}
  setShow={setShowVers}  /> 
) }
{/* Publicity */}
{!showPub ? (
  ""
) : (
  <Publicity
  postDataPublicity={postDataPublicity}
  setPostDataPublicity={setPostDataPublicity}
  pubTotal={pubTotal}
  setPubTotal={setPubTotal}
  setShow={setShowPub}  /> 
) }
{/* Insurance */}
{!showInsur ? (
  ""
) : (
  <Insurance
  postDataInsurance={postDataInsurance}
  setPostDataInsurance={setPostDataInsurance}
  insurTotal={insurTotal}
  setInsurTotal={setInsurTotal}
  setShow={setShowInsur}  /> 
) }
{/* General Expenses */}
{!showGenex ? (
  ""
) : (
  <GeneralEx
  postDataGeneralEx={postDataGeneralEx}
  setPostDataGeneralEx={setPostDataGeneralEx}
  genExTotal={genExTotal}
  setGenExTotal={setGenExTotal}
  setShow={setShowGenex}  /> 
) }
{/* Indirect Costs */}
{!showIndir ? (
  ""
) : (
  <IndirectCosts
  postDataIndirectCo={postDataIndirectCo}
  setPostDataIndirectCo={setPostDataIndirectCo}
  indirCoTotal={indirCoTotal}
  setIndirCoTotal={setIndirCoTotal}
  setShow={setShowIndir}  /> 
) }