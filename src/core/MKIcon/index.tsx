import { FC, SVGProps } from 'react';
import classNames from 'classnames';

import { ReactComponent as AddressBookSvg } from 'assets/icons/address-book.svg';
import { ReactComponent as AddressCardSvg } from 'assets/icons/address-card.svg';
import { ReactComponent as BellSvg } from 'assets/icons/bell.svg';
import { ReactComponent as BellSlashSvg } from 'assets/icons/bell-slash.svg';
import { ReactComponent as CalendarSvg } from 'assets/icons/calendar.svg';
import { ReactComponent as CalendarCheckSvg } from 'assets/icons/calendar-check.svg';
import { ReactComponent as CalendarMinusSvg } from 'assets/icons/calendar-minus.svg';
import { ReactComponent as CalendarPlusSvg } from 'assets/icons/calendar-plus.svg';
import { ReactComponent as CalendarXMarkSvg } from 'assets/icons/calendar-xmark.svg';
import { ReactComponent as ChartBarSvg } from 'assets/icons/chart-bar.svg';
import { ReactComponent as ChessBishopSvg } from 'assets/icons/chess-bishop.svg';
import { ReactComponent as ChessKingSvg } from 'assets/icons/chess-king.svg';
import { ReactComponent as ChessKnightSvg } from 'assets/icons/chess-knight.svg';
import { ReactComponent as ChessPawnSvg } from 'assets/icons/chess-pawn.svg';
import { ReactComponent as ChessQueenSvg } from 'assets/icons/chess-queen.svg';
import { ReactComponent as ChessRookSvg } from 'assets/icons/chess-rook.svg';
import { ReactComponent as CircleSvg } from 'assets/icons/circle.svg';
import { ReactComponent as CircleCheckSvg } from 'assets/icons/circle-check.svg';
import { ReactComponent as CircleDotSvg } from 'assets/icons/circle-dot.svg';
import { ReactComponent as CircleDownSvg } from 'assets/icons/circle-down.svg';
import { ReactComponent as CircleLeftSvg } from 'assets/icons/circle-left.svg';
import { ReactComponent as CirclePauseSvg } from 'assets/icons/circle-pause.svg';
import { ReactComponent as CirclePlaySvg } from 'assets/icons/circle-play.svg';
import { ReactComponent as CircleQuestionSvg } from 'assets/icons/circle-question.svg';
import { ReactComponent as CircleStopSvg } from 'assets/icons/circle-stop.svg';
import { ReactComponent as CircleUpSvg } from 'assets/icons/circle-up.svg';
import { ReactComponent as CircleUseSvg } from 'assets/icons/circle-user.svg';
import { ReactComponent as CircleXmarkSvg } from 'assets/icons/circle-xmark.svg';
import { ReactComponent as ClipboardSvg } from 'assets/icons/clipboard.svg';
import { ReactComponent as ClockSvg } from 'assets/icons/clock.svg';
import { ReactComponent as ClosedCaptioningSvg } from 'assets/icons/closed-captioning.svg';
import { ReactComponent as CommentDotsSvg } from 'assets/icons/comment-dots.svg';
import { ReactComponent as CommentsSvg } from 'assets/icons/comments.svg';
import { ReactComponent as CommentSvg } from 'assets/icons/comment.svg';
import { ReactComponent as CompassSvg } from 'assets/icons/compass.svg';
import { ReactComponent as CopySvg } from 'assets/icons/copy.svg';
import { ReactComponent as CopyRightSvg } from 'assets/icons/copyright.svg';
import { ReactComponent as CreditCardSvg } from 'assets/icons/credit-card.svg';
import { ReactComponent as EnvelopeSvg } from 'assets/icons/envelope.svg';
import { ReactComponent as EnvelopeOpenSvg } from 'assets/icons/envelope-open.svg';
import { ReactComponent as EyeSvg } from 'assets/icons/eye.svg';
import { ReactComponent as EyeSlashSvg } from 'assets/icons/eye-slash.svg';
import { ReactComponent as FaceAngrySvg } from 'assets/icons/face-angry.svg';
import { ReactComponent as FaceDizzySvg } from 'assets/icons/face-dizzy.svg';
import { ReactComponent as FaceFlushedSvg } from 'assets/icons/face-flushed.svg';
import { ReactComponent as FaceFrownSvg } from 'assets/icons/face-frown.svg';
import { ReactComponent as FaceFrownOpenSvg } from 'assets/icons/face-frown-open.svg';
import { ReactComponent as FaceGrinBeamSvg } from 'assets/icons/face-grin-beam.svg';
import { ReactComponent as FaceGrinBeamSweatSvg } from 'assets/icons/face-grin-beam-sweat.svg';
import { ReactComponent as FaceGrinHeartSvg } from 'assets/icons/face-grin-hearts.svg';
import { ReactComponent as FaceGrinSquintSvg } from 'assets/icons/face-grin-squint.svg';
import { ReactComponent as FaceGrinSquintTearsSvg } from 'assets/icons/face-grin-squint-tears.svg';
import { ReactComponent as FaceGrinStartsSvg } from 'assets/icons/face-grin-stars.svg';
import { ReactComponent as FaceGrinTearsSvg } from 'assets/icons/face-grin-tears.svg';
import { ReactComponent as FaceGrinTongueSvg } from 'assets/icons/face-grin-tongue.svg';
import { ReactComponent as FaceGrinTongueSquintSvg } from 'assets/icons/face-grin-tongue-squint.svg';
import { ReactComponent as FaceGrinTongueWinkSvg } from 'assets/icons/face-grin-tongue-wink.svg';
import { ReactComponent as FaceGrinWideSvg } from 'assets/icons/face-grin-wide.svg';
import { ReactComponent as FaceGrinWinkSvg } from 'assets/icons/face-grin-wink.svg';
import { ReactComponent as FaceKissSvg } from 'assets/icons/face-kiss.svg';
import { ReactComponent as FaceKissBeamSvg } from 'assets/icons/face-kiss-beam.svg';
import { ReactComponent as FaceKissWinkHeartSvg } from 'assets/icons/face-kiss-wink-heart.svg';
import { ReactComponent as FaceLaughSvg } from 'assets/icons/face-laugh.svg';
import { ReactComponent as FaceLaughBeamSvg } from 'assets/icons/face-laugh-beam.svg';
import { ReactComponent as FaceLaughSquintSvg } from 'assets/icons/face-laugh-squint.svg';
import { ReactComponent as FaceLaughWinkSvg } from 'assets/icons/face-laugh-wink.svg';
import { ReactComponent as FaceMehSvg } from 'assets/icons/face-meh.svg';
import { ReactComponent as FaceMehBlankSvg } from 'assets/icons/face-meh-blank.svg';
import { ReactComponent as FaceRollingEyesSvg } from 'assets/icons/face-rolling-eyes.svg';
import { ReactComponent as FaceSadCrySvg } from 'assets/icons/face-sad-cry.svg';
import { ReactComponent as FaceSadTearSvg } from 'assets/icons/face-sad-tear.svg';
import { ReactComponent as FaceSmileSvg } from 'assets/icons/face-smile.svg';
import { ReactComponent as FaceSmileBeamSvg } from 'assets/icons/face-smile-beam.svg';
import { ReactComponent as FaceSurpriseSvg } from 'assets/icons/face-surprise.svg';
import { ReactComponent as FaceTiredSvg } from 'assets/icons/face-tired.svg';
import { ReactComponent as FileSvg } from 'assets/icons/file.svg';
import { ReactComponent as FileAudioSvg } from 'assets/icons/file-audio.svg';
import { ReactComponent as FileCodeSvg } from 'assets/icons/file-code.svg';
import { ReactComponent as FileExcelSvg } from 'assets/icons/file-excel.svg';
import { ReactComponent as FileImageSvg } from 'assets/icons/file-image.svg';
import { ReactComponent as FileLinesSvg } from 'assets/icons/file-lines.svg';
import { ReactComponent as FilePdfSvg } from 'assets/icons/file-pdf.svg';
import { ReactComponent as FilePowerpointSvg } from 'assets/icons/file-powerpoint.svg';
import { ReactComponent as FileWordSvg } from 'assets/icons/file-word.svg';
import { ReactComponent as FileZipperSvg } from 'assets/icons/file-zipper.svg';
import { ReactComponent as FolderSvg } from 'assets/icons/folder.svg';
import { ReactComponent as FolderClosedSvg } from 'assets/icons/folder-closed.svg';
import { ReactComponent as FootballSvg } from 'assets/icons/football.svg';
import { ReactComponent as GemSvg } from 'assets/icons/gem.svg';
import { ReactComponent as HandSvg } from 'assets/icons/hand.svg';
import { ReactComponent as HandBackFistSvg } from 'assets/icons/hand-back-fist.svg';
import { ReactComponent as HandLizardSvg } from 'assets/icons/hand-lizard.svg';
import { ReactComponent as HandPeaceSvg } from 'assets/icons/hand-peace.svg';
import { ReactComponent as HandPointDownSvg } from 'assets/icons/hand-point-down.svg';
import { ReactComponent as HandPointUpSvg } from 'assets/icons/hand-point-up.svg';
import { ReactComponent as HandPointLeftSvg } from 'assets/icons/hand-point-left.svg';
import { ReactComponent as HandPointRightSvg } from 'assets/icons/hand-point-right.svg';
import { ReactComponent as HandPointerSvg } from 'assets/icons/hand-pointer.svg';
import { ReactComponent as HandScissorsSvg } from 'assets/icons/hand-scissors.svg';
import { ReactComponent as HandPockSvg } from 'assets/icons/hand-spock.svg';
import { ReactComponent as HandShaeSvg } from 'assets/icons/handshake.svg';
import { ReactComponent as HandDriveSvg } from 'assets/icons/hard-drive.svg';
import { ReactComponent as HeartSvg } from 'assets/icons/heart.svg';
import { ReactComponent as HospitalSvg } from 'assets/icons/hospital.svg';
import { ReactComponent as HourGlassSvg } from 'assets/icons/hourglass.svg';
import { ReactComponent as HourGlassHalfSvg } from 'assets/icons/hourglass-half.svg';

