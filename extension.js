import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class PillPanelExtension extends Extension {
    enable() {
        this._panel = Main.panel;
        this._panelBox = Main.layoutManager.panelBox;

        this._panel.add_style_class_name('pill-panel');
        this._panelBox.add_style_class_name('pill-panel-box');
    }

    disable() {
        this._panel?.remove_style_class_name('pill-panel');
        this._panelBox?.remove_style_class_name('pill-panel-box');

        this._panel = null;
        this._panelBox = null;
    }
}
