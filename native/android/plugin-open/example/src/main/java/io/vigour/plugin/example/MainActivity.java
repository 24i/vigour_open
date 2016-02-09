package io.vigour.plugin.example;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

import java.util.HashMap;
import java.util.Map;

import butterknife.Bind;
import butterknife.ButterKnife;
import butterknife.OnClick;
import io.vigour.nativewrapper.plugin.core.BridgeEvents;
import io.vigour.plugin.open.OpenPlugin;

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

            @Override public void receive(String event, Object data, String pluginId) {
                eventView.setText(event + ": " + data.toString());
                eventView.setTextColor(0x99000000);
            }
        });

        outputView.setText(plugin.init("whatever1234"));
    }

    @OnClick(R.id.link)
    public void vigour() {
        open("https://vigour.io");
    }

    @OnClick(R.id.noscheme)
    public void noscheme() {
        open("vigour.io");
    }

    @OnClick(R.id.tel)
    public void tel() {
        open("tel:08001234");
    }

    private void open(String url) {
        String response;
        try {
            response = plugin.open(map("url", url));
        } catch(Exception e) {
            e.printStackTrace();
            response = e.getLocalizedMessage();
        }
        outputView.setText(response);
    }

    private Map<String, Object> map(String key, String value) {
        Map<String, Object> map = new HashMap<>();
        map.put(key, value);
        return map;
    }


}
