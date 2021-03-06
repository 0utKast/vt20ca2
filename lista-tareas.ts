import {
  Component,
  Input,
  Pipe,
  Directive,
  PipeTransform,
  OnInit,
  HostListener
} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

/// Modelo interface

interface Task {
  name: string;
  deadline: Date;
  queued: boolean;
  tareasRequeridas: number;
}

/// Servicio de Datos Locales
class TaskService {
  public taskStore: Task[] = [];

  constructor() {
    const tasks = [
      {
        name: "Preparar guión Videotutorial",
        deadline: "03 Nov 2016",
        tareasRequeridas: 2
      }, {
        name: "Buscar imágenes y videos",
        deadline: "03 Nov 2016",
        tareasRequeridas: 1
      }, {
        name: "Grabación Completa",
        deadline: "04 Nov 2016",
        tareasRequeridas: 2
      }, {
        name: "Edición y Producción",
        deadline: "05 Nov 2016",
        tareasRequeridas: 3
      }
    ];
    }
}