import { Component, AfterViewInit } from '@angular/core';

declare var $: any;  // Déclaration pour utiliser jQuery dans Angular

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    $(document).ready(function() {
      $('#example').DataTable({
        language: {
          processing: "Traitement en cours...",
          search: "Rechercher&nbsp;:",
          lengthMenu: "Afficher _MENU_ &eacute;l&eacute;ments",
          info: "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
          infoEmpty: "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
          infoFiltered: "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
          infoPostFix: "",
          loadingRecords: "Chargement en cours...",
          zeroRecords: "Aucun &eacute;l&eacute;ment &agrave; afficher",
          emptyTable: "Aucune donnée disponible dans le tableau",
          paginate: {
            first: "<<",
            previous: "Last",
            next: "Next",
            last: ">>"
          },
          aria: {
            sortAscending: ": activer pour trier la colonne par ordre croissant",
            sortDescending: ": activer pour trier la colonne par ordre décroissant"
          }
        }
      });
    });
  }
}
