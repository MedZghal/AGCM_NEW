<<<<<<< HEAD
import {Component, OnInit, ViewEncapsulation,EventEmitter} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BackendService} from '../backend.service';
import {LocalStorageService} from 'angular-web-storage';
import {Router} from '@angular/router';

=======
import {Component, OnInit, ViewEncapsulation, EventEmitter, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BackendService} from '../backend.service';
import {LocalStorageService} from 'angular-web-storage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatepickerOptions } from 'ng2-datepicker';
import {MomentPipe} from '../moment.pipe';
import * as frLocale from 'date-fns/locale/fr';
import * as moment from 'moment';
import {ToastrService} from 'ngx-toastr';
>>>>>>> second commit

declare const Backbone: any;
declare const Backgrid: any;
declare const _: any;
<<<<<<< HEAD

=======
declare const $:any;
>>>>>>> second commit

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class PatientComponent implements OnInit {

<<<<<<< HEAD
  date = new Date();

  medic :any ;
  orderForm: FormGroup;
  items: FormArray;
  consultsLoading = false;
=======
  options: DatepickerOptions = {
    minYear: 1970,
    displayFormat: ' DD/MM/YYYY',
    barTitleFormat: 'MMMM YYYY',
    locale: frLocale,
  };

  InputEtat:boolean = true;
  date = new Date();
  dateNaiss = new Date();
  dateValid = new Date();
  dateValidApci = new Date();
  territories:any;

  loadData:boolean =false;

  villes:any[];
  gendre:any[]=[
    {value:'Homme'},
    {value:'Femme'}
    ];
  AutAssur:any[]=[
    {name:'COAMR',img:'./assets/img/ag42-logo_assurance_comar.png'},
    {name:'STEG',img:'./assets/img/steg_.png'},
    {name:'MAGHREBIA',img:'./assets/img/MAGHREBIA.png'},
    {name:'AMEN',img:'./assets/img/amen.png'}];
  AutAssurSelected:any;
  gouvernorats:any[];
  medic :any ;
  villeid:any;
  gouvernoratid:any;
  PatientForm: FormGroup;
  items: FormArray;
  consultsLoading = false;
  viewMode = 'consult';
  patient:any = null;
  CollapseAuttrVal:boolean=false;
  CollapseAssurCnamVal:boolean=false;
  CollapseAPCIVal:boolean=false;
  parametres :any;
>>>>>>> second commit

  constructor(private formBuilder: FormBuilder,
              public service:BackendService,
              public local: LocalStorageService,
<<<<<<< HEAD
              private router: Router) {
=======
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) {
>>>>>>> second commit

  }

  ngOnInit() {
<<<<<<< HEAD
=======

    this.parametres = this.local.get("param");
    this.PatientForm = this.formBuilder.group({
      nom :['', [Validators.required, Validators.minLength(3)]],
      prenom :['', [Validators.required]],
      Fiche :[''],
      dateNaiss :['', [Validators.required]],
      sexe :[null, [Validators.required]],
      situation :[null, [Validators.required]],
      age :[1, [Validators.required]],
      poid :['', [Validators.required]],
      profession :[''],
      adresse :['', [Validators.required]],
      ville :[null, [Validators.required]],
      gouvernorat:[null, [Validators.required]],
      fixe :['', [Validators.minLength(8)]],
      gsm :['', [Validators.minLength(8)]],
      AutAssur :[null],
      code_cnam:[''],
      nom_med:[''],
      rang:[''],
      ty_assur:[null],
      date_valid:[''],
      qual_assur:[null],
      id_unique:[''],
      regime_aff:[null],
      code_apci:[''],
      ty_apci:[null],
      date_valid_apci:[''],
      form_apci: this.formBuilder.group({
        items: this.formBuilder.array([ this.createItem(false) ])
      })
    });


    this.viewMode = this.local.get('mode');
    //this.viewMode = this.route.snapshot.paramMap.get('mode');
    console.log(this.viewMode);

>>>>>>> second commit
    this.local.set("Consult",'false');
    this.createBackGrid();

    this.consultsLoading =true;
<<<<<<< HEAD
    this.service.get('/ListMedic').subscribe(
      data =>{
        this.medic =data;
=======
    this.service.get('ListMedic').subscribe(
      data =>{
        this.medic = data;
>>>>>>> second commit
        this.consultsLoading =false;
      },
      error =>{

      }
    );

<<<<<<< HEAD
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array([ this.createItem() ])
    });
  }

=======
    this.service.get('GetListVilleDistinct').subscribe(
      (data:any) =>{
        this.villes = data;
      },
      error =>{

      }
    );

  }
>>>>>>> second commit

  to_DatesTRING(date){
    return (new Date(date)).toLocaleDateString();
  }

<<<<<<< HEAD
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: [null,Validators.required],
      Posologie0: ['',Validators.required],
      Posologie1: [null,Validators.required],
      Posologie2: ['',Validators.required],
      Posologie3: [null,Validators.required],
      Posologie4: ['',Validators.required],
      Posologie5: [null,Validators.required]
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
=======
  get controls() { return this.PatientForm.controls; }

  createItem(validator): FormGroup {
    let item :any =null;
    if(validator)
      item = this.formBuilder.group({
        name: [null ,[Validators.required]],
        Posologie0: ['',[Validators.required]],
        Posologie1: [null,[Validators.required]],
        Posologie2: ['',[Validators.required]],
        Posologie3: [null,[Validators.required]],
        Posologie4: ['',[Validators.required]],
        Posologie5: [null,[Validators.required]]
      });
    else
      item = this.formBuilder.group({
      name: [null],
      Posologie0: [''],
      Posologie1: [null],
      Posologie2: [''],
      Posologie3: [null],
      Posologie4: [''],
      Posologie5: [null]
    });

    return item;
  }

  addItem(): void {
    this.items = this.PatientForm.get('form_apci').get('items') as FormArray;
    this.items.push(this.createItem(true));
>>>>>>> second commit
    console.log(this.items.value);
  }

  deleteRow(index: number) {
    // control refers to your formarray
<<<<<<< HEAD
    this.items = this.orderForm.get('items') as FormArray;
=======
    this.items = this.PatientForm.get('form_apci').get('items') as FormArray;
>>>>>>> second commit
    // remove the chosen row
    this.items.removeAt(index);
  }

