package com.thaisoftplus.mk.util;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ErrorMessageUtil {
    public static String getExceptionMessages(Throwable throwable) {
        return getExceptionMessageChain(throwable).stream().map(n -> String.valueOf(n)) //
                .collect(Collectors.joining("\n"));
    }

    private static List<String> getExceptionMessageChain(Throwable throwable) {
        List<String> result = new ArrayList<>();
        while (throwable != null) {
            result.add(throwable.getMessage());
            throwable = throwable.getCause();
        }
        return result;
    }
}
