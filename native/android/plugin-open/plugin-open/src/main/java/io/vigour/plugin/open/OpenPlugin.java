package io.vigour.plugin.open;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;

import java.util.Map;

import io.vigour.nativewrapper.plugin.core.Plugin;

public class OpenPlugin extends Plugin {
    private static final String NAME = "open";
    private static final String TAG = NAME;

    Activity activity;

    public OpenPlugin(Activity context) {
        super(NAME);
        activity = context;
    }

    public String init(Object key) {
        Log.d(TAG, "init called, args: " + key);
        return "";
    }

    public String open(Map<String, Object> args) {
        Log.d(TAG, "url called, args: " + args);
        String url = args.get("url").toString();
        activity.startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)));
        return "";
    }

}
