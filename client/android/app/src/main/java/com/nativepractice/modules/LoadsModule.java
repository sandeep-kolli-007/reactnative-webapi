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
import io.grpc.examples.loads.LoadsGrpc;
import io.grpc.examples.loads.LoadsResponse;
import io.grpc.examples.loads.LoadsRequest;
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

import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;

public class LoadsModule extends ReactContextBaseJavaModule {
    private ManagedChannel channel;
    private String Host = "10.0.2.2:7034";

    public LoadsModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "LoadsModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String Message(String name,Callback callback) {
        try {
    channel = ManagedChannelBuilder.forAddress("10.0.2.2", 5034).usePlaintext().build();
    LoadsGrpc.LoadsBlockingStub stub = LoadsGrpc.newBlockingStub(channel);
    LoadsRequest request = LoadsRequest.newBuilder().setShipmentNumber("s").build();
    LoadsResponse reply = stub.getLoads(request);


    
    WritableArray data = Arguments.createArray();
    for (int i=0;i<reply.getLoadsCount();i++){



        WritableArray image = Arguments.createArray();
        for (int j=0;j<reply.getLoads(i).getImagesCount();j++){
             WritableMap  mappableimages = Arguments.createMap();
            mappableimages.putString("imageurl", reply.getLoads(i).getImages(j).getImageurl());
            mappableimages.putDouble("length", reply.getLoads(i).getImages(j).getLength());
            mappableimages.putDouble("width", reply.getLoads(i).getImages(j).getWidth());
            mappableimages.putDouble("height", reply.getLoads(i).getImages(j).getHeight());
            mappableimages.putString("confirmPieceType", reply.getLoads(i).getImages(j).getConfirmPieceType());
            mappableimages.putDouble("stackQuantity", reply.getLoads(i).getImages(j).getStackQuantity());
            mappableimages.putDouble("selected", reply.getLoads(i).getImages(j).getSelected());
            image.pushMap(mappableimages);
        }


        WritableMap  mappable = Arguments.createMap();
       mappable.putString("loadNumber", reply.getLoads(i).getLoadNumber());
      mappable.putString("shipmentNumber", reply.getLoads(i).getShipmentNumber());
      mappable.putString("pieceId", reply.getLoads(i).getPieceId());
      mappable.putString("pieceState", reply.getLoads(i).getPieceState());
      mappable.putDouble("productNumber", reply.getLoads(i).getProductNumber());
      mappable.putString("vendor", reply.getLoads(i).getVendor());
      mappable.putDouble("master", reply.getLoads(i).getMaster());
      mappable.putDouble("quantity", reply.getLoads(i).getQuantity());
      mappable.putDouble("noOfPiecesOver", reply.getLoads(i).getNoOfPiecesOver());
      mappable.putString("overagePieceType", reply.getLoads(i).getOveragePieceType());
      mappable.putString("pieceTypeImage", reply.getLoads(i).getPieceTypeImage());
      mappable.putString("shipmentLabelImage", reply.getLoads(i).getShipmentLabelImage());
      mappable.putString("productLabelImage", reply.getLoads(i).getProductLabelImage());
      mappable.putString("ltlProImage", reply.getLoads(i).getLtlProImage());
      mappable.putString("damageImages", reply.getLoads(i).getDamageImages());
      mappable.putString("damageLevel", reply.getLoads(i).getDamageLevel());
      mappable.putString("damageType", reply.getLoads(i).getDamageType());
      mappable.putString("notes", reply.getLoads(i).getNotes());
      mappable.putString("type", reply.getLoads(i).getType());
      mappable.putArray("images",image);
       

//      mappable.putString("images", reply.getLoads(i).);
      data.pushMap(mappable);
  }
  callback.invoke(data);
    return reply.toString();
  } catch (Exception e) {
    StringWriter sw = new StringWriter();
    PrintWriter pw = new PrintWriter(sw);
    e.printStackTrace(pw);
    pw.flush();
    return String.format("Failed... : %n%s", sw);
        }
    }

    // @ReactMethod
    // public void test(Callback callback) {
    // WritableMap map = Arguments.createMap();
    //
    // map.putString("LoadNumber", "yourValue");
    //
    // callback.invoke(map);
    // }
    // @Override
    // protected void onPostExecute(String result) {
    // try {
    // channel.shutdown().awaitTermination(1, TimeUnit.SECONDS);
    // } catch (InterruptedException e) {
    // Thread.currentThread().interrupt();
    // }

    // }
}