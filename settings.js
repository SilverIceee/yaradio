"use strict";
const electron = require("electron");
const path = require("path");
const ElectronPreferences = require("electron-preferences");

module.exports = new ElectronPreferences({
    /**
     * Where should preferences be saved?
     */
	'dataStore': path.resolve(electron.app.getPath("userData"), "preferences.json"),
    /**
     * Default values.
     */
	'defaults': {
		lastWindowState: {
			x: 0,
			y: 0,
			width: 800,
			height: 700
		},
		element: {
			prefButton: ".page-root .settings",
			prefDialog: ".page-root .settings-stream.popup",
			mute: ".page-root .volume__icon",
			play: ".page-station .player-controls__play",
			next: ".page-station .slider__item_next",
			like: ".page-station .button.like_action_like",
			dislike: ".page-station .button.like_action_dislike",
			activeStation: ".page-index .station_playing"
		},
		keyboard: {
			dislike: "Super+PageDown",
			like: "Super+PageUp",
			mute: "",
			next: "MediaNextTrack",
			play: "MediaPlayPause"
		},
		window: {
			controlsBehavior: [
				"trayOnMinimize"
			]
		}
	},
    /**
     * If the `onLoad` method is specified, this function will be called immediately after
     * preferences are loaded for the first time. The return value of this method will be stored as the
     * preferences object.
     */
	'onLoad': (preferences) => {
		// ...
		return preferences;
	},
    /**
     * The preferences window is divided into sections. Each section has a label, an icon, and one or
     * more fields associated with it. Each section should also be given a unique ID.
     */
	'sections': [
		{
			'id': "window",
			'label': "Window",
			'icon': "widget",
			'form': {
				'groups': [
					{
						'label': "Behavior",
						'fields': [
							{
								'label': "Choose window controls behavior:",
								'key': "controlsBehavior",
								'type': "checkbox",
								'options': [
									{ 'label': "Minimize to tray on window close", 'value': "trayOnClose" },
									{ 'label': "Minimize to tray on window minimize", 'value': "trayOnMinimize" }
								]
							}
						]
					}
				]
			}
		},
		{
			'id': "keyboard",
			'label': "Keyboard shortcuts",
			'icon': "flash-21",
			'form': {
				'groups': [
					{
						'label': "Keyboard shortcuts",
						'fields': [
							{
								'label': "Play",
								'key': "play",
								'type': "text"
							},
							{
								'label': "Next",
								'key': "next",
								'type': "text"
							},
							{
								'label': "Like",
								'key': "like",
								'type': "text"
							},
							{
								'label': "Dislike",
								'key': "dislike",
								'type': "text"
							},
							{
								'label': "Mute",
								'key': "mute",
								'type': "text"
							}
						]
					}
				]
			}
		}
	]
});