<<<<<<< HEAD
  get formData() { return <FormArray>this.orderForm.get('items'); }
=======
  get formData() { return <FormArray>this.controls.form_apci.get('items'); }
>>>>>>> second commit

  createBackGrid() {

    let cls = this;

    let Territory = Backbone.Model.extend({});
    let Territories = Backbone.PageableCollection.extend({
      model: Territory,
<<<<<<< HEAD
      url: "https://medproapp.ddns.net/Clinique/PatientByCodMed?codeMedTrit=1",
=======
      url: "https://medproapp.ddns.net/Clinique/PatientByCodMed?codeMedTrit="+this.parametres.codeMedTrit,
>>>>>>> second commit
      mode: "client",
      state: {
        firstPage: 1,
        pageSize: 9
      },
      queryParams: {
        totalPages: null,
        totalRecords: null,
        sortKey: "sort"
      },

      parseState: function (resp, queryParams, state, options) {
        return {totalRecords: resp.total_count};
      }
    });

<<<<<<< HEAD
    let territories = new Territories();
=======
    cls.territories = new Territories();
>>>>>>> second commit


    let partage;
    let columns = [
      {
        name: "sexe",
        label: "",
        editable: false,
        cell: Backgrid.Cell.extend({
          className: "image-cell",

          render: function () {
            this.$el.empty();
            this.$el.html(this.renderImage(this.model));
            this.delegateEvents();
            return this;
          },

          renderImage: function (model) {
//                partage = GetListPatientByFichPatient(paramater.codeMedTrit.codeMedTrit,this.model.get("numFichPatient"));
            let data = this.model.get("sexe");
            let datenaiss = this.model.get("datenaiss");
            let age = 20;
            // GetAge(datenaiss);
            let IMG = "";
            if (data === "Femme") {

              if (age < 12)
                IMG = '<img src="./assets/img/avatars/icon_girl-512.png" width="40" alt="" />';
              else if (age >= 12 && age <= 20)
                IMG = '<img src="./assets/img/avatars/girl.png" width="40" alt="" />';
              else if (age > 20 && age <= 50)
                IMG = '<img src="./assets/img/avatars/034-user-6.png" width="40" alt="" />';
              else
                IMG = '<img src="./assets/img/avatars/019-social-1.png" width="40" alt="" />';
            }
            else {
              if (age < 12)
                IMG = '<img src="./assets/img/avatars/icon_boy-512.png" width="40" alt="" />';
              else if (age >= 12 && age <= 20)
                IMG = '<img src="./assets/img/avatars/boy.png" width="40" alt="" />';
              else if (age > 20 && age <= 50)
                IMG = '<img src="./assets/img/avatars/043-man-1.png" width="40" alt="" />';
              else
                IMG = '<img src="./assets/img/avatars/042-man-2.png" width="40" alt="" />';
            }
            return IMG;
          }

        })

      },
      {
        name: "numFichPatient", // The key of the model attribute
        label: "Patient", // The name to display in the header
        editable: false, // By default every cell in a column is editable, but ID shouldn't be
        // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
        cell: Backgrid.Cell.extend({
          render: function (e) {
            let cnam = "", apci = "", AutreAurr = "";
            this.$el.empty();
            let nom = this.model.get("numFichPatient");

            if (this.model.get("assurCnam") !== null)
              cnam = "<img src='./assets/img/cnam.png' style='width: 28px;' >&nbsp;";
            if (this.model.get("codeApci") !== "")
              apci = "<img src='./assets/img/apci_logo_600w.png' style='width: 28px;' >&nbsp;";
            if (this.model.get("autreAssur") !== "")
<<<<<<< HEAD
              // AutreAurr = "<img src='./assets/img/apci_logo_600w.png' style='width: 28px;' >&nbsp;";
=======
>>>>>>> second commit
              AutreAurr = cls.AutreAssurImg(this.model.get("autreAssur"));

            this.$el.html(nom + "<br/> " + cnam + " " + apci + " " + AutreAurr);

            return this;
          }
        })
      },
      {
        name: "",
        label: "Name et Prénom",
        editable: false,
        // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
        cell: Backgrid.StringCell.extend({
          render: function (e) {

            this.$el.empty();
            let nom = this.model.get("nom");
            let prenom = this.model.get("prenom");
            this.$el.append(nom + " " + prenom);

            return this;
          }
        }) // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
      },
      {
        name: "assurCnam.identUnique",
        label: "Identifiant Unique",
        editable: false,

        // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
        cell: Backgrid.StringCell.extend({
          render: function (e) {
            let assurCNAM = this.model.get("assurCnam");
            this.$el.empty();
            if (assurCNAM !== null)
              this.$el.append("N° " + assurCNAM.identUnique.toString());
            else
              this.$el.append("");

            return this;
          }
        })
      },
      {
        name: "datenaiss",
        label: "Date Naissance",
        editable: false,
        cell: Backgrid.StringCell.extend({
          className: 'date-cell',
          render: function (e) {

            this.$el.empty();
            let date = this.model.get("datenaiss");
            this.$el.append((new Date(date)).toLocaleDateString());

            return this;
          }
        })
      },
      {
        name: "",
        label: "Age",
        editable: false,

        // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
        cell: Backgrid.StringCell.extend({
          render: function (e) {

            this.$el.empty();
            let DateNaiss = this.model.get("datenaiss");
            let age = 20;
            if (age === 0)
              age++;

            this.$el.append(age + " ans");

            return this;
          }

        })
      },
      {
        name: "poids",
        label: "Poids",
        editable: false,

        // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
        cell: Backgrid.StringCell.extend({
          render: function (e) {

            this.$el.empty();
            this.$el.append(this.model.get("poids") + " Kg");

            return this;
          }
        })
      },
      {
        name: "adresse",
        label: "Adresse",
        editable: false,

        // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
        cell: Backgrid.StringCell.extend({
          className: 'string-cell-2'

        })
      },
      {
        name: "fixe",
        label: "Fixe",
        editable: false,

        // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
        cell: Backgrid.StringCell.extend({
          className: 'string-cell-2'

        })
      },
      {
        name: "gsm",
        label: "Gsm",
        editable: false,

        // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
        cell: Backgrid.StringCell.extend({
          className: 'string-cell-2'

        })
      },
      {
        name: "ville.ville",
        label: "Ville",
        editable: false,
        cell: Backgrid.StringCell.extend({
          className: 'string-cell-2'
        })
      },
      {
        name: "",
        label: "Action",
        editable: false,
        // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like id above, or a string
        cell: Backgrid.Cell.extend({
          className: 'action-cell',
          //template: _.template('<ul class="social-icons"> <li><a id="edit" data-tooltip="tooltip" title="" href="javascript:void(0);" data-placement="top"  data-original-title="Modifier" class="tooltips myspace"> </a> </li><li><a id="Consult" href="javascript:;" data-original-title="Conultation" class="last-fm"> </a></li><li><a id="delete" href="javascript:;" data-original-title="Supprimer" class="dropbox"> </a></li><li><a id="File" href="#" data-original-title="File" class="last-fm"> </a></li><li><a id="Partage" href="#" data-original-title="Partage" class="last-fm"> </a></li></ul>'),
//                template: _.template('<ul class="action-icons"> <li><a id="edit"  data-tooltip="tooltip" title="Modifier" data-placement="top"   class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="./assets/img/userM.png" ></i></a></li><li><a id="Consult" data-tooltip="tooltip" title="Observation" data-placement="top"  class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="./assets/img/userC.png" ></i></a></li><li><a id="delete" data-tooltip="tooltip" title="Supprimer" data-placement="top" class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="./assets/img/userDel.png" ></i></a></li><li><a id="File" data-tooltip="tooltip" title="File" data-placement="top"  class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="./assets/img/userF.png" ></i></a></li><li><a id="Partage" data-tooltip="tooltip" title="Partager" data-placement="top"  class="btn btn-icon-only red tooltips"><i ><img style=" margin-top: -4px;width:25px;" src="./assets/img/userP.png" ></i></a></li></ul>'),
          template: _.template('<div class="btn-group">' +
            '<button class="btn btn-primary dropdown-toggle" data-toggle="dropdown">' +
            '<i class="zmdi zmdi-rotate-right zmdi-hc-spin"></i> <span class="caret"></span>' +
            '</button>' +
            '<ul class="dropdown-menu dropdown-menu-right pullDown">' +
<<<<<<< HEAD
            '<li><a id="Consult" ><i ><img class="iconMenu" src="./assets/img/ConsultIcon.png" ></i><div class="spanMenu"> Consultation</div></a></li>' +
=======
            '<li><a id="Consult" data-toggle="modal" data-target="#patientModal" ><i ><img class="iconMenu" src="./assets/img/ConsultIcon.png" ></i><div class="spanMenu"> Consultation</div></a></li>' +
>>>>>>> second commit
            '<li><a id="Archive" ><i ><img class="iconMenu" src="./assets/img/userC.png" ></i><div class="spanMenu"> Archive</div></a></li>' +
            '<li><a id="File" data-toggle="modal" data-target="#UploadModal" ><i ><img class="iconMenu" src="./assets/img/userF.png" ></i><div class="spanMenu"> Piece jointe</div></a></li>' +
            '<li><a id="Partage" ><i ><img class="iconMenu" src="./assets/img/userP.png" ><div class="spanMenu"> Partager dossier</div></i></a></li>' +
            '<li class="divider"></li>' +
            '<li><a id="edit" ><i ><img class="iconMenu" src="./assets/img/userM.png" ></i><div class="spanMenu"> Modifier</div></a></li>' +
<<<<<<< HEAD
            '<li><a id="delete" ><i ><img class="iconMenu" src="./assets/img/userDel.png" ><div class="spanMenu"> Supprimer</div></i></a></li>' +
=======
            '<li><a id="delete" data-toggle="modal" data-target="#patientSuppModal" ><i ><img class="iconMenu" src="./assets/img/userDel.png" ><div class="spanMenu"> Supprimer</div></i></a></li>' +
>>>>>>> second commit
            '<li class="divider"></li>' +
            '<li><a id="labo" ><i ><img class="iconMenu" src="./assets/img/bloc.png" ><div class="spanMenu"> Demande labo</div></i></a></li>' +
            '<li><a id="Radio" ><i ><img class="iconMenu" src="./assets/img/bilan.png" ><div class="spanMenu"> Demande Radio</div></i></a></li>' +
            '<li><a id="dicompacs" ><i ><img class="iconMenu" src="./assets/img/radio.png" ><div class="spanMenu"> Demande Pacs </div></i></a></li>' +
            '</ul></div>'),

          events: {
            "click a#edit": "ClickEdit",
            "click a#delete": "ClickDelete",
            "click a#Consult": "ClickConsult",
            "click a#File": "FileEdit",
            "click a#Partage": "FilePartage",
            "click a#Archive": "ArchiveConsult",
            "click a#dicompacs": "DicomPacs"
          },
          render: function () {
            let numpt = this.model.get("numFichPatient");
            this.$el.html(this.template());

            this.delegateEvents();
            return this;
          },
          DicomPacs: function () {

          },
          FilePartage: function () {
          },
          ClickEdit: function () {
<<<<<<< HEAD

=======
            let numpt = this.model.get("numFichPatient");
            cls.patient=this.model.attributes;
            cls.viewMode = 'update';
            cls.SetFormValues();
>>>>>>> second commit
          },
          ArchiveConsult: function () {
            let patient = this.model.get("numFichPatient");
            cls.local.set("patient",patient);
            cls.local.set("Consult",'true');
            cls.router.navigate(['Archive_Medical']);
          },
          FileEdit: function () {
            let patient = this.model.get("numFichPatient");
            cls.local.set('patient',patient);
            let initialPreviews=[];
            let initialPreviewsConfig=[];

            $.ajax({
              type: "GET",
              url: "https://medproapp.ddns.net/Clinique/ViewAllFileByPatient?num_patient="+patient,
              success: function (response) {
                initialPreviews=[];
                initialPreviewsConfig=[];
                for(let f of response){
                  let conditionImg = ['png','jpg','jpeg','gif','x-icon'];
                  let conditionVideo = ['mp4','wav','3gpp'];
                  let conditionOffice = ['doc','docx','xls','ppt','pptx','vnd.openxmlformats-officedocument.presentationml.presentation','msword','vnd.ms-powerpoint'];
                  let conditionGdocs = ['tif','ai','eps'];
                  let conditionOthers = ['dicom','octet-stream'];
                  let type ;
                  let switchVal =f[2].toString().split('/')[1];
                  switch (switchVal) {
                    case (conditionImg.includes(switchVal)?switchVal:null) : type = 'image' ;
                      break;
                    case 'pdf' :  type = 'pdf' ;
                      break;
                    case 'plain' :  type = 'text' ;
                      break;
                    case 'html' :  type = 'html' ;
                      break;
                    case (conditionVideo.includes(switchVal)?switchVal:null) :  type = 'video' ;
                      break;
                    case (conditionOffice.includes(switchVal)?switchVal:null) :  type = 'office' ;
                      break;
                    case (conditionGdocs.includes(switchVal)?switchVal:null):  type = 'gdocs' ;
                      break;
                    case (conditionOthers.includes(switchVal)?switchVal:null):  type = 'other' ;
                      break;

                  }

                  if(type != 'other')
                    initialPreviewsConfig.push({
                      key:f[0],
                      filename :f[1],
                      type: type,
                      caption :f[1],
                      url :'https://medproapp.ddns.net/Clinique/DeleteFile',
                      extra: {fileId: f[0]}
                    });
                  else
                    initialPreviewsConfig.push({
                      key:f[0],
                      filename :f[1],
                      caption :f[1],
                      url :'https://medproapp.ddns.net/Clinique/DeleteFile',
                      extra: {fileId: f[0]}
                    });

                  initialPreviews.push('https://medproapp.ddns.net/Clinique/ViewFile/'+f[0]);
                }
                cls.initfiles(initialPreviews,initialPreviewsConfig,patient);
                // process response
              },
              error: function (error) {
                console.log(error);
                // process error
              }
            });


          },
          ClickConsult: function () {

          },
          ClickDelete: function () {
<<<<<<< HEAD

=======
            let numpt = this.model.get("numFichPatient");
            cls.patient=this.model.attributes;
>>>>>>> second commit
          }

        })


      }
    ];


    let FocusableRow = Backgrid.Row.extend({
      highlightColor: '#BAD2E4',
      events: {
        click: 'Click',
        mouseover: 'mouseovercard'
      },
      rowFocused: function () {
        $('tbody.table-editable tr').removeAttr('style');
        this.$el.css('background-color', this.highlightColor);
      },
      Click: function () {
        let patient = this.model.get("numFichPatient");
        console.log(patient);
      },
      mouseovercard: function () {
        console.log('hello world');
        /*let template='<button class="btn btn-default btn-xs item_button_remove"><span class="glyphicon glyphicon-trash"></span> <span data-i18n="Hide">Hide</span></button>';
          this.$el.append(template);*/
      }
    });

<<<<<<< HEAD
    /*let ScrollableBody = Backgrid.Body.extend({
  // maybe you'd like to implement table body that is a block element so you can detect scroll events,
  // and may be implement fixed header (wink wink) https://github.com/wyuenho/backgrid/issues/4
});*/
// Initialize a new Grid instance
    let grid = new Backgrid.Grid({

      columns: columns,
      collection: territories,
=======
    let grid = new Backgrid.Grid({

      columns: columns,
      collection: cls.territories,
>>>>>>> second commit
      //row: FocusableRow,
//        className: 'table table-bordered  table-editable no-margin table-hover full-height-content full-height-content-scrollable'
      className: 'backgrid table-hover table-bordered'
      //body: window.Backgrid.SummedColumnBody.extend({ columnsToSum: ['name', 'value'] })
    });

    let patientSideFilter = new Backgrid.Extension.ClientSideFilter({

<<<<<<< HEAD
      collection: territories,
=======
      collection: cls.territories,
>>>>>>> second commit
      placeholder: "Recherche Par Patient",
      id: "rechercher",
      fields: ['numFichPatient', 'nom', 'prenom', 'datenaiss.year', 'adresse', 'ville.ville'],
      wait: 150
    });
    // $(patientSideFilter.el).css({float: "left", margin: "0 0 10px 0"});

    $("#contents").before(patientSideFilter.render().el);
    document.getElementById("search").focus();

// Render the grid and attach the root to your HTML document
    $("#contents").append(grid.render().el);

    let paginator = new Backgrid.Extension.Paginator({
<<<<<<< HEAD
      collection: territories
=======
      collection: cls.territories
>>>>>>> second commit
    });
    $("#contents").append(paginator.render().el);


    console.log(grid.collection.state);
<<<<<<< HEAD
    console.log(territories);
    territories.fetch({reset: true});
    console.log(territories.fullCollection.length);
=======
    console.log(cls.territories);
    cls.territories.fetch({reset: true});
    console.log(cls.territories.fullCollection.length);
>>>>>>> second commit
  }


  initfiles(initialPreviews,initialPreviewsConfig,patient) {

    $("#file").fileinput('destroy');
    $("#file").fileinput({
      initialPreview: initialPreviews,
      initialPreviewDownloadUrl: 'https://medproapp.ddns.net/Clinique/downloadFile/{key}',
      initialPreviewConfig: initialPreviewsConfig,
      initialPreviewAsData: true,
      browseOnZoneClick: true,
      language: 'fr', // utilise le js de traduction
      overwriteInitial: false,
      purifyHtml: true,
      browseClass: "btn btn-primary btn-block",
      uploadUrl: "https://medproapp.ddns.net/Clinique/uploadMultipleFiles",
      uploadExtraData: {
        num_patient: patient
      },
      validateInitialCount: true,
      preferIconicPreview: true,
      previewFileIconSettings: {
        'doc': '<i class="fa fa-file-word text-primary"></i>',
        'xls': '<i class="fa fa-file-excel text-success"></i>',
        'ppt': '<i class="fa fa-file-powerpoint text-danger"></i>',
        'jpg': '<i class="fas fa-file-image text-danger"></i>',
        'gif': '<i class="fas fa-file-image text-muted"></i>',
        'png': '<i class="fas fa-file-image text-primary"></i>',
        'pdf': '<i class="fa fa-file-pdf text-danger"></i>',
        'zip': '<i class="fa fa-file-archive text-muted"></i>',
        'htm': '<i class="fa fa-file-code text-info"></i>',
        'txt': '<i class="fa fa-file-text text-info"></i>',
        'mov': '<i class="fa fa-file-movie text-warning"></i>',
        'mp3': '<i class="fa fa-file-audio text-warning"></i>',
      },
      previewFileExtSettings: {
        'doc': function (ext) {
          return ext.match(/(doc|docx)$/i);
        },
        'xls': function (ext) {
          return ext.match(/(xls|xlsx)$/i);
        },
        'ppt': function (ext) {
          return ext.match(/(ppt|pptx)$/i);
        },
        'zip': function (ext) {
          return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
        },
        'htm': function (ext) {
          return ext.match(/(php|js|css|htm|html)$/i);
        },
        'txt': function (ext) {
          return ext.match(/(txt|ini|md)$/i);
        },
        'mov': function (ext) {
          return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
        },
        'mp3': function (ext) {
          return ext.match(/(mp3|wav)$/i);
        },
      }
    });
    $("#file").fileinput('enable');

  }


  AutreAssurImg(Assur){
    var AutreAurr;
    if(Assur === "STEG")
      AutreAurr ="<img src='./assets/img/steg_.png' style='width: 35px;' >";
    else
    if(Assur === "COMAR")
      AutreAurr ="<img src='./assets/img/ag42-logo_assurance_comar.png' style='width: 35px; height:16px;' >";
    else
    if(Assur === "MAGHREBIA")
      AutreAurr ="<img src='./assets/img/MAGHREBIA.png' style='width: 55px; height:20px;' >";
    else
      AutreAurr ="<img src='./assets/img/amen.png' style='width: 35px; height:20px;' >";

    return AutreAurr;
  };

<<<<<<< HEAD
=======

  EngPatient(){
    let formData =this.PatientForm.value;

    let dataPatient = new FormData();
    let dataAssur = new FormData();

    dataPatient.append('nom',formData.nom);
    dataPatient.append('pr',formData.prenom);
    dataPatient.append('sexe',formData.sexe);
    dataPatient.append('dnaiss',formData.dateNaiss);
    dataPatient.append('sut_fam',formData.situation);
    dataPatient.append('prof',formData.profession);
    dataPatient.append('adr',formData.adresse);
    dataPatient.append('fixe',formData.fixe);
    dataPatient.append('tel',formData.gsm);
    dataPatient.append('poid',formData.poid);
    dataPatient.append('codVill',formData.gouvernorat);
    dataPatient.append('fichpapier',formData.Fiche);
    dataPatient.append('codeMedTrit',this.parametres.codeMedTrit);

    if(!this.CollapseAuttrVal)
      dataPatient.append('AutreAssur','');
    else
      dataPatient.append('AutreAssur',formData.AutAssur);

    if(!this.CollapseAPCIVal){
      dataPatient.append('code_apci','');
      dataPatient.append('type_apci','');
      dataPatient.append('date_valid',formData.date_valid_apci);
    }else{
      dataPatient.append('code_apci',formData.code_apci);
      dataPatient.append('type_apci',formData.ty_apci);
      dataPatient.append('date_valid',formData.date_valid_apci);
    }

    if(this.viewMode !== 'update'){

      if(!this.CollapseAssurCnamVal){
        dataPatient.append('AssurCnam','0');

        this.service.post('AjPatient',dataPatient).subscribe(
          data => {
            this.territories.fetch({reset: true});
            this.toastr.success( 'Patient ajouté avec succès','Gestion des Patients');
            console.log(data);
          },
          err =>{
            this.toastr.error(err.message, 'Erreur');
          }
        );

      }else{
        dataAssur.append('regime_affi',formData.regime_aff);
        dataAssur.append('qualite',formData.qual_assur);
        dataAssur.append('ident_unique',formData.id_unique);
        dataAssur.append('rang_Assur',formData.rang);
        dataAssur.append('date_valid',formData.date_valid);
        dataAssur.append('type',formData.ty_assur);
        dataAssur.append('nom_med',formData.nom_med);
        let codeCnam = formData.code_cnam.substr(0,2) +"/"+ formData.code_cnam.substr(2,8)+"/"+formData.code_cnam.substr(10,2);
        dataAssur.append('codecnam',codeCnam);

        this.service.post('AjAssuranceCNAM',dataAssur).subscribe(
          (dataAssur :any) => {
            this.toastr.success( 'Assurance Cnam ajouté avec succès','Gestion des Patients');
            dataPatient.append('AssurCnam',dataAssur.numAssur);

            this.service.post('AjPatient',dataPatient).subscribe(
              (dataRes :any)=> {
                if(this.CollapseAPCIVal){
                  let groupItems:any = (this.formData as FormArray).controls;
                  for(let item of groupItems){
                    let Apcidata = new FormData();
                    Apcidata.append('numPatient',dataRes.numFichPatient);
                    Apcidata.append('numMedic',item.controls['name'].value.numMedic);
                    let descpMedic = item.controls['Posologie0'].value + " " + item.controls['Posologie1'].value + " * " + item.controls['Posologie2'].value + " " + item.controls['Posologie3'].value + " / " + item.controls['Posologie4'].value + " * " + item.controls['Posologie5'].value;
                    Apcidata.append('description',descpMedic);

                    this.service.post('AjTraitApci',Apcidata).subscribe(
                      data =>{
                        console.log(data);
                      },err =>{

                      }
                    )
                  }
                }
                this.territories.fetch({reset: true});
                this.toastr.success( 'Patient ajouté avec succès','Gestion des Patients');
                console.log(dataRes);
              },
              err =>{
                this.toastr.error(err.message, 'Erreur');
              }
            );
            console.log(dataAssur);
          },
          err =>{
            this.toastr.error(err.message, 'Erreur');
          }
        );
    }

    }else
          if(this.patient != null){

            dataPatient.append('num_fich_patient',this.patient.numFichPatient);


            if(!this.CollapseAssurCnamVal){
              dataPatient.append('AssurCnam','0');

              this.service.post('UpdatePatient',dataPatient).subscribe(
                data => {
                  this.territories.fetch({reset: true});
                  this.toastr.success( 'Patient ajouté avec succès','Gestion des Patients');
                  console.log(data);
                },
                err =>{
                  this.toastr.error(err.message, 'Erreur');
                }
              );

            }else{
              dataAssur.append('regime_affi',formData.regime_aff);
              dataAssur.append('qualite',formData.qual_assur);
              dataAssur.append('ident_unique',formData.id_unique);
              dataAssur.append('rang_Assur',formData.rang);
              dataAssur.append('date_valid',formData.date_valid);
              dataAssur.append('type',formData.ty_assur);
              dataAssur.append('nom_med',formData.nom_med);
              let codeCnam = formData.code_cnam.substr(0,2) +"/"+ formData.code_cnam.substr(2,8)+"/"+formData.code_cnam.substr(10,2);
              dataAssur.append('codecnam',codeCnam);

              this.service.post('UpdateAssuranceCNAM',dataAssur).subscribe(
                (dataAssur :any) => {
                  this.toastr.success( 'Assurance Cnam ajouté avec succès','Gestion des Patients');
                  dataPatient.append('AssurCnam',dataAssur.numAssur);

                  this.service.post('UpdatePatient',dataPatient).subscribe(
                    (dataRes :any)=> {

                      if(this.CollapseAPCIVal){
                        let groupItems:any = (this.formData as FormArray).controls;

                        let paramDelTarit ={
                          numPatient : this.patient.numFichPatient
                        };

                        this.service.post('DeleteTraitApciByPatient',paramDelTarit).subscribe(
                          data =>{

                            for(let item of groupItems){
                              let Apcidata = new FormData();
                              Apcidata.append('numPatient',dataRes.numFichPatient);
                              Apcidata.append('numMedic',item.controls['name'].value.numMedic);
                              let descpMedic = item.controls['Posologie0'].value + " " + item.controls['Posologie1'].value + " * " + item.controls['Posologie2'].value + " " + item.controls['Posologie3'].value + " / " + item.controls['Posologie4'].value + " * " + item.controls['Posologie5'].value;
                              Apcidata.append('description',descpMedic);

                              this.service.post('AjTraitApci',Apcidata).subscribe(
                                data =>{
                                  console.log(data);
                                },err =>{

                                }
                              )
                            }

                          },err =>{

                          }
                        );


                      }
                      this.territories.fetch({reset: true});
                      this.toastr.success( 'Patient ajouté avec succès','Gestion des Patients');
                      console.log(dataRes);
                    },
                    err =>{
                      this.toastr.error(err.message, 'Erreur');
                    }
                  );
                  console.log(dataAssur);
                },
                err =>{
                  this.toastr.error(err.message, 'Erreur');
                }
              );

            }

          }

  }

  CollapseAuttr(){

    // this.CollapseToggle('#collapseAssurance');
    $("#collapseAssurance").toggle();
    if(!this.CollapseAuttrVal){
      console.log('open');
      this.CollapseAuttrVal = true;
      this.controls.AutAssur.setValidators([Validators.required]);
    }else{
      console.log('close');
      this.CollapseAuttrVal = false;
      this.controls.AutAssur.setValidators(null);
    }

    this.controls.AutAssur.updateValueAndValidity();
  }

  CollapseAssurCnam(){

    // this.CollapseToggle('#collapseAssur');
    $("#collapseAssur").toggle();
    if(!this.CollapseAssurCnamVal){
      console.log('open');
      this.CollapseAssurCnamVal=true;
      this.controls.code_cnam.setValidators([Validators.required, Validators.minLength(12)]);
      this.controls.nom_med.setValidators([Validators.required]);
      this.controls.rang.setValidators([Validators.required, Validators.minLength(2)]);
      this.controls.ty_assur.setValidators([Validators.required]);
      this.controls.date_valid.setValidators([Validators.required]);
      this.controls.qual_assur.setValidators([Validators.required]);
      this.controls.id_unique.setValidators([Validators.required, Validators.minLength(10)]);
      this.controls.regime_aff.setValidators([Validators.required]);
    }else{
      console.log('close');
      this.CollapseAssurCnamVal=false;
      this.controls.code_cnam.setValidators(null);
      this.controls.nom_med.setValidators(null);
      this.controls.rang.setValidators(null);
      this.controls.ty_assur.setValidators(null);
      this.controls.date_valid.setValidators(null);
      this.controls.qual_assur.setValidators(null);
      this.controls.id_unique.setValidators(null);
      this.controls.regime_aff.setValidators(null);
    }

    this.controls.code_cnam.updateValueAndValidity();
    this.controls.nom_med.updateValueAndValidity();
    this.controls.rang.updateValueAndValidity();
    this.controls.ty_assur.updateValueAndValidity();
    this.controls.date_valid.updateValueAndValidity();
    this.controls.qual_assur.updateValueAndValidity();
    this.controls.id_unique.updateValueAndValidity();
    this.controls.regime_aff.updateValueAndValidity();
  }

  CollapseAPCI(){

    // this.CollapseToggle('#collapseapci');
    $("#collapseapci").toggle();
    let groupItems:any = (this.formData as FormArray).controls;

    if(!this.CollapseAPCIVal){
      console.log('open');
      this.CollapseAPCIVal=true;
      this.controls.code_apci.setValidators([Validators.required, Validators.minLength(4)]);
      this.controls.date_valid_apci.setValidators([Validators.required]);
      this.controls.ty_apci.setValidators([Validators.required]);
      for(let item of groupItems){
        item.controls['name'].setValidators([Validators.required]);
        item.controls['Posologie0'].setValidators([Validators.required]);
        item.controls['Posologie1'].setValidators([Validators.required]);
        item.controls['Posologie2'].setValidators([Validators.required]);
        item.controls['Posologie3'].setValidators([Validators.required]);
        item.controls['Posologie4'].setValidators([Validators.required]);
        item.controls['Posologie5'].setValidators([Validators.required]);
      }

    }else{
      console.log('close');
      this.CollapseAPCIVal=false;
      this.controls.code_apci.setValidators(null);
      this.controls.date_valid_apci.setValidators(null);
      this.controls.ty_apci.setValidators(null);

      for(let item of groupItems){
        item.controls['name'].setValidators(null);
        item.controls['Posologie0'].setValidators(null);
        item.controls['Posologie1'].setValidators(null);
        item.controls['Posologie2'].setValidators(null);
        item.controls['Posologie3'].setValidators(null);
        item.controls['Posologie4'].setValidators(null);
        item.controls['Posologie5'].setValidators(null);
      }

    }

    this.controls.code_apci.updateValueAndValidity();
    this.controls.date_valid_apci.updateValueAndValidity();
    this.controls.ty_apci.updateValueAndValidity();
    for(let item of groupItems){
      item.controls['name'].updateValueAndValidity();
      item.controls['Posologie0'].updateValueAndValidity();
      item.controls['Posologie1'].updateValueAndValidity();
      item.controls['Posologie2'].updateValueAndValidity();
      item.controls['Posologie3'].updateValueAndValidity();
      item.controls['Posologie4'].updateValueAndValidity();
      item.controls['Posologie5'].updateValueAndValidity();
    }
  }

  onChange($event) {
    console.log($event);

    if($event != null){

      let param ={
        ville :$event
      };

      this.service.get('GetListGouvernorat',param).subscribe(
        (data:any) =>{
          this.gouvernoratid = null;
          this.gouvernorats = data;
        },
        err =>{

        }
      )

    }

  }

  GetAge($event){
    console.log(new MomentPipe().transform($event,"L"));
    let a= moment($event);
    let age = moment(this.date).diff(a,'years');
    console.log(age == 0 ? age++:age);
    this.controls.age.setValue(age);
    this.controls.age.updateValueAndValidity();
  }

  getImg(age ,sexe){
    let IMG = "";
    if (sexe === "Femme") {

      if (age < 12)
        IMG = './assets/img/avatars/icon_girl-512.png';
      else if (age >= 12 && age <= 20)
        IMG = './assets/img/avatars/girl.png';
      else if (age > 20 && age <= 50)
        IMG = './assets/img/avatars/034-user-6.png';
      else
        IMG = './assets/img/avatars/019-social-1.png';
    }
    else {
      if (age < 12)
        IMG = './assets/img/avatars/icon_boy-512.png';
      else if (age >= 12 && age <= 20)
        IMG = './assets/img/avatars/boy.png';
      else if (age > 20 && age <= 50)
        IMG = './assets/img/avatars/043-man-1.png';
      else
        IMG = './assets/img/avatars/042-man-2.png';
    }
    return IMG;
  }

  DeletePatient(){
    let param = new FormData();
    param.append('id',this.patient.numFichPatient);
    this.service.post('SuppPatient',param).subscribe(
      data =>{
        this.territories.fetch({reset: true});
        $('#patientSuppModal').modal('toggle');
        this.toastr.success('Patient supprimé avec succès','Gestion de Patients')
      },err =>{
        this.toastr.error(err.message, 'Erreur');
      }
    )
  }

  getAge_(date){
    return moment().diff(moment(new Date(date), "DD-MM-YYYY"), 'years')
  }

  getNomMedic($event){

    this.controls.nom_med.setValue(null);

    if($event != null && $event.length == 12){
      this.loadData = true;
      let codeCnam = $event.substr(0,2) +"/"+ $event.substr(2,8)+"/"+$event.substr(10,2) ;

      let param ={
        codCnam : codeCnam
      };

      this.service.get('GetMedecinNomByCode',param).subscribe(
        (data:any) => {
          if(data != null){
            console.log(data);
            this.controls.nom_med.setValue(data.nomMedc);
          }
          this.loadData = false;
        },
        err =>{

        }
      )
    }
    this.controls.nom_med.updateValueAndValidity();
  }

  TabChange(mode){
    this.viewMode = mode;
  }

  SetFormValues(){
    if(this.patient !== null){
      this.controls.nom.setValue(this.patient.nom);
      this.controls.prenom.setValue(this.patient.prenom);
      this.controls.Fiche.setValue(this.patient.fichpapier);

      this.dateNaiss = new Date(this.patient.datenaiss);

      this.controls.sexe.setValue(this.patient.sexe);
      this.controls.situation.setValue(this.patient.sutFam);
      this.controls.poid.setValue(this.patient.poids);
      this.controls.adresse.setValue(this.patient.adresse);
      this.controls.ville.setValue(this.patient.ville.ville);

      let param ={
        ville :this.patient.ville.ville
      };

      this.service.get('GetListGouvernorat',param).subscribe(
        (data:any) =>{
          this.gouvernoratid = null;
          this.gouvernorats = data;
          this.controls.gouvernorat.setValue(this.patient.ville.codeVille);
        },
        err =>{

        }
      );


      if(this.patient.profession !== ''){
        this.controls.profession.setValue(this.patient.profession);
        this.controls.profession.updateValueAndValidity();
      }


      if(this.patient.fixe !== ''){
        this.controls.fixe.setValue(this.patient.fixe);
        this.controls.fixe.updateValueAndValidity();
      }


      if(this.patient.gsm !== ''){
        this.controls.gsm.setValue(this.patient.gsm);
        this.controls.gsm.updateValueAndValidity();
      }


      if(this.patient.autreAssur !== ''){
        this.controls.AutAssur.setValue(this.patient.autreAssur);
        $('#collapseAssurance').toggle();
        this.CollapseAuttrVal=true;
        this.controls.AutAssur.setValidators([Validators.required]);
        this.controls.AutAssur.updateValueAndValidity();
      }

      if(this.patient.numAssur !== '0'){
        this.controls.code_cnam.setValue((this.patient.assurCnam.codCnam).replace(/\//g, ""));
        this.controls.rang.setValue(this.patient.assurCnam.rangAssur);
        this.controls.ty_assur.setValue(this.patient.assurCnam.type);
        this.dateValid = new Date(this.patient.assurCnam.dateValid);
        this.controls.qual_assur.setValue(this.patient.assurCnam.qualite);
        this.controls.id_unique.setValue(this.patient.assurCnam.identUnique);
        this.controls.regime_aff.setValue(this.patient.assurCnam.regimeAffi);

        $('#collapseAssur').toggle();
        this.CollapseAssurCnamVal=true;

        this.controls.code_cnam.setValidators([Validators.required, Validators.minLength(12)]);
        this.controls.nom_med.setValidators([Validators.required]);
        this.controls.rang.setValidators([Validators.required, Validators.minLength(2)]);
        this.controls.ty_assur.setValidators([Validators.required]);
        this.controls.date_valid.setValidators([Validators.required]);
        this.controls.qual_assur.setValidators([Validators.required]);
        this.controls.id_unique.setValidators([Validators.required, Validators.minLength(10)]);
        this.controls.regime_aff.setValidators([Validators.required]);

        this.controls.code_cnam.updateValueAndValidity();
        this.controls.nom_med.updateValueAndValidity();
        this.controls.rang.updateValueAndValidity();
        this.controls.ty_assur.updateValueAndValidity();
        this.controls.date_valid.updateValueAndValidity();
        this.controls.qual_assur.updateValueAndValidity();
        this.controls.id_unique.updateValueAndValidity();
        this.controls.regime_aff.updateValueAndValidity();

        if(this.patient.typeApci !== '' && this.patient.codeApci !== ''){
          this.controls.code_apci.setValue(this.patient.codeApci);
          this.controls.ty_apci.setValue(this.patient.typeApci);
          this.dateValidApci = new Date(this.patient.dateValid);

          $('#collapseapci').toggle();
          this.CollapseAPCIVal = true;

          this.controls.code_apci.setValidators([Validators.required, Validators.minLength(4)]);
          this.controls.date_valid_apci.setValidators([Validators.required]);
          this.controls.ty_apci.setValidators([Validators.required]);

          let param = {
            numPatient:this.patient.numFichPatient
          };

          this.service.get('getListTraitApciByPatient',param).subscribe(
            (dataApci:any) =>{
              if(dataApci != null){
                (this.formData as FormArray).removeAt(0);
                for(let item of dataApci) {
                  let traitAapciDescp = item.description.toString().split(' ');
                  let itemAPCI = this.formBuilder.group({
                    name: [item.medicament ,[Validators.required]],
                    Posologie0: [traitAapciDescp[0].trim(),[Validators.required]],
                    Posologie1: [traitAapciDescp[1].trim(),[Validators.required]],
                    Posologie2: [traitAapciDescp[3].trim(),[Validators.required]],
                    Posologie3: [traitAapciDescp[5].trim(),[Validators.required]],
                    Posologie4: [traitAapciDescp[7].trim(),[Validators.required]],
                    Posologie5: [traitAapciDescp[8].trim(),[Validators.required]]
                  });
                  (this.formData as FormArray).push(itemAPCI);
                }
              }

            },err =>{

            }
          );

        }
      }



      this.controls.nom.updateValueAndValidity();
      this.controls.prenom.updateValueAndValidity();
      this.controls.Fiche.updateValueAndValidity();
      this.controls.sexe.updateValueAndValidity();
      this.controls.situation.updateValueAndValidity();
      this.controls.poid.updateValueAndValidity();
      this.controls.adresse.updateValueAndValidity();
      this.controls.ville.updateValueAndValidity();
      this.controls.gouvernorat.updateValueAndValidity();
    }

  }

  ResetFormPatient(){

    let groupItems:any = (this.formData as FormArray);
    for(let item in groupItems){
      let index = Number(item);
      (this.formData as FormArray).removeAt(index);
    }
    this.dateNaiss =new Date();
    this.dateValid =new Date();
    this.dateValidApci =new Date();

    if(this.CollapseAssurCnamVal){

      $('#collapseAssur').toggle();
      console.log('close');
      this.CollapseAssurCnamVal=false;
      this.controls.code_cnam.setValidators(null);
      this.controls.nom_med.setValidators(null);
      this.controls.rang.setValidators(null);
      this.controls.ty_assur.setValidators(null);
      this.controls.date_valid.setValidators(null);
      this.controls.qual_assur.setValidators(null);
      this.controls.id_unique.setValidators(null);
      this.controls.regime_aff.setValidators(null);

      this.controls.code_cnam.updateValueAndValidity();
      this.controls.nom_med.updateValueAndValidity();
      this.controls.rang.updateValueAndValidity();
      this.controls.ty_assur.updateValueAndValidity();
      this.controls.date_valid.updateValueAndValidity();
      this.controls.qual_assur.updateValueAndValidity();
      this.controls.id_unique.updateValueAndValidity();
      this.controls.regime_aff.updateValueAndValidity();

      if(this.CollapseAPCIVal){

        $('#collapseapci').toggle();
        console.log('close');
        this.CollapseAPCIVal=false;
        this.controls.code_apci.setValidators(null);
        this.controls.date_valid_apci.setValidators(null);
        this.controls.ty_apci.setValidators(null);

        this.controls.code_apci.updateValueAndValidity();
        this.controls.date_valid_apci.updateValueAndValidity();
        this.controls.ty_apci.updateValueAndValidity();
      }
    }



    if(this.CollapseAuttrVal){

      $('#collapseAssurance').toggle();
      console.log('close');
      this.CollapseAuttrVal = false;
      this.controls.AutAssur.setValidators(null);
      this.controls.AutAssur.updateValueAndValidity();
    }

    this.viewMode = 'consult';
  }

  CollapseToggle(div){
    let $header = $(div);
    //getting the next element
    let $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
      //execute this after slideToggle is done
      //change text of header based on visibility of content div
      $header.text(function () {
        //change text based on condition
        return $content.is(":visible") ? "Collapse" : "Expand";
      });
    });
  }

>>>>>>> second commit
}

