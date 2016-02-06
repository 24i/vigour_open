package io.vigour.plugin.open;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;

import com.open.CallbackManager;
import com.open.OpenCallback;
import com.open.OpenException;
import com.fasterxml.jackson.jr.ob.JSON;

import java.io.IOException;
import java.util.Arrays;
import java.util.Map;

import io.vigour.nativewrapper.plugin.core.ActivityResultListener;
import io.vigour.nativewrapper.plugin.core.Plugin;
import rx.Observable;
import rx.Subscriber;

public class OpenPlugin extends Plugin implements ActivityResultListener {
    private static final String NAME = "open";
    private static final String TAG = NAME;
    Activity activity;
    private LoginManager loginManager;
    public CallbackManager callbackManager;
    OpenStatus status = new OpenStatus(); // wtf

    public OpenPlugin(Activity context) {
        super(NAME);
        activity = context;
    }

    public String init(Object key) {
        Log.d(TAG, "init called, args: " + key);

    public String open(Map<String, Object> args) {
        Log.d(TAG, "url called, args: " + args);
        String url = args.get("url").toString();

        return getString('wtf', url);
    }

    @Override public void onActivityResult(int requestCode, int resultCode, Object data) {
        Log.i(TAG, "onactivityresult");
        callbackManager.onActivityResult(requestCode, resultCode, (Intent) data);
    }
}
