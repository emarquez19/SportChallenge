import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {

    this.dtOptions = {
      // pagingType: 'full_numbers',
      pageLength: 8,
      lengthChange: false,
      info: false,
      language: {
        'sProcessing':     'Procesando...',
        'sLengthMenu':     'Mostrar _MENU_ registros',
        'sZeroRecords':    'No se encontraron resultados',
        'sEmptyTable':     'Ningún dato disponible en esta tabla',
        'sInfo':           'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
        'sInfoEmpty':      'Mostrando registros del 0 al 0 de un total de 0 registros',
        'sInfoFiltered':   '(filtrado de un total de _MAX_ registros)',
        'sInfoPostFix':    '',
        'sSearch':         'Buscar:',
        'sUrl':            '',
        'sInfoThousands':  ',',
        'sLoadingRecords': 'Cargando...',
        'oPaginate': {
            'sFirst':    'Primero',
            'sLast':     'Último',
            'sNext':     'Siguiente',
            'sPrevious': 'Anterior'
        },
        'oAria': {
            'sSortAscending':  ': Activar para ordenar la columna de manera ascendente',
            'sSortDescending': ': Activar para ordenar la columna de manera descendente'
        }
    }
    };
  }
}
