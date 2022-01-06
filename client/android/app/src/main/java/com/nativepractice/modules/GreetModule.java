package com.nativepractice.modules;

import android.app.Activity;
import android.content.Context;
import android.os.AsyncTask;
import android.os.Bundle;
import android.text.TextUtils;
import android.text.method.ScrollingMovementMethod;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import io.grpc.examples.helloworld.GreeterGrpc;
import io.grpc.examples.helloworld.HelloReply;
import io.grpc.examples.helloworld.HelloRequest;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.lang.ref.WeakReference;
import java.util.concurrent.TimeUnit;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class GreetModule extends ReactContextBaseJavaModule {
    private ManagedChannel channel;
    private String  Host = "10.0.2.2:7034";
    public GreetModule(ReactApplicationContext context) {
        super(context);
    }



    @Override
    public String getName() {
        return "GreetModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String Message(String name) {
        try {
    //         ManagedChannel channel = AndroidChannelBuilder.forAddress("localhost", 8080)
    // .context(getApplicationContext())
    // .build();
    channel = ManagedChannelBuilder.forAddress("10.0.2.2", 5034).usePlaintext().build();
    GreeterGrpc.GreeterBlockingStub stub = GreeterGrpc.newBlockingStub(channel);
    HelloRequest request = HelloRequest.newBuilder().setName(name).build();
    HelloReply reply = stub.sayHello(request);
    return reply.getMessage();
  } catch (Exception e) {
    StringWriter sw = new StringWriter();
    PrintWriter pw = new PrintWriter(sw);
    e.printStackTrace(pw);
    pw.flush();
    return String.format("Failed... : %n%s", sw);
        }
    }
    // @Override
    // protected void onPostExecute(String result) {
    //   try {
    //     channel.shutdown().awaitTermination(1, TimeUnit.SECONDS);
    //   } catch (InterruptedException e) {
    //     Thread.currentThread().interrupt();
    //   }
     
    // }
}