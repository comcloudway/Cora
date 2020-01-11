
class SHORTCUT {
    constructor() {

    }
    static Builder(data) {
        let { id = "demo_shortcut", shortLabel = "Demo Shortcut", longLabel = "Extended App Name", ifr = "ic_playlist_play_red", pkg = "com.comcloudway.cora",d='myapp://path/to/launch?param=value'}= data;
        let shortcut = {
            id: id,
            shortLabel: shortLabel,
            longLabel: longLabel,
            iconFromResource: ifr, //filename w/o extension of an icon that resides on res/drawable-* (hdpi,mdpi..)
            intent: {
                action: 'android.intent.action.RUN',
                categories: [
                    'android.intent.category.MAIN', // Built-in Android category
                    'SHORTCUT' // Custom categories are also supported
                ],
                flags: 67108864, // FLAG_ACTIVITY_CLEAR_TOP
                data: d, // Must be a well-formed URI
                extras: {
                    'android.intent.extra.SUBJECT': 'SHORTCUT', // Built-in Android extra (string)
                    'pkg': pkg, // Custom extras are also supported (boolean, number and string only)
                }
            }
        }
        return shortcut
    }
    create(template) {
        window.plugins.Shortcuts.addPinned(template,() => {
            return('Shortcuts were applied successfully');
        },  (error) => {
            return('Error: ' + error);
        })
    }
}