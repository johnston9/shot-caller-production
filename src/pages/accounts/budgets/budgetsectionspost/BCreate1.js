import Rights from "./budgetsections/Rights";
import Info from "./budgetsections/Info";
import Development from "./budgetsections/Development";
import Scenario from "./budgetsections/Scenario";
import ProducersDirectors from "./budgetsections/ProducersDirectors";
import StarsMusic from "./budgetsections/StarsMusic";
import Cast from "./budgetsections/Cast";
import ProductionStaff from "./budgetsections/ProductionStaff";
import DesignLabour from "./budgetsections/DesignLabour";
import Construction from "./budgetsections/Construction";
import SetDressingLabour from "./budgetsections/SetDressingLabour";
import PropertyLabour from "./budgetsections/PropertyLabour";
import Wrangling from "./budgetsections/Wrangling";
import SpecialEffects from "./budgetsections/SpecialEffects";
import Wardrobe from "./budgetsections/Wardrobe";
import Makeup from "./budgetsections/Makeup";
import Camera from "./budgetsections/Camera";
import Electric from "./budgetsections/Electric";
import Grip from "./budgetsections/Grip";
import Sound from "./budgetsections/Sound";
import Transport from "./budgetsections/Transport";
import TV from "./budgetsections/TV";
import ProductionOffice from "./budgetsectionscosts/ProductionOffice";
import Studio from "./budgetsectionscosts/Studio";
import Site from "./budgetsectionscosts/Site";
import Unit from "./budgetsectionscosts/Unit";
import TravelLiving from "./budgetsectionscosts/TravelLiving";
import Transportation from "./budgetsectionscosts/Transportation";
import ConstructionMat from "./budgetsectionscosts/ConstructionMat";
import ArtSupplies from "./budgetsectionscosts/ArtSupplies";
import Dressing from "./budgetsectionscosts/Dressing";
import Props from "./budgetsectionscosts/Props";
import Fx from "./budgetsectionscosts/Fx";
import Animals from "./budgetsectionscosts/Animals";
import WardrobeSup from "./budgetsectionscosts/WardrobeSup";
import MakeupSup from "./budgetsectionscosts/MakeupSup";
import CameraEqu from "./budgetsectionscosts/CameraEqu";
import ElectricEqu from "./budgetsectionscosts/ElectricEqu";
import GripEqu from "./budgetsectionscosts/GripEqu";
import SoundEqu from "./budgetsectionscosts/SoundEqu";
import SecondU from "./budgetsectionscosts/SecondU";
import StockLab from "./budgetsectionscosts/StockLab";
import StaffFacilities from "./budgetsectionspost/StaffFacilities";
import Editing from "./budgetsectionspost/Editing";
import Postsound from "./budgetsectionspost/Postsound";
import PostLabVideo from "./budgetsectionspost/PostLabVideo";
import Titles from "./budgetsectionspost/Titles";
import Versioning from "./budgetsectionspost/Versioning";
import PostVisualEffects from "./budgetsectionspost/PostVisualEffects";
import Publicity from "./budgetsectionsother/Publicity";
import Insurance from "./budgetsectionsother/Insurance";
import GeneralEx from "./budgetsectionsother/GeneralEx";
import IndirectCosts from "./budgetsectionsother/IndirectCosts";

const [showInfo, setShowInfo] = useState(false);
  const [showRights, setShowRights] = useState(false);
  const [showDevelopment, setShowDevelopment] = useState(false);
  const [showScenario, setShowScenario] = useState(false);
  const [showProDirs, setShowProDirs] = useState(false);
  const [showStarsMus, setShowStarsMus] = useState(false);
  const [showCast, setShowCast] = useState(false);
  const [showProStaff, setShowProStaff] = useState(false);
  const [showDesign, setShowDesign] = useState(false);
  const [showCon, setShowCon] = useState(false);
  const [showDress, setShowDress] = useState(false);
  const [showProps, setShowProps] = useState(false);
  const [showWrang, setShowWrang] = useState(false);
  const [showFx, setShowFx] = useState(false);
  const [showWardrobe, setShowWardrobe] = useState(false);
  const [showMake, setShowMake] = useState(false);
  const [showCam, setShowCam] = useState(false);
  const [showElec, setShowElec] = useState(false);
  const [showGrip, setShowGrip] = useState(false);
  const [showSound, setShowSound] = useState(false);
  const [showTport, setShowTport] = useState(false);
  const [showTV, setShowTV] = useState(false);
  const [showProOff, setShowProOff] = useState(false);
  const [showStudio, setShowStudio] = useState(false);
  const [showSite, setShowSite] = useState(false);
  const [showUnit, setShowUnit] = useState(false);
  const [showTraLiv, setShowTraLiv] = useState(false);
  const [showTransport, setShowTransport] = useState(false);
  const [showConMat, setShowConMat] = useState(false);
  const [showArtSup, setShowArtSup] = useState(false);
  const [showDressing, setShowDressing] = useState(false);
  const [showProp, setShowProp] = useState(false);
  const [showSpecFx, setShowSpecFx] = useState(false);
  const [showAnim, setShowAnim] = useState(false);
  const [showWardSup, setShowWardSup] = useState(false);
  const [showMakeSup, setShowMakeSup] = useState(false);
  const [showCamEqu, setShowCamEqu] = useState(false);
  const [showElecEqu, setShowElecEqu] = useState(false);
  const [showGripEqu, setShowGripEqu] = useState(false);
  const [showSoundEqu, setShowSoundEqu] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showLab, setShowLab] = useState(false);
  const [showStaFac, setShowStaFac] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showPoSoun, setShowPoSoun] = useState(false);
  const [showPoLab, setShowPoLab] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showVers, setShowVers] = useState(false);
  const [showVfxPo, setShowVfxPo] = useState(false);
  const [showPub, setShowPub] = useState(false);
  const [showInsur, setShowInsur] = useState(false);
  const [showGenex, setShowGenex] = useState(false);
  const [showIndir, setShowIndir] = useState(false);

// Length postData
const [postDataLength, setPostDataLength] = useState({
  research: 0,
  prep: 0,
  shoot: 0,
  wrap: 0,
  post: 0,});

// Length postData values
const { research, prep, shoot, wrap, post,} = postDataLength; 

// Length Total postData 
const [postDataLengthTotal, setPostDataLengthTotal] = useState(0);

