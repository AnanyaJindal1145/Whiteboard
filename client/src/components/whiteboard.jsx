
//full page whiteboard
import React, { Component } from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import { render } from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import { io } from 'socket.io-client';
import { connect } from 'react-redux';
import { setRoomId } from '../actions/roomActions';
import { setSocket } from '../actions/socketActions';
import { setCanvas } from '../actions/canvasActions';
import { setShapes } from '../actions/shapeActions';
import { setUsers } from '../actions/userActions';
import { setMessages } from '../actions/messageActions';
import { setVideo } from '../actions/videoActions';
import { setAudio } from '../actions/audioActions';
import { setScreen } from '../actions/screenActions';
import { setChat } from '../actions/chatActions';
import { setWhiteboard } from '../actions/whiteboardActions';
import { setVideoChat } from '../actions/videoChatActions';
import { setAudioChat } from '../actions/audioChatActions';
import { setScreenShare } from '../actions/screenShareActions';

