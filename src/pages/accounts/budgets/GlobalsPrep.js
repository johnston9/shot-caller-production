const setPrep = () => {
    /* Function to set all crew prep weeks to prep global  */
    setPostDataProduction({
        ...postDataProduction,
        production_manager_uno_prep: prep_global,
        production_supervisor_uno_prep: prep_global,
        production_coordinator_uno_prep: prep_global,
        unit_manager_uno_prep: prep_global,
        location_manager_uno_prep: prep_global,
        location_manager_ass_uno_prep: prep_global,
        production_ass_uno_prep: prep_global,
        production_sec_uno_prep: prep_global,
        production_acc_uno_prep: prep_global,
        production_acc_ass_uno_prep: prep_global,
        scriptsupervisor_con_uno_prep: prep_global,
        payroll_uno_prep: prep_global,
        other_pro_uno_prep: prep_global,
        directors_ass_uno_prep: prep_global,
        ass_director_1st_uno_prep: prep_global,
        ass_director_2nd_uno_prep: prep_global,
        ass_director_3rd_uno_prep: prep_global,
        craft_services_uno_prep: prep_global,
    });
    setPostDataDesign({
      ...postDataDesign,
      pro_designer_uno_prep: prep_global,
      art_director_uno_prep: prep_global,
      art_ass_uno_prep: prep_global,
      pro_ass_trainees_uno_prep: prep_global,
      graphic_art_uno_prep: prep_global,
      supervart_uno_prep: prep_global,
      standby_art_uno_prep: prep_global,
      set_design_uno_prep: prep_global,
      junior_draught_uno_prep: prep_global,
      art_dep_coor_uno_prep: prep_global,
    });
    setPostDataConstruction({
        ...postDataConstruction,
        con_coor_uno_prep: prep_global,
        headcar_uno_prep: prep_global,
        carpen_uno_prep: prep_global,
        scenic_uno_prep: prep_global,
        headpain_uno_prep: prep_global,
        pain_uno_prep: prep_global,
        labo_uno_prep: prep_global,
    });
    setPostDataSetDressing({
        ...postDataSetDressing,
        set_dec_uno_prep: prep_global,
        ass_set_d_uno_prep: prep_global,
        lead_man_uno_prep: prep_global,
        set_dres_uno_prep: prep_global,
        swing_g_uno_prep: prep_global,
        set_d_buy_uno_prep: prep_global,
    });
    setPostDataProperty({
        ...postDataProperty,
        pro_mas_uno_prep: prep_global,
        as_pro_ma_uno_prep: prep_global,
        on_set_prop_uno_prep: prep_global,
        prop_buy_uno_prep: prep_global,
        armor_uno_prep: prep_global,
    });
    setPostDataWrangling({
        ...postDataWrangling,
        he_wran_uno_prep: prep_global,
        oth_wran_uno_prep: prep_global,
    });
    setPostDataSpecialEffects({
        ...postDataSpecialEffects,
        fx_sup_uno_prep: prep_global,
        ass_fx_uno_prep: prep_global,
        ot_fx_l_uno_prep: prep_global,
    });
    setPostDataWardrobe({
        ...postDataWardrobe,
        cos_des_uno_prep: prep_global,
        as_cos_des_uno_prep: prep_global,
        he_war_uno_prep: prep_global,
        ot_war_uno_prep: prep_global,
        tru_cos_uno_prep: prep_global,
        shopper_uno_prep: prep_global,
        war_as_qty_prep: prep_global,
        train_qty_prep: prep_global,
        war_coor_uno_prep: prep_global,
    });
    setPostDataMakeup({
        ...postDataMakeup,
        mak_head_qty_prep: prep_global,
        key_mak_uno_prep: prep_global,
        mak_art_uno_prep: prep_global,
        key_hair_uno_prep: prep_global,
        hair_uno_prep: prep_global,
        oth_mak_uno_prep: prep_global,
        sfx_mak_uno_prep: prep_global,
        mak_train_uno_prep: prep_global,
    });
    setPostDataCamera({
        ...postDataCamera,
        dop_uno_prep: prep_global,
        cam_op_uno_prep: prep_global,
        cam_ac1_uno_prep: prep_global,
        cam_ac2_uno_prep: prep_global,
        dit_uno_prep: prep_global,
        stead_uno_prep: prep_global,
        cam_pa_uno_prep: prep_global,
        dro_pil_uno_prep: prep_global,
        ot_cam_uno_prep: prep_global,
    });
    setPostDataElectric({
        ...postDataElectric,
        gaf_uno_prep: prep_global,
        b_boy_uno_prep: prep_global,
        elec_uno_prep: prep_global,
        gen_op_uno_prep: prep_global,
        ot_el_uno_prep: prep_global,
        d_elec_uno_prep: prep_global,
    });

  };