import './style.scss';

const SVG_ICONS = {
  [`address-book`]: AddressBookSvg,
  [`address-card`]: AddressCardSvg,
  [`bell`]: BellSvg,
  [`bell-slash`]: BellSlashSvg,
  [`calendar`]: CalendarSvg,
  [`calendar-check`]: CalendarCheckSvg,
  [`calendar-minus`]: CalendarMinusSvg,
  [`calendar-plus`]: CalendarPlusSvg,
  [`calendar-xmark`]: CalendarXMarkSvg,
  [`chart-bar`]: ChartBarSvg,
  [`chess-bishop`]: ChessBishopSvg,
  [`chess-king`]: ChessKingSvg,
  [`chess-pawn`]: ChessPawnSvg,
  [`chess-knight`]: ChessKnightSvg,
  [`chess-queen`]: ChessQueenSvg,
  [`chess-rook`]: ChessRookSvg,
  [`circle`]: CircleSvg,
  [`circle-check`]: CircleCheckSvg,
  [`circle-dot`]: CircleDotSvg,
  [`circle-down`]: CircleDownSvg,
  [`circle-left`]: CircleLeftSvg,
  [`circle-pause`]: CirclePauseSvg,
  [`circle-play`]: CirclePlaySvg,
  [`circle-question`]: CircleQuestionSvg,
  [`circle-stop`]: CircleStopSvg,
  [`circle-up`]: CircleUpSvg,
  [`circle-user`]: CircleUseSvg,
  [`circle-xmark`]: CircleXmarkSvg,
  [`clipboard`]: ClipboardSvg,
  [`clock`]: ClockSvg,
  [`clone`]: ClockSvg,
  [`closed-captioning`]: ClosedCaptioningSvg,
  [`comments`]: CommentsSvg,
  [`comments-dots`]: CommentDotsSvg,
  [`comment`]: CommentSvg,
  [`compass`]: CompassSvg,
  [`copy`]: CopySvg,
  [`copyright`]: CopyRightSvg,
  [`credit-card`]: CreditCardSvg,
  [`envelope`]: EnvelopeSvg,
  [`envelope-open`]: EnvelopeOpenSvg,
  [`eye`]: EyeSvg,
  [`eye-slash`]: EyeSlashSvg,
  [`face-angry`]: FaceAngrySvg,
  [`face-dizzy`]: FaceDizzySvg,
  [`face-flushed`]: FaceFlushedSvg,
  [`face-frown`]: FaceFrownSvg,
  [`face-frown-open`]: FaceFrownOpenSvg,
  [`face-grin-beam-sweat`]: FaceGrinBeamSweatSvg,
  [`face-grin-heart`]: FaceGrinHeartSvg,
  [`face-green-beam`]: FaceGrinBeamSvg,
  [`face-grin-squint`]: FaceGrinSquintSvg,
  [`face-grin-squint-tears`]: FaceGrinSquintTearsSvg,
  [`face-grin-starts`]: FaceGrinStartsSvg,
  [`face-grin-tears`]: FaceGrinTearsSvg,
  [`face-grin-tongue`]: FaceGrinTongueSvg,
  [`face-grin-tongue-wink`]: FaceGrinTongueWinkSvg,
  [`face-grin-tongue-squint`]: FaceGrinTongueSquintSvg,
  [`face-grin-wide`]: FaceGrinWideSvg,
  [`face-grin-wink`]: FaceGrinWinkSvg,
  [`face-kiss`]: FaceKissSvg,
  [`face-kiss-beam`]: FaceKissBeamSvg,
  [`face-kiss-wink-heart`]: FaceKissWinkHeartSvg,
  [`face-laugh`]: FaceLaughSvg,
  [`face-laugh-beam`]: FaceLaughBeamSvg,
  [`face-laugh-squint`]: FaceLaughSquintSvg,
  [`face-laugh-wink`]: FaceLaughWinkSvg,
  [`face-meh`]: FaceMehSvg,
  [`face-meh-blank`]: FaceMehBlankSvg,
  [`face-rolling-eyes`]: FaceRollingEyesSvg,
  [`face-sad-cry`]: FaceSadCrySvg,
  [`face-sad-tear`]: FaceSadTearSvg,
  [`face-smile`]: FaceSmileSvg,
  [`face-smile-beam`]: FaceSmileBeamSvg,
  [`face-surprise`]: FaceSurpriseSvg,
  [`face-tired`]: FaceTiredSvg,
  [`file`]: FileSvg,
  [`file-audio`]: FileAudioSvg,
  [`file-code`]: FileCodeSvg,
  [`file-excel`]: FileExcelSvg,
  [`file-image`]: FileImageSvg,
  [`file-lines`]: FileLinesSvg,
  [`file-pdf`]: FilePdfSvg,
  [`file-powerpoint`]: FilePowerpointSvg,
  [`file-word`]: FileWordSvg,
  [`file-zipper`]: FileZipperSvg,
  [`folder`]: FolderSvg,
  [`folder-closed`]: FolderClosedSvg,
  [`football`]: FootballSvg,
  [`gem`]: GemSvg,
  [`hand`]: HandSvg,
  [`hand-back-fist`]: HandBackFistSvg,
  [`hand-lizard`]: HandLizardSvg,
  [`hand-peace`]: HandPeaceSvg,
  [`hand-point-down`]: HandPointDownSvg,
  [`hand-point-up`]: HandPointUpSvg,
  [`hand-point-left`]: HandPointLeftSvg,
  [`hand-point-right`]: HandPointRightSvg,
  [`hand-pointer`]: HandPointerSvg,
  [`hand-scissors`]: HandScissorsSvg,
  [`hand-spock`]: HandPockSvg,
  [`handshake`]: HandShaeSvg,
  [`hard-drive`]: HandDriveSvg,
  [`heart`]: HeartSvg,
  [`hospital`]: HospitalSvg,
  [`hourglass`]: HourGlassSvg,
  [`hourglass-half`]: HourGlassHalfSvg,
};

export interface MKIconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof SVG_ICONS;
  className?: string;
}

export const MKIcon: FC<MKIconProps> = ({ name, className = '', ...props }) => {
  const Icon = SVG_ICONS[name];
  return (
    <span className={classNames('mk-svg-icon', className)}>
      <Icon {...props} />
    </span>
  );
};
