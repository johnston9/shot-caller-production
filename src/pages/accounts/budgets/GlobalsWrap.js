const setWrap = () => {
    /* Function to set all crew wrap weeks to wrap global */
    setPostDataProduction({
      ...postDataProduction,
      production_manager_uno_wrap: wrap_global,
      production_supervisor_uno_wrap: wrap_global,
      production_coordinator_uno_wrap: wrap_global,
      unit_manager_uno_wrap: wrap_global,
      location_manager_uno_wrap: wrap_global,
      location_manager_ass_uno_wrap: wrap_global,
      production_ass_uno_wrap: wrap_global,
      production_sec_uno_wrap: wrap_global,
      production_acc_uno_wrap: wrap_global,
      production_acc_ass_uno_wrap: wrap_global,
      scriptsupervisor_con_uno_wrap: wrap_global,
      payroll_uno_wrap: wrap_global,
      other_pro_uno_wrap: wrap_global,
      directors_ass_uno_wrap: wrap_global,
      ass_director_1st_uno_wrap: wrap_global,
      ass_director_2nd_uno_wrap: wrap_global,
      ass_director_3rd_uno_wrap: wrap_global,
      craft_services_uno_wrap: wrap_global,     
    });
    setPostDataDesign({
      ...postDataDesign,
      pro_designer_uno_wrap: wrap_global,
      art_director_uno_wrap: wrap_global,
      art_ass_uno_wrap: wrap_global,
      pro_ass_trainees_uno_wrap: wrap_global,
      art_dep_coor_uno_wrap: wrap_global,
    });
    setPostDataConstruction({
        ...postDataConstruction,
        con_coor_uno_wrap: wrap_global,
        headcar_uno_wrap: wrap_global,
        carpen_uno_wrap: wrap_global,
        scenic_uno_wrap: wrap_global,
        headpain_uno_wrap: wrap_global,
        pain_uno_wrap: wrap_global,
        labo_uno_wrap: wrap_global,
    });
    setPostDataSetDressing({
        ...postDataSetDressing,
        set_dec_uno_wrap: wrap_global,
        ass_set_d_uno_wrap: wrap_global,
        lead_man_uno_wrap: wrap_global,
        set_dres_uno_wrap: wrap_global,
        swing_g_uno_wrap: wrap_global,
        set_d_buy_uno_wrap: wrap_global,
        staaaaaaars: wrap_global,
        staaaaaaars: wrap_global,
        staaaaaaars: wrap_global,
        staaaaaaars: wrap_global,
    });
    setPostDataProperty({
        ...postDataProperty,
        pro_mas_uno_wrap: wrap_global,
        as_pro_ma_uno_wrap: wrap_global,
        on_set_prop_uno_wrap: wrap_global,
        prop_buy_uno_wrap: wrap_global,
        armor_uno_wrap: wrap_global,
    });
    setPostDataWrangling({
        ...postDataWrangling,
        he_wran_uno_wrap: wrap_global,
        oth_wran_uno_wrap: wrap_global,
    });
    setPostDataSpecialEffects({
        ...postDataSpecialEffects,
        fx_sup_uno_wrap: wrap_global,
        ass_fx_uno_wrap: wrap_global,
        ot_fx_l_uno_wrap: wrap_global,
    });
    setPostDataWardrobe({
        ...postDataWardrobe,
        cos_des_uno_wrap: wrap_global,
        as_cos_des_uno_wrap: wrap_global,
        he_war_uno_wrap: wrap_global,
        ot_war_uno_wrap: wrap_global,
        tru_cos_uno_wrap: wrap_global,
        war_as_uno_wrap: wrap_global,
        train_uno_wrap: wrap_global,
        war_coor_uno_wrap: wrap_global,
    });
    setPostDataMakeup({
        ...postDataMakeup,
        mak_head_uno_wrap: wrap_global,
        key_mak_uno_wrap: wrap_global,
        mak_art_uno_wrap: wrap_global,
        key_hair_uno_wrap: wrap_global,
        hair_uno_wrap: wrap_global,
        oth_mak_uno_wrap: wrap_global,
        sfx_mak_uno_wrap: wrap_global,
        mak_train_uno_wrap: wrap_global,
    });
    setPostDataCamera({
        ...postDataCamera,
        dop_uno_wrap: wrap_global,
        cam_op_uno_wrap: wrap_global,
        cam_ac1_uno_wrap: wrap_global,
        cam_ac2_uno_wrap: wrap_global,
        dit_uno_wrap: wrap_global,
        stead_uno_wrap: wrap_global,
        cam_pa_uno_wrap: wrap_global,
        dro_pil_uno_wrap: wrap_global,
        ot_cam_uno_wrap: wrap_global,
    });
    setPostDataElectric({
        ...postDataElectric,
        gaf_uno_wrap: wrap_global,
        b_boy_uno_wrap: wrap_global,
        elec_uno_wrap: wrap_global,
        gen_op_uno_wrap: wrap_global,
        ot_el_uno_wrap: wrap_global,
        d_elec_uno_wrap: wrap_global,
    });

  };