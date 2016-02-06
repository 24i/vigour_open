package io.vigour.plugin.example;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

import butterknife.Bind;
import butterknife.ButterKnife;
import butterknife.OnClick;
import io.vigour.nativewrapper.plugin.core.BridgeEvents;
import io.vigour.plugin.open.OpenPlugin;
import rx.Observer;

public class MainActivity extends AppCompatActivity {

    OpenPlugin plugin;
    @Bind(R.id.output) TextView outputView;
    @Bind(R.id.event) TextView eventView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);

        plugin = new OpenPlugin(this);
        plugin.setEventInterface(new BridgeEvents() {

            @Override public void receive(String event, String data, String pluginId) {
                eventView.setText(event + ": " + data);
                eventView.setTextColor(0x99000000);
            }
        });

        feedback(plugin.init("whatever1234"));

    }

    @Override protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        plugin.onActivityResult(requestCode, resultCode, data);
    }

    @OnClick(R.id.logout)
    public void logout() {
        feedback(plugin.logout());
    }

    @OnClick(R.id.open)
    public void open() {
        feedback(plugin.open("vigour.io"));
    }

    private void feedback(String message) {
        outputView.setText(message);
    }
}