// RIGHTS ----------------------------------------------------
  
  // Rights postData
  const [postDataRights, setPostDataRights] = useState({
    story_rights: 0,
    miscellaneous: 0,
  });

  // Rights postData values
  const {story_rights, miscellaneous} = postDataRights;

  // Rights Total postData 
  const [postDataRightsTotal, setPostDataRightsTotal] = useState(0);

  // PRE-PRODUCTION AND DEVELOPMENT --------------------------------------------
  
  // Development postData
  const [postDataDevelopment, setPostDataDevelopment] = useState({
    research_development: 0,
    prelim_budget: 0,
    consultant_expenses: 0,
    office_expenses: 0,
    staff: 0,
    travel_expenses_development: 0,
    living_expenses_development: 0,
    other_development: 0,
    fringes_taxes_development: 0,
  });

  // Development postData values
  const {research_development, prelim_budget, consultant_expenses,
    office_expenses, staff, travel_expenses_development,
    living_expenses_development, other_development,
    fringes_taxes_development,} = postDataDevelopment;

  // Development Total postData 
  const [developmentTotal, setDevelopmentTotal] = useState(0);

  // SCENARIO --------------------------------------------
  
  // Scenario postData
  const [postDataScenario, setPostDataScenario] = useState({
    writers_units_number: 0,
    writers_units_name: "",
    writers_quantity: 0,
    writers_rate: 0,
    consultants_units_number: 0,
    consultants_units_name: "",
    consultants_quantity: 0,
    consultants_rate: 0,
    editors_scenario_units_number: 0,
    editors_scenario_units_name: "",
    editors_scenario_quantity: 0,
    editors_scenario_rate: 0,
    admin_scenario_units_number: 0,
    admin_scenario_units_name: "",
    admin_scenario_quantity: 0,
    admin_scenario_rate: 0,
    office_expenses_scenario: 0,
    travel_expenses_scenario: 0,
    living_expenses_scenario: 0,
    other_scenario: 0,
    fringes_taxes_scenario: 0,
  });

  // Scenario postData values
  const {writers_units_number, writers_units_name,
    writers_quantity, writers_rate,
    consultants_units_number, consultants_units_name,
    consultants_quantity, consultants_rate,
    editors_scenario_units_number, editors_scenario_units_name,
    editors_scenario_quantity, editors_scenario_rate,
    admin_scenario_units_number, admin_scenario_units_name,
    admin_scenario_quantity, admin_scenario_rate,
    office_expenses_scenario, travel_expenses_scenario,
    living_expenses_scenario, other_scenario, 
    fringes_taxes_scenario } = postDataScenario;

  // Writers Total postData
  const [writersTotal, setWritersTotal] = useState(0);
  // Consultants Total postData 
  const [consultantsTotal, setConsultantsTotal] = useState(0);
  // Editors Total postData
  const [editorsscenarioTotal, setEditorsscenarioTotal] = useState(0);
  // Admin Total postData 
  const [adminScenarioTotal, setAdminScenarioTotal] = useState(0);

  // Scenario Total postData 
  const [scenarioTotal, setScenarioTotal] = useState(0);

  // PRODUCERS DIRECTORS --------------------------------------------
  
  // producers/directors postData
  const [postDataProducersDirs, setPostDataProducersDirs] = useState({
    executive_producers_rate: 0,
    producers_rate: 0,
    line_producers_rate: 0,
    co_producers_rate: 0,
    associate_producers_rate: 0,
    directors_rate: 0,
    unit2_directors_rate: 0,
    executive_producers_quantity: 0,
    producers_quantity: 0,
    line_producers_quantity: 0,
    co_producers_quantity: 0,
    associate_producers_quantity: 0,
    directors_quantity: 0,
    unit2_directors_quantity: 0,
    travel_expenses_producers_dirs: 0,
    living_expenses_producers_dirs: 0,
    other_producers_dirs: 0,
    fringes_taxes_producers_dirs: 0,
  });

  // producers directors postData values
  const {executive_producers_rate,
    producers_rate,
    line_producers_rate,
    co_producers_rate,
    associate_producers_rate,
    directors_rate,
    unit2_directors_rate,
    executive_producers_quantity,
    producers_quantity,
    line_producers_quantity,
    co_producers_quantity,
    associate_producers_quantity,
    directors_quantity,
    unit2_directors_quantity,
    travel_expenses_producers_dirs,
    living_expenses_producers_dirs,
    other_producers_dirs,
    fringes_taxes_producers_dirs,
    } = postDataProducersDirs;

  // TOTALS
  // Exec Producers Total postData
  const [execProducersTotal, setExecProducersTotal] = useState(0);
  // Producers Total postData
  const [producersTotal, setProducersTotal] = useState(0);
  // Line Producers Total postData
  const [lineProducersTotal, setLineProducersTotal] = useState(0);
  // Co Producers Total postData
  const [coProducersTotal, setCoProducersTotal] = useState(0);
  // Associate Producers Total postData
  const [assocProducersTotal, setAssocProducersTotal] = useState(0);
  // Directors Total postData
  const [directorsTotal, setDirectorsTotal] = useState(0);
  // 2nd Unit Directors Total postData
  const [unit2DirectorsTotal, setUnit2DirectorsTotal] = useState(0);

  // ProducersDirs Total postData 
  const [producersDirsTotal, setProducersDirsTotal] = useState(0)

  // STARS / MUSIC ------------------------------------------
  // Stars Music postData
  const [postDataStarsMusic, setPostDataStarsMusic] = useState({
    stars: 0,
    stars_rights_payments: 0,
    travel_expenses_stars: 0,
    living_expenses_stars: 0,
    other_stars: 0,
    fringes_taxes_stars: 0,
    music: 0,
    music_supervisor: 0,
    travel_expenses_music: 0,
    living_expenses_music: 0,
    music_rights_addl_songs: 0,
    other_music: 0,
    fringes_taxes_music: 0,
    });

  // postDataStarsMusic postData values
  const {
    stars, stars_rights_payments, travel_expenses_stars,
    living_expenses_stars, other_stars, fringes_taxes_stars,
    music, music_supervisor, travel_expenses_music, living_expenses_music,
    music_rights_addl_songs, other_music, fringes_taxes_music,
  } = postDataStarsMusic;

  // StarsMusic Total postData 
  const [starsMusicTotal, setStarsMusicTotal] = useState(0);

  // end Above the Line

  // BELOW THE LINE - "B" PRODUCTION ---------------------------------------

  // CAST ----  ----------------------------------------
  
  // Cast postData
  const [postDataCast, setPostDataCast] = useState({
    principals_quantity: 0,
    principals_units_number: 0,
    principals_units_name: "",
    principals_rate: 0,
    actors_quantity: 0,
    actors_units_number: 0,
    actors_units_name: "",
    actors_rate: 0,
    stuntcoordinators_quantity: 0,
    stuntcoordinators_units_number: 0,
    stuntcoordinators_units_name: "",
    stuntcoordinators_rate: 0,
    stuntperformers_quantity: 0,
    stuntperformers_units_number: 0,
    stuntperformers_units_name: "",
    stuntperformers_rate: 0,
    otherperformers_quantity: 0,
    otherperformers_units_number: 0,
    otherperformers_units_name: "",
    otherperformers_rate: 0,
    extras_quantity: 0,
    extras_units_number: 0,
    extras_units_name: "",
    extras_rate: 0,
    casting_director: 0,
    extras_casting: 0,
    other_cast: 0,
    fringes_taxes_cast: 0,
    rights_payments_cast: 0,
  });

  // Cast postData values
  const {
    principals_quantity, principals_units_number,
    principals_units_name, principals_rate,
    actors_quantity, actors_units_number, 
    actors_units_name, actors_rate,
    stuntcoordinators_quantity, stuntcoordinators_units_number,
    stuntcoordinators_units_name, stuntcoordinators_rate,
    stuntperformers_quantity, stuntperformers_units_number,
    stuntperformers_units_name, stuntperformers_rate,
    otherperformers_quantity, otherperformers_units_number,
    otherperformers_units_name, otherperformers_rate,
    extras_quantity, extras_units_number,
    extras_units_name, extras_rate,
    casting_director, extras_casting,
    other_cast, fringes_taxes_cast, rights_payments_cast,
  } = postDataCast;

  // Principals Total postData
  const [principalsTotal, setPrincipalsTotal] = useState(0);
  // Actors Total postData 
  const [actorsTotal, setActorsTotal] = useState(0);
  // Editors Total postData
  const [stuntcoordinatorsTotal, setStuntcoordinatorsTotal] = useState(0);
  // Admin Total postData
  const [stuntperformersTotal, setStuntperformersTotal] = useState(0);
  // Admin Total postData
  const [otherperformersTotal, setOtherperformersTotal] = useState(0);
  // Extras Total postData
  const [extrasTotal, setExtrasTotal] = useState(0);

  // Cast Total postData 
  const [castTotal, setCastTotal] = useState(0);

  // PRODUCTION STAFF ------------------------------------------

  // Production postData
  const [postDataProduction, setPostDataProduction] = useState({
    fringes_taxes_production: 0,
    production_manager_quantity: 0,
    production_manager_units_number: 0,
    production_manager_units_name: "",
    production_manager_rate: 0,
    production_supervisor_quantity: 0,
    production_supervisor_units_number: 0,
    production_supervisor_units_name: "",
    production_supervisor_rate: 0,
    production_coordinator_quantity: 0,
    production_coordinator_units_number: 0,
    production_coordinator_units_name: "",
    production_coordinator_rate: 0,
    unit_manager_quantity: 0,
    unit_manager_units_number: 0,
    unit_manager_units_name: "",
    unit_manager_rate: 0,
    location_manager_quantity: 0,
    location_manager_units_number: 0,
    location_manager_units_name: "",
    location_manager_rate: 0,
    location_manager_assistant_quantity: 0,
    location_manager_assistant_units_number: 0,
    location_manager_assistant_units_name: "",
    location_manager_assistant_rate: 0,
    production_assistants_quantity: 0,
    production_assistants_units_number: 0,
    production_assistants_units_name: "",
    production_assistants_rate: 0,
    production_secretary_quantity: 0,
    production_secretary_units_number: 0,
    production_secretary_units_name: "",
    production_secretary_rate: 0,
    production_accountant_quantity: 0,
    production_accountant_units_number: 0,
    production_accountant_units_name: "",
    production_accountant_rate: 0,
    production_accountant_assistant_quantity: 0,
    production_accountant_assistant_units_number: 0,
    production_accountant_assistant_units_name: "",
    production_accountant_assistant_rate: 0,
    scriptsupervisor_continuity_quantity: 0,
    scriptsupervisor_continuity_units_number: 0,
    scriptsupervisor_continuity_units_name: "",
    scriptsupervisor_continuity_rate: 0,
    payroll_quantity: 0,
    payroll_units_number: 0,
    payroll_units_name: "",
    payroll_rate: 0,
    other_production_quantity: 0,
    other_production_units_number: 0,
    other_production_units_name: "",
    other_production_rate: 0,
    directors_assistant_quantity: 0,
    directors_assistant_units_number: 0,
    directors_assistant_units_name: "",
    directors_assistant_rate: 0,
    assistant_director_1st_quantity: 0,
    assistant_director_1st_units_number: 0,
    assistant_director_1st_units_name: "",
    assistant_director_1st_rate: 0,
    assistant_director_2nd_quantity: 0,
    assistant_director_2nd_units_number: 0,
    assistant_director_2nd_units_name: "",
    assistant_director_2nd_rate: 0,
    assistant_director_3rd_quantity: 0,
    assistant_director_3rd_units_number: 0,
    assistant_director_3rd_units_name: "",
    assistant_director_3rd_rate: 0,
    craft_services_quantity: 0,
    craft_services_units_number: 0,
    craft_services_units_name: "",
    craft_services_rate: 0,
  });

  // Production postData values
  const {
    fringes_taxes_production,
    production_manager_quantity,
    production_manager_units_number,
    production_manager_units_name,
    production_manager_rate,
    production_supervisor_quantity,
    production_supervisor_units_number,
    production_supervisor_units_name,
    production_supervisor_rate,
    production_coordinator_quantity,
    production_coordinator_units_number,
    production_coordinator_units_name,
    production_coordinator_rate,
    unit_manager_quantity,
    unit_manager_units_number,
    unit_manager_units_name,
    unit_manager_rate,
    location_manager_quantity,
    location_manager_units_number,
    location_manager_units_name,
    location_manager_rate,
    location_manager_assistant_quantity,
    location_manager_assistant_units_number,
    location_manager_assistant_units_name,
    location_manager_assistant_rate,
    production_assistants_quantity,
    production_assistants_units_number,
    production_assistants_units_name,
    production_assistants_rate,
    production_secretary_quantity,
    production_secretary_units_number,
    production_secretary_units_name,
    production_secretary_rate,
    production_accountant_quantity,
    production_accountant_units_number,
    production_accountant_units_name,
    production_accountant_rate,
    production_accountant_assistant_quantity,
    production_accountant_assistant_units_number,
    production_accountant_assistant_units_name,
    production_accountant_assistant_rate,
    scriptsupervisor_continuity_quantity,
    scriptsupervisor_continuity_units_number,
    scriptsupervisor_continuity_units_name,
    scriptsupervisor_continuity_rate,
    payroll_quantity,
    payroll_units_number,
    payroll_units_name,
    payroll_rate,
    other_production_quantity,
    other_production_units_number,
    other_production_units_name,
    other_production_rate,
    directors_assistant_quantity,
    directors_assistant_units_number,
    directors_assistant_units_name,
    directors_assistant_rate,
    assistant_director_1st_quantity,
    assistant_director_1st_units_number,
    assistant_director_1st_units_name,
    assistant_director_1st_rate,
    assistant_director_2nd_quantity,
    assistant_director_2nd_units_number,
    assistant_director_2nd_units_name,
    assistant_director_2nd_rate,
    assistant_director_3rd_quantity,
    assistant_director_3rd_units_number,
    assistant_director_3rd_units_name,
    assistant_director_3rd_rate,
    craft_services_quantity,
    craft_services_units_number,
    craft_services_units_name,
    craft_services_rate,
  } = postDataProduction;

  // production manager Total postData
  const [productionmanagerTotal, setProductionmanagerTotal] = useState(0);
  // production supervisor Total postData
  const [productionsupervisorTotal, setProductionsupervisorTotal] = useState(0);
  // production coordinator Total postData
  const [productioncoordinatorTotal, setProductioncoordinatorTotal] = useState(0);
  // unit manager Total postData
  const [unitmanagerTotal, setUnitmanagerTotal] = useState(0);
  // location manager Total postData
  const [locationmanagerTotal, setLocationmanagerTotal] = useState(0);
  // location manager assistant Total postData
  const [locationmanagerassistantTotal, setLocationmanagerassistantTotal] = useState(0);
  // production assistants Total postData
  const [productionassistantsTotal, setProductionassistantsTotal] = useState(0);
  // production secretary Total postData
  const [productionsecretaryTotal, setProductionsecretaryTotal] = useState(0);
  // production accountant Total postData
  const [productionaccountantTotal, setProductionaccountantTotal] = useState(0);
  // production accountant assistant Total postData
  const [productionaccountantassistantTotal, setProductionaccountantassistantTotal] = useState(0);
  // scriptsupervisor continuity Total postData
  const [scriptsupervisorcontinuityTotal, setScriptsupervisorcontinuityTotal] = useState(0);
  // payroll Total postData
  const [payrollTotal, setPayrollTotal] = useState(0);
  // other production Total postData
  const [otherproductionTotal, setOtherproductionTotal] = useState(0);
  // directors assistant Total postData
  const [directorsassistantTotal, setDirectorsassistantTotal] = useState(0);
  // assistant director 1st Total postData
  const [assistantdirector1stTotal, setAssistantdirector1stTotal] = useState(0);
  // assistant director 2nd Total postData
  const [assistantdirector2ndTotal, setAssistantdirector2ndTotal] = useState(0);
  // assistant director 3rd Total postData
  const [assistantdirector3rdTotal, setAssistantdirector3rdTotal] = useState(0);
  // craft services Total postData
  const [craftservicesTotal, setCraftservicesTotal] = useState(0);

  // Production Total postData 
  const [productionstaffTotal, setProductionstaffTotal] = useState(0);

  // DESIGN LABOUR ------------------------------------------

  // Design Labour postData
  const [postDataDesign, setPostDataDesign] = useState({
    fringes_taxes_design: 0,
    production_designer_quantity: 0,
    production_designer_units_number: 0,
    production_designer_units_name: "",
    production_designer_rate: 0,
    art_director_quantity: 0,
    art_director_units_number: 0,
    art_director_units_name: "",
    art_director_rate: 0,
    art_assistants_quantity: 0,
    art_assistants_units_number: 0,
    art_assistants_units_name: "",
    art_assistants_rate: 0,
    production_assistants_trainees_quantity: 0,
    production_assistants_trainees_units_number: 0,
    production_assistants_trainees_units_name: "",
    production_assistants_trainees_rate: 0,
    graphic_artists_quantity: 0,
    graphic_artists_units_number: 0,
    graphic_artists_units_name: "",
    graphic_artists_rate: 0,
    other_design: 0,
  });

  // Design Labour values
  const {fringes_taxes_design,
    production_designer_quantity, production_designer_units_number,
    production_designer_units_name, production_designer_rate,
    art_director_quantity, art_director_units_number,
    art_director_units_name, art_director_rate,
    art_assistants_quantity, art_assistants_units_number,
    art_assistants_units_name, art_assistants_rate,
    production_assistants_trainees_quantity, production_assistants_trainees_units_number,
    production_assistants_trainees_units_name, production_assistants_trainees_rate,
    graphic_artists_quantity, graphic_artists_units_number,
    graphic_artists_units_name, graphic_artists_rate, other_design,
        } = postDataDesign;

  // production designer Total postData
  const [productiondesignerTotal, setProductiondesignerTotal] = useState(0);
  // art director Total postData
  const [artdirectorTotal, setArtdirectorTotal] = useState(0);
  // art assistants Total postData
  const [artassistantsTotal, setArtassistantsTotal] = useState(0);
  // production assistants / trainees Total postData
  const [productionassistantstraineesTotal, setProductionassistantstraineesTotal] = useState(0);
  // graphic artists Total postData
  const [graphicartistsTotal, setGraphicartistsTotal] = useState(0);

  // Design Labour Total postData 
  const [designlabourTotal, setDesignlabourTotal] = useState(0);

  // CONSTRUCTION LABOUR ----------------------------------

  // Construction Labour postData
  const [postDataConstruction, setPostDataConstruction] = useState({
    fringes_taxes_construction: 0,
    constructioncoordinator_quantity: 0,
    constructioncoordinator_units_number: 0,
    constructioncoordinator_units_name: "",
    constructioncoordinator_rate: 0,
    headcarpenter_quantity: 0,
    headcarpenter_units_number: 0,
    headcarpenter_units_name: "",
    headcarpenter_rate: 0,
    carpenters_quantity: 0,
    carpenters_units_number: 0,
    carpenters_units_name: "",
    carpenters_rate: 0,
    scenicpainters_quantity: 0,
    scenicpainters_units_number: 0,
    scenicpainters_units_name: "",
    scenicpainters_rate: 0,
    headpainter_quantity: 0,
    headpainter_units_number: 0,
    headpainter_units_name: "",
    headpainter_rate: 0,
    painters_quantity: 0,
    painters_units_number: 0,
    painters_units_name: "",
    painters_rate: 0,
    labourers_quantity: 0,
    labourers_units_number: 0,
    labourers_units_name: "",
    labourers_rate: 0,
    other_construction: 0,
  });

  // Construction Labour values
  const {fringes_taxes_construction,
    constructioncoordinator_quantity, constructioncoordinator_units_number,
    constructioncoordinator_units_name, constructioncoordinator_rate,
    headcarpenter_quantity, headcarpenter_units_number,
    headcarpenter_units_name, headcarpenter_rate,
    carpenters_quantity, carpenters_units_number,
    carpenters_units_name, carpenters_rate,
    scenicpainters_quantity, scenicpainters_units_number,
    scenicpainters_units_name, scenicpainters_rate,
    headpainter_quantity, headpainter_units_number,
    headpainter_units_name, headpainter_rate,
    painters_quantity, painters_units_number, 
    painters_units_name, painters_rate,
    labourers_quantity, labourers_units_number, 
    labourers_units_name, labourers_rate, other_construction,
  } = postDataConstruction;

  // Totals
  // construction coordinator Total postData
  const [constructioncoordinatorTotal, setConstructioncoordinatorTotal] = useState(0);

  // head carpenter Total postData
  const [headcarpenterTotal, setHeadcarpenterTotal] = useState(0);

  // carpenters Total postData
  const [carpentersTotal, setCarpentersTotal] = useState(0);

  // scenic painters Total postData
  const [scenicpaintersTotal, setScenicpaintersTotal] = useState(0);

  // head painter Total postData
  const [headpainterTotal, setHeadpainterTotal] = useState(0);

  // painters Total postData
  const [paintersTotal, setPaintersTotal] = useState(0);

  // labourers Total postData
  const [labourersTotal, setLabourersTotal] = useState(0);

  // construction Labour Total postData 
  const [constructionlabourTotal, setConstructionlabourTotal] = useState(0);

  // SET DRESSING LABOUR ----------------------------------

  // Set Dressing Labour postData 
  const [postDataSetDressing, setPostDataSetDressing] = useState({
    fringes_taxes_dressing: 0,
    set_decorator_quantity: 0,
    set_decorator_units_number: 0,
    set_decorator_units_name: "",
    set_decorator_rate: 0,
    assist_set_decorator_quantity: 0,
    assist_set_decorator_units_number: 0,
    assist_set_decorator_units_name: "",
    assist_set_decorator_rate: 0,
    lead_man_quantity: 0,
    lead_man_units_number: 0,
    lead_man_units_name: "",
    lead_man_rate: 0,
    set_dressers_quantity: 0,
    set_dressers_units_number: 0,
    set_dressers_units_name: "",
    set_dressers_rate: 0,
    swing_gang_quantity: 0,
    swing_gang_units_number: 0,
    swing_gang_units_name: "",
    swing_gang_rate: 0,
    set_dressing_buyer_quantity: 0,
    set_dressing_buyer_units_number: 0,
    set_dressing_buyer_units_name: "",
    set_dressing_buyer_rate: 0,
    other_set_dressing: 0,
  });

  // Set Dressing Labour values
  const {fringes_taxes_dressing,
    set_decorator_quantity, set_decorator_units_number,
    set_decorator_units_name, set_decorator_rate,
    assist_set_decorator_quantity, assist_set_decorator_units_number,
    assist_set_decorator_units_name, assist_set_decorator_rate,
    lead_man_quantity, lead_man_units_number,
    lead_man_units_name, lead_man_rate,
    set_dressers_quantity, set_dressers_units_number,
    set_dressers_units_name, set_dressers_rate,
    swing_gang_quantity, swing_gang_units_number,
    swing_gang_units_name, swing_gang_rate,
    set_dressing_buyer_quantity, set_dressing_buyer_units_number,
    set_dressing_buyer_units_name, set_dressing_buyer_rate, 
    other_set_dressing,
  } = postDataSetDressing;

  // Totals
  // set decorator Total postData
  const [decoratorsetTotal, setDecoratorsetTotal] = useState(0);

  // assist set decorator Total postData
  const [assistdecoratorsetTotal, setAssistdecoratorsetTotal] = useState(0);

  // lead man Total postData
  const [leadmanTotal, setLeadmanTotal] = useState(0);

  // dressers Total postData
  const [dressersTotal, setDressersTotal] = useState(0);

  // swing gang Total postData
  const [swinggangTotal, setSwinggangTotal] = useState(0);

  // set dressing buyer Total postData
  const [dressingbuyerTotal, setDressingbuyerTotal] = useState(0);

  // set dressing Labour Total postData 
  const [dressinglabourTotal, setDressinglabourTotal] = useState(0);

  // PROPERTY LABOUR ----------------------------------

  // Property Labour postData 
  const [postDataProperty, setPostDataProperty] = useState({
    fringes_taxes_property: 0,
    property_master_quantity: 0,
    property_master_units_number: 0,
    property_master_units_name: "",
    property_master_rate: 0,
    assist_property_master_quantity: 0,
    assist_property_master_units_number: 0,
    assist_property_master_units_name: "",
    assist_property_master_rate: 0,
    on_set_props_person_quantity: 0,
    on_set_props_person_units_number: 0,
    on_set_props_person_units_name: "",
    on_set_props_person_rate: 0,
    property_buyer_quantity: 0,
    property_buyer_units_number: 0,
    property_buyer_units_name: "",
    property_buyer_rate: 0,
    armorer_quantity: 0,
    armorer_units_number: 0,
    armorer_units_name: "",
    armorer_rate: 0,
    other_property: 0,
  });

  const {fringes_taxes_property,
    property_master_quantity, property_master_units_number,
    property_master_units_name, property_master_rate,
    assist_property_master_quantity, assist_property_master_units_number,
    assist_property_master_units_name, assist_property_master_rate,
    on_set_props_person_quantity, on_set_props_person_units_number,
    on_set_props_person_units_name, on_set_props_person_rate,
    property_buyer_quantity, property_buyer_units_number,
    property_buyer_units_name, property_buyer_rate,
    armorer_quantity, armorer_units_number,
    armorer_units_name, armorer_rate,
    other_property,} = postDataProperty;

  // Totals
  // property master Total postData
  const [propertymasterTotal, setPropertymasterTotal] = useState(0);

  // assist property master Total postData
  const [assistpropertymasterTotal, setAssistpropertymasterTotal] = useState(0);

  // on set props person Total postData
  const [onsetpropspersonTotal, setOnsetpropspersonTotal] = useState(0);

  // property buyer Total postData
  const [propertybuyerTotal, setPropertybuyerTotal] = useState(0);

  // armorer Total postData
  const [armorerTotal, setArmorerTotal] = useState(0);

  // Property Labour Total postData 
  const [propertylabourTotal, setPropertylabourTotal] = useState(0);

  // WRANGLING LABOUR ----------------------------------

  // Wrangling Labour postData 
  const [postDataWrangling, setPostDataWrangling] = useState({
    fringes_taxes_wrangling: 0,
    head_wrangler_quantity: 0,
    head_wrangler_units_number: 0,
    head_wrangler_units_name: "",
    head_wrangler_rate: 0,
    other_wrangling_labour_quantity: 0,
    other_wrangling_labour_units_number: 0,
    other_wrangling_labour_units_name: "",
    other_wrangling_labour_rate: 0,
  });

  // Wrangling Labour values
  const {fringes_taxes_wrangling,
    head_wrangler_quantity, head_wrangler_units_number,
    head_wrangler_units_name, head_wrangler_rate,
    other_wrangling_labour_quantity, other_wrangling_labour_units_number,
    other_wrangling_labour_units_name, other_wrangling_labour_rate,
  } = postDataWrangling;

  // Totals
  // head wrangler Total postData
  const [headwranglerTotal, setHeadwranglerTotal] = useState(0);

  // other wrangling labour Total postData
  const [otherwranglinglabourTotal, setOtherwranglinglabourTotal] = useState(0);

  // Wrangling Labour Total postData 
  const [wranglerlabourTotal, setWranglerlabourTotal] = useState(0);

  // SPECIAL EFFECTS LABOUR ----------------------------------

  // Special Effects Labour postData
  const [postDataSpecialEffects, setPostDataSpecialEffects] = useState({
    fringes_taxes_fx: 0,
    fx_supervisor_quantity: 0,
    fx_supervisor_units_number: 0,
    fx_supervisor_units_name: "",
    fx_supervisor_rate: 0,
    assist_fx_quantity: 0,
    assist_fx_units_number: 0,
    assist_fx_units_name: "",
    assist_fx_rate: 0,
    other_fx_labour_quantity: 0,
    other_fx_labour_units_number: 0,
    other_fx_labour_units_name: "",
    other_fx_labour_rate: 0,
  });

  // Special Effects Labour values
  const {fringes_taxes_fx,
    fx_supervisor_quantity, fx_supervisor_units_number,
    fx_supervisor_units_name, fx_supervisor_rate,
    assist_fx_quantity, assist_fx_units_number,
    assist_fx_units_name, assist_fx_rate,
    other_fx_labour_quantity, other_fx_labour_units_number,
    other_fx_labour_units_name, other_fx_labour_rate,
  } = postDataSpecialEffects;

  // Totals
  // fx supervisor Total postData 
  const [fxsupervisorTotal, setFxsupervisorTotal] = useState(0);

  // assistant fx Total postData
  const [assistfxTotal, setAssistfxTotal] = useState(0);

  // other fx labour Total postData
  const [otherfxlabourTotal, setOtherfxlabourTotal] = useState(0);

  // FX Labour Total postData 
  const [fxlabourTotal, setFxlabourTotal] = useState(0);

  // WARDROBE LABOUR ----------------------------------

  // Wardrobe Labour postData
  const [postDataWardrobe, setPostDataWardrobe] = useState({
    fringes_taxes_wardrobe: 0,
    costume_designer_quantity: 0,
    costume_designer_units_number: 0,
    costume_designer_units_name: "",
    costume_designer_rate: 0,
    assist_costume_designer_quantity: 0,
    assist_costume_designer_units_number: 0,
    assist_costume_designer_units_name: "",
    assist_costume_designer_rate: 0,
    head_wardrobe_quantity: 0,
    head_wardrobe_units_number: 0,
    head_wardrobe_units_name: "",
    head_wardrobe_rate: 0,
    wardrobe_assist_quantity: 0,
    wardrobe_assist_units_number: 0,
    wardrobe_assist_units_name: "",
    wardrobe_assist_rate: 0,
    truck_costumer_quantity: 0,
    truck_costumer_units_number: 0,
    truck_costumer_units_name: "",
    truck_costumer_rate: 0,
    other_wardrobe_labour_quantity: 0,
    other_wardrobe_labour_units_number: 0,
    other_wardrobe_labour_units_name: "",
    other_wardrobe_labour_rate: 0,
  });

  // Wardrobe Labour postData values
  const {costume_designer_quantity, costume_designer_units_number,
    costume_designer_units_name, costume_designer_rate,
    assist_costume_designer_quantity, assist_costume_designer_units_number,
    assist_costume_designer_units_name, assist_costume_designer_rate,
    head_wardrobe_quantity, head_wardrobe_units_number,
    head_wardrobe_units_name, head_wardrobe_rate,
    wardrobe_assist_quantity, wardrobe_assist_units_number,
    wardrobe_assist_units_name, wardrobe_assist_rate,
    truck_costumer_quantity, truck_costumer_units_number,
    truck_costumer_units_name, truck_costumer_rate,
    other_wardrobe_labour_quantity, other_wardrobe_labour_units_number,
    other_wardrobe_labour_units_name, other_wardrobe_labour_rate,
    fringes_taxes_wardrobe,} = postDataWardrobe;

  // Totals
  // costume designer Total postData 
  const [costumedesignerTotal, setCostumedesignerTotal] = useState(0);

  // assistant costume designer Total postData 
  const [assistcosdesignerTotal, setAssistcosdesignerTotal] = useState(0);

  // head wardrobe Total postData 
  const [headwardrobeTotal, setHeadwardrobeTotal] = useState(0);

  // wardrobe assist Total postData 
  const [wardrobeassistTotal, setWardrobeassistTotal] = useState(0);

  // truck costumer Total postData 
  const [truckcostumerTotal, setTruckcostumerTotal] = useState(0);

  // other wardrobe labour Total postData 
  const [otherwardrobeTotal, setOtherwardrobeTotal] = useState(0);

  // Wardrobe Labour Total postData 
  const [wardrobelabourTotal, setWardrobelabourTotal] = useState(0);

  // MAKEUP LABOUR ----------------------------------

  // Makeup Labour postData
  const [postDataMakeup, setPostDataMakeup] = useState({
    fringes_taxes_makeup: 0,
    makeup_dept_head_quantity: 0,
    makeup_dept_head_units_number: 0,
    makeup_dept_head_units_name: "",
    makeup_dept_head_rate: 0,
    key_makeup_quantity: 0,
    key_makeup_units_number: 0,
    key_makeup_units_name: "",
    key_makeup_rate: 0,
    makeup_artist_quantity: 0,
    makeup_artist_units_number: 0,
    makeup_artist_units_name: "",
    makeup_artist_rate: 0,
    key_hairstylist_quantity: 0,
    key_hairstylist_units_number: 0,
    key_hairstylist_units_name: "",
    key_hairstylist_rate: 0,
    hairdresser_quantity: 0,
    hairdresser_units_number: 0,
    hairdresser_units_name: "",
    hairdresser_rate: 0,
    hair_makeup_dailies_quantity: 0,
    hair_makeup_dailies_units_number: 0,
    hair_makeup_dailies_units_name: "",
    hair_makeup_dailies_rate: 0,
    other_makeup_labour_quantity: 0,
    other_makeup_labour_units_number: 0,
    other_makeup_labour_units_name: "",
    other_makeup_labour_rate: 0,
    sfx_makeup_quantity: 0,
    sfx_makeup_units_number: 0,
    sfx_makeup_units_name: "",
    sfx_makeup_rate: 0,
  });

  const {makeup_dept_head_quantity, makeup_dept_head_units_number,
    makeup_dept_head_units_name, makeup_dept_head_rate,
    key_makeup_quantity, key_makeup_units_number,
    key_makeup_units_name, key_makeup_rate,
    makeup_artist_quantity, makeup_artist_units_number,
    makeup_artist_units_name, makeup_artist_rate,
    key_hairstylist_quantity, key_hairstylist_units_number,
    key_hairstylist_units_name, key_hairstylist_rate,
    hairdresser_quantity, hairdresser_units_number,
    hairdresser_units_name, hairdresser_rate,
    hair_makeup_dailies_quantity, hair_makeup_dailies_units_number,
    hair_makeup_dailies_units_name, hair_makeup_dailies_rate,
    other_makeup_labour_quantity, other_makeup_labour_units_number,
    other_makeup_labour_units_name, other_makeup_labour_rate,
    sfx_makeup_quantity, sfx_makeup_units_number,
    sfx_makeup_units_name, sfx_makeup_rate,
    fringes_taxes_makeup,} = postDataMakeup;
  
  // Totals
  // head makeup Total postData 
  const [headmakeupTotal, setHeadmakeupTotal] = useState(0);

  // key makeup Total postData 
  const [keymakeupTotal, setKeymakeupTotal] = useState(0);

  // makeup artist Total postData 
  const [makeupartistTotal, setMakeupartistTotal] = useState(0);

  // key hairstylist Total postData 
  const [keyhairstylistTotal, setKeyhairstylistTotal] = useState(0);

  // hairdresser Total postData 
  const [hairdresserTotal, setHairdresserTotal] = useState(0);

  // hair makeup dailies Total postData 
  const [hairmakeupdailiesTotal, setHairmakeupdailiesTotal] = useState(0);

  // other makeup labour Total postData 
  const [othermakeuplabourTotal, setOthermakeuplabourTotal] = useState(0);

  // sfxmakeup labour Total postData 
  const [sfxmakeupTotal, setSfxmakeupTotal] = useState(0);

  // Makeup Labour Total postData 
  const [makeuplabourTotal, setMakeuplabourTotal] = useState(0);

  // CAMERA LABOUR ----------------------------------

  // Camera Labour postData
  const [postDataCamera, setPostDataCamera] = useState({
    fringes_taxes_camera: 0,
    dop_qty: 0,
    dop_uno: 0,
    dop_una: "",
    dop_rt: 0,
    camera_op_qty: 0,
    camera_op_uno: 0,
    camera_op_una: "",
    camera_op_rt: 0,
    cam_ac1_qty: 0,
    cam_ac1_uno: 0,
    cam_ac1_una: "",
    cam_ac1_rt: 0,
    cam_ac2_qty: 0,
    cam_ac2_uno: 0,
    cam_ac2_una: "",
    cam_ac2_rt: 0,
    dit_qty: 0,
    dit_uno: 0,
    dit_una: "",
    dit_rt: 0,
    steadicam_qty: 0,
    steadicam_uno: 0,
    steadicam_una: "",
    steadicam_rt: 0,
    cam_pa_qty: 0,
    cam_pa_uno: 0,
    cam_pa_una: "",
    cam_pa_rt: 0,
    drone_pilot_qty: 0,
    drone_pilot_uno: 0,
    drone_pilot_una: "",
    drone_pilot_rt: 0,
    other_cam_qty: 0,
    other_cam_uno: 0,
    other_cam_una: "",
    other_cam_rt: 0,
    stills_qty: 0,
    stills_uno: 0,
    stills_una: "",
    stills_rt: 0,
  });

  // Camera Labour postData values
  const {dop_qty, dop_uno, dop_una, dop_rt,
    camera_op_qty, camera_op_uno, camera_op_una, camera_op_rt,
    cam_ac1_qty, cam_ac1_uno, cam_ac1_una, cam_ac1_rt,
    cam_ac2_qty, cam_ac2_uno, cam_ac2_una, cam_ac2_rt,
    dit_qty, dit_uno, dit_una, dit_rt,
    steadicam_qty, steadicam_uno, steadicam_una, steadicam_rt,
    cam_pa_qty, cam_pa_uno, cam_pa_una, cam_pa_rt, 
    drone_pilot_qty, drone_pilot_uno, drone_pilot_una, drone_pilot_rt,
    other_cam_qty, other_cam_uno, other_cam_una, other_cam_rt,
    stills_qty, stills_uno, stills_una, stills_rt,
    fringes_taxes_camera,} = postDataCamera;

  // Totals
  // dop Total postData 
  const [dopTotal, setDopTotal] = useState(0);

  // Camera Operator Total postData 
  const [cameraopTotal, setCameraopTotal] = useState(0);

  // 1st Assistant Camera Total postData 
  const [camac1Total, setCamac1Total] = useState(0);

  // 2nd Assistant Camera Total postData 
  const [camac2Total, setCamac2Total] = useState(0);

  // DIT Total postData 
  const [ditTotal, setDitTotal] = useState(0);

  // Steadicam Total postData 
  const [steadicamTotal, setSteadicamTotal] = useState(0);

  // Camera PA Total postData 
  const [campaTotal, setCampaTotal] = useState(0);

  // Drone Pilot Total postData 
  const [dronepilotTotal, setDronepilotTotal] = useState(0);

  // Other Camera Total postData 
  const [othercamTotal, setOthercamTotal] = useState(0);

  // Stills Total postData 
  const [stillsTotal, setStillsTotal] = useState(0);

  // Camera Labour Total postData 
  const [cameralabourTotal, setCameralabourTotal] = useState(0);

  // ELECTRICAL LABOUR ----------------------------------

  // Electrical Labour postData
  const [postDataElectric, setPostDataElectric] = useState({
    fringes_taxes_electric: 0,
    gaffer_qty: 0,
    gaffer_uno: 0,
    gaffer_una: "",
    gaffer_rt: 0,
    best_boy_qty: 0,
    best_boy_uno: 0,
    best_boy_una: "",
    best_boy_rt: 0,
    electrician_qty: 0,
    electrician_uno: 0,
    electrician_una: "",
    electrician_rt: 0,
    dailies_elec_qty: 0,
    dailies_elec_uno: 0,
    dailies_elec_una: "",
    dailies_elec_rt: 0,
    generator_op_qty: 0,
    generator_op_uno: 0,
    generator_op_una: "",
    generator_op_rt: 0,
    other_elec_qty: 0,
    other_elec_uno: 0,
    other_elec_una: "",
    other_elec_rt: 0,
  });

  const {gaffer_qty, gaffer_uno, gaffer_una, gaffer_rt,
    best_boy_qty, best_boy_uno, best_boy_una, best_boy_rt,
    electrician_qty, electrician_uno, electrician_una, electrician_rt,
    dailies_elec_qty, dailies_elec_uno, dailies_elec_una, dailies_elec_rt,
    generator_op_qty, generator_op_uno, generator_op_una, generator_op_rt,
    other_elec_qty, other_elec_uno, other_elec_una, other_elec_rt,
    fringes_taxes_electric, } = postDataElectric;

  // Totals
  // gaffer Total postData 
  const [gafferTotal, setGafferTotal] = useState(0);

  // best boy Total postData 
  const [bestboyTotal, setBestboyTotal] = useState(0);

  // electrician Total postData 
  const [electricianTotal, setElectricianTotal] = useState(0);

  // dailies electric Total postData 
  const [dailieselecTotal, setDailieselecTotal] = useState(0);

  // generator operator Total postData 
  const [generatoropTotal, setGeneratoropTotal] = useState(0);

  // other electric Total postData 
  const [otherelectricTotal, setOtherelectricTotal] = useState(0);

  // Electric Labour Total postData 
  const [electriclabourTotal, setElectriclabourTotal] = useState(0);

  // GRIP LABOUR ----------------------------------

  // Grip Labour postData
  const [postDataGrip, setPostDataGrip] = useState({
    fringes_taxes_grip: 0,
    key_grip_qty: 0,
    key_grip_uno: 0,
    key_grip_una: "",
    key_grip_rt: 0,
    best_boy_grip_qty: 0,
    best_boy_grip_uno: 0,
    best_boy_grip_una: "",
    best_boy_grip_rt: 0,
    grips_qty: 0,
    grips_uno: 0,
    grips_una: "",
    grips_rt: 0,
    dailies_grip_qty: 0,
    dailies_grip_uno: 0,
    dailies_grip_una: "",
    dailies_grip_rt: 0,
    dolly_crane_grip_qty: 0,
    dolly_crane_grip_uno: 0,
    dolly_crane_grip_una: "",
    dolly_crane_grip_rt: 0,
    swing_grips_qty: 0,
    swing_grips_uno: 0,
    swing_grips_una: "",
    swing_grips_rt: 0,
    other_grip_labour_qty: 0,
    other_grip_labour_uno: 0,
    other_grip_labour_una: "",
    other_grip_labour_rt: 0,
  });

  const {key_grip_qty, key_grip_uno, key_grip_una, key_grip_rt,
    best_boy_grip_qty, best_boy_grip_uno, best_boy_grip_una, best_boy_grip_rt,
    grips_qty, grips_uno, grips_una, grips_rt,
    dailies_grip_qty, dailies_grip_uno, dailies_grip_una, dailies_grip_rt, 
    dolly_crane_grip_qty, dolly_crane_grip_uno, dolly_crane_grip_una, dolly_crane_grip_rt,
    swing_grips_qty, swing_grips_uno, swing_grips_una, swing_grips_rt,
    other_grip_labour_qty, other_grip_labour_uno, other_grip_labour_una, other_grip_labour_rt,
    fringes_taxes_grip,} = postDataGrip;

  // Totals
  // key grip Total postData 
  const [keygripTotal, setKeygripTotal] = useState(0);

  // best boy grip Total postData 
  const [bestboygripTotal, setBestboygripTotal] = useState(0);

  // grips Total postData 
  const [gripsTotal, setGripsTotal] = useState(0);

  // dailies grip Total postData 
  const [dailiesgripTotal, setDailiesgripTotal] = useState(0);

  // dolly crane grip Total postData 
  const [dollycranegripTotal, setDollycranegripTotal] = useState(0);

  // swing grips Total postData 
  const [swinggripsTotal, setSwinggripsTotal] = useState(0);

  // other grip labour Total postData 
  const [othergriplabourTotal, setOthergriplabourTotal] = useState(0);

  // Grip Labour Total postData 
  const [griplabourTotal, setGriplabourTotal] = useState(0);

  // PRODUCTION SOUND LABOUR ----------------------------------

  // Production Sound Labour postData
  const [postDataSoundPro, setPostDataSoundPro] = useState({
    fringes_taxes_sound: 0,
    sound_mixer_qty: 0,
    sound_mixer_uno: 0,
    sound_mixer_una: "",
    sound_mixer_rt: 0,
    boom_operator_qty: 0,
    boom_operator_uno: 0,
    boom_operator_una: "",
    boom_operator_rt: 0,
    cable_wrangler_qty: 0,
    cable_wrangler_uno: 0,
    cable_wrangler_una: "",
    cable_wrangler_rt: 0,
    other_sound_labour_qty: 0,
    other_sound_labour_uno: 0,
    other_sound_labour_una: "",
    other_sound_labour_rt: 0,
  });

  const {sound_mixer_qty, sound_mixer_uno,
    sound_mixer_una, sound_mixer_rt,
    boom_operator_qty, boom_operator_uno,
    boom_operator_una, boom_operator_rt,
    cable_wrangler_qty, cable_wrangler_uno,
    cable_wrangler_una, cable_wrangler_rt,
    other_sound_labour_qty, other_sound_labour_uno,
    other_sound_labour_una, other_sound_labour_rt,
    fringes_taxes_sound,} = postDataSoundPro;

  // Totals
  // sound mixer Total postData 
  const [soundmixerTotal, setSoundmixerTotal] = useState(0);

  // boom operator Total postData 
  const [boomoperatorTotal, setBoomoperatorTotal] = useState(0);

  // cable wrangler Total postData 
  const [cablewranglerTotal, setCablewranglerTotal] = useState(0)

  // other sound labour Total postData 
  const [othersoundlabourTotal, setOthersoundlabourTotal] = useState(0);

  // Sound Labour Total postData 
  const [soundlabourTotal, setSoundlabourTotal] = useState(0);

  // TRANSPORTATION LABOUR ----------------------------------

  // Transport Labour postData
  const [postDataTransport, setPostDataTransport] = useState({
    fringes_taxes_transport: 0,
    tp_coordinator_qty: 0,
    tp_coordinator_uno: 0,
    tp_coordinator_una: "",
    tp_coordinator_rt: 0,
    tp_captain_qty: 0,
    tp_captain_uno: 0,
    tp_captain_una: "",
    tp_captain_rt: 0,
    tp_manager_qty: 0,
    tp_manager_uno: 0,
    tp_manager_una: "",
    tp_manager_rt: 0,
    head_driver_qty: 0,
    head_driver_uno: 0,
    head_driver_una: "",
    head_driver_rt: 0,
    drivers_qty: 0,
    drivers_uno: 0,
    drivers_una: "",
    drivers_rt: 0,
  });

  const {tp_coordinator_qty, tp_coordinator_uno, tp_coordinator_una, tp_coordinator_rt,
    tp_captain_qty,tp_captain_uno, tp_captain_una, tp_captain_rt,
    tp_manager_qty, tp_manager_uno, tp_manager_una, tp_manager_rt,
    head_driver_qty, head_driver_uno, head_driver_una, head_driver_rt,
    drivers_qty, drivers_uno, drivers_una, drivers_rt,
    fringes_taxes_transport,} = postDataTransport;

  // Totals
  // tp coordinator Total postData 
  const [tpcoordinatorTotal, setTpcoordinatorTotal] = useState(0);

  // tp captain Total postData 
  const [tpcaptainTotal, setTpcaptainTotal] = useState(0);

  // tp manager Total postData 
  const [tpmanagerTotal, setTpmanagerTotal] = useState(0);

  // head driver Total postData 
  const [headdriverTotal, setHeaddriverTotal] = useState(0);

  // drivers Total postData 
  const [driversTotal, setDriversTotal] = useState(0);

  // Transport Labour Total postData 
  const [transportlabourTotal, setTransportlabourTotal] = useState(0);

  // TV SPECIFIC LABOUR ----------------------------------

  // TV Labour postData
  const [postDataTV, setPostDataTV] = useState({
    fringes_taxes_tv: 0,
    tech_super_qty: 0,
    tech_super_uno: 0,
    tech_super_una: "",
    tech_super_rt: 0,
    tech_direct_qty: 0,
    tech_direct_uno: 0,
    tech_direct_una: "",
    tech_direct_rt: 0,
    floor_man_qty: 0,
    floor_man_uno: 0,
    floor_man_una: "",
    floor_man_rt: 0,
    light_direct_qty: 0,
    light_direct_uno: 0,
    light_direct_una: "",
    light_direct_rt: 0,
    boardman_qty: 0,
    boardman_uno: 0,
    boardman_una: "",
    boardman_rt: 0,
    audio_qty: 0,
    audio_uno: 0,
    audio_una: "",
    audio_rt: 0,
    vtr_operator_qty: 0,
    vtr_operator_uno: 0,
    vtr_operator_una: "",
    vtr_operator_rt: 0,
    stagehands_qty: 0,
    stagehands_uno: 0,
    stagehands_una: "",
    stagehands_rt: 0,
    other_tv_qty: 0,
    other_tv_uno: 0,
    other_tv_una: "",
    other_tv_rt: 0,
  });

  const {tech_super_qty, tech_super_uno, tech_super_una, tech_super_rt,
    tech_direct_qty, tech_direct_uno, tech_direct_una, tech_direct_rt,
    floor_man_qty, floor_man_uno, floor_man_una, floor_man_rt, 
    light_direct_qty, light_direct_uno, light_direct_una, light_direct_rt,
    boardman_qty, boardman_uno, boardman_una, boardman_rt,
    audio_qty, audio_uno, audio_una, audio_rt,
    vtr_operator_qty, vtr_operator_uno, vtr_operator_una, vtr_operator_rt,
    stagehands_qty, stagehands_uno, stagehands_una, stagehands_rt,
    other_tv_qty, other_tv_uno, other_tv_una, other_tv_rt,
    fringes_taxes_tv,} = postDataTV;

  // Totals
  // Technical Supervisor Total postData 
  const [techsuperTotal, setTechsuperTotal] = useState(0);

  // Technical Director Total postData 
  const [techdirectTotal, setTechdirectTotal] = useState(0);

  // Floor Manager Total postData 
  const [floormanTotal, setFloormanTotal] = useState(0);

  // Lighting Director Total postData 
  const [lightdirectTotal, setLightdirectTotal] = useState(0);

  // Boardman Total postData 
  const [boardmanTotal, setBoardmanTotal] = useState(0);

  // Audio Total postData 
  const [audioTotal, setAudioTotal] = useState(0);

  // VRT Operator Total postData 
  const [vtroperatorTotal, setVtroperatorTotal] = useState(0);

  // Stagehands Total postData 
  const [stagehandsTotal, setStagehandsTotal] = useState(0);

  // Other TV Labour Total postData 
  const [othertvTotal, setOthertvTotal] = useState(0);

  // TV Specific Labour Total postData 
  const [tvspecificlabourTotal, setTvspecificlabourTotal] = useState(0);

  // end below B Labour

  // BELOW PRODUCTION B COSTS ----------------------------------------------

  // PRODUCTION OFFICE EXPENSES ------------------------------

  // Production office postData
  const [postDataProOff, setPostDataProOff] = useState({
    office_rentals: 0,
    office_equipment: 0,
    office_supplies: 0,
    phones_net: 0,
    courier_postage: 0,
    office_other: 0,
  });

  const {office_rentals, office_equipment, office_supplies,
    phones_net, courier_postage, office_other,
  } = postDataProOff;

  // Production office Total postData 
  const [proOffTotal, setProOffTotal] = useState(0);

  // STUDIO/BACKLOT EXPENSES ------------------------------

  // Studio postData
  const [postDataStudio, setPostDataStudio] = useState({
    studio_rentals: 0,
    power: 0,
    carpentry_rentals: 0,
    studio_fx_equipment: 0,
    studio_security: 0,
    studio_other: 0,
  });

  const {studio_rentals, power, carpentry_rentals,
    studio_fx_equipment, studio_security, studio_other,
  } = postDataStudio;

  // Studio Total postData 
  const [studioTotal, setStudioTotal] = useState(0);

  // SITE EXPENSES ------------------------------

  // site postData
  const [postDataSite, setPostDataSite] = useState({
    surveying_scouting: 0,
    site_rentals: 0,
    site_power: 0,
    site_access: 0,
    site_insurance: 0,
    repairs_construction: 0,
    site_security: 0,
    site_other: 0,
    police_control: 0,
  });

  const {surveying_scouting, site_rentals, site_power, site_access,
    site_insurance, repairs_construction, site_security, site_other,
    police_control,} = postDataSite;

  // Site Total postData 
  const [siteTotal, setSiteTotal] = useState(0);

  // UNIT EXPENSES ------------------------------

  // unit postData
  const [postDataUnit, setPostDataUnit] = useState({
    catering: 0,
    craft_expenses: 0,
    meal_penalty: 0,
    green_room: 0,
    first_aid: 0,
    outfitting: 0,
    medical_insurance: 0,
    unit_other: 0,
  });

  const {catering, craft_expenses, meal_penalty,
    green_room, first_aid, outfitting,
    medical_insurance, unit_other,} = postDataUnit;

  const [unitTotal, setUnitTotal] = useState(0);

  // TRAVEL & LIVING -----------------------------------

  // travel and living postData
  const [postDataTraLiv, setPostDataTraLiv] = useState({
    fares: 0,
    accomatation_hotels: 0,
    per_diems: 0,
    taxis_limos: 0,
    shipping: 0,
    other_trav_liv: 0,
    customs_brokerage: 0,
  });

  const {fares, accomatation_hotels, per_diems, taxis_limos,
    shipping, other_trav_liv, customs_brokerage,} = postDataTraLiv;

  const [tralivTotal, setTralivTotal] = useState(0);

  // TRANSPORTATION --------------------------------------

  // Transport postData
  const [postDataTransportation, setPostDataTransportation] = useState({
    production_cars: 0,
    trucks_vans: 0,
    buses: 0,
    motorhomes: 0,
    talent_cars: 0,
    support_vehicles: 0,
    boats_planes: 0,
    fuel: 0,
    repairs: 0,
    taxis: 0,
    parking: 0,
    licenses_permits: 0,
    brokerage_insurance: 0,
    other_transport: 0,
  });

  const {production_cars, trucks_vans, buses, motorhomes,
    talent_cars, support_vehicles, boats_planes, fuel, repairs, taxis,
    parking, licenses_permits, brokerage_insurance, other_transport,
  } = postDataTransportation

  const [transportTotal, setTransportTotal] = useState(0);

  // CONSTRUCTION MATERIAL ------------------------------

  // Construction Material postData
  const [postDataConstructionMat, setPostDataConstructionMat] = useState({
    rentals_carpentry: 0,
    carpentry_purchases: 0,
    painting_rentals: 0,
    painting_purchases: 0,
    backdrops_murals: 0,
    scaffolding: 0,
    warehouse_rental: 0,
    construction_other: 0,
  });

  const {rentals_carpentry, carpentry_purchases, painting_rentals,
    painting_purchases, backdrops_murals, construction_other,
    scaffolding, warehouse_rental,} = postDataConstructionMat;

  const [constructionMatTotal, setConstructionMatTotal] = useState(0);

  // ART SUPPLIES ------------------------------

  // Art Supplies postData
  const [postDataArtSup, setPostDataArtSup] = useState({
    drawing_supplies: 0,
    drawing_equipment: 0,
    tech: 0,
    stock_prints_processing: 0,
    blueprinting: 0,
    other_art: 0,
  });

  const {drawing_supplies, drawing_equipment, tech,
    stock_prints_processing, blueprinting, other_art,} = postDataArtSup;

  const [artSupTotal, setArtSupTotal] = useState(0);

  // SET DRESSING ------------------------------

  // Set Dressing postData
  const [postDataDress, setPostDataDress] = useState({
    dress_rentals: 0,
    dress_purchases: 0,
    dress_manufacture: 0,
    dress_repairs_replacements: 0,
    other_dressing: 0,
  });

  const {dress_rentals, dress_purchases, dress_manufacture,
    dress_repairs_replacements, other_dressing,} = postDataDress;

  const [dressingTotal, setDressingTotal] = useState(0);

  // PROPS ------------------------------

  // Props postData
  const [postDataProps, setPostDataProps] = useState({
    props_rentals: 0,
    props_purchases: 0,
    graphics_signs: 0,
    props_repairs_replac: 0,
    picture_vehicle_rentals: 0,
    picture_vehicle_purchases: 0,
    picture_vehicle_mods: 0,
    picture_vehicle_ins: 0,
    other_props: 0,
  });

  const{props_rentals, props_purchases, graphics_signs,
    props_repairs_replac, picture_vehicle_rentals, picture_vehicle_purchases,
    picture_vehicle_mods, picture_vehicle_ins, other_props,
  } = postDataProps;

  const [propsTotal, setPropsTotal] = useState(0);

  // SPECIAL EFFECTS ------------------------------

  // Special effects postData
  const [postDataSpecEf, setPostDataSpecEf] = useState({
    fx_rentals: 0,
    fx_purchases: 0,
    stunts_purchases_rentals: 0,
    armaments_permits_fees: 0,
    other_fx: 0,
  });

  const {fx_rentals, fx_purchases, stunts_purchases_rentals,
    armaments_permits_fees, other_fx,} = postDataSpecEf;

  const [fxTotal, setFxTotal] = useState(0);

  // ANIMALS ------------------------------

  // Animals postData
  const [postDataAnimals, setPostDataAnimals] = useState({
    animals_rentals: 0,
    animals_purchases: 0,
    food_stabling: 0,
    transport: 0,
    vet: 0,
    customs_broker: 0,
    other_animals: 0,
  });

  const {animals_rentals, animals_purchases, food_stabling,
    transport, vet, customs_broker, other_animals,} = postDataAnimals;

  const [animalsTotal, setAnimalsTotal] = useState(0);

  // WARDROBE SUPPLIES ------------------------------

  // Wardrobe postData
  const [postDataWardrobeSup, setPostDataWardrobeSup] = useState({
    wardrobe_rentals: 0,
    wardrobe_purchases: 0,
    ward_manufact: 0,
    ward_ship_brok: 0,
    ward_repairs_clean: 0,
    other_ward: 0,
  });

  const {wardrobe_rentals, wardrobe_purchases, ward_manufact,
    ward_ship_brok, ward_repairs_clean, other_ward,
  } = postDataWardrobeSup;

  const [wardrobeTotal, setWardrobeTotal] = useState(0);

  // MAKEUP SUPPLIES ------------------------------

  // Makeup postData
  const [postDataMakeupSup, setPostDataMakeupSup] = useState({
    makeup_rentals: 0,
    makeup_purchases: 0,
    hair_rentals: 0,
    hair_purchases: 0,
    wigs: 0,
    makeup_fx: 0,
    makeup_ship_brok: 0,
    other_makeup: 0,
  });

  const {makeup_rentals, makeup_purchases, hair_rentals,
    hair_purchases, wigs, makeup_fx, makeup_ship_brok, other_makeup,
  } = postDataMakeupSup;

  const [makeupTotal, setMakeupTotal] = useState(0);

  // CAMERA EQUIPMENT ------------------------------

  // Camera Equipment postData
  const [postDataCameraEqu, setPostDataCameraEqu] = useState({
    basic_package_rent_cam: 0,
    daily_rentals_cam: 0,
    specialty_rent_cam: 0,
    camera_purchases: 0,
    steadicam: 0,
    video_teleprompter: 0,
    camera_ship_brok: 0,
    loss_damage_cam: 0,
    other_camera: 0,
  });

  const  {basic_package_rent_cam, daily_rentals_cam, other_camera,
    specialty_rent_cam, camera_purchases, steadicam,
    video_teleprompter, camera_ship_brok, loss_damage_cam,
  } = postDataCameraEqu;

  const [cameraTotal, setCameraTotal] = useState(0);

  // ELECTRICAL EQUIPMENT ------------------------------ 

  // Electric Equipment postData
  const [postDataElectricEqu, setPostDataElectricEqu] = useState({
    basic_package_rent_elec: 0,
    daily_rentals_elec: 0,
    specialty_rent_elec: 0,
    electric_purchases: 0,
    generators: 0,
    loss_damage_elec: 0,
    other_electric: 0,
  });

  const {basic_package_rent_elec, daily_rentals_elec,
    specialty_rent_elec, electric_purchases,
    generators, loss_damage_elec, other_electric,
  } = postDataElectricEqu;

  const [electricTotal, setElectricTotal] = useState(0);

  // GRIP EQUIPMENT ------------------------------

  // Grip Equipment postData
  const [postDataGripEqu, setPostDataGripEqu] = useState({
    basic_package_rent_grip: 0,
    daily_rentals_grip: 0,
    specialty_rent_grip: 0,
    crane_rentals: 0,
    scaffolding_grip: 0,
    grip_purchases: 0,
    loss_damage_grip: 0,
    other_grip: 0,
  });

  const {basic_package_rent_grip, daily_rentals_grip,
    specialty_rent_grip, crane_rentals, scaffolding_grip,
    grip_purchases, loss_damage_grip, other_grip,
  } = postDataGripEqu;

  const [gripTotal, setGripTotal] = useState(0);

  // SOUND EQUIPMENT ------------------------------
  
  // Sound Equipment postData
  const [postDataSoundEqu, setPostDataSoundEqu] = useState({
    basic_package_rent_sound: 0,
    daily_rentals_sound: 0,
    wireless_mics: 0,
    sound_purchases: 0,
    walkie_talkies: 0,
    other_sound: 0,
  });

  const {basic_package_rent_sound, daily_rentals_sound,
    wireless_mics, sound_purchases, walkie_talkies, other_sound,
  } = postDataSoundEqu;

  const [soundTotal, setSoundTotal] = useState(0);

  // SECOND UNIT ------------------------------
  
  // Second Unit postData
  const [postDataSecondU, setPostDataSecondU] = useState({
    crew_2U: 0,
    equipment_2U: 0,
    travliv_2U: 0,
    transport_2U: 0,
    mat_sup_2U: 0,
    aerial_unit: 0,
    marine_unit: 0,
    fringes_taxes_2U: 0,
    other_2U: 0,
  });

  const {crew_2U, equipment_2U, travliv_2U, transport_2U,
    mat_sup_2U, aerial_unit, marine_unit, fringes_taxes_2U, other_2U,
  } = postDataSecondU;

  const [secondUTotal, setSecondUTotal] = useState(0);

  // PRODUCTION STOCK & LABORATORY ------------------------------
  
  // Production Stock and Lab postData
  const [postDataStockLab, setPostDataStockLab] = useState({
    film_stock: 0,
    video_stock: 0,
    digital_stock: 0,
    transfer_stock: 0,
    hard_drives: 0,
    dalies: 0,
    telecine: 0,
    audio_stock: 0,
    magnetic_transfer: 0,
    stills: 0,
    loss_dam_lab: 0,
    other_lab: 0,
  });

  const {film_stock, video_stock, digital_stock, transfer_stock,
    hard_drives, dalies, telecine, audio_stock, magnetic_transfer,
    stills, loss_dam_lab, other_lab,
  } = postDataStockLab;

  const [stockLabTotal, setStockLabTotal] = useState(0);

  // end below B Costs

  // "C" - POST PRODUCTION ----------------------------------------------

  // POST PRODUCTION STAFF/FACILITIES ------------------------------
  
  // Post Production Staff/Facilities postData
  const [postDataPostStaffFac, setPostDataPostStaffFac] = useState({
    post_supervisor_qty: 0,
    post_supervisor_uno: 0,
    post_supervisor_una: "",
    post_supervisor_rt: 0,
    post_coordinator_qty: 0,
    post_coordinator_uno: 0,
    post_coordinator_una: "",
    post_coordinator_rt: 0,
    post_assistants_qty: 0,
    post_assistants_uno: 0,
    post_assistants_una: "",
    post_assistants_rt: 0,
    post_accountants_qty: 0,
    post_accountants_uno: 0,
    post_accountants_una: "",
    post_accountants_rt: 0,
    post_accountants_ass_qty: 0,
    post_accountants_ass_uno: 0,
    post_accountants_ass_una: "",
    post_accountants_ass_rt: 0,
    post_consultant: 0,
    post_office_rent: 0,
    post_office_equ: 0,
    post_office_sup: 0,
    post_it_network: 0,
    post_phone_net: 0,
    post_computers_soft: 0,
    post_store: 0,
    post_ship: 0,
    post_craft: 0,
    fringes_taxes_post: 0,
    post_other: 0,
  });

  const {post_supervisor_qty, post_supervisor_uno, 
    post_supervisor_una, post_supervisor_rt, 
    post_coordinator_qty, post_coordinator_uno,
    post_coordinator_una, post_coordinator_rt,
    post_assistants_qty, post_assistants_uno,
    post_assistants_una, post_assistants_rt,
    post_accountants_qty, post_accountants_uno,
    post_accountants_una, post_accountants_rt,
    post_accountants_ass_qty, post_accountants_ass_uno,
    post_accountants_ass_una, post_accountants_ass_rt,
    post_office_rent, post_office_equ, post_office_sup, post_consultant, 
    post_it_network, post_phone_net, post_computers_soft, post_store,
    post_ship, post_craft, fringes_taxes_post, post_other,
  } = postDataPostStaffFac;
  // postStaffFac_total

  // Totals
  // Post Production Supervisor Total postData
  const [postSuperTotal, setPostSuperTotal] = useState(0);

  // Post Production Coordinator Total postData
  const [postCoordinTotal, setPostCoordinTotal] = useState(0);

  // Post Production Assistants Total postData
  const [postAssistTotal, setPostAssistTotal] = useState(0);

  // Post Production Accountants Total postData
  const [postAccountTotal, setPostAccountTotal] = useState(0);

  // Post Production Accountants Assistants Total postData
  const [postAccountAssTotal, setPostAccountAssTotal] = useState(0);

  // Post Production Staff/Facilities Total postData
  const [postStaffFacTotal, setPostStaffFacTotal] = useState(0);

  // EDITING -------------------------------------------------------

  // Editing
  const [postDataEdit, setPostDataEdit] = useState({
    editor_qty: 0,
    editor_uno: 0,
    editor_una: "",
    editor_rt: 0,
    editor_vfx_qty: 0,
    editor_vfx_uno: 0,
    editor_vfx_una: "",
    editor_vfx_rt: 0,
    editor_ass_qty: 0,
    editor_ass_uno: 0,
    editor_ass_una: "",
    editor_ass_rt: 0,
    colorist_grader_qty: 0,
    colorist_grader_uno: 0,
    colorist_grader_una: "",
    colorist_grader_rt: 0,
    graphics_qty: 0,
    graphics_uno: 0,
    graphics_una: "",
    graphics_rt: 0,
    edit_rooms: 0,
    edit_equip: 0,
    edit_equip_nonlin: 0,
    online: 0,
    vfx_ed_system: 0,
    post_edit_pur: 0,
    lossdam_edit: 0,
    fringes_taxes_post_edit: 0,
    other_post_edit: 0,
  });

  const {editor_qty, editor_uno, editor_una, editor_rt,
    editor_vfx_qty, editor_vfx_uno, editor_vfx_una, editor_vfx_rt,
    editor_ass_qty, editor_ass_uno, editor_ass_una, editor_ass_rt,
    colorist_grader_qty, colorist_grader_uno, colorist_grader_una, colorist_grader_rt,
    graphics_qty, graphics_uno, graphics_una, graphics_rt,
    edit_rooms, edit_equip, edit_equip_nonlin, online,
    vfx_ed_system, post_edit_pur, lossdam_edit, fringes_taxes_post_edit,
    other_post_edit,} = postDataEdit;
  // editing_total

  // Totals
  // Editor Total postData
  const [editorTotal, setEditorTotal] = useState(0);

  // VFX Editor Total postData
  const [editorVfxTotal, setEditorVfxTotal] = useState(0);

  // Assistant Editor Total postData
  const [editorAssTotal, setEditorAssTotal] = useState(0);

  // Colorist/Grader Total postData
  const [graderTotal, setGraderTotal] = useState(0);

  // Graphics Total postData
  const [graphicsTotal, setGraphicsTotal] = useState(0);

  // EDITING Total postData
  const [editingTotal, setEditingTotal] = useState(0);

  // POST SOUND -----------------------------

  // Post Sound data
  const [postDataPostSound, setPostDataPostSound] = useState({
    sound_designer_qty: 0,
    sound_designer_uno: 0,
    sound_designer_una: "",
    sound_designer_rt: 0,
    editor_sound_qty: 0,
    editor_sound_uno: 0,
    editor_sound_una: "",
    editor_sound_rt: 0,
    editor_music_qty: 0,
    editor_music_uno: 0,
    editor_music_una: "",
    editor_music_rt: 0,
    ed_sound_ass_qty: 0,
    ed_sound_ass_uno: 0,
    ed_sound_ass_una: "",
    ed_sound_ass_rt: 0,
    adr_super_qty: 0,
    adr_super_uno: 0,
    adr_super_una: "",
    adr_super_rt: 0,
    foley_labour_qty: 0,
    foley_labour_uno: 0,
    foley_labour_una: "",
    foley_labour_rt: 0,
    sound_edit_rooms: 0,
    sound_edit_equ: 0,
    music_edit_equ: 0,
    post_sound_edit_pur: 0,
    adr: 0,
    foley: 0,
    pre_mix: 0,
    mix: 0,
    printmaster: 0,
    transfers_deliverables: 0,
    lossdam_sound: 0,
    fringes_taxes_post_sound: 0,
    other_post_sound: 0,
  });

  const {sound_designer_qty, sound_designer_uno, sound_designer_una, sound_designer_rt,
    editor_sound_qty, editor_sound_uno, editor_sound_una, editor_sound_rt,
    editor_music_qty, editor_music_uno, editor_music_una, editor_music_rt,
    ed_sound_ass_qty, ed_sound_ass_uno, ed_sound_ass_una, ed_sound_ass_rt,
    adr_super_qty, adr_super_uno, adr_super_una, adr_super_rt,
    foley_labour_qty, foley_labour_uno, foley_labour_una, foley_labour_rt,
    sound_edit_rooms, sound_edit_equ, music_edit_equ,
    post_sound_edit_pur, adr, foley, pre_mix, mix, printmaster, transfers_deliverables,
    lossdam_sound, fringes_taxes_post_sound, other_post_sound,
  } = postDataPostSound;
  // postSound_total

  // Totals
  // Sound Designer Total postData
  const [desSoundTotal, setDesSoundTotal] = useState(0);

  // Sound Editor Total postData
  const [editorSoundTotal, setEditorSoundTotal] = useState(0);

  // Music Editor Total postData
  const [editorMusicTotal, setEditorMusicTotal] = useState(0);

  // Assistant Editor Total postData
  const [soundEdAssTotal, setSoundEdAssTotal] = useState(0);

  // ADR Supervisor Total postData
  const [adrSupTotal, setAdrSupTotal] = useState(0);

  // Foley Labour Total postData
  const [folLabTotal, setFolLabTotal] = useState(0);

  // POST SOUND Total postData
  const [postSoundTotal, setPostSoundTotal] = useState(0);

  // POST VISUAL EFFECTS -------------------------------------------------------

  // Post Visual Effects
  const [postDataPostVFX, setPostDataPostVFX] = useState({
    vfx_producer: 0,
    vfx_supervisor: 0,
    vfx_coordinator: 0,
    vfx_storyboard: 0,
    vfx_pre_vis_team: 0,
    vfx_post_vis_team: 0,
    vfx_post_other_lab: 0,
    miniatures_build: 0,
    miniatures_shoot: 0,
    motion_capture: 0,
    cyberscanning: 0,
    vfx_rentals: 0,
    vfx_purchases: 0,
    vfx_vendor_1: 0,
    vfx_vendor_2: 0,
    vfx_vendor_3: 0,
    vfx_vendor_4: 0,
    vfx_vendor_5: 0,
    vfx_vendor_6: 0,
    vfx_vendor_7: 0,
    vfx_vendor_8: 0,
    vfx_vendor_9: 0,
    vfx_vendor_10: 0,
    vfx_vendors_x: 0,
    vfx_expenses: 0,
    vfx_traliv: 0,
    box_ren_vfx: 0,
    lossdam_vfx: 0,
    fringes_taxes_vfx: 0,
    other_post_vfx: 0,
  });

  const {vfx_producer, vfx_supervisor, vfx_coordinator, vfx_post_other_lab,
    vfx_storyboard, vfx_pre_vis_team, vfx_post_vis_team, cyberscanning,
    vfx_rentals, vfx_purchases, vfx_vendor_1, vfx_vendor_2, vfx_vendor_3,
    vfx_vendor_4, vfx_vendor_5, vfx_vendor_6, vfx_vendor_7, vfx_vendor_8,
    vfx_vendor_9, vfx_vendor_10, vfx_vendors_x, vfx_traliv, vfx_expenses,
    miniatures_build, miniatures_shoot, motion_capture, lossdam_vfx,
    box_ren_vfx, fringes_taxes_vfx, other_post_vfx,
  } = postDataPostVFX;
  // postVfx_total

  // POST VISUAL EFFECTS Total postData
  const [postVfxTotal, setPostVfxTotal] = useState(0);

  // POST LAB & VIDEO COPIES ----------------------------------

  // Post Lab/Video Copies
  const [postDataPostLab, setPostDataPostLab] = useState({
    stock: 0,
    neg_cutting: 0,
    color_cor: 0,
    interpos_neg: 0,
    prints: 0,
    transfers: 0,
    other_media_delivery: 0,
    distribution_copies: 0,
    storage_post: 0,
  });

  const {stock, neg_cutting, color_cor, interpos_neg, prints,
    transfers, other_media_delivery, distribution_copies, 
    storage_post,
  } = postDataPostLab;
  // postLab_total

  // POST LAB/VIDEO COPIES Total postData
  const [postLabTotal, setPostLabTotal] = useState(0);

  // POST TITLES/OPTICALS/STOCK FOOTAGE ----------------------

  // Post Titles/Opticals/Stock Footage
  const [postDataPostTitles, setPostDataPostTitles] = useState({
    titles: 0,
    opticals: 0,
    stock_footage: 0,
    con_script_ccsl: 0,
  });

  const {titles, opticals, stock_footage, con_script_ccsl,
  } = postDataPostTitles;
  // postTitles_total

  // POST TITLES Total postData
  const [postTitlesTotal, setPostTitlesTotal] = useState(0);

  // POST VERSIONING/CLOSED-CAPTIONING/DUBS/COPIES -------------

  // Post Versioning
  const [postDataPostVersion, setPostDataPostVersion] = useState({
    dubs: 0,
    subtitles: 0,
    closed_caption: 0,
    versioning: 0,
    trailers: 0,
    ads: 0,
    transfers_ver: 0,
    prints_ver: 0,
    dig_copies_ver: 0,
    other_copies_ver: 0,
  });

  const {dubs, subtitles, closed_caption, versioning, trailers,
    ads, transfers_ver, prints_ver, dig_copies_ver, 
    other_copies_ver,
  } = postDataPostVersion;
  // postVersion_total

  // POST VERSIONING/CLOSED-CAPTIONING/COPIES Total postData
  const [postVersionTotal, setPostVersionTotal] = useState(0);

  // end below "C"

  // "D" - OTHER --------------------------------------------------------

  // PUBLICITY ----------------------------------------------
  
  //  postData Publicity
  const [postDataPublicity, setPostDataPublicity] = useState({
    tests_theater_ren: 0,
    tests_other: 0,
    unit_publicist: 0,
    pub_press_ex: 0,
    photography: 0,
    epk: 0,
    promotion: 0,
    pr: 0,
    firnges_pub: 0,
    other_pub: 0,
    previews: 0,
    website: 0,
  });

  const {tests_theater_ren, tests_other,
    unit_publicist, pub_press_ex, photography, epk,
    promotion, pr, firnges_pub, other_pub, previews, website,
  } = postDataPublicity;

  // PUBLICITY Total postData
  const [pubTotal, setPubTotal] = useState(0);

  // INSURANCE ----------------------------------------------
  
  //  postData Insurance
  const [postDataInsurance, setPostDataInsurance] = useState({
    pro_package: 0,
    gen_lia: 0,
    eando: 0,
    umbrella: 0,
    union_insurance: 0,
    other_in: 0,
  });

  const {pro_package, gen_lia, eando, umbrella, 
    union_insurance, other_in,
  } = postDataInsurance;

   // INSURANCE Total postData
   const [insurTotal, setInsurTotal] = useState(0);

  // GENERAL EXPENSES ----------------------------------------
  
  //  postData General Expenses
  const [postDataGeneralEx, setPostDataGeneralEx] = useState({
    legal: 0,
    medical: 0,
    licences: 0,
    payroll: 0,
    bank_charges: 0,
    audit: 0,
  });

  const {legal, medical, licences, payroll, bank_charges, audit,
  } = postDataGeneralEx;

  // GENERAL EXPENSES Total postData
  const [genExTotal, setGenExTotal] = useState(0);

  // INDIRECT COSTS ------------------------------------------
  
  //  postData Indirect Costs
  const [postDataIndirectCo, setPostDataIndirectCo] = useState({
    corporate_overhead: 0,
    interim_financing: 0,
    fiscal_sponsor_fee: 0,
  });

  const {corporate_overhead, interim_financing, fiscal_sponsor_fee,
  } = postDataIndirectCo;

  // INDIRECT COSTS Total postData
  const [indirCoTotal, setIndirCoTotal] = useState(0);

  // CONTINGENCY/BOND --------------------------------------
  
  //  postData Contingency/Bond
  const [postDataContingency, setPostDataContingency] = useState({
    contingency: 0,
    completion_bond: 0,
  });

  const {contingency, completion_bond,
  } = postDataContingency;

  // handleChange 
  const handleChangeCon = (event) => {
    setPostDataContingency({
    ...postDataContingency,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };

  const contin = (
    <div className="mt-3">
    {/* Contingency */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Contingency</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="contingency" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="contingency"
        value={contingency}
        onChange={handleChangeCon}
            />
    </Form.Group>
    {errors?.contingency?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Completion Bond */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Completion Bond</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="completion_bond" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="completion_bond"
        value={completion_bond}
        onChange={handleChangeCon}
            />
    </Form.Group>
    {errors?.completion_bond?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